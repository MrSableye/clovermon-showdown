import {FS} from "../../lib";
import {Badges} from "./badges";
import {LadderStore} from '../ladders-local';
import {transferTourWins} from "./data-badges";

const TRANSFER_COOLDOWN = 7 * 24 * 60 * 60 * 1000; // 1 week

interface UserTransfer {
	sourceId: string;
	targetId: string;
	isComplete: boolean;
	completed?: number;
}

type Transfers = Record<string, UserTransfer>;

const transfers: Transfers = JSON.parse(
	FS('config/chat-plugins/transfer.json').readIfExistsSync() || "{}"
);

const saveTransfers = () => {
	FS('config/chat-plugins/transfer.json').writeUpdate(() => JSON.stringify(transfers));
};

const checkCooldown = (userId: string) => Object.values(transfers).filter((transfer) => {
	if ((transfer.sourceId !== userId) && (transfer.targetId !== userId)) return false;
	if (!transfer.isComplete) return false;
	if (transfer.completed && ((transfer.completed + TRANSFER_COOLDOWN) < Date.now())) return false;
	return true;
});

const userInBattle = (user: User) => {
	const curBattles: [User, string][] = [...user.inRooms]
		.filter(id => {
			const battle = Rooms.get(id)?.battle;
			return (
				battle && battle.playerTable[user.id]
			);
		})
		.map(id => [user, id]);

	return curBattles.length !== 0;
};

export const commands: Chat.ChatCommands = {
	transfer: {
		start(target, room, user) {
			if (transfers[user.id]) throw new Chat.ErrorMessage('You have already started a transfer. Please use /transfer cancel to cancel it first.');
			const targetId = toID(target);
			if (target.length < 0) {
				throw new Chat.ErrorMessage('Please provide a valid user to transfer to.');
			}
			if (targetId === user.id) throw new Chat.ErrorMessage('You cannot transfer to yourself.');
			if (checkCooldown(user.id)) throw new Chat.ErrorMessage('You have already transferred to another user in the last week. Please wait 7 days between transfers.');
			if (checkCooldown(targetId)) throw new Chat.ErrorMessage('Target user has already transferred to another user in the last week. Please wait 7 days between transfers.');
			transfers[user.id] = {
				sourceId: user.id,
				targetId: targetId,
				isComplete: false,
			};
			saveTransfers();

			return this.sendReplyBox(`Transfer to ${targetId} successfully initiated.`);
		},
		cancel(target, room, user) {
			if (!transfers[user.id]) throw new Chat.ErrorMessage('You have not started a transfer.');
			delete transfers[user.id];
			saveTransfers();

			return this.sendReplyBox('Transfer successfully canceled.');
		},
		async accept(target, room, user) {
			const targetId = toID(target);
			const transfer = transfers[targetId];
			if (!transfer || transfer.targetId !== user.id) throw new Chat.ErrorMessage(`No transfer has been initiated between you and ${targetId}.`);
			if (transfer.isComplete) throw new Chat.ErrorMessage('Transfer has already been completed.');
			if (userInBattle(user)) throw new Chat.ErrorMessage('You cannot accept a transfer while in a battle.');
			if (checkCooldown(user.id)) throw new Chat.ErrorMessage('You have already transferred to another user in the last week. Please wait 7 days between transfers.');
			if (checkCooldown(targetId)) throw new Chat.ErrorMessage('Target user has already transferred to another user in the last week. Please wait 7 days between transfers.');

			const sourceId = transfer.sourceId;

			const updatedRows = await LadderStore.changeName(sourceId, user.name);
			const allBadges = await Badges.getUserBadges(sourceId);

			if (allBadges.length) {
				for (const badge of allBadges) {
					await Badges.removeBadgeFromUser(sourceId, badge.badge_id, user, true);
					await Badges.addBadgeToUser(user.id, badge.badge_id, user, true);
					if (badge.badge_data) {
						await Badges.updateBadgeData(user.id, badge.badge_id, badge.badge_data, user, true);
					}
				}
			}

			await transferTourWins(targetId, user.id, user);

			transfers[targetId].isComplete = true;
			transfers[targetId].completed = Date.now();
			saveTransfers();

			return this.sendReplyBox(`Successfuly transfered ladder data and badges. Raw data: ${JSON.stringify({rating: updatedRows, badges: allBadges})}`);
		},
	},
	transferhelp() {
		this.sendReplyBox(
			`<code>/transfer start [new user]</code>: Begins a transfer of user data from your current user to a desired target user. Use this command on your old user.<br />` +
			`<code>/transfer cancel</code>: Cancels an in-progress transfer started from your current user.<br />` +
			`<code>/transfer accept [old user]</code>: Accepts a transfer from another user to your current user. Use this command on your new user.`
		);
	},
};

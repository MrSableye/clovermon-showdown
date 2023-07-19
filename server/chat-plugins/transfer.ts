import {FS} from "../../lib";
import {Badges} from "./badges";
import {LadderStore} from '../ladders-local';

interface UserTransfer {
	sourceId: string;
	targetId: string;
	isComplete: boolean;
}

type Transfers = Record<string, UserTransfer>;

const transfers: Transfers = JSON.parse(
	FS('config/chat-plugins/transfer.json').readIfExistsSync() || "{}"
);

const saveTransfers = () => {
	FS('config/chat-plugins/transfer.json').writeUpdate(() => JSON.stringify(transfers));
};

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

			transfers[targetId].isComplete = true;
			saveTransfers();

			return this.sendReplyBox(`Successfuly transfered ladder data and badges. Raw data: ${JSON.stringify({ rating: updatedRows, badges: allBadges })}`);
		},
	},
};
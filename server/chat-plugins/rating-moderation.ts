import {runPromote} from '../chat-commands/moderation';
import {Auth} from '../user-groups';

export const commands: ChatCommands = {
	async ratingroompromote(target, room, user, connection, cmd) {
		if (!room) {
			// this command isn't marked as room-only because it's usable in PMs through /invite
			return this.errorReply("This command is only available in rooms");
		}
		this.checkChat();
		if (!target) return this.parse('/help ratingroompromote');

		const [groupSymbol, format, minimumRatingParameter] = target.split(',').map(part => part.trim());
		const formatId = toID(format);
		const minimumRating = +minimumRatingParameter; // TODO: Check if minimum rating is number

		const group = Users.Auth.getGroup(groupSymbol as GroupSymbol);

		if (!Config.groups[groupSymbol] && !Users.Auth.isValidSymbol(groupSymbol)) {
			this.errorReply(`Group '${groupSymbol}' does not exist.`);
			return;
		}
		if (group.globalonly || (group.battleonly && !room.battle)) {
			return this.errorReply(`Group 'room${group.id || groupSymbol}' does not exist as a room rank.`);
		}

		const formatLadder = Ladders(formatId);

		const promotedUsers = [];
		for (const roomUser of Object.values(room.users)) {
			const roomUserRating = await formatLadder.getRating(roomUser.id);
			const shouldModifyRank = Auth.atLeast(groupSymbol as GroupSymbol, room.auth.get(roomUser.id));
			if (shouldModifyRank) {
				const promotionSymbol = roomUserRating >= minimumRating ? groupSymbol : Users.Auth.defaultSymbol();
				try {
					runPromote(user, room, roomUser.id, promotionSymbol as GroupSymbol, roomUser.name);
					promotedUsers.push(roomUser.id);
					roomUser.updateIdentity(room.roomid);
					if (room.subRooms) {
						for (const subRoom of room.subRooms.values()) {
							roomUser.updateIdentity(subRoom.roomid);
						}
					}
				} catch (err) {
					if (err.name?.endsWith('ErrorMessage')) {
						this.errorReply(err.message);
						continue;
					}
					throw err;
				}
			}
		}
		room.saveSettings();
	},
	ratingroompromotehelp: [
		`/ratingpromote [group symbol], [format], [minimum rating] - Promotes/demotes the user(s) to the specified room rank. Requires: @ # &`,
	],
};

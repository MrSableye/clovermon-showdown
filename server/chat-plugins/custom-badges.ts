import {Badges} from './badges';

export const commands: Chat.ChatCommands = {
	amogus: 'sus',
	async sus(target, room, user) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
		}

		await Badges.addBadgeToUser(user.id, 'sus' as ID, user, true);

		const targetUser = Users.get(user.id);
		if (targetUser) await Chat.Badges.updateUserCache(targetUser);

		return this.sendReply('You are now SUS.');
	},
};

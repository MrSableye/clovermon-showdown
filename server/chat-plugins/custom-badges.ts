import {Badges} from './badges';

export const commands: Chat.ChatCommands = {
	amogus: 'sus',
	async sus(target, room, user) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The friends list feature is currently disabled.`);
		}

		await Badges.addBadgeToUser(user.id, 'sus' as ID, user, true);

		return this.sendReply('You are now SUS.');
	},
};

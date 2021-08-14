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
	async teambavi(target, room, user) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
		}

		const userBadges = user.badges?.map((badge) => badge.badge_id);

		if (userBadges) {
			if (userBadges.includes('teambavi')) {
				await Badges.removeBadgeFromUser(user.id, 'teambavi' as ID, user, true);

				const targetUser = Users.get(user.id);
				if (targetUser) await Chat.Badges.updateUserCache(targetUser);

				return this.sendReply('You have left Team Bavi.');
			}

			if (userBadges.includes('teamkymmi')) {
				throw new Chat.ErrorMessage('You are already on Team Kymmi. You can type /teamkymmi to leave Team Kymmi.');
			}
		}

		await Badges.addBadgeToUser(user.id, 'teambavi' as ID, user, true);

		const targetUser = Users.get(user.id);
		if (targetUser) await Chat.Badges.updateUserCache(targetUser);

		return this.sendReply('You are now on Team Bavi.');
	},
	async teamkymmi(target, room, user) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
		}

		const userBadges = user.badges?.map((badge) => badge.badge_id);

		if (userBadges) {
			if (userBadges.includes('teamkymmi')) {
				await Badges.removeBadgeFromUser(user.id, 'teamkymmi' as ID, user, true);

				const targetUser = Users.get(user.id);
				if (targetUser) await Chat.Badges.updateUserCache(targetUser);

				return this.sendReply('You have left Team Kymmi.');
			}

			if (userBadges.includes('teambavi')) {
				throw new Chat.ErrorMessage('You are already on Team Bavi. You can type /teambavi to leave Team Bavi.');
			}
		}

		await Badges.addBadgeToUser(user.id, 'teamkymmi' as ID, user, true);

		const targetUser = Users.get(user.id);
		if (targetUser) await Chat.Badges.updateUserCache(targetUser);

		return this.sendReply('You are now on Team Kymmi.');
	},
};

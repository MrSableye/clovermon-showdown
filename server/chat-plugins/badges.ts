/**
 * Badges plugin.
 * Allows for creating and removing badges as well as granting and removing those bages from users.
 * Written by Mr. Sableye.
 * @author MrSableye
 */
import {Badge} from '../badges';
import {Utils} from '../../lib';

export const Badges = new class {
	checkCanCreateOrUpdate(context: Chat.CommandContext | Chat.PageContext) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The friends feature is currently disabled.`);
		}

		context.checkCan('badge');
	}
	checkCanUse(context: Chat.CommandContext | Chat.PageContext) {
		const user = context.user;
		if (user.locked || user.namelocked || user.semilocked || user.permalocked) {
			throw new Chat.ErrorMessage(`You are locked, and so cannot use the badges feature.`);
		}
		if (!user.autoconfirmed) {
			throw new Chat.ErrorMessage(context.tr`You must be autoconfirmed to use the badges feature.`);
		}
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
		}
	}
	getBadges() {
		return Chat.Badges.getBadges();
	}
	getOwnedBadges(ownerID: ID) {
		return Chat.Badges.getOwnedBadges(ownerID);
	}
	getUserBadges(userID: ID) {
		return Chat.Badges.getUserBadges(userID);
	}
	getVisibleUserBadges(userID: ID) {
		return Chat.Badges.getVisibleUserBadges(userID);
	}
	createBadge(badgeID: ID, badgeName: string, ownerID: ID, isExternal: boolean, imagePath: string) {
		return Chat.Badges.createBadge(badgeID, badgeName, ownerID, isExternal, imagePath);
	}
	deleteBadge(badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.deleteBadge(badgeID, requester.id, overridePermissions);
	}
	updateBadge(badgeID: ID, badgeName: string, ownerID: ID, isExternal: boolean, imagePath: string, requester: User, overridePermissions = false) {
		return Chat.Badges.updateBadge(badgeID, badgeName, ownerID, isExternal, imagePath, requester.id, overridePermissions);
	}
	addBadgeToUser(userID: ID, badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.addBadgeToUser(userID, badgeID, requester.id, overridePermissions);
	}
	removeBadgeFromUser(userID: ID, badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.removeBadgeFromUser(userID, badgeID, requester.id, overridePermissions);
	}
	toggleBadgeVisibility(userID: ID, badgeID: ID, isVisible: boolean) {
		return Chat.Badges.toggleBadgeVisibility(userID, badgeID, isVisible);
	}
};

const createBadgeHtml = (badge: Badge) => (
	`<img src="${badge.image_path}" width=16 height=16 alt="${Utils.escapeHTML(badge.badge_name)}" title="${Utils.escapeHTML(badge.badge_name)}" /> ` +
	`(${badge.badge_id})`
);

const createBadgeList = (title: string, badges: Badge[]) => {
	let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

	if (badges.length) {
		const badgeList = badges.map(createBadgeHtml);

		badgeListString += badgeList.join(', ');
	} else {
		badgeListString += 'No badges found.';
	}

	return badgeListString;
};

export const commands: Chat.ChatCommands = {
	badges: 'badge',
	badge: {
		async showall(target, room, user, connection, cmd, message) {
			Badges.checkCanCreateOrUpdate(this);

			const badges = await Badges.getBadges();

			return this.sendReplyBox(createBadgeList(message, badges));
		},
		async showowned(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);
			this.runBroadcast();

			const targetUserID = toID(target);
			if (targetUserID) {
				Badges.checkCanCreateOrUpdate(this);
				const badges = await Badges.getOwnedBadges(targetUserID);

				return this.sendReplyBox(createBadgeList(message, badges));
			} else {
				const badges = await Badges.getOwnedBadges(user.id);

				return this.sendReplyBox(createBadgeList(message, badges));
			}
		},
		async show(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);
			this.runBroadcast();

			const targetUser = Users.get(toID(target));
			if (targetUser) {
				const badges = await Badges.getVisibleUserBadges(targetUser.id);

				return this.sendReplyBox(createBadgeList(message, badges));
			} else {
				const badges = this.broadcasting ? await Badges.getVisibleUserBadges(user.id) : await Badges.getUserBadges(user.id);

				return this.sendReplyBox(createBadgeList(message, badges));
			}
		},
		new: 'create',
		async create(target, room, user) {
			Badges.checkCanCreateOrUpdate(this);

			const [badgeIDText, badgeNameText, ownerIDText, isExternalText, imagePathText] = target.split(',');

			if (!badgeIDText) {
				return this.errorReply(`Specify a badge ID.`);
			}

			const badgeID = toID(badgeIDText);

			if (!badgeNameText) {
				return this.errorReply(`Specify a badge name.`);
			}

			const badgeName = Utils.escapeHTML(badgeNameText.trim());

			if (!ownerIDText) {
				return this.errorReply(`Specify an owner.`);
			}

			const ownerID = toID(ownerIDText);
			const isExternal = toID(isExternalText) === 'external';

			if (!imagePathText) {
				return this.errorReply(`Specify an image path.`);
			}

			const imagePath = imagePathText.trim();

			await Badges.createBadge(badgeID, badgeName, ownerID, isExternal, imagePath);

			return this.sendReply(`Added '${badgeID}'.`);
		},
		async delete(target, room, user) {
			Badges.checkCanCreateOrUpdate(this);

			const badgeID = toID(target);

			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			await Badges.deleteBadge(badgeID, user, overridePermissions);

			return this.sendReply(`Deleted '${badgeID}'.`);
		},
		async update(target, room, user) {
			Badges.checkCanCreateOrUpdate(this);

			const [badgeIDText, badgeNameText, ownerIDText, isExternalText, imagePathText] = target.split(',');

			if (!badgeIDText) {
				return this.errorReply(`Specify a badge ID.`);
			}

			const badgeID = toID(badgeIDText);

			if (!badgeNameText) {
				return this.errorReply(`Specify a badge name.`);
			}

			const badgeName = Utils.escapeHTML(badgeNameText.trim());

			if (!ownerIDText) {
				return this.errorReply(`Specify an owner.`);
			}

			const ownerID = toID(ownerIDText);
			const isExternal = toID(isExternalText) === 'external';

			if (!imagePathText) {
				return this.errorReply(`Specify an image path.`);
			}

			const imagePath = imagePathText.trim();

			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			await Badges.updateBadge(badgeID, badgeName, ownerID, isExternal, imagePath, user, overridePermissions);

			return this.sendReply(`Updated '${badgeID}'.`);
		},
		grant: 'add',
		async add(target, room, user) {
			Badges.checkCanUse(this);
			const [userID, badgeID] = target.split(',').map(toID);

			if (!userID) {
				return this.errorReply(`Specify a user.`);
			}

			if (!badgeID) {
				return this.errorReply(`Specify a badge.`);
			}

			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			await Badges.addBadgeToUser(userID, badgeID, user, overridePermissions);

			const targetUser = Users.get(userID);
			if (targetUser) await Chat.Badges.updateUserCache(targetUser);

			return this.sendReply(`Granted '${badgeID}' to '${userID}'.`);
		},
		revoke: 'remove',
		async remove(target, room, user) {
			Badges.checkCanUse(this);
			const [userID, badgeID] = target.split(',').map(toID);

			if (!userID) {
				return this.errorReply(`Specify a user.`);
			}

			if (!badgeID) {
				return this.errorReply(`Specify a badge.`);
			}

			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			await Badges.removeBadgeFromUser(userID, badgeID, user, overridePermissions);

			const targetUser = Users.get(userID);
			if (targetUser) await Chat.Badges.updateUserCache(targetUser);

			return this.sendReply(`Removed '${badgeID}' from '${userID}'.`);
		},
		enable: 'on',
		async on(target, room, user) {
			Badges.checkCanUse(this);
			const badgeID = toID(target);

			if (!badgeID) {
				return this.errorReply(`Specify a badge.`);
			}

			await Badges.toggleBadgeVisibility(user.id, badgeID, true);

			const targetUser = Users.get(user.id);
			if (targetUser) await Chat.Badges.updateUserCache(targetUser);

			return this.sendReply(`Showing '${badgeID}'.`);
		},
		disable: 'off',
		async off(target, room, user) {
			Badges.checkCanUse(this);
			const badgeID = toID(target);

			if (!badgeID) {
				return this.errorReply(`Specify a badge.`);
			}

			await Badges.toggleBadgeVisibility(user.id, badgeID, false);

			const targetUser = Users.get(user.id);
			if (targetUser) await Chat.Badges.updateUserCache(targetUser);

			return this.sendReply(`Hiding '${badgeID}'.`);
		},
	},
	badgehelp() {
		this.sendReplyBox(
			`<code>/badge showall</code>: shows all badges. Requires: &<br />` +
			`<code>/badge showowned</code>: shows all badges you own<br />` +
			`<code>/badge showowned [user]</code>: shows all badges the given user owns. Requires: &<br />` +
			`<code>/badge show</code>: shows all badges you've been granted<br />` +
			`<code>/badge show [user]</code>: shows all badges the given user has been granted<br />` +
			`<code>/badge create [badge id], [badge description], [owner], [external], [image url]</code>: creates a new badge with the given parameters. Requires: &<br />` +
			`<code>/badge update [badge id], [badge description], [owner], [external], [image url]</code>: updates a badge with the given parameters. Requires: & or ownership<br />` +
			`<code>/badge delete [badge id]</code>: deletes a badge. Requires: & or ownership<br />` +
			`<code>/badge add [user], [badge id]</code>: grants a user a badge. Requires: & or ownership<br />` +
			`<code>/badge remove [user], [badge id]</code>: revokes a badge from a user. Requires: & or ownership<br />` +
			`<code>/badge on [badge id]</code>: displays a badge you own<br />` +
			`<code>/badge off [badge id]</code>: hides a badge you own<br />`
		);
	},
};

export const loginfilter: Chat.LoginFilter = async user => {
	if (!Config.usesqlitebadges) {
		return;
	}

	await Chat.Badges.updateUserCache(user);
};

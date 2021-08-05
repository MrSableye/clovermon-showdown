/**
 * Badges plugin.
 * Allows for creating and removing badges as well as granting and removing those bages from users.
 * Written by Mr. Sableye.
 * @author MrSableye
 */
import {Badge, UpdateableBadgeAttribute, UserBadge} from '../badges';
import {FS, Utils} from '../../lib';
import Axios from 'axios';
import probe from 'probe-image-size';

const nameRegex = /^[A-Za-z0-9 "'()]+$/;

export const Badges = new class {
	checkCanCreateOrUpdate(context: Chat.CommandContext | Chat.PageContext) {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
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
	getBadgeOwners(badgeID: ID, requester: User, overridePermissions: boolean): Promise<UserBadge[]> {
		return Chat.Badges.getBadgeOwners(badgeID, requester.id, overridePermissions);
	}
	createBadge(badgeID: ID, badgeName: string, ownerID: ID, filePath: string) {
		return Chat.Badges.createBadge(badgeID, badgeName, ownerID, filePath);
	}
	deleteBadge(badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.deleteBadge(badgeID, requester.id, overridePermissions);
	}
	updateBadgeAttribute(badgeID: ID, attributeName: UpdateableBadgeAttribute, attributeValue: any, requester: User, overridePermissions = false) {
		return Chat.Badges.updateBadgeAttribute(badgeID, attributeName, attributeValue, requester.id, overridePermissions);
	}
	addBadgeToUser(userID: ID, badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.addBadgeToUser(userID, badgeID, requester.id, overridePermissions);
	}
	removeBadgeFromUser(userID: ID, badgeID: ID, requester: User, overridePermissions = false) {
		return Chat.Badges.removeBadgeFromUser(userID, badgeID, requester.id, overridePermissions);
	}
	deleteUserBadges(badgeID: ID) {
		return Chat.Badges.deleteUserBadges(badgeID);
	}
	toggleBadgeVisibility(userID: ID, badgeID: ID, isVisible: boolean) {
		return Chat.Badges.toggleBadgeVisibility(userID, badgeID, isVisible);
	}
	updateBadgePriority(userID: ID, badgeID: ID, priority: number) {
		return Chat.Badges.updateBadgePriority(userID, badgeID, priority);
	}
};

const createUserBadgeHtml = (badge: UserBadge) => (
	`<badge badgename="${Utils.escapeHTML(badge.badge_name)}" badgefilename="${Utils.escapeHTML(badge.file_name)}" /> ` +
	`(${badge.badge_id})`
);

const createUserBadgeList = (title: string, badges: UserBadge[]) => {
	let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

	if (badges.length) {
		const badgeList = badges.map(createUserBadgeHtml);

		badgeListString += badgeList.join(', ');
	} else {
		badgeListString += 'No badges found.';
	}

	return badgeListString;
};

const createBadgeHtml = (badge: Badge, showOwner: boolean) => (
	`<badge badgename="${Utils.escapeHTML(badge.badge_name)}" badgefilename="${Utils.escapeHTML(badge.file_name)}" /> ` +
	`(${badge.badge_id})` + (showOwner ? `[Owned by: ${badge.owner_id}]` : '')
);

const createBadgeList = (title: string, badges: Badge[], showOwner = false) => {
	let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

	if (badges.length) {
		console.log(showOwner);
		const badgeList = badges.map((badge) => createBadgeHtml(badge, showOwner));

		console.log(badgeList);

		badgeListString += badgeList.join(', ');
	} else {
		badgeListString += 'No badges found.';
	}

	return badgeListString;
};

const createBadgeOwnerList = (title: string, badges: UserBadge[]) => {
	let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

	if (badges.length) {
		const badgeList = badges.map((badge) => badge.user_id);

		badgeListString += badgeList.join(', ');
	} else {
		badgeListString += 'No badges found.';
	}

	return badgeListString;
};

const downloadBadgeImage = async (badgeID: string, imageUrl: string) => {
	const imagebuffer = (await Axios.get(imageUrl, {responseType: 'arraybuffer'})).data;
	const probeResult = probe.sync(imagebuffer);

	if (!probeResult) {
		throw new Chat.ErrorMessage('Invalid image. Please provide a Url linking to a 16x16 GIF or PNG.');
	}

	const {width, height, type} = probeResult;

	if (width !== 16 || height !== 16 || !['png', 'gif'].includes(toID(type))) {
		throw new Chat.ErrorMessage('Invalid image. Please provide a Url linking to a 16x16 GIF or PNG.');
	}

	const fileName = `${badgeID}.${type}`;

	try {
		await FS(`./config/badges/${fileName}`).write(imagebuffer);
	} catch (error) {
		throw new Chat.ErrorMessage('Unable to upload image. Please try again or contact an administrator.');
	}

	return fileName;
};

const updateBadgeForUsers = async (badgeID: ID, requester: User) => {
	const badgeOwners = await Badges.getBadgeOwners(badgeID, requester, true);

	await Promise.all(badgeOwners.map(async ({user_id}) => {
		const user = Users.get(toID(user_id));
		if (user) await Chat.Badges.updateUserCache(user);
	}));
};

export const commands: Chat.ChatCommands = {
	badges: 'badge',
	badge: {
		async showall(target, room, user, connection, cmd, message) {
			Badges.checkCanCreateOrUpdate(this);

			const badges = await Badges.getBadges();

			return this.sendReplyBox(createBadgeList(message, badges, true));
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

				return this.sendReplyBox(createUserBadgeList(message, badges));
			} else {
				const badges = this.broadcasting ? await Badges.getVisibleUserBadges(user.id) : await Badges.getUserBadges(user.id);

				return this.sendReplyBox(createUserBadgeList(message, badges));
			}
		},
		async showowners(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);

			const badgeID = toID(target);
			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			const badges = await Badges.getBadgeOwners(badgeID, user, overridePermissions);

			return this.sendReplyBox(createBadgeOwnerList(message, badges));
		},
		new: 'create',
		async create(target, room, user) {
			Badges.checkCanCreateOrUpdate(this);

			const [badgeIDText, badgeNameText, ownerIDText, imageUrlText] = target.split(',');

			if (!badgeIDText) {
				return this.errorReply(`Specify a badge ID.`);
			}

			const badgeID = toID(badgeIDText);

			if (!badgeNameText) {
				return this.errorReply(`Specify a badge name.`);
			}

			let badgeName = badgeNameText.trim();

			if (!nameRegex.test(badgeName)) {
				return this.errorReply(`A badge name can only contain a-z, A-Z, 0-9, ', ", (, ), and spaces.`);
			}

			badgeName = Utils.escapeHTML(badgeName);

			if (!ownerIDText) {
				return this.errorReply(`Specify an owner.`);
			}

			const ownerID = toID(ownerIDText);

			if (!imageUrlText) {
				return this.errorReply(`Specify an image URL.`);
			}

			const imageUrl = imageUrlText.trim();

			const imageFileName = await downloadBadgeImage(badgeID, imageUrl);

			await Badges.createBadge(badgeID, badgeName, ownerID, imageFileName);

			return this.sendReply(`Added '${badgeID}'.`);
		},
		async delete(target, room, user) {
			Badges.checkCanCreateOrUpdate(this);

			const badgeID = toID(target);

			const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
			await Badges.deleteUserBadges(badgeID);
			await updateBadgeForUsers(badgeID, user);
			await Badges.deleteBadge(badgeID, user, overridePermissions);

			return this.sendReply(`Deleted '${badgeID}'.`);
		},
		set: {
			async owner(target, room, user) {
				const [badgeID, ownerID] = target.split(',').map(toID);

				if (!badgeID) {
					return this.errorReply(`Specify a badge ID.`);
				}

				if (!ownerID) {
					return this.errorReply(`Specify an owner.`);
				}

				const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
				await Badges.updateBadgeAttribute(badgeID, 'owner_id', ownerID, user, overridePermissions);

				await updateBadgeForUsers(badgeID, user);

				return this.sendReply(`Updated owner of '${badgeID}' to ${ownerID}.`);
			},
			desc: 'name',
			description: 'name',
			async name(target, room, user) {
				const [badgeIDText, badgeNameText] = target.split(',');

				if (!badgeIDText) {
					return this.errorReply(`Specify a badge ID.`);
				}

				const badgeID = toID(badgeIDText);

				if (!badgeNameText) {
					return this.errorReply(`Specify a badge name.`);
				}

				let badgeName = badgeNameText.trim();

				if (!nameRegex.test(badgeName)) {
					return this.errorReply(`A badge name can only contain a-z, A-Z, 0-9, ', ", (, ), and spaces.`);
				}

				badgeName = Utils.escapeHTML(badgeName);

				const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
				await Badges.updateBadgeAttribute(badgeID, 'badge_name', badgeName, user, overridePermissions);

				await updateBadgeForUsers(badgeID, user);

				return this.sendReply(`Updated name of '${badgeID}' to ${badgeName}.`);
			},
			async image(target, room, user) {
				const [badgeIDText, imageUrlText] = target.split(',');

				if (!badgeIDText) {
					return this.errorReply(`Specify a badge ID.`);
				}

				const badgeID = toID(badgeIDText);

				if (!imageUrlText) {
					return this.errorReply(`Specify an image URL.`);
				}

				const imageUrl = imageUrlText.trim();

				const imageFileName = await downloadBadgeImage(badgeID, imageUrl);

				const overridePermissions = Users.Auth.hasPermission(user, 'badge', null);
				await Badges.updateBadgeAttribute(badgeID, 'file_name', imageFileName, user, overridePermissions);

				await updateBadgeForUsers(badgeID, user);

				return this.sendReply(`Updated image of '${badgeID}' to ${imageUrl}.`);
			},
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
		async priority(target, room, user) {
			Badges.checkCanUse(this);
			const [badgeIDText, priorityText] = target.split(',');

			if (!badgeIDText) {
				return this.errorReply(`Specify a badge.`);
			}

			const badgeID = toID(badgeIDText);

			if (!priorityText) {
				return this.errorReply(`Specify a priority.`);
			}

			const priority = parseInt(priorityText);

			if (Number.isNaN(priority) || !Number.isInteger(priority)) {
				return this.errorReply(`Specify an integer priority.`);
			}

			await Badges.updateBadgePriority(user.id, badgeID, priority);

			const targetUser = Users.get(user.id);
			if (targetUser) await Chat.Badges.updateUserCache(targetUser);

			return this.sendReply(`Set '${badgeID}' priority to ${priority}.`);
		},
	},
	badgehelp() {
		this.sendReplyBox(
			`<code>/badge showall</code>: shows all badges. Requires: &<br />` +
			`<code>/badge showowned</code>: shows all badges you own<br />` +
			`<code>/badge showowned [user]</code>: shows all badges the given user owns. Requires: &<br />` +
			`<code>/badge showowners [badge id]</code>: shows all owners of a badges. Requires: & or ownership<br />` +
			`<code>/badge show</code>: shows all badges you've been granted<br />` +
			`<code>/badge show [user]</code>: shows all badges the given user has been granted<br />` +
			`<code>/badge create [badge id], [badge name], [owner], [image url]</code>: creates a new badge with the given parameters. Requires: &<br />` +
			`<code>/badge set name [badge id], [badge name]</code>: updates a badge with the given name. Requires: & or ownership<br />` +
			`<code>/badge set owner [badge id], [owner],</code>: updates a badge with the given owner. Requires: & or ownership<br />` +
			`<code>/badge set image [badge id], [image url]</code>: updates a badge with the given image. Requires: & or ownership<br />` +
			`<code>/badge delete [badge id]</code>: deletes a badge. Requires: & or ownership<br />` +
			`<code>/badge add [user], [badge id]</code>: grants a user a badge. Requires: & or ownership<br />` +
			`<code>/badge remove [user], [badge id]</code>: revokes a badge from a user. Requires: & or ownership<br />` +
			`<code>/badge on [badge id]</code>: displays a badge you own<br />` +
			`<code>/badge off [badge id]</code>: hides a badge you own<br />` +
			`<code>/badge priority [badge id], [priority]</code>: sets the priority/order of a badge you own<br />`
		);
	},
};

export const loginfilter: Chat.LoginFilter = async user => {
	if (!Config.usesqlitebadges) {
		return;
	}

	await Chat.Badges.updateUserCache(user);
};

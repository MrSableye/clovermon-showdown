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
import {URL} from 'url';

const nameRegex = /^[A-Za-z0-9 "'()]+$/;

const ERROR_BADGE_FEATURE_DISABLED = 'The badges feature is currently disabled.';
const ERROR_USER_LOCKED = 'You are locked, and so cannot use the badges feature.';
const ERROR_USER_NOT_REGISTERED = 'You must be registered to use the badges feature.';

const ERROR_INVALID_IMAGE = 'Invalid image. Please provide a URL linking to a 16x16 GIF or PNG.';
const ERROR_WRITING_IMAGE = 'Unable to write image. Please try again or contact an administrator.';

const ERROR_NO_BADGE_ID = 'Specify a badge ID.';
const ERROR_NO_BADGE_DESCRIPTION = 'Specify a badge description.';
const ERROR_INVALID_BADGE_DESCRIPTION = `A badge description can only contain a-z, A-Z, 0-9, ', ", (, ), and spaces.`;
const ERROR_NO_BADGE_MANAGER = 'Specify a manager.';
const ERROR_NO_BADGE_IMAGE_URL = 'Specify an image URL.';
const ERROR_NO_USER_ID = 'Specify a user.';
const ERROR_NO_BADGE_PRIORITY = 'Specify a priority.';
const ERROR_NON_NUMERIC_BADGE_PRIORITY = 'Specify a numeric priority.';
const ERROR_NON_INTEGER_BADGE_PRIORITY = 'Specify an integer priority.';

function toLink(buf: string) {
	return buf.replace(/<a roomid="/g, `<a target="replace" href="/`);
}

const sendPM = (message: string, userId: ID) => {
	const user = Users.get(userId);

	if (user) {
		user.send(`|pm|&|${user.getIdentity()}|${message}`);
	}
};

export const Badges = new class {
	// Permissions
	checkBadgesEnabled() {
		if (!Config.usesqlitebadges) {
			throw new Chat.ErrorMessage(ERROR_BADGE_FEATURE_DISABLED);
		}
	}
	checkHasBadgePermission(context: Chat.CommandContext | Chat.PageContext) {
		Badges.checkBadgesEnabled();
		context.checkCan('badge');
	}
	canOverrideBadgeOwnership(user: User) {
		return Users.Auth.hasPermission(user, 'badge', null);
	}
	checkCanUse(context: Chat.CommandContext | Chat.PageContext) {
		Badges.checkBadgesEnabled();

		const user = context.user;
		if (user.locked || user.namelocked || user.semilocked || user.permalocked) {
			throw new Chat.ErrorMessage(ERROR_USER_LOCKED);
		}
		if (!user.registered) {
			throw new Chat.ErrorMessage(context.tr(ERROR_USER_NOT_REGISTERED));
		}
	}

	// User Updates
	sortUserBadges(userBadges: UserBadge[]) {
		return userBadges.sort((badgeA, badgeB) => {
			const priorityComparison = badgeA.priority - badgeB.priority;
			if (priorityComparison !== 0) return priorityComparison;
			return badgeA.create_date - badgeB.create_date;
		});
	}
	async updateUser(userID: string) {
		const user = Users.get(userID);
		if (user) {
			const badges = Badges.sortUserBadges(await Badges.getVisibleUserBadges(user.id));

			user.badges = badges;
			return user.badges;
		}
	}
	async updateBadgeForUsers(badgeID: string, requester: User) {
		const badgeOwners = await Badges.getBadgeOwners(badgeID, requester, true);

		await Promise.all(badgeOwners.map(async ({user_id}) => {
			await Badges.updateUser(user_id);
		}));
	}
	// Retrieval
	getBadge(badgeID: string): Promise<Badge | undefined> {
		return Chat.Badges.getBadge(badgeID);
	}
	getBadges() {
		return Chat.Badges.getBadges();
	}
	getManagedBadges(managerID: string) {
		return Chat.Badges.getOwnedBadges(managerID);
	}
	getUserBadges(userID: string) {
		return Chat.Badges.getUserBadges(userID);
	}
	getVisibleUserBadges(userID: string) {
		return Chat.Badges.getVisibleUserBadges(userID);
	}
	getBadgeOwners(badgeID: string, requester: User, override = false): Promise<UserBadge[]> {
		return Chat.Badges.getBadgeOwners(badgeID, requester.id, override || Badges.canOverrideBadgeOwnership(requester));
	}
	// Modification
	createBadge(badgeID: string, badgeName: string, managerID: string, filePath: string) {
		return Chat.Badges.createBadge(badgeID, badgeName, managerID, filePath);
	}
	async deleteBadge(badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Badges.deleteUserBadges(badgeID, requester);
		await Chat.Badges.deleteBadge(badgeID, requester.id, overridePermissions);
	}
	async updateBadgeAttribute(badgeID: string, attributeName: UpdateableBadgeAttribute, attributeValue: any, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.updateBadgeAttribute(badgeID, attributeName, attributeValue, requester.id, overridePermissions);
		await Badges.updateBadgeForUsers(badgeID, requester);
	}
	async addBadgeToUser(userID: string, badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.addBadgeToUser(userID, badgeID, requester.id, overridePermissions);
		await Badges.updateUser(userID);

		const badge = await Chat.Badges.getBadge(badgeID);
		if (badge) {
			sendPM(`/html <div>You received a badge: ${this.createRawBadgeHtml(badge.badge_id, badge.badge_name)}</div>`, toID(userID));
		}
	}
	async removeBadgeFromUser(userID: string, badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.removeBadgeFromUser(userID, badgeID, requester.id, overridePermissions);
		await Badges.updateUser(userID);
	}
	async deleteUserBadges(badgeID: string, requester: User) {
		await Chat.Badges.deleteUserBadges(badgeID);
		await Badges.updateBadgeForUsers(badgeID, requester);
	}
	async toggleBadgeVisibility(userID: string, badgeID: string, isVisible: boolean) {
		await Chat.Badges.toggleBadgeVisibility(userID, badgeID, isVisible);
		await Badges.updateUser(userID);
	}
	async updateBadgePriority(userID: string, badgeID: string, priority: number) {
		await Chat.Badges.updateBadgePriority(userID, badgeID, priority);
		await Badges.updateUser(userID);
	}
	async downloadBadgeImage(badgeID: string, imageUrl: string) {
		try {
			const imagebuffer = (await Axios.get(imageUrl, {responseType: 'arraybuffer'})).data;
			const probeResult = probe.sync(imagebuffer);

			if (!probeResult) {
				throw new Chat.ErrorMessage(ERROR_INVALID_IMAGE);
			}

			const {width, height, type} = probeResult;

			if (width !== 16 || height !== 16 || !['png', 'gif'].includes(toID(type))) {
				throw new Chat.ErrorMessage(ERROR_INVALID_IMAGE);
			}

			const fileName = `${badgeID}.${type}`;
			await FS(`./config/badges/${fileName}`).write(imagebuffer);

			return fileName;
		} catch (error) {
			throw new Chat.ErrorMessage(ERROR_WRITING_IMAGE);
		}
	}
	// HTML
	createRawBadgeHtml(badgeName: string, badgeFileName: string) {
		return `<badge badgename="${Utils.escapeHTML(badgeName)}" badgefilename="${Utils.escapeHTML(badgeFileName)}" />`;
	}
	createUserBadgeHtml(userBadge: UserBadge) {
		return Badges.createRawBadgeHtml(userBadge.badge_name, userBadge.file_name) +
			`(${userBadge.badge_id})`;
	}
	createUserBadgeListHtml(title: string, userBadges: UserBadge[]) {
		let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

		if (userBadges.length) {
			const badgeList = userBadges.map(Badges.createUserBadgeHtml);

			badgeListString += badgeList.join(', ');
		} else {
			badgeListString += 'No badges found.';
		}

		return badgeListString;
	}
	createBadgeHtml(badge: Badge, showOwner: boolean) {
		return Badges.createRawBadgeHtml(badge.badge_name, badge.file_name) +
			`(${badge.badge_id})` + (showOwner ? `[Owned by: ${badge.owner_id}]` : '');
	}
	createBadgeListHtml(title: string, badges: Badge[], showOwner = false) {
		let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

		if (badges.length) {
			const badgeList = badges.map((badge) => Badges.createBadgeHtml(badge, showOwner));

			badgeListString += badgeList.join(', ');
		} else {
			badgeListString += 'No badges found.';
		}

		return badgeListString;
	}
	createBadgeOwnerListHtml(title: string, userBadges: UserBadge[]) {
		let badgeListString = title === '' ? title : `<span style="color:#999999;">${Utils.escapeHTML(title)}:</span><br />`;

		if (userBadges.length) {
			const badgeList = userBadges.map((userBadge) => userBadge.user_id);

			badgeListString += badgeList.join(', ');
		} else {
			badgeListString += 'No badges found.';
		}

		return badgeListString;
	}
	createBadgeHeaderButtons(currentPage: string) {
		const buf = [];
		const icons: {[k: string]: string} = {
			owned: '<i class="fa fa-user-shield"></i>',
			managed: '<i class="fa fa-user-cog"></i>',
		};
		const titles: {[k: string]: string} = {
			owned: 'Owned Badges',
			managed: 'Managed Badges',
		};
		for (const page in titles) {
			const title = titles[page];
			const icon = icons[page];
			if (page === currentPage) {
				buf.push(`${icon} <strong>${title}</strong>`); // TODO: user.tr(title)
			} else {
				buf.push(`${icon} <a roomid="view-badge-${page}">${title}</a>`); // TODO: user.tr(title)
			}
		}
		const refresh = (
			`<button class="button" name="send" value="/j view-badge-${currentPage}" style="float: right">` +
			` <i class="fa fa-refresh"></i> Refresh</button>` // TODO: user.tr('Refresh')
		);
		return toLink(`<div style="line-height:25px">${buf.join(' / ')}${refresh}</div><hr />`);
	}
	createUserBadgePageElementHtml(userBadge: UserBadge) {
		const isHidden = userBadge.is_hidden === 1;
		let userBadgePageElementHtml = '<p>';
		userBadgePageElementHtml += Badges.createRawBadgeHtml(userBadge.badge_name, userBadge.file_name);
		userBadgePageElementHtml += `<strong>${userBadge.badge_name}</strong> <small>[id: ${userBadge.badge_id}, order: ${userBadge.priority}]</small><br />`;
		userBadgePageElementHtml += `<button class="button${userBadge.is_hidden === 0 ? ' disabled' : ''}" name="send" `;
		userBadgePageElementHtml += `value="/badge on ${userBadge.badge_id}">Show</button> `;
		userBadgePageElementHtml += `<button class="button${userBadge.is_hidden === 1 ? ' disabled' : ''}" name="send" `;
		userBadgePageElementHtml += `value="/badge off ${userBadge.badge_id}">Hide</button> `;
		if (!isHidden) {
			userBadgePageElementHtml += `<button class="button" name="send" `;
			userBadgePageElementHtml += `value="/badge priority ${userBadge.badge_id}, ${userBadge.priority - 1}">&lt;</button> `;
			userBadgePageElementHtml += ` <button class="button" name="send" `;
			userBadgePageElementHtml += `value="/badge priority ${userBadge.badge_id}, ${userBadge.priority + 1}">&gt;</button> `;
		}
		return userBadgePageElementHtml + '</p>';
	}
	createUserBadgePageHtml(userBadges: UserBadge[]) {
		let userBadgePageHtml = '<div class="pad">';
		userBadgePageHtml += Badges.createBadgeHeaderButtons('owned');

		const visibleBadges = userBadges.filter((userBadge) => userBadge.is_hidden === 0);
		userBadgePageHtml += '<h3>Your Visible Badges</h3>';
		userBadgePageHtml += visibleBadges.map((visibleBadge) => Badges.createRawBadgeHtml(visibleBadge.badge_name, visibleBadge.file_name)).join('');
		userBadgePageHtml += '<br />';

		userBadgePageHtml += '<h3>Your Badges</h3>';

		if (userBadges.length) {
			userBadgePageHtml += userBadges.map(Badges.createUserBadgePageElementHtml).join('');
		} else {
			userBadgePageHtml += '<em>you have no badges on Showdown lol</em>';
		}

		userBadgePageHtml += '</div>';
		return userBadgePageHtml;
	}
	createManagedBadgePageElementHtml(badge: Badge) {
		let managedBadgePageElementHtml = Badges.createRawBadgeHtml(badge.badge_name, badge.file_name);
		managedBadgePageElementHtml += `<strong>${badge.badge_name}</strong> <small>[id: ${badge.badge_id}]</small><br />`;
		return managedBadgePageElementHtml;
	}
	createManagedBadgePageHtml(badges: Badge[]) {
		let managedBadgePageHtml = '<div class="pad">';
		managedBadgePageHtml += Badges.createBadgeHeaderButtons('managed');
		managedBadgePageHtml += '<h3>Your Managed Badges</h3>';

		if (badges.length) {
			managedBadgePageHtml += badges.map(Badges.createManagedBadgePageElementHtml).join('');
		} else {
			managedBadgePageHtml += '<em>you manage no badges on Showdown lol</em>';
		}

		managedBadgePageHtml += '</div>';
		return managedBadgePageHtml;
	}
};

export const pages: Chat.PageTable = {
	badge: {
		async owned(args, user) {
			if (!user.named) return Rooms.RETRY_AFTER_LOGIN;
			Badges.checkCanUse(this);

			this.title = '[Badges] Owned';

			const userBadges = Badges.sortUserBadges(await Badges.getUserBadges(user.id));

			return Badges.createUserBadgePageHtml(userBadges);
		},
		async managed(args, user) {
			if (!user.named) return Rooms.RETRY_AFTER_LOGIN;
			Badges.checkCanUse(this);

			this.title = '[Badges] Managed';

			const badges = await Badges.getManagedBadges(user.id);

			return Badges.createManagedBadgePageHtml(badges);
		},
	},
};

interface ChainablePredicate<T, R> {
	predicate: (value: T) => boolean;
	transform: (value: T) => R;
	errorMessage: string;
}

const applyPredicate = <T, R>(
	predicate: ChainablePredicate<T, R>,
	value: T,
): R => {
	if (!predicate.predicate(value)) {
		throw new Chat.ErrorMessage(predicate.errorMessage);
	}

	return predicate.transform(value);
};

const isNotNullOrUndefined = (arg: any) => (arg !== null) && (arg !== undefined);
const identity = <T>(value: T) => value;

const getBadgeID = (arg: string) => applyPredicate(
	{predicate: isNotNullOrUndefined, transform: toID, errorMessage: ERROR_NO_BADGE_ID},
	arg,
);

const getBadgeDescription = (arg: string) => applyPredicate(
	{predicate: (predicateArg) => nameRegex.test(predicateArg), transform: Utils.escapeHTML, errorMessage: ERROR_INVALID_BADGE_DESCRIPTION},
	applyPredicate(
		{predicate: isNotNullOrUndefined, transform: (transformArg) => transformArg.trim(), errorMessage: ERROR_NO_BADGE_DESCRIPTION},
		arg,
	),
);

const getBadgeManagerID = (arg: string) => applyPredicate(
	{predicate: isNotNullOrUndefined, transform: toID, errorMessage: ERROR_NO_BADGE_MANAGER},
	arg,
);

const validateUrl = (maybeUrl: string) => {
	try {
		const url = new URL(maybeUrl);

		return ['http:', 'https:'].includes(url.protocol);
	} catch (err) {
		return false;
	}
};
const getBadgeImageUrl = (arg: string) => applyPredicate(
	{predicate: validateUrl, transform: identity, errorMessage: ERROR_INVALID_IMAGE},
	applyPredicate(
		{predicate: isNotNullOrUndefined, transform: (transformArg) => transformArg.trim(), errorMessage: ERROR_NO_BADGE_IMAGE_URL},
		arg,
	),
);

const getUserID = (arg: string) => applyPredicate(
	{predicate: isNotNullOrUndefined, transform: toID, errorMessage: ERROR_NO_USER_ID},
	arg,
);

const getBadgePriority = (arg: string) => applyPredicate(
	{predicate: (predicateArg) => Number.isInteger(predicateArg), transform: identity, errorMessage: ERROR_NON_INTEGER_BADGE_PRIORITY},
	applyPredicate(
		{predicate: (predicateArg) => !Number.isNaN(parseInt(predicateArg)), transform: parseInt, errorMessage: ERROR_NON_NUMERIC_BADGE_PRIORITY},
		applyPredicate(
			{predicate: isNotNullOrUndefined, transform: (transformArg) => transformArg.trim(), errorMessage: ERROR_NO_BADGE_PRIORITY},
			arg,
		),
	),
);

export const commands: Chat.ChatCommands = {
	badges: 'badge',
	badge: {
		async showall(target, room, user, connection, cmd, message) {
			Badges.checkHasBadgePermission(this);
			this.runBroadcast();

			const badges = await Badges.getBadges();

			return this.sendReplyBox(Badges.createBadgeListHtml(message, badges, true));
		},
		async showmanaged(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);
			this.runBroadcast();

			const userID = getUserID(target);
			if (userID) {
				Badges.checkHasBadgePermission(this);

				const badges = await Badges.getManagedBadges(userID);

				return this.sendReplyBox(Badges.createBadgeListHtml(message, badges));
			} else {
				const badges = await Badges.getManagedBadges(user.id);

				return this.sendReplyBox(Badges.createBadgeListHtml(message, badges));
			}
		},
		async show(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);
			this.runBroadcast();

			const targetUser = Users.get(getUserID(target));
			if (targetUser) {
				const badges = await Badges.getVisibleUserBadges(targetUser.id);

				return this.sendReplyBox(Badges.createUserBadgeListHtml(message, badges));
			} else {
				const badges = this.broadcasting ? await Badges.getVisibleUserBadges(user.id) : await Badges.getUserBadges(user.id);

				return this.sendReplyBox(Badges.createUserBadgeListHtml(message, badges));
			}
		},
		async showowners(target, room, user, connection, cmd, message) {
			Badges.checkCanUse(this);

			const id = getBadgeID(target);

			const badges = await Badges.getBadgeOwners(id, user);

			return this.sendReplyBox(Badges.createBadgeOwnerListHtml(message, badges));
		},
		new: 'create',
		async create(target, room, user) {
			Badges.checkHasBadgePermission(this);

			const [rawID, rawDescription, rawManagerID, rawImageUrl] = target.split(',');

			const id = getBadgeID(rawID);
			const description = getBadgeDescription(rawDescription);
			const managerID = getBadgeManagerID(rawManagerID);
			const imageUrl = getBadgeImageUrl(rawImageUrl);
			const imageFileName = await Badges.downloadBadgeImage(id, imageUrl);

			await Badges.createBadge(id, description, managerID, imageFileName);

			this.refreshPage('badge-managed');
			return this.sendReply(`Added Badge '${id}'.`);
		},
		async delete(target, room, user) {
			Badges.checkHasBadgePermission(this);

			const id = getBadgeID(target);

			await Badges.deleteBadge(id, user);

			this.refreshPage('badge-managed');
			return this.sendReply(`Deleted Badge '${id}'.`);
		},
		set: {
			async owner(target, room, user) {
				const [rawID, rawManagerID] = target.split(',').map(toID);

				const id = getBadgeID(rawID);
				const managerID = getBadgeManagerID(rawManagerID);

				await Badges.updateBadgeAttribute(id, 'owner_id', managerID, user);

				this.refreshPage('badge-managed');
				return this.sendReply(`Updated manager of Badge '${id}' to User '${managerID}'.`);
			},
			desc: 'name',
			description: 'name',
			async name(target, room, user) {
				const [rawID, rawDescription] = target.split(',');

				const id = getBadgeID(rawID);
				const description = getBadgeDescription(rawDescription);

				await Badges.updateBadgeAttribute(id, 'badge_name', description, user);

				this.refreshPage('badge-managed');
				return this.sendReply(`Updated description of Badge '${id}' to '${description}'.`);
			},
			async image(target, room, user) {
				const [rawID, rawImageUrl] = target.split(',');

				const id = getBadgeID(rawID);
				const imageUrl = getBadgeImageUrl(rawImageUrl);
				const imageFileName = await Badges.downloadBadgeImage(id, imageUrl);

				await Badges.updateBadgeAttribute(id, 'file_name', imageFileName, user);

				this.refreshPage('badge-managed');
				return this.sendReply(`Updated image of Badge '${id}' to '${imageUrl}'.`);
			},
		},
		grant: 'add',
		async add(target, room, user) {
			Badges.checkCanUse(this);
			const [rawUserID, rawBadgeID] = target.split(',').map(toID);

			const userID = getUserID(rawUserID);
			const badgeID = getBadgeID(rawBadgeID);

			await Badges.addBadgeToUser(userID, badgeID, user);

			return this.sendReply(`Granted Badge '${badgeID}' to User '${userID}'.`);
		},
		revoke: 'remove',
		async remove(target, room, user) {
			Badges.checkCanUse(this);
			const [rawUserID, rawBadgeID] = target.split(',');

			const userID = getUserID(rawUserID);
			const badgeID = getBadgeID(rawBadgeID);

			await Badges.removeBadgeFromUser(userID, badgeID, user);

			return this.sendReply(`Removed Badge '${badgeID}' from User '${userID}'.`);
		},
		enable: 'on',
		async on(target, room, user) {
			Badges.checkCanUse(this);

			const id = getBadgeID(target);

			await Badges.toggleBadgeVisibility(user.id, id, true);

			this.refreshPage('badge-owned');
			return this.sendReply(`Showing Badge '${id}'.`);
		},
		disable: 'off',
		async off(target, room, user) {
			Badges.checkCanUse(this);

			const id = getBadgeID(target);

			await Badges.toggleBadgeVisibility(user.id, id, false);

			this.refreshPage('badge-owned');
			return this.sendReply(`Hiding Badge '${id}'.`);
		},
		priority: 'order',
		async order(target, room, user) {
			Badges.checkCanUse(this);

			const [rawID, rawPriority] = target.split(',');
			const id = getBadgeID(rawID);
			const priority = getBadgePriority(rawPriority);

			await Badges.updateBadgePriority(user.id, id, priority);

			this.refreshPage('badge-owned');
			return this.sendReply(`Set Badge '${id}' priority to '${priority}'.`);
		},
		'': 'view',
		view() {
			Badges.checkCanUse(this);

			return this.parse(`/j view-badge-owned`);
		},
	},
	badgehelp() {
		this.sendReplyBox(
			`<code>/badge view</code>: opens the badge page<br />` +
			`<code>/badge showall</code>: shows all badges. Requires: &<br />` +
			`<code>/badge showmanaged</code>: shows all badges you manage<br />` +
			`<code>/badge showmanaged</code>: shows all badges a given user manages. Requires: &<br />` +
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
			`<code>/badge order [badge id], [priority]</code>: sets the order of a badge you own<br />`
		);
	},
};

export const loginfilter: Chat.LoginFilter = async user => {
	if (!Config.usesqlitebadges) {
		return;
	}

	await Badges.updateUser(user.id);
};

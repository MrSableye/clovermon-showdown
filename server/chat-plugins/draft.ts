/**
 * Draft plugin.
 * Allows for creating drafts.
 * @author MrSableye
 */
import {Badge, UpdateableBadgeAttribute, UserBadge, UserManagedBadge} from '../badges';
import {FS, Utils} from '../../lib';
import Axios from 'axios';
import probe from 'probe-image-size';
import {URL} from 'url';

interface DraftPick {
	id: string;
	cost: number;
}

interface DraftOption extends DraftPick {
	quantityRemaining: number;
}

interface DraftPlayer {
	userId: string;
	picks: DraftPick[];
}

interface DraftHistory {

}

type DraftStatus = 'STOPPED' | 'STARTED';

interface Draft {
	name: string;
	formatId: string;
	budget: number;
	adminId: string;
	inviteOnly: boolean;
	draftChannelId?: string;
	players: Record<string, DraftPlayer>;
	playerOrder: string[];
	pool: DraftOption[];
	history: DraftHistory[];
	status: DraftStatus;
}

const DRAFT_PATH = 'config/chat-plugins/drafts.json';

export const drafts: Record<string, Draft> = JSON.parse(
	FS(DRAFT_PATH).readIfExistsSync() || "{}"
);

const saveDrafts = () => {
	FS(DRAFT_PATH).writeUpdate(() => JSON.stringify(drafts));
};

const nameRegex = /^[A-Za-z0-9 "'()]+$/;
const nameTemplateRegex = /^[A-Za-z0-9 "'(){}]+$/;

const ERROR_BADGE_FEATURE_DISABLED = 'The badges feature is currently disabled.';
const ERROR_USER_LOCKED = 'You are locked, and so cannot use the badges feature.';
const ERROR_USER_NOT_REGISTERED = 'You must be registered to use the badges feature.';

const ERROR_INVALID_IMAGE = 'Invalid image. Please provide a URL linking to a 16x16 GIF or PNG.';
const ERROR_WRITING_IMAGE = 'Unable to write image. Please try again or contact an administrator.';

const ERROR_NO_BADGE_ID = 'Specify a badge ID.';
const ERROR_NO_BADGE_DESCRIPTION = 'Specify a badge description.';
const ERROR_INVALID_BADGE_DESCRIPTION = `A badge description can only contain a-z, A-Z, 0-9, ', ", (, ), and spaces.`;
const ERROR_INVALID_BADGE_NAME_TEMPLATE = `A badge description can only contain a-z, A-Z, 0-9, ', ", (, ), {, }, and spaces.`;
const ERROR_NO_BADGE_MANAGER = 'Specify a manager.';
const ERROR_NO_BADGE_IMAGE_URL = 'Specify an image URL.';
const ERROR_NO_USER_ID = 'Specify a user.';
const ERROR_NO_BADGE_PRIORITY = 'Specify a priority.';
const ERROR_NON_NUMERIC_BADGE_PRIORITY = 'Specify a numeric priority.';
const ERROR_NON_INTEGER_BADGE_PRIORITY = 'Specify an integer priority.';
const ERROR_INVALID_JSON = 'Specify valid JSON.';

function toLink(buf: string) {
	return buf.replace(/<a roomid="/g, `<a target="replace" href="/`);
}

export const Drafts = new class {
	canCreateDraft(context: Chat.CommandContext | Chat.PageContext) {
		context.checkCan('draft');
	}

	validateName(draftName: string) {
		const id = toID(draftName);

		if (drafts[id]) {
			throw new Chat.ErrorMessage(`Draft "${draftName}" already exists.`);
		}

		return draftName;
	}

	validateFormat(formatName: string) {
		const format = Dex.formats.get(formatName);

		if (!format.exists) {
			throw new Chat.ErrorMessage(`Format "${formatName}" does not exist. Please select a valid format.`);
		}

		if (format.team) {
			throw new Chat.ErrorMessage(`Format "${format.id}" is not a teambuilder format.`);
		}

		return format.id;
	}

	validateBudget(value: string) {
		const numericValue = parseInt(value, 10);

		if (Number.isNaN(numericValue)) {
			throw new Chat.ErrorMessage(`Budget "${value}" is not a valid number.`);
		}

		if (!Number.isFinite(numericValue)) {
			throw new Chat.ErrorMessage(`Budget "${value}" must be a finite number.`);
		}

		if (numericValue <= 0) {
			throw new Chat.ErrorMessage(`Budget "${value}" must be a positive number.`);
		}

		return numericValue;
	}

	createDraft(
		context: Chat.CommandContext | Chat.PageContext,
		user: User,
		nameInput: string,
		formatInput: string,
		budgetInput: string,
		inviteOnlyInput: string,
	) {
		this.canCreateDraft(context);

		const name = this.validateName(nameInput);
		const formatId = this.validateFormat(formatInput);
		const budget = this.validateBudget(budgetInput);
		const inviteOnly = context.meansYes(inviteOnlyInput);

		const draft: Draft = {
			name,
			formatId,
			budget,
			adminId: user.id,
			inviteOnly,
			players: {},
			playerOrder: [],
			pool: [],
			history: [],
			status: 'STOPPED',
		};

		drafts[toID(name)] = draft;
		saveDrafts();
	}

	getDraft(draftName: string, throwError = false) {
		const draftId = toID(draftName);
		const draft = drafts[draftId];

		if (throwError && !draft) {
			throw new Chat.ErrorMessage(`Draft "${draftName}" does not exist.`);
		}

		return drafts[draftId];
	}

	canManageDraft(draft: Draft, user: User) {
		return draft.adminId === user.id;
	}

	addPlayer(
		user: User,
		draftName: string,
		userName: string,
		position = -1,
	) {
		const draft = this.getDraft(draftName, true);

		if (draft.inviteOnly && !this.canManageDraft(draft, user)) {
			throw new Chat.ErrorMessage(`You do not have permission to manage draft "${draftName}".`);
		}

		if (draft.status === 'STARTED') {
			throw new Chat.ErrorMessage(`Draft "${draftName}" has already started. It must be stopped to add more players.`);
		}

		const userId = toID(userName);
		if (draft.players[userId]) {
			throw new Chat.ErrorMessage(`User "${userName}" is already in draft "${draftName}".`);
		}

		draft.players[userId] = {
			userId,
			picks: [],
		};
		draft.playerOrder.push(userId);
		saveDrafts();
	}
};

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
	getOwnedBadges(ownerID: string) {
		return Chat.Badges.getOwnedBadges(ownerID);
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
	getUserManagedBadges(userID: string): Promise<UserManagedBadge[]> {
		return Chat.Badges.getUserManagedBadges(userID);
	}
	async hasBadge(userID: string, badgeIDs: string[]) {
		const badges = await Badges.getUserBadges(userID);
		return badges.some((badge) => badgeIDs.includes(badge.badge_id));
	}
	getBadgeManagers(badgeID: string): Promise<UserManagedBadge[]> {
		return Chat.Badges.getBadgeManagers(badgeID);
	}
	async canManageBadge(userID: string, badgeID: string) {
		const badge = await Badges.getBadge(badgeID);
		if (!badge) return false;
		const badgeManagers = await Badges.getBadgeManagers(badgeID);
		return [badge.owner_id, ...badgeManagers.map((badgeManager) => badgeManager.user_id)].includes(userID);
	}
	// Modification
	createBadge(badgeID: string, badgeName: string, managerID: string, filePath: string, badgeNameTemplate?: string) {
		return Chat.Badges.createBadge(badgeID, badgeName, managerID, filePath, badgeNameTemplate);
	}
	async deleteBadge(badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Badges.deleteUserBadges(badgeID, requester);
		await Chat.Badges.deleteBadge(badgeID, requester.id, overridePermissions);
	}
	async updateBadgeAttribute(
		badgeID: string,
		attributeName: UpdateableBadgeAttribute,
		attributeValue: any,
		requester: User,
		override = false,
	) {
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
			sendPM(`/html <div class="infobox">You received a badge: ${this.createRawBadgeHtml(badge.badge_name, badge.file_name)}</div>`, toID(userID));
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
	async updateBadgeData(userID: string, badgeID: string, data: any, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.updateBadgeData(userID, badgeID, data, requester.id, overridePermissions);
		await Badges.updateUser(userID);
	}
	async addManagedBadgeToUser(userID: string, badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.addManagedBadgeToUser(userID, badgeID, requester.id, overridePermissions);

		const badge = await Chat.Badges.getBadge(badgeID);
		if (badge) {
			sendPM(`/html <div class="infobox">You now manage badge: ${this.createRawBadgeHtml(badge.badge_name, badge.file_name)}</div>`, toID(userID));
		}
	}
	async removeManagedBadgeFromUser(userID: string, badgeID: string, requester: User, override = false) {
		const overridePermissions = override || Badges.canOverrideBadgeOwnership(requester);
		await Chat.Badges.removeManagedBadgeFromUser(userID, badgeID, requester.id, overridePermissions);
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
			owned: '<i class="fa fa-user"></i>',
			managed: '<i class="fa fa-get-pocket"></i>',
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
		userBadgePageHtml += visibleBadges.map(
			(visibleBadge) => Badges.createRawBadgeHtml(visibleBadge.badge_name, visibleBadge.file_name),
		).join('');
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
	createManagedBadgePageHtml(ownedBadges: Badge[], managedBadges: Badge[]) {
		let managedBadgePageHtml = '<div class="pad">';
		managedBadgePageHtml += Badges.createBadgeHeaderButtons('managed');
		managedBadgePageHtml += '<h3>Your Managed Badges</h3>';

		managedBadgePageHtml += '<h4>Directly Owned Badges</h4>';

		if (ownedBadges.length) {
			managedBadgePageHtml += ownedBadges.map(Badges.createManagedBadgePageElementHtml).join('');
		} else {
			managedBadgePageHtml += '<em>you directly manage no badges on Showdown lol</em>';
		}

		managedBadgePageHtml += '<h4>Delegated Badges</h4>';

		if (managedBadges.length) {
			managedBadgePageHtml += managedBadges.map(Badges.createManagedBadgePageElementHtml).join('');
		} else {
			managedBadgePageHtml += '<em>you have been delegated no badges on Showdown lol</em>';
		}

		managedBadgePageHtml += '</div>';
		return managedBadgePageHtml;
	}
};

export const pages: Chat.PageTable = {
	draft(query, user, connection) {
		return ((pages.drafts as Chat.PageTable).view as Chat.PageHandler).call(this, query, user, connection);
	},
	drafts: {
		async all(query, user, connection) {
			TeamsHandler.validateAccess(connection);
			const targetUserid = toID(query.shift()) || user.id;
			let count = Number(query.shift()) || 10;
			if (count > MAX_TEAMS) count = MAX_TEAMS;
			this.title = `[Teams] ${targetUserid}`;
			const teams = await TeamsHandler.list(targetUserid, count, user.id !== targetUserid);
			let buf = `<div class="ladder pad"><h2>${targetUserid}'s last ${Chat.count(count, "teams")}</h2>`;
			buf += refresh(this);
			buf += `<br /><a class="button" href="/view-teams-searchpersonal">Search your teams</a> `;
			buf += `<a class="button" href="/view-teams-searchpublic">Browse public teams</a><br />`;
			if (targetUserid === user.id) {
				buf += `<a class="button" href="/view-teams-upload">Upload new</a>`;
			}
			buf += `<hr />`;
			for (const team of teams) {
				buf += TeamsHandler.preview(team, user);
				buf += `<hr />`;
			}
			const total = await TeamsHandler.count(user.id);
			if (total > count) {
				buf += `<button class="button" name="send" value="/j view-teams-all-${targetUserid}-${count + 20}">View more</button>`;
			}
			return buf;
		},
		async view(query, user, connection) {
			TeamsHandler.validateAccess(connection);
			const teamid = toID(query.shift() || "");
			const password = toID(query.shift());
			this.title = `[View Team]`;
			if (!teamid.length) {
				throw new Chat.ErrorMessage(`Invalid team ID.`);
			}
			const team = await TeamsHandler.get(teamid);
			if (!team) {
				this.title = `[Invalid Team]`;
				return this.errorReply(`No team with the ID ${teamid} was found.`);
			}
			if (team?.private && user.id !== team.ownerid && password !== team.private) {
				this.title = `[Private Team]`;
				return this.errorReply(`That team is private.`);
			}
			this.title = `[Team] ${team.teamid}`;
			if (user.id !== team.ownerid) {
				void TeamsHandler.updateViews(team.teamid);
			}
			return `<div class="ladder pad">` + TeamsHandler.renderTeam(team, user) + "</div>";
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
	{
		predicate: (predicateArg) => nameRegex.test(predicateArg),
		transform: Utils.escapeHTML,
		errorMessage: ERROR_INVALID_BADGE_DESCRIPTION,
	},
	applyPredicate(
		{
			predicate: isNotNullOrUndefined,
			transform: (transformArg) => transformArg.trim(),
			errorMessage: ERROR_NO_BADGE_DESCRIPTION,
		},
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
		{
			predicate: isNotNullOrUndefined,
			transform: (transformArg) => transformArg.trim(),
			errorMessage: ERROR_NO_BADGE_IMAGE_URL,
		},
		arg,
	),
);

const getUserID = (arg: string) => applyPredicate(
	{predicate: isNotNullOrUndefined, transform: toID, errorMessage: ERROR_NO_USER_ID},
	arg,
);

const getBadgePriority = (arg: string) => applyPredicate(
	{
		predicate: (predicateArg) => Number.isInteger(predicateArg),
		transform: identity,
		errorMessage: ERROR_NON_INTEGER_BADGE_PRIORITY,
	},
	applyPredicate(
		{
			predicate: (predicateArg) => !Number.isNaN(parseInt(predicateArg)),
			transform: parseInt,
			errorMessage: ERROR_NON_NUMERIC_BADGE_PRIORITY,
		},
		applyPredicate(
			{
				predicate: isNotNullOrUndefined,
				transform: (transformArg) => transformArg.trim(),
				errorMessage: ERROR_NO_BADGE_PRIORITY,
			},
			arg,
		),
	),
);

const getBadgeNameTemplate = (arg: string) => applyPredicate(
	{
		predicate: (predicateArg) => nameTemplateRegex.test(predicateArg),
		transform: Utils.escapeHTML,
		errorMessage: ERROR_INVALID_BADGE_NAME_TEMPLATE,
	},
	applyPredicate(
		{
			predicate: isNotNullOrUndefined,
			transform: (transformArg) => transformArg.trim(),
			errorMessage: ERROR_NO_BADGE_DESCRIPTION,
		},
		arg,
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

				const ownedBadges = await Badges.getOwnedBadges(userID);
				const managedBadges = await Badges.getUserManagedBadges(userID);

				return this.sendReplyBox(Badges.createBadgeListHtml(message, [...ownedBadges, ...managedBadges]));
			} else {
				const ownedBadges = await Badges.getOwnedBadges(user.id);
				const managedBadges = await Badges.getUserManagedBadges(userID);

				return this.sendReplyBox(Badges.createBadgeListHtml(message, [...ownedBadges, ...managedBadges]));
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
			this.runBroadcast();

			const id = getBadgeID(target);

			const badges = await Badges.getBadgeOwners(id, user);

			return this.sendReplyBox(Badges.createBadgeOwnerListHtml(message, badges));
		},
		new: 'create',
		async create(target, room, user) {
			Badges.checkHasBadgePermission(this);

			const [rawID, rawDescription, rawManagerID, rawImageUrl, rawBadgeNameTemplate] = target.split(',');

			const id = getBadgeID(rawID);
			const description = getBadgeDescription(rawDescription);
			const managerID = getBadgeManagerID(rawManagerID);
			const imageUrl = getBadgeImageUrl(rawImageUrl);
			const imageFileName = await Badges.downloadBadgeImage(id, imageUrl);
			let badgeNameTemplate: string | undefined = undefined;

			if (rawBadgeNameTemplate) {
				badgeNameTemplate = getBadgeNameTemplate(rawBadgeNameTemplate);
			}

			await Badges.createBadge(id, description, managerID, imageFileName, badgeNameTemplate);

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
			async template(target, room, user) {
				const [rawID, rawBadgeNameTemplate] = target.split(',');

				const id = getBadgeID(rawID);
				const badgeNameTemplate = getBadgeNameTemplate(rawBadgeNameTemplate);

				await Badges.updateBadgeAttribute(id, 'badge_name_template', badgeNameTemplate, user);

				this.refreshPage('badge-managed');
				return this.sendReply(`Updated template of Badge '${id}' to '${badgeNameTemplate}'.`);
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
		async data(target, room, user) {
			Badges.checkCanUse(this);

			const [rawUserID, rawBadgeID, ...rawData] = target.split(',');
			const userID = getUserID(rawUserID);
			const badgeID = getBadgeID(rawBadgeID);

			try {
				const data = JSON.parse(rawData.join(','));

				await Badges.updateBadgeData(userID, badgeID, data, user);

				return this.sendReply(`Updated Badge '${badgeID}' data fom User '${userID}'.`);
			} catch (e) {
				throw new Chat.ErrorMessage(ERROR_INVALID_JSON);
			}
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
		manage: 'manager',
		manager: {
			async list(target) {
				Badges.checkCanUse(this);
				const badgeID = getBadgeID(target);
				const badgeManagers = await Badges.getBadgeManagers(badgeID);

				return this.sendReply(`Managers: ${badgeManagers.map((badgeManager) => badgeManager.user_id).join(', ')}`);
			},
			grant: 'add',
			async add(target, room, user) {
				Badges.checkCanUse(this);
				const [rawUserID, rawBadgeID] = target.split(',').map(toID);

				const userID = getUserID(rawUserID);
				const badgeID = getBadgeID(rawBadgeID);

				await Badges.addManagedBadgeToUser(userID, badgeID, user);

				return this.sendReply(`Granted Management of Badge '${badgeID}' to User '${userID}'.`);
			},
			revoke: 'remove',
			async remove(target, room, user) {
				Badges.checkCanUse(this);
				const [rawUserID, rawBadgeID] = target.split(',');

				const userID = getUserID(rawUserID);
				const badgeID = getBadgeID(rawBadgeID);

				await Badges.removeManagedBadgeFromUser(userID, badgeID, user);

				return this.sendReply(`Removed Management of Badge '${badgeID}' from User '${userID}'.`);
			},
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
			`<code>/badge set template [badge id], [image url]</code>: updates a badge with the given image. Requires: & or ownership<br />` +
			`<code>/badge delete [badge id]</code>: deletes a badge. Requires: & or ownership<br />` +
			`<code>/badge add [user], [badge id]</code>: grants a user a badge. Requires: & or ownership<br />` +
			`<code>/badge remove [user], [badge id]</code>: revokes a badge from a user. Requires: & or ownership<br />` +
			`<code>/badge data [user], [badge id], [data]</code>: sets badge data for a user. Requires: & or ownership<br />` +
			`<code>/badge on [badge id]</code>: displays a badge you own<br />` +
			`<code>/badge off [badge id]</code>: hides a badge you own<br />` +
			`<code>/badge order [badge id], [priority]</code>: sets the order of a badge you own<br />`
		);
	},
};

export const loginfilter: Chat.LoginFilter = user => {
	if (!Config.usesqlitebadges) {
		return;
	}

	void Badges.updateUser(user.id);
};

import {REST, Routes} from 'discord.js';
import {FS} from '../../lib';
import {Badges} from './badges';

const DISCORD_BOT_ID = "mrsablebot"; // TODO: Make this configurable
const DISCORD_BADGE_ID = "discord";
const MINIMUM_TOURS_REQUIRED = 4;
const TOUR_BADGE_ID = "tourfarmer";
const OTHER_BADGES: [number, string][] = [
	[1, "tournamentwinner"],
	[2, "2tournamentwinner"],
	[3, "3tournamentwinner"],
];

interface Data {
	tours: Record<string, number>;
	discord: Record<string, string>;
}

const defaultData: Data = {
	tours: {},
	discord: {},
};

const data: Data = JSON.parse(
	FS('config/chat-plugins/data-badges.json').readIfExistsSync() || JSON.stringify(defaultData),
);

const saveData = () => {
	FS('config/chat-plugins/data-badges.json').writeUpdate(() => JSON.stringify(data));
};

const checkBadgesEnabled = () => {
	if (!Config.usesqlitebadges) {
		throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
	}
};

const checkCanUpdateTours = (user: User) => Badges.canManageBadge(user.id, TOUR_BADGE_ID);

export const getTourWins = (userID: string) => data.tours[userID] || 0;

const changeTourWins = (userID: string, func: (previousWins: number) => number) => {
	if (!data.tours[userID]) data.tours[userID] = 0;

	data.tours[userID] = func(data.tours[userID]);
	saveData();

	return data.tours[userID];
};

const checkTourThreshold = async (userID: string, user: User) => {
	const userTourWins = getTourWins(userID);

	try {
		await Promise.all(OTHER_BADGES.map(async ([threshold, badgeId]) => {
			if (userTourWins >= threshold) {
				await Badges.addBadgeToUser(userID, badgeId, user, true);
			}
		}));
	} catch (e) { }

	if (userTourWins >= MINIMUM_TOURS_REQUIRED) {
		try {
			try {
				await Badges.addBadgeToUser(userID, TOUR_BADGE_ID, user, true);
			} catch (e) { }

			await Badges.updateBadgeData(userID, TOUR_BADGE_ID, {wins: userTourWins}, user, true);
		} catch (e) { return false; }

		return true;
	}

	return false;
};

const addDiscordBadge = async (user: User, username: string) => {
	try {
		try {
			await Badges.addBadgeToUser(user.id, DISCORD_BADGE_ID, user, true);
		} catch (e) { }

		await Badges.updateBadgeData(user.id, DISCORD_BADGE_ID, {username}, user, true);
	} catch (e) { return false; }

	return true;
};

export const transferTourWins = async (oldUser: string, newUser: string, user: User) => {
	const oldTourWins = getTourWins(toID(oldUser));
	changeTourWins(toID(newUser), () => oldTourWins);
	changeTourWins(toID(oldUser), () => 0);
	await checkTourThreshold(toID(newUser), user);
	await checkTourThreshold(toID(oldUser), user);
};

const createLeaderboardHtml = (data: Data) => {
	let leaderboardHtml = '<table>';
	let entries = Object.entries(data.tours);
	entries.sort((a, b) => b[1] - a[1]);
	entries = entries.slice(0, 50);
	entries.forEach(([userId, wins], index) => {
		leaderboardHtml += '<tr>';
		leaderboardHtml += `<td>#${index + 1} ${userId}: ${wins} wins</td>`;
		leaderboardHtml += '</tr>';
	});
	leaderboardHtml += '</table>';

	return leaderboardHtml;
};

export const commands: Chat.ChatCommands = {
	dbadge: 'databadge',
	databadge: {
		tour: 'tournament',
		tours: 'tournament',
		tournament: {
			leaderboard(target) {
				this.runBroadcast();
				checkBadgesEnabled();

				return this.sendReplyBox('<b><u>Tour Win Leaderboard</u></b><br />' + createLeaderboardHtml(data));
			},
			get(target, room, user) {
				checkBadgesEnabled();

				const userID = toID(target);
				const tourWins = getTourWins(userID);

				return this.sendReplyBox(`User ${userID} has ${tourWins} wins.`);
			},
			async set(target, room, user) {
				checkBadgesEnabled();
				await checkCanUpdateTours(user);

				const [rawUserID, rawValue] = target.split(',');
				const userID = toID(rawUserID);
				const value = parseInt(toID(rawValue));

				if (Number.isNaN(value)) {
					throw new Chat.ErrorMessage(`Invalid tour amount ${value} specified.`);
				}

				const newTourWins = changeTourWins(userID, () => value);
				const receivedBadge = await checkTourThreshold(userID, user);

				this.addGlobalModAction(`${user.name} added set ${userID} to ${newTourWins} tour wins.`);
				return this.sendReplyBox(`User ${userID} has ${newTourWins} wins.${receivedBadge ? ` They have been granted the ${TOUR_BADGE_ID} badge.` : ''}`);
			},
			add: 'increment',
			async increment(target, room, user) {
				checkBadgesEnabled();
				await checkCanUpdateTours(user);

				const userID = toID(target);

				const newTourWins = changeTourWins(userID, (previousValue) => previousValue + 1);
				const receivedBadge = await checkTourThreshold(userID, user);

				this.addGlobalModAction(`${user.name} has added 1 tour win to ${userID} (${newTourWins} total wins)`);
				return this.sendReplyBox(`User ${userID} has ${newTourWins} wins.${receivedBadge ? ` They have been granted the ${TOUR_BADGE_ID} badge.` : ''}`);
			},
			remove: 'decrement',
			async decrement(target, room, user) {
				checkBadgesEnabled();
				await checkCanUpdateTours(user);

				const userID = toID(target);

				const newTourWins = changeTourWins(userID, (previousValue) => previousValue - 1);
				const receivedBadge = await checkTourThreshold(userID, user);

				this.addGlobalModAction(`${user.name} has removed 1 tour win from ${userID} (${newTourWins} total wins)`);
				return this.sendReplyBox(`User ${userID} has ${newTourWins} wins.${receivedBadge ? ` They have been granted the ${TOUR_BADGE_ID} badge.` : ''}`);
			},
		},
		tourhelp: 'tournamenthelp',
		tourshelp: 'tournamenthelp',
		tournamenthelp() {
			this.sendReplyBox(
				`<code>/databadge tours get [user id]</code>: checks how many tour wins a user has.<br />` +
				`<code>/databadge tours set [user id]</code>: sets how many tour wins a user has. Requires: ${TOUR_BADGE_ID} badge ownership<br />` +
				`<code>/databadge tours add [user id]</code>: adds a tour win to a user. Requires: ${TOUR_BADGE_ID} badge ownership<br />` +
				`<code>/databadge tours remove [user id]</code>: checks how many tour wins a user has. Requires: ${TOUR_BADGE_ID} badge ownership<br />`
			);
		},
		discord: {
			async activate(target, room, user) {
				if (!Config.discord) throw new Chat.ErrorMessage('Discord functionality is not enabled.');

				const discordId = data.discord[user.id];

				if (!discordId) throw new Chat.ErrorMessage('You have no linked Discord id.');

				const rest = new REST().setToken(Config.discord);
				const discordUser = await rest.get(Routes.user(discordId)) as any;
				const username = discordUser.discriminator === '0' ?
					discordUser.username : `${discordUser.username}#${discordUser.discriminator}`;

				const success = await addDiscordBadge(user, username);
				if (!success) throw new Chat.ErrorMessage('An error has occurred.');

				return this.sendReplyBox('Your Discord badge has been activated and updated.');
			},
			get(target, room, user) {
				const discordId = data.discord[user.id];
				if (!discordId) throw new Chat.ErrorMessage('You have no linked Discord id.');

				return this.sendReplyBox(`Your linked Discord id is ${discordId}`);
			},
			set(target, room, user) {
				if (user.id !== DISCORD_BOT_ID) throw new Chat.ErrorMessage('You do not have permission to manage this.');

				const [userId, discordId] = target.split(',').map(toID);
				data.discord[userId] = discordId;
				saveData();

				return this.sendReplyBox(`User ${userId} has newly associated Discord id ${discordId}`);
			},
		},
	},
};

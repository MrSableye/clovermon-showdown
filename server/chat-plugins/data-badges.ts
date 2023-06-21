import {FS} from '../../lib';
import {Badges} from './badges';

const MINIMUM_TOURS_REQUIRED = 4;
const TOUR_BADGE_ID = "tourfarmer";
const OTHER_BADGES: [number, string][] = [
	[1, "tournamentwinner"],
	[2, "2tournamentwinner"],
	[3, "3tournamentwinner"],
];

interface Data {
	tours: Record<string, number>;
}

const data: Data = JSON.parse(
	FS('config/chat-plugins/data-badges.json').readIfExistsSync() || "{}"
);

const saveData = () => {
	FS('config/chat-plugins/data-badges.json').writeUpdate(() => JSON.stringify(data));
};

const checkBadgesEnabled = () => {
	if (!Config.usesqlitebadges) {
		throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
	}
};

const checkCanUpdateTours = async (user: User) => {
	const badge = await Badges.getBadge(TOUR_BADGE_ID);
	const managers = await Badges.getBadgeManagers(TOUR_BADGE_ID);

	if (!badge) {
		throw new Chat.ErrorMessage(`Tour badge ${TOUR_BADGE_ID} doesn't exist.`);
	}

	const canUpdate = [badge.owner_id, ...managers.map((manager) => manager.user_id)].includes(user.id);

	if (!canUpdate) {
		throw new Chat.ErrorMessage('You do not have permission to manage this.');
	}
};

const getTourWins = (userID: string) => {
	return data.tours[userID] || 0;
};

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
	} catch (e) {}

	if (userTourWins >= MINIMUM_TOURS_REQUIRED) {
		try {
			try {
				await Badges.addBadgeToUser(userID, TOUR_BADGE_ID, user, true);
			} catch (e) {}

			await Badges.updateBadgeData(userID, TOUR_BADGE_ID, { wins: userTourWins }, user, true);
		} catch (e) { return false; }

		return true;
	}

	return false;
};

export const commands: Chat.ChatCommands = {
	dbadge: 'databadge',
	databadge: {
		tour: 'tournament',
		tours: 'tournament',
		tournament: {
			async get(target, room, user) {
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
				const value = parseInt(toID(rawValue), 10);

				if (Number.isNaN(value)) {
					throw new Chat.ErrorMessage(`Invalid tour amount ${value} specified.`);
				}

				const newTourWins = changeTourWins(userID, () => value);
				const receivedBadge = await checkTourThreshold(userID, user);

				return this.sendReplyBox(`User ${userID} has ${newTourWins} wins.${receivedBadge ? ` They have been granted the ${TOUR_BADGE_ID} badge.` : ''}`);
			},
			add: 'increment',
			async increment(target, room, user) {
				checkBadgesEnabled();
				await checkCanUpdateTours(user);

				const userID = toID(target);

				const newTourWins = changeTourWins(userID, (previousValue) => previousValue + 1);
				const receivedBadge = await checkTourThreshold(userID, user);

				return this.sendReplyBox(`User ${userID} has ${newTourWins} wins.${receivedBadge ? ` They have been granted the ${TOUR_BADGE_ID} badge.` : ''}`);
			},
			remove: 'decrement',
			async decrement(target, room, user) {
				checkBadgesEnabled();
				await checkCanUpdateTours(user);

				const userID = toID(target);

				const newTourWins = changeTourWins(userID, (previousValue) => previousValue - 1);
				const receivedBadge = await checkTourThreshold(userID, user);

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
	},
};

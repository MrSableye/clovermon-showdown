import {Badge} from '../badges';
import {Badges} from './badges';

interface SeasonalBadge {
	badgeId: string;
	message: string;
	seasonStart: string;
	seasonEnd: string;
}

interface InitializedSeasonalBadge extends SeasonalBadge {
	badge: Badge;
}

let seasonalBadges: InitializedSeasonalBadge[] = [];
let isInitialized = false;

const initializeSeasonalBadges = async () => {
	if (isInitialized || !Config.usesqlitebadges) return;
	const badgesToInitialize = [
		{
			badgeId: 'christmas',
			message: 'Happy Holidays! Unwrap a nifty badge!',
			seasonStart: '12-25',
			seasonEnd: '12-31',
		},
		{
			badgeId: 'anniversary',
			message: 'Happy anniversay, Clovermon Showdown!',
			seasonStart: '01-16',
			seasonEnd: '01-20',
		},
	];
	const initializedSeasonalBadges: InitializedSeasonalBadge[] = [];

	await Promise.all(badgesToInitialize.map(async (badgeToInitialize) => {
		const badge = await Badges.getBadge(badgeToInitialize.badgeId);

		if (badge) {
			initializedSeasonalBadges.push({
				...badgeToInitialize,
				badge,
			});
		}
	}));

	seasonalBadges = initializedSeasonalBadges;
	isInitialized = true;
};

const createDateString = (date: Date): string => {
	let month = `${date.getMonth() + 1}`;
	if (month.length < 2) month = '0' + month;

	let day = `${date.getDate()}`;
	if (day.length < 2) day = '0' + day;

	return `${month}-${day}`;
};

const isInSeason = (date: Date, seasonalBadge: SeasonalBadge): boolean => {
	const {seasonStart, seasonEnd} = seasonalBadge;
	const dateString = createDateString(date);

	if (seasonalBadge.seasonStart.localeCompare(seasonalBadge.seasonEnd) <= 0) {
		return (seasonStart.localeCompare(dateString) <= 0) && (dateString.localeCompare(seasonEnd) <= 0);
	} else {
		return (('01-01'.localeCompare(dateString) <= 0) && dateString.localeCompare(seasonEnd) <= 0) &&
		((dateString.localeCompare('12-31') <= 0) && seasonStart.localeCompare(dateString) <= 0);
	}
};

export const loginfilter: Chat.LoginFilter = user => {
	void initializeSeasonalBadges().then(() => {
		seasonalBadges.forEach((seasonalBadge) => {
			if (isInSeason(new Date(), seasonalBadge)) {
				void Badges.getUserBadges(user.id)
					.then((userBadges) => {
						const hasBadge = userBadges.some((userBadge) => userBadge.badge_id === seasonalBadge.badgeId);
						if (!hasBadge) {
							void Badges.addBadgeToUser(user.id, seasonalBadge.badgeId, user, true)
								.then(() => {
									user.send(`|pm|&|${user.tempGroup}${user.name}|/raw <div class="broadcast-blue"><b>${seasonalBadge.message}</b></div>`);
								});
						}
					});
			}
		});
	});
};

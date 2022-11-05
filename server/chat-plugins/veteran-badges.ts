import {Badge} from '../badges';
import {Badges} from './badges';

interface VeteranBadgeConfiguration {
	formatId: string;
	badgeId: string;
	minimumElo: 1200;
	minimumBattles: number;
	minimumWinrate: number;
	badge?: Badge;
}

let veteranBadgeConfigurations: VeteranBadgeConfiguration[] = [
	{
		formatId: 'gen8cloveronlyou',
		badgeId: 'ouveteran',
		minimumElo: 1200,
		minimumBattles: 100,
		minimumWinrate: 0.40,
	},
];

const initializeVeteranBadges = async () => {
	veteranBadgeConfigurations = await Promise.all(veteranBadgeConfigurations.map(async (veteranBadgeConfiguration) => {
		if (veteranBadgeConfiguration.badge) return veteranBadgeConfiguration;

		try {
			const badge = await Badges.getBadge(veteranBadgeConfiguration.badgeId);
			return {
				...veteranBadgeConfiguration,
				badge,
			};
		} catch (error) {}

		return veteranBadgeConfiguration;
	}));
};

export const loginfilter: Chat.LoginFilter = user => {
	void initializeVeteranBadges().then(() => {
		veteranBadgeConfigurations.forEach(({formatId, badgeId, minimumElo, minimumBattles, minimumWinrate, badge}) => {
			if (!badge) return;
			const ladder = Ladders(toID(formatId));
			void ladder.getTopData().then((rows) => {
				rows.forEach((row) => {
					const rowUserId = toID(row[2]);
					if (rowUserId !== user.id) return;
					const totalGames = row[3] + row[4] + row[5];
					const winrate = row[3] / totalGames;

					if (totalGames < minimumBattles) return;
					if (winrate < minimumWinrate) return;
					if (row[1] < minimumElo) return;
					void Badges.addBadgeToUser(user.id, badgeId, user, true).catch(() => {});
				});
			}).catch(() => {});
		});
	}).catch(() => {});
};

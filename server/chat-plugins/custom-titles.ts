import {FS, Net} from '../../lib';
import {Badges} from './badges';

const ERROR_USER_INELIGIBLE = 'You are not eligble for a custom title.';

type CssConfig = Record<string, { title: string }>;

const customTitles: CssConfig = JSON.parse(
	FS('config/chat-plugins/custom-titles.json').readIfExistsSync() || "{}"
);

const saveCustomTitles = () => {
	FS('config/chat-plugins/custom-titles.json').writeUpdate(() => JSON.stringify(customTitles));
};

const customTitleBadges = [
	'2tournamentwinner',
	'3tournamentwinner',
];

const canUserHaveCustomTitle = async (user: User): Promise<boolean> => {
	const userBadges = await Badges.getUserBadges(user.id);
	const isTournamentWinner = userBadges.some((userBadge) => customTitleBadges.includes(userBadge.badge_id));
	const isWhitelisted = Config.customtitle[user.id] !== undefined;

	return isTournamentWinner || isWhitelisted;
};

const formatTitle = (string: string) => {
	return string
		.replace(/[^A-Za-z0-9 ]*/, '')
		.replace(/( )+/, ' ');
};

export const commands: Chat.ChatCommands = {
	title: {
		async set(target, room, user) {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			const canHaveTitle = await canUserHaveCustomTitle(user);

			if (!canHaveTitle) {
				throw new Chat.ErrorMessage(ERROR_USER_INELIGIBLE);
			}

			const title = formatTitle(target);

			customTitles[user.id] = { title };
			saveCustomTitles();

			this.sendReply(`|raw| Your title was successfully set. Relog in for it to appear. Title: ${title}`);
		},
	},
};

export const loginfilter: Chat.LoginFilter = user => {
	const customTitle = customTitles[user.id];

	if (customTitle) {
		user.customgroup = customTitle.title;
	}
};

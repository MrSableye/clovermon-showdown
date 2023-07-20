import {FS} from '../../lib';
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
	const isTournamentWinner = await Badges.hasBadge(user.id, customTitleBadges);
	const isWhitelisted = (Config.customtitle || {})[user.id] !== undefined;

	return isTournamentWinner || isWhitelisted;
};

const formatTitle = (string: string) => string
	.replace(/[^A-Za-z0-9 ]*/, '')
	.replace(/( )+/, ' ');

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

			if (title.length === 0) {
				return this.sendReply('|raw| Your title must be at least one character long.');
			} else if (title.length > 18) {
				return this.sendReply('|raw| Your title must be less than 18 characters long.');
			}

			customTitles[user.id] = {title};
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

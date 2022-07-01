import {FS, Net} from '../../lib';
import {Badges} from './badges';

const ERROR_USER_INELIGIBLE = 'You are not eligble for a custom flair.';

const baseUrls: Record<string, string> = {
	pokemon: 'https://raw.githubusercontent.com/Jackinev/pokeicons/master/40x30',
	clover: 'https://raw.githubusercontent.com/MrSableye/clovermon-showdown-assets/master/clover/sprites/pokemon-icons',
};

const CSS_HEADER = `.userlist li button:hover {
	background: rgba(220,230,240,0.7);
}`;

const getBaseUrl = (pokemonMod: string) => baseUrls[pokemonMod] || baseUrls.clover;

const getFlairUrl = (pokemonId: string, pokemonMod: string) => `${getBaseUrl(pokemonMod)}/${pokemonId}.png`;

const createUserCss = (userId: string, pokemonId: string, pokemonMod: string) => `[id$="-userlist-user-${userId}"]{background: url("${getFlairUrl(pokemonId, pokemonMod)}") no-repeat right -7px center;}`;

const createCss = (cssConfig: CssConfig): string => [CSS_HEADER, ...Object.entries(cssConfig).map(([userId, {pokemonId, pokemonMod}]) => createUserCss(userId, pokemonId, pokemonMod))].join('\n');

const writeCss = (content: string) => FS('config/custom.css').writeSync(content);

type CssConfig = Record<string, { pokemonId: string, pokemonMod: string }>;

const cssConfig: CssConfig = JSON.parse(
	FS('config/chat-plugins/custom-flair.json').readIfExistsSync() || "{}"
);

const saveCssConfig = () => {
	FS('config/chat-plugins/custom-flair.json').writeUpdate(() => JSON.stringify(cssConfig));
	writeCss(createCss(cssConfig));
};

const customFlairBadges = [
	'3tournamentwinner',
];

const canUserHaveCustomFlair = async (user: User): Promise<boolean> => {
	const userBadges = await Badges.getUserBadges(user.id);
	const isTournamentWinner = userBadges.some((userBadge) => customFlairBadges.includes(userBadge.badge_id));
	const isWhitelisted = Config.customflair[user.id] !== undefined;

	return isTournamentWinner || isWhitelisted;
};

export const commands: Chat.ChatCommands = {
	flair: {
		async set(target, room, user) {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			const canHaveFlair = await canUserHaveCustomFlair(user);

			if (!canHaveFlair) {
				throw new Chat.ErrorMessage(ERROR_USER_INELIGIBLE);
			}

			const [pokemonId, pokemonMod] = target.split(',').map(toID);
			const flairUrl = getFlairUrl(pokemonId, pokemonMod);

			try {
				await Net(flairUrl).get();
			} catch (e) {
				return this.errorReply('Invalid Clovermon name.');
			}

			cssConfig[user.id] = {pokemonId, pokemonMod};
			saveCssConfig();

			this.sendReply("|raw| Your flair was successfully set. It may take a while for it to show up. Flair:<br /><img src='" + flairUrl + "' width='40' height='30'>");
		},
	},
};

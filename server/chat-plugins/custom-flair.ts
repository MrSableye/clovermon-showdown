import {FS, Net} from '../../lib';
import {Badges} from './badges';

const ERROR_USER_INELIGIBLE = 'You are not eligble for a custom flair.';

const defaultHeight = -6;
const maxHeightChange = 10;

const baseUrls: Record<string, string> = {
	pokemon: 'https://raw.githubusercontent.com/Jackinev/pokeicons/master/40x30',
	clover: 'https://raw.githubusercontent.com/MrSableye/clovermon-showdown-assets/master/clover/sprites/pokemon-icons',
};

const CSS_HEADER = `.userlist li button:hover {
	background: rgba(220,230,240,0.7);
}`;

const getBaseUrl = (pokemonMod: string) => baseUrls[pokemonMod] || baseUrls.clover;

const getFlairUrl = (pokemonId: string, pokemonMod: string) => `${getBaseUrl(pokemonMod)}/${pokemonId}.png`;

const createUserCss = (userId: string, pokemonId: string, pokemonMod: string, heightOffset: number) => `[id$="-userlist-user-${userId}"]{background: url("${getFlairUrl(pokemonId, pokemonMod)}") no-repeat right -7px top ${heightOffset}px;}`;

const createCss = (cssConfig: CssConfig): string => [CSS_HEADER, ...Object.entries(cssConfig).map(([userId, {pokemonId, pokemonMod, heightOffset}]) => createUserCss(userId, pokemonId, pokemonMod, heightOffset))].join('\n');

const writeCss = (content: string) => FS('config/custom.css').writeSync(content);

type CssConfig = Record<string, { pokemonId: string, pokemonMod: string, heightOffset: number }>;

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

			const [pokemon, pokemonMod, heightInput] = target.split(',');
			const flairUrl = getFlairUrl(toID(pokemon), toID(pokemonMod));

			let heightOffset = parseInt(heightInput);

			if (Number.isNaN(heightOffset)) {
				heightOffset = defaultHeight;
			} else if (Math.abs(heightOffset) > maxHeightChange) {
				heightOffset = defaultHeight;
			} else {
				heightOffset = defaultHeight + Math.trunc(heightOffset);
			}

			try {
				await Net(flairUrl).get();
			} catch (e) {
				return this.errorReply('Invalid Clovermon name.');
			}

			cssConfig[user.id] = {pokemonId: toID(pokemon), pokemonMod: toID(pokemonMod), heightOffset};
			saveCssConfig();

			this.sendReply("|raw| Your flair was successfully set. It may take a while for it to show up. Flair:<br /><img src='" + flairUrl + "' width='40' height='30'>");
		},
	},
	flairhelp() {
		this.sendReplyBox(
			`<code>/flair set [pokemon, mod, heightOffset]</code>: sets your flair to the desired pokemon from the specified mod (pokemon or clover) with an optional height adjustment.<br />`,
		);
	},
};

import Axios from 'axios';
import {OFFICIAL_CLODOWN_AVATARS} from '../chat-commands/avatars';

interface WinUsage {
	usage: number;
	win: number;
}

type PokemonStats = WinUsage & {
	partner: Record<string, WinUsage>,
	against: Record<string, WinUsage>,
	item: Record<string, WinUsage>,
	ability: Record<string, WinUsage>,
	nature: Record<string, WinUsage>,
	move: Record<string, WinUsage>,
};

type UsageStats = {
	subsections: string[],
} | {
	subsections: string[],
	totalTeams: number,
	pokemonStats: Record<string, PokemonStats>,
};

/* eslint-disable max-len */
const createAvatarHtml = (
	avatarName: string,
	isCustom = false,
) => `<img src="//${Config.routes.client}/sprites/trainers${isCustom ? '-custom' : ''}/${avatarName}.png" title="${avatarName}" alt="${avatarName}" width="80" height="80" class="pixelated" />`;
/* eslint-enable max-len */

const BASE_URL = 'https://clover.weedl.es';

export const getStats = async (
	format?: string,
	year?: string,
	month?: string,
): Promise<UsageStats | undefined> => {
	try {
		const path = [format, year, month]
			.filter((value) => value !== undefined).join('/');
		const url = `${BASE_URL}/usage/${path}/index.json`;

		const {data} = await Axios.get(url, {
			responseType: 'json',
		});

		if (typeof data === 'string') {
			return undefined;
		}

		return data as UsageStats;
	} catch (error) { }

	return undefined;
};

const formatPercentage = (percentage: number) => Math.round((percentage * 100 + Number.EPSILON) * 100) / 100;
/* eslint-disable max-len */
const resultString = (pokemon: string, usage: number, wins: number, totalTeams: number) => `<span><psicon pokemon="${pokemon}" style="vertical-align:-7px;margin:-2px" />${pokemon} (${formatPercentage(usage / totalTeams)}%, WR: ${formatPercentage(wins / usage)}%)</span>`;
/* eslint-enable max-len */
export const commands: Chat.ChatCommands = {
	clover: {
		avatars() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Avatars</u> <i>(hover for name, try <code>/avatar NAME</code>)</i></b><br />' +
				`${[...OFFICIAL_CLODOWN_AVATARS].map((avatar) => createAvatarHtml(avatar)).join(' ')}`
			);
		},
		donate: 'support',
		support() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Support Clovermon Showdown</u></b> <br />' +
				`<p>Donating to <a href="https://ko-fi.com/mrsableye">Mr. Sableye's Ko-Fi</a> will pay for server costs and server advertisement.</p>` +
				'<p>Donating $5, $10, and $20 will grant you unique donor badges!</p>'
			);
		},
		contribute() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Contribute to Clovermon Showdown</u></b> <br />' +
				`<p>Clovermon Showdown is open source! Bug fixes and new features are welcome from community members. If one of your pull requests is merged, you'll receive a unique badge!</p>` +
				'<p>Repos: <a href="https://github.com/MrSableye/clovermon-showdown">MrSableye/clovermon-showdown</a> / <a href="https://github.com/MrSableye/clovermon-showdown-client">MrSableye/clovermon-showdown-client</a></p>'
			);
		},
		usage: {
			tier: 'format',
			async format(target, room) {
				this.runBroadcast();

				if (!target) {
					return this.sendReplyBox(
						'<b><u>Usage Stats</u></b><br />' +
						'<p>Daily usage stats for most Clovermon Showdown formats can be found here:</p>' +
						'<ul><li><a href="https://clover.weedl.es/usage_new/">Fancy Usage Site</a></li><li><a href="https://clover.weedl.es/usage/">Old Plain Usage Site</a></li></ul>'
					);
				}

				let [targetFormatId, targetYearText, targetMonthText] = target.split(',').map(toID);

				if (!targetFormatId) {
					const format = room?.settings.defaultFormat || room?.battle?.format;
					if (!format) {
						return this.sendReplyBox('Please specify a valid format.');
					}
					targetFormatId = toID(format);
				}

				if (targetYearText) {
					const targetYear = parseInt(targetYearText);
					if (Number.isNaN(targetYear) || targetYear > 3000) {
						return this.sendReplyBox('Please specify a valid year.');
					}
				}

				if (targetMonthText) {
					const targetMonth = parseInt(targetMonthText);
					if (Number.isNaN(targetMonth) || targetMonth > 3000) {
						return this.sendReplyBox('Please specify a valid month.');
					}
				}

				const stats = await getStats(targetFormatId, targetYearText, targetMonthText);

				if (!stats || !('pokemonStats' in stats)) {
					return this.sendReplyBox('No stats available.');
				}

				const allPokemonStats = Object.entries(stats.pokemonStats).sort((entryA, entryB) => {
					const [, pokemonA] = entryA;
					const [, pokemonB] = entryB;

					return pokemonB.usage - pokemonA.usage;
				}).slice(0, 10); // TODO: Add ", all" equivalent maybe

				const messageParts = [targetFormatId, targetYearText, targetMonthText].filter((part) => part !== undefined);
				let resultStr = `<span style="color:#999999;">Usage for ${messageParts.join(',')}:</span><br />`;

				resultStr += allPokemonStats.map(([id, pokemonStats]) => {
					const species = Dex.species.get(id);
					const name = species.name || id;

					return resultString(name, pokemonStats.usage, pokemonStats.win, stats.totalTeams);
				}).join(', ');

				return this.sendReplyBox(resultStr);
			},
			mon: 'pokemon',
			async pokemon(target, room) {
				this.runBroadcast();

				let [targetPokemon, targetFormatId, targetYearText, targetMonthText] = target.split(',').map(toID);

				if (!targetPokemon) {
					return this.sendReplyBox('Please specify a Pokemon.');
				}

				if (!targetFormatId) {
					const format = room?.settings.defaultFormat || room?.battle?.format;
					if (!format) {
						return this.sendReplyBox('Please specify a valid format.');
					}
					targetFormatId = toID(format);
				}

				if (targetYearText) {
					const targetYear = parseInt(targetYearText);
					if (Number.isNaN(targetYear) || targetYear > 3000) {
						return this.sendReplyBox('Please specify a valid year.');
					}
				}

				if (targetMonthText) {
					const targetMonth = parseInt(targetMonthText);
					if (Number.isNaN(targetMonth) || targetMonth > 3000) {
						return this.sendReplyBox('Please specify a valid month.');
					}
				}

				const stats = await getStats(targetFormatId, targetYearText, targetMonthText);

				if (!stats || !('pokemonStats' in stats)) {
					return this.sendReplyBox('No stats available.');
				}

				const pokemonStats = stats.pokemonStats[targetPokemon];

				if (!pokemonStats) {
					return this.sendReplyBox('No stats available.');
				}

				const moves = Object.entries(pokemonStats.move).sort((entryA, entryB) => {
					const [, moveA] = entryA;
					const [, moveB] = entryB;

					return moveB.usage - moveA.usage;
				}).slice(0, 10);

				const abilities = Object.entries(pokemonStats.ability).sort((entryA, entryB) => {
					const [, abilityA] = entryA;
					const [, abilityB] = entryB;

					return abilityB.usage - abilityA.usage;
				});

				const items = Object.entries(pokemonStats.item).sort((entryA, entryB) => {
					const [, itemA] = entryA;
					const [, itemB] = entryB;

					return itemB.usage - itemA.usage;
				}).slice(0, 5);

				const pokemonName = Dex.species.get(targetPokemon)?.name || targetPokemon;
				/* eslint-disable max-len */
				const messageParts = [pokemonName, targetFormatId, targetYearText, targetMonthText].filter((part) => part !== undefined);
				/* eslint-enable max-len */
				let resultStr = `<span style="color:#999999;">Usage for ${messageParts.join(',')}:</span><br />`;

				resultStr += `<psicon pokemon="${pokemonName}" style="vertical-align:-7px;margin:-2px" />${pokemonName}<br />`;
				resultStr += `<strong>Usage</strong>: ${formatPercentage(pokemonStats.usage / stats.totalTeams)}%<br />`;
				resultStr += `<strong>Win Rate</strong>: ${formatPercentage(pokemonStats.win / pokemonStats.usage)}%`;

				const abilitiesStats = abilities.map(([abilityId, abilityStats]) => {
					const ability = Dex.abilities.get(abilityId)?.name || abilityId;
					return `${ability} (${formatPercentage(abilityStats.usage / pokemonStats.usage)}%, WR: ${formatPercentage(abilityStats.win / abilityStats.usage)}%)`;
				});

				if (abilitiesStats.length) {
					resultStr += '<br /><strong>Abilities</strong>: <br />';
					resultStr += abilitiesStats.join('<br />');
				}

				const itemsStats = items.map(([itemId, itemStats]) => {
					const item = Dex.items.get(itemId)?.name || itemId;
					return `${item} (${formatPercentage(itemStats.usage / pokemonStats.usage)}%, WR: ${formatPercentage(itemStats.win / itemStats.usage)}%)`;
				});

				if (itemsStats.length) {
					resultStr += '<br /><strong>Items</strong>: <br />';
					resultStr += itemsStats.join('<br />');
				}

				const movesStats = moves.map(([moveId, moveStats]) => {
					const move = Dex.moves.get(moveId)?.name || moveId;
					return `${move} (${formatPercentage(moveStats.usage / pokemonStats.usage)}%, WR: ${formatPercentage(moveStats.win / moveStats.usage)}%)`;
				});

				if (movesStats.length) {
					resultStr += '<br /><strong>Moves</strong>: <br />';
					resultStr += movesStats.join('<br />');
				}

				return this.sendReplyBox(resultStr);
			},
			''() {
				return this.sendReplyBox(
					'<b><u>Usage Stats</u></b><br />' +
					'<p>Daily usage stats for most Clovermon Showdown formats can be found here:</p>' +
					'<ul><li><a href="https://clover.weedl.es/usage_new/">Fancy Usage Site</a></li><li><a href="https://clover.weedl.es/usage/">Old Plain Usage Site</a></li></ul>'
				);
			},
		},
	},
	cloverhelp() {
		this.runBroadcast();
		this.sendReplyBox(
			`<code>/clover avatars</code>: shows all Clovermon Showdown avatars<br />` +
			`<code>/clover support</code>: shows how you can support Clovermon Showdown<br />` +
			`<code>/clover contribute</code>: shows how you can contribute to Clovermon Showdown<br />` +
			`<code>/clover usage</code>: shows information on Clovermon Showdown usage statistics<br />`
		);
	},
};

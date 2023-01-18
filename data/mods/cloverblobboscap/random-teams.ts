/* eslint max-len: ["error", 240] */

import {Dex} from '../../../sim/dex';
import {PRNG, PRNGSeed} from '../../../sim/prng';

export interface TeamData {
	typeCount: {[k: string]: number};
	typeComboCount: {[k: string]: number};
	baseFormes: {[k: string]: number};
	megaCount?: number;
	zCount?: number;
	has: {[k: string]: number};
	forceResult: boolean;
	weaknesses: {[k: string]: number};
	resistances: {[k: string]: number};
	weather?: string;
	eeveeLimCount?: number;
	gigantamax?: boolean;
}

export class RandomTeams {
	dex: ModdedDex;
	gen: number;
	readonly maxTeamSize: number;
	factoryTier: string;
	format: Format;
	prng: PRNG;

	constructor(format: Format | string, prng: PRNG | PRNGSeed | null) {
		format = Dex.formats.get(format);
		this.dex = Dex.forFormat(format);
		this.gen = this.dex.gen;
		const ruleTable = Dex.formats.getRuleTable(format);
		this.maxTeamSize = ruleTable.maxTeamSize;

		this.factoryTier = '';
		this.format = format;
		this.prng = prng && !Array.isArray(prng) ? prng : new PRNG(prng);
	}

	setSeed(prng?: PRNG | PRNGSeed) {
		this.prng = prng && !Array.isArray(prng) ? prng : new PRNG(prng);
	}

	getTeam(options?: PlayerOptions | null): PokemonSet[] {
		const generatorName = typeof this.format.team === 'string' && this.format.team.startsWith('random') ? this.format.team + 'Team' : '';
		// @ts-ignore
		return this[generatorName || 'randomTeam'](options);
	}

	randomChance(numerator: number, denominator: number) {
		return this.prng.randomChance(numerator, denominator);
	}

	sample<T>(items: readonly T[]): T {
		return this.prng.sample(items);
	}

	random(m?: number, n?: number) {
		return this.prng.next(m, n);
	}

	/**
	 * Remove an element from an unsorted array significantly faster
	 * than .splice
	 */
	fastPop<T>(list: T[], index: number) {
		// If an array doesn't need to be in order, replacing the
		// element at the given index with the removed element
		// is much, much faster than using list.splice(index, 1).
		const length = list.length;
		const element = list[index];
		list[index] = list[length - 1];
		list.pop();
		return element;
	}

	/**
	 * Remove a random element from an unsorted array and return it.
	 * Uses the battle's RNG if in a battle.
	 */
	sampleNoReplace<T>(list: T[]) {
		const length = list.length;
		const index = this.random(length);
		return this.fastPop(list, index);
	}

	randomBlobbosMetronomeTeam(): RandomTeamsTypes.RandomSet[] {
		const sets: RandomTeamsTypes.RandomSet[] = [];

		const blobbosNicknames = [
			'Oboma',
			'Bolbi',
			'Bobbo',
			'Boob',
			'Blebebe',
			'Casanova',
			'Cumslut',
			'Breedwhore',
			'Semen Dumpster',
			'Breed Me',
			'Cum',
			'Zoombini',
			'Not Ditto',
			'Dragon Quest',
			'Digimon',
			'Periwinkle',
			'Bloober',
			'Zoloft',
		];

		const blobbosFormes = this.dex.species.all()
			.filter((species) => species.baseSpecies === 'Blobbos' && !species.battleOnly && species.name !== 'Blobbos');

		while (sets.length < this.maxTeamSize) {
			const blobbosForme = this.sampleNoReplace(blobbosFormes);
			const set = {
				name: this.sampleNoReplace(blobbosNicknames),
				species: blobbosForme.name,
				gender: 'N',
				moves: ['Metronome'],
				ability: blobbosForme.abilities[0],
				item: '',
				evs: {hp: 4, atk: 252, spa: 252},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: 100,
				shiny: this.randomChance(1, 12),
			};

			sets.push(set);
		}

		return sets;
	}
}

export default RandomTeams;

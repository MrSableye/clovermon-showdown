import {toID} from '../../../sim/dex';
import {PRNG, PRNGSeed} from '../../../sim/prng';
import RandomCloverTeams, {RandomBattleSets} from '../clover/random-teams';

export class RandomCapTeams extends RandomCloverTeams {
	constructor(format: Format | string, prng: PRNG | PRNGSeed | null) {
		super(format, prng);
	}

	randomSets: RandomBattleSets = require('./random-sets.json');

	randomTeam() {
		const seed = this.prng.seed;
		const ruleTable = this.dex.formats.getRuleTable(this.format);
		const pokemon: RandomTeamsTypes.RandomSet[] = [];

		// For Monotype
		const isMonotype = ruleTable.has('sametypeclause');
		const typePool = Object.keys(this.dex.data.TypeChart);
		const type = this.sample(typePool);

		// PotD stuff
		let potd: Species | false = false;
		if (global.Config && Config.potd && ruleTable.has('potd')) {
			potd = this.dex.species.get(Config.potd);
		}

		const baseFormes: {[k: string]: number} = {};

		const tierCount: {[k: string]: number} = {};
		const typeCount: {[k: string]: number} = {};
		const typeComboCount: {[k: string]: number} = {};
		const teamDetails: RandomTeamsTypes.TeamDetails = {};

		const pokemonPool = this.getPokemonPool(type, pokemon, isMonotype, true);
		while (pokemonPool.length && pokemon.length < this.maxTeamSize) {
			let species = this.dex.species.get(this.sampleNoReplace(pokemonPool));
			if (!species.exists) continue;
			if (pokemon.length === 0 && this.noLead.includes(toID(species.name))) continue;
			if (!this.randomSets[toID(species.name)]) continue;

			// Check if the forme has moves for random battle
			if ((this.format.gameType === 'singles') || (this.format.gameType === 'freeforall') || (this.format.gameType === 'multi')) {
				if (!species.randomBattleMoves && !this.randomSets[toID(species.name)]) continue;
			} else {
				if (!species.randomDoubleBattleMoves && !this.randomSets[toID(species.name)]) continue;
			}

			// Limit to one of each species (Species Clause)
			if (baseFormes[species.name]) continue;

			// Adjust rate for species with multiple sets
			switch (species.baseSpecies) {
			case 'Arceus': case 'Silvally':
				if (this.randomChance(8, 9) && !isMonotype) continue;
				break;
			case 'Aegislash': case 'Basculin': case 'Gourgeist': case 'Meloetta':
				if (this.randomChance(1, 2)) continue;
				break;
			case 'Greninja':
				if (this.gen >= 7 && this.randomChance(1, 2)) continue;
				break;
			case 'Darmanitan':
				if (species.gen === 8 && this.randomChance(1, 2)) continue;
				break;
			case 'Magearna': case 'Toxtricity': case 'Zacian': case 'Zamazenta': case 'Zarude':
			case 'Appletun': case 'Blastoise': case 'Butterfree': case 'Copperajah': case 'Grimmsnarl': case 'Inteleon': case 'Rillaboom': case 'Snorlax': case 'Urshifu':
				if (this.gen >= 8 && this.randomChance(1, 2)) continue;
				break;
			}

			// Illusion shouldn't be on the last slot
			if (species.name === 'Zoroark' && pokemon.length > 4) continue;

			const tier = species.tier;
			const types = species.types;
			const typeCombo = types.slice().sort().join();

			// Limit one Pokemon per tier, two for Monotype
			// if ((tierCount[tier] >= (isMonotype ? 2 : 1)) && !this.randomChance(1, Math.pow(5, tierCount[tier]))) {
			// 	continue;
			// }

			if (!isMonotype) {
				// Limit two of any type
				let skip = false;
				for (const typeName of types) {
					if (typeCount[typeName] > 1) {
						skip = true;
						break;
					}
				}
				// TODO: RE-ENABLE THIS
				// if (skip) continue;
			}

			// Limit one of any type combination, two in Monotype
			if (typeComboCount[typeCombo] >= (isMonotype ? 2 : 1)) continue;

			// The Pokemon of the Day
			if (!!potd && potd.exists && pokemon.length === 1) species = potd;

			const set = this.randomSet(species, teamDetails, pokemon.length === 0, !['singles', 'freeforall'].includes(this.format.gameType), false);

			// Okay, the set passes, add it to our team
			pokemon.push(set);

			if (pokemon.length === this.maxTeamSize) {
				// Set Zoroark's level to be the same as the last Pokemon
				const illusion = teamDetails['illusion'];
				if (illusion) pokemon[illusion - 1].level = pokemon[5].level;

				// Don't bother tracking details for the 6th Pokemon
				break;
			}

			// Now that our Pokemon has passed all checks, we can increment our counters
			baseFormes[species.baseSpecies] = 1;

			// Increment tier counter
			if (tierCount[tier]) {
				tierCount[tier]++;
			} else {
				tierCount[tier] = 1;
			}

			// Increment type counters
			for (const typeName of types) {
				if (typeName in typeCount) {
					typeCount[typeName]++;
				} else {
					typeCount[typeName] = 1;
				}
			}
			if (typeCombo in typeComboCount) {
				typeComboCount[typeCombo]++;
			} else {
				typeComboCount[typeCombo] = 1;
			}

			// Track what the team has
			if (set.ability === 'Drizzle' || set.moves.includes('raindance')) teamDetails['rain'] = 1;
			if (set.ability === 'Drought' || set.moves.includes('sunnyday')) teamDetails['sun'] = 1;
			if (set.ability === 'Sand Stream') teamDetails['sand'] = 1;
			if (set.ability === 'Snow Warning') teamDetails['hail'] = 1;
			if (set.moves.includes('spikes')) teamDetails['spikes'] = (teamDetails['spikes'] || 0) + 1;
			if (set.moves.includes('stealthrock')) teamDetails['stealthRock'] = 1;
			if (set.moves.includes('stickyweb')) teamDetails['stickyWeb'] = 1;
			if (set.moves.includes('toxicspikes')) teamDetails['toxicSpikes'] = 1;
			if (set.moves.includes('defog')) teamDetails['defog'] = 1;
			if (set.moves.includes('rapidspin')) teamDetails['rapidSpin'] = 1;
			if (set.moves.includes('auroraveil') || set.moves.includes('reflect') && set.moves.includes('lightscreen')) teamDetails['screens'] = 1;

			// For setting Zoroark's level
			if (set.ability === 'Illusion') teamDetails['illusion'] = pokemon.length;
		}
		if (pokemon.length < this.maxTeamSize) throw new Error(`Could not build a random team for ${this.format} (seed=${seed})`);

		return pokemon;
	}
}

export default RandomCapTeams;

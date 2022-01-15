import {RandomTeams} from '../../random-teams';
import {PRNG, PRNGSeed} from '../../../sim/prng';

export class RandomShowderpTeams extends RandomTeams {
	constructor(format: Format | string, prng: PRNG | PRNGSeed | null) {
		super(format, prng);
	}

  randomMemeSets: any[] = require('./meme-sets.json');

  randomMemeTeam() {
    const indexes = Object.keys(this.randomMemeSets);
    const sets = this.multipleSamplesNoReplace(indexes, 6)
      .map((index) => this.randomMemeSets[index as unknown as number]);

    return sets.map((setData: AnyObject) => {
      const species = this.dex.species.get(setData.species);

      return {
        name: setData.name || species.baseSpecies,
        species: species.name,
        gender: setData.gender || species.gender,
        item: setData.item || '',
        ability: setData.ability || '',
        shiny: setData.shiny || this.randomChance(1, 1024),
        evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0, ...setData.evs},
        nature: setData.nature,
        ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31, ...setData.ivs || {}},
        moves: setData.moves.map((move: any) => this.sampleIfArray(move)),
        happiness: setData.happiness || 255,
        level: setData.level || 100,
      };
    });
  }
}

export default RandomShowderpTeams;

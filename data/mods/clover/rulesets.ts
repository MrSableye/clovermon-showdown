import {Tags} from "../../tags";

export const Rulesets: {[k: string]: ModdedFormatData} = {
	multitier: {
		effectType: 'ValidatorRule',
		name: 'Multi-Tier',
		desc: "Requires 1 Uber mon, 1 OU mon, 2 UU mons, and 2 RU or NU mons.",
		onValidateTeam(team) {
			let uber = 0;
			let ou = 0;
			let uu = 0;
			let ruOrNu = 0;

			team.forEach((set) => {
				const species = this.dex.species.get(set.species || set.name);
				if (species.tier === 'Uber') {
					uber++;
				} else if (species.tier === 'OU' || species.tier === 'UUBL') {
					ou++;
				} else if ((species.tier === 'UU') || (species.tier === 'RUBL')) {
					uu++;
				} else if (['RU', 'NUBL', 'NU', 'LC', 'NFE'].includes(species.tier)) {
					ruOrNu++;
				}
			});

			const errors = [];

			if (uber + ou + uu + ruOrNu !== 6) {
				errors.push('This format requires teams of 6.');
			}

			if (uber !== 1) {
				errors.push('This format requires exactly 1 Uber mon per team.');
			}

			if (ou !== 1) {
				errors.push('This format requires exactly 1 Uber mon per team.');
			}

			if (uu !== 2) {
				errors.push('This format requires exactly 2 UU mons per team.');
			}

			if (ruOrNu !== 2) {
				errors.push('This format requires exactly 2 RU or NU mons per team.');
			}

			return errors;
		},
	},
	blobbosonly: {
		effectType: 'ValidatorRule',
		name: 'Blobbos Only',
		desc: "Only Blobbos and its alternate formes can be used.",
		onValidateSet(set) {
			const species = this.dex.species.get(set.species || set.name);
			if (!Tags.blobbokind.speciesFilter!(species)) {
				return [`${set.name || set.species} is not a forme of Blobbos.`];
			}
		},
	},
	uniqueformesclause: {
		effectType: 'ValidatorRule',
		name: 'Unique Formes Clause',
		desc: 'All formes must be unique.',
		onValidateTeam(team) {
			const problems: string[] = [];
			const ids = new Set();

			team.forEach((set) => {
				let species = this.dex.species.get(set.species || set.name);
				while (species.battleOnly) {
					if (Array.isArray(species.battleOnly)) {
						species = this.dex.species.get(species.battleOnly[0]);
					} else {
						species = this.dex.species.get(species.battleOnly);
					}
				}
				if (ids.has(species.id)) {
					problems.push(`Your team has more than 1 ${species.name}.`);
				}
				ids.add(species.id);
			});

			return problems;
		},
	},
};

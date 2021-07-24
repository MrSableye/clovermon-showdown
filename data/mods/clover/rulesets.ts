export const Rulesets: {[k: string]: ModdedFormatData} = {
	blobbosclause: {
		effectType: 'ValidatorRule',
		name: 'Blobbos Clause',
		desc: "Blobbos cannot use Eviolite. It does not need Eviolite.",
		onValidateSet(set) {
			if (this.toID(set.item) === 'eviolite' && this.toID(set.species || set.name) === 'blobbos') {
				return ['Blobbos cannot use Eviolite. It is far too powerful for such an item.'];
			}
		},
	},
	cloveronly: {
		effectType: 'ValidatorRule',
		name: 'Clover Only',
		desc: "Only allows Pokémon, items, and moves available in Pokémon Clover.",
		onValidateSet(set) {
			const errors = [];

			const species = this.dex.species.get(set.species || set.name);
			if (!species.availability?.clover) {
				errors.push(`${species.baseSpecies} is not in Pokémon Clover.`);
			}

			const item = this.dex.items.get(set.item);
			if (item && item.id && item.id !== '' && !item.availability?.clover) {
				errors.push(`${set.name || set.species} has ${item.name}, which is unavailable in Pokémon Clover.`);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (ability && !ability.availability?.clover) {
				errors.push(`${set.name || set.species} has ${ability.name}, which is unavailable in Pokémon Clover.`);
			}

			set.moves.forEach((moveName) => {
				const move = this.dex.moves.get(this.toID(moveName));

				if (!this.toID(moveName).startsWith('hiddenpower') && !move.availability?.clover) {
					errors.push(`${set.name || set.species} has ${move}, which is unavailable in Pokémon Clover.`);
				}
			});

			if (errors.length > 0) {
				return errors;
			}
		},
	},
	originalityclause: {
		effectType: 'ValidatorRule',
		name: 'Originality Clause',
		desc: "Requires 3 Clovermons and 3 non-Clovermons.",
		onValidateTeam(team) {
			const totalClovermons = team.reduce((total, set) => {
				const species = this.dex.species.get(set.species || set.name);
				return total + (species.availability?.clover ? 1 : 0);
			}, 0);

			if (Math.floor(team.length / 2) !== totalClovermons) {
				return ['Your team requires equal number of Clovermons and non-Clovermons.'];
			}
		},
	},
	multitier: {
		effectType: 'ValidatorRule',
		name: 'Multi-Tier',
		desc: "Requires 1 Uber, 1 OU mon, 2 UU mons, and 2 RU mons.",
		onValidateTeam(team) {
			let uber = 0;
			let ou = 0;
			let uu = 0;
			let ru = 0;

			team.forEach((set) => {
				const species = this.dex.species.get(set.species || set.name);
				if (species.tier === 'Uber') {
					uber++;
				} else if (species.tier === 'OU') {
					ou++;
				} else if ((species.tier === 'UU') || (species.tier === 'RUBL')) {
					uu++;
				} else if ((species.tier === 'RU') || (species.tier === 'LC') || (species.tier === 'NFE')) {
					ru++;
				}
			});

			const errors = [];

			if (uber + ou + uu + ru !== 6) {
				errors.push('This format requires teams of 6.');
			}

			if (uber !== 1) {
				errors.push('This format requires exactly 1 Uber per team.');
			}

			if (ou !== 1) {
				errors.push('This format requires exactly 1 OU mon per team.');
			}

			if (uu !== 2) {
				errors.push('This format requires exactly 2 UU mons per team.');
			}

			if (ru !== 2) {
				errors.push('This format requires exactly 2 RU (or equivalent) mons per team.');
			}

			return errors;
		},
	},
};

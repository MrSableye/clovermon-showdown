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
	multitier: {
		effectType: 'ValidatorRule',
		name: 'Multi-Tier',
		desc: "Requires 1 OU mon, 1 UU mons, 2 RU mons, and 2 NU mons.",
		onValidateTeam(team) {
			let ou = 0;
			let uu = 0;
			let ru = 0;
			let nu = 0;

			team.forEach((set) => {
				const species = this.dex.species.get(set.species || set.name);
				if (species.tier === 'OU' || species.tier === 'UUBL') {
					ou++;
				} else if ((species.tier === 'UU') || (species.tier === 'RUBL')) {
					uu++;
				} else if ((species.tier === 'RU') || (species.tier === 'NUBL')) {
					ru++;
				} else if ((species.tier === 'NU') || (species.tier === 'LC') || (species.tier === 'NFE')) {
					nu++;
				}
			});

			const errors = [];

			if (ou + uu + ru + nu !== 6) {
				errors.push('This format requires teams of 6.');
			}

			if (ou !== 1) {
				errors.push('This format requires exactly 1 OU mon per team.');
			}

			if (uu !== 1) {
				errors.push('This format requires exactly 1 UU mon per team.');
			}

			if (ru !== 2) {
				errors.push('This format requires exactly 2 RU mons per team.');
			}

			if (nu !== 2) {
				errors.push('This format requires exactly 2 NU (or equivalent) mons per team.');
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

			if (species.baseSpecies !== 'Blobbos') {
				return [`${set.name || set.species} is not Blobbos.`];
			}
		},
	},
};

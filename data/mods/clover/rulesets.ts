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
		onValidateTeam(team) {
			const blobbosFormeCount: Record<string, number> = {};
			const errors: string[] = [];

			team.forEach((set) => {
				const species = this.dex.species.get(set.species || set.name);
				let baseSpecies = this.dex.species.get(species.baseSpecies);
				let baseForme = species;
				let maxDepth = 10;
				while (baseSpecies.baseSpecies !== baseSpecies.name && maxDepth > 0) {
					baseForme = baseSpecies;
					baseSpecies = this.dex.species.get(baseSpecies.baseSpecies);
					maxDepth--;
				}

				if (maxDepth === 0) {
					errors.push('Recursive species found. Please report this to an administrator');
				}

				if (baseSpecies.name !== 'Blobbos' && baseSpecies.name !== 'Bootlos') {
					errors.push(`${set.name || set.species} is not a forme of Blobbos.`);
				}

				if (!blobbosFormeCount[baseForme.id]) blobbosFormeCount[baseForme.id] = 0;
				blobbosFormeCount[baseForme.id] = blobbosFormeCount[baseForme.id] + 1;
			});

			Object.entries(blobbosFormeCount).forEach(([formeId, formeCount]) => {
				if (formeCount > 1) {
					const species = this.dex.species.get(formeId);
					errors.push(`You have ${species.name}. You may only have up to 1 ${species.name}`);
				}
			});

			return errors;
		},
	},
};

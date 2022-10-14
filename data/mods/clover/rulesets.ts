export const Rulesets: {[k: string]: ModdedFormatData} = {
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
	clovermonshowdowngold: {
		effectType: 'ValidatorRule',
		name: 'Clovermon Showdown Gold',
		desc: "This forme requires a Clovermon Showdown Gold account.",
		onSwitchInPriority: -1000000,
		onSwitchIn(pokemon) {
			const premiumFormes = ['fuckerkonata'];
			if (premiumFormes.includes(pokemon.species.id)) {
				this.add(
					'message',
					`${pokemon.side.name} tried to use a Clovermon Showdown Gold™ only premium cosmetic forme ${pokemon.species.name}. ` +
					`It has been replaced with the basic ${pokemon.species.baseSpecies}.`
				);
				pokemon.formeChange(pokemon.species.baseSpecies, this.effect, true);
			}
		},
	},
};

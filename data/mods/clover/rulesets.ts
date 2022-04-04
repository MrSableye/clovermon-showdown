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
	cloveronlyminandmega: {
		effectType: 'ValidatorRule',
		name: 'Clover Only Mix and Mega',
		desc: "Only allows Pokémon, items, and moves available in Pokémon Clover.",
		onValidateSet(set) {
			const errors = [];

			const species = this.dex.species.get(set.species || set.name);
			if (!species.availability?.clover) {
				errors.push(`${species.baseSpecies} is not in Pokémon Clover.`);
			}

			const item = this.dex.items.get(set.item);
			if (item && item.id && item.id !== '' && (!item.availability?.clover || item.megaStone)) {
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

				if (species.baseSpecies !== 'Blobbos') {
					errors.push(`${set.name || set.species} is not a forme of Blobbos.`);
				}

				if (blobbosFormeCount[species.id]) blobbosFormeCount[species.id] = 0;
				blobbosFormeCount[species.id] = blobbosFormeCount[species.id] + 1;
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
	noblobbos: {
		effectType: 'ValidatorRule',
		name: 'No Blobbos',
		desc: "Blobbos is illegal.",
		onValidateSet(set) {
			const species = this.dex.species.get(set.species || set.name);

			if (species.baseSpecies === 'Blobbos') {
				return [`${set.name || set.species} is Blobbos. Fun is not allowed.`];
			}
		},
	},
};

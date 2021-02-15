export const Formats: {[k: string]: ModdedFormatData} = {
	atlasonly: {
		effectType: 'ValidatorRule',
		name: 'Atlas Only',
		desc: "Only allows Pokémon, items, and moves available in Pokémon Atlas.",
		onValidateSet(set) {
			const errors = [];

			const species = this.dex.getSpecies(set.species || set.name);
			if (species.availability?.atlas !== 1) {
				errors.push(`${species.baseSpecies} is not in Pokémon Atlas.`);
			}

			const item = this.dex.getItem(set.item);
			// TODO: Remove Clover check
			if (item && item.id && item.id !== '' && (item.availability?.atlas !== 1 && item.availability?.clover !== 1)) {
				errors.push(`${set.name || set.species} has ${item.name}, which is unavailable in Pokémon Atlas.`);
			}

			set.moves.forEach((moveName) => {
				const move = this.dex.getMove(this.toID(moveName));
				// TODO: Remove Clover check
				if (!this.toID(moveName).startsWith('hiddenpower') && move.availability?.atlas !== 1) {
					errors.push(`${set.name || set.species} has ${move}, which is unavailable in Pokémon Atlas.`);
				}
			});

			if (errors.length > 0) {
				return errors;
			}
		},
	},
};

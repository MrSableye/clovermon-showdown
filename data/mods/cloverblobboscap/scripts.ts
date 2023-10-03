export const Scripts: ModdedBattleScriptsData = {
	inherit: 'clovercap',
	actions: {
		inherit: true,
		canMegaEvo(pokemon: Pokemon) {
			const species = pokemon.baseSpecies;
			const altForme = species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			const item = pokemon.getItem();
			// Mega Rayquaza
			if (altForme?.isMega && altForme?.requiredMove &&
				pokemon.baseMoves.includes(this.dex.toID(altForme.requiredMove)) && !item.zMove) {
				return altForme.name;
			}
			const isBlobbos = species.baseSpecies.includes('Blobbos');
			// a hacked-in Megazard X can mega evolve into Megazard Y, but not into Megazard X
			if (!isBlobbos && item.megaEvolves === species.baseSpecies && item.megaStone !== species.name) {
				return item.megaStone;
			}
			// work around for blobbos-kalos
			if (item.megaEvolves === species.name) {
				return item.megaStone;
			}
			return null;
		},
	},
};

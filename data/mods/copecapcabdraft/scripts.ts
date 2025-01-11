export const Scripts: ModdedBattleScriptsData = {
	inherit: 'clovercap',
	pokemon: {
		ignoringItem() {
			const enemyUnnerving = this.foes().some((foe) => foe.hasAbility('unnerve'));
			const recoveryFoods = ['berryjuice', 'leftovers'];

			return !!(
				this.itemState.knockedOff || // Gen 3-4
				(this.battle.gen >= 5 && !this.isActive) ||
				(!this.getItem().ignoreKlutz && this.hasAbility(['klutz', 'originalsin'])) ||
				(enemyUnnerving && recoveryFoods.includes(this.item)) ||
				this.volatiles['embargo'] || this.battle.field.pseudoWeather['magicroom']
			);
		},
	},
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

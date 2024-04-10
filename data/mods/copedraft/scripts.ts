export const Scripts: ModdedBattleScriptsData = {
	inherit: 'clover',
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
};

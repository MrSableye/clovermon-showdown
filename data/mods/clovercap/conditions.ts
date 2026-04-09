export const Conditions: {[k: string]: ModdedConditionData} = {
	/* Modified conditions */
	gem: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify(1.33);
		},
	},
	par: {
    name: 'par',
    onBeforeMove(pokemon) {
      if (this.randomChance(1, 8)) {
        this.add('cant', pokemon, 'par');
        return false;
      }
    },
  },
};

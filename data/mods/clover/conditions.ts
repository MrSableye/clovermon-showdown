export const Conditions: {[k: string]: ModdedConditionData} = {
	gem: {
		inherit: true,
		onBasePower() {
			this.debug('Gem Boost');
			return this.chainModify(1.5);
		},
	},
	backdraft: {
    duration: 2,
    onSideStart(side) {
      this.add('-sidestart', side, 'Backdraft');
    },
    onModifySpe() {
      return this.chainModify(2);
    },
    onSideResidualOrder: 26,
    onSideResidualSubOrder: 5,
    onSideEnd(side) {
      this.add('-sideend', side, 'Backdraft');
    },
  },
  lootable: {
    // this is a slot condition
    name: 'Lootable',
    onStart(pokemon, source) {
      this.effectState.stacks = source.volatiles['stockpile']?.layers || 0;
    },
    onSwap(target) {
      const stacks = this.effectState.stacks || 0;

      for (let i = 0; i < stacks; i++) {
        target.addVolatile('stockpile');
      }
      this.heal(target.baseMaxhp * 0.20 * stacks);

      target.side.removeSlotCondition(target, 'lootable');
    },
	},
};

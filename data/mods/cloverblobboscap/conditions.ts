export const Conditions: {[k: string]: ModdedConditionData} = {
	partiallytrapped: {
		inherit: true,
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
			this.effectState.boundDivisor = source.hasItem('bindingband') || source.hasAbility('constrictor') ? 6 : 8;
		},
	},
};

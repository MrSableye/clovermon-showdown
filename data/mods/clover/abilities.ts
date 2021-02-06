export const Abilities: {[k: string]: ModdedAbilityData} = {
	illuminate: {
		inherit: true,
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		rating: 3,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('illuminate - enhancing accuracy');
			return this.chainModify([0x14CD, 0x1000]);
		},
	},
	galewings: {
		inherit: true,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
	},
};

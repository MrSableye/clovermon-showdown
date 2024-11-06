export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen8',
	actions: {
		inherit: true,
	modifyDamage(baseDamage, pokemon, target, move, suppressMessages = false) {
		const isCrit = target.getMoveHitData(move).crit;
			if (isCrit) {
				baseDamage = this.battle.modify(baseDamage, move.critModifier || 2);
			}
		},
	},
};

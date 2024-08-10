export const Abilities: {[k: string]: ModdedAbilityData} = {
	/* Modified Abilities */
	disguise: {
		inherit: true,
		isNonstandard: null,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) || target.transformed) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) || target.transformed) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem', 'sabsute'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'mimikyutotem' ?
					'Mimikyu-Busted-Totem'	:
					pokemon.species.id === 'sabsute' ?
						'Sabsute-Busted' :
						'Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
	},
	/* Enabled Abilities */
	dragonsmaw: {
		inherit: true,
		isNonstandard: null,
	},
	primordialsea: {
		inherit: true,
		isNonstandard: null,
	},
	rebound: {
		inherit: true,
		isNonstandard: null,
	},
	transistor: {
		inherit: true,
		isNonstandard: null,
	},
	mimicry: {
		inherit: true,
		isNonstandard: null,
	},
	perishbody: {
		inherit: true,
		isNonstandard: null,
	},
	/* WIPMon Abilities */
	leech: {
		inherit: true,
		isNonstandard: null,
	},
	desolateland: {
		inherit: true,
		isNonstandard: null,
	},
	artillery: {
		inherit: true,
		isNonstandard: null,
	},
	beadsofruin: {
		inherit: true,
		isNonstandard: null,
	},
	swordofruin: {
		inherit: true,
		isNonstandard: null,
	},
	ancientfrenzy: {
		inherit: true,
		isNonstandard: null,
	},
	speculate: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearization: {
		inherit: true,
		isNonstandard: null,
	},
	futuuure: {
		inherit: true,
		isNonstandard: null,
	},
	mossyexterior: {
		inherit: true,
		isNonstandard: null,
	},
	you: {
		inherit: true,
		isNonstandard: null,
	},
	izanamisrage: {
		inherit: true,
		isNonstandard: null,
	},
	battlearmor: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		onCriticalHit: false,
		isBreakable: true,
		name: "Battle Armor",
		rating: 1,
		num: 4,
	},
	shellarmor: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		onCriticalHit: false,
		isBreakable: true,
		name: "Shell Armor",
		rating: 1,
		num: 75,
	},
	supportive: {
		inherit: true,
		isNonstandard: null,
	},
};

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
	mindseye: {
		inherit: true,
		isNonstandard: null,
	},
	armortail: {
		inherit: true,
		isNonstandard: null,
	},
	protosynthesis: {
		inherit: true,
		isNonstandard: null,
	},
	quarkdrive: {
		inherit: true,
		isNonstandard: null,
	},
	parentalbond: {
		inherit: true,
		isNonstandard: null,
	},
	steelyspirit: {
		inherit: true,
		isNonstandard: null,
	},
	windrider: {
		inherit: true,
		isNonstandard: null,
	},
	windpower: {
		inherit: true,
		isNonstandard: null,
	},
	eartheater: {
		inherit: true,
		isNonstandard: null,
	},
	electromorphosis: {
		inherit: true,
		isNonstandard: null,
	},
	sharpness: {
		inherit: true,
		isNonstandard: null,
	},
	/* WIPMon Abilities */
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
	futuuuure: {
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
	doomguard: {
		inherit: true,
		isNonstandard: null,
	},
	izanamisrage: {
		inherit: true,
		isNonstandard: null,
	},
	surprise: {
		inherit: true,
		isNonstandard: null,
	},
	almightyidiot: {
		inherit: true,
		isNonstandard: null,
	},
	selfish: {
		inherit: true,
		isNonstandard: null,
	},
	ohmyswirls: {
		inherit: true,
		isNonstandard: null,
	},
	hunter: {
		inherit: true,
		isNonstandard: null,
	},
	rustedremembrance: {
		inherit: true,
		isNonstandard: null,
	},
	goodnight: {
		inherit: true,
		isNonstandard: null,
	},
	solidgem: {
		inherit: true,
		isNonstandard: null,
	},
	awakening: {
		inherit: true,
		isNonstandard: null,
	},
	surgesurfer: {
		onModifySpe(spe) {
			if (this.field.isTerrain('electricterrain')) {
				return this.chainModify(1.5);
			}
		},
		name: "Surge Surfer",
		rating: 3,
		num: 207,
	},
	leech: {
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage) {
				this.heal(move.totalDamage / 4, pokemon);
			}
		},
		name: "Leech",
		rating: 3.5,
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
	swiftswim: {
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		name: "Swift Swim",
		rating: 3,
		num: 33,
	},
	chlorophyll: {
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		name: "Chlorophyll",
		rating: 3,
		num: 34,
	},
	slushrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snow'])) {
				return this.chainModify(1.5);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Slush Rush",
		rating: 3,
		num: 202,
	},
	sandrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.5);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Rush",
		rating: 3,
		num: 146,
	},
	supportive: {
		inherit: true,
		isNonstandard: null,
	},
};

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
	shortcircuit: {
		inherit: true,
		isNonstandard: null,
	},
	propellertail: {
		inherit: true,
		isNonstandard: null,
	},
	symbiosis: {
		inherit: true,
		isNonstandard: null,
	},
	transistor: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		name: "Transistor",
		isNonstandard: null,
		rating: 3.5,
		num: 262,
	},
	punkrock: {
		inherit: true,
		isNonstandard: null,
	},
	purifyingsalt: {
		inherit: true,
		isNonstandard: null,
	},
	ripen: {
		inherit: true,
		isNonstandard: null,
	},

	/* disabled clover abilities */ 
	adminabuse: {
		inherit: true,
		isNonstandard: "Past",
	},
	anability: {
		inherit: true,
		isNonstandard: "Past",
	},
	anyability: {
		inherit: true,
		isNonstandard: "Past",
	},
	bigguy: {
		inherit: true,
		isNonstandard: "Past",
	},
	bonezone: {
		inherit: true,
		isNonstandard: "Past",
	},
	flareheal: {
		inherit: true,
		isNonstandard: "Past",
	},
	waitforit: {
		inherit: true,
		isNonstandard: "Past",
	},
	woke: {
		inherit: true,
		isNonstandard: "Past",
	},
	woodenguard: {
		inherit: true,
		isNonstandard: "Past",
	},
	jihad: {
		inherit: true,
		isNonstandard: "Past",
	},
	phantasma: {
		inherit: true,
		isNonstandard: "Past",
	},
	shitstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	fuku: {
		inherit: true,
		isNonstandard: "Past",
	},
	stinkbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	whiteflames: {
		inherit: true,
		isNonstandard: "Past",
	},
	/* Clover CAP Abilities */
	oldschool: {
		inherit: true,
		isNonstandard: null,
	},
	tetanus: {
		inherit: true,
		isNonstandard: null,
	},
	lizardbrain: {
		inherit: true,
		isNonstandard: null,
	},
	shavedice: {
		inherit: true,
		isNonstandard: null,
	},
	temperamental: {
		inherit: true,
		isNonstandard: null,
	},
	beamboost: {
		inherit: true,
		isNonstandard: null,
	},
	overeager: {
		inherit: true,
		isNonstandard: null,
	},
	swarming: {
		inherit: true,
		isNonstandard: null,
	},
	stoneflesh: {
		inherit: true,
		isNonstandard: null,
	},
	sousaphone: {
		inherit: true,
		isNonstandard: null,
	},
	brainpower: {
		inherit: true,
		isNonstandard: null,
	},
	dispenser: {
		inherit: true,
		isNonstandard: null,
	},
	leech: {
		inherit: true,
		isNonstandard: null,
	},
	supportive: {
		inherit: true,
		isNonstandard: null,
	},
	eclipse: {
		inherit: true,
		isNonstandard: null,
	},
	stopsign: {
		inherit: true,
		isNonstandard: null,
	},
	stormshelter: {
		inherit: true,
		isNonstandard: null,
	},
	zenmonke: {
		inherit: true,
		isNonstandard: null,
	},
	hydrothermal: {
		inherit: true,
		isNonstandard: null,
	},
	frozenbunker: {
		inherit: true,
		isNonstandard: null,
	},
	desolateland: {
		inherit: true,
		isNonstandard: null,
	},
	transfusion: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorarmor: {
		inherit: true,
		isNonstandard: null,
	},
	paletteswap: {
		inherit: true,
		isNonstandard: null,
	},
	collapsingruin: {
		inherit: true,
		isNonstandard: null,
	},
	secondshadow: {
		inherit: true,
		isNonstandard: null,
	},
	mimicry: {
		inherit: true,
		isNonstandard: null,
	},
	powerspot: {
		inherit: true,
		isNonstandard: null,
	},
	pressurefuzed: {
		inherit: true,
		isNonstandard: null,
	},
	sandspit: {
		inherit: true,
		isNonstandard: null,
	},
	colossal: {
		inherit: true,
		isNonstandard: null,
	},
	grasspelt: {
				onModifyDefPriority: 6,
				onModifyDef(pokemon) {
					if (this.field.isTerrain('grassyterrain')) return this.chainModify(2);
				},
				name: "Grass Pelt",
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
	keeneye: {
		onTryBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost.accuracy && boost.accuracy < 0) {
					delete boost[i];
					showMsg = true;
					if (!(effect as ActiveMove).secondaries) {
						this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
					}
				}

				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
				}
			}
		},
		onModifyMove(move) {
			move.ignoreEvasion = true;
		},
		isBreakable: true,
		name: "Keen Eye",
		rating: 0.5,
		num: 51,
	},
	hypercutter: {
		onTryBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost.atk && boost.atk < 0) {
					delete boost[i];
					showMsg = true;
					if (!(effect as ActiveMove).secondaries) {
						this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
					}
				}

				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
				}
			}
		},
		isBreakable: true,
		name: "Hyper Cutter",
	},
	unnerve: {
		inherit: true,
		onFoeTryMove(target, source, effect) {
			if (['milkdrink', 'focusmunch', 'swallow', 'stuffcheeks', 'teatime', 'softboiled'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Unnerve', effect, '[of] ' + target);
				return false;
			}
		},
	},
	heatproof: {
		inherit: true,
		onUpdate(pokemon) {
						if (pokemon.status === 'brn') {
							this.add('-activate', pokemon, 'ability: Heatproof');
							pokemon.cureStatus();
						}
					},
					onSetStatus(status, target, source, effect) {
						if (status.id !== 'brn') return;
						if ((effect as Move)?.status) {
							this.add('-immune', target, '[from] ability: Heatproof');
						}
						return false;
		    	},
		},
	horror: {
		inherit: true,
		isNonstandard: null,
	},
	starguardian: {
		inherit: true,
		isNonstandard: null,
	},
	delirious: {
		inherit: true,
		isNonstandard: null,
	},
	ultraposition: {
		inherit: true,
		isNonstandard: null,
	},
};

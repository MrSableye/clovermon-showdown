export const Moves: {[k: string]: ModdedMoveData} = {
	psyblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	hydrosteam: {
		inherit: true,
		isNonstandard: "Past",
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	matchagotcha: {
		inherit: true,
		isNonstandard: "Past",
	},
	ivycudgel: {
		inherit: true,
		isNonstandard: "Past",
	},
	/* Modified vanilla moves */
	gunkshot: {
		inherit: true,
		accuracy: 70,
		onModifyMove(move) {
			if (this.field.isWeather(['acidrain'])) move.accuracy = true;
		},
		desc: "Has a 30% chance to poison the target. If the weather is Acid Rain, this move does not check accuracy.",
		shortDesc: "30% chance to psn target. Can't miss in Acid Rain",
		isNonstandard: null,
	},
	hurricane: {
		inherit: true,
		basePower: 120,
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
			case 'hail':
			case 'snow':
			case 'raindance':
			case 'primordialsea':
				move.accuracy = true;
				break;
			case 'sunnyday':
			case 'desolateland':
				move.accuracy = 50;
				break;
			}
		},
		desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea, Rain Dance, Hail or Snow, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
		shortDesc: "30% chance to confuse target. Can't miss in rain or hail.",
		isNonstandard: null,
	},
	weatherball: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
			case 'snow':
				move.type = 'Ice';
				break;
			case 'acidrain':
				move.type = 'Poison';
				break;
			case 'midnight':
				move.type = 'Ghost';
				break;
			case 'bladerain':
				move.type = 'Steel';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
			case 'snow':
				move.basePower *= 2;
				break;
			case 'acidrain':
				move.basePower *= 2;
				break;
			case 'midnight':
				move.basePower *= 2;
				break;
			case 'bladerain':
				move.basePower *= 2;
				break;
			}
			this.debug('BP: ' + move.basePower);
		},
		desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Poison type during Acid Rain, Ghost type during Midnight, Steel type during Blade Rain, Ice type during Snow, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, this move remains Normal type and does not double in power.",
		isNonstandard: null,
	},
	venomdrench: {
		inherit: true,
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox' || this.field.isWeather('acidrain')) {
				return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
			}
			return false;
		},
		flags: {protect: 1, reflectable: 1},
		target: "normal",
		desc: "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned or Acid Rain is on the field. Fails if the target is not poisoned or Acid Rain isn't on the field.",
		shortDesc: "Lowers Atk/Sp. Atk/Speed of poisoned foes/during Acid Rain by 1.",
		isNonstandard: null,
	},
	thief: {
		inherit: true,
		basePower: 50,
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, west: 1},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem'] || target.hasItem('antiplebshield')) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
		isNonstandard: null,
	},
	electricterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender') || source?.hasItem('chargedrock')) {
					return 10;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Item') {
					this.effectState.duration = 4;
					this.add('-fieldstart', 'move: Electric Terrain', '[from] item: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Pokemon') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] pokemon: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source.baseSpecies.baseSpecies === 'Himg') {
					if (source?.hasItem('terrainextender') || source?.hasItem('grassyrock')) {
						return 30;
					}
					return 15;
				}
				if (source?.hasItem('terrainextender') || source?.hasItem('grassyrock')) {
					return 10;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Item') {
					this.effectState.duration = 4;
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] item: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Pokemon') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] pokemon: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
		isNonstandard: null,
	},
	mistyterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 10;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Item') {
					this.effectState.duration = 4;
					this.add('-fieldstart', 'move: Misty Terrain', '[from] item: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Pokemon') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] pokemon: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
		isNonstandard: null,
	},
	psychicterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender') || source?.hasItem('weirdrock')) {
					return 10;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				if (target.isSemiInvulnerable() || target.isAlly(source)) return;
				if (!target.isGrounded()) {
					const baseMove = this.dex.moves.get(effect.id);
					if (baseMove.priority > 0) {
						this.hint("Psychic Terrain doesn't affect Pokémon immune to Ground.");
					}
					return;
				}
				this.add('-activate', target, 'move: Psychic Terrain');
				return null;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('psychic terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Item') {
					this.effectState.duration = 4;
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] item: ' + effect.name, '[of] ' + source);
				} else if (effect?.effectType === 'Pokemon') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] pokemon: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Psychic Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
		isNonstandard: null,
	},
	gravity: {
		inherit: true,
		type: "Cosmic",
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent') || source?.hasItem('gravitymodule')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Gravity');
					return 10;
				}
				if (source?.hasItem('gravitycapsule')) {
					this.add('-activate', source, 'item: Gravity Capsule', '[move] Gravity');
					return 4;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Gravity', '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Gravity');
				}
				for (const pokemon of this.getAllActive()) {
					let applies = false;
					if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly')) {
						applies = true;
						this.queue.cancelMove(pokemon);
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['skydrop']) {
						applies = true;
						this.queue.cancelMove(pokemon);

						if (pokemon.volatiles['skydrop'].source) {
							this.add('-end', pokemon.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
						}
						pokemon.removeVolatile('skydrop');
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['magnetrise']) {
						applies = true;
						delete pokemon.volatiles['magnetrise'];
					}
					if (pokemon.volatiles['telekinesis']) {
						applies = true;
						delete pokemon.volatiles['telekinesis'];
					}
					if (applies) this.add('-activate', pokemon, 'move: Gravity');
				}
			},
			onModifyAccuracy(accuracy) {
				if (typeof accuracy !== 'number') return;
				return this.chainModify([6840, 4096]);
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['gravity']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 2,
			onFieldEnd() {
				this.add('-fieldend', 'move: Gravity');
			},
		},
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		onHit(target) {
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'blazingtorque', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'combattorque', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'magicaltorque', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'noxioustorque', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wickedtorque', 'nuswave', 'tsunami', 'blackhole', 'waveshot', 'stringout', 'helldrag', 'tractorbeam', 'vacuumstrike', 'baseballbat', 'homerunbat', 'airstamp', 'fujinwind', 'boo', 'booing', 'ghoulbreath', 'eject', 'magnetpulse', 'fishingrod', 'fairytail', 'agoraphobia', 'ancienttsunami', 'shiftingsands', 'aquariusflow', 'raremetalpoop', 'shepherdcrook', 'moonladder', 'poseidonmaelstrom', 'metalbat', 'violencegust', 'getoverhere', 'fusrodah', 'banhammer',
			];

			const moves = [];
			for (const pokemon of target.side.pokemon) {
				if (pokemon === target) continue;
				for (const moveSlot of pokemon.moveSlots) {
					const moveid = moveSlot.id;
					if (noAssist.includes(moveid)) continue;
					const move = this.dex.moves.get(moveid);
					if (move.isZ || move.isMax) {
						continue;
					}
					moves.push(moveid);
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
		isNonstandard: null,
	},
	copycat: {
		inherit: true,
		onHit(pokemon) {
			const noCopycat = [
				'struggle', 'chatter', 'mimic', 'sketch', 'metronome',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax || move.type === "Shadow") {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
		isNonstandard: null,
	},
	extremeevoboost: {
		inherit: true,
		pp: 5,
		isZ: undefined,
		isNonstandard: null,
	},
	knockoff: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	trickroom: {
		inherit: true,
		type: "Time",
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				} else if (source?.hasItem('Vr Headset')) {
					return 8;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source, '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
	},
	magicroom: {
		inherit: true,
		type: "Magic",
		priority: -7,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				} else if (source?.hasItem('Vr Headset')) {
					return 8;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Magic Room', '[of] ' + source, '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
				}
				for (const mon of this.getAllActive()) {
					this.singleEvent('End', mon.getItem(), mon.itemState, mon);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('magicroom');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 6,
			onFieldEnd() {
				this.add('-fieldend', 'move: Magic Room', '[of] ' + this.effectState.source);
			},
		},
	},
	wonderroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				} else if (source?.hasItem('Vr Headset')) {
					return 8;
				}
				return 5;
			},
			onModifyMove(move, source, target) {
				// This code is for moves that use defensive stats as the attacking stat; see below for most of the implementation
				if (!move.overrideOffensiveStat || source.hasItem('Ar Helmet')) return;
				const statAndBoosts = move.overrideOffensiveStat;
				if (!['def', 'spd'].includes(statAndBoosts)) return;
				move.overrideOffensiveStat = statAndBoosts === 'def' ? 'spd' : 'def';
				this.hint(`${move.name} uses ${statAndBoosts === 'def' ? '' : 'Sp. '}Def boosts when Wonder Room is active.`);
			},
			onFieldStart(field, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source, '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('wonderroom');
			},
			// Swapping defenses partially implemented in sim/pokemon.js:Pokemon#calculateStat and Pokemon#getStat
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 5,
			onFieldEnd() {
				this.add('-fieldend', 'move: Wonder Room');
			},
		},
	},
	absorb: {
		inherit: true,
		basePower: 40,
		isNonstandard: null,
	},
	accelerock: {
		inherit: true,
		basePower: 45,
		pp: 15,
		isNonstandard: null,
	},
	acid: {
		inherit: true,
		secondary: {
			chance: 40,
			boosts: {
				spd: -1,
			},
		},
		desc: "Has a 40% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "40% chance to lower the foe(s) Sp. Def by 1.",
		isNonstandard: null,
	},
	acidarmor: {
		inherit: true,
		pp: 40,
		isNonstandard: null,
	},
	airslash: {
		inherit: true,
		pp: 20,
		isNonstandard: null,
	},
	allyswitch: {
		inherit: true,
		priority: -1,
		isNonstandard: null,
	},
	anchorshot: {
		inherit: true,
		volatileStatus: 'partiallytrapped',
		secondary: null,
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		isNonstandard: null,
	},
	appleacid: {
		inherit: true,
		target: "allAdjacentFoes",
		desc: "Has a 100% chance to lower the targets's Special Defense by 1 stage.",
		shortDesc: "100% chance to lower the targets' Sp. Def by 1.",
		isNonstandard: null,
	},
	aquaring: {
		inherit: true,

		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		volatileStatus: 'aquaring',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
			},
			onModifyDefPriority: 10,
			onModifyDef(spd, pokemon) {
				if (this.field.getPseudoWeather('coralreef')) {
					return this.chainModify([1.5]);
				}
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		isNonstandard: null,
	},
	aquatail: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	armthrust: {
		inherit: true,
		basePower: 20,
		accuracy: 95,
		isNonstandard: null,
	},
	aromatherapy: {
		inherit: true,
		flags: {snatch: 1, sound: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Aromatherapy');
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				ally.cureStatus();
			}
		},
		isNonstandard: null,
	},
	assurance: {
		inherit: true,
		basePower: 55,
		isNonstandard: null,
	},
	attract: {
		inherit: true,
		type: "Heart",
		isNonstandard: null,
	},
	aurasphere: {
		inherit: true,
		basePower: 90,
		isNonstandard: null,
	},
	aurawheel: {
		inherit: true,
		category: "Special",
		secondary: null,
		desc: "If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
		shortDesc: "Morpeko: Electric; Hangry: Dark.",
		isNonstandard: null,
	},
	auroraveil: {
		inherit: true,
		pp: 10,
		isNonstandard: null,
	},
	babydolleyes: {
		inherit: true,
		flags: {snatch: 1, protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		isNonstandard: null,
	},
	barrage: {
		inherit: true,
		type: "Grass",
		category: "Special",
		accuracy: 90,
		isNonstandard: null,
	},
	bind: {
		inherit: true,
		basePower: 65,
		accuracy: 90,
		isNonstandard: null,
	},
	block: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		pp: 20,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		type: "Bone",
		flags: {protect: 1, mirror: 1, bone: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		isNonstandard: null,
	},
	bonemerang: {
		inherit: true,
		type: "Bone",
		flags: {protect: 1, mirror: 1, bone: 1},
		isNonstandard: null,
	},
	bonerush: {
		inherit: true,
		type: "Bone",
		flags: {protect: 1, mirror: 1, bone: 1},
		isNonstandard: null,
	},
	bounce: {
		inherit: true,
		accuracy: 90,
		pp: 10,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, bounce: 1, above: 1},
		isNonstandard: null,
	},
	branchpoke: {
		inherit: true,
		basePower: 50,
		type: "Wood",
		pp: 35,
		isNonstandard: null,
	},
	breakingswipe: {
		inherit: true,
		pp: 10,
		target: "allAdjacent",
		desc: "Has a 100% chance to lower the targets' Attack by 1 stage.",
		shortDesc: "Hits adjacent Pokemon. 100% chance to lower Attack by 1.",
		isNonstandard: null,
	},
	brutalswing: {
		inherit: true,
		pp: 25,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	bubble: {
		inherit: true,
		basePower: 20,
		secondary: {
			chance: 75,
			boosts: {
				spe: -1,
			},
		},
		desc: "Has a 75% chance to lower the target's Speed by 1 stage.",
		shortDesc: "75% chance to lower the foe(s) Speed by 1.",
		isNonstandard: null,
	},
	bubblebeam: {
		inherit: true,
		secondary: {
			chance: 40,
			boosts: {
				spe: -1,
			},
		},
		desc: "Has a 40% chance to lower the target's Speed by 1 stage.",
		shortDesc: "40% chance to lower the foe(s) Speed by 1.",
		isNonstandard: null,
	},
	bulletseed: {
		inherit: true,
		flags: {bullet: 1, protect: 1, mirror: 1, west: 1},
		isNonstandard: null,
	},
	burningjealousy: {
		inherit: true,
		basePower: 80,
		pp: 15,
		isNonstandard: null,
	},
	burnup: {
		inherit: true,
		basePower: 140,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	captivate: {
		inherit: true,
		type: "Heart",
		isNonstandard: null,
	},
	celebrate: {
		inherit: true,
		pp: 2,
		flags: {snatch: 1},
		onTryHit() {},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1,
		},
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 1.",
		isNonstandard: null,
	},
	chargebeam: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		basePower: 55,
		pp: 10,
		isNonstandard: null,
	},
	clangingscales: {
		inherit: true,
		pp: 10,
		isNonstandard: null,
	},
	clangoroussoul: {
		inherit: true,
		flags: {snatch: 1, dance: 1},
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		basePower: 25,
		type: "Cosmic",
		accuracy: 90,
		isNonstandard: null,
	},
	confide: { // TODO: Add Amplifier interaction
		inherit: true,
		type: "Sound",
		priority: 1,
		flags: {mirror: 1, sound: 1, bypasssub: 1},
		isNonstandard: null,
	},
	constrict: {
		inherit: true,
		basePower: 40,
		secondary: {
			chance: 60,
			boosts: {
				spe: -1,
			},
		},
		desc: "Has a 60% chance to lower the target's Speed by 1 stage.",
		shortDesc: "60% chance to lower the foe(s) Speed by 1.",
		isNonstandard: null,
	},
	conversion: {
		inherit: true,
		pp: 5,
		onHit(target) {
			const possibleTypes = target.moveSlots.map(moveSlot => {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.id !== 'conversion' && !target.hasType(move.type)) {
					return move.type;
				}
				return '';
			}).filter(type => type);
			if (!possibleTypes.length) {
				return false;
			}
			const type = this.sample(possibleTypes);

			if (!target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
		isNonstandard: null,

		onAfterHit(target) {
			if (this.field.getPseudoWeather('cyberspace')) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
			}
		},
	},
	conversion2: {
		inherit: true,
		pp: 5,
		onHit(target, source) {
			if (!target.lastMoveUsed) {
				return false;
			}
			const possibleTypes = [];
			const attackType = target.lastMoveUsed.type;
			for (const type of this.dex.types.names()) {
				if (source.hasType(type)) continue;
				const typeCheck = this.dex.types.get(type).damageTaken[attackType];
				if (typeCheck === 2 || typeCheck === 3) {
					possibleTypes.push(type);
				}
			}
			if (!possibleTypes.length) {
				return false;
			}
			const randomType = this.sample(possibleTypes);

			if (!source.setType(randomType, false, source, this.effect)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		onAfterHit(pokemon) {
			if (this.field.getPseudoWeather('cyberspace')) {
				const success = !!this.heal(this.modify(pokemon.maxhp, 1.0));
				return pokemon.cureStatus() || success;
			}
		},
		isNonstandard: null,
	},
	cosmicpower: {	// TODO: Add +1 speed boost during Starfield
		inherit: true,
		type: "Cosmic",
		isNonstandard: null,
	},
	craftyshield: {
		inherit: true,
		flags: {snatch: 1},
		isNonstandard: null,
	},
	crosspoison: {
		inherit: true,
		basePower: 80,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	cut: {
		inherit: true,
		basePower: 55,
		accuracy: 100,
		pp: 20,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		critRatio: 2,
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		isNonstandard: null,
	},
	darkestlariat: {
		inherit: true,
		basePower: 90,
		pp: 20,
		isNonstandard: null,
	},
	darkvoid: {
		inherit: true,
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the foe(s) to fall asleep.",
		accuracy: 80,
		onTry() { return; },
		isNonstandard: null,
	},
	decorate: {
		inherit: true,
		type: "Food",
		pp: 10,
		target: "adjacentAlly",
		desc: "Raises one adjacent ally's Attack and Special Attack by 2 stages.",
		shortDesc: "Raises one adjacent ally's Attack and Sp. Atk by 2.",
		isNonstandard: null,
	},
	defendorder: { // TODO: Add Swarm interaction
		inherit: true,
		isNonstandard: null,
	},
	destinybond: {
		inherit: true,
		pp: 1,
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bond');
			},
			onFaint(target, source, effect) {
				const immune = ["Himg", "Himf", "Himw", "Himnuclear", "Himwind", "Himagma", "Himvirus", "Himcyber", "Lunar Guardian"];
				if (!source || !effect || target.isAlly(source) || immune.includes(source.baseSpecies.baseSpecies)) return;
				if (effect.effectType === 'Move' && !effect.flags['futuremove']) {
					if (source.volatiles['dynamax']) {
						this.add('-hint', "Dynamaxed Pokémon are immune to Destiny Bond.");
						return;
					}
					this.add('-activate', target, 'move: Destiny Bond');
					source.faint();
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'destinybond') return;
				this.debug('removing Destiny Bond before attack');
				pokemon.removeVolatile('destinybond');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('destinybond');
			},
		},
		isNonstandard: null,
	},
	detect: {
		inherit: true,
		priority: 3,
		isNonstandard: null,
	},
	diamondstorm: {
		inherit: true,
		category: "Special",
		self: {
			chance: 50,
			boosts: {
				def: 1,
			},
		},
		desc: "Has a 50% chance to raise the user's Defense by 1 stages.",
		shortDesc: "50% chance to raise user's Defense by 1.",
		isNonstandard: null,
	},
	dig: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	disarmingvoice: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	dive: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	dizzypunch: {
		inherit: true,
		secondary: {
			chance: 35,
			volatileStatus: 'confusion',
		},
		desc: "Has a 35% chance to confuse the target.",
		shortDesc: "35% chance to confuse the target.",
		isNonstandard: null,
	},
	doublehit: {
		inherit: true,
		basePower: 40,
		isNonstandard: null,
	},
	doubleironbash: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			volatileStatus: 'flinch',
		},
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 25% chance to make the target flinch.",
		shortDesc: "Hits twice. 25% chance to make the target flinch.",
		isNonstandard: null,
	},
	doublekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	doubleslap: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	dragondarts: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	dragonpulse: {
		inherit: true,
		basePower: 90,
		isNonstandard: null,
	},
	dragontail: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	drainingkiss: {
		inherit: true,
		basePower: 60,
		flags: {protect: 1, mirror: 1, heal: 1, kiss: 1},
		isNonstandard: null,
	},
	drillpeck: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, beak: 1},
		critRatio: 2,
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		isNonstandard: null,
	},
	drumbeating: {
		inherit: true,
		target: "allAdjacentFoes",
		desc: "Hits adjacent foes. Has a 100% chance to lower the targets' Speed by 1 stage.",
		shortDesc: "Hits adjacent foes. 100% to lower the targets' Speed by 1.",
		isNonstandard: null,
	},
	echoedvoice: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sound: 1},
		type: "Sound",
		isNonstandard: null,
	},
	eerieimpulse: {
		inherit: true,
		pp: 40,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		onHit(target, source, move) {
			if (this.field.isTerrain('electricterrain')) {
				this.boost({spa: -3}, target, source);
			}
			this.boost({spa: -2}, target, source);
		},
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
		type: "Food",
		accuracy: 100,
		isNonstandard: null,
	},
	electrify: {
		inherit: true,
		priority: 1,
		flags: {reflectable: 1, protect: 1, mirror: 1, allyanim: 1},
		isNonstandard: null,
	},
	endure: {
		inherit: true,
		priority: 3,
		isNonstandard: null,
	},
	energyball: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 15,
			boosts: {
				spd: -1,
			},
		},
		desc: "Has a 15% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "15% chance to lower the target's Sp. Def by 1.",
		isNonstandard: null,
	},
	eternabeam: {
		inherit: true,
		pp: 5,
		self: null,
		onHit(target, source) {
			if (target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
		desc: "Unless the target faints, the user must rest on the next turn.",
		shortDesc: "Unless the target faints, the user must rest on the next turn.",
		isNonstandard: null,
	},
	extrasensory: {
		inherit: true,
		pp: 30,
		isNonstandard: null,
	},
	fairylock: {
		inherit: true,
		pp: 15,
		isNonstandard: null,
	},
	falsesurrender: {
		inherit: true,
		pp: 20,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	featherdance: { // TODO: Steady Wind interaction
		inherit: true,
		isNonstandard: null,
	},
	feint: {
		inherit: true,
		flags: {},
		basePower: 50,
		isNonstandard: null,
	},
	feintattack: {
		inherit: true,
		basePower: 0,
		accuracy: 50,
		pp: 5,
		ohko: true,
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		isNonstandard: null,
	},
	fellstinger: {
		inherit: true,
		basePower: 65,
		pp: 15,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 2}, pokemon, pokemon, move);
		},
		desc: "Raises the user's Attack by 2 stages if this move knocks out the target.",
		shortDesc: "Raises user's Attack by 2 if this KOes the target.",
		isNonstandard: null,
	},
	finalgambit: {
		num: 515,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Final Gambit",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		selfdestruct: "always",
		secondary: null,
		target: "normal",
		type: "Fighting",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits a single Pokemon. The user faints.",
		isNonstandard: null,
	},
	firelash: {
		inherit: true,
		basePower: 100,
		accuracy: 95,
		pp: 10,
		secondary: {
			chance: 50,
			boosts: {
				atk: -1,
			},
		},
		desc: "Has a 50% chance to lower the target's Attack by 1 stage.",
		shortDesc: "50% chance to lower the target's Attack by 1.",
		isNonstandard: null,
	},
	firepledge: { // TODO: Secondary: 100% chance to trigger Sea of Fire
		inherit: true,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			return move.basePower;
		},
		onPrepareHit() {},
		onModifyMove() {},
		condition: {},
		desc: "Has a 100% chance to trigger Sea of Fire.",
		shortDesc: "100% to trigger Sea of Fire.",
		isNonstandard: null,
	},
	firespin: {
		inherit: true,
		basePower: 50,
		accuracy: 90,
		isNonstandard: null,
	},
	firstimpression: {
		inherit: true,
		basePower: 100,
		priority: 3,
		isNonstandard: null,
	},
	flamethrower: {
		inherit: true,
		basePower: 95,
		secondary: {
			chance: 20,
			status: 'brn',
		},
		isNonstandard: null,
	},
	flash: {
		inherit: true,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		pp: 10,
		flags: {protect: 1, mirror: 1},
		boosts: null,
		onHit(target) {
			if (this.field.getPseudoWeather('auroraglow')) {
				this.boost({
					accuracy: -3,
				});
			} else {
				this.boost({
					accuracy: -1,
				});
			}
		},
		type: "Light",
		contestType: "Cute",
		isNonstandard: null,
	},
	flashcannon: {
		inherit: true,
		basePower: 90,
		pp: 15,
		secondary: {
			chance: 15,
			boosts: {
				spd: -1,
			},
		},
		desc: "Has a 15% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "15% chance to lower the target's Sp. Def by 1.",
		isNonstandard: null,
	},
	fleurcannon: {
		inherit: true,
		basePower: 140,
		isNonstandard: null,
	},
	floralhealing: {
		inherit: true,
		onHit() {},
		heal: [1, 2],
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		isNonstandard: null,
	},
	fly: {
		inherit: true,
		basePower: 95,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, above: 1},
		isNonstandard: null,
	},
	flyingpress: {
		inherit: true,
		basePower: 80,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1, above: 1},
		isNonstandard: null,
	},
	followme: {
		inherit: true,
		priority: 3,
		isNonstandard: null,
	},
	forestscurse: {
		inherit: true,
		accuracy: true,
		isNonstandard: null,
	},
	freezedry: {
		inherit: true,
		basePower: 80,
		onBasePower(basePower, pokemon, target) {
			if (target.hasType('Water')) {
				return this.chainModify(3.5);
			}
		},
		onEffectiveness() {},
		secondary: null,
		desc: "This move's base power against Water is changed to be 3.5x.",
		shortDesc: "Deals 3.5x damage on Water.",
		isNonstandard: null,
	},
	freezeshock: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	frostbreath: {
		inherit: true,
		basePower: 50,
		isNonstandard: null,
	},
	furyattack: {
		inherit: true,
		type: "Bone",
		accuracy: 90,
		flags: {contact: 1, protect: 1, mirror: 1, beak: 1},
		isNonstandard: null,
	},
	furycutter: {
		inherit: true,
		basePower: 40,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 8) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		isNonstandard: null,
	},
	furyswipes: {
		inherit: true,
		accuracy: 85,
		isNonstandard: null,
	},
	geargrind: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	gearup: {
		inherit: true,
		type: "Tech",
		isNonstandard: null,
	},
	gigadrain: {
		inherit: true,
		basePower: 80,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	glaciate: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	grasspledge: { // TODO: Secondary: 100% chance to trigger Swamp
		inherit: true,
		basePower: 80,
		basePowerCallback(pokemon, target, move) {
			return move.basePower;
		},
		onPrepareHit() {},
		onModifyMove() {},
		condition: {},
		desc: "Has a 100% chance to trigger Swamp.",
		shortDesc: "100% to trigger Swamp.",
		isNonstandard: null,
	},
	grasswhistle: {
		inherit: true,
		accuracy: 70,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	gravapple: {
		inherit: true,
		onBasePower() {},
		pp: 15,
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower target's Defense by 1.",
		isNonstandard: null,
	},
	growl: { // TODO: Amplifier interaction
		inherit: true,
		type: "Sound",
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	healorder: { // TODO: Swarm interaction
		inherit: true,
		isNonstandard: null,
	},
	heartstamp: {
		inherit: true,
		type: "Heart",
		isNonstandard: null,
	},
	heartswap: {
		inherit: true,
		type: "Heart",
		isNonstandard: null,
	},
	hex: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	highhorsepower: {
		inherit: true,
		accuracy: 100,
		pp: 25,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1, west: 1},
		isNonstandard: null,
	},
	holdback: {
		inherit: true,
		category: "Special",
		isNonstandard: null,
	},
	hornattack: {
		inherit: true,
		type: "Bone",
		isNonstandard: null,
	},
	horndrill: {
		inherit: true,
		type: "Bone",
		isNonstandard: null,
	},
	
	hyperspacefury: {
		inherit: true,
		desc: "Lowers the user's Defense by 1 stage. This move cannot be used by a Hoopa unless its current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Lowers user's Def by 1; breaks protect.",
		onTry(source) {
			if (source.species.baseSpecies === 'Hoopa') {
				if (source.species.name === 'Hoopa-Unbound') {
					return;
				}

				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
		},
		type: "Cosmic",
		category: "Special",
		flags: {},
		isNonstandard: null,
	},
	hyperspacehole: {
		inherit: true,
		flags: {},
		desc: "Has a 18% chance to freeze the target.",
		shortDesc: "18% chance to freeze the target.",
		isNonstandard: null,
	},
	icebeam: {
		inherit: true,
		basePower: 95,
		secondary: {
			chance: 18,
			status: 'frz',
		},
		desc: "Has a 18% chance to freeze the target.",
		shortDesc: "18% chance to freeze the target.",
		isNonstandard: null,
	},
	iceburn: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	icepunch: {
		inherit: true,
		secondary: {
			chance: 11,
			status: 'frz',
		},
		desc: "Has a 11% chance to freeze the target.",
		shortDesc: "11% chance to freeze the target.",
		isNonstandard: null,
	},
	infestation: {
		inherit: true,
		basePower: 25,
		flags: {protect: 1, mirror: 1},
		target: "allAdjacentFoes",
		isNonstandard: null,
	},
	instruct: {
		inherit: true,
		type: "Normal",
		accuracy: 100,
		flags: {reflectable: 1, protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onHit() {},
		volatileStatus: 'instruct',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Instruct');
			},
			onPrepareHit(source, target, move) {
				if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
				if (['dynamaxcannon', 'endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
				if (!move.flags['charge'] && !move.isZ && !move.isMax) {
					if (source.getVolatile('instruct')) {
						this.add('-activate', source, "  [TARGET] followed [POKEMON]'s instructions!");
						this.add('-end', source, 'Instruct');
						delete source.volatiles['instruct'];
					}
					move.multihit = 2;
					move.multihitType = 'parentalbond';
				}
			},
			// Damage modifier implemented in BattleActions#modifyDamage()
			onSourceModifySecondaries(secondaries, target, source, move) {
				if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
					// hack to prevent accidentally suppressing King's Rock/Razor Fang
					return secondaries.filter(effect => effect.volatileStatus === 'flinch');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Instruct');
			},
		},
		isNonstandard: null,
	},
	imprison: {
		inherit: true,
		target: "normal",
		desc: "The user prevents a Pokemon from using any moves that the user also knows as long as the user remains active.",
		shortDesc: "The target cannot use any move known by the user.",
		isNonstandard: null,
	},
	incinerate: {
		inherit: true,
		basePower: 60,
		onHit(pokemon, source) {
			const item = pokemon.getItem();
			if (item.isBerry && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
			}
		},
		isNonstandard: null,
	},
	irontail: { // TODO: Add Iron Dust interaction
		inherit: true,
		accuracy: 80,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	jawlock: {
		inherit: true,
		type: "Rock",
		accuracy: 90,
		onHit() {},
		volatileStatus: 'partiallytrapped',
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		isNonstandard: null,
	},
	judgment: {
		inherit: true,
		basePower: 120,
		isNonstandard: null,
	},
	jumpkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1, bounce: 1, above: 1},
		isNonstandard: null,
	},
	kinesis: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	landswrath: {
		inherit: true,
		basePower: 100,
		category: "Special",
		flags: {protect: 1, nonsky: 1},
		isNonstandard: null,
	},
	lavaplume: {
		inherit: true,
		type: "Magma",
		thawsTarget: true,
		isNonstandard: null,
	},
	leafage: {
		inherit: true,
		pp: 35,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	leaftornado: {
		inherit: true,
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1.",
		isNonstandard: null,
	},
	leechlife: {
		inherit: true,
		basePower: 75,
		pp: 15,
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: null,
	},
	lick: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	lifedew: {
		inherit: true,
		pp: 5,
		heal: [1, 3],
		flags: {protect: 1, reflectable: 1, heal: 1, bypasssub: 1},
		desc: "Each Pokemon on the user's side restores 1/3 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user and its allies by 1/3 their max HP.",
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		recoil: [1, 3],
		secondary: {
			chance: 100,
			status: 'par',
		},
		desc: "If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded half up, but not less than 1 HP. Has a 100% chance to paralyze the target.",
		shortDesc: "Has 1/3 recoil, 100% to paralyze the target.",
		isNonstandard: null,
	},
	lightscreen: {
		inherit: true,
		type: "Light",
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay') || source?.hasAbility('builder')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (this.activePerHalf > 1) return this.chainModify([2703, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Light Screen');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 2,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Light Screen');
			},
		},
		isNonstandard: null,
	},
	liquidation: {
		inherit: true,
		pp: 15,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "30% chance to lower the target's Defense by 1.",
		isNonstandard: null,
	},
	lovelykiss: {
		inherit: true,
		accuracy: 90,
		flags: {protect: 1, reflectable: 1, mirror: 1, kiss: 1},
		isNonstandard: null,
	},
	lunardance: {
		inherit: true,
		type: "Cosmic",
		flags: {snatch: 1, heal: 1, dance: 1, moon: 1},
		isNonstandard: null,
	},
	lunge: {
		inherit: true,
		secondary: {
			chance: 25,
			boosts: {
				atk: -1,
			},
		},
		desc: "Has a 25% chance to lower the target's Attack by 1 stage.",
		shortDesc: "25% chance to lower the target's Attack by 1.",
	},
	lusterpurge: {
		inherit: true,
		basePower: 80,
		pp: 10,
		secondary: {
			chance: 70,
			boosts: {
				spd: -1,
			},
		},
		desc: "Has a 70% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "70% chance to lower the target's Sp. Def by 1.",
		isNonstandard: null,
	},
	magiccoat: {
		inherit: true,
		type: "Magic",
		volatileStatus: 'magiccoat',
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-singleturn', target, 'move: Magic Coat');
				if (effect?.effectType === 'Move') {
					this.effectState.pranksterBoosted = effect.pranksterBoosted;
				}
			},
			onTryHitPriority: 2,
			onTryHit(target, source, move) {
				if (target === source || move.hasBounced || !move.flags['reflectable']) {
					return;
				}
				const newMove = this.dex.getActiveMove(move.id);
				newMove.hasBounced = true;
				newMove.pranksterBoosted = this.effectState.pranksterBoosted;
				this.actions.useMove(newMove, target, source);
				return null;
			},
			onAllyTryHitSide(target, source, move) {
				if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
					return;
				}
				const newMove = this.dex.getActiveMove(move.id);
				newMove.hasBounced = true;
				newMove.pranksterBoosted = false;
				this.actions.useMove(newMove, this.effectState.target, source);
				return null;
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				if (this.field.getPseudoWeather('fabricworld')) {
					this.boost({
						spd: 1,
					});
				}
			},
		},
		isNonstandard: null,
	},
	magmastorm: {
		inherit: true,
		basePower: 120,
		type: "Magma",
		thawsTarget: true,
		isNonstandard: null,
	},
	matblock: {
		inherit: true,
		pp: 5,
		isNonstandard: null,
	},
	meanlook: { // TODO: Add Graveyard interaction
		inherit: true,
		type: "Fear",
		pp: 15,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			if (this.field.isWeather('midnight')) {
				const success = this.boost({spe: -2}, target, source, null, false, true);
				return !!(target.addVolatile('trapped', source, move, 'trapper') || success);
			}
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field. Lowers the target's Speed by 2 stages during Midnight.",
		shortDesc: "Prevents switch out. In Midnight, lowers the foe(s) Speed by 2.",
		isNonstandard: null,
	},
	meditate: {
		inherit: true,
		boosts: {
			spa: 1,
			def: 1,
		},
		desc: "Raises the user's Special Attack and Defense by 1 stage.",
		shortDesc: "Raises the user's SpA and Def by 1.",
		isNonstandard: null,
	},
	megadrain: {
		inherit: true,
		basePower: 60,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	memento: {
		inherit: true,
		flags: {mirror: 1},
		isNonstandard: null,
	},
	meteorassault: {
		inherit: true,
		accuracy: 90,
		flags: {contact: 1, protect: 1, recharge: 1, mirror: 1},
		onAfterHit() {},
		onHit(target, source) {
			if (target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
		desc: "Unless the target faints, the user must rest on the next turn.",
		shortDesc: "Unless the target faints, the user must rest on the next turn.",
	},
	meteormash: {
		inherit: true,
		basePower: 100,
		accuracy: 85,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		pp: 20,
		isNonstandard: null,
	},
	milkdrink: {
		inherit: true,
		type: "Food",
		isNonstandard: null,
	},
	mindblown: {
		inherit: true,
		pp: 15,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		mindBlownRecoil: undefined,
		onAfterMove() {},
		recoil: [1, 3],
		target: "normal",
		desc: "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to burn. Thaws user.",
		damage: undefined,
		isNonstandard: null,
	},
	mirrorshot: { // TODO: Mirror Dimension interaction
		inherit: true,
		type: "Glass",
		isNonstandard: null,
	},
	mistball: {
		inherit: true,
		basePower: 80,
		pp: 10,
		secondary: {
			chance: 70,
			boosts: {
				spa: -1,
			},
		},
		desc: "Has a 70% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "70% chance to lower the target's Sp. Atk by 1.",
		isNonstandard: null,
	},
	moonblast: {
		inherit: true,
		secondary: {
			chance: 15,
			boosts: {
				spa: -1,
			},
		},
		flags: {protect: 1, mirror: 1, moon: 1},
		desc: "Has a 15% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "15% chance to lower the target's Sp. Atk by 1.",
		isNonstandard: null,
	},
	moongeistbeam: {
		inherit: true,
		basePower: 110,
		ignoreAbility: false,
		secondary: {
			chance: 26,
			status: 'slp',
		},
		target: "allAdjacentFoes",
		desc: "Has a 26% chance to cause the target to fall asleep.",
		shortDesc: "26% chance to sleep foe(s).",
		isNonstandard: null,
	},
	moonlight: { // TODO: Eclipse, Full Moon and Fog interaction
		inherit: true,
		flags: {snatch: 1, heal: 1, moon: 1},
		isNonstandard: null,
	},
	morningsun: {
		inherit: true,
		type: "Light",
		flags: {snatch: 1, heal: 1, sun: 1},
		isNonstandard: null,
	},
	mudbomb: {
		inherit: true,
		accuracy: 90,
		pp: 15,
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1.",
		isNonstandard: null,
	},
	mudshot: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	mudsport: {
		num: 300,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: {},
		volatileStatus: 'mudsport',
		onTryHitField(target, source) {
			if (source.volatiles['mudsport']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add("-start", pokemon, 'Mud Sport');
			},
			onAnyBasePowerPriority: 1,
			onAnyBasePower(basePower, user, target, move) {
				if (move.type === 'Electric') return this.chainModify([1352, 4096]);
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ground",
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		basePower: 100,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	mysticalfire: {
		inherit: true,
		basePower: 85,
		isNonstandard: null,
	},
	naturesmadness: {
		inherit: true,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 4, 1);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		desc: "Deals damage to the target equal to a quarter of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/4 target's current HP.",
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		basePower: 80,
		isNonstandard: null,
	},
	nightdaze: {
		inherit: true,
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1.",
		isNonstandard: null,
	},
	nobleroar: {
		inherit: true,
		type: "Sound",
		pp: 10,
		flags: {protect: 1, reflectable: 1, sound: 1, bypasssub: 1},
		self: {
			boosts: {
				atk: 1,
				spa: 1,
			},
		},
		desc: "Raise the user's Attack and Special Attack by 1 stage. Lowers the target's Attack and Special Attack by 1 stage.",
		shortDesc: "Pokemon: +1 Atk|SpA. Target: -1 Atk|SpA.",
		isNonstandard: null,
	},
	oblivionwing: {
		inherit: true,
		flags: {protect: 1, distance: 1, heal: 1},
		isNonstandard: null,
	},
	obstruct: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -1}, source, target, this.dex.getActiveMove("Obstruct"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -1}, source, target, this.dex.getActiveMove("Obstruct"));
				}
			},
		},
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from damaging attacks. Contact: -1 Def.",
		isNonstandard: null,
	},
	octazooka: {
		inherit: true,
		basePower: 75,
		accuracy: 95,
		isNonstandard: null,
	},
	octolock: {
		inherit: true,
		accuracy: true,
		pp: 10,
		flags: {reflectable: 1, protect: 1, mirror: 1},
		isNonstandard: null,
	},
	originpulse: {
		inherit: true,
		basePower: 120,
		accuracy: 90,
		isNonstandard: null,
	},
	outrage: {
		inherit: true,
		pp: 15,
		isNonstandard: null,
	},
	overdrive: {
		inherit: true,
		basePower: 0,
		category: "Status",
		accuracy: true,
		pp: 20,
		flags: {snatch: 1},
		self: undefined,
		boosts: {
			spa: 1,
			spe: 1,
		},
		target: "self",
		desc: "Raises the user's Special Attack and Speed by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk and Speed by 1.",
		isNonstandard: null,
	},
	paraboliccharge: {
		inherit: true,
		basePower: 75,
		isNonstandard: null,
	},
	payday: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	perishsong: {
		inherit: true,
		type: "Sound",
		flags: {sound: 1, distance: 1},
		onHitField(target, source, move) {
			let result = false;
			let message = false;
			const immune = ["Truehim", "Himless", "Himwall", "Gowen", "Mecha Zaydolf", "Alphanne", "Himvoid", "God"];
			for (const pokemon of this.getAllActive()) {
				if (immune.includes(pokemon.baseSpecies.baseSpecies)) {
					this.add('-immune', pokemon);
					result = true;
				} else if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
					this.add('-miss', source, pokemon);
					result = true;
				} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
					result = true;
				} else if (!pokemon.volatiles['perishsong']) {
					pokemon.addVolatile('perishsong');
					this.add('-start', pokemon, 'perish3', '[silent]');
					result = true;
					message = true;
				}
			}
			if (!result) return false;
			if (message) this.add('-fieldactivate', 'move: Perish Song');
		},
		isNonstandard: null,
	},
	petalblizzard: {
		inherit: true,
		flags: {snatch: 1, protect: 1, mirror: 1},
		category: "Special",
		isNonstandard: null,
	},
	photongeyser: {
		inherit: true,
		pp: 10,
		onModifyMove() {},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		ignoreAbility: false,
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		isNonstandard: null,
	},
	pinmissile: {
		inherit: true,
		basePower: 20,
		accuracy: 90,
		isNonstandard: null,
	},
	plasmafists: {
		inherit: true,
		category: "Special",
		accuracy: 95,
		pp: 10,
		pseudoWeather: undefined,
		secondary: {
			chance: 100,
			pseudoWeather: 'iondeluge',
		},
		desc: "If this move is successful, it has 100% chance to causes Normal-type moves to become Electric type this turn.",
		shortDesc: "100% to make Normal moves become Electric type this turn.",
		isNonstandard: null,
	},
	playnice: {
		inherit: true,
		flags: {snatch: 1, mirror: 1, bypasssub: 1},
		isNonstandard: null,
	},
	poisonfang: {
		inherit: true,
		basePower: 65,
		secondary: {
			chance: 30,
			status: 'tox',
		},
		desc: "Has a 30% chance to badly poison the target.",
		shortDesc: "30% chance to badly poison the target.",
		isNonstandard: null,
	},
	poisonsting: {
		inherit: true,
		basePower: 30,
		isNonstandard: null,
	},
	poisontail: {
		inherit: true,
		basePower: 60,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	pollenpuff: {
		inherit: true,
		pp: 5,
		isNonstandard: null,
	},
	pulverizingpancake: {
		accuracy: 90,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Pulverizing Pancake",
		pp: 2,
		priority: 0,
		flags: {contact: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	pound: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	poweruppunch: {
		inherit: true,
		flags: {contact: 1, snatch: 1, protect: 1, mirror: 1, punch: 1},
		isNonstandard: null,
	},
	precipiceblades: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	prismaticlaser: {
		inherit: true,
		accuracy: 90,
		pp: 5,
		isNonstandard: null,
	},
	psychic: {
		inherit: true,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		isNonstandard: null,
	},
	psychicfangs: {
		inherit: true,
		pp: 15,
		isNonstandard: null,
	},
	psychoshift: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	psywave: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	purify: {
		inherit: true,
		type: "Normal",
		pp: 10,
		isNonstandard: null,
	},
	pyroball: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bullet: 1},
	},
	rage: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	ragepowder: {
		inherit: true,
		priority: 3,
		flags: {gravity: 1},
		isNonstandard: null,
	},
	rapidspin: {
		inherit: true,
		basePower: 35,
		isNonstandard: null,
	},
	razorshell: {
		inherit: true,
		accuracy: 100,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	razorwind: {
		inherit: true,
		type: "Wind",
		isNonstandard: null,
	},
	recycle: {
		inherit: true,
		pp: 40,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		type: "Sound",
		accuracy: 100,
		secondary: {
			chance: 30,
			status: 'slp',
		},
		flags: {protect: 1, mirror: 1, sound: 1},
		desc: "Has a 30% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active.",
		shortDesc: "30% chance to sleep foe(s). Meloetta transforms.",
		isNonstandard: null,
	},
	retaliate: {
		inherit: true,
		basePower: 75,
		isNonstandard: null,
	},
	revelationdance: {
		inherit: true,
		basePower: 80,
		pp: 10,
		isNonstandard: null,
	},
	roar: {
		inherit: true,
		type: "Sound",
		accuracy: 100,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		isNonstandard: null,
	},
	rockclimb: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	rocksmash: {
		inherit: true,
		basePower: 50,
		secondary: {
			chance: 80,
			boosts: {
				def: -1,
			},
		},
		desc: "Has a 80% chance to lower the target's Defense by 1 stage.",
		shortDesc: "80% chance to lower the target's Defense by 1.",
		isNonstandard: null,
	},
	rockthrow: {
		inherit: true,
		accuracy: 95,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	rocktomb: {
		inherit: true,
		basePower: 50,
		accuracy: 90,
		pp: 10,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	rollingkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		secondary: {
			chance: 35,
			volatileStatus: 'flinch',
		},
		desc: "Has a 35% chance to make the target flinch.",
		shortDesc: "35% chance to make the target flinch.",
		isNonstandard: null,
	},
	sandtomb: {
		inherit: true,
		basePower: 45,
		accuracy: 90,
		isNonstandard: null,
	},
	scaryface: {
		inherit: true,
		type: "Fear",
		isNonstandard: null,
	},
	screech: { // TODO: Amplifier interaction
		inherit: true,
		type: "Sound",
		accuracy: 90,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	seedbomb: {
		inherit: true,
		flags: {bullet: 1, protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	shadowbone: {
		inherit: true,
		pp: 15,
		flags: {contact: 1, protect: 1, mirror: 1, bone: 1},
		secondary: {
			chance: 16,
			boosts: {
				def: -1,
			},
		},
		desc: "Has a 16% chance to lower the target's Defense by 1 stage.",
		shortDesc: "16% chance to lower the target's Defense by 1.",
		isNonstandard: null,
	},
	shadowpunch: {
		inherit: true,
		basePower: 65,
		breaksProtect: true,
		desc: "This move does not check accuracy. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Does not check accuracy. Nullifies Detect, Protect, and Quick/Wide Guard.",
		isNonstandard: null,
	},
	shoreup: {
		inherit: true,
		pp: 5,
		isNonstandard: null,
	},
	silverwind: {
		inherit: true,
		pp: 10,
		secondary: {
			chance: 15,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		desc: "Has a 15% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "15% chance to raise all stats by 1 (not acc/eva).",
		isNonstandard: null,
	},
	sing: {
		inherit: true,
		type: "Sound",
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	sketch: {
		inherit: true,
		type: "Paint",
		isNonstandard: null,
	},
	skullbash: {
		inherit: true,
		basePower: 130,
		pp: 15,
		type: "Bone",
		isNonstandard: null,
	},
	skyattack: {
		inherit: true,
		basePower: 150,
		secondary: {
			chance: 35,
			volatileStatus: 'flinch',
		},
		desc: "Has a 35% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits turn 2. 35% flinch. High crit.",
		isNonstandard: null,
	},
	slam: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, tail: 1},
		isNonstandard: null,
	},
	smartstrike: {
		inherit: true,
		basePower: 80,
		pp: 20,
		isNonstandard: null,
	},
	snaptrap: {
		inherit: true,
		basePower: 65,
		type: "Steel",
		accuracy: 90,
		pp: 20,
		isNonstandard: null,
	},
	snarl: {
		inherit: true,
		basePower: 60,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	snipeshot: {
		inherit: true,
		critRatio: 1,
		tracksTarget: undefined,
		ignoreEvasion: true,
		ignoreDefensive: true,
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes.",
		isNonstandard: null,
	},
	snore: {
		inherit: true,
		basePower: 60,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	soak: {
		inherit: true,
		accuracy: true,
		onHit(target) {
			if (!target.setType('Water')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Water');
		},
		desc: "This move does not check accuracy. Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, if the target is already purely Water type, or if the target is Terastallized.",
		shortDesc: "Does not check acc. Changes the target's type to Water.",
		isNonstandard: null,
	},
	solarbeam: {
		inherit: true,
		basePower: 140,
		flags: {charge: 1, protect: 1, mirror: 1, sun: 1},
		isNonstandard: null,
	},
	sparklingaria: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		target: "normal",
		isNonstandard: null,
	},
	spectralthief: {
		inherit: true,
		basePower: 100,
		accuracy: 95,
		pp: 5,
		stealsBoosts: undefined,
		onHit(target, source) {
			let i: BoostID;
			for (i in target.boosts) {
				source.boosts[i] = target.boosts[i];
			}
			const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
			for (const volatile of volatilesToCopy) {
				if (target.volatiles[volatile]) {
					source.addVolatile(volatile);
					if (volatile === 'gmaxchistrike') source.volatiles[volatile].layers = target.volatiles[volatile].layers;
				} else {
					source.removeVolatile(volatile);
				}
			}
			this.add('-copyboost', source, target, '[from] move: Spectral Thief');
		},
		desc: "If the move succeeds, the user copies all of the target's current stat stage changes.",
		shortDesc: "Copies the target's current stat stages on hit.",
		isNonstandard: null,
	},
	speedswap: {
		inherit: true,
		type: "Time",
		isNonstandard: null,
	},
	spiderweb: { // TODO: Add Web Field interaction
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, web: 1},
		isNonstandard: null,
	},
	spikecannon: {
		inherit: true,
		critRatio: 2,
		desc: "Has a higher chance for a critical hit. This move has Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hi crit ratio. Hits 2-5 times in one turn.",
		isNonstandard: null,
	},
	spikyshield: {
		inherit: true,
		basePower: 20,
		category: "Physical",
		accuracy: 90,
		pp: 5,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		volatileStatus: undefined,
		secondary: {
			chance: 100,
			self: {
				volatileStatus: 'spikyshield',
			},
		},
		target: "normal",
		isNonstandard: null,
	},
	spiritbreak: {
		inherit: true,
		pp: 15,
		isNonstandard: null,
	},
	spiritshackle: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		secondary: null,
	},
	spotlight: { 
		inherit: true,
		onHit(target) {
			if (this.field.getPseudoWeather('auroraglow')) {
				this.boost({
					spa: 2,
				});
			} else {
				this.boost({
					spd: 1,
				});
			}
		},
		desc: "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This move boosts the Special Defense of the target by 1 stage.",
		shortDesc: "Target's foes' Sp. Def is boosted by 1 and moves are redirected to it this turn.",
		isNonstandard: null,
	},
	steameruption: {
		inherit: true,
		type: "Steam",
		isNonstandard: null,
	},
	steelbeam: {
		inherit: true,
		accuracy: 100,
		recoil: [1, 2],
		mindBlownRecoil: undefined,
		onAfterMove() {},
		desc: "If the target lost HP, the user takes recoil damage equal to 50% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 50% recoil.",
		isNonstandard: null,
	},
	steelwing: {
		inherit: true,
		accuracy: 95,
		secondary: {
			chance: 25,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		desc: "Has a 25% chance to raise the user's Defense by 1 stage.",
		shortDesc: "25% chance to raise the user's Defense by 1.",
		isNonstandard: null,
	},
	stomp: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1, above: 1},
		isNonstandard: null,
	},
	stompingtantrum: {
		inherit: true,
		flags: {protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	stormthrow: {
		inherit: true,
		basePower: 50,
		isNonstandard: null,
	},
	strangesteam: {
		inherit: true,
		type: "Steam",
		isNonstandard: null,
	},
	strength: {
		inherit: true,
		pp: 20,
		isNonstandard: null,
	},
	strengthsap: {
		inherit: true,
		accuracy: true,
		flags: {protect: 1, reflectable: 1, heal: 1},
		isNonstandard: null,
	},
	stringshot: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, web: 1},
		boosts: {
			spe: -1,
		},
		desc: "Lowers the target's Speed by 1 stage.",
		shortDesc: "Lowers the foe(s) Speed by 1.",
		isNonstandard: null,
	},
	strugglebug: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	submission: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 15,
		isNonstandard: null,
	},
	suckerpunch: {
		inherit: true,
		accuracy: 95,
		pp: 10,
		isNonstandard: null,
	},
	sunsteelstrike: {
		inherit: true,
		basePower: 110,
		flags: {protect: 1, mirror: 1, sun: 1},
		ignoreAbility: undefined,
		secondary: {
			chance: 26,
			status: 'brn',
		},
		desc: "Has a 26% chance to burn the target.",
		shortDesc: "26% chance to burn the target.",
		isNonstandard: null,
	},
	supersonic: { // TODO: Add Amplifier interaction
		inherit: true,
		type: "Sound",
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	swagger: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	swallow: {
		inherit: true,
		type: "Food",
		isNonstandard: null,
	},
	sweetkiss: {
		inherit: true,
		accuracy: 80,
		type: "Normal",
		flags: {protect: 1, reflectable: 1, mirror: 1, kiss: 1},
		isNonstandard: null,
	},
	sweetscent: { // TODO: Add Feast interaction
		inherit: true,
		type: "Grass",
		boosts: {
			evasion: -1,
		},
		desc: "Lowers the target's evasiveness by 1 stage.",
		shortDesc: "Lowers the foe(s) evasiveness by 1.",
		isNonstandard: null,
	},
	synchronoise: {
		inherit: true,
		pp: 15,
		isNonstandard: null,
	},
	tackle: {
		inherit: true,
		basePower: 50,
		isNonstandard: null,
	},
	tailslap: {
		inherit: true,
		accuracy: 95,
		flags: {contact: 1, protect: 1, mirror: 1, tail: 1},
		isNonstandard: null,
	},
	tarshot: {
		inherit: true,
		pp: 10,
		isNonstandard: null,
	},
	tearfullook: {
		inherit: true,
		accuracy: 100,
		pp: 25,
		flags: {protect: 1, reflectable: 1},
		isNonstandard: null,
	},
	teatime: {
		inherit: true,
		type: "Time",
		isNonstandard: null,
	},
	teleport: {
		inherit: true,
		priority: -1,
		isNonstandard: null,
	},
	thunder: {
		inherit: true,
		basePower: 120,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	thunderbolt: {
		inherit: true,
		basePower: 95,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	thunderouskick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	thunderpunch: {
		inherit: true,
		secondary: {
			chance: 11,
			status: 'par',
		},
		desc: "Has a 11% chance to paralyze the target.",
		shortDesc: "11% chance to paralyze the target.",
		isNonstandard: null,
	},
	topsyturvy: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		accuracy: 95,
		pp: 10,
		flags: {protect: 1, reflectable: 1, mirror: 1, web: 1},
		target: "allAdjacentFoes",
		isNonstandard: null,
	},
	triattack: {
		inherit: true,
		secondary: {
			chance: 22,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		desc: "Has a 22% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "22% chance to paralyze or burn or freeze target.",
		isNonstandard: null,
	},
	trick: {
		inherit: true,
		type: "Magic",
		isNonstandard: null,
	},
	trickortreat: {
		inherit: true,
		flags: {protect: 1, snatch: 1},
		isNonstandard: null,
	},
	triplekick: {
		inherit: true,
		basePower: 30,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	tropkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	twineedle: {
		inherit: true,
		basePower: 40,
		accuracy: 95,
		secondary: {
			chance: 30,
			status: 'psn',
		},
		desc: "Hits twice, with each hit having a 30% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 30% chance to poison.",
		isNonstandard: null,
	},
	waterfall: {
		inherit: true,
		basePower: 85,
		accuracy: 95,
		isNonstandard: null,
	},
	waterpledge: { // TODO: Rainbow Interaction
		inherit: true,
		basePower: 80,
		basePowerCallback(pokemon, target, move) {
			return move.basePower;
		},
		onPrepareHit() {},
		onModifyMove() {},
		condition: {},
		desc: "Has a 100% chance to trigger Rainbow.",
		shortDesc: "100% to trigger Rainbow.",
		isNonstandard: null,
	},
	waterspout: {
		inherit: true,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	whirlpool: {
		inherit: true,
		basePower: 45,
		accuracy: 95,
		isNonstandard: null,
	},
	whirlwind: {
		inherit: true,
		type: "Wind",
		accuracy: 100,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		isNonstandard: null,
	},
	wildcharge: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	wrap: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	lowkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	blazekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	megakick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	electroweb: {
		inherit: true,
		flags: {protect: 1, mirror: 1, web: 1},
		isNonstandard: null,
	},
	stickyweb: {
		inherit: true,
		flags: {reflectable: 1, web: 1},
		isNonstandard: null,
	},
	xscissor: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
	},
	nightslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
	},
	sacredsword: {
		inherit: true,
		pp: 20,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	secretsword: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sword: 1},
		isNonstandard: null,
	},
	leafblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	falseswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	slash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	psychocut: {
		inherit: true,
		flags: {protect: 1, mirror: 1, slicing: 1, sword: 1},
		isNonstandard: null,
	},
	peck: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, beak: 1},
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		basePower: 110,
		priority: -1,
		flags: {bullet: 1, protect: 1},
		isNonstandard: null,
	},
	boltbeak: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: null,
	},
	bugbite: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, bite: 1},
		isNonstandard: null,
	},
	sunnyday: {
		inherit: true,
		flags: {sun: 1},
		isNonstandard: null,
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1, sun: 1},
		isNonstandard: null,
	},
	rockslide: {
		inherit: true,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	dracometeor: {
		inherit: true,
		basePower: 140,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	fusionflare: {
		inherit: true,
		flags: {protect: 1, mirror: 1, defrost: 1, above: 1},
		isNonstandard: null,
	},
	smackdown: {
		inherit: true,
		flags: {protect: 1, mirror: 1, nonsky: 1, above: 1},
		isNonstandard: null,
	},
	mountaingale: {
		inherit: true,
		flags: {protect: 1, mirror: 1, above: 1},
		isNonstandard: null,
	},
	meteorcrash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1, above: 1},
		isNonstandard: null,
	},
	magicpowder: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		isNonstandard: null,
	},
	powder: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		isNonstandard: null,
	},
	zingzap: {
		inherit: true,
		pp: 25,
		secondary: {
			chance: 25,
			volatileStatus: 'flinch',
		},
		desc: "Has a 25% chance to make the target flinch.",
		shortDesc: "25% chance to make the target flinch.",
	},
	/* Vanilla moves in gen5 */
	autotomize: {
		inherit: true,
		volatileStatus: 'autotomize',
		onHit(pokemon) {
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon) {
				if (pokemon.species.weighthg > 1) {
					this.effectState.multiplier = 1;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onRestart(pokemon) {
				if (pokemon.species.weighthg - (this.effectState.multiplier * 1000) > 1) {
					this.effectState.multiplier++;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onModifyWeightPriority: 2,
			onModifyWeight(weighthg, pokemon) {
				if (this.effectState.multiplier) {
					weighthg -= this.effectState.multiplier * 1000;
					if (weighthg < 1) weighthg = 1;
					return weighthg;
				}
			},
		},
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		pp: 30,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	blizzard: {
		inherit: true,
		basePower: 120,
		isNonstandard: null,
	},
	bugbuzz: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	camouflage: {
		inherit: true,
		onHit(target) {
			if (!target.setType('Ground')) return false;
			this.add('-start', target, 'typechange', 'Ground');
		},
		isNonstandard: null,
	},
	chatter: {
		inherit: true,
		basePower: 60,
		onModifyMove(move, pokemon) {
			if (pokemon.species.name !== 'Chatot') delete move.secondaries;
		},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		flags: {protect: 1, sound: 1, distance: 1},
		isNonstandard: null,
	},
	cottonspore: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		target: "normal",
		isNonstandard: null,
	},
	covet: {
		inherit: true,
		pp: 40,
		isNonstandard: null,
	},
	defog: {
		inherit: true,
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'mirageveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll',
				'magictrap', 'pillowpile', 'wiretrap', 'mines', 'brambles', 'icicles', 'scrapmetal', 'legotrap', 'hotcoals', 'acidtrap', 'discombubbles', 'bonfire', 'healingcircle',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll',
				'magictrap', 'pillowpile', 'wiretrap', 'mines', 'brambles', 'icicles', 'scrapmetal', 'legotrap', 'hotcoals', 'acidtrap', 'discombubbles','bonfire', 'healingcircle',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		isNonstandard: null,
	},
	drainpunch: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		isNonstandard: null,
	},
	dreameater: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
		isNonstandard: null,
	},
	electroball: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			const ratio = Math.floor(pokemon.getStat('spe') / Math.max(1, target.getStat('spe')));
			const bp = [40, 60, 80, 120, 150][Math.min(ratio, 4)];
			this.debug('BP: ' + bp);
			return bp;
		},
		isNonstandard: null,
	},
	fireblast: {
		inherit: true,
		basePower: 120,
		isNonstandard: null,
	},
	futuresight: {
		inherit: true,
		basePower: 100,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 100,
					category: "Special",
					priority: 0,
					flags: {futuremove: 1},
					ignoreImmunity: false,
					effectType: 'Move',
					type: 'Psychic',
				},
			});
			this.add('-start', source, 'move: Future Sight');
			return null;
		},
		isNonstandard: null,
	},
	glare: {
		inherit: true,
		accuracy: 90,
		isNonstandard: null,
	},
	growth: {
		inherit: true,
		pp: 40,
		isNonstandard: null,
	},
	gyroball: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			let power = Math.floor(25 * target.getStat('spe') / Math.max(1, pokemon.getStat('spe'))) + 1;
			if (power > 150) power = 150;
			this.debug('BP: ' + power);
			return power;
		},
		isNonstandard: null,
	},
	healbell: {
		inherit: true,
		flags: {snatch: 1, sound: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				ally.cureStatus();
			}
		},
		isNonstandard: null,
	},
	healpulse: {
		inherit: true,
		heal: [1, 2],
		onHit() {},
		isNonstandard: null,
	},
	heatwave: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	hiddenpower: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerbug: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerdark: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerdragon: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerelectric: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfighting: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfire: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerflying: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerghost: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowergrass: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerground: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerice: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerpoison: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerpsychic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerrock: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowersteel: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerwater: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hornleech: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: null,
	},
	hydropump: {
		inherit: true,
		basePower: 120,
		isNonstandard: null,
	},
	hypervoice: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	leafstorm: {
		inherit: true,
		basePower: 140,
		isNonstandard: null,
	},
	lowsweep: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	metalsound: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	minimize: {
		inherit: true,
		pp: 20,
		condition: {
			noCopy: true,
			onSourceModifyDamage(damage, source, target, move) {
				if (['stomp', 'steamroller'].includes(move.id)) {
					return this.chainModify(2);
				}
			},
		},
		isNonstandard: null,
	},
	muddywater: {
		inherit: true,
		basePower: 95,
		isNonstandard: null,
	},
	naturepower: {
		inherit: true,
		onTryHit() {},
		onHit(pokemon) {
			this.actions.useMove('earthquake', pokemon);
		},
		target: "self",
		isNonstandard: null,
	},
	overheat: {
		inherit: true,
		basePower: 140,
		isNonstandard: null,
	},
	poisongas: {
		inherit: true,
		accuracy: 80,
	},
	poisonpowder: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		isNonstandard: null,
	},
	psychup: {
		inherit: true,
		onHit(target, source) {
			let i: BoostID;
			for (i in target.boosts) {
				source.boosts[i] = target.boosts[i];
			}
			this.add('-copyboost', source, target, '[from] move: Psych Up');
		},
		isNonstandard: null,
	},
	quickguard: {
		inherit: true,
		stallingMove: true,
		onTry(source) {
			return this.queue.willAct() && this.runEvent('StallMove', source);
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Quick Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				// Quick Guard only blocks moves with a natural positive priority
				// (e.g. it doesn't block 0 priority moves boosted by Prankster)
				if (effect && (effect.id === 'feint' || this.dex.moves.get(effect.id).priority <= 0)) {
					return;
				}
				this.add('-activate', target, 'Quick Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return null;
			},
		},
		isNonstandard: null,
	},
	reflect: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay') || source?.hasAbility('builder')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (this.activePerHalf > 1) return this.chainModify([2703, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Reflect');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'Reflect');
			},
		},
		isNonstandard: null,
	},
	round: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	scald: {
		inherit: true,
		thawsTarget: false,
		isNonstandard: null,
	},
	secretpower: {
		inherit: true,
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		isNonstandard: null,
	},
	skillswap: {
		inherit: true,
		onHit(target, source) {
			const targetAbility = target.ability;
			const sourceAbility = source.ability;
			if (targetAbility === sourceAbility) {
				return false;
			}
			this.add('-activate', source, 'move: Skill Swap', this.dex.abilities.get(targetAbility), this.dex.abilities.get(sourceAbility), '[of] ' + target);
			source.setAbility(targetAbility);
			target.setAbility(sourceAbility);
		},
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target.fainted) return false;
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					this.add('-end', target, 'Sky Drop');
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		isNonstandard: null,
	},
	sleeppowder: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		isNonstandard: null,
	},
	smellingsalts: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	smog: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	spore: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		isNonstandard: null,
	},
	stunspore: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		isNonstandard: null,
	},
	substitute: {
		inherit: true,
		condition: {
			onStart(target) {
				this.add('-start', target, 'Substitute');
				this.effectState.hp = Math.floor(target.maxhp / 4);
				delete target.volatiles['partiallytrapped'];
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit(target, source, move) {
				if (target === source || move.flags['bypasssub']) {
					return;
				}
				let damage = this.actions.getDamage(source, target, move);
				if (!damage && damage !== 0) {
					this.add('-fail', source);
					this.attrLastMove('[still]');
					return null;
				}
				damage = this.runEvent('SubDamage', target, source, move, damage);
				if (!damage) {
					return damage;
				}
				if (damage > target.volatiles['substitute'].hp) {
					damage = target.volatiles['substitute'].hp as number;
				}
				target.volatiles['substitute'].hp -= damage;
				source.lastDamage = damage;
				if (target.volatiles['substitute'].hp <= 0) {
					if (move.ohko) this.add('-ohko');
					target.removeVolatile('substitute');
				} else {
					this.add('-activate', target, 'Substitute', '[damage]');
				}
				if (move.recoil && damage) {
					this.damage(this.actions.calcRecoilDamage(damage, move, source), source, target, 'recoil');
				}
				if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
				}
				this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
				this.runEvent('AfterSubDamage', target, source, move, damage);
				return this.HIT_SUBSTITUTE;
			},
			onEnd(target) {
				this.add('-end', target, 'Substitute');
			},
		},
		isNonstandard: null,
	},
	surf: {
		inherit: true,
		basePower: 95,
		isNonstandard: null,
	},
	swordsdance: {
		inherit: true,
		pp: 30,
		isNonstandard: null,
	},
	tailwind: {
		inherit: true,
		pp: 30,
		isNonstandard: null,
	},
	toxic: {
		inherit: true,
		onPrepareHit() {},
		isNonstandard: null,
	},
	uproar: {
		inherit: true,
		flags: {protect: 1, mirror: 1, sound: 1},
		isNonstandard: null,
	},
	vinewhip: {
		inherit: true,
		basePower: 35,
		pp: 15,
		isNonstandard: null,
	},
	wakeupslap: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	watershuriken: {
		inherit: true,
		category: "Physical",
		flags: {protect: 1},
		isNonstandard: null,
	},
	watersport: {
		num: 346,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: {},
		volatileStatus: 'watersport',
		onTryHitField(target, source) {
			if (source.volatiles['watersport']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add("-start", pokemon, 'move: Water Sport');
			},
			onAnyBasePowerPriority: 1,
			onAnyBasePower(basePower, user, target, move) {
				if (move.type === 'Fire') return this.chainModify([1352, 4096]);
			},
		},
		secondary: null,
		target: "all",
		type: "Water",
		isNonstandard: null,
	},
	wideguard: {
		inherit: true,
		stallingMove: true,
		onTry(source) {
			return this.queue.willAct() && this.runEvent('StallMove', source);
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		isNonstandard: null,
	},
	willowisp: {
		inherit: true,
		accuracy: 75,
		isNonstandard: null,
	},
	// Vanilla moves added to avoid more "Not available in Gen9"
	acidspray: {
		inherit: true,
		isNonstandard: null,
	},
	acrobatics: {
		inherit: true,
		isNonstandard: null,
	},
	acupressure: {
		inherit: true,
		isNonstandard: null,
	},
	aerialace: {
		inherit: true,
		isNonstandard: null,
	},
	aeroblast: {
		inherit: true,
		isNonstandard: null,
	},
	afteryou: {
		inherit: true,
		isNonstandard: null,
	},
	agility: {
		inherit: true,
		isNonstandard: null,
	},
	amnesia: {
		inherit: true,
		isNonstandard: null,
	},
	ancientpower: {
		inherit: true,
		isNonstandard: null,
	},
	aquacutter: {
		inherit: true,
		isNonstandard: null,
	},
	aquajet: {
		inherit: true,
		isNonstandard: null,
	},
	aquastep: {
		inherit: true,
		isNonstandard: null,
	},
	armorcannon: {
		inherit: true,
		isNonstandard: null,
	},
	aromaticmist: {
		inherit: true,
		isNonstandard: null,
	},
	astonish: {
		inherit: true,
		isNonstandard: null,
	},
	astralbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	attackorder: {
		inherit: true,
		isNonstandard: null,
	},
	aurorabeam: {
		inherit: true,
		isNonstandard: null,
	},
	avalanche: {
		inherit: true,
		isNonstandard: null,
	},
	axekick: {
		inherit: true,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		isNonstandard: null,
	},
	banefulbunker: {
		inherit: true,
		isNonstandard: null,
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	batonpass: {
		inherit: true,
		isNonstandard: null,
	},
	beatup: {
		inherit: true,
		isNonstandard: null,
	},
	behemothbash: {
		inherit: true,
		isNonstandard: null,
	},
	behemothblade: {
		inherit: true,
		isNonstandard: null,
	},
	belch: {
		inherit: true,
		isNonstandard: null,
	},
	bellydrum: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	bite: {
		inherit: true,
		isNonstandard: null,
	},
	bitterblade: {
		inherit: true,
		isNonstandard: null,
	},
	bittermalice: {
		inherit: true,
		isNonstandard: null,
	},
	blastburn: {
		inherit: true,
		isNonstandard: null,
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: null,
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	blueflare: {
		inherit: true,
		isNonstandard: null,
	},
	bodypress: {
		inherit: true,
		isNonstandard: null,
	},
	bodyslam: {
		inherit: true,
		isNonstandard: null,
	},
	boltstrike: {
		inherit: true,
		isNonstandard: null,
	},
	boomburst: {
		inherit: true,
		isNonstandard: null,
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: null,
	},
	bravebird: {
		inherit: true,
		isNonstandard: null,
	},
	brickbreak: {
		inherit: true,
		isNonstandard: null,
	},
	brine: {
		inherit: true,
		isNonstandard: null,
	},
	bulkup: {
		inherit: true,
		isNonstandard: null,
	},
	bulldoze: {
		inherit: true,
		isNonstandard: null,
	},
	bulletpunch: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: null,
	},
	calmmind: {
		inherit: true,
		isNonstandard: null,
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: null,
	},
	charge: {
		inherit: true,
		isNonstandard: null,
	},
	chillingwater: {
		inherit: true,
		isNonstandard: null,
	},
	chillyreception: {
		inherit: true,
		isNonstandard: null,
	},
	chipaway: {
		inherit: true,
		isNonstandard: null,
	},
	chloroblast: {
		inherit: true,
		isNonstandard: null,
	},
	circlethrow: {
		inherit: true,
		isNonstandard: null,
	},
	clearsmog: {
		inherit: true,
		isNonstandard: null,
	},
	closecombat: {
		inherit: true,
		isNonstandard: null,
	},
	coaching: {
		inherit: true,
		isNonstandard: null,
	},
	coil: {
		inherit: true,
		isNonstandard: null,
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: null,
	},
	combattorque: {
		inherit: true,
		isNonstandard: null,
	},
	comeuppance: {
		inherit: true,
		isNonstandard: null,
	},
	confuseray: {
		inherit: true,
		isNonstandard: null,
	},
	confusion: {
		inherit: true,
		isNonstandard: null,
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: null,
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
	},
	cottonguard: {
		inherit: true,
		isNonstandard: null,
	},
	counter: {
		inherit: true,
		isNonstandard: null,
	},
	courtchange: {
		inherit: true,
		isNonstandard: null,
	},
	crosschop: {
		inherit: true,
		isNonstandard: null,
	},
	crunch: {
		inherit: true,
		isNonstandard: null,
	},
	crushclaw: {
		inherit: true,
		isNonstandard: null,
	},
	crushgrip: {
		inherit: true,
		isNonstandard: null,
	},
	curse: {
		inherit: true,
		isNonstandard: null,
	},
	darkpulse: {
		inherit: true,
		isNonstandard: null,
	},
	dazzlinggleam: {
		inherit: true,
		isNonstandard: null,
	},
	defensecurl: {
		inherit: true,
		isNonstandard: null,
	},
	disable: {
		inherit: true,
		isNonstandard: null,
	},
	discharge: {
		inherit: true,
		isNonstandard: null,
	},
	direclaw: {
		inherit: true,
		isNonstandard: null,
	},
	doodle: {
		inherit: true,
		isNonstandard: null,
	},
	doomdesire: {
		inherit: true,
		isNonstandard: null,
	},
	doubleedge: {
		inherit: true,
		isNonstandard: null,
	},
	doubleshock: {
		inherit: true,
		isNonstandard: null,
	},
	doubleteam: {
		inherit: true,
		isNonstandard: null,
	},
	dragonascent: {
		inherit: true,
		isNonstandard: null,
	},
	dragonbreath: {
		inherit: true,
		isNonstandard: null,
	},
	dragonclaw: {
		inherit: true,
		isNonstandard: null,
	},
	dragondance: {
		inherit: true,
		isNonstandard: null,
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: null,
	},
	dragonhammer: {
		inherit: true,
		isNonstandard: null,
	},
	dragonrage: {
		inherit: true,
		isNonstandard: null,
	},
	dragonrush: {
		inherit: true,
		isNonstandard: null,
	},
	drillrun: {
		inherit: true,
		isNonstandard: null,
	},
	dualchop: {
		inherit: true,
		isNonstandard: null,
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: null,
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: null,
	},
	dynamicpunch: {
		inherit: true,
		isNonstandard: null,
	},
	earthpower: {
		inherit: true,
		isNonstandard: null,
	},
	earthquake: {
		inherit: true,
		isNonstandard: null,
	},
	eeriespell: {
		inherit: true,
		isNonstandard: null,
	},
	electrodrift: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
	},
	ember: {
		inherit: true,
		isNonstandard: null,
	},
	encore: {
		inherit: true,
		isNonstandard: null,
	},
	endeavor: {
		inherit: true,
		isNonstandard: null,
	},
	entrainment: {
		inherit: true,
		isNonstandard: null,
	},
	eruption: {
		inherit: true,
		isNonstandard: null,
	},
	esperwing: {
		inherit: true,
		isNonstandard: null,
	},
	expandingforce: {
		inherit: true,
		isNonstandard: null,
	},
	explosion: {
		inherit: true,
		isNonstandard: null,
	},
	extremespeed: {
		inherit: true,
		isNonstandard: null,
	},
	facade: {
		inherit: true,
		isNonstandard: null,
	},
	fairywind: {
		inherit: true,
		isNonstandard: null,
	},
	fakeout: {
		inherit: true,
		isNonstandard: null,
	},
	faketears: {
		inherit: true,
		isNonstandard: null,
	},
	fierydance: {
		inherit: true,
		isNonstandard: null,
	},
	fierywrath: {
		inherit: true,
		isNonstandard: null,
	},
	filletaway: {
		inherit: true,
		isNonstandard: null,
	},
	firefang: {
		inherit: true,
		isNonstandard: null,
	},
	firepunch: {
		inherit: true,
		isNonstandard: null,
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: null,
	},
	fissure: {
		inherit: true,
		isNonstandard: null,
	},
	flail: {
		inherit: true,
		isNonstandard: null,
	},
	flameburst: {
		inherit: true,
		isNonstandard: null,
	},
	flamecharge: {
		inherit: true,
		isNonstandard: null,
	},
	flamewheel: {
		inherit: true,
		isNonstandard: null,
	},
	flareblitz: {
		inherit: true,
		isNonstandard: null,
	},
	flatter: {
		inherit: true,
		isNonstandard: null,
	},
	fling: {
		inherit: true,
		isNonstandard: null,
	},
	flipturn: {
		inherit: true,
		isNonstandard: null,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
	},
	flowershield: {
		inherit: true,
		isNonstandard: null,
	},
	flowertrick: {
		inherit: true,
		isNonstandard: null,
	},
	focusblast: {
		inherit: true,
		isNonstandard: null,
	},
	focusenergy: {
		inherit: true,
		isNonstandard: null,
	},
	focuspunch: {
		inherit: true,
		isNonstandard: null,
	},
	forcepalm: {
		inherit: true,
		isNonstandard: null,
	},
	foresight: {
		inherit: true,
		isNonstandard: null,
	},
	foulplay: {
		inherit: true,
		isNonstandard: null,
	},
	freezingglare: {
		inherit: true,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: null,
	},
	frenzyplant: {
		inherit: true,
		isNonstandard: null,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	fusionbolt: {
		inherit: true,
		isNonstandard: null,
	},
	gastroacid: {
		inherit: true,
		isNonstandard: null,
	},
	geomancy: {
		inherit: true,
		isNonstandard: null,
	},
	gigaimpact: {
		inherit: true,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: null,
		onHit(target, source) {
			if (target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If this move is successful, the user must recharge on the following turn and cannot make a move. If the target is knocked out by this move, the user does not have to recharge.",
		shortDesc: "User cannot move next turn, if the target isn't KO'ed.",
		isNonstandard: null,
	},
	gigatonhammer: {
		inherit: true,
		isNonstandard: null,
	},
	glaciallance: {
		inherit: true,
		isNonstandard: null,
	},
	glaiverush: {
		inherit: true,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		isNonstandard: null,
	},
	grassknot: {
		inherit: true,
		isNonstandard: null,
	},
	grassyglide: {
		inherit: true,
		isNonstandard: null,
	},
	grudge: {
		inherit: true,
		isNonstandard: null,
	},
	guardsplit: {
		inherit: true,
		isNonstandard: null,
	},
	guardswap: {
		inherit: true,
		isNonstandard: null,
	},
	guillotine: {
		inherit: true,
		isNonstandard: null,
	},
	gust: {
		inherit: true,
		isNonstandard: null,
	},
	hail: {
		inherit: true,
		isNonstandard: null,
	},
	hammerarm: {
		inherit: true,
		isNonstandard: null,
	},
	happyhour: {
		inherit: true,
		isNonstandard: null,
	},
	harden: {
		inherit: true,
		isNonstandard: null,
	},
	haze: {
		inherit: true,
		isNonstandard: null,
	},
	headbutt: {
		inherit: true,
		isNonstandard: null,
	},
	headcharge: {
		inherit: true,
		isNonstandard: null,
	},
	headlongrush: {
		inherit: true,
		isNonstandard: null,
	},
	headsmash: {
		inherit: true,
		isNonstandard: null,
	},
	healblock: {
		inherit: true,
		isNonstandard: null,
	},
	healingwish: {
		inherit: true,
		isNonstandard: null,
	},
	heatcrash: {
		inherit: true,
		isNonstandard: null,
	},
	heavyslam: {
		inherit: true,
		isNonstandard: null,
	},
	helpinghand: {
		inherit: true,
		isNonstandard: null,
	},
	highjumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: null,
	},
	honeclaws: {
		inherit: true,
		isNonstandard: null,
	},
	howl: {
		inherit: true,
		isNonstandard: null,
	},
	hydrocannon: {
		inherit: true,
		isNonstandard: null,
	},
	hyperbeam: {
		inherit: true,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: null,
		onHit(target, source) {
			if (target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		desc: "If this move is successful, the user must recharge on the following turn and cannot make a move. If the target is knocked out by this move, the user does not have to recharge.",
		shortDesc: "User cannot move next turn, if the target isn't KO'ed.",
		isNonstandard: null,
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	hypnosis: {
		inherit: true,
		isNonstandard: null,
	},
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	icefang: {
		inherit: true,
		isNonstandard: null,
	},
	iceshard: {
		inherit: true,
		isNonstandard: null,
	},
	icespinner: {
		inherit: true,
		isNonstandard: null,
	},
	iciclecrash: {
		inherit: true,
		isNonstandard: null,
	},
	iciclespear: {
		inherit: true,
		isNonstandard: null,
	},
	icywind: {
		inherit: true,
		isNonstandard: null,
	},
	infernalparade: {
		inherit: true,
		isNonstandard: null,
	},
	inferno: {
		inherit: true,
		isNonstandard: null,
	},
	ingrain: {
		inherit: true,
		isNonstandard: null,
	},
	iondeluge: {
		inherit: true,
		isNonstandard: null,
	},
	irondefense: {
		inherit: true,
		isNonstandard: null,
	},
	ironhead: {
		inherit: true,
		isNonstandard: null,
	},
	jetpunch: {
		inherit: true,
		isNonstandard: null,
	},
	junglehealing: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		isNonstandard: null,
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: null,
	},
	laserfocus: {
		inherit: true,
		isNonstandard: null,
	},
	lashout: {
		inherit: true,
		isNonstandard: null,
	},
	lastresort: {
		inherit: true,
		isNonstandard: null,
	},
	lastrespects: {
		inherit: true,
		isNonstandard: null,
	},
	leechseed: {
		inherit: true,
		isNonstandard: null,
	},
	leer: {
		inherit: true,
		isNonstandard: null,
	},
	lockon: {
		inherit: true,
		isNonstandard: null,
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	luminacrash: {
		inherit: true,
		isNonstandard: null,
	},
	lunarblessing: {
		inherit: true,
		isNonstandard: null,
	},
	machpunch: {
		inherit: true,
		isNonstandard: null,
	},
	magicalleaf: {
		inherit: true,
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: null,
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	magneticflux: {
		inherit: true,
		isNonstandard: null,
	},
	magnetrise: {
		inherit: true,
		isNonstandard: null,
	},
	magnitude: {
		inherit: true,
		isNonstandard: null,
	},
	makeitrain: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		isNonstandard: null,
	},
	megahorn: {
		inherit: true,
		isNonstandard: null,
	},
	megapunch: {
		inherit: true,
		isNonstandard: null,
	},
	metalburst: {
		inherit: true,
		isNonstandard: null,
	},
	metalclaw: {
		inherit: true,
		isNonstandard: null,
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: null,
	},
	mimic: {
		inherit: true,
		isNonstandard: null,
	},
	mindreader: {
		inherit: true,
		isNonstandard: null,
	},
	miracleeye: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorcoat: {
		inherit: true,
		isNonstandard: null,
	},
	mirrormove: {
		inherit: true,
		isNonstandard: null,
	},
	mist: {
		inherit: true,
		isNonstandard: null,
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	mortalspin: {
		inherit: true,
		isNonstandard: null,
	},
	mudslap: {
		inherit: true,
		isNonstandard: null,
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: null,
	},
	nastyplot: {
		inherit: true,
		isNonstandard: null,
	},
	naturalgift: {
		inherit: true,
		isNonstandard: null,
	},
	nightmare: {
		inherit: true,
		isNonstandard: null,
	},
	nightshade: {
		inherit: true,
		isNonstandard: null,
	},
	noretreat: {
		inherit: true,
		isNonstandard: null,
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: null,
	},
	nuzzle: {
		inherit: true,
		isNonstandard: null,
	},
	odorsleuth: {
		inherit: true,
		isNonstandard: null,
	},
	ominouswind: {
		inherit: true,
		isNonstandard: null,
	},
	orderup: {
		inherit: true,
		isNonstandard: null,
	},
	painsplit: {
		inherit: true,
		isNonstandard: null,
	},
	paleowave: {
		inherit: true,
		isNonstandard: null,
	},
	partingshot: {
		inherit: true,
		isNonstandard: null,
	},
	payback: {
		inherit: true,
		isNonstandard: null,
	},
	petaldance: {
		inherit: true,
		isNonstandard: null,
	},
	phantomforce: {
		inherit: true,
		isNonstandard: null,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
	},
	playrough: {
		inherit: true,
		isNonstandard: null,
	},
	pluck: {
		inherit: true,
		isNonstandard: null,
	},
	poisonjab: {
		inherit: true,
		isNonstandard: null,
	},
	poltergeist: {
		inherit: true,
		isNonstandard: null,
	},
	populationbomb: {
		inherit: true,
		isNonstandard: null,
	},
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	powdersnow: {
		inherit: true,
		isNonstandard: null,
	},
	powershift: {
		inherit: true,
		isNonstandard: null,
	},
	powersplit: {
		inherit: true,
		isNonstandard: null,
	},
	powerswap: {
		inherit: true,
		isNonstandard: null,
	},
	powertrick: {
		inherit: true,
		isNonstandard: null,
	},
	powertrip: {
		inherit: true,
		isNonstandard: null,
	},
	powerwhip: {
		inherit: true,
		isNonstandard: null,
	},
	present: {
		inherit: true,
		isNonstandard: null,
	},
	protect: {
		inherit: true,
		isNonstandard: null,
	},
	psybeam: {
		inherit: true,
		isNonstandard: null,
	},
	psychoboost: {
		inherit: true,
		isNonstandard: null,
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: null,
	},
	psyshock: {
		inherit: true,
		isNonstandard: null,
	},
	psystrike: {
		inherit: true,
		isNonstandard: null,
	},
	punishment: {
		inherit: true,
		isNonstandard: null,
	},
	pursuit: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		isNonstandard: null,
	},
	quickattack: {
		inherit: true,
		isNonstandard: null,
	},
	quiverdance: {
		inherit: true,
		isNonstandard: null,
	},
	ragefist: {
		inherit: true,
		isNonstandard: null,
	},
	ragingbull: {
		inherit: true,
		isNonstandard: null,
	},
	ragingfury: {
		inherit: true,
		isNonstandard: null,
	},
	raindance: {
		inherit: true,
		isNonstandard: null,
	},
	razorleaf: {
		inherit: true,
		isNonstandard: null,
	},
	recover: {
		inherit: true,
		isNonstandard: null,
	},
	reflecttype: {
		inherit: true,
		isNonstandard: null,
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	rest: {
		inherit: true,
		isNonstandard: null,
	},
	return: {
		inherit: true,
		isNonstandard: null,
	},
	revenge: {
		inherit: true,
		isNonstandard: null,
	},
	reversal: {
		inherit: true,
		isNonstandard: null,
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: null,
	},
	risingvoltage: {
		inherit: true,
		isNonstandard: null,
	},
	roaroftime: {
		inherit: true,
		isNonstandard: null,
	},
	rockblast: {
		inherit: true,
		isNonstandard: null,
	},
	rockpolish: {
		inherit: true,
		isNonstandard: null,
	},
	rockwrecker: {
		inherit: true,
		isNonstandard: null,
	},
	roleplay: {
		inherit: true,
		isNonstandard: null,
	},
	rollout: {
		inherit: true,
		isNonstandard: null,
	},
	roost: {
		inherit: true,
		isNonstandard: null,
	},
	rototiller: {
		inherit: true,
		isNonstandard: null,
	},
	ruination: {
		inherit: true,
		isNonstandard: null,
	},
	sacredfire: {
		inherit: true,
		isNonstandard: null,
	},
	safeguard: {
		inherit: true,
		isNonstandard: null,
	},
	saltcure: {
		inherit: true,
		isNonstandard: null,
	},
	sandattack: {
		inherit: true,
		isNonstandard: null,
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sandstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		isNonstandard: null,
	},
	scaleshot: {
		inherit: true,
		isNonstandard: null,
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: null,
	},
	scratch: {
		inherit: true,
		isNonstandard: null,
	},
	searingshot: {
		inherit: true,
		isNonstandard: null,
	},
	seedflare: {
		inherit: true,
		isNonstandard: null,
	},
	seismictoss: {
		inherit: true,
		isNonstandard: null,
	},
	shadowball: {
		inherit: true,
		isNonstandard: null,
	},
	shadowclaw: {
		inherit: true,
		isNonstandard: null,
	},
	shadowforce: {
		inherit: true,
		isNonstandard: null,
	},
	shadowsneak: {
		inherit: true,
		isNonstandard: null,
	},
	shadowstrike: {
		inherit: true,
		isNonstandard: null,
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shedtail: {
		inherit: true,
		isNonstandard: null,
	},
	sheercold: {
		inherit: true,
		isNonstandard: null,
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: null,
	},
	shellsmash: {
		inherit: true,
		isNonstandard: null,
	},
	shelltrap: {
		inherit: true,
		isNonstandard: null,
	},
	shelter: {
		inherit: true,
		isNonstandard: null,
	},
	shiftgear: {
		inherit: true,
		isNonstandard: null,
	},
	shockwave: {
		inherit: true,
		isNonstandard: null,
	},
	signalbeam: {
		inherit: true,
		isNonstandard: null,
	},
	silktrap: {
		inherit: true,
		isNonstandard: null,
	},
	simplebeam: {
		inherit: true,
		isNonstandard: null,
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: null,
	},
	skittersmack: {
		inherit: true,
		isNonstandard: null,
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	slackoff: {
		inherit: true,
		isNonstandard: null,
	},
	sleeptalk: {
		inherit: true,
		isNonstandard: null,
	},
	sludge: {
		inherit: true,
		isNonstandard: null,
	},
	sludgebomb: {
		inherit: true,
		isNonstandard: null,
	},
	sludgewave: {
		inherit: true,
		isNonstandard: null,
	},
	smokescreen: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
	},
	snowscape: {
		inherit: true,
		isNonstandard: null,
	},
	softboiled: {
		inherit: true,
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	spacialrend: {
		inherit: true,
		isNonstandard: null,
	},
	spark: {
		inherit: true,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		isNonstandard: null,
	},
	spicyextract: {
		inherit: true,
		isNonstandard: null,
	},
	spikes: {
		inherit: true,
		isNonstandard: null,
	},
	spinout: {
		inherit: true,
		isNonstandard: null,
	},
	spitup: {
		inherit: true,
		isNonstandard: null,
	},
	spite: {
		inherit: true,
		isNonstandard: null,
	},
	splash: {
		inherit: true,
		isNonstandard: null,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: null,
	},
	stealthrock: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		type: "Steam",
		isNonstandard: null,
	},
	steelroller: {
		inherit: true,
		isNonstandard: null,
	},
	stockpile: {
		inherit: true,
		isNonstandard: null,
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: null,
	},
	stoneedge: {
		inherit: true,
		isNonstandard: null,
	},
	storedpower: {
		inherit: true,
		isNonstandard: null,
	},
	struggle: {
		inherit: true,
		isNonstandard: null,
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: null,
	},
	superfang: {
		inherit: true,
		isNonstandard: null,
	},
	superpower: {
		inherit: true,
		isNonstandard: null,
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: null,
	},
	swift: {
		inherit: true,
		isNonstandard: null,
	},
	switcheroo: {
		inherit: true,
		isNonstandard: null,
	},
	synthesis: {
		inherit: true,
		isNonstandard: null,
	},
	tailglow: {
		inherit: true,
		isNonstandard: null,
	},
	tailwhip: {
		inherit: true,
		isNonstandard: null,
	},
	takedown: {
		inherit: true,
		isNonstandard: null,
	},
	takeheart: {
		inherit: true,
		isNonstandard: null,
	},
	taunt: {
		inherit: true,
		isNonstandard: null,
	},
	teeterdance: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	terablast: {
		inherit: true,
		isNonstandard: null,
	},
	terrainpulse: {
		inherit: true,
		isNonstandard: null,
	},
	thousandarrows: {
		inherit: true,
		isNonstandard: null,
	},
	thousandwaves: {
		inherit: true,
		isNonstandard: null,
	},
	thrash: {
		inherit: true,
		isNonstandard: null,
	},
	throatchop: {
		inherit: true,
		isNonstandard: null,
	},
	thundercage: {
		inherit: true,
		isNonstandard: null,
	},
	thunderfang: {
		inherit: true,
		isNonstandard: null,
	},
	thundershock: {
		inherit: true,
		isNonstandard: null,
	},
	thunderwave: {
		inherit: true,
		isNonstandard: null,
	},
	tickle: {
		inherit: true,
		isNonstandard: null,
	},
	tidyup: {
		inherit: true,
		isNonstandard: null,
	},
	torchsong: {
		inherit: true,
		isNonstandard: null,
	},
	torment: {
		inherit: true,
		isNonstandard: null,
	},
	toxicspikes: {
		inherit: true,
		isNonstandard: null,
	},
	trailblaze: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Uses the user's Speed stat in damage calculation rather than Attack stat.",
		shortDesc: "Uses the user's Speed stat in damage calculation rather than Attack stat.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		overrideOffensiveStat: 'spe',
		secondary: null,
		target: "normal",
		type: "Fire",
		isNonstandard: null,
	},
	transform: {
		inherit: true,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
		isNonstandard: null,
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: null,
	},
	tripledive: {
		inherit: true,
		isNonstandard: null,
	},
	trumpcard: {
		inherit: true,
		isNonstandard: null,
	},
	twinbeam: {
		inherit: true,
		isNonstandard: null,
	},
	twister: {
		inherit: true,
		isNonstandard: null,
	},
	uturn: {
		inherit: true,
		isNonstandard: null,
	},
	vacuumwave: {
		inherit: true,
		isNonstandard: null,
	},
	vcreate: {
		inherit: true,
		isNonstandard: null,
	},
	veeveevolley: {
		inherit: true,
		isNonstandard: null,
	},
	venoshock: {
		inherit: true,
		isNonstandard: null,
	},
	victorydance: {
		inherit: true,
		isNonstandard: null,
	},
	visegrip: {
		inherit: true,
		isNonstandard: null,
	},
	vitalthrow: {
		inherit: true,
		isNonstandard: null,
	},
	voltswitch: {
		inherit: true,
		isNonstandard: null,
	},
	volttackle: {
		inherit: true,
		isNonstandard: null,
	},
	watergun: {
		inherit: true,
		isNonstandard: null,
	},
	waterpulse: {
		inherit: true,
		isNonstandard: null,
	},
	wavecrash: {
		inherit: true,
		isNonstandard: null,
	},
	wickedblow: {
		inherit: true,
		isNonstandard: null,
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: null,
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: null,
	},
	wingattack: {
		inherit: true,
		isNonstandard: null,
	},
	wish: {
		inherit: true,
		isNonstandard: null,
	},
	withdraw: {
		inherit: true,
		isNonstandard: null,
	},
	woodhammer: {
		inherit: true,
		isNonstandard: null,
	},
	workup: {
		inherit: true,
		isNonstandard: null,
	},
	worryseed: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	yawn: {
		inherit: true,
		isNonstandard: null,
	},
	zapcannon: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		isNonstandard: null,
	},
	/* Wack moves */
	hiddenforce: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerblood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerbone: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowercosmic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowercrystal: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowercyber: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerdivine: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfabric: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfairy: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfear: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerfood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerglass: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowergreasy: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerheart: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerlight: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowermagic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowermagma: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowermeme: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowernuclear: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerogre: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerpaint: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerpaper: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerplastic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerrubber: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowersound: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowersteam: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowertech: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowertime: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowervirus: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerwind: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerwood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenpowerzombie: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceblood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcebone: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcebug: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcecosmic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcecrystal: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcecyber: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcedivine: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcedark: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcedragon: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceelectric: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefabric: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefairy: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefear: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefighting: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefire: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceflying: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcefood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceghost: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceglass: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcegrass: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcegreasy: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceground: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceheart: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceice: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcelight: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcemagic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcemagma: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcememe: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcenuclear: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceogre: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcepaint: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcepaper: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforceplastic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcepoison: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcepsychic: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcerock: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcerubber: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcesound: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcesteam: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcesteel: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcetech: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcetime: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcevirus: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcewater: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcewind: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcewood: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	hiddenforcezombie: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	// Wack moves
	hijumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	vicegrip: {
		inherit: true,
		isNonstandard: null,
	},
	gogcelebrate: {
		inherit: true,
		isNonstandard: null,
	},
	woodhit: {
		inherit: true,
		isNonstandard: null,
	},
	papertoss: {
		inherit: true,
		isNonstandard: null,
	},
	papergun: {
		inherit: true,
		isNonstandard: null,
	},
	fold: {
		inherit: true,
		isNonstandard: null,
	},
	papercut: {
		inherit: true,
		isNonstandard: null,
	},
	paperball: {
		inherit: true,
		isNonstandard: null,
	},
	lavaspit: {
		inherit: true,
		isNonstandard: null,
	},
	magmaburst: {
		inherit: true,
		isNonstandard: null,
	},
	volcaniceruption: {
		inherit: true,
		isNonstandard: null,
	},
	lavabomb: {
		inherit: true,
		isNonstandard: null,
	},
	kindle: {
		inherit: true,
		isNonstandard: null,
	},
	megamissile: {
		inherit: true,
		isNonstandard: null,
	},
	micromissiles: {
		inherit: true,
		isNonstandard: null,
	},
	oilup: {
		inherit: true,
		isNonstandard: null,
	},
	techsavvy: {
		inherit: true,
		isNonstandard: null,
	},
	hydraulickick: {
		inherit: true,
		isNonstandard: null,
	},
	pistonpunch: {
		inherit: true,
		isNonstandard: null,
	},
	dacoball: {
		inherit: true,
		isNonstandard: null,
	},
	wirelash: {
		inherit: true,
		isNonstandard: null,
	},
	energyshield: {
		inherit: true,
		isNonstandard: null,
	},
	steamyspray: {
		inherit: true,
		isNonstandard: null,
	},
	steamer: {
		inherit: true,
		isNonstandard: null,
	},
	steamball: {
		inherit: true,
		isNonstandard: null,
	},
	boatbash: {
		inherit: true,
		isNonstandard: null,
	},
	steamcharge: {
		inherit: true,
		isNonstandard: null,
	},
	frigofear: {
		inherit: true,
		isNonstandard: null,
	},
	fearpulse: {
		inherit: true,
		isNonstandard: null,
	},
	purefear: {
		inherit: true,
		isNonstandard: null,
	},
	claustrogrip: {
		inherit: true,
		isNonstandard: null,
	},
	rubberrub: {
		inherit: true,
		isNonstandard: null,
	},
	rubbershot: {
		inherit: true,
		isNonstandard: null,
	},
	rubberpowder: {
		inherit: true,
		isNonstandard: null,
	},
	rubberball: {
		inherit: true,
		isNonstandard: null,
	},
	rubberray: {
		inherit: true,
		isNonstandard: null,
	},
	tirecrash: {
		inherit: true,
		isNonstandard: null,
	},
	latexlash: {
		inherit: true,
		isNonstandard: null,
	},
	cyclonepunch: {
		inherit: true,
		isNonstandard: null,
	},
	stingpunch: {
		inherit: true,
		isNonstandard: null,
	},
	swarmattack: {
		inherit: true,
		isNonstandard: null,
	},
	celestialray: {
		inherit: true,
		isNonstandard: null,
	},
	solarcrash: {
		inherit: true,
		isNonstandard: null,
	},
	cometcrash: {
		inherit: true,
		isNonstandard: null,
	},
	sunsflames: {
		inherit: true,
		isNonstandard: null,
	},
	lunarwave: {
		inherit: true,
		isNonstandard: null,
	},
	sprinkle: {
		inherit: true,
		isNonstandard: null,
	},
	cookiecutter: {
		inherit: true,
		isNonstandard: null,
	},
	cookieslam: {
		inherit: true,
		isNonstandard: null,
	},
	cakewalk: {
		inherit: true,
		isNonstandard: null,
	},
	icecreambeam: {
		inherit: true,
		isNonstandard: null,
	},
	necromancy: {
		inherit: true,
		isNonstandard: null,
	},
	zombiehorde: {
		inherit: true,
		isNonstandard: null,
	},
	zombiebite: {
		inherit: true,
		isNonstandard: null,
	},
	rottedclaw: {
		inherit: true,
		isNonstandard: null,
	},
	zombiebile: {
		inherit: true,
		isNonstandard: null,
	},
	zombiepounce: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	malaria: {
		inherit: true,
		isNonstandard: null,
	},
	sneeze: {
		inherit: true,
		isNonstandard: null,
	},
	ebola: {
		inherit: true,
		isNonstandard: null,
	},
	rottedwings: {
		inherit: true,
		isNonstandard: null,
	},
	shamble: {
		inherit: true,
		isNonstandard: null,
	},
	macabredance: {
		inherit: true,
		isNonstandard: null,
	},
	ring: {
		inherit: true,
		isNonstandard: null,
	},
	tidalpunch: {
		inherit: true,
		isNonstandard: null,
	},
	bottletoss: {
		inherit: true,
		isNonstandard: null,
	},
	plasticdefense: {
		inherit: true,
		isNonstandard: null,
	},
	plasticjab: {
		inherit: true,
		isNonstandard: null,
	},
	bottleblast: {
		inherit: true,
		isNonstandard: null,
	},
	bottleslam: {
		inherit: true,
		isNonstandard: null,
	},
	plasticbeam: {
		inherit: true,
		isNonstandard: null,
	},
	stargaze: {
		inherit: true,
		isNonstandard: null,
	},
	virus: {
		inherit: true,
		isNonstandard: null,
	},
	comet: {
		inherit: true,
		isNonstandard: null,
	},
	galacticforce: {
		inherit: true,
		isNonstandard: null,
	},
	asteroidbelt: {
		inherit: true,
		isNonstandard: null,
	},
	meteorshower: {
		inherit: true,
		isNonstandard: null,
	},
	techerror: {
		inherit: true,
		isNonstandard: null,
	},
	shatterbody: {
		inherit: true,
		isNonstandard: null,
	},
	glassscrape: {
		inherit: true,
		isNonstandard: null,
	},
	glassblade: {
		inherit: true,
		isNonstandard: null,
	},
	shattercharge: {
		inherit: true,
		isNonstandard: null,
	},
	sawdust: {
		inherit: true,
		isNonstandard: null,
	},
	capsize: {
		inherit: true,
		isNonstandard: null,
	},
	murmur: {
		inherit: true,
		isNonstandard: null,
	},
	phantomtendril: {
		inherit: true,
		isNonstandard: null,
	},
	pulpblast: {
		inherit: true,
		isNonstandard: null,
	},
	binaryflux: {
		inherit: true,
		isNonstandard: null,
	},
	configure: {
		inherit: true,
		isNonstandard: null,
	},
	encrypt: {
		inherit: true,
		isNonstandard: null,
	},
	memorywipe: {
		inherit: true,
		isNonstandard: null,
	},
	gumbubble: {
		inherit: true,
		isNonstandard: null,
	},
	mintburst: {
		inherit: true,
		isNonstandard: null,
	},
	foodray: {
		inherit: true,
		isNonstandard: null,
	},
	spicyburst: {
		inherit: true,
		isNonstandard: null,
	},
	frurfburst: {
		inherit: true,
		isNonstandard: null,
	},
	cakeslice: {
		inherit: true,
		isNonstandard: null,
	},
	fairyclaw: {
		inherit: true,
		isNonstandard: null,
	},
	mahoganyslam: {
		inherit: true,
		isNonstandard: null,
	},
	essencedrain: {
		inherit: true,
		isNonstandard: null,
	},
	fabricblast: {
		inherit: true,
		isNonstandard: null,
	},
	carpetrub: {
		inherit: true,
		isNonstandard: null,
	},
	carpetburn: {
		inherit: true,
		isNonstandard: null,
	},
	breeze: {
		inherit: true,
		isNonstandard: null,
	},
	gale: {
		inherit: true,
		isNonstandard: null,
	},
	tornadocrash: {
		inherit: true,
		isNonstandard: null,
	},
	cyclone: {
		inherit: true,
		isNonstandard: null,
	},
	glitch: {
		inherit: true,
		isNonstandard: null,
	},
	quickspell: {
		inherit: true,
		isNonstandard: null,
	},
	magicarrows: {
		inherit: true,
		isNonstandard: null,
	},
	airpressure: {
		inherit: true,
		isNonstandard: null,
	},
	sonicwind: {
		inherit: true,
		isNonstandard: null,
	},
	arcaneenergy: {
		inherit: true,
		isNonstandard: null,
	},
	arcanebolt: {
		inherit: true,
		isNonstandard: null,
	},
	laser: {
		inherit: true,
		isNonstandard: null,
	},
	sandjet: {
		inherit: true,
		isNonstandard: null,
	},
	sandcannon: {
		inherit: true,
		isNonstandard: null,
	},
	squeak: {
		inherit: true,
		isNonstandard: null,
	},
	bassdrop: {
		inherit: true,
		isNonstandard: null,
	},
	sonicpulse: {
		inherit: true,
		isNonstandard: null,
	},
	atomsplit: {
		inherit: true,
		isNonstandard: null,
	},
	gammaray: {
		inherit: true,
		isNonstandard: null,
	},
	hexclaw: {
		inherit: true,
		isNonstandard: null,
	},
	sonicwave: {
		inherit: true,
		isNonstandard: null,
	},
	deathscream: {
		inherit: true,
		isNonstandard: null,
	},
	terrorscreech: {
		inherit: true,
		isNonstandard: null,
	},
	insanitybolt: {
		inherit: true,
		isNonstandard: null,
	},
	wastespray: {
		inherit: true,
		isNonstandard: null,
	},
	atomicrush: {
		inherit: true,
		isNonstandard: null,
	},
	corrode: {
		inherit: true,
		isNonstandard: null,
	},
	wastecloud: {
		inherit: true,
		isNonstandard: null,
	},
	megabyte: {
		inherit: true,
		isNonstandard: null,
	},
	spicypowder: {
		inherit: true,
		isNonstandard: null,
	},
	meatmash: {
		inherit: true,
		isNonstandard: null,
	},
	hotpocketcrash: {
		inherit: true,
		isNonstandard: null,
	},
	lavasplash: {
		inherit: true,
		isNonstandard: null,
	},
	volcanopunch: {
		inherit: true,
		isNonstandard: null,
	},
	woodendefense: {
		inherit: true,
		isNonstandard: null,
	},
	spellslash: {
		inherit: true,
		isNonstandard: null,
	},
	chaosrift: {
		inherit: true,
		isNonstandard: null,
	},
	etherealclaws: {
		inherit: true,
		isNonstandard: null,
	},
	riftstrike: {
		inherit: true,
		isNonstandard: null,
	},
	demonicclaws: {
		inherit: true,
		isNonstandard: null,
	},
	serqetssting: {
		inherit: true,
		isNonstandard: null,
	},
	realityrift: {
		inherit: true,
		isNonstandard: null,
	},
	nuswave: {
		inherit: true,
		isNonstandard: null,
	},
	setsshadows: {
		inherit: true,
		isNonstandard: null,
	},
	thothswisdom: {
		inherit: true,
		isNonstandard: null,
	},
	isismagic: {
		inherit: true,
		isNonstandard: null,
	},
	osirisflail: {
		inherit: true,
		isNonstandard: null,
	},
	balance: {
		inherit: true,
		isNonstandard: null,
	},
	swordsedge: {
		inherit: true,
		isNonstandard: null,
	},
	woodsword: {
		inherit: true,
		isNonstandard: null,
	},
	chainsawrun: {
		inherit: true,
		isNonstandard: null,
	},
	haunt: {
		inherit: true,
		isNonstandard: null,
	},
	paintsplatter: {
		inherit: true,
		isNonstandard: null,
	},
	irontusks: {
		inherit: true,
		isNonstandard: null,
	},
	tsunami: {
		inherit: true,
		isNonstandard: null,
	},
	galecharge: {
		inherit: true,
		isNonstandard: null,
	},
	blackhole: {
		inherit: true,
		isNonstandard: null,
	},
	divinespark: {
		inherit: true,
		isNonstandard: null,
	},
	auroraflash: {
		inherit: true,
		isNonstandard: null,
	},
	aegis: {
		inherit: true,
		isNonstandard: null,
	},
	hermescharge: {
		inherit: true,
		isNonstandard: null,
	},
	etherealray: {
		inherit: true,
		isNonstandard: null,
	},
	zeusthunder: {
		inherit: true,
		isNonstandard: null,
	},
	shadowgaze: {
		inherit: true,
		isNonstandard: null,
	},
	beam: {
		inherit: true,
		isNonstandard: null,
	},
	brilliantray: {
		inherit: true,
		isNonstandard: null,
	},
	luxbuster: {
		inherit: true,
		isNonstandard: null,
	},
	prismray: {
		inherit: true,
		isNonstandard: null,
	},
	waveshot: {
		inherit: true,
		isNonstandard: null,
	},
	fester: {
		inherit: true,
		isNonstandard: null,
	},
	hydrobombard: {
		inherit: true,
		isNonstandard: null,
	},
	divebomb: {
		inherit: true,
		isNonstandard: null,
	},
	ancientwind: {
		inherit: true,
		isNonstandard: null,
	},
	gigaleech: {
		inherit: true,
		isNonstandard: null,
	},
	joust: {
		inherit: true,
		isNonstandard: null,
	},
	stingerlance: {
		inherit: true,
		isNonstandard: null,
	},
	bask: {
		inherit: true,
		isNonstandard: null,
	},
	maw: {
		inherit: true,
		isNonstandard: null,
	},
	irradiatedfangs: {
		inherit: true,
		isNonstandard: null,
	},
	fever: {
		inherit: true,
		isNonstandard: null,
	},
	snas: {
		inherit: true,
		isNonstandard: null,
	},
	bluetruth: {
		inherit: true,
		isNonstandard: null,
	},
	stalagbite: {
		inherit: true,
		isNonstandard: null,
	},
	mountaincrash: {
		inherit: true,
		isNonstandard: null,
	},
	carbonpulse: {
		inherit: true,
		isNonstandard: null,
	},
	fossilcrash: {
		inherit: true,
		isNonstandard: null,
	},
	enlighten: {
		inherit: true,
		isNonstandard: null,
	},
	edgeray: {
		inherit: true,
		isNonstandard: null,
	},
	razorlead: {
		inherit: true,
		isNonstandard: null,
	},
	lensflash: {
		inherit: true,
		isNonstandard: null,
	},
	glassesbeam: {
		inherit: true,
		isNonstandard: null,
	},
	thorshammer: {
		inherit: true,
		isNonstandard: null,
	},
	bodyboost: {
		inherit: true,
		isNonstandard: null,
	},
	chaoticspark: {
		inherit: true,
		isNonstandard: null,
	},
	uvray: {
		inherit: true,
		isNonstandard: null,
	},
	voidsmaw: {
		inherit: true,
		isNonstandard: null,
	},
	glasscannon: {
		inherit: true,
		isNonstandard: null,
	},
	radiantray: {
		inherit: true,
		isNonstandard: null,
	},
	lightning: {
		inherit: true,
		isNonstandard: null,
	},
	powersurge: {
		inherit: true,
		isNonstandard: null,
	},
	meltdown: {
		inherit: true,
		isNonstandard: null,
	},
	retribution: {
		inherit: true,
		isNonstandard: null,
	},
	mysticdance: {
		inherit: true,
		isNonstandard: null,
	},
	fortuneray: {
		inherit: true,
		isNonstandard: null,
	},
	insanity: {
		inherit: true,
		isNonstandard: null,
	},
	dataabsorb: {
		inherit: true,
		isNonstandard: null,
	},
	digitaloverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	blazingshock: {
		inherit: true,
		isNonstandard: null,
	},
	shockingblaze: {
		inherit: true,
		isNonstandard: null,
	},
	viraloverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	ransomware: {
		inherit: true,
		isNonstandard: null,
	},
	sappingwhirlpool: {
		inherit: true,
		isNonstandard: null,
	},
	datapurge: {
		inherit: true,
		isNonstandard: null,
	},
	leechfang: {
		inherit: true,
		isNonstandard: null,
	},
	chokehold: {
		inherit: true,
		isNonstandard: null,
	},
	brightidea: {
		inherit: true,
		isNonstandard: null,
	},
	snowbank: {
		inherit: true,
		isNonstandard: null,
	},
	slipaway: {
		inherit: true,
		isNonstandard: null,
	},
	frozenblade: {
		inherit: true,
		isNonstandard: null,
	},
	brace: {
		inherit: true,
		isNonstandard: null,
	},
	diamondhoof: {
		inherit: true,
		isNonstandard: null,
	},
	periltomb: {
		inherit: true,
		isNonstandard: null,
	},
	giantshadow: {
		inherit: true,
		isNonstandard: null,
	},
	chasebeam: {
		inherit: true,
		isNonstandard: null,
	},
	cheapshot: {
		inherit: true,
		isNonstandard: null,
	},
	insultandinjury: {
		inherit: true,
		isNonstandard: null,
	},
	attitudeadjustment: {
		inherit: true,
		isNonstandard: null,
	},
	maliceeater: {
		inherit: true,
		isNonstandard: null,
	},
	cackle: {
		inherit: true,
		isNonstandard: null,
	},
	blackweb: {
		inherit: true,
		isNonstandard: null,
	},
	mend: {
		inherit: true,
		isNonstandard: null,
	},
	brassknuckle: {
		inherit: true,
		isNonstandard: null,
	},
	chillyboom: {
		inherit: true,
		isNonstandard: null,
	},
	holysacrifice: {
		inherit: true,
		isNonstandard: null,
	},
	screwdriver: {
		inherit: true,
		isNonstandard: null,
	},
	bunkercrash: {
		inherit: true,
		isNonstandard: null,
	},
	coldsnap: {
		inherit: true,
		isNonstandard: null,
	},
	fridgeslam: {
		inherit: true,
		isNonstandard: null,
	},
	osmosis: {
		inherit: true,
		isNonstandard: null,
	},
	sludgehammer: {
		inherit: true,
		isNonstandard: null,
	},
	arcticcrash: {
		inherit: true,
		isNonstandard: null,
	},
	podburst: {
		inherit: true,
		isNonstandard: null,
	},
	aurastorm: {
		inherit: true,
		isNonstandard: null,
	},
	chemicalburn: {
		inherit: true,
		isNonstandard: null,
	},
	tonguelash: {
		inherit: true,
		isNonstandard: null,
	},
	tongueflick: {
		inherit: true,
		isNonstandard: null,
	},
	unihorn: {
		inherit: true,
		isNonstandard: null,
	},
	gravitonpress: {
		inherit: true,
		isNonstandard: null,
	},
	aurajab: {
		inherit: true,
		isNonstandard: null,
	},
	eeriewail: {
		inherit: true,
		isNonstandard: null,
	},
	drumroll: {
		inherit: true,
		isNonstandard: null,
	},
	goblinpunch: {
		inherit: true,
		isNonstandard: null,
	},
	raid: {
		inherit: true,
		isNonstandard: null,
	},
	extinguish: {
		inherit: true,
		isNonstandard: null,
	},
	sanddune: {
		inherit: true,
		isNonstandard: null,
	},
	stringout: {
		inherit: true,
		isNonstandard: null,
	},
	mindboost: {
		inherit: true,
		isNonstandard: null,
	},
	cryptblade: {
		inherit: true,
		isNonstandard: null,
	},
	crimsondaze: {
		inherit: true,
		isNonstandard: null,
	},
	magicflames: {
		inherit: true,
		isNonstandard: null,
	},
	ashrain: {
		inherit: true,
		isNonstandard: null,
	},
	ashspray: {
		inherit: true,
		isNonstandard: null,
	},
	apport: {
		inherit: true,
		isNonstandard: null,
	},
	zephyrwing: {
		inherit: true,
		isNonstandard: null,
	},
	broomdive: {
		inherit: true,
		isNonstandard: null,
	},
	cardtoss: {
		inherit: true,
		isNonstandard: null,
	},
	mysticblade: {
		inherit: true,
		isNonstandard: null,
	},
	mount: {
		inherit: true,
		isNonstandard: null,
	},
	powerhex: {
		inherit: true,
		isNonstandard: null,
	},
	sappingspell: {
		inherit: true,
		isNonstandard: null,
	},
	sawtrick: {
		inherit: true,
		isNonstandard: null,
	},
	balmscour: {
		inherit: true,
		isNonstandard: null,
	},
	lusterflash: {
		inherit: true,
		isNonstandard: null,
	},
	shinesabre: {
		inherit: true,
		isNonstandard: null,
	},
	hydrogengun: {
		inherit: true,
		isNonstandard: null,
	},
	jetstream: {
		inherit: true,
		isNonstandard: null,
	},
	thermal: {
		inherit: true,
		isNonstandard: null,
	},
	tornado: {
		inherit: true,
		isNonstandard: null,
	},
	tradewind: {
		inherit: true,
		isNonstandard: null,
	},
	typhoon: {
		inherit: true,
		isNonstandard: null,
	},
	whirldive: {
		inherit: true,
		isNonstandard: null,
	},
	rotfangs: {
		inherit: true,
		isNonstandard: null,
	},
	infect: {
		inherit: true,
		isNonstandard: null,
	},
	roaringmagma: {
		inherit: true,
		isNonstandard: null,
	},
	staticfabric: {
		inherit: true,
		isNonstandard: null,
	},
	patchworkdeluge: {
		inherit: true,
		isNonstandard: null,
	},
	mosaicray: {
		inherit: true,
		isNonstandard: null,
	},
	noose: {
		inherit: true,
		isNonstandard: null,
	},
	strangle: {
		inherit: true,
		isNonstandard: null,
	},
	migraine: {
		inherit: true,
		isNonstandard: null,
	},
	clutch: {
		inherit: true,
		isNonstandard: null,
	},
	rend: {
		inherit: true,
		isNonstandard: null,
	},
	thunderjavelin: {
		inherit: true,
		isNonstandard: null,
	},
	wildfire: {
		inherit: true,
		isNonstandard: null,
	},
	boxcrash: {
		inherit: true,
		isNonstandard: null,
	},
	technorush: {
		inherit: true,
		isNonstandard: null,
	},
	artificiaslam: {
		inherit: true,
		isNonstandard: null,
	},
	plasticclaw: {
		inherit: true,
		isNonstandard: null,
	},
	plasticlaunch: {
		inherit: true,
		isNonstandard: null,
	},
	garbagethrash: {
		inherit: true,
		isNonstandard: null,
	},
	spectrumfist: {
		inherit: true,
		isNonstandard: null,
	},
	whimsicalwhip: {
		inherit: true,
		isNonstandard: null,
	},
	tuningfork: {
		inherit: true,
		isNonstandard: null,
	},
	iciclecleave: {
		inherit: true,
		isNonstandard: null,
	},
	constructcrash: {
		inherit: true,
		isNonstandard: null,
	},
	ram: {
		inherit: true,
		isNonstandard: null,
	},
	finslap: {
		inherit: true,
		isNonstandard: null,
	},
	causticbreath: {
		inherit: true,
		isNonstandard: null,
	},
	possesion: {
		inherit: true,
		isNonstandard: null,
	},
	psybolt: {
		inherit: true,
		isNonstandard: null,
	},
	webball: {
		inherit: true,
		isNonstandard: null,
	},
	lazyday: {
		inherit: true,
		isNonstandard: null,
	},
	aimedshot: {
		inherit: true,
		isNonstandard: null,
	},
	bullseye: {
		inherit: true,
		isNonstandard: null,
	},
	dynamicrush: {
		inherit: true,
		isNonstandard: null,
	},
	powertail: {
		inherit: true,
		isNonstandard: null,
	},
	treesmash: {
		inherit: true,
		isNonstandard: null,
	},
	rootcrush: {
		inherit: true,
		isNonstandard: null,
	},
	shedleaves: {
		inherit: true,
		isNonstandard: null,
	},
	shellblast: {
		inherit: true,
		isNonstandard: null,
	},
	whalesong: {
		inherit: true,
		isNonstandard: null,
	},
	taintedwater: {
		inherit: true,
		isNonstandard: null,
	},
	chocolatecrunch: {
		inherit: true,
		isNonstandard: null,
	},
	steadyhand: {
		inherit: true,
		isNonstandard: null,
	},
	netsurf: {
		inherit: true,
		isNonstandard: null,
	},
	polylith: {
		inherit: true,
		isNonstandard: null,
	},
	enginecharge: {
		inherit: true,
		isNonstandard: null,
	},
	jetfuelcharge: {
		inherit: true,
		isNonstandard: null,
	},
	geodeblast: {
		inherit: true,
		isNonstandard: null,
	},
	quartzbeam: {
		inherit: true,
		isNonstandard: null,
	},
	fireworks: {
		inherit: true,
		isNonstandard: null,
	},
	avarice: {
		inherit: true,
		isNonstandard: null,
	},
	kiblast: {
		inherit: true,
		isNonstandard: null,
	},
	happyglow: {
		inherit: true,
		isNonstandard: null,
	},
	neon: {
		inherit: true,
		isNonstandard: null,
	},
	encycloray: {
		inherit: true,
		isNonstandard: null,
	},
	papercharge: {
		inherit: true,
		isNonstandard: null,
	},
	atomicbreath: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearpulse: {
		inherit: true,
		isNonstandard: null,
	},
	reactor: {
		inherit: true,
		isNonstandard: null,
	},
	nucleartail: {
		inherit: true,
		isNonstandard: null,
	},
	beacon: {
		inherit: true,
		isNonstandard: null,
	},
	reaction: {
		inherit: true,
		isNonstandard: null,
	},
	steamerroller: {
		inherit: true,
		isNonstandard: null,
	},
	nervegas: {
		inherit: true,
		isNonstandard: null,
	},
	normalray: {
		inherit: true,
		isNonstandard: null,
	},
	gaschamber: {
		inherit: true,
		isNonstandard: null,
	},
	gravityshift: {
		inherit: true,
		isNonstandard: null,
	},
	solarray: {
		inherit: true,
		isNonstandard: null,
	},
	voltkick: {
		inherit: true,
		isNonstandard: null,
	},
	wildmushroom: {
		inherit: true,
		isNonstandard: null,
	},
	magicsand: {
		inherit: true,
		isNonstandard: null,
	},
	mercurywave: {
		inherit: true,
		isNonstandard: null,
	},
	sonicpunch: {
		inherit: true,
		isNonstandard: null,
	},
	psychout: {
		inherit: true,
		isNonstandard: null,
	},
	mania: {
		inherit: true,
		isNonstandard: null,
	},
	rampage: {
		inherit: true,
		isNonstandard: null,
	},
	fossilfuel: {
		inherit: true,
		isNonstandard: null,
	},
	metalcrash: {
		inherit: true,
		isNonstandard: null,
	},
	soysplash: {
		inherit: true,
		isNonstandard: null,
	},
	sushibeam: {
		inherit: true,
		isNonstandard: null,
	},
	icicles: {
		inherit: true,
		isNonstandard: null,
	},
	magmasport: {
		inherit: true,
		isNonstandard: null,
	},
	dustdevil: {
		inherit: true,
		isNonstandard: null,
	},
	rocknroll: {
		inherit: true,
		isNonstandard: null,
	},
	dragonkick: {
		inherit: true,
		isNonstandard: null,
	},
	deliverance: {
		inherit: true,
		isNonstandard: null,
	},
	bedbite: {
		inherit: true,
		isNonstandard: null,
	},
	junglesong: {
		inherit: true,
		isNonstandard: null,
	},
	softstep: {
		inherit: true,
		isNonstandard: null,
	},
	villainpower: {
		inherit: true,
		isNonstandard: null,
	},
	spiritdrain: {
		inherit: true,
		isNonstandard: null,
	},
	brickcrash: {
		inherit: true,
		isNonstandard: null,
	},
	glomp: {
		inherit: true,
		isNonstandard: null,
	},
	heil: {
		inherit: true,
		isNonstandard: null,
	},
	omegapower: {
		inherit: true,
		isNonstandard: null,
	},
	steamingsteam: {
		inherit: true,
		isNonstandard: null,
	},
	magmamelt: {
		inherit: true,
		isNonstandard: null,
	},
	solidwood: {
		inherit: true,
		isNonstandard: null,
	},
	cavein: {
		inherit: true,
		isNonstandard: null,
	},
	locussword: {
		inherit: true,
		isNonstandard: null,
	},
	saltbeam: {
		inherit: true,
		isNonstandard: null,
	},
	starfinger: {
		inherit: true,
		isNonstandard: null,
	},
	zawarudo: {
		inherit: true,
		isNonstandard: null,
	},
	nightmarch: {
		inherit: true,
		isNonstandard: null,
	},
	sunlightoverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	vampirebite: {
		inherit: true,
		isNonstandard: null,
	},
	overrun: {
		inherit: true,
		isNonstandard: null,
	},
	why: {
		inherit: true,
		isNonstandard: null,
	},
	technoray: {
		inherit: true,
		isNonstandard: null,
	},
	aichmoclaws: {
		inherit: true,
		isNonstandard: null,
	},
	jumpscare: {
		inherit: true,
		isNonstandard: null,
	},
	odynocharge: {
		inherit: true,
		isNonstandard: null,
	},
	fist: {
		inherit: true,
		isNonstandard: null,
	},
	brutal: {
		inherit: true,
		isNonstandard: null,
	},
	geigerstrike: {
		inherit: true,
		isNonstandard: null,
	},
	ritual: {
		inherit: true,
		isNonstandard: null,
	},
	acrophobia: {
		inherit: true,
		isNonstandard: null,
	},
	glassbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	ransomwareslam: {
		inherit: true,
		isNonstandard: null,
	},
	worm: {
		inherit: true,
		isNonstandard: null,
	},
	hack: {
		inherit: true,
		isNonstandard: null,
	},
	bubblejuggle: {
		inherit: true,
		isNonstandard: null,
	},
	balljuggle: {
		inherit: true,
		isNonstandard: null,
	},
	madness: {
		inherit: true,
		isNonstandard: null,
	},
	jetdive: {
		inherit: true,
		isNonstandard: null,
	},
	splinter: {
		inherit: true,
		isNonstandard: null,
	},
	speedway: {
		inherit: true,
		isNonstandard: null,
	},
	mysticsword: {
		inherit: true,
		isNonstandard: null,
	},
	bladerain: {
		inherit: true,
		isNonstandard: null,
	},
	sneakyskitter: {
		inherit: true,
		isNonstandard: null,
	},
	ambush: {
		inherit: true,
		isNonstandard: null,
	},
	pumpkinbomb: {
		inherit: true,
		isNonstandard: null,
	},
	midnight: {
		inherit: true,
		isNonstandard: null,
	},
	sauna: {
		inherit: true,
		isNonstandard: null,
	},
	humidburst: {
		inherit: true,
		isNonstandard: null,
	},
	angelburst: {
		inherit: true,
		isNonstandard: null,
	},
	angelrush: {
		inherit: true,
		isNonstandard: null,
	},
	flock: {
		inherit: true,
		isNonstandard: null,
	},
	torchpass: {
		inherit: true,
		isNonstandard: null,
	},
	crystalray: {
		inherit: true,
		isNonstandard: null,
	},
	preynet: {
		inherit: true,
		isNonstandard: null,
	},
	solidify: {
		inherit: true,
		isNonstandard: null,
	},
	boldcounter: {
		inherit: true,
		isNonstandard: null,
	},
	heroiccharge: {
		inherit: true,
		isNonstandard: null,
	},
	pursuittackle: {
		inherit: true,
		isNonstandard: null,
	},
	fury: {
		inherit: true,
		isNonstandard: null,
	},
	shimmerstrike: {
		inherit: true,
		isNonstandard: null,
	},
	eldritchgoop: {
		inherit: true,
		isNonstandard: null,
	},
	matteroftime: {
		inherit: true,
		isNonstandard: null,
	},
	slowingfist: {
		inherit: true,
		isNonstandard: null,
	},
	nightmareeater: {
		inherit: true,
		isNonstandard: null,
	},
	couragerush: {
		inherit: true,
		isNonstandard: null,
	},
	phantomsword: {
		inherit: true,
		isNonstandard: null,
	},
	magnetdraw: {
		inherit: true,
		isNonstandard: null,
	},
	aquaslash: {
		inherit: true,
		isNonstandard: null,
	},
	powerballad: {
		inherit: true,
		isNonstandard: null,
	},
	deage: {
		inherit: true,
		isNonstandard: null,
	},
	forecast: {
		inherit: true,
		isNonstandard: null,
	},
	prophecy: {
		inherit: true,
		isNonstandard: null,
	},
	channel: {
		inherit: true,
		isNonstandard: null,
	},
	magicwand: {
		inherit: true,
		isNonstandard: null,
	},
	steelcasting: {
		inherit: true,
		isNonstandard: null,
	},
	poof: {
		inherit: true,
		isNonstandard: null,
	},
	spiritshell: {
		inherit: true,
		isNonstandard: null,
	},
	soulconsume: {
		inherit: true,
		isNonstandard: null,
	},
	elfshot: {
		inherit: true,
		isNonstandard: null,
	},
	wcreate: {
		inherit: true,
		isNonstandard: null,
	},
	envelop: {
		inherit: true,
		isNonstandard: null,
	},
	envelope: {
		inherit: true,
		isNonstandard: null,
	},
	helldrag: {
		inherit: true,
		isNonstandard: null,
	},
	tractorbeam: {
		inherit: true,
		isNonstandard: null,
	},
	sapspray: {
		inherit: true,
		isNonstandard: null,
	},
	astronomy: {
		inherit: true,
		isNonstandard: null,
	},
	velocitydive: {
		inherit: true,
		isNonstandard: null,
	},
	tictoc: {
		inherit: true,
		isNonstandard: null,
	},
	boostbeam: {
		inherit: true,
		isNonstandard: null,
	},
	bibliomancy: {
		inherit: true,
		isNonstandard: null,
	},
	steamscald: {
		inherit: true,
		isNonstandard: null,
	},
	steamslash: {
		inherit: true,
		isNonstandard: null,
	},
	techerupt: {
		inherit: true,
		isNonstandard: null,
	},
	quicksteamer: {
		inherit: true,
		isNonstandard: null,
	},
	woodrush: {
		inherit: true,
		isNonstandard: null,
	},
	cometrush: {
		inherit: true,
		isNonstandard: null,
	},
	palmscrape: {
		inherit: true,
		isNonstandard: null,
	},
	thehand: {
		inherit: true,
		isNonstandard: null,
	},
	triassault: {
		inherit: true,
		isNonstandard: null,
	},
	vacuumstrike: {
		inherit: true,
		isNonstandard: null,
	},
	epidemic: {
		inherit: true,
		isNonstandard: null,
	},
	plague: {
		inherit: true,
		isNonstandard: null,
	},
	gigadrillbreak: {
		inherit: true,
		isNonstandard: null,
	},
	"3freeze": {
		inherit: true,
		isNonstandard: null,
	},
	talksmack: {
		inherit: true,
		isNonstandard: null,
	},
	rewrite: {
		inherit: true,
		isNonstandard: null,
	},
	heavensdoor: {
		inherit: true,
		isNonstandard: null,
	},
	heavenpower: {
		inherit: true,
		isNonstandard: null,
	},
	divineseal: {
		inherit: true,
		isNonstandard: null,
	},
	paperseal: {
		inherit: true,
		isNonstandard: null,
	},
	bitesthedust: {
		inherit: true,
		isNonstandard: null,
	},
	airbomb: {
		inherit: true,
		isNonstandard: null,
	},
	shinepunch: {
		inherit: true,
		isNonstandard: null,
	},
	dazzlefist: {
		inherit: true,
		isNonstandard: null,
	},
	deathwithoutend: {
		inherit: true,
		isNonstandard: null,
	},
	reptize: {
		inherit: true,
		isNonstandard: null,
	},
	venom: {
		inherit: true,
		isNonstandard: null,
	},
	ironchomp: {
		inherit: true,
		isNonstandard: null,
	},
	happyeverafter: {
		inherit: true,
		isNonstandard: null,
	},
	sleightofhand: {
		inherit: true,
		isNonstandard: null,
	},
	cannibalize: {
		inherit: true,
		isNonstandard: null,
	},
	tailbite: {
		inherit: true,
		isNonstandard: null,
	},
	electroleech: {
		inherit: true,
		isNonstandard: null,
	},
	duststorm: {
		inherit: true,
		isNonstandard: null,
	},
	achillesheel: {
		inherit: true,
		isNonstandard: null,
	},
	chargespin: {
		inherit: true,
		isNonstandard: null,
	},
	smokelunge: {
		inherit: true,
		isNonstandard: null,
	},
	tirelunge: {
		inherit: true,
		isNonstandard: null,
	},
	ironroot: {
		inherit: true,
		isNonstandard: null,
	},
	soulchill: {
		inherit: true,
		isNonstandard: null,
	},
	coldsteam: {
		inherit: true,
		isNonstandard: null,
	},
	subzerosteam: {
		inherit: true,
		isNonstandard: null,
	},
	firebrush: {
		inherit: true,
		isNonstandard: null,
	},
	lightwhip: {
		inherit: true,
		isNonstandard: null,
	},
	uvburst: {
		inherit: true,
		isNonstandard: null,
	},
	electricburst: {
		inherit: true,
		isNonstandard: null,
	},
	stringwrap: {
		inherit: true,
		isNonstandard: null,
	},
	stringrush: {
		inherit: true,
		isNonstandard: null,
	},
	fabricpunch: {
		inherit: true,
		isNonstandard: null,
	},
	snowstorm: {
		inherit: true,
		isNonstandard: null,
	},
	combust: {
		inherit: true,
		isNonstandard: null,
	},
	demonicswipes: {
		inherit: true,
		isNonstandard: null,
	},
	mossyfist: {
		inherit: true,
		isNonstandard: null,
	},
	sunburn: {
		inherit: true,
		isNonstandard: null,
	},
	perfumesting: {
		inherit: true,
		isNonstandard: null,
	},
	shattercrash: {
		inherit: true,
		isNonstandard: null,
	},
	shieldsmash: {
		inherit: true,
		isNonstandard: null,
	},
	sonar: {
		inherit: true,
		isNonstandard: null,
	},
	ectoblast: {
		inherit: true,
		isNonstandard: null,
	},
	cannibilize: {
		inherit: true,
		isNonstandard: null,
	},
	consume: {
		inherit: true,
		isNonstandard: null,
	},
	iceshatter: {
		inherit: true,
		isNonstandard: null,
	},
	mudamuda: {
		inherit: true,
		isNonstandard: null,
	},
	veryhijumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	ultraplunder: {
		inherit: true,
		isNonstandard: null,
	},
	nutrientdrain: {
		inherit: true,
		isNonstandard: null,
	},
	eighteenfourteen: {
		inherit: true,
		isNonstandard: null,
	},
	mcmurry: {
		inherit: true,
		isNonstandard: null,
	},
	bloodsuck: {
		inherit: true,
		isNonstandard: null,
	},
	bloodblade: {
		inherit: true,
		isNonstandard: null,
	},
	batbite: {
		inherit: true,
		isNonstandard: null,
	},
	lavaweb: {
		inherit: true,
		isNonstandard: null,
	},
	magmaknife: {
		inherit: true,
		isNonstandard: null,
	},
	crystalthrow: {
		inherit: true,
		isNonstandard: null,
	},
	crystaltomb: {
		inherit: true,
		isNonstandard: null,
	},
	crystalslide: {
		inherit: true,
		isNonstandard: null,
	},
	crystaledge: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicslash: {
		inherit: true,
		isNonstandard: null,
	},
	epitaph: {
		inherit: true,
		isNonstandard: null,
	},
	crimsoncourt: {
		inherit: true,
		isNonstandard: null,
	},
	schizoidman: {
		inherit: true,
		isNonstandard: null,
	},
	lunacy: {
		inherit: true,
		isNonstandard: null,
	},
	crumbs: {
		inherit: true,
		isNonstandard: null,
	},
	goudagun: {
		inherit: true,
		isNonstandard: null,
	},
	cheesymelt: {
		inherit: true,
		isNonstandard: null,
	},
	overriperoquefort: {
		inherit: true,
		isNonstandard: null,
	},
	cheddarcrash: {
		inherit: true,
		isNonstandard: null,
	},
	freezingwave: {
		inherit: true,
		isNonstandard: null,
	},
	satelliteray: {
		inherit: true,
		isNonstandard: null,
	},
	dualchaos: {
		inherit: true,
		isNonstandard: null,
	},
	dualdivinity: {
		inherit: true,
		isNonstandard: null,
	},
	moonstoneray: {
		inherit: true,
		isNonstandard: null,
	},
	godsmaw: {
		inherit: true,
		isNonstandard: null,
	},
	plaguefrenzy: {
		inherit: true,
		isNonstandard: null,
	},
	metalwhip: {
		inherit: true,
		isNonstandard: null,
	},
	neardeath: {
		inherit: true,
		isNonstandard: null,
	},
	raillaunch: {
		inherit: true,
		isNonstandard: null,
	},
	crashlanding: {
		inherit: true,
		isNonstandard: null,
	},
	hypothermia: {
		inherit: true,
		isNonstandard: null,
	},
	quicksilver: {
		inherit: true,
		isNonstandard: null,
	},
	lenience: {
		inherit: true,
		isNonstandard: null,
	},
	dawnchorus: {
		inherit: true,
		isNonstandard: null,
	},
	frighteningwail: {
		inherit: true,
		isNonstandard: null,
	},
	driveby: {
		inherit: true,
		isNonstandard: null,
	},
	aerialrace: {
		inherit: true,
		isNonstandard: null,
	},
	bloodsiphon: {
		inherit: true,
		isNonstandard: null,
	},
	hexpunch: {
		inherit: true,
		isNonstandard: null,
	},
	discpunch: {
		inherit: true,
		isNonstandard: null,
	},
	divineshield: {
		inherit: true,
		isNonstandard: null,
	},
	ultraweaken: {
		inherit: true,
		isNonstandard: null,
	},
	starsaligned: {
		inherit: true,
		isNonstandard: null,
	},
	zipperhole: {
		inherit: true,
		isNonstandard: null,
	},
	zipperstrike: {
		inherit: true,
		isNonstandard: null,
	},
	stickyfingers: {
		inherit: true,
		isNonstandard: null,
	},
	fa223rkeou543wfdt: {
		inherit: true,
		isNonstandard: null,
	},
	abyssalhelldrag: {
		inherit: true,
		isNonstandard: null,
	},
	desecrations: {
		inherit: true,
		isNonstandard: null,
	},
	solarelectricity: {
		inherit: true,
		isNonstandard: null,
	},
	thanatophobia: {
		inherit: true,
		isNonstandard: null,
	},
	claustrocrush: {
		inherit: true,
		isNonstandard: null,
	},
	pester: {
		inherit: true,
		isNonstandard: null,
	},
	dragonflycharge: {
		inherit: true,
		isNonstandard: null,
	},
	voltfang: {
		inherit: true,
		isNonstandard: null,
	},
	voltbind: {
		inherit: true,
		isNonstandard: null,
	},
	toxicsteamtackle: {
		inherit: true,
		isNonstandard: null,
	},
	doublenote: {
		inherit: true,
		isNonstandard: null,
	},
	wintersong: {
		inherit: true,
		isNonstandard: null,
	},
	triplenote: {
		inherit: true,
		isNonstandard: null,
	},
	lownote: {
		inherit: true,
		isNonstandard: null,
	},
	treblebeam: {
		inherit: true,
		isNonstandard: null,
	},
	highnote: {
		inherit: true,
		isNonstandard: null,
	},
	earthchomp: {
		inherit: true,
		isNonstandard: null,
	},
	wormattack: {
		inherit: true,
		isNonstandard: null,
	},
	tunnelaway: {
		inherit: true,
		isNonstandard: null,
	},
	encryptray: {
		inherit: true,
		isNonstandard: null,
	},
	cyberboost: {
		inherit: true,
		isNonstandard: null,
	},
	demolisher: {
		inherit: true,
		isNonstandard: null,
	},
	duel: {
		inherit: true,
		isNonstandard: null,
	},
	lightdrain: {
		inherit: true,
		isNonstandard: null,
	},
	chargespell: {
		inherit: true,
		isNonstandard: null,
	},
	chargecrystal: {
		inherit: true,
		isNonstandard: null,
	},
	caloriebeam: {
		inherit: true,
		isNonstandard: null,
	},
	humidray: {
		inherit: true,
		isNonstandard: null,
	},
	crystalwave: {
		inherit: true,
		isNonstandard: null,
	},
	crystalpower: {
		inherit: true,
		isNonstandard: null,
	},
	fellcrystal: {
		inherit: true,
		isNonstandard: null,
	},
	bubblepop: {
		inherit: true,
		isNonstandard: null,
	},
	checkmate: {
		inherit: true,
		isNonstandard: null,
	},
	zephyrgust: {
		inherit: true,
		isNonstandard: null,
	},
	bunkerbeam: {
		inherit: true,
		isNonstandard: null,
	},
	deathspell: {
		inherit: true,
		isNonstandard: null,
	},
	iratetrance: {
		inherit: true,
		isNonstandard: null,
	},
	miseryshot: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspell: {
		inherit: true,
		isNonstandard: null,
	},
	bowlspin: {
		inherit: true,
		isNonstandard: null,
	},
	saucesplash: {
		inherit: true,
		isNonstandard: null,
	},
	searingsauce: {
		inherit: true,
		isNonstandard: null,
	},
	cremate: {
		inherit: true,
		isNonstandard: null,
	},
	spicyleaves: {
		inherit: true,
		isNonstandard: null,
	},
	superspicysauce: {
		inherit: true,
		isNonstandard: null,
	},
	cloudgust: {
		inherit: true,
		isNonstandard: null,
	},
	ultradownpour: {
		inherit: true,
		isNonstandard: null,
	},
	ultrasolarray: {
		inherit: true,
		isNonstandard: null,
	},
	coldwind: {
		inherit: true,
		isNonstandard: null,
	},
	ultrasnowstorm: {
		inherit: true,
		isNonstandard: null,
	},
	ultradustdevil: {
		inherit: true,
		isNonstandard: null,
	},
	stormthunder: {
		inherit: true,
		isNonstandard: null,
	},
	heatray: {
		inherit: true,
		isNonstandard: null,
	},
	superheatray: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicboost: {
		inherit: true,
		isNonstandard: null,
	},
	dojyan: {
		inherit: true,
		isNonstandard: null,
	},
	pooftackle: {
		inherit: true,
		isNonstandard: null,
	},
	disappear: {
		inherit: true,
		isNonstandard: null,
	},
	dirtydeedsdonedirtcheap: {
		inherit: true,
		isNonstandard: null,
	},
	enumaelish: {
		inherit: true,
		isNonstandard: null,
	},
	gandr: {
		inherit: true,
		isNonstandard: null,
	},
	kilobyte: {
		inherit: true,
		isNonstandard: null,
	},
	gigabyte: {
		inherit: true,
		isNonstandard: null,
	},
	datadrill: {
		inherit: true,
		isNonstandard: null,
	},
	divinescales: {
		inherit: true,
		isNonstandard: null,
	},
	abduct: {
		inherit: true,
		isNonstandard: null,
	},
	miasmaslash: {
		inherit: true,
		isNonstandard: null,
	},
	cripple: {
		inherit: true,
		isNonstandard: null,
	},
	samuraipapercut: {
		inherit: true,
		isNonstandard: null,
	},
	baseballstrike: {
		inherit: true,
		isNonstandard: null,
	},
	baseballbat: {
		inherit: true,
		isNonstandard: null,
	},
	godspeed: {
		inherit: true,
		isNonstandard: null,
	},
	pray: {
		inherit: true,
		isNonstandard: null,
	},
	godsbreath: {
		inherit: true,
		isNonstandard: null,
	},
	absolutestrike: {
		inherit: true,
		isNonstandard: null,
	},
	magiccircle: {
		inherit: true,
		isNonstandard: null,
	},
	ceremony: {
		inherit: true,
		isNonstandard: null,
	},
	holywater: {
		inherit: true,
		isNonstandard: null,
	},
	armsofgod: {
		inherit: true,
		isNonstandard: null,
	},
	rapture: {
		inherit: true,
		isNonstandard: null,
	},
	fafnirarmor: {
		inherit: true,
		isNonstandard: null,
	},
	balmung: {
		inherit: true,
		isNonstandard: null,
	},
	brahmastrakundala: {
		inherit: true,
		isNonstandard: null,
	},
	vasavishakti: {
		inherit: true,
		isNonstandard: null,
	},
	cryingwarmonger: {
		inherit: true,
		isNonstandard: null,
	},
	blastedtree: {
		inherit: true,
		isNonstandard: null,
	},
	sikerausum: {
		inherit: true,
		isNonstandard: null,
	},
	sagittarius: {
		inherit: true,
		isNonstandard: null,
	},
	kaziklibey: {
		inherit: true,
		isNonstandard: null,
	},
	dromeuskometes: {
		inherit: true,
		isNonstandard: null,
	},
	marssword: {
		inherit: true,
		isNonstandard: null,
	},
	gaedearg: {
		inherit: true,
		isNonstandard: null,
	},
	gaebuidhe: {
		inherit: true,
		isNonstandard: null,
	},
	elementalattack: {
		inherit: true,
		isNonstandard: null,
	},
	deathmatch: {
		inherit: true,
		isNonstandard: null,
	},
	reversesplash: {
		inherit: true,
		isNonstandard: null,
	},
	iceage: {
		inherit: true,
		isNonstandard: null,
	},
	geyser: {
		inherit: true,
		isNonstandard: null,
	},
	luminousflux: {
		inherit: true,
		isNonstandard: null,
	},
	atomicenergy: {
		inherit: true,
		isNonstandard: null,
	},
	lightjavelin: {
		inherit: true,
		isNonstandard: null,
	},
	arclight: {
		inherit: true,
		isNonstandard: null,
	},
	miraclereprisal: {
		inherit: true,
		isNonstandard: null,
	},
	invokedread: {
		inherit: true,
		isNonstandard: null,
	},
	delusionalheartbeat: {
		inherit: true,
		isNonstandard: null,
	},
	throwingknives: {
		inherit: true,
		isNonstandard: null,
	},
	spookypresence: {
		inherit: true,
		isNonstandard: null,
	},
	dreamfist: {
		inherit: true,
		isNonstandard: null,
	},
	rustyblade: {
		inherit: true,
		isNonstandard: null,
	},
	stigmatastrike: {
		inherit: true,
		isNonstandard: null,
	},
	stigmaticgleam: {
		inherit: true,
		isNonstandard: null,
	},
	deathsdoor: {
		inherit: true,
		isNonstandard: null,
	},
	babylongoblet: {
		inherit: true,
		isNonstandard: null,
	},
	psalms: {
		inherit: true,
		isNonstandard: null,
	},
	luminositeeternelle: {
		inherit: true,
		isNonstandard: null,
	},
	crazytackle: {
		inherit: true,
		isNonstandard: null,
	},
	arondight: {
		inherit: true,
		isNonstandard: null,
	},
	direstate: {
		inherit: true,
		isNonstandard: null,
	},
	detonationburst: {
		inherit: true,
		isNonstandard: null,
	},
	sorrowfultune: {
		inherit: true,
		isNonstandard: null,
	},
	occultflash: {
		inherit: true,
		isNonstandard: null,
	},
	naughtwave: {
		inherit: true,
		isNonstandard: null,
	},
	divinejudgement: {
		inherit: true,
		isNonstandard: null,
	},
	rust: {
		inherit: true,
		isNonstandard: null,
	},
	boil: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorreflect: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorworld: {
		inherit: true,
		isNonstandard: null,
	},
	disenchant: {
		inherit: true,
		isNonstandard: null,
	},
	mysteriousmagic: {
		inherit: true,
		isNonstandard: null,
	},
	gorgoneye: {
		inherit: true,
		isNonstandard: null,
	},
	timefreeze: {
		inherit: true,
		isNonstandard: null,
	},
	firstfolio: {
		inherit: true,
		isNonstandard: null,
	},
	bulletcorn: {
		inherit: true,
		isNonstandard: null,
	},
	veggiebeam: {
		inherit: true,
		isNonstandard: null,
	},
	lightarrow: {
		inherit: true,
		isNonstandard: null,
	},
	lightup: {
		inherit: true,
		isNonstandard: null,
	},
	impulse: {
		inherit: true,
		isNonstandard: null,
	},
	secondblast: {
		inherit: true,
		isNonstandard: null,
	},
	minuteblast: {
		inherit: true,
		isNonstandard: null,
	},
	hourblast: {
		inherit: true,
		isNonstandard: null,
	},
	timewarp: {
		inherit: true,
		isNonstandard: null,
	},
	focustime: {
		inherit: true,
		isNonstandard: null,
	},
	windspear: {
		inherit: true,
		isNonstandard: null,
	},
	thievingwind: {
		inherit: true,
		isNonstandard: null,
	},
	airstamp: {
		inherit: true,
		isNonstandard: null,
	},
	macroburst: {
		inherit: true,
		isNonstandard: null,
	},
	airraid: {
		inherit: true,
		isNonstandard: null,
	},
	windspin: {
		inherit: true,
		isNonstandard: null,
	},
	westerlies: {
		inherit: true,
		isNonstandard: null,
	},
	divinethunder: {
		inherit: true,
		isNonstandard: null,
	},
	blackout: {
		inherit: true,
		isNonstandard: null,
	},
	unfetteredsoul: {
		inherit: true,
		isNonstandard: null,
	},
	balloonpop: {
		inherit: true,
		isNonstandard: null,
	},
	rubberbeam: {
		inherit: true,
		isNonstandard: null,
	},
	excalibur: {
		inherit: true,
		isNonstandard: null,
	},
	strikeair: {
		inherit: true,
		isNonstandard: null,
	},
	invisibleair: {
		inherit: true,
		isNonstandard: null,
	},
	darknessdance: {
		inherit: true,
		isNonstandard: null,
	},
	infinitybeam: {
		inherit: true,
		isNonstandard: null,
	},
	thousandarmstrike: {
		inherit: true,
		isNonstandard: null,
	},
	bellerophon: {
		inherit: true,
		isNonstandard: null,
	},
	bloodandromeda: {
		inherit: true,
		isNonstandard: null,
	},
	pandemonium: {
		inherit: true,
		isNonstandard: null,
	},
	lanceoflonginus: {
		inherit: true,
		isNonstandard: null,
	},
	radiatedmist: {
		inherit: true,
		isNonstandard: null,
	},
	smellycloud: {
		inherit: true,
		isNonstandard: null,
	},
	stinkburst: {
		inherit: true,
		isNonstandard: null,
	},
	toxicwind: {
		inherit: true,
		isNonstandard: null,
	},
	quarantinevirus: {
		inherit: true,
		isNonstandard: null,
	},
	cancervirus: {
		inherit: true,
		isNonstandard: null,
	},
	decaylimbs: {
		inherit: true,
		isNonstandard: null,
	},
	meltvirus: {
		inherit: true,
		isNonstandard: null,
	},
	newvirus: {
		inherit: true,
		isNonstandard: null,
	},
	poisonvirus: {
		inherit: true,
		isNonstandard: null,
	},
	gigatoxin: {
		inherit: true,
		isNonstandard: null,
	},
	superfever: {
		inherit: true,
		isNonstandard: null,
	},
	extinguishflame: {
		inherit: true,
		isNonstandard: null,
	},
	hexvirus: {
		inherit: true,
		isNonstandard: null,
	},
	icethaw: {
		inherit: true,
		isNonstandard: null,
	},
	commoncold: {
		inherit: true,
		isNonstandard: null,
	},
	severecold: {
		inherit: true,
		isNonstandard: null,
	},
	leprosy: {
		inherit: true,
		isNonstandard: null,
	},
	acceleprosy: {
		inherit: true,
		isNonstandard: null,
	},
	drowsyray: {
		inherit: true,
		isNonstandard: null,
	},
	drowsyvirus: {
		inherit: true,
		isNonstandard: null,
	},
	dreamconsume: {
		inherit: true,
		isNonstandard: null,
	},
	sleepvirus: {
		inherit: true,
		isNonstandard: null,
	},
	risingflame: {
		inherit: true,
		isNonstandard: null,
	},
	burningbranch: {
		inherit: true,
		isNonstandard: null,
	},
	carpetscrape: {
		inherit: true,
		isNonstandard: null,
	},
	carpetshock: {
		inherit: true,
		isNonstandard: null,
	},
	portalburst: {
		inherit: true,
		isNonstandard: null,
	},
	dimensionweb: {
		inherit: true,
		isNonstandard: null,
	},
	dangeroussting: {
		inherit: true,
		isNonstandard: null,
	},
	restrictbeam: {
		inherit: true,
		isNonstandard: null,
	},
	shinehit: {
		inherit: true,
		isNonstandard: null,
	},
	godhand: {
		inherit: true,
		isNonstandard: null,
	},
	masterspark: {
		inherit: true,
		isNonstandard: null,
	},
	sanddive: {
		inherit: true,
		isNonstandard: null,
	},
	elderroar: {
		inherit: true,
		isNonstandard: null,
	},
	metalneedle: {
		inherit: true,
		isNonstandard: null,
	},
	guidedshot: {
		inherit: true,
		isNonstandard: null,
	},
	revolvingillusion: {
		inherit: true,
		isNonstandard: null,
	},
	densebarrage: {
		inherit: true,
		isNonstandard: null,
	},
	fantasyseal: {
		inherit: true,
		isNonstandard: null,
	},
	invokedeity: {
		inherit: true,
		isNonstandard: null,
	},
	fakejewel: {
		inherit: true,
		isNonstandard: null,
	},
	badmoon: {
		inherit: true,
		isNonstandard: null,
	},
	disarmspell: {
		inherit: true,
		isNonstandard: null,
	},
	overray: {
		inherit: true,
		isNonstandard: null,
	},
	stardustreverie: {
		inherit: true,
		isNonstandard: null,
	},
	broomcharge: {
		inherit: true,
		isNonstandard: null,
	},
	gateofbabylon: {
		inherit: true,
		isNonstandard: null,
	},
	rulebreaker: {
		inherit: true,
		isNonstandard: null,
	},
	rainoflight: {
		inherit: true,
		isNonstandard: null,
	},
	gaebolg: {
		inherit: true,
		isNonstandard: null,
	},
	theripper: {
		inherit: true,
		isNonstandard: null,
	},
	rapidthrow: {
		inherit: true,
		isNonstandard: null,
	},
	hallucination: {
		inherit: true,
		isNonstandard: null,
	},
	timecut: {
		inherit: true,
		isNonstandard: null,
	},
	samuraiedge: {
		inherit: true,
		isNonstandard: null,
	},
	lastslash: {
		inherit: true,
		isNonstandard: null,
	},
	reversalsword: {
		inherit: true,
		isNonstandard: null,
	},
	soulhound: {
		inherit: true,
		isNonstandard: null,
	},
	focussword: {
		inherit: true,
		isNonstandard: null,
	},
	innerpower: {
		inherit: true,
		isNonstandard: null,
	},
	specterwaltz: {
		inherit: true,
		isNonstandard: null,
	},
	armorburst: {
		inherit: true,
		isNonstandard: null,
	},
	hiv: {
		inherit: true,
		isNonstandard: null,
	},
	heartbreak: {
		inherit: true,
		isNonstandard: null,
	},
	horoscope: {
		inherit: true,
		isNonstandard: null,
	},
	goodluck: {
		inherit: true,
		isNonstandard: null,
	},
	icegatling: {
		inherit: true,
		isNonstandard: null,
	},
	lazymist: {
		inherit: true,
		isNonstandard: null,
	},
	honoikazuchi: {
		inherit: true,
		isNonstandard: null,
	},
	yatanokagami: {
		inherit: true,
		isNonstandard: null,
	},
	amaterasu: {
		inherit: true,
		isNonstandard: null,
	},
	fujinwind: {
		inherit: true,
		isNonstandard: null,
	},
	aresstrike: {
		inherit: true,
		isNonstandard: null,
	},
	hachimanstrike: {
		inherit: true,
		isNonstandard: null,
	},
	omoikane: {
		inherit: true,
		isNonstandard: null,
	},
	raidenstrike: {
		inherit: true,
		isNonstandard: null,
	},
	daruma: {
		inherit: true,
		isNonstandard: null,
	},
	divinemercy: {
		inherit: true,
		isNonstandard: null,
	},
	perdition: {
		inherit: true,
		isNonstandard: null,
	},
	deathroll: {
		inherit: true,
		isNonstandard: null,
	},
	inkshot: {
		inherit: true,
		isNonstandard: null,
	},
	inkshit: {
		inherit: true,
		isNonstandard: null,
	},
	brushstroke: {
		inherit: true,
		isNonstandard: null,
	},
	masamuneburado: {
		inherit: true,
		isNonstandard: null,
	},
	gemscatter: {
		inherit: true,
		isNonstandard: null,
	},
	fellblood: {
		inherit: true,
		isNonstandard: null,
	},
	gash: {
		inherit: true,
		isNonstandard: null,
	},
	seasonalflowers: {
		inherit: true,
		isNonstandard: null,
	},
	flashvolley: {
		inherit: true,
		isNonstandard: null,
	},
	iflamethrower: {
		inherit: true,
		isNonstandard: null,
	},
	ichargeblast: {
		inherit: true,
		isNonstandard: null,
	},
	stopit: {
		inherit: true,
		isNonstandard: null,
	},
	tricyber: {
		inherit: true,
		isNonstandard: null,
	},
	randomint: {
		inherit: true,
		isNonstandard: null,
	},
	heartstop: {
		inherit: true,
		isNonstandard: null,
	},
	heartthrob: {
		inherit: true,
		isNonstandard: null,
	},
	greaseshot: {
		inherit: true,
		isNonstandard: null,
	},
	greasepump: {
		inherit: true,
		isNonstandard: null,
	},
	bloodseal: {
		inherit: true,
		isNonstandard: null,
	},
	bloodoath: {
		inherit: true,
		isNonstandard: null,
	},
	adampunch: {
		inherit: true,
		isNonstandard: null,
	},
	elementconjure: {
		inherit: true,
		isNonstandard: null,
	},
	scatterbeam: {
		inherit: true,
		isNonstandard: null,
	},
	beamdance: {
		inherit: true,
		isNonstandard: null,
	},
	paranoia: {
		inherit: true,
		isNonstandard: null,
	},
	aquaspear: {
		inherit: true,
		isNonstandard: null,
	},
	dragonslayer: {
		inherit: true,
		isNonstandard: null,
	},
	pillowfight: {
		inherit: true,
		isNonstandard: null,
	},
	paintsplats: {
		inherit: true,
		isNonstandard: null,
	},
	crosscoat: {
		inherit: true,
		isNonstandard: null,
	},
	cubism: {
		inherit: true,
		isNonstandard: null,
	},
	foodpoison: {
		inherit: true,
		isNonstandard: null,
	},
	coinhurl: {
		inherit: true,
		isNonstandard: null,
	},
	megaphone: {
		inherit: true,
		isNonstandard: null,
	},
	crosscutter: {
		inherit: true,
		isNonstandard: null,
	},
	windride: {
		inherit: true,
		isNonstandard: null,
	},
	strongarm: {
		inherit: true,
		isNonstandard: null,
	},
	brightmoss: {
		inherit: true,
		isNonstandard: null,
	},
	memesion: {
		inherit: true,
		isNonstandard: null,
	},
	mkultra: {
		inherit: true,
		isNonstandard: null,
	},
	feedfrenzy: {
		inherit: true,
		isNonstandard: null,
	},
	bellslash: {
		inherit: true,
		isNonstandard: null,
	},
	generalwinter: {
		inherit: true,
		isNonstandard: null,
	},
	purplehaze: {
		inherit: true,
		isNonstandard: null,
	},
	viruscrush: {
		inherit: true,
		isNonstandard: null,
	},
	martianflames: {
		inherit: true,
		isNonstandard: null,
	},
	eyegouge: {
		inherit: true,
		isNonstandard: null,
	},
	pressurepoint: {
		inherit: true,
		isNonstandard: null,
	},
	vacuumrupture: {
		inherit: true,
		isNonstandard: null,
	},
	earthenfeast: {
		inherit: true,
		isNonstandard: null,
	},
	spiralstrike: {
		inherit: true,
		isNonstandard: null,
	},
	shootingarts: {
		inherit: true,
		isNonstandard: null,
	},
	recklessdive: {
		inherit: true,
		isNonstandard: null,
	},
	boo: {
		inherit: true,
		isNonstandard: null,
	},
	deadsilence: {
		inherit: true,
		isNonstandard: null,
	},
	amplifier: {
		inherit: true,
		isNonstandard: null,
	},
	heatup: {
		inherit: true,
		isNonstandard: null,
	},
	stonedrills: {
		inherit: true,
		isNonstandard: null,
	},
	miraclemallet: {
		inherit: true,
		isNonstandard: null,
	},
	feast: {
		inherit: true,
		isNonstandard: null,
	},
	dragonruins: {
		inherit: true,
		isNonstandard: null,
	},
	tempest: {
		inherit: true,
		isNonstandard: null,
	},
	steadywind: {
		inherit: true,
		isNonstandard: null,
	},
	airbubble: {
		inherit: true,
		isNonstandard: null,
	},
	amberwave: {
		inherit: true,
		isNonstandard: null,
	},
	amorouspulse: {
		inherit: true,
		isNonstandard: null,
	},
	ancientstare: {
		inherit: true,
		isNonstandard: null,
	},
	anticoagulant: {
		inherit: true,
		isNonstandard: null,
	},
	aquaslap: {
		inherit: true,
		isNonstandard: null,
	},
	atomicpunch: {
		inherit: true,
		isNonstandard: null,
	},
	bambooshoot: {
		inherit: true,
		isNonstandard: null,
	},
	bananarang: {
		inherit: true,
		isNonstandard: null,
	},
	blackhex: {
		inherit: true,
		isNonstandard: null,
	},
	boltin: {
		inherit: true,
		isNonstandard: null,
	},
	breakdown: {
		inherit: true,
		isNonstandard: null,
	},
	chirp: {
		inherit: true,
		isNonstandard: null,
	},
	cloneattack: {
		inherit: true,
		isNonstandard: null,
	},
	cloudcrash: {
		inherit: true,
		isNonstandard: null,
	},
	coalthrow: {
		inherit: true,
		isNonstandard: null,
	},
	coffeedrink: {
		inherit: true,
		isNonstandard: null,
	},
	snowfort: {
		inherit: true,
		isNonstandard: null,
	},
	cuddle: {
		inherit: true,
		isNonstandard: null,
	},
	cutebump: {
		inherit: true,
		isNonstandard: null,
	},
	depthcharge: {
		inherit: true,
		isNonstandard: null,
	},
	duskslayer: {
		inherit: true,
		isNonstandard: null,
	},
	dustblizzard: {
		inherit: true,
		isNonstandard: null,
	},
	electroncrush: {
		inherit: true,
		isNonstandard: null,
	},
	electrocute: {
		inherit: true,
		isNonstandard: null,
	},
	epilogue: {
		inherit: true,
		isNonstandard: null,
	},
	expunge: {
		inherit: true,
		isNonstandard: null,
	},
	fallout: {
		inherit: true,
		isNonstandard: null,
	},
	featherrush: {
		inherit: true,
		isNonstandard: null,
	},
	featherslash: {
		inherit: true,
		isNonstandard: null,
	},
	festiveshot: {
		inherit: true,
		isNonstandard: null,
	},
	finalswipe: {
		inherit: true,
		isNonstandard: null,
	},
	glassstorm: {
		inherit: true,
		isNonstandard: null,
	},
	glowsignal: {
		inherit: true,
		isNonstandard: null,
	},
	harpoonshot: {
		inherit: true,
		isNonstandard: null,
	},
	heartfeltpulse: {
		inherit: true,
		isNonstandard: null,
	},
	heatsiphon: {
		inherit: true,
		isNonstandard: null,
	},
	hookdown: {
		inherit: true,
		isNonstandard: null,
	},
	infernalblade: {
		inherit: true,
		isNonstandard: null,
	},
	gatheredstars: {
		inherit: true,
		isNonstandard: null,
	},
	diffusionlaser: {
		inherit: true,
		isNonstandard: null,
	},
	invisibleheart: {
		inherit: true,
		isNonstandard: null,
	},
	fairyhex: {
		inherit: true,
		isNonstandard: null,
	},
	purgatoryflicker: {
		inherit: true,
		isNonstandard: null,
	},
	impulseblast: {
		inherit: true,
		isNonstandard: null,
	},
	angelladder: {
		inherit: true,
		isNonstandard: null,
	},
	racingearth: {
		inherit: true,
		isNonstandard: null,
	},
	divinequake: {
		inherit: true,
		isNonstandard: null,
	},
	wizardfield: {
		inherit: true,
		isNonstandard: null,
	},
	tropicalwave: {
		inherit: true,
		isNonstandard: null,
	},
	memeticfang: {
		inherit: true,
		isNonstandard: null,
	},
	kleenexray: {
		inherit: true,
		isNonstandard: null,
	},
	kleenexbeam: {
		inherit: true,
		isNonstandard: null,
	},
	finalsolution: {
		inherit: true,
		isNonstandard: null,
	},
	superglitch: {
		inherit: true,
		isNonstandard: null,
	},
	frozeninferno: {
		inherit: true,
		isNonstandard: null,
	},
	soulburner: {
		inherit: true,
		isNonstandard: null,
	},
	freezingslash: {
		inherit: true,
		isNonstandard: null,
	},
	pitchblackray: {
		inherit: true,
		isNonstandard: null,
	},
	fieryswipes: {
		inherit: true,
		isNonstandard: null,
	},
	bonesmash: {
		inherit: true,
		isNonstandard: null,
	},
	shatterbeam: {
		inherit: true,
		isNonstandard: null,
	},
	speedyglass: {
		inherit: true,
		isNonstandard: null,
	},
	suckercharge: {
		inherit: true,
		isNonstandard: null,
	},
	suckerjab: {
		inherit: true,
		isNonstandard: null,
	},
	wooddrill: {
		inherit: true,
		isNonstandard: null,
	},
	extinguishsteam: {
		inherit: true,
		isNonstandard: null,
	},
	extinguisher: {
		inherit: true,
		isNonstandard: null,
	},
	electrodrill: {
		inherit: true,
		isNonstandard: null,
	},
	magmatackle: {
		inherit: true,
		isNonstandard: null,
	},
	lavablitz: {
		inherit: true,
		isNonstandard: null,
	},
	zombiecharge: {
		inherit: true,
		isNonstandard: null,
	},
	zombieram: {
		inherit: true,
		isNonstandard: null,
	},
	zombieacid: {
		inherit: true,
		isNonstandard: null,
	},
	zombiespit: {
		inherit: true,
		isNonstandard: null,
	},
	undeadspit: {
		inherit: true,
		isNonstandard: null,
	},
	zombiebind: {
		inherit: true,
		isNonstandard: null,
	},
	zombind: {
		inherit: true,
		isNonstandard: null,
	},
	brutalhold: {
		inherit: true,
		isNonstandard: null,
	},
	abyssdive: {
		inherit: true,
		isNonstandard: null,
	},
	blinding: {
		inherit: true,
		isNonstandard: null,
	},
	dancinglight: {
		inherit: true,
		isNonstandard: null,
	},
	diamondglow: {
		inherit: true,
		isNonstandard: null,
	},
	eyebeam: {
		inherit: true,
		isNonstandard: null,
	},
	flare: {
		inherit: true,
		isNonstandard: null,
	},
	sunshine: {
		inherit: true,
		isNonstandard: null,
	},
	sewingsting: {
		inherit: true,
		isNonstandard: null,
	},
	sewingjab: {
		inherit: true,
		isNonstandard: null,
	},
	fabricstab: {
		inherit: true,
		isNonstandard: null,
	},
	dazzlingflames: {
		inherit: true,
		isNonstandard: null,
	},
	crossbowassault: {
		inherit: true,
		isNonstandard: null,
	},
	starflare: {
		inherit: true,
		isNonstandard: null,
	},
	battlewaltz: {
		inherit: true,
		isNonstandard: null,
	},
	infinitescales: {
		inherit: true,
		isNonstandard: null,
	},
	cooldown: {
		inherit: true,
		isNonstandard: null,
	},
	phantomensemble: {
		inherit: true,
		isNonstandard: null,
	},
	boombox: {
		inherit: true,
		isNonstandard: null,
	},
	secondtackle: {
		inherit: true,
		isNonstandard: null,
	},
	prerecord: {
		inherit: true,
		isNonstandard: null,
	},
	futurepassed: {
		inherit: true,
		isNonstandard: null,
	},
	steamboatrush: {
		inherit: true,
		isNonstandard: null,
	},
	fortissimo: {
		inherit: true,
		isNonstandard: null,
	},
	sexpistols: {
		inherit: true,
		isNonstandard: null,
	},
	rubberburst: {
		inherit: true,
		isNonstandard: null,
	},
	bounceback: {
		inherit: true,
		isNonstandard: null,
	},
	reactivebounce: {
		inherit: true,
		isNonstandard: null,
	},
	heavyweather: {
		inherit: true,
		isNonstandard: null,
	},
	superfly: {
		inherit: true,
		isNonstandard: null,
	},
	dangerouslick: {
		inherit: true,
		isNonstandard: null,
	},
	volttail: {
		inherit: true,
		isNonstandard: null,
	},
	scrunch: {
		inherit: true,
		isNonstandard: null,
	},
	foulgas: {
		inherit: true,
		isNonstandard: null,
	},
	starfreeze: {
		inherit: true,
		isNonstandard: null,
	},
	ghostwave: {
		inherit: true,
		isNonstandard: null,
	},
	traceon: {
		inherit: true,
		isNonstandard: null,
	},
	tsubamegaeshi: {
		inherit: true,
		isNonstandard: null,
	},
	spintop: {
		inherit: true,
		isNonstandard: null,
	},
	superspintop: {
		inherit: true,
		isNonstandard: null,
	},
	fireball: {
		inherit: true,
		isNonstandard: null,
	},
	twilightray: {
		inherit: true,
		isNonstandard: null,
	},
	irongrip: {
		inherit: true,
		isNonstandard: null,
	},
	lullaby: {
		inherit: true,
		isNonstandard: null,
	},
	foulodor: {
		inherit: true,
		isNonstandard: null,
	},
	carpetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	bonecrusher: {
		inherit: true,
		isNonstandard: null,
	},
	inkblast: {
		inherit: true,
		isNonstandard: null,
	},
	sourbeam: {
		inherit: true,
		isNonstandard: null,
	},
	pincushion: {
		inherit: true,
		isNonstandard: null,
	},
	sacrifice: {
		inherit: true,
		isNonstandard: null,
	},
	devildeal: {
		inherit: true,
		isNonstandard: null,
	},
	shinigamieyes: {
		inherit: true,
		isNonstandard: null,
	},
	divide: {
		inherit: true,
		isNonstandard: null,
	},
	addition: {
		inherit: true,
		isNonstandard: null,
	},
	subtract: {
		inherit: true,
		isNonstandard: null,
	},
	multiply: {
		inherit: true,
		isNonstandard: null,
	},
	calculator: {
		inherit: true,
		isNonstandard: null,
	},
	terriblevisage: {
		inherit: true,
		isNonstandard: null,
	},
	magnetshards: {
		inherit: true,
		isNonstandard: null,
	},
	headchop: {
		inherit: true,
		isNonstandard: null,
	},
	antidotepoint: {
		inherit: true,
		isNonstandard: null,
	},
	disarm: {
		inherit: true,
		isNonstandard: null,
	},
	traincrash: {
		inherit: true,
		isNonstandard: null,
	},
	teleportaway: {
		inherit: true,
		isNonstandard: null,
	},
	unstablehorizon: {
		inherit: true,
		isNonstandard: null,
	},
	breakup: {
		inherit: true,
		isNonstandard: null,
	},
	loveburst: {
		inherit: true,
		isNonstandard: null,
	},
	venusburst: {
		inherit: true,
		isNonstandard: null,
	},
	acidburst: {
		inherit: true,
		isNonstandard: null,
	},
	chromeray: {
		inherit: true,
		isNonstandard: null,
	},
	techsting: {
		inherit: true,
		isNonstandard: null,
	},
	blooddrain: {
		inherit: true,
		isNonstandard: null,
	},
	bloodpump: {
		inherit: true,
		isNonstandard: null,
	},
	replicate: {
		inherit: true,
		isNonstandard: null,
	},
	glassyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	whirlglass: {
		inherit: true,
		isNonstandard: null,
	},
	breadrollout: {
		inherit: true,
		isNonstandard: null,
	},
	fruityburst: {
		inherit: true,
		isNonstandard: null,
	},
	sandwichrush: {
		inherit: true,
		isNonstandard: null,
	},
	predictspell: {
		inherit: true,
		isNonstandard: null,
	},
	magicprophecy: {
		inherit: true,
		isNonstandard: null,
	},
	bedtime: {
		inherit: true,
		isNonstandard: null,
	},
	incompray: {
		inherit: true,
		isNonstandard: null,
	},
	toxicinfo: {
		inherit: true,
		isNonstandard: null,
	},
	gaininginfo: {
		inherit: true,
		isNonstandard: null,
	},
	risinginfo: {
		inherit: true,
		isNonstandard: null,
	},
	quickplastic: {
		inherit: true,
		isNonstandard: null,
	},
	plasticray: {
		inherit: true,
		isNonstandard: null,
	},
	itchybite: {
		inherit: true,
		isNonstandard: null,
	},
	bloodbite: {
		inherit: true,
		isNonstandard: null,
	},
	bloodhound: {
		inherit: true,
		isNonstandard: null,
	},
	hardcandybeam: {
		inherit: true,
		isNonstandard: null,
	},
	storedcalories: {
		inherit: true,
		isNonstandard: null,
	},
	woodstalk: {
		inherit: true,
		isNonstandard: null,
	},
	felltree: {
		inherit: true,
		isNonstandard: null,
	},
	flavoredice: {
		inherit: true,
		isNonstandard: null,
	},
	illusionbullets: {
		inherit: true,
		isNonstandard: null,
	},
	windwave: {
		inherit: true,
		isNonstandard: null,
	},
	smogshot: {
		inherit: true,
		isNonstandard: null,
	},
	randomshots: {
		inherit: true,
		isNonstandard: null,
	},
	moonbow: {
		inherit: true,
		isNonstandard: null,
	},
	carpetcharge: {
		inherit: true,
		isNonstandard: null,
	},
	flycarpet: {
		inherit: true,
		isNonstandard: null,
	},
	blazespear: {
		inherit: true,
		isNonstandard: null,
	},
	bloodgungnir: {
		inherit: true,
		isNonstandard: null,
	},
	scarletmist: {
		inherit: true,
		isNonstandard: null,
	},
	netherray: {
		inherit: true,
		isNonstandard: null,
	},
	thunderclap: {
		inherit: true,
		isNonstandard: null,
	},
	futureattack: {
		inherit: true,
		isNonstandard: null,
	},
	thunderveil: {
		inherit: true,
		isNonstandard: null,
	},
	thunderdrill: {
		inherit: true,
		isNonstandard: null,
	},
	magneticrocks: {
		inherit: true,
		isNonstandard: null,
	},
	gravityblast: {
		inherit: true,
		isNonstandard: null,
	},
	infohazardrush: {
		inherit: true,
		isNonstandard: null,
	},
	bloodystorm: {
		inherit: true,
		isNonstandard: null,
	},
	darksweets: {
		inherit: true,
		isNonstandard: null,
	},
	laevateinn: {
		inherit: true,
		isNonstandard: null,
	},
	andthentherewerenone: {
		inherit: true,
		isNonstandard: null,
	},
	distortionbomb: {
		inherit: true,
		isNonstandard: null,
	},
	torturedspike: {
		inherit: true,
		isNonstandard: null,
	},
	ebbtide: {
		inherit: true,
		isNonstandard: null,
	},
	lovesick: {
		inherit: true,
		isNonstandard: null,
	},
	dnabeam: {
		inherit: true,
		isNonstandard: null,
	},
	booing: {
		inherit: true,
		isNonstandard: null,
	},
	toxiccopy: {
		inherit: true,
		isNonstandard: null,
	},
	sludgedown: {
		inherit: true,
		isNonstandard: null,
	},
	magictrap: {
		inherit: true,
		isNonstandard: null,
	},
	gargoylepunch: {
		inherit: true,
		isNonstandard: null,
	},
	packedice: {
		inherit: true,
		isNonstandard: null,
	},
	shadowend: {
		inherit: true,
		isNonstandard: null,
	},
	shadowstorm: {
		inherit: true,
		isNonstandard: null,
	},
	shadowblast: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbolt: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbreak: {
		inherit: true,
		isNonstandard: null,
	},
	shadowchill: {
		inherit: true,
		isNonstandard: null,
	},
	shadowfire: {
		inherit: true,
		isNonstandard: null,
	},
	shadowrave: {
		inherit: true,
		isNonstandard: null,
	},
	shadowrush: {
		inherit: true,
		isNonstandard: null,
	},
	shadowwave: {
		inherit: true,
		isNonstandard: null,
	},
	shadowblitz: {
		inherit: true,
		isNonstandard: null,
	},
	shadowdown: {
		inherit: true,
		isNonstandard: null,
	},
	shadowhalf: {
		inherit: true,
		isNonstandard: null,
	},
	shadowhold: {
		inherit: true,
		isNonstandard: null,
	},
	shadowmist: {
		inherit: true,
		isNonstandard: null,
	},
	shadowpanic: {
		inherit: true,
		isNonstandard: null,
	},
	shadowshed: {
		inherit: true,
		isNonstandard: null,
	},
	shadowsky: {
		inherit: true,
		isNonstandard: null,
	},
	excaliburmorgan: {
		inherit: true,
		isNonstandard: null,
	},
	divineprotection: {
		inherit: true,
		isNonstandard: null,
	},
	ionioihetairoi: {
		inherit: true,
		isNonstandard: null,
	},
	coldspell: {
		inherit: true,
		isNonstandard: null,
	},
	blackripple: {
		inherit: true,
		isNonstandard: null,
	},
	decisivestrike: {
		inherit: true,
		isNonstandard: null,
	},
	mercurycharge: {
		inherit: true,
		isNonstandard: null,
	},
	aestusdomusaurea: {
		inherit: true,
		isNonstandard: null,
	},
	laussaintclaudius: {
		inherit: true,
		isNonstandard: null,
	},
	understep: {
		inherit: true,
		isNonstandard: null,
	},
	scrapmetal: {
		inherit: true,
		isNonstandard: null,
	},
	firespiral: {
		inherit: true,
		isNonstandard: null,
	},
	fullsteamahead: {
		inherit: true,
		isNonstandard: null,
	},
	electrorush: {
		inherit: true,
		isNonstandard: null,
	},
	supertrainrush: {
		inherit: true,
		isNonstandard: null,
	},
	swordofdawn: {
		inherit: true,
		isNonstandard: null,
	},
	finalmoove: {
		inherit: true,
		isNonstandard: null,
	},
	rainbowdash: {
		inherit: true,
		isNonstandard: null,
	},
	closeshave: {
		inherit: true,
		isNonstandard: null,
	},
	lovespark: {
		inherit: true,
		isNonstandard: null,
	},
	illuminatipower: {
		inherit: true,
		isNonstandard: null,
	},
	mysterybeam: {
		inherit: true,
		isNonstandard: null,
	},
	dayblast: {
		inherit: true,
		isNonstandard: null,
	},
	yearblast: {
		inherit: true,
		isNonstandard: null,
	},
	urbanburst: {
		inherit: true,
		isNonstandard: null,
	},
	fishbite: {
		inherit: true,
		isNonstandard: null,
	},
	anglestab: {
		inherit: true,
		isNonstandard: null,
	},
	megapeck: {
		inherit: true,
		isNonstandard: null,
	},
	triplepeck: {
		inherit: true,
		isNonstandard: null,
	},
	rocketjumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	focussplash: {
		inherit: true,
		isNonstandard: null,
	},
	lightningflash: {
		inherit: true,
		isNonstandard: null,
	},
	emergencythunder: {
		inherit: true,
		isNonstandard: null,
	},
	flaredash: {
		inherit: true,
		isNonstandard: null,
	},
	pastalavista: {
		inherit: true,
		isNonstandard: null,
	},
	tuning: {
		inherit: true,
		isNonstandard: null,
	},
	ballbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	tusk: {
		inherit: true,
		isNonstandard: null,
	},
	twilightspark: {
		inherit: true,
		isNonstandard: null,
	},
	bindingsword: {
		inherit: true,
		isNonstandard: null,
	},
	nightwind: {
		inherit: true,
		isNonstandard: null,
	},
	lunardial: {
		inherit: true,
		isNonstandard: null,
	},
	miraclewind: {
		inherit: true,
		isNonstandard: null,
	},
	sunsinferno: {
		inherit: true,
		isNonstandard: null,
	},
	lunartides: {
		inherit: true,
		isNonstandard: null,
	},
	perfectfreeze: {
		inherit: true,
		isNonstandard: null,
	},
	lunaticeyes: {
		inherit: true,
		isNonstandard: null,
	},
	timescrew: {
		inherit: true,
		isNonstandard: null,
	},
	fieldbreak: {
		inherit: true,
		isNonstandard: null,
	},
	bugkick: {
		inherit: true,
		isNonstandard: null,
	},
	rainbow: {
		inherit: true,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rainbow",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'rainbow',
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('rainbow');
				}
			},
		},

		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 12;
				}
				return 10;
			},
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'rainbow');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 9,
			onModifyMove(move, pokemon) {
				if (move.secondaries && move.id !== 'secretpower') {
					this.debug('doubling secondary chance');
					for (const secondary of move.secondaries) {
						if (pokemon.hasAbility('serenegrace') && secondary.volatileStatus === 'flinch') continue;
						if (secondary.chance) secondary.chance *= 2;
					}
					if (move.self?.chance) move.self.chance *= 2;
				}
			},
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'rainbow');
			},

		},
		secondary: null,
		target: "allySide",
		type: "Light",
		isNonstandard: null,
	},
	imperishablenight: {
		inherit: true,
		isNonstandard: null,
	},
	rainbowwave: {
		inherit: true,
		isNonstandard: null,
	},
	apollo13: {
		inherit: true,
		isNonstandard: null,
	},
	spitout: {
		inherit: true,
		isNonstandard: null,
	},
	undyingflame: {
		inherit: true,
		isNonstandard: null,
	},
	nightsparrowsong: {
		inherit: true,
		isNonstandard: null,
	},
	wanting: {
		inherit: true,
		isNonstandard: null,
	},
	heartbomb: {
		inherit: true,
		isNonstandard: null,
	},
	performance: {
		inherit: true,
		isNonstandard: null,
	},
	weatherblade: {
		inherit: true,
		isNonstandard: null,
	},
	hisousword: {
		inherit: true,
		isNonstandard: null,
	},
	blackwind: {
		inherit: true,
		isNonstandard: null,
	},
	draculacradle: {
		inherit: true,
		isNonstandard: null,
	},
	preach: {
		inherit: true,
		isNonstandard: null,
	},
	opticcamo: {
		inherit: true,
		isNonstandard: null,
	},
	adaptray: {
		inherit: true,
		isNonstandard: null,
	},
	communism: {
		inherit: true,
		isNonstandard: null,
	},
	windblade: {
		inherit: true,
		isNonstandard: null,
	},
	foehnwinds: {
		inherit: true,
		isNonstandard: null,
	},
	bandattack: {
		inherit: true,
		isNonstandard: null,
	},
	occamsrazor: {
		inherit: true,
		isNonstandard: null,
	},
	burststream: {
		inherit: true,
		isNonstandard: null,
	},
	hipcheck: {
		inherit: true,
		isNonstandard: null,
	},
	godsgrace: {
		inherit: true,
		isNonstandard: null,
	},
	infinitybigbangstorm: {
		inherit: true,
		isNonstandard: null,
	},
	vergavesta: {
		inherit: true,
		isNonstandard: null,
	},
	orbitalcrash: {
		inherit: true,
		isNonstandard: null,
	},
	superinazumakick: {
		inherit: true,
		isNonstandard: null,
	},
	fowlplay: {
		inherit: true,
		isNonstandard: null,
	},
	piercinghorn: {
		inherit: true,
		isNonstandard: null,
	},
	torpedo: {
		inherit: true,
		isNonstandard: null,
	},
	moltenmetal: {
		inherit: true,
		isNonstandard: null,
	},
	puffup: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicblade: {
		inherit: true,
		isNonstandard: null,
	},
	shout: {
		inherit: true,
		isNonstandard: null,
	},
	resonate: {
		inherit: true,
		isNonstandard: null,
	},
	diffusion: {
		inherit: true,
		isNonstandard: null,
	},
	wildgrowth: {
		inherit: true,
		isNonstandard: null,
	},
	coinburst: {
		inherit: true,
		isNonstandard: null,
	},
	leechpods: {
		inherit: true,
		isNonstandard: null,
	},
	pollinate: {
		inherit: true,
		isNonstandard: null,
	},
	silkscreen: {
		inherit: true,
		isNonstandard: null,
	},
	vendetta: {
		inherit: true,
		isNonstandard: null,
	},
	shortcircuit: {
		inherit: true,
		isNonstandard: null,
	},
	stungun: {
		inherit: true,
		isNonstandard: null,
	},
	glitzblitz: {
		inherit: true,
		isNonstandard: null,
	},
	hiphiphooray: {
		inherit: true,
		isNonstandard: null,
	},
	peekaboo: {
		inherit: true,
		isNonstandard: null,
	},
	pixiewave: {
		inherit: true,
		isNonstandard: null,
	},
	ghoulbreath: {
		inherit: true,
		isNonstandard: null,
	},
	logroll: {
		inherit: true,
		isNonstandard: null,
	},
	brainstorm: {
		inherit: true,
		isNonstandard: null,
	},
	pinpoint: {
		inherit: true,
		isNonstandard: null,
	},
	alarmclock: {
		inherit: true,
		isNonstandard: null,
	},
	insomniaray: {
		inherit: true,
		isNonstandard: null,
	},
	nightterror: {
		inherit: true,
		isNonstandard: null,
	},
	bluster: {
		inherit: true,
		isNonstandard: null,
	},
	heartseye: {
		inherit: true,
		isNonstandard: null,
	},
	enviousburst: {
		inherit: true,
		isNonstandard: null,
	},
	burningdesire: {
		inherit: true,
		isNonstandard: null,
	},
	burningpassion: {
		inherit: true,
		isNonstandard: null,
	},
	heartshock: {
		inherit: true,
		isNonstandard: null,
	},
	spiralhearts: {
		inherit: true,
		isNonstandard: null,
	},
	deathyweathy: {
		inherit: true,
		isNonstandard: null,
	},
	burningwave: {
		inherit: true,
		isNonstandard: null,
	},
	fossilize: {
		inherit: true,
		isNonstandard: null,
	},
	enviousheart: {
		inherit: true,
		isNonstandard: null,
	},
	superego: {
		inherit: true,
		isNonstandard: null,
	},
	chaoticnoise: {
		inherit: true,
		isNonstandard: null,
	},
	poseidonwave: {
		inherit: true,
		isNonstandard: null,
	},
	hightide: {
		inherit: true,
		isNonstandard: null,
	},
	embalm: {
		inherit: true,
		isNonstandard: null,
	},
	sunflowerburst: {
		inherit: true,
		isNonstandard: null,
	},
	slingshot: {
		inherit: true,
		isNonstandard: null,
	},
	sandslash: {
		inherit: true,
		isNonstandard: null,
	},
	autumnwind: {
		inherit: true,
		isNonstandard: null,
	},
	darkfire: {
		inherit: true,
		isNonstandard: null,
	},
	mothmunch: {
		inherit: true,
		isNonstandard: null,
	},
	plantcloak: {
		inherit: true,
		isNonstandard: null,
	},
	sandcloak: {
		inherit: true,
		isNonstandard: null,
	},
	trashcloak: {
		inherit: true,
		isNonstandard: null,
	},
	burningice: {
		inherit: true,
		isNonstandard: null,
	},
	sunset: {
		inherit: true,
		isNonstandard: null,
	},
	metallica: {
		inherit: true,
		isNonstandard: null,
	},
	emeraldsplash: {
		inherit: true,
		isNonstandard: null,
	},
	secretingredient: {
		inherit: true,
		isNonstandard: null,
	},
	gettertomahawk: {
		inherit: true,
		isNonstandard: null,
	},
	drillattack: {
		inherit: true,
		isNonstandard: null,
	},
	gettermissile: {
		inherit: true,
		isNonstandard: null,
	},
	getterbeam: {
		inherit: true,
		isNonstandard: null,
	},
	tomahawkboomerang: {
		inherit: true,
		isNonstandard: null,
	},
	heatseekmissile: {
		inherit: true,
		isNonstandard: null,
	},
	eternalmeek: {
		inherit: true,
		isNonstandard: null,
	},
	finale: {
		inherit: true,
		isNonstandard: null,
	},
	chairsmack: {
		inherit: true,
		isNonstandard: null,
	},
	harvesting: {
		inherit: true,
		isNonstandard: null,
	},
	salamanderball: {
		inherit: true,
		isNonstandard: null,
	},
	devilsknife: {
		inherit: true,
		isNonstandard: null,
	},
	chaosbomb: {
		inherit: true,
		isNonstandard: null,
	},
	faithbeam: {
		inherit: true,
		isNonstandard: null,
	},
	seventrumpets: {
		inherit: true,
		isNonstandard: null,
	},
	firsttrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	secondtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	thirdtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	fourthtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	fifthtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	sixthtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	seventhtrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	tenplagues: {
		inherit: true,
		isNonstandard: null,
	},
	firstplague: {
		inherit: true,
		isNonstandard: null,
	},
	secondplague: {
		inherit: true,
		isNonstandard: null,
	},
	thirdplague: {
		inherit: true,
		isNonstandard: null,
	},
	fourthplague: {
		inherit: true,
		isNonstandard: null,
	},
	fifthplague: {
		inherit: true,
		isNonstandard: null,
	},
	sixthplague: {
		inherit: true,
		isNonstandard: null,
	},
	seventhplague: {
		inherit: true,
		isNonstandard: null,
	},
	eigthplague: {
		inherit: true,
		isNonstandard: null,
	},
	ninthplague: {
		inherit: true,
		isNonstandard: null,
	},
	tenthplague: {
		inherit: true,
		isNonstandard: null,
	},
	frigophobia: {
		inherit: true,
		isNonstandard: null,
	},
	dragonmist: {
		inherit: true,
		isNonstandard: null,
	},
	breathblast: {
		inherit: true,
		isNonstandard: null,
	},
	fieryblast: {
		inherit: true,
		isNonstandard: null,
	},
	faithcharge: {
		inherit: true,
		isNonstandard: null,
	},
	honorbind: {
		inherit: true,
		isNonstandard: null,
	},
	batteryacid: {
		inherit: true,
		isNonstandard: null,
	},
	optimization: {
		inherit: true,
		isNonstandard: null,
	},
	lunatictime: {
		inherit: true,
		isNonstandard: null,
	},
	madepiphany: {
		inherit: true,
		isNonstandard: null,
	},
	equalize: {
		inherit: true,
		isNonstandard: null,
	},
	catatonia: {
		inherit: true,
		isNonstandard: null,
	},
	everyoneexplodenow: {
		inherit: true,
		isNonstandard: null,
	},
	schizoboost: {
		inherit: true,
		isNonstandard: null,
	},
	decay: {
		inherit: true,
		isNonstandard: null,
	},
	decayray: {
		inherit: true,
		isNonstandard: null,
	},
	mayhem: {
		inherit: true,
		isNonstandard: null,
	},
	slapstick: {
		inherit: true,
		isNonstandard: null,
	},
	madprophecy: {
		inherit: true,
		isNonstandard: null,
	},
	defragment: {
		inherit: true,
		isNonstandard: null,
	},
	upgradeoptics: {
		inherit: true,
		isNonstandard: null,
	},
	antivirus: {
		inherit: true,
		isNonstandard: null,
	},
	spamattack: {
		inherit: true,
		isNonstandard: null,
	},
	cloudstorage: {
		inherit: true,
		isNonstandard: null,
	},
	magicmissiles: {
		inherit: true,
		isNonstandard: null,
	},
	manapunch: {
		inherit: true,
		isNonstandard: null,
	},
	gadget: {
		inherit: true,
		isNonstandard: null,
	},
	thermochromia: {
		inherit: true,
		isNonstandard: null,
	},
	fattenup: {
		inherit: true,
		isNonstandard: null,
	},
	eject: {
		inherit: true,
		isNonstandard: null,
	},
	extrachromosome: {
		inherit: true,
		isNonstandard: null,
	},
	deviationdown: {
		inherit: true,
		isNonstandard: null,
	},
	electrophobia: {
		inherit: true,
		isNonstandard: null,
	},
	antiairmissile: {
		inherit: true,
		isNonstandard: null,
	},
	malfunction: {
		inherit: true,
		isNonstandard: null,
	},
	plasmacannon: {
		inherit: true,
		isNonstandard: null,
	},
	overload: {
		inherit: true,
		isNonstandard: null,
	},
	construction: {
		inherit: true,
		isNonstandard: null,
	},
	cannonball: {
		inherit: true,
		isNonstandard: null,
	},
	liquidmetal: {
		inherit: true,
		isNonstandard: null,
	},
	bindingvoice: {
		inherit: true,
		isNonstandard: null,
	},
	primalnoise: {
		inherit: true,
		isNonstandard: null,
	},
	firmheart: {
		inherit: true,
		isNonstandard: null,
	},
	piercingstab: {
		inherit: true,
		isNonstandard: null,
	},
	grimreaper: {
		inherit: true,
		isNonstandard: null,
	},
	featherstorm: {
		inherit: true,
		isNonstandard: null,
	},
	vilesmell: {
		inherit: true,
		isNonstandard: null,
	},
	stickyhands: {
		inherit: true,
		isNonstandard: null,
	},
	diamondtail: {
		inherit: true,
		isNonstandard: null,
	},
	chromobeam: {
		inherit: true,
		isNonstandard: null,
	},
	randomgenerate: {
		inherit: true,
		isNonstandard: null,
	},
	flashdarts: {
		inherit: true,
		isNonstandard: null,
	},
	pointlazer: {
		inherit: true,
		isNonstandard: null,
	},
	supernova: {
		inherit: true,
		isNonstandard: null,
	},
	rawpower: {
		inherit: true,
		isNonstandard: null,
	},
	galeforce: {
		inherit: true,
		isNonstandard: null,
	},
	fearfactor: {
		inherit: true,
		isNonstandard: null,
	},
	requiem: {
		inherit: true,
		isNonstandard: null,
	},
	thornwhip: {
		inherit: true,
		isNonstandard: null,
	},
	mandiblecrush: {
		inherit: true,
		isNonstandard: null,
	},
	terminate: {
		inherit: true,
		isNonstandard: null,
	},
	steamblast: {
		inherit: true,
		isNonstandard: null,
	},
	afterburn: {
		inherit: true,
		isNonstandard: null,
	},
	aquacrunch: {
		inherit: true,
		isNonstandard: null,
	},
	bloom: {
		inherit: true,
		isNonstandard: null,
	},
	earthbomb: {
		inherit: true,
		isNonstandard: null,
	},
	acidspit: {
		inherit: true,
		isNonstandard: null,
	},
	sludgepunch: {
		inherit: true,
		isNonstandard: null,
	},
	shotgunblast: {
		inherit: true,
		isNonstandard: null,
	},
	clobberclub: {
		inherit: true,
		isNonstandard: null,
	},
	talons: {
		inherit: true,
		isNonstandard: null,
	},
	blackmagic: {
		inherit: true,
		isNonstandard: null,
	},
	snipershot: {
		inherit: true,
		isNonstandard: null,
	},
	acidburn: {
		inherit: true,
		isNonstandard: null,
	},
	arcticspear: {
		inherit: true,
		isNonstandard: null,
	},
	stellarrush: {
		inherit: true,
		isNonstandard: null,
	},
	iceberg: {
		inherit: true,
		isNonstandard: null,
	},
	meteorrain: {
		inherit: true,
		isNonstandard: null,
	},
	lightningball: {
		inherit: true,
		isNonstandard: null,
	},
	fairyring: {
		inherit: true,
		isNonstandard: null,
	},
	freezepoint: {
		inherit: true,
		isNonstandard: null,
	},
	vinehold: {
		inherit: true,
		isNonstandard: null,
	},
	scorchingsand: {
		inherit: true,
		isNonstandard: null,
	},
	dazzlingpetals: {
		inherit: true,
		isNonstandard: null,
	},
	icecage: {
		inherit: true,
		isNonstandard: null,
	},
	magmatail: {
		inherit: true,
		isNonstandard: null,
	},
	thawing: {
		inherit: true,
		isNonstandard: null,
	},
	spikedarmor: {
		inherit: true,
		isNonstandard: null,
	},
	greenthumb: {
		inherit: true,
		isNonstandard: null,
	},
	heartpunch: {
		inherit: true,
		isNonstandard: null,
	},
	sexytackle: {
		inherit: true,
		isNonstandard: null,
	},
	sandpaper: {
		inherit: true,
		isNonstandard: null,
	},
	sonicblade: {
		inherit: true,
		isNonstandard: null,
	},
	deathnote: {
		inherit: true,
		isNonstandard: null,
	},
	pullwool: {
		inherit: true,
		isNonstandard: null,
	},
	laughgas: {
		inherit: true,
		isNonstandard: null,
	},
	roundhousekick: {
		inherit: true,
		isNonstandard: null,
	},
	wormhole: {
		inherit: true,
		isNonstandard: null,
	},
	moltenrock: {
		inherit: true,
		isNonstandard: null,
	},
	stampede: {
		inherit: true,
		isNonstandard: null,
	},
	sledrush: {
		inherit: true,
		isNonstandard: null,
	},
	antennatracker: {
		inherit: true,
		isNonstandard: null,
	},
	terrakinesis: {
		inherit: true,
		isNonstandard: null,
	},
	backstroke: {
		inherit: true,
		isNonstandard: null,
	},
	smokeout: {
		inherit: true,
		isNonstandard: null,
	},
	staticslash: {
		inherit: true,
		isNonstandard: null,
	},
	squirm: {
		inherit: true,
		isNonstandard: null,
	},
	poisoncoat: {
		inherit: true,
		isNonstandard: null,
	},
	leadcoat: {
		inherit: true,
		isNonstandard: null,
	},
	daydream: {
		inherit: true,
		isNonstandard: null,
	},
	rottingburst: {
		inherit: true,
		isNonstandard: null,
	},
	zombietongue: {
		inherit: true,
		isNonstandard: null,
	},
	staticcling: {
		inherit: true,
		isNonstandard: null,
	},
	cloudguard: {
		inherit: true,
		isNonstandard: null,
	},
	futurepower: {
		inherit: true,
		isNonstandard: null,
	},
	leafcanopy: {
		inherit: true,
		isNonstandard: null,
	},
	serenade: {
		inherit: true,
		isNonstandard: null,
	},
	pillowpile: {
		inherit: true,
		isNonstandard: null,
	},
	wiretrap: {
		inherit: true,
		isNonstandard: null,
	},
	graverob: {
		inherit: true,
		isNonstandard: null,
	},
	fadeaway: {
		inherit: true,
		isNonstandard: null,
	},
	dirge: {
		inherit: true,
		isNonstandard: null,
	},
	shakedown: {
		inherit: true,
		isNonstandard: null,
	},
	maul: {
		inherit: true,
		isNonstandard: null,
	},
	magnetpulse: {
		inherit: true,
		isNonstandard: null,
	},
	auroraglow: {
		inherit: true,
		isNonstandard: null,
	},
	skylight: {
		inherit: true,
		isNonstandard: null,
	},
	dubiousdream: {
		inherit: true,
		isNonstandard: null,
	},
	nightmareproject: {
		inherit: true,
		isNonstandard: null,
	},
	cementblast: {
		inherit: true,
		isNonstandard: null,
	},
	snowblind: {
		inherit: true,
		isNonstandard: null,
	},
	silentsteps: {
		inherit: true,
		isNonstandard: null,
	},
	enchant: {
		inherit: true,
		isNonstandard: null,
	},
	mistletoe: {
		inherit: true,
		isNonstandard: null,
	},
	claypulse: {
		inherit: true,
		isNonstandard: null,
	},
	warmupflex: {
		inherit: true,
		isNonstandard: null,
	},
	antstrength: {
		inherit: true,
		isNonstandard: null,
	},
	freezerburn: {
		inherit: true,
		isNonstandard: null,
	},
	percussiveslap: {
		inherit: true,
		isNonstandard: null,
	},
	capoeira: {
		inherit: true,
		isNonstandard: null,
	},
	jailbreak: {
		inherit: true,
		isNonstandard: null,
	},
	tiptoe: {
		inherit: true,
		isNonstandard: null,
	},
	woodenfang: {
		inherit: true,
		isNonstandard: null,
	},
	shipwreck: {
		inherit: true,
		isNonstandard: null,
	},
	weld: {
		inherit: true,
		isNonstandard: null,
	},
	finalsting: {
		inherit: true,
		isNonstandard: null,
	},
	sharkbite: {
		inherit: true,
		isNonstandard: null,
	},
	chainrattle: {
		inherit: true,
		isNonstandard: null,
	},
	paddedroom: {
		inherit: true,
		isNonstandard: null,
	},
	healingcircle: {
		inherit: true,
		isNonstandard: null,
	},
	mowdown: {
		inherit: true,
		isNonstandard: null,
	},
	speedsap: {
		inherit: true,
		isNonstandard: null,
	},
	skitter: {
		inherit: true,
		isNonstandard: null,
	},
	elegy: {
		inherit: true,
		isNonstandard: null,
	},
	grapple: {
		inherit: true,
		isNonstandard: null,
	},
	rustspray: {
		inherit: true,
		isNonstandard: null,
	},
	heatsap: {
		inherit: true,
		isNonstandard: null,
	},
	hardeningtackle: {
		inherit: true,
		isNonstandard: null,
	},
	heartless: {
		inherit: true,
		isNonstandard: null,
	},
	jackpot: {
		inherit: true,
		isNonstandard: null,
	},
	steam: {
		inherit: true,
		isNonstandard: null,
	},
	ignite: {
		inherit: true,
		isNonstandard: null,
	},
	icyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	figureeight: {
		inherit: true,
		isNonstandard: null,
	},
	passion: {
		inherit: true,
		isNonstandard: null,
	},
	soakhorn: {
		inherit: true,
		isNonstandard: null,
	},
	scarletrhapsody: {
		inherit: true,
		isNonstandard: null,
	},
	dragonjewels: {
		inherit: true,
		isNonstandard: null,
	},
	buddhasbowl: {
		inherit: true,
		isNonstandard: null,
	},
	fireratrobe: {
		inherit: true,
		isNonstandard: null,
	},
	cowrieshell: {
		inherit: true,
		isNonstandard: null,
	},
	sakedrink: {
		inherit: true,
		isNonstandard: null,
	},
	cryptid: {
		inherit: true,
		isNonstandard: null,
	},
	itembox: {
		inherit: true,
		isNonstandard: null,
	},
	greenshell: {
		inherit: true,
		isNonstandard: null,
	},
	"3greenshells": {
		inherit: true,
		isNonstandard: null,
	},
	redshell: {
		inherit: true,
		isNonstandard: null,
	},
	"3redshells": {
		inherit: true,
		isNonstandard: null,
	},
	bananapeel: {
		inherit: true,
		isNonstandard: null,
	},
	triplebananas: {
		inherit: true,
		isNonstandard: null,
	},
	mushroomboost: {
		inherit: true,
		isNonstandard: null,
	},
	triplemushroom: {
		inherit: true,
		isNonstandard: null,
	},
	goldenmushroom: {
		inherit: true,
		isNonstandard: null,
	},
	fireflower: {
		inherit: true,
		isNonstandard: null,
	},
	starman: {
		inherit: true,
		isNonstandard: null,
	},
	blooper: {
		inherit: true,
		isNonstandard: null,
	},
	spinyshell: {
		inherit: true,
		isNonstandard: null,
	},
	bobomb: {
		inherit: true,
		isNonstandard: null,
	},
	bulletbill: {
		inherit: true,
		isNonstandard: null,
	},
	boomerangflower: {
		inherit: true,
		isNonstandard: null,
	},
	superhorn: {
		inherit: true,
		isNonstandard: null,
	},
	ghost: {
		inherit: true,
		isNonstandard: null,
	},
	fakeitembox: {
		inherit: true,
		isNonstandard: null,
	},
	submerge: {
		inherit: true,
		isNonstandard: null,
	},
	springcleaning: {
		inherit: true,
		isNonstandard: null,
	},
	acidtrap: {
		inherit: true,
		isNonstandard: null,
	},
	hotcoals: {
		inherit: true,
		isNonstandard: null,
	},
	aciddrip: {
		inherit: true,
		isNonstandard: null,
	},
	acidrain: {
		inherit: true,
		isNonstandard: null,
	},
	aerialvirus: {
		inherit: true,
		isNonstandard: null,
	},
	smokestack: {
		inherit: true,
		isNonstandard: null,
	},
	nightcall: {
		inherit: true,
		isNonstandard: null,
	},
	bury: {
		inherit: true,
		isNonstandard: null,
	},
	greenhousegas: {
		inherit: true,
		isNonstandard: null,
	},
	marshyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	muffa: {
		inherit: true,
		isNonstandard: null,
	},
	bonewand: {
		inherit: true,
		isNonstandard: null,
	},
	bonesword: {
		inherit: true,
		isNonstandard: null,
	},
	mudslide: {
		inherit: true,
		isNonstandard: null,
	},
	gasoline: {
		inherit: true,
		isNonstandard: null,
	},
	oildrench: {
		inherit: true,
		isNonstandard: null,
	},
	pacify: {
		inherit: true,
		isNonstandard: null,
	},
	bonfire: {
		inherit: true,
		isNonstandard: null,
	},
	magnetize: {
		inherit: true,
		isNonstandard: null,
	},
	metallurgy: {
		inherit: true,
		isNonstandard: null,
	},
	rockgather: {
		inherit: true,
		isNonstandard: null,
	},
	whet: {
		inherit: true,
		isNonstandard: null,
	},
	illusionarydominance: {
		inherit: true,
		isNonstandard: null,
	},
	spelunk: {
		inherit: true,
		isNonstandard: null,
	},
	batteringram: {
		inherit: true,
		isNonstandard: null,
	},
	tailclub: {
		inherit: true,
		isNonstandard: null,
	},
	fantasynature: {
		inherit: true,
		isNonstandard: null,
	},
	coinflipheads: {
		inherit: true,
		isNonstandard: null,
	},
	coinfliptails: {
		inherit: true,
		isNonstandard: null,
	},
	tails: {
		inherit: true,
		isNonstandard: null,
	},
	heads: {
		inherit: true,
		isNonstandard: null,
	},
	sealbreak: {
		inherit: true,
		isNonstandard: null,
	},
	umbrella: {
		inherit: true,
		isNonstandard: null,
	},
	dragonjet: {
		inherit: true,
		isNonstandard: null,
	},
	telepathy: {
		inherit: true,
		isNonstandard: null,
	},
	christmasspirit: {
		inherit: true,
		isNonstandard: null,
	},
	rubbercoat: {
		inherit: true,
		isNonstandard: null,
	},
	rubberpower: {
		inherit: true,
		isNonstandard: null,
	},
	steampunch: {
		inherit: true,
		isNonstandard: null,
	},
	terrahammer: {
		inherit: true,
		isNonstandard: null,
	},
	icebreaker: {
		inherit: true,
		isNonstandard: null,
	},
	rosecannon: {
		inherit: true,
		isNonstandard: null,
	},
	timeloop: {
		inherit: true,
		isNonstandard: null,
	},
	eraser: {
		inherit: true,
		isNonstandard: null,
	},
	rubberbullets: {
		inherit: true,
		isNonstandard: null,
	},
	rubout: {
		inherit: true,
		isNonstandard: null,
	},
	elasticbind: {
		inherit: true,
		isNonstandard: null,
	},
	bandshot: {
		inherit: true,
		isNonstandard: null,
	},
	rubberwhip: {
		inherit: true,
		isNonstandard: null,
	},
	rubbermallet: {
		inherit: true,
		isNonstandard: null,
	},
	rubberbeams: {
		inherit: true,
		isNonstandard: null,
	},
	seasoning: {
		inherit: true,
		isNonstandard: null,
	},
	flourtoss: {
		inherit: true,
		isNonstandard: null,
	},
	poundcake: {
		inherit: true,
		isNonstandard: null,
	},
	snackbait: {
		inherit: true,
		isNonstandard: null,
	},
	foodfight: {
		inherit: true,
		isNonstandard: null,
	},
	creamwhip: {
		inherit: true,
		isNonstandard: null,
	},
	skyfang: {
		inherit: true,
		isNonstandard: null,
	},
	sharpeningfang: {
		inherit: true,
		isNonstandard: null,
	},
	specialorder: {
		inherit: true,
		isNonstandard: null,
	},
	mortalcoil: {
		inherit: true,
		isNonstandard: null,
	},
	fellswoop: {
		inherit: true,
		isNonstandard: null,
	},
	overflow: {
		inherit: true,
		isNonstandard: null,
	},
	flintstrike: {
		inherit: true,
		isNonstandard: null,
	},
	brambles: {
		inherit: true,
		isNonstandard: null,
	},
	terrify: {
		inherit: true,
		isNonstandard: null,
	},
	lightspeed: {
		inherit: true,
		isNonstandard: null,
	},
	pollenseason: {
		inherit: true,
		isNonstandard: null,
	},
	lastjudgement: {
		inherit: true,
		isNonstandard: null,
	},
	abyssnova: {
		inherit: true,
		isNonstandard: null,
	},
	waveleaderfan: {
		inherit: true,
		isNonstandard: null,
	},
	phoebuscatastrophe: {
		inherit: true,
		isNonstandard: null,
	},
	agriusmetamorphosis: {
		inherit: true,
		isNonstandard: null,
	},
	stonersunshine: {
		inherit: true,
		isNonstandard: null,
	},
	swordcounter: {
		inherit: true,
		isNonstandard: null,
	},
	forwardsmash: {
		inherit: true,
		isNonstandard: null,
	},
	bladedance: {
		inherit: true,
		isNonstandard: null,
	},
	shieldbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	doubleedgedance: {
		inherit: true,
		isNonstandard: null,
	},
	flareblade: {
		inherit: true,
		isNonstandard: null,
	},
	bedrockpress: {
		inherit: true,
		isNonstandard: null,
	},
	barrierattack: {
		inherit: true,
		isNonstandard: null,
	},
	soniccharge: {
		inherit: true,
		isNonstandard: null,
	},
	foulnote: {
		inherit: true,
		isNonstandard: null,
	},
	sirensong: {
		inherit: true,
		isNonstandard: null,
	},
	vibrato: {
		inherit: true,
		isNonstandard: null,
	},
	beatmatch: {
		inherit: true,
		isNonstandard: null,
	},
	risingsun: {
		inherit: true,
		isNonstandard: null,
	},
	sunrise: {
		inherit: true,
		isNonstandard: null,
	},
	magmaclamp: {
		inherit: true,
		isNonstandard: null,
	},
	rake: {
		inherit: true,
		isNonstandard: null,
	},
	hotblooded: {
		inherit: true,
		isNonstandard: null,
	},
	bloodyrage: {
		inherit: true,
		isNonstandard: null,
	},
	bloodbath: {
		inherit: true,
		isNonstandard: null,
	},
	clarentbloodarthur: {
		inherit: true,
		isNonstandard: null,
	},
	bridalchest: {
		inherit: true,
		isNonstandard: null,
	},
	summonminions: {
		inherit: true,
		isNonstandard: null,
	},
	summonhorrors: {
		inherit: true,
		isNonstandard: null,
	},
	viaexpugnatio: {
		inherit: true,
		isNonstandard: null,
	},
	fieryheaven: {
		inherit: true,
		isNonstandard: null,
	},
	chaosheaven: {
		inherit: true,
		isNonstandard: null,
	},
	frigidheaven: {
		inherit: true,
		isNonstandard: null,
	},
	amaterasublessing: {
		inherit: true,
		isNonstandard: null,
	},
	unlimitedbladeworks: {
		inherit: true,
		isNonstandard: null,
	},
	lablackluna: {
		inherit: true,
		isNonstandard: null,
	},
	trapofargalia: {
		inherit: true,
		isNonstandard: null,
	},
	hippogriff: {
		inherit: true,
		isNonstandard: null,
	},
	casseurdelogistelle: {
		inherit: true,
		isNonstandard: null,
	},
	crossfirehurricane: {
		inherit: true,
		isNonstandard: null,
	},
	oraora: {
		inherit: true,
		isNonstandard: null,
	},
	aargh: {
		inherit: true,
		isNonstandard: null,
	},
	cruciatu: {
		inherit: true,
		isNonstandard: null,
	},
	lapucelle: {
		inherit: true,
		isNonstandard: null,
	},
	grondementduhaine: {
		inherit: true,
		isNonstandard: null,
	},
	legendofdracula: {
		inherit: true,
		isNonstandard: null,
	},
	ninelives: {
		inherit: true,
		isNonstandard: null,
	},
	rangingshot: {
		inherit: true,
		isNonstandard: null,
	},
	divinearrows: {
		inherit: true,
		isNonstandard: null,
	},
	scouting: {
		inherit: true,
		isNonstandard: null,
	},
	antaressnipe: {
		inherit: true,
		isNonstandard: null,
	},
	warshout: {
		inherit: true,
		isNonstandard: null,
	},
	pindown: {
		inherit: true,
		isNonstandard: null,
	},
	headshot: {
		inherit: true,
		isNonstandard: null,
	},
	marktarget: {
		inherit: true,
		isNonstandard: null,
	},
	steadyshot: {
		inherit: true,
		isNonstandard: null,
	},
	shootdown: {
		inherit: true,
		isNonstandard: null,
	},
	arrowvolley: {
		inherit: true,
		isNonstandard: null,
	},
	summongolems: {
		inherit: true,
		isNonstandard: null,
	},
	kanshoubakuya: {
		inherit: true,
		isNonstandard: null,
	},
	enkidu: {
		inherit: true,
		isNonstandard: null,
	},
	vimana: {
		inherit: true,
		isNonstandard: null,
	},
	electricchair: {
		inherit: true,
		isNonstandard: null,
	},
	hangmannoose: {
		inherit: true,
		isNonstandard: null,
	},
	lethalinjection: {
		inherit: true,
		isNonstandard: null,
	},
	thuanthien: {
		inherit: true,
		isNonstandard: null,
	},
	mariatheripper: {
		inherit: true,
		isNonstandard: null,
	},
	ketermalkuth: {
		inherit: true,
		isNonstandard: null,
	},
	troiastragoidia: {
		inherit: true,
		isNonstandard: null,
	},
	akhilleuskosmos: {
		inherit: true,
		isNonstandard: null,
	},
	pumpup: {
		inherit: true,
		isNonstandard: null,
	},
	charisma: {
		inherit: true,
		isNonstandard: null,
	},
	hanginggardenbabylon: {
		inherit: true,
		isNonstandard: null,
	},
	basmu: {
		inherit: true,
		isNonstandard: null,
	},
	dovescouts: {
		inherit: true,
		isNonstandard: null,
	},
	gigantomachia: {
		inherit: true,
		isNonstandard: null,
	},
	vortigern: {
		inherit: true,
		isNonstandard: null,
	},
	hrunting: {
		inherit: true,
		isNonstandard: null,
	},
	caladbolgii: {
		inherit: true,
		isNonstandard: null,
	},
	zarich: {
		inherit: true,
		isNonstandard: null,
	},
	tawrich: {
		inherit: true,
		isNonstandard: null,
	},
	blackkey: {
		inherit: true,
		isNonstandard: null,
	},
	twinarmbigcrunch: {
		inherit: true,
		isNonstandard: null,
	},
	leftarmxanadumatrix: {
		inherit: true,
		isNonstandard: null,
	},
	rightarmevileater: {
		inherit: true,
		isNonstandard: null,
	},
	saintwarorder: {
		inherit: true,
		isNonstandard: null,
	},
	stella: {
		inherit: true,
		isNonstandard: null,
	},
	abyssusdraconis: {
		inherit: true,
		isNonstandard: null,
	},
	bayard: {
		inherit: true,
		isNonstandard: null,
	},
	ascalon: {
		inherit: true,
		isNonstandard: null,
	},
	interfectumdracones: {
		inherit: true,
		isNonstandard: null,
	},
	dragonaxe: {
		inherit: true,
		isNonstandard: null,
	},
	uprising: {
		inherit: true,
		isNonstandard: null,
	},
	laststand: {
		inherit: true,
		isNonstandard: null,
	},
	bathoryerzsebet: {
		inherit: true,
		isNonstandard: null,
	},
	tyrantroar: {
		inherit: true,
		isNonstandard: null,
	},
	marvelousexploits: {
		inherit: true,
		isNonstandard: null,
	},
	wisconsindeathtrip: {
		inherit: true,
		isNonstandard: null,
	},
	beansouplake: {
		inherit: true,
		isNonstandard: null,
	},
	popcornstorm: {
		inherit: true,
		isNonstandard: null,
	},
	lifesurge: {
		inherit: true,
		isNonstandard: null,
	},
	eyeofeuryale: {
		inherit: true,
		isNonstandard: null,
	},
	smileofstheno: {
		inherit: true,
		isNonstandard: null,
	},
	divinebeauty: {
		inherit: true,
		isNonstandard: null,
	},
	cupidarrow: {
		inherit: true,
		isNonstandard: null,
	},
	brokenheart: {
		inherit: true,
		isNonstandard: null,
	},
	goldwildhunt: {
		inherit: true,
		isNonstandard: null,
	},
	piratecharge: {
		inherit: true,
		isNonstandard: null,
	},
	opulencecatnap: {
		inherit: true,
		isNonstandard: null,
	},
	collapse: {
		inherit: true,
		isNonstandard: null,
	},
	ageofbabylon: {
		inherit: true,
		isNonstandard: null,
	},
	attackup: {
		inherit: true,
		isNonstandard: null,
	},
	dualscreens: {
		inherit: true,
		isNonstandard: null,
	},
	critup: {
		inherit: true,
		isNonstandard: null,
	},
	healparty: {
		inherit: true,
		isNonstandard: null,
	},
	marchenmeineslebens: {
		inherit: true,
		isNonstandard: null,
	},
	yewbow: {
		inherit: true,
		isNonstandard: null,
	},
	poisonarrow: {
		inherit: true,
		isNonstandard: null,
	},
	explosivearrow: {
		inherit: true,
		isNonstandard: null,
	},
	mayking: {
		inherit: true,
		isNonstandard: null,
	},
	sabotage: {
		inherit: true,
		isNonstandard: null,
	},
	poisondart: {
		inherit: true,
		isNonstandard: null,
	},
	cryaa: {
		inherit: true,
		isNonstandard: null,
	},
	bloodsoldiers: {
		inherit: true,
		isNonstandard: null,
	},
	myredmead: {
		inherit: true,
		isNonstandard: null,
	},
	chariotmylove: {
		inherit: true,
		isNonstandard: null,
	},
	aaryc: {
		inherit: true,
		isNonstandard: null,
	},
	glitchguard: {
		inherit: true,
		isNonstandard: null,
	},
	delusionalpoisonbody: {
		inherit: true,
		isNonstandard: null,
	},
	poisonexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	poisondagger: {
		inherit: true,
		isNonstandard: null,
	},
	nurseryrhyme: {
		inherit: true,
		isNonstandard: null,
	},
	junglefever: {
		inherit: true,
		isNonstandard: null,
	},
	comfycoil: {
		inherit: true,
		isNonstandard: null,
	},
	queensglassgame: {
		inherit: true,
		isNonstandard: null,
	},
	dragonslash: {
		inherit: true,
		isNonstandard: null,
	},
	rhongomyniad: {
		inherit: true,
		isNonstandard: null,
	},
	asteroid: {
		inherit: true,
		isNonstandard: null,
	},
	warpdrive: {
		inherit: true,
		isNonstandard: null,
	},
	solarflare: {
		inherit: true,
		isNonstandard: null,
	},
	deepimpact: {
		inherit: true,
		isNonstandard: null,
	},
	icecomet: {
		inherit: true,
		isNonstandard: null,
	},
	moonjump: {
		inherit: true,
		isNonstandard: null,
	},
	closeencounter: {
		inherit: true,
		isNonstandard: null,
	},
	jabberwock: {
		inherit: true,
		isNonstandard: null,
	},
	godforce: {
		inherit: true,
		isNonstandard: null,
	},
	doublepeck: {
		inherit: true,
		isNonstandard: null,
	},
	witherbreath: {
		inherit: true,
		isNonstandard: null,
	},
	ghastlyhand: {
		inherit: true,
		isNonstandard: null,
	},
	deadweight: {
		inherit: true,
		isNonstandard: null,
	},
	heavenshole: {
		inherit: true,
		isNonstandard: null,
	},
	angramainyuccc: {
		inherit: true,
		isNonstandard: null,
	},
	sinpulse: {
		inherit: true,
		isNonstandard: null,
	},
	failnaught: {
		inherit: true,
		isNonstandard: null,
	},
	harpofhealing: {
		inherit: true,
		isNonstandard: null,
	},
	paintball: {
		inherit: true,
		isNonstandard: null,
	},
	paint: {
		inherit: true,
		isNonstandard: null,
	},
	heavyhue: {
		inherit: true,
		isNonstandard: null,
	},
	bucketbomb: {
		inherit: true,
		isNonstandard: null,
	},
	paintroller: {
		inherit: true,
		isNonstandard: null,
	},
	dragonlance: {
		inherit: true,
		isNonstandard: null,
	},
	shadowjavelin: {
		inherit: true,
		isNonstandard: null,
	},
	gardenofavalon: {
		inherit: true,
		isNonstandard: null,
	},
	mesektet: {
		inherit: true,
		isNonstandard: null,
	},
	summonsphinx: {
		inherit: true,
		isNonstandard: null,
	},
	ramesseumtentyris: {
		inherit: true,
		isNonstandard: null,
	},
	nosecondstrike: {
		inherit: true,
		isNonstandard: null,
	},
	sphereboundary: {
		inherit: true,
		isNonstandard: null,
	},
	wardance: {
		inherit: true,
		isNonstandard: null,
	},
	grendelbuster: {
		inherit: true,
		isNonstandard: null,
	},
	naegling: {
		inherit: true,
		isNonstandard: null,
	},
	excaliburgalatine: {
		inherit: true,
		isNonstandard: null,
	},
	shinecharge: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicslam: {
		inherit: true,
		isNonstandard: null,
	},
	loosegoose: {
		inherit: true,
		isNonstandard: null,
	},
	greasesplat: {
		inherit: true,
		isNonstandard: null,
	},
	brynhildrromantia: {
		inherit: true,
		isNonstandard: null,
	},
	freyjavenus: {
		inherit: true,
		isNonstandard: null,
	},
	brynhildrkomedia: {
		inherit: true,
		isNonstandard: null,
	},
	agecurse: {
		inherit: true,
		isNonstandard: null,
	},
	decaytouch: {
		inherit: true,
		isNonstandard: null,
	},
	dusttodust: {
		inherit: true,
		isNonstandard: null,
	},
	darkerpulse: {
		inherit: true,
		isNonstandard: null,
	},
	azrael: {
		inherit: true,
		isNonstandard: null,
	},
	ghostcamera: {
		inherit: true,
		isNonstandard: null,
	},
	computercrash: {
		inherit: true,
		isNonstandard: null,
	},
	dialup: {
		inherit: true,
		isNonstandard: null,
	},
	pentagramstamp: {
		inherit: true,
		isNonstandard: null,
	},
	heavenlight: {
		inherit: true,
		isNonstandard: null,
	},
	degreeburn: {
		inherit: true,
		isNonstandard: null,
	},
	vomit: {
		inherit: true,
		isNonstandard: null,
	},
	spiritsquash: {
		inherit: true,
		isNonstandard: null,
	},
	sledgehammer: {
		inherit: true,
		isNonstandard: null,
	},
	slowdown: {
		inherit: true,
		isNonstandard: null,
	},
	megadrill: {
		inherit: true,
		isNonstandard: null,
	},
	volttrap: {
		inherit: true,
		isNonstandard: null,
	},
	psypunch: {
		inherit: true,
		isNonstandard: null,
	},
	contaminate: {
		inherit: true,
		isNonstandard: null,
	},
	vinechain: {
		inherit: true,
		isNonstandard: null,
	},
	extract: {
		inherit: true,
		isNonstandard: null,
	},
	pixelcannon: {
		inherit: true,
		isNonstandard: null,
	},
	datastorm: {
		inherit: true,
		isNonstandard: null,
	},
	greedincarnate: {
		inherit: true,
		isNonstandard: null,
	},
	freezethem: {
		inherit: true,
		isNonstandard: null,
	},
	blitzkreig: {
		inherit: true,
		isNonstandard: null,
	},
	curveball: {
		inherit: true,
		isNonstandard: null,
	},
	lasso: {
		inherit: true,
		isNonstandard: null,
	},
	powernap: {
		inherit: true,
		isNonstandard: null,
	},
	icarussoar: {
		inherit: true,
		isNonstandard: null,
	},
	library: {
		inherit: true,
		isNonstandard: null,
	},
	dizzyray: {
		inherit: true,
		isNonstandard: null,
	},
	teardropphotonray: {
		inherit: true,
		isNonstandard: null,
	},
	guillotinebreaker: {
		inherit: true,
		isNonstandard: null,
	},
	crystalpalace: {
		inherit: true,
		isNonstandard: null,
	},
	princessloveliness: {
		inherit: true,
		isNonstandard: null,
	},
	lightsaber: {
		inherit: true,
		isNonstandard: null,
	},
	boyiiman: {
		inherit: true,
		isNonstandard: null,
	},
	uraniumheatbeam: {
		inherit: true,
		isNonstandard: null,
	},
	drown: {
		inherit: true,
		isNonstandard: null,
	},
	halo: {
		inherit: true,
		isNonstandard: null,
	},
	wickerman: {
		inherit: true,
		isNonstandard: null,
	},
	ochddeugodin: {
		inherit: true,
		isNonstandard: null,
	},
	thecut: {
		inherit: true,
		isNonstandard: null,
	},
	rootdrain: {
		inherit: true,
		isNonstandard: null,
	},
	corpsecart: {
		inherit: true,
		isNonstandard: null,
	},
	soulsword: {
		inherit: true,
		isNonstandard: null,
	},
	crystalize: {
		inherit: true,
		isNonstandard: null,
	},
	faedance: {
		inherit: true,
		isNonstandard: null,
	},
	powerdrain: {
		inherit: true,
		isNonstandard: null,
	},
	hibernation: {
		inherit: true,
		isNonstandard: null,
	},
	eldritchpower: {
		inherit: true,
		isNonstandard: null,
	},
	steamvortex: {
		inherit: true,
		isNonstandard: null,
	},
	cutebetrayal: {
		inherit: true,
		isNonstandard: null,
	},
	filthbomb: {
		inherit: true,
		isNonstandard: null,
	},
	insectdecay: {
		inherit: true,
		isNonstandard: null,
	},
	nanobotbarrier: {
		inherit: true,
		isNonstandard: null,
	},
	ragingchaos: {
		inherit: true,
		isNonstandard: null,
	},
	divinefacade: {
		inherit: true,
		isNonstandard: null,
	},
	demonsdeath: {
		inherit: true,
		isNonstandard: null,
	},
	creammissiles: {
		inherit: true,
		isNonstandard: null,
	},
	creamfinale: {
		inherit: true,
		isNonstandard: null,
	},
	windrage: {
		inherit: true,
		isNonstandard: null,
	},
	stonesurge: {
		inherit: true,
		isNonstandard: null,
	},
	parasitevirus: {
		inherit: true,
		isNonstandard: null,
	},
	thousandyoung: {
		inherit: true,
		isNonstandard: null,
	},
	rerorero: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearsting: {
		inherit: true,
		isNonstandard: null,
	},
	arcticwind: {
		inherit: true,
		isNonstandard: null,
	},
	glassball: {
		inherit: true,
		isNonstandard: null,
	},
	glassdefense: {
		inherit: true,
		isNonstandard: null,
	},
	glasssparkle: {
		inherit: true,
		isNonstandard: null,
	},
	tubebind: {
		inherit: true,
		isNonstandard: null,
	},
	breaststroke: {
		inherit: true,
		isNonstandard: null,
	},
	colorwheel: {
		inherit: true,
		isNonstandard: null,
	},
	paintprint: {
		inherit: true,
		isNonstandard: null,
	},
	warpaway: {
		inherit: true,
		isNonstandard: null,
	},
	gentlyweeps: {
		inherit: true,
		isNonstandard: null,
	},
	fishingrod: {
		inherit: true,
		isNonstandard: null,
	},
	beachboy: {
		inherit: true,
		isNonstandard: null,
	},
	mirrordimension: {
		inherit: true,
		isNonstandard: null,
	},
	deflate: {
		inherit: true,
		isNonstandard: null,
	},
	decayspray: {
		inherit: true,
		isNonstandard: null,
	},
	agingcurse: {
		inherit: true,
		isNonstandard: null,
	},
	oldfist: {
		inherit: true,
		isNonstandard: null,
	},
	agingburst: {
		inherit: true,
		isNonstandard: null,
	},
	aging: {
		inherit: true,
		isNonstandard: null,
	},
	bugnet: {
		inherit: true,
		isNonstandard: null,
	},
	handcuffs: {
		inherit: true,
		isNonstandard: null,
	},
	shrink: {
		inherit: true,
		isNonstandard: null,
	},
	stompcrush: {
		inherit: true,
		isNonstandard: null,
	},
	standarrow: {
		inherit: true,
		isNonstandard: null,
	},
	notchosen: {
		inherit: true,
		isNonstandard: null,
	},
	getstand: {
		inherit: true,
		isNonstandard: null,
	},
	rollingstones: {
		inherit: true,
		isNonstandard: null,
	},
	achtungbaby: {
		inherit: true,
		isNonstandard: null,
	},
	moldburst: {
		inherit: true,
		isNonstandard: null,
	},
	thermalburn: {
		inherit: true,
		isNonstandard: null,
	},
	anneaaa: {
		inherit: true,
		isNonstandard: null,
	},
	annes: {
		inherit: true,
		isNonstandard: null,
	},
	crystaltail: {
		inherit: true,
		isNonstandard: null,
	},
	cosmichorror: {
		inherit: true,
		isNonstandard: null,
	},
	flavortown: {
		inherit: true,
		isNonstandard: null,
	},
	dusttornado: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicgas: {
		inherit: true,
		isNonstandard: null,
	},
	endtime: {
		inherit: true,
		isNonstandard: null,
	},
	saturnrings: {
		inherit: true,
		isNonstandard: null,
	},
	aquabolt: {
		inherit: true,
		isNonstandard: null,
	},
	corner: {
		inherit: true,
		isNonstandard: null,
	},
	dazzlepowder: {
		inherit: true,
		isNonstandard: null,
	},
	metalblast: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicgrasp: {
		inherit: true,
		isNonstandard: null,
	},
	sanityleech: {
		inherit: true,
		isNonstandard: null,
	},
	brandingkiss: {
		inherit: true,
		isNonstandard: null,
	},
	scendscale: {
		inherit: true,
		isNonstandard: null,
	},
	eighthoctave: {
		inherit: true,
		isNonstandard: null,
	},
	bugzap: {
		inherit: true,
		isNonstandard: null,
	},
	angaltakigalshe: {
		inherit: true,
		isNonstandard: null,
	},
	gugalannastrike: {
		inherit: true,
		isNonstandard: null,
	},
	secretcalibur: {
		inherit: true,
		isNonstandard: null,
	},
	caliburn: {
		inherit: true,
		isNonstandard: null,
	},
	dimensionofsteam: {
		inherit: true,
		isNonstandard: null,
	},
	summonrobots: {
		inherit: true,
		isNonstandard: null,
	},
	plastichammer: {
		inherit: true,
		isNonstandard: null,
	},
	magmahammer: {
		inherit: true,
		isNonstandard: null,
	},
	excaliburvivian: {
		inherit: true,
		isNonstandard: null,
	},
	fairytail: {
		inherit: true,
		isNonstandard: null,
	},
	heartblade: {
		inherit: true,
		isNonstandard: null,
	},
	woodtornado: {
		inherit: true,
		isNonstandard: null,
	},
	necksnap: {
		inherit: true,
		isNonstandard: null,
	},
	vaporguard: {
		inherit: true,
		isNonstandard: null,
	},
	venipuncture: {
		inherit: true,
		isNonstandard: null,
	},
	sanguinefang: {
		inherit: true,
		isNonstandard: null,
	},
	twinshit: {
		inherit: true,
		isNonstandard: null,
	},
	mindcontrol: {
		inherit: true,
		isNonstandard: null,
	},
	hallucisting: {
		inherit: true,
		isNonstandard: null,
	},
	pleasejusthelpme: {
		inherit: true,
		isNonstandard: null,
	},
	returntozero: {
		inherit: true,
		isNonstandard: null,
	},
	switchblade: {
		inherit: true,
		isNonstandard: null,
	},
	kingshammer: {
		inherit: true,
		isNonstandard: null,
	},
	weakeningswipe: {
		inherit: true,
		isNonstandard: null,
	},
	calmingpulse: {
		inherit: true,
		isNonstandard: null,
	},
	nibble: {
		inherit: true,
		isNonstandard: null,
	},
	agoraphobia: {
		inherit: true,
		isNonstandard: null,
	},
	hysteria: {
		inherit: true,
		isNonstandard: null,
	},
	peanutbutter: {
		inherit: true,
		isNonstandard: null,
	},
	peanutcrash: {
		inherit: true,
		isNonstandard: null,
	},
	backtothefuture: {
		inherit: true,
		isNonstandard: null,
	},
	timeswap: {
		inherit: true,
		isNonstandard: null,
	},
	paperplane: {
		inherit: true,
		isNonstandard: null,
	},
	cleavage: {
		inherit: true,
		isNonstandard: null,
	},
	undyingspear: {
		inherit: true,
		isNonstandard: null,
	},
	gasterblaster: {
		inherit: true,
		isNonstandard: null,
	},
	twinsteam: {
		inherit: true,
		isNonstandard: null,
	},
	steamspout: {
		inherit: true,
		isNonstandard: null,
	},
	rogafufuken: {
		inherit: true,
		isNonstandard: null,
	},
	kick: {
		inherit: true,
		isNonstandard: null,
	},
	sokidan: {
		inherit: true,
		isNonstandard: null,
	},
	jetkick: {
		inherit: true,
		isNonstandard: null,
	},
	haunterdark: {
		inherit: true,
		isNonstandard: null,
	},
	killingbite: {
		inherit: true,
		isNonstandard: null,
	},
	steamguns: {
		inherit: true,
		isNonstandard: null,
	},
	avasculate: {
		inherit: true,
		isNonstandard: null,
	},
	arcaneeye: {
		inherit: true,
		isNonstandard: null,
	},
	antimagicfield: {
		inherit: true,
		isNonstandard: null,
	},
	barkskin: {
		inherit: true,
		isNonstandard: null,
	},
	steamup: {
		inherit: true,
		isNonstandard: null,
	},
	chaosbolt: {
		inherit: true,
		isNonstandard: null,
	},
	coneofcold: {
		inherit: true,
		isNonstandard: null,
	},
	summonfey: {
		inherit: true,
		isNonstandard: null,
	},
	summondragons: {
		inherit: true,
		isNonstandard: null,
	},
	summoninsects: {
		inherit: true,
		isNonstandard: null,
	},
	summon: {
		inherit: true,
		isNonstandard: null,
	},
	earthbind: {
		inherit: true,
		isNonstandard: null,
	},
	inflictwounds: {
		inherit: true,
		isNonstandard: null,
	},
	farenheit451: {
		inherit: true,
		isNonstandard: null,
	},
	agitatewound: {
		inherit: true,
		isNonstandard: null,
	},
	undeadagony: {
		inherit: true,
		isNonstandard: null,
	},
	summonundead: {
		inherit: true,
		isNonstandard: null,
	},
	enfeebleray: {
		inherit: true,
		isNonstandard: null,
	},
	avadakedavra: {
		inherit: true,
		isNonstandard: null,
	},
	sandwichstack: {
		inherit: true,
		isNonstandard: null,
	},
	invocation: {
		inherit: true,
		isNonstandard: null,
	},
	bloodboil: {
		inherit: true,
		isNonstandard: null,
	},
	bloodorb: {
		inherit: true,
		isNonstandard: null,
	},
	paperorb: {
		inherit: true,
		isNonstandard: null,
	},
	bloodspikes: {
		inherit: true,
		isNonstandard: null,
	},
	brainrot: {
		inherit: true,
		isNonstandard: null,
	},
	necrochannel: {
		inherit: true,
		isNonstandard: null,
	},
	dawnofthedead: {
		inherit: true,
		isNonstandard: null,
	},
	legotrap: {
		inherit: true,
		isNonstandard: null,
	},
	rigormortis: {
		inherit: true,
		isNonstandard: null,
	},
	coldcorpse: {
		inherit: true,
		isNonstandard: null,
	},
	summonspirits: {
		inherit: true,
		isNonstandard: null,
	},
	zombieapocalypse: {
		inherit: true,
		isNonstandard: null,
	},
	zombiehammer: {
		inherit: true,
		isNonstandard: null,
	},
	"5impossiblerequests": {
		inherit: true,
		isNonstandard: null,
	},
	houraibranch: {
		inherit: true,
		isNonstandard: null,
	},
	mysterium: {
		inherit: true,
		isNonstandard: null,
	},
	kinkakujiceiling: {
		inherit: true,
		isNonstandard: null,
	},
	lunarilmenite: {
		inherit: true,
		isNonstandard: null,
	},
	redstoneaja: {
		inherit: true,
		isNonstandard: null,
	},
	spiritaway: {
		inherit: true,
		isNonstandard: null,
	},
	dollarmy: {
		inherit: true,
		isNonstandard: null,
	},
	fourofakind: {
		inherit: true,
		isNonstandard: null,
	},
	fourbirthssword: {
		inherit: true,
		isNonstandard: null,
	},
	hesitationdeparture: {
		inherit: true,
		isNonstandard: null,
	},
	matsuyoireflectslash: {
		inherit: true,
		isNonstandard: null,
	},
	borderoflifeanddeath: {
		inherit: true,
		isNonstandard: null,
	},
	borderoflightanddark: {
		inherit: true,
		isNonstandard: null,
	},
	twindeath: {
		inherit: true,
		isNonstandard: null,
	},
	eventhorizon: {
		inherit: true,
		isNonstandard: null,
	},
	curseofyig: {
		inherit: true,
		isNonstandard: null,
	},
	yellowsign: {
		inherit: true,
		isNonstandard: null,
	},
	archbtyrophbia: {
		inherit: true,
		isNonstandard: null,
	},
	antiquitypunch: {
		inherit: true,
		isNonstandard: null,
	},
	expulsion: {
		inherit: true,
		isNonstandard: null,
	},
	sarnathsdoom: {
		inherit: true,
		isNonstandard: null,
	},
	thalassowave: {
		inherit: true,
		isNonstandard: null,
	},
	thalassosurge: {
		inherit: true,
		isNonstandard: null,
	},
	woodball: {
		inherit: true,
		isNonstandard: null,
	},
	dimensionwarp: {
		inherit: true,
		isNonstandard: null,
	},
	dimensionshamble: {
		inherit: true,
		isNonstandard: null,
	},
	timeleech: {
		inherit: true,
		isNonstandard: null,
	},
	chronophage: {
		inherit: true,
		isNonstandard: null,
	},
	timehound: {
		inherit: true,
		isNonstandard: null,
	},
	fanblast: {
		inherit: true,
		isNonstandard: null,
	},
	bloodytongue: {
		inherit: true,
		isNonstandard: null,
	},
	unknowncolor: {
		inherit: true,
		isNonstandard: null,
	},
	colordrain: {
		inherit: true,
		isNonstandard: null,
	},
	necrosplat: {
		inherit: true,
		isNonstandard: null,
	},
	lifesap: {
		inherit: true,
		isNonstandard: null,
	},
	ghatanovisage: {
		inherit: true,
		isNonstandard: null,
	},
	awakening: {
		inherit: true,
		isNonstandard: null,
	},
	woodenhoof: {
		inherit: true,
		isNonstandard: null,
	},
	ancienttsunami: {
		inherit: true,
		isNonstandard: null,
	},
	rubbertongue: {
		inherit: true,
		isNonstandard: null,
	},
	rubberpunch: {
		inherit: true,
		isNonstandard: null,
	},
	stinkymove: {
		inherit: true,
		isNonstandard: null,
	},
	levitation: {
		inherit: true,
		isNonstandard: null,
	},
	mistywave: {
		inherit: true,
		isNonstandard: null,
	},
	antlerleech: {
		inherit: true,
		isNonstandard: null,
	},
	everexpanding: {
		inherit: true,
		isNonstandard: null,
	},
	identitytheft: {
		inherit: true,
		isNonstandard: null,
	},
	illusionarystrike: {
		inherit: true,
		isNonstandard: null,
	},
	bottledive: {
		inherit: true,
		isNonstandard: null,
	},
	rowyourboat: {
		inherit: true,
		isNonstandard: null,
	},
	flytrap: {
		inherit: true,
		isNonstandard: null,
	},
	tripleshot: {
		inherit: true,
		isNonstandard: null,
	},
	determination: {
		inherit: true,
		isNonstandard: null,
	},
	seduction: {
		inherit: true,
		isNonstandard: null,
	},
	edenfruit: {
		inherit: true,
		isNonstandard: null,
	},
	temptations: {
		inherit: true,
		isNonstandard: null,
	},
	clearingwind: {
		inherit: true,
		isNonstandard: null,
	},
	typebeam: {
		inherit: true,
		isNonstandard: null,
	},
	bedtimestory: {
		inherit: true,
		isNonstandard: null,
	},
	dreamswallow: {
		inherit: true,
		isNonstandard: null,
	},
	tossandturn: {
		inherit: true,
		isNonstandard: null,
	},
	dragondream: {
		inherit: true,
		isNonstandard: null,
	},
	firehorn: {
		inherit: true,
		isNonstandard: null,
	},
	meltinghorn: {
		inherit: true,
		isNonstandard: null,
	},
	dragonhorn: {
		inherit: true,
		isNonstandard: null,
	},
	pizzatime: {
		inherit: true,
		isNonstandard: null,
	},
	pizzabite: {
		inherit: true,
		isNonstandard: null,
	},
	delivery: {
		inherit: true,
		isNonstandard: null,
	},
	gaebolgalt: {
		inherit: true,
		isNonstandard: null,
	},
	gateofskye: {
		inherit: true,
		isNonstandard: null,
	},
	godslayer: {
		inherit: true,
		isNonstandard: null,
	},
	whirlpaint: {
		inherit: true,
		isNonstandard: null,
	},
	paintingworld: {
		inherit: true,
		isNonstandard: null,
	},
	artgallery: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicweb: {
		inherit: true,
		isNonstandard: null,
	},
	greasygrasp: {
		inherit: true,
		isNonstandard: null,
	},
	feardrain: {
		inherit: true,
		isNonstandard: null,
	},
	bonebreaker: {
		inherit: true,
		isNonstandard: null,
	},
	sniffing: {
		inherit: true,
		isNonstandard: null,
	},
	featherblade: {
		inherit: true,
		isNonstandard: null,
	},
	counterwing: {
		inherit: true,
		isNonstandard: null,
	},
	drilldive: {
		inherit: true,
		isNonstandard: null,
	},
	hurricanepunch: {
		inherit: true,
		isNonstandard: null,
	},
	trojanhorse: {
		inherit: true,
		isNonstandard: null,
	},
	flavorburst: {
		inherit: true,
		isNonstandard: null,
	},
	branchblow: {
		inherit: true,
		isNonstandard: null,
	},
	faerieorb: {
		inherit: true,
		isNonstandard: null,
	},
	tacoroll: {
		inherit: true,
		isNonstandard: null,
	},
	pillowdrain: {
		inherit: true,
		isNonstandard: null,
	},
	meteorhammer: {
		inherit: true,
		isNonstandard: null,
	},
	wakingchant: {
		inherit: true,
		isNonstandard: null,
	},
	steamsale: {
		inherit: true,
		isNonstandard: null,
	},
	magiccharge: {
		inherit: true,
		isNonstandard: null,
	},
	babilu: {
		inherit: true,
		isNonstandard: null,
	},
	enki: {
		inherit: true,
		isNonstandard: null,
	},
	karmarush: {
		inherit: true,
		isNonstandard: null,
	},
	goldrush: {
		inherit: true,
		isNonstandard: null,
	},
	maxvoltcrash: {
		inherit: true,
		isNonstandard: null,
	},
	maxcuddle: {
		inherit: true,
		isNonstandard: null,
	},
	emojibeam: {
		inherit: true,
		isNonstandard: null,
	},
	pisces: {
		inherit: true,
		isNonstandard: null,
	},
	hollowburst: {
		inherit: true,
		isNonstandard: null,
	},
	fleetingstar: {
		inherit: true,
		isNonstandard: null,
	},
	starbeam: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicray: {
		inherit: true,
		isNonstandard: null,
	},
	swansong: {
		inherit: true,
		isNonstandard: null,
	},
	blacktruth: {
		inherit: true,
		isNonstandard: null,
	},
	massacre: {
		inherit: true,
		isNonstandard: null,
	},
	machinegun: {
		inherit: true,
		isNonstandard: null,
	},
	redtruth: {
		inherit: true,
		isNonstandard: null,
	},
	spellorb: {
		inherit: true,
		isNonstandard: null,
	},
	goldtruth: {
		inherit: true,
		isNonstandard: null,
	},
	memoryerase: {
		inherit: true,
		isNonstandard: null,
	},
	bonddestiny: {
		inherit: true,
		isNonstandard: null,
	},
	sabbath: {
		inherit: true,
		isNonstandard: null,
	},
	magmaraze: {
		inherit: true,
		isNonstandard: null,
	},
	hiberslam: {
		inherit: true,
		isNonstandard: null,
	},
	winterburst: {
		inherit: true,
		isNonstandard: null,
	},
	boomerang: {
		inherit: true,
		isNonstandard: null,
	},
	coldfront: {
		inherit: true,
		isNonstandard: null,
	},
	deluge: {
		inherit: true,
		isNonstandard: null,
	},
	demonsurge: {
		inherit: true,
		isNonstandard: null,
	},
	elvenarrow: {
		inherit: true,
		isNonstandard: null,
	},
	foghorn: {
		inherit: true,
		isNonstandard: null,
	},
	gaiapulse: {
		inherit: true,
		isNonstandard: null,
	},
	jealousy: {
		inherit: true,
		isNonstandard: null,
	},
	heatmirage: {
		inherit: true,
		isNonstandard: null,
	},
	mischief: {
		inherit: true,
		isNonstandard: null,
	},
	pincercrush: {
		inherit: true,
		isNonstandard: null,
	},
	pirouette: {
		inherit: true,
		isNonstandard: null,
	},
	bloodcurdling: {
		inherit: true,
		isNonstandard: null,
	},
	razorfin: {
		inherit: true,
		isNonstandard: null,
	},
	steamclean: {
		inherit: true,
		isNonstandard: null,
	},
	roothold: {
		inherit: true,
		isNonstandard: null,
	},
	terraform: {
		inherit: true,
		isNonstandard: null,
	},
	titanfang: {
		inherit: true,
		isNonstandard: null,
	},
	valentine: {
		inherit: true,
		isNonstandard: null,
	},
	treeoflife: {
		inherit: true,
		isNonstandard: null,
	},
	mummywrap: {
		inherit: true,
		isNonstandard: null,
	},
	papercounter: {
		inherit: true,
		isNonstandard: null,
	},
	carpetslam: {
		inherit: true,
		isNonstandard: null,
	},
	rrrray: {
		inherit: true,
		isNonstandard: null,
	},
	galeofdarkness: {
		inherit: true,
		isNonstandard: null,
	},
	shadownova: {
		inherit: true,
		isNonstandard: null,
	},
	bloodwhip: {
		inherit: true,
		isNonstandard: null,
	},
	fishpunch: {
		inherit: true,
		isNonstandard: null,
	},
	firstblood: {
		inherit: true,
		isNonstandard: null,
	},
	delete: {
		inherit: true,
		isNonstandard: null,
	},
	mutualdestruction: {
		inherit: true,
		isNonstandard: null,
	},
	burrowerbeneath: {
		inherit: true,
		isNonstandard: null,
	},
	noisepollution: {
		inherit: true,
		isNonstandard: null,
	},
	cursedground: {
		inherit: true,
		isNonstandard: null,
	},
	dracomissiles: {
		inherit: true,
		isNonstandard: null,
	},
	giantslaying: {
		inherit: true,
		isNonstandard: null,
	},
	chokegas: {
		inherit: true,
		isNonstandard: null,
	},
	jetpack: {
		inherit: true,
		isNonstandard: null,
	},
	spitsand: {
		inherit: true,
		isNonstandard: null,
	},
	psypowder: {
		inherit: true,
		isNonstandard: null,
	},
	everlastinglight: {
		inherit: true,
		isNonstandard: null,
	},
	throwup: {
		inherit: true,
		isNonstandard: null,
	},
	fieryexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	invertedroom: {
		inherit: true,
		isNonstandard: null,
	},
	streamline: {
		inherit: true,
		isNonstandard: null,
	},
	vaporform: {
		inherit: true,
		isNonstandard: null,
	},
	frozenwall: {
		inherit: true,
		isNonstandard: null,
	},
	fishingdive: {
		inherit: true,
		isNonstandard: null,
	},
	stonehammer: {
		inherit: true,
		isNonstandard: null,
	},
	boulderbash: {
		inherit: true,
		isNonstandard: null,
	},
	magmacannon: {
		inherit: true,
		isNonstandard: null,
	},
	nettleknife: {
		inherit: true,
		isNonstandard: null,
	},
	slushcrush: {
		inherit: true,
		isNonstandard: null,
	},
	pixiedust: {
		inherit: true,
		isNonstandard: null,
	},
	mudcover: {
		inherit: true,
		isNonstandard: null,
	},
	windcover: {
		inherit: true,
		isNonstandard: null,
	},
	rudebuster: {
		inherit: true,
		isNonstandard: null,
	},
	redbuster: {
		inherit: true,
		isNonstandard: null,
	},
	adaptivebody: {
		inherit: true,
		isNonstandard: null,
	},
	befuddlepowder: {
		inherit: true,
		isNonstandard: null,
	},
	infernowind: {
		inherit: true,
		isNonstandard: null,
	},
	steambomb: {
		inherit: true,
		isNonstandard: null,
	},
	overdrivesong: {
		inherit: true,
		isNonstandard: null,
	},
	strangesmoke: {
		inherit: true,
		isNonstandard: null,
	},
	foamburst: {
		inherit: true,
		isNonstandard: null,
	},
	idolatry: {
		inherit: true,
		isNonstandard: null,
	},
	takeflight: {
		inherit: true,
		isNonstandard: null,
	},
	shouldsleep: {
		inherit: true,
		isNonstandard: null,
	},
	compost: {
		inherit: true,
		isNonstandard: null,
	},
	freestyle: {
		inherit: true,
		isNonstandard: null,
	},
	egoinflate: {
		inherit: true,
		isNonstandard: null,
	},
	pepperbreath: {
		inherit: true,
		isNonstandard: null,
	},
	novablast: {
		inherit: true,
		isNonstandard: null,
	},
	megaclaw: {
		inherit: true,
		isNonstandard: null,
	},
	gigadestroyer: {
		inherit: true,
		isNonstandard: null,
	},
	terradestroyer: {
		inherit: true,
		isNonstandard: null,
	},
	overflame: {
		inherit: true,
		isNonstandard: null,
	},
	revengeflame: {
		inherit: true,
		isNonstandard: null,
	},
	megatonpunch: {
		inherit: true,
		isNonstandard: null,
	},
	hailball: {
		inherit: true,
		isNonstandard: null,
	},
	fieryslash: {
		inherit: true,
		isNonstandard: null,
	},
	gaiaforce: {
		inherit: true,
		isNonstandard: null,
	},
	greattornado: {
		inherit: true,
		isNonstandard: null,
	},
	groundzero: {
		inherit: true,
		isNonstandard: null,
	},
	buffalobreathe: {
		inherit: true,
		isNonstandard: null,
	},
	thiefstar: {
		inherit: true,
		isNonstandard: null,
	},
	thunderhorn: {
		inherit: true,
		isNonstandard: null,
	},
	samael: {
		inherit: true,
		isNonstandard: null,
	},
	maxsnooze: {
		inherit: true,
		isNonstandard: null,
	},
	chistrike: {
		inherit: true,
		isNonstandard: null,
	},
	steelsurge: {
		inherit: true,
		isNonstandard: null,
	},
	superimpact: {
		inherit: true,
		isNonstandard: null,
	},
	derangedburst: {
		inherit: true,
		isNonstandard: null,
	},
	darkresolve: {
		inherit: true,
		isNonstandard: null,
	},
	regrettrident: {
		inherit: true,
		isNonstandard: null,
	},
	closebook: {
		inherit: true,
		isNonstandard: null,
	},
	bloodgun: {
		inherit: true,
		isNonstandard: null,
	},
	toyflame: {
		inherit: true,
		isNonstandard: null,
	},
	slowattack: {
		inherit: true,
		isNonstandard: null,
	},
	powerdownkick: {
		inherit: true,
		isNonstandard: null,
	},
	blasphemousice: {
		inherit: true,
		isNonstandard: null,
	},
	conveyorbelt: {
		inherit: true,
		isNonstandard: null,
	},
	pyrophobia: {
		inherit: true,
		isNonstandard: null,
	},
	universation: {
		inherit: true,
		isNonstandard: null,
	},
	beartrap: {
		inherit: true,
		isNonstandard: null,
	},
	vibecheck: {
		inherit: true,
		isNonstandard: null,
	},
	starlightexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	purgeshine: {
		inherit: true,
		isNonstandard: null,
	},
	howlingblaster: {
		inherit: true,
		isNonstandard: null,
	},
	gracecrossfreezer: {
		inherit: true,
		isNonstandard: null,
	},
	zeedcannon: {
		inherit: true,
		isNonstandard: null,
	},
	sewing: {
		inherit: true,
		isNonstandard: null,
	},
	wifebeater: {
		inherit: true,
		isNonstandard: null,
	},
	lightninggun: {
		inherit: true,
		isNonstandard: null,
	},
	coconutpunch: {
		inherit: true,
		isNonstandard: null,
	},
	kissofbreath: {
		inherit: true,
		isNonstandard: null,
	},
	lovewhip: {
		inherit: true,
		isNonstandard: null,
	},
	tequilapunch: {
		inherit: true,
		isNonstandard: null,
	},
	sunyaslash: {
		inherit: true,
		isNonstandard: null,
	},
	doublespin: {
		inherit: true,
		isNonstandard: null,
	},
	megashock: {
		inherit: true,
		isNonstandard: null,
	},
	devastate: {
		inherit: true,
		isNonstandard: null,
	},
	magnetforce: {
		inherit: true,
		isNonstandard: null,
	},
	geoimpact: {
		inherit: true,
		isNonstandard: null,
	},
	magmaring: {
		inherit: true,
		isNonstandard: null,
	},
	kaleidostorm: {
		inherit: true,
		isNonstandard: null,
	},
	glide: {
		inherit: true,
		isNonstandard: null,
	},
	ultragiga: {
		inherit: true,
		isNonstandard: null,
	},
	fart: {
		inherit: true,
		isNonstandard: null,
	},
	holocaust: {
		inherit: true,
		isNonstandard: null,
	},
	fabricsoftener: {
		inherit: true,
		isNonstandard: null,
	},
	kawaiilook: {
		inherit: true,
		isNonstandard: null,
	},
	oceanlove: {
		inherit: true,
		isNonstandard: null,
	},
	mochihammer: {
		inherit: true,
		isNonstandard: null,
	},
	foodtackle: {
		inherit: true,
		isNonstandard: null,
	},
	draineedle: {
		inherit: true,
		isNonstandard: null,
	},
	megalocrunch: {
		inherit: true,
		isNonstandard: null,
	},
	baconrush: {
		inherit: true,
		isNonstandard: null,
	},
	fastfood: {
		inherit: true,
		isNonstandard: null,
	},
	eggacid: {
		inherit: true,
		isNonstandard: null,
	},
	pizzaspin: {
		inherit: true,
		isNonstandard: null,
	},
	sushimissile: {
		inherit: true,
		isNonstandard: null,
	},
	foodpoisoning: {
		inherit: true,
		isNonstandard: null,
	},
	noodlewhip: {
		inherit: true,
		isNonstandard: null,
	},
	prediction: {
		inherit: true,
		isNonstandard: null,
	},
	spoil: {
		inherit: true,
		isNonstandard: null,
	},
	topsytackle: {
		inherit: true,
		isNonstandard: null,
	},
	barking: {
		inherit: true,
		isNonstandard: null,
	},
	stonehead: {
		inherit: true,
		isNonstandard: null,
	},
	endvoiddream: {
		inherit: true,
		isNonstandard: null,
	},
	searingquills: {
		inherit: true,
		isNonstandard: null,
	},
	desertstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sadistwhip: {
		inherit: true,
		isNonstandard: null,
	},
	whiplash: {
		inherit: true,
		isNonstandard: null,
	},
	flutter: {
		inherit: true,
		isNonstandard: null,
	},
	nectartap: {
		inherit: true,
		isNonstandard: null,
	},
	hocuspinkus: {
		inherit: true,
		isNonstandard: null,
	},
	exorcism: {
		inherit: true,
		isNonstandard: null,
	},
	valaura: {
		inherit: true,
		isNonstandard: null,
	},
	nosferatu: {
		inherit: true,
		isNonstandard: null,
	},
	finishingmove: {
		inherit: true,
		isNonstandard: null,
	},
	grandslam: {
		inherit: true,
		isNonstandard: null,
	},
	freezingkiss: {
		inherit: true,
		isNonstandard: null,
	},
	gaussgun: {
		inherit: true,
		isNonstandard: null,
	},
	gnashteeth: {
		inherit: true,
		isNonstandard: null,
	},
	tremble: {
		inherit: true,
		isNonstandard: null,
	},
	feverishsmooch: {
		inherit: true,
		isNonstandard: null,
	},
	drainslap: {
		inherit: true,
		isNonstandard: null,
	},
	wakeupbeam: {
		inherit: true,
		isNonstandard: null,
	},
	milkcannon: {
		inherit: true,
		isNonstandard: null,
	},
	stormwatch: {
		inherit: true,
		isNonstandard: null,
	},
	rocket: {
		inherit: true,
		isNonstandard: null,
	},
	cooldownmode: {
		inherit: true,
		isNonstandard: null,
	},
	darkcutter: {
		inherit: true,
		isNonstandard: null,
	},
	armageddon: {
		inherit: true,
		isNonstandard: null,
	},
	concentrate: {
		inherit: true,
		isNonstandard: null,
	},
	neurotoxin: {
		inherit: true,
		isNonstandard: null,
	},
	numbingbite: {
		inherit: true,
		isNonstandard: null,
	},
	firstkiss: {
		inherit: true,
		isNonstandard: null,
	},
	boostermode: {
		inherit: true,
		isNonstandard: null,
	},
	scannermode: {
		inherit: true,
		isNonstandard: null,
	},
	shieldmode: {
		inherit: true,
		isNonstandard: null,
	},
	hypermode: {
		inherit: true,
		isNonstandard: null,
	},
	licorwhip: {
		inherit: true,
		isNonstandard: null,
	},
	appleturnover: {
		inherit: true,
		isNonstandard: null,
	},
	sugarbeam: {
		inherit: true,
		isNonstandard: null,
	},
	karatechoc: {
		inherit: true,
		isNonstandard: null,
	},
	riceball: {
		inherit: true,
		isNonstandard: null,
	},
	randommode: {
		inherit: true,
		isNonstandard: null,
	},
	powerdrill: {
		inherit: true,
		isNonstandard: null,
	},
	fryingpan: {
		inherit: true,
		isNonstandard: null,
	},
	grill: {
		inherit: true,
		isNonstandard: null,
	},
	dineanddash: {
		inherit: true,
		isNonstandard: null,
	},
	pastarush: {
		inherit: true,
		isNonstandard: null,
	},
	spoiledmilk: {
		inherit: true,
		isNonstandard: null,
	},
	spagettiwrap: {
		inherit: true,
		isNonstandard: null,
	},
	idiotsandwich: {
		inherit: true,
		isNonstandard: null,
	},
	cyberchase: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenweapon: {
		inherit: true,
		isNonstandard: null,
	},
	gunsblazing: {
		inherit: true,
		isNonstandard: null,
	},
	homingbeam: {
		inherit: true,
		isNonstandard: null,
	},
	dedotatedwam: {
		inherit: true,
		isNonstandard: null,
	},
	papermissiles: {
		inherit: true,
		isNonstandard: null,
	},
	magmaguard: {
		inherit: true,
		isNonstandard: null,
	},
	floorislava: {
		inherit: true,
		isNonstandard: null,
	},
	volcanicterrain: {
		inherit: true,
		isNonstandard: null,
	},
	forcefeed: {
		inherit: true,
		isNonstandard: null,
	},
	injector: {
		inherit: true,
		isNonstandard: null,
	},
	indestructible: {
		inherit: true,
		isNonstandard: null,
	},
	rubbershield: {
		inherit: true,
		isNonstandard: null,
	},
	shiftingsands: {
		inherit: true,
		isNonstandard: null,
	},
	firewhip: {
		inherit: true,
		isNonstandard: null,
	},
	glacialrend: {
		inherit: true,
		isNonstandard: null,
	},
	woodpecker: {
		inherit: true,
		isNonstandard: null,
	},
	crippleimpact: {
		inherit: true,
		isNonstandard: null,
	},
	zombiespread: {
		inherit: true,
		isNonstandard: null,
	},
	knockoutpunch: {
		inherit: true,
		isNonstandard: null,
	},
	flowingstrikes: {
		inherit: true,
		isNonstandard: null,
	},
	pheromones: {
		inherit: true,
		isNonstandard: null,
	},
	gravitas: {
		inherit: true,
		isNonstandard: null,
	},
	elastickick: {
		inherit: true,
		isNonstandard: null,
	},
	fightingurge: {
		inherit: true,
		isNonstandard: null,
	},
	bladeofend: {
		inherit: true,
		isNonstandard: null,
	},
	coldheart: {
		inherit: true,
		isNonstandard: null,
	},
	subzerowail: {
		inherit: true,
		isNonstandard: null,
	},
	flamewar: {
		inherit: true,
		isNonstandard: null,
	},
	infectingslash: {
		inherit: true,
		isNonstandard: null,
	},
	divinetemple: {
		inherit: true,
		isNonstandard: null,
	},
	chaotictemple: {
		inherit: true,
		isNonstandard: null,
	},
	psychictemple: {
		inherit: true,
		isNonstandard: null,
	},
	ariessmash: {
		inherit: true,
		isNonstandard: null,
	},
	corpsewave: {
		inherit: true,
		isNonstandard: null,
	},
	eyewall: {
		inherit: true,
		isNonstandard: null,
	},
	magmaquake: {
		inherit: true,
		isNonstandard: null,
	},
	vaporwall: {
		inherit: true,
		isNonstandard: null,
	},
	leostrike: {
		inherit: true,
		isNonstandard: null,
	},
	taurushorns: {
		inherit: true,
		isNonstandard: null,
	},
	virgoheart: {
		inherit: true,
		isNonstandard: null,
	},
	capricornhorn: {
		inherit: true,
		isNonstandard: null,
	},
	geministars: {
		inherit: true,
		isNonstandard: null,
	},
	cbt: {
		inherit: true,
		isNonstandard: null,
	},
	reversewounds: {
		inherit: true,
		isNonstandard: null,
	},
	librabeam: {
		inherit: true,
		isNonstandard: null,
	},
	shiver: {
		inherit: true,
		isNonstandard: null,
	},
	bidibidibidi: {
		inherit: true,
		isNonstandard: null,
	},
	ornithophobia: {
		inherit: true,
		isNonstandard: null,
	},
	hornyattack: {
		inherit: true,
		isNonstandard: null,
	},
	permafrost: {
		inherit: true,
		isNonstandard: null,
	},
	bodybreak: {
		inherit: true,
		isNonstandard: null,
	},
	pitfall: {
		inherit: true,
		isNonstandard: null,
	},
	mines: {
		inherit: true,
		isNonstandard: null,
	},
	fastforward: {
		inherit: true,
		isNonstandard: null,
	},
	aquariusflow: {
		inherit: true,
		isNonstandard: null,
	},
	viruspropogate: {
		inherit: true,
		isNonstandard: null,
	},
	zombievirus: {
		inherit: true,
		isNonstandard: null,
	},
	cancerclaws: {
		inherit: true,
		isNonstandard: null,
	},
	scorpiosting: {
		inherit: true,
		isNonstandard: null,
	},
	piscesstars: {
		inherit: true,
		isNonstandard: null,
	},
	ophiuchusbind: {
		inherit: true,
		isNonstandard: null,
	},
	bubblebomb: {
		inherit: true,
		isNonstandard: null,
	},
	frothguard: {
		inherit: true,
		isNonstandard: null,
	},
	honeydrip: {
		inherit: true,
		isNonstandard: null,
	},
	honeybeam: {
		inherit: true,
		isNonstandard: null,
	},
	honeydoom: {
		inherit: true,
		isNonstandard: null,
	},
	raspberrytongue: {
		inherit: true,
		isNonstandard: null,
	},
	honeydewblast: {
		inherit: true,
		isNonstandard: null,
	},
	raspberrywhistle: {
		inherit: true,
		isNonstandard: null,
	},
	tm50: {
		inherit: true,
		isNonstandard: null,
	},
	tm05: {
		inherit: true,
		isNonstandard: null,
	},
	tm41: {
		inherit: true,
		isNonstandard: null,
	},
	tm54: {
		inherit: true,
		isNonstandard: null,
	},
	tm18: {
		inherit: true,
		isNonstandard: null,
	},
	vulcanhammer: {
		inherit: true,
		isNonstandard: null,
	},
	birdflu: {
		inherit: true,
		isNonstandard: null,
	},
	steamsport: {
		inherit: true,
		isNonstandard: null,
	},
	steamtail: {
		inherit: true,
		isNonstandard: null,
	},
	sensingsteam: {
		inherit: true,
		isNonstandard: null,
	},
	virginsgrace: {
		inherit: true,
		isNonstandard: null,
	},
	handoffate: {
		inherit: true,
		isNonstandard: null,
	},
	testament: {
		inherit: true,
		isNonstandard: null,
	},
	sevenstarstrike: {
		inherit: true,
		isNonstandard: null,
	},
	hallowedknuckle: {
		inherit: true,
		isNonstandard: null,
	},
	catlaser: {
		inherit: true,
		isNonstandard: null,
	},
	onetwonekopunch: {
		inherit: true,
		isNonstandard: null,
	},
	nekorush: {
		inherit: true,
		isNonstandard: null,
	},
	nekofinish: {
		inherit: true,
		isNonstandard: null,
	},
	sweeping: {
		inherit: true,
		isNonstandard: null,
	},
	angelwings: {
		inherit: true,
		isNonstandard: null,
	},
	holykick: {
		inherit: true,
		isNonstandard: null,
	},
	dragonfire: {
		inherit: true,
		isNonstandard: null,
	},
	edenspear: {
		inherit: true,
		isNonstandard: null,
	},
	sefirotcrystal: {
		inherit: true,
		isNonstandard: null,
	},
	dragonwings: {
		inherit: true,
		isNonstandard: null,
	},
	funeralpyre: {
		inherit: true,
		isNonstandard: null,
	},
	chaoslabyrintho: {
		inherit: true,
		isNonstandard: null,
	},
	electricfence: {
		inherit: true,
		isNonstandard: null,
	},
	starfield: {
		inherit: true,
		isNonstandard: null,
	},
	mudbath: {
		inherit: true,
		isNonstandard: null,
	},
	beastkingfist: {
		inherit: true,
		isNonstandard: null,
	},
	oxygendestroyer: {
		inherit: true,
		isNonstandard: null,
	},
	triplelightning: {
		inherit: true,
		isNonstandard: null,
	},
	gravitybeams: {
		inherit: true,
		isNonstandard: null,
	},
	thekingoffist: {
		inherit: true,
		isNonstandard: null,
	},
	infinityarrow: {
		inherit: true,
		isNonstandard: null,
	},
	wetkiss: {
		inherit: true,
		isNonstandard: null,
	},
	toxickiss: {
		inherit: true,
		isNonstandard: null,
	},
	noisykiss: {
		inherit: true,
		isNonstandard: null,
	},
	powderveil: {
		inherit: true,
		isNonstandard: null,
	},
	healingchime: {
		inherit: true,
		isNonstandard: null,
	},
	dawnlights: {
		inherit: true,
		isNonstandard: null,
	},
	breakingonslaught: {
		inherit: true,
		isNonstandard: null,
	},
	goblinbomb: {
		inherit: true,
		isNonstandard: null,
	},
	goblinstrike: {
		inherit: true,
		isNonstandard: null,
	},
	pummelwack: {
		inherit: true,
		isNonstandard: null,
	},
	evilhurricane: {
		inherit: true,
		isNonstandard: null,
	},
	invasion: {
		inherit: true,
		isNonstandard: null,
	},
	anaphylacticshock: {
		inherit: true,
		isNonstandard: null,
	},
	anxiety: {
		inherit: true,
		isNonstandard: null,
	},
	nightmaresyndrome: {
		inherit: true,
		isNonstandard: null,
	},
	gigo: {
		inherit: true,
		isNonstandard: null,
	},
	blackdeathcloud: {
		inherit: true,
		isNonstandard: null,
	},
	kooumeijin: {
		inherit: true,
		isNonstandard: null,
	},
	genbamukon: {
		inherit: true,
		isNonstandard: null,
	},
	soulcoreattack: {
		inherit: true,
		isNonstandard: null,
	},
	flowerward: {
		inherit: true,
		isNonstandard: null,
	},
	madnessmerrygoround: {
		inherit: true,
		isNonstandard: null,
	},
	olympiaslash: {
		inherit: true,
		isNonstandard: null,
	},
	shrinkwrap: {
		inherit: true,
		isNonstandard: null,
	},
	spacevirus: {
		inherit: true,
		isNonstandard: null,
	},
	blowkiss: {
		inherit: true,
		isNonstandard: null,
	},
	applylipstick: {
		inherit: true,
		isNonstandard: null,
	},
	speakerblast: {
		inherit: true,
		isNonstandard: null,
	},
	guardianleaf: {
		inherit: true,
		isNonstandard: null,
	},
	rapidgrowth: {
		inherit: true,
		isNonstandard: null,
	},
	sharpshoot: {
		inherit: true,
		isNonstandard: null,
	},
	volcanoburst: {
		inherit: true,
		isNonstandard: null,
	},
	plasticwrap: {
		inherit: true,
		isNonstandard: null,
	},
	quarry: {
		inherit: true,
		isNonstandard: null,
	},
	coldshoulder: {
		inherit: true,
		isNonstandard: null,
	},
	arboreum: {
		inherit: true,
		isNonstandard: null,
	},
	tohachigame: {
		inherit: true,
		isNonstandard: null,
	},
	sealingtalisman: {
		inherit: true,
		isNonstandard: null,
	},
	bonhitsusen: {
		inherit: true,
		isNonstandard: null,
	},
	brushstrike: {
		inherit: true,
		isNonstandard: null,
	},
	kongoushakujou: {
		inherit: true,
		isNonstandard: null,
	},
	deserttree: {
		inherit: true,
		isNonstandard: null,
	},
	snowman: {
		inherit: true,
		isNonstandard: null,
	},
	shatter: {
		inherit: true,
		isNonstandard: null,
	},
	gumburst: {
		inherit: true,
		isNonstandard: null,
	},
	treasurechest: {
		inherit: true,
		isNonstandard: null,
	},
	gamble: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearrain: {
		inherit: true,
		isNonstandard: null,
	},
	tipfedora: {
		inherit: true,
		isNonstandard: null,
	},
	pulledpunch: {
		inherit: true,
		isNonstandard: null,
	},
	trolling: {
		inherit: true,
		isNonstandard: null,
	},
	reload: {
		inherit: true,
		isNonstandard: null,
	},
	hallucinogen: {
		inherit: true,
		isNonstandard: null,
	},
	clearskies: {
		inherit: true,
		isNonstandard: null,
	},
	vitalcrush: {
		inherit: true,
		isNonstandard: null,
	},
	fivestarstrike: {
		inherit: true,
		isNonstandard: null,
	},
	annoyance: {
		inherit: true,
		isNonstandard: null,
	},
	acidbath: {
		inherit: true,
		isNonstandard: null,
	},
	darkgather: {
		inherit: true,
		isNonstandard: null,
	},
	undeadrespite: {
		inherit: true,
		isNonstandard: null,
	},
	studynotes: {
		inherit: true,
		isNonstandard: null,
	},
	papersharpening: {
		inherit: true,
		isNonstandard: null,
	},
	moltentears: {
		inherit: true,
		isNonstandard: null,
	},
	curryburst: {
		inherit: true,
		isNonstandard: null,
	},
	dildohorn: {
		inherit: true,
		isNonstandard: null,
	},
	hyperrubber: {
		inherit: true,
		isNonstandard: null,
	},
	movecatalog: {
		inherit: true,
		isNonstandard: null,
	},
	duedate: {
		inherit: true,
		isNonstandard: null,
	},
	bookstack: {
		inherit: true,
		isNonstandard: null,
	},
	learnmove: {
		inherit: true,
		isNonstandard: null,
	},
	lavaburst: {
		inherit: true,
		isNonstandard: null,
	},
	alchemy: {
		inherit: true,
		isNonstandard: null,
	},
	pulpstream: {
		inherit: true,
		isNonstandard: null,
	},
	trainingroom: {
		inherit: true,
		isNonstandard: null,
	},
	nitpick: {
		inherit: true,
		isNonstandard: null,
	},
	aqueduct: {
		inherit: true,
		isNonstandard: null,
	},
	restinpeace: {
		inherit: true,
		isNonstandard: null,
	},
	speedbump: {
		inherit: true,
		isNonstandard: null,
	},
	berrygrowth: {
		inherit: true,
		isNonstandard: null,
	},
	cyberspace: {
		inherit: true,
		isNonstandard: null,
	},
	maxreplenish: {
		inherit: true,
		isNonstandard: null,
	},
	recyclebeam: {
		inherit: true,
		isNonstandard: null,
	},
	guro: {
		inherit: true,
		isNonstandard: null,
	},
	predationplant: {
		inherit: true,
		isNonstandard: null,
	},
	schorchingsting: {
		inherit: true,
		isNonstandard: null,
	},
	tiedup: {
		inherit: true,
		isNonstandard: null,
	},
	gemmine: {
		inherit: true,
		isNonstandard: null,
	},
	choiceknit: {
		inherit: true,
		isNonstandard: null,
	},
	gemcreate: {
		inherit: true,
		isNonstandard: null,
	},
	balloonparty: {
		inherit: true,
		isNonstandard: null,
	},
	ultimatum: {
		inherit: true,
		isNonstandard: null,
	},
	initiate: {
		inherit: true,
		isNonstandard: null,
	},
	tapout: {
		inherit: true,
		isNonstandard: null,
	},
	pitstop: {
		inherit: true,
		isNonstandard: null,
	},
	lightpulse: {
		inherit: true,
		isNonstandard: null,
	},
	medievalwind: {
		inherit: true,
		isNonstandard: null,
	},
	dragonwish: {
		inherit: true,
		isNonstandard: null,
	},
	spellbind: {
		inherit: true,
		isNonstandard: null,
	},
	snowballfight: {
		inherit: true,
		isNonstandard: null,
	},
	berrydrink: {
		inherit: true,
		isNonstandard: null,
	},
	seismickick: {
		inherit: true,
		isNonstandard: null,
	},
	frostkick: {
		inherit: true,
		isNonstandard: null,
	},
	dustkick: {
		inherit: true,
		isNonstandard: null,
	},
	snowballpunch: {
		inherit: true,
		isNonstandard: null,
	},
	eatingchomp: {
		inherit: true,
		isNonstandard: null,
	},
	woodcannon: {
		inherit: true,
		isNonstandard: null,
	},
	afterimage: {
		inherit: true,
		isNonstandard: null,
	},
	blight: {
		inherit: true,
		isNonstandard: null,
	},
	mysticchime: {
		inherit: true,
		isNonstandard: null,
	},
	dropguard: {
		inherit: true,
		isNonstandard: null,
	},
	barkpress: {
		inherit: true,
		isNonstandard: null,
	},
	corrosivespray: {
		inherit: true,
		isNonstandard: null,
	},
	numbinginjection: {
		inherit: true,
		isNonstandard: null,
	},
	skidout: {
		inherit: true,
		isNonstandard: null,
	},
	glitter: {
		inherit: true,
		isNonstandard: null,
	},
	glitterbomb: {
		inherit: true,
		isNonstandard: null,
	},
	pixiefangs: {
		inherit: true,
		isNonstandard: null,
	},
	tag: {
		inherit: true,
		isNonstandard: null,
	},
	imprint: {
		inherit: true,
		isNonstandard: null,
	},
	photocopy: {
		inherit: true,
		isNonstandard: null,
	},
	cryptomine: {
		inherit: true,
		isNonstandard: null,
	},
	woodpike: {
		inherit: true,
		isNonstandard: null,
	},
	poisonspit: {
		inherit: true,
		isNonstandard: null,
	},
	lifeline: {
		inherit: true,
		isNonstandard: null,
	},
	exorcise: {
		inherit: true,
		isNonstandard: null,
	},
	antivenom: {
		inherit: true,
		isNonstandard: null,
	},
	aimforthehorn: {
		inherit: true,
		isNonstandard: null,
	},
	wyverncry: {
		inherit: true,
		isNonstandard: null,
	},
	dogfight: {
		inherit: true,
		isNonstandard: null,
	},
	dragonvenom: {
		inherit: true,
		isNonstandard: null,
	},
	viralflames: {
		inherit: true,
		isNonstandard: null,
	},
	flyingsport: {
		inherit: true,
		isNonstandard: null,
	},
	pandemic: {
		inherit: true,
		isNonstandard: null,
	},
	icesport: {
		inherit: true,
		isNonstandard: null,
	},
	fearitself: {
		inherit: true,
		isNonstandard: null,
	},
	antiectpunch: {
		inherit: true,
		isNonstandard: null,
	},
	dryspell: {
		inherit: true,
		isNonstandard: null,
	},
	chargedgrease: {
		inherit: true,
		isNonstandard: null,
	},
	oilsmack: {
		inherit: true,
		isNonstandard: null,
	},
	gorillaarm: {
		inherit: true,
		isNonstandard: null,
	},
	minihammer: {
		inherit: true,
		isNonstandard: null,
	},
	slitwrists: {
		inherit: true,
		isNonstandard: null,
	},
	lumber: {
		inherit: true,
		isNonstandard: null,
	},
	clumsyswing: {
		inherit: true,
		isNonstandard: null,
	},
	lazybreak: {
		inherit: true,
		isNonstandard: null,
	},
	openstrike: {
		inherit: true,
		isNonstandard: null,
	},
	powerarena: {
		inherit: true,
		isNonstandard: null,
	},
	swarm: {
		inherit: true,
		isNonstandard: null,
	},
	irondust: {
		inherit: true,
		isNonstandard: null,
	},
	greasegun: {
		inherit: true,
		isNonstandard: null,
	},
	glasseater: {
		inherit: true,
		isNonstandard: null,
	},
	magmaslash: {
		inherit: true,
		isNonstandard: null,
	},
	greaseflake: {
		inherit: true,
		isNonstandard: null,
	},
	selffatten: {
		inherit: true,
		isNonstandard: null,
	},
	greasebubble: {
		inherit: true,
		isNonstandard: null,
	},
	deceptivefan: {
		inherit: true,
		isNonstandard: null,
	},
	fatslam: {
		inherit: true,
		isNonstandard: null,
	},
	corrupt: {
		inherit: true,
		isNonstandard: null,
	},
	maniachowl: {
		inherit: true,
		isNonstandard: null,
	},
	unhingedhowl: {
		inherit: true,
		isNonstandard: null,
	},
	heatseekcrawl: {
		inherit: true,
		isNonstandard: null,
	},
	greasepunch: {
		inherit: true,
		isNonstandard: null,
	},
	frigerate: {
		inherit: true,
		isNonstandard: null,
	},
	toxify: {
		inherit: true,
		isNonstandard: null,
	},
	simplify: {
		inherit: true,
		isNonstandard: null,
	},
	cursedflare: {
		inherit: true,
		isNonstandard: null,
	},
	autophobia: {
		inherit: true,
		isNonstandard: null,
	},
	terrainball: {
		inherit: true,
		isNonstandard: null,
	},
	soulbarrier: {
		inherit: true,
		isNonstandard: null,
	},
	echolocation: {
		inherit: true,
		isNonstandard: null,
	},
	barrierburst: {
		inherit: true,
		isNonstandard: null,
	},
	sleepwalk: {
		inherit: true,
		isNonstandard: null,
	},
	glassceiling: {
		inherit: true,
		isNonstandard: null,
	},
	wallbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	pressuretime: {
		inherit: true,
		isNonstandard: null,
	},
	graveyard: {
		inherit: true,
		isNonstandard: null,
	},
	sweetcannon: {
		inherit: true,
		isNonstandard: null,
	},
	plainterrain: {
		inherit: true,
		isNonstandard: null,
	},
	matingseason: {
		inherit: true,
		isNonstandard: null,
	},
	factory: {
		inherit: true,
		isNonstandard: null,
	},
	luckyroom: {
		inherit: true,
		isNonstandard: null,
	},
	homersimpson: {
		inherit: true,
		isNonstandard: null,
	},
	birdflock: {
		inherit: true,
		isNonstandard: null,
	},
	leechingfangs: {
		inherit: true,
		isNonstandard: null,
	},
	recycleterrain: {
		inherit: true,
		isNonstandard: null,
	},
	thickfog: {
		inherit: true,
		isNonstandard: null,
	},
	invisibility: {
		inherit: true,
		isNonstandard: null,
	},
	bloodrain: {
		inherit: true,
		isNonstandard: null,
	},
	bloodbathe: {
		inherit: true,
		isNonstandard: null,
	},
	bloodshower: {
		inherit: true,
		isNonstandard: null,
	},
	poisonlovepill: {
		inherit: true,
		isNonstandard: null,
	},
	telekrunch: {
		inherit: true,
		isNonstandard: null,
	},
	vibrantcharge: {
		inherit: true,
		isNonstandard: null,
	},
	lavadrip: {
		inherit: true,
		isNonstandard: null,
	},
	frostfang: {
		inherit: true,
		isNonstandard: null,
	},
	eeriebubbles: {
		inherit: true,
		isNonstandard: null,
	},
	adhesivewave: {
		inherit: true,
		isNonstandard: null,
	},
	woundbite: {
		inherit: true,
		isNonstandard: null,
	},
	violentrage: {
		inherit: true,
		isNonstandard: null,
	},
	hypnopendulum: {
		inherit: true,
		isNonstandard: null,
	},
	oceanhearts: {
		inherit: true,
		isNonstandard: null,
	},
	ragingscales: {
		inherit: true,
		isNonstandard: null,
	},
	disturbancescales: {
		inherit: true,
		isNonstandard: null,
	},
	shuttlelaunch: {
		inherit: true,
		isNonstandard: null,
	},
	maxwildfire: {
		inherit: true,
		isNonstandard: null,
	},
	maxterror: {
		inherit: true,
		isNonstandard: null,
	},
	auroraresonance: {
		inherit: true,
		isNonstandard: null,
	},
	maxmalodor: {
		inherit: true,
		isNonstandard: null,
	},
	stunshock: {
		inherit: true,
		isNonstandard: null,
	},
	dracodepletion: {
		inherit: true,
		isNonstandard: null,
	},
	centiferno: {
		inherit: true,
		isNonstandard: null,
	},
	imageofthebeast: {
		inherit: true,
		isNonstandard: null,
	},
	coiloftheworld: {
		inherit: true,
		isNonstandard: null,
	},
	cyberspacerise: {
		inherit: true,
		isNonstandard: null,
	},
	blackplague: {
		inherit: true,
		isNonstandard: null,
	},
	darkagehex: {
		inherit: true,
		isNonstandard: null,
	},
	technologyscoil: {
		inherit: true,
		isNonstandard: null,
	},
	webfield: {
		inherit: true,
		isNonstandard: null,
	},
	aquaweb: {
		inherit: true,
		isNonstandard: null,
	},
	brokenguillotine: {
		inherit: true,
		isNonstandard: null,
	},
	letthemeatcake: {
		inherit: true,
		isNonstandard: null,
	},
	falsedelys: {
		inherit: true,
		isNonstandard: null,
	},
	knightofowner: {
		inherit: true,
		isNonstandard: null,
	},
	trojanrush: {
		inherit: true,
		isNonstandard: null,
	},
	tricktackle: {
		inherit: true,
		isNonstandard: null,
	},
	manaverse: {
		inherit: true,
		isNonstandard: null,
	},
	defensecharm: {
		inherit: true,
		isNonstandard: null,
	},
	magiccape: {
		inherit: true,
		isNonstandard: null,
	},
	bindingcircle: {
		inherit: true,
		isNonstandard: null,
	},
	mysticlock: {
		inherit: true,
		isNonstandard: null,
	},
	copyright: {
		inherit: true,
		isNonstandard: null,
	},
	stagehelper: {
		inherit: true,
		isNonstandard: null,
	},
	darksport: {
		inherit: true,
		isNonstandard: null,
	},
	darkscreen: {
		inherit: true,
		isNonstandard: null,
	},
	claustrowall: {
		inherit: true,
		isNonstandard: null,
	},
	bouncycastle: {
		inherit: true,
		isNonstandard: null,
	},
	spiritstorm: {
		inherit: true,
		isNonstandard: null,
	},
	fallenbattlefield: {
		inherit: true,
		isNonstandard: null,
	},
	death: {
		inherit: true,
		isNonstandard: null,
	},
	apexmutation: {
		inherit: true,
		isNonstandard: null,
	},
	nadirmutation: {
		inherit: true,
		isNonstandard: null,
	},
	selfirradiate: {
		inherit: true,
		isNonstandard: null,
	},
	radiotherapy: {
		inherit: true,
		isNonstandard: null,
	},
	chemotherapy: {
		inherit: true,
		isNonstandard: null,
	},
	slugsmooch: {
		inherit: true,
		isNonstandard: null,
	},
	hostslicer: {
		inherit: true,
		isNonstandard: null,
	},
	infooverload: {
		inherit: true,
		isNonstandard: null,
	},
	selfishdrain: {
		inherit: true,
		isNonstandard: null,
	},
	spiritcutter: {
		inherit: true,
		isNonstandard: null,
	},
	fullmoon: {
		inherit: true,
		isNonstandard: null,
	},
	eclipse: {
		inherit: true,
		isNonstandard: null,
	},
	armorcrash: {
		inherit: true,
		isNonstandard: null,
	},
	chlorobeam: {
		inherit: true,
		isNonstandard: null,
	},
	omegaeclipse: {
		inherit: true,
		isNonstandard: null,
	},
	frozeniceberg: {
		inherit: true,
		isNonstandard: null,
	},
	glassshot: {
		inherit: true,
		isNonstandard: null,
	},
	anytime: {
		inherit: true,
		isNonstandard: null,
	},
	throwvoice: {
		inherit: true,
		isNonstandard: null,
	},
	glasschop: {
		inherit: true,
		isNonstandard: null,
	},
	midnightblade: {
		inherit: true,
		isNonstandard: null,
	},
	abruption: {
		inherit: true,
		isNonstandard: null,
	},
	cough: {
		inherit: true,
		isNonstandard: null,
	},
	soupsplash: {
		inherit: true,
		isNonstandard: null,
	},
	coronavirus: {
		inherit: true,
		isNonstandard: null,
	},
	apocalypsepunch: {
		inherit: true,
		isNonstandard: null,
	},
	timestall: {
		inherit: true,
		isNonstandard: null,
	},
	acidsport: {
		inherit: true,
		isNonstandard: null,
	},
	tauroskiathermokrasia: {
		inherit: true,
		isNonstandard: null,
	},
	wildbeastslogic: {
		inherit: true,
		isNonstandard: null,
	},
	nurseofsteel: {
		inherit: true,
		isNonstandard: null,
	},
	nightingalepledge: {
		inherit: true,
		isNonstandard: null,
	},
	lamortespoir: {
		inherit: true,
		isNonstandard: null,
	},
	aciddrench: {
		inherit: true,
		isNonstandard: null,
	},
	headrush: {
		inherit: true,
		isNonstandard: null,
	},
	fintanfinegas: {
		inherit: true,
		isNonstandard: null,
	},
	uiscebeatha: {
		inherit: true,
		isNonstandard: null,
	},
	macanluin: {
		inherit: true,
		isNonstandard: null,
	},
	meretrixmaterconflag: {
		inherit: true,
		isNonstandard: null,
	},
	mumyousandanzuki: {
		inherit: true,
		isNonstandard: null,
	},
	flagofsincerity: {
		inherit: true,
		isNonstandard: null,
	},
	queenofvictory: {
		inherit: true,
		isNonstandard: null,
	},
	swordofboudica: {
		inherit: true,
		isNonstandard: null,
	},
	chariotofboudica: {
		inherit: true,
		isNonstandard: null,
	},
	lentumdomusillustrius: {
		inherit: true,
		isNonstandard: null,
	},
	masshysteria: {
		inherit: true,
		isNonstandard: null,
	},
	flucticulusdiana: {
		inherit: true,
		isNonstandard: null,
	},
	shadowarrow: {
		inherit: true,
		isNonstandard: null,
	},
	lovearrow: {
		inherit: true,
		isNonstandard: null,
	},
	mikotto: {
		inherit: true,
		isNonstandard: null,
	},
	tristaramoremio: {
		inherit: true,
		isNonstandard: null,
	},
	behemoth: {
		inherit: true,
		isNonstandard: null,
	},
	gorillapower: {
		inherit: true,
		isNonstandard: null,
	},
	undeathlife: {
		inherit: true,
		isNonstandard: null,
	},
	soulleecher: {
		inherit: true,
		isNonstandard: null,
	},
	consumerism: {
		inherit: true,
		isNonstandard: null,
	},
	thedevourer: {
		inherit: true,
		isNonstandard: null,
	},
	replenigger: {
		inherit: true,
		isNonstandard: null,
	},
	jewrocks: {
		inherit: true,
		isNonstandard: null,
	},
	salmonleap: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorize: {
		inherit: true,
		isNonstandard: null,
	},
	drumpalm: {
		inherit: true,
		isNonstandard: null,
	},
	jianhop: {
		inherit: true,
		isNonstandard: null,
	},
	multidirectionblade: {
		inherit: true,
		isNonstandard: null,
	},
	witchrage: {
		inherit: true,
		isNonstandard: null,
	},
	leapoffaith: {
		inherit: true,
		isNonstandard: null,
	},
	lavaquake: {
		inherit: true,
		isNonstandard: null,
	},
	featherarrow: {
		inherit: true,
		isNonstandard: null,
	},
	gangalf: {
		inherit: true,
		isNonstandard: null,
	},
	hotmonkeydicc: {
		inherit: true,
		isNonstandard: null,
	},
	veryhazard: {
		inherit: true,
		isNonstandard: null,
	},
	gangbang: {
		inherit: true,
		isNonstandard: null,
	},
	santamariaanchor: {
		inherit: true,
		isNonstandard: null,
	},
	fabricworld: {
		inherit: true,
		isNonstandard: null,
	},
	vformation: {
		inherit: true,
		isNonstandard: null,
	},
	coralreef: {
		inherit: true,
		isNonstandard: null,
	},
	coralgraze: {
		inherit: true,
		isNonstandard: null,
	},
	coralcannon: {
		inherit: true,
		isNonstandard: null,
	},
	coralblade: {
		inherit: true,
		isNonstandard: null,
	},
	lubricate: {
		inherit: true,
		isNonstandard: null,
	},
	oilskin: {
		inherit: true,
		isNonstandard: null,
	},
	greasebomb: {
		inherit: true,
		isNonstandard: null,
	},
	greasyslap: {
		inherit: true,
		isNonstandard: null,
	},
	evileye: {
		inherit: true,
		isNonstandard: null,
	},
	shadowyeyes: {
		inherit: true,
		isNonstandard: null,
	},
	sporeexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	greasypeck: {
		inherit: true,
		isNonstandard: null,
	},
	oildrill: {
		inherit: true,
		isNonstandard: null,
	},
	pumpjack: {
		inherit: true,
		isNonstandard: null,
	},
	stoke: {
		inherit: true,
		isNonstandard: null,
	},
	rockbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	exhaustflame: {
		inherit: true,
		isNonstandard: null,
	},
	atomicblaster: {
		inherit: true,
		isNonstandard: null,
	},
	radiationblade: {
		inherit: true,
		isNonstandard: null,
	},
	lightningjoust: {
		inherit: true,
		isNonstandard: null,
	},
	shieldofjust: {
		inherit: true,
		isNonstandard: null,
	},
	terriertornado: {
		inherit: true,
		isNonstandard: null,
	},
	dumdumuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	goldentriangle: {
		inherit: true,
		isNonstandard: null,
	},
	burstshot: {
		inherit: true,
		isNonstandard: null,
	},
	numesludge: {
		inherit: true,
		isNonstandard: null,
	},
	pooptoss: {
		inherit: true,
		isNonstandard: null,
	},
	guerillapoop: {
		inherit: true,
		isNonstandard: null,
	},
	raremetalpoop: {
		inherit: true,
		isNonstandard: null,
	},
	lovelyattack: {
		inherit: true,
		isNonstandard: null,
	},
	loveserenade: {
		inherit: true,
		isNonstandard: null,
	},
	darkrecital: {
		inherit: true,
		isNonstandard: null,
	},
	monkeyplay: {
		inherit: true,
		isNonstandard: null,
	},
	lullabybubble: {
		inherit: true,
		isNonstandard: null,
	},
	symphonycrusher: {
		inherit: true,
		isNonstandard: null,
	},
	kobushitone: {
		inherit: true,
		isNonstandard: null,
	},
	needlesquall: {
		inherit: true,
		isNonstandard: null,
	},
	poopdunk: {
		inherit: true,
		isNonstandard: null,
	},
	antigravity: {
		inherit: true,
		isNonstandard: null,
	},
	cowerbehind: {
		inherit: true,
		isNonstandard: null,
	},
	misdirection: {
		inherit: true,
		isNonstandard: null,
	},
	proxy: {
		inherit: true,
		isNonstandard: null,
	},
	frequency: {
		inherit: true,
		isNonstandard: null,
	},
	fortifyally: {
		inherit: true,
		isNonstandard: null,
	},
	timeexchange: {
		inherit: true,
		isNonstandard: null,
	},
	shieldpress: {
		inherit: true,
		isNonstandard: null,
	},
	voltmotor: {
		inherit: true,
		isNonstandard: null,
	},
	pixel: {
		inherit: true,
		isNonstandard: null,
	},
	mittenpound: {
		inherit: true,
		isNonstandard: null,
	},
	scarfwrap: {
		inherit: true,
		isNonstandard: null,
	},
	sweaterslam: {
		inherit: true,
		isNonstandard: null,
	},
	blurryblast: {
		inherit: true,
		isNonstandard: null,
	},
	braver: {
		inherit: true,
		isNonstandard: null,
	},
	arcticemperor: {
		inherit: true,
		isNonstandard: null,
	},
	blowdrygun: {
		inherit: true,
		isNonstandard: null,
	},
	justicebullet: {
		inherit: true,
		isNonstandard: null,
	},
	thunderer: {
		inherit: true,
		isNonstandard: null,
	},
	bigiron: {
		inherit: true,
		isNonstandard: null,
	},
	quickdraw: {
		inherit: true,
		isNonstandard: null,
	},
	revolver: {
		inherit: true,
		isNonstandard: null,
	},
	pilpul: {
		inherit: true,
		isNonstandard: null,
	},
	shepherdcrook: {
		inherit: true,
		isNonstandard: null,
	},
	sheepwool: {
		inherit: true,
		isNonstandard: null,
	},
	matzoball: {
		inherit: true,
		isNonstandard: null,
	},
	eatdango: {
		inherit: true,
		isNonstandard: null,
	},
	dangoball: {
		inherit: true,
		isNonstandard: null,
	},
	phantommaiden: {
		inherit: true,
		isNonstandard: null,
	},
	woodspin: {
		inherit: true,
		isNonstandard: null,
	},
	dreidelspin: {
		inherit: true,
		isNonstandard: null,
	},
	hey: {
		inherit: true,
		isNonstandard: null,
	},
	gimmel: {
		inherit: true,
		isNonstandard: null,
	},
	nun: {
		inherit: true,
		isNonstandard: null,
	},
	shin: {
		inherit: true,
		isNonstandard: null,
	},
	lordchaldeas: {
		inherit: true,
		isNonstandard: null,
	},
	lordcamelot: {
		inherit: true,
		isNonstandard: null,
	},
	rousingresolution: {
		inherit: true,
		isNonstandard: null,
	},
	sgaedearg: {
		inherit: true,
		isNonstandard: null,
	},
	sgaebuidhe: {
		inherit: true,
		isNonstandard: null,
	},
	cyberpunch: {
		inherit: true,
		isNonstandard: null,
	},
	hannukahcandles: {
		inherit: true,
		isNonstandard: null,
	},
	powermorph: {
		inherit: true,
		isNonstandard: null,
	},
	timbit: {
		inherit: true,
		isNonstandard: null,
	},
	icingspray: {
		inherit: true,
		isNonstandard: null,
	},
	icingcannon: {
		inherit: true,
		isNonstandard: null,
	},
	donutring: {
		inherit: true,
		isNonstandard: null,
	},
	trashthrash: {
		inherit: true,
		isNonstandard: null,
	},
	sensualtouch: {
		inherit: true,
		isNonstandard: null,
	},
	mindfogger: {
		inherit: true,
		isNonstandard: null,
	},
	helterskelter: {
		inherit: true,
		isNonstandard: null,
	},
	moonladder: {
		inherit: true,
		isNonstandard: null,
	},
	darknesslove: {
		inherit: true,
		isNonstandard: null,
	},
	phantompain: {
		inherit: true,
		isNonstandard: null,
	},
	paperbind: {
		inherit: true,
		isNonstandard: null,
	},
	requiemfordeath: {
		inherit: true,
		isNonstandard: null,
	},
	symphony: {
		inherit: true,
		isNonstandard: null,
	},
	fleurdelys: {
		inherit: true,
		isNonstandard: null,
	},
	unyieldstance: {
		inherit: true,
		isNonstandard: null,
	},
	rakanfudarakutokai: {
		inherit: true,
		isNonstandard: null,
	},
	tenshinkashouzanmai: {
		inherit: true,
		isNonstandard: null,
	},
	stalkinggaze: {
		inherit: true,
		isNonstandard: null,
	},
	shapeshiftdragon: {
		inherit: true,
		isNonstandard: null,
	},
	ovenslam: {
		inherit: true,
		isNonstandard: null,
	},
	deadheartbeatmelody: {
		inherit: true,
		isNonstandard: null,
	},
	phantasmalpedigree: {
		inherit: true,
		isNonstandard: null,
	},
	cyberphantasy: {
		inherit: true,
		isNonstandard: null,
	},
	febrileinspiration: {
		inherit: true,
		isNonstandard: null,
	},
	ichorofreverie: {
		inherit: true,
		isNonstandard: null,
	},
	meditativesensitivity: {
		inherit: true,
		isNonstandard: null,
	},
	raveshadowflash: {
		inherit: true,
		isNonstandard: null,
	},
	unfeelpatrolspirits: {
		inherit: true,
		isNonstandard: null,
	},
	summonelementals: {
		inherit: true,
		isNonstandard: null,
	},
	elementalgem: {
		inherit: true,
		isNonstandard: null,
	},
	swordofparacelsus: {
		inherit: true,
		isNonstandard: null,
	},
	fireelementals: {
		inherit: true,
		isNonstandard: null,
	},
	waterelementals: {
		inherit: true,
		isNonstandard: null,
	},
	earthelementals: {
		inherit: true,
		isNonstandard: null,
	},
	windelementals: {
		inherit: true,
		isNonstandard: null,
	},
	pashupata: {
		inherit: true,
		isNonstandard: null,
	},
	agnigandiva: {
		inherit: true,
		isNonstandard: null,
	},
	tarasqueshield: {
		inherit: true,
		isNonstandard: null,
	},
	tarasque: {
		inherit: true,
		isNonstandard: null,
	},
	christinechristine: {
		inherit: true,
		isNonstandard: null,
	},
	kinopunch: {
		inherit: true,
		isNonstandard: null,
	},
	skinalive: {
		inherit: true,
		isNonstandard: null,
	},
	innardspunch: {
		inherit: true,
		isNonstandard: null,
	},
	lapithaicaeneus: {
		inherit: true,
		isNonstandard: null,
	},
	poseidonmaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	"3dattack": {
		inherit: true,
		isNonstandard: null,
	},
	digicharge: {
		inherit: true,
		isNonstandard: null,
	},
	install: {
		inherit: true,
		isNonstandard: null,
	},
	shortcut: {
		inherit: true,
		isNonstandard: null,
	},
	highbreaching: {
		inherit: true,
		isNonstandard: null,
	},
	croceamors: {
		inherit: true,
		isNonstandard: null,
	},
	throatheal: {
		inherit: true,
		isNonstandard: null,
	},
	bendwill: {
		inherit: true,
		isNonstandard: null,
	},
	bakingpowderveil: {
		inherit: true,
		isNonstandard: null,
	},
	minddrain: {
		inherit: true,
		isNonstandard: null,
	},
	fourseasons: {
		inherit: true,
		isNonstandard: null,
	},
	julianaboomerang: {
		inherit: true,
		isNonstandard: null,
	},
	goldentornado: {
		inherit: true,
		isNonstandard: null,
	},
	extortionpummel: {
		inherit: true,
		isNonstandard: null,
	},
	destitutiondrain: {
		inherit: true,
		isNonstandard: null,
	},
	unchirush: {
		inherit: true,
		isNonstandard: null,
	},
	voltexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	leylines: {
		inherit: true,
		isNonstandard: null,
	},
	diamonddust: {
		inherit: true,
		isNonstandard: null,
	},
	hatspin: {
		inherit: true,
		isNonstandard: null,
	},
	eaurevoir: {
		inherit: true,
		isNonstandard: null,
	},
	prowl: {
		inherit: true,
		isNonstandard: null,
	},
	dangerousgame: {
		inherit: true,
		isNonstandard: null,
	},
	duriaantiquior: {
		inherit: true,
		isNonstandard: null,
	},
	horseshoecrab: {
		inherit: true,
		isNonstandard: null,
	},
	ammonite: {
		inherit: true,
		isNonstandard: null,
	},
	dimorphodon: {
		inherit: true,
		isNonstandard: null,
	},
	ichthyosaurus: {
		inherit: true,
		isNonstandard: null,
	},
	astrapsteargo: {
		inherit: true,
		isNonstandard: null,
	},
	argonautica: {
		inherit: true,
		isNonstandard: null,
	},
	enviousrage: {
		inherit: true,
		isNonstandard: null,
	},
	sexysquirt: {
		inherit: true,
		isNonstandard: null,
	},
	embrace: {
		inherit: true,
		isNonstandard: null,
	},
	lovebite: {
		inherit: true,
		isNonstandard: null,
	},
	sadomaso: {
		inherit: true,
		isNonstandard: null,
	},
	domesticabuse: {
		inherit: true,
		isNonstandard: null,
	},
	lovehypnosis: {
		inherit: true,
		isNonstandard: null,
	},
	emotionalabuse: {
		inherit: true,
		isNonstandard: null,
	},
	vore: {
		inherit: true,
		isNonstandard: null,
	},
	toughlove: {
		inherit: true,
		isNonstandard: null,
	},
	wetdreams: {
		inherit: true,
		isNonstandard: null,
	},
	xxxsite: {
		inherit: true,
		isNonstandard: null,
	},
	sexysleep: {
		inherit: true,
		isNonstandard: null,
	},
	snowdogechallenge: {
		inherit: true,
		isNonstandard: null,
	},
	yourbestnightmare: {
		inherit: true,
		isNonstandard: null,
	},
	chaossaber: {
		inherit: true,
		isNonstandard: null,
	},
	caldera: {
		inherit: true,
		isNonstandard: null,
	},
	hieroglyphein: {
		inherit: true,
		isNonstandard: null,
	},
	eromangasaurus: {
		inherit: true,
		isNonstandard: null,
	},
	stuffedtackle: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearlance: {
		inherit: true,
		isNonstandard: null,
	},
	aquatichorror: {
		inherit: true,
		isNonstandard: null,
	},
	vocaloid: {
		inherit: true,
		isNonstandard: null,
	},
	chupacabra: {
		inherit: true,
		isNonstandard: null,
	},
	timestop: {
		inherit: true,
		isNonstandard: null,
	},
	privatesquare: {
		inherit: true,
		isNonstandard: null,
	},
	timestasis: {
		inherit: true,
		isNonstandard: null,
	},
	infiniteserpent: {
		inherit: true,
		isNonstandard: null,
	},
	metalbat: {
		inherit: true,
		isNonstandard: null,
	},
	tomitakeflash: {
		inherit: true,
		isNonstandard: null,
	},
	selfharm: {
		inherit: true,
		isNonstandard: null,
	},
	lasagnaattack: {
		inherit: true,
		isNonstandard: null,
	},
	darkpuncture: {
		inherit: true,
		isNonstandard: null,
	},
	pocketdimension: {
		inherit: true,
		isNonstandard: null,
	},
	thecure: {
		inherit: true,
		isNonstandard: null,
	},
	whosonnext: {
		inherit: true,
		isNonstandard: null,
	},
	spaceacid: {
		inherit: true,
		isNonstandard: null,
	},
	kill: {
		inherit: true,
		isNonstandard: null,
	},
	focuslaser: {
		inherit: true,
		isNonstandard: null,
	},
	coldsting: {
		inherit: true,
		isNonstandard: null,
	},
	lingerieattack: {
		inherit: true,
		isNonstandard: null,
	},
	justdesserts: {
		inherit: true,
		isNonstandard: null,
	},
	butterslap: {
		inherit: true,
		isNonstandard: null,
	},
	absolutevenom: {
		inherit: true,
		isNonstandard: null,
	},
	apophismaw: {
		inherit: true,
		isNonstandard: null,
	},
	serpentscure: {
		inherit: true,
		isNonstandard: null,
	},
	hotcocoa: {
		inherit: true,
		isNonstandard: null,
	},
	sip: {
		inherit: true,
		isNonstandard: null,
	},
	thiccslam: {
		inherit: true,
		isNonstandard: null,
	},
	erase: {
		inherit: true,
		isNonstandard: null,
	},
	popcornblast: {
		inherit: true,
		isNonstandard: null,
	},
	breakfastbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	insanitymode: {
		inherit: true,
		isNonstandard: null,
	},
	yourebluenow: {
		inherit: true,
		isNonstandard: null,
	},
	vacuumcut: {
		inherit: true,
		isNonstandard: null,
	},
	kidnap: {
		inherit: true,
		isNonstandard: null,
	},
	storagepower: {
		inherit: true,
		isNonstandard: null,
	},
	firewallpress: {
		inherit: true,
		isNonstandard: null,
	},
	cosmiclaw: {
		inherit: true,
		isNonstandard: null,
	},
	stored: {
		inherit: true,
		isNonstandard: null,
	},
	snacktrap: {
		inherit: true,
		isNonstandard: null,
	},
	discombubbles: {
		inherit: true,
		isNonstandard: null,
	},
	disasterblade: {
		inherit: true,
		isNonstandard: null,
	},
	marshmellowfluff: {
		inherit: true,
		isNonstandard: null,
	},
	hauntedhouse: {
		inherit: true,
		isNonstandard: null,
	},
	floodlight: {
		inherit: true,
		isNonstandard: null,
	},
	guidinglight: {
		inherit: true,
		isNonstandard: null,
	},
	coralbomb: {
		inherit: true,
		isNonstandard: null,
	},
	theadversary: {
		inherit: true,
		isNonstandard: null,
	},
	morningstar: {
		inherit: true,
		isNonstandard: null,
	},
	divinelaws: {
		inherit: true,
		isNonstandard: null,
	},
	shadow: {
		inherit: true,
		isNonstandard: null,
	},
	him: {
		inherit: true,
		isNonstandard: null,
	},
	foundryslash: {
		inherit: true,
		isNonstandard: null,
	},
	greasepuke: {
		inherit: true,
		isNonstandard: null,
	},
	oilyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	storedchaos: {
		inherit: true,
		isNonstandard: null,
	},
	violencegust: {
		inherit: true,
		isNonstandard: null,
	},
	absoluteice: {
		inherit: true,
		isNonstandard: null,
	},
	loveseed: {
		inherit: true,
		isNonstandard: null,
	},
	bondage: {
		inherit: true,
		isNonstandard: null,
	},
	watersports: {
		inherit: true,
		isNonstandard: null,
	},
	squirtcannon: {
		inherit: true,
		isNonstandard: null,
	},
	lovestruckpowder: {
		inherit: true,
		isNonstandard: null,
	},
	matingcall: {
		inherit: true,
		isNonstandard: null,
	},
	edging: {
		inherit: true,
		isNonstandard: null,
	},
	pixiehearts: {
		inherit: true,
		isNonstandard: null,
	},
	pixiewink: {
		inherit: true,
		isNonstandard: null,
	},
	fireplay: {
		inherit: true,
		isNonstandard: null,
	},
	footjob: {
		inherit: true,
		isNonstandard: null,
	},
	buttslam: {
		inherit: true,
		isNonstandard: null,
	},
	peachblossom: {
		inherit: true,
		isNonstandard: null,
	},
	sugarkiss: {
		inherit: true,
		isNonstandard: null,
	},
	butterflykiss: {
		inherit: true,
		isNonstandard: null,
	},
	peckkiss: {
		inherit: true,
		isNonstandard: null,
	},
	lizardkiss: {
		inherit: true,
		isNonstandard: null,
	},
	vacuumkiss: {
		inherit: true,
		isNonstandard: null,
	},
	gumkiss: {
		inherit: true,
		isNonstandard: null,
	},
	flowerkiss: {
		inherit: true,
		isNonstandard: null,
	},
	screwattack: {
		inherit: true,
		isNonstandard: null,
	},
	judge: {
		inherit: true,
		isNonstandard: null,
	},
	poisondarts: {
		inherit: true,
		isNonstandard: null,
	},
	axeswing: {
		inherit: true,
		isNonstandard: null,
	},
	printingpress: {
		inherit: true,
		isNonstandard: null,
	},
	magicmenu: {
		inherit: true,
		isNonstandard: null,
	},
	sizz: {
		inherit: true,
		isNonstandard: null,
	},
	sizzle: {
		inherit: true,
		isNonstandard: null,
	},
	bang: {
		inherit: true,
		isNonstandard: null,
	},
	kaboom: {
		inherit: true,
		isNonstandard: null,
	},
	snooze: {
		inherit: true,
		isNonstandard: null,
	},
	flameslash: {
		inherit: true,
		isNonstandard: null,
	},
	karackleslash: {
		inherit: true,
		isNonstandard: null,
	},
	metalslash: {
		inherit: true,
		isNonstandard: null,
	},
	hatcherman: {
		inherit: true,
		isNonstandard: null,
	},
	whack: {
		inherit: true,
		isNonstandard: null,
	},
	magicburst: {
		inherit: true,
		isNonstandard: null,
	},
	kamikaze: {
		inherit: true,
		isNonstandard: null,
	},
	heal: {
		inherit: true,
		isNonstandard: null,
	},
	spellbounce: {
		inherit: true,
		isNonstandard: null,
	},
	accelerate: {
		inherit: true,
		isNonstandard: null,
	},
	kaclang: {
		inherit: true,
		isNonstandard: null,
	},
	zoom: {
		inherit: true,
		isNonstandard: null,
	},
	oomph: {
		inherit: true,
		isNonstandard: null,
	},
	crossboomerang: {
		inherit: true,
		isNonstandard: null,
	},
	diamondpickaxe: {
		inherit: true,
		isNonstandard: null,
	},
	ironsword: {
		inherit: true,
		isNonstandard: null,
	},
	minecart: {
		inherit: true,
		isNonstandard: null,
	},
	tragicend: {
		inherit: true,
		isNonstandard: null,
	},
	bloodritual: {
		inherit: true,
		isNonstandard: null,
	},
	arterystrike: {
		inherit: true,
		isNonstandard: null,
	},
	bleedingburst: {
		inherit: true,
		isNonstandard: null,
	},
	bloodsplatter: {
		inherit: true,
		isNonstandard: null,
	},
	bloodport: {
		inherit: true,
		isNonstandard: null,
	},
	fatality: {
		inherit: true,
		isNonstandard: null,
	},
	maneater: {
		inherit: true,
		isNonstandard: null,
	},
	getoverhere: {
		inherit: true,
		isNonstandard: null,
	},
	hellfire: {
		inherit: true,
		isNonstandard: null,
	},
	boomstick: {
		inherit: true,
		isNonstandard: null,
	},
	fusrodah: {
		inherit: true,
		isNonstandard: null,
	},
	hairgrab: {
		inherit: true,
		isNonstandard: null,
	},
	ventclimb: {
		inherit: true,
		isNonstandard: null,
	},
	goldengun: {
		inherit: true,
		isNonstandard: null,
	},
	tirofinale: {
		inherit: true,
		isNonstandard: null,
	},
	demonhorns: {
		inherit: true,
		isNonstandard: null,
	},
	chaosmissile: {
		inherit: true,
		isNonstandard: null,
	},
	plasmaball: {
		inherit: true,
		isNonstandard: null,
	},
	meteoricburst: {
		inherit: true,
		isNonstandard: null,
	},
	dragonpummelin: {
		inherit: true,
		isNonstandard: null,
	},
	vaccinerehab: {
		inherit: true,
		isNonstandard: null,
	},
	retaliatespell: {
		inherit: true,
		isNonstandard: null,
	},
	bfg: {
		inherit: true,
		isNonstandard: null,
	},
	junglespear: {
		inherit: true,
		isNonstandard: null,
	},
	bombard: {
		inherit: true,
		isNonstandard: null,
	},
	justicecrash: {
		inherit: true,
		isNonstandard: null,
	},
	energyballs: {
		inherit: true,
		isNonstandard: null,
	},
	machgunblow: {
		inherit: true,
		isNonstandard: null,
	},
	ninjastrike: {
		inherit: true,
		isNonstandard: null,
	},
	edgecut: {
		inherit: true,
		isNonstandard: null,
	},
	excitebike: {
		inherit: true,
		isNonstandard: null,
	},
	liquidflare: {
		inherit: true,
		isNonstandard: null,
	},
	staffsmash: {
		inherit: true,
		isNonstandard: null,
	},
	stuntdouble: {
		inherit: true,
		isNonstandard: null,
	},
	comboattack: {
		inherit: true,
		isNonstandard: null,
	},
	bansheescream: {
		inherit: true,
		isNonstandard: null,
	},
	waterkick: {
		inherit: true,
		isNonstandard: null,
	},
	finalheaven: {
		inherit: true,
		isNonstandard: null,
	},
	dolphinblow: {
		inherit: true,
		isNonstandard: null,
	},
	catastrophe: {
		inherit: true,
		isNonstandard: null,
	},
	fraggrenade: {
		inherit: true,
		isNonstandard: null,
	},
	virusdrain: {
		inherit: true,
		isNonstandard: null,
	},
	spacedrain: {
		inherit: true,
		isNonstandard: null,
	},
	holysword: {
		inherit: true,
		isNonstandard: null,
	},
	mandragora: {
		inherit: true,
		isNonstandard: null,
	},
	luminaire: {
		inherit: true,
		isNonstandard: null,
	},
	serpentwhip: {
		inherit: true,
		isNonstandard: null,
	},
	energysword: {
		inherit: true,
		isNonstandard: null,
	},
	sexybeam: {
		inherit: true,
		isNonstandard: null,
	},
	boltslash: {
		inherit: true,
		isNonstandard: null,
	},
	swordofdusk: {
		inherit: true,
		isNonstandard: null,
	},
	simcity: {
		inherit: true,
		isNonstandard: null,
	},
	burialground: {
		inherit: true,
		isNonstandard: null,
	},
	threelineformation: {
		inherit: true,
		isNonstandard: null,
	},
	demonkingsixthheaven: {
		inherit: true,
		isNonstandard: null,
	},
	jyuohanketsu: {
		inherit: true,
		isNonstandard: null,
	},
	suzumegaeshi: {
		inherit: true,
		isNonstandard: null,
	},
	durindana: {
		inherit: true,
		isNonstandard: null,
	},
	seishinkatadoru: {
		inherit: true,
		isNonstandard: null,
	},
	himikopunch: {
		inherit: true,
		isNonstandard: null,
	},
	hassotobi: {
		inherit: true,
		isNonstandard: null,
	},
	usumidori: {
		inherit: true,
		isNonstandard: null,
	},
	hoemaru: {
		inherit: true,
		isNonstandard: null,
	},
	kikenjo: {
		inherit: true,
		isNonstandard: null,
	},
	alflaylawalayla: {
		inherit: true,
		isNonstandard: null,
	},
	mysteryslayer: {
		inherit: true,
		isNonstandard: null,
	},
	gooushourai: {
		inherit: true,
		isNonstandard: null,
	},
	hameshavanim: {
		inherit: true,
		isNonstandard: null,
	},
	hansainokaen: {
		inherit: true,
		isNonstandard: null,
	},
	arkofthecovenant: {
		inherit: true,
		isNonstandard: null,
	},
	doujoujikane: {
		inherit: true,
		isNonstandard: null,
	},
	prydwentuberiding: {
		inherit: true,
		isNonstandard: null,
	},
	sanatkumara: {
		inherit: true,
		isNonstandard: null,
	},
	senshibankou: {
		inherit: true,
		isNonstandard: null,
	},
	sakesplash: {
		inherit: true,
		isNonstandard: null,
	},
	bonecollector: {
		inherit: true,
		isNonstandard: null,
	},
	athanaton10thousand: {
		inherit: true,
		isNonstandard: null,
	},
	pandemoniumcetus: {
		inherit: true,
		isNonstandard: null,
	},
	dominacoronam: {
		inherit: true,
		isNonstandard: null,
	},
	cursedcuttingcrater: {
		inherit: true,
		isNonstandard: null,
	},
	wootpike: {
		inherit: true,
		isNonstandard: null,
	},
	thenword: {
		inherit: true,
		isNonstandard: null,
	},
	songofgrail: {
		inherit: true,
		isNonstandard: null,
	},
	phantasmpunishment: {
		inherit: true,
		isNonstandard: null,
	},
	chronosrose: {
		inherit: true,
		isNonstandard: null,
	},
	originbullet: {
		inherit: true,
		isNonstandard: null,
	},
	tsumukarimuramasa: {
		inherit: true,
		isNonstandard: null,
	},
	greatclawofdeath: {
		inherit: true,
		isNonstandard: null,
	},
	unlimitedlostworks: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbullets: {
		inherit: true,
		isNonstandard: null,
	},
	unspeakableformation: {
		inherit: true,
		isNonstandard: null,
	},
	meatcalibur: {
		inherit: true,
		isNonstandard: null,
	},
	speedsplit: {
		inherit: true,
		isNonstandard: null,
	},
	custosmorum: {
		inherit: true,
		isNonstandard: null,
	},
	iamreditetvirgo: {
		inherit: true,
		isNonstandard: null,
	},
	elementsofharmony: {
		inherit: true,
		isNonstandard: null,
	},
	summonanimals: {
		inherit: true,
		isNonstandard: null,
	},
	stymphalianbirds: {
		inherit: true,
		isNonstandard: null,
	},
	harpe: {
		inherit: true,
		isNonstandard: null,
	},
	caressofmedusa: {
		inherit: true,
		isNonstandard: null,
	},
	wingedsandals: {
		inherit: true,
		isNonstandard: null,
	},
	governmentmen: {
		inherit: true,
		isNonstandard: null,
	},
	momijigari: {
		inherit: true,
		isNonstandard: null,
	},
	bonegnaw: {
		inherit: true,
		isNonstandard: null,
	},
	bonelance: {
		inherit: true,
		isNonstandard: null,
	},
	bonetired: {
		inherit: true,
		isNonstandard: null,
	},
	ribcage: {
		inherit: true,
		isNonstandard: null,
	},
	boneify: {
		inherit: true,
		isNonstandard: null,
	},
	boneitis: {
		inherit: true,
		isNonstandard: null,
	},
	boner: {
		inherit: true,
		isNonstandard: null,
	},
	skullfist: {
		inherit: true,
		isNonstandard: null,
	},
	doom: {
		inherit: true,
		isNonstandard: null,
	},
	flashball: {
		inherit: true,
		isNonstandard: null,
	},
	soporous: {
		inherit: true,
		isNonstandard: null,
	},
	icreate: {
		inherit: true,
		isNonstandard: null,
	},

	/** Wack moves that have their name taken by Clover */
	cherrybomb: {
		inherit: true,
		accuracy: 90,
		basePower: 20,
		category: "Special",
		desc: "Cherries-like bombs are thrown to strike two to five times in a row.",
		shortDesc: "Cherries-like bombs are thrown to strike two to five times in a row.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Food",
		isNonstandard: null,
	},
	calibrate: {
		inherit: true,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user calibrates to sharply raise its accuracy stat.",
		shortDesc: "The user calibrates to sharply raise its accuracy stat.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: 2,
		},
		onHit(target, source) {
			if (this.field.getPseudoWeather('cyberspace')) {
				source.addVolatile('lockon', target);
				this.add('-activate', source, 'move: Lock-On', '[of] ' + target);
			}
		},
		target: "normal",
		type: "Cyber",
		isNonstandard: null,
	},
	bellyflop: {
		inherit: true,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			const pokemonWeight = pokemon.getWeight();
			let bp;
			if (pokemonWeight >= targetWeight * 5) {
				bp = 120;
			} else if (pokemonWeight >= targetWeight * 4) {
				bp = 100;
			} else if (pokemonWeight >= targetWeight * 3) {
				bp = 80;
			} else if (pokemonWeight >= targetWeight * 2) {
				bp = 60;
			} else {
				bp = 40;
			}
			this.debug('BP: ' + bp);
			return bp;
		},

		category: "Physical",
		desc: "The user crashes down sending a splash flying in all directions. The heavier the user, the greater the damage.",
		shortDesc: "The user crashes down sending a splash flying in all directions. The heavier the user, the greater the damage.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1, above: 1},
		hasCrashDamage: false,
		onMoveFail(target, source, move) {},
		secondary: null,
		target: "normal",
		type: "Water",
		isNonstandard: null,
	},
	hivemind: {
		inherit: true,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		shortDesc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Bug",
		isNonstandard: null,
	},
	quicksand: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "The user traps the target in a thick layer of quicksand. It may also cause paralysis.",
		shortDesc: "The user traps the target in a thick layer of quicksand. It may also cause paralysis.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacent",
		type: "Ground",
		isNonstandard: null,
	},
	downpour: {
		inherit: true,
		accuracy: 95,
		basePower: 60,
		category: "Special",
		desc: "The user drops a torrential downpour down on the target which causes it to rain.",
		shortDesc: "The user drops a torrential downpour down on the target which causes it to rain.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, above: 1},
		noSketch: false,
		secondary: null,
		target: "normal",
		type: "Water",
		isNonstandard: null,
	},
	atombomb: {
		inherit: true,
		accuracy: 95,
		basePower: 125,
		category: "Special",
		desc: "The user lets off an atomic bomb. It also damages the user by a fairly large amount, however.",
		shortDesc: "The user lets off an atomic bomb. It also damages the user by a fairly large amount, however.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		selfdestruct: false,
		recoil: [1, 3],
		secondary: null,
		target: "normal",
		type: "Nuclear",
		isNonstandard: null,
	},
	concussion: {
		inherit: true,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		desc: "The user slams the target's head with a concussive force. It confuses the target if it hits.",
		shortDesc: "The user slams the target's head with a concussive force. It confuses the target if it hits.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {},
		onAfterMove(pokemon) {},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		isNonstandard: null,
	},
	sugarrush: {
		inherit: true,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		shortDesc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onHit(target) {},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Food",
		isNonstandard: null,
	},
	riptide: {
		inherit: true,
		accuracy: 85,
		basePower: 75,
		category: "Physical",
		desc: "User traps target for four to five turns.",
		shortDesc: "User traps target for four to five turns.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		isNonstandard: null,
	},
	plunder: {
		inherit: true,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "The user attacks and steals the foe's held item simultaneously. It can't steal if the user holds an item.",
		shortDesc: "The user attacks and steals the foe's held item simultaneously. It can't steal if the user holds an item.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Plunder', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Plunder', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Water",
		isNonstandard: null,
	},
	homerunbat: {
		inherit: true,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		desc: "The user knocks away the target and drags out another Pokemon in its party. In the wild, the battle ends.",
		shortDesc: "The user knocks away the target and drags out another Pokemon in its party. In the wild, the battle ends.",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Wood",
		isNonstandard: null,
	},
	petrify: {
		inherit: true,
		accuracy: 85,
		basePower: 70,
		category: "Special",
		desc: "Causes paralysis.",
		shortDesc: "Causes paralysis.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Rock",
		isNonstandard: null,
	},
	meltedplastic: {/** The move already exists in 'data/moves.ts' */
		inherit: true,
		isNonstandard: null,
	},
	uproot: {
		inherit: true,
		accuracy: 100,
		basePower: 170,
		category: "Physical",
		desc: "The user loses its Grass-type. Cannot be used if not Grass-type.",
		shortDesc: "The user loses its Grass-type. Cannot be used if not Grass-type.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Grass')) return;
			this.add('-fail', pokemon, 'move: Uproot');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Grass" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Uproot');
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		isNonstandard: null,
	},
	pukeblood: {
		inherit: true,
		accuracy: 80,
		basePower: 150,
		category: "Special",
		desc: "The user also takes terrible damage.",
		shortDesc: "The user also takes terrible damage.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Blood",
		isNonstandard: null,
	},
	halflife: {
		inherit: true,
		accuracy: 95,
		basePower: 1,
		category: "Special",
		desc: "It cuts everything around the user's HP to half.",
		shortDesc: "It cuts everything around the user's HP to half.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, pokemon) {
			const targetHP = target.getUndynamaxedHP();
			const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
			const targetChange = targetHP - averagehp;
			target.sethp(target.hp - targetChange);
			this.add('-sethp', target, target.getHealth, '[from] move: Half-Life', '[silent]');
			pokemon.sethp(averagehp);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Half-Life');
		},
		secondary: null,
		target: "allAdjacent",
		type: "Nuclear",
		isNonstandard: null,
	},
	darkening: {
		inherit: true,
		accuracy: 80,
		basePower: 50,
		category: "Physical",
		desc: "The target faints next turn.",
		shortDesc: "The target faints next turn.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",	/** TODO?: This move is perish song but in 1 turn and only affects the target... */
	},
	nosedive: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Building up more power, it raises the user's Speed stat.",
		shortDesc: "Building up more power, it raises the user's Speed stat.",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Flying",
		isNonstandard: null,
	},
	sandblast: {
		inherit: true,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		desc: "Does double damage during a Sandstorm.",
		shortDesc: "Does double damage during a Sandstorm.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
			case 'sandstorm':
				move.basePower = move.basePower * 2;
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		isNonstandard: null,
	},
	bouncyball: {
		inherit: true,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "The user bounces up high, then drops on the foe on the second turn. It may also paralyze the foe.",
		shortDesc: "The user bounces up high, then drops on the foe on the second turn. It may also paralyze the foe.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, bounce: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Rubber",
		isNonstandard: null,
	},
	flashbang: {
		inherit: true,
		accuracy: 95,
		basePower: 60,
		category: "Special",
		desc: "Lowers the target's accuracy.",
		shortDesc: "Lowers the target's accuracy.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Sound",
		isNonstandard: null,
	},
	bearhug: {
		inherit: true,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		desc: "Lowers the foe's defense and squeezes the foe for four to five turns.",
		shortDesc: "Lowers the foe's defense and squeezes the foe for four to five turns.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, source, move) {},
		volatileStatus: 'partiallytrapped',
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		isNonstandard: null,
	},
	fadereflection: {
		inherit: true,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		desc: "May disable the last move used by the target.",
		shortDesc: "May disable the last move used by the target.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 25,
			volatileStatus: 'disable',
		},
		target: "normal",
		type: "Glass",
		isNonstandard: null,
	},
	plasticblaze: {
		inherit: true,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		desc: "It may also leave the target with a burn.",
		shortDesc: "It may also leave the target with a burn.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 25,
			status: 'brn',
		},
		target: "normal",
		type: "Plastic",
		isNonstandard: null,
	},
	fruitpunch: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "HAHAHA GET IT???? FRUIT PUNCH????",
		shortDesc: "HAHAHA GET IT???? FRUIT PUNCH????",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Food",
		isNonstandard: null,
	},
	carcrash: {
		inherit: true,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		desc: "Paralyzes the user and the target.",
		shortDesc: "Paralyzes the user and the target.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 100,
				self: {
					status: 'prz',
				},
			}, {
				chance: 100,
				status: 'prz',
			},
		],
		target: "normal",
		type: "Tech",
		isNonstandard: null,
	},
	frostbite: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "A deathly cold touch that may burn the target.",
		shortDesc: "A deathly cold touch that may burn the target.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		isNonstandard: null,
	},
	scavenge: {
		inherit: true,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "User recovers the last item the opponent held and consumed.",
		shortDesc: "User recovers the last item the opponent held and consumed.",
		pp: 25,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (pokemon.item || !pokemon.lastItem) return false;
			const item = pokemon.lastItem;
			pokemon.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Scavenge');
			pokemon.setItem(item);
		},
		heal: null,
		target: "normal",
		type: "Normal",
		isNonstandard: null,
	},
	glassing: {
		inherit: true,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		desc: "Hits both targets, transforming them into Glass-type.",
		shortDesc: "Hits both targets, transforming them into Glass-type.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Glass' || !target.setType('Glass')) return false;
			this.add('-start', target, 'typechange', 'Glass');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Glass",
		isNonstandard: null,
	},
	mindbreak: {
		inherit: true,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		desc: "Confuses, Sleeps, Infatuates the target if they are the opposite gender.",
		shortDesc: "Confuses, Sleeps, Infatuates the target if they are the opposite gender.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(pokemon) {
			pokemon.addVolatile('confusion');
			pokemon.trySetStatus('slp');
			pokemon.addVolatile('attract');
		},
		onTryImmunity(target, source) {
			return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
		},
		secondary: null,
		target: "normal",
		type: "Heart",
		isNonstandard: null,
	},
	banhammer: {
		inherit: true,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "The user knocks away the target and drags out another Pokemon in its party. In the wild, the battle ends.",
		shortDesc: "The user knocks away the target and drags out another Pokemon in its party. In the wild, the battle ends.",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Cyber",
		isNonstandard: null,
	},
	falconpunch: {
		inherit: true,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "The target is punched with a fiery fist. It may leave the target with a burn.",
		shortDesc: "The target is punched with a fiery fist. It may leave the target with a burn.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 15,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		isNonstandard: null,
	},
	bloodletting: {
		inherit: true,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "The user and the target both start Bleeding.",
		shortDesc: "The user and the target both start Bleeding.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'bleed',
			status: 'psn',
		},
		self: {
			volatileStatus: 'bleed',
		},
		target: "normal",
		type: "Blood",
		isNonstandard: null,	/** TODO: Code "Bleeding" */
	},
	fuckyou: {
		inherit: true,
		accuracy: 100,
		basePower: 200,
		category: "Special",
		desc: "Bleed, Poison, Curse, Block, Heal Block.",
		shortDesc: "Bleed, Poison, Curse, Block, Heal Block.",
		pp: 40,
		priority: 6,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Chaos",
		isNonstandard: "Future",	/** TODO: Code "Bleeding" */
	},
};

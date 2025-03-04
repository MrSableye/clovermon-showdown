export const Conditions: {[k: string]: ConditionData} = {
	brn: {
		name: 'brn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: Flame Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brn');
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
	},
	par: {
		name: 'par',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility(['quickfeet', 'paralysisheal'])) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
		onBeforeMovePriority: 1,
		onBeforeMove(pokemon) {
			if (this.randomChance(1, 4)) {
				if (!pokemon.hasAbility('paralysisheal')) {
					this.add('cant', pokemon, 'par');
					return false;
				} else { return; }
			}
		},
	},
	slp: {
		name: 'slp',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'slp', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'slp', '[from] move: ' + sourceEffect.name);
			} else {
				this.add('-status', target, 'slp');
			}
			// 1-3 turns
			this.effectState.startTime = this.random(2, 5);
			this.effectState.time = this.effectState.startTime;

			if (target.removeVolatile('nightmare')) {
				this.add('-end', target, 'Nightmare', '[silent]');
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (pokemon.hasAbility('earlybird')) {
				pokemon.statusState.time--;
			}
			pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['defrost']) return;
			if (this.randomChance(1, 5)) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'frz');
			return false;
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.clearStatus();
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.thawsTarget) {
				target.cureStatus();
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
	psn: {
		name: 'psn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'psn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'psn');
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	tox: {
		name: 'tox',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.effectState.stage = 0;
			if (sourceEffect && sourceEffect.id === 'toxicorb') {
				this.add('-status', target, 'tox', '[from] item: Toxic Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'tox', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'tox');
			}
		},
		onSwitchIn() {
			this.effectState.stage = 0;
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			if (this.effectState.stage < 15) {
				this.effectState.stage++;
			}
			this.damage(this.clampIntRange(pokemon.baseMaxhp / 16, 1) * this.effectState.stage);
		},
	},
	confusion: {
		name: 'confusion',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			if (sourceEffect?.id === 'lockedmove') {
				this.add('-start', target, 'confusion', '[fatigue]');
			} else {
				this.add('-start', target, 'confusion');
			}
			const min = sourceEffect?.id === 'axekick' ? 3 : 2;
			this.effectState.time = this.random(min, 6);
		},
		onEnd(target) {
			this.add('-end', target, 'confusion');
		},
		onBeforeMovePriority: 3,
		onBeforeMove(pokemon) {
			pokemon.volatiles['confusion'].time--;
			if (!pokemon.volatiles['confusion'].time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			this.add('-activate', pokemon, 'confusion');
			if (!this.randomChance(33, 100)) {
				return;
			}
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;
		},
	},
	flinch: {
		name: 'flinch',
		duration: 1,
		onBeforeMovePriority: 8,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'flinch');
			this.runEvent('Flinch', pokemon);
			return false;
		},
	},
	trapped: {
		name: 'trapped',
		noCopy: true,
		onTrapPokemon(pokemon) {
			pokemon.tryTrap();
		},
		onStart(target) {
			this.add('-activate', target, 'trapped');
		},
	},
	trapper: {
		name: 'trapper',
		noCopy: true,
	},
	partiallytrapped: {
		name: 'partiallytrapped',
		duration: 5,
		durationCallback(target, source) {
			if (source?.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
			this.effectState.boundDivisor = source.hasItem('bindingband') ? 6 : 8;
		},
		onResidualOrder: 13,
		onResidual(pokemon) {
			const source = this.effectState.source;
			// G-Max Centiferno and G-Max Sandblast continue even after the user leaves the field
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns) && !gmaxEffect) {
				delete pokemon.volatiles['partiallytrapped'];
				this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]', '[silent]');
				return;
			}
			this.damage(pokemon.baseMaxhp / this.effectState.boundDivisor);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]');
		},
		onTrapPokemon(pokemon) {
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (this.effectState.source?.isActive || gmaxEffect) pokemon.tryTrap();
		},
	},
	lockedmove: {
		// Outrage, Thrash, Petal Dance...
		name: 'lockedmove',
		duration: 2,
		onResidual(target) {
			if (target.status === 'slp') {
				// don't lock, and bypass confusion for calming
				delete target.volatiles['lockedmove'];
			}
			this.effectState.trueDuration--;
		},
		onStart(target, source, effect) {
			this.effectState.trueDuration = this.random(2, 4);
			this.effectState.move = effect.id;
		},
		onRestart() {
			if (this.effectState.trueDuration >= 2) {
				this.effectState.duration = 2;
			}
		},
		onEnd(target) {
			if (this.effectState.trueDuration > 1) return;
			target.addVolatile('confusion');
		},
		onLockMove(pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.effectState.move;
		},
	},
	twoturnmove: {
		// Skull Bash, SolarBeam, Sky Drop...
		name: 'twoturnmove',
		duration: 2,
		onStart(attacker, defender, effect) {
			// ("attacker" is the Pokemon using the two turn move and the Pokemon this condition is being applied to)
			this.effectState.move = effect.id;
			attacker.addVolatile(effect.id);
			// lastMoveTargetLoc is the location of the originally targeted slot before any redirection
			// note that this is not updated for moves called by other moves
			// i.e. if Dig is called by Metronome, lastMoveTargetLoc will still be the user's location
			let moveTargetLoc: number = attacker.lastMoveTargetLoc!;
			if (effect.sourceEffect && this.dex.moves.get(effect.id).target !== 'self') {
				// this move was called by another move such as Metronome
				// and needs a random target to be determined this turn
				// it will already have one by now if there is any valid target
				// but if there isn't one we need to choose a random slot now
				if (defender.fainted) {
					defender = this.sample(attacker.foes(true));
				}
				moveTargetLoc = attacker.getLocOf(defender);
			}
			attacker.volatiles[effect.id].targetLoc = moveTargetLoc;
			this.attrLastMove('[still]');
			// Run side-effects normally associated with hitting (e.g., Protean, Libero)
			this.runEvent('PrepareHit', attacker, defender, effect);
		},
		onEnd(target) {
			target.removeVolatile(this.effectState.move);
		},
		onLockMove() {
			return this.effectState.move;
		},
		onMoveAborted(pokemon) {
			pokemon.removeVolatile('twoturnmove');
		},
	},
	choicelock: {
		name: 'choicelock',
		noCopy: true,
		onStart(pokemon) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!this.activeMove.id || this.activeMove.hasBounced || this.activeMove.sourceEffect === 'snatch') return false;
			this.effectState.move = this.activeMove.id;
		},
		onBeforeMove(pokemon, target, move) {
			if (!pokemon.getItem().isChoice) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (
				!pokemon.ignoringItem() && !pokemon.volatiles['dynamax'] &&
				move.id !== this.effectState.move && move.id !== 'struggle'
			) {
				// Fails unless the Choice item is being ignored, and no PP is lost
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice item lock");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.getItem().isChoice || !pokemon.hasMove(this.effectState.move)) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (pokemon.ignoringItem() || pokemon.volatiles['dynamax']) {
				return;
			}
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== this.effectState.move) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
	},
	mustrecharge: {
		name: 'mustrecharge',
		duration: 2,
		onBeforeMovePriority: 11,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'recharge');
			pokemon.removeVolatile('mustrecharge');
			pokemon.removeVolatile('truant');
			return null;
		},
		onStart(pokemon) {
			this.add('-mustrecharge', pokemon);
		},
		onLockMove: 'recharge',
	},
	futuremove: {
		// this is a slot condition
		name: 'futuremove',
		duration: 3,
		onResidualOrder: 3,
		onEnd(target) {
			const data = this.effectState;
			// time's up; time to hit! :D
			const move = this.dex.moves.get(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(target.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;

			this.actions.trySpreadMoveHit([target], data.source, hitMove, true);
			if (data.source.isActive && data.source.hasItem('lifeorb') && this.gen >= 5) {
				this.singleEvent('AfterMoveSecondarySelf', data.source.getItem(), data.source.itemState, data.source, target, data.source.getItem());
			}
			this.activeMove = null;

			this.checkWin();
		},
	},
	healreplacement: {
		// this is a slot condition
		name: 'healreplacement',
		onStart(target, source, sourceEffect) {
			this.effectState.sourceEffect = sourceEffect;
			this.add('-activate', source, 'healreplacement');
		},
		onSwitchInPriority: 1,
		onSwitchIn(target) {
			if (!target.fainted) {
				target.heal(target.maxhp);
				this.add('-heal', target, target.getHealth, '[from] move: ' + this.effectState.sourceEffect, '[zeffect]');
				target.side.removeSlotCondition(target, 'healreplacement');
			}
		},
	},
	stall: {
		// Protect, Detect, Endure counter
		name: 'stall',
		duration: 2,
		counterMax: 729,
		onStart() {
			this.effectState.counter = 3;
		},
		onStallMove(pokemon) {
			// this.effectState.counter should never be undefined here.
			// However, just in case, use 1 if it is undefined.
			const counter = this.effectState.counter || 1;
			this.debug("Success chance: " + Math.round(100 / counter) + "%");
			const success = this.randomChance(1, counter);
			if (!success) delete pokemon.volatiles['stall'];
			return success;
		},
		onRestart() {
			if (this.effectState.counter < (this.effect as Condition).counterMax!) {
				this.effectState.counter *= 3;
			}
			this.effectState.duration = 2;
		},
	},
	gem: {
		name: 'gem',
		duration: 1,
		affectsFainted: true,
		onBasePowerPriority: 14,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify([5325, 4096]);
		},
	},
	radish: { // exclusively caused by Radish Punch, Radish Body, and Radish Orb.
		name: 'radish',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'radish', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'radish');
			}
		},
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.add('-message', `Radishes are annual or biennial brassicaceous crops grown for their swollen tap roots which can be globular, tapering, or cylindrical. The root skin colour ranges from white through pink, red, purple, yellow, and green to black, but the flesh is usually white. The roots obtain their color from anthocyanins. Red varieties use the anthocyanin pelargonidin as a pigment, and purple cultivars obtain their color from cyanidin. Smaller types have a few leaves about 13 cm (5 in) long with round roots up to 2.5 cm (1 in) in diameter or more slender, long roots up to 7 cm (3 in) long. Both of these are normally eaten raw in salads. A longer root form, including oriental radishes, daikon or mooli, and winter radishes, grows up to 60 cm (24 in) long with foliage about 60 cm (24 in) high with a spread of 45 cm (18 in). The flesh of radishes harvested timely is crisp and sweet, but becomes bitter and tough if the vegetable is left in the ground too long. Leaves are arranged in a rosette. They have a lyrate shape, meaning they are divided pinnately with an enlarged terminal lobe and smaller lateral lobes. The white flowers are borne on a racemose inflorescence. The fruits are small pods which can be eaten when young.`);
			this.damage(pokemon.baseMaxhp / 10);
		},
	},
	// weather is implemented here since it's so important to the game

	raindance: {
		name: 'RainDance',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.id === 'phantomjaw' && !attacker.hasItem('utilityumbrella')) {
				this.debug('Rain Dance Phantom Jaw boost');
				return this.chainModify(1.5);
			}
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('Rain Dance water boost');
				return this.chainModify(1.5);
			}
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Rain Dance fire suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'RainDance', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'RainDance');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'RainDance', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	primordialsea: {
		name: 'PrimordialSea',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', attacker, move, '[from] Primordial Sea');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'PrimordialSea', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'PrimordialSea', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sunnyday: {
		name: 'SunnyDay',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('heatrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.id === 'hydrosteam' && !attacker.hasItem('utilityumbrella')) {
				this.debug('Sunny Day Hydro Steam boost');
				return this.chainModify(1.5);
			}
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'SunnyDay', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	desolateland: {
		name: 'DesolateLand',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Water' && move.category !== 'Status') {
				this.debug('Desolate Land water suppress');
				this.add('-fail', attacker, move, '[from] Desolate Land');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DesolateLand', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DesolateLand', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sandstorm: {
		name: 'Sandstorm',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('smoothrock')) {
				return 8;
			}
			return 5;
		},
		// This should be applied directly to the stat before any of the other modifiers are chained
		// So we give it increased priority.
		onModifySpDPriority: 10,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasType('Rock') && this.field.isWeather('sandstorm')) {
				return this.modify(spd, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Sandstorm', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Sandstorm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Sandstorm', '[upkeep]');
			if (this.field.isWeather('sandstorm')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	hail: {
		name: 'Hail',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Hail', '[upkeep]');
			if (this.field.isWeather('hail')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	snow: {
		name: 'Snow',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('snow')) {
				return this.modify(def, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Snow', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Snow');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Snow', '[upkeep]');
			if (this.field.isWeather('snow')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	deltastream: {
		name: 'DeltaStream',
		effectType: 'Weather',
		duration: 0,
		onEffectivenessPriority: -1,
		onEffectiveness(typeMod, target, type, move) {
			if (move && move.effectType === 'Move' && move.category !== 'Status' && type === 'Flying' && typeMod > 0) {
				this.add('-fieldactivate', 'Delta Stream');
				return 0;
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DeltaStream', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DeltaStream', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	ultrawind: {
		name: 'Ultrawind',
		effectType: 'Weather',
		duration: 5,
		onEffectivenessPriority: -1,
		onEffectiveness(typeMod, target, type, move) {
			if (move && move.effectType === 'Move' && move.category !== 'Status' && type === 'Flying' && typeMod > 0) {
				this.add('-fieldactivate', 'Delta Stream');
				return 0;
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DeltaStream', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DeltaStream', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	acidicrainfall: {
		name: 'Acidic Rainfall',
		effectType: 'Weather',
		duration: 5,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Acidic Rainfall', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Acidic Rainfall');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Acidic Rainfall', '[upkeep]');
			if (this.field.isWeather('acidicrainfall')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
			this.damage(target.baseMaxhp / 16);
			this.damage(target.baseMaxhp / 16);
			this.damage(target.baseMaxhp / 16);
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	/** Wack weathers */
	midnight: {
		name: 'Midnight',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('blackrock')) {
				return 8;
			}
			return 5;
		},
		onModifySpePriority: 10,
		onModifySpe(spe, pokemon) {
			if (pokemon.hasType('Zombie') && this.field.isWeather('midnight')) {
				return this.modify(spe, 2);
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Fear' || move.type === 'Dark') {
				this.debug('Midnight boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Light') {
				this.debug('Midnight light suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Midnight', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Midnight');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Midnight', '[upkeep]');
			if (this.field.isWeather('midnight')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	acidrain: {
		name: 'Acid Rain',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('acidrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Acid Rain poison boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fairy') {
				this.debug('Acid Rain fairy suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'AcidRain', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'AcidRain');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'AcidRain', '[upkeep]');
			if (this.field.isWeather('acidrain')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	bladerain: {
		name: 'Blade Rain',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('chromerock')) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'BladeRain', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'BladeRain');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'BladeRain', '[upkeep]');
			if (this.field.isWeather('bladerain')) this.eachEvent('Weather');
		},
		onWeather(target) {1
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	/** Wack conditions */
	bleed: {
		name: 'bleed',
		onStart(pokemon) {
			this.add('-start', pokemon, 'Bleed');
		},
		onResidualOrder: 13,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / (this.field.getPseudoWeather('bloodrain') ? 10 : 14));
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Bleed');
		},
	},
	flammable: {
		name: 'flammable',
		onStart(pokemon) {
			this.add('-start', pokemon, 'Flammable');
		},
		duration: 3,
			durationCallback(target, source, effect) {
				if (effect?.name === "Oil Drench") {
					return 2;
				}
				if (effect?.name === "Tar Shot") {
					return 4;
				}
				return 3;
			},
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 1.5;
			
			return this.chainModify(mod);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Flammable');
		},
	},
	
	dynamax: {
		name: 'Dynamax',
		noCopy: true,
		onStart(pokemon) {
			this.effectState.turns = 0;
			pokemon.removeVolatile('minimize');
			pokemon.removeVolatile('substitute');
			if (pokemon.volatiles['torment']) {
				delete pokemon.volatiles['torment'];
				this.add('-end', pokemon, 'Torment', '[silent]');
			}
			if (['cramorantgulping', 'cramorantgorging'].includes(pokemon.species.id) && !pokemon.transformed) {
				pokemon.formeChange('cramorant');
			}
			this.add('-start', pokemon, 'Dynamax', pokemon.gigantamax ? 'Gmax' : '');
			if (pokemon.baseSpecies.name === 'Shedinja') return;

			// Changes based on dynamax level, 2 is max (at LVL 10)
			const ratio = 1.5 + (pokemon.dynamaxLevel * 0.05);

			pokemon.maxhp = Math.floor(pokemon.maxhp * ratio);
			pokemon.hp = Math.floor(pokemon.hp * ratio);
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onBeforeSwitchOutPriority: -1,
		onBeforeSwitchOut(pokemon) {
			pokemon.removeVolatile('dynamax');
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.id === 'behemothbash' || move.id === 'behemothblade' || move.id === 'dynamaxcannon') {
				return this.chainModify(2);
			}
		},
		onDragOutPriority: 2,
		onDragOut(pokemon) {
			this.add('-block', pokemon, 'Dynamax');
			return null;
		},
		onResidualPriority: -100,
		onResidual() {
			this.effectState.turns++;
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Dynamax');
			if (pokemon.baseSpecies.name === 'Shedinja') return;
			pokemon.hp = pokemon.getUndynamaxedHP();
			pokemon.maxhp = pokemon.baseMaxhp;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
	},

	// Commander needs two conditions so they are implemented here
	// Dondozo
	commanded: {
		name: "Commanded",
		noCopy: true,
		onStart(pokemon) {
			this.boost({atk: 2, spa: 2, spe: 2, def: 2, spd: 2}, pokemon);
		},
		onDragOutPriority: 2,
		onDragOut() {
			return false;
		},
		// Prevents Shed Shell allowing a swap
		onTrapPokemonPriority: -11,
		onTrapPokemon(pokemon) {
			pokemon.trapped = true;
		},
	},
	// Tatsugiri
	commanding: {
		name: "Commanding",
		noCopy: true,
		onDragOutPriority: 2,
		onDragOut() {
			return false;
		},
		// Prevents Shed Shell allowing a swap
		onTrapPokemonPriority: -11,
		onTrapPokemon(pokemon) {
			pokemon.trapped = true;
		},
		// Override No Guard
		onInvulnerabilityPriority: 2,
		onInvulnerability(target, source, move) {
			return false;
		},
		onBeforeTurn(pokemon) {
			this.queue.cancelAction(pokemon);
		},
	},
	// Arceus and Silvally's actual typing is implemented here.
	// Their true typing for all their formes is Normal, and it's only
	// Multitype and RKS System, respectively, that changes their type,
	// but their formes are specified to be their corresponding type
	// in the Pokedex, so that needs to be overridden.
	// This is mainly relevant for Hackmons Cup and Balanced Hackmons.
	arceus: {
		name: 'Arceus',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'multitype' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'multitype') {
				type = pokemon.getItem().onPlate;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	silvally: {
		name: 'Silvally',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'rkssystem' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'rkssystem') {
				type = pokemon.getItem().onMemory;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	ulmiraint: {
		name: 'Ulmiraint',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'paletteswap' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'paletteswap') {
				type = pokemon.getItem().onPlate;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	rolloutstorage: {
		name: 'rolloutstorage',
		duration: 2,
		onBasePower(relayVar, source, target, move) {
			let bp = Math.max(1, move.basePower);
			bp *= Math.pow(2, source.volatiles['rolloutstorage'].contactHitCount);
			if (source.volatiles['defensecurl']) {
				bp *= 2;
			}
			source.removeVolatile('rolloutstorage');
			return bp;
		},
	},
	/* Clover conditions */
	stinkbomb: {
		duration: 1,
		onModifyType(move) {
			move.type = 'Poison';
		},
	},
	retro: {
		// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
		onStart(pokemon) {
			this.add('-endability', pokemon);
			this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon, pokemon, 'retro');
		},
		onCopy(pokemon) {
			if (pokemon.getAbility().isPermanent) pokemon.removeVolatile('retro');
		},
	},
	/* Clover CAP conditions */
	backdraft: {
		duration: 2,
		onSideStart(side) {
			this.add('-sidestart', side, 'Backdraft');
		},
		onModifySpe(spe, pokemon) {
			return this.chainModify(2);
		},
		onSideResidualOrder: 26,
		onSideResidualSubOrder: 5,
		onSideEnd(side) {
			this.add('-sideend', side, 'Backdraft');
		},
	},
	densefog: {
		name: 'DenseFog',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			return 5;
		},
		onDisableMove(pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'DenseFog', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'DenseFog');
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	bound: {
		name: 'bound',
		duration: 2,
		onBeforeMovePriority: 4,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'bound');
			return false;
		},
	},
	buried: {
		name: 'buried',
		duration: 2,
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[buried]');
		},
		onTrapPokemon(pokemon) {
			if (this.effectState.source?.isActive) pokemon.tryTrap();
		},
	},
	temptrapped: {
		name: 'temptrapped',
		duration: 2,
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[temptrapped]');
		},
		onTrapPokemon(pokemon) {
			if (this.effectState.source?.isActive) pokemon.tryTrap();
		},
	},
	/* Clover Blobbos CAP conditions */
	lootable: {
		name: 'Lootable',
		onSwap(target) {
			target.addVolatile('focusenergy');
			const oldAbility = target.setAbility('serenegrace');
			if (oldAbility) {
				this.add('-activate', target, 'ability: Serene Grace', this.dex.abilities.get(oldAbility).name);
			}
			target.side.removeSlotCondition(target, 'lootable');
		},
	},

	hyperboreanarctic: {
		name: 'Hyperborean Arctic',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Fighting' && move.category !== 'Status') {
				this.debug('Hyperborean Arctic fighting suppress');
				this.add('-fail', attacker, move, '[from] Hyperborean Arctic');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Ice') {
				this.debug('Ice storm boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'Hyperborean Arctic', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Hyperborean Arctic', '[upkeep]');
			this.eachEvent('Weather');
		},
		onWeather(target) {
			if (!target.hasType('Ice')) this.damage(target.baseMaxhp / 8);
		},
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice')) {
				return this.modify(def, 1.5);
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},


	flashbang: {
		duration: 2,
		onSideStart(side) {
			this.add('-sidestart', side, 'Flashbang');
		},
		onFoeTryMove(target, source, effect) {
			if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
				return;
			}

			return null;
		},


		onSideResidualOrder: 26,
		onSideResidualSubOrder: 5,
		onSideEnd(side) {
			this.add('-sideend', side, 'Flashbang');
		},
	},
	timefall: {
		name: 'Timefall',
		effectType: 'Weather',
		duration: 5,
		onWeather(target) {
			if (target.hasItem('utilityumbrella')) {
				if (this.randomChance(1, 100)) {
					this.add('-message', `${target.name} is Fragile... but not that fragile.`);
				}

				return;
			}
			let statName = 'atk';
			let bestStat = 0;
			let s: StatIDExceptHP;
			for (s in target.storedStats) {
				if (target.storedStats[s] > bestStat) {
					statName = s;
					bestStat = target.storedStats[s];
				}
			}
			this.boost({[statName]: 1}, target);
			this.damage(target.baseMaxhp / 8);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Timefall', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldStart() {
			this.add('-weather', 'Timefall');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	bridge: {
		name: 'Bridge',
		onStart(pokemon) {
			this.add('-start', pokemon, 'bridge');
		},
		onSwitchIn(pokemon) {
			if (this.effectState.boosts) {
				if (pokemon.hasAbility('chiralnetwork')) {
					this.add('-end', pokemon, 'bridge');
					this.boost(this.effectState.boosts);
				} else {
					this.add('-fail', pokemon, 'bridge');
				}

				pokemon.side.removeSlotCondition(pokemon, 'bridge');
			} else if (!pokemon.hasAbility('chiralnetwork')) {
				this.add('-start', pokemon, 'bridge');
			}
		},
		onSwitchOut(pokemon) {
			if (!pokemon.hasAbility('chiralnetwork')) {
				const boosts: SparseBoostsTable = {};

				let i: BoostID;
				for (i in pokemon.boosts) {
					if (pokemon.boosts[i] > 0) {
						boosts[i] = pokemon.boosts[i];
					}
				}

				this.effectState.boosts = boosts;
			}
		},
	},
	luckyroll: {
		name: 'Lucky Roll',
		onSideStart(side) {
			this.add('-sidestart', side, 'Lucky Roll');
			this.effectState.layers = 1;
		},
		onSideRestart(side) {
			if (this.effectState.layers >= 3) return false;
			this.add('-sidestart', side, 'Lucky Roll');
			this.effectState.layers++;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.hasItem('heavydutyboots')) return;
			const chanceMod = Math.pow(1.05, this.effectState.layers || 0);
			if (move.secondaries) {
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= chanceMod;
				}
			}
			if (move.self?.chance) move.self.chance *= chanceMod;
		},
		onModifyCritRatio(critRatio, pokemon) {
			if (pokemon.hasItem('heavydutyboots')) return;
			if (this.effectState.layers >= 3) return critRatio + 1;
		},
	},
	overkill: {
		name: "Overkill",
		onUpdate(pokemon) {
			const data = this.effectState;
			if (!data.overkillDamage) {
				pokemon.side.removeSlotCondition(pokemon, 'overkill');
			} else {
				if (!pokemon.fainted) {
					pokemon.damage(data.overkillDamage);
					pokemon.side.removeSlotCondition(pokemon, 'overkill');
				}
			}
		},
	},
	blobbosdragonmaid: {
		name: 'Blobbos-Dragon Maid',
		onAfterMoveSecondarySelf(source) {
			if (source.speciesState.mopped) {
				delete source.speciesState.mopped;
				source.formeChange('blobbosdragonmaidtrue', this.effect, true);
			}
		},
	},
	sterilized: {
		name: "Sterilized",
	},
	shatteredampoule: {
		name: "Shattered Ampoule",
		duration: 3,
	},
};

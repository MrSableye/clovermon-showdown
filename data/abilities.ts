/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Start

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups

 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoat

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce

 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag

*/

import {Pokemon} from "../sim";
import {FS} from "../sim";

export const Abilities: {[abilityid: string]: AbilityData} = {
	noability: {
		isNonstandard: "Past",
		name: "No Ability",
		rating: 0.1,
		num: 0,
	},
	adaptability: {
		onModifyMove(move) {
			move.stab = 2;
		},
		name: "Adaptability",
		rating: 4,
		num: 91,
	},
	aerilate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Flying';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Aerilate",
		rating: 4,
		num: 184,
	},
	aftermath: {
		name: "Aftermath",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp && this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 4, source, target);
			}
		},
		rating: 2,
		num: 106,
	},
	airlock: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Air Lock does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (this.effectState.switchingIn) {
				this.add('-ability', pokemon, 'Air Lock');
				this.effectState.switchingIn = false;
			}
			this.eachEvent('WeatherChange', this.effect);
		},
		onEnd(pokemon) {
			this.eachEvent('WeatherChange', this.effect);
		},
		suppressWeather: true,
		name: "Air Lock",
		rating: 1.5,
		num: 76,
	},
	analytic: {
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon) {
			let boosted = true;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (this.queue.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Analytic boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Analytic",
		rating: 2.5,
		num: 148,
	},
	angerpoint: {
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				this.boost({atk: 12}, target, target);
			}
		},
		name: "Anger Point",
		rating: 1,
		num: 83,
	},
	angershell: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedAngerShell = false;
			} else {
				this.effectState.checkedAngerShell = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedAngerShell;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedAngerShell = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({atk: 1, spa: 1, spe: 1, def: -1, spd: -1}, target, target);
			}
		},
		name: "Anger Shell",
		rating: 3,
		num: 271,
	},
	anticipation: {
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					if (move.category === 'Status') continue;
					const moveType = move.id === 'hiddenpower' ? target.hpType : move.type;
					if (
						this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 ||
						move.ohko
					) {
						this.add('-ability', pokemon, 'Anticipation');
						return;
					}
				}
			}
		},
		name: "Anticipation",
		rating: 0.5,
		num: 107,
	},
	arenatrap: {
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
				pokemon.maybeTrapped = true;
			}
		},
		name: "Arena Trap",
		rating: 5,
		num: 71,
	},
	armortail: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const armorTailHolder = this.effectState.target;
			if ((source.isAlly(armorTailHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', armorTailHolder, 'ability: Armor Tail', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Armor Tail",
		rating: 2.5,
		num: 296,
	},
	aromaveil: {
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aroma Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Aroma Veil",
		rating: 2,
		num: 165,
	},
	asoneglastrier: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source, source, this.dex.abilities.get('chillingneigh'));
			}
		},
		isPermanent: true,
		name: "As One (Glastrier)",
		rating: 3.5,
		num: 266,
	},
	asonespectrier: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source, source, this.dex.abilities.get('grimneigh'));
			}
		},
		isPermanent: true,
		name: "As One (Spectrier)",
		rating: 3.5,
		num: 267,
	},
	aurabreak: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Aura Break');
		},
		onAnyTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			move.hasAuraBreak = true;
		},
		isBreakable: true,
		name: "Aura Break",
		rating: 1,
		num: 188,
	},
	baddreams: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.status === 'slp' || target.hasAbility('comatose') ||
				target.hasAbility('lethargic') || target.hasAbility('boardpowerz')) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		name: "Bad Dreams",
		rating: 1.5,
		num: 123,
	},
	ballfetch: {
		name: "Ball Fetch",
		rating: 0,
		num: 237,
	},
	battery: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target && move.category === 'Special') {
				this.debug('Battery boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Battery",
		rating: 0,
		num: 217,
	},
	battlearmor: {
		onCriticalHit: false,
		isBreakable: true,
		name: "Battle Armor",
		rating: 1,
		num: 4,
	},
	battlebond: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect?.effectType !== 'Move') return;
			if (source.abilityState.battleBondTriggered) return;
			if (source.species.id === 'greninjabond' && source.hp && !source.transformed && source.side.foePokemonLeft()) {
				this.boost({atk: 1, spa: 1, spe: 1}, source, source, this.effect);
				this.add('-activate', source, 'ability: Battle Bond');
				source.abilityState.battleBondTriggered = true;
			}
		},
		isPermanent: true,
		name: "Battle Bond",
		rating: 3.5,
		num: 210,
	},
	beadsofruin: {
		isNonstandard: "Future",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Beads of Ruin');
		},
		onAnyModifySpD(spd, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Beads of Ruin')) return;
			if (!move.ruinedSpD?.hasAbility('Beads of Ruin')) move.ruinedSpD = abilityHolder;
			if (move.ruinedSpD !== abilityHolder) return;
			this.debug('Beads of Ruin SpD drop');
			return this.chainModify(0.75);
		},
		name: "Beads of Ruin",
		rating: 4.5,
		num: 284,
	},
	beastboost: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				const bestStat = source.getBestStat(true, true);
				this.boost({[bestStat]: length}, source);
			}
		},
		name: "Beast Boost",
		rating: 3.5,
		num: 224,
	},
	berserk: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spa: 1}, target, target);
			}
		},
		name: "Berserk",
		rating: 2,
		num: 201,
	},
	bigpecks: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		isBreakable: true,
		name: "Big Pecks",
		rating: 0.5,
		num: 145,
	},
	blaze: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	bulletproof: {
		onTryHit(pokemon, target, move) {
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Bulletproof');
				return null;
			}
		},
		isBreakable: true,
		name: "Bulletproof",
		rating: 3,
		num: 171,
	},
	cheekpouch: {
		onEatItem(item, pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
		},
		name: "Cheek Pouch",
		rating: 2,
		num: 167,
	},
	chillingneigh: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
			}
		},
		name: "Chilling Neigh",
		rating: 3,
		num: 264,
	},
	chlorophyll: {
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Chlorophyll",
		rating: 3,
		num: 34,
	},
	clearbody: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
			}
		},
		isBreakable: true,
		name: "Clear Body",
		rating: 2,
		num: 29,
	},
	cloudnine: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Cloud Nine does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (this.effectState.switchingIn) {
				this.add('-ability', pokemon, 'Cloud Nine');
				this.effectState.switchingIn = false;
			}
			this.eachEvent('WeatherChange', this.effect);
		},
		onEnd(pokemon) {
			this.eachEvent('WeatherChange', this.effect);
		},
		suppressWeather: true,
		name: "Cloud Nine",
		rating: 1.5,
		num: 13,
	},
	colorchange: {
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp) return;
			const type = move.type;
			if (
				target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
				type !== '???' && !target.hasType(type)
			) {
				if (!target.setType(type, false, target, this.effect)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Color Change');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.queue.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		name: "Color Change",
		rating: 0,
		num: 16,
	},
	comatose: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Comatose');
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Comatose');
			}
			return false;
		},
		// Permanent sleep "status" implemented in the relevant sleep-checking effects
		isPermanent: true,
		name: "Comatose",
		rating: 4,
		num: 213,
	},
	commander: {
		onUpdate(pokemon) {
			if (this.gameType !== 'doubles') return;
			const ally = pokemon.allies()[0];
			if (!ally || pokemon.transformed ||
				pokemon.baseSpecies.baseSpecies !== 'Tatsugiri' || ally.baseSpecies.baseSpecies !== 'Dondozo') {
				// Handle any edge cases
				if (pokemon.getVolatile('commanding')) pokemon.removeVolatile('commanding');
				return;
			}

			if (!pokemon.getVolatile('commanding')) {
				// If Dondozo already was commanded this fails
				if (ally.getVolatile('commanded')) return;
				// Cancel all actions this turn for pokemon if applicable
				this.queue.cancelAction(pokemon);
				// Add volatiles to both pokemon
				this.add('-activate', pokemon, 'ability: Commander', '[of] ' + ally);
				pokemon.addVolatile('commanding');
				ally.addVolatile('commanded', pokemon);
				// Continued in conditions.ts in the volatiles
			} else {
				if (!ally.fainted) return;
				pokemon.removeVolatile('commanding');
			}
		},
		name: "Commander",
		rating: 0,
		num: 279,
	},
	competitive: {
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				if (effect.id === 'stickyweb') {
					this.hint("Court Change Sticky Web counts as lowering your own Speed, and Competitive only affects stats lowered by foes.", true, source.side);
				}
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({spa: 2}, target, target, null, false, true);
			}
		},
		name: "Competitive",
		rating: 2.5,
		num: 172,
	},
	compoundeyes: {
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return this.chainModify([5325, 4096]);
		},
		name: "Compound Eyes",
		rating: 3,
		num: 14,
	},
	contrary: {
		onChangeBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			let i: BoostID;
			for (i in boost) {
				boost[i]! *= -1;
			}
		},
		isBreakable: true,
		name: "Contrary",
		rating: 4.5,
		num: 126,
	},
	corrosion: {
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		name: "Corrosion",
		rating: 2.5,
		num: 212,
	},
	costar: {
		onStart(pokemon) {
			const ally = pokemon.allies()[0];
			if (!ally) return;

			let i: BoostID;
			for (i in ally.boosts) {
				pokemon.boosts[i] = ally.boosts[i];
			}
			const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
			for (const volatile of volatilesToCopy) {
				if (ally.volatiles[volatile]) {
					pokemon.addVolatile(volatile);
					if (volatile === 'gmaxchistrike') pokemon.volatiles[volatile].layers = ally.volatiles[volatile].layers;
				} else {
					pokemon.removeVolatile(volatile);
				}
			}
			this.add('-copyboost', pokemon, ally, '[from] ability: Costar');
		},
		name: "Costar",
		rating: 0,
		num: 294,
	},
	cottondown: {
		onDamagingHit(damage, target, source, move) {
			let activated = false;
			for (const pokemon of this.getAllActive()) {
				if (pokemon === target || pokemon.fainted) continue;
				if (!activated) {
					this.add('-ability', target, 'Cotton Down');
					activated = true;
				}
				this.boost({spe: -1}, pokemon, target, null, true);
			}
		},
		name: "Cotton Down",
		rating: 2,
		num: 238,
	},
	cudchew: {
		onEatItem(item, pokemon) {
			if (item.isBerry && pokemon.addVolatile('cudchew')) {
				pokemon.volatiles['cudchew'].berry = item;
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['cudchew'];
		},
		condition: {
			noCopy: true,
			duration: 2,
			onRestart() {
				this.effectState.duration = 2;
			},
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onEnd(pokemon) {
				if (pokemon.hp) {
					const item = this.effectState.berry;
					this.add('-activate', pokemon, 'ability: Cud Chew');
					this.add('-enditem', pokemon, item.name, '[eat]');
					if (this.singleEvent('Eat', item, null, pokemon, null, null)) {
						this.runEvent('EatItem', pokemon, null, null, item);
					}
					if (item.onEat) pokemon.ateBerry = true;
				}
			},
		},
		name: "Cud Chew",
		rating: 2,
		num: 291,
	},
	curiousmedicine: {
		onStart(pokemon) {
			for (const ally of pokemon.adjacentAllies()) {
				ally.clearBoosts();
				this.add('-clearboost', ally, '[from] ability: Curious Medicine', '[of] ' + pokemon);
			}
		},
		name: "Curious Medicine",
		rating: 0,
		num: 261,
	},
	cursedbody: {
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
		name: "Cursed Body",
		rating: 2,
		num: 130,
	},
	cutecharm: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
		},
		name: "Cute Charm",
		rating: 0.5,
		num: 56,
	},
	damp: {
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.name === 'Aftermath') {
				return false;
			}
		},
		isBreakable: true,
		name: "Damp",
		rating: 0.5,
		num: 6,
	},
	dancer: {
		name: "Dancer",
		// implemented in runMove in scripts.js
		rating: 1.5,
		num: 216,
	},
	darkaura: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Dark Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Dark') return;
			if (!move.auraBooster?.hasAbility('Dark Aura')) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		name: "Dark Aura",
		rating: 3,
		num: 186,
	},
	dauntlessshield: {
		onStart(pokemon) {
			if (pokemon.shieldBoost) return;
			pokemon.shieldBoost = true;
			this.boost({def: 1}, pokemon);
		},
		name: "Dauntless Shield",
		rating: 3.5,
		num: 235,
	},
	dazzling: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Dazzling', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Dazzling",
		rating: 2.5,
		num: 219,
	},
	defeatist: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		name: "Defeatist",
		rating: -1,
		num: 129,
	},
	defiant: {
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				if (effect.id === 'stickyweb') {
					this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
				}
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 2}, target, target, null, false, true);
			}
		},
		name: "Defiant",
		rating: 3,
		num: 128,
	},
	deltastream: {
		onStart(source) {
			this.field.setWeather('deltastream');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'deltastream' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('deltastream')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Delta Stream",
		rating: 4,
		num: 191,
	},
	desolateland: {
		onStart(source) {
			this.field.setWeather('desolateland');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('desolateland')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Desolate Land",
		rating: 4.5,
		num: 190,
	},
	disguise: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['mimikyu', 'mimikyutotem'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Disguise",
		rating: 3.5,
		num: 209,
	},
	download: {
		onStart(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.foes()) {
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 1});
			} else if (totalspd) {
				this.boost({atk: 1});
			}
		},
		name: "Download",
		rating: 3.5,
		num: 88,
	},
	dragonsmaw: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		name: "Dragon's Maw",
		rating: 3.5,
		num: 263,
	},
	drizzle: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
		},
		name: "Drizzle",
		rating: 4,
		num: 2,
	},
	drought: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('sunnyday');
		},
		name: "Drought",
		rating: 4,
		num: 70,
	},
	dryskin: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Dry Skin');
				}
				return null;
			}
		},
		onSourceBasePowerPriority: 17,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(1.25);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 8);
			} else if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		isBreakable: true,
		name: "Dry Skin",
		rating: 3,
		num: 87,
	},
	earlybird: {
		name: "Early Bird",
		// Implemented in statuses.js
		rating: 1.5,
		num: 48,
	},
	eartheater: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Earth Eater');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Earth Eater",
		rating: 3.5,
		num: 297,
	},
	effectspore: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target) && !source.status && source.runStatusImmunity('powder')) {
				const r = this.random(100);
				if (r < 11) {
					source.setStatus('slp', target);
				} else if (r < 21) {
					source.setStatus('par', target);
				} else if (r < 30) {
					source.setStatus('psn', target);
				}
			}
		},
		name: "Effect Spore",
		rating: 2,
		num: 27,
	},
	electricsurge: {
		onStart(source) {
			this.field.setTerrain('electricterrain');
		},
		name: "Electric Surge",
		rating: 4,
		num: 226,
	},
	electromorphosis: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			target.addVolatile('charge');
		},
		name: "Electromorphosis",
		rating: 3,
		num: 280,
	},
	embodyaspectcornerstone: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.name === 'Ogerpon-Cornerstone-Tera' && !pokemon.transformed) {
				this.boost({def: 1}, pokemon);
			}
		},
		name: "Embody Aspect (Cornerstone)",
		rating: 3.5,
		num: 304,
	},
	embodyaspecthearthflame: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.name === 'Ogerpon-Hearthflame-Tera' && !pokemon.transformed) {
				this.boost({atk: 1}, pokemon);
			}
		},
		name: "Embody Aspect (Hearthflame)",
		rating: 3.5,
		num: 303,
	},
	embodyaspectteal: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.name === 'Ogerpon-Teal-Tera' && !pokemon.transformed) {
				this.boost({spe: 1}, pokemon);
			}
		},
		name: "Embody Aspect (Teal)",
		rating: 3.5,
		num: 301,
	},
	embodyaspectwellspring: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.name === 'Ogerpon-Wellspring-Tera' && !pokemon.transformed) {
				this.boost({spd: 1}, pokemon);
			}
		},
		name: "Embody Aspect (Wellspring)",
		rating: 3.5,
		num: 302,
	},
	emergencyexit: {
		onEmergencyExit(target) {
			if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
			for (const side of this.sides) {
				for (const active of side.active) {
					active.switchFlag = false;
				}
			}
			target.switchFlag = true;
			this.add('-activate', target, 'ability: Emergency Exit');
		},
		name: "Emergency Exit",
		rating: 1,
		num: 194,
	},
	fairyaura: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Fairy Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster?.hasAbility('Fairy Aura')) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		name: "Fairy Aura",
		rating: 3,
		num: 187,
	},
	filter: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		name: "Filter",
		rating: 3,
		num: 111,
	},
	flamebody: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		name: "Flame Body",
		rating: 2,
		num: 49,
	},
	flareboost: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		name: "Flare Boost",
		rating: 2,
		num: 138,
	},
	flashfire: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
		isBreakable: true,
		name: "Flash Fire",
		rating: 3.5,
		num: 18,
	},
	flowergift: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				if (pokemon.species.id !== 'cherrimsunshine') {
					pokemon.formeChange('Cherrim-Sunshine', this.effect, false, '[msg]');
				}
			} else {
				if (pokemon.species.id === 'cherrimsunshine') {
					pokemon.formeChange('Cherrim', this.effect, false, '[msg]');
				}
			}
		},
		onAllyModifyAtkPriority: 3,
		onAllyModifyAtk(atk, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onAllyModifySpDPriority: 4,
		onAllyModifySpD(spd, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		isBreakable: true,
		name: "Flower Gift",
		rating: 1,
		num: 122,
	},
	flowerveil: {
		onAllyTryBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Grass')) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Flower Veil');
				if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Grass') && status.id === 'yawn') {
				this.debug('Flower Veil blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		name: "Flower Veil",
		rating: 0,
		num: 166,
	},
	fluffy: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		isBreakable: true,
		name: "Fluffy",
		rating: 3.5,
		num: 218,
	},
	forecast: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
			case 'snow':
				if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.species.id !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		},
		name: "Forecast",
		rating: 2,
		num: 59,
	},
	forewarn: {
		onStart(pokemon) {
			let warnMoves: (Move | Pokemon)[][] = [];
			let warnBp = 1;
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add('-activate', pokemon, 'ability: Forewarn', warnMoveName, '[of] ' + warnTarget);
		},
		name: "Forewarn",
		rating: 0.5,
		num: 108,
	},
	friendguard: {
		name: "Friend Guard",
		onAnyModifyDamage(damage, source, target, move) {
			if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
				this.debug('Friend Guard weaken');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		rating: 0,
		num: 132,
	},
	frisk: {
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		name: "Frisk",
		rating: 1.5,
		num: 119,
	},
	fullmetalbody: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Full Metal Body", "[of] " + target);
			}
		},
		name: "Full Metal Body",
		rating: 2,
		num: 230,
	},
	furcoat: {
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		isBreakable: true,
		name: "Fur Coat",
		rating: 4,
		num: 169,
	},
	galewings: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying' && pokemon.hp === pokemon.maxhp) return priority + 1;
		},
		name: "Gale Wings",
		rating: 1.5,
		num: 177,
	},
	galvanize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Electric';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Galvanize",
		rating: 4,
		num: 206,
	},
	gluttony: {
		name: "Gluttony",
		rating: 1.5,
		num: 82,
		onStart(pokemon) {
			pokemon.abilityState.gluttony = true;
		},
		onDamage(item, pokemon) {
			pokemon.abilityState.gluttony = true;
		},

	},
	goodasgold: {
		onTryHit(target, source, move) {
			if (move.category === 'Status' && target !== source) {
				this.add('-immune', target, '[from] ability: Good as Gold');
				return null;
			}
		},
		isBreakable: true,
		name: "Good as Gold",
		rating: 5,
		num: 283,
	},
	gooey: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.add('-ability', target, 'Gooey');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Gooey",
		rating: 2,
		num: 183,
	},
	gorillatactics: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Gorilla Tactics");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Gorilla Tactics Atk Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Gorilla Tactics",
		rating: 4.5,
		num: 255,
	},
	grasspelt: {
		onModifyDefPriority: 6,
		onModifyDef(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		isBreakable: true,
		name: "Grass Pelt",
		rating: 0.5,
		num: 179,
	},
	grassysurge: {
		onStart(source) {
			this.field.setTerrain('grassyterrain');
		},
		name: "Grassy Surge",
		rating: 4,
		num: 229,
	},
	grimneigh: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		name: "Grim Neigh",
		rating: 3,
		num: 265,
	},
	guarddog: {
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Guard Dog');
			return null;
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.boost({atk: 1}, target, target, null, false, true);
			}
		},
		isBreakable: true,
		name: "Guard Dog",
		rating: 2,
		num: 275,
	},
	gulpmissile: {
		onDamagingHit(damage, target, source, move) {
			if (!source.hp || !source.isActive || target.transformed || target.isSemiInvulnerable()) return;
			if (['cramorantgulping', 'cramorantgorging'].includes(target.species.id)) {
				this.damage(source.baseMaxhp / 4, source, target);
				if (target.species.id === 'cramorantgulping') {
					this.boost({def: -1}, source, target, null, true);
				} else {
					source.trySetStatus('par', target, move);
				}
				target.formeChange('cramorant', move);
			}
		},
		// The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
		onSourceTryPrimaryHit(target, source, effect) {
			if (
				effect && effect.id === 'surf' && source.hasAbility('gulpmissile') &&
				source.species.name === 'Cramorant' && !source.transformed
			) {
				const forme = source.hp <= source.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				source.formeChange(forme, effect);
			}
		},
		isPermanent: true,
		name: "Gulp Missile",
		rating: 2.5,
		num: 241,
	},
	guts: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Guts",
		rating: 3.5,
		num: 62,
	},
	hadronengine: {
		onStart(pokemon) {
			if (!this.field.setTerrain('electricterrain') && this.field.isTerrain('electricterrain')) {
				this.add('-activate', pokemon, 'ability: Hadron Engine');
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (this.field.isTerrain('electricterrain')) {
				this.debug('Hadron Engine boost');
				return this.chainModify([5461, 4096]);
			}
		},
		name: "Hadron Engine",
		rating: 4.5,
		num: 289,
	},
	harvest: {
		name: "Harvest",
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland']) || this.randomChance(1, 2)) {
				if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
				}
			}
		},
		rating: 2.5,
		num: 139,
	},
	healer: {
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			for (const allyActive of pokemon.adjacentAllies()) {
				if (allyActive.status && this.randomChance(3, 10)) {
					this.add('-activate', pokemon, 'ability: Healer');
					allyActive.cureStatus();
				}
			}
		},
		rating: 0,
		num: 131,
	},
	heatproof: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Heatproof Atk weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Heatproof SpA weaken');
				return this.chainModify(0.5);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'brn') {
				return damage / 2;
			}
		},
		isBreakable: true,
		name: "Heatproof",
		rating: 2,
		num: 85,
	},
	heavymetal: {
		onModifyWeightPriority: 1,
		onModifyWeight(weighthg) {
			return weighthg * 2;
		},
		isBreakable: true,
		name: "Heavy Metal",
		rating: 0,
		num: 134,
	},
	honeygather: {
		name: "Honey Gather",
		rating: 0,
		num: 118,
	},
	hospitality: {
		onStart(pokemon) {
			for (const ally of pokemon.adjacentAllies()) {
				this.heal(ally.baseMaxhp / 4, ally, pokemon);
			}
		},
		name: "Hospitality",
		rating: 0,
		num: 299,
	},
	hugepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Huge Power",
		rating: 5,
		num: 37,
	},
	hungerswitch: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.species.baseSpecies !== 'Morpeko' || pokemon.transformed || pokemon.terastallized) return;
			const targetForme = pokemon.species.name === 'Morpeko' ? 'Morpeko-Hangry' : 'Morpeko';
			pokemon.formeChange(targetForme);
		},
		name: "Hunger Switch",
		rating: 1,
		num: 258,
	},
	hustle: {
		// This should be applied directly to the stat as opposed to chaining with the others
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.modify(atk, 1.5);
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Physical' && typeof accuracy === 'number') {
				return this.chainModify([3277, 4096]);
			}
		},
		name: "Hustle",
		rating: 3.5,
		num: 55,
	},
	hydration: {
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (pokemon.status && ['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				this.debug('hydration');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		name: "Hydration",
		rating: 1.5,
		num: 93,
	},
	hypercutter: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
				}
			}
		},
		isBreakable: true,
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52,
	},
	icebody: {
		onWeather(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'snow') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Ice Body",
		rating: 1,
		num: 115,
	},
	iceface: {
		onStart(pokemon) {
			if (this.field.isWeather(['hail', 'snow']) &&
				pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' && effect.category === 'Physical' &&
				target.species.id === 'eiscue' && !target.transformed
			) {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['bypasssub'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'eiscue' && this.effectState.busted) {
				pokemon.formeChange('Eiscue-Noice', this.effect, true);
			}
		},
		onWeatherChange(pokemon, source, sourceEffect) {
			// snow/hail resuming because Cloud Nine/Air Lock ended does not trigger Ice Face
			if ((sourceEffect as Ability)?.suppressWeather) return;
			if (!pokemon.hp) return;
			if (this.field.isWeather(['hail', 'snow']) &&
				pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Ice Face",
		rating: 3,
		num: 248,
	},
	icescales: {
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Ice Scales",
		rating: 4,
		num: 246,
	},
	illuminate: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Illuminate", "[of] " + target);
				}
			}
		},
		onModifyMove(move) {
			move.ignoreEvasion = true;
		},
		isBreakable: true,
		name: "Illuminate",
		rating: 0.5,
		num: 35,
	},
	illusion: {
		onBeforeSwitchIn(pokemon) {
			pokemon.illusion = null;
			// yes, you can Illusion an active pokemon but only if it's to your right
			for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				const possibleTarget = pokemon.side.pokemon[i];
				if (!possibleTarget.fainted) {
					// If Ogerpon is in the last slot while the Illusion Pokemon is Terastallized
					// Illusion will not disguise as anything
					if (!pokemon.terastallized || possibleTarget.species.baseSpecies !== 'Ogerpon') {
						pokemon.illusion = possibleTarget;
					}
					break;
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
					(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		name: "Illusion",
		rating: 4.5,
		num: 149,
	},
	immunity: {
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.add('-activate', pokemon, 'ability: Immunity');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'psn' && status.id !== 'tox') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Immunity');
			}
			return false;
		},
		isBreakable: true,
		name: "Immunity",
		rating: 2,
		num: 17,
	},
	imposter: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Imposter does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			// copies across in doubles/triples
			// (also copies across in multibattle and diagonally in free-for-all,
			// but side.foe already takes care of those)
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				pokemon.transformInto(target, this.dex.abilities.get('imposter'));
			}
			this.effectState.switchingIn = false;
		},
		name: "Imposter",
		rating: 5,
		num: 150,
	},
	infiltrator: {
		onModifyMove(move) {
			move.infiltrates = true;
		},
		name: "Infiltrator",
		rating: 2.5,
		num: 151,
	},
	innardsout: {
		name: "Innards Out",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.damage(target.getUndynamaxedHP(damage), source, target);
			}
		},
		rating: 4,
		num: 215,
	},
	innerfocus: {
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Focus', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Inner Focus",
		rating: 1,
		num: 39,
	},
	insomnia: {
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Insomnia');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Insomnia');
			}
			return false;
		},
		isBreakable: true,
		name: "Insomnia",
		rating: 1.5,
		num: 15,
	},
	intimidate: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "Intimidate",
		rating: 3.5,
		num: 22,
	},
	intrepidsword: {
		onStart(pokemon) {
			if (pokemon.swordBoost) return;
			pokemon.swordBoost = true;
			this.boost({atk: 1}, pokemon);
		},
		name: "Intrepid Sword",
		rating: 4,
		num: 234,
	},
	ironbarbs: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Iron Barbs",
		rating: 2.5,
		num: 160,
	},
	ironfist: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([4915, 4096]);
			}
		},
		name: "Iron Fist",
		rating: 3,
		num: 89,
	},
	justified: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				this.boost({atk: 1});
			}
		},
		name: "Justified",
		rating: 2.5,
		num: 154,
	},
	keeneye: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
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
	klutz: {
		// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
		onStart(pokemon) {
			this.singleEvent('End', pokemon.getItem(), pokemon.itemState, pokemon);
		},
		name: "Klutz",
		rating: -1,
		num: 103,
	},
	leafguard: {
		onSetStatus(status, target, source, effect) {
			if (['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Leaf Guard');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && ['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				this.add('-immune', target, '[from] ability: Leaf Guard');
				return null;
			}
		},
		isBreakable: true,
		name: "Leaf Guard",
		rating: 0.5,
		num: 102,
	},
	levitate: {
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		isBreakable: true,
		name: "Levitate",
		rating: 3.5,
		num: 26,
	},
	libero: {
		onPrepareHit(source, target, move) {
			if (this.effectState.libero) return;
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.effectState.libero = true;
				this.add('-start', source, 'typechange', type, '[from] ability: Libero');
			}
		},
		onSwitchIn() {
			delete this.effectState.libero;
		},
		name: "Libero",
		rating: 4,
		num: 236,
	},
	lightmetal: {
		onModifyWeight(weighthg) {
			return this.trunc(weighthg / 2);
		},
		isBreakable: true,
		name: "Light Metal",
		rating: 1,
		num: 135,
	},
	lightningrod: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Lightning Rod",
		rating: 3,
		num: 31,
	},
	limber: {
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				this.add('-activate', pokemon, 'ability: Limber');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'par') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Limber');
			}
			return false;
		},
		isBreakable: true,
		name: "Limber",
		rating: 2,
		num: 7,
	},
	lingeringaroma: {
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'lingeringaroma') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('lingeringaroma', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Lingering Aroma', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		name: "Lingering Aroma",
		rating: 2,
		num: 268,
	},
	liquidooze: {
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			const canOoze = ['drain', 'leechseed', 'strengthsap'];
			if (canOoze.includes(effect.id)) {
				this.damage(damage);
				return 0;
			}
		},
		name: "Liquid Ooze",
		rating: 2.5,
		num: 64,
	},
	liquidvoice: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.flags['sound'] && !pokemon.volatiles['dynamax']) { // hardcode
				move.type = 'Water';
			}
		},
		name: "Liquid Voice",
		rating: 1.5,
		num: 204,
	},
	longreach: {
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		name: "Long Reach",
		rating: 1,
		num: 203,
	},
	magicbounce: {
		name: "Magic Bounce",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
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
		condition: {
			duration: 1,
		},
		isBreakable: true,
		rating: 4,
		num: 156,
	},
	magicguard: {
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		name: "Magic Guard",
		rating: 4,
		num: 98,
	},
	magician: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target || source.switchFlag === true) return;
			if (target !== source && move.category !== 'Status') {
				if (source.item || source.volatiles['gem'] || move.id === 'fling') return;
				const yourItem = target.takeItem(source);
				if (!yourItem) return;
				if (!source.setItem(yourItem)) {
					target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
					return;
				}
				this.add('-item', source, yourItem, '[from] ability: Magician', '[of] ' + target);
			}
		},
		name: "Magician",
		rating: 1,
		num: 170,
	},
	magmaarmor: {
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Magma Armor');
				pokemon.cureStatus();
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		isBreakable: true,
		name: "Magma Armor",
		rating: 0.5,
		num: 40,
	},
	magnetpull: {
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasType('Steel') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.knownType || pokemon.hasType('Steel')) {
				pokemon.maybeTrapped = true;
			}
		},
		name: "Magnet Pull",
		rating: 4,
		num: 42,
	},
	marvelscale: {
		onModifyDefPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		isBreakable: true,
		name: "Marvel Scale",
		rating: 2.5,
		num: 63,
	},
	megalauncher: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['pulse']) {
				return this.chainModify(1.5);
			}
		},
		name: "Mega Launcher",
		rating: 3,
		num: 178,
	},
	merciless: {
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox'].includes(target.status)) return 5;
		},
		name: "Merciless",
		rating: 1.5,
		num: 196,
	},
	mimicry: {
		onStart(pokemon) {
			this.singleEvent('TerrainChange', this.effect, this.effectState, pokemon);
		},
		onTerrainChange(pokemon) {
			let types;
			switch (this.field.terrain) {
			case 'electricterrain':
				types = ['Electric'];
				break;
			case 'grassyterrain':
				types = ['Grass'];
				break;
			case 'mistyterrain':
				types = ['Fairy'];
				break;
			case 'psychicterrain':
				types = ['Psychic'];
				break;
			default:
				types = pokemon.baseSpecies.types;
			}
			const oldTypes = pokemon.getTypes();
			if (oldTypes.join() === types.join() || !pokemon.setType(types, false, pokemon, this.effect)) return;
			if (this.field.terrain || pokemon.transformed) {
				this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Mimicry');
				if (!this.field.terrain) this.hint("Transform Mimicry changes you to your original un-transformed types.");
			} else {
				this.add('-activate', pokemon, 'ability: Mimicry');
				this.add('-end', pokemon, 'typechange', '[silent]');
			}
		},
		name: "Mimicry",
		rating: 0,
		num: 250,
	},
	mindseye: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Mind's Eye", "[of] " + target);
				}
			}
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			move.ignoreEvasion = true;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		name: "Mind's Eye",
		rating: 0,
		num: 300,
	},
	minus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Minus",
		rating: 0,
		num: 58,
	},
	mirrorarmor: {
		onTryBoost(boost, target, source, effect) {
			// Don't bounce self stat changes, or boosts that have already bounced
			if (!source || target === source || !boost || effect.name === 'Mirror Armor') return;
			let b: BoostID;
			for (b in boost) {
				if (boost[b]! < 0) {
					if (target.boosts[b] === -6) continue;
					const negativeBoost: SparseBoostsTable = {};
					negativeBoost[b] = boost[b];
					delete boost[b];
					if (source.hp) {
						this.add('-ability', target, 'Mirror Armor');
						this.boost(negativeBoost, source, target, null, true);
					}
				}
			}
		},
		isBreakable: true,
		name: "Mirror Armor",
		rating: 2,
		num: 240,
	},
	mistysurge: {
		onStart(source) {
			this.field.setTerrain('mistyterrain');
		},
		name: "Misty Surge",
		rating: 3.5,
		num: 228,
	},
	moldbreaker: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Mold Breaker",
		rating: 3,
		num: 104,
	},
	moody: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost, pokemon, pokemon);
		},
		name: "Moody",
		rating: 5,
		num: 141,
	},
	motordrive: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Motor Drive');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Motor Drive",
		rating: 3,
		num: 78,
	},
	moxie: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
			}
		},
		name: "Moxie",
		rating: 3,
		num: 153,
	},
	multiscale: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Multiscale",
		rating: 3.5,
		num: 136,
	},
	multitype: {
		// Multitype's type-changing itself is implemented in statuses.js
		isPermanent: true,
		name: "Multitype",
		rating: 4,
		num: 121,
	},
	mummy: {
		name: "Mummy",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'mummy') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		rating: 2,
		num: 152,
	},
	myceliummight: {
		onFractionalPriorityPriority: -1,
		onFractionalPriority(priority, pokemon, target, move) {
			if (move.category === 'Status') {
				return -0.1;
			}
		},
		onModifyMove(move) {
			if (move.category === 'Status') {
				move.ignoreAbility = true;
			}
		},
		name: "Mycelium Might",
		rating: 2,
		num: 298,
	},
	naturalcure: {
		onCheckShow(pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;

			const cureList = [];
			let noCureCount = 0;
			for (const curPoke of pokemon.side.active) {
				// pokemon not statused
				if (!curPoke?.status) {
					// this.add('-message', "" + curPoke + " skipped: not statused or doesn't exist");
					continue;
				}
				if (curPoke.showCure) {
					// this.add('-message', "" + curPoke + " skipped: Natural Cure already known");
					continue;
				}
				const species = curPoke.species;
				// pokemon can't get Natural Cure
				if (!Object.values(species.abilities).includes('Natural Cure')) {
					// this.add('-message', "" + curPoke + " skipped: no Natural Cure");
					continue;
				}
				// pokemon's ability is known to be Natural Cure
				if (!species.abilities['1'] && !species.abilities['H']) {
					// this.add('-message', "" + curPoke + " skipped: only one ability");
					continue;
				}
				// pokemon isn't switching this turn
				if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
					// this.add('-message', "" + curPoke + " skipped: not switching");
					continue;
				}

				if (curPoke.hasAbility('naturalcure')) {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (and is)");
					cureList.push(curPoke);
				} else {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (but isn't)");
					noCureCount++;
				}
			}

			if (!cureList.length || !noCureCount) {
				// It's possible to know what pokemon were cured
				for (const pkmn of cureList) {
					pkmn.showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured

				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

				for (const pkmn of cureList) {
					pkmn.showCure = false;
				}
			}
		},
		onSwitchOut(pokemon) {
			if (!pokemon.status) return;

			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;

			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
			pokemon.clearStatus();

			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) pokemon.showCure = undefined;
		},
		name: "Natural Cure",
		rating: 2.5,
		num: 30,
	},
	neuroforce: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([5120, 4096]);
			}
		},
		name: "Neuroforce",
		rating: 2.5,
		num: 233,
	},
	neutralizinggas: {
		// Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
		onPreStart(pokemon) {
			if (pokemon.transformed) return;
			this.add('-ability', pokemon, 'Neutralizing Gas');
			pokemon.abilityState.ending = false;
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			for (const target of this.getAllActive()) {
				if (target.hasItem('Ability Shield')) {
					this.add('-block', target, 'item: Ability Shield');
					continue;
				}
				// Can't suppress a Tatsugiri inside of Dondozo already
				if (target.volatiles['commanding']) {
					continue;
				}
				if (target.illusion) {
					this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, pokemon, 'neutralizinggas');
				}
				if (target.volatiles['slowstart']) {
					delete target.volatiles['slowstart'];
					this.add('-end', target, 'Slow Start', '[silent]');
				}
				if (strongWeathers.includes(target.getAbility().id)) {
					this.singleEvent('End', this.dex.abilities.get(target.getAbility().id), target.abilityState, target, pokemon, 'neutralizinggas');
				}
			}
		},
		onEnd(source) {
			if (source.transformed) return;
			for (const pokemon of this.getAllActive()) {
				if (pokemon !== source && pokemon.hasAbility('Neutralizing Gas')) {
					return;
				}
			}
			this.add('-end', source, 'ability: Neutralizing Gas');

			// FIXME this happens before the pokemon switches out, should be the opposite order.
			// Not an easy fix since we cant use a supported event. Would need some kind of special event that
			// gathers events to run after the switch and then runs them when the ability is no longer accessible.
			// (If you're tackling this, do note extreme weathers have the same issue)

			// Mark this pokemon's ability as ending so Pokemon#ignoringAbility skips it
			if (source.abilityState.ending) return;
			source.abilityState.ending = true;
			const sortedActive = this.getAllActive();
			this.speedSort(sortedActive);
			for (const pokemon of sortedActive) {
				if (pokemon !== source) {
					if (pokemon.getAbility().isPermanent) continue; // does not interact with e.g Ice Face, Zen Mode

					// Will be suppressed by Pokemon#ignoringAbility if needed
					this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityState, pokemon);
					if (pokemon.ability === "gluttony") {
						pokemon.abilityState.gluttony = false;
					}
				}
			}
		},
		name: "Neutralizing Gas",
		rating: 4,
		num: 256,
	},
	noguard: {
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		name: "No Guard",
		rating: 4,
		num: 99,
	},
	normalize: {
		onModifyTypePriority: 1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'hiddenpower', 'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'struggle', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!(move.isZ && move.category !== 'Status') && !noModifyType.includes(move.id) &&
				// TODO: Figure out actual interaction
				!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Normal';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Normalize",
		rating: 0,
		num: 96,
	},
	oblivious: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Oblivious', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Oblivious",
		rating: 1.5,
		num: 12,
	},
	opportunist: {
		onFoeAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
			const pokemon = this.effectState.target;
			const positiveBoosts: Partial<BoostsTable> = {};
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! > 0) {
					positiveBoosts[i] = boost[i];
				}
			}
			if (Object.keys(positiveBoosts).length < 1) return;
			this.boost(positiveBoosts, pokemon);
		},
		name: "Opportunist",
		rating: 3,
		num: 290,
	},
	orichalcumpulse: {
		onStart(pokemon) {
			if (this.field.setWeather('sunnyday')) {
				this.add('-activate', pokemon, 'Orichalcum Pulse', '[source]');
			} else if (this.field.isWeather('sunnyday')) {
				this.add('-activate', pokemon, 'ability: Orichalcum Pulse');
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				this.debug('Orichalcum boost');
				return this.chainModify([5461, 4096]);
			}
		},
		name: "Orichalcum Pulse",
		rating: 4.5,
		num: 288,
	},
	overcoat: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'hyperboreanarctic' || type === 'powder') return false;
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['powder'] && target !== source && this.dex.getImmunity('powder', target)) {
				this.add('-immune', target, '[from] ability: Overcoat');
				return null;
			}
		},
		isBreakable: true,
		name: "Overcoat",
		rating: 2,
		num: 142,
	},
	overgrow: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	owntempo: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Own Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit(target, source, move) {
			if (move?.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Own Tempo', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Own Tempo",
		rating: 1.5,
		num: 20,
	},
	parentalbond: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
			move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
			move.multihit = 2;
			move.multihitType = 'parentalbond';
		},
		// Damage modifier implemented in BattleActions#modifyDamage()
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Parental Bond",
		rating: 4.5,
		num: 185,
	},
	pastelveil: {
		onStart(pokemon) {
			for (const ally of pokemon.alliesAndSelf()) {
				if (['psn', 'tox'].includes(ally.status)) {
					this.add('-activate', pokemon, 'ability: Pastel Veil');
					ally.cureStatus();
				}
			}
		},
		onUpdate(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', pokemon, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onAllySwitchIn(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', this.effectState.target, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Pastel Veil');
			}
			return false;
		},
		onAllySetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Pastel Veil', '[of] ' + effectHolder);
			}
			return false;
		},
		isBreakable: true,
		name: "Pastel Veil",
		rating: 2,
		num: 257,
	},
	perishbody: {
		onDamagingHit(damage, target, source, move) {
			if (!this.checkMoveMakesContact(move, source, target)) return;

			let announced = false;
			for (const pokemon of [target, source]) {
				if (pokemon.volatiles['perishsong']) continue;
				if (!announced) {
					this.add('-ability', target, 'Perish Body');
					announced = true;
				}
				pokemon.addVolatile('perishsong');
			}
		},
		name: "Perish Body",
		rating: 1,
		num: 253,
	},
	pickpocket: {
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && move?.flags['contact']) {
				if (target.item || target.switchFlag || target.forceSwitchFlag || source.switchFlag === true) {
					return;
				}
				const yourItem = source.takeItem(target);
				if (!yourItem) {
					return;
				}
				if (!target.setItem(yourItem)) {
					source.item = yourItem.id;
					return;
				}
				this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Pickpocket', '[of] ' + source);
				this.add('-item', target, yourItem, '[from] ability: Pickpocket', '[of] ' + source);
			}
		},
		name: "Pickpocket",
		rating: 1,
		num: 124,
	},
	pickup: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.item) return;
			const pickupTargets = this.getAllActive().filter(target => (
				target.lastItem && target.usedItemThisTurn && pokemon.isAdjacent(target)
			));
			if (!pickupTargets.length) return;
			const randomTarget = this.sample(pickupTargets);
			const item = randomTarget.lastItem;
			randomTarget.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] ability: Pickup');
			pokemon.setItem(item);
		},
		name: "Pickup",
		rating: 0.5,
		num: 53,
	},
	pixilate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fairy';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Pixilate",
		rating: 4,
		num: 182,
	},
	plus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Plus",
		rating: 0,
		num: 57,
	},
	poisonheal: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		name: "Poison Heal",
		rating: 4,
		num: 90,
	},
	poisonpoint: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('psn', target);
				}
			}
		},
		name: "Poison Point",
		rating: 1.5,
		num: 38,
	},
	poisontouch: {
		onSourceDamagingHit(damage, target, source, move) {
			// Despite not being a secondary, Shield Dust / Covert Cloak block Poison Touch's effect
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
			if (this.checkMoveMakesContact(move, target, source)) {
				if (this.randomChance(3, 10)) {
					target.trySetStatus('psn', source);
				}
			}
		},
		name: "Poison Touch",
		rating: 2,
		num: 143,
	},
	powerconstruct: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'zygardecomplete' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Zygarde-Complete', this.effect, true);
			pokemon.baseMaxhp = Math.floor(Math.floor(
				2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
			) * pokemon.level / 100 + 10);
			const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
			pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newMaxHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		isPermanent: true,
		name: "Power Construct",
		rating: 5,
		num: 211,
	},
	powerofalchemy: {
		onAllyFaint(target) {
			if (!this.effectState.target.hp) return;
			const ability = target.getAbility();
			const additionalBannedAbilities = [
				'noability', 'commander', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard',
			];
			if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
			if (this.effectState.target.setAbility(ability)) {
				this.add('-ability', this.effectState.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
			}
		},
		name: "Power of Alchemy",
		rating: 0,
		num: 223,
	},
	powerspot: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Power Spot",
		rating: 0,
		num: 249,
	},
	prankster: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		name: "Prankster",
		rating: 4,
		num: 158,
	},
	pressure: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP(target, source) {
			if (target.isAlly(source)) return;
			return 1;
		},
		name: "Pressure",
		rating: 2.5,
		num: 46,
	},
	primordialsea: {
		onStart(source) {
			this.field.setWeather('primordialsea');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'primordialsea' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('primordialsea')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Primordial Sea",
		rating: 4.5,
		num: 189,
	},
	prismarmor: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "Prism Armor",
		rating: 3,
		num: 232,
	},
	propellertail: {
		onModifyMovePriority: 1,
		onModifyMove(move) {
			// most of the implementation is in Battle#getTarget
			move.tracksTarget = move.target !== 'scripted';
		},
		name: "Propeller Tail",
		rating: 0,
		num: 239,
	},
	protean: {
		onPrepareHit(source, target, move) {
			if (this.effectState.protean) return;
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type, false, source, this.effect)) return;
				this.effectState.protean = true;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		onSwitchIn(pokemon) {
			delete this.effectState.protean;
		},
		name: "Protean",
		rating: 4,
		num: 168,
	},
	protosynthesis: {
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.transformed) return;
			// Protosynthesis is not affected by Utility Umbrella
			if (this.field.isWeather('sunnyday')) {
				pokemon.addVolatile('protosynthesis');
			} else if (!pokemon.volatiles['protosynthesis']?.fromBooster) {
				pokemon.removeVolatile('protosynthesis');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['protosynthesis'];
			this.add('-end', pokemon, 'Protosynthesis', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (effect?.id === 'boosterenergy') {
					this.effectState.fromBooster = true;
					this.add('-activate', pokemon, 'ability: Protosynthesis', '[fromitem]');
				} else {
					this.add('-activate', pokemon, 'ability: Protosynthesis');
				}
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'protosynthesis' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, source, target, move) {
				if (this.effectState.bestStat !== 'atk') return;
				this.debug('Protosynthesis atk boost');
				return this.chainModify([5325, 4096]);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, target, source, move) {
				if (this.effectState.bestStat !== 'def') return;
				this.debug('Protosynthesis def boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpAPriority: 5,
			onModifySpA(relayVar, source, target, move) {
				if (this.effectState.bestStat !== 'spa') return;
				this.debug('Protosynthesis spa boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpDPriority: 6,
			onModifySpD(relayVar, target, source, move) {
				if (this.effectState.bestStat !== 'spd') return;
				this.debug('Protosynthesis spd boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpe(spe, pokemon) {
				if (this.effectState.bestStat !== 'spe') return;
				this.debug('Protosynthesis spe boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Protosynthesis');
			},
		},
		isPermanent: true,
		name: "Protosynthesis",
		rating: 3,
		num: 281,
	},
	psychicsurge: {
		onStart(source) {
			this.field.setTerrain('psychicterrain');
		},
		name: "Psychic Surge",
		rating: 4,
		num: 227,
	},
	punkrock: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Punk Rock",
		rating: 3.5,
		num: 244,
	},
	purepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Pure Power",
		rating: 5,
		num: 74,
	},
	purifyingsalt: {
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Purifying Salt');
			}
			return false;
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn') {
				this.add('-immune', target, '[from] ability: Purifying Salt');
				return null;
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Purifying Salt weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Purifying Salt weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Purifying Salt",
		rating: 4,
		num: 272,
	},
	quarkdrive: {
		onStart(pokemon) {
			this.singleEvent('TerrainChange', this.effect, this.effectState, pokemon);
		},
		onTerrainChange(pokemon) {
			if (pokemon.transformed) return;
			if (this.field.isTerrain('electricterrain')) {
				pokemon.addVolatile('quarkdrive');
			} else if (!pokemon.volatiles['quarkdrive']?.fromBooster) {
				pokemon.removeVolatile('quarkdrive');
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['quarkdrive'];
			this.add('-end', pokemon, 'Quark Drive', '[silent]');
		},
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (effect?.id === 'boosterenergy') {
					this.effectState.fromBooster = true;
					this.add('-activate', pokemon, 'ability: Quark Drive', '[fromitem]');
				} else {
					this.add('-activate', pokemon, 'ability: Quark Drive');
				}
				this.effectState.bestStat = pokemon.getBestStat(false, true);
				this.add('-start', pokemon, 'quarkdrive' + this.effectState.bestStat);
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, source, target, move) {
				if (this.effectState.bestStat !== 'atk') return;
				this.debug('Quark Drive atk boost');
				return this.chainModify([5325, 4096]);
			},
			onModifyDefPriority: 6,
			onModifyDef(def, target, source, move) {
				if (this.effectState.bestStat !== 'def') return;
				this.debug('Quark Drive def boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpAPriority: 5,
			onModifySpA(relayVar, source, target, move) {
				if (this.effectState.bestStat !== 'spa') return;
				this.debug('Quark Drive spa boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpDPriority: 6,
			onModifySpD(relayVar, target, source, move) {
				if (this.effectState.bestStat !== 'spd') return;
				this.debug('Quark Drive spd boost');
				return this.chainModify([5325, 4096]);
			},
			onModifySpe(spe, pokemon) {
				if (this.effectState.bestStat !== 'spe') return;
				this.debug('Quark Drive spe boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Quark Drive');
			},
		},
		isPermanent: true,
		name: "Quark Drive",
		rating: 3,
		num: 282,
	},
	queenlymajesty: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Queenly Majesty",
		rating: 2.5,
		num: 214,
	},
	quickdraw: {
		onFractionalPriorityPriority: -1,
		onFractionalPriority(priority, pokemon, target, move) {
			if (move.category !== "Status" && this.randomChance(3, 10)) {
				this.add('-activate', pokemon, 'ability: Quick Draw');
				return 0.1;
			}
		},
		name: "Quick Draw",
		rating: 2.5,
		num: 259,
	},
	quickfeet: {
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Quick Feet",
		rating: 2.5,
		num: 95,
	},
	raindish: {
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		name: "Rain Dish",
		rating: 1.5,
		num: 44,
	},
	rattled: {
		onDamagingHit(damage, target, source, move) {
			if (['Dark', 'Bug', 'Ghost'].includes(move.type)) {
				this.boost({spe: 1});
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Intimidate') {
				this.boost({spe: 1});
			}
		},
		name: "Rattled",
		rating: 1,
		num: 155,
	},
	receiver: {
		onAllyFaint(target) {
			if (!this.effectState.target.hp) return;
			const ability = target.getAbility();
			const additionalBannedAbilities = [
				'noability', 'commander', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard',
			];
			if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
			if (this.effectState.target.setAbility(ability)) {
				this.add('-ability', this.effectState.target, ability, '[from] ability: Receiver', '[of] ' + target);
			}
		},
		name: "Receiver",
		rating: 0,
		num: 222,
	},
	reckless: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCrashDamage) {
				this.debug('Reckless boost');
				return this.chainModify([4915, 4096]);
			}
		},
		name: "Reckless",
		rating: 3,
		num: 120,
	},
	refrigerate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ice';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Refrigerate",
		rating: 4,
		num: 174,
	},
	regenerator: {
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.baseMaxhp / 3);
		},
		name: "Regenerator",
		rating: 4.5,
		num: 144,
	},
	ripen: {
		onTryHeal(damage, target, source, effect) {
			if (!effect) return;
			if (effect.name === 'Berry Juice' || effect.name === 'Leftovers') {
				this.add('-activate', target, 'ability: Ripen');
			}
			if ((effect as Item).isBerry) return this.chainModify(2);
		},
		onChangeBoost(boost, target, source, effect) {
			if (effect && (effect as Item).isBerry) {
				let b: BoostID;
				for (b in boost) {
					boost[b]! *= 2;
				}
			}
		},
		onSourceModifyDamagePriority: -1,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.abilityState.berryWeaken) {
				target.abilityState.berryWeaken = false;
				return this.chainModify(0.5);
			}
		},
		onTryEatItemPriority: -1,
		onTryEatItem(item, pokemon) {
			this.add('-activate', pokemon, 'ability: Ripen');
		},
		onEatItem(item, pokemon) {
			const weakenBerries = [
				'Babiri Berry', 'Charti Berry', 'Chilan Berry', 'Chople Berry', 'Coba Berry', 'Colbur Berry', 'Haban Berry', 'Kasib Berry', 'Kebia Berry', 'Occa Berry', 'Passho Berry', 'Payapa Berry', 'Rindo Berry', 'Roseli Berry', 'Shuca Berry', 'Tanga Berry', 'Wacan Berry', 'Yache Berry',
			];
			// Record if the pokemon ate a berry to resist the attack
			pokemon.abilityState.berryWeaken = weakenBerries.includes(item.name);
		},
		name: "Ripen",
		rating: 2,
		num: 247,
	},
	rivalry: {
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Rivalry boost');
					return this.chainModify(1.25);
				} else {
					this.debug('Rivalry weaken');
					return this.chainModify(0.75);
				}
			}
		},
		name: "Rivalry",
		rating: 0,
		num: 79,
	},
	rkssystem: {
		// RKS System's type-changing itself is implemented in statuses.js
		isPermanent: true,
		name: "RKS System",
		rating: 4,
		num: 225,
	},
	rockhead: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		name: "Rock Head",
		rating: 3,
		num: 69,
	},
	rockypayload: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rocky Payload boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rocky Payload boost');
				return this.chainModify(1.5);
			}
		},
		name: "Rocky Payload",
		rating: 3.5,
		num: 276,
	},
	roughskin: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Rough Skin",
		rating: 2.5,
		num: 24,
	},
	runaway: {
		name: "Run Away",
		rating: 0,
		num: 50,
	},
	sandforce: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('sandstorm')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
					this.debug('Sand Force boost');
					return this.chainModify([5325, 4096]);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Force",
		rating: 2,
		num: 159,
	},
	sandrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Rush",
		rating: 3,
		num: 146,
	},
	sandspit: {
		onDamagingHit(damage, target, source, move) {
			this.field.setWeather('sandstorm');
		},
		name: "Sand Spit",
		rating: 1,
		num: 245,
	},
	sandstream: {
		onStart(source) {
			this.field.setWeather('sandstorm');
		},
		name: "Sand Stream",
		rating: 4,
		num: 45,
	},
	sandveil: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				return this.chainModify([3277, 4096]);
			}
		},
		isBreakable: true,
		name: "Sand Veil",
		rating: 1.5,
		num: 8,
	},
	sapsipper: {
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Sap Sipper');
				}
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (source === this.effectState.target || !target.isAlly(source)) return;
			if (move.type === 'Grass') {
				this.boost({atk: 1}, this.effectState.target);
			}
		},
		isBreakable: true,
		name: "Sap Sipper",
		rating: 3,
		num: 157,
	},
	schooling: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.species.id === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.species.id === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		isPermanent: true,
		name: "Schooling",
		rating: 3,
		num: 208,
	},
	scrappy: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
		name: "Scrappy",
		rating: 3,
		num: 113,
	},
	screencleaner: {
		onStart(pokemon) {
			let activated = false;
			for (const sideCondition of ['reflect', 'lightscreen', 'auroraveil']) {
				for (const side of [pokemon.side, ...pokemon.side.foeSidesWithConditions()]) {
					if (side.getSideCondition(sideCondition)) {
						if (!activated) {
							this.add('-activate', pokemon, 'ability: Screen Cleaner');
							activated = true;
						}
						side.removeSideCondition(sideCondition);
					}
				}
			}
		},
		name: "Screen Cleaner",
		rating: 2,
		num: 251,
	},
	seedsower: {
		onDamagingHit(damage, target, source, move) {
			this.field.setTerrain('grassyterrain');
		},
		name: "Seed Sower",
		rating: 2.5,
		num: 269,
	},
	serenegrace: {
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		name: "Serene Grace",
		rating: 3.5,
		num: 32,
	},
	shadowshield: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Shadow Shield weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Shadow Shield",
		rating: 3.5,
		num: 231,
	},
	shadowtag: {
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
		name: "Shadow Tag",
		rating: 5,
		num: 23,
	},
	sharpness: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['slicing']) {
				this.debug('Shapness boost');
				return this.chainModify(1.5);
			}
		},
		name: "Sharpness",
		rating: 3.5,
		num: 292,
	},
	shedskin: {
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.randomChance(33, 100)) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Shed Skin');
				pokemon.cureStatus();
			}
		},
		name: "Shed Skin",
		rating: 3,
		num: 61,
	},
	sheerforce: {
		onModifyMove(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Technically not a secondary effect, but it is negated
				delete move.self;
				if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([5325, 4096]);
		},
		name: "Sheer Force",
		rating: 3.5,
		num: 125,
	},
	shellarmor: {
		onCriticalHit: false,
		isBreakable: true,
		name: "Shell Armor",
		rating: 1,
		num: 75,
	},
	shielddust: {
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		isBreakable: true,
		name: "Shield Dust",
		rating: 2,
		num: 19,
	},
	shieldsdown: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.species.forme !== 'Meteor') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.species.forme === 'Meteor') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.species.forme !== 'Meteor') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.species.forme === 'Meteor') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onSetStatus(status, target, source, effect) {
			if (target.species.id !== 'miniormeteor' || target.transformed) return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Shields Down');
			}
			return false;
		},
		onTryAddVolatile(status, target) {
			if (target.species.id !== 'miniormeteor' || target.transformed) return;
			if (status.id !== 'yawn') return;
			this.add('-immune', target, '[from] ability: Shields Down');
			return null;
		},
		isPermanent: true,
		name: "Shields Down",
		rating: 3,
		num: 197,
	},
	simple: {
		onChangeBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			let i: BoostID;
			for (i in boost) {
				boost[i]! *= 2;
			}
		},
		isBreakable: true,
		name: "Simple",
		rating: 4,
		num: 86,
	},
	skilllink: {
		onModifyMove(move) {
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		name: "Skill Link",
		rating: 3,
		num: 92,
	},
	slowstart: {
		onStart(pokemon) {
			pokemon.addVolatile('slowstart');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['slowstart'];
			this.add('-end', pokemon, 'Slow Start', '[silent]');
		},
		condition: {
			duration: 5,
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(0.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		name: "Slow Start",
		rating: -1,
		num: 112,
	},
	slushrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snow'])) {
				return this.chainModify(2);
			}
		},
		name: "Slush Rush",
		rating: 3,
		num: 202,
	},
	sniper: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		name: "Sniper",
		rating: 2,
		num: 97,
	},
	snowcloak: {
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather(['hail', 'snow'])) {
				this.debug('Snow Cloak - decreasing accuracy');
				return this.chainModify([3277, 4096]);
			}
		},
		isBreakable: true,
		name: "Snow Cloak",
		rating: 1.5,
		num: 81,
	},
	snowwarning: {
		onStart(source) {
			this.field.setWeather('snow');
		},
		name: "Snow Warning",
		rating: 4,
		num: 117,
	},
	solarpower: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		name: "Solar Power",
		rating: 2,
		num: 94,
	},
	solidrock: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Solid Rock neutralize');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		name: "Solid Rock",
		rating: 3,
		num: 116,
	},
	soulheart: {
		onAnyFaintPriority: 1,
		onAnyFaint() {
			this.boost({spa: 1}, this.effectState.target);
		},
		name: "Soul-Heart",
		rating: 3.5,
		num: 220,
	},
	soundproof: {
		onTryHit(target, source, move) {
			if (target !== source && move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Soundproof');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', this.effectState.target, '[from] ability: Soundproof');
			}
		},
		isBreakable: true,
		name: "Soundproof",
		rating: 2,
		num: 43,
	},
	speedboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		name: "Speed Boost",
		rating: 4.5,
		num: 3,
	},
	stakeout: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		name: "Stakeout",
		rating: 4.5,
		num: 198,
	},
	stall: {
		onFractionalPriority: -0.1,
		name: "Stall",
		rating: -1,
		num: 100,
	},
	stalwart: {
		onModifyMovePriority: 1,
		onModifyMove(move) {
			// most of the implementation is in Battle#getTarget
			move.tracksTarget = move.target !== 'scripted';
		},
		name: "Stalwart",
		rating: 0,
		num: 242,
	},
	stamina: {
		onDamagingHit(damage, target, source, effect) {
			this.boost({def: 1});
		},
		name: "Stamina",
		rating: 3.5,
		num: 192,
	},
	stancechange: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			const targetForme = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Stance Change",
		rating: 4,
		num: 176,
	},
	static: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('par', target);
				}
			}
		},
		name: "Static",
		rating: 2,
		num: 9,
	},
	steadfast: {
		onFlinch(pokemon) {
			this.boost({spe: 1});
		},
		name: "Steadfast",
		rating: 1,
		num: 80,
	},
	steamengine: {
		onDamagingHit(damage, target, source, move) {
			if (['Water', 'Fire'].includes(move.type)) {
				this.boost({spe: 6});
			}
		},
		name: "Steam Engine",
		rating: 2,
		num: 243,
	},
	steelworker: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		name: "Steelworker",
		rating: 3.5,
		num: 200,
	},
	steelyspirit: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steely Spirit boost');
				return this.chainModify(1.5);
			}
		},
		name: "Steely Spirit",
		rating: 3.5,
		num: 252,
	},
	stench: {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		name: "Stench",
		rating: 0.5,
		num: 1,
	},
	stickyhold: {
		onTakeItem(item, pokemon, source) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!pokemon.hp || pokemon.item === 'stickybarb') return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		isBreakable: true,
		name: "Sticky Hold",
		rating: 1.5,
		num: 60,
	},
	stormdrain: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Storm Drain');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Storm Drain",
		rating: 3,
		num: 114,
	},
	strongjaw: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return this.chainModify(1.5);
			}
		},
		name: "Strong Jaw",
		rating: 3.5,
		num: 173,
	},
	sturdy: {
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		isBreakable: true,
		name: "Sturdy",
		rating: 3,
		num: 5,
	},
	suctioncups: {
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Suction Cups');
			return null;
		},
		isBreakable: true,
		name: "Suction Cups",
		rating: 1,
		num: 21,
	},
	superluck: {
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Super Luck",
		rating: 1.5,
		num: 105,
	},
	supersweetsyrup: {
		onStart(pokemon) {
			if (pokemon.syrupTriggered) return;
			pokemon.syrupTriggered = true;
			this.add('-ability', pokemon, 'Supersweet Syrup');
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Supersweet Syrup', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({evasion: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "Supersweet Syrup",
		rating: 1.5,
		num: 306,
	},
	supremeoverlord: {
		onStart(pokemon) {
			if (pokemon.side.totalFainted) {
				this.add('-activate', pokemon, 'ability: Supreme Overlord');
				const fallen = Math.min(pokemon.side.totalFainted, 5);
				this.add('-start', pokemon, `fallen${fallen}`, '[silent]');
				this.effectState.fallen = fallen;
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.effectState.fallen) {
				const powMod = [4096, 4506, 4915, 5325, 5734, 6144];
				this.debug(`Supreme Overlord boost: ${powMod[this.effectState.fallen]}/4096`);
				return this.chainModify([powMod[this.effectState.fallen], 4096]);
			}
		},
		name: "Supreme Overlord",
		rating: 4,
		num: 293,
	},
	surgesurfer: {
		onModifySpe(spe) {
			if (this.field.isTerrain('electricterrain')) {
				return this.chainModify(2);
			}
		},
		name: "Surge Surfer",
		rating: 3,
		num: 207,
	},
	swarm: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	sweetveil: {
		name: "Sweet Veil",
		onAllySetStatus(status, target, source, effect) {
			if (status.id === 'slp') {
				this.debug('Sweet Veil interrupts sleep');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (status.id === 'yawn') {
				this.debug('Sweet Veil blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		rating: 2,
		num: 175,
	},
	swiftswim: {
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Swift Swim",
		rating: 3,
		num: 33,
	},
	symbiosis: {
		onAllyAfterUseItem(item, pokemon) {
			if (pokemon.switchFlag) return;
			const source = this.effectState.target;
			const myItem = source.takeItem();
			if (!myItem) return;
			if (
				!this.singleEvent('TakeItem', myItem, source.itemState, pokemon, source, this.effect, myItem) ||
				!pokemon.setItem(myItem)
			) {
				source.item = myItem.id;
				return;
			}
			this.add('-activate', source, 'ability: Symbiosis', myItem, '[of] ' + pokemon);
		},
		name: "Symbiosis",
		rating: 0,
		num: 180,
	},
	synchronize: {
		onAfterSetStatus(status, target, source, effect) {
			if (!source || source === target) return;
			if (effect && effect.id === 'toxicspikes') return;
			if (status.id === 'slp' || status.id === 'frz') return;
			this.add('-activate', target, 'ability: Synchronize');
			// Hack to make status-prevention abilities think Synchronize is a status move
			// and show messages when activating against it.
			source.trySetStatus(status, target, {status: status.id, id: 'synchronize'} as Effect);
		},
		name: "Synchronize",
		rating: 2,
		num: 28,
	},
	swordofruin: {
		isNonstandard: "Future",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Sword of Ruin');
		},
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Sword of Ruin')) return;
			if (!move.ruinedDef?.hasAbility('Sword of Ruin')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Sword of Ruin Def drop');
			return this.chainModify(0.75);
		},
		name: "Sword of Ruin",
		rating: 4.5,
		num: 285,
	},
	tabletsofruin: {
		isNonstandard: "Future",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Tablets of Ruin');
		},
		onAnyModifyAtk(atk, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Tablets of Ruin')) return;
			if (!move.ruinedAtk) move.ruinedAtk = abilityHolder;
			if (move.ruinedAtk !== abilityHolder) return;
			this.debug('Tablets of Ruin Atk drop');
			return this.chainModify(0.75);
		},
		name: "Tablets of Ruin",
		rating: 4.5,
		num: 284,
	},
	tangledfeet: {
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target?.volatiles['confusion']) {
				this.debug('Tangled Feet - decreasing accuracy');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Tangled Feet",
		rating: 1,
		num: 77,
	},
	tanglinghair: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.add('-ability', target, 'Tangling Hair');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Tangling Hair",
		rating: 2,
		num: 221,
	},
	technician: {
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
			this.debug('Base Power: ' + basePowerAfterMultiplier);
			if (basePowerAfterMultiplier <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		name: "Technician",
		rating: 3.5,
		num: 101,
	},
	telepathy: {
		onTryHit(target, source, move) {
			if (target !== source && target.isAlly(source) && move.category !== 'Status') {
				this.add('-activate', target, 'ability: Telepathy');
				return null;
			}
		},
		isBreakable: true,
		name: "Telepathy",
		rating: 0,
		num: 140,
	},
	teravolt: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Teravolt');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Teravolt",
		rating: 3,
		num: 164,
	},
	thermalexchange: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				this.boost({atk: 1});
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Thermal Exchange');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Thermal Exchange');
			}
			return false;
		},
		name: "Thermal Exchange",
		rating: 2.5,
		num: 270,
	},
	thickfat: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Thick Fat",
		rating: 3.5,
		num: 47,
	},
	tintedlens: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		name: "Tinted Lens",
		rating: 4,
		num: 110,
	},
	torrent: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	toughclaws: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Tough Claws",
		rating: 3.5,
		num: 181,
	},
	toxicboost: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical') {
				return this.chainModify(1.5);
			}
		},
		name: "Toxic Boost",
		rating: 3,
		num: 137,
	},
	toxicchain: {
		onSourceDamagingHit(damage, target, source, move) {
			// Despite not being a secondary, Shield Dust / Covert Cloak block Toxic Chain's effect
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;

			if (this.randomChance(3, 10)) {
				target.trySetStatus('tox', source);
			}
		},
		name: "Toxic Chain",
		rating: 4.5,
		num: 305,
	},
	toxicdebris: {
		onDamagingHit(damage, target, source, move) {
			const side = source.isAlly(target) ? source.side.foe : source.side;
			const toxicSpikes = side.sideConditions['toxicspikes'];
			if (move.category === 'Physical' && (!toxicSpikes || toxicSpikes.layers < 2)) {
				this.add('-activate', target, 'ability: Toxic Debris');
				side.addSideCondition('toxicspikes', target);
			}
		},
		name: "Toxic Debris",
		rating: 3.5,
		num: 295,
	},
	trace: {
		onStart(pokemon) {
			// n.b. only affects Hackmons
			// interaction with No Ability is complicated: https://www.smogon.com/forums/threads/pokemon-sun-moon-battle-mechanics-research.3586701/page-76#post-7790209
			if (pokemon.adjacentFoes().some(foeActive => foeActive.ability === 'noability')) {
				this.effectState.gaveUp = true;
			}
			// interaction with Ability Shield is similar to No Ability
			if (pokemon.hasItem('Ability Shield')) {
				this.add('-block', pokemon, 'item: Ability Shield');
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability', 'commander', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			if (pokemon.setAbility(ability)) {
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			}
		},
		name: "Trace",
		rating: 2.5,
		num: 36,
	},
	transistor: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Transistor",
		rating: 3.5,
		num: 262,
	},
	triage: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.flags['heal']) return priority + 3;
		},
		name: "Triage",
		rating: 3.5,
		num: 205,
	},
	truant: {
		onStart(pokemon) {
			pokemon.removeVolatile('truant');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.queue.willMove(pokemon))) {
				pokemon.addVolatile('truant');
			}
		},
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
			pokemon.addVolatile('truant');
		},
		condition: {},
		name: "Truant",
		rating: -1,
		num: 54,
	},
	turboblaze: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Turboblaze');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Turboblaze",
		rating: 3,
		num: 163,
	},
	unaware: {
		name: "Unaware",
		onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		isBreakable: true,
		rating: 4,
		num: 109,
	},
	unburden: {
		onAfterUseItem(item, pokemon) {
			if (pokemon !== this.effectState.target) return;
			pokemon.addVolatile('unburden');
		},
		onTakeItem(item, pokemon) {
			pokemon.addVolatile('unburden');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('unburden');
		},
		condition: {
			onModifySpe(spe, pokemon) {
				if (!pokemon.item && !pokemon.ignoringAbility()) {
					return this.chainModify(2);
				}
			},
		},
		name: "Unburden",
		rating: 3.5,
		num: 84,
	},
	unnerve: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onStart(pokemon) {
			if (this.effectState.unnerved) return;
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		name: "Unnerve",
		rating: 1,
		num: 127,
	},
	unseenfist: {
		onModifyMove(move) {
			if (move.flags['contact']) delete move.flags['protect'];
		},
		name: "Unseen Fist",
		rating: 2,
		num: 260,
	},
	vesselofruin: {
		isNonstandard: "Future",
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Vessel of Ruin');
		},
		onAnyModifySpA(spa, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Vessel of Ruin')) return;
			if (!move.ruinedSpA) move.ruinedSpA = abilityHolder;
			if (move.ruinedSpA !== abilityHolder) return;
			this.debug('Vessel of Ruin SpA drop');
			return this.chainModify(0.75);
		},
		name: "Vessel of Ruin",
		rating: 4.5,
		num: 284,
	},
	victorystar: {
		onAnyModifyAccuracyPriority: -1,
		onAnyModifyAccuracy(accuracy, target, source) {
			if (source.isAlly(this.effectState.target) && typeof accuracy === 'number') {
				return this.chainModify([4506, 4096]);
			}
		},
		name: "Victory Star",
		rating: 2,
		num: 162,
	},
	vitalspirit: {
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Vital Spirit');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Vital Spirit');
			}
			return false;
		},
		isBreakable: true,
		name: "Vital Spirit",
		rating: 1.5,
		num: 72,
	},
	voltabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Volt Absorb",
		rating: 3.5,
		num: 10,
	},
	wanderingspirit: {
		onDamagingHit(damage, target, source, move) {
			const additionalBannedAbilities = ['commander', 'hungerswitch', 'illusion', 'neutralizinggas', 'wonderguard'];
			if (source.getAbility().isPermanent || additionalBannedAbilities.includes(source.ability) ||
				target.volatiles['dynamax']
			) {
				return;
			}

			if (this.checkMoveMakesContact(move, source, target)) {
				const targetCanBeSet = this.runEvent('SetAbility', target, source, this.effect, source.ability);
				if (!targetCanBeSet) return targetCanBeSet;
				const sourceAbility = source.setAbility('wanderingspirit', target);
				if (!sourceAbility) return;
				if (target.isAlly(source)) {
					this.add('-activate', target, 'Skill Swap', '', '', '[of] ' + source);
				} else {
					this.add('-activate', target, 'ability: Wandering Spirit', this.dex.abilities.get(sourceAbility).name, 'Wandering Spirit', '[of] ' + source);
				}
				target.setAbility(sourceAbility);
			}
		},
		name: "Wandering Spirit",
		rating: 2.5,
		num: 254,
	},
	waterabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Water Absorb",
		rating: 3.5,
		num: 11,
	},
	waterbubble: {
		onSourceModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Bubble');
			}
			return false;
		},
		isBreakable: true,
		name: "Water Bubble",
		rating: 4.5,
		num: 199,
	},
	watercompaction: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				this.boost({def: 2});
			}
		},
		name: "Water Compaction",
		rating: 1.5,
		num: 195,
	},
	waterveil: {
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Veil');
			}
			return false;
		},
		isBreakable: true,
		name: "Water Veil",
		rating: 2,
		num: 41,
	},
	weakarmor: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 2}, target, target);
			}
		},
		name: "Weak Armor",
		rating: 1,
		num: 133,
	},
	wellbakedbody: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({def: 2})) {
					this.add('-immune', target, '[from] ability: Well-Baked Body');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Well-Baked Body",
		rating: 3.5,
		num: 273,
	},
	whitesmoke: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
			}
		},
		isBreakable: true,
		name: "White Smoke",
		rating: 2,
		num: 73,
	},
	wimpout: {
		onEmergencyExit(target) {
			if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
			for (const side of this.sides) {
				for (const active of side.active) {
					active.switchFlag = false;
				}
			}
			target.switchFlag = true;
			this.add('-activate', target, 'ability: Wimp Out');
		},
		name: "Wimp Out",
		rating: 1,
		num: 193,
	},
	windpower: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['wind']) {
				target.addVolatile('charge');
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind') {
				pokemon.addVolatile('charge');
			}
		},
		name: "Wind Power",
		rating: 1,
		num: 277,
	},
	windrider: {
		onStart(pokemon) {
			if (pokemon.side.sideConditions['tailwind']) {
				this.boost({atk: 1}, pokemon, pokemon);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.flags['wind']) {
				if (!this.boost({atk: 1}, target, target)) {
					this.add('-immune', target, '[from] ability: Wind Rider');
				}
				return null;
			}
		},
		onAllySideConditionStart(target, source, sideCondition) {
			const pokemon = this.effectState.target;
			if (sideCondition.id === 'tailwind') {
				this.boost({atk: 1}, pokemon, pokemon);
			}
		},
		isBreakable: true,
		name: "Wind Rider",
		rating: 3.5,
		// We do not want Brambleghast to get Infiltrator in Randbats
		num: 274,
	},
	wonderguard: {
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Wonder Guard');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Wonder Guard",
		rating: 5,
		num: 25,
	},
	wonderskin: {
		onModifyAccuracyPriority: 10,
		onModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof accuracy === 'number') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 50;
			}
		},
		isBreakable: true,
		name: "Wonder Skin",
		rating: 2,
		num: 147,
	},
	zenmode: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp > pokemon.maxhp / 2 && ['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('zenmode');
			}
		},
		onEnd(pokemon) {
			if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['zenmode'];
			if (pokemon.species.baseSpecies === 'Darmanitan' && pokemon.species.battleOnly) {
				pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
			}
		},
		condition: {
			onStart(pokemon) {
				if (!pokemon.species.name.includes('Galar')) {
					if (pokemon.species.id !== 'darmanitanzen') pokemon.formeChange('Darmanitan-Zen');
				} else {
					if (pokemon.species.id !== 'darmanitangalarzen') pokemon.formeChange('Darmanitan-Galar-Zen');
				}
			},
			onEnd(pokemon) {
				if (['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
					pokemon.formeChange(pokemon.species.battleOnly as string);
				}
			},
		},
		isPermanent: true,
		name: "Zen Mode",
		rating: 0,
		num: 161,
	},
	zerotohero: {
		onSwitchOut(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Palafin' || pokemon.transformed) return;
			if (pokemon.species.forme !== 'Hero') {
				pokemon.formeChange('Palafin-Hero', this.effect, true);
			}
		},
		onSwitchIn() {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			if (!this.effectState.switchingIn) return;
			this.effectState.switchingIn = false;
			if (pokemon.baseSpecies.baseSpecies !== 'Palafin' || pokemon.transformed) return;
			if (!this.effectState.heroMessageDisplayed && pokemon.species.forme === 'Hero') {
				this.add('-activate', pokemon, 'ability: Zero to Hero');
				this.effectState.heroMessageDisplayed = true;
			}
		},
		isPermanent: true,
		name: "Zero to Hero",
		rating: 5,
		num: 278,
	},

	// CAP
	mountaineer: {
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onTryHit(target, source, move) {
			if (move.type === 'Rock' && !target.activeTurns) {
				this.add('-immune', target, '[from] ability: Mountaineer');
				return null;
			}
		},
		isNonstandard: "CAP",
		isBreakable: true,
		name: "Mountaineer",
		rating: 3,
		num: -2,
	},
	rebound: {
		isNonstandard: "CAP",
		name: "Rebound",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (this.effectState.target.activeTurns) return;

			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			this.actions.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (this.effectState.target.activeTurns) return;

			if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			this.actions.useMove(newMove, this.effectState.target, source);
			return null;
		},
		condition: {
			duration: 1,
		},
		isBreakable: true,
		rating: 3,
		num: -3,
	},
	persistent: {
		isNonstandard: "CAP",
		name: "Persistent",
		// implemented in the corresponding move
		rating: 3,
		num: -4,
	},
	/* Clover Exclusive Abilities */
	adminabuse: {
		name: "Admin Abuse",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.hammer) {
				this.debug('Admin Abuse boost');
				return this.chainModify(1.2);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.flags.hammer) {
				if (move.recoil) delete move.recoil;
				if (move.self && move.self.boosts) {
					this.debug('eliminating possible stat drops on the user');
					Object.entries(move.self.boosts).forEach(([key, value]) => {
						if (value && value < 0 && move?.self?.boosts) {
							delete (move.self.boosts as any)[key];
						}
					});
				}
			}
		},
		rating: 4,
		isNonstandard: "Future",
	},
	anability: {
		name: "An Ability",
		rating: 0,
		isNonstandard: "Future",
	},
	anyability: {
		name: "Any Ability",
		onStart(pokemon) {
			const bannedAbilities = [
				'wonderguard',
				'trace',
				'forecast',
				'comatose',
				'artificial',
				'anability',
				'anyability',
				'presage',
				'boardpowera',
				'boardpowerb',
				'boardpowerc',
				'boardpowerco',
				'boardpowerd',
				'boardpowerf',
				'boardpowerfa',
				'boardpowerfit',
				'boardpowerg',
				'boardpowerh',
				'boardpowerint',
				'boardpowerjp',
				'boardpowerk',
				'boardpowerout',
				'boardpowerpol',
				'boardpowerr9k',
				'boardpower5',
				'boardpowers4s',
				'boardpowersoc',
				'boardpowersp',
				'boardpowertrv',
				'boardpowertv',
				'boardpowerv',
				'boardpowervg',
				'boardpowervp',
				'boardpowervr',
				'boardpowerx',
				'boardpowerz',
			];
			const abilityList = Object.values(this.dex.data.Abilities)
				.filter((ability) => !bannedAbilities.includes(this.toID(ability.name)))
				.filter((ability) => !ability.isNonstandard)
				.map((ability) => this.toID(ability.name));
			const randomAbility = this.sample(abilityList);

			if (randomAbility) {
				const oldAbility = pokemon.setAbility(randomAbility);

				if (oldAbility) {
					this.add('-ability', pokemon, randomAbility, '[from] move: Any Ability');
					return;
				}
			}

			return false;
		},
		rating: 4,
		isNonstandard: "Future",
	},
	bigguy: {
		name: "Big Guy",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Big Guy');
			this.field.addPseudoWeather('gravity');
		},
		rating: 4,
		isNonstandard: "Future",
	},
	blademaster: {
		name: "Blademaster",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.slicing) {
				this.debug('Blademaster boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onModifyCritRatio(critRatio, target, source, move) {
			if (target && move.flags.slicing) return critRatio + 1;
		},
		rating: 4,
		isNonstandard: "Future",
	},
	boombox: {
		name: "Boombox",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Boombox boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				return this.chainModify(0.5);
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	bonezone: {
		name: "Bone Zone",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Bone Zone');
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (move.flags.bone) {
				this.dex.types.all().forEach(({name}) => {
					if (!move.ignoreImmunity) move.ignoreImmunity = {};
					if (move.ignoreImmunity !== true) {
						move.ignoreImmunity[name] = true;
					}
				});
				move.ignoreAbility = true;
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	concert: {
		name: "Concert",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Concert');
		},
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			const targets = this.sides.flatMap((side) => side.allies(true));
			for (const target of targets) {
				if (!target || !target.hp || pokemon === target) continue;
				if (!target.hasAbility(['soundproof', 'cacophony'])) {
					this.damage(target.baseMaxhp / 16, target, pokemon);
				}
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	degenerate: {
		name: "Degenerate",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (move.type === 'Normal' && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dark';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			const validTypes = ['Dark', 'Normal'];
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (validTypes.includes(move.type) && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		rating: 4,
		isNonstandard: "Future",
	},
	degradation: {
		name: "Degradation",
		onAnyEffectiveness(typemod, target, type, move) {
			const degradationUser = this.effectState.target;

			if (degradationUser !== this.activePokemon) return;

			if (move.type === 'Dark' && ['Normal', 'Fairy'].includes(type)) {
				return 1;
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	flareheal: {
		name: "Flare Heal",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.status === 'brn' && move.id !== 'facade') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				if (this.toID(target.side.name).includes('doomwillbefallall')) {
					this.add('-message', `${target.side.name} is cringe!`);
					this.add('-message', `${target.side.name} still wets the bed!`);
					this.add('-message', `${target.side.name} sharted!`);
				}
				return false;
			}
		},
		rating: 4,
		isNonstandard: "Future",
	},
	ghostnote: {
		name: "Ghost Note",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Ghost';
			}
		},
		rating: 2,
		isNonstandard: "Future",
	},
	gradient: {
		name: "Gradient",
		onStart(pokemon) {
			const possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && pokemon.isAdjacent(foeActive));
			let rand = 0;
			if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
			const target = possibleTargets[rand];
			if (target && target.species) {
				const color = target.species.color;
				const colorType: Record<string, string> = {
					red: 'Fire',
					blue: 'Water',
					yellow: 'Electric',
					green: 'Grass',
					black: 'Dark',
					brown: 'Ground',
					purple: 'Poison',
					gray: 'Steel',
					white: 'Flying',
					pink: 'Fairy',
				};
				const type = colorType[this.toID(color)];
				if (type && pokemon.setType(type, false, pokemon, this.effect)) {
					this.add('-start', pokemon, 'typechange', type, '[from] ability: Gradient');
				}
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.species.id !== 'biteki') return;
			if (['Ice', 'Psychic'].includes(move.type)) {
				move.forceSTAB = true;
			}
		},
		rating: 2,
		isNonstandard: "Future",
	},
	hydrophile: {
		name: "Hydrophile",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Hydrophile boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Hydrophile boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Hydrophile');
				}
				return null;
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 8);
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	inversion: {
		name: "Inversion",
		onStart(source) {
			this.field.addPseudoWeather('inverseroom');
		},
		rating: 2.5,
		isNonstandard: "Future",
	},
	jewelry: {
		name: "Jewelry",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.item) return;
			let possibleMoves = pokemon.moveSlots.filter((moveSlot) => {
				const move = this.dex.moves.get(moveSlot.move);

				return move.category === 'Physical' || move.category === 'Special';
			});

			if (possibleMoves.length < 1) {
				possibleMoves = pokemon.moveSlots;
			}

			const randomMoveSlot = this.sample(possibleMoves);

			if (randomMoveSlot) {
				const randomMove = this.dex.moves.get(randomMoveSlot.move);
				const itemText = `${randomMove.type} Gem`;
				const item = this.dex.items.get(itemText);
				if (pokemon.setItem(item)) {
					this.add('-item', pokemon, item, '[from] ability: Jewelry');
				}
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	madman: {
		name: "Madman",
		onSourceDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, target, source)) {
				target.addVolatile('confusion', source);
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	moreroom: {
		name: "More Room",
		rating: 2.5,
		isNonstandard: "Future",
	},
	pollution: {
		name: "Pollution",
		onAnyEffectiveness(typemod, target, type, move) {
			const pollutionUser = this.effectState.target;

			if (pollutionUser !== this.activePokemon) return;

			if (move.type === 'Poison' && ['Water', 'Flying', 'Ground'].includes(type)) {
				return 1;
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	pozzed: {
		name: "Pozzed",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Poison') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Pozzed');
				}
				return null;
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Pozzed boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Pozzed boost');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	puppeteer: {
		name: "Puppeteer",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	showerpower: {
		name: "Shower Power",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		rating: 2,
		isNonstandard: "Future",
	},
	striker: {
		name: "Striker",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.kick) {
				this.debug('Striker boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move.flags.kick) {
				this.debug('Striker - ensuring perfect accuracy');
				return true;
			}
			return accuracy;
		},
		rating: 3,
		isNonstandard: "Future",
	},
	suddenly: {
		name: "Suddenly",
		onChargeMove(pokemon, target, move) {
			this.debug('suddenly - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		rating: 4,
		isNonstandard: "Future",
	},
	waitforit: {
		name: "Wait For It",
		onStart(pokemon) {
			pokemon.addVolatile('waitforit');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['waitforit'];
			this.add('-end', pokemon, 'Wait For It', '[silent]');
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Wait For It');
			},
			onEnd(target) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				this.add('-end', target, 'Wait For It');
			},
		},
		rating: 2,
		isNonstandard: "Future",
	},
	woke: {
		name: "Woke",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'woke') {
				return;
			}
			if (move.flags['contact']) {
				const oldAbility = source.setAbility('woke', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Woke', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.25);
		},
		rating: 2,
		isNonstandard: "Future",
	},
	woodenguard: {
		name: "Wooden Guard",
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fire') return this.chainModify(1.5);
			return this.chainModify(0.75);
		},
		rating: 3,
		isNonstandard: "Future",
	},
	jihad: {
		name: "Jihad",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.selfdestruct) return priority + 1;
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		isNonstandard: "Future",
	},
	phantasma: {
		name: "Phantasma",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Phantasma boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Phantasma boost');
				return this.chainModify(1.5);
			}
		},
		onImmunity(type) {
			if (type === 'trapped') return false;
		},
		// TODO: Make Curse Ghost-type
		isNonstandard: "Future",
	},
	shitstorm: {
		name: "Shitstorm",
		onStart() {
			this.field.addPseudoWeather('mudsport');
			this.field.addPseudoWeather('watersport');
		},
		isNonstandard: "Future",
	},
	fuku: {
		name: "Fuk U",
		onStart(source) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon === source) continue;
				if (pokemon.isSemiInvulnerable()) continue;
				if (pokemon.volatiles['substitute']) continue;
				this.add('-start', pokemon, 'typechange', 'Normal', '[from] ability: Fuk U', '[of] ' + source);
				pokemon.setType('Normal', false, source, this.effect);
			}
		},
		isNonstandard: "Future",
	},
	stinkbomb: {
		name: "Stink Bomb",
		onStart(source) {
			for (const pokemon of this.getAllActive()) {
				this.add('-ability', pokemon, 'Stench', '[from] ability: Stink Bomb', '[of] ' + source);
				pokemon.setAbility('stench', source);
				pokemon.addVolatile('stinkbomb');
			}
		},
		isNonstandard: "Future",
	},
	whiteflames: {
		name: "White Flames",
		onSourceModifyDamage(damage, source, target, move) {
			if (source.species.tags.includes('Inferior')) {
				this.add('-ability', target, 'White Flames');
				if (target.species.tags.includes('Inferior')) {
					this.add('-message', `${target.name} is an Uncle Tom!`);
				}
				return this.chainModify(0.5);
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (target.species.tags.includes('Inferior')) {
				this.add('-ability', pokemon, 'White Flames');
				if (pokemon.species.tags.includes('Inferior')) {
					this.add('-message', `${pokemon.name} is an Uncle Tom!`);
				}
				return this.chainModify(1.2);
			}
		},
		isNonstandard: "Future",
	},
	boardpowera: {
		name: "Board Power (/a/)",
		onTryHit(pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Board Power (/a/)');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Board Power (/a/)');
				return target.hp - 1;
			}
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.side.pokemonLeft === 1) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				pokemon.abilityState.anime = true;
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!target?.abilityState?.anime) return;
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Board Power (/a/)", "[of] " + target);
			}
		},
		isPermanent: true,
		rating: 3,
		num: 5,
		isNonstandard: "Future",
	},
	boardpowerb: {
		name: "Board Power (/b/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			const boardAbilities = [
				'boardpowera',
				'boardpowerc',
				'boardpowerco',
				'boardpowerd',
				'boardpowerf',
				'boardpowerfa',
				'boardpowerfit',
				'boardpowerg',
				'boardpowerh',
				'boardpowerint',
				'boardpowerjp',
				'boardpowerk',
				'boardpowerout',
				'boardpowerpol',
				'boardpowerr9k',
				'boardpower5',
				'boardpowers4s',
				'boardpowersoc',
				'boardpowersp',
				'boardpowertrv',
				'boardpowertv',
				'boardpowerv',
				'boardpowervg',
				'boardpowervp',
				'boardpowervr',
				'boardpowerx',
				'boardpowerz',
			];
			const randomAbility = this.sample(boardAbilities);
			const ability = this.dex.abilities.get(randomAbility);

			if (ability && ability.exists) {
				const oldAbility = pokemon.setAbility(ability, pokemon, true);

				if (oldAbility) {
					this.add('-ability', pokemon, ability, '[from] ability: Board Power (/b/)');
					return;
				}
			}

			return false;
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerc: {
		name: "Board Power (/c/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Fairy', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Fairy', '[from] ability: Board Power (/c/)');
			}
			pokemon.abilityState.irresistable = true;
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerco: {
		name: "Board Power (/co/)",
		onDamage(damage, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.type === 'Dark') {
				this.boost({atk: 1});
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.type === 'Dark') {
				return -1;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerd: {
		name: "Board Power (/d/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Dark', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Dark', '[from] ability: Board Power (/d/)');
			}
			this.actions.useMove('Stockpile', pokemon);
		},
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (move.type === 'Normal' && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dark';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			const validTypes = ['Dark', 'Normal'];
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (validTypes.includes(move.type) && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerf: {
		name: "Board Power (/f/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.field.addPseudoWeather('inverseroom');
		},
		onModifyMovePriority: -6969,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.id === 'flash') {
				move.basePower = 90;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerfa: {
		name: "Board Power (/fa/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability',
				'flowergift',
				'forecast',
				'hungerswitch',
				'illusion',
				'imposter',
				'neutralizinggas',
				'powerofalchemy',
				'receiver',
				'trace',
				'zenmode',
				'presage',
				'artificial',
				'wonderguard',
				'anyability',
				'comatose',
				'flowergift',
				'boardpowera',
				'boardpowerb',
				'boardpowerc',
				'boardpowerco',
				'boardpowerd',
				'boardpowerf',
				'boardpowerfa',
				'boardpowerfit',
				'boardpowerg',
				'boardpowerh',
				'boardpowerint',
				'boardpowerjp',
				'boardpowerk',
				'boardpowerout',
				'boardpowerpol',
				'boardpowerr9k',
				'boardpower5',
				'boardpowers4s',
				'boardpowersoc',
				'boardpowersp',
				'boardpowertrv',
				'boardpowertv',
				'boardpowerv',
				'boardpowervg',
				'boardpowervp',
				'boardpowervr',
				'boardpowerx',
				'boardpowerz',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);

			// Copy Ability
			const ability = target.getAbility();
			this.add('-ability', pokemon, ability, '[from] ability: Board Power (/fa/)', '[of] ' + target);
			pokemon.setAbility(ability);

			// Copy Types
			const newBaseTypes = target.getTypes(true);
			this.add('-start', pokemon, 'typechange', newBaseTypes.join('/'), '[from] ability: Board Power (/fa/)', '[of] ' + target);
			pokemon.setType(newBaseTypes, false, pokemon, this.effect);

			// Copy Boosts
			let i: BoostID;
			for (i in target.boosts) {
				pokemon.boosts[i] = target.boosts[i];
			}
			this.add('-copyboost', pokemon, target, '[from] ability: Board Power (/fa/)');
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerfit: {
		name: "Board Power (/fit/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Fighting', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Fighting', '[from] ability: Board Power (/fit/)');
			}
			this.actions.useMove('Hulk Up', pokemon);
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerg: {
		name: "Board Power (/g/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Electric', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Electric', '[from] ability: Board Power (/g/)');
			}
			this.field.setTerrain('electricterrain');
			this.actions.useMove('Charge', pokemon);
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerh: {
		name: "Board Power (/h/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Fire', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Fire', '[from] ability: Board Power (/h/)');
			}
			pokemon.abilityState.irresistable = true;
		},
		onDamagingHit(damage, target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
		},
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'attract') return;
				}
				move.secondaries.push({
					chance: 33,
					volatileStatus: 'attract',
				});
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerint: {
		name: "Board Power (/int/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.field.setTerrain('psychicterrain');
		},
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			move.stab = 2;
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerjp: {
		name: "Board Power (/jp/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Fairy', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Fairy', '[from] ability: Board Power (/jp/)');
			}
			this.field.setTerrain('mistyterrain');
		},
		onModifyMovePriority: -2,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerk: {
		name: "Board Power (/k/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Steel', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Steel', '[from] ability: Board Power (/k/)');
			}
			this.boost({def: 1, spd: 1}, pokemon);
		},
		onTryHit(pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Board Power (/k/)');
				return null;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerout: {
		name: "Board Power (/out/)",
		onStart(pokemon) {
			this.add('-message', pokemon.baseSpecies.baseSpecies);
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.field.setTerrain('grassyterrain');
		},
		onBasePower(relayVar, source, target, move) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move?.flags?.naturePower) return this.chainModify(2);
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerpol: {
		name: "Board Power (/pol/)",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!defender.activeTurns) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!defender.activeTurns) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify(2);
			}
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			let boosted = true;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (this.queue.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true && move.type === 'Psychic') {
				move.ignoreImmunity['Psychic'] = true;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerr9k: {
		name: "Board Power (/r9k/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			for (const activePokemon of this.getAllActive()) {
				activePokemon.addVolatile('torment');
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpower5: {
		name: "Board Power (/5/)",
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			pokemon.addVolatile('boardpower5');
		},
		onEnd(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			delete pokemon.volatiles['boardpower5'];
			this.add('-end', pokemon, 'Board Power (/5/)', '[silent]');
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Board Power (/5/)');
			},
			onEnd(target) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				this.add('-end', target, 'Board Power (/5/)');
			},
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowers4s: {
		name: "Board Power (/s4s/)",
		onModifyPriority(priority, pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowersoc: {
		name: "Board Power (/soc/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			for (const target of pokemon.foes()) {
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Board Power (/soc/)', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		onAnyModifyDamage(damage, source, target, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba' &&
			this.effectState.target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
				this.debug('Board Power (/soc/) weaken');
				return this.chainModify(0.75);
			}
		},
		onTryHit(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target !== source && move.type === 'Poison') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Board Power (/soc/)');
				}
				return null;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.type === 'Poison') return this.chainModify(1.5);
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowersp: {
		name: "Board Power (/sp/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.boost({spe: 1}, pokemon);
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba' &&
			this.effectState.target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, this.effectState.target, source);
			return null;
		},
		condition: {
			duration: 1,
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowertrv: {
		name: "Board Power (/trv/)",
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.effectiveWeather().length) {
				return this.chainModify(2);
			}
		},
		onModifyMovePriority: -6969,
		onModifyMove(move, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.effectiveWeather().length) {
				if (move.id === 'weatherball') {
					move.basePower = 150;
				}
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowertv: {
		name: "Board Power (/tv/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Ground', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Ground', '[from] ability: Board Power (/tv/)');
			}
			this.field.addPseudoWeather('gravity');
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerv: {
		name: "Board Power (/v/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Board Power (/v/)");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Board Power (/v/) Atk Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			pokemon.abilityState.choiceLock = "";
		},
		onHit(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Board Power (/v/)');
			}
			if (target !== source && move.category !== 'Status') {
				this.boost({atk: 1});
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowervg: {
		name: "Board Power (/vg/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Dragon', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Dragon', '[from] ability: Board Power (/vg/)');
			}
		},
		onAfterMove(source, target, move) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!this.effectState.repetition) {
				this.effectState.repetition = {moveId: move.id, times: 1};
			} else {
				if (this.effectState.repetition.moveId === move.id) {
					this.effectState.repetition.times++;
				} else {
					this.effectState.repetition = {moveId: move.id, times: 1};
				}
			}
		},
		onModifyMovePriority: -6969,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.category === 'Status') return;
			if (!this.effectState.repetition) return;

			const {moveId, times} = this.effectState.repetition;

			if (moveId !== move.id) return;
			move.basePower = Math.min(160, move.basePower * Math.pow(1.2, times));
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowervp: {
		name: "Board Power (/vp/)",
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target !== source && move.type === 'Bug') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Board Power (/vp/)');
				}
				return null;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowervr: {
		name: "Board Power (/vr/)",
		onStart(source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			for (const pokemon of this.getAllActive()) {
				if (pokemon === source) continue;
				pokemon.addVolatile('retro');
			}
			this.field.addPseudoWeather('magicroom');
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerx: {
		name: "Board Power (/x/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.addType('Ghost', pokemon, this.effect)) {
				this.add('-start', pokemon, 'typeadd', 'Ghost', '[from] ability: Board Power (/x/)');
			}
			for (const activePokemon of this.getAllActive()) {
				if (activePokemon === pokemon) continue;
				if (activePokemon.isSemiInvulnerable()) continue;
				if (activePokemon.volatiles['substitute']) continue;
				this.add('-start', activePokemon, 'typechange', 'Ghost', '[from] ability: Board Power (/x/)');
				activePokemon.setType('Ghost', false, pokemon, this.effect);
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	boardpowerz: {
		name: "Board Power (/z/)",
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.add('-start', pokemon, 'typechange', '???', '[from] ability: Board Power (/z/)');
			pokemon.setType('???', false, pokemon, this.effect);
		},
		onModifySecondaries(secondaries, target, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			this.debug('Board Power (/z/) prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		onTryBoost(boost, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Board Power (/z/)", "[of] " + target);
				}
			}
		},
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			move.ignoreEvasion = true;
		},
		onSetStatus(status, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Board Power (/z/)');
			}
			return false; // TODO: Remove Comatose checks from base mod
		},
		isPermanent: true,
		onCriticalHit: false,
		isNonstandard: "Future",
	},
	presage: {
		name: "Presage",
		onBeforeMove(source, target, move) {
			if (move.category === 'Status') return;
			const sunMoves = ['solarbeam', 'solarblade'];
			const rainMoves = ['thunder', 'hurricane'];
			const isInRain = ['raindance', 'primordialsea'].includes(target.effectiveWeather());
			const isInSun = ['sunnyday', 'desolateland'].includes(target.effectiveWeather());
			const isInHail = ['hail'].includes(target.effectiveWeather());

			if (!isInSun && (sunMoves.includes(move.id) || move.type === 'Fire')) {
				this.field.setWeather('sunnyday');
			} else if (!isInRain && (rainMoves.includes(move.id) || move.type === 'Water')) {
				this.field.setWeather('raindance');
			} else if (!isInHail && move.type === 'Ice') {
				this.field.setWeather('hail');
			} else if (move.type === 'Normal' && move.id !== 'weatherball') {
				this.field.clearWeather();
			}

			if (source.transformed) return;
			if (source.baseSpecies.baseSpecies === 'Acufront') {
				let forme = null;
				switch (source.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (source.species.id !== 'acufrontf') forme = 'Acufront-F';
					break;
				case 'raindance':
				case 'primordialsea':
					if (source.species.id !== 'acufrontw') forme = 'Acufront-W';
					break;
				case 'hail':
					if (source.species.id !== 'acufronti') forme = 'Acufront-I';
					break;
				default:
					if (source.species.id !== 'acufront') forme = 'Acufront';
					break;
				}
				if (source.isActive && forme) {
					source.formeChange(forme, this.effect, false, '[msg]');
				}
			}
		},
		onUpdate(pokemon) {
			if (pokemon.transformed) return;
			if (pokemon.baseSpecies.baseSpecies === 'Acufront') {
				let forme = null;
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (pokemon.species.id !== 'acufrontf') forme = 'Acufront-F';
					break;
				case 'raindance':
				case 'primordialsea':
					if (pokemon.species.id !== 'acufrontw') forme = 'Acufront-W';
					break;
				case 'hail':
					if (pokemon.species.id !== 'acufronti') forme = 'Acufront-I';
					break;
				default:
					if (pokemon.species.id !== 'acufront') forme = 'Acufront';
					break;
				}
				if (pokemon.isActive && forme) {
					pokemon.formeChange(forme, this.effect, false, '[msg]');
				}
			}
		},
		isNonstandard: "Future",
	},
	cacophony: {
		onTryHit(target, source, move) {
			if (target !== source && move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Cacophony');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', this.effectState.target, '[from] ability: Cacophony');
			}
		},
		isBreakable: true,
		name: "Cacophony",
		rating: 1.5,
		num: 43,
		isNonstandard: "Future",
	},
	artificial: {
		name: "Artificial",
		onStart(pokemon) {
			this.addSplit(pokemon.side.id, ['-ability', pokemon, 'Pressure', '[silent]']);
			this.boost({def: 1, spd: 1});
		},
		onModifyMove(move) {
			delete move.flags['contact'];
			move.ignoreEvasion = true;
		},
		onModifySecondaries(secondaries) {
			this.debug('Artificial prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Artificial neutralize');
				return this.chainModify(0.75);
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Artificial", "[of] " + target);
				}
			}
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Artificial');
			}
			return false;
		},
		onCriticalHit: false,
		onTryAddVolatile(status, pokemon) {
			const immuneStatuses = ['flinch', 'disable', 'torment', 'encore'];
			if (immuneStatuses.includes(status.id)) { this.add('-immune', pokemon, '[from] ability: Artificial'); }
			return null;
		},
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Artificial');
				return null;
			}
		},
		onTryPrimaryHit(target, source, move) {
			const blocked = [
				'leechseed',
				'painsplit',
				'psychoshift',
				'spite',
				'perishsong',
				'endeavor',
				'destinybond',
				'grudge',
				'trick',
				'heartswap',
				'guardsplit',
				'powerswap',
				'speedswap',
				'powersplit',
				'superfang',
			];

			if (blocked.includes(move.id)) {
				this.add('-activate', target, 'Artificial', '[block] ' + move.name);
				return null;
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect.id === 'partiallytrapped') return false;
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedArtificial = false;
			} else {
				this.effectState.checkedArtificial = true;
			}
		},
		onDeductPP(target, source) {
			if (target === source) return -1;
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedArtificial;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedArtificial = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 3 && target.hp + damage > target.maxhp / 3) {
				this.boost({spe: 3}, target, target);
			}
		},
		// At the end of each turn, the 4th move changes depending on the opposing mon
		isPermanent: true,
		isNonstandard: "Future",
	},
	/* Clover CAP Abilities */
	cakeveil: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 10);
		},
		name: "Cake Veil",
		rating: 4,
		isNonstandard: "Future",
	},
	rusepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['Poison', 'Dark'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (['Poison', 'Dark'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.2);
			}
		},
		name: "Ruse Power",
		rating: 5,
		isNonstandard: "Future",
	},
	omniscience: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Psychic'] = true;
			}
			if (move.category !== 'Status' && move.type === 'Psychic') {
				move.accuracy = true;
			}
		},
		name: "Omniscience",
		rating: 3,
		num: 113,
		isNonstandard: "Future",
	},
	oldschool: {
		onBasePowerPriority: 23,
		onModifyCritRatio(critRatio, user, target, move) {
			if (move.critRatio && move.critRatio >= 2) {
				return 5;
			}
		},
		name: "Old School",
		rating: 3,
		isNonstandard: "Future",
	},
	wholesome100: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				this.add('-immune', target, '[from] ability: Wholesome 100');
				return null;
			}
		},
		name: "Wholesome 100",
		rating: 3.5,
		isNonstandard: "Future",
	},
	spookyaura: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Spooky Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Ghost') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		isBreakable: false,
		name: "Spooky Aura",
		rating: 3,
		isNonstandard: "Future",
	},
	tetanus: {
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				source.trySetStatus('tox', target);
			}
		},
		name: "Tetanus",
		rating: 1.5,
		isNonstandard: "Future",
	},
	colonoscopy: {
		onModifyAtk(atk, pokemon, target, move) {
			if (move?.flags['heal']) return this.chainModify(1.5);
		},
		name: "Colonoscopy",
		rating: 3.5,
		isNonstandard: "Future",
	},
	vampiric: {
		onModifyAtk(atk, pokemon, target, move) {
			if (move?.flags['heal']) return this.chainModify(1.5);
		},
		onModifySpA(atk, pokemon, target, move) {
			if (move?.flags['heal']) return this.chainModify(1.5);
		},
		name: "Vampiric",
		rating: 3.5,
		isNonstandard: "Future",
	},
	hewillbedragon: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dragon';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "He Will Be Dragon",
		rating: 4,
		isNonstandard: "Future",
	},
	blueblood: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				this.boost({atk: 12});
			}
		},
		name: "Blue Blood",
		isNonstandard: "Future",
	},
	shavedice: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (['Fire', 'Steel', 'Fighting', 'Rock'].includes(move.type)) {
				return this.chainModify(0.5);
			}
		},
		name: "Shaved Ice",
		rating: 2,
		isNonstandard: "Future",
	},
	temperamental: {
		onResidual(pokemon) {
			if (pokemon.species.baseSpecies !== 'Disbeary' || pokemon.transformed) return;
			const targetForme = pokemon.species.name === 'Disbeary' ? 'Disbeary-Ebil' : 'Disbeary';
			pokemon.formeChange(targetForme);
		},
		name: "Temperamental",
		rating: 1,
		isNonstandard: "Future",
	},
	beamboost: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const beamMoves = [
				'aurorabeam',
				'boltbeam',
				'bubblebeam',
				'chargebeam',
				'eternabeam',
				'gazerbeam',
				'hyperbeam',
				'icebeam',
				'meteorbeam',
				'moongeistbeam',
				'powergem',
				'psybeam',
				'signalbeam',
				'solarbeam',
				'solarblade',
				'steelbeam',
				'prismaticlaser',
				'beamblade',
				'genesisbeam',
				'spectresabre',
			];
			if (beamMoves.includes(move.id)) {
				this.debug('Beam Boost boost');
				return this.chainModify(1.5);
			}
		},
		name: "Beam Boost",
		isNonstandard: "Future",
	},
	detonator: {
		onBasePowerPriority: 8,
		onModifyMove(move) {
			const bombMoves = ['blackbomb', 'cherrybomb', 'eggbomb', 'firebomb', 'magnetbomb', 'mudbomb', 'seedbomb', 'sludgebomb'];
			if (!bombMoves.includes(move.id)) return;
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		onBasePower(basePower, attacker, defender, move) {
			const bombMoves = ['blackbomb', 'cherrybomb', 'eggbomb', 'firebomb', 'magnetbomb', 'mudbomb', 'seedbomb', 'sludgebomb'];
			if (!bombMoves.includes(move.id)) return;
			return this.chainModify(1.2);
		},
		name: "Detonator",
		isNonstandard: "Future",
	},
	horror: {
		name: "Horror",
		onStart(pokemon) {
			for (const foe of pokemon.foes()) {
				if (foe.hasType('Grass')) return false;
				if (!foe.addType('Grass')) return false;
				this.add('-start', foe, 'typeadd', 'Grass', '[from] ability: Horror');
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		isNonstandard: "Future",
	},
	overeager: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 3;
				move.multihitType = 'overeager';
			}
		},
		onBasePowerPriority: 7,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'overeager' && move.hit > 1) return this.chainModify(0.25);
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'overeager' && move.id === 'secretpower' && move.hit < 3) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Overeager",
		isNonstandard: "Future",
	},
	overeagerest: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 100;
				move.multihitType = 'overeagerest';
			}
		},
		onBasePowerPriority: 7,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'overeagerest' && move.hit > 1) return this.chainModify(Math.pow(move.hit, 2));
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'overeagerest' && move.id === 'secretpower' && move.hit < 100) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Overeagerest",
		isNonstandard: "Future",
	},
	swarming: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Jermin' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'jermin') {
					pokemon.formeChange('Jermin-Swarm');
				}
			} else {
				if (pokemon.species.id === 'jerminswarm') {
					pokemon.formeChange('Jermin');
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Jermin' || pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'jermin') {
					pokemon.formeChange('Jermin-Swarm');
				}
			} else {
				if (pokemon.species.id === 'jerminswarm') {
					pokemon.formeChange('Jermin');
				}
			}
		},
		isPermanent: true,
		name: "Swarming",
		rating: 3,
		num: 208,
		isNonstandard: "Future",
	},
	stoneflesh: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Gargarramer' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'petrify') return;
			const targetForme = (move.id === 'petrify' ? 'Gargarramer' : 'Gargarramer-Awoken');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Stoneflesh",
		rating: 4,
		isNonstandard: "Future",
	},
	sousaphone: {
		name: "Sousaphone",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Steel';
			}
		},
		rating: 2,
		isNonstandard: "Future",
	},
	spincleaner: {
		name: "Spin Cleaner",
		onStart(pokemon) {
			const sideConditions = [
				'spikes',
				'toxicspikes',
				'stealthrock',
				'stickyweb',
				'gmaxsteelsurge',
				'sleazyspores',
				'shattershard',
			];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
		},
		isNonstandard: "Future",
	},
	kinglymajesty: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.side === dazzlingHolder.side || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
				return false;
			}
		},
		name: "Kingly Majesty",
		rating: 2.5,
		isNonstandard: "Future",
	},
	shitbugtactics: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Shitbug Tactics");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Shitbug Tactics SpA Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Shitbug Tactics",
		rating: 4.5,
		isNonstandard: "Future",
	},
	brainpower: {
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Brain Power",
		rating: 5,
		num: 37,
		isNonstandard: "Future",
	},
	dispenser: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon, source, effect) {
			let activated = false;
			for (const ally of pokemon.alliesAndSelf()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Dispenser');
					activated = true;
				}
				ally.heal(ally.baseMaxhp / 10);
				this.add('-heal', ally, ally.getHealth);
				const moveSlots = ally.moveSlots.filter(move => move.pp < move.maxpp);
				if (moveSlots.length) {
					const moveSlot = this.sample(moveSlots);
					moveSlot.pp += 1;
					if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
					this.add('-activate', ally, 'ability: Dispenser', moveSlot.move, '[of] ' + pokemon);
				}
			}
		},
		name: "Dispenser",
		rating: 4,
		isNonstandard: "Future",
	},
	leech: {
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage) {
				this.heal(move.totalDamage / 2, pokemon);
			}
		},
		name: "Leech",
		rating: 3.5,
		isNonstandard: "Future",
	},
	supportive: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Supportive');
		},
		onAnyTryMove(target, source, move) {
			if (move.mindBlownRecoil || move.recoil || move.selfdestruct) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Supportive', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Supportive",
		rating: 1,
		isNonstandard: "Future",
	},
	bonerzoner: {
		name: "Boner Zoner",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Boner Zoner');
		},
		onModifyMovePriority: -5,
		onModifyMove(move, attacker, defender) {
			if (move.flags.bone || (move.type === 'Dragon')) {
				this.dex.types.all().forEach(({name}) => {
					if (!move.ignoreImmunity) move.ignoreImmunity = {};
					if (move.ignoreImmunity !== true) {
						move.ignoreImmunity[name] = true;
					}
				});
				move.ignoreAbility = true;
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	eclipse: {
		onStart(source) {
			if (['sunnyday'].includes(source.effectiveWeather())) {
				this.boost({atk: 2, spa: 2});
				this.field.clearWeather();
			}
			if (['desolateland'].includes(source.effectiveWeather())) {
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
				this.field.clearWeather();
			}
		},
		name: "Eclipse",
		rating: 4,
		isNonstandard: "Future",
	},
	pairoswrath: {
		name: "Pairo's Wrath",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Pairo\'s Wrath');
				}
				return null;
			}
		},
		isNonstandard: "Future",
	},
	hydrothermal: {
		name: "Hydrothermal",
		onModifyMove(move) {
			if (!["Fire", "Water"].includes(move.type)) return;
			if (move.category === 'Status') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			const burnIndexes = [];
			move.secondaries.forEach((secondary, secondaryIndex) => {
				if (secondary.status === 'brn') {
					secondary.chance = (secondary.chance || 0) + 10;
					burnIndexes.push(secondaryIndex);
				}
			});
			if (!burnIndexes.length) {
				move.secondaries.push({
					chance: 10,
					status: 'brn',
					ability: this.dex.abilities.get('hydrothermal'),
				});
			}
		},
		isNonstandard: "Future",
	},
	slavemaster: {
		name: "Slavemaster",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const affectedHMs = [
				'cut',
				'strength',
				'rockclimb',
				'rocksmash',
				'fly',
				'surf',
				'dive',
				'waterfall',
				'defog',
			];
			if (affectedHMs.includes(move.id)) {
				this.debug('Slavemaster boost');
				return this.chainModify(2);
			}
		},
		isNonstandard: "Future",
	},
	chording: {
		name: "Chording",
		onAfterMove(source, target, move) {
			const baseMove = this.dex.moves.get(move.id);
			if (baseMove.category === 'Physical') {
				this.boost({spa: 1});
			} else if (baseMove.category === 'Special') {
				this.boost({atk: 1});
			}
		},
		isNonstandard: "Future",
	},
	capacitance: {
		name: "Capacitance",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			const makesContact = this.checkMoveMakesContact(move, source, target, true);
			const stockpileLayers = target.volatiles['stockpile']?.layers;

			if (makesContact && stockpileLayers) {
				const isImmune = this.dex.getImmunity('Electric', source);
				const typeMod = this.clampIntRange(this.dex.getEffectiveness('Electric', source), -6, 6);
				if (isImmune) {
					this.add('-immune', source);
				} else {
					this.damage(source.maxhp * Math.pow(2, typeMod) / 8, source, target);
					if (this.randomChance(2 * stockpileLayers, 10)) {
						source.trySetStatus('par', target);
					}
				}
				target.removeVolatile('stockpile');
			}
		},
		isNonstandard: "Future",
	},
	radishbody: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('radish', target);
				}
			}
		},
		name: "Radish Body",
		isNonstandard: "Future",
	},
	lootable: {
		name: "Lootable",
		onFaint(target) {
			target.side.addSlotCondition(target, 'lootable', target);
		},
		isNonstandard: "Future",
	},
	asoneblobbos: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One (Blobbos)');
			this.add('-ability', pokemon, 'Pure Power');
			this.add('-ability', pokemon, 'Huge Power');
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(4);
		},
		isPermanent: true,
		name: "As One (Blobbos)",
		isNonstandard: "Future",
	},
	sharpshooter: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Sharpshooter",
		isNonstandard: "Future",
	},
	blobbotype: {
		isPermanent: true,
		name: "Blobbotype",
		rating: 4,
		num: 121,
		isNonstandard: "Future",
		onSwitchIn(source) {
			const type = source.getItem().onPlate;
			if (type) {
				const types = ['Ice', type];
				source.setType(['Ice', type]);
				this.add('-start', source, 'typechange', types.join('/'), '[from] ability: Blobbotype');
			}
		},
	},
	frozenbunker: {
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
				if (target.baseSpecies.baseSpecies !== 'Arctiglobe' || target.transformed) return;
				const arctiglobeform = target.species.id === 'arctiglobefreed' ? '' : '-Freed';
				target.formeChange('Arctiglobe' + arctiglobeform, this.effect, true, '[msg]');
				this.effectState.busted = true;
			}
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod == 0) {
				if (target.baseSpecies.baseSpecies !== 'Arctiglobe' || target.transformed) return;
				return this.chainModify(0.5);
			}
		},
		onUpdate(pokemon) {
			if (['arctiglobe'].includes(pokemon.species.id) && this.effectState.busted) {
				pokemon.formeChange('Arctiglobe-Freed', this.effect, true);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (['arctiglobe'].includes(source.species.id) && this.effectState.busted) {
				if (target.getMoveHitData(move).typeMod = 0) {
					this.debug('Frozen Bunker neutralize');
					return this.chainModify(0.5);
				}
			}
		},
		isPermanent: true,
		name: "Frozen Bunker",
		rating: 4,
		},
	boundary: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify(1.5);
			}
		},
		name: "Boundary",
		rating: 2.5,
	},
	transfusion: {
		name: "Transfusion",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			const types = target.getTypes();
			source.setType(types);
			this.add('-start', source, 'typechange', types.join('/'), '[from] ability: Transfusion', '[of] ' + target);
		},
		rating: 2,
	},
	catalyst: {
		name: "Catalyst",
		onStart(pokemon) {
			const possibleTargets = pokemon.adjacentFoes();
			if (!possibleTargets.length) return;
			const target = this.sample(possibleTargets);
			if (target && target.species) {
				const types = pokemon.getTypes();
				target.getTypes().forEach((type) => {
					if (!types.includes(type)) types.push(type);
				});
				if (pokemon.setType(types)) {
					this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Catalyst', '[of] ' + pokemon);
				}
			}
		},
		rating: 2,
	},
	delusion: {
		name: "Delusion",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'delusion') {
				return;
			}
			const oldAbility = source.setAbility('delusion', target);
			if (oldAbility) {
				this.add('-activate', target, 'ability: Delusion', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 1;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -2;

			this.boost(boost, pokemon, pokemon);
		},
		rating: 2,
	},
	niceface: {
		onStart(pokemon) {
			if (this.field.isTerrain('grassyterrain') && pokemon.species.id === 'blobbosnoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Nice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Blobbos-Nice', this.effect, true);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' && effect.category === 'Physical' &&
				target.species.id === 'blobbosnice' && !target.transformed
			) {
				this.add('-activate', target, 'ability: Nice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'blobbosnice' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['bypasssub'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'blobbosnice' || target.transformed) return;

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'blobbosnice' && this.effectState.busted) {
				pokemon.formeChange('Blobbos-Noice', this.effect, true);
			}
		},
		onTerrainChange() {
			const pokemon = this.effectState.target;
			if (!pokemon.hp) return;
			if (this.field.isTerrain('grassyterrain') && pokemon.species.id === 'blobbosnoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Nice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Blobbos-Nice', this.effect, true);
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Nice Face",
		isNonstandard: "Future",
		rating: 3,
	},
	evasionhax: {
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			return this.chainModify([1, 2]);
		},
		isBreakable: true,
		name: "Evasion Hax",
		rating: 1.5,
		isNonstandard: "Future",
	},
	nimblemetalbody: {
		onModifyPriority(priority, pokemon, target, move) {
			const momentum = [
				'batonpass', 'punchout', 'uturn', 'rockout', 'slipturn', 'backdraft', 'flipturn', 'partingshot', 'teleport', 'uturn', 'voltswitch', 'flashbang',
			];
			if (momentum.includes(move.id)) return priority + 1;
		},
		name: "Nimble Metal Body",
		rating: 3,
		isNonstandard: "Future",
	},
	magicalrealm: {
		name: "Magical Realm",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Magical Realm');
			this.field.addPseudoWeather('magicroom');
		},
		rating: 4,
		isNonstandard: "Future",
	},
	fogofwar: {
		onStart(source) {
			this.field.setWeather('densefog');
		},
		onSourceModifyAccuracy(acc, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (this.field.isWeather('densefog')) {
				return this.chainModify(2);
			}
		},
		name: "Fog Of War",
		rating: 4,
		isNonstandard: "Future",
	},
	bathtime: {
		onDamagingHit(damage, target, source, move) {
			if (target !== source && move.type === 'Water') {
				this.damage(source.baseMaxhp, source, target);
				this.damage(source.baseMaxhp, target, target);
			}
		},
		isBreakable: true,
		name: "Bath Time",
		isNonstandard: "Future",
	},
	massacre: {
		onDamagingHit(damage, target, source, move) {
			if (target !== source && move.type === 'Fairy') {
				this.damage(source.baseMaxhp, source, target);
				this.damage(source.baseMaxhp, target, target);
			}
			if (target !== source && move.type === 'Dark') {
				this.damage(source.baseMaxhp, source, target);
				this.damage(source.baseMaxhp, target, target);
			}
		},
		isBreakable: true,
		name: "Massacre",
		isNonstandard: "Future",
	},
	hpower: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spa: 1}, target, target);
			}
		},
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
			this.debug('Base Power: ' + basePowerAfterMultiplier);
			if (basePowerAfterMultiplier <= 60) {
				this.debug('H power technician boost');
				return this.chainModify(1.5);
			}
		},
		name: "H Power",
		rating: 2,
		isNonstandard: "Future",
	},
	uncompetitive: {
		name: "Uncompetitive",
		isPermanent: true,
		isNonstandard: "Future",
		onImmunity(type) {
			if (type === 'hail') return false;
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('hail')) {
				this.debug('Snow Cloak - decreasing accuracy');
				this.chainModify([3277, 4096]);
			} else if (this.field.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				this.chainModify([3277, 4096]);
			}
			this.debug('brightpowder - decreasing accuracy');
			this.chainModify([3686, 4096]);
			this.debug('lax incense - decreasing accuracy');
			this.chainModify([3686, 4096]);
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 20,
					volatileStatus: 'flinch',
				});
			}
		},
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			} else if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) {
				pokemon.maybeTrapped = true;
			} else if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost);
		},
	},
	stopsign: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Stop Sign');
		},
		onAnyTryMove(target, source, move) {
			if (move.selfSwitch) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Stop Sign', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Stop Sign",
		rating: 1,
		isNonstandard: "Future",
	},
	stormshelter: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail') return false;
		},
		onTryHit(target, source, move) {
			if (['raindance', 'primordialsea'].includes(target.effectiveWeather()) && target !== source && move.type === 'Water') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['sunnyday', 'desolateland'].includes(target.effectiveWeather()) &&
				target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['hail', 'hyperboreanarctic'].includes(target.effectiveWeather()) &&
				target !== source && move.type === 'Ice') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['sandstorm'].includes(target.effectiveWeather()) && target !== source && move.type === 'Rock') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['deltastream'].includes(target.effectiveWeather()) && target !== source && move.type === 'Flying') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			}
		},
		isBreakable: true,
		name: "Storm Shelter",
		rating: 3,
		isNonstandard: "Future",
	},
	zenmonke: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Simionach' || pokemon.transformed) return;
			if (pokemon.hp < pokemon.maxhp) {
				if (pokemon.species.id === 'simionach') {
					pokemon.formeChange('Simionach-Zen');
				}
			} else {
				if (pokemon.species.id === 'simionachzen') {
					pokemon.formeChange('Simionach');
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Simionach' ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp < pokemon.maxhp) {
				if (pokemon.species.id === 'simionach') {
					pokemon.formeChange('Simionach-Zen');
				}
			} else {
				if (pokemon.species.id === 'simionachzen') {
					pokemon.formeChange('Simionach');
				}
			}
		},
		isPermanent: true,
		name: "Zen Monke",
		rating: 3,
		isNonstandard: "Future",
	},
	finale: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Finale');
			}
		},
		onTryHit(target, source, move) {
			if (!source.lastMoveUsed) {
				return false;
			}
			const possibleTypes = [];
			const attackType = source.lastMoveUsed.type;
			for (const type of this.dex.types.names()) {
				if (target.hasType(type)) continue;
				const typeCheck = this.dex.types.get(type).damageTaken[attackType];
				if (typeCheck === 2 || typeCheck === 3) {
					possibleTypes.push(type);
				}
			}
			if (!possibleTypes.length) {
				return false;
			}
			const randomType = this.sample(possibleTypes);

			if (!target.setType(randomType)) return false;
			this.add('-start', target, 'typechange', randomType);
		},
		onSwitchIn(pokemon) {
			delete this.effectState.protean;
		},
		name: "Finale",
		rating: 5,
		isNonstandard: "Future",
		isPermanent: true,
	},
	metagaming: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Metagaming');
			this.add('-ability', pokemon, 'Intimidate');
			this.add('-ability', pokemon, 'Levitate');
			this.effectState.unnerved = true;
		},
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},

		isPermanent: true,
		name: "Metagaming",
		isNonstandard: "Future",
		rating: 3.5,
	},
	asoneblobbosrembered: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One (Blobbos-Rembered)');
			this.add('-ability', pokemon, 'Flare Heal');
			this.add('-ability', pokemon, 'Magic Guard');
			this.effectState.unnerved = true;
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.status === 'brn' && move.id !== 'facade') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				if (this.toID(target.side.name).includes('doomwillbefallall')) {
					this.add('-message', `${target.side.name} is cringe!`);
					this.add('-message', `${target.side.name} still wets the bed!`);
					this.add('-message', `${target.side.name} sharted!`);
				}
				return false;
			}
			if (effect && effect.id === 'stealthrock' || effect.id === 'spikes' || effect.id === 'gmaxsteelsurge') {
				return false;
			}
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
		name: "As One (Blobbos-Rembered)",
		rating: 3.5,
	},
	flipflops: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		onModifySpe(spe, pokemon) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		name: "Flip Flops",
		rating: 3.5,
		isNonstandard: "Future",
	},
	genwunning: {
		name: "Genwunning",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Genwunning');
			this.field.addPseudoWeather('genwunroom');
		},
		rating: 4,
		isNonstandard: "Future",
	},
	memepower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'memepower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('meme', source, target);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		name: "Meme Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	godrejection: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(0.125);
			} else if (move.type === 'Dragon') {
				return this.chainModify(0.125);
			}
		},
		onAnyEffectiveness(typemod, target, type, move) {
			const godrejectionUser = this.effectState.target;
			if (godrejectionUser !== this.activePokemon) return;
			if (move.type === 'Dark' && type === 'Fairy') {
				return 1;
			} else if (move.type === 'Fighting' && type === 'Fairy') {
				return 1;
			} else if (move.type === 'Fighting' && type === 'Dragon') {
				return 1;
			} else if (move.type === 'Dark' && type === 'Dragon') {
				return 1;
			}
		},
		isBreakable: true,
		name: "God Rejection",
		rating: 3.5,
		isNonstandard: "Future",
	},
	allskill: {
		onCriticalHit: false,
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		isBreakable: true,
		isNonstandard: "Future",
		name: "All Skill",
		rating: 2,
		num: 19,
	},
	artillery: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				return this.chainModify(1.5);
			}
		},
		name: "Artillery",
		isNonstandard: "Future",
		rating: 3,
		num: 178,
	},
	sneedboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1, accuracy: 1});
			}
		},
		name: "Sneed Boost",
		isNonstandard: "Future",
		rating: 4.5,
		num: 3,
	},
	armorplate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Steel';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Armor Plate",
		isNonstandard: "Future",
		rating: 3,
	},
	peaceandtranquility: {
		onModifyCritRatio(critRatio, target, source, move) {
			if (target.hp <= target.maxhp / 3) { return critRatio + 3; }
		},
		name: "Peace and Tranquility",
		isNonstandard: "Future",
		rating: 1.5,
		num: 105,
	},
	darkthoughts: {
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				volatileStatus: 'torment',
				ability: this.dex.abilities.get('darkthoughts'),
			});
		},
		name: "Dark Thoughts",
		rating: 2,
		num: 143,
		isNonstandard: "Future",
	},
	gmaxcomatose: {
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: G-Max Comatose');
			}
			return false;
		},
		onTryAddVolatile(status, pokemon) {
			const immuneStatuses = ['flinch', 'disable', 'torment', 'encore'];
			if (immuneStatuses.includes(status.id)) { this.add('-immune', pokemon, '[from] ability: G-Max Comatose'); }
			return null;
		},
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: G-Max Comatose');
				return null;
			}
		},
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: G-Max Comatose');
			return null;
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['gmax']) {
				return this.chainModify(50);
			}
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['max']) {
				return this.chainModify(50);
			}
		},
		name: "G-Max Comatose",
		isNonstandard: "Future",
		rating: 4,
		num: 56,
	},

	bloodthirsty: {
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
			}
		},
		name: "Bloodthirsty",
		isNonstandard: "Future",
		rating: 5,
		num: 37,
	},
	intangible: {
		name: "Intangible",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Normal' || move.type === 'Fighting') {
				this.add('-immune', target, '[from] ability: Intangible');
				return null;
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},

	hyperboreanarctic: {
		onStart(source) {
			this.field.setWeather('hyperboreanarctic');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream', 'hyperboreanarctic'];
			if (this.field.getWeather().id === 'hyperboreanarctic' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('hyperboreanarctic')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Hyperborean Arctic",
		rating: 4.5,
		num: 189,
		isNonstandard: "Future",
	},

	infection: {
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (!['blobbosinfected', 'contamination'].includes(target.species.id)) return;
			if (damage >= target.hp) {
				this.add('-damage', target, 0);
				this.add('-ability', target, 'Infection');
				if (target.species.id === 'blobbosinfected') {
					target.formeChange('Blobbos-Zombie', this.effect, true);
				} else {
					target.formeChange('Infected-Zombie', this.effect, true);
				}
				target.heal(target.maxhp, target, this.effect);
				this.add('-heal', target, target.getHealth, '[silent]');
				return 0;
			}
		},
		isBreakable: true,
		name: "Infection",
		rating: 3,
		num: 5,
		isNonstandard: "Future",
	},

	perishtouch: {
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 100,
				volatileStatus: 'perishsong',
				ability: this.dex.abilities.get('perishtouch'),
			});
		},
		name: "Perish Touch",
		rating: 2,
		num: 143,
		isNonstandard: "Future",
	},
	lethargic: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Lethargic');
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Lethargic');
			}
			return false;
		},
		// Permanent sleep "status" implemented in the relevant sleep-checking effects
		name: "Lethargic",
		rating: 4,
		num: 213,
		isNonstandard: "Future",
	},
	triforce: {
		name: "Triforce",
		onStart(pokemon) {
			pokemon.addVolatile('triforce');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['triforce'];
			this.add('-end', pokemon, 'Triforce', '[silent]');
		},
		condition: {
			duration: 3,
			onStart(target) {
				this.add('-start', target, 'ability: Triforce');
			},
			onEnd(target) {
				this.boost({
					atk: 1,
					spa: 1,
					spd: 1,

				});
				this.add('-end', target, 'Triforce');
			},
		},
		rating: 2,
		isNonstandard: "Future",
		num: 213,
	},
	gentlefist: {
		name: "Gentle Fist",
		isNonstandard: "Future",
		onStart(pokemon) {
			if (pokemon.hasItem('rockyhelmet') && pokemon.takeItem()) {
				this.add('-enditem', pokemon, 'Rocky Helmet');
			}
		},
		onResidual(pokemon) {
			if (pokemon.hasItem('rockyhelmet') && pokemon.takeItem()) {
				this.add('-enditem', pokemon, 'Rocky Helmet');
			}
		},
		onSourceDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		onModifyAtk() {
			return this.chainModify(3);
		},
	},
	eyeofblobbos: {
		onStart(pokemon) {
			if (pokemon.transformed) return;
			if (pokemon.species.id === 'blobboseye' && pokemon.hp < pokemon.maxhp) {
				pokemon.formeChange('Blobbos-Eye-Mouth');
			} else if (pokemon.species.id === 'blobboseyemouth' && pokemon.hp === pokemon.maxhp) {
				pokemon.formeChange('Blobbos-Eye');
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'blobboseye' && pokemon.hp < pokemon.maxhp) {
				pokemon.formeChange('Blobbos-Eye-Mouth');
			} else if (pokemon.species.id === 'blobboseyemouth' && pokemon.hp === pokemon.maxhp) {
				pokemon.formeChange('Blobbos-Eye');
			}
		},
		isPermanent: true,
		name: "Eye of Blobbos",
		rating: 3,
		isNonstandard: "Future",
	},
	costume: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['blobbosmimikyu'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Costume');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['blobbosmimikyu'].includes(target.species.id) || target.transformed) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['blobbosmimikyu'].includes(target.species.id) || target.transformed) {
				return;
			}

			const hitSub = target.volatiles['substitute'] &&
				!move.flags['bypasssub'] &&
				!(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['blobbosmimikyu'].includes(pokemon.species.id) &&
			this.effectState.busted) {
				const speciesid = pokemon.species.id === 'blobbosmimikyutotem' ?
					'Blobbos-Mimikyu-Busted-Totem' :
					'Blobbos-Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Costume",
		rating: 3.5,
		num: 209,
		isNonstandard: "Future",
	},
	reconstruct: {
		name: "Reconstruct",
		onSwitchOut(pokemon) {
			// console.log("lastItem: "+this.dex.getItem(pokemon.lastItem));
			// console.log("currentItem: "+this.dex.getItem(pokemon.item));

			if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem)) {
				pokemon.setItem(pokemon.lastItem);
				pokemon.lastItem = '';
				this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Reconstruct');
			}
		},
		rating: 2.5,
		num: 1039,
		isNonstandard: "Future",
	},
	ultraego: {
		name: "Ultra Ego",
		onDamage(damage, target, source, move) {
			this.boost({atk: 1}, target, target);
		},
		rating: 1,
		num: 1303,
		isNonstandard: "Future",
	},
	limblauncher: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch'] || move.flags['kick']) {
				this.debug('Limb Launcher boost');
				return this.chainModify([1.3]);
			}
		},
		onModifyMove(move) {
			if (move.flags.kick) {
				delete move.flags['contact'];
			}
			if (move.flags.punch) {
				delete move.flags['contact'];
			}
		},
		name: "Limb Launcher",
		rating: 3,
		num: 89,
		isNonstandard: "Future",
	},
	plasticsurge: {
		onStart(source) {
			this.field.setTerrain('plasticterrain');
		},
		name: "Plastic Surge",
		rating: 4,
		num: 229,
		isNonstandard: "Future",
	},
	thatscap: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const beamMoves = [
				'zenheadbutt',
				'headbutt',
				'headcharge',
				'headsmash',
				'ironhead',
				'skulltoss',
				'skullbash',
				'concussion',
				'headlongrush',
				'braindamage',
			];
			if (beamMoves.includes(move.id)) {
				this.debug('Thats Cap boost');
				return this.chainModify(2);
			}
		},
		name: "That's Cap",
		isNonstandard: "Future",
	},
	radioactive: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.add('-start', source, 'typechange', 'Nuclear');
			}
		},
		name: "Radioactive",
		rating: 2.5,
		num: 160,
		isNonstandard: "Future",
	},
	paperpower: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['kick']) {
				this.debug('Paper Power boost');
				return this.chainModify([1.5]);
			}
			if (move.flags['hammer']) {
				this.debug('Paper Power boost');
				return this.chainModify([1.5]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.type === 'Water') mod *= 2;
			return this.chainModify(mod);
		},
		name: "Paper Power",
		rating: 3,
		num: 89,
		isNonstandard: "Future",
	},
	artist: {
		onAfterMove(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && target.getTypes().join() !== type) {
				if (!target.setType(type)) return;
				this.add('-start', target, 'typechange', type, '[from] ability: Artist');
			}
		},


		name: "Artist",
		rating: 0,
		num: 16,
		isNonstandard: "Future",
	},
	intoxicate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Poison';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Intoxicate",
		rating: 4,
		num: 182,
		isNonstandard: "Future",
	},
	drenchedbulb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[from] ability: Drenched Bulb');
				return null;
			}
		},
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Drenched Bulb', effect, '[of] ' + target);
				return false;
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.name === 'Aftermath') {
				return false;
			}
		},
		isBreakable: true,
		name: "Drenched Bulb",
		rating: 3.5,
		num: 18,
		isNonstandard: "Future",
	},
	turbine: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Turbine');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Flying' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Turbine');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Turbine",
		rating: 3,
		num: 31,
		isNonstandard: "Future",
	},
	breakdown: {
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'spa', 12, '[from] ability: Breakdown');
			}
		},
		name: "Breakdown",
		rating: 1.5,
		num: 83,
		isNonstandard: "Future",
	},
	balance: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Balance boost');
				return this.chainModify(1.25);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Balance neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "Balance",
		rating: 4,
		num: 110,
		isNonstandard: "Future",
	},
	ultrainstinct: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.volatiles['ultrainstinct']) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 4) {
				this.boost({atk: 1}, pokemon);
				this.boost({def: 1}, pokemon);
				this.boost({spa: 1}, pokemon);
				this.boost({spd: 1}, pokemon);
				this.boost({spe: 1}, pokemon);
				pokemon.addVolatile('ultrainstinct');
			}
		},
		name: "Ultra Instinct",
		rating: 1.5,
		num: 123,
		isNonstandard: "Future",
	},
	hyperzone: {
		onStart(source) {
			this.field.setTerrain('hyperzone');
		},
		name: "Hyper Zone",
		rating: 4,
		num: 227,
		isNonstandard: "Future",
	},
	shadowaura: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const shadowMoves = [
				'shadowball',
				'shadowbone',
				'shadowclaw',
				'shadowscales',
				'shadowsneak',
				'shadowstrike',
				'shadowpunch',
				'shadowforce',
				'shadowbox',
			];
			if (shadowMoves.includes(move.id)) {
				this.debug('Shadow Aura boost');
				return this.chainModify(1.5);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Shadow Aura weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Shadow Aura",
		isNonstandard: "Future",
	},
	masshopping: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const hoppingMoves = [
				'crashhopper',
				'bounce',
				'highjumpkick',
				'jumpkick',
				'bouncybubble',
				'splash',
				'pounce',
				'lunge',
				'splishysplash',
				'lavadapt',
				'bellyflop',
			];
			if (hoppingMoves.includes(move.id)) {
				this.debug('Mass Hopping boost');
				return this.chainModify(1.3);
			}
		},
		name: "Mass Hopping",
		isNonstandard: "Future",
	},
	stringpower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'stringpower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('stringshot', source, target);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		name: "String Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	codename: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Codename",
		rating: 2,
		num: 97,
	},
	madlad: {
		name: "Madlad",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				source.addVolatile('confusion');
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		rating: 4.5,
		isNonstandard: "Future",
	},
	fallenangel: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(0.5);
			} else if (move.type === 'Ghost') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['Fairy', 'Dark'].includes(move.type)) {
				this.debug('Fallen Angel boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (['Fairy', 'Dark'].includes(move.type)) {
				this.debug('Fallen Angel boost');
				return this.chainModify(1.5);
			}
		},
		isBreakable: true,
		name: "Fallen Angel",
		rating: 3.5,
		isNonstandard: "Future",
	},
	presentpower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'presentpower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('present', source, target);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		name: "Present Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	muhmentum: {
		onAfterMove(pokemon, target, move) {
			if (move.category !== "Status") {
				pokemon.switchFlag = true;
				this.add('-activate', pokemon, 'ability: Muhmentum');
			}
		},
		name: "Muhmentum",
		rating: 3,
		isNonstandard: "Future",
	},
	supermentum: {
		onAfterMove(pokemon, target, move) {
			pokemon.switchFlag = true;
			this.add('-activate', pokemon, 'ability: Supermentum');
		},
		name: "Supermentum",
		rating: 3,
		isNonstandard: "Future",
	},
	acupower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'acupower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('acupressure', source, source);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		onCriticalHit: false,
		name: "Acu Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	assistpower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'assistpower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('assist', source, source);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		onCriticalHit: false,
		name: "Assist Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	terraform: {
		name: "Terraform",
		onBeforeMove(source, target, move) {
			if (move.category === 'Status') return;
			const grassyMoves = ['earthpower', 'highhorsepower'];

			if ((grassyMoves.includes(move.id) || move.type === 'Grass')) {
				this.field.setTerrain('grassyterrain');
			} else if (move.type === 'Electric') {
				this.field.setTerrain('electricterrain');
			} else if (move.type === 'Ice') {
				this.field.setTerrain('frostyterrain');
			} else if (move.type === 'Psychic') {
				this.field.setTerrain('psychicterrain');
			} else if (move.type === 'Fairy') {
				this.field.setTerrain('mistyterrain');
			} else if (move.type === 'Plastic') {
				this.field.setTerrain('plasticterrain');
			} else if (move.type === 'Normal' && !['terrainpulse', 'naturepower', 'secretpower'].includes(move.id)) {
				this.field.clearTerrain();
			}
		},
		onStart(pokemon) {
			if (this.field.terrain) {
				pokemon.addVolatile('terraform');
			} else {
				const types = pokemon.baseSpecies.types;
				if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types)) return;
				this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Terraform');
				this.hint("Transform Terraform changes you to your original un-transformed types.");
			}
		},
		onTerrainChange() {
			const pokemon = this.effectState.target;
			delete pokemon.volatiles['terraform'];
			pokemon.addVolatile('terraform');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['terrafrom'];
		},
		condition: {
			onStart(pokemon) {
				let newType;
				switch (this.field.terrain) {
				case 'electricterrain':
					newType = 'Electric';
					break;
				case 'frostyterrain':
					newType = 'Ice';
					break;
				case 'grassyterrain':
					newType = 'Grass';
					break;
				case 'mistyterrain':
					newType = 'Fairy';
					break;
				case 'psychicterrain':
					newType = 'Psychic';
					break;
				case 'plasticterrain':
					newType = 'Plastic';
					break;
				}

				if (!newType || pokemon.getTypes().join() === newType || !pokemon.setType(newType)) return;
				this.add('-start', pokemon, 'typechange', newType, '[from] ability: Terraform');
			},
			onUpdate(pokemon) {
				if (!this.field.terrain) {
					const types = pokemon.species.types;
					if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types)) return;
					this.add('-activate', pokemon, 'ability: Terraform');
					this.add('-end', pokemon, 'typechange', '[silent]');
					pokemon.removeVolatile('terraform');
				}
			},
		},
		isNonstandard: "Future",
	},
	fbomb: {
		name: "F Bomb",
		onStart(source) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon === source) continue;
				this.add('-start', pokemon, 'typechange', 'Normal', '[from] ability: F Bomb', '[of] ' + source);
				pokemon.setType('Normal');
			}
			for (const pokemon of this.getAllActive()) {
				this.add('-ability', pokemon, 'Stench', '[from] ability: F Bomb', '[of] ' + source);
				pokemon.setAbility('stench');
				pokemon.addVolatile('stinkbomb');
			}
		},
		isNonstandard: "Future",
	},
	deathstranding: {
		name: "Death Stranding",
		onStart() {
			this.field.setWeather('timefall');
		},
		isNonstandard: "Future",
	},
	aphenphosmphobia: {
		name: "Aphenphosmphobia",
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['contact']) {
				return this.chainModify(2);
			}
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('aphenphosmphobia - decreasing accuracy');
			return this.chainModify([3686, 4096]);
		},
		isNonstandard: "Future",
	},
	chiralnetwork: {
		name: "Chiral Network",
		onStart(pokemon) {
			pokemon.side.addSlotCondition(pokemon, 'bridge');
		},
		isNonstandard: "Future",
	},
	masterbait: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Dark' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Bug';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Masterbait",
		isNonstandard: "Future",
		rating: 4,
		num: 182,
	},
	fishermansruse: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['Water'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (['Water'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.5);
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		onAnyEffectiveness(typemod, target, type, move) {
			const degradationUser = this.effectState.target;

			if (degradationUser !== this.activePokemon) return;

			if (move.type === 'Bug' && ['Steel'].includes(type)) {
				return 1;
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				this.add('-message', 'Blobbos-Bait used its hook as a lightningrod!');
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;

				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
				}
				return this.effectState.target;
			}
		},
		name: "Fisherman's Ruse",
		rating: 5,
		isNonstandard: "Future",
	},
	captchahorni: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const hornMoves = [
				'megahorn',
				'hornattack',
				'smartstrike',
				'hornleech',
				'obsidianhorn',
				'furyattack',
				'hornithrust',
			];
			if (hornMoves.includes(move.id)) {
				this.debug('Horn boost');
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move) {
			const hornMoves = [
				'megahorn',
				'hornattack',
				'smartstrike',
				'hornleech',
				'obsidianhorn',
				'furyattack',
			];
			if (hornMoves.includes(move.id)) {
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 100,
					pseudoWeather: 'fairylock',
					ability: this.dex.abilities.get('Captcha: Horni'),
				});
			}
		},
		name: "Captcha: Horni",
		isNonstandard: "Future",
	},
	numerouno: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Numero Uno');
		},
		name: "Numero Uno",
		rating: 2.5,
		isNonstandard: "Future",
	},
	real: {
		onStart(pokemon) {
			const random = this.random(4);
			this.add('-ability', pokemon, 'Real');
			if (pokemon.status === 'frz') {
				this.add('-message', `*slides into battle*`);
			} else if (pokemon.status === 'brn') {
				if (random === 0) {
					this.add('-message', `*agonized squeaks* I'M STILL BURNING!`);
				}
				if (random === 1) {
					this.add('-message', `*is sent out as a burning writhing crisp*`);
				}
				if (random === 2) {
					this.add('-message', `*horrified squeaking* PUT ME OUT PLEASE`);
				}
				if (random === 3) {
					this.add('-message', `*screaming squeak* WHY ME! IM STILL ON FIRE!`);
				}
			} else if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				if (random === 0) {
					this.add('-message', `*sobbing squeaks* please just let me recover!`);
				}
				if (random === 1) {
					this.add('-message', `*ugly crying* ill die if you send me out like this!`);
				}
				if (random === 2) {
					this.add('-message', `*upset squeak* im too sick to battle!`);
				}
				if (random === 3) {
					this.add('-message', `*wailing* anyone but me please!`);
				}
			} else if (pokemon.status === 'par') {
				if (random === 0) {
					this.add('-message', `*squeaky wailing* i cant fend for myself! please get me out of here!`);
				}
				if (random === 1) {
					this.add('-message', `*sob* im useless to you! im paralyzed!`);
				}
				if (random === 2) {
					this.add('-message', `*terrified squeak* what are they going to do to me...`);
				}
				if (random === 3) {
					this.add('-message', `*sobbing* please dont send me out!`);
				}
			} else if (pokemon.status === 'slp') {
				if (random === 0) {
					this.add('-message', `*is sent out still unconscious*`);
				}
				if (random === 1) {
					this.add('-message', `*rudely sent out while having a nice rest*`);
				}
				if (random === 2) {
					this.add('-message', `*is still unconscious*`);
				}
				if (random === 3) {
					this.add('-message', `*flopped over on side*`);
				}
			}
			if (random === 0) {
				this.add('-message', `*squeak* hi`);
			}
			if (random === 1) {
				this.add('-message', `*happy squeaking* want to be friends?`);
			}
			if (random === 2) {
				this.add('-message', `*happy squeak* hello! *ribbit*`);
			}
			if (random === 3) {
				this.add('-message', `*wiggles happily*`);
			}
		},
		onResidualOrder: 29,
		onResidualSubOrder: 1,
		onTryAddVolatile(status, pokemon) {
			const random = this.random(4);
			if (status.id === 'confusion') {
				if (pokemon.status === 'frz') {
					this.add('-message', `*frozen silence*`);
				}
				if (pokemon.status === 'slp') {
					this.add('-message', `*sleeps but confused now*`);
				} else if (random === 0) {
					this.add('-message', `*dizzy squeak*`);
				} else if (random === 1) {
					this.add('-message', `*squeak of confusion*`);
				} else if (random === 2) {
					this.add('-message', `*squeak* my vision is all hazy!`);
				} else if (random === 3) {
					this.add('-message', `*horrified squeak* what are you doing to me!`);
				}
			} else if (status.id === 'leechseed') {
				if (pokemon.status === 'frz') {
					this.add('-message', `*is helpless to stop the seeds from sprouting*`);
				}
				if (pokemon.status === 'slp') {
					this.add('-message', `*starts dreaming of plants*`);
				} else if (random === 0) {
					this.add('-message', `*fearful squeak* what are those seeds?`);
				} else if (random === 1) {
					this.add('-message', `*confused squeaking* that didnt hurt me at all`);
				} else if (random === 2) {
					this.add('-message', `*squeak* seeds?`);
				} else if (random === 3) {
					this.add('-message', `*terrified squeak* what is this going to do to me!`);
				}
			} else if (status.id === 'curse') {
				if (pokemon.status === 'frz') {
					this.add('-message', `*frozen insanity*`);
				}
				if (pokemon.status === 'slp') {
					this.add('-message', `*thrashing while being tormented in dreams*`);
				} else if (random === 0) {
					this.add('-message', `*screaming squeak* WHAT IS WRONG WITH YOU!`);
				} else if (random === 1) {
					this.add('-message', `*begins to go insane* b-but why would you do something so cruel!`);
				} else if (random === 2) {
					this.add('-message', `*squeak of horror* my mind is breaking!`);
				} else if (random === 3) {
					this.add('-message', `*loud sobbing* WHY WHY WHY WHY WHY WHY WHY`);
				}
			}
		},
		onResidual(pokemon) {
			const random = this.random(4);
			if (pokemon.status === 'frz') {
				if (random === 0) {
					this.add('-message', `*is frozen solid*`);
				}
				if (random === 1) {
					this.add('-message', `*cries a single frozen tear*`);
				}
				if (random === 2) {
					this.add('-message', `*unable to squeak*`);
				}
				if (random === 3) {
					this.add('-message', `*silence*`);
				}
			} else if (pokemon.status === 'brn') {
				if (random === 0) {
					this.add('-message', `*pained squeaking* it burns!`);
				}
				if (random === 1) {
					this.add('-message', `*cries out in pain and writhing*`);
				}
				if (random === 2) {
					this.add('-message', `*squeaking of agony*`);
				}
				if (random === 3) {
					this.add('-message', `*screaming squeak* its too hot!`);
				}
			} else if (pokemon.status === 'tox') {
				if (random === 0) {
					this.add('-message', `*screams and wriggles violently* it hurts! please stop it!`);
				}
				if (random === 1) {
					this.add('-message', `*squeals in pain* im melting!`);
				}
				if (random === 2) {
					this.add('-message', `*he screams as his eyes burn in the toxic sludge*`);
				}
				if (random === 3) {
					this.add('-message', `*slithers around in agony*`);
				}
			} else if (pokemon.status === 'psn') {
				if (random === 0) {
					this.add('-message', `*squeaks of worry* i feel dizzy`);
				}
				if (random === 1) {
					this.add('-message', `*horrified squeak* im poisoned!`);
				}
				if (random === 2) {
					this.add('-message', `*writhing on the ground from poison*`);
				}
				if (random === 3) {
					this.add('-message', `*frightened squeak* i dont want to die *sobs*`);
				}
			} else if (pokemon.status === 'par') {
				if (random === 0) {
					this.add('-message', `*crying squeak* i cant feel my body`);
				}
				if (random === 1) {
					this.add('-message', `*pained squeaks* it hurts to move`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing* i cant move...`);
				}
				if (random === 3) {
					this.add('-message', `*hyperventilating squeak*`);
				}
			} else if (pokemon.volatiles['nightmare']) {
				if (random === 0) {
					this.add('-message', `*thrashing about in sleep*`);
				}
				if (random === 1) {
					this.add('-message', `*squeaking in sleep* no... please stop...`);
				}
				if (random === 2) {
					this.add('-message', `*writhing while sleeping* help... help me..!`);
				}
				if (random === 3) {
					this.add('-message', `*squeaky whimpers while asleep*`);
				}
			} else if (pokemon.status === 'slp') {
				if (random === 0) {
					this.add('-message', `*curled up and sleeping soundly*`);
				}
				if (random === 1) {
					this.add('-message', `*zzz*`);
				}
				if (random === 2) {
					this.add('-message', `*squeak snoring*`);
				}
				if (random === 3) {
					this.add('-message', `*sleepy squeaks*`);
				}
			} else if (pokemon.volatiles['leechseed']) {
				if (random === 0) {
					this.add('-message', `*squeaks of horror* NO NO NO ITS DRAINING MY BLOOD!`);
				}
				if (random === 1) {
					this.add('-message', `*mortified squeak* WHAT DID YOU DO TO ME?!`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing* IT'S DRINKING ME!`);
				}
				if (random === 3) {
					this.add('-message', `*crying squeaks* ill never eat seeds again please stop!`);
				}
			} else if (pokemon.volatiles['curse']) {
				if (random === 0) {
					this.add('-message', `*curls up in a ball and goes insane and starts crying*`);
				}
				if (random === 1) {
					this.add('-message', `*slithers in circles and screeches in pain and terror*`);
				}
				if (random === 2) {
					this.add('-message', `*shrieks so loud it breaks glass*`);
				}
				if (random === 3) {
					this.add('-message', `*uncontrollable sobbing*`);
				}
			} else if (pokemon.volatiles['attract']) {
				if (random === 0) {
					this.add('-message', `*happy squeak* i love you!`);
				}
				if (random === 1) {
					this.add('-message', `*wiggles cutely at you*`);
				}
				if (random === 2) {
					this.add('-message', `*shy squeak*`);
				}
				if (random === 3) {
					this.add('-message', `*infatuated chirping* i love you so much!`);
				}
			} else if (pokemon.volatiles['substitute']) {
				if (random === 0) {
					this.add('-message', `*happy squeak* this substitute is so cute!`);
				}
				if (random === 1) {
					this.add('-message', `*cuddles with the substitute*`);
				}
				if (random === 2) {
					this.add('-message', `*wraps around the substitute tightly*`);
				}
				if (random === 3) {
					this.add('-message', `*cowers behind the substitute*`);
				}
			} else {
				if (random === 0) {
					this.add('-message', `*thinks to self* *squeak* what am i even doing here`);
				}
				if (random === 1) {
					this.add('-message', `*sad chirps* i dont want to fight anymore`);
				}
				if (random === 2) {
					this.add('-message', `*confused squeak* where am i`);
				}
				if (random === 3) {
					this.add('-message', `*squeak* why cant we just be friends`);
				}
			}
		},
		onTakeItem(item, pokemon, source) {
			const random = this.random(4);
			if (pokemon.status === 'slp' || pokemon.status === 'tox') {
				this.add('-message', `*is helpless to stop it from happening`);
			} else if (pokemon.status === 'brn' || pokemon.status === 'par' || pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.add('-message', `*sobbing squeak* IT'S ALL I HAVE LEFT PLEASE!`);
			} else if (random === 0) {
				this.add('-message', `*squeaks angrily* give that back!`);
			} else if (random === 1) {
				this.add('-message', `*angry squeak* hey that was mine!`);
			} else if (random === 2) {
				this.add('-message', `*sad squeaking* that was mine!`);
			} else if (random === 3) {
				this.add('-message', `*angrily squeaks* you cant do that!`);
			}
		},
		onEnd(pokemon) {
			const random = this.random(4);
			if (pokemon.status === 'frz') {
				this.add('-message', `*slides away while frozen*`);
			} else if (pokemon.status === 'slp') {
				this.add('-message', `*is shoved back in the pokeball still asleep*`);
			} else if (pokemon.status === 'par') {
				this.add('-message', `*is shoved back in the pokeball* hey! be more gentle please!`);
			} else if (pokemon.status === 'brn') {
				if (random === 0) {
					this.add('-message', `*squeaking in agony* AT LEAST PUT ME OUT`);
				}
				if (random === 1) {
					this.add('-message', `*crying squeak* PUT ME OUT!`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing* it burns...`);
				}
				if (random === 3) {
					this.add('-message', `*numb to the pain*`);
				}
			} else if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				if (random === 0) {
					this.add('-message', `*suffering squeak* cure me please...`);
				}
				if (random === 1) {
					this.add('-message', `*crying* im gonna die...`);
				}
				if (random === 2) {
					this.add('-message', `*sad squeaky cry* it hurts...`);
				}
				if (random === 3) {
					this.add('-message', `*vomits*`);
				}
			} else if (pokemon.volatiles['leechseed']) {
				if (random === 0) {
					this.add('-message', `*squeaks of horror* GET THESE SEEDS OFF OF ME!`);
				}
				if (random === 1) {
					this.add('-message', `*squeak of relief* theyre off of me now!`);
				}
				if (random === 2) {
					this.add('-message', `*whimper* are the seeds gone yet`);
				}
				if (random === 3) {
					this.add('-message', `*fearful squeak* i never want to see a seed ever again`);
				}
			} else if (pokemon.volatiles['curse']) {
				this.add('-message', `*joyous squeak* im free from the curse!`);
			} else if (pokemon.volatiles['taunt']) {
				if (random === 0) {
					this.add('-message', `*angry squeak* go to hell!`);
				}
				if (random === 1) {
					this.add('-message', `*gives you the middle finger*`);
				}
				if (random === 2) {
					this.add('-message', `*angry squeak* i dont want to talk to you`);
				}
				if (random === 3) {
					this.add('-message', `*angry squeak* youre so cruel`);
				}
			} else if (pokemon.volatiles['torment']) {
				if (random === 0) {
					this.add('-message', `*sobbing* they wont bother me anymore!`);
				}
				if (random === 1) {
					this.add('-message', `*cry squeak* i never want to see you again!`);
				}
				if (random === 2) {
					this.add('-message', `*sad squeaky cry* why were you so mean...`);
				}
				if (random === 3) {
					this.add('-message', `*relieved squeak* they were so mean...`);
				}
			} else if (pokemon.volatiles['substitute']) {
				if (random === 0) {
					this.add('-message', `*sad squeak* ill miss my  substitute...`);
				}
				if (random === 1) {
					this.add('-message', `*sad squeak* why! i wanted to cuddle my substitute more...`);
				}
				if (random === 2) {
					this.add('-message', `*sad squeak* i wasted 25% of my health for nothing...`);
				}
				if (random === 3) {
					this.add('-message', `*sad squeak* but my substitute was so cute!`);
				}
			} else if (random === 0) {
				this.add('-message', `*sad squeak* goodbye`);
			} else if (random === 1) {
				this.add('-message', `*squeak* bye`);
			} else if (random === 2) {
				this.add('-message', `*sad squeaking* but i was making a new friend!`);
			} else if (random === 3) {
				this.add('-message', `*runs away squeaking fearfully*`);
			}
		},
		onEatItem(item, pokemon) {
			const random = this.random(4);
			if (pokemon.status === 'frz') {
				this.add('-message', `*somehow starts eating while frozen*`);
			} else if (pokemon.status === 'brn') {
				if (random === 0) {
					this.add('-message', `*pained squeaking* this better help with my burns!`);
				}
				if (random === 1) {
					this.add('-message', `*cries out in pain* please! it hurts too much to taste anything!`);
				}
				if (random === 2) {
					this.add('-message', `*squeaking in agony* i cant even enjoy my food!`);
				}
				if (random === 3) {
					this.add('-message', `*screaming squeak* my food is too hot!`);
				}
			} else if (pokemon.status === 'tox') {
				if (random === 0) {
					this.add('-message', `*struggles to keep food down*`);
				}
				if (random === 1) {
					this.add('-message', `*squeals in pain* i feel so sick!`);
				}
				if (random === 2) {
					this.add('-message', `*sobs* it tastes so bad!`);
				}
				if (random === 3) {
					this.add('-message', `*starts choking*`);
				}
			} else if (pokemon.status === 'psn') {
				if (random === 0) {
					this.add('-message', `*sickened squeaking* this is worse than a hangover!`);
				}
				if (random === 1) {
					this.add('-message', `*whimpering squeaks* i hope this cures me!`);
				}
				if (random === 2) {
					this.add('-message', `*barely gets it down my throat*`);
				}
				if (random === 3) {
					this.add('-message', `*sad squeak* i feel too sick to enjoy anything...`);
				}
			} else if (pokemon.status === 'par') {
				if (random === 0) {
					this.add('-message', `*crying squeak* i hope it doesnt get stuck in my throat...`);
				}
				if (random === 1) {
					this.add('-message', `*pained squeaks* i can barely get it down my throat...`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing* it hurts to swallow`);
				}
				if (random === 3) {
					this.add('-message', `*exhausted from trying to swallow while paralyzed*`);
				}
			} else if (pokemon.volatiles['taunt']) {
				if (random === 0) {
					this.add('-message', `*angry squeak* this is mine you cant have any`);
				}
				if (random === 1) {
					this.add('-message', `*angry squeak* what are you looking at!`);
				}
				if (random === 2) {
					this.add('-message', `*angrily gobbles it up*`);
				}
				if (random === 3) {
					this.add('-message', `*eats it all before you can say anything*`);
				}
			} else if (pokemon.volatiles['torment']) {
				if (random === 0) {
					this.add('-message', `*sad squeak* please dont call me fat for this`);
				}
				if (random === 1) {
					this.add('-message', `*sobbing* maybe this will make me feel better`);
				}
				if (random === 2) {
					this.add('-message', `*sadly eats* it doesnt taste good anymore *sad squeak*`);
				}
				if (random === 3) {
					this.add('-message', `*crying squeak* i hope i choke...`);
				}
			} else if (pokemon.volatiles['yawn']) {
				if (random === 0) {
					this.add('-message', `*sleepy squeak* its time for a midnight snack`);
				}
				if (random === 1) {
					this.add('-message', `*yawning squeak* maybe i can feel more awake with this`);
				}
				if (random === 2) {
					this.add('-message', `*tired squeaking* im too sleepy to enjoy anything...`);
				}
				if (random === 3) {
					this.add('-message', `*eating while barely awake*`);
				}
			} else if (pokemon.status === 'slp') {
				if (random === 0) {
					this.add('-message', `*begins sleepeating*`);
				}
				if (random === 1) {
					this.add('-message', `*eating unconsciously*`);
				}
				if (random === 2) {
					this.add('-message', `*sleepy squeak* tasty...`);
				}
				if (random === 3) {
					this.add('-message', `*squeaky snore*`);
				}
			} else if (pokemon.volatiles['leechseed']) {
				if (random === 0) {
					this.add('-message', `*squeaks of horror* THIS ISNT HELPING!`);
				}
				if (random === 1) {
					this.add('-message', `*mortified squeak* IF I EAT YOUR KIND WILL YOU STOP?!`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing* ITS STEALING MY NUTRIENTS!`);
				}
				if (random === 3) {
					this.add('-message', `*crying squeaks* LOOK IM EATING SOMETHING ELSE PLEASE STOP IT!`);
				}
			} else if (pokemon.volatiles['curse']) {
				if (random === 0) {
					this.add('-message', `*digs in like a feral animal*`);
				}
				if (random === 1) {
					this.add('-message', `*swallows it whole*`);
				}
				if (random === 2) {
					this.add('-message', `*foaming at the mouth*`);
				}
				if (random === 3) {
					this.add('-message', `*furious squeak* i need blood`);
				}
			} else if (pokemon.volatiles['attract']) {
				if (random === 0) {
					this.add('-message', `*happy squeak* i can share with you!`);
				}
				if (random === 1) {
					this.add('-message', `*blushing as you watch him eat*`);
				}
				if (random === 2) {
					this.add('-message', `*eating while looking up at you*`);
				}
				if (random === 3) {
					this.add('-message', `*embarassed chirping* is this a date?`);
				}
			} else {
				if (random === 0) {
					this.add('-message', `*happy chirping* thanks for the food!`);
				}
				if (random === 1) {
					this.add('-message', `*happy squeak* i love eating`);
				}
				if (random === 2) {
					this.add('-message', `*drunken slurring* more please`);
				}
				if (random === 3) {
					this.add('-message', `*burp* oops sorry`);
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			const random = this.random(4);
			if (!target.hp) {
				if (target.status === 'frz') {
					this.add('-message', `*stops moving forever*`);
				}
				if (target.status === 'slp') {
					this.add('-message', `*never wakes up*`);
				} else if (random === 0) {
					this.add('-message', `*dying squeaks* PLEASE I JUST WANTED TO BE FRIENDS!`);
				} else if (random === 1) {
					this.add('-message', `*last squeak* goodbye... *stops breathing*`);
				} else if (random === 2) {
					this.add('-message', `*desperate squeaking* I DONT WANT TO DIE LIKE THIS!`);
				} else if (random === 3) {
					this.add('-message', `*whimpers one last time and then curls up and dies*`);
				}
			}
			if (target.status === 'frz') {
				this.add('-message', `*is incapable of moving*`);
			}
			if (target.status === 'brn' || target.status === 'psn' || target.status === 'tox') {
				if (random === 0) {
					this.add('-message', `*pained squeaks* IT HURTS IT HURTS SO MUCH`);
				}
				if (random === 1) {
					this.add('-message', `*shrieking squeal* PLEASE STOP`);
				}
				if (random === 2) {
					this.add('-message', `*loud squeaky sobbing* ILL DO ANYTHING PLEASE STOP`);
				}
				if (random === 3) {
					this.add('-message', `*horrible scream*`);
				}
			}
			if (target.status === 'par') {
				if (random === 0) {
					this.add('-message', `*sobbing squeak* why would you attack a paralyzed little snake`);
				}
				if (random === 1) {
					this.add('-message', `*crying* please no i cant even fight back`);
				}
				if (random === 2) {
					this.add('-message', `*whimpers*`);
				}
				if (random === 3) {
					this.add('-message', `*cries a puddle that he cant get out of*`);
				}
			}
			if (target.status === 'slp') {
				if (random === 0) {
					this.add('-message', `*squeaks of pain while unconscious*`);
				}
				if (random === 1) {
					this.add('-message', `*doesn't respond*`);
				}
				if (random === 2) {
					this.add('-message', `*writhes while asleep*`);
				}
				if (random === 3) {
					this.add('-message', `*curls up defensively while sleeping*`);
				}
			} else {
				if (random === 0) {
					this.add('-message', `*squeaks of pain* w-why?!`);
				}
				if (random === 1) {
					this.add('-message', `*pained squeak* AAAAAAAAA!`);
				}
				if (random === 2) {
					this.add('-message', `*sobbing squeak* i thought we were friends!`);
				}
				if (random === 3) {
					this.add('-message', `*tries to dodge but is too weak and slow*`);
				}
			}
		},
		name: "Real",
		isPermanent: true,
		rating: 0,
		isNonstandard: "Future",
	},
	kattapillarssecretpower: {
		name: "Kattapillar's Secret Power",
		rating: 0, // LMAO YOU ACTUALLY THOUGHT THIS SHIT HAD REAL EFFECTS LMAOOOOOOOO
		isNonstandard: "Future", // YOU EVEN CHECKED THE CODE HAHAHAHAHAHAHA
	},
	fake: {
		onSwitchIn(pokemon) {
			this.add('-ability', pokemon, 'Fake');
		},
		name: "Fake",
		isPermanent: true,
		rating: 0,
		isNonstandard: "Future",
	},
	bejeweled: {
		onStart(source) {
			this.field.setTerrain('psychicterrain');
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.item) return;
			let possibleMoves = pokemon.moveSlots.filter((moveSlot) => {
				const move = this.dex.moves.get(moveSlot.move);

				return move.category === 'Physical' || move.category === 'Special';
			});

			if (possibleMoves.length < 1) {
				possibleMoves = pokemon.moveSlots;
			}

			const randomMoveSlot = this.sample(possibleMoves);

			if (randomMoveSlot) {
				const randomMove = this.dex.moves.get(randomMoveSlot.move);
				const itemText = `${randomMove.type} Gem`;
				const item = this.dex.items.get(itemText);
				if (pokemon.setItem(item)) {
					this.add('-item', pokemon, item, '[from] ability: Bejeweled');
				}
			}
		},
		isNonstandard: "Future",
		name: "Bejeweled",
		rating: 4,
		num: 227,
	},
	pooperpower: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const beamMoves = [
				'mudslap',
				'mudbomb',
				'muddywater',
				'shitpost',
				'mudmaelstrom',
				'mudshot',
			];
			if (beamMoves.includes(move.id)) {
				this.debug('Pooperpower boost');
				return this.chainModify(2.0);
			}
		},
		name: "Pooperpower",
		isNonstandard: "Future",
	},
	woodchipper: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(10, 10)) {
					if (source.hp) {
						const item = source.takeItem();
						if (item) {
							this.add('-enditem', source, item.name, '[from] ability: Woodchipper', '[of] ' + target);
						}
					}
				}
			}
		},
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.slicing) {
				this.debug('Woodchipper blade move boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Woodchipper",
		rating: 2.5,
		num: 160,
		isNonstandard: "Future",
	},
	revvingmalice: {
		name: "Revving Malice",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},
	metronomepower: {
		onAfterMove(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'metronomepower') return;
			if (move.category === 'Status' && (move.id === 'metronome' || move.id === 'metronomeifitwasfunny')) return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('metronome', source, target);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		name: "Metronome Power",
		rating: 4.5,
		isNonstandard: "Future",
	},
	swamped: {
		onStart(source) {
			for (const side of source.side.foeSidesWithConditions()) {
				side.addSideCondition('swamp');
			}
		},

		name: "Swamped",
		rating: 4,
		num: 229,
		isNonstandard: "Future",
	},
	magmaticeruption: {
		onStart(source) {
			for (const side of source.side.foeSidesWithConditions()) {
				side.addSideCondition('seaoffire');
			}
		},

		name: "Magmatic Eruption",
		rating: 4,
		num: 1230,
		isNonstandard: "Future",
	},
	boardpoweryou: {
		name: "Board Power (/you/)",
		onTryHit(pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Board Power (/a/)');
				return null;
			}
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Board Power (/k/)');
				return null;
			}

			// Poison Immunity?
			if (target !== pokemon && move.type === 'Poison') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', pokemon, '[from] ability: Board Power (/soc/)');
				}
				return null;
			}


			// bug Immunity?
			if (target !== pokemon && move.type === 'Bug') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', pokemon, '[from] ability: Board Power (/vp/)');
				}
				return null;
			}
			// magic Bounce?
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target === pokemon || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, target, pokemon);
			return null;
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Board Power (/a/)');
				return target.hp - 1;
			}
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability',
				'flowergift',
				'forecast',
				'hungerswitch',
				'illusion',
				'imposter',
				'neutralizinggas',
				'powerofalchemy',
				'receiver',
				'trace',
				'zenmode',
				'presage',
				'artificial',
				'wonderguard',
				'anyability',
				'comatose',
				'flowergift',
				'boardpowera',
				'boardpowerb',
				'boardpowerc',
				'boardpowerco',
				'boardpowerd',
				'boardpowerf',
				'boardpowerfa',
				'boardpowerfit',
				'boardpowerg',
				'boardpowerh',
				'boardpowerint',
				'boardpowerjp',
				'boardpowerk',
				'boardpowerout',
				'boardpowerpol',
				'boardpowerr9k',
				'boardpower5',
				'boardpowers4s',
				'boardpowersoc',
				'boardpowersp',
				'boardpowertrv',
				'boardpowertv',
				'boardpowerv',
				'boardpowervg',
				'boardpowervp',
				'boardpowervr',
				'boardpowerx',
				'boardpowerz',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);

			// Copy Types
			const newBaseTypes = target.getTypes(true);
			this.add('-start', pokemon, 'typechange', newBaseTypes.join('/'), '[from] ability: Board Power (/fa/)', '[of] ' + target);
			pokemon.setType(newBaseTypes);

			// Copy Boosts
			let i: BoostID;
			for (i in target.boosts) {
				pokemon.boosts[i] = target.boosts[i];
			}
			this.add('-copyboost', pokemon, target, '[from] ability: Board Power (/fa/)');
			// Frisk
			for (const foe of pokemon.foes()) {
				if (target.item) {
					this.add('-item', foe, foe.getItem().name, '[from] ability: Board Power (/soc/)', '[of] ' + pokemon, '[identify]');
				}
			}
			pokemon.addVolatile('boardpower5');

			if (pokemon.side.pokemonLeft === 1) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				pokemon.abilityState.anime = true;
			}

			for (const activePokemon of this.getAllActive()) {
				if (activePokemon === pokemon) continue;
				if (activePokemon.isSemiInvulnerable()) continue;
				if (activePokemon.volatiles['substitute']) continue;
				this.add('-start', activePokemon, 'typechange', 'Ghost', '[from] ability: Board Power (/x/)');
				activePokemon.setType('Ghost');
			}

			pokemon.abilityState.irresistable = true;
			const rand2 = this.random(8);
			if (rand2 === 0) {
				if (pokemon.addType('Dark')) {
					this.add('-start', pokemon, 'typeadd', 'Dark', '[from] ability: Board Power (/d/)');
				}
			} else if (rand2 === 1) {
				if (pokemon.addType('Fighting')) {
					this.add('-start', pokemon, 'typeadd', 'Fighting', '[from] ability: Board Power (/fit/)');
				}
			} else if (rand2 === 2) {
				if (pokemon.addType('Electric')) {
					this.add('-start', pokemon, 'typeadd', 'Electric', '[from] ability: Board Power (/g/)');
				}
			} else if (rand2 === 3) {
				if (pokemon.addType('Fire')) {
					this.add('-start', pokemon, 'typeadd', 'Fire', '[from] ability: Board Power (/h/)');
				}
			} else if (rand2 === 4) {
				if (pokemon.addType('Steel')) {
					this.add('-start', pokemon, 'typeadd', 'Steel', '[from] ability: Board Power (/k/)');
				}
			} else if (rand2 === 5) {
				if (pokemon.addType('Ground')) {
					this.add('-start', pokemon, 'typeadd', 'Ground', '[from] ability: Board Power (/tv/)');
				}
			} else if (rand2 === 6) {
				if (pokemon.addType('Dragon')) {
					this.add('-start', pokemon, 'typeadd', 'Dragon', '[from] ability: Board Power (/vg/)');
				}
			} else if (rand2 === 7) {
				if (pokemon.addType('Ghost')) {
					this.add('-start', pokemon, 'typeadd', 'Ghost', '[from] ability: Board Power (/x/)');
				}
			} else {
				if (pokemon.addType('Fairy')) {
					this.add('-start', pokemon, 'typeadd', 'Fairy', '[from] ability: Board Power (/c/)');
				}
			}

			this.field.addPseudoWeather('gravity');
			this.boost({def: 1, spd: 1}, pokemon);


			const rand = this.random(4);
			if (rand === 0) {
				this.field.setTerrain('psychicterrain');
			} else if (rand === 1) {
				this.field.setTerrain('electricterrain');
			} else if (rand === 2) {
				this.field.setTerrain('grassyterrain');
			} else {
				this.field.setTerrain('mistyterrain');
			}

			this.actions.useMove('Charge', pokemon);
			this.actions.useMove('Hulk Up', pokemon);
			this.actions.useMove('Stockpile', pokemon);
			this.field.addPseudoWeather('inverseroom');
			this.boost({spe: 1}, pokemon);

			for (const activePokemon of this.getAllActive()) {
				activePokemon.addVolatile('torment');
			}

			for (const activePokemon of this.getAllActive()) {
				// if (pokemon === source) continue;
				activePokemon.addVolatile('retro');
			}
			this.field.addPseudoWeather('magicroom');
		},
		onTryBoost(boost, target, source, effect) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!target?.abilityState?.anime) return;
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Board Power (/a/)", "[of] " + target);
			}
		},

		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
			if (move.type === 'Dark') {
				this.boost({atk: 1});
			}
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
		},

		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},

		onSourceModifyDamage(damage, source, target, move) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			let mod = 1;
			if (move.type === 'Dark') mod /= 2;
			return this.chainModify(mod);
		},
		onModifyMovePriority: -6969,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (move.type === 'Normal' && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dark';
			}
			if (move.id === 'flash') {
				move.basePower = 90;
			}
			// if (move?.flags?.naturePower) return this.chainModify(2);
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'attract') return;
				}
				move.secondaries.push({
					chance: 33,
					volatileStatus: 'attract',
				});
			}
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
			move.stab = 2;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true && move.type === 'Psychic') {
				move.ignoreImmunity['Dark'] = true;
			}
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
			if (source.effectiveWeather().length) {
				if (move.id === 'weatherball') {
					move.basePower = 150;
				}
			}
			// if (move.category === 'Status') return;
			if (!this.effectState.repetition) return;

			const {moveId, times} = this.effectState.repetition;

			if (moveId !== move.id) return;
			move.basePower = Math.min(160, move.basePower * Math.pow(1.2, times));
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			const validTypes = ['Dark', 'Normal'];
			const ignoredMoves = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (validTypes.includes(move.type) && !ignoredMoves.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				return this.chainModify([0x1333, 0x1000]);
			}
			let boosted = true;
			for (const activePokemon of this.getAllActive()) {
				if (activePokemon === pokemon) continue;
				if (this.queue.willMove(activePokemon)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify([5325, 4096]);
			}
			if (move.type === 'Poison') return this.chainModify(1.5);
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!defender.activeTurns) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify(2);
			}
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!defender.activeTurns) {
				this.debug('Board Power (/pol/) boost');
				return this.chainModify(2);
			}
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},

		onEnd(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			delete pokemon.volatiles['boardpower5'];
			this.add('-end', pokemon, 'Board Power (/5/)', '[silent]');
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Board Power (/5/)');
			},
			onEnd(target) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				this.add('-end', target, 'Board Power (/5/)');
			},
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},

		onAnyModifyDamage(damage, source, target, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba' &&
					this.effectState.target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
				this.debug('Board Power (/soc/) weaken');
				return this.chainModify(0.75);
			}
		},

		onAllyTryHitSide(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba' &&
					this.effectState.target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, this.effectState.target, source);
			return null;
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (pokemon.effectiveWeather().length) {
				return this.chainModify(2);
			}
		},
		onHit(target, source, move) {
			if (target.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Board Power (/v/)');
			}
			if (target !== source && move.category !== 'Status') {
				this.boost({atk: 1});
			}
		},
		onAfterMove(source, target, move) {
			if (source.baseSpecies.baseSpecies !== 'Fontaba') return;
			if (!this.effectState.repetition) {
				this.effectState.repetition = {moveId: move.id, times: 1};
			} else {
				if (this.effectState.repetition.moveId === move.id) {
					this.effectState.repetition.times++;
				} else {
					this.effectState.repetition = {moveId: move.id, times: 1};
				}
			}
		},

		isPermanent: true,
		rating: 3,
		num: 5,
		isNonstandard: "Future",
	},
	copypower: {
		name: "Copy Power",
		onStart(pokemon) {
			const additionalBannedAbilities = [
				'noability',
				'flowergift',
				'forecast',
				'hungerswitch',
				'illusion',
				'imposter',
				'neutralizinggas',
				'powerofalchemy',
				'receiver',
				'trace',
				'zenmode',
				'zenmonke', // TODO: Cap-only
				'copypower',
			];
			const faintedPokemon = pokemon.side.faintedLastTurn || pokemon.side.faintedThisTurn;
			if (faintedPokemon) {
				const ability = this.dex.abilities.get(faintedPokemon.ability);
				if (ability.isPermanent || additionalBannedAbilities.includes(ability.id)) return;
				this.add('-ability', pokemon, ability, '[from] ability: Copy Power', '[of] ' + pokemon);
				pokemon.setAbility(ability);
			}
		},
		isNonstandard: "Future",
	},
	onaquest: {
		name: "On A Quest",
		onStart(pokemon) {
			if (pokemon.species.id !== 'blobbosadventurer') return;
			const quests = [
				{id: 'ko', name: 'Righteous Purge', requirement: 1, text: 'KO 1 Pokémon', progressText: 'Pokémon KO\'d'},
				{
					id: 'repeat',
					name: 'Practice Makes Perfect',
					requirement: 3,
					text: 'Use the same move 3 times in a row',
					progressText: 'move repetitions',
				},
				{id: 'boost', name: 'Cultivation of Power', requirement: 5, text: 'Boost its stats 5 stages', progressText: 'boosts'},
				{id: 'switch', name: 'Agility Training', requirement: 4, text: 'Switch out 4 times', progressText: 'switch outs'},
				{id: 'wait', name: 'Patience', requirement: 3, text: 'Wait 3 turns', progressText: 'turns waited'},
			];

			if (!this.effectState.quest) {
				const quest = this.sample(quests);
				this.effectState.quest = {...quest, progress: 0};
				this.add('-start', pokemon, 'ability: On A Quest', `[questname] ${quest.name}`, `[questtext] ${quest.text}`);
			}
		},
		onAfterMove(source, target, move) {
			const quest = this.effectState.quest;
			if (quest && quest.id === 'repeat' && !quest.complete) {
				if (!this.effectState.repetition) {
					this.effectState.repetition = {moveId: move.id, times: 1};
				} else {
					if (this.effectState.repetition.moveId === move.id) {
						this.effectState.repetition.times++;
					} else {
						this.effectState.repetition = {moveId: move.id, times: 1};
					}
				}
				quest.progress = Math.min(this.effectState.repetition.times, quest.requirement);
				this.add('-activate', target, 'ability: On A Quest', `[questname] ${quest.name}`, `[questprogress] ${quest.progress}`, `[questrequirement] ${quest.requirement}`, `[questprogresstext] ${quest.progressText}`);
			}
		},
		onAnyFaint(target, source, effect) {
			const quest = this.effectState.quest;
			if (quest && quest.id === 'ko' && !quest.complete) {
				quest.progress = Math.min(quest.progress + 1, quest.requirement);
				this.add('-activate', source, 'ability: On A Quest', `[questname] ${quest.name}`, `[questprogress] ${quest.progress}`, `[questrequirement] ${quest.requirement}`, `[questprogresstext] ${quest.progressText}`);
			}
		},
		onTryBoost(boost, pokemon) {
			const quest = this.effectState.quest;
			if (quest && quest.id === 'boost' && !quest.complete) {
				let totalBoosts = 0;
				let i: BoostID;
				for (i in boost) {
					totalBoosts += Math.max(boost[i] || 0, 0);
				}
				if (totalBoosts > 0) {
					quest.progress = Math.min(quest.progress + totalBoosts, quest.requirement);
					this.add('-activate', pokemon, 'ability: On A Quest', `[questname] ${quest.name}`, `[questprogress] ${quest.progress}`, `[questrequirement] ${quest.requirement}`, `[questprogresstext] ${quest.progressText}`);
				}
			}
		},
		onSwitchOut(pokemon) {
			const quest = this.effectState.quest;
			if (quest && quest.id === 'switch' && !quest.complete) {
				quest.progress = Math.min(quest.progress + 1, quest.requirement);
				this.add('-activate', pokemon, 'ability: On A Quest', `[questname] ${quest.name}`, `[questprogress] ${quest.progress}`, `[questrequirement] ${quest.requirement}`, `[questprogresstext] ${quest.progressText}`);
			}
		},
		onResidual(pokemon) {
			const quest = this.effectState.quest;
			if (!quest) return;
			if (quest.progress >= quest.requirement) {
				quest.complete = true;
				this.add('-end', pokemon, 'ability: On A Quest', `[questname] ${quest.name}`);
				pokemon.formeChange('Blobbos-Adventurer-Legendary', this.effect, true);
			} else if (quest.id === 'wait' && !quest.complete) {
				quest.progress = Math.min(quest.progress + 1, quest.requirement);
				this.add('-activate', pokemon, 'ability: On A Quest', `[questname] ${quest.name}`, `[questprogress] ${quest.progress}`, `[questrequirement] ${quest.requirement}`, `[questprogresstext] ${quest.progressText}`);
			}
		},
		isNonstandard: "Future",
	},
	legendary: {
		name: "Legendary",
		onStart(pokemon) {
			pokemon.cureStatus();
			const heroicStrike = pokemon.baseMoves.indexOf('heroicstrike');
			if (heroicStrike >= 0) {
				const move = this.dex.moves.get('heroiconslaught');
				pokemon.baseMoveSlots[heroicStrike] = {
					move: move.name,
					id: move.id,
					pp: (move.noPPBoosts || move.isZ) ? move.pp : Math.floor(move.pp * 8 / 5),
					maxpp: (move.noPPBoosts || move.isZ) ? move.pp : Math.floor(move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
				};
				pokemon.moveSlots = pokemon.baseMoveSlots.slice();
			}
		},
		onTryBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Legendary", "[of] " + target);
			}
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Legendary');
			}
			return false;
		},
		onBasePower(basePower, pokemon, target, move) {
			if (['Dragon', 'Dark'].some((type) => target.hasType(type))) {
				return this.chainModify(1.5);
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
	},
	taskoriented: {
		name: "Task Oriented",
		onStart(pokemon) {
			const fastPop = <T>(list: T[], index: number) => {
				// If an array doesn't need to be in order, replacing the
				// element at the given index with the removed element
				// is much, much faster than using list.splice(index, 1).
				const length = list.length;
				if (index < 0 || index >= list.length) {
					// sanity check
					throw new Error(`Index ${index} out of bounds for given array`);
				}

				const element = list[index];
				list[index] = list[length - 1];
				list.pop();
				return element;
			};

			const sampleNoReplace = <T>(list: T[]) => {
				const length = list.length;
				if (length === 0) return null;
				const index = this.random(length);
				return fastPop(list, index);
			};

			const tasks = [
				{
					id: 'repeat',
					name: 'Repeat Yourself',
					requirement: 2,
					text: 'Use the same move twice in a row',
					progressText: 'move repetitions',
				},
				{id: 'move', name: 'Move Around', requirement: 3, text: 'Use a move 3 times', progressText: 'moves used'},
				{id: 'switch', name: 'Switch the Power On', requirement: 2, text: 'Switch out 2 times', progressText: 'switch outs'},
				{id: 'wait', name: 'Wait Around', requirement: 3, text: 'Wait 3 turns', progressText: 'turns waited'},
			];

			if (!this.effectState.tasks) {
				const newTasks = [];
				newTasks.push(sampleNoReplace(tasks) as any);
				newTasks.push(sampleNoReplace(tasks) as any);
				this.effectState.tasks = newTasks;

				newTasks.forEach((newTask) => {
					this.addSplit(pokemon.side.id, [
						'-start',
						pokemon,
						'ability: Task Oriented',
						`[taskname] ${newTask.name}`,
						`[tasktext] ${newTask.text}`,
					]);
				});
			}
		},
		onAfterMove(source, target, move) {
			const repeatTask = this.effectState.tasks.find((task: any) => task.id === 'repeat');
			if (repeatTask) {
				if (!this.effectState.repetition) {
					this.effectState.repetition = {moveId: move.id, times: 1};
				} else {
					if (this.effectState.repetition.moveId === move.id) {
						this.effectState.repetition.times++;
					} else {
						this.effectState.repetition = {moveId: move.id, times: 1};
					}
				}
				repeatTask.progress = Math.min(this.effectState.repetition.times, repeatTask.requirement);
				this.addSplit(
					target.side.id,
					[
						'-activate',
						target,
						'ability: Task Oriented',
						`[taskname] ${repeatTask.name}`,
						`[taskprogress] ${repeatTask.progress}`,
						`[taskrequirement] ${repeatTask.requirement}`,
						`[taskrogresstext] ${repeatTask.progressText}`,
					],
				);
			}
			const moveTask = this.effectState.tasks.find((task: any) => task.id === 'repeat');
			if (moveTask) {
				moveTask.progress = Math.min(moveTask.progress + 1, moveTask.requirement);
				this.addSplit(
					target.side.id,
					[
						'-activate',
						target,
						'ability: Task Oriented',
						`[taskname] ${moveTask.name}`,
						`[taskprogress] ${moveTask.progress}`,
						`[taskrequirement] ${moveTask.requirement}`,
						`[taskrogresstext] ${moveTask.progressText}`,
					],
				);
			}
		},
		onSwitchOut(pokemon) {
			const switchTask = this.effectState.tasks.find((task: any) => task.id === 'switch');
			if (switchTask) {
				switchTask.progress = Math.min(switchTask.progress + 1, switchTask.requirement);
				this.addSplit(
					pokemon.side.id,
					[
						'-activate',
						pokemon,
						'ability: Task Oriented',
						`[taskname] ${switchTask.name}`,
						`[taskprogress] ${switchTask.progress}`,
						`[taskrequirement] ${switchTask.requirement}`,
						`[taskrogresstext] ${switchTask.progressText}`,
					],
				);
			}
		},
		onResidual(pokemon) {
			const tasks = this.effectState.tasks;
			if (tasks && tasks.length) {
				tasks.forEach((task: any) => {
					if (task.progress >= task.requirement) {
						task.complete = true;
					}
				});
				if (tasks.every((task: any) => task.complete)) {
					this.add('-end', pokemon, 'ability: Task Oriented');
					this.boost({
						accuracy: 1,
						evasion: 1,
						atk: 4,
						def: 4,
						spa: 4,
						spd: 4,
						spe: 4,
					});
					this.effectState.tasks = [];
				}
			}
		},
		isNonstandard: "Future",
	},
	neurotoxin: {
		name: "Neurotoxin",
		onAnyEffectiveness(typemod, target, type, move) {
			const neurotoxinUser = this.effectState.target;

			if (neurotoxinUser !== this.activePokemon) return;

			if (move.type === 'Poison' && ['Psychic'].includes(type)) {
				return 1;
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Psychic') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Neurotoxin');
				}
				return null;
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	suicidelead: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('explosion'), pokemon);
		},
		name: "Suicide Lead",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	inandout: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('uturn'), pokemon);
		},
		name: "In and Out",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	onepunch: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('focuspunch'), pokemon);
		},
		name: "One Punch",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	invasivethoughts: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('torment'), pokemon);
		},
		name: "Invasive Thoughts",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	forthefunny: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('metronome'), pokemon);
		},
		name: "For The Funny",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	bully: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('knockoff'), pokemon);
		},
		name: "Bully",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	leafblower: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('whirlwind'), pokemon);
		},
		name: "Leaf Blower",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	imitator: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('copycat'), pokemon);
		},
		name: "Imitator",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	procrastinator: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('rest'), pokemon);
		},
		name: "Procrastinator",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
resurrection: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('revivalblessing'), pokemon);
		},
		name: "Resurrection",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
hideandseek: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('substitute'), pokemon);
		},
		name: "Hide and Seek",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
resilience: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('endure'), pokemon);
		},
		name: "Resilience",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
scavenger: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('recycle'), pokemon);
		},
		name: "Scavenger",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
trolling: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('partingshot'), pokemon);
		},
		name: "Trolling",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
headwind: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('tailwind'), pokemon);
		},
		name: "Headwind",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
misleading: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('fakeout'), pokemon);
		},
		name: "Misleading",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
prestidigitation: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('trick'), pokemon);
		},
		name: "Prestidigitation",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
malediction: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('curse'), pokemon);
		},
		name: "Malediction",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	metamorphosis: {
		onSwitchOut(pokemon) {
			if (pokemon.species.id !== 'blobboseedle' || pokemon.transformed) return;
			pokemon.formeChange('Blobbos-eedle-True', this.effect, true);
			this.effectState.sendTrueMessage = true;
		},
		onStart(pokemon) {
			if (this.effectState.sendTrueMessage) {
				this.add('-activate', pokemon, 'ability: Metamorphosis');
				this.effectState.sendTrueMessage = false;
			}
		},
		isPermanent: true,
		name: "Metamorphosis",
		rating: 5,
		isNonstandard: "Future",
		num: 278,
	},
	inmemoriam: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire' || move.type === 'Steel') {
				this.add('-immune', target, '[from] ability: In Memoriam');
				this.add('-message', `AND THE ROCKETS RED GLARE`);
				return null;
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.status === 'brn' && move.id !== 'facade') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				if (this.toID(target.side.name).includes('doomwillbefallall')) {
					this.add('-message', `${target.side.name} is cringe!`);
					this.add('-message', `${target.side.name} still wets the bed!`);
					this.add('-message', `${target.side.name} sharted!`);
				}
				return false;
			}
			if (effect && effect.id === 'stealthrock' || effect.id === 'spikes' || effect.id === 'gmaxsteelsurge') {
				return false;
			}
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		isPermanent: true,
		isNonstandard: "Future",
		name: "In Memoriam",
		rating: 3.5,
	},
	fourwarn: {
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					this.add('-activate', pokemon, 'ability: Fourwarn', move, '[of] ' + target);
				}
			}
		},
		name: "Fourwarn",
		isNonstandard: "Future",
	},
	anythingyoucando: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.moveThisTurn) return;
			for (const target of pokemon.foes()) {
				if (pokemon.moveThisTurn !== target.moveThisTurn) return;
				this.damage(target.baseMaxhp / 8, target, pokemon);
			}
		},
		name: "Anything You Can Do",
		isNonstandard: "Future",
	},
	allaccordingtokeikakuplan: {
		name: "All According to Keikaku (Plan)",
		onFoeSwitchOut(pokemon) {
			if (!this.effectState.switchedPokemon) this.effectState.switchedPokemon = {};
			this.effectState.switchedPokemon[pokemon.position] = pokemon;
		},
		onBasePower(basePower, pokemon, target, move) {
			if (!target) return;
			if (!this.effectState.switchedPokemon) this.effectState.switchedPokemon = {};
			if (!this.effectState.switchedPokemon[target.position]) return;
			const previousPokemon = this.effectState.switchedPokemon[target.position] as Pokemon;
			const previousEffectiveness = previousPokemon.runEffectiveness(move);
			const currentEffectiveness = target.runEffectiveness(move);
			if (previousEffectiveness < 0) {
				if (currentEffectiveness > 0) {
					this.add('-activate', pokemon, 'ability: All According to Keikaku (Plan)');
					this.chainModify(2);
				} else if (currentEffectiveness < 0) {
					this.chainModify(0.25);
				}
			}
		},
		onResidual() {
			this.effectState.switchedPokemon = {};
		},
		isNonstandard: "Future",
	},
	goodaszinc: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Good as Zinc');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit(target, source, move) {
			if (move?.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Good as Zinc');
			}
		},
		name: "Good as Zinc",
		isNonstandard: "Future",
	},
	halfbakedbody: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				this.boost({def: 1});
			}
		},
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Half-Baked Body",
		isNonstandard: "Future",
	},
	scaredycat: {
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate') {
				target.switchFlag = true;
				this.add('-activate', target, 'ability: Scaredy Cat');
			}
		},
		name: "Scaredy Cat",
		isNonstandard: "Future",
	},
	shroomspeed: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category !== 'Status') {
				return priority + 1;
			}
		},
		name: "Shroom Speed",
		isNonstandard: "Future",
	},
	supremeunderlord: {
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Supreme Underlord');
			const risen = Math.max(5 - pokemon.side.totalFainted, 0);
			this.add('-start', pokemon, `risen${risen}`, '[silent]');
			this.effectState.risen = risen;
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, `risen${this.effectState.risen}`, '[silent]');
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.effectState.risen) {
				const powMod = [6144, 5734, 5325, 4915, 4506, 4096];
				this.debug(`Supreme Underlord boost: ${powMod[this.effectState.risen]}/4096`);
				return this.chainModify([powMod[this.effectState.risen], 4096]);
			}
		},
		name: "Supreme Underlord",
		isNonstandard: "Future",
	},
	altruist: {
		onAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Altruist') return;
			const positiveBoosts: Partial<BoostsTable> = {};
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! > 0) {
					positiveBoosts[i] = boost[i];
				}
			}
			if (Object.keys(positiveBoosts).length < 1) return;
			for (const foe of target.adjacentFoes()) {
				this.boost(positiveBoosts, foe, target, null, true);
			}
		},
		name: "Altruist",
		isNonstandard: "Future",
	},
	hellfirerush: {
		onFoeModifySpe(spe, pokemon) {
			if (pokemon.side.getSideCondition('seaoffire')) {
				this.debug('i have no fucking clue');
				return this.chainModify(0.5);
			}
		},
		name: "Hellfire Rush",
		rating: 3.5,
		isNonstandard: "Future",
	},
	swampforce: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon, target) {
			if ((target.side.getSideCondition('swamp')) && (this.field.isTerrain('grassyterrain'))) {
				this.debug('Swamp Force double buff');
				return this.chainModify(2);
			} else if (target.side.getSideCondition('swamp')) {
				this.debug('Swamp Force swamp buff');
				return this.chainModify(1.5);
			} else if (this.field.isTerrain('grassyterrain')) {
				this.debug('Swamp Force terrain buff');
				return this.chainModify(1.5);
			}
		},
		name: "Swamp Force",
		rating: 3.5,
		isNonstandard: "Future",
	},
	cellshield: {
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Dark') {
				this.debug('Cell Shield weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Dark') {
				this.debug('Cell Shield weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Cell Shield",
		rating: 4,
		num: 1213,
		isNonstandard: "Future",
	},
	shrimpleas: {
		onModifyMove(move, pokemon) {
			if (!move.secondaries) {
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([5325, 4096]);
		},
		name: "Shrimple As",
		rating: 3.5,
		num: 1125,
		isNonstandard: "Future",
	},
	mortal: {
		onUpdate(pokemon) {
			if (pokemon.species.id !== 'blobboslichmortal') return;
			if (this.effectState.recovered === true) {
				pokemon.formeChange('Blobbos-Lich', this.effect, true, '[msg]');
				this.heal(pokemon.baseMaxhp / 3);
			}
		},
		name: "Mortal",
		isNonstandard: "Future",
	},
	immortality: {
		onUpdate(pokemon) {
			if (pokemon.species.id !== 'blobboslich') return;
			if (!pokemon.side.pokemon.some((ally) => (ally !== pokemon) &&
			!ally.fainted && !['blobboslich', 'blobboslichmortal'].includes(ally.species.id) && ally.item === 'phylactery')) {
				pokemon.formeChange('Blobbos-Lich-Mortal', this.effect, true, '[msg]');
			}
		},
		onTryHit(pokemon, target, move) {
			if (pokemon.species.id !== 'blobboslich') return;
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Immortality');
				pokemon.formeChange('Blobbos-Lich-Mortal', this.effect, true, '[msg]');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target) {
			if (target.species.id !== 'blobboslich') return;
			if (damage >= target.hp) {
				this.add('-ability', target, 'Immortality');
				target.formeChange('Blobbos-Lich-Mortal', this.effect, true, '[msg]');
				return target.hp - 1;
			}
		},
		name: "Immortality",
		isNonstandard: "Future",
	},
	assimilation: {
		name: "Assimilation",
		isNonstandard: "Future",
		onTryHit(target, source, move) {
			if (!this.effectState.immuneTypes) return;
			if (target === source) return;
			if (this.effectState.immuneTypes.includes(move.type)) {
				this.add('-immune', target, '[from] ability: Assimilation');
				return null;
			}
		},
		onSetStatus(status, target, source, effect) {
			let newType: string | null = null;
			if (['psn', 'tox'].includes(status.id)) {
				newType = 'Poison';
				this.heal(target.baseMaxhp / 4);
			} else if (status.id === 'brn') {
				newType = 'Fire';
				this.boost({
					atk: 2,
					spa: 2,
				}, target, target, this.effect);
			} else if (status.id === 'par') {
				newType = 'Electric';
				this.boost({
					spe: 2,
				}, target, target, this.effect);
			} else if (status.id === 'frz') {
				newType = 'Ice';
				this.boost({
					def: 2,
					spd: 2,
				}, target, target, this.effect);
			} else if (status.id === 'slp') {
				newType = 'Normal';
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				}, target, target, this.effect);
			}

			if (newType && !target.hasType(newType) && target.addType(newType)) {
				this.add('-start', target, 'typechange', target.types.join('/'), '[from] ability: Assimilation');
			}

			if (!this.effectState.immuneTypes) {
				this.effectState.immuneTypes = [];
			}

			if (!this.effectState.immuneTypes.includes(newType)) {
				this.effectState.immuneTypes.push(newType);
			}

			return false;
		},
	},
	thermalfumes: {
		name: "Thermal Fumes",
		isNonstandard: "Future",
		onModifyMove(move) {
			if (move.category === 'Status') return;
			if (move.type === 'Fire') {
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 20,
					status: 'psn',
					ability: this.dex.abilities.get('thermalfumes'),
				});
			} else if (move.type === 'Poison') {
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 20,
					status: 'brn',
					ability: this.dex.abilities.get('thermalfumes'),
				});
			}
		},
	},
	joycon: {
		onModifyMovePriority: -11,
		onModifyMove(move, attacker, defender) {
			if ((attacker.species.baseSpecies !== 'Blobbos-Switch' && attacker.species.name !== 'Blobbos-Switch') || attacker.transformed) return;
			if (move.category === 'Status') {
				attacker.formeChange('Blobbos-Switch');
			} else if (move.category === 'Special') {
				attacker.formeChange('Blobbos-Switch-Blue');
			} else {
				attacker.formeChange('Blobbos-Switch-Red');
			}
		},
		isPermanent: true,
		name: "Joycon",
		isNonstandard: "Future",
	},
	ancientstyle: {
		onStart(pokemon) {
			this.effectState.style = 'agile';
			this.add('-start', pokemon, this.effectState.style);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.style);
		},
		onResidual(pokemon) {
			if (!pokemon.activeTurns) return;
			if (this.effectState.style === 'agile') {
				this.effectState.style = 'strong';
				this.add('-end', pokemon, 'agile');
				this.add('-start', pokemon, 'strong');
			} else {
				this.effectState.style = 'agile';
				this.add('-end', pokemon, 'strong');
				this.add('-start', pokemon, 'agile');
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (this.effectState.style === 'agile') {
				return this.chainModify(0.75);
			} else {
				return this.chainModify(1.25);
			}
		},
		onModifySpe(spe, pokemon) {
			if (this.effectState.style === 'agile') {
				return this.chainModify(1.25);
			} else {
				return this.chainModify(0.75);
			}
		},
		name: "Ancient Style",
		isNonstandard: "Future",
	},
	constrictor: {
		// implemented in statuses
		name: "Constrictor",
		isNonstandard: "Future",
	},
	deadlypincers: {
		onBeforeTurn(pokemon) {
			const action = this.queue.willMove(pokemon);
			if (!action) return;
			if (!action.move.forceSwitch) return;
			pokemon.addVolatile('deadlypincers');
			this.add('-start', pokemon, 'ability: Deadly Pincers');
		},
		condition: {
			noCopy: true,
			duration: 1,
			onModifyDef() {
				return this.chainModify(1.5);
			},
			onModifySpD() {
				return this.chainModify(1.5);
			},
			onAfterMoveSecondarySelf(source) {
				source.removeVolatile('deadlypincers');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'ability: Deadly Pincers', '[silent]');
			},
		},
		name: "Deadly Pincers",
		isNonstandard: "Future",
	},
	possessed: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.name !== 'Blobbos-Doll' || attacker.transformed) return;
			if (move.id !== 'plushrush') return;
			attacker.formeChange('Blobbos-Doll-Possessed');
		},
		isPermanent: true,
		name: "Possessed",
		rating: 4,
		isNonstandard: "Future",
	},

	bountifulharvest: {
		name: "Bountiful Harvest",
		rating: 1.5,
		num: 82,
		isNonstandard: "Future",
		onStart(pokemon) {
			pokemon.abilityState.gluttony = true;
		},
		onDamage(item, pokemon) {
			pokemon.abilityState.gluttony = true;
		},
		onEatItem(item, pokemon) {
			pokemon.abilityState.gluttony = true;
			const weakenBerries = [
				'Babiri Berry', 'Charti Berry', 'Chilan Berry', 'Chople Berry', 'Coba Berry', 'Colbur Berry', 'Haban Berry', 'Kasib Berry', 'Kebia Berry', 'Occa Berry', 'Passho Berry', 'Payapa Berry', 'Rindo Berry', 'Roseli Berry', 'Shuca Berry', 'Tanga Berry', 'Wacan Berry', 'Yache Berry',
			];
			// Record if the pokemon ate a berry to resist the attack
			pokemon.abilityState.berryWeaken = weakenBerries.includes(item.name);
			if (item.isBerry && pokemon.addVolatile('cudchew')) {
				pokemon.volatiles['cudchew'].berry = item;
			}
			this.heal(pokemon.baseMaxhp / 3);
		},
		onTryHeal(damage, target, source, effect) {
			if (!effect) return;
			if (effect.name === 'Berry Juice' || effect.name === 'Leftovers') {
				this.add('-activate', target, 'ability: Ripen');
			}
			if ((effect as Item).isBerry) return this.chainModify(2);
		},
		onTryBoost(boost, target, source, effect) {
			if (effect && (effect as Item).isBerry) {
				let b: BoostID;
				for (b in boost) {
					boost[b]! *= 2;
				}
			}
		},
		onTryEatItemPriority: -1,
		onTryEatItem(item, pokemon) {
			this.add('-activate', pokemon, 'ability: Ripen');
		},
		onSourceModifyDamagePriority: -1,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.abilityState.berryWeaken) {
				target.abilityState.berryWeaken = false;
				return this.chainModify(0.5);
			}
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['cudchew'];
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.abilityState.gluttony = true;
			if (this.field.isWeather(['sunnyday', 'desolateland']) || this.randomChance(1, 2)) {
				if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
				}
			}
		},
		condition: {
			noCopy: true,
			duration: 2,
			onRestart() {
				this.effectState.duration = 2;
			},
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onEnd(pokemon) {
				pokemon.abilityState.gluttony = true;
				if (pokemon.hp) {
					const item = this.effectState.berry;
					this.add('-activate', pokemon, 'ability: Cud Chew');
					this.add('-enditem', pokemon, item.name, '[eat]');
					if (this.singleEvent('Eat', item, null, pokemon, null, null)) {
						this.runEvent('EatItem', pokemon, null, null, item);
					}
					if (item.onEat) pokemon.ateBerry = true;
				}
			},
		},
	},
	plunderedluck: {
		onModifyMovePriority: -2,
		onFoeModifyMove(move) {
			if (move.secondaries) {
				this.debug('halving secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance /= 2;
				}
			}
			if (move.self?.chance) move.self.chance /= 2;
		},
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		name: "Plundered Luck",
		isNonstandard: "Future",
	},
	kantonaut: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel' || move.type === 'Dark' || move.type === 'Fairy') {
				this.debug('KANTOOOOOOOOOOO');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel' || move.type === 'Dark' || move.type === 'Fairy') {
				this.debug('KANTOOOOOOOOOOO');
				return this.chainModify(0.5);
			}
		},
		onSourceBasePowerPriority: 17,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Ice') {
				return this.chainModify(2);
			}
		},
		isBreakable: true,
		name: "Kantonaut",
		rating: 3.5,
		num: 1047,
		isNonstandard: "Future",
	},
	colorboost: {
		name: "Color Boost",
		onAfterTypeChange(typeChange, pokemon) {
			if (this.effectState.colorBoost) return;
			console.log(typeChange);
			const [oldTypes, newTypes] = typeChange;
			if (oldTypes.join('/') === newTypes.join('/')) return;
			pokemon.addVolatile('colorboost');
		},
		onSwitchIn(pokemon) {
			delete this.effectState.colorBoost;
		},
		condition: {
			noCopy: true,
			onModifyAtkPriority: 5,
			onModifySpAPriority: 5,
			onStart(pokemon) {
				this.add('-start', pokemon, 'ability: Color Boost');
			},
			onModifyAtk(atk, source, target, move) {
				this.debug('Color Boost atk boost');
				return this.chainModify(1.5);
			},
			onModifySpA(atk, source, target, move) {
				this.debug('Color Boost atk boost');
				return this.chainModify(1.5);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'ability: Color Boost');
			},
		},
		isNonstandard: "Future",
	},
	powerofyeehaw: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.kick) {
				this.debug('YEEHAW! boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move.flags.kick) {
				this.debug('YEEHAW! - ensuring perfect accuracy');
				return true;
			}
			return accuracy;
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
				this.boost({spa: length}, source);
			}
		},
		name: "Power of YEEHAW!",
		isNonstandard: "Future",
		rating: 3,
		num: 265,
	},
	doomed: {
		onAfterUseItem(item, pokemon) {
			if (pokemon !== this.effectState.target) return;
			pokemon.addVolatile('doomed');
		},
		onTakeItem(item, pokemon) {
			pokemon.addVolatile('doomed');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('doomed');
		},
		condition: {
			onModifySpe(spe, pokemon) {
				if (!pokemon.item && !pokemon.ignoringAbility()) {
					return this.chainModify(0.5);
				}
			},
		},
		onSwitchOut(pokemon) {
			pokemon.damage(pokemon.baseMaxhp / 3);
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const headBasedMoves = [
				'zenheadbutt',
				'headbutt',
				'headcharge',
				'headsmash',
				'ironhead',
				'skulltoss',
				'skullbash',
				'concussion',
				'headlongrush',
				'braindamage',
			];
			if (headBasedMoves.includes(move.id)) {
				this.debug('boosts Head based moves');
				return this.chainModify(0.5);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.add('-activate', pokemon, 'ability: Doomed');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'psn' && status.id !== 'tox') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Doomed');
			}
			return false;
		},
		name: "Doomed",
		rating: 6,
		num: 666,
		isNonstandard: "Future",
	},
	hyperspeen: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const SPEENMoves = [
				'blazingtorque',
				'combattorque',
				'darkestlariat',
				'icespinner',
				'magicaltorque',
				'mortalspin',
				'noxioustorque',
				'rapidspin',
				'spinout',
				'wickedtorque',
				'firespin',
				'gyroball',
				'iceball',
				'rollout',
				'twister',
			];
			if (SPEENMoves.includes(move.id)) {
				this.debug('Hyperspeen boost');
				return this.chainModify(2);
			}
		},
		name: "Hyperspeen",
		isNonstandard: "Future",
	},
	rollan: {
		onStart(pokemon) {
			const stats: BoostID[] = [];

			let stat: BoostID;
			for (stat in pokemon.boosts) {
				if (stat === 'accuracy' || stat === 'evasion') continue;
				if (pokemon.boosts[stat] < 6) stats.push(stat);
			}

			if (!stats.length) return;

			const statA = this.sample(stats);
			const statB = this.sample(stats);

			if (statA === statB) {
				pokemon.addVolatile('focusenergy');
				this.add('-activate', pokemon, 'ability: Rollan');
			}

			const boosts: SparseBoostsTable = {};
			boosts[statA] = 1;
			boosts[statB] = (boosts[statB] || 0) + 1;
			this.boost(boosts, pokemon);
		},
		name: "Rollan",
		rating: 3.5,
		num: 88,
	},

	serenetrace: {
		
		onStart(pokemon) {
			// n.b. only affects Hackmons
			// interaction with No Ability is complicated: https://www.smogon.com/forums/threads/pokemon-sun-moon-battle-mechanics-research.3586701/page-76#post-7790209
			for (const side of pokemon.side.foeSidesWithConditions()) {
				side.addSideCondition('rainbow');
			}
		
			if (pokemon.adjacentFoes().some(foeActive => foeActive.ability === 'noability')) {
				this.effectState.gaveUp = true;
			}
			// interaction with Ability Shield is similar to No Ability
			if (pokemon.hasItem('Ability Shield')) {
				this.add('-block', pokemon, 'item: Ability Shield');
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability', 'commander', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			if (pokemon.setAbility(ability)) {
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			}
		},
		name: "Serene Trace",
		rating: 4,
		num: 229,
		isNonstandard: "Future",
	},
	aromascale: {
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aromascale', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAnyModifyDamage(damage, source, target, move) {
			if (target.isAlly(this.effectState.target) && target.hp >= target.maxhp) {
				this.debug('Aromascale weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Aromascale",
		rating: 2,
		num: 165,
	},
	cancer: {
		name: "Cancer",
		isNonstandard: "Future",
		onResidual(pokemon) {
			pokemon.foes(true).forEach((foe) => {
				if (foe.status) {
					if (['tox', 'psn'].includes(foe.status)) {
						const heal = this.damage(foe.baseMaxhp / 16, foe, pokemon);
						if (heal) {
							this.heal(heal, pokemon);
						}
					}
				} else {
					foe.setStatus('tox');
				}
			});
		},
	},
	doomguard: {
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Doom Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) >= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Doom Guard');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Doom Guard",
		rating: 5,
		num: 25,
		isNonstandard: "Future",
	},
	mindovermatter: {
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk > 0) {
				boost.spa = boost.atk + (boost.spa || 0);
				delete boost.atk;
			}
		},
		isBreakable: true,
		name: "Mind Over Matter",
		rating: 0.5,
		num: 51,
		isNonstandard: "Future",
	},
	healthybody: {
		onModifySpA(spa, source) {
			let totalBoosts = 0;
			let statPlus: BoostID;
			for (statPlus in source.boosts) {
				totalBoosts += source.boosts[statPlus];
			}

			if (totalBoosts >= 3) {
				return spa + source.getStat('atk');
			}
		},
		name: "Healthy Body",
		isNonstandard: "Future",
	},
	holyboost: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statName: StatIDExceptHP = 'atk';
				let worstStat = Infinity;
				const stats: StatIDExceptHP[] = ['atk', 'def', 'spa', 'spd', 'spe'];
				for (const i of stats) {
					const statValue = source.getStat(i, true, true);
					if (statValue < worstStat) {
						statName = i;
						worstStat = statValue;
					}
				}

				this.boost({[statName]: 1}, source);

				return statName;
			}
		},
		name: "Holy Boost",
		isNonstandard: "Future",
	},
	rot: {
		name: "Rot",
		onStart(source) {
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.hasItem('Leftovers')) continue;
				pokemon.setItem('Black Sludge');
				this.add('-item', pokemon, 'Black Sludge', '[from] ability: Rot', '[of] ' + source);
			}
		},
		isNonstandard: "Future",
	},
	"2mss": {
		name: "2MSS",
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (let i = 0; i < pokemon.moveSlots.length; i++) {
				if (i > 1) {
					const moveSlot = pokemon.moveSlots[i];
					pokemon.disableMove(moveSlot.id, false);
				}
			}
		},
		isNonstandard: "Future",
	},
	evolutionaryadvantage: {
		name: "Evolutionary Advantage",
		onBasePower(basePower, pokemon, target, move) {
			if (!target) return;
			if (target.species.color !== pokemon.species.color) {
				return this.chainModify(2);
			}
		},
		isNonstandard: "Future",
	},
	closequarterscombat: {
		name: "Close-Quarters Combat",
		onStart(pokemon) {
			const foe = this.sample(pokemon.adjacentFoes());
			const item = foe.takeItem();
			if (item) {
				this.add('-enditem', foe, item.name, '[from] ability: close-Quarters Combat', '[of] ' + pokemon);
			}
		},
		isNonstandard: "Future",
	},
	predator: {
		name: "Predator",
		onModifyCritRatio(critRatio, pokemon, target) {
			if (!target) return;
			let totalDrops = 0;
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 0) {
					totalDrops += Math.abs(target.boosts[stat]);
				}
			}

			return critRatio + totalDrops;
		},
		isNonstandard: "Future",
	},
	hazey: {
		name: "Hazey",
		onStart() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		isNonstandard: "Future",
	},
	crippleguard: {
		name: "Cripple Guard",
		onDamage(damage, target, source, effect) {
			if (source && source.status) {
				return Math.floor(damage * 0.75);
			}
		},
		isNonstandard: "Future",
	},
	boostboost: {
		name: "Boost Boost",
		onBasePower(basePower, pokemon, target, move) {
			let totalBoosts = 0;
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] > 0) {
					totalBoosts += target.boosts[stat];
				}
			}

			if (totalBoosts) {
				return this.chainModify(1 + (totalBoosts * 0.1));
			}
		},
		isNonstandard: "Future",
	},
	fetalrupture: {
		name: "Fetal Rupture",
		onModifyMove(move, pokemon, target) {
			if (!target) return;
			if (move.category === 'Status') return;
			if (target.species.nfe) move.ohko = true;
		},
		isNonstandard: "Future",
	},
	sleeper: {
		name: "Sleeper",
		onModifyMove(move, pokemon) {
			move.sleepUsable = true;
		},
		onDamage(damage, pokemon) {
			if (pokemon.status === 'slp') {
				return damage * 2;
			}
		},
		onResidual(pokemon) {
			if (pokemon.activeTurns % 2 === 0) {
				pokemon.trySetStatus('slp');
			}
		},
		isNonstandard: "Future",
	},
	sequencer: {
		name: "Sequencer",
		onBasePower(basePower, source, target, move) {
			return basePower + Math.max(0, (move.hit - 1) * 10);
		},
		isNonstandard: "Future",
	},
	frostysurge: {
		onStart(source) {
			this.field.setTerrain('frostyterrain');
		},
		name: "Frosty Surge",
		isNonstandard: "Future",
	},
	brainwash: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Brainwash', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "Brainwash",
		rating: 3.5,
		isNonstandard: "Future",
	},
	paralysisheal: {
		onResidual(pokemon) {
			if (pokemon.getStatus().id === 'par') {
				this.heal(pokemon.baseMaxhp / 8);
			}
		},
		name: "Paralysis Heal",
		rating: 4,
		isNonstandard: "Future",
	},
	dramatic: {
		name: "Dramatic",
		isNonstandard: "Future",
		onHit(target, source, move) {
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				this.effectState.forceCrit = true;
			}
		},
		onModifyCritRatio(critRatio, pokemon) {
			if (this.effectState.forceCrit) {
				return 5;
			} else if ((pokemon.hp / pokemon.baseMaxhp) <= 0.25) {
				return critRatio + 2;
			}
		},
		onAfterMove(source, target, move) {
			if (this.effectState.forceCrit && target.getMoveHitData(move).crit) {
				delete this.effectState.forceCrit;
			}
		},
	},
	compensate: {
		name: "Compensate",
		isNonstandard: "Future",
		onModifyAtk(atk, attacker) {
			const maxDefSpe = Math.max(attacker.getStat('spe', true, true), attacker.getStat('def', true, true));
			return atk + Math.floor(0.25 * maxDefSpe);
		},
	},
	dexterity: {
		name: "Dexterity",
		isNonstandard: "Future",
		onModifyAtk(atk, attacker) {
			return atk + Math.floor(0.25 * attacker.getStat('spe', true, true));
		},
	},
	vindication: {
		name: "Vindication",
		isNonstandard: "Future",
		onModifyAtk(atk, attacker) {
			return atk + Math.floor(0.25 * attacker.getStat('def', true, true));
		},
	},
	digger: {
		name: "Digger",
		isNonstandard: "Future",
		onModifyMove(move) {
			if (move.id !== 'dig') return;
			delete move.flags.protect;
			move.infiltrates = true;
			move.ignoreImmunity = true;
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.id !== 'dig') return;
			return this.chainModify(1.5);
		},
		onFoeEffectiveness(typeMod, target, type, move) {
			if (move.id !== 'dig') return typeMod;
			if (target && target.hasType('Flying')) {
				return -1;
			}
			return typeMod;
		},
	},
	mongoosesmalice: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['Poison', 'Ghost'].includes(move.type)) {
				this.debug('MM boost');
				return this.chainModify(1.5);
			}
			if (['Fighting', 'Normal'].includes(move.type)) {
				this.debug('MM "boost"');
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (['Poison', 'Ghost'].includes(move.type)) {
				this.debug('MM boost');
				return this.chainModify(1.5);
			}
			if (['Fighting', 'Normal'].includes(move.type)) {
				this.debug('MM "boost"');
				return this.chainModify(0.5);
			}
		},
		name: "Mongoose's Malice",
		rating: 5,
		isNonstandard: "Future",
	},
	extremeskill: {
		name: "Extreme Skill",
		isNonstandard: "Future",
		onModifyMove(move) {
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 1,
				onHit(target, source) {
					this.win(source.side);
				},
			});
		},
	},
	fuckforce: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([5120, 4096]);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
			if (move.id === 'miraclepunch') {
				move.multihit = 2;
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([4915, 4096]);
			}
		},
		name: "Fuckforce",
		isNonstandard: "Future",
	},
	ironfish: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.id !== 'fishiousrend') return;
			this.debug('Iron Fist boost');
			return this.chainModify([4915, 4096]);
		},
		name: "Iron Fish",
		isNonstandard: "Future",
	},
	originalsin: {
		name: "Original Sin",
		rating: 5,
		isNonstandard: "Future",
		isPermanent: true,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			return this.chainModify([4080, 4096]);
		},
		onModifyMove(move) {
			if (move.id !== 'poisonsting') return;
			move.secondaries = [];
			move.secondaries.push({
				chance: 100,
				status: 'psn',
				ability: this.dex.abilities.get('originalsin'),
			});
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('In Gen 1, Bug was weak to Poison.');
				return this.chainModify(16);
			}
			if (move.type === 'Bug') {
				this.debug('In Gen 1, Poison was weak to Bug.');
				return this.chainModify(4);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('In Gen 1, Bug was weak to Poison.');
				return this.chainModify(16);
			}
			if (move.type === 'Bug') {
				this.debug('In Gen 1, Poison was weak to Bug.');
				return this.chainModify(4);
			}
		},
	},
	rampage: {
		name: 'Rampage',
		gen: 1,
		isNonstandard: "Future",
		onAfterHit(source, target, move) {
			if (!target.hp && source.volatiles['mustrecharge']) {
				source.removeVolatile('mustrecharge');
			}
		},
	},
	gogetter: {
		name: 'Go-Getter',
		isNonstandard: "Future",
		onUpdate(pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				this.add('-activate', pokemon, 'ability: Go-Getter');
				pokemon.removeVolatile('mustrecharge');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'mustrecharge') return null;
		},
	},
	falsedark: {
		name: "False Dark",
		rating: 0,
		isNonstandard: "Future",
		isPermanent: true,
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('BOMB SEEDED');
				return this.chainModify(0.5);
			}
			if (move.type === 'Fighting') {
				this.debug('PUNCH MACHED');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('DRAIN GIGAD');
				return this.chainModify(0.5);
			}
			if (move.type === 'Fighting') {
				this.debug('BLAST FOCUSED');
				return this.chainModify(0.5);
			}
		},
	},
	trickster: {
		name: "Trickster",
		isNonstandard: "Future",
		onFractionalPriorityPriority: -1,
		onFractionalPriority(priority, pokemon, target, move) {
			if (move.category === "Status") {
				return 0.1;
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				return priority + 1;
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fairy') {
				move.accuracy = true;
				if (!target.addVolatile('trickster')) {
					this.add('-immune', target, '[from] ability: Trickster');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('trickster');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Trickster');
			},
			onModifyMove(move) {
				if (move.category === 'Status') {
					move.ignoreAbility = true;
					move.ignoreImmunity = true;
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Trickster', '[silent]');
			},
		},
	},
	ascension: {
		name: "Ascension",
		isNonstandard: "Future",
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (target.species.id !== 'blobboshomestuck') return;
			if ((source !== target) && (effect.id !== 'recoil')) return;
			if (damage >= target.hp) {
				target.formeChange('blobboshomestuckgodtier', this.effect, true);
				target.heal(target.baseMaxhp);
				return false;
			}
		},
	},
	thiefoflight: {
		name: "Thief of Light",
		isNonstandard: "Future",
		onStart(pokemon) {
			const lightOfRuin = pokemon.baseMoves.indexOf('lightofruin');
			if (lightOfRuin >= 0) {
				const move = this.dex.moves.get('heroineslight');
				pokemon.baseMoveSlots[lightOfRuin] = {
					move: move.name,
					id: move.id,
					pp: (move.noPPBoosts || move.isZ) ? move.pp : Math.floor(move.pp * 8 / 5),
					maxpp: (move.noPPBoosts || move.isZ) ? move.pp : Math.floor(move.pp * 8 / 5),
					target: move.target,
					disabled: false,
					disabledSource: '',
					used: false,
				};
				pokemon.moveSlots = pokemon.baseMoveSlots.slice();
			}
		},
		onModifyMovePriority: -2,
		onFoeModifyMove(move) {
			if (move.secondaries) {
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance = 0;
				}
			}
			if (move.self?.chance) move.self.chance = 0;
		},
		onModifyMove(move) {
			if (move.secondaries) {
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		onImmunity(type, pokemon) {
			if (type === 'ground') return false;
		},
	},
	homogeneity: {
		name: "Homogeneity",
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			let homogenousAllies = 0;
			for (const pokemon of attacker.side.pokemon) {
				if (attacker === pokemon) continue;
				if (pokemon.fainted) continue;
				if (pokemon.getTypes().some((type) => attacker.types.includes(type))) {
					homogenousAllies++;
				}
			}
			return this.chainModify(1 + homogenousAllies * 0.2);
		},
		isNonstandard: "Future",
	},
	multiversal: {
		name: "Multiversal",
		isNonstandard: "Future",
		onUpdate(pokemon) {
			this.effectState.step = this.effectState.step || 0;
			const rawData = FS('config/multiversal.json').readIfExistsSync() || '{ "step": 0 }';
			const data = JSON.parse(rawData);

			if (this.effectState.step >= data.step) {
				this.effectState.step++;
				const newData = {
					step: this.effectState.step,
					boosts: pokemon.boosts,
					volatiles: Object.keys(pokemon.volatiles),
					status: pokemon.status,
				};
				FS('config/multiversal.json').writeSync(JSON.stringify(newData));
			} else {
				const volatiles = data.volatiles as string[] | undefined;
				if (volatiles) {
					volatiles.forEach((volatile) => {
						if (pokemon.volatiles[volatile]) return;
						pokemon.addVolatile(volatile, pokemon, this.effect);
					});
				}

				const status = data.status as string | undefined;
				if (status) {
					pokemon.setStatus(status, pokemon, this.effect);
				}

				const boosts = data.boosts as BoostsTable | undefined;
				if (boosts) {
					this.add('-clearboost', pokemon, '[from] ability: Multiversal', '[of] ' + pokemon);
					this.boost(boosts);
				}

				this.effectState.step = data.step;
			}
		},
	},
	medusascurse: {
		name: "Medusa's Curse",
		onStart(source) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon === source) continue;
				this.add('-start', pokemon, 'typechange', 'Rock', "[from] ability: Medusa's Curse", '[of] ' + source);
				pokemon.setType('Rock');
			}
		},
		isNonstandard: "Future",
	},
	sweetdreams: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			let factor = 0;
			if (pokemon.status === 'slp') {
				factor++;
			}
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target && target.status === 'slp') {
				factor++;
			}
			if (factor) {
				this.heal(factor * (pokemon.baseMaxhp / 16));
			}
		},
		name: "Sweet Dreams",
		isNonstandard: "Future",
	},
	barkback: {
		onTryHit(target, source, move) {
			if (target !== source && move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Bark Back');
				this.damage(source.baseMaxhp / 4, source, target);
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', this.effectState.target, '[from] ability: Bark Back');
			}
		},
		isBreakable: true,
		name: "Bark Back",
		rating: 2,
		isNonstandard: "Future",
		num: 43,
	},
	sufferasihave: {
		name: "Suffer As I Have",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			source.addVolatile('curse', this.effectState.target);
		},
		rating: 2,
		isNonstandard: "Future",
	},
	amplifier: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Amplifier boost');
				return this.chainModify(2);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				this.debug('Amplifier weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Amplifier",
		rating: 3.5,
		num: 244,
		isNonstandard: "Future",
	},
	feelthefoliage: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target) && !source.status) {
				const r = this.random(100);
				if (r < 11) {
					this.damage(source.baseMaxhp / 4, source, target);
					source.setStatus('brn', target);
				} else if (r < 21) {
					this.damage(source.baseMaxhp / 4, source, target);
					source.setStatus('par', target);
				} else if (r < 30) {
					this.damage(source.baseMaxhp / 4, source, target);
					source.setStatus('psn', target);
				}
			}
		},
		name: "Feel The Foliage",
		rating: 2,
		isNonstandard: "Future",
	},
	musclemass: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fighting') {
				if (!this.boost({def: 1})) {
					this.add('-immune', target, '[from] ability: Muscle Mass');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Fighting') return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Muscle Mass');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Muscle Mass",
		rating: 3,
		num: 114,
		isNonstandard: "Future",
	},
	runngun: {
		// This should be applied directly to the stat as opposed to chaining with the others
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (typeof accuracy === 'number') {
				return this.chainModify([3687, 4096]);
			}
		},
		name: "Run N' Gun",
		rating: 3.5,
		isNonstandard: "Future",
	},
	noweaknesses: {
		isNonstandard: "Future",
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'NO WEAKNESSES');
			this.add('-ability', pokemon, 'Levitate');
			this.effectState.unnerved = true;
		},
		onPrepareHit(source, target, move) {
			if (move.type === 'Normal' || move.type === 'Ghost') {
				source.setType(['Normal', 'Ghost']);
				source.setAbility('wholesome100');
				this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] ability: NO WEAKNESSES', '[of] ' + source);
				this.add('-ability', source, source.getAbility(), '[from] ability: NO WEAKNESSES');
			} else if (move.type === 'Bug' || move.type === 'Steel') {
				source.setType(['Bug', 'Steel']);
				source.setAbility('flashfire');
				this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] ability: NO WEAKNESSES', '[of] ' + source);
				this.add('-ability', source, source.getAbility(), '[from] ability: NO WEAKNESSES');
			} else if (move.type === 'Dark' || move.type === 'Poison') {
				source.setType(['Dark', 'Poison']);
				source.setAbility('eartheater');
				this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] ability: NO WEAKNESSES', '[of] ' + source);
				this.add('-ability', source, source.getAbility(), '[from] ability: NO WEAKNESSES');
			} else if (move.type === 'Water' || move.type === 'Ground') {
				source.setType(['Water', 'Ground']);
				source.setAbility('sapsipper');
				this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] ability: NO WEAKNESSES', '[of] ' + source);
				this.add('-ability', source, source.getAbility(), '[from] ability: NO WEAKNESSES');
			}
		},

		name: "NO WEAKNESSES",
		rating: 2,
		num: 1067,
	},
	sapiophile: {
		name: "Sapiophile",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Psychic') {
				this.debug('Sapiophile boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Psychic') {
				this.debug('Sapiophile boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Psychic') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Sapiophile');
				}
				return null;
			}
		},
		onResidual(pokemon) {
			if (this.field.isTerrain('psychicterrain') && pokemon.isGrounded()) {
				this.heal(pokemon.baseMaxhp / 8);
			}
		},
		rating: 3.5,
		isNonstandard: "Future",
	},

	acapability: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				const bestStat = source.getBestStat(true, true);
				this.boost({[bestStat]: length}, source);
			}
		},
		name: "A Cap Ability",
		isNonstandard: "Future",
	},
	acabability: {
		name: "A Cab Ability",
		isNonstandard: "Future",
		onStart(pokemon) {
			if (pokemon.abilityState) return;
			const date = new Date();
			const dayOfWeek = date.getDay();
			// Channeling Yandere-dev
			if (dayOfWeek === 0) {
				pokemon.abilityState = {
					type: 'vowels',
					vowelCount: 0,
				};
				this.add('-message', `${pokemon.name} is collecting vowels. If it KOs mons with 15 total vowels, its user wins the game.`);
			} else if (dayOfWeek === 1) {
				pokemon.abilityState = {
					type: 'nicknames',
				};
				this.add('-message', `${pokemon.name} hates lazy players. It has 1.5x BP against enemies without nicknames.`);
			} else if (dayOfWeek === 2) {
				pokemon.abilityState = {
					type: 'tripping',
				};
				this.add('-message', `${pokemon.name} loves randomness. 1% of the time ANY user's move will fail.`);
			} else if (dayOfWeek === 3) {
				pokemon.abilityState = {
					type: 'primal',
				};
				this.add('-message', `${pokemon.name}'s Prime-al Reversion! If it has prime numbered health, it will be twice as fast.`);
			} else if (dayOfWeek === 4) {
				pokemon.abilityState = {
					type: 'busted',
				};
				this.add('-message', `${pokemon.name} ignored the CAB team's advice and buffed itself. Excessively. But just this once.`);
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
			} else if (dayOfWeek === 5) {
				pokemon.abilityState = {
					type: 'reproduction',
				};
				if (!pokemon.speciesState['parent']) {
					this.add('-message', `${pokemon.name} just cloned itself.`);
					const targetSet = pokemon.set;
					const childName = [
						`${targetSet.species}, ${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${pokemon.name}`,
						`${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${pokemon.name}`,
						`${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${pokemon.species}`,
					].find((name) => name.length <= 18) || 'A Mere Child';
					const baby = new Pokemon({
						...targetSet,
						name: childName,
						moves: ['Metronome', 'Softboiled', 'Egg Bomb', 'Revelation Dance'],
						item: undefined,
					}, pokemon.side);
					baby.speciesState['parent'] = true;
					baby.position = pokemon.side.pokemon.length;
					pokemon.side.pokemon.push(baby);
					pokemon.side.pokemonLeft += 1;
					pokemon.speciesState['parent'] = true;
					this.add('teamsize', pokemon.side.id, pokemon.side.pokemon.length);
				}
			} else if (dayOfWeek === 6) {
				pokemon.abilityState = {
					type: 'loser',
				};
				this.add('-message', `${pokemon.name} doesn't feel like playing. His side loses, sorry.`);
				this.lose(pokemon.side);
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (pokemon.abilityState && pokemon.abilityState.type === 'nicknames') {
				if (target.name === target.baseSpecies.name) {
					this.add('-message', `${pokemon.name} thinks you should nickname your mons.`);
					return this.chainModify(1.5);
				}
			}
		},
		onModifySpe(spe, pokemon) {
			const isPrime = (num: number) => {
				if (num <= 1) return false;
				if (num === 2) return true;
				const num2 = Math.sqrt(num);
				for (let i = 2; i <= num2; i++) {
					if (num2 % i === 0) {
						return false;
					}
				}
				return true;
			};
			if (pokemon.abilityState && pokemon.abilityState.type === 'primal') {
				if (isPrime(pokemon.hp)) {
					this.add('-message', `${pokemon.name} feels hella Prime-al.`);
					return this.chainModify(2);
				}
			}
		},
		onAnyTryMove(source) {
			const active = this.getAllActive()
				.some((pokemon) => pokemon.hasAbility('acabability') && pokemon.abilityState && pokemon.abilityState.type === 'tripping');
			if (active && this.randomChance(1, 100)) {
				return this.FAIL;
			}
		},
		onAnyFaint(target, source) {
			const countVowels = (str: string) => {
				const id = this.toID(str) || '';
				return (id.match(/[aeiou]/gi) || []).length;
			};
			if (source.abilityState && source.abilityState.type === 'vowels') {
				source.abilityState.vowelCount += countVowels(target.species.name);
				this.add('-message', `${source.name} has collected ${source.abilityState.vowelCount} vowels.`);
				if (source.abilityState.vowelCount >= 10) {
					this.add('-message', `${source.name} collected enough vowels. They won.`);
					this.win(source.side);
				}
			}
		},
	},
	crowheaded: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const peckMoves = [
				'peck',
				'drillpeck',
				'pluck',
			];
			if (peckMoves.includes(move.id)) {
				this.debug('Peck your beak');
				return this.chainModify(2);
			}
		},
		name: "Crowheaded",
		isNonstandard: "Future",
	},
	aintnothingonnabreakmystride: {
		onModifyMove(move) {
			move.stab = 2;
		},
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: AIN'T NOTHIN' GONNA BREAK MY STRIDE", "[of] " + target);
				this.add('-message', `(The Realwalker's stride cannot be broken!)`);
			}
		},
		isBreakable: false, // YOU EXPLICITLY CANNOT BREAK THEIR STRIDE
		name: "AIN'T NOTHIN' GONNA BREAK MY STRIDE",
		isNonstandard: "Future",
		rating: 99,
	},
	baller: { // i put the new forgis on the jeep
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			const ballMoves = [
				'aurasphere',
				'electroball',
				'energyball',
				'focusblast',
				'gyroball',
				'iceball',
				'mistball',
				'pollenpuff',
				'pyroball',
				'rollout',
				'shadowball',
				'sludgebomb',
				'weatherball',
			];
			if (ballMoves.includes(move.id)) {
				this.debug('Baller boost');
				return this.chainModify(1.5);
			}
		},
		name: "Baller",
		isNonstandard: "Future",
	},
	madeofglass: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp, source, source, this.dex.abilities.get('madeofglass'));
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(0.0000000001);
			}
			if (move.category === 'Physical') {
				return this.chainModify(0.0000000001);
			}
		},
		name: "Made of Glass",
		isNonstandard: "Future",
	},
	mindzap: {
		onStart(pokemon) {
			let activated = false;
			for (const sideCondition of ['reflect', 'lightscreen', 'auroraveil', 'mirageveil', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'luckyroll']) {
				for (const side of [pokemon.side, ...pokemon.side.foeSidesWithConditions()]) {
					if (side.getSideCondition(sideCondition)) {
						if (!activated) {
							this.add('-activate', pokemon, 'ability: Mind Zap');
							activated = true;
						}
						side.removeSideCondition(sideCondition);
					}
				}
			}
			this.field.clearWeather();
		},
		name: "Mind Zap",
		rating: 5,
	},
	atlonglast: {
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp >= target.maxhp * 0.7 && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'At Long Last');
				return target.hp - 1;
			}
		},
		isBreakable: true,
		name: "At Long Last",
	},
	jumper: {
		name: "Jumper",
		isNonstandard: "Future",
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Ground') {
				this.debug('Jumper weaken');
				return this.chainModify(0.5);
			}
			if (move.type === 'Flying' || move.type === 'Poison') {
				this.debug('Jumper strengthen');
				return this.chainModify(2.0);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Ground') {
				this.debug('Jumper weaken');
				return this.chainModify(0.5);
			}
			if (move.type === 'Flying' || move.type === 'Poison') {
				this.debug('Jumper strengthen');
				return this.chainModify(2.0);
			}
		},
		onChargeMove(pokemon, target, move) {
			this.debug('jumper - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
	},
	fireaffinity: {
		name: "Fire Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Fire Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Fire Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Fire Affinity');
				}
				return null;
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'brn') return false;
		},
	},
	wateraffinity: {
		name: "Water Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Water Affinity');
				}
				return null;
			}
		},
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
	},
	electricityaffinity: {
		name: "Electricity Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Electricity Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Electricity Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Electricity Affinity');
				}
				return null;
			}
		},
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.name === 'Aftermath') {
				return false;
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'par') return false;
		},
	},
	strengthaffinity: {
		name: "Strength Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Strength Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Strength Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fighting') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Strength Affinity');
				}
				return null;
			}
		},
		onBasePower(basePower, attacker, defender, move) {
			if (move.id === 'strength') {
				this.debug('Strength Affinity boost');
				return this.chainModify(1.5);
			}
		},
	},
	poisonaffinity: {
		name: "Poison Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Poison Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Poison Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Poison') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Poison Affinity');
				}
				return null;
			}
		},
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp && this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 4, source, target);
			}
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.item) return;
			let possibleMoves = pokemon.moveSlots.filter((moveSlot) => {
				const move = this.dex.moves.get(moveSlot.move);

				return move.category === 'Physical' || move.category === 'Special';
			});

			if (possibleMoves.length < 1) {
				possibleMoves = pokemon.moveSlots;
			}

			const randomMoveSlot = this.sample(possibleMoves);

			if (randomMoveSlot) {
				const randomMove = this.dex.moves.get(randomMoveSlot.move);
				const itemText = `${randomMove.type} Gem`;
				const item = this.dex.items.get(itemText);
				if (pokemon.setItem(item)) {
					this.add('-item', pokemon, item, '[from] ability: Poison Affinity');
				}
			}
		},
		onImmunity(type, pokemon) {
			if (['psn', 'tox'].includes(type)) return false;
		},
	},
	rockaffinity: {
		name: "Rock Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rock Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Rock Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (move.ohko) {
				this.add('-immune', target, '[from] ability: Sturdy');
				return null;
			}
			if (target !== source && move.type === 'Rock') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Rock Affinity');
				}
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Rock Affinity');
				return target.hp - 1;
			}
		},
	},
	flightaffinity: {
		name: "Flight Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Flight Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Flight Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Flight Affinity');
				}
				return null;
			}
		},
		onImmunity(type, pokemon) {
			if (this.toID(type) === 'ground') return false;
		},
	},
	iceaffinity: {
		name: "Ice Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				this.debug('Ice Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				this.debug('Ice Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Ice Affinity');
				}
				return null;
			}
		},
		onAnyEffectiveness(typemod, target, type, move) {
			const user = this.effectState.target;

			if (user !== this.activePokemon) return;

			if (move.type === 'Ice' && ['Water'].includes(type)) {
				return 1;
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
	},
	lightaffinity: {
		name: "Light Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Light Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Light Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fairy') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Light Affinity');
				}
				return null;
			}
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('Light Affinity - enhancing accuracy');
			return this.chainModify(2);
		},
	},
	parasiteaffinity: {
		name: "Parasite Affinity",
		isNonstandard: "Future",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Parasite Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Parasite Affinity boost');
				return this.chainModify(1.5);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				if (!this.heal(target.baseMaxhp / 8)) {
					this.add('-immune', target, '[from] ability: Parasite Affinity');
				}
				return null;
			}
		},
		onResidual(pokemon) {
			for (const target of pokemon.foes(true)) {
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 16, pokemon, target);
				if (damage) {
					this.heal(damage, pokemon, pokemon);
				}
			}
		},
	},
	windglider: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Windglider');
				}
				return null;
			}
		},
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['wind']) {
				return this.chainModify(1.3);
			}
		},
		isBreakable: true,
		isNonstandard: "Future",
		name: "Windglider",
		rating: 3.5,
		num: 18,
	},
	wonderland: {
		name: "Wonderland",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Wonderland');
			this.field.addPseudoWeather('wonderroom');
		},
		rating: 4,
		isNonstandard: "Future",
	},
	"3d": {
		name: "3D",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: 3D');
			this.field.addPseudoWeather('wonderroom');
			this.field.addPseudoWeather('trickroom');
			this.field.addPseudoWeather('magicroom');
		},
		rating: 4,
		isNonstandard: "Future",
	},
	carbonated: {
		name: "Carbonated",
		onStart(pokemon) {
			this.effectState.turns = 2;
			this.boost({atk: 1, spa: 1}, pokemon);
		},
		onResidual(pokemon) {
			if (this.effectState.turns === 0) {
				this.boost({atk: -1, spa: -1}, pokemon);
				delete this.effectState.turns;
			} else if (pokemon.activeTurns) {
				this.effectState.turns--;
			}
		},
		isNonstandard: "Future",
	},
	cellconstruct: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.species.name !== 'Blobbos-Mitosis' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'blobbosmitosiscomplete' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Cell Construct');
			pokemon.formeChange('Blobbos-Mitosis-Complete', this.effect, true);
			pokemon.baseMaxhp = Math.floor(Math.floor(
				2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
			) * pokemon.level / 100 + 10);
			const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
			pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newMaxHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		isPermanent: true,
		name: "Cell Construct",
		rating: 5,
		num: 211,
		isNonstandard: "Future",
	},
	malevolentsoul: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
			}
		},
		onTryHit(target, source, move) {
			if (move.category === 'Status' && target !== source) {
				this.add('-immune', target, '[from] ability: Malevolent Soul');
				return null;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Malevolent Soul boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Malevolent Soul boost');
				return this.chainModify(2);
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Malevolent Soul ghost quad weakness');
				return this.chainModify(4);
			}
		},
		onSourceModifySpAPriority: 6,
		onSourceModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Ghost') {
				this.debug('Malevolent Soul ghost quad weakness');
				return this.chainModify(4);
			}
		},
		name: "Malevolent Soul",
		rating: 3,
		num: 208,
		isNonstandard: "Future",
	},
	colonization: {
		onStart(pokemon) {
			if (pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'blobboscolony') {
					pokemon.formeChange('Blobbos-Colony-Colonized');
				}
			} else {
				if (pokemon.species.id === 'blobboscolonycolonized') {
					pokemon.formeChange('Blobbos-Colony');
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (
				pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'blobboscolony') {
					pokemon.formeChange('Blobbos-Colony-Colonized');
				}
			} else {
				if (pokemon.species.id === 'blobboscolonycolonized') {
					pokemon.formeChange('Blobbos-Colony');
				}
			}
		},
		isPermanent: true,
		name: "Colonization",
		rating: 3,
		num: 208,
		isNonstandard: "Future",
	},
	/** Wack abilities */
	darklife: {
		name: "Dark Life",
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'midnight') {
				this.heal(target.baseMaxhp / 14);
			}
		},
		rating: 2,
		num: 6660,
		isNonstandard: "Future",
	},
	memetic: {
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'memetic') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('memetic', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Memetic', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		onModifyAtk(atk, source, target, move) {
			if (!source.hasType('Meme')) {
				return this.chainModify(0.75);
			}
		},
		onModifySpA(spa, source, target, move) {
			if (!source.hasType('Meme')) {
				return this.chainModify(0.75);
			}
		},
		onModifyDef(def, target, source, move) {
			if (!source.hasType('Meme')) {
				return this.chainModify(0.75);
			}
		},
		onModifySpD(spd, target, source, move) {
			if (!source.hasType('Meme')) {
				return this.chainModify(0.75);
			}
		},
		onModifySpe(spe, pokemon) {
			if (!pokemon.hasType('Meme')) {
				return this.chainModify(0.75);
			}
		},
		name: "Memetic",
		rating: 4,
		num: 6661,
		isNonstandard: "Future",
	},
	isolation: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.category === "Special") mod /= 2;
			return this.chainModify(mod);
		},
		isBreakable: true,
		name: "Isolation",
		rating: 3,
		num: 6662,
		isNonstandard: "Future",
	},
	acidcloudburst: {
		onStart(source) {
			this.field.setWeather('acidrain');
		},
		name: "Acid Cloudburst",
		rating: 3,
		num: 6663,
		isNonstandard: "Future",
	},
	ethereal: {
		onTryHit(target, source, move) {
			if (target !== source && move.flags['contact']) {
				this.add('-immune', target, '[from] ability: Ethereal');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['contact']) {
				this.add('-immune', this.effectState.target, '[from] ability: Ethereal');
			}
		},
		name: "Ethereal",
		rating: 3,
		num: 6664,
		isNonstandard: "Future",
	},
	mozart: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Mozart boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (['Fighting', 'Bug', 'Grass', 'Paper', 'Sound', 'Cosmic', 'Steel', 'Fire', 'Ice', 'Rubber', 'Food',
			 'Paper', 'Flying', 'Electric', 'Wood', 'Tech', 'Nuclear', 'Water', 'Dragon', 'Plastic', 'Rock'].includes(move.type)) {
				this.debug('Mozart weaken');
				return this.chainModify(0.4);
			}
		},
		name: "Mozart",
		rating: 3,
		num: 6665,
		isNonstandard: "Future",
	},
	pride: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		name: "Pride",
		rating: 3,
		num: 6666,
		isNonstandard: "Future",
	},
	pounce: {
		onModifyPriority(priority, source, target, move) {
			if (source.activeMoveActions === 0) {
				return priority + 1;
			}
		},
		name: "Pounce",
		rating: 3,
		num: 6667,
		isNonstandard: "Future",
	},
	vespertine: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('midnight')) return this.chainModify(2);
			if (this.field.isWeather(['sunnyday', 'desolateland'])) return this.chainModify(0.5);
		},
		name: "Vespertine",
		rating: 3,
		num: 6668,
		isNonstandard: "Future",
	},
	acidrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('acidrain')) return this.chainModify(2);
		},
		name: "Acid Rush",
		rating: 4,
		num: 6669,
		isNonstandard: "Future",
	},
	headache: {
		onModifySpAPriority: -1,
		onModifySpA(spa, source, target, move) {
			if (target?.volatiles['confusion']) {
				this.debug('Headache - increasing spatk');
				return this.chainModify(2);
			}
		},
		name: "Headache",
		rating: 2,
		num: 6670,
		isNonstandard: "Future",
	},
	windate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Wind';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Windate",
		rating: 3,
		num: 6671,
		isNonstandard: "Future",
	},
	immolate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fire';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Immolate",
		rating: 4,
		num: 6672,
		isNonstandard: "Future",
	},
	sunbathe: {
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') this.heal(target.baseMaxhp / 14);
		},
		name: "Sunbathe",
		rating: 3,
		num: 6673,
		isNonstandard: "Future",
	},
	snowrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['hail', 'snow'])) return this.chainModify(2);
		},
		name: "Snow Rush",
		rating: 2,
		num: 6674,
		isNonstandard: "Future",
	},
	magicate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Magic';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Magicate",
		rating: 3,
		num: 6675,
		isNonstandard: "Future",
	},
	oasis: {
		onWeather(target, source, effect) {
			if (this.field.isWeather('sandstorm')) this.heal(target.baseMaxhp / 14);
		},
		name: "Oasis",
		rating: 3,
		num: 6676,
		isNonstandard: "Future",
	},
	winterforce: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Water' || move.type === 'Steam') {
				this.debug('Winter Force boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Winter Force",
		rating: 3,
		num: 6677,
		isNonstandard: "Future",
	},
	evaporate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Steam';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Evaporate",
		rating: 3,
		num: 6678,
		isNonstandard: "Future",
	},
	berserker: {
		onDamagingHit(damage, target, source, effect) {
			this.boost({atk: 1});
		},
		name: "Berserker",
		rating: 3,
		num: 6679,
		isNonstandard: "Future",
	},
	martialate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Fighting';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Martialate",
		rating: 3,
		num: 6680,
		isNonstandard: "Future",
	},
	machinate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Steel';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Machinate",
		rating: 3,
		num: 6681,
		isNonstandard: "Future",
	},
	furiousfeet: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['kick']) {
				this.debug('Furious Feet boost');
				return this.chainModify(1.4);
			}
		},
		name: "Furious Feet",
		rating: 3,
		num: 6682,
		isNonstandard: "Future",
	},
	thicktail: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['tail']) {
				this.debug('Thick Tail boost');
				return this.chainModify(1.5);
			}
		},
		name: "Thick Tail",
		rating: 3,
		num: 6683,
		isNonstandard: "Future",
	},
	skeptic: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fairy' || move.type === 'Divine' || move.type === 'Magic') {
				this.debug('Skeptic weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fairy' || move.type === 'Divine' || move.type === 'Magic') {
				this.debug('Skeptic weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Skeptic",
		rating: 3,
		num: 6684,
		isNonstandard: "Future",
	},
	coldblooded: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Cold Blooded');
				}
				return null;
			}
		},
		onSourceBasePowerPriority: 17,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Ice') return this.chainModify(1.25);
		},
		onWeather(target, source, effect) {
			if (effect.id === 'hail' || effect.id === 'snow') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.heal(target.baseMaxhp / 8);
			}
		},
		name: "Cold Blooded",
		rating: 3,
		num: 6685,
		isNonstandard: "Future",
	},
	lodestone: {
		onTryHit(target, source, move) {
			if (target !== source && (move.type === 'Steel' || move.type === 'Rock' || move.type === 'Ground')) {
				if (!this.boost({def: 1})) {
					this.add('-immune', target, '[from] ability: Lodestone');
				}
				return null;
			}
		},
		name: "Lodestone",
		rating: 3,
		num: 6686,
		isNonstandard: "Future",
	},
	vaporize: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spd: 1})) {
					this.add('-immune', target, '[from] ability: Vaporize');
				}
				return null;
			}
		},
		name: "Vaporize",
		rating: 3,
		num: 6687,
		isNonstandard: "Future",
	},
	firewall: {
		onStart(pokemon) {
			let totalatk = 0;
			let totalspa = 0;
			for (const target of pokemon.foes()) {
				totalatk += target.getStat('atk', false, true);
				totalspa += target.getStat('spa', false, true);
			}
			if (totalatk && totalatk >= totalspa) {
				this.boost({def: 1});
			} else if (totalspa) {
				this.boost({spd: 1});
			}
		},
		name: "Firewall",
		rating: 3,
		num: 6688,
		isNonstandard: "Future",
	},
	focus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Focus",
		rating: 3,
		num: 6689,
		isNonstandard: "Future",
	},
	shadowcall: {
		onStart(source) {
			this.field.setWeather('midnight');
		},
		name: "Shadow Call",
		rating: 3,
		num: 6690,
		isNonstandard: "Future",
	},
	wacky: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !move.isZ && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Wack';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		name: "Wacky",
		rating: 3,
		num: 6691,
		isNonstandard: "Future",
	},
	hydrate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Water';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Hydrate",
		rating: 3,
		num: 6692,
		isNonstandard: "Future",
	},
	sugarrush: {
		onTryHit(target, source, move) {
			if (target !== source && (move.type === 'Food' || move.type === 'Fairy')) {
				if (!this.boost({spe: 2})) {
					this.add('-immune', target, '[from] ability: Sugar Rush');
				}
				return null;
			}
		},
		name: "Sugar Rush",
		rating: 3,
		num: 6693,
		isNonstandard: "Future",
	},
	vacuum: {
		onTryHit(target, source, move) {
			if (target !== source && (move.type === 'Wind' || move.type === 'Flying')) {
				if (!this.boost({def: 1})) {
					this.add('-immune', target, '[from] ability: Vacuum');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if ((move.type !== 'Wind' && move.type !== 'Flying') || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Vacuum');
				}
				return this.effectState.target;
			}
		},
		name: "Vacuum",
		rating: 3,
		num: 6694,
		isNonstandard: "Future",
	},
	solarforce: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'Grass' || move.type === 'Light') {
				this.debug('Solar Force boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Solar Force",
		rating: 3,
		num: 6695,
		isNonstandard: "Future",
	},
	ionate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Electric';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		name: "Ionate",
		rating: 3,
		num: 6696,
		isNonstandard: "Future",
	},
	graze: {
		onResidualOrder: 4,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		name: "Graze",
		rating: 3,
		num: 6697,
		isNonstandard: "Future",
	},
	pro: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Pro boost');
				return this.chainModify(1.2);
			}
		},
		name: "Pro",
		rating: 3,
		num: 6698,
		isNonstandard: "Future",
	},
	builder: {
		/** Definied in corresponding screen/room moves */
		name: "Builder",
		rating: 3,
		num: 6699,
		isNonstandard: "Future",
	},
	siphon: {
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		name: "Siphon",
		rating: 3,
		num: 6700,
		isNonstandard: "Future",
	},
	bellows: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Wind') {
				move.accuracy = true;
				if (!target.addVolatile('bellows')) {
					this.add('-immune', target, '[from] ability: Bellows');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('bellows');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Bellows');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('bellows')) {
					this.debug('Bellows boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('bellows')) {
					this.debug('Bellows boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Bellows', '[silent]');
			},
		},
		isBreakable: true,
		name: "Bellows",
		rating: 3,
		num: 6701,
		isNonstandard: "Future",
	},
	sadist: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.heal(source.baseMaxhp / 16, source, source);
			}
		},
		name: "Sadist",
		rating: 3,
		num: 6702,
		isNonstandard: "Future",
	},
	metalworker: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Metalworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Metalworker boost');
				return this.chainModify(1.5);
			}
		},
		name: "Metalworker",
		rating: 3,
		num: 6703,
		isNonstandard: "Future",
	},
	drumroll: {
		onStart(pokemon) {
			pokemon.addVolatile('metronome');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome') || !pokemon.hasAbility('drumroll')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				let soundBoost = false;
				if (move.flags['sound']) {
					soundBoost = true;
				}
				const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				if (soundBoost) {
					this.debug(`Current Metronome boost: ${dmgMod[numConsecutive] * 1.2}/4096`);
					return this.chainModify([dmgMod[numConsecutive] * 1.2, 4096]);
				} else {
					this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
					return this.chainModify([dmgMod[numConsecutive], 4096]);
				}
			},
		},
		name: "Drum Roll",
		rating: 3,
		num: 6704,
		isNonstandard: "Future",
	},
	explosive: {
		onModifyDamage(damage, source, target, move) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(move.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		name: "Explosive",
		rating: 3,
		num: 6705,
		isNonstandard: "Future",
	},
	dreamcatcher: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Psychic') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Dreamcatcher');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Psychic' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Dreamcatcher');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Dreamcatcher",
		rating: 3,
		num: 6706,
		isNonstandard: "Future",
	},
	irradiated: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.status === 'psn' || target.status === 'tox') {
					this.damage(target.baseMaxhp / 16, target, pokemon);
				}
			}
		},
		name: "Irradiated",
		rating: 3,
		num: 6707,
		isNonstandard: "Future",
	},
	safeshield: {
		onSwitchIn(pokemon) {
			pokemon.side.addSideCondition('safeguard');
		},
		name: "Safe Shield",
		rating: 3,
		num: 6708,
		isNonstandard: "Future",
	},
	choicepower: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice Power");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Choice Power Atk Boost');
			return this.chainModify(1.5);
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Choice Power SpA Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Choice Power",
		rating: 3,
		num: 6709,
		isNonstandard: "Future",
	},
	cactus: {
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'sandstorm') {
				this.heal(target.baseMaxhp / 16);
			}
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		name: "Cactus",
		rating: 3,
		num: 6710,
		isNonstandard: "Future",
	},
	vastknowledge: {
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Vast Knowledge",
		rating: 5,
		num: 6711,
		isNonstandard: "Future",
	},
	neutral: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Neutral neutralize');
				return this.chainModify(0.75);
			}
		},
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Neutral boost');
				return this.chainModify(2);
			}
		},
		onAnyModifyDamage(damage, source, target, move) {
			if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
				this.debug('Neutral weaken');
				return this.chainModify(0.75);
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Neutral');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Neutral');
				}
				return this.effectState.target;
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus', 'neutral'])) {
					return this.chainModify(1.5);
				}
			}
		},
		isBreakable: true,
		name: "Neutral",
		rating: 3,
		num: 6712,
		isNonstandard: "Future",
	},
	rubberboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: 1, spa: 1, def: 1, spd: 1, spe: 1});
			}
		},
		name: "Rubber Boost",
		rating: 3,
		num: 6713,
		isNonstandard: "Future",
	},
	activecurrent: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.status === 'par') {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		name: "Active Current",
		rating: 3,
		num: 6714,
		isNonstandard: "Future",
	},
	triggered: {
		onDamagingHit(damage, target, source, move) {
			if (['Cyber', 'Virus', 'Dark'].includes(move.type)) {
				this.boost({spa: 1, spe: 1});
			}
		},
		name: "Triggered",
		rating: 3,
		num: 6715,
		isNonstandard: "Future",
	},
	glitchboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 1;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -2;

			this.boost(boost, pokemon, pokemon);
		},
		name: "Glitch Boost",
		rating: 3,
		num: 6716,
		isNonstandard: "Future",
	},
	thunderstorm: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Electric';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Thunderstorm');
				}
				return null;
			}
		},
		name: "Thunderstorm",
		rating: 3,
		num: 6717,
		isNonstandard: "Future",
	},
	flytrap: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Bug') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Flytrap');
				}
				return null;
			}
		},
		name: "Flytrap",
		rating: 3,
		num: 6718,
		isNonstandard: "Future",
	},
	wishmaker: {
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 6);
		},
		name: "Wish Maker",
		rating: 3,
		num: 6719,
		isNonstandard: "Future",
	},
	burningdisease: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Wind') {
				move.accuracy = true;
				if (!target.addVolatile('burningdisease')) {
					this.add('-immune', target, '[from] ability: Burning Disease');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('burningdisease');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Burning Disease');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('bellows')) {
					this.debug('Burning Disease boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('bellows')) {
					this.debug('Burning Disease boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Burning Disease', '[silent]');
			},
		},
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'psn',
				ability: this.dex.abilities.get('burningdisease'),
			});
		},
		name: "Burning Disease",
		rating: 3,
		num: 6720,
		isNonstandard: "Future",
	},
	computerbug: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost, pokemon, pokemon);
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('computerbug - enhancing accuracy');
			return this.chainModify([5325, 4096]);
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.type === 'Bug') return this.chainModify(1.3);
		},
		name: "Computer Bug",
		rating: 3,
		num: 6721,
		isNonstandard: "Future",
	},
	trashpile: {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move?.flags['contact'] || move.target === 'self') return;
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
					ability: this.dex.abilities.get('trashpile'),
				});
			}
		},
		onHit(target, source) {
			if (this.randomChance(3, 10)) {
				target.trySetStatus('psn', target);
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('psn', target);
				}
			}
		},
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			const canOoze = ['drain', 'leechseed', 'strengthsap'];
			if (canOoze.includes(effect.id)) {
				this.damage(damage);
				return 0;
			}
		},
		name: "Trash Pile",
		rating: 3,
		num: 6722,
		isNonstandard: "Future",
	},
	godsendurance: {
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Gods Endurance');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp > 1 && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Gods Endurance');
				return target.hp - 1;
			}
		},
		name: "Gods Endurance",
		rating: 3,
		num: 6723,
		isNonstandard: "Future",
	},
	souleater: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ghost') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Soul Eater');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Soul Eater",
		rating: 3,
		num: 6724,
		isNonstandard: "Future",
	},
	mrshield: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'MR-Shield');
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: MR-Shield');
			}
			return false;
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('MR-Shield neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "MR-Shield",
		rating: 3,
		num: 232,
		isNonstandard: "Future",
	},
	beyondultimate: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Beyond Ultimate neutralize');
				return this.chainModify(0.50);
			}
		},
		name: "Beyond Ultimate",
		rating: 3,
		num: 232,
	},
	infected: {
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'infected') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('infected', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Infected', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		onResidualOrder: 27,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.hasType("Zombie") || pokemon.hasType("Virus")) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		name: "Infected",
		rating: 3,
		num: 6725,
		isNonstandard: "Future",
	},
	nuclearization: {
		name: "Nuclearization",
		onAnyEffectiveness(typemod, target, type, move) {
			const nuclearizationUser = this.effectState.target;

			if (nuclearizationUser !== this.activePokemon) return;

			if (move.type === 'Normal' && ['Normal', 'Poison'].includes(type)) {
				return 1;
			}
		},
		rating: 3,
		isNonstandard: "Future",
	},
	speculate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = '???';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		name: "Speculate",
		rating: 4,
		num: 182,
		isNonstandard: "Future",
	},
	ancientfrenzy: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: -1});
			}
		},
		onSourceModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				return this.chainModify(2);
			}
		},
		onSourceModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				return this.chainModify(2);
			}
		},
		name: "Ancient Frenzy",
		rating: 4.5,
		num: 3,
		isNonstandard: "Future",
	},
	futuuuure: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({def: -1});
			}
		},
		onSourceModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				return this.chainModify(2);
			}
		},
		onSourceModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				return this.chainModify(2);
			}
		},
		name: "FUTUUUURE!",
		rating: 4.5,
		num: 3,
		isNonstandard: "Future",
	},
		you: {
		onStart(pokemon) {
			if (pokemon.syrupTriggered) return;
			pokemon.syrupTriggered = true;
			this.add('-ability', pokemon, 'You.');
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'You.', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({def: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "You.",
		rating: 3.5,
		num: 22,
		isNonstandard: "Future",
	},
	mossyexterior: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spd: 1})) {
					this.add('-immune', target, '[from] ability: Mossy Exterior');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Mossy Exterior');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Mossy Exterior",
		rating: 3,
		num: 114,
		isNonstandard: "Future",
	},
	izanamisrage: {
		onSourceDamagingHit(damage, target, source, move) {
		if (source.volatiles['torment']) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.randomChance(4, 10)) {
					source.addVolatile('torment', this.effectState.target);
				}
			}
		},
		name: "Izanami's Rage",
		rating: 4.5,
		num: 305,
	   isNonstandard: "Future",
	},
	surprise: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Jakubrik' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'enclose') return;
			const targetForme = (move.id === 'enclose' ? 'Jakubrik' : 'Jakubrik-Active');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Surprise!",
		rating: 4,
		num: 176,
		isNonstandard: "Future",
	},
	polite: {
		onFractionalPriority: -0.1,
		onModifyMove(move) {
			move.stab = 2;
		},
		name: "Polite",
		rating: 4,
		num: 6726,
		isNonstandard: "Future",
	},

	raservant: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('UV Burst'), pokemon);
		},
		name: "Ra Servant ",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	copyandpaste: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Knight of Owner'), pokemon);
		},
		name: "Copy and Paste ",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	babymonster: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Fughamut'), pokemon);
		},
		name: "Baby Monster",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	regate: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Endeavor'), pokemon);
		},
		name: "Regate",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	dezgraça: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Wish'), pokemon);
		},
		name: "10 Grace",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	firstyou: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Portal Gun'), pokemon);
		},
		name: "First You",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	saback: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Shed Tail'), pokemon);
		},
		name: "Saback",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	thelittleone: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Minimize'), pokemon);
		},
		name: "the little one",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},

	quicksacrifice: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Destiny Bond'), pokemon);
		},
		name: "Quick Sacrifice",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	abilityanulation: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Yiik Out'), pokemon);
		},
		name: "Ability Anulation",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	assistantbreakswall: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Meowsa'), pokemon);
		},
		name: "Assistant Breaks Wall",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	robberyatak: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Me First'), pokemon);
		},
		name: "Roberry Atak",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	hitswhere: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Too Slow'), pokemon);
		},
		name: "Hits Where",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	olapele: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Zippy Zap'), pokemon);
		},
		name: "Ola Pele",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	gooddaytodie: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Curse of yig'), pokemon);
		},
		name: "Good day to die",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	halflife: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Ruination'), pokemon);
		},
		name: "Half life",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},
	smashability: {
		onSwitchInPriority: 4,
		onSwitchIn(pokemon) {
			this.actions.useMove(Dex.moves.get('Antares Snipe'), pokemon);
		},
		name: "Smash Ability",
		rating: 3,
		num: 422,
		isNonstandard: "Future",
	},


};

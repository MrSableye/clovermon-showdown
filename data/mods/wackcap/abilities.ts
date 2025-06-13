export const Abilities: {[k: string]: ModdedAbilityData} = {
	toxicchain: {
		inherit: true,
		isNonstandard: null,
	},
	mindseye: {
		inherit: true,
		isNonstandard: null,
	},
	supersweetsyrup: {
		inherit: true,
		isNonstandard: null,
	},
	embodyaspectteal: {
		inherit: true,
		isNonstandard: null,
	},
	embodyaspecthearthflame: {
		inherit: true,
		isNonstandard: null,
	},
	embodyaspectwellspring: {
		inherit: true,
		isNonstandard: null,
	},
	embodyaspectcornerstone: {
		inherit: true,
		isNonstandard: null,
	},
	hospitality: {
		inherit: true,
		isNonstandard: null,
	},
	/* Modified vanilla abilities */
	toxicboost: {
		inherit: true,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather(['acidrain'])) {
				return this.chainModify(1.5);
			} else if (((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical')) {
				return this.chainModify(1.5);
			}
		},
		desc: "During Acid rain, the power of its attacks is multiplied by 1.5. If this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.",
		shortDesc: "1.5x Atk and SpA during Acid Rain, else 1.5x Atk if poisoned",
		isNonstandard: null,
	},
	raindish: {
		inherit: true,
		onWeather(target, source, effect) {
			if (effect.id === 'acidrain' && !target.hasType('Poison')) {
				this.damage(target.baseMaxhp / 16, target, target);
			}
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down. If Acid Rain is active and the Pokemon doesn't have the Poison type, it takes 1/16 of its maximum HP, rounded down, at the end of each turn. The Rain Dance effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "Rain Dance: heals 1/16, Acid Rain: takes 1/16.",
		isNonstandard: null,
	},
	poisonheal: {
		inherit: true,
		onWeather(target, source, effect) {
			if (effect.id === 'acidrain') this.heal(target.baseMaxhp / 14);
		},
		onImmunity(type, pokemon) {
			if (type === 'acidrain') return false;
		},
		desc: "This Pokemon heals 1/14 of its maximum HP in Acid Rain and 1/8 if it is poisoned or badly poisoned.",
		shortDesc: "Heals 1/14 in Acid Rain and 1/8 if psn/tox.",
		isNonstandard: null,
	},
	immunity: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'acidrain') return false;
		},
		shortDesc: "Can't be psn and cures it. Immune to Acid Rain.",
		isNonstandard: null,
	},
	overcoat: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'acidrain' || type === 'bladerain' || type === 'hyperboreanarctic' || type === 'powder') return false;
		},
		onTryHit() {},
		desc: "This Pokemon is immune to damage from Sandstorm, Hail, Acid Rain, Blade Rain and the Effect Spore Ability.",
		shortDesc: "Immune to Sandstorm, Hail, Acid Rain and Blade Rain damage.",
		isNonstandard: null,
	},
	chlorophyll: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('midnight')) {
				return this.chainModify(0.5);
			}
			if (pokemon.hasItem('utilityumbrella')) return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		desc: "If Sunny Day is active, this Pokemon's Speed is doubled, this effect is prevented if this Pokemon is holding a Utility Umbrella. If Midnight is active, this Pokemon's Speed is halved.",
		shortDesc: "Sunny Day: spd doubled. Midnight: spd halved.",
		isNonstandard: null,
	},
	heavymetal: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'bladerain') return false;
		},
		desc: "This Pokemon's weight is doubled. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone. It's immune to Blade Rain.",
		shortDesc: "Weight doubled. Immune to Blade Rain.",
		isNonstandard: null,
	},
	forecast: {
		inherit: true,
		onWeather(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (this.field.isWeather(['sunnyday', 'desolateland', 'raindance', 'primordialsea'])) return this.chainModify(2);
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (this.field.isWeather('sandstorm')) {
				if (typeof accuracy !== 'number') return;
				this.debug('Forecast - decreasing accuracy');
				return this.chainModify(0.8);
			}
		},
		desc: "If Hail is active, heal 1/16 of the Pokemon's HP. If Sunny Day or Rain Dance is active, boost speed by 2. If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. This effect is prevented if this Pokemon is holding a Utility Umbrella and the weather is Rain Dance or Sunny Day.",
		shortDesc: "Hail, Heals 1/16 max HP. Sun, Rain, Doubles speed. Sandstorm, Evasion x1.2. Transforms Castform.",
		isNonstandard: null,
	},
	pixilate: {
		inherit: true,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
	},
	refrigerate: {
		inherit: true,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
	},
	aerilate: {
		inherit: true,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([5325, 4096]);
		},
	},
	protean: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		onSwitchIn() {},
		rating: 4.5,
	},
	illuminate: {
		inherit: true,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify(1.1);
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Illuminate weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Illuminate weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		shortDesc: "x1.1 accuracy. Dark-type moves against this Pokemon deal damage with a halved offensive stat.",
		rating: 2.5,
	},
	magmaarmor: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'Magma') {
				this.debug('Magma Armor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'Magma') {
				this.debug('Magma Armor boost');
				return this.chainModify(1.5);
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				this.debug('Magma Armor weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				this.debug('Magma Armor weaken');
				return this.chainModify(0.5);
			}
		},
		shortDesc: "Immune to frz. Boosts Fire- and Magma-type moves. Ice-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	waterveil: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Veil boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Veil boost');
				return this.chainModify(1.5);
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Water Veil weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Water Veil weaken');
				return this.chainModify(0.5);
			}
		},
		shortDesc: "Immune to brn. Boosts Water-type moves. Fire-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	keeneye: {
		inherit: true,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify(1.05);
			}
		},
		onModifyMove() {},
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon's accuracy is boosted by x1.05",
		shortDesc: "This Pokemon's accuracy is boosted by x1.05 and can't be lowered by others.",
	},
	hypercutter: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sword']) {
				this.debug('Hyper Cutter boost');
				return this.chainModify(1.2);
			}
		},
		shortDesc: "Prevents this Pokemon's Attack stat drop. Boosts sword-based attacks.",
	},
	hustle: {
		inherit: true,
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.modify(spa, 1.5);
		},
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.category !== 'Status' && typeof accuracy === 'number') {
				return this.chainModify([3277, 4096]);
			}
		},
		desc: "This Pokemon's Attack and Special Attack stats is multiplied by 1.5 and the accuracy of its attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Atk and SpA is 1.5x and accuracy of its attacks is 0.8x.",
	},
	heatproof: {
		inherit: true,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire' || move.type === 'Magma') {
				return this.chainModify(0.5);
			}
		},
		desc: "The power of Fire and Magma-type attacks against this Pokemon is halved. This Pokemon takes half of the usual burn damage, rounded down.",
		shortDesc: "The power of Fire and Magma-type attacks against this Pokemon is halved; burn damage halved.",
	},
	scrappy: {
		inherit: true,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity = true;
			}
		},
		onTryBoost(boost, target, source, effect) {},
		desc: "This Pokemon can hit all types.",
		shortDesc: "Damaging moves ignore immunities.",
	},
	bigpecks: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['beak']) {
				this.debug('Big Pecks boost');
				return this.chainModify(1.5);
			}
		},
		shortDesc: "Prevents Defense stat drop. Boosts beak-like attacks.",
	},
	damp: {
		inherit: true,
		onAnyDamage(damage, target, source, effect) {
			if (effect && (effect.name === 'Aftermath' || effect.name === 'C4')) {
				return false;
			}
		},
		desc: "While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, the Aftermath Ability and the C4 item are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath/C4 while active.",
	},
	gluttony: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Food') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Gluttony');
				}
				return null;
			}
		},
		isBreakable: true,
		desc: "This Pokemon is immune to Food-type and heals 1/4 max HP when hit by a Food-type move. When this Pokemon is holding a Berry that usually activates with 1/4 or less of its maximum HP, it is eaten at 1/2 or less of its maximum HP instead.",
		shortDesc: "Immune and heals 1/4 max HP to Food-type moves. Eats Berries at 1/2 max HP or less instead of their usual 1/4 max HP.",
	},
	oblivious: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'captivate') {
				this.add('-immune', pokemon, '[from] Oblivious');
				return null;
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Heart') {
				this.debug('Oblivious weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Heart') {
				this.debug('Oblivious weaken');
				return this.chainModify(0.5);
			}
		},
		onTryBoost() {},
		desc: "If a Pokemon uses a Heart-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. It cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it.",
		shortDesc: "Heart-type moves deals halved damage. This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
	},
	overgrow: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/2 or less of its max HP, this Pokemon's offensive stat is 1.5x with Grass attacks.",
	},
	blaze: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/2 or less of its max HP, this Pokemon's offensive stat is 1.5x with Fire attacks.",
	},
	torrent: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/2 or less of its max HP, this Pokemon's offensive stat is 1.5x with Water attacks.",
	},
	swarm: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 2) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		desc: "When this Pokemon has 1/2 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/2 or less of its max HP, this Pokemon's offensive stat is 1.5x with Bug attacks.",
	},
	solarpower: {
		inherit: true,
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 14, target, target);
			}
		},
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/14 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/14 max HP per turn.",
	},
	quickfeet: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(2);
			}
		},
		desc: "If this Pokemon has a non-volatile status condition, its Speed is multiplied by 2. This Pokemon ignores the paralysis effect of halving Speed.",
		shortDesc: "If this Pokemon is statused, its Speed is doubled; ignores Speed drop from paralysis.",
	},
	slowstart: {
		inherit: true,
		condition: {
			duration: 3,
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
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 3 turns.",
	},
	weakarmor: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 1}, target, target);
			}
		},
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 1 stage.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 1.",
	},
	wonderskin: {
		inherit: true,
		onModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof accuracy === 'number') {
				this.debug('Wonder Skin - decreasing accuracy');
				return this.chainModify(0.5);
			}
		},
		desc: "Non-damaging moves that check accuracy have their accuracy changed to 50% of it when used against this Pokemon. This effect comes before other effects that modify accuracy.",
		shortDesc: "Status moves with accuracy checks are halved when used on this Pokemon.",
	},
	justified: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (['Dark', 'Chaos'].includes(move.type)) {
				this.boost({atk: 1});
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Chaos') {
				this.debug('Justified weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Chaos') {
				this.debug('Justified weaken');
				return this.chainModify(0.5);
			}
		},
		shortDesc: "Halves Chaos damage. +1 Atk stage after it is damaged by a Dark- or Chaos-type move.",
	},
	rattled: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (['Dark', 'Bug', 'Ghost', 'Fear'].includes(move.type)) {
				this.boost({spe: 1});
			}
		},
		onAfterBoost() {},
		desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, Fear- or Ghost-type attack.",
		shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, Fear- or Ghost-type attack.",
	},
	galewings: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
		shortDesc: "This Pokemon Flying-type moves have their priority increased by 1.",
	},
	parentalbond: {
		inherit: true,
		// Damage changes made in sim/battle-actions.ts
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['dynamaxcannon', 'endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.isZ && !move.isMax) {
				move.multihit = 2;
				move.multihitType = 'parentalbond';
			}
		},
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. Does not affect multi-hit moves.",
		shortDesc: "This Pokemon's damaging moves hit twice.",
	},
	zenmode: {
		inherit: true,
		onResidual(pokemon) {
			if (!["Standard", "School"].includes(pokemon.baseSpecies.baseForme) || pokemon.transformed) return;
			if (pokemon.baseSpecies.baseSpecies === "Sarieangel" &&
			pokemon.hp <= pokemon.maxhp / 3 && !['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp <= pokemon.maxhp / 2 && !['Zen', 'Galar-Zen', 'Solo'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.baseSpecies.baseSpecies === "Sarieangel" && pokemon.hp > pokemon.maxhp / 3 &&
			['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of Sarieangel Zen form
				pokemon.removeVolatile('zenmode');
			} else if (pokemon.hp > pokemon.maxhp / 2 && ['Zen', 'Galar-Zen', 'Solo'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of Zen forms mons
				pokemon.removeVolatile('zenmode');
			}
		},
		onEnd(pokemon) {
			if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['zenmode'];
			if (pokemon.species.battleOnly) {
				pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
			}
		},
		condition: {
			onStart(pokemon) {
				if (pokemon.species.id.includes('eiscue')) pokemon.formeChange(pokemon.species.name + '-Noice');
				if (pokemon.species.id === "wishiwashi") pokemon.formeChange(pokemon.species.name + '-Solo');
				if (!pokemon.species.name.includes('Galar')) {
					if (pokemon.species.forme !== 'Zen') {
						pokemon.formeChange(pokemon.species.name + '-Zen');
					}
				} else {
					if (pokemon.species.id !== 'darmanitangalarzen') pokemon.formeChange('Darmanitan-Galar-Zen');
				}
			},
			onEnd(pokemon) {
				if (['Zen', 'Galar-Zen', 'Noice', 'Solo'].includes(pokemon.species.forme)) {
					pokemon.formeChange(pokemon.species.battleOnly as string);
				}
			},
		},
		desc: "If this Pokemon originally has this ability, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn, 1/3 for Sarieangel. If the pokemon's HP is above 1/2 of its maximum HP at the end of a turn or 1/3 for Sarieangel, it changes back to Standard Mode.",
		shortDesc: "At end of turn, changes Mode to Standard if at 1/2 max HP, else Zen.",
	},
	snowwarning: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('hail');
		},
		shortDesc: "On switch-in, this Pokemon summons Hail.",
	},
	// Gen5 vanilla abilities
	anticipation: {
		inherit: true,
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					if (move.category !== 'Status' && (
						this.dex.getImmunity(move.type, pokemon) && this.dex.getEffectiveness(move.type, pokemon) > 0 ||
						move.ohko
					)) {
						this.add('-ability', pokemon, 'Anticipation');
						return;
					}
				}
			}
		},
	},
	frisk: {
		inherit: true,
		onStart(pokemon) {
			const target = pokemon.side.randomFoe();
			if (target?.item) {
				this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon);
			}
		},
	},
	sapsipper: {
		inherit: true,
		onAllyTryHitSide() {},
	},
	serenegrace: {
		inherit: true,
		onModifyMove(move) {
			if (move.secondaries && move.id !== 'secretpower') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
		},
	},
	soundproof: {
		inherit: true,
		onAllyTryHitSide() {},
	},
	/* Wack abilities */
	darklife: {
		inherit: true,
		isNonstandard: null,
	},
	memetic: {
		inherit: true,
		isNonstandard: null,
	},
	isolation: {
		inherit: true,
		isNonstandard: null,
	},
	acidcloudburst: {
		inherit: true,
		isNonstandard: null,
	},
	ethereal: {
		inherit: true,
		isNonstandard: null,
	},
	mozart: {
		inherit: true,
		isNonstandard: null,
	},
	pride: {
		inherit: true,
		isNonstandard: null,
	},
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	vespertine: {
		inherit: true,
		isNonstandard: null,
	},
	acidrush: {
		inherit: true,
		isNonstandard: null,
	},
	headache: {
		inherit: true,
		isNonstandard: null,
	},
	windate: {
		inherit: true,
		isNonstandard: null,
	},
	immolate: {
		inherit: true,
		isNonstandard: null,
	},
	sunbathe: {
		inherit: true,
		isNonstandard: null,
	},
	snowrush: {
		inherit: true,
		isNonstandard: null,
	},
	magicate: {
		inherit: true,
		isNonstandard: null,
	},
	oasis: {
		inherit: true,
		isNonstandard: null,
	},
	winterforce: {
		inherit: true,
		isNonstandard: null,
	},
	evaporate: {
		inherit: true,
		isNonstandard: null,
	},
	berserker: {
		inherit: true,
		isNonstandard: null,
	},
	martialate: {
		inherit: true,
		isNonstandard: null,
	},
	machinate: {
		inherit: true,
		isNonstandard: null,
	},
	furiousfeet: {
		inherit: true,
		isNonstandard: null,
	},
	thicktail: {
		inherit: true,
		isNonstandard: null,
	},
	skeptic: {
		inherit: true,
		isNonstandard: null,
	},
	coldblooded: {
		inherit: true,
		isNonstandard: null,
	},
	lodestone: {
		inherit: true,
		isNonstandard: null,
	},
	vaporize: {
		inherit: true,
		isNonstandard: null,
	},
	firewall: {
		inherit: true,
		isNonstandard: null,
	},
	focus: {
		inherit: true,
		isNonstandard: null,
	},
	shadowcall: {
		inherit: true,
		isNonstandard: null,
	},
	wacky: {
		inherit: true,
		isNonstandard: null,
	},
	hydrate: {
		inherit: true,
		isNonstandard: null,
	},
	sugarrush: {
		inherit: true,
		isNonstandard: null,
	},
	vacuum: {
		inherit: true,
		isNonstandard: null,
	},
	solarforce: {
		inherit: true,
		isNonstandard: null,
	},
	ionate: {
		inherit: true,
		isNonstandard: null,
	},
	graze: {
		inherit: true,
		isNonstandard: null,
	},
	pro: {
		inherit: true,
		isNonstandard: null,
	},
	builder: {
		inherit: true,
		isNonstandard: null,
	},
	siphon: {
		inherit: true,
		isNonstandard: null,
	},
	bellows: {
		inherit: true,
		isNonstandard: null,
	},
	sadist: {
		inherit: true,
		isNonstandard: null,
	},
	metalworker: {
		inherit: true,
		isNonstandard: null,
	},
	drumroll: {
		inherit: true,
		isNonstandard: null,
	},
	explosive: {
		inherit: true,
		isNonstandard: null,
	},
	dreamcatcher: {
		inherit: true,
		isNonstandard: null,
	},
	irradiated: {
		inherit: true,
		isNonstandard: null,
	},
	safeshield: {
		inherit: true,
		isNonstandard: null,
	},
	choicepower: {
		inherit: true,
		isNonstandard: null,
	},
	cactus: {
		inherit: true,
		isNonstandard: null,
	},
	vastknowledge: {
		inherit: true,
		isNonstandard: null,
	},
	neutral: {
		inherit: true,
		isNonstandard: null,
	},
	rubberboost: {
		inherit: true,
		isNonstandard: null,
	},
	activecurrent: {
		inherit: true,
		isNonstandard: null,
	},
	triggered: {
		inherit: true,
		isNonstandard: null,
	},
	glitchboost: {
		inherit: true,
		isNonstandard: null,
	},
	thunderstorm: {
		inherit: true,
		isNonstandard: null,
	},
	flytrap: {
		inherit: true,
		isNonstandard: null,
	},
	wishmaker: {
		inherit: true,
		isNonstandard: null,
	},
	burningdisease: {
		inherit: true,
		isNonstandard: null,
	},
	computerbug: {
		inherit: true,
		isNonstandard: null,
	},
	trashpile: {
		inherit: true,
		isNonstandard: null,
	},
	godsendurance: {
		inherit: true,
		isNonstandard: null,
	},
	souleater: {
		inherit: true,
		isNonstandard: null,
	},
	polite: {
		inherit: true,
		isNonstandard: null,
	},
	/** Wack abilities that have their name taken by Clover */
	turbine: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Wind') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Turbine');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Wind' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Turbine');
				}
				return this.effectState.target;
			}
		},
		name: "Turbine",
		shortDesc: "Draws in all Wind-type moves to up Sp. Attack.",
		desc: "Draws in all Wind-type moves to up Sp. Attack.",
		isBreakable: true,
		isNonstandard: null,
	},
	constrictor: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.volatileStatus === 'partiallytrapped') {
				this.debug('Constrictor boost');
				return this.chainModify(1.3);
			}
		},
		name: "Constrictor",
		shortDesc: "Boosts the power of trapping moves.",
		desc: "Boosts the power of trapping moves.",
		isBreakable: false,
		isNonstandard: null,
	},
	breakdown: {/** Same as in data/abilities.ts */
		inherit: true,
		isNonstandard: null,
	},
	cacophony: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Cacophony boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(target, source, move) {},
		onAllyTryHitSide(target, source, move) {},
		name: "Cacophony",
		shortDesc: "Boosts the power of sound based moves.",
		desc: "Boosts the power of sound based moves.",
		isBreakable: false,
		isNonstandard: null,
	},
	balance: {/** Same as in data/abilities.ts */
		inherit: true,
		shortDesc: "NVE moves are boosted, SE moves against the Pokemon are weakened.",
		desc: "This pokemon's not very effective moves are boosted and super effective moves against it are decreased.",
		isNonstandard: null,
	},
	detonator: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct) delete move.selfdestruct;
		},
		onAfterMove(source, target, move) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(move.id)) {
				this.damage(source.baseMaxhp / 5, source, source);
			}
		},
		onBasePowerPriority: undefined,
		onBasePower(basePower, attacker, defender, move) {},
		name: "Detonator",
		shortDesc: "Explosion don't kill, 1/5 max HP recoil.",
		desc: "Explosion moves do not kill the user, just recoil.",
		isNonstandard: null,
	},
	infected: {
		inherit: true,
		shortDesc: "Dealing contact damage to this Pokemon spreads this Ability. Deals 1/8 dmg to non-Zombie and Virus types, otherwise heals 1/16 max hp.",
		desc: "Contact damage to this Pokemon spreads this Ability. Dmgs 1/8 non-Zombie and Virus types. Heals 1/16 otherwise.",
		isNonstandard: null,
	},
};

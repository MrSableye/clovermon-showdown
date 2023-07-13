/*

List of flags and their descriptions:

bypasssub: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
allyanim: Animates when used against allies
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
slicing: Power is multiplied by 1.5 when used by a Pokemon with the Ability Sharpness.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.
wind: Activates the Wind Power and Wind Rider Abilities.

*/

import {Pokemon} from "../sim";

export const Moves: {[moveid: string]: MoveData} = {
	"10000000voltthunderbolt": {
		num: 719,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "10,000,000 Volt Thunderbolt",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "pikashuniumz",
		critRatio: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	absorb: {
		num: 71,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Absorb",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	accelerock: {
		num: 709,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Accelerock",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	acid: {
		num: 51,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Poison",
		contestType: "Clever",
	},
	acidarmor: {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	aciddownpour: {
		num: 628,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Acid Downpour",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "poisoniumz",
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
	},
	acidspray: {
		num: 491,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Acid Spray",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	acrobatics: {
		num: 512,
		accuracy: 100,
		basePower: 55,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("BP doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Acrobatics",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	acupressure: {
		num: 367,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acupressure",
		pp: 30,
		priority: 0,
		flags: {},
		onHit(target) {
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 2;
				this.boost(boost);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Tough",
	},
	aerialace: {
		num: 332,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Aerial Ace",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, slicing: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	aeroblast: {
		num: 177,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Aeroblast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	afteryou: {
		num: 495,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "After You",
		pp: 15,
		priority: 0,
		flags: {bypasssub: 1, allyanim: 1},
		onHit(target) {
			if (target.side.active.length < 2) return false; // fails in singles
			const action = this.queue.willMove(target);
			if (action) {
				this.queue.prioritizeAction(action);
				this.add('-activate', target, 'move: After You');
			} else {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	agility: {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	aircutter: {
		num: 314,
		accuracy: 95,
		basePower: 60,
		category: "Special",
		name: "Air Cutter",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1, wind: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
	},
	airslash: {
		num: 403,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		name: "Air Slash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, slicing: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	alloutpummeling: {
		num: 624,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "All-Out Pummeling",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fightiniumz",
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	allyswitch: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ally Switch",
		pp: 15,
		priority: 2,
		flags: {},
		stallingMove: true,
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onTryHit(source) {
			if (source.side.active.length === 1) return false;
			if (source.side.active.length === 3 && source.position === 1) return false;
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
			const newPosition = (pokemon.position === 0 ? pokemon.side.active.length - 1 : 0);
			if (!pokemon.side.active[newPosition]) return false;
			if (pokemon.side.active[newPosition].fainted) return false;
			this.swapPosition(pokemon, newPosition, '[from] move: Ally Switch');
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	amnesia: {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spd: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	anchorshot: {
		num: 677,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Past",
		name: "Anchor Shot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	ancientpower: {
		num: 246,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ancient Power",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
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
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	appleacid: {
		num: 787,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Apple Acid",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	aquacutter: {
		num: 895,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Aqua Cutter",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	aquajet: {
		num: 453,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Aqua Jet",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	aquaring: {
		num: 392,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'aquaring',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
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
	},
	aquastep: {
		num: 872,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Aqua Step",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	aquatail: {
		num: 401,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Aqua Tail",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	armorcannon: {
		num: 890,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Armor Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	armthrust: {
		num: 292,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Arm Thrust",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	aromatherapy: {
		num: 312,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Aromatherapy",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, distance: 1},
		onHit(target, source, move) {
			this.add('-activate', source, 'move: Aromatherapy');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ((ally.hasAbility('sapsipper')) ||
						(ally.volatiles['substitute'] && !move.infiltrates))) {
					continue;
				}
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Grass",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	aromaticmist: {
		num: 597,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatic Mist",
		pp: 20,
		priority: 0,
		flags: {bypasssub: 1},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Fairy",
		zMove: {boost: {spd: 2}},
		contestType: "Beautiful",
	},
	assist: {
		num: 274,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Assist",
		pp: 20,
		priority: 0,
		flags: {},
		onHit(target) {
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'blazingtorque', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'combattorque', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'magicaltorque', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'noxioustorque', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wickedtorque',
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
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	assurance: {
		num: 372,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.hurtThisTurn) {
				this.debug('BP doubled on damaged target');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Assurance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	astonish: {
		num: 310,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Astonish",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
	},
	astralbarrage: {
		num: 825,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Astral Barrage",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ghost",
	},
	attackorder: {
		num: 454,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Attack Order",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	attract: {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Attract",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'attract',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				const isMale = (query: Pokemon) => query.gender === 'M';
				const isFemale = (query: Pokemon) => query.gender === 'F' || query.getAbility().id === 'boardpowerjp';
				const hasGender = (query: Pokemon) => isMale(query) || isFemale(query);
				if (!(source?.abilityState?.irresistable && hasGender(pokemon)) &&
					!(isMale(pokemon) && isFemale(source)) && !(isFemale(pokemon) && isMale(source))) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.name === 'Cute Charm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.name === 'Destiny Knot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
		onTryImmunity(target, source) {
			return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	aurasphere: {
		num: 396,
		accuracy: true,
		basePower: 80,
		category: "Special",
		name: "Aura Sphere",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Beautiful",
	},
	aurawheel: {
		num: 783,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		isNonstandard: "Past",
		name: "Aura Wheel",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		onTry(source) {
			if (source.species.baseSpecies === 'Morpeko') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Aura Wheel');
			this.hint("Only a Pokemon whose form is Morpeko or Morpeko-Hangry can use this move.");
			return null;
		},
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Morpeko-Hangry') {
				move.type = 'Dark';
			} else {
				move.type = 'Electric';
			}
		},
		target: "normal",
		type: "Electric",
	},
	aurorabeam: {
		num: 62,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Aurora Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	auroraveil: {
		num: 694,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aurora Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'auroraveil',
		onTry() {
			return this.field.isWeather(['hail', 'snow']);
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target)) {
					if ((target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') ||
							(target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special')) {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Aurora Veil weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Aurora Veil');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 10,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Aurora Veil');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	autotomize: {
		num: 475,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Autotomize",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onTryHit(pokemon) {
			const hasContrary = pokemon.hasAbility('contrary');
			if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
				return false;
			}
		},
		boosts: {
			spe: 2,
		},
		onHit(pokemon) {
			if (pokemon.weighthg > 1) {
				pokemon.weighthg = Math.max(1, pokemon.weighthg - 1000);
				this.add('-start', pokemon, 'Autotomize');
			}
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	avalanche: {
		num: 419,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('BP doubled for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Avalanche",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	axekick: {
		num: 853,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Axe Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fighting",
	},
	babydolleyes: {
		num: 608,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Baby-Doll Eyes",
		pp: 30,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	baddybad: {
		num: 737,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Baddy Bad",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		self: {
			sideCondition: 'reflect',
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	banefulbunker: {
		num: 661,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baneful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'banefulbunker',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
					source.trySetStatus('psn', target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('psn', target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	barbbarrage: {
		num: 839,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Barb Barrage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'psn' || target.status === 'tox') {
				return this.chainModify(2);
			}
		},
		secondary: {
			chance: 50,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	barrage: {
		num: 140,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	barrier: {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Barrier",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	batonpass: {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baton Pass",
		pp: 40,
		priority: 0,
		flags: {},
		onHit(target) {
			if (!this.canSwitch(target.side)) {
				this.attrLastMove('[still]');
				this.add('-fail', target);
				return this.NOT_FAIL;
			}
		},
		self: {
			onHit(source) {
				source.skipBeforeSwitchOutEventFlag = true;
			},
		},
		selfSwitch: 'copyvolatile',
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	beakblast: {
		num: 690,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Beak Blast",
		pp: 15,
		priority: -3,
		flags: {bullet: 1, protect: 1},
		priorityChargeCallback(pokemon) {
			pokemon.addVolatile('beakblast');
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Beak Blast');
			},
			onHit(target, source, move) {
				if (this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('brn', target);
				}
			},
		},
		// FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('beakblast')},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('beakblast');
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
	},
	beatup: {
		num: 251,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			const currentSpecies = move.allies!.shift()!.species;
			const bp = 5 + Math.floor(currentSpecies.baseStats.atk / 10);
			this.debug('BP for ' + currentSpecies.name + ' hit: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onModifyMove(move, pokemon) {
			move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	behemothbash: {
		num: 782,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Bash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	behemothblade: {
		num: 781,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Blade",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	belch: {
		num: 562,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Belch",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onDisableMove(pokemon) {
			if (!pokemon.ateBerry) pokemon.disableMove('belch');
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	bellydrum: {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({atk: 12}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	bestow: {
		num: 516,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Bestow",
		pp: 15,
		priority: 0,
		flags: {mirror: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source, move) {
			if (target.item) {
				return false;
			}
			const myItem = source.takeItem();
			if (!myItem) return false;
			if (!this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem) || !target.setItem(myItem)) {
				source.item = myItem.id;
				return false;
			}
			this.add('-item', target, myItem.name, '[from] move: Bestow', '[of] ' + source);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Cute",
	},
	bide: {
		num: 117,
		accuracy: true,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bide",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1},
		volatileStatus: 'bide',
		ignoreImmunity: true,
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['bide']) return true;
		},
		condition: {
			duration: 3,
			onLockMove: 'bide',
			onStart(pokemon) {
				this.effectState.totalDamage = 0;
				this.add('-start', pokemon, 'move: Bide');
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, move) {
				if (!move || move.effectType !== 'Move' || !source) return;
				this.effectState.totalDamage += damage;
				this.effectState.lastDamageSource = source;
			},
			onBeforeMove(pokemon, target, move) {
				if (this.effectState.duration === 1) {
					this.add('-end', pokemon, 'move: Bide');
					target = this.effectState.lastDamageSource;
					if (!target || !this.effectState.totalDamage) {
						this.attrLastMove('[still]');
						this.add('-fail', pokemon);
						return false;
					}
					if (!target.isActive) {
						const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
						if (!possibleTarget) {
							this.add('-miss', pokemon);
							return false;
						}
						target = possibleTarget;
					}
					const moveData: Partial<ActiveMove> = {
						id: 'bide' as ID,
						name: "Bide",
						accuracy: true,
						damage: this.effectState.totalDamage * 2,
						category: "Physical",
						priority: 1,
						flags: {contact: 1, protect: 1},
						effectType: 'Move',
						type: 'Normal',
					};
					this.actions.tryMoveHit(target, pokemon, moveData as ActiveMove);
					pokemon.removeVolatile('bide');
					return false;
				}
				this.add('-activate', pokemon, 'move: Bide');
			},
			onMoveAborted(pokemon) {
				pokemon.removeVolatile('bide');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Bide', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Tough",
	},
	bind: {
		num: 20,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Bind",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	bite: {
		num: 44,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bite",
		pp: 25,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	bitterblade: {
		num: 891,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Bitter Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	bittermalice: {
		num: 841,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Bitter Malice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Ghost",
	},
	blackholeeclipse: {
		num: 654,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Black Hole Eclipse",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "darkiniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	blastburn: {
		num: 307,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Blast Burn",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	blazekick: {
		num: 299,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	blazingtorque: {
		num: 896,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Blazing Torque",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	bleakwindstorm: {
		num: 846,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Bleakwind Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 30,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Flying",
	},
	blizzard: {
		num: 59,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Blizzard",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snow'])) move.accuracy = true;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	block: {
		num: 335,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Block",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	bloomdoom: {
		num: 644,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bloom Doom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "grassiumz",
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	blueflare: {
		num: 551,
		accuracy: 85,
		basePower: 130,
		category: "Special",
		isNonstandard: "Past",
		name: "Blue Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	bodypress: {
		num: 776,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Body Press",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		overrideOffensiveStat: 'def',
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	bodyslam: {
		num: 34,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Body Slam",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	boltbeak: {
		num: 754,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Bolt Beak damage boost');
				return move.basePower * 2;
			}
			this.debug('Bolt Beak NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Bolt Beak",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	boltstrike: {
		num: 550,
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bolt Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	boneclub: {
		num: 125,
		accuracy: 85,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bone Club",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	bonemerang: {
		num: 155,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Past",
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	bonerush: {
		num: 198,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Bone Rush",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	boomburst: {
		num: 586,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Boomburst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Tough",
	},
	bounce: {
		num: 340,
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
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
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	bouncybubble: {
		num: 733,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Bouncy Bubble",
		pp: 20,
		priority: 0,
		flags: {protect: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	branchpoke: {
		num: 785,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Branch Poke",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	bravebird: {
		num: 413,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Brave Bird",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		recoil: [33, 100],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	breakingswipe: {
		num: 784,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Breaking Swipe",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	breakneckblitz: {
		num: 622,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Breakneck Blitz",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "normaliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	brickbreak: {
		num: 280,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	brine: {
		num: 362,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Brine",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	brutalswing: {
		num: 693,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Brutal Swing",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Dark",
		contestType: "Tough",
	},
	bubble: {
		num: 145,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Bubble",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cute",
	},
	bubblebeam: {
		num: 61,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Bubble Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	bugbite: {
		num: 450,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bug Bite",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, source) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	bugbuzz: {
		num: 405,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Bug Buzz",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	bulkup: {
		num: 339,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulk Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	bulldoze: {
		num: 523,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Bulldoze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
	},
	bulletpunch: {
		num: 418,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Bullet Punch",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	bulletseed: {
		num: 331,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Bullet Seed",
		pp: 30,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	burningjealousy: {
		num: 807,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Burning Jealousy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (target?.statsRaisedThisTurn) {
					target.trySetStatus('brn', source, move);
				}
			},
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	burnup: {
		num: 682,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Burn Up",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Fire')) return;
			this.add('-fail', pokemon, 'move: Burn Up');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Fire" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Burn Up');
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	buzzybuzz: {
		num: 734,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Buzzy Buzz",
		pp: 20,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	calmmind: {
		num: 347,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calm Mind",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	camouflage: {
		num: 293,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Camouflage",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			let newType = 'Normal';
			if (this.field.isTerrain('electricterrain')) {
				newType = 'Electric';
			} else if (this.field.isTerrain('grassyterrain')) {
				newType = 'Grass';
			} else if (this.field.isTerrain('mistyterrain')) {
				newType = 'Fairy';
			} else if (this.field.isTerrain('psychicterrain')) {
				newType = 'Psychic';
			}

			if (target.getTypes().join() === newType || !target.setType(newType)) return false;
			this.add('-start', target, 'typechange', newType);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	captivate: {
		num: 445,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Captivate",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryImmunity(pokemon, source) {
			return (pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M');
		},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {spd: 2}},
		contestType: "Cute",
	},
	catastropika: {
		num: 658,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Catastropika",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "pikaniumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	ceaselessedge: {
		num: 845,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Ceaseless Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('spikes');
				}
			},
		},
		secondary: {}, // allows sheer force to trigger
		target: "normal",
		type: "Dark",
	},
	celebrate: {
		num: 606,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Celebrate",
		pp: 40,
		priority: 0,
		flags: {},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Celebrate');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	charge: {
		num: 268,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Charge",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'charge',
		condition: {
			onStart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onRestart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Charge', '[silent]');
			},
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	chargebeam: {
		num: 451,
		accuracy: 90,
		basePower: 50,
		category: "Special",
		name: "Charge Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 70,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	charm: {
		num: 204,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Charm",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	chatter: {
		num: 448,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Chatter",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, distance: 1, bypasssub: 1},
		noSketch: true,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	chillingwater: {
		num: 886,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Chilling Water",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	chillyreception: {
		num: 881,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Chilly Reception",
		pp: 10,
		priority: 0,
		flags: {},
		// TODO show prepare message before the "POKEMON used MOVE!" message
		// This happens even before sleep shows its "POKEMON is fast asleep." message
		weather: 'snow',
		selfSwitch: true,
		secondary: null,
		target: "all",
		type: "Ice",
	},
	chipaway: {
		num: 498,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Chip Away",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	chloroblast: {
		num: 835,
		accuracy: 95,
		basePower: 150,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Chloroblast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Chloroblast'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	circlethrow: {
		num: 509,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Circle Throw",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	clamp: {
		num: 128,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		isNonstandard: "Past",
		name: "Clamp",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	clangingscales: {
		num: 691,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		isNonstandard: "Past",
		name: "Clanging Scales",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		selfBoost: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Tough",
	},
	clangoroussoul: {
		num: 775,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Clangorous Soul",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, sound: 1, dance: 1},
		onTry(source) {
			if (source.hp <= (source.maxhp * 33 / 100) || source.maxhp === 1) return false;
		},
		onTryHit(pokemon, target, move) {
			if (!this.boost(move.boosts as SparseBoostsTable)) return null;
			delete move.boosts;
		},
		onHit(pokemon) {
			this.directDamage(pokemon.maxhp * 33 / 100);
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Dragon",
	},
	clangoroussoulblaze: {
		num: 728,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Clangorous Soulblaze",
		pp: 1,
		priority: 0,
		flags: {sound: 1, bypasssub: 1},
		selfBoost: {
			boosts: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1,
			},
		},
		isZ: "kommoniumz",
		secondary: {
			// Sheer Force negates the selfBoost even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	clearsmog: {
		num: 499,
		accuracy: true,
		basePower: 50,
		category: "Special",
		name: "Clear Smog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	closecombat: {
		num: 370,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Close Combat",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	coaching: {
		num: 811,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coaching",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1, allyanim: 1},
		secondary: null,
		boosts: {
			atk: 1,
			def: 1,
		},
		target: "adjacentAlly",
		type: "Fighting",
	},
	coil: {
		num: 489,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	collisioncourse: {
		num: 878,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Collision Course",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			if (target.runEffectiveness(move) > 0) {
				// Placeholder
				this.debug(`collision course super effective buff`);
				return this.chainModify([5461, 4096]);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	combattorque: {
		num: 899,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Combat Torque",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
	},
	cometpunch: {
		num: 4,
		accuracy: 85,
		basePower: 18,
		category: "Physical",
		isNonstandard: "Past",
		name: "Comet Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 100},
		contestType: "Tough",
	},
	comeuppance: {
		num: 894,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			const lastDamagedBy = pokemon.getLastDamagedBy(true);
			if (lastDamagedBy !== undefined) {
				return (lastDamagedBy.damage * 1.5) || 1;
			}
			return 0;
		},
		category: "Physical",
		name: "Comeuppance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy === undefined || !lastDamagedBy.thisTurn) return false;
		},
		onModifyTarget(targetRelayVar, source, target, move) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy) {
				targetRelayVar.target = this.getAtSlot(lastDamagedBy.slot);
			}
		},
		secondary: null,
		target: "scripted",
		type: "Dark",
		contestType: "Cool",
	},
	confide: {
		num: 590,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Confide",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	confuseray: {
		num: 109,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Confuse Ray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	confusion: {
		num: 93,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Confusion",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	constrict: {
		num: 132,
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Constrict",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	continentalcrush: {
		num: 632,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Continental Crush",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "rockiumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	conversion: {
		num: 160,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Conversion",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			const type = this.dex.moves.get(target.moveSlots[0].id).type;
			if (target.hasType(type) || !target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	conversion2: {
		num: 176,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Conversion 2",
		pp: 30,
		priority: 0,
		flags: {bypasssub: 1},
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

			if (!source.setType(randomType)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	copycat: {
		num: 383,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Copycat",
		pp: 20,
		priority: 0,
		flags: {},
		onHit(pokemon) {
			const noCopycat = [
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	coreenforcer: {
		num: 687,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Core Enforcer",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMove: {basePower: 140},
		contestType: "Tough",
	},
	corkscrewcrash: {
		num: 638,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Corkscrew Crash",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "steeliumz",
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	corrosivegas: {
		num: 810,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Corrosive Gas",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target, source) {
			const item = target.takeItem(source);
			if (item) {
				this.add('-enditem', target, item.name, '[from] move: Corrosive Gas', '[of] ' + source);
			} else {
				this.add('-fail', target, 'move: Corrosive Gas');
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Poison",
	},
	cosmicpower: {
		num: 322,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Cosmic Power",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	cottonguard: {
		num: 538,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cotton Guard",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 3,
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	cottonspore: {
		num: 178,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cotton Spore",
		pp: 40,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	counter: {
		num: 68,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
		name: "Counter",
		pp: 20,
		priority: -5,
		flags: {contact: 1, protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('counter');
		},
		onTry(source) {
			if (!source.volatiles['counter']) return false;
			if (source.volatiles['counter'].slot === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2, move) {
				if (move.id !== 'counter') return;
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagingHit(damage, target, source, move) {
				if (!source.isAlly(target) && this.getCategory(move) === 'Physical') {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Fighting",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	courtchange: {
		num: 756,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Court Change",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'mirageveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'luckyroll',
			];
			let success = false;
			if (this.gameType === "freeforall") {
				// random integer from 1-3 inclusive
				const offset = this.random(3) + 1;
				// the list of all sides in counterclockwise order
				const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
				const temp: {[k: number]: typeof source.side.sideConditions} = {0: {}, 1: {}, 2: {}, 3: {}};
				for (const side of sides) {
					for (const id in side.sideConditions) {
						if (!sideConditions.includes(id)) continue;
						temp[side.n][id] = side.sideConditions[id];
						delete side.sideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						this.add('-sideend', side, effectName, '[silent]');
						success = true;
					}
				}
				for (let i = 0; i < 4; i++) {
					const sourceSideConditions = temp[sides[i].n];
					const targetSide = sides[(i + offset) % 4]; // the next side in rotation
					for (const id in sourceSideConditions) {
						targetSide.sideConditions[id] = sourceSideConditions[id];
						const effectName = this.dex.conditions.get(id).name;
						let layers = sourceSideConditions[id].layers || 1;
						for (; layers > 0; layers--) this.add('-sidestart', targetSide, effectName, '[silent]');
					}
				}
			} else {
				const sourceSideConditions = source.side.sideConditions;
				const targetSideConditions = source.side.foe.sideConditions;
				const sourceTemp: typeof sourceSideConditions = {};
				const targetTemp: typeof targetSideConditions = {};
				for (const id in sourceSideConditions) {
					if (!sideConditions.includes(id)) continue;
					sourceTemp[id] = sourceSideConditions[id];
					delete sourceSideConditions[id];
					success = true;
				}
				for (const id in targetSideConditions) {
					if (!sideConditions.includes(id)) continue;
					targetTemp[id] = targetSideConditions[id];
					delete targetSideConditions[id];
					success = true;
				}
				for (const id in sourceTemp) {
					targetSideConditions[id] = sourceTemp[id];
				}
				for (const id in targetTemp) {
					sourceSideConditions[id] = targetTemp[id];
				}
				this.add('-swapsideconditions');
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	covet: {
		num: 343,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Covet",
		pp: 25,
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
			if (
				!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
				!source.setItem(yourItem)
			) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Covet', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	crabhammer: {
		num: 152,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Crabhammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	craftyshield: {
		num: 578,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Crafty Shield",
		pp: 10,
		priority: 3,
		flags: {},
		sideCondition: 'craftyshield',
		onTry() {
			return !!this.queue.willAct();
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Crafty Shield');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (['self', 'all'].includes(move.target) || move.category !== 'Status') return;
				this.add('-activate', target, 'move: Crafty Shield');
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	crosschop: {
		num: 238,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Cross Chop",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	crosspoison: {
		num: 440,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Cross Poison",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		critRatio: 2,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
	},
	crunch: {
		num: 242,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crunch",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	crushclaw: {
		num: 306,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Crush Claw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	crushgrip: {
		num: 462,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const hp = target.hp;
			const maxHP = target.maxhp;
			const bp = Math.floor(Math.floor((120 * (100 * Math.floor(hp * 4096 / maxHP)) + 2048 - 1) / 4096) / 100) || 1;
			this.debug('BP for ' + hp + '/' + maxHP + " HP: " + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Crush Grip",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 190},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				move.target = move.nonGhostTarget as MoveTarget;
			} else if (source.isAlly(target)) {
				move.target = 'randomNormal';
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 12,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {effect: 'curse'},
		contestType: "Tough",
	},
	cut: {
		num: 15,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	darkestlariat: {
		num: 663,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Darkest Lariat",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	darkpulse: {
		num: 399,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dark Pulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Dark",
		contestType: "Cool",
	},
	darkvoid: {
		num: 464,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		onTry(source, target, move) {
			if (source.species.name === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', source, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	dazzlinggleam: {
		num: 605,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Dazzling Gleam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Beautiful",
	},
	decorate: {
		num: 777,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Decorate",
		pp: 15,
		priority: 0,
		flags: {allyanim: 1},
		secondary: null,
		boosts: {
			atk: 2,
			spa: 2,
		},
		target: "normal",
		type: "Fairy",
	},
	defendorder: {
		num: 455,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defend Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	defensecurl: {
		num: 111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defense Curl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		volatileStatus: 'defensecurl',
		condition: {
			noCopy: true,
			onRestart: () => null,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'mirageveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll',
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
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	destinybond: {
		num: 194,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Destiny Bond",
		pp: 5,
		priority: 0,
		flags: {bypasssub: 1},
		volatileStatus: 'destinybond',
		onPrepareHit(pokemon) {
			return !pokemon.removeVolatile('destinybond');
		},
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bond');
			},
			onFaint(target, source, effect) {
				if (!source || !effect || target.isAlly(source)) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
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
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {effect: 'redirect'},
		contestType: "Clever",
	},
	detect: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Detect",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {evasion: 1}},
		contestType: "Cool",
	},
	devastatingdrake: {
		num: 652,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Devastating Drake",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "dragoniumz",
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	diamondstorm: {
		num: 591,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Diamond Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			chance: 50,
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
	},
	dig: {
		num: 91,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dig",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1},
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
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['earthquake', 'magnitude'].includes(move.id) && !target.hasAbility('Digger')) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'earthquake' || move.id === 'magnitude') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	disable: {
		num: 50,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'disable',
		onTryHit(target) {
			if (!target.lastMove || target.lastMove.isZ || target.lastMove.isMax || target.lastMove.id === 'struggle') {
				return false;
			}
		},
		condition: {
			duration: 5,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (
					this.queue.willMove(pokemon) ||
					(pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)
				) {
					this.effectState.duration--;
				}
				if (!pokemon.lastMove) {
					this.debug(`Pokemon hasn't moved yet`);
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						}
					}
				}
				if (effect.effectType === 'Ability') {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name, '[from] ability: Cursed Body', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name);
				}
				this.effectState.move = pokemon.lastMove.id;
			},
			onResidualOrder: 17,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	disarmingvoice: {
		num: 574,
		accuracy: true,
		basePower: 40,
		category: "Special",
		name: "Disarming Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Cute",
	},
	discharge: {
		num: 435,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Discharge",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacent",
		type: "Electric",
		contestType: "Beautiful",
	},
	direclaw: {
		num: 827,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Dire Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('slp', source);
				}
			},
		},
		target: "normal",
		type: "Poison",
	},
	dive: {
		num: 291,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dive",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, allyanim: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
				const forme = attacker.hp <= attacker.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				attacker.formeChange(forme, move);
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
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['surf', 'whirlpool'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'surf' || move.id === 'whirlpool') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	dizzypunch: {
		num: 146,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dizzy Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	doodle: {
		num: 867,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Doodle",
		pp: 10,
		priority: 0,
		flags: {},
		onHit(target, source, move) {
			let success: boolean | null = false;
			for (const pokemon of source.alliesAndSelf()) {
				if (pokemon.ability === target.ability) continue;
				const oldAbility = pokemon.setAbility(target.ability);
				if (oldAbility) {
					this.add('-ability', pokemon, target.getAbility().name, '[from] move: Doodle');
					success = true;
				} else if (!success && oldAbility === null) {
					success = null;
				}
			}
			if (!success) {
				if (success === false) {
					this.add('-fail', source);
				}
				this.attrLastMove('[still]');
				return this.NOT_FAIL;
			}
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
	},
	doomdesire: {
		num: 353,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Doom Desire",
		pp: 5,
		priority: 0,
		flags: {},
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 100,
					basePower: 140,
					category: "Special",
					priority: 0,
					flags: {},
					effectType: 'Move',
					isFutureMove: true,
					type: 'Steel',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	doubleedge: {
		num: 38,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Double-Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	doublehit: {
		num: 458,
		accuracy: 90,
		basePower: 35,
		category: "Physical",
		name: "Double Hit",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 120},
		contestType: "Cool",
	},
	doubleironbash: {
		num: 742,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Double Iron Bash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: 2,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	doublekick: {
		num: 24,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Double Kick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	doubleshock: {
		num: 892,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Double Shock",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Electric')) return;
			this.add('-fail', pokemon, 'move: Double Shock');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Electric" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Double Shock');
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	doubleslap: {
		num: 3,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		isNonstandard: "Past",
		name: "Double Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	doubleteam: {
		num: 104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Double Team",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	dracometeor: {
		num: 434,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Draco Meteor",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	dragonascent: {
		num: 620,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Dragon Ascent",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "any",
		type: "Flying",
		contestType: "Beautiful",
	},
	dragonbreath: {
		num: 225,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Dragon Breath",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragonclaw: {
		num: 337,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragondance: {
		num: 349,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dragon Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	dragondarts: {
		num: 751,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Dragon Darts",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		smartTarget: true,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 130},
	},
	dragonenergy: {
		num: 820,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower * pokemon.hp / pokemon.maxhp;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Dragon Energy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	dragonhammer: {
		num: 692,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dragon Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	dragonpulse: {
		num: 406,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Dragon Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Dragon",
		contestType: "Beautiful",
	},
	dragonrage: {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
		isNonstandard: "Past",
		name: "Dragon Rage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	dragonrush: {
		num: 407,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Dragon Rush",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	dragontail: {
		num: 525,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		name: "Dragon Tail",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	drainpunch: {
		num: 409,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Drain Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	dreameater: {
		num: 138,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dream Eater",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onTryImmunity(target) {
			return target.status === 'slp' || target.hasAbility('comatose') || target.hasAbility('boardpowerz');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	drillpeck: {
		num: 65,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drill Peck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	drillrun: {
		num: 529,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Drill Run",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	drumbeating: {
		num: 778,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drum Beating",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	dualchop: {
		num: 530,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Past",
		name: "Dual Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	dualwingbeat: {
		num: 814,
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Dual Wingbeat",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		maxMove: {basePower: 130},
	},
	dynamaxcannon: {
		num: 744,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dynamax Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	dynamicpunch: {
		num: 223,
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		name: "Dynamic Punch",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	earthpower: {
		num: 414,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Earth Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Beautiful",
	},
	earthquake: {
		num: 89,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Earthquake",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		contestType: "Tough",
	},
	echoedvoice: {
		num: 497,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			if (this.field.pseudoWeather.echoedvoice) {
				bp = move.basePower * this.field.pseudoWeather.echoedvoice.multiplier;
			}
			this.debug('BP: ' + move.basePower);
			return bp;
		},
		category: "Special",
		name: "Echoed Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onTry() {
			this.field.addPseudoWeather('echoedvoice');
		},
		condition: {
			duration: 2,
			onFieldStart() {
				this.effectState.multiplier = 1;
			},
			onFieldRestart() {
				if (this.effectState.duration !== 2) {
					this.effectState.duration = 2;
					if (this.effectState.multiplier < 5) {
						this.effectState.multiplier++;
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	eerieimpulse: {
		num: 598,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Eerie Impulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	eeriespell: {
		num: 826,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Eerie Spell",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 100,
			onHit(target) {
				if (!target.hp) return;
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || move.isZ) return;
				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

				const ppDeducted = target.deductPP(move.id, 3);
				if (!ppDeducted) return;
				this.add('-activate', target, 'move: Eerie Spell', move.name, ppDeducted);
			},
		},
		target: "normal",
		type: "Psychic",
	},
	eggbomb: {
		num: 121,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	electricterrain: {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electric Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'electricterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
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
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	electrify: {
		num: 582,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Electrify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		volatileStatus: 'electrify',
		onTryHit(target) {
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Electrify');
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.id !== 'struggle') {
					this.debug('Electrify making move type electric');
					move.type = 'Electric';
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	electroball: {
		num: 486,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = Math.floor(pokemon.getStat('spe') / target.getStat('spe'));
			if (!isFinite(ratio)) ratio = 0;
			const bp = [40, 60, 80, 120, 150][Math.min(ratio, 4)];
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Electro Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	electrodrift: {
		num: 879,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Electro Drift",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			if (target.runEffectiveness(move) > 0) {
				// Placeholder
				this.debug(`electro drift super effective buff`);
				return this.chainModify([5461, 4096]);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	electroweb: {
		num: 527,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Electroweb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
	},
	embargo: {
		num: 373,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Embargo",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'embargo',
		condition: {
			duration: 5,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Embargo');
				this.singleEvent('End', pokemon.getItem(), pokemon.itemState, pokemon);
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onResidualOrder: 21,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Embargo');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	ember: {
		num: 52,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Ember",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
	},
	encore: {
		num: 227,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Encore",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'encore',
		condition: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				const noEncore = [
					'assist', 'copycat', 'dynamaxcannon', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform',
				];
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || target.volatiles['dynamax']) return false;

				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = target.moves.indexOf(move.id);
				if (move.isZ || noEncore.includes(move.id) || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return false;
				}
				this.effectState.move = move.id;
				this.add('-start', target, 'Encore');
				if (!this.queue.willMove(target)) {
					this.effectState.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectState.move) return this.effectState.move;
			},
			onResidualOrder: 16,
			onResidual(target) {
				if (target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	endeavor: {
		num: 283,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return target.getUndynamaxedHP() - pokemon.hp;
		},
		category: "Physical",
		name: "Endeavor",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryImmunity(target, pokemon) {
			return pokemon.hp < target.hp;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	endure: {
		num: 203,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Endure",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'endure',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Endure');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Endure');
					return target.hp - 1;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	energyball: {
		num: 412,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Energy Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	entrainment: {
		num: 494,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Entrainment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onTryHit(target, source) {
			if (target === source || target.volatiles['dynamax']) return false;

			const additionalBannedSourceAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			if (
				target.ability === source.ability ||
				target.getAbility().isPermanent || target.ability === 'truant' ||
				source.getAbility().isPermanent || additionalBannedSourceAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = target.setAbility(source.ability);
			if (oldAbility) {
				this.add('-ability', target, target.getAbility().name, '[from] move: Entrainment');
				if (!target.isAlly(source)) target.volatileStaleness = 'external';
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	eruption: {
		num: 284,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower * pokemon.hp / pokemon.maxhp;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	esperwing: {
		num: 840,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Esper Wing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Psychic",
	},
	eternabeam: {
		num: 795,
		accuracy: 90,
		basePower: 160,
		category: "Special",
		isNonstandard: "Past",
		name: "Eternabeam",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	expandingforce: {
		num: 797,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Expanding Force",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, source) {
			if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
				this.debug('terrain buff');
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
				move.target = 'allAdjacentFoes';
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	explosion: {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},
	extrasensory: {
		num: 326,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Extrasensory",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	extremeevoboost: {
		num: 702,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Extreme Evoboost",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "eeviumz",
		boosts: {
			atk: 2,
			def: 2,
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
	},
	extremespeed: {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Extreme Speed",
		pp: 5,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status && pokemon.status !== 'slp') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	fairylock: {
		num: 587,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fairy Lock",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, bypasssub: 1},
		pseudoWeather: 'fairylock',
		condition: {
			duration: 2,
			onFieldStart(target) {
				this.add('-fieldactivate', 'move: Fairy Lock');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	fairywind: {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Fairy Wind",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	fakeout: {
		num: 252,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Fake Out",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("Fake Out only works on your first turn out.");
				return false;
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	faketears: {
		num: 313,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fake Tears",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	falsesurrender: {
		num: 793,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "False Surrender",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	falseswipe: {
		num: 206,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "False Swipe",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	featherdance: {
		num: 297,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Feather Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, dance: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	feint: {
		num: 364,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Feint",
		pp: 10,
		priority: 2,
		flags: {mirror: 1},
		breaksProtect: true,
		// Breaking protection implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	feintattack: {
		num: 185,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Feint Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	fellstinger: {
		num: 565,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Fell Stinger",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 3}, pokemon, pokemon, move);
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	fierydance: {
		num: 552,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Fiery Dance",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	fierywrath: {
		num: 822,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Fiery Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Dark",
	},
	filletaway: {
		num: 868,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fillet Away",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onTry(source) {
			if (source.hp <= source.maxhp / 2 || source.maxhp === 1) return false;
		},
		onTryHit(pokemon, target, move) {
			if (!this.boost(move.boosts as SparseBoostsTable)) return null;
			delete move.boosts;
		},
		onHit(pokemon) {
			this.directDamage(pokemon.maxhp / 2);
		},
		boosts: {
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	finalgambit: {
		num: 515,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			const damage = pokemon.hp;
			pokemon.faint();
			return damage;
		},
		category: "Special",
		name: "Final Gambit",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		contestType: "Tough",
	},
	fireblast: {
		num: 126,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Fire Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firefang: {
		num: 424,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Fire Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	firelash: {
		num: 680,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Fire Lash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Cute",
	},
	firepledge: {
		num: 519,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['grasspledge', 'waterpledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Fire Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && ['grasspledge', 'waterpledge'].includes(action.move.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Water';
				move.forceSTAB = true;
				move.self = {sideCondition: 'waterpledge'};
			}
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
				move.sideCondition = 'firepledge';
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Fire Pledge');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(pokemon) {
				if (!pokemon.hasType('Fire')) this.damage(pokemon.baseMaxhp / 8, pokemon);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 8,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Fire Pledge');
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firepunch: {
		num: 7,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fire Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	firespin: {
		num: 83,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Fire Spin",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	firstimpression: {
		num: 660,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "First Impression",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("First Impression only works on your first turn out.");
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	fishiousrend: {
		num: 755,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Fishious Rend damage boost');
				return move.basePower * 2;
			}
			this.debug('Fishious Rend NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Fishious Rend",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	fissure: {
		num: 90,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	flail: {
		num: 175,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
			let bp;
			if (ratio < 2) {
				bp = 200;
			} else if (ratio < 5) {
				bp = 150;
			} else if (ratio < 10) {
				bp = 100;
			} else if (ratio < 17) {
				bp = 80;
			} else if (ratio < 33) {
				bp = 40;
			} else {
				bp = 20;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Flail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	flameburst: {
		num: 481,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Flame Burst",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flamecharge: {
		num: 488,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Flame Charge",
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
		type: "Fire",
		contestType: "Cool",
	},
	flamewheel: {
		num: 172,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flame Wheel",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flamethrower: {
		num: 53,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Flamethrower",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	flareblitz: {
		num: 394,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Flare Blitz",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	flash: {
		num: 148,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Beautiful",
	},
	flashcannon: {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	flatter: {
		num: 260,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flatter",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		volatileStatus: 'confusion',
		boosts: {
			spa: 1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	fleurcannon: {
		num: 705,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Fleur Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	fling: {
		num: 374,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Fling",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onPrepareHit(target, source, move) {
			if (source.ignoringItem()) return false;
			const item = source.getItem();
			if (!this.singleEvent('TakeItem', item, source.itemState, source, source, move, item)) return false;
			if (!item.fling) return false;
			move.basePower = item.fling.basePower;
			this.debug('BP: ' + move.basePower);
			if (item.isBerry) {
				move.onHit = function (foe) {
					if (this.singleEvent('Eat', item, null, foe, null, null)) {
						this.runEvent('EatItem', foe, null, null, item);
						if (item.id === 'leppaberry') foe.staleness = 'external';
					}
					if (item.onEat) foe.ateBerry = true;
				};
			} else if (item.fling.effect) {
				move.onHit = item.fling.effect;
			} else {
				if (!move.secondaries) move.secondaries = [];
				if (item.fling.status) {
					move.secondaries.push({status: item.fling.status});
				} else if (item.fling.volatileStatus) {
					move.secondaries.push({volatileStatus: item.fling.volatileStatus});
				}
			}
			source.addVolatile('fling');
		},
		condition: {
			onUpdate(pokemon) {
				const item = pokemon.getItem();
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.add('-enditem', pokemon, item.name, '[from] move: Fling');
				this.runEvent('AfterUseItem', pokemon, null, null, item);
				pokemon.removeVolatile('fling');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
	},
	flipturn: {
		num: 812,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Flip Turn",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	floatyfall: {
		num: 731,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Floaty Fall",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, gravity: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	floralhealing: {
		num: 666,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Floral Healing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1, allyanim: 1},
		onHit(target, source) {
			let success = false;
			if (this.field.isTerrain('grassyterrain')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.667));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			if (!success) {
				this.add('-fail', target, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	flowershield: {
		num: 579,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Flower Shield",
		pp: 10,
		priority: 0,
		flags: {distance: 1},
		onHitField(t, source, move) {
			const targets: Pokemon[] = [];
			for (const pokemon of this.getAllActive()) {
				if (
					pokemon.hasType('Grass') &&
					(!pokemon.volatiles['maxguard'] ||
					  this.runEvent('TryHit', pokemon, source, move))
				  ) {
					// This move affects every Grass-type Pokemon in play.
					targets.push(pokemon);
				  }
			}
			let success = false;
			for (const target of targets) {
				success = this.boost({def: 1}, target, source, move) || success;
			}
			return success;
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	flowertrick: {
		num: 870,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Flower Trick",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	fly: {
		num: 19,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
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
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
	},
	flyingpress: {
		num: 560,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Flying Press",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Flying', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Fighting",
		zMove: {basePower: 170},
		contestType: "Tough",
	},
	focusblast: {
		num: 411,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Focus Blast",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	focusenergy: {
		num: 116,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Focus Energy",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'focusenergy',
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-start', target, 'move: Focus Energy', '[zeffect]');
				} else if (effect && (['costar', 'imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Focus Energy', '[silent]');
				} else {
					this.add('-start', target, 'move: Focus Energy');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 2;
			},
		},
		secondary: null,
		target: "self",
		type:
		 "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	focuspunch: {
		num: 264,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Focus Punch",
		pp: 20,
		priority: -3,
		flags: {contact: 1, protect: 1, punch: 1},
		priorityChargeCallback(pokemon) {
			pokemon.addVolatile('focuspunch');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['focuspunch']?.lostFocus) {
				this.add('cant', pokemon, 'Focus Punch', 'Focus Punch');
				return true;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Focus Punch');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					this.effectState.lostFocus = true;
				}
			},
			onTryAddVolatile(status, pokemon) {
				if (status.id === 'flinch') return null;
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	followme: {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Follow Me",
		pp: 20,
		priority: 2,
		flags: {},
		volatileStatus: 'followme',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-singleturn', target, 'move: Follow Me', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Follow Me');
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Follow Me redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	forcepalm: {
		num: 395,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Force Palm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	foresight: {
		num: 193,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Foresight",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Foresight');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	forestscurse: {
		num: 571,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Forest's Curse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			if (target.hasType('Grass')) return false;
			if (!target.addType('Grass')) return false;
			this.add('-start', target, 'typeadd', 'Grass', '[from] move: Forest\'s Curse');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
	foulplay: {
		num: 492,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Foul Play",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		overrideOffensivePokemon: 'target',
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	freezedry: {
		num: 573,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Freeze-Dry",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	freezeshock: {
		num: 553,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		isNonstandard: "Past",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	freezingglare: {
		num: 821,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Freezing Glare",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Psychic",
	},
	freezyfrost: {
		num: 739,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Freezy Frost",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onHit() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	frenzyplant: {
		num: 338,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Frenzy Plant",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1, nonsky: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	frostbreath: {
		num: 524,
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	frustration: {
		num: 218,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	furyattack: {
		num: 31,
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Fury Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	furycutter: {
		num: 210,
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['furycutter'] || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			const bp = this.clampIntRange(move.basePower * pokemon.volatiles['furycutter'].multiplier, 1, 160);
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Fury Cutter",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	furyswipes: {
		num: 154,
		accuracy: 80,
		basePower: 18,
		category: "Physical",
		name: "Fury Swipes",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 100},
		contestType: "Tough",
	},
	fusionbolt: {
		num: 559,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Fusion Bolt",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (this.lastSuccessfulMoveThisTurn === 'fusionflare') {
				this.debug('double power');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	fusionflare: {
		num: 558,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Fusion Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon) {
			if (this.lastSuccessfulMoveThisTurn === 'fusionbolt') {
				this.debug('double power');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	futuresight: {
		num: 248,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Future Sight",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
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
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Psychic',
				},
			});
			this.add('-start', source, 'move: Future Sight');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	gastroacid: {
		num: 380,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Gastro Acid",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		volatileStatus: 'gastroacid',
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
			if (target.hasItem('Ability Shield')) {
				this.add('-block', target, 'item: Ability Shield');
				return null;
			}
		},
		condition: {
			// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
			onStart(pokemon) {
				if (pokemon.hasItem('Ability Shield')) return false;
				this.add('-endability', pokemon);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon, pokemon, 'gastroacid');
			},
			onCopy(pokemon) {
				if (pokemon.getAbility().isPermanent) pokemon.removeVolatile('gastroacid');
			},
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	geargrind: {
		num: 544,
		accuracy: 85,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Past",
		name: "Gear Grind",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	gearup: {
		num: 674,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Gear Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, bypasssub: 1},
		onHitSide(side, source, move) {
			const targets = side.allies().filter(target => (
				target.hasAbility(['plus', 'minus']) &&
				(!target.volatiles['maxguard'] || this.runEvent('TryHit', target, source, move))
			));
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({atk: 1, spa: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	genesissupernova: {
		num: 703,
		accuracy: true,
		basePower: 185,
		category: "Special",
		isNonstandard: "Past",
		name: "Genesis Supernova",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "mewniumz",
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('psychicterrain');
				},
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	geomancy: {
		num: 601,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Geomancy",
		pp: 10,
		priority: 0,
		flags: {charge: 1, nonsky: 1},
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
		boosts: {
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Giga Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	gigaimpact: {
		num: 416,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	gigatonhammer: {
		num: 893,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Gigaton Hammer",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onDisableMove(pokemon) {
			if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.disableMove('gigatonhammer');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.addVolatile('gigatonhammer');
		},
		onAfterMove(pokemon) {
			if (pokemon.removeVolatile('gigatonhammer')) {
				this.add('-hint', "Some effects can force a Pokemon to use Gigaton Hammer again in a row.");
			}
		},
		condition: {},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	gigavolthavoc: {
		num: 646,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Gigavolt Havoc",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "electriumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	glaciallance: {
		num: 824,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Glacial Lance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ice",
	},
	glaciate: {
		num: 549,
		accuracy: 95,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Glaciate",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	glaiverush: {
		num: 862,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Glaive Rush",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'glaiverush',
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Glaive Rush', '[silent]');
			},
			onAccuracy() {
				return true;
			},
			onSourceModifyDamage() {
				return this.chainModify(2);
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Glaive Rush drawback before attack');
				pokemon.removeVolatile('glaiverush');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	glare: {
		num: 137,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Glare",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Tough",
	},
	glitzyglow: {
		num: 736,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Glitzy Glow",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		self: {
			sideCondition: 'lightscreen',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	gmaxbefuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Befuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Butterfree",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					const result = this.random(3);
					if (result === 0) {
						pokemon.trySetStatus('slp', source);
					} else if (result === 1) {
						pokemon.trySetStatus('par', source);
					} else {
						pokemon.trySetStatus('psn', source);
					}
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	gmaxcannonade: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cannonade",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Blastoise",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxcannonade');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Cannonade');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Water')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Cannonade');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxcentiferno: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Centiferno",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Centiskorch",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('partiallytrapped', source, this.dex.getActiveMove('G-Max Centiferno'));
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxchistrike: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Chi Strike",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Machamp",
		self: {
			onHit(source) {
				for (const pokemon of source.alliesAndSelf()) {
					pokemon.addVolatile('gmaxchistrike');
				}
			},
		},
		condition: {
			noCopy: true,
			onStart(target, source, effect) {
				this.effectState.layers = 1;
				if (!['costar', 'imposter', 'psychup', 'transform'].includes(effect?.id)) {
					this.add('-start', target, 'move: G-Max Chi Strike');
				}
			},
			onRestart(target, source, effect) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				if (!['costar', 'imposter', 'psychup', 'transform'].includes(effect?.id)) {
					this.add('-start', target, 'move: G-Max Chi Strike');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + this.effectState.layers;
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
	},
	gmaxcuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Cuddle",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Eevee",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('attract');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxdepletion: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Depletion",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Duraludon",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					let move: Move | ActiveMove | null = pokemon.lastMove;
					if (!move || move.isZ) continue;
					if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

					const ppDeducted = pokemon.deductPP(move.id, 2);
					if (ppDeducted) {
						this.add("-activate", pokemon, 'move: G-Max Depletion', move.name, ppDeducted);
						// Don't return here because returning early doesn't trigger
						// activation text for the second Pokemon in doubles
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
	},
	gmaxdrumsolo: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Drum Solo",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Rillaboom",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxfinale: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Finale",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Alcremie",
		self: {
			onHit(target, source, move) {
				for (const pokemon of source.alliesAndSelf()) {
					this.heal(pokemon.maxhp / 6, pokemon, source, move);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	gmaxfireball: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Fireball",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Cinderace",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxfoamburst: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Foam Burst",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Kingler",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					this.boost({spe: -2}, pokemon);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxgoldrush: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gold Rush",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Meowth",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('confusion');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxgravitas: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Gravitas",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Orbeetle",
		self: {
			pseudoWeather: 'gravity',
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
	},
	gmaxhydrosnipe: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Hydrosnipe",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Inteleon",
		ignoreAbility: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxmalodor: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Malodor",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Garbodor",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.trySetStatus('psn', source);
				}
			},
		},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
	},
	gmaxmeltdown: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Meltdown",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Melmetal",
		self: {
			onHit(source, target, effect) {
				for (const pokemon of source.foes()) {
					if (!pokemon.volatiles['dynamax']) pokemon.addVolatile('torment', source, effect);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	gmaxoneblow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max One Blow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu",
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	gmaxrapidflow: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Rapid Flow",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Urshifu-Rapid-Strike",
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxreplenish: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Replenish",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Snorlax",
		self: {
			onHit(source) {
				if (this.random(2) === 0) return;
				for (const pokemon of source.alliesAndSelf()) {
					if (pokemon.item) continue;

					if (pokemon.lastItem && this.dex.items.get(pokemon.lastItem).isBerry) {
						const item = pokemon.lastItem;
						pokemon.lastItem = '';
						this.add('-item', pokemon, this.dex.items.get(item), '[from] move: G-Max Replenish');
						pokemon.setItem(item);
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	gmaxresonance: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Resonance",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Lapras",
		self: {
			sideCondition: 'auroraveil',
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
	},
	gmaxsandblast: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sandblast",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Sandaconda",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('partiallytrapped', source, this.dex.getActiveMove('G-Max Sandblast'));
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
	},
	gmaxsmite: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Smite",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Hatterene",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('confusion', source);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	gmaxsnooze: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Snooze",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Grimmsnarl",
		onHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) return;
			if (this.random(2) === 0) return;
			target.addVolatile('yawn');
		},
		onAfterSubDamage(damage, target) {
			if (target.status || !target.runStatusImmunity('slp')) return;
			if (this.random(2) === 0) return;
			target.addVolatile('yawn');
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	gmaxsteelsurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Steelsurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Copperajah",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxsteelsurge');
				}
			},
		},
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	gmaxstonesurge: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stonesurge",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Drednaw",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('stealthrock');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	gmaxstunshock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Stun Shock",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Toxtricity",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					const result = this.random(2);
					if (result === 0) {
						pokemon.trySetStatus('par', source);
					} else {
						pokemon.trySetStatus('psn', source);
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	gmaxsweetness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Sweetness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Appletun",
		self: {
			onHit(source) {
				for (const ally of source.side.pokemon) {
					ally.cureStatus();
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxtartness: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Tartness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Flapple",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					this.boost({evasion: -1}, pokemon);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxterror: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Terror",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Gengar",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.addVolatile('trapped', source, null, 'trapper');
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
	},
	gmaxvinelash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Vine Lash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Venusaur",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxvinelash');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Vine Lash');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Grass')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Vine Lash');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	gmaxvolcalith: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volcalith",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Coalossal",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxvolcalith');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Volcalith');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Rock')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Volcalith');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
	},
	gmaxvoltcrash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Volt Crash",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Pikachu",
		self: {
			onHit(source) {
				for (const pokemon of source.foes()) {
					pokemon.trySetStatus('par', source);
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	gmaxwildfire: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wildfire",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Charizard",
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxwildfire');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Wildfire');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Fire')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Wildfire');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	gmaxwindrage: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wind Rage",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Corviknight",
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'luckyroll',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
				for (const targetCondition of removeTarget) {
					if (source.side.foe.removeSideCondition(targetCondition)) {
						if (!removeAll.includes(targetCondition)) continue;
						this.add('-sideend', source.side.foe, this.dex.conditions.get(targetCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				for (const sideCondition of removeAll) {
					if (source.side.removeSideCondition(sideCondition)) {
						this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				this.field.clearTerrain();
				return success;
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
	},
	grassknot: {
		num: 447,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			let bp;
			if (targetWeight >= 2000) {
				bp = 120;
			} else if (targetWeight >= 1000) {
				bp = 100;
			} else if (targetWeight >= 500) {
				bp = 80;
			} else if (targetWeight >= 250) {
				bp = 60;
			} else if (targetWeight >= 100) {
				bp = 40;
			} else {
				bp = 20;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Grass Knot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, source, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', source, 'move: Grass Knot', '[from] Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	grasspledge: {
		num: 520,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['waterpledge', 'firepledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Grass Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (
					!action.move || !action.pokemon?.isActive ||
					action.pokemon.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (action.pokemon.isAlly(source) && ['waterpledge', 'firepledge'].includes(action.move.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
				move.sideCondition = 'grasspledge';
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
				move.sideCondition = 'firepledge';
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Grass Pledge');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 9,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Grass Pledge');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.25);
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	grasswhistle: {
		num: 320,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	grassyglide: {
		num: 803,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Grassy Glide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1},
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				return priority + 1;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	grassyterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grassy Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'grassyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
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
		secondary: null,
		target: "all",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	gravapple: {
		num: 788,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Grav Apple",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower) {
			if (this.field.getPseudoWeather('gravity')) {
				return this.chainModify(1.5);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	gravity: {
		num: 356,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gravity",
		pp: 5,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'gravity',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Gravity');
					return 7;
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
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	growl: {
		num: 45,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Growl",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	growth: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	grudge: {
		num: 288,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Grudge",
		pp: 5,
		priority: 0,
		flags: {bypasssub: 1},
		volatileStatus: 'grudge',
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Grudge');
			},
			onFaint(target, source, effect) {
				if (!source || source.fainted || !effect) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove && source.lastMove) {
					let move: Move = source.lastMove;
					if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === move.id) {
							moveSlot.pp = 0;
							this.add('-activate', source, 'move: Grudge', move.name);
						}
					}
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Grudge before attack');
				pokemon.removeVolatile('grudge');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMove: {effect: 'redirect'},
		contestType: "Tough",
	},
	guardianofalola: {
		num: 698,
		accuracy: true,
		basePower: 0,
		damageCallback(pokemon, target) {
			const hp75 = Math.floor(target.getUndynamaxedHP() * 3 / 4);
			if (
				target.volatiles['protect'] || target.volatiles['banefulbunker'] || target.volatiles['kingsshield'] ||
				target.volatiles['spikyshield'] || target.side.getSideCondition('matblock')
			) {
				this.add('-zbroken', target);
				return this.clampIntRange(Math.ceil(hp75 / 4 - 0.5), 1);
			}
			return this.clampIntRange(hp75, 1);
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Guardian of Alola",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "tapuniumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	guardsplit: {
		num: 470,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, allyanim: 1},
		onHit(target, source) {
			const newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
			target.storedStats.def = newdef;
			source.storedStats.def = newdef;
			const newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
			target.storedStats.spd = newspd;
			source.storedStats.spd = newspd;
			this.add('-activate', source, 'move: Guard Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	guardswap: {
		num: 385,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Guard Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			const defSpd: BoostID[] = ['def', 'spd'];
			for (const stat of defSpd) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'def, spd', '[from] move: Guard Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	guillotine: {
		num: 12,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Guillotine",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	gunkshot: {
		num: 441,
		accuracy: 80,
		basePower: 120,
		category: "Physical",
		name: "Gunk Shot",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	gust: {
		num: 16,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Gust",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
	},
	gyroball: {
		num: 360,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) + 1;
			if (!isFinite(power)) power = 1;
			if (power > 150) power = 150;
			this.debug('BP: ' + power);
			return power;
		},
		category: "Physical",
		name: "Gyro Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	hail: {
		num: 258,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Hail",
		pp: 10,
		priority: 0,
		flags: {},
		weather: 'hail',
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	hammerarm: {
		num: 359,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Hammer Arm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	happyhour: {
		num: 603,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Happy Hour",
		pp: 30,
		priority: 0,
		flags: {},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Happy Hour');
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	harden: {
		num: 106,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Harden",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	haze: {
		num: 114,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Haze",
		pp: 30,
		priority: 0,
		flags: {bypasssub: 1},
		onHitField() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	headbutt: {
		num: 29,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	headcharge: {
		num: 543,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Past",
		name: "Head Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	headlongrush: {
		num: 838,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Headlong Rush",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	headsmash: {
		num: 457,
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Head Smash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	healbell: {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Heal Bell",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, sound: 1, distance: 1, bypasssub: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ally.hasAbility(['soundproof', 'cacophony'])) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	healblock: {
		num: 377,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Block",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'healblock',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
					return 7;
				}
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source) {
				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	healingwish: {
		num: 361,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Healing Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTryHit(source) {
			if (!this.canSwitch(source.side)) {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return this.NOT_FAIL;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'healingwish',
		condition: {
			onSwap(target) {
				if (!target.fainted && (target.hp < target.maxhp || target.status)) {
					target.heal(target.maxhp);
					target.clearStatus();
					this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
					target.side.removeSlotCondition(target, 'healingwish');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	healorder: {
		num: 456,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Heal Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	healpulse: {
		num: 505,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, reflectable: 1, distance: 1, heal: 1, allyanim: 1},
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('megalauncher')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 0.75));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			if (!success) {
				this.add('-fail', target, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "any",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	heartstamp: {
		num: 531,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Heart Stamp",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cute",
	},
	heartswap: {
		num: 391,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heart Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			let i: BoostID;
			for (i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] move: Heart Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {effect: 'crit2'},
		contestType: "Clever",
	},
	heatcrash: {
		num: 535,
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
		name: "Heat Crash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	heatwave: {
		num: 257,
		accuracy: 90,
		basePower: 95,
		category: "Special",
		name: "Heat Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	heavyslam: {
		num: 484,
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
		name: "Heavy Slam",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	helpinghand: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Helping Hand",
		pp: 20,
		priority: 5,
		flags: {bypasssub: 1},
		volatileStatus: 'helpinghand',
		onTryHit(target) {
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.effectState.multiplier = 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onRestart(target, source) {
				this.effectState.multiplier *= 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onBasePowerPriority: 10,
			onBasePower(basePower) {
				this.debug('Boosting from Helping Hand: ' + this.effectState.multiplier);
				return this.chainModify(this.effectState.multiplier);
			},
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	hex: {
		num: 506,
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) {
				this.debug('BP doubled from status condition');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Hex",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {basePower: 160},
		contestType: "Clever",
	},
	hiddenpower: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	hiddenpowerbug: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	hiddenpowerdark: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	hiddenpowerdragon: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
	},
	hiddenpowerelectric: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	hiddenpowerfighting: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	hiddenpowerfire: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	hiddenpowerflying: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	hiddenpowerghost: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	hiddenpowergrass: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	hiddenpowerground: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	hiddenpowerice: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	hiddenpowerpoison: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	hiddenpowerpsychic: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	hiddenpowerrock: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	hiddenpowersteel: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	hiddenpowerwater: {
		num: 237,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		realMove: "Hidden Power",
		isNonstandard: "Past",
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	highhorsepower: {
		num: 667,
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		name: "High Horsepower",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	highjumpkick: {
		num: 136,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "High Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	holdback: {
		num: 610,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Hold Back",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	holdhands: {
		num: 607,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hold Hands",
		pp: 40,
		priority: 0,
		flags: {bypasssub: 1},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	honeclaws: {
		num: 468,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hone Claws",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	hornattack: {
		num: 30,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Horn Attack",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	horndrill: {
		num: 32,
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Horn Drill",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	hornleech: {
		num: 532,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Horn Leech",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	howl: {
		num: 336,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Howl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1, sound: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "allies",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	hurricane: {
		num: 542,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Hurricane",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
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
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		contestType: "Tough",
	},
	hydrocannon: {
		num: 308,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hydro Cannon",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	hydropump: {
		num: 56,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	hydrovortex: {
		num: 642,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hydro Vortex",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "wateriumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	hyperbeam: {
		num: 63,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	hyperdrill: {
		num: 887,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Hyper Drill",
		pp: 5,
		priority: 0,
		flags: {contact: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	hyperfang: {
		num: 158,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Past",
		name: "Hyper Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	hyperspacefury: {
		num: 621,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		name: "Hyperspace Fury",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, bypasssub: 1},
		breaksProtect: true,
		onTry(source) {
			if (source.species.name === 'Hoopa-Unbound') {
				return;
			}
			this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
			if (source.species.name === 'Hoopa') {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Hyperspace Fury');
			return null;
		},
		self: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	hyperspacehole: {
		num: 593,
		accuracy: true,
		basePower: 80,
		category: "Special",
		name: "Hyperspace Hole",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, bypasssub: 1},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	hypervoice: {
		num: 304,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Hyper Voice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	hypnosis: {
		num: 95,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	iceball: {
		num: 301,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			const iceballData = pokemon.volatiles['iceball'];
			if (iceballData?.hitCount) {
				bp *= Math.pow(2, iceballData.contactHitCount);
			}
			if (iceballData && pokemon.status !== 'slp') {
				iceballData.hitCount++;
				iceballData.contactHitCount++;
				if (iceballData.hitCount < 5) {
					iceballData.duration = 2;
				}
			}
			if (pokemon.volatiles['defensecurl']) {
				bp *= 2;
			}
			this.debug("BP: " + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Ice Ball",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			if (pokemon.volatiles['iceball'] || pokemon.status === 'slp' || !target) return;
			pokemon.addVolatile('iceball');
			// @ts-ignore
			// TS thinks pokemon.volatiles['iceball'] doesn't exist because of the condition on the return above
			// but it does exist now because addVolatile created it
			pokemon.volatiles['iceball'].targetSlot = move.sourceEffect ? pokemon.lastMoveTargetLoc : pokemon.getLocOf(target);
		},
		onAfterMove(source, target, move) {
			const iceballData = source.volatiles["iceball"];
			if (
				iceballData &&
				iceballData.hitCount === 5 &&
				iceballData.contactHitCount < 5
				// this conditions can only be met in gen7 and gen8dlc1
				// see `disguise` and `iceface` abilities in the resp mod folders
			) {
				source.addVolatile("rolloutstorage");
				source.volatiles["rolloutstorage"].contactHitCount =
				iceballData.contactHitCount;
			}
		},

		condition: {
			duration: 1,
			onLockMove: 'iceball',
			onStart() {
				this.effectState.hitCount = 0;
				this.effectState.contactHitCount = 0;
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['iceball'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	icebeam: {
		num: 58,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Ice Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iceburn: {
		num: 554,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Ice Burn",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	icefang: {
		num: 423,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Ice Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	icehammer: {
		num: 665,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Ice Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Tough",
	},
	icepunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iceshard: {
		num: 420,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Ice Shard",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	icespinner: {
		num: 861,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Ice Spinner",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit() {
			this.field.clearTerrain();
		},
		onAfterSubDamage() {
			this.field.clearTerrain();
		},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	iciclecrash: {
		num: 556,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Icicle Crash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iciclespear: {
		num: 333,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Icicle Spear",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	icywind: {
		num: 196,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Icy Wind",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	imprison: {
		num: 286,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Imprison",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, bypasssub: 1},
		volatileStatus: 'imprison',
		condition: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectState.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 2}},
		contestType: "Clever",
	},
	incinerate: {
		num: 510,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Incinerate",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(pokemon, source) {
			const item = pokemon.getItem();
			if ((item.isBerry || item.isGem) && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	infernalparade: {
		num: 844,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Infernal Parade",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ghost",
	},
	inferno: {
		num: 517,
		accuracy: 50,
		basePower: 100,
		category: "Special",
		name: "Inferno",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	infernooverdrive: {
		num: 640,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Inferno Overdrive",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "firiumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	infestation: {
		num: 611,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Infestation",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	ingrain: {
		num: 275,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ingrain",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'ingrain',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Ingrain');
			},
			onResidualOrder: 7,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Ingrain');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	instruct: {
		num: 689,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Instruct",
		pp: 15,
		priority: 0,
		flags: {protect: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			if (!target.lastMove || target.volatiles['dynamax']) return false;
			const lastMove = target.lastMove;
			const moveIndex = target.moves.indexOf(lastMove.id);
			const noInstruct = [
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'copycat', 'dynamaxcannon', 'focuspunch', 'iceball', 'instruct', 'kingsshield', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'obstruct', 'outrage', 'petaldance', 'rollout', 'shelltrap', 'sketch', 'sleeptalk', 'struggle', 'thrash', 'transform', 'uproar',
			];
			if (
				noInstruct.includes(lastMove.id) || lastMove.isZ || lastMove.isMax ||
				lastMove.flags['charge'] || lastMove.flags['recharge'] ||
				target.volatiles['beakblast'] || target.volatiles['focuspunch'] || target.volatiles['shelltrap'] ||
				(target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)
			) {
				return false;
			}
			this.add('-singleturn', target, 'move: Instruct', '[of] ' + source);
			this.queue.prioritizeAction(this.queue.resolveAction({
				choice: 'move',
				pokemon: target,
				moveid: target.lastMove.id,
				targetLoc: target.lastMoveTargetLoc!,
			})[0] as MoveAction);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	iondeluge: {
		num: 569,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Ion Deluge",
		pp: 25,
		priority: 1,
		flags: {},
		pseudoWeather: 'iondeluge',
		condition: {
			duration: 1,
			onFieldStart(target, source, sourceEffect) {
				this.add('-fieldactivate', 'move: Ion Deluge');
				this.hint(`Normal-type moves become Electric-type after using ${sourceEffect}.`);
			},
			onModifyTypePriority: -2,
			onModifyType(move) {
				if (move.type === 'Normal') {
					move.type = 'Electric';
					this.debug(move.name + "'s type changed to Electric");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	irondefense: {
		num: 334,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Iron Defense",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	ironhead: {
		num: 442,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Iron Head",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	irontail: {
		num: 231,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		name: "Iron Tail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	jawlock: {
		num: 746,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Jaw Lock",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onHit(target, source, move) {
			source.addVolatile('trapped', target, move, 'trapper');
			target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	jetpunch: {
		num: 857,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Jet Punch",
		pp: 15,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		hasSheerForce: true,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	judgment: {
		num: 449,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Judgment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	jumpkick: {
		num: 26,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	junglehealing: {
		num: 816,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Jungle Healing",
		pp: 10,
		priority: 0,
		flags: {heal: 1, bypasssub: 1, allyanim: 1},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "allies",
		type: "Grass",
	},
	karatechop: {
		num: 2,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		isNonstandard: "Past",
		name: "Karate Chop",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	kinesis: {
		num: 134,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Kinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	kingsshield: {
		num: 588,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "King's Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'kingsshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
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
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	knockoff: {
		num: 282,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	kowtowcleave: {
		num: 869,
		accuracy: true,
		basePower: 85,
		category: "Physical",
		name: "Kowtow Cleave",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	landswrath: {
		num: 616,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Land's Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {basePower: 185},
		contestType: "Beautiful",
	},
	laserfocus: {
		num: 673,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Laser Focus",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'laserfocus',
		condition: {
			duration: 2,
			onStart(pokemon, source, effect) {
				if (effect && (['costar', 'imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', pokemon, 'move: Laser Focus', '[silent]');
				} else {
					this.add('-start', pokemon, 'move: Laser Focus');
				}
			},
			onRestart(pokemon) {
				this.effectState.duration = 2;
				this.add('-start', pokemon, 'move: Laser Focus');
			},
			onModifyCritRatio(critRatio) {
				return 5;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Laser Focus', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	lashout: {
		num: 808,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Lash Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source) {
			if (source.statsLoweredThisTurn) {
				this.debug('lashout buff');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	lastresort: {
		num: 387,
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Last Resort",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.moveSlots.length < 2) return false; // Last Resort fails unless the user knows at least 2 moves
			let hasLastResort = false; // User must actually have Last Resort for it to succeed
			for (const moveSlot of source.moveSlots) {
				if (moveSlot.id === 'lastresort') {
					hasLastResort = true;
					continue;
				}
				if (!moveSlot.used) return false;
			}
			return hasLastResort;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	lastrespects: {
		num: 854,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			return 50 + 50 * pokemon.side.totalFainted;
		},
		category: "Physical",
		name: "Last Respects",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	lavaplume: {
		num: 436,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Lava Plume",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
	},
	leafage: {
		num: 670,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Leafage",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	leafblade: {
		num: 348,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Leaf Blade",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	leafstorm: {
		num: 437,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Leaf Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	leaftornado: {
		num: 536,
		accuracy: 90,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Leaf Tornado",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	leechlife: {
		num: 141,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Leech Life",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	leechseed: {
		num: 73,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Leech Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'leechseed',
		condition: {
			onStart(target) {
				this.add('-start', target, 'move: Leech Seed');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryImmunity(target) {
			return !target.hasType('Grass');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	leer: {
		num: 43,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leer",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
	},
	letssnuggleforever: {
		num: 726,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Let's Snuggle Forever",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "mimikiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	lick: {
		num: 122,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Lick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
	},
	lifedew: {
		num: 791,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Life Dew",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, bypasssub: 1},
		heal: [1, 4],
		secondary: null,
		target: "allies",
		type: "Water",
	},
	lightofruin: {
		num: 617,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Light of Ruin",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	lightscreen: {
		num: 113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Light Screen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'lightscreen',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
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
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	lightthatburnsthesky: {
		num: 723,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Light That Burns the Sky",
		pp: 1,
		priority: 0,
		flags: {},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		isZ: "ultranecroziumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	liquidation: {
		num: 710,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Liquidation",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	lockon: {
		num: 199,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lock-On",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Lock-On', '[of] ' + target);
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onSourceInvulnerabilityPriority: 1,
			onSourceInvulnerability(target, source, move) {
				if (move && source === this.effectState.target && target === this.effectState.source) return 0;
			},
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectState.target && target === this.effectState.source) return true;
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	lovelykiss: {
		num: 142,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	lowkick: {
		num: 67,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetWeight = target.getWeight();
			let bp;
			if (targetWeight >= 2000) {
				bp = 120;
			} else if (targetWeight >= 1000) {
				bp = 100;
			} else if (targetWeight >= 500) {
				bp = 80;
			} else if (targetWeight >= 250) {
				bp = 60;
			} else if (targetWeight >= 100) {
				bp = 40;
			} else {
				bp = 20;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Low Kick",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(target, pokemon, move) {
			if (target.volatiles['dynamax']) {
				this.add('-fail', pokemon, 'Dynamax');
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		contestType: "Tough",
	},
	lowsweep: {
		num: 490,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Low Sweep",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	luckychant: {
		num: 381,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lucky Chant",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'luckychant',
		condition: {
			duration: 5,
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Lucky Chant'); // "The Lucky Chant shielded [side.name]'s team from critical hits!"
			},
			onCriticalHit: false,
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 6,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Lucky Chant'); // "[side.name]'s team's Lucky Chant wore off!"
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},
	luminacrash: {
		num: 855,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Lumina Crash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Psychic",
	},
	lunarblessing: {
		num: 849,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Lunar Blessing",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "allies",
		type: "Psychic",
	},
	lunardance: {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lunar Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, dance: 1},
		onTryHit(source) {
			if (!this.canSwitch(source.side)) {
				this.attrLastMove('[still]');
				this.add('-fail', source);
				return this.NOT_FAIL;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'lunardance',
		condition: {
			onSwap(target) {
				if (
					!target.fainted && (
						target.hp < target.maxhp ||
						target.status ||
						target.moveSlots.some(moveSlot => moveSlot.pp < moveSlot.maxpp)
					)
				) {
					target.heal(target.maxhp);
					target.clearStatus();
					for (const moveSlot of target.moveSlots) {
						moveSlot.pp = moveSlot.maxpp;
					}
					this.add('-heal', target, target.getHealth, '[from] move: Lunar Dance');
					target.side.removeSlotCondition(target, 'lunardance');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	lunge: {
		num: 679,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Lunge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	lusterpurge: {
		num: 295,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Luster Purge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	machpunch: {
		num: 183,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Mach Punch",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	magicalleaf: {
		num: 345,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Magical Leaf",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	magicaltorque: {
		num: 900,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Magical Torque",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fairy",
	},
	magiccoat: {
		num: 277,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Magic Coat",
		pp: 15,
		priority: 4,
		flags: {},
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
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 2}},
		contestType: "Beautiful",
	},
	magicpowder: {
		num: 750,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Magic Powder",
		pp: 20,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Psychic' || !target.setType('Psychic')) return false;
			this.add('-start', target, 'typechange', 'Psychic');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	magicroom: {
		num: 478,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magic Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'magicroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Magic Room');
					return 7;
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
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	magmastorm: {
		num: 463,
		accuracy: 75,
		basePower: 100,
		category: "Special",
		name: "Magma Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	magnetbomb: {
		num: 443,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnet Bomb",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	magneticflux: {
		num: 602,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnetic Flux",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, distance: 1, bypasssub: 1},
		onHitSide(side, source, move) {
			const targets = side.allies().filter(ally => (
				ally.hasAbility(['plus', 'minus']) &&
				(!ally.volatiles['maxguard'] || this.runEvent('TryHit', ally, source, move))
			));
			if (!targets.length) return false;

			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({def: 1, spd: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	magnetrise: {
		num: 393,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnet Rise",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, gravity: 1},
		volatileStatus: 'magnetrise',
		onTry(source, target, move) {
			if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;

			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'Magnet Rise');
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onResidualOrder: 18,
			onEnd(target) {
				this.add('-end', target, 'Magnet Rise');
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	magnitude: {
		num: 222,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Magnitude",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 5) {
				move.magnitude = 4;
				move.basePower = 10;
			} else if (i < 15) {
				move.magnitude = 5;
				move.basePower = 30;
			} else if (i < 35) {
				move.magnitude = 6;
				move.basePower = 50;
			} else if (i < 65) {
				move.magnitude = 7;
				move.basePower = 70;
			} else if (i < 85) {
				move.magnitude = 8;
				move.basePower = 90;
			} else if (i < 95) {
				move.magnitude = 9;
				move.basePower = 110;
			} else {
				move.magnitude = 10;
				move.basePower = 150;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.add('-activate', pokemon, 'move: Magnitude', move.magnitude);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		zMove: {basePower: 140},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	makeitrain: {
		num: 874,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Make It Rain",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Steel",
		contestType: "Beautiful",
	},
	maliciousmoonsault: {
		num: 696,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Malicious Moonsault",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "inciniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	matblock: {
		num: 561,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mat Block",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		stallingMove: true,
		sideCondition: 'matblock',
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("Mat Block only works on your first turn out.");
				return false;
			}
			return !!this.queue.willAct();
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Mat Block');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move && (move.target === 'self' || move.category === 'Status')) return;
				this.add('-activate', target, 'move: Mat Block', move.name);
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	maxairstream: {
		num: 766,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Airstream",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spe: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
	},
	maxdarkness: {
		num: 772,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Darkness",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spd: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Dark",
		contestType: "Cool",
	},
	maxflare: {
		num: 757,
		accuracy: true,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Flare",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('sunnyday');
			},
		},
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	maxflutterby: {
		num: 758,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Flutterby",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spa: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	maxgeyser: {
		num: 765,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Geyser",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('raindance');
			},
		},
		target: "adjacentFoe",
		type: "Water",
		contestType: "Cool",
	},
	maxguard: {
		num: 743,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Max Guard",
		pp: 10,
		priority: 4,
		flags: {},
		isMax: true,
		stallingMove: true,
		volatileStatus: 'maxguard',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Max Guard');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				const bypassesMaxGuard = [
					'acupressure', 'afteryou', 'allyswitch', 'aromatherapy', 'aromaticmist', 'coaching', 'confide', 'copycat', 'curse', 'decorate', 'doomdesire', 'feint', 'futuresight', 'gmaxoneblow', 'gmaxrapidflow', 'healbell', 'holdhands', 'howl', 'junglehealing', 'lifedew', 'meanlook', 'perishsong', 'playnice', 'powertrick', 'roar', 'roleplay', 'tearfullook',
				];
				if (bypassesMaxGuard.includes(move.id)) return;
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Max Guard');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cool",
	},
	maxhailstorm: {
		num: 763,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Hailstorm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('hail');
			},
		},
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
	},
	maxknuckle: {
		num: 761,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Knuckle",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({atk: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Fighting",
		contestType: "Cool",
	},
	maxlightning: {
		num: 759,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Lightning",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('electricterrain');
			},
		},
		target: "adjacentFoe",
		type: "Electric",
		contestType: "Cool",
	},
	maxmindstorm: {
		num: 769,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Mindstorm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('psychicterrain');
			},
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
	},
	maxooze: {
		num: 764,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Ooze",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spa: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
	},
	maxovergrowth: {
		num: 773,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Overgrowth",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('grassyterrain');
			},
		},
		target: "adjacentFoe",
		type: "Grass",
		contestType: "Cool",
	},
	maxphantasm: {
		num: 762,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Phantasm",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({def: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Cool",
	},
	maxquake: {
		num: 771,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Quake",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spd: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ground",
		contestType: "Cool",
	},
	maxrockfall: {
		num: 770,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Rockfall",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setWeather('sandstorm');
			},
		},
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
	},
	maxstarfall: {
		num: 767,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Starfall",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setTerrain('mistyterrain');
			},
		},
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	maxsteelspike: {
		num: 774,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Steelspike",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({def: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	maxstrike: {
		num: 760,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Strike",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({spe: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Normal",
		contestType: "Cool",
	},
	maxwyrmwind: {
		num: 768,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "Max Wyrmwind",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.foes()) {
					this.boost({atk: -1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Dragon",
		contestType: "Cool",
	},
	meanlook: {
		num: 212,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mean Look",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	meditate: {
		num: 96,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Meditate",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	mefirst: {
		num: 382,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Me First",
		pp: 20,
		priority: 0,
		flags: {protect: 1, bypasssub: 1},
		onTryHit(target, pokemon) {
			const action = this.queue.willMove(target);
			if (!action) return false;

			const noMeFirst = [
				'beakblast', 'chatter', 'counter', 'covet', 'focuspunch', 'mefirst', 'metalburst', 'mirrorcoat', 'shelltrap', 'struggle', 'thief',
			];
			const move = this.dex.getActiveMove(action.move.id);
			if (action.zmove || move.isZ || move.isMax) return false;
			if (target.volatiles['mustrecharge']) return false;
			if (move.category === 'Status' || noMeFirst.includes(move.id)) return false;

			pokemon.addVolatile('mefirst');
			this.actions.useMove(move, pokemon, target);
			return null;
		},
		condition: {
			duration: 1,
			onBasePowerPriority: 12,
			onBasePower(basePower) {
				return this.chainModify(1.5);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	megadrain: {
		num: 72,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Mega Drain",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 120},
		contestType: "Clever",
	},
	megahorn: {
		num: 224,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Megahorn",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	megakick: {
		num: 25,
		accuracy: 75,
		basePower: 120,
		category: "Physical",
		name: "Mega Kick",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	megapunch: {
		num: 5,
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		name: "Mega Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	memento: {
		num: 262,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Memento",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {
			atk: -2,
			spa: -2,
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Tough",
	},
	menacingmoonrazemaelstrom: {
		num: 725,
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Past",
		name: "Menacing Moonraze Maelstrom",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "lunaliumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	metalburst: {
		num: 368,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			const lastDamagedBy = pokemon.getLastDamagedBy(true);
			if (lastDamagedBy !== undefined) {
				return (lastDamagedBy.damage * 1.5) || 1;
			}
			return 0;
		},
		category: "Physical",
		name: "Metal Burst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy === undefined || !lastDamagedBy.thisTurn) return false;
		},
		onModifyTarget(targetRelayVar, source, target, move) {
			const lastDamagedBy = source.getLastDamagedBy(true);
			if (lastDamagedBy) {
				targetRelayVar.target = this.getAtSlot(lastDamagedBy.slot);
			}
		},
		secondary: null,
		target: "scripted",
		type: "Steel",
		contestType: "Cool",
	},
	metalclaw: {
		num: 232,
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	metalsound: {
		num: 319,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Metal Sound",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	meteorassault: {
		num: 794,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		isNonstandard: "Past",
		name: "Meteor Assault",
		pp: 5,
		priority: 0,
		flags: {protect: 1, recharge: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	meteorbeam: {
		num: 800,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Meteor Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spa: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	meteormash: {
		num: 309,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	metronome: {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Metronome",
		pp: 10,
		priority: 0,
		flags: {},
		noMetronome: [
			"After You", "Apple Acid", "Armor Cannon", "Assist", "Astral Barrage", "Aura Wheel", "Baneful Bunker", "Beak Blast", "Behemoth Bash", "Behemoth Blade", "Belch", "Bestow", "Blazing Torque", "Body Press", "Branch Poke", "Breaking Swipe", "Celebrate", "Chatter", "Chilling Water", "Chilly Reception", "Clangorous Soul", "Collision Course", "Combat Torque", "Comeuppance", "Copycat", "Counter", "Covet", "Crafty Shield", "Decorate", "Destiny Bond", "Detect", "Diamond Storm", "Doodle", "Double Iron Bash", "Double Shock", "Dragon Ascent", "Dragon Energy", "Drum Beating", "Dynamax Cannon", "Electro Drift", "Endure", "Eternabeam", "False Surrender", "Feint", "Fiery Wrath", "Fillet Away", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Freezing Glare", "Glacial Lance", "Grav Apple", "Helping Hand", "Hold Hands", "Hyper Drill", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "Instruct", "Jet Punch", "Jungle Healing", "King's Shield", "Life Dew", "Light of Ruin", "Magical Torque", "Make It Rain", "Mat Block", "Me First", "Meteor Assault", "Metronome", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Move", "Moongeist Beam", "Nature Power", "Nature's Madness", "Noxious Torque", "Obstruct", "Order Up", "Origin Pulse", "Overdrive", "Photon Geyser", "Plasma Fists", "Population Bomb", "Pounce", "Power Shift", "Precipice Blades", "Protect", "Pyro Ball", "Quash", "Quick Guard", "Rage Fist", "Rage Powder", "Raging Bull", "Raging Fury", "Relic Song", "Revival Blessing", "Ruination", "Salt Cure", "Secret Sword", "Shed Tail", "Shell Trap", "Silk Trap", "Sketch", "Sleep Talk", "Snap Trap", "Snarl", "Snatch", "Snore", "Snowscape", "Spectral Thief", "Spicy Extract", "Spiky Shield", "Spirit Break", "Spotlight", "Springtide Storm", "Steam Eruption", "Steel Beam", "Strange Steam", "Struggle", "Sunsteel Strike", "Surging Strikes", "Switcheroo", "Techno Blast", "Thief", "Thousand Arrows", "Thousand Waves", "Thunder Cage", "Thunderous Kick", "Tidy Up", "Trailblaze", "Transform", "Trick", "Twin Beam", "V-create", "Wicked Blow", "Wicked Torque", "Wide Guard",
		],
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				!effect.noMetronome!.includes(move.name)
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	milkdrink: {
		num: 208,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Milk Drink",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	mimic: {
		num: 102,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mimic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const disallowedMoves = [
				'behemothbash', 'behemothblade', 'chatter', 'dynamaxcannon', 'mimic', 'sketch', 'struggle', 'transform',
			];
			const move = target.lastMove;
			if (source.transformed || !move || disallowedMoves.includes(move.id) || source.moves.includes(move.id)) {
				return false;
			}
			if (move.isZ || move.isMax) return false;
			const mimicIndex = source.moves.indexOf('mimic');
			if (mimicIndex < 0) return false;

			source.moveSlots[mimicIndex] = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
				virtual: true,
			};
			this.add('-start', source, 'Mimic', move.name);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	mindblown: {
		num: 720,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		isNonstandard: "Past",
		name: "Mind Blown",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Mind Blown'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
	},
	mindreader: {
		num: 170,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mind Reader",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Mind Reader', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	minimize: {
		num: 107,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Minimize",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'minimize',
		condition: {
			noCopy: true,
			onRestart: () => null,
			onSourceModifyDamage(damage, source, target, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return this.chainModify(2);
				}
			},
			onAccuracy(accuracy, target, source, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return true;
				}
				return accuracy;
			},
		},
		boosts: {
			evasion: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	miracleeye: {
		num: 357,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Miracle Eye",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'miracleeye',
		onTryHit(target) {
			if (target.volatiles['foresight']) return false;
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Miracle Eye');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Dark') && type === 'Psychic') return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	mirrorcoat: {
		num: 243,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['mirrorcoat']) return 0;
			return pokemon.volatiles['mirrorcoat'].damage || 1;
		},
		category: "Special",
		name: "Mirror Coat",
		pp: 20,
		priority: -5,
		flags: {protect: 1},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('mirrorcoat');
		},
		onTry(source) {
			if (!source.volatiles['mirrorcoat']) return false;
			if (source.volatiles['mirrorcoat'].slot === null) return false;
		},
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2, move) {
				if (move.id !== 'mirrorcoat') return;
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagingHit(damage, target, source, move) {
				if (!source.isAlly(target) && this.getCategory(move) === 'Special') {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Psychic",
		contestType: "Beautiful",
	},
	mirrormove: {
		num: 119,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mirror Move",
		pp: 20,
		priority: 0,
		flags: {},
		onTryHit(target, pokemon) {
			const move = target.lastMove;
			if (!move?.flags['mirror'] || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {atk: 2}},
		contestType: "Clever",
	},
	mirrorshot: {
		num: 429,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mirror Shot",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	mist: {
		num: 54,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mist",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'mist',
		condition: {
			duration: 5,
			onBoost(boost, target, source, effect) {
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (source && target !== source) {
					let showMsg = false;
					let i: BoostID;
					for (i in boost) {
						if (boost[i]! < 0) {
							delete boost[i];
							showMsg = true;
						}
					}
					if (showMsg && !(effect as ActiveMove).secondaries) {
						this.add('-activate', target, 'move: Mist');
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Mist');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 4,
			onSideEnd(side) {
				this.add('-sideend', side, 'Mist');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	mistball: {
		num: 296,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		isNonstandard: "Past",
		name: "Mist Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	mistyexplosion: {
		num: 802,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Misty Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		onBasePower(basePower, source) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				this.debug('misty terrain boost');
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
	},
	mistyterrain: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Misty Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'mistyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
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
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	moonblast: {
		num: 585,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Moonblast",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	moongeistbeam: {
		num: 714,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Moongeist Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	moonlight: {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	morningsun: {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	mortalspin: {
		num: 866,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Mortal Spin",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Mortal Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mortal Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		secondary: {
			chance: 100,
			status: 'psn',
		},
		target: "allAdjacentFoes",
		type: "Poison",
	},
	mountaingale: {
		num: 836,
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Mountain Gale",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
	},
	mudbomb: {
		num: 426,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Mud Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
	},
	mudshot: {
		num: 341,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Mud Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	mudslap: {
		num: 189,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Mud-Slap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
	},
	mudsport: {
		num: 300,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'mudsport',
		condition: {
			duration: 5,
			onFieldStart(field, source) {
				this.add('-fieldstart', 'move: Mud Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('mud sport weaken');
					return this.chainModify([1352, 4096]);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 4,
			onFieldEnd() {
				this.add('-fieldend', 'move: Mud Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	muddywater: {
		num: 330,
		accuracy: 85,
		basePower: 90,
		category: "Special",
		name: "Muddy Water",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough",
	},
	multiattack: {
		num: 718,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Past",
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Memory', pokemon, null, move, 'Normal');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 185},
		maxMove: {basePower: 95},
		contestType: "Tough",
	},
	mysticalfire: {
		num: 595,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Mystical Fire",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	mysticalpower: {
		num: 832,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Mystical Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Psychic",
	},
	nastyplot: {
		num: 417,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nasty Plot",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 2,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	naturalgift: {
		num: 363,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		isNonstandard: "Past",
		name: "Natural Gift",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (!item.naturalGift) return;
			move.type = item.naturalGift.type;
		},
		onPrepareHit(target, pokemon, move) {
			if (pokemon.ignoringItem()) return false;
			const item = pokemon.getItem();
			if (!item.naturalGift) return false;
			move.basePower = item.naturalGift.basePower;
			this.debug('BP: ' + move.basePower);
			pokemon.setItem('');
			pokemon.lastItem = item.id;
			pokemon.usedItemThisTurn = true;
			this.runEvent('AfterUseItem', pokemon, null, null, item);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	naturepower: {
		num: 267,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Nature Power",
		pp: 20,
		priority: 0,
		flags: {},
		onTryHit(target, pokemon) {
			let move = 'triattack';
			if (this.field.isTerrain('electricterrain')) {
				move = 'thunderbolt';
			} else if (this.field.isTerrain('grassyterrain')) {
				move = 'energyball';
			} else if (this.field.isTerrain('mistyterrain')) {
				move = 'moonblast';
			} else if (this.field.isTerrain('psychicterrain')) {
				move = 'psychic';
			} else if (this.field.isTerrain('plasticterrain')) {
				move = 'recycleray';
			}
			const fullMove = this.dex.getActiveMove(move);
			fullMove.flags = {...fullMove.flags, naturePower: 1};
			this.actions.useMove(move, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	naturesmadness: {
		num: 717,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Nature's Madness",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	needlearm: {
		num: 302,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Needle Arm",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	neverendingnightmare: {
		num: 636,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Never-Ending Nightmare",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "ghostiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	nightdaze: {
		num: 539,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		name: "Night Daze",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	nightmare: {
		num: 171,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Nightmare",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'nightmare',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose') &&
				!pokemon.hasAbility('lethargic') && !pokemon.hasAbility('boardpowerz')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 11,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	nightshade: {
		num: 101,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		name: "Night Shade",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	nightslash: {
		num: 400,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Night Slash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	nobleroar: {
		num: 568,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Noble Roar",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	noretreat: {
		num: 748,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "No Retreat",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'noretreat',
		onTry(source, target, move) {
			if (source.volatiles['noretreat']) return false;
			if (source.volatiles['trapped']) {
				delete move.volatileStatus;
			}
		},
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: No Retreat');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
	},
	noxioustorque: {
		num: 898,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Noxious Torque",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	nuzzle: {
		num: 609,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Nuzzle",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cute",
	},
	oblivionwing: {
		num: 613,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Oblivion Wing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, heal: 1},
		drain: [3, 4],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	obstruct: {
		num: 792,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Obstruct",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'obstruct',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
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
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Dark",
	},
	oceanicoperetta: {
		num: 697,
		accuracy: true,
		basePower: 195,
		category: "Special",
		isNonstandard: "Past",
		name: "Oceanic Operetta",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "primariumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	octazooka: {
		num: 190,
		accuracy: 85,
		basePower: 65,
		category: "Special",
		isNonstandard: "Past",
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	octolock: {
		num: 753,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Octolock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryImmunity(target) {
			return this.dex.getImmunity('trapped', target);
		},
		volatileStatus: 'octolock',
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Octolock', '[of] ' + source);
			},
			onResidualOrder: 14,
			onResidual(pokemon) {
				const source = this.effectState.source;
				if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns)) {
					delete pokemon.volatiles['octolock'];
					this.add('-end', pokemon, 'Octolock', '[partiallytrapped]', '[silent]');
					return;
				}
				this.boost({def: -1, spd: -1}, pokemon, source, this.dex.getActiveMove('octolock'));
			},
			onTrapPokemon(pokemon) {
				if (this.effectState.source && this.effectState.source.isActive) pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	odorsleuth: {
		num: 316,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Odor Sleuth",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	ominouswind: {
		num: 466,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
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
		target: "normal",
		type: "Ghost",
		contestType: "Beautiful",
	},
	orderup: {
		num: 856,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Order Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		onUseMoveMessage(source, target, move) {
			move.orderUpBoost = true;
		},
		onAfterMove(pokemon, target, move) {
			if (!pokemon.volatiles['commanded'] || !move.orderUpBoost) return;
			const tatsugiri = pokemon.volatiles['commanded'].source;
			if (tatsugiri.baseSpecies.baseSpecies !== 'Tatsugiri') return; // Should never happen
			switch (tatsugiri.baseSpecies.forme) {
			case 'Droopy':
				this.boost({def: 1}, pokemon, pokemon);
				break;
			case 'Stretchy':
				this.boost({spe: 1}, pokemon, pokemon);
				break;
			default:
				this.boost({atk: 1}, pokemon, pokemon);
				break;
			}
		},
		secondary: null,
		hasSheerForce: true,
		target: "normal",
		type: "Dragon",
	},
	originpulse: {
		num: 618,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Origin Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
	outrage: {
		num: 200,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Outrage",
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
		type: "Dragon",
		contestType: "Cool",
	},
	overdrive: {
		num: 786,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Overdrive",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Electric",
	},
	overheat: {
		num: 315,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Overheat",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	painsplit: {
		num: 220,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pain Split",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onHit(target, pokemon) {
			const targetHP = target.getUndynamaxedHP();
			const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
			const targetChange = targetHP - averagehp;
			target.sethp(target.hp - targetChange);
			this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
			pokemon.sethp(averagehp);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	paleowave: {
		num: 0,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		isNonstandard: "CAP",
		name: "Paleo Wave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	paraboliccharge: {
		num: 570,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Parabolic Charge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Clever",
	},
	partingshot: {
		num: 575,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Parting Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -1, spa: -1}, target, source);
			if (!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
	},
	payback: {
		num: 371,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.basePower * 2;
		},
		category: "Physical",
		name: "Payback",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	payday: {
		num: 6,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pay Day",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	peck: {
		num: 64,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Peck",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	perishsong: {
		num: 195,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Perish Song",
		pp: 5,
		priority: 0,
		flags: {sound: 1, distance: 1, bypasssub: 1},
		onHitField(target, source, move) {
			let result = false;
			let message = false;
			for (const pokemon of this.getAllActive()) {
				if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
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
		condition: {
			duration: 4,
			onEnd(target) {
				this.add('-start', target, 'perish0');
				target.faint();
			},
			onResidualOrder: 24,
			onResidual(pokemon) {
				const duration = pokemon.volatiles['perishsong'].duration;
				this.add('-start', pokemon, 'perish' + duration);
			},
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	petalblizzard: {
		num: 572,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Petal Blizzard",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Grass",
		contestType: "Beautiful",
	},
	petaldance: {
		num: 80,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Petal Dance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
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
		type: "Grass",
		contestType: "Beautiful",
	},
	phantomforce: {
		num: 566,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Phantom Force",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		breaksProtect: true,
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
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	photongeyser: {
		num: 722,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Photon Geyser",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	pikapapow: {
		num: 732,
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			const bp = Math.floor((pokemon.happiness * 10) / 25) || 1;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		isNonstandard: "LGPE",
		name: "Pika Papow",
		pp: 20,
		priority: 0,
		flags: {protect: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cute",
	},
	pinmissile: {
		num: 42,
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		name: "Pin Missile",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	plasmafists: {
		num: 721,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Plasma Fists",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		pseudoWeather: 'iondeluge',
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	playnice: {
		num: 589,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Play Nice",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, bypasssub: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	playrough: {
		num: 583,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Play Rough",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	pluck: {
		num: 365,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Pluck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onHit(target, source) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Pluck', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	poisonfang: {
		num: 305,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'tox',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	poisongas: {
		num: 139,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Poison Gas",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	poisonjab: {
		num: 398,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Poison Jab",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	poisonpowder: {
		num: 77,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Poison Powder",
		pp: 35,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	poisonsting: {
		num: 40,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Poison Sting",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	poisontail: {
		num: 342,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Poison Tail",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	pollenpuff: {
		num: 676,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Pollen Puff",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1, allyanim: 1},
		onTryHit(target, source, move) {
			if (source.isAlly(target)) {
				move.basePower = 0;
				move.infiltrates = true;
			}
		},
		onHit(target, source) {
			if (source.isAlly(target)) {
				if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
					this.add('-immune', target);
					return this.NOT_FAIL;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	poltergeist: {
		num: 809,
		accuracy: 90,
		basePower: 110,
		category: "Physical",
		name: "Poltergeist",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source, target) {
			return !!target.item;
		},
		onTryHit(target, source, move) {
			this.add('-activate', target, 'move: Poltergeist', this.dex.items.get(target.item).name);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	populationbomb: {
		num: 860,
		accuracy: 90,
		basePower: 20,
		category: "Physical",
		name: "Population Bomb",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		multihit: 10,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	pounce: {
		num: 884,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Pounce",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	pound: {
		num: 1,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Pound",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	powder: {
		num: 600,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Powder",
		pp: 20,
		priority: 1,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'powder',
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Powder');
			},
			onTryMovePriority: -1,
			onTryMove(pokemon, target, move) {
				if (move.type === 'Fire') {
					this.add('-activate', pokemon, 'move: Powder');
					this.damage(this.clampIntRange(Math.round(pokemon.maxhp / 4), 1));
					this.attrLastMove('[still]');
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {boost: {spd: 2}},
		contestType: "Clever",
	},
	powdersnow: {
		num: 181,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	powergem: {
		num: 408,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Power Gem",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	powershift: {
		num: 829,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Power Shift",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'powershift',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Power Shift');
				[pokemon.storedStats.atk, pokemon.storedStats.spa,
					pokemon.storedStats.def, pokemon.storedStats.spd] =
				[pokemon.storedStats.def, pokemon.storedStats.spd,
					pokemon.storedStats.atk, pokemon.storedStats.spa];
			},
			onCopy(pokemon) {
				[pokemon.storedStats.atk, pokemon.storedStats.spa,
					pokemon.storedStats.def, pokemon.storedStats.spd] =
				[pokemon.storedStats.def, pokemon.storedStats.spd,
					pokemon.storedStats.atk, pokemon.storedStats.spa];
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Power Shift');
				[pokemon.storedStats.atk, pokemon.storedStats.spa,
					pokemon.storedStats.def, pokemon.storedStats.spd] =
				[pokemon.storedStats.def, pokemon.storedStats.spd,
					pokemon.storedStats.atk, pokemon.storedStats.spa];
			},
			onRestart(pokemon) {
				pokemon.removeVolatile('Power Shift');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	powersplit: {
		num: 471,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, allyanim: 1},
		onHit(target, source) {
			const newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
			target.storedStats.atk = newatk;
			source.storedStats.atk = newatk;
			const newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
			target.storedStats.spa = newspa;
			source.storedStats.spa = newspa;
			this.add('-activate', source, 'move: Power Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	powerswap: {
		num: 384,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			const atkSpa: BoostID[] = ['atk', 'spa'];
			for (const stat of atkSpa) {
				targetBoosts[stat] = target.boosts[stat];
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'atk, spa', '[from] move: Power Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	powertrick: {
		num: 379,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Power Trick",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'powertrick',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Power Trick');
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onCopy(pokemon) {
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Power Trick');
				const newatk = pokemon.storedStats.def;
				const newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onRestart(pokemon) {
				pokemon.removeVolatile('Power Trick');
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	powertrip: {
		num: 681,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower + 20 * pokemon.positiveBoosts();
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Power Trip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	poweruppunch: {
		num: 612,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Past",
		name: "Power-Up Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	powerwhip: {
		num: 438,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Power Whip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	precipiceblades: {
		num: 619,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Precipice Blades",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Cool",
	},
	present: {
		num: 217,
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		name: "Present",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			const rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
				move.infiltrates = true;
			} else if (rand < 6) {
				move.basePower = 40;
			} else if (rand < 9) {
				move.basePower = 80;
			} else {
				move.basePower = 120;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	prismaticlaser: {
		num: 711,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		isNonstandard: "Past",
		name: "Prismatic Laser",
		pp: 10,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	protect: {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Protect",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	psybeam: {
		num: 60,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Psybeam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	psychup: {
		num: 244,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psych Up",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1, allyanim: 1},
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
			this.add('-copyboost', source, target, '[from] move: Psych Up');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	psychic: {
		num: 94,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Psychic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychicfangs: {
		num: 706,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Psychic Fangs",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychicterrain: {
		num: 678,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Psychic Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'psychicterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
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
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	psychoboost: {
		num: 354,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		isNonstandard: "Past",
		name: "Psycho Boost",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psychocut: {
		num: 427,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Psycho Cut",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	psychoshift: {
		num: 375,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Psycho Shift",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			if (!source.status) return false;
			move.status = source.status;
		},
		self: {
			onHit(pokemon) {
				pokemon.cureStatus();
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
	},
	psyshieldbash: {
		num: 828,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Psyshield Bash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Psychic",
	},
	psyshock: {
		num: 473,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		overrideDefensiveStat: 'def',
		name: "Psyshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	psystrike: {
		num: 540,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		overrideDefensiveStat: 'def',
		name: "Psystrike",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	psywave: {
		num: 149,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			return (this.random(50, 151) * pokemon.level) / 100;
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Psywave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	pulverizingpancake: {
		num: 701,
		accuracy: true,
		basePower: 210,
		category: "Physical",
		isNonstandard: "Past",
		name: "Pulverizing Pancake",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "snorliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	punishment: {
		num: 386,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = 60 + 20 * target.positiveBoosts();
			if (power > 200) power = 200;
			this.debug('BP: ' + power);
			return power;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Punishment",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	purify: {
		num: 685,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Purify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1},
		onHit(target, source) {
			if (!target.cureStatus()) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return this.NOT_FAIL;
			}
			this.heal(Math.ceil(source.maxhp * 0.5), source);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
	},
	pursuit: {
		num: 228,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack || target.switchFlag) {
				this.debug('Pursuit damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Pursuit",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('pursuit', pokemon);
				const data = side.getSideConditionData('pursuit');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('pursuit');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Pursuit start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Pursuit');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.actions.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	pyroball: {
		num: 780,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Pyro Ball",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	quash: {
		num: 511,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Quash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			if (this.activePerHalf === 1) return false; // fails in singles
			const action = this.queue.willMove(target);
			if (!action) return false;

			action.order = 201;
			this.add('-activate', target, 'move: Quash');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	quickattack: {
		num: 98,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	quickguard: {
		num: 501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quick Guard",
		pp: 15,
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'quickguard',
		onTry() {
			return !!this.queue.willAct();
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
			onTryHit(target, source, move) {
				// Quick Guard blocks moves with positive priority, even those given increased priority by Prankster or Gale Wings.
				// (e.g. it blocks 0 priority moves boosted by Prankster or Gale Wings; Quick Claw/Custap Berry do not count)
				if (move.priority <= 0.1) return;
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Quick Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	quiverdance: {
		num: 483,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quiver Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	rage: {
		num: 99,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rage",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'rage',
		},
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Rage');
			},
			onHit(target, source, move) {
				if (target !== source && move.category !== 'Status') {
					this.boost({atk: 1});
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Rage before attack');
				pokemon.removeVolatile('rage');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	ragefist: {
		num: 889,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon) {
			return Math.min(350, 50 + 50 * pokemon.timesAttacked);
		},
		category: "Physical",
		name: "Rage Fist",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	ragepowder: {
		num: 476,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rage Powder",
		pp: 20,
		priority: 2,
		flags: {powder: 1},
		volatileStatus: 'ragepowder',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Rage Powder');
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				const ragePowderUser = this.effectState.target;
				if (ragePowderUser.isSkyDropped()) return;

				if (source.runStatusImmunity('powder') && this.validTarget(ragePowderUser, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Rage Powder redirected target of move");
					return ragePowderUser;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	ragingbull: {
		num: 873,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Raging Bull",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		onModifyType(move, pokemon) {
			switch (pokemon.species.name) {
			case 'Tauros-Paldea':
				move.type = 'Fighting';
				break;
			case 'Tauros-Paldea-Fire':
				move.type = 'Fire';
				break;
			case 'Tauros-Paldea-Water':
				move.type = 'Water';
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	ragingfury: {
		num: 833,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Raging Fury",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove']?.duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Fire",
	},
	raindance: {
		num: 240,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rain Dance",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'RainDance',
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	rapidspin: {
		num: 229,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	razorleaf: {
		num: 75,
		accuracy: 95,
		basePower: 55,
		category: "Physical",
		name: "Razor Leaf",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Cool",
	},
	razorshell: {
		num: 534,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
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
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	recover: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recover",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	recycle: {
		num: 278,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recycle",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (pokemon.item || !pokemon.lastItem) return false;
			const item = pokemon.lastItem;
			pokemon.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Recycle');
			pokemon.setItem(item);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	reflect: {
		num: 115,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'reflect',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
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
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	reflecttype: {
		num: 513,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect Type",
		pp: 15,
		priority: 0,
		flags: {protect: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			if (source.species && (source.species.num === 493 || source.species.num === 773)) return false;
			if (source.terastallized) return false;
			const oldApparentType = source.apparentType;
			let newBaseTypes = target.getTypes(true).filter(type => type !== '???');
			if (!newBaseTypes.length) {
				if (target.addedType) {
					newBaseTypes = ['Normal'];
				} else {
					return false;
				}
			}
			this.add('-start', source, 'typechange', '[from] move: Reflect Type', '[of] ' + target);
			source.setType(newBaseTypes);
			source.addedType = target.addedType;
			source.knownType = target.isAlly(source) && target.knownType;
			if (!source.knownType) source.apparentType = oldApparentType;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	refresh: {
		num: 287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Refresh",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
	},
	relicsong: {
		num: 547,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Relic Song",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		onHit(target, pokemon, move) {
			if (pokemon.baseSpecies.baseSpecies === 'Meloetta' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				const meloettaForme = pokemon.species.id === 'meloettapirouette' ? '' : '-Pirouette';
				pokemon.formeChange('Meloetta' + meloettaForme, this.effect, false, '[msg]');
			}
		},
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Beautiful",
	},
	rest: {
		num: 156,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rest",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			if (source.status === 'slp' || source.hasAbility('comatose') || source.hasAbility('boardpowerz')) return false;

			if (source.hp === source.maxhp) {
				this.add('-fail', source, 'heal');
				return null;
			}
			if (source.hasAbility(['insomnia', 'vitalspirit'])) {
				this.add('-fail', source, '[from] ability: ' + source.getAbility().name, '[of] ' + source);
				return null;
			}
		},
		onHit(target, source, move) {
			const result = target.setStatus('slp', source, move);
			if (!result) return result;
			target.statusState.time = 3;
			target.statusState.startTime = 3;
			this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	retaliate: {
		num: 514,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Retaliate",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.side.faintedLastTurn) {
				this.debug('Boosted for a faint last turn');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	return: {
		num: 216,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Return",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	revelationdance: {
		num: 686,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Revelation Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	revenge: {
		num: 279,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('BP doubled for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Revenge",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	reversal: {
		num: 179,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const ratio = Math.max(Math.floor(pokemon.hp * 48 / pokemon.maxhp), 1);
			let bp;
			if (ratio < 2) {
				bp = 200;
			} else if (ratio < 5) {
				bp = 150;
			} else if (ratio < 10) {
				bp = 100;
			} else if (ratio < 17) {
				bp = 80;
			} else if (ratio < 33) {
				bp = 40;
			} else {
				bp = 20;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Reversal",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		contestType: "Cool",
	},
	revivalblessing: {
		num: 863,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Revival Blessing",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {},
		onTryHit(source) {
			if (!source.side.pokemon.filter(ally => ally.fainted).length) {
				return false;
			}
		},
		slotCondition: 'revivalblessing',
		// No this not a real switchout move
		// This is needed to trigger a switch protocol to choose a fainted party member
		// Feel free to refactor
		selfSwitch: true,
		condition: {
			duration: 1,
			// reviving implemented in side.ts, kind of
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	risingvoltage: {
		num: 804,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(source, target, move) {
			if (this.field.isTerrain('electricterrain') && target.isGrounded()) {
				if (!source.isAlly(target)) this.hint(`${move.name}'s BP doubled on grounded target.`);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Rising Voltage",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		maxMove: {basePower: 140},
	},
	roar: {
		num: 46,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roar",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	roaroftime: {
		num: 459,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		name: "Roar of Time",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	rockblast: {
		num: 350,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Rock Blast",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},
	rockclimb: {
		num: 431,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rock Climb",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	rockpolish: {
		num: 397,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rock Polish",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	rockslide: {
		num: 157,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Tough",
	},
	rocksmash: {
		num: 249,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Rock Smash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	rockthrow: {
		num: 88,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		name: "Rock Throw",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	rocktomb: {
		num: 317,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		name: "Rock Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	rockwrecker: {
		num: 439,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rock Wrecker",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	roleplay: {
		num: 272,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Role Play",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1, allyanim: 1},
		onTryHit(target, source) {
			if (target.ability === source.ability) return false;

			const additionalBannedTargetAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard', 'zenmode',
			];

			if (target.getAbility().isPermanent || additionalBannedTargetAbilities.includes(target.ability) ||
				source.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, source.getAbility().name, '[from] move: Role Play', '[of] ' + target);
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	rollingkick: {
		num: 27,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Rolling Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	rollout: {
		num: 205,
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			const rolloutData = pokemon.volatiles['rollout'];
			if (rolloutData?.hitCount) {
				bp *= Math.pow(2, rolloutData.contactHitCount);
			}
			if (rolloutData && pokemon.status !== 'slp') {
				rolloutData.hitCount++;
				rolloutData.contactHitCount++;
				if (rolloutData.hitCount < 5) {
					rolloutData.duration = 2;
				}
			}
			if (pokemon.volatiles['defensecurl']) {
				bp *= 2;
			}
			this.debug("BP: " + bp);
			return bp;
		},
		category: "Physical",
		name: "Rollout",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			if (pokemon.volatiles['rollout'] || pokemon.status === 'slp' || !target) return;
			pokemon.addVolatile('rollout');
			// @ts-ignore
			// TS thinks pokemon.volatiles['rollout'] doesn't exist because of the condition on the return above
			// but it does exist now because addVolatile created it
			pokemon.volatiles['rollout'].targetSlot = move.sourceEffect ? pokemon.lastMoveTargetLoc : pokemon.getLocOf(target);
		},
		onAfterMove(source, target, move) {
			const rolloutData = source.volatiles["rollout"];
			if (
				rolloutData &&
				rolloutData.hitCount === 5 &&
				rolloutData.contactHitCount < 5
				// this conditions can only be met in gen7 and gen8dlc1
				// see `disguise` and `iceface` abilities in the resp mod folders
			) {
				source.addVolatile("rolloutstorage");
				source.volatiles["rolloutstorage"].contactHitCount =
					rolloutData.contactHitCount;
			}
		},
		condition: {
			duration: 1,
			onLockMove: 'rollout',
			onStart() {
				this.effectState.hitCount = 0;
				this.effectState.contactHitCount = 0;
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['rollout'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
	},
	roost: {
		num: 355,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roost",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		self: {
			volatileStatus: 'roost',
		},
		condition: {
			duration: 1,
			onResidualOrder: 25,
			onStart(target) {
				if (!target.terastallized) {
					this.add('-singleturn', target, 'move: Roost');
				} else if (target.terastallized === "Flying") {
					this.add('-hint', "If a Flying Terastallized Pokemon uses Roost, it remains Flying-type.");
				}
			},
			onTypePriority: -1,
			onType(types, pokemon) {
				this.effectState.typeWas = types;
				return types.filter(type => type !== 'Flying');
			},
		},
		secondary: null,
		target: "self",
		type: "Flying",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	rototiller: {
		num: 563,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Rototiller",
		pp: 10,
		priority: 0,
		flags: {distance: 1, nonsky: 1},
		onHitField(target, source) {
			const targets: Pokemon[] = [];
			let anyAirborne = false;
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.runImmunity('Ground')) {
					this.add('-immune', pokemon);
					anyAirborne = true;
					continue;
				}
				if (pokemon.hasType('Grass')) {
					// This move affects every grounded Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({atk: 1, spa: 1}, pokemon, source);
			}
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
	},
	round: {
		num: 496,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(target, source, move) {
			if (move.sourceEffect === 'round') {
				this.debug('BP doubled');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Round",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		onTry(source, target, move) {
			for (const action of this.queue.list as MoveAction[]) {
				if (!action.pokemon || !action.move || action.maxMove || action.zmove) continue;
				if (action.move.id === 'round') {
					this.queue.prioritizeAction(action, move);
					return;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	ruination: {
		num: 877,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.getUndynamaxedHP() / 2), 1);
		},
		category: "Special",
		name: "Ruination",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	sacredfire: {
		num: 221,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sacred Fire",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	sacredsword: {
		num: 533,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Sacred Sword",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	safeguard: {
		num: 219,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Safeguard",
		pp: 25,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'safeguard',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Safeguard');
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.id === 'yawn') return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'Safeguard', '[persistent]');
				} else {
					this.add('-sidestart', side, 'Safeguard');
				}
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 3,
			onSideEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	saltcure: {
		num: 864,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Salt Cure",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Salt Cure');
			},
			onResidualOrder: 13,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Water', 'Steel']) ? 4 : 8));
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Salt Cure');
			},
		},
		secondary: {
			chance: 100,
			volatileStatus: 'saltcure',
		},
		target: "normal",
		type: "Rock",
	},
	sandattack: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sand Attack",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
	},
	sandsearstorm: {
		num: 848,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Sandsear Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Ground",
	},
	sandstorm: {
		num: 201,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sandstorm",
		pp: 10,
		priority: 0,
		flags: {wind: 1},
		weather: 'Sandstorm',
		secondary: null,
		target: "all",
		type: "Rock",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	sandtomb: {
		num: 328,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		name: "Sand Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	sappyseed: {
		num: 738,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sappy Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	savagespinout: {
		num: 634,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Savage Spin-Out",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "buginiumz",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	scald: {
		num: 503,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Scald",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	scaleshot: {
		num: 799,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		name: "Scale Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		selfBoost: {
			boosts: {
				def: -1,
				spe: 1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
	},
	scaryface: {
		num: 184,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Scary Face",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	scorchingsands: {
		num: 815,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Scorching Sands",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ground",
	},
	scratch: {
		num: 10,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Scratch",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	screech: {
		num: 103,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Screech",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		boosts: {
			def: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	searingshot: {
		num: 545,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		isNonstandard: "Past",
		name: "Searing Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Cool",
	},
	searingsunrazesmash: {
		num: 724,
		accuracy: true,
		basePower: 200,
		category: "Physical",
		isNonstandard: "Past",
		name: "Searing Sunraze Smash",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "solganiumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	secretpower: {
		num: 290,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Secret Power",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (this.field.isTerrain('')) return;
			move.secondaries = [];
			if (this.field.isTerrain('electricterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'par',
				});
			} else if (this.field.isTerrain('grassyterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'slp',
				});
			} else if (this.field.isTerrain('mistyterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spa: -1,
					},
				});
			} else if (this.field.isTerrain('psychicterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spe: -1,
					},
				});
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	secretsword: {
		num: 548,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		isNonstandard: "Past",
		overrideDefensiveStat: 'def',
		name: "Secret Sword",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Beautiful",
	},
	seedbomb: {
		num: 402,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Seed Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	seedflare: {
		num: 465,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Seed Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	seismictoss: {
		num: 69,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		name: "Seismic Toss",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
	selfdestruct: {
		num: 120,
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		name: "Self-Destruct",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},
	shadowball: {
		num: 247,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Shadow Ball",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowbone: {
		num: 708,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Past",
		name: "Shadow Bone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowclaw: {
		num: 421,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Shadow Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowforce: {
		num: 467,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Shadow Force",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		breaksProtect: true,
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
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	shadowpunch: {
		num: 325,
		accuracy: true,
		basePower: 60,
		category: "Physical",
		name: "Shadow Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowsneak: {
		num: 425,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Shadow Sneak",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	shadowstrike: {
		num: 0,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Shadow Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	sharpen: {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sharpen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	shatteredpsyche: {
		num: 648,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Shattered Psyche",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "psychiumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	shedtail: {
		num: 880,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shed Tail",
		pp: 10,
		priority: 0,
		flags: {},
		volatileStatus: 'substitute',
		onTryHit(source) {
			if (!this.canSwitch(source.side)) {
				this.add('-fail', source);
				return this.NOT_FAIL;
			}
			if (source.volatiles['substitute']) {
				this.add('-fail', source, 'move: Shed Tail');
				return this.NOT_FAIL;
			}
			if (source.hp <= Math.ceil(source.maxhp / 2)) {
				this.add('-fail', source, 'move: Shed Tail', '[weak]');
				return this.NOT_FAIL;
			}
		},
		onHit(target) {
			this.directDamage(Math.ceil(target.maxhp / 2));
		},
		self: {
			onHit(source) {
				source.skipBeforeSwitchOutEventFlag = true;
			},
		},
		selfSwitch: 'shedtail',
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
	},
	sheercold: {
		num: 329,
		accuracy: 30,
		basePower: 0,
		category: "Special",
		name: "Sheer Cold",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		ohko: 'Ice',
		target: "normal",
		type: "Ice",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	shellsidearm: {
		num: 801,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Shell Side Arm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			if (!source.isAlly(target)) {
				this.attrLastMove('[anim] Shell Side Arm ' + move.category);
			}
		},
		onModifyMove(move, pokemon, target) {
			if (!target) return;
			const atk = pokemon.getStat('atk', false, true);
			const spa = pokemon.getStat('spa', false, true);
			const def = target.getStat('def', false, true);
			const spd = target.getStat('spd', false, true);
			const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
			const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
			if (physical > special || (physical === special && this.random(2) === 0)) {
				move.category = 'Physical';
				move.flags.contact = 1;
			}
		},
		onHit(target, source, move) {
			// Shell Side Arm normally reveals its category via animation on cart, but doesn't play either custom animation against allies
			if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!source.isAlly(target)) this.hint(move.category + " Shell Side Arm");
		},
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	shellsmash: {
		num: 504,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shell Smash",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	shelltrap: {
		num: 704,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		isNonstandard: "Past",
		name: "Shell Trap",
		pp: 5,
		priority: -3,
		flags: {protect: 1},
		priorityChargeCallback(pokemon) {
			pokemon.addVolatile('shelltrap');
		},
		onTryMove(pokemon) {
			if (!pokemon.volatiles['shelltrap']?.gotHit) {
				this.attrLastMove('[still]');
				this.add('cant', pokemon, 'Shell Trap', 'Shell Trap');
				return null;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Shell Trap');
			},
			onHit(pokemon, source, move) {
				if (!pokemon.isAlly(source) && move.category === 'Physical') {
					this.effectState.gotHit = true;
					const action = this.queue.willMove(pokemon);
					if (action) {
						this.queue.prioritizeAction(action);
					}
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Tough",
	},
	shelter: {
		num: 842,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Shelter",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
	},
	shiftgear: {
		num: 508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shift Gear",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
			atk: 1,
		},
		secondary: null,
		volatileStatus: 'shiftgear',
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	shockwave: {
		num: 351,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Shock Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	shoreup: {
		num: 659,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shore Up",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('sandstorm')) {
				factor = 0.667;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	signalbeam: {
		num: 324,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Past",
		name: "Signal Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	silktrap: {
		num: 852,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Silk Trap",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'silktrap',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
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
					this.boost({spe: -1}, source, target, this.dex.getActiveMove("Silk Trap"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({spe: -1}, source, target, this.dex.getActiveMove("Silk Trap"));
				}
			},
		},
		target: "self",
		type: "Bug",
	},
	silverwind: {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Past",
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
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
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	simplebeam: {
		num: 493,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Simple Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onTryHit(target) {
			if (target.getAbility().isPermanent || target.ability === 'simple' || target.ability === 'truant') {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('simple');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	sing: {
		num: 47,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	sinisterarrowraid: {
		num: 695,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sinister Arrow Raid",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "decidiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	sizzlyslide: {
		num: 735,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Sizzly Slide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, defrost: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	sketch: {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Sketch",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const disallowedMoves = ['chatter', 'sketch', 'struggle'];
			const move = target.lastMove;
			if (source.transformed || !move || source.moves.includes(move.id)) return false;
			if (disallowedMoves.includes(move.id) || move.isZ || move.isMax) return false;
			const sketchIndex = source.moves.indexOf('sketch');
			if (sketchIndex < 0) return false;
			const sketchedMove = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
			};
			source.moveSlots[sketchIndex] = sketchedMove;
			source.baseMoveSlots[sketchIndex] = sketchedMove;
			this.add('-activate', source, 'move: Sketch', move.name);
		},
		noSketch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Clever",
	},
	skillswap: {
		num: 285,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Skill Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onTryHit(target, source) {
			const additionalBannedAbilities = ['hungerswitch', 'illusion', 'neutralizinggas', 'wonderguard'];
			const targetAbility = target.getAbility();
			const sourceAbility = source.getAbility();
			// TODO: research in what order these should be checked
			if (
				target.volatiles['dynamax'] ||
				targetAbility.isPermanent || sourceAbility.isPermanent ||
				additionalBannedAbilities.includes(target.ability) || additionalBannedAbilities.includes(source.ability)
			) {
				return false;
			}
			const sourceCanBeSet = this.runEvent('SetAbility', source, source, this.effect, targetAbility);
			if (!sourceCanBeSet) return sourceCanBeSet;
			const targetCanBeSet = this.runEvent('SetAbility', target, source, this.effect, sourceAbility);
			if (!targetCanBeSet) return targetCanBeSet;
		},
		onHit(target, source, move) {
			const targetAbility = target.getAbility();
			const sourceAbility = source.getAbility();
			if (target.isAlly(source)) {
				this.add('-activate', source, 'move: Skill Swap', '', '', '[of] ' + target);
			} else {
				this.add('-activate', source, 'move: Skill Swap', targetAbility, sourceAbility, '[of] ' + target);
			}
			this.singleEvent('End', sourceAbility, source.abilityState, source);
			this.singleEvent('End', targetAbility, target.abilityState, target);
			source.ability = targetAbility.id;
			target.ability = sourceAbility.id;
			source.abilityState = {id: this.toID(source.ability), target: source};
			target.abilityState = {id: this.toID(target.ability), target: target};
			if (!target.isAlly(source)) target.volatileStaleness = 'external';
			this.singleEvent('Start', targetAbility, source.abilityState, source);
			this.singleEvent('Start', sourceAbility, target.abilityState, target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	skittersmack: {
		num: 806,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Skitter Smack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Bug",
	},
	skullbash: {
		num: 130,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		isNonstandard: "Past",
		name: "Skull Bash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({def: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	skyattack: {
		num: 143,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
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
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	skydrop: {
		num: 507,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				delete move.flags['contact'];
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Sky Drop', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}
				if (target.getWeight() >= 2000) {
					this.add('-fail', target, 'move: Sky Drop', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Sky Drop');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					this.debug('BP doubled on midair target');
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Tough",
	},
	skyuppercut: {
		num: 327,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	slackoff: {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Slack Off",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	slam: {
		num: 21,
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		name: "Slam",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	slash: {
		num: 163,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	sleeppowder: {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	sleeptalk: {
		num: 214,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sleep Talk",
		pp: 10,
		priority: 0,
		flags: {},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose') || source.hasAbility('boardpowerz') || source.hasAbility('lethargic');
		},
		onHit(pokemon) {
			const noSleepTalk = [
				'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'chatter', 'copycat', 'dynamaxcannon', 'focuspunch', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'shelltrap', 'sketch', 'sleeptalk', 'uproar',
			];
			const moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const moveid = moveSlot.id;
				if (!moveid) continue;
				const move = this.dex.moves.get(moveid);
				if (noSleepTalk.includes(moveid) || move.flags['charge'] || (move.isZ && move.basePower !== 1) || move.isMax) {
					continue;
				}
				moves.push(moveid);
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Cute",
	},
	sludge: {
		num: 124,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Sludge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	sludgebomb: {
		num: 188,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sludge Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	sludgewave: {
		num: 482,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Sludge Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "allAdjacent",
		type: "Poison",
		contestType: "Tough",
	},
	smackdown: {
		num: 479,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Smack Down",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		volatileStatus: 'smackdown',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
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
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	smartstrike: {
		num: 684,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Smart Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	smellingsalts: {
		num: 265,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'par') {
				this.debug('BP doubled on paralyzed target');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Smelling Salts",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.status === 'par') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	smog: {
		num: 123,
		accuracy: 70,
		basePower: 30,
		category: "Special",
		name: "Smog",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	smokescreen: {
		num: 108,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Smokescreen",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
	},
	snaptrap: {
		num: 779,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		isNonstandard: "Past",
		name: "Snap Trap",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	snarl: {
		num: 555,
		accuracy: 95,
		basePower: 55,
		category: "Special",
		name: "Snarl",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Tough",
	},
	snatch: {
		num: 289,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Snatch",
		pp: 10,
		priority: 4,
		flags: {bypasssub: 1},
		volatileStatus: 'snatch',
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'Snatch');
			},
			onAnyPrepareHitPriority: -1,
			onAnyPrepareHit(source, target, move) {
				const snatchUser = this.effectState.source;
				if (snatchUser.isSkyDropped()) return;
				if (!move || move.isZ || move.isMax || !move.flags['snatch'] || move.sourceEffect === 'snatch') {
					return;
				}
				snatchUser.removeVolatile('snatch');
				this.add('-activate', snatchUser, 'move: Snatch', '[of] ' + source);
				this.actions.useMove(move.id, snatchUser);
				return null;
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Dark",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	snipeshot: {
		num: 745,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Snipe Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		tracksTarget: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	snore: {
		num: 173,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Snore",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose') || source.hasAbility('boardpowerz') || source.hasAbility('lethargic');
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	snowscape: {
		num: 883,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Snowscape",
		pp: 10,
		priority: 0,
		flags: {},
		weather: 'snow',
		secondary: null,
		target: "all",
		type: "Ice",
	},
	soak: {
		num: 487,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Soak",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Water' || !target.setType('Water')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Water');
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	softboiled: {
		num: 135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Soft-Boiled",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	solarbeam: {
		num: 76,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Solar Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	solarblade: {
		num: 669,
		accuracy: 100,
		basePower: 125,
		category: "Physical",
		name: "Solar Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			const weakWeathers = ['raindance', 'primordialsea', 'sandstorm', 'hail', 'snow'];
			if (weakWeathers.includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	sonicboom: {
		num: 49,
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
		isNonstandard: "Past",
		name: "Sonic Boom",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	soulstealing7starstrike: {
		num: 699,
		accuracy: true,
		basePower: 195,
		category: "Physical",
		isNonstandard: "Past",
		name: "Soul-Stealing 7-Star Strike",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		isZ: "marshadiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	spacialrend: {
		num: 460,
		accuracy: 95,
		basePower: 100,
		category: "Special",
		name: "Spacial Rend",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
	},
	spark: {
		num: 209,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Spark",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	sparklingaria: {
		num: 664,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Past",
		name: "Sparkling Aria",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			dustproof: true,
			chance: 100,
			volatileStatus: 'sparklingaria',
		},
		onAfterMove(source, target, move) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon !== source && pokemon.removeVolatile('sparklingaria') && pokemon.status === 'brn' && !source.fainted) {
					pokemon.cureStatus();
				}
			}
		},
		target: "allAdjacent",
		type: "Water",
		contestType: "Tough",
	},
	sparklyswirl: {
		num: 740,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Sparkly Swirl",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		self: {
			onHit(pokemon, source, move) {
				this.add('-activate', source, 'move: Aromatherapy');
				for (const ally of source.side.pokemon) {
					if (ally !== source && (ally.volatiles['substitute'] && !move.infiltrates)) {
						continue;
					}
					ally.cureStatus();
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
	},
	spectralthief: {
		num: 712,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Spectral Thief",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, bypasssub: 1},
		stealsBoosts: true,
		// Boost stealing implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	speedswap: {
		num: 683,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Speed Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1, allyanim: 1},
		onHit(target, source) {
			const targetSpe = target.storedStats.spe;
			target.storedStats.spe = source.storedStats.spe;
			source.storedStats.spe = targetSpe;
			this.add('-activate', source, 'move: Speed Swap', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	spicyextract: {
		num: 858,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spicy Extract",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			atk: 2,
			def: -2,
		},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	spiderweb: {
		num: 169,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Spider Web",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	spikecannon: {
		num: 131,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		isNonstandard: "Past",
		name: "Spike Cannon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 120},
		contestType: "Cool",
	},
	spikes: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'spikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	spikyshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spiky Shield",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'spikyshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	spinout: {
		num: 859,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Spin Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	spiritbreak: {
		num: 789,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Spirit Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
	},
	spiritshackle: {
		num: 662,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Spirit Shackle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
	},
	spitup: {
		num: 255,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile']?.layers) return false;
			return pokemon.volatiles['stockpile'].layers * 100;
		},
		category: "Special",
		name: "Spit Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTry(source) {
			return !!source.volatiles['stockpile'];
		},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('stockpile');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	spite: {
		num: 180,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spite",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		onHit(target) {
			let move: Move | ActiveMove | null = target.lastMove;
			if (!move || move.isZ) return false;
			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

			const ppDeducted = target.deductPP(move.id, 4);
			if (!ppDeducted) return false;
			this.add("-activate", target, 'move: Spite', move.name, ppDeducted);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {effect: 'heal'},
		contestType: "Tough",
	},
	splash: {
		num: 150,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Splash",
		pp: 40,
		priority: 0,
		flags: {gravity: 1},
		onTry(source, target, move) {
			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		onTryHit(target, source) {
			this.add('-nothing');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 3}},
		contestType: "Cute",
	},
	splinteredstormshards: {
		num: 727,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		isNonstandard: "Past",
		name: "Splintered Stormshards",
		pp: 1,
		priority: 0,
		flags: {},
		onHit() {
			this.field.clearTerrain();
		},
		onAfterSubDamage() {
			this.field.clearTerrain();
		},
		isZ: "lycaniumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	splishysplash: {
		num: 730,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "LGPE",
		name: "Splishy Splash",
		pp: 15,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Cool",
	},
	spore: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	spotlight: {
		num: 671,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Spotlight",
		pp: 15,
		priority: 3,
		flags: {protect: 1, reflectable: 1, allyanim: 1},
		volatileStatus: 'spotlight',
		onTryHit(target) {
			if (this.activePerHalf === 1) return false;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Spotlight');
			},
			onFoeRedirectTargetPriority: 2,
			onFoeRedirectTarget(target, source, source2, move) {
				if (this.validTarget(this.effectState.target, source, move.target)) {
					this.debug("Spotlight redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	springtidestorm: {
		num: 831,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Springtide Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 30,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Fairy",
	},
	stealthrock: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stealth Rock",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stealthrock',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
	},
	steameruption: {
		num: 592,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		name: "Steam Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	steamroller: {
		num: 537,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Past",
		name: "Steamroller",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Bug",
		contestType: "Tough",
	},
	steelbeam: {
		num: 796,
		accuracy: 95,
		basePower: 140,
		category: "Special",
		name: "Steel Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Steel Beam'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	steelroller: {
		num: 798,
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		name: "Steel Roller",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry() {
			return !this.field.isTerrain('');
		},
		onHit() {
			this.field.clearTerrain();
		},
		onAfterSubDamage() {
			this.field.clearTerrain();
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	steelwing: {
		num: 211,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Steel Wing",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	stickyweb: {
		num: 564,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sticky Web",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stickyweb',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
			},
		},
		secondary: null,
		pressureTarget: "self",
		target: "foeSide",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	stockpile: {
		num: 254,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stockpile",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onTry(source) {
			if (source.volatiles['stockpile'] && source.volatiles['stockpile'].layers >= 3) return false;
		},
		volatileStatus: 'stockpile',
		condition: {
			noCopy: true,
			onStart(target) {
				this.effectState.layers = 1;
				this.effectState.def = 0;
				this.effectState.spd = 0;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const [curDef, curSpD] = [target.boosts.def, target.boosts.spd];
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onRestart(target) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const curDef = target.boosts.def;
				const curSpD = target.boosts.spd;
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onEnd(target) {
				if (this.effectState.def || this.effectState.spd) {
					const boosts: SparseBoostsTable = {};
					if (this.effectState.def) boosts.def = this.effectState.def;
					if (this.effectState.spd) boosts.spd = this.effectState.spd;
					this.boost(boosts, target, target);
				}
				this.add('-end', target, 'Stockpile');
				if (this.effectState.def !== this.effectState.layers * -1 || this.effectState.spd !== this.effectState.layers * -1) {
					this.hint("In Gen 7, Stockpile keeps track of how many times it successfully altered each stat individually.");
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Tough",
	},
	stokedsparksurfer: {
		num: 700,
		accuracy: true,
		basePower: 175,
		category: "Special",
		isNonstandard: "Past",
		name: "Stoked Sparksurfer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "aloraichiumz",
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	stomp: {
		num: 23,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Stomp",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	stompingtantrum: {
		num: 707,
		accuracy: 100,
		basePower: 75,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) {
				this.debug('doubling Stomping Tantrum BP due to previous move failure');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Stomping Tantrum",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	stoneaxe: {
		num: 830,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Stone Axe",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('stealthrock');
				}
			},
		},
		secondary: {}, // allows sheer force to trigger
		target: "normal",
		type: "Rock",
	},
	stoneedge: {
		num: 444,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Stone Edge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	storedpower: {
		num: 500,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower + 20 * pokemon.positiveBoosts();
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Stored Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
	},
	stormthrow: {
		num: 480,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Storm Throw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	strangesteam: {
		num: 790,
		accuracy: 95,
		basePower: 90,
		category: "Special",
		isNonstandard: "Past",
		name: "Strange Steam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fairy",
	},
	strength: {
		num: 70,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Strength",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	strengthsap: {
		num: 668,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Strength Sap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
		onHit(target, source) {
			if (target.boosts.atk === -6) return false;
			const atk = target.getStat('atk', false, true);
			const success = this.boost({atk: -1}, target, source, null, false, true);
			return !!(this.heal(atk, source, target) || success);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	stringshot: {
		num: 81,
		accuracy: 95,
		basePower: 0,
		category: "Status",
		name: "String Shot",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	struggle: {
		num: 165,
		accuracy: true,
		basePower: 50,
		category: "Physical",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1},
		noSketch: true,
		onModifyMove(move, pokemon, target) {
			move.type = '???';
			this.add('-activate', pokemon, 'move: Struggle');
		},
		struggleRecoil: true,
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Tough",
	},
	strugglebug: {
		num: 522,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Struggle Bug",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Bug",
		contestType: "Cute",
	},
	stuffcheeks: {
		num: 747,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stuff Cheeks",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onDisableMove(pokemon) {
			if (!pokemon.getItem().isBerry) pokemon.disableMove('stuffcheeks');
		},
		onTry(source) {
			return source.getItem().isBerry;
		},
		onHit(pokemon) {
			if (!this.boost({def: 2})) return null;
			pokemon.eatItem(true);
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	stunspore: {
		num: 78,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Stun Spore",
		pp: 30,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	submission: {
		num: 66,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Past",
		name: "Submission",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	substitute: {
		num: 164,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Substitute",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'substitute',
		onTryHit(source) {
			if (source.volatiles['substitute']) {
				this.add('-fail', source, 'move: Substitute');
				return this.NOT_FAIL;
			}
			if (source.hp <= source.maxhp / 4 || source.maxhp === 1) { // Shedinja clause
				this.add('-fail', source, 'move: Substitute', '[weak]');
				return this.NOT_FAIL;
			}
		},
		onHit(target) {
			this.directDamage(target.maxhp / 4);
		},
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'shedtail') {
					this.add('-start', target, 'Substitute', '[from] move: Shed Tail');
				} else {
					this.add('-start', target, 'Substitute');
				}
				this.effectState.hp = Math.floor(target.maxhp / 4);
				if (target.volatiles['partiallytrapped']) {
					this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
					delete target.volatiles['partiallytrapped'];
				}
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit(target, source, move) {
				if (target === source || move.flags['bypasssub'] || move.infiltrates) {
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
					this.add('-activate', target, 'move: Substitute', '[damage]');
				}
				if (move.recoil) {
					this.damage(this.actions.calcRecoilDamage(damage, move), source, target, 'recoil');
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
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	subzeroslammer: {
		num: 650,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Subzero Slammer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "iciumz",
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	suckerpunch: {
		num: 389,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Sucker Punch",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = action?.choice === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	sunnyday: {
		num: 241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunny Day",
		pp: 5,
		priority: 0,
		flags: {},
		weather: 'sunnyday',
		secondary: null,
		target: "all",
		type: "Fire",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	sunsteelstrike: {
		num: 713,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sunsteel Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	superfang: {
		num: 162,
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		category: "Physical",
		name: "Super Fang",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	superpower: {
		num: 276,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	supersonic: {
		num: 48,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Supersonic",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	supersonicskystrike: {
		num: 626,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Supersonic Skystrike",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "flyiniumz",
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	surf: {
		num: 57,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Surf",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Water",
		contestType: "Beautiful",
	},
	surgingstrikes: {
		num: 818,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Surging Strikes",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
	},
	swagger: {
		num: 207,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Swagger",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		volatileStatus: 'confusion',
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	swallow: {
		num: 256,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swallow",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			return !!source.volatiles['stockpile'];
		},
		onHit(pokemon) {
			const healAmount = [0.25, 0.5, 1];
			const success = !!this.heal(this.modify(pokemon.maxhp, healAmount[(pokemon.volatiles['stockpile'].layers - 1)]));
			if (!success) this.add('-fail', pokemon, 'heal');
			pokemon.removeVolatile('stockpile');
			return success || this.NOT_FAIL;
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
	},
	sweetkiss: {
		num: 186,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sweet Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	sweetscent: {
		num: 230,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sweet Scent",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			evasion: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
	},
	swift: {
		num: 129,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Swift",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		contestType: "Cool",
	},
	switcheroo: {
		num: 415,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Switcheroo",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onHit(target, source, move) {
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Switcheroo');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Switcheroo');
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	swordsdance: {
		num: 14,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swords Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	synchronoise: {
		num: 485,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Synchronoise",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryImmunity(target, source) {
			return target.hasType(source.getTypes());
		},
		secondary: null,
		target: "allAdjacent",
		type: "Psychic",
		contestType: "Clever",
	},
	synthesis: {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	tackle: {
		num: 33,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Tackle",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	tailglow: {
		num: 294,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Tail Glow",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 3,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	tailslap: {
		num: 541,
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		name: "Tail Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	tailwhip: {
		num: 39,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tail Whip",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
	},
	tailwind: {
		num: 366,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tailwind",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, wind: 1},
		sideCondition: 'tailwind',
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Tailwind');
					return 6;
				}
				return 4;
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'move: Tailwind', '[persistent]');
				} else {
					this.add('-sidestart', side, 'move: Tailwind');
				}
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Flying",
		zMove: {effect: 'crit2'},
		contestType: "Cool",
	},
	takedown: {
		num: 36,
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		name: "Take Down",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	takeheart: {
		num: 850,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Take Heart",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			const success = !!this.boost({spa: 1, spd: 1});
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "self",
		type: "Psychic",
	},
	tarshot: {
		num: 749,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tar Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'tarshot',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Tar Shot');
			},
			onEffectivenessPriority: -2,
			onEffectiveness(typeMod, target, type, move) {
				if (move.type !== 'Fire') return;
				if (!target) return;
				if (type !== target.getTypes()[0]) return;
				return typeMod + 1;
			},
		},
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	taunt: {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Taunt",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'taunt',
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectState.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	tearfullook: {
		num: 715,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tearful Look",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	teatime: {
		num: 752,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teatime",
		pp: 10,
		priority: 0,
		flags: {bypasssub: 1},
		onHitField(target, source, move) {
			const targets: Pokemon[] = [];
			for (const pokemon of this.getAllActive()) {
				if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
					this.add('-miss', source, pokemon);
				} else if (this.runEvent('TryHit', pokemon, source, move) && pokemon.getItem().isBerry) {
					targets.push(pokemon);
				}
			}
			this.add('-fieldactivate', 'move: Teatime');
			if (!targets.length) {
				this.add('-fail', source, 'move: Teatime');
				this.attrLastMove('[still]');
				return this.NOT_FAIL;
			}
			for (const pokemon of targets) {
				pokemon.eatItem(true);
			}
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	technoblast: {
		num: 546,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Past",
		name: "Techno Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Drive', pokemon, null, move, 'Normal');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	tectonicrage: {
		num: 630,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Tectonic Rage",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "groundiumz",
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Cool",
	},
	teeterdance: {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Teeter Dance",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
	},
	telekinesis: {
		num: 477,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Telekinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, gravity: 1, allyanim: 1},
		volatileStatus: 'telekinesis',
		onTry(source, target, move) {
			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.attrLastMove('[still]');
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		condition: {
			duration: 3,
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast'].includes(target.baseSpecies.baseSpecies) ||
						target.baseSpecies.name === 'Gengar-Mega') {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseSpecies.name === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	teleport: {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teleport",
		pp: 20,
		priority: -6,
		flags: {},
		onTry(source) {
			return !!this.canSwitch(source.side);
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'heal'},
		contestType: "Cool",
	},
	terablast: {
		num: 851,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tera Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon, target) {
			if (pokemon.terastallized) {
				move.type = pokemon.teraType;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.terastallized && pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
				move.category = 'Physical';
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	terrainpulse: {
		num: 805,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Terrain Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
			case 'electricterrain':
				move.type = 'Electric';
				break;
			case 'grassyterrain':
				move.type = 'Grass';
				break;
			case 'mistyterrain':
				move.type = 'Fairy';
				break;
			case 'psychicterrain':
				move.type = 'Psychic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
				this.debug('BP doubled in Terrain');
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
	},
	thief: {
		num: 168,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Thief",
		pp: 25,
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
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	thousandarrows: {
		num: 614,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Thousand Arrows",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Ground') return;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Flying type and immune to Ground
			if (!target.runImmunity('Ground')) {
				if (target.hasType('Flying')) return 0;
			}
		},
		volatileStatus: 'smackdown',
		ignoreImmunity: {'Ground': true},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMove: {basePower: 180},
		contestType: "Beautiful",
	},
	thousandwaves: {
		num: 615,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Past",
		name: "Thousand Waves",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onHit(target, source, move) {
			if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		contestType: "Tough",
	},
	thrash: {
		num: 37,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Thrash",
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
		type: "Normal",
		contestType: "Tough",
	},
	throatchop: {
		num: 675,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Throat Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'Throat Chop', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['sound']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (!move.isZ && !move.isMax && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Throat Chop');
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (!move.isZ && !move.isMax && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Throat Chop');
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd(target) {
				this.add('-end', target, 'Throat Chop', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('throatchop');
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	thunder: {
		num: 87,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Thunder",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
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
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderbolt: {
		num: 85,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Thunderbolt",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thundercage: {
		num: 819,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Thunder Cage",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	thunderfang: {
		num: 422,
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		name: "Thunder Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'par',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderouskick: {
		num: 823,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Thunderous Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
	},
	thunderpunch: {
		num: 9,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Thunder Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thundershock: {
		num: 84,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Thunder Shock",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	thunderwave: {
		num: 86,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Thunder Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	tickle: {
		num: 321,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tickle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	tidyup: {
		num: 882,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tidy Up",
		pp: 10,
		priority: 0,
		flags: {},
		onHit(pokemon) {
			let success = false;
			for (const active of this.getAllActive()) {
				if (active.removeVolatile('substitute')) success = true;
			}
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			const sides = [pokemon.side, ...pokemon.side.foeSidesWithConditions()];
			for (const side of sides) {
				for (const sideCondition of removeAll) {
					if (side.removeSideCondition(sideCondition)) {
						this.add('-sideend', side, this.dex.conditions.get(sideCondition).name);
						success = true;
					}
				}
			}
			if (success) this.add('-activate', pokemon, 'move: Tidy Up');
			return !!this.boost({atk: 1, spe: 1}, pokemon, pokemon, null, false, true) || success;
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	topsyturvy: {
		num: 576,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Topsy-Turvy",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			let success = false;
			let i: BoostID;
			for (i in target.boosts) {
				if (target.boosts[i] === 0) continue;
				target.boosts[i] = -target.boosts[i];
				success = true;
			}
			if (!success) return false;
			this.add('-invertboost', target, '[from] move: Topsy-Turvy');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
	},
	torchsong: {
		num: 871,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Torch Song",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	torment: {
		num: 259,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Torment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'torment',
		condition: {
			noCopy: true,
			onStart(pokemon, source, effect) {
				if (pokemon.volatiles['dynamax']) {
					delete pokemon.volatiles['torment'];
					return false;
				}
				if (effect?.id === 'gmaxmeltdown') this.effectState.duration = 3;
				this.add('-start', pokemon, 'Torment');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Torment');
			},
			onDisableMove(pokemon) {
				if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	toxic: {
		num: 92,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		// No Guard-like effect for Poison-type users implemented in Scripts#tryMoveHit
		status: 'tox',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	toxicspikes: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, nonsky: 1},
		sideCondition: 'toxicspikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
					return;
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	toxicthread: {
		num: 672,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Toxic Thread",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	trailblaze: {
		num: 885,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Trailblaze",
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
		type: "Grass",
		contestType: "Cool",
	},
	transform: {
		num: 144,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Transform",
		pp: 10,
		priority: 0,
		flags: {allyanim: 1},
		onHit(target, pokemon) {
			if (!pokemon.transformInto(target)) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Clever",
	},
	triattack: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
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
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	trick: {
		num: 271,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Trick",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onHit(target, source, move) {
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemState, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Trick');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Trick');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Trick');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Trick');
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
	},
	trickortreat: {
		num: 567,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Trick-or-Treat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			if (target.hasType('Ghost')) return false;
			if (!target.addType('Ghost')) return false;
			this.add('-start', target, 'typeadd', 'Ghost', '[from] move: Trick-or-Treat');

			if (target.side.active.length === 2 && target.position === 1) {
				// Curse Glitch
				const action = this.queue.willMove(target);
				if (action && action.move.id === 'curse') {
					action.targetLoc = -1;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Cute",
	},
	trickroom: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Trick Room",
		pp: 5,
		priority: -7,
		flags: {mirror: 1},
		pseudoWeather: 'trickroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Trick Room');
					return 7;
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
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
	},
	triplearrows: {
		num: 843,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Triple Arrows",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondaries: [
			{
				chance: 50,
				boosts: {
					def: -1,
				},
			}, {
				chance: 30,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fighting",
	},
	tripleaxel: {
		num: 813,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Triple Axel",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
	tripledive: {
		num: 865,
		accuracy: 95,
		basePower: 30,
		category: "Physical",
		name: "Triple Dive",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	tropkick: {
		num: 688,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Trop Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cute",
	},
	trumpcard: {
		num: 376,
		accuracy: true,
		basePower: 0,
		basePowerCallback(source, target, move) {
			const callerMoveId = move.sourceEffect || move.id;
			const moveSlot = callerMoveId === 'instruct' ? source.getMoveData(move.id) : source.getMoveData(callerMoveId);
			let bp;
			if (!moveSlot) {
				bp = 40;
			} else {
				switch (moveSlot.pp) {
				case 0:
					bp = 200;
					break;
				case 1:
					bp = 80;
					break;
				case 2:
					bp = 60;
					break;
				case 3:
					bp = 50;
					break;
				default:
					bp = 40;
					break;
				}
			}

			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Trump Card",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	twinbeam: {
		num: 888,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twin Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	twineedle: {
		num: 41,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
		maxMove: {basePower: 100},
		contestType: "Cool",
	},
	twinkletackle: {
		num: 656,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twinkle Tackle",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fairiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	twister: {
		num: 239,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Twister",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	uturn: {
		num: 369,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "U-turn",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
	},
	uproar: {
		num: 253,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Uproar",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		self: {
			volatileStatus: 'uproar',
		},
		onTryHit(target) {
			const activeTeam = target.side.activeTeam();
			const foeActiveTeam = target.side.foe.activeTeam();
			for (const [i, allyActive] of activeTeam.entries()) {
				if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
				const foeActive = foeActiveTeam[i];
				if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
			}
		},
		condition: {
			duration: 3,
			onStart(target) {
				this.add('-start', target, 'Uproar');
			},
			onResidual(target) {
				if (target.volatiles['throatchop']) {
					target.removeVolatile('uproar');
					return;
				}
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['uproar'];
				}
				this.add('-start', target, 'Uproar', '[upkeep]');
			},
			onResidualOrder: 28,
			onResidualSubOrder: 1,
			onEnd(target) {
				this.add('-end', target, 'Uproar');
			},
			onLockMove: 'uproar',
			onAnySetStatus(status, pokemon) {
				if (status.id === 'slp') {
					if (pokemon === this.effectState.target) {
						this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
					} else {
						this.add('-fail', pokemon, 'slp', '[from] Uproar');
					}
					return null;
				}
			},
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		contestType: "Cute",
	},
	vacuumwave: {
		num: 410,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Vacuum Wave",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	vcreate: {
		num: 557,
		accuracy: 95,
		basePower: 180,
		category: "Physical",
		name: "V-create",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 220},
		contestType: "Cool",
	},
	veeveevolley: {
		num: 741,
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			const bp = Math.floor((pokemon.happiness * 10) / 25) || 1;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Veevee Volley",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	venomdrench: {
		num: 599,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Venom Drench",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
			}
			return false;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	venoshock: {
		num: 474,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Venoshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'psn' || target.status === 'tox') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	victorydance: {
		num: 837,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Unobtainable",
		name: "Victory Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			def: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
	},
	vinewhip: {
		num: 22,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Vine Whip",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	visegrip: {
		num: 11,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Vise Grip",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	vitalthrow: {
		num: 233,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		isNonstandard: "Past",
		name: "Vital Throw",
		pp: 10,
		priority: -1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	volttackle: {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	wakeupslap: {
		num: 358,
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose')) {
				this.debug('BP doubled on sleeping target');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Wake-Up Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.status === 'slp') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	waterfall: {
		num: 127,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Waterfall",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	watergun: {
		num: 55,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Water Gun",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cute",
	},
	waterpledge: {
		num: 518,
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['firepledge', 'grasspledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		name: "Water Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onPrepareHit(target, source, move) {
			for (const action of this.queue) {
				if (action.choice !== 'move') continue;
				const otherMove = action.move;
				const otherMoveUser = action.pokemon;
				if (
					!otherMove || !action.pokemon || !otherMoveUser.isActive ||
					otherMoveUser.fainted || action.maxMove || action.zmove
				) {
					continue;
				}
				if (otherMoveUser.isAlly(source) && ['firepledge', 'grasspledge'].includes(otherMove.id)) {
					this.queue.prioritizeAction(action, move);
					this.add('-waiting', source, otherMoveUser);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
				move.sideCondition = 'grasspledge';
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Water';
				move.forceSTAB = true;
				move.self = {sideCondition: 'waterpledge'};
			}
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'Water Pledge');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 7,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'Water Pledge');
			},
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
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	waterpulse: {
		num: 352,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Water Pulse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Water",
		contestType: "Beautiful",
	},
	watershuriken: {
		num: 594,
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.species.name === 'Greninja-Ash' && pokemon.hasAbility('battlebond') &&
				!pokemon.transformed) {
				return move.basePower + 5;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Water Shuriken",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	watersport: {
		num: 346,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'watersport',
		condition: {
			duration: 5,
			onFieldStart(field, source) {
				this.add('-fieldstart', 'move: Water Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('water sport weaken');
					return this.chainModify([1352, 4096]);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 3,
			onFieldEnd() {
				this.add('-fieldend', 'move: Water Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	waterspout: {
		num: 323,
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower * pokemon.hp / pokemon.maxhp;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Water Spout",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
	wavecrash: {
		num: 834,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wave Crash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Water",
	},
	weatherball: {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
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
			}
			this.debug('BP: ' + move.basePower);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
	},
	whirlpool: {
		num: 250,
		accuracy: 85,
		basePower: 35,
		category: "Special",
		name: "Whirlpool",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	whirlwind: {
		num: 18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Whirlwind",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, wind: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	wickedblow: {
		num: 817,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Wicked Blow",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	wickedtorque: {
		num: 897,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Unobtainable",
		name: "Wicked Torque",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		target: "normal",
		type: "Dark",
	},
	wideguard: {
		num: 469,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wide Guard",
		pp: 10,
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'wideguard',
		onTry() {
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Wide Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Wide Guard blocks all spread moves
				if (move?.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
					return;
				}
				if (move.isZ || move.isMax) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Wide Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	wildboltstorm: {
		num: 847,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		isNonstandard: "Unobtainable",
		name: "Wildbolt Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "allAdjacentFoes",
		type: "Electric",
	},
	wildcharge: {
		num: 528,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Wild Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	willowisp: {
		num: 261,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Will-O-Wisp",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	wingattack: {
		num: 17,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Wing Attack",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	wish: {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		slotCondition: 'Wish',
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	withdraw: {
		num: 110,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Withdraw",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
	},
	wonderroom: {
		num: 472,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wonder Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'wonderroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Wonder Room');
					return 7;
				}
				return 5;
			},
			onModifyMove(move, source, target) {
				// This code is for moves that use defensive stats as the attacking stat; see below for most of the implementation
				if (!move.overrideOffensiveStat) return;
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
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	woodhammer: {
		num: 452,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wood Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
	},
	workup: {
		num: 526,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Work Up",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
	},
	worryseed: {
		num: 388,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Worry Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onTryImmunity(target) {
			// Truant and Insomnia have special treatment; they fail before
			// checking accuracy and will double Stomping Tantrum's BP
			if (target.ability === 'truant' || target.ability === 'insomnia') {
				return false;
			}
		},
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('insomnia');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Insomnia', '[from] move: Worry Seed');
				if (pokemon.status === 'slp') {
					pokemon.cureStatus();
				}
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	wrap: {
		num: 35,
		accuracy: 90,
		basePower: 15,
		category: "Physical",
		name: "Wrap",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	wringout: {
		num: 378,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			const hp = target.hp;
			const maxHP = target.maxhp;
			const bp = Math.floor(Math.floor((120 * (100 * Math.floor(hp * 4096 / maxHP)) + 2048 - 1) / 4096) / 100) || 1;
			this.debug('BP for ' + hp + '/' + maxHP + " HP: " + bp);
			return bp;
		},
		category: "Special",
		isNonstandard: "Past",
		name: "Wring Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 190},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	xscissor: {
		num: 404,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "X-Scissor",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	yawn: {
		num: 281,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Yawn",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'yawn',
		onTryHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) {
				return false;
			}
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart(target, source) {
				this.add('-start', target, 'move: Yawn', '[of] ' + source);
			},
			onResidualOrder: 23,
			onEnd(target) {
				this.add('-end', target, 'move: Yawn', '[silent]');
				target.trySetStatus('slp', this.effectState.source);
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	zapcannon: {
		num: 192,
		accuracy: 50,
		basePower: 120,
		category: "Special",
		name: "Zap Cannon",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	zenheadbutt: {
		num: 428,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Zen Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	zingzap: {
		num: 716,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Zing Zap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	zippyzap: {
		num: 729,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "LGPE",
		name: "Zippy Zap",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					evasion: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	/* Fake Clover Exclusive Move */
	maxmemeitude: {
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Memeitude",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: true,
		target: "adjacentFoe",
		type: "???",
		contestType: "Cool",
	},
	/* Clover Exclusive Moves */
	sleazyspores: {
		num: 69056,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sleazy Spores",
		pp: 10,
		priority: 0,
		flags: {reflectable: 1, powder: 1},
		sideCondition: 'sleazyspores',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sleazy Spores');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.runStatusImmunity('powder')) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sleazy Spores');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('sleazyspores'));
			},
		},
		secondary: null,
		pressureTarget: "self",
		target: "foeSide",
		type: "Grass",
		isNonstandard: "Future",
	},
	slimegulp: {
		num: 69044,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Slime Gulp",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Poison",
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		isNonstandard: "Future",
	},
	inverseroom: {
		num: 69032,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Inverse Room",
		pp: 15,
		priority: 0,
		target: "all",
		type: "???",
		flags: {mirror: 1},
		pseudoWeather: 'inverseroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onNegateImmunity: false,
			onEffectivenessPriority: 1,
			onEffectiveness(typeMod, target, type, move) {
				// The effectiveness of Freeze Dry on Water isn't reverted
				if (move && move.id === 'freezedry' && type === 'Water') return;
				if (move && move.id === '1000folds' && type === 'Steel') return;
				if (move && move.id === 'airshooter' && type === 'Flying') return;
				if (move && !this.dex.getImmunity(move, type)) return 1;
				return -typeMod;
			},
			onFieldStart(target, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Inverse Room', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Inverse Room');
				}
				this.add('-message', 'The battlefield became upside down!');
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('inverseroom');
			},
			onFieldResidualOrder: 23,
			onFieldEnd() {
				this.add('-fieldend', 'move: Inverse Room');
			},
		},
		isNonstandard: "Future",
	},
	fruitpunch: {
		num: 69031,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fruit Punch",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Fairy",
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		isNonstandard: "Future",
	},
	dragonfist: {
		num: 69040,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Dragon Fist",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Dragon",
		secondary: {
			chance: 10,
			status: 'par',
		},
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		isNonstandard: "Future",
	},
	lickclean: {
		num: 69045,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Lick Clean",
		pp: 20,
		priority: 0,
		target: "normal",
		type: "Water",
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, source) {
			const positiveBoosts = target.positiveBoosts();
			const adjustedBoosts: SparseBoostsTable = {};
			for (const statName in target.boosts) {
				const stage = target.boosts[statName as BoostID];
				adjustedBoosts[statName as BoostID] = target.boosts[statName as BoostID];
				if (stage > 0) {
					adjustedBoosts[statName as BoostID] = 0;
				}
			}

			if (positiveBoosts > 0) {
				const factor = 12.5 * Math.pow(2, Math.max(4, positiveBoosts));
				const amount = this.modify(source.maxhp, factor);
				target.setBoost(adjustedBoosts);
				source.heal(amount);
				this.add('-clearpositiveboost', target, source, 'move: Lick Clean');
				this.add('-heal', source, source.getHealth, '[from] move: Lick Clean');
			}
		},
		isNonstandard: "Future",
	},
	speedweed: {
		num: 69041,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Speed Weed",
		pp: 30,
		priority: 1,
		target: "normal",
		type: "Grass",
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	overbite: {
		num: 69036,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Overbite",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Dark",
		onAfterHit(target, source) {
			this.damage(Math.round(source.maxhp / 2), source, source, this.dex.conditions.get('Overbite'), true);
		},
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	"1000folds": {
		num: 69047,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "1000 Folds",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Steel",
		flags: {contact: 1, mirror: 1, slicing: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 0;
		},
		breaksProtect: true,
		infiltrates: true,
		onTryHit(pokemon) {
			if (pokemon.runImmunity('Steel')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
				pokemon.side.removeSideCondition('mirageveil');
			}
		},
		isNonstandard: "Future",
	},
	warhead: {
		num: 69042,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Warhead",
		pp: 5,
		priority: 0,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Steel",
		flags: {protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	weirdflex: {
		num: 69043,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Weird Flex",
		pp: 15,
		priority: 4,
		target: "self",
		type: "Fighting",
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
			spe: -2,
		},
		volatileStatus: 'weirdflex',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Weird Flex');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Weird Flex');
					return target.hp - 1;
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Weird Flex redirected target of move");
					return this.effectState.target;
				}
			},
		},
		isNonstandard: "Future",
	},
	scorchedearth: {
		num: 69046,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Scorched Earth",
		pp: 10,
		priority: 0,
		target: "allAdjacent",
		type: "Ground",
		flags: {protect: 1, mirror: 1},
		onAfterMove(source) {
			if (source.isGrounded()) {
				source.trySetStatus('brn');
			}
		},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		isNonstandard: "Future",
	},
	hulkup: {
		num: 69051,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hulk Up",
		pp: 10,
		priority: 0,
		target: "self",
		type: "Fighting",
		onHit(target) {
			if (target.hp <= target.maxhp / 2) {
				this.boost({
					atk: 2,
					def: 2,
				});
			} else {
				this.boost({
					atk: 1,
					def: 1,
				});
			}
		},
		flags: {snatch: 1},
		isNonstandard: "Future",
	},
	focusmunch: {
		num: 69034,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Focus Munch",
		pp: 10,
		priority: -3,
		target: "self",
		type: "Fighting",
		flags: {},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('focusmunch');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['focusmunch'] && pokemon.volatiles['focusmunch'].lostFocus) {
				this.add('cant', pokemon, 'Focus Munch', 'Focus Munch');
				return true;
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Focus Munch');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					pokemon.volatiles['focusmunch'].lostFocus = true;
				}
			},
		},
		heal: [1, 2],
		boosts: {accuracy: 1},
		isNonstandard: "Future",
	},
	mop: {
		num: 69033,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Mop",
		pp: 10,
		priority: 0,
		target: "self",
		type: "Fairy",
		flags: {},
		onHit(pokemon) {
			const sideConditions = [
				'spikes',
				'toxicspikes',
				'stealthrock',
				'stickyweb',
				'sleazyspores',
				'gmaxsteelsurge',
				'shattershard',
				'luckyroll',
			];
			const removedConditions = [];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Mop', '[of] ' + pokemon);
					removedConditions.push(condition);
				}
			}
			if (removedConditions.length > 0) {
				this.boost({accuracy: 1});
			}
		},
		isNonstandard: "Future",
	},
	quicksand: {
		num: 69037,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Sand",
		pp: 20,
		priority: 1,
		target: "normal",
		type: "Ground",
		flags: {protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	thinkfast: {
		num: 69038,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Think Fast",
		pp: 20,
		priority: 1,
		target: "normal",
		type: "Psychic",
		flags: {protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	boltbeam: {
		num: 69048,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Boltbeam",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Electric",
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		canContinue: true,
		onTryHit(target, source, move) {
			if (move.hit === 2) {
				move.type = 'Ice';
			}
		},
	},
	checkem: {
		num: 69052,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		name: "Check 'Em",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Psychic",
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		isNonstandard: "Future",
	},
	pixiepummel: {
		num: 69039,
		accuracy: 80,
		basePower: 120,
		category: "Physical",
		name: "Pixie Pummel",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Fairy",
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	gayagenda: {
		num: 69059,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Gay Agenda",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Fairy",
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'gayagenda',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'M') && !(pokemon.gender === 'F' && source.gender === 'F')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Gay Agenda', pokemon, source)) {
					this.debug('Gay Agenda event failed');
					return false;
				}

				if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Gay Agenda', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Gay Agenda');
				}
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['gayagenda']) {
					this.debug('Removing Gay Agenda volatile on ' + pokemon);
					pokemon.removeVolatile('gayagenda');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Gay Agenda', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Gay Agenda');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Gay Agenda', '[silent]');
			},
		},
		zMove: {effect: 'clearnegativeboost'},
		isNonstandard: "Future",
	},
	spooperpower: {
		num: 69057,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Spooperpower",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Ghost",
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		isNonstandard: "Future",
	},
	greatrage: {
		num: 69053,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Great Rage",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Grass",
		flags: {sound: 1, protect: 1, mirror: 1, bypasssub: 1},
		isNonstandard: "Future",
	},
	wowwiener: {
		num: 69054,
		accuracy: 100,
		basePower: 30,
		category: "Special",
		name: "Wow Wiener",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Fire",
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		isNonstandard: "Future",
	},
	plunder: {
		num: 69055,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Plunder",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Water",
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, source, move) {
			if (source.item) {
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
		isNonstandard: "Future",
	},
	blobbybop: {
		num: 69060,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Blobby Bop",
		pp: 15,
		priority: 0,
		target: "normal",
		type: "Ice",
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	banhammer: {
		num: 69049,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Ban Hammer",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Normal",
		flags: {protect: 1, mirror: 1, hammer: 1},
		onHit(target) {
			if (!target.volatiles['dynamax']) {
				target.addVolatile('torment');
				target.addVolatile('taunt');
			}
		},
		isNonstandard: "Future",
	},
	homerunbat: {
		num: 69050,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Homerun Bat",
		pp: 10,
		priority: -6,
		target: "normal",
		type: "Normal",
		flags: {contact: 1, protect: 1},
		forceSwitch: true,
		isNonstandard: "Future",
	},
	elbowdrop: {
		num: 69058,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Elbow Drop",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Ghost",
		flags: {contact: 1, protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	anattack: {
		num: 69022,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "An Attack",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "???",
		zMove: {basePower: 190},
		isNonstandard: "Future",
	},
	chaosdunk: {
		num: 69017,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Chaos Dunk",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {basePower: 185},
		isNonstandard: "Future",
	},
	comengo: {
		num: 69002,
		accuracy: 100,
		basePower: 30,
		category: "Special",
		name: "Come n' Go",
		pp: 30,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {basePower: 140},
		isNonstandard: "Future",
	},
	dailydose: {
		num: 69018,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Daily Dose",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('tox', source);
				} else {
					target.trySetStatus('slp', source);
				}
			},
		},
		target: "normal",
		type: "Poison",
		zMove: {basePower: 160},
		isNonstandard: "Future",
	},
	decaydrain: {
		num: 69012,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Decay Drain",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {basePower: 180},
		isNonstandard: "Future",
	},
	dildocannon: {
		num: 69013,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Dildo Cannon",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {basePower: 140},
		isNonstandard: "Future",
	},
	enema: {
		num: 69001,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Enema",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 140},
		isNonstandard: "Future",
	},
	erosionwave: {
		num: 69005,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Erosion Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Rock",
		zMove: {basePower: 175},
		isNonstandard: "Future",
	},
	falconpunch: {
		num: 69030,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Falcon Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Flying",
		zMove: {basePower: 180},
		isNonstandard: "Future",
	},
	firebomb: {
		num: 69020,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Fire Bomb",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 180},
		isNonstandard: "Future",
	},
	fizzbitch: {
		num: 69019,
		accuracy: 80,
		basePower: 150,
		category: "Special",
		name: "Fizzbitch",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Grass",
		zMove: {basePower: 200},
		isNonstandard: "Future",
	},
	foryou: {
		num: 69010,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "For You",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		isNonstandard: "Future",
	},
	futababreak: {
		num: 69015,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Futaba Break",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Grass')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
				pokemon.side.removeSideCondition('mirageveil');
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 170},
		isNonstandard: "Future",
	},
	holyduty: {
		num: 69003,
		accuracy: 100,
		basePower: 250,
		category: "Special",
		name: "Holy Duty",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		zMove: {basePower: 200},
		isNonstandard: "Future",
	},
	lactoseshot: {
		num: 69023,
		accuracy: 90,
		basePower: 130,
		category: "Special",
		name: "Lactose Shot",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {basePower: 195},
		isNonstandard: "Future",
	},
	meme: {
		num: 69009,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Meme",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
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
		target: "normal",
		type: "???",
		zMove: {basePower: 120},
		isNonstandard: "Future",
	},
	overenergize: {
		num: 69021,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Overenergize",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {basePower: 200},
		isNonstandard: "Future",
	},
	owtheedge: {
		num: 69014,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Ow The Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 190},
		isNonstandard: "Future",
	},
	pukeblood: {
		num: 69016,
		accuracy: 95,
		basePower: 130,
		category: "Special",
		name: "Puke Blood",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {basePower: 190},
		isNonstandard: "Future",
	},
	punchout: {
		num: 69004,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Punch Out",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 140},
		isNonstandard: "Future",
	},
	regenerate: {
		num: 69027,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Regenerate",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status) && pokemon.hp >= pokemon.maxhp) return false;
			pokemon.cureStatus();
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	riotshield: {
		num: 69028,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Riot Shield",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1},
		self: {
			sideCondition: 'safeguard',
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
	},
	shitpost: {
		num: 69026,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Shitpost",
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
		type: "Ground",
		zMove: {basePower: 190},
		isNonstandard: "Future",
	},
	spookout: {
		num: 69010,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Spook Out",
		pp: 10,
		priority: 3,
		flags: {sound: 1, protect: 1, mirror: 1, bypasssub: 1},
		onTry(pokemon, target) {
			if (!pokemon.hasAbility('numerouno') && pokemon.activeTurns > 1) {
				this.attrLastMove('[still]');
				this.add('-fail', pokemon);
				this.hint("Spook Out only works on your first turn out.");
				return null;
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		zMove: {basePower: 120},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	stratoblade: {
		num: 69006,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Strato Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {basePower: 175},
		isNonstandard: "Future",
	},
	supersnore: {
		num: 69007,
		accuracy: 100,
		basePower: 255,
		category: "Physical",
		name: "Super Snore",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		sleepUsable: true,
		onTryHit(target, source) {
			if (source.status !== 'slp' && !source.hasAbility('comatose') && !source.hasAbility('boardpowerz')) return false;
		},
		target: "normal",
		type: "Ice",
		zMove: {basePower: 220},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	swindle: {
		num: 69029,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Swindle",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onAfterHit(target, source, move) {
			if (source.item) {
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
			this.add('-item', source, yourItem, '[from] move: Swindle', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 180},
		isNonstandard: "Future",
	},
	toke: {
		num: 69025,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toke",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fire",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	toxiravage: {
		num: 69008,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Toxiravage",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {basePower: 160},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	trigger: {
		num: 69024,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.trigger || move.hit === 1) {
				pokemon.addVolatile('trigger');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles.trigger.multiplier, 1, 160);
		},
		category: "Special",
		name: "Trigger",

		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {basePower: 100},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	sudoku: {
		num: 69035,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sudoku",
		pp: 5,
		priority: 0,
		flags: {},
		selfdestruct: "ifHit",
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'healreplacement'},
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	slipturn: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Slip Turn",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	/* Clover CAP Moves */
	crusadercrash: {
		num: 42001,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crusader Crash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
	},
	moregun: {
		num: 42002,
		accuracy: 100,
		basePower: 16,
		category: "Special",
		name: "More Gun",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 6,
		target: "allAdjacent",
		type: "Normal",
		isNonstandard: "Future",
	},
	psychofists: {
		num: 42003,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Psycho Fists",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('psychicterrain');
				},
			},
		},
		target: "normal",
		type: "Psychic",
		isNonstandard: "Future",
	},
	faradaycage: {
		num: 275,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Faraday Cage",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'faradaycage',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Faraday Cage');
			},
			onResidualOrder: 7,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 8);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Faraday Cage');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		isNonstandard: "Future",
	},
	dragonburst: {
		num: 42005,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const ratio = pokemon.hp * 48 / pokemon.maxhp;
			if (ratio < 2) {
				return 200;
			}
			if (ratio < 5) {
				return 150;
			}
			if (ratio < 10) {
				return 120;
			}
			if (ratio < 17) {
				return 100;
			}
			if (ratio < 33) {
				return 90;
			}
			return 60;
		},
		category: "Special",
		name: "Dragon Burst",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		isNonstandard: "Future",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	rockclock: {
		num: 42006,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Future",
		name: "Rock Clock",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	awaken: {
		num: 42007,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Future",
		name: "Awaken",
		pp: 10,
		priority: 0,
		flags: {charge: 1, nonsky: 1},
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
		boosts: {
			atk: 2,
			def: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Smart",
	},
	voltaiccyclone: {
		num: 42008,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		isNonstandard: "Future",
		name: "Voltaic Cyclone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		target: "allAdjacent",
		type: "Electric",
		contestType: "Cool",
	},
	boilover: {
		num: 42009,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Boil Over",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Water';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Fire';
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
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 200},
		maxMove: {basePower: 149},
		contestType: "Beautiful",
	},
	soulcrusher: {
		num: 42010,
		accuracy: 100,
		basePower: 10,
		category: "Special",
		isNonstandard: "Future",
		name: "Soul Crusher",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		drain: [1, 1],
		/* lol */
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(999);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	trickstab: {
		num: 42013,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Future",
		name: "Trick Stab",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		beforeMoveCallback(source, target, move) {
			if (source.illusion) move.willCrit = true;
		},
		onHit(target, source) {
			this.singleEvent('End', this.dex.abilities.get('Illusion'), source.abilityState, source);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
	},
	tombstoner: {
		num: 42015,
		accuracy: 100,
		basePower: 300,
		category: "Physical",
		isNonstandard: "Future",
		name: "Tombstoner",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			move.basePower = Math.max(move.basePower * pokemon.hp / pokemon.maxhp, 100);
		},
		selfdestruct: "always",
		overrideOffensiveStat: "def",
		secondary: null,
		target: "allAdjacent",
		type: "Rock",
	},
	fruitjuice: {
		num: 42016,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile'] || !pokemon.volatiles['stockpile'].layers) return false;
			return pokemon.volatiles['stockpile'].layers * 120;
		},
		category: "Special",
		isNonstandard: "Future",
		name: "Fruit Juice",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('stockpile');
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Fairy",
	},
	phantomfang: {
		num: 42017,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Future",
		name: "Phantom Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'curse',
		},
		self: {
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Ghost",
	},
	phasethrough: {
		num: 42018,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Future",
		name: "Phase Through",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	coldcutter: {
		num: 42019,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		isNonstandard: "Future",
		name: "Cold Cutter",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		target: "normal",
		type: "Ice",
	},
	shadowscales: {
		num: 42020,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		isNonstandard: "Future",
		name: "Shadow Scales",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfBoost: {
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
	},
	wingsofcorrection: {
		accuracy: true,
		basePower: 150,
		category: "Special",
		isNonstandard: "Future",
		name: "Wings Of Correction",
		pp: 5,
		priority: -6,
		flags: {protect: 1, mirror: 1, bypasssub: 1},
		forceSwitch: true,
		onHit(target, source, move) {
			let success = false;
			const removeAll = [
				'reflect', 'lightscreen', 'auroraveil', 'mirageveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'fragments', 'luckyroll'];
			for (const sideCondition of removeAll) {
				if (target.side.removeSideCondition(sideCondition)) {
					if (!removeAll.includes(sideCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}

				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}

			this.field.clearTerrain();
			this.field.clearWeather();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
	},
	brutalpunishment: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Future",
		name: "Brutal Punishment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					spa: 1,
				},
			},
		},
		onTry(source) {
			if (source.species.baseSpecies === 'Disbeary') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Brutal Punishment');
			this.hint("Only a Pokemon whose form is Disbeary or Disbeary-Ebil can use this move.");
			return null;
		},
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Disbeary-Ebil') {
				move.type = 'Dark';
			} else {
				move.type = 'Fairy';
			}
		},
		target: "normal",
		type: "Fairy",
	},
	cloudbreaker: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Cloud Breaker",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit() {
			this.field.clearWeather();
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Beautiful",
	},
	gazerbeam: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		isNonstandard: "Future",
		name: "Gazer Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	memejr: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Future",
		name: "Meme Jr.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source) {
				const boosts: StatsExceptHPTable = {
					atk: source.boosts.atk,
					def: source.boosts.def,
					spa: source.boosts.spa,
					spd: source.boosts.spd,
					spe: source.boosts.spe,
				};
				let minBoost = Infinity;
				let minBoosts: StatIDExceptHP[] = [];
				Object.entries(boosts).forEach(([statName, boostValue]) => {
					if (boostValue < minBoost) {
						minBoost = boostValue;
						minBoosts = [statName as StatIDExceptHP];
					} else if (boostValue === minBoost) {
						minBoosts.push(statName as StatIDExceptHP);
					}
				});
				if (minBoosts.length) {
					const randomStat = this.sample(minBoosts);
					const boost: SparseBoostsTable = {};
					boost[randomStat] = 1;
					this.boost(boost, source);
				} else {
					return false;
				}
			},
		},
		target: "normal",
		type: "???",
		contestType: "Cute",
	},
	shinestrike: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		isNonstandard: "Future",
		name: "Shine Strike",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 0;
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	petrify: {
		isNonstandard: "Future",
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Petrify",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Rock",
	},
	starseedblast: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Starseed Blast",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		isNonstandard: "Future",
	},
	brandingblade: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Branding Blade",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1, slicing: 1},
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		recoil: [33, 100],
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	mudmaelstrom: {
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Mud Maelstrom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ground",
		isNonstandard: "Future",
	},
	finalhour: {
		accuracy: 100,
		basePower: 200,
		category: "Special",
		name: "Final Hour",
		pp: 5,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 4,
				move: 'finalhour',
				source: source,
				moveData: {
					id: 'finalhour',
					name: "Final Hour",
					accuracy: 100,
					basePower: 200,
					category: "Special",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Dark',
				},
			});
			this.add('-start', source, 'move: Final Hour');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	turnabout: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Turnabout",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		volatileStatus: 'endure',
		onAfterMove(target, source) {
			const sourceSide = source.side;
			const targetSide = source.side.foe;
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'mirageveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'sleazyspores', 'shattershard', 'luckyroll',
			];
			let success = false;
			for (const id of sideConditions) {
				const effectName = this.dex.conditions.get(id).name;
				if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
					[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [
						targetSide.sideConditions[id], sourceSide.sideConditions[id],
					];
					this.add('-sideend', sourceSide, effectName, '[silent]');
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
					targetSide.sideConditions[id] = sourceSide.sideConditions[id];
					delete sourceSide.sideConditions[id];
					this.add('-sideend', sourceSide, effectName, '[silent]');
				} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
					sourceSide.sideConditions[id] = targetSide.sideConditions[id];
					delete targetSide.sideConditions[id];
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else {
					continue;
				}
				let sourceLayers = sourceSide.sideConditions[id] ? (sourceSide.sideConditions[id].layers || 1) : 0;
				let targetLayers = targetSide.sideConditions[id] ? (targetSide.sideConditions[id].layers || 1) : 0;
				for (; sourceLayers > 0; sourceLayers--) {
					this.add('-sidestart', sourceSide, effectName, '[silent]');
				}
				for (; targetLayers > 0; targetLayers--) {
					this.add('-sidestart', targetSide, effectName, '[silent]');
				}
				success = true;
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Turnabout');
		},
		onHit(target, source) {
			const targetBoosts: SparseBoostsTable = {};
			const sourceBoosts: SparseBoostsTable = {};

			let i: BoostID;
			for (i in target.boosts) {
				targetBoosts[i] = target.boosts[i];
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] move: Turnabout');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Endure');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Endure');
					return target.hp - 1;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		isNonstandard: "Future",
	},
	meddymeds: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Meddy Meds",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			if (source.side === target.side) {
				move.basePower = 0;
				move.infiltrates = true;
			}
		},
		onHit(target, source) {
			if (source.side === target.side) {
				if (!this.heal(Math.floor(target.baseMaxhp * 0.75))) {
					this.add('-immune', target);
				}
			}
		},
		secondary: null,
		self: {
			sideCondition: 'lightscreen',
		},
		target: "normal",
		type: "Poison",
		isNonstandard: "Future",
	},
	badeggs: {
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Bad Eggs",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	backdraft: {
		num: 366,
		accuracy: true,
		basePower: 65,
		category: "Special",
		name: "Backdraft",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			sideCondition: 'backdraft',
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: "Future",
	},
	/* :^) */
	skullcannon: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		isNonstandard: "Future",
		name: "Skull Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
			boosts: {
				atk: -1,
				def: -1,
				spa: -1,
				spd: -1,
				spe: -1,
			},
		},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		noSketch: true,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	dustcannon: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		isNonstandard: "Future",
		name: "Dust Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("Skull Cannon only works on your first turn out.");
				return false;
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
			boosts: {
				atk: -1,
				def: -1,
				spa: -1,
				spd: -1,
				spe: -1,
			},
		},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp) return target.hp - 1;
		},
		noSketch: true,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	itsover: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "It's Over",
		pp: 40,
		priority: 6,
		flags: {},
		onTryHit(target, source) {
			this.add('-nothing');
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {boost: {atk: 6, def: 6, spa: 6, spd: 6, spe: 6, accuracy: 6, evasion: 6}},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	villify: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Villify",
		pp: 20,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Dark' || !target.setType('Dark')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Dark');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	nuclearwinter: {
		accuracy: 70,
		basePower: 110,
		category: "Special",
		name: "Nuclear Winter",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Poison') return 1;
		},
		onModifyMove(move) {
			if (this.field.isWeather('hail')) move.accuracy = true;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		isNonstandard: "Future",
	},
	shroomsnuggle: {
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		name: "Shroom Snuggle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		drain: [1, 2],
		target: "allAdjacent",
		type: "Fairy",
		isNonstandard: "Future",
	},
	closeblobmat: {
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		name: "Close Blobmat",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
				spe: -1,
			},
		},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	behemothblob: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Behemoth Blob",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		isNonstandard: "Future",
	},
	sleppthatblobsthesky: {
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "Future",
		name: "Slepp That Blobs the Sky",
		pp: 1,
		priority: 0,
		flags: {},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		isZ: "ultrablobbosiumz",
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	strum: {
		num: 813,
		accuracy: 90,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (move.hit === 4) return move.basePower * 4;
			return move.basePower;
		},
		onHit(target, source, move) {
			if (move.hit === 3) move.category = 'Physical';
		},
		category: "Special",
		name: "Strum",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		multihit: 4,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
	},
	flybackfrenzy: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile']?.layers) return false;
			return pokemon.volatiles['stockpile'].layers * 100;
		},
		category: "Special",
		name: "Flyback Frenzy",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTry(source) {
			return !!source.volatiles['stockpile'];
		},
		onHit(target, source) {
			const layers = source.volatiles['stockpile']?.layers || 0;
			if (this.randomChance(2 * layers, 10)) {
				target.trySetStatus('par', target);
			}
		},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('stockpile');
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	cope: {
		accuracy: true,
		basePower: 2,
		category: "Special",
		name: "Cope",
		pp: 10,
		priority: 0,
		flags: {},
		multihit: 69,
		target: "normal",
		type: "Bug",
		isNonstandard: "Future", // TODO: Meme move
		noSketch: true,
	},
	destructionstinger: {
		accuracy: 100,
		basePower: 99,
		category: "Physical",
		name: "Destruction Stinger",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		target: "normal",
		type: "Dark",
		noSketch: true,
		isNonstandard: "Future",
	},
	extinctionwave: {
		accuracy: 100,
		basePower: 66,
		category: "Special",
		name: "Extinction Wave",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'psn' || target.status === 'tox') {
				return this.chainModify(9);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		noSketch: true,
		isNonstandard: "Future",
	},
	poisonbullet: {
		accuracy: 100,
		basePower: 152,
		category: "Physical",
		name: "Poison Bullet",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		breaksProtect: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			defender.trySetStatus('psn');
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'psn' || target.status === 'tox') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		noSketch: true,
		isNonstandard: "Future",
	},
	eternalwalk: {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "Eternal Walk",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		multihit: 255,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		noSketch: true,
		isNonstandard: "Future",
	},
	penetrate: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Penetrate",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 100,
			onHit(target, source) {
				if (!source.speciesState['parent']) {
					this.add('-activate', source, 'move: Penetrate', '[of] ' + target);
					const sourceSide = source.side;
					const targetSet = target.set;
					const baby = new Pokemon({
						...targetSet,
						name: "Unspeakable Horror",
						species: "Krissy",
						ability: "Levitate",
						moves: ['Memento', 'Glare', 'Voltaic Cyclone', 'Spikes'],
						item: "Focus Sash",
					}, sourceSide);
					baby.position = sourceSide.pokemon.length;
					sourceSide.pokemon.push(baby);
					sourceSide.pokemonLeft += 1;
					this.add('teamsize', sourceSide.id, sourceSide.pokemon.length);
					source.speciesState['parent'] = true;
				} else {
					this.add('-fail', source, 'move: Penetrate');
				}
			},
		},
		noSketch: true,
		overrideOffensivePokemon: 'target',
		target: "normal",
		type: "Flying",
		isNonstandard: "Future",
	},
	sussteelstrike: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Sussteel Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 2}, pokemon, pokemon, move);
		},
		secondary: null,
		onTry(source) {
			if (source.species.baseSpecies === 'Susko') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Sussteel Strike');
			this.hint("You are not the impostor.");
			return null;
		},
		noSketch: true,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	krackocean: {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Krackocean",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(source) {
				this.field.setWeather('raindance');
				this.field.setTerrain('electricterrain');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Water",
		isNonstandard: "Future",
	},
	matingpress: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Mating Press",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 100,
			onHit(target, source) {
				if (!source.speciesState['parent']) {
					this.add('-activate', source, 'move: Mating Press', '[of] ' + target);
					const sourceSide = source.side;
					const targetSet = target.set;
					const childName = [
						`${targetSet.species}, ${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${source.name}`,
						`${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${source.name}`,
						`${targetSet.gender === 'F' ? 'Daughter of' : targetSet.gender === 'M' ? 'Son of' : 'Offspring of'} ${source.species}`,
					].find((name) => name.length <= 18) || 'A Mere Child';
					const baby = new Pokemon({
						...targetSet,
						name: childName,
						moves: ['Metronome', 'Softboiled', 'Egg Bomb', 'Revelation Dance'],
						item: undefined,
					}, sourceSide);
					baby.position = sourceSide.pokemon.length;
					sourceSide.pokemon.push(baby);
					sourceSide.pokemonLeft += 1;
					this.add('teamsize', sourceSide.id, sourceSide.pokemon.length);
					source.speciesState['parent'] = true;
				} else {
					this.add('-fail', source, 'move: Mating Press');
				}
			},
		},
		overrideOffensiveStat: 'def',
		target: "normal",
		type: "Fairy",
		isNonstandard: "Future",
	},
	gunshot: {
		num: 441,
		accuracy: 80,
		basePower: 120,
		category: "Special",
		name: "Gun Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		onModifyMove(move, pokemon, target) {
			if (target && target.baseSpecies.id === 'vandash') {
				move.accuracy = true;
			}
		},
		onBasePower(basePower, pokemon, target) {
			if (target && target.baseSpecies.id === 'vandash') {
				return this.chainModify(100);
			}
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	lemons: {
		accuracy: 95,
		basePower: 4,
		category: "Special",
		name: "Lemons",
		pp: 40,
		priority: -1,
		flags: {pulse: 1, bullet: 1, protect: 1},
		multihit: 100,
		multiaccuracy: true,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future", // TODO: Meme move
		noSketch: true,
	},
	metalblade: {
		num: 364,
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		name: "Metal Blade",
		pp: 25,
		priority: 0,
		flags: {bullet: 1, mirror: 1},
		breaksProtect: true,
		// Breaking protection implemented in scripts.js
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	airshooter: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Air Shooter",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 1;
		},
		onBasePower(basePower, pokemon, target) {
			if (target.ability === 'levitate') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: "Future",
	},
	bubblelead: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Bubble Lead",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxsteelsurge');
				}
			},
		},
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: G-Max Steelsurge');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				// Ice Face and Disguise correctly get typed damage from Stealth Rock
				// because Stealth Rock bypasses Substitute.
				// They don't get typed damage from Steelsurge because Steelsurge doesn't,
				// so we're going to test the damage of a Steel-type Stealth Rock instead.
				const steelHazard = this.dex.getActiveMove('Stealth Rock');
				steelHazard.type = 'Steel';
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(steelHazard), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		target: "normal",
		type: "Water",
		isNonstandard: "Future",
	},
	quickboomerang: {
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		name: "Quick Boomerang",
		pp: 40,
		priority: 1,
		flags: {pulse: 1, bullet: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Electric",
		isNonstandard: "Future",
	},
	crashbomber: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Crash Bomber",
		pp: 5,
		priority: 0,
		flags: {bullet: 1},
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				move: 'crashbomber',
				source: source,
				moveData: {
					id: 'crashbomber',
					name: "Crash Bomber",
					accuracy: 100,
					basePower: 140,
					category: "Physical",
					priority: 0,
					flags: {bullet: 1},
					effectType: 'Move',
					isFutureMove: true,
					type: 'Ground',
				},
			});
			this.add('-start', source, 'Crash Bomber');
			return this.NOT_FAIL;
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		isNonstandard: "Future",
	},
	timestopper: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Time Stopper",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		status: 'frz',
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
		isNonstandard: "Future",
	},
	atomicfire: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Atomic Fire",
		pp: 5,
		priority: 0,
		flags: {pulse: 1, bullet: 1, charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.field.isTerrain('')) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		isNonstandard: "Future",
	},
	leafshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Leaf Shield",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'spikyshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		terrain: 'grassyterrain',
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	bilebite: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Bile Bite",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 30,
				status: 'tox',
			}, {
				chance: 30,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Poison",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	frigidend: {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		name: "Frigid End",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ice', type);
		},
		breaksProtect: true,
		priority: 0,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	coinflip: {
		accuracy: 50,
		basePower: 0,
		category: "Special",
		name: "Coin Flip",
		pp: 5,
		priority: 0,
		flags: {},
		ohko: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp, source, source, this.dex.conditions.get('ouchie'));
		},
		secondary: null,
		ignoreAbility: true,
		target: "normal",
		type: "???",
		noSketch: true,
		isNonstandard: "Future",
	},
	wrapd: {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		name: "Wrap-D",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'bound',
		self: {
			volatileStatus: 'partialtrappinglock',
		},
		noSketch: true,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
		// FIXME: onBeforeMove(pokemon, target) {target.removeVolatile('mustrecharge')}
		onHit(target, source) {
			/**
			 * The duration of the partially trapped must be always renewed to 2
			 * so target doesn't move on trapper switch out as happens in gen 1.
			 * However, this won't happen if there's no switch and the trapper is
			 * about to end its partial trapping.
			 **/
			if (target.volatiles['bound']) {
				if (source.volatiles['partialtrappinglock'] && source.volatiles['partialtrappinglock'].duration > 1) {
					target.volatiles['bound'].duration = 2;
				}
			}
		},
	},
	blizzardd: {
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Blizzard-D",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		isNonstandard: "Future",
	},
	amnesiad: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia-D",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 2,
			spd: 2,
		},
		secondary: null,
		noSketch: true,
		target: "self",
		type: "Psychic",
		isNonstandard: "Future",
	},
	hyperbeamd: {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Hyper Beam-D",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onMoveFail(target, source, move) {
			source.addVolatile('mustrecharge');
		},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	darkening: {
		accuracy: 100,
		basePower: 135,
		category: "Physical",
		name: "Darkening",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 1],
		secondary: null,
		noSketch: true,
		onTry(source) {
			if (source.species.baseSpecies === 'Doomsday') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Darkening');
			this.hint("You lack the power.");
			return null;
		},
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Doomsday-Revenant') {
				move.type = 'Dark';
			} else {
				move.type = 'Ghost';
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.species.name === 'Doomsday-Revenant') move.category = 'Special';
		},
		target: "allAdjacent",
		type: "Ghost",
		isNonstandard: "Future",
	},
	blackbomb: {
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Black Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		onTry(source, target) {
			if (!source.volatiles['buried']) {
				source.addVolatile('buried');
			} else {
				source.removeVolatile('buried');
				source.addVolatile('buried');
			}
		},
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	beamblade: {
		accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Beam Blade",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	bearhug: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Bear Hug",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'temptrapped',
		onAfterHit(target, source, move) {
			const poisonContact = [
				'poisonpoint', 'poisontouch',
			];
			const toxicContact = [
				'tetanus',
			];
			const burnContact = [
				'flamebody',
			];
			const speedContact = [
				'tanglinghair', 'gooey',
			];
			const damageContact = [
				'ironbarbs', 'roughskin', 'feelthefoliage',
			];
			const rockyContact = [
				'rockyhelmet',
			];
			const stealContact = [
				'pickpocket', 'magician',
			];
			const paralyzeContact = [
				'static',
			];
			const infatuateContact = [
				'cutecharm',
			];
			const mummyContact = [
				'mummy', 'woke',
			];
			const randomContact = [
				'effectspore',
			];
			const grassContact = [
				'feelthefoliage',
			];
			const random = this.random(3);
			if (poisonContact.includes(source.ability)) {
				if (random === 0) {
					target.trySetStatus('psn', source);
				}
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (toxicContact.includes(source.ability)) {
				target.trySetStatus('tox', source);
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (burnContact.includes(source.ability)) {
				if (random === 0) {
					target.trySetStatus('brn', source);
				}
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (speedContact.includes(source.ability)) {
				this.boost({spe: -1}, target, source, this.dex.getActiveMove("Bear Hug"));
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (damageContact.includes(source.ability)) {
				this.damage(target.baseMaxhp / 8, target, source);
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (stealContact.includes(source.ability)) {
				if (source.item) {
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
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (paralyzeContact.includes(source.ability)) {
				if (random === 0) {
					target.trySetStatus('par', source);
				}
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (infatuateContact.includes(source.ability)) {
				if (random === 0) {
					if (source.isActive) target.addVolatile('attract', source, move, 'trapper');
				}
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
			} else if (mummyContact.includes(source.ability)) {
				const oldAbility = target.setAbility(source.ability);
				if (oldAbility) {
					this.add('-ability', target, target.getAbility().name, '[from] move: Bear Hug');
					if (!target.isAlly(source)) target.volatileStaleness = 'external';
					return;
				}
				if (rockyContact.includes(source.item)) {
					this.damage(target.baseMaxhp / 6, target, source);
				}
				return false;
			} else if (randomContact.includes(source.ability)) {
				if (random === 0) {
					const result = this.random(3);
					if (result === 0) {
						target.trySetStatus('psn', source);
					} else if (result === 1) {
						target.trySetStatus('par', source);
					} else {
						target.trySetStatus('slp', source);
					}
					if (rockyContact.includes(source.item)) {
						this.damage(target.baseMaxhp / 6, target, source);
					}
				}
			} else if (rockyContact.includes(source.item)) {
				this.damage(target.baseMaxhp / 6, target, source);
			} else if (grassContact.includes(source.ability)) {
				if (random === 0) {
					const result = this.random(3);
					if (result === 0) {
						target.trySetStatus('psn', source);
					} else if (result === 1) {
						target.trySetStatus('par', source);
					} else {
						target.trySetStatus('brn', source);
					}
				}
			}
		},
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
	},
	chilipowder: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Chili Powder",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		isNonstandard: "Future",
	},
	thunderdrop: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Thunder Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				delete move.flags.contact;
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Sky Drop', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Thunder Drop');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Thunder drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				const moves = ['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'airshooter'];
				if (moves.includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister' || move.id === 'airshooter') {
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Electric",
		isNonstandard: "Future",
	},
	faeblade: {
		accuracy: 100,
		basePower: 80,
		name: "Faeblade",
		category: "Physical",
		overrideDefensiveStat: 'spd',
		secondary: null,
		target: "normal",
		type: "Fairy",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},

		isNonstandard: "Future",
	},
	stickytongue: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Sticky Tongue",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				const hurtItem = [
					'stickybarb',
				];
				const burnItem = [
					'flameorb',
				];
				const poisonItem = [
					'poisonbarb',
				];
				const toxicItem = [
					'toxicorb',
				];
				const paralyzeItem = [
					'lightball',
				];
				const whiteherbItem = [
					'whiteherb',
				];
				const mentalherbItem = [
					'mentalherb',
				];
				if (item) {
					if (source.hp && item.isBerry && target.takeItem(source)) {
						this.add('-enditem', target, item.name, '[from] stealeat', '[move] Sticky Tongue', '[of] ' + source);
						if (this.singleEvent('Eat', item, null, source, null, null)) {
							this.runEvent('EatItem', source, null, null, item);
							if (item.id === 'leppaberry') target.staleness = 'external';
						}
						if (item.onEat) source.ateBerry = true;
					} else if (hurtItem.includes(target.item)) {
						this.damage(source.baseMaxhp / 8);
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (burnItem.includes(target.item)) {
						source.trySetStatus('brn', target);
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (poisonItem.includes(target.item)) {
						source.trySetStatus('psn', target);
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (toxicItem.includes(target.item)) {
						source.trySetStatus('tox', target);
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (paralyzeItem.includes(target.item)) {
						source.trySetStatus('par', target);
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (whiteherbItem.includes(target.item)) {
						let activate = false;
						const boosts: SparseBoostsTable = {};
						let i: BoostID;
						for (i in source.boosts) {
							if (source.boosts[i] < 0) {
								activate = true;
								boosts[i] = 0;
							}
						}
						if (activate) {
							source.setBoost(boosts);
							this.add('-clearnegativeboost', source, '[silent]');
						}
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else if (mentalherbItem.includes(target.item)) {
						const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
						for (const firstCondition of conditions) {
							if (source.volatiles[firstCondition]) {
								for (const secondCondition of conditions) {
									source.removeVolatile(secondCondition);
									if (firstCondition === 'attract' && secondCondition === 'attract') {
										this.add('-end', source, 'move: Attract', '[from] item: Mental Herb');
									}
								}
								return;
							}
						}
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					} else {
						this.add('-enditem', target, item.name, '[from] move: Sticky Tongue', '[of] ' + source);
					}
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		isNonstandard: "Future",
	},
	rocketpunch: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Rocket Punch",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("Rocket Punch only works on your first turn out.");
				return false;
			}
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
	},
	powerwasher: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Power Washer",
		pp: 5,
		priority: -1,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Water",
		isNonstandard: "Future",
	},
	cherrybomb: {
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Cherry Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		isNonstandard: "Future",
	},
	crashhopper: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Crash Hopper",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1, gravity: 1},
		onMoveFail(target, source) {
			source.trySetStatus('par');
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Bug",
		isNonstandard: "Future",
	},
	flakcannon: {
		accuracy: 100,
		basePower: 105,
		category: "Special",
		name: "Flak Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, allyanim: 1},
		willCrit: true,
		onPrepareHit(target, source, move) {
			if (source.ignoringItem()) return false;
			const item = source.getItem();
			if (!this.singleEvent('TakeItem', item, source.itemState, source, source, move, item)) return false;
			if (!item.fling) return false;
			if (item.fling.effect) {
				move.onHit = item.fling.effect;
			} else {
				if (!move.secondaries) move.secondaries = [];
				if (item.fling.status) {
					move.secondaries.push({status: item.fling.status});
				} else if (item.fling.volatileStatus) {
					move.secondaries.push({volatileStatus: item.fling.volatileStatus});
				}
			}
			source.addVolatile('flakcannon');
		},
		condition: {
			onUpdate(pokemon) {
				const item = pokemon.getItem();
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.add('-enditem', pokemon, item.name, '[from] move: Flak Cannon');
				this.runEvent('AfterUseItem', pokemon, null, null, item);
				pokemon.removeVolatile('flakcannon');
			},
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	fractus: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Fractus",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: "Future",
	},
	extinction: {
		accuracy: 30,
		basePower: 0,
		category: "Special",
		name: "Extinction",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMove: {basePower: 650},
		maxMove: {basePower: 250},
		isNonstandard: "Future",
	},
	purge: {
		accuracy: 100,
		basePower: 55,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) {
				this.debug('BP tripled from status condition');
				return move.basePower * 3;
			}
			return move.basePower;
		},
		onHit(target, source) {
			target.cureStatus();
		},
		category: "Special",
		name: "Purge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		isNonstandard: "Future",
	},
	uproot: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Uproot",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
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
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Grass",
		isNonstandard: "Future",
	},
	frostbite: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Frostbite",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (this.field.isWeather('')) return;
			move.secondaries = [];
			if (this.field.isWeather(['hail'])) {
				move.secondaries.push({
					chance: 100,
					boosts: {
						spa: -2,
					},
				});
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		isNonstandard: "Future",
	},
	calibrate: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calibrate",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		isNonstandard: "Future",
	},
	braindamage: {
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Brain Damage",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Psychic",
		isNonstandard: "Future",
	},
	flintfang: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Flint Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onHit(target, source) {
			if (target.getTypes().join() === "Steel") {
				target.trySetStatus('brn', source);
			}
		},
		secondaries: [
			{
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Rock",
		isNonstandard: "Future",
	},
	mirageveil: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mirage Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'mirageveil',
		onTry() {
			return this.field.isWeather(['sandstorm']);
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onModifyAtk(atk, pokemon) {
				return this.chainModify(1.5);
			},
			onModifySpA(atk, pokemon) {
				return this.chainModify(1.5);
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Mirage Veil');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 10,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Mirage Veil');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ground",
		zMove: {boost: {spa: 1}},
		isNonstandard: "Future",
	},
	neosporin: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Neosporin",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('wonderskin')) {
				success = !!this.heal(this.modify(target.baseMaxhp, 1));
			} else {
				success = !!this.heal(Math.ceil(target.baseMaxhp * 0.5));
			}
			if (success && !target.isAlly(source)) {
				target.staleness = 'external';
			}
			return success;
		},
		secondary: null,
		target: "any",
		type: "Poison",
		isNonstandard: "Future",
	},
	inverserush: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Inverse Rush",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,

		onBasePower(basePower, pokemon, target) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		noSketch: true,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
		maxMove: {basePower: 140},
	},
	terradozer: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Terra Dozer",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
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
				},
			},
		},
		noSketch: true,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	yiikout: {
		num: 69010,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Yiik Out",
		pp: 10,
		priority: 3,
		flags: {sound: 1, protect: 1, mirror: 1, bypasssub: 1},
		onTry(pokemon, target) {
			if (pokemon.activeTurns > 1) {
				this.attrLastMove('[still]');
				this.add('-fail', pokemon);
				this.hint("Yiik is only fun for the first five minutes.");
				return null;
			}
		},
		onTryHit(target, source) {
			if (target === source || target.volatiles['dynamax']) return false;

			const additionalBannedSourceAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			if (
				target.getAbility().isPermanent || target.ability === 'truant' ||
				source.getAbility().isPermanent || additionalBannedSourceAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = target.setAbility(source.ability);
			if (oldAbility) {
				this.add('-ability', target, target.getAbility().name, '[from] move: Yiikout');
				if (!target.isAlly(source)) target.volatileStaleness = 'external';
				return;
			}
			return false;
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',

		},
		noSketch: true,
		target: "normal",
		type: "Fairy",
		zMove: {basePower: 120},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	roidflex: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roid Flex",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		boosts: {
			accuracy: 1,
		},
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		onAfterMove(source) {
			source.trySetStatus('psn');
		},
		secondary: null,
		noSketch: true,
		target: "self",
		type: "Fighting",
		isNonstandard: "Future",
		zMove: {boost: {evasion: 1}},
		contestType: "Cool",
	},
	genwunroom: {
		num: 1001,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Genwun Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'genwunroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Genwun Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('genwunroom');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 6,
			onFieldEnd() {
				this.add('-fieldend', 'move: Genwun Room', '[of] ' + this.effectState.source);
			},
		},
		secondary: null,
		noSketch: true,
		target: "all",
		type: "Psychic",
		isNonstandard: "Future",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},

	backroom: {
		num: 366,
		accuracy: true,
		basePower: 65,
		category: "Physical",
		name: "Backroom",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit() {
			this.field.addPseudoWeather('trickroom', null, this.activeMove);
		},
		secondary: null,
		noSketch: true,
		selfSwitch: true,
		target: "normal",
		type: "Ground",
		isNonstandard: "Future",
	},

	charmerssong: {
		num: 273,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Charmer's Song",
		pp: 10,
		priority: -6,
		flags: {protect: 1, mirror: 1, sound: 1},
		forceSwitch: true,
		slotCondition: 'charmerssong',
		condition: {
			onSwap(target) {
				target.addVolatile('taunt');
				target.side.removeSlotCondition(target, 'charmerssong');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Poison",
		isNonstandard: "Future",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},

	psychospell: {
		num: 42003,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Psycho Spell",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('psychicterrain');
				},
			},
		},
		noSketch: true,
		target: "normal",
		type: "Psychic",
		isNonstandard: "Future",
	},


	wonderwand: {
		num: 42003,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Wonder Wand",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.addPseudoWeather('wonderroom');
				},
			},
		},
		noSketch: true,
		target: "normal",
		type: "Fairy",
		isNonstandard: "Future",
	},


	implosion: {
		num: 42003,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Implosion",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.addPseudoWeather('inverseroom');
				},
			},
		},
		noSketch: true,
		target: "allAdjacent",
		type: "Fire",
		isNonstandard: "Future",
	},

	portalgun: {
		num: 509,
		accuracy: 90,
		basePower: 90,
		category: "Special",
		name: "Portal Gun",
		pp: 10,
		priority: -6,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
		selfSwitch: true,
		forceSwitch: true,
		noSketch: true,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		isNonstandard: "Future",
	},

	sportsball: {
		num: 42003,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		name: "Sportsball",
		pp: 10,
		priority: 0,
		multihit: 2,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.addPseudoWeather('mudsport');
					this.field.addPseudoWeather('watersport');
				},
			},
		},
		noSketch: true,
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
	},
	rainbowbeam: {
		num: 69048,
		accuracy: 100,
		basePower: 69,
		category: "Special",
		name: "Rainbow Beam",
		pp: 10,
		priority: 0,
		target: "normal",
		noSketch: true,
		type: "???",
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return this.dex.types.all().reduce(
				(currentTypeMod, dexType) => currentTypeMod + this.dex.getEffectiveness(dexType.name, type),
				typeMod,
			);
		},
		isNonstandard: "Future",
	},
	freikugel: {
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		isNonstandard: "Future",
		name: "Freikugel",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		onModifyMove(move) {
			if (this.field.getPseudoWeather('magicroom')) {
				move.accuracy = true;
			}
		},
		onDamage(damage, target, source, effect) {
			if (this.field.getPseudoWeather('magicroom')) {
				if (effect.id === 'recoil') {
					if (!this.activeMove) throw new Error("Battle.activeMove is null");
					if (this.activeMove.id !== 'struggle') return null;
				}
			}
		},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		maxMove: {basePower: 200},
	},
	confettigun: {
		accuracy: 100,
		basePower: 200,
		category: "Special",
		isNonstandard: "Future",
		name: "Confetti Gun",
		pp: 15,
		priority: 0,
		flags: {distance: 1, protect: 1, mirror: 1, bullet: 1},
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
		target: "normal",
		noSketch: true,
		type: "Normal",
		contestType: "Cute",
	},
	butterflykick: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Butterfly Kick",
		pp: 10,
		priority: 0,
		target: "normal",
		noSketch: true,
		type: "Bug",
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fighting', type);
		},
		isNonstandard: "Future",
	},
	toxicbeam: {
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Toxic Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'tox',
		},
		target: "normal",
		noSketch: true,
		type: "Poison",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	windwhip: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Wind Whip",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		noSketch: true,
		type: "Flying",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	firewall: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Firewall",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'firewall',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
					source.trySetStatus('brn', target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					source.trySetStatus('brn', target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Fire",
		noSketch: true,
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	maximize: {
		accuracy: 100,
		basePower: 300,
		category: "Physical",
		name: "Maximize",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				evasion: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		noSketch: true,
		contestType: "Tough",
		isNonstandard: "Future",
	},
	seaquake: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Seaquake",
		pp: 10,
		priority: 0,
		target: "normal",
		noSketch: true,
		type: "Water",
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ground', type);
		},
		isNonstandard: "Future",
	},
	edgequake: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Edgequake",
		pp: 10,
		priority: 0,
		target: "normal",
		noSketch: true,
		type: "Rock",
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ground', type);
		},
		isNonstandard: "Future",
	},
	sugarrush: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sugar Rush",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.spa >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({spa: 12}, target);
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		noSketch: true,
		zMove: {effect: 'heal'},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	sleepingsands: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Sleeping Sands",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		target: "normal",
		type: "Ground",
		noSketch: true,
		isNonstandard: "Future",
	},
	fuckyou: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fuck You",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -6, def: -6, spa: -6, spd: -6, spe: -6, accuracy: -6, evasion: -6}, target, source);
			if (!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		selfSwitch: true,
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Fighting",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	absolutezero: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Absolute Zero",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'frz',
		},
		target: "normal",
		noSketch: true,
		type: "Ice",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	poisonivy: {
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Poison Ivy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 30,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('tox', source);
				} else {
					target.trySetStatus('par', source);
				}
			},
		},
		target: "normal",
		noSketch: true,
		type: "Grass",
		zMove: {basePower: 160},
		isNonstandard: "Future",
	},
	bloodletting: {
		accuracy: true,
		basePower: 40,
		category: "Status",
		name: "Bloodletting",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spe: 1,
		},
		secondary: null,
		noSketch: true,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	telluriccurrent: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Future",
		name: "Telluric Current",
		pp: 20,
		priority: 0,
		ignoreImmunity: {'Electric': true},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		noSketch: true,
		type: "Electric",
		contestType: "Cool",
	},
	rockout: {
		num: 369,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Rock Out",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, sound: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	twintowertumblingterror: {
		accuracy: true,
		basePower: 290,
		category: "Physical",
		isNonstandard: "Future",
		name: "Twin Tower Tumbling Terror",
		pp: 1,
		priority: 0,
		flags: {contact: 1, hammer: 1},
		isZ: "sableviumz",
		onAfterMove(source) {
			source.trySetStatus('brn');
		},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		target: "normal",
		type: "Steel",
		contestType: "Smart",
	},
	toppingtoss: {
		accuracy: 100,
		basePower: 50,
		onHit(target, source, move) {
			if (move.hit === 1) { move.type = 'Grass'; } else if (move.hit === 2) { move.type = 'Ground'; }
		},
		category: "Special",
		name: "Topping Toss",
		isNonstandard: "Future",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Fire",
		noSketch: true,
		contestType: "Cool",
	},
	heavensblessing: {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heaven's Blessing",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		slotCondition: 'Wish',
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		noSketch: true,
		target: "self",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	sandysnore: {
		num: 173,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Sandy Snore",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose') || source.hasAbility('boardpowerz') || source.hasAbility('lethargic');
		},
		self: {
			onHit(target, source) {
				this.field.setWeather('sandstorm');
				const oldAbility = source.setAbility('sandrush');
				if (oldAbility) {
					this.add('-ability', source, 'Sand Rush', '[from] move: Sandy Snore');
					return;
				}
				return false;
			},
		},


		noSketch: true,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	amogus: {
		num: 1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Amogus",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "???",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	bushido: {
		accuracy: 100,
		basePower: 15,
		category: "Special",
		name: "Bushido",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 4,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
		noSketch: true,
	},
	groundbomb: {
			accuracy: 100,
			basePower: 200,
			category: "Special",
			name: "Ground Bomb",
			pp: 5,
			priority: 0,
			flags: {},
			ignoreImmunity: true,
			isFutureMove: true,
			onTry(source, target) {
				if (!target.side.addSlotCondition(target, 'futuremove')) return false;
				Object.assign(target.side.slotConditions[target.position]['futuremove'], {
					duration: 4,
					move: 'groundbomb',
					source: source,
					moveData: {
						id: 'groundbomb',
						name: "Ground Bomb",
						accuracy: 100,
						basePower: 200,
						category: "Special",
						priority: 0,
						flags: {},
						ignoreImmunity: false,
						effectType: 'Move',
						isFutureMove: true,
						type: 'Ground',
					},
				});
				this.add('-start', source, 'move: Ground Bomb');
				return this.NOT_FAIL;
			},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Ground",
		zMove: {basePower: 180},
		isNonstandard: "Future",
		noSketch: true,
	},
	chernoboil: {
		accuracy: 100,
		basePower: 26,
		category: "Special",
		name: "Chernoboil",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "???",
		contestType: "Tough",
		isNonstandard: "Future",
		noSketch: true,
	},
	halflife: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		category: "Special",
		name: "Half-Life",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Tough",
		isNonstandard: "Future",
		noSketch: true,
	},
	obsidianhorn: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Obsidian Horn",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
					spd: 1,
				},
			},
		},
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
		contestType: "Cool",
		noSketch: true,
	},
	feudefee: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Feu de Fe\u0301e",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cute",
		isNonstandard: "Future",
		noSketch: true,
	},
	heavenpierce: {
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Heaven Pierce",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, defrost: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		ignoreAbility: true,
		ignoreImmunity: {'Steel': true},
		breaksProtect: true,
		willCrit: true,
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	fughamut: {
		accuracy: true,
		basePower: 90,
		category: "Status",
		name: "Fughamut",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 100,
			onHit(target, source) {
				if (!source.speciesState['parent']) {
					this.add('-activate', source, 'move: Fughamut', '[of] ' + target);
					const sourceSide = source.side;
					const baby = new Pokemon({
						species: 'Rayquaza',
						name: "Fug",
						moves: ['Draco Meteor', 'Extreme Speed', 'Overheat', 'Dragon Ascent'],
						item: 'Life Orb',
					}, sourceSide);
					baby.position = sourceSide.pokemon.length;
					sourceSide.pokemon.push(baby);
					sourceSide.pokemonLeft += 1;
					this.add('teamsize', sourceSide.id, sourceSide.pokemon.length);
					source.speciesState['parent'] = true;
				} else {
					this.add('-fail', source, 'move: Fughamut');
				}
			},
		},
		target: "normal",
		type: "Dragon",
		isNonstandard: "Future",
	},
	feedandseed: {
		num: 738,
		accuracy: 80,
		basePower: 85,
		category: "Special",
		isNonstandard: "Future",
		name: "Feed and Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1},
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
			const oldAbility = target.setAbility('insomnia');
			if (oldAbility) {
				this.add('-ability', target, 'Insomnia', '[from] move: Feed and Seed');
				if (target.status === 'slp') {
					target.cureStatus();
				}
				return;
			}
		},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('grassyterrain');
				},
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	atombomb: {
		num: 69003,
		accuracy: 100,
		basePower: 151,
		category: "Special",
		name: "Atom Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "???",
		zMove: {basePower: 200},
		isNonstandard: "Future",
	},
	radiation: {
		num: 487,
		accuracy: 100,
		basePower: 37,
		category: "Special",
		name: "Radiation",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target) {
				if (target.getTypes().join() === 'Nuclear' || !target.setType('Nuclear')) {
					// Soak should animate even when it fails.
					// Returning false would suppress the animation.
					this.add('-fail', target);
					return null;
				}
				this.add('-start', target, 'typechange', 'Nuclear');
			},
		},
		target: "normal",
		type: "Nuclear",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	nuclearmeltdown: {
		num: 557,
		accuracy: 95,
		basePower: 37,
		category: "Physical",
		name: "Nuclear Meltdown",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				atk: -1,
				spa: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "???",
		zMove: {basePower: 220},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	deepfry: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Deep Fry",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onHit(target, source) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Deep Fry', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				if (target.hasItem('choiceband')) {
					this.boost({atk: 1}, source);
				}
				if (target.hasItem('choicespecs')) {
					this.boost({spa: 1}, source);
				}
				if (target.hasItem('choicescarf')) {
					this.boost({spe: 1}, source);
				}
				if (target.hasItem('assaultvest')) {
					this.boost({spd: 1}, source);
				}
				if (target.hasItem('leftovers')) {
					this.heal(source.baseMaxhp / 2, source, target);
				}
				if (target.hasItem('lifeorb')) {
					this.boost({spa: 1}, source);
					this.boost({atk: 1}, source);
					this.damage(source.baseMaxhp / 4, source, target);
				}
				if (target.hasItem('weaknesspolicy')) {
					this.boost({spa: 2}, source);
					this.boost({atk: 2}, source);
					this.add('-message', 'oh fug oh shid');
				}
				if (target.hasItem('whiteherb')) {
					let activate = false;
					const boosts: SparseBoostsTable = {};
					let i: BoostID;
					for (i in source.boosts) {
						if (source.boosts[i] < 0) {
							activate = true;
							boosts[i] = 0;
						}
					}
					if (activate) {
						source.setBoost(boosts);
						this.add('-clearnegativeboost', source, '[silent]');
					}
				}
				if (target.hasItem('lightball')) {
					this.boost({spa: 1}, source);
					this.boost({atk: 1}, source);
					source.trySetStatus('par', target);
				}
				if (target.hasItem('blacksludge')) {
					source.trySetStatus('psn', target);
				}

				const item = target.takeItem();

				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Deep Fry', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	sunburst: {
		num: 173,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Sunburst",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		self: {
			onHit(source) {
				this.field.setWeather('sunnyday');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Grass",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	floofandpoof: {
		num: 69028,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Floof and Poof",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1},
		onHit(target, source, move) {
			source.side.addSideCondition('luckychant');
			source.side.addSideCondition('safeguard');
			source.side.addSideCondition('mist');
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		overrideOffensiveStat: 'def',
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
	},
	blobblast: {
		num: 66,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Blobblast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	skulltoss: {
		num: 488,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Skull Toss",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(pokemon) {
			if (pokemon.weighthg > 1) {
				pokemon.weighthg = Math.max(1, pokemon.weighthg - 1000);
				this.add('-start', pokemon, 'Autotomize');
			}
		},
		onHit(pokemon, target) {
			if (target.volatiles['skulltoss'] && target.volatiles['skulltoss'].layers >= 1) return false;
		},
		volatileStatus: 'Skull Toss',
		condition: {
			noCopy: true,
			onStart(pokemon, target) {
				this.effectState.layers = 1;
				this.effectState.spe = 0;
				this.add('-start', target, 'skulltoss' + this.effectState.layers);
				const [curSpe] = [target.boosts.spe];
				this.boost({spe: 1}, target);
				if (curSpe !== target.boosts.spe) this.effectState.spe--;
			},
			onRestart(pokemon, target) {
				if (this.effectState.layers >= 1) return false;
				this.effectState.layers++;
				this.add('-start', target, 'skulltoss' + this.effectState.layers);
				const curSpe = target.boosts.spe;
				this.boost({spe: 1}, target);
				if (curSpe !== target.boosts.spe) this.effectState.spe--;
			},
			onEnd(target) {
				if (this.effectState.def || this.effectState.spd) {
					const boosts: SparseBoostsTable = {};
					if (this.effectState.spe) boosts.spe = this.effectState.spe;
					this.boost(boosts, target);
				}
				this.add('-end', target, 'skulltoss');
				if (this.effectState.spe !== this.effectState.layers * -1 * -1) {
					this.hint("In Gen 7, Stockpile keeps track of how many times it successfully altered each stat individually.");
				}
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	flashbang: {
		num: 366,
		accuracy: true,
		basePower: 70,
		category: "Special",
		name: "Flashbang",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			sideCondition: 'flashbang',
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	doubleiceblob: {
		num: 742,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Double Ice Blob",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: 2,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		isNonstandard: "Future",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	extremesneed: {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Extreme Sneed",
		pp: 5,
		priority: 2,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
		contestType: "Cool",
	},
	bouncyball: {
		num: 583,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Bouncy Ball",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	battlecry: {
		num: 612,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Battle Cry",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	sereneshockwave: {
		num: 215,
		basePower: 120,
		accuracy: 90,
		category: "Physical",
		name: "Serene Shockwave",
		pp: 5,
		priority: 0,
		flags: {protect: 1, sound: 1, mirror: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ally.hasAbility(['soundproof', 'cacophony'])) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "normal",
		type: "Psychic",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	flashfreeze: {
		num: 420,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Flash Freeze",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	electromagnetism: {
		num: 393,
		accuracy: 85,
		basePower: 115,
		category: "Special",
		name: "Electromagnetism",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			sideCondition: 'magnetrise',
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	nosedive: {
		num: 354,
		accuracy: 95,
		basePower: 120,
		category: "Physical",
		isNonstandard: "Future",
		name: "Nosedive",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		self: {
			boosts: {
				def: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	paranormalactivity: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Future",
		name: "Paranormal Activity",
		pp: 10,
		priority: 0,
		ignoreImmunity: {'Ghost': true},
		flags: {protect: 1, mirror: 1},
		target: "normal",
		noSketch: true,
		type: "Ghost",
		contestType: "Cool",
	},
	downpour: {
		num: 173,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Downpour",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(source) {
				this.field.setWeather('raindance');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Water",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	icestorm: {
		num: 173,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Ice Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		sleepUsable: true,
		secondary: {
			chance: 10,
			status: 'frz',
		},
		self: {
			onHit(source) {
				this.field.setWeather('hail');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Ice",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	titaniumclap: {
		num: 550,
		accuracy: 85,
		basePower: 125,
		category: "Physical",
		name: "Titanium Clap",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	hypersomnia: {
		num: 738,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		isNonstandard: "Future",
		name: "Hypersomnia",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1},
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('lethargic');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Lethargic', '[from] move: Hypersomnia');
				return;
			}
			return false;
		},
		self: {
			onHit(target, source) {
				const oldAbility = source.setAbility('baddreams');
				if (oldAbility) {
					this.add('-ability', source, 'Bad Dreams', '[from] move: Hypersomnia');
					return;
				}
				return false;
			},
		},
		onAfterHit(target, source) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('nightmare');
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	abduction: {
		num: 509,
		accuracy: 90,
		basePower: 90,
		category: "Special",
		name: "Abduction",
		pp: 10,
		priority: -6,
		flags: {protect: 1, mirror: 1, distance: 1},
		selfSwitch: true,
		forceSwitch: true,
		noSketch: true,
		target: "normal",
		type: "???",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	xenobeam: {
		num: 487,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Xenobeam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		secondary: {
			chance: 100,
			onHit(target) {
				if (target.getTypes().join() === '???' || !target.setType('???')) {
					// Soak should animate even when it fails.
					// Returning false would suppress the animation.
					this.add('-fail', target);
					return null;
				}
				this.add('-start', target, 'typechange', '???');
			},
		},
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	infectiouswheeze: {
		num: 594,
		accuracy: 100,
		basePower: 25,
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Blobbos-Zombie') {
				move.type = 'Ghost';
			} else {
				move.type = 'Poison';
			}
		},
		category: "Special",
		name: "Infectious Wheeze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	siphon: {
		num: 577,
		accuracy: 85,
		basePower: 100,
		category: "Special",
		name: "Siphon",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	letssleppforever: {
		num: 700,
		accuracy: true,
		basePower: 190,
		category: "Special",
		isNonstandard: "Future",
		name: "Let's Slepp Forever",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "blobbosmikiumz",
		secondary: {
			chance: 100,
			status: 'slp',
		},
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	shadowban: {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Shadowban",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'taunt',
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectState.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		self: {
			boosts: {
				spe: +1,
			},
		},
		target: "normal",
		type: "Ghost",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	energyburst: {
		num: 406,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Energy Burst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Normal",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	plasticterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Plastic Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'plasticterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by plastic terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Plastic' && attacker.isGrounded()) {
					this.debug('plastic terrain boost');
					return this.chainModify([1.5]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Plastic Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Plastic Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					if (pokemon.item || !pokemon.lastItem) return false;
					const item = pokemon.lastItem;
					pokemon.lastItem = '';
					this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Recycle');
					pokemon.setItem(item);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Plastic Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Plastic",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	highjumpsaw: {
		num: 136,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "High Jump Saw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1, punch: 1},

		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Steel', type);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	stingingrage: {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Stinging Rage",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		selfdestruct: "always",
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	malicepowder: {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Malice Powder",
		pp: 20,
		priority: 0,
		flags: {powder: 1, protect: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		onHit(target, source) {
			source.addVolatile('confusion');
			target.addVolatile('partiallytrapped');
			source.addVolatile('partiallytrapped');
		},
		target: "allAdjacent",
		type: "Bug",
		zMove: {boost: {spa: 1}},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	overdose: {
		num: 457,
		accuracy: 80,
		basePower: 150,
		category: "Special",
		name: "Overdose",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	bloodshot: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Blood Shot",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.addVolatile('confusion');
				}
			},
		},
		target: "normal",
		type: "???",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	glassing: {
		num: 487,
		accuracy: 90,
		basePower: 80,
		category: "Special",
		name: "Glassing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		secondary: {
			chance: 100,
			onHit(target) {
				if (target.getTypes().join() === 'Glass' || !target.setType('Glass')) {
					// Soak should animate even when it fails.
					// Returning false would suppress the animation.
					this.add('-fail', target);
					return null;
				}
				this.add('-start', target, 'typechange', 'Glass');
			},
		},
		target: "normal",
		type: "Glass",
		zMove: {boost: {spa: 1}},
		contestType: "Smart",
		isNonstandard: "Future",
	},
	meltedplastic: {
		num: 503,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Melted Plastic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Plastic",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	plasticblaze: {
		num: 551,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		name: "Plastic Blaze",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			status: 'brn',
		},
		target: "normal",
		type: "Plastic",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	fadereflection: {
		num: 223,
		accuracy: 90,
		basePower: 85,
		category: "Special",
		name: "Fade Reflection",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			volatileStatus: 'disable',
		},
		target: "normal",
		type: "Glass",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	recycleray: {
		num: 94,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Recycle Ray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Plastic",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	spectresabre: {
		num: 530,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Spectre Sabre",
		pp: 15,
		priority: 0,
		flags: {slicing: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ghost",
		maxMove: {basePower: 150},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	skummray: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Skumm Ray",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			onHit(target, source) {
				const result = this.random(4);
				if (result === 0) {
					target.trySetStatus('slp', source);
				} else if (result === 1) {
					target.trySetStatus('frz', source);
				} else if (result === 2) {
					target.trySetStatus('par', source);
				} else {
					target.addVolatile('flinch');
				}
			},
		},
		target: "normal",
		type: "???",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	hyperzone: {
		num: 1001,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hyper Zone",
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'hyperzone',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				if (target.isSemiInvulnerable() || target.isAlly(source)) return;
				if (!(target.hasType('Dark'))) {
					const baseMove = this.dex.moves.get(effect.id);
					if (baseMove.priority > 0) return;
				}
				this.add('-activate', target, 'move: Hyper Zone');
				return null;
			},
			onSetStatus(status, target, source, effect) {
				if (!(target.hasType('Dark'))) {
					if (((effect as Move)?.status)) return;
				}
				this.add('-immune', target, '[from] move: Hyper Zone');
				return false;
			},
			onModifyMove(move, target, source) {
				if ((target.hasType('Dark'))) {
					move.infiltrates = true;
					this.add('-activate', target, 'move: Hyper Zone');
				}
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Hyper Zone', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('hyperzone');
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 6,
			onFieldEnd() {
				this.add('-fieldend', 'move: Hyper Zone', '[of] ' + this.effectState.source);
			},
		},
		secondary: null,
		noSketch: true,
		target: "all",
		type: "Dark",
		isNonstandard: "Future",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
	},
	freeballoonday: {
		num: 788,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Free Balloon Day",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.hasItem('airballoon') && pokemon.hasItem('airballoon')) {
				return this.chainModify(4);
			} else if (pokemon.hasItem('airballoon')) {
				return this.chainModify(2);
			} else if (target.hasItem('airballoon')) {
				return this.chainModify(2);
			}
		},
		onAfterHit(pokemon, target) {
			if (!pokemon.item) {
				pokemon.setItem('airballoon');
			}
			if (!target.item) {
				target.setItem('airballoon');
			}
		},
		isNonstandard: "Future",
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	helldive: {
		num: 893,
		accuracy: 85,
		basePower: 160,
		category: "Special",
		name: "Hell Dive",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		// Move disabling implemented in Battle#nextTurn in sim/battle.ts
		onTry(source) {
			source.addVolatile('helldive');
		},
		condition: {
			duration: 2,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'helldive') {
					this.add('cant', pokemon, 'move: Hell Dive', move);
					pokemon.removeVolatile('helldive');
					return false;
				}
			},
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: null,
		isNonstandard: "Future",
		target: "normal",
		type: "Dark",
	},
	mushroomshot: {
		num: 788,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		name: "Mushroom Shot",
		pp: 10,
		priority: 0,
		multihit: 4,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target) {
			if (this.field.getPseudoWeather('gravity') && (target.volatiles['partiallytrapped'])) {
				return this.chainModify(3);
			}
			if (target.volatiles['partiallytrapped']) {
				return this.chainModify(2);
			}
			if (this.field.getPseudoWeather('gravity')) {
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		isNonstandard: "Future",
		target: "normal",
		type: "Bug",
	},
	qualityrip: {
		num: 222,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		isNonstandard: "Future",
		name: "Quality Rip",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1, sound: 1},
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 5) {
				move.magnitude = 4;
				move.basePower = 10;
			} else if (i < 15) {
				move.magnitude = 5;
				move.basePower = 30;
			} else if (i < 35) {
				move.magnitude = 6;
				move.basePower = 50;
			} else if (i < 65) {
				move.magnitude = 7;
				move.basePower = 70;
			} else if (i < 85) {
				move.magnitude = 8;
				move.basePower = 90;
			} else if (i < 95) {
				move.magnitude = 9;
				move.basePower = 110;
			} else {
				move.magnitude = 10;
				move.basePower = 150;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.add('-activate', pokemon, 'move: Quality Rip', move.magnitude);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		zMove: {basePower: 140},
		maxMove: {basePower: 140},
		contestType: "Tough",
	},
	concussion: {
		num: 200,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Concussion",
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
		isNonstandard: "Future",
		target: "randomNormal",
		type: "Psychic",
		contestType: "Cool",
	},
	shootingstar: {
		num: 394,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Shooting Star",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [20, 100],
		target: "normal",
		isNonstandard: "Future",
		selfSwitch: true,
		secondary: null,
		type: "Fairy",
		contestType: "Cool",
	},
	cursedblade: {
		num: 42017,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		isNonstandard: "Future",
		name: "Cursed Blade",
		pp: 15,
		priority: 0,
		flags: {slicing: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'curse',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	dousingflame: {
		num: 573,
		accuracy: 80,
		basePower: 120,
		category: "Special",
		name: "Dousing Flame",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Fire') return 1;
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		isNonstandard: "Future",
		type: "Fire",
		contestType: "Beautiful",
	},
	riptide: {
		num: 463,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Riptide",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		isNonstandard: "Future",
		type: "Water",
		contestType: "Tough",
	},
	secretstrength: {
		num: 686,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Secret Strength",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.getTypes()[1]) {
				move.type = pokemon.getTypes()[1];
			} else {
				move.type = pokemon.getTypes()[0];
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		isNonstandard: "Future",
		contestType: "Clever",
	},

	hornithrust: {
		num: 428,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Horni Thrust",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			pokemon.abilityState.irresistable = true;
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
		target: "normal",
		type: "Ice",
		isNonstandard: "Future",
		contestType: "Clever",
	},
	mouthmelter: {
		num: 675,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Mouth Melter",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'TMouth Melter', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['sound'] || this.dex.moves.get(moveSlot.id).flags['bite']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (!move.isZ && !move.isMax && move.flags['sound'] || move.flags['bite']) {
					this.add('cant', pokemon, 'move: Mouth Melter');
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (!move.isZ && !move.isMax && move.flags['sound'] || move.flags['bite']) {
					this.add('cant', pokemon, 'move: Mouth Melter');
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd(target) {
				this.add('-end', target, 'Mouth Melter', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('mouthmelter');
			},
		},
		multihit: 2,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	rebuild: {
		num: 69027,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rebuild",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
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
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status) && pokemon.hp >= pokemon.maxhp) return false;
			pokemon.cureStatus();
		},
		heal: [2, 3],
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	devilsbarrage: {
		num: 458,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Devil's Barrage",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
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
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {basePower: 190},
		maxMove: {basePower: 140},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	slysquall: {
		num: 42013,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Sly Squall",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		beforeMoveCallback(source, target, move) {
			if (source.illusion) move.willCrit = true;
		},
		onHit(target, source) {
			this.singleEvent('End', this.dex.abilities.get('Illusion'), source.abilityState, source);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cute",
	},

	swamp: {
		num: 1001,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swamp",
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		sideCondition: 'swamp',
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('swamp');
				}
			},
		},
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 6;
				}
				return 4;
			},
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'swamp');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.80);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 9,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'swamp');
			},


		},

		secondary: null,
		noSketch: true,
		target: "allAdjacentFoes",
		type: "Grass",
		isNonstandard: "Future",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	bigshot: {
		num: 177,
		accuracy: 97,
		basePower: 97,
		category: "Special",
		name: "Big Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Dark",
		isNonstandard: "Future",
		contestType: "Cool",
	},
	foolsgambit: {
		num: 485,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		overrideDefensiveStat: 'spd',
		name: "Fool's Gambit",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Fairy') return 0;
		},
		target: "any",
		type: "Dark",
		isNonstandard: "Future",
		contestType: "Clever",
	},
	trapcard: {
		num: 485,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Trap Card",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		priorityChargeCallback() {},
		onTryMove() {},
		onBasePower(basePower, pokemon) {
			if (!pokemon.volatiles['shelltrap']?.gotHit) {
				return this.chainModify(2);
			}
		},
		onAfterHit(target, pokemon, move) {
			pokemon.abilityState.irresistable = true;
			if (!pokemon.volatiles['shelltrap']?.gotHit) {
				target.addVolatile('attract');
			}
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				pokemon.abilityState.irresistable = true;
				this.add('-singleturn', pokemon, 'move: Shell Trap');
			},
			onHit(pokemon, source, move) {
				pokemon.abilityState.irresistable = true;
				if (!pokemon.isAlly(source) && move.category === 'Physical') {
					this.effectState.gotHit = true;
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		isNonstandard: "Future",
		contestType: "Cute",
	},
	winterwhiteout: {
		num: 619,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Winter Whiteout",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	gmaxblobbomb: {
		num: 69028,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "G-Max Blob Bomb",
		pp: 5,
		priority: 0,
		flags: {},
		onHit(target, source, move) {
			source.side.addSideCondition('safeguard');
			source.side.addSideCondition('mist');
		},
		target: "normal",
		type: "Ice",
		noSketch: true,
		contestType: "Cool",
		isNonstandard: "Future",
	},
	heroicstrike: {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		name: "Heroic Strike",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		onEffectiveness(typeMod, target, type, move) {
			if (this.dex.getEffectiveness('Fighting', type) > 0) {
				return typeMod + this.dex.getEffectiveness('Fighting', type);
			}
		},
		ignoreImmunity: true,
		ignoreEvasion: true,
		ignoreDefensive: true,
		ignoreAbility: true,
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	heroiconslaught: {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		name: "Heroic Onslaught",
		multihit: 2,
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		ignoreImmunity: true,
		ignoreEvasion: true,
		ignoreDefensive: true,
		ignoreAbility: true,
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	drinkpotion: {
		num: 166,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Drink Potion",
		pp: 5,
		priority: 1,
		noPPBoosts: true,
		isNonstandard: "Future",
		type: "Normal",
		flags: {snatch: 1, heal: 1},
		target: "self",
		onHit(target, source, activeMove) {
			if (target.hp >= target.maxhp) return false;
			const percentHp = target.hp / target.maxhp;
			const moveIndex = target.moves.indexOf(activeMove.id);
			let doses = Math.min(5, (target.moveSlots[moveIndex]?.pp || 0) + 1);
			if (percentHp >= 0.8) {
				doses = Math.min(doses, 1);
			} else if (percentHp >= 0.6) {
				doses = Math.min(doses, 2);
			} else if (percentHp >= 0.4) {
				doses = Math.min(doses, 3);
			} else if (percentHp >= 0.2) {
				doses = Math.min(doses, 4);
			}

			if (!doses) return false;

			const damage = this.heal((target.maxhp / 5) * doses);
			if (damage) {
				this.add('-heal', target, target.getHealth, '[from] move: Drink Potion');
			}

			target.deductPP(this.effect.id, Math.max(0, doses - 1)); // Don't include normally used PP
			this.add('-activate', target, 'move: Drink Potion', this.effect.name, doses);
		},
	},
	rawvenom: {
		num: 403,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Raw Venom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'disable',
		},
		target: "any",
		type: "Poison",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	flurryfist: {
		num: 857,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Flurry Fist",
		pp: 15,
		priority: 1,
		flags: {protect: 1, mirror: 1, punch: 1, contact: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	tripunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Tri-Punch",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "???",
		flags: {protect: 1, mirror: 1, contact: 1},
		multihit: 3,
		canContinue: true,
		onTryHit(target, source, move) {
			if (move.hit === 1) {
				move.type = 'Ice';
			} else if (move.hit === 2) {
				move.type = 'Electric';
			} else if (move.hit === 3) {
				move.type = 'Fire';
			}
		},
		secondary: {
			chance: 15,
			onHit(target, source, move) {
				if (move.hit === 1) {
					target.trySetStatus('frz', source);
				} else if (move.hit === 2) {
					target.trySetStatus('par', source);
				} else if (move.hit === 3) {
					target.trySetStatus('brn', source);
				}
			},
		},
		isNonstandard: "Future",
	},
	gigasubfernostrike: {
		accuracy: true,
		basePower: 111,
		category: "Physical",
		name: "Gigasubferno Strike",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "fusjiniumz",
		target: "normal",
		type: "???",
		contestType: "Cool",
		isNonstandard: "Future",
		multihit: 3,
		canContinue: true,
		onTryHit(target, source, move) {
			if (move.hit === 1) {
				move.type = 'Ice';
			} else if (move.hit === 2) {
				move.type = 'Electric';
			} else if (move.hit === 3) {
				move.type = 'Fire';
			}
		},
		secondary: {
			chance: 50,
			onHit(target, source, move) {
				if (move.hit === 1) {
					target.trySetStatus('frz', source);
				} else if (move.hit === 2) {
					target.trySetStatus('par', source);
				} else if (move.hit === 3) {
					target.trySetStatus('brn', source);
				}
			},
		},
	},
	backwardslongjump: {
		num: 136,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Backwards Long Jump",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.effect);
		},
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Cool",
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['backwardslongjump'] || move.hit === 1) {
				pokemon.addVolatile('backwardslongjump');
			}
			const bp = this.clampIntRange(move.basePower + 10 * pokemon.volatiles['backwardslongjump'].multiplier, 1, 160);
			this.debug('BP: ' + bp);
			return bp;
		},
		onAfterMoveSecondary(target, source, move) {
			if (!source.volatiles['backwardslongjump'] || move.hit === 1) {
				source.addVolatile('backwardslongjump');
			}
			const numBoosts = source.volatiles['backwardslongjump'].multiplier;
			this.boost({spe: numBoosts}, source);
		},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		isNonstandard: "Future",
	},
	deepfreeze: {
		num: 86,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Deep Freeze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'frz',
		ignoreImmunity: false,
		onTryHit(target, source) {
			if (source.status) {
				return false;
			}
		},
		onAfterHit(source, target, move) {
			source.trySetStatus('frz');
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	sap: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Sap",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Sap');
			},
			onResidualOrder: 13,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Steel']) ? 4 : 8));
			},
			onModifySpe(spe, pokemon) {
				if (pokemon.hasType('Steel')) {
					return this.chainModify(0.50);
				}
			},
			onModifyAtk(atk, pokemon) {
				if (pokemon.hasType('Steel')) {
					return this.chainModify(0.75);
				}
			},
			onModifySpA(atk, pokemon) {
				if (pokemon.hasType('Steel')) {
					return this.chainModify(0.75);
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Sap');
			},
		},
		secondary: {
			chance: 100,
			volatileStatus: 'sap',
		},
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	vwlstrk: {
		num: 86,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Vwl Strk",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		basePowerCallback(pokemon, target, move) {
			if (!target) return move.basePower;

			let totalVowels = 0;
			for (let i = 0; i < target.species.name.length; i++) {
				const character = target.species.name.charAt(i);
				if (['a', 'e', 'i', ' o', 'u'].includes(character)) {
					totalVowels++;
				}
			}

			const bp = this.clampIntRange(move.basePower + 20 * totalVowels, 1, 160);
			this.debug('BP: ' + bp);
			return bp;
		},
		target: "normal",
		type: "Psychic",
		isNonstandard: "Future",
	},
	itemclaws: {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		isNonstandard: "Future",
		name: "Item Claws",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		basePowerCallback(pokemon, target, move) {
			if (!target) return move.basePower;

			const itemSet = new Set<string>();
			target.side.pokemon
				.forEach((sidePokemon) => {
					const item = sidePokemon.getItem().id || sidePokemon.lastItem;
					if (item) itemSet.add(item);
				});

			const bp = this.clampIntRange(move.basePower - (15 * itemSet.size), 1, 160);
			return bp;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	fastpokebeam: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fastpoke Beam",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, pokemon) {
			if (!target.formeChange('Slowpoke-Galar')) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	pokemoncenter: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Pokemon Center",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source) {
			if (!target) return false;
			let pokemonCenters = 0;
			target.side.pokemon.forEach((pokemon) => {
				if (pokemon.baseSpecies.id === 'chansey') pokemonCenters++;
			});
			const shitmon = new Pokemon({
				name: `Pokemon Center v${pokemonCenters}`,
				species: 'Chansey',
				moves: ['Heal Pulse'],
				evs: {hp: 4, atk: 0, def: 252, spa: 0, spd: 252, spe: 0},
				item: 'Eviolite',
			}, target.side);
			shitmon.position = target.side.pokemon.length;
			target.side.pokemon.push(shitmon);
			target.side.pokemonLeft += 1;
			this.add('teamsize', target.side.id, target.side.pokemon.length);
		},
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	regularattack: {
		num: 69022,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Regular Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: null,
		target: "normal",
		type: "???",
		zMove: {basePower: 190},
		isNonstandard: "Future",
	},
	laserbeam: {
		num: 190,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		isNonstandard: "Future",
		name: "Laser Beam",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 15,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "???",
		contestType: "Tough",
	},
	ballkick: {
		num: 86,
		accuracy: 95,
		basePower: 210,
		category: "Physical",
		name: "Ball Kick",
		pp: 5,
		priority: 0,
		flags: {protect: 1, kick: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 30,
			status: 'par',
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 190},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	highkick: {
		num: 67,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			const targetHeight = target.species.heightm;
			let bp;
			if (targetHeight >= 3) {
				bp = 120;
			} else if (targetHeight >= 2) {
				bp = 100;
			} else if (targetHeight >= 1) {
				bp = 80;
			} else if (targetHeight >= 0.5) {
				bp = 60;
			} else if (targetHeight >= 0.25) {
				bp = 40;
			} else {
				bp = 20;
			}
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "High Kick",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	landmind: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Land Mind",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'landmind',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Land Mind');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('landmind')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 4);
				pokemon.side.removeSideCondition('landmind');
				this.add('-sideend', pokemon.side, 'move: Land Mind');
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Smart",
		isNonstandard: "Future",
	},
	calmfist: {
		accuracy: 100,
		basePower: 160,
		basePowerCallback(pokemon) {
			return Math.max(40, 160 - 20 * pokemon.timesAttacked);
		},
		category: "Physical",
		name: "Calm Fist",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		isNonstandard: "Future",
	},
	firstrespects: {
		accuracy: 100,
		basePower: 140,
		basePowerCallback(pokemon, target, move) {
			return Math.max(1, 120 - 20 * pokemon.side.totalFainted);
		},
		category: "Physical",
		name: "First Respects",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	unshedtail: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Unshed Tail",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		slotCondition: 'unshedtail',
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = pokemon.volatiles['substitute'].hp;
			},
			onSwap(target) {
				if (!target.fainted) {
					target.heal(this.effectState.hp);
					this.add('-heal', target, target.getHealth, '[from] move: Unshed Tail');
					target.side.removeSlotCondition(target, 'unshedtail');
				}
			},
		},
		onTryHit(source) {
			if (!source.volatiles['substitute']) return false;
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		isNonstandard: "Future",
	},
	eructlas: {
		num: 864,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Eruc Tlas",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Eruc Tlas');
			},
			onResidualOrder: 13,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / (!pokemon.hasType(['Water', 'Steel']) ? 4 : 8));
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Eruc Tlas');
			},
		},
		secondary: {
			chance: 100,
			volatileStatus: 'eructlas',
		},
		target: "normal",
		type: "Fairy",
	},
	depopulationbomb: {
		accuracy: 50,
		basePower: 240,
		category: "Special",
		name: "De-Population Bomb",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	glaiverest: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Glaive Rest",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			if (source.status === 'slp' || source.hasAbility('comatose') || source.hasAbility('boardpowerz')) return false;

			if (source.hp === source.maxhp) {
				this.add('-fail', source, 'heal');
				return null;
			}
			if (source.hasAbility(['insomnia', 'vitalspirit'])) {
				this.add('-fail', source, '[from] ability: ' + source.getAbility().name, '[of] ' + source);
				return null;
			}
		},
		onHit(target, source, move) {
			const result = target.setStatus('slp', source, move);
			if (!result) return result;
			target.statusState.time = 3;
			target.statusState.startTime = 3;
			this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		volatileStatus: 'glaiverest',
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Glaive Rest', '[silent]');
			},
			onAccuracy() {
				return true;
			},
			onSourceModifyDamage() {
				return this.chainModify(2);
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Glaive Rest drawback before attack');
				pokemon.removeVolatile('glaiverest');
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
	},
	pobybbolb: {
		num: 69060,
		accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Pob Ybbolb",
		secondary: {
			chance: 100,
			self: {
				boosts: {
					accuracy: 1,
				},
			},
		},
		pp: 23,
		priority: 0,
		noPPBoosts: true,
		target: "normal",
		type: "Flying",
		flags: {protect: 1, mirror: 1},
		isNonstandard: "Future",
	},
	eronsrepus: {
		num: 69007,
		accuracy: 255,
		basePower: 100,
		category: "Special",
		name: "Erons Repus",
		pp: 61,
		priority: 0,
		noPPBoosts: true,
		flags: {protect: 1, mirror: 1, contact: 1},
		onAfterMove(source) {
			source.trySetStatus('slp');
		},
		target: "normal",
		type: "Fire",
		zMove: {basePower: 220},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	garudaimpact: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Garuda Impact",
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		pp: 15,
		priority: -1,
		target: "normal",
		type: "Fire",
		flags: {protect: 1},
		isNonstandard: "Future",
	},
	potemkinbuster: {
		accuracy: true,
		basePower: 300,
		category: "Physical",
		isNonstandard: "Future",
		name: "Potemkin Buster",
		pp: 10,
		priority: -3,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['potemkinbuster']) {
				move.accuracy = true;
				delete move.flags['contact'];
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('potemkinbuster');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Potemkin Buster', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}
				if (target.getWeight() >= 5000) {
					this.add('-fail', target, 'move: Potemkin Buster', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Potemkin Buster');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Potemkin buster nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					this.debug('BP doubled on midair target');
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Potemkin Buster', '[interrupt]');
				}
			},
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Potemkin Buster');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					this.effectState.lostFocus = true;
				}
			},
			onTryAddVolatile(status, pokemon) {
				if (status.id === 'flinch') return null;
			},
		},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Tough",
	},
	pantherkkick: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Pantherk Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		onTry(source) {
			if (source.species.name === 'Pantherk') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Pantherk Kick');
			this.hint("You have not modded MUGEN hard enough.");
			return null;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	testomajesto: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		name: "Testo Majesto",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "???",
		isNonstandard: "Future",
	},
	saltsprinkle: {
		num: 1573,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Salt Sprinkle",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water' || type === 'Steel') return 1;
		},
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) {
				this.debug('BP doubled from status condition');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		target: "normal",
		isNonstandard: "Future",
		type: "Rock",
		contestType: "Tough",
	},
	shuttleloop: {
		num: 812,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Shuttle Loop",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: "Future",
		contestType: "Cool",
	},
	holdit: {
		num: 1105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hold It!",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [4, 5],
		onHit(target) {
			if (!target.volatiles['dynamax']) {
				target.addVolatile('taunt');
			}
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		isNonstandard: "Future",
		contestType: "Clever",
	},
	objection: {
		num: 428,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Objection!",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
		contestType: "Clever",
	},
	takethat: {
		num: 1212,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Take That!",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		isNonstandard: "Future",
		contestType: "Beautiful",
	},
	plushrush: {
		num: 1528,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Plush Rush",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "???",
		isNonstandard: "Future",
		contestType: "Tough",
	},
	seaoffire: {
		num: 1001,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sea Of Fire",
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		sideCondition: 'seaoffire',
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('seaoffire');
				}
			},
		},
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 6;
				}
				return 4;
			},
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'seaoffire');
			},
			onResidual(pokemon) {
				if (!pokemon.hasType('Fire')) this.damage(pokemon.baseMaxhp / 8, pokemon);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 9,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'seaoffire');
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		isNonstandard: "Future",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	tridentcharge: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Trident Charge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'torment',
		},
		onBasePower(basePower, pokemon, target) {
			if (target.side.getSideCondition('seaoffire')) {
				return this.chainModify(1.5);
			}
		},
		target: "normal",
		type: "Fire",
		isNonstandard: "Future",
		maxMove: {basePower: 140},
	},
	blackfire: {
		num: 1000,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Blackfire",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxwildfire');
				}
			},
		},
		condition: {
			duration: 4,
			onSideStart(targetSide) {
				this.add('-sidestart', targetSide, 'G-Max Wildfire');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 1,
			onResidual(target) {
				if (!target.hasType('Fire')) this.damage(target.baseMaxhp / 6, target);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 11,
			onSideEnd(targetSide) {
				this.add('-sideend', targetSide, 'G-Max Wildfire');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fire",
		contestType: "Cool",
	},
	justmonikat: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Just Monikat",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, pokemon, move) {
			const formeChangeResult = target.formeChange('Monikat');
			const trapResult = target.addVolatile('trapped', target, move, 'trapper');

			return trapResult && formeChangeResult;
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		isNonstandard: "Future",
	},
	bugout: {
		num: 69050,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Bug Out",
		pp: 10,
		priority: -6,
		target: "normal",
		type: "Bug",
		flags: {contact: 1, protect: 1},
		forceSwitch: true,
		isNonstandard: "Future",
	},
	gentworrible: {
		num: 217,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Gentworrible",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			const rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
				move.infiltrates = true;
			} else if (rand < 6) {
				move.basePower = 100;
			} else if (rand < 9) {
				move.basePower = 100;
			} else {
				move.basePower = 100;
			}
		},
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
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ice', type);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	hardcrash: {
		num: 722,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		isNonstandard: "Future",
		name: "Hardcrash",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: {
			chance: 100,
			status: 'par',
		},
		onAfterMove(source) {
			source.trySetStatus('frz');
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	driftgear: {
		num: 508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Drift Gear",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
			atk: 1,
		},
		self: {
			boosts: {
				accuracy: -1,
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	coldreception: {
		num: 69881,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cold Reception",
		pp: 10,
		priority: 0,
		flags: {},
		// TODO show prepare message before the "POKEMON used MOVE!" message
		// This happens even before sleep shows its "POKEMON is fast asleep." message
		weather: 'hail',
		selfSwitch: true,
		secondary: null,
		target: "all",
		type: "Ice",
		isNonstandard: "Future",
	},
	tombstonerd: {
		num: 1317,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Tombstoner-D",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	strifedicekind: {
		name: "Strife: Dicekind",
		basePower: 18,
		accuracy: 108,
		multihit: 8,
		pp: 8,
		noPPBoosts: true,
		priority: 0,
		multiaccuracy: true,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: {
			chance: 4, // ::::(
			onHit(target, source) {
				source.side.addSideCondition('luckyroll');
			},
		},
		category: "Special",
		target: "normal",
		type: "Dark",
		isNonstandard: "Future",
	},
	lavadapt: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		isNonstandard: "Future",
		name: "Lavadapt",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
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

			if (!source.setType(randomType)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	shiternet: {
		num: 1046,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Shiternet",
		pp: 10,
		priority: 0,
		target: "allAdjacent",
		type: "Psychic",
		flags: {reflectable: 1},
		onAfterMove(source) {
			source.trySetStatus('par');
		},
		status: 'par',
		ignoreImmunity: false,
		secondary: null,
		isNonstandard: "Future",
	},
	banfulbunker: {
		num: 1661,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Banful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'banfulbunker',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
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
					source.addVolatile('taunt');
					source.addVolatile('torment');
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					source.addVolatile('taunt');
					source.addVolatile('torment');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	meteor: {
		num: 1124,
		accuracy: 100,
		basePower: 36,
		category: "Special",
		name: "Meteor",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		ignoreDefensive: true,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	ultima: {
		num: 1125,
		accuracy: true,
		basePower: 300,
		category: "Special",
		isNonstandard: "Future",
		name: "Ultima",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "blackmagiumz",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Cool",
	},
	metronomeifitwasfunny: {
		num: 118,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Metronome If It Was Funny",
		pp: 40,
		priority: 0,
		flags: {},
		noMetronome: [],
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				!effect.noMetronome!.includes(move.name)
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	meatballmash: {
		num: 3090,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Meatball Mash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 25,
			self: {
				boosts: {
					def: 1,
					spd: 1,
				},
			},
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	blandybland: {
		num: 1111,
		accuracy: 85,
		basePower: 100,
		category: "Special",
		name: "Blandy Bland",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		onTryHit(target) {
			if (target.getAbility().isPermanent || target.ability === 'simple' || target.ability === 'truant') {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('simple');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Blandy Bland');
				return;
			}
			return oldAbility as false | null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		isNonstandard: "Future",
	},
	thunderblitz: {
		num: 2424,
		accuracy: 90,
		basePower: 35,
		category: "Physical",
		name: "Thunder Blitz",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		maxMove: {basePower: 80},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	scarystory: {
		num: 6666,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Scary Story",
		pp: 5,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		forceSwitch: true,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					spa: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ghost",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	moonstrike: {
		num: 5851,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Moonstrike",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1, punch: 1},
		secondary: {
			chance: 30,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	invigorate: {
		num: 4204,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Invigorate",
		pp: 10,
		priority: 0,
		target: "self",
		type: "Fighting",
		heal: [1, 4],
		onHit(target) {
			if (target.hp <= target.maxhp / 2) {
				this.boost({
					atk: 2,
				});
			} else {
				this.boost({
					atk: 1,
				});
			}
		},
		flags: {snatch: 1},
		isNonstandard: "Future",
	},
	blazingswipe: {
		num: 7842,
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		name: "Blazing Swipe",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Fire",
		isNonstandard: "Future",
	},
	hivemind: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Hivemind",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		maxMove: {basePower: 80},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	artwall: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Future",
		name: "Art Wall",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'artwall',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
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

			const allTypes = this.dex.types.all().map((type) => type.name);
			const types = [sampleNoReplace(allTypes), sampleNoReplace(allTypes)].filter((type) => type) as string[];

			if (!types.length) return;

			pokemon.setType(types);
			this.add('-start', pokemon, 'typechange', pokemon.getTypes().join('/'), '[from] move: Art Wall');
		},
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

					const allTypes = this.dex.types.all().map((type) => type.name);
					const types = source.getTypes().map((type) => sampleNoReplace(allTypes)).filter((type) => type) as string[];

					if (!types.length) return;

					source.setType(types);
					this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] move: Art Wall');
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
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

					const allTypes = this.dex.types.all().map((type) => type.name);
					const types = source.getTypes().map((type) => sampleNoReplace(allTypes)).filter((type) => type) as string[];

					if (!types.length) return;

					source.setType(types);
					this.add('-start', source, 'typechange', source.getTypes().join('/'), '[from] move: Art Wall');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "???",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	miraclepunch: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Miracle Punch",
		pp: 10,
		priority: 0,
		flags: {punch: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.flags.punch === 1 && move.id !== 'miraclepunch'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	anyattack: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Any Attack",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.basePower > 80 && move.id !== 'anyattack'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	anyheal: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Any Heal",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.flags.heal === 1 && move.basePower === 0 && move.id !== 'anyheal' && move.id !== 'healingwish' && move.id !== 'lunardance' && move.id !== 'floralhealing'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},

	anystatus: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Any Status",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				(move.status === 'par' || move.status === 'tox' || move.status === 'psn' || move.status === 'slp' || move.status === 'brn') && move.basePower === 0 && move.id !== 'anystatus'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	anystatup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Any Statup",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.boosts && move.target === "self" && move.id !== 'memento'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	piercingstrike: {
		name: "Piercing Strike",
		basePower: 60,
		accuracy: 100,
		category: "Physical",
		type: "Steel",
		target: "normal",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onDamagePriority: -20,
		onDamage(damage, target, source, effect) {
			if (!target || damage <= target.hp) return;
			target.speciesState.overkillDamage = damage - target.hp;
			console.log(target.speciesState);
		},
		onAfterMoveSecondary(target) {
			console.log('movesecondary', target.speciesState);
			console.log(target.speciesState.overkillDamage, (target === undefined) || (target === null), target?.fainted, target?.hp);
			if (target.speciesState.overkillDamage && (!target || target.fainted || target.hp <= 0)) {
				if (!target.side.addSlotCondition(target, 'overkill')) return false;
				Object.assign(target.side.slotConditions[target.position]['overkill'], {
					overkillDamage: target.speciesState.overkillDamage,
				});
			}
			delete target.speciesState.overkillDamage;
		},
		isNonstandard: "Future",
	},
	badenergy: {
		accuracy: 90,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Bad Energy",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'curse',
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	cerebralparasite: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Cerebral Parasite",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	bellyflop: {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		name: "Bellyflop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	sinkhole: {
		num: 228,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack || target.switchFlag) {
				this.debug('Pursuit damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		isNonstandard: "Future",
		name: "Sinkhole",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('sinkhole', pokemon);
				const data = side.getSideConditionData('sinkhole');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack || target?.switchFlag) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('sinkhole');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Sinkhole start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Sinkhole');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.actions.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('sinkhole', source, source.getLocOf(pokemon));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	dustbowl: {
		num: 173,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Dustbowl",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(source) {
				this.field.setWeather('sandstorm');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Rock",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	squash: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Squash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	cherrynobyl: {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Cherrynobyl",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		multihit: 2,
		recoil: [1, 3],
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('grassyterrain');
				},
			},
		},
		target: "normal",
		noSketch: true,
		type: "Grass",
		isNonstandard: "Future",
	},
	shadowbox: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Shadowbox",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, punch: 1},
		ignoreImmunity: {'Fighting': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Ghost') return 1;
		},
		target: "normal",
		type: "Fighting",
		isNonstandard: "Future",
		contestType: "Cool",
	},
	mindbreak: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Mindbreak",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ignoreImmunity: {'Psychic': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Dark') return 0;
		},
		target: "any",
		type: "Psychic",
		isNonstandard: "Future",
		contestType: "Clever",
	},
	finalfreeze: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Final Freeze",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'frz',
		ignoreImmunity: false,
		onTryHit(source) {
			if (source.speciesState.hasFinalFrozen) return false;
		},
		onAfterHit(source, target, move) {
			source.speciesState.hasFinalFrozen = true;
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	berserkersoul: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Berserker Soul",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) move.category = 'Special';
			move.multihit = pokemon.side.pokemon.filter(ally => !ally.fainted).length;
		},
		onTry(source, target, move) {
			if (!move.multihit) return false;
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	heartofthecards: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heart of the Cards",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			spa: 1,
		},
		volatileStatus: 'focusenergy',
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	mirrorball: {
		num: 277,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		isNonstandard: "Future",
		name: "Mirror Ball",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		self: {
			sideCondition: 'magiccoat',
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},
	trashtalk: {
		num: 99,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "Future",
		name: "Trash Talk",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'rage',
		},
		self: {
			volatileStatus: 'focusenergy',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	thebigone: {
		num: 1997,
		accuracy: 1997,
		basePower: 1997,
		category: "Special",
		name: "THE BIG ONE",
		pp: 1997,
		priority: 0,
		noPPBoosts: true,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	torchshriek: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Torch Shriek",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: -1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	this: { // ZVTLsQ8iNCM 34:49
		accuracy: true,
		basePower: 399,
		category: "Special",
		name: "This",
		pp: 1,
		priority: -6,
		noPPBoosts: true,
		flags: {bypasssub: 1},
		breaksProtect: true,
		onBasePower(basePower, pokemon, target) {
			return this.chainModify(2);
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) < pokemon.getStat('atk', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		ignoreImmunity: {'???': true},
		willCrit: true,
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "???",
		contestType: "Beautiful",
		isNonstandard: "Future",
	},
	dartoftoxin: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Dart of Toxin",
		pp: 5,
		priority: 2,
		flags: {},
		ignoreImmunity: {'Poison': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return -1;
		},
		onHit(target) {
			if (this.randomChance(1, 5)) {
				target.side.addSideCondition('toxicspikes');
			}
		},
		target: "normal",
		type: "Poison",
		isNonstandard: "Future",
		contestType: "Cool",
	},
	focusmiss: {
		num: 411,
		accuracy: 0,
		basePower: 120,
		category: "Special",
		name: "Focus Miss",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	movethatfucksyourself: {
		accuracy: true,
		basePower: 200,
		category: "Physical",
		isNonstandard: "Future",
		name: "Move That Fucks Yourself",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Electric', type);
		},
		ignoreAbility: true,
		isZ: "ultrafuckiumz",
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	flounderpunch: {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Flounder Punch",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(source, target) {
			if (target.baseSpecies.id !== 'Stunfisk') return false;
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	alloutirony: {
		accuracy: 100,
		basePower: 10,
		category: "Physical",
		name: "All-Out Irony",
		noSketch: true,
		pp: 35,
		priority: 0,
		basePowerCallback(pokemon, target, move) {
			let bonus = 1;
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack || target.switchFlag) {
				this.debug('Pursuit-esque damage boost');
				bonus *= 2;
			}
			if (target.species.tags.includes('Weedlekind') || target.species.tags.includes('Krackokind')) {
				bonus *= 100;
			}
			return bonus * move.basePower;
		},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side.hasAlly(pokemon)) continue;
				side.addSideCondition('alloutirony', pokemon);
				const data = side.getSideConditionData('alloutirony');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Pursuit-esque start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: All-Out Irony');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.actions.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('alloutirony', source, source.getLocOf(pokemon));
				}
			},
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	eatrocks: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Eat Rocks",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.4;
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					factor = 0.6;
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Eat Rocks', '[of] ' + pokemon);
				}
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		target: "self",
		type: "Dark",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	heroineslight: {
		accuracy: 100,
		basePower: 140,
		category: "Special",
		isNonstandard: "Future",
		name: "Heroine's Light",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, bypasssub: 1},
		stealsBoosts: true,
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
	},
	scavenge: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Scavenge",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			if (pokemon.item || !pokemon.lastItem) return false;
			const item = pokemon.lastItem;
			pokemon.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] move: Scavenge');
			pokemon.setItem(item);
		},
		heal: [49, 100],
		secondary: null,
		target: "self",
		type: "Plastic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	acridblaze: {
		num: 305,
		accuracy: 95,
		basePower: 20,
		category: "Special",
		name: "Acrid Blaze",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		recoil: [3, 4],
		target: "normal",
		type: "Fire",
		contestType: "Clever",
		isNonstandard: "Future",
	},
	shellup: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shell Up",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [4, 5],
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	shatteringstrike: {
		num: 710,
		accuracy: 90,
		basePower: 110,
		category: "Physical",
		name: "Shattering Strike",
		pp: 10,
		priority: 0,
		breaksProtect: true,
		flags: {contact: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	sandblast: {
		num: 190,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Sandblast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	sharpwit: {
		num: 673,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Future",
		name: "Sharp Wit",
		pp: 30,
		priority: 0,
		boosts: {
			spa: 1,
		},
		flags: {snatch: 1},
		volatileStatus: 'sharpwit',
		condition: {
			duration: 2,
			onStart(pokemon, source, effect) {
				if (effect && (['costar', 'imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', pokemon, 'move: Sharp Wit', '[silent]');
				} else {
					this.add('-start', pokemon, 'move: Sharp Wit');
				}
			},
			onRestart(pokemon) {
				this.effectState.duration = 2;
				this.add('-start', pokemon, 'move: Sharp Wit');
			},
			onModifyMove(move, source, target) {
				move.overrideDefensiveStat = 'def';
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Sharp Wit', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Cool",
	},
	funnyfun: { 
		accuracy: true,
		basePower: 0,
		basePowerCallback(pokemon) {
			const bp = Math.floor((pokemon.happiness * 10) / 25) || 1;
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "Future",
		name: "Funny Fun",
		pp: 5,
		priority: 2,
		flags: {protect: 1},
		target: "normal",
		type: "???",
		noSketch: true,
		willCrit: true,
		secondaries: [
			{
				chance: 100,
				onHit(target, source) {
					const result = this.random(2);
					if (result === 0) {
						target.trySetStatus('brn', source);
					} else {
						target.trySetStatus('par', source);
					}
				},
			}, {
				chance: 30,
				volatileStatus: 'flinch',
			},
		],
		onHit(target, source, move) {
			source.side.addSideCondition('reflect');
			source.side.addSideCondition('lightscreen');
			target.addVolatile('leechseed', source);
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		self: {
			onHit(pokemon, source, move) {
				this.add('-activate', source, 'move: Aromatherapy');
				for (const ally of source.side.pokemon) {
					if (ally !== source && (ally.volatiles['substitute'] && !move.infiltrates)) {
						continue;
					}
					ally.cureStatus();
				}
			},
		},
	},
	nightynight: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Nighty Night",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'slp',
		},
		target: "normal",
		type: "Ghost",
		isNonstandard: "Future",
	},
	glacialgroove: {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Glacial Groove",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Cool",
		isNonstandard: "Future",
		onHit(target) {
			if (!target.volatiles['dynamax']) {
				target.addVolatile('taunt');
			}
		},
	},
	crystalslash: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Crystal Slash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 10,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	carcrash: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Car Crash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, mirror: 1, bypasssub: 1},
		recoil: [33, 100],
		breaksProtect: true,
		secondaries: [
			{
				chance: 10,
				status: 'prz',
			}, {
				chance: 10,
				volatileStatus: 'confusion',
			},
		],
		target: "normal",
		type: "Steel",
		isNonstandard: "Future",
	},
	newcannon: {
		accuracy: true,
		basePower: 130,
		category: "Special",
		isNonstandard: "Future",
		name: "New Cannon",
		pp: 9,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		target: "normal",
		type: "Steel",
		onBasePower(basePower, target) {
			if (target.getTypes().join() === 'Water' || target.getTypes().join() === 'Flying') {
				return this.chainModify(0.33);
			}
		},
	},
	devilsharvest: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Future",
		name: "Devil's Harvest",
		pp: 5,
		priority: 0,
		flags: {},
		onHit(target) {
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] > -6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = -1;
				this.boost(boost);
			} else {
				return false;
			}
			for (stat in target.boosts) {
				if (target.boosts[stat] > -6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = -1;
				this.boost(boost);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Grass",
		zMove: {effect: 'crit2'},
	},
	metromash: {
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			const rolloutData = pokemon.volatiles['rollout'];
			if (rolloutData?.hitCount) {
				bp *= Math.pow(2, rolloutData.contactHitCount);
			}
			if (rolloutData && pokemon.status !== 'slp') {
				rolloutData.hitCount++;
				rolloutData.contactHitCount++;
				if (rolloutData.hitCount < 5) {
					rolloutData.duration = 2;
				}
			}
			if (pokemon.volatiles['shiftgear']) {
				bp *= 2;
			}
			this.debug("BP: " + bp);
			return bp;
		},
		category: "Physical",
		isNonstandard: "Future",
		name: "Metro Mash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			if (pokemon.volatiles['rollout'] || pokemon.status === 'slp' || !target) return;
			pokemon.addVolatile('rollout');
			// @ts-ignore
			// TS thinks pokemon.volatiles['rollout'] doesn't exist because of the condition on the return above
			// but it does exist now because addVolatile created it
			pokemon.volatiles['rollout'].targetSlot = move.sourceEffect ? pokemon.lastMoveTargetLoc : pokemon.getLocOf(target);
		},
		onAfterMove(source, target, move) {
			const rolloutData = source.volatiles["rollout"];
			if (
				rolloutData &&
				rolloutData.hitCount === 5 &&
				rolloutData.contactHitCount < 5
				// this conditions can only be met in gen7 and gen8dlc1
				// see `disguise` and `iceface` abilities in the resp mod folders
			) {
				source.addVolatile("rolloutstorage");
				source.volatiles["rolloutstorage"].contactHitCount =
					rolloutData.contactHitCount;
			}
		},
		condition: {
			duration: 1,
			onLockMove: 'rollout',
			onStart() {
				this.effectState.hitCount = 0;
				this.effectState.contactHitCount = 0;
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['rollout'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	aboostingmove: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "A Boosting Move",
		pp: 30,
		priority: 0,
		noSketch: true,
		flags: {},
		onHit(target) {
			if (target.getStat('atk', true, true) > target.getStat('spa', true, true)) {
				this.boost({ atk: 1, spe: 1});
			} else {
				this.boost({ spa: 1, spe: 1});
			}
		},
		secondary: null,
		target: "self",
		type: "???",
		zMove: {effect: 'crit2'},
		contestType: "Tough",
		isNonstandard: "Future",
	},
	adamagingmove: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		isNonstandard: "Future",
		name: "A Damaging Move",
		pp: 10,
		priority: 0,
		noSketch: true,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			if (pokemon.activeMoveActions <= 1) {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'flinch',
				});
			}
		},
		onModifyPriority(priority, source, target, move) {
			if (source.activeMoveActions <= 1) {
				return priority + 1;
			}
		},
		target: "normal",
		type: "???",
		contestType: "Beautiful",

	},
	apivotingmove: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "A Pivoting Move",
		pp: 20,
		priority: 0,
		noSketch: true,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Cute",
		isNonstandard: "Future",
	},
	ahealingmove: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "A Healing Move",
		pp: 5,
		priority: 0,
		noSketch: true,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status) && pokemon.hp >= pokemon.maxhp) return false;
			pokemon.cureStatus();
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "???",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		isNonstandard: "Future",
	},
	sadpoem: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Sad Poem",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: {
			chance: 40,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	annoy: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Annoy",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	peptalk: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Pep Talk",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					accuracy: 1,
				},
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		isNonstandard: "Future",
	},
	errpkmn: {
		accuracy: 100,
		basePower: 88,
		category: "Special",
		overrideDefensiveStat: 'def',
		name: "ERR.PKMN",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
		isNonstandard: "Future",
		onTryHit(target, source, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Went first, ERR crit activated');
				return move.willCrit = true;
			}
			this.debug('Went last, ERR no crit');
			return move.willCrit = false;
		},
	},
	violentvines: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Violent Vines",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onHit(pokemon) {
			const sideConditions = [
				'spikes',
				'toxicspikes',
				'stealthrock',
				'stickyweb',
				'sleazyspores',
				'gmaxsteelsurge',
				'shattershard',
				'luckyroll',
			];
			const removedConditions = [];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Violent Vines', '[of] ' + pokemon);
					removedConditions.push(condition);
				}
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	genesisboost: {
		num: 69660,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Genesis Boost",
		pp: 5,
		priority: 2,
		flags: {snatch: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (!source.hasAbility('numerouno') && source.activeMoveActions > 1) {
				this.hint("Genesis Boost only works on your first turn out.");
				return false;
			}
		},
		boosts: {
			atk: 2,
			def: 2,
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Fairy",
		contestType: "Cool",
	},
	starforce: {
		name: "Star Force",
		category: "Status",
		basePower: 0,
		accuracy: 100,
		pp: 10,
		type: "Normal",
		target: "self",
		priority: 0,
		flags: {},
		onHit(target, source, move) {
			const starforce = target.volatiles['starforce']?.starforce || 0;
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}

			if (this.randomChance(Math.max(1, Math.min(9 - starforce, 8)), 8)) {
				for (let i = 0; i < starforce + 2; i++) {
					const randomStat = this.sampleNoReplace(stats);
					const boost: SparseBoostsTable = {};

					if (randomStat) {
						boost[randomStat] = 1;
						this.boost(boost);
					} else {
						break;
					}
				}

				if (!target.volatiles['starforce'] || move.hit === 1) {
					target.addVolatile('starforce');
				}
			} else {
				if (target.hasItem('mesosack') && target.takeItem()) {
					this.add('-activate', target, 'item: Meso Sack');
				} else {
					target.faint();
				}
			}
		},
		condition: {
			onStart(pokemon) {
				this.effectState.starforce = 1;
				this.add('-start', pokemon, `Star Force: ${this.effectState.starforce}*`);
			},
			onRestart(pokemon) {
				this.add('-end', pokemon, `Star Force: ${this.effectState.starforce}*`, '[silent]');
				this.effectState.starforce++;
				this.add('-start', pokemon, `Star Force: ${this.effectState.starforce}*`);
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, `Star Force: ${this.effectState.starforce}*`, '[silent]');
			},
		},
		noSketch: true,
		isNonstandard: "Future",
	},
	bombrock: {
		name: "Bomb Rock",
		isNonstandard: "Future",
		accuracy: 100,
		basePower: 250,
		priority: 0,
		pp: 1,
		noPPBoosts: true,
		type: "Rock",
		category: "Physical",
		flags: {protect: 1, mirror: 1},
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.effectState.immuneToRecoil = true;
			}

			return move.basePower;
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		onAfterMove(pokemon, target, move) {
			if (!this.effectState.immuneToRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Bomb Rock'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		target: "normal",
	},
	godotshammer: {
		num: 696969420,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Godot's Hammer",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Ghost",
		recoil: [33, 100],
		flags: {protect: 1, mirror: 1, hammer: 1},
		self: {
			boosts: {
				spe: -2,
			},
		},
		onHit(target) {
			if (!target.volatiles['dynamax']) {
				target.addVolatile('torment');
				target.addVolatile('taunt');
			}
		},
		isNonstandard: "Future",
	},
	tornado: {
		num: 173,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Tornado",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		self: {
			onHit(source) {
				this.field.setWeather('deltastream');
			},
		},
		noSketch: true,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
		isNonstandard: "Future",
	},
	mitosistackle: {
		num: 458,
		accuracy: 80,
		basePower: 60,
		category: "Physical",
		name: "Mitosis Tackle",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 140},
		maxMove: {basePower: 120},
		contestType: "Cool",
		isNonstandard: "Future",
	},
	mitosismash: {
		num: 813,
		accuracy: 90,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			return 13 * move.hit;
		},
		category: "Physical",
		name: "Mitosis Mash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 160},
		maxMove: {basePower: 140},
		isNonstandard: "Future",
	},
};

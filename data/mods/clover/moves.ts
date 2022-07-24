/*

List of new flags and their descriptions:

kick: Kick-based moves (for Striker)
blade: Blade-based moves (for Blademaster)
bone: Bone-based moves (for Bone Zone)
hammer: Hammer-based moves (for Admin Abuse)
*/
import {Pokemon} from '../../../sim';

export const Moves: { [k: string]: ModdedMoveData } = {
	/* Enabled moves */
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	bubble: {
		inherit: true,
		isNonstandard: null,
	},
	camouflage: {
		inherit: true,
		isNonstandard: null,
	},
	captivate: {
		inherit: true,
		isNonstandard: null,
	},
	chatter: {
		inherit: true,
		isNonstandard: null,
	},
	chipaway: {
		inherit: true,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		isNonstandard: null,
	},
	dizzypunch: {
		inherit: true,
		isNonstandard: null,
	},
	doubleslap: {
		inherit: true,
		isNonstandard: null,
	},
	dragonrage: {
		inherit: true,
		isNonstandard: null,
	},
	feintattack: {
		inherit: true,
		isNonstandard: null,
	},
	flameburst: {
		inherit: true,
		isNonstandard: null,
	},
	foresight: {
		inherit: true,
		isNonstandard: null,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	healblock: {
		inherit: true,
		isNonstandard: null,
	},
	healorder: {
		inherit: true,
		isNonstandard: null,
	},
	heartstamp: {
		inherit: true,
		isNonstandard: null,
	},
	heartswap: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpower: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerbug: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdark: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdragon: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerelectric: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfighting: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfire: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerflying: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerghost: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowergrass: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerground: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerice: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpoison: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpsychic: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerrock: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowersteel: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerwater: {
		inherit: true,
		isNonstandard: null,
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: null,
	},
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	iondeluge: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	magnitude: {
		inherit: true,
		isNonstandard: null,
	},
	meditate: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		isNonstandard: null,
	},
	miracleeye: {
		inherit: true,
		isNonstandard: null,
	},
	mirrormove: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorshot: {
		inherit: true,
		isNonstandard: null,
	},
	mudbomb: {
		inherit: true,
		isNonstandard: null,
	},
	mudsport: {
		inherit: true,
		isNonstandard: null,
	},
	naturalgift: {
		inherit: true,
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		isNonstandard: null,
	},
	neverendingnightmare: {
		inherit: true,
		isNonstandard: null,
	},
	nightdaze: {
		inherit: true,
		isNonstandard: null,
	},
	nightmare: {
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
	powder: {
		inherit: true,
		isNonstandard: null,
	},
	psychoboost: {
		inherit: true,
		isNonstandard: null,
	},
	psywave: {
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
	rage: {
		inherit: true,
		isNonstandard: null,
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	return: {
		inherit: true,
		isNonstandard: null,
	},
	revelationdance: {
		inherit: true,
		isNonstandard: null,
	},
	rototiller: {
		inherit: true,
		isNonstandard: null,
	},
	secretpower: {
		inherit: true,
		isNonstandard: null,
	},
	seedflare: {
		inherit: true,
		isNonstandard: null,
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	signalbeam: {
		inherit: true,
		isNonstandard: null,
	},
	silverwind: {
		inherit: true,
		isNonstandard: null,
	},
	sketch: {
		inherit: true,
		isNonstandard: null,
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	spiderweb: {
		inherit: true,
		isNonstandard: null,
	},
	spikecannon: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		isNonstandard: null,
	},
	synchronoise: {
		inherit: true,
		isNonstandard: null,
	},
	tailglow: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicrage: {
		inherit: true,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		isNonstandard: null,
	},
	trumpcard: {
		inherit: true,
		isNonstandard: null,
	},
	twineedle: {
		inherit: true,
		isNonstandard: null,
	},
	twinkletackle: {
		inherit: true,
		isNonstandard: null,
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
	},
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	/* Disabled moves */
	afteryou: {
		inherit: true,
		isNonstandard: "Past",
	},
	allyswitch: {
		inherit: true,
		isNonstandard: "Past",
	},
	aurawheel: {
		inherit: true,
		isNonstandard: "Past",
	},
	firepledge: {
		inherit: true,
		isNonstandard: "Past",
	},
	fling: {
		inherit: true,
		isNonstandard: "Past",
	},
	grasspledge: {
		inherit: true,
		isNonstandard: "Past",
	},
	happyhour: {
		inherit: true,
		isNonstandard: "Past",
	},
	holdhands: {
		inherit: true,
		isNonstandard: "Past",
	},
	instruct: {
		inherit: true,
		isNonstandard: "Past",
	},
	magneticflux: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxairstream: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxflare: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxguard: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxlightning: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxmemeitude: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxooze: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxquake: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxstrike: {
		inherit: true,
		isNonstandard: "Past",
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: "Past",
	},
	paleowave: {
		inherit: true,
		isNonstandard: "Future",
	},
	quash: {
		inherit: true,
		isNonstandard: "Past",
	},
	shadowstrike: {
		inherit: true,
		isNonstandard: "Future",
	},
	waterpledge: {
		inherit: true,
		isNonstandard: "Past",
	},
	/* Modified moves */
	airslash: {
		inherit: true,
		flags: {protect: 1, mirror: 1, distance: 1, blade: 1},
	},
	assist: {
		inherit: true,
		isNonstandard: null,
		onHit(target) { // TODO: Cap-only
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection', 'leafshield',
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
	},
	baddybad: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		isNonstandard: null,
	},
	barrage: {
		inherit: true,
		basePower: 25,
		type: "Steel",
		isNonstandard: null,
	},
	blazekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	boneclub: {
		inherit: true,
		isNonstandard: null,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	bonemerang: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	bonerush: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	burnup: {
		inherit: true,
		basePower: 140,
	},
	constrict: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	copycat: {
		inherit: true,
		onHit(pokemon) {
			const noCopycat = [ // TODO: Cap-only
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
	},
	courtchange: {
		inherit: true,
		isNonstandard: "CAP",
		onHitField(target, source) {
			const sideConditions = [ // TODO: Cap-only
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'sleazyspores', 'shattershard',
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
	},
	covet: {
		inherit: true,
		onAfterHit(target, source, move) {
			if (source.item) {
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
	},
	crabhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
	},
	crosspoison: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		type: "Steel",
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	darkvoid: {
		inherit: true,
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the foe(s) to fall asleep.",
		accuracy: 80,
		onTry() { return; },
		isNonstandard: null,
	},
	defog: {
		inherit: true,
		onHit(target, source, move) { // TODO: Cap-only
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard',
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
			if (this.field.isWeather('densefog')) {
				this.field.clearWeather();
			}
			return success;
		},
	},
	dive: {
		inherit: true,
		basePower: 100,
	},
	doublekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	dragonhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
	},
	eggbomb: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
		isNonstandard: null,
	},
	falseswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	flash: {
		inherit: true,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		pp: 10,
		flags: {protect: 1, mirror: 1},
		boosts: null,
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		type: "Electric",
		contestType: "Cute",
		isNonstandard: null,
	},
	fly: {
		inherit: true,
		accuracy: 100,
		basePower: 95,
	},
	furycutter: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	furyswipes: {
		inherit: true,
		basePower: 20,
	},
	gmaxwindrage: {
		inherit: true,
		isNonstandard: "Past",
		self: {
			onHit(source) { // TODO: Cap-only
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'sleazyspores', 'shattershard',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard'];
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
	},
	hammerarm: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, hammer: 1},
	},
	highjumpkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1},
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
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, hammer: 1},
	},
	irontail: {
		inherit: true,
		accuracy: 80,
	},
	jumpkick: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1},
	},
	leafblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	lowkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	magicroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility(['persistent', 'moreroom'])) { // TODO: NO
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
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
	megakick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	metronome: {
		inherit: true,
		pp: 30,
		noMetronome: [
			"Assist", "Baneful Bunker", "Beak Blast", "Belech", "Celebrate", "Weird Flex", "Chatter", "Copycat", "Counter", "Covet", "Crafty Shieeld", "Destiny Bond", "Detect", "Diamond Storm", "Endure", "Feint", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Helping Hand", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "King's Shield", "Light of Ruin", "Mat Block", "Me First", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Movee", "Nature Power", "Photon Geyser", "Plasma Fists", "Protect", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Steam Eruption", "Struggle", "Switcheroo", "Techno Blast", "Thousand Arrows", "Thousand Waves", "Thief", "Transform", "Trick", "V-Create", "Wide Guard", "Metronome", "Imprison", "Focus Munch",
		],
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable' || (this.format.isNonstandard === 'CAP' && move.isNonstandard === 'CAP')) &&
				!effect.noMetronome!.includes(move.name)
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			this.actions.useMove(randomMove, target);
		},
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
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
			case 'densefog':
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
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
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
			case 'densefog':
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
	},
	nightslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	psychocut: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	rapidspin: {
		inherit: true,
		onAfterHit(target, pokemon) { // TODO: Cap-only
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'fragments'];
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
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'fragments'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
	},
	razorwind: {
		inherit: true,
		isNonstandard: null,
		basePower: 140,
		type: "Flying",
		flags: {charge: 1, protect: 1, mirror: 1, blade: 1},
	},
	rockclimb: {
		inherit: true,
		type: "Rock",
		isNonstandard: null,
	},
	rocksmash: {
		inherit: true,
		basePower: 60,
	},
	rollingkick: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	sacredsword: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	secretsword: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	shadowbone: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	slam: {
		inherit: true,
		accuracy: 85,
	},
	slash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	smackdown: {
		inherit: true,
		condition: { // TODO: Cap-only
			noCopy: true,
			onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate') || pokemon.hasAbility('asoneblobbostherian')) applies = true;
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
	},
	solarbeam: {
		inherit: true,
		onBasePower(basePower, pokemon, target) { // TODO: Cap-only
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, blade: 1},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	strength: {
		inherit: true,
		type: "Fighting",
	},
	submission: {
		inherit: true,
		accuracy: 90,
		basePower: 90,
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
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
			case 'densefog':
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
	},
	telekinesis: {
		inherit: true,
		condition: {
			duration: 3,
			onStart(target) { // TODO: Cap-only
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast', 'Fusjahl'].includes(target.baseSpecies.baseSpecies) ||
					['Gengar-Mega', 'Goryannus-Mega'].includes(target.baseSpecies.name)) {
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
	},
	thief: {
		inherit: true,
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
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
	},
	trickroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) { // TODO: Cap-only
				if (this.activeMove?.id === 'backroom') {
					return 2;
				}
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
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
	triplekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	tropkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	weatherball: {
		inherit: true,
		onModifyMove(move, pokemon) { // TODO: Cap-only
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
				move.basePower *= 2;
				break;
			case 'densefog':
				move.basePower *= 2;
				break;
			}
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
				this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
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
	woodhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
	},
	xscissor: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 95,
	},
	/* Clover CAP Moves */
	crusadercrash: {
		num: 42001,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Crusader Crash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		volatileStatus: 'ingrain',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Ingrain');
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
				this.add('-activate', pokemon, 'move: Ingrain');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},
	rockclock: {
		num: 42006,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		name: "Voltaic Cyclone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores'];
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
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores'];
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
		basePower: 80,
		category: "Special",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		name: "Trick Stab",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
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
		isNonstandard: "CAP",
		name: "Tombstoner",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
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
		isNonstandard: "CAP",
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
		basePower: 80,
		category: "Physical",
		isNonstandard: "CAP",
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
		basePower: 70,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Phase Through",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, blade: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	coldcutter: {
		num: 42019,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Cold Cutter",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
	},
	shadowscales: {
		num: 42020,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		isNonstandard: "CAP",
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
		basePower: 100,
		category: "Special",
		isNonstandard: "CAP",
		name: "Wings Of Correction",
		pp: 5,
		priority: -6,
		flags: {protect: 1, mirror: 1, bypasssub: 1},
		forceSwitch: true,
		onHit(target, source, move) {
			let success = false;
			const removeAll = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'fragments'];
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
		isNonstandard: "CAP",
		name: "Brutal Punishment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		name: "Meme Jr.",
		pp: 15,
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
		basePower: 30,
		category: "Physical",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	brandingblade: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Branding Blade",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1, blade: 1},
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
		isNonstandard: "CAP",
	},
	mudmaelstrom: {
		accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Mud Maelstrom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'sleazyspores', 'shattershard',
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Dark",
		isNonstandard: "CAP",
	},
	backdraft: {
		num: 366,
		accuracy: true,
		basePower: 65,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	/* :^) */
	skullcannon: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		isNonstandard: "CAP",
		name: "Skull Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
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
		isNonstandard: "CAP",
	},
	villify: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Villify",
		pp: 20,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
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
		isNonstandard: "CAP",
	},
	nuclearwinter: {
		accuracy: 95,
		basePower: 90,
		category: "Special",
		name: "Nuclear Winter",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Ice') return 1;
		},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
				def: -6,
				spd: -6,
				spe: -1,
			},
		},
		secondary: null,
		noSketch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	sleppthatblobsthesky: {
		accuracy: true,
		basePower: 200,
		category: "Special",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
	},
	matingpress: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Mating Press",
		pp: 20,
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
		target: "normal",
		type: "Fairy",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	leafshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Leaf Shield",
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
		terrain: 'grassyterrain',
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	frigidend: {
		accuracy: 100,
		basePower: 105,
		category: "Physical",
		name: "Frigid End",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ice', type);
		},
		breaksProtect: true,
		priority: 0,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	darkening: {
		accuracy: 100,
		basePower: 135,
		category: "Special",
		name: "Darkening",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 1],
		secondary: null,
		noSketch: true,
		target: "allAdjacent",
		type: "Ghost",
		isNonstandard: "CAP",
	},
	blackbomb: {
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Black Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
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
		isNonstandard: "CAP",
	},
	beamblade: {
		accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Beam Blade",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		isNonstandard: "CAP",
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
				'ironbarbs', 'roughskin',
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
			}
		},
		target: "normal",
		type: "Normal",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	thunderdrop: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Thunder Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				move.flags.contact = 0;
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
			chance: 20,
			status: 'par',
		},
		target: "any",
		type: "Electric",
		isNonstandard: "CAP",
	},
	faeblade: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		overrideDefensiveStat: 'spd',
		name: "Faeblade",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, blade: 1},
		secondary: null,
		target: "normal",
		type: "Fairy",
		isNonstandard: "CAP",
	},
	stickytongue: {
		accuracy: 100,
		basePower: 75,
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
		isNonstandard: "CAP",
	},
	rocketpunch: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rocket Punch",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Rocket Punch only works on your first turn out.");
				return false;
			}
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	flakcannon: {
		accuracy: 100,
		basePower: 35,
		category: "Special",
		name: "Flak Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, mystery: 1},
		willCrit: true,
		multihit: 3,
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
		isNonstandard: "CAP",
	},
	polysporin: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Polysporin",
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
		isNonstandard: "CAP",
	},
	inverserush: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Inverse Rush",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,

		onBasePower(basePower, pokemon, target) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		noSketch: true,
		target: "normal",
		type: "Normal",
		isNonstandard: "CAP",
		maxMove: {basePower: 140},
	},
	faedozer: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Fae Dozer",
		pp: 15,
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
		type: "Fairy",
		contestType: "Cute",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},

	backroom: {
		num: 366,
		accuracy: true,
		basePower: 65,
		category: "Physical",
		name: "Backroom",
		pp: 16,
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
		isNonstandard: "CAP",
	},

	charmerssong: {
		num: 273,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Charmer's Song",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1, sound: 1},
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
		isNonstandard: "CAP",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},

	psychospell: {
		num: 42003,
		accuracy: 100,
		basePower: 80,
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
		isNonstandard: "CAP",
	},


	wonderwand: {
		num: 42003,
		accuracy: 100,
		basePower: 80,
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
		isNonstandard: "CAP",
	},


	implosion: {
		num: 42003,
		accuracy: 100,
		basePower: 150,
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},

	rainbowbeam: {
		num: 69048,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Rainbow Beam",
		pp: 10,
		priority: 0,
		target: "normal",
		noSketch: true,
		type: "???",
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ice', type) + this.dex.getEffectiveness('Normal', type) + this.dex.getEffectiveness('Fighting', type) +
			this.dex.getEffectiveness('Flying', type) + this.dex.getEffectiveness('Poison', type) + this.dex.getEffectiveness('Ground', type) + this.dex.getEffectiveness('Rock', type) +
			this.dex.getEffectiveness('Bug', type) + this.dex.getEffectiveness('Ghost', type) + this.dex.getEffectiveness('Steel', type) + this.dex.getEffectiveness('Fire', type) +
			this.dex.getEffectiveness('Water', type) + this.dex.getEffectiveness('Grass', type) + this.dex.getEffectiveness('Electric', type) + this.dex.getEffectiveness('Psychic', type) +
			this.dex.getEffectiveness('Dragon', type) + this.dex.getEffectiveness('Dark', type) + this.dex.getEffectiveness('Fairy', type);
		},
		isNonstandard: "CAP",
	},

	freikugel: {
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Freikugel",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		onModifyMove(move, pokemon, target) {
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	toxicbeam: {
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Toxic Beam",
		pp: 10,
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
		isNonstandard: "CAP",
	},
	windwhip: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Wind Whip",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
			chance: 30,
			status: 'slp',
		},
		target: "normal",
		type: "Ground",
		noSketch: true,
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	doesthiswork: {
		accuracy: true,
		basePower: 60,
		category: "Status",
		name: "Does This Work",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			spa: 1,
			spe: 1,
		},
		secondary: null,
		noSketch: true,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		isNonstandard: "CAP",
	},
	telluriccurrent: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: "CAP",
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
		category: "Physical",
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
		isNonstandard: "CAP",
	},

	twintowertumblingterror: {
		accuracy: true,
		basePower: 290,
		category: "Physical",
		isNonstandard: "CAP",
		name: "Twin Tower Tumbling Terror",
		pp: 1,
		priority: -7,
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
			if (move.hit === 1) { move.type = 'Ground'; } else if (move.hit === 2) { move.type = 'Grass'; }
		},
		category: "Special",
		name: "Topping Toss",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},

	sandysnore: {
		num: 173,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Sandy Snore",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose');
		},

		self: {
			onHit(source) {
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
		isNonstandard: "CAP",
	},
	amogus: {
		num: 1,
		accuracy: 100,
		basePower: 70,
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
		isNonstandard: "CAP",
	},
	ninjutsu: {
		accuracy: 100,
		basePower: 15,
		category: "Special",
		name: "Ninjutsu",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 4,
		target: "normal",
		type: "Steel",
		isNonstandard: "CAP",
		noSketch: true,
	},
	groundbomb: {
		accuracy: 100,
		basePower: 250,
		category: "Special",
		name: "Ground Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: {
			chance: 10,
			status: 'brn',
		},
		onBasePower(basePower, pokemon, target) {
			return this.chainModify(2);
		},
		target: "normal",
		type: "Ground",
		zMove: {basePower: 180},
		isNonstandard: "CAP",
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
		type: "Nuclear",
		contestType: "Tough",
		isNonstandard: "CAP",
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
		type: "Nuclear",
		contestType: "Tough",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
		contestType: "Cool",
		noSketch: true,
	},
	feudefee: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Feu de Fe\u0301e",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cute",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},

	feedandseed: {
		num: 738,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		isNonstandard: "CAP",
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
		basePower: 150,
		category: "Special",
		name: "Atom Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Nuclear",
		zMove: {basePower: 200},
		isNonstandard: "CAP",
	},

	radiation: {
		num: 487,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Radiation",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onHit(target) {
			if (target.getTypes().join() === 'Nuclear' || !target.setType('Nuclear')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Nuclear');
		},
		secondary: null,
		target: "normal",
		type: "Nuclear",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		isNonstandard: "CAP",
	},
	meltdown: {
		num: 557,
		accuracy: 95,
		basePower: 35,
		category: "Physical",
		name: "Meltdown",
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
		type: "Nuclear",
		zMove: {basePower: 220},
		contestType: "Cool",
		isNonstandard: "CAP",
	},
	/* CAP Enabled/Modified Moves */
	appleacid: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bodypress: {
		inherit: true,
		isNonstandard: "CAP",
	},
	behemothbash: {
		inherit: true,
		isNonstandard: "CAP",
	},
	behemothblade: {
		inherit: true,
		isNonstandard: "CAP",
	},
	boltbeak: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	branchpoke: {
		inherit: true,
		isNonstandard: "CAP",
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: "CAP",
	},
	burningjealousy: {
		inherit: true,
		isNonstandard: "CAP",
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: "CAP",
	},
	coaching: {
		inherit: true,
		isNonstandard: "CAP",
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: "CAP",
	},
	decorate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dragondarts: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	drumbeating: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: "CAP",
	},
	eeriespell: {
		inherit: true,
		isNonstandard: "CAP",
	},
	eternabeam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	expandingforce: {
		inherit: true,
		isNonstandard: "CAP",
	},
	falsesurrender: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fierywrath: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	flipturn: {
		inherit: true,
		isNonstandard: "CAP",
	},
	freezingglare: {
		inherit: true,
		isNonstandard: "CAP",
	},
	glaciallance: {
		inherit: true,
		isNonstandard: "CAP",
	},
	grassyglide: {
		inherit: true,
		isNonstandard: "CAP",
	},
	gravapple: {
		inherit: true,
		isNonstandard: "CAP",
	},
	jawlock: {
		inherit: true,
		isNonstandard: "CAP",
	},
	judgment: {
		inherit: true,
		isNonstandard: "CAP",
	},
	junglehealing: {
		inherit: true,
		isNonstandard: "CAP",
	},
	lashout: {
		inherit: true,
		isNonstandard: "CAP",
	},
	lifedew: {
		inherit: true,
		isNonstandard: "CAP",
	},
	magicpowder: {
		inherit: true,
		isNonstandard: "CAP",
	},
	meteorassault: {
		inherit: true,
		isNonstandard: "CAP",
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: "CAP",
	},
	multiattack: {
		inherit: true,
		isNonstandard: "CAP",
	},
	noretreat: {
		inherit: true,
		isNonstandard: "CAP",
	},
	obstruct: {
		inherit: true,
		isNonstandard: "CAP",
	},
	octolock: {
		inherit: true,
		isNonstandard: "CAP",
	},
	overdrive: {
		inherit: true,
		isNonstandard: "CAP",
	},
	pikapapow: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	poltergeist: {
		inherit: true,
		isNonstandard: "CAP",
	},
	pyroball: {
		inherit: true,
		isNonstandard: "CAP",
	},
	risingvoltage: {
		inherit: true,
		isNonstandard: "CAP",
	},
	scaleshot: {
		inherit: true,
		isNonstandard: "CAP",
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: "CAP",
	},
	skittersmack: {
		inherit: true,
		isNonstandard: "CAP",
	},
	snaptrap: {
		inherit: true,
		isNonstandard: "CAP",
	},
	snipeshot: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spiritbreak: {
		inherit: true,
		isNonstandard: "CAP",
	},
	splishysplash: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	steelbeam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	steelroller: {
		inherit: true,
		isNonstandard: "CAP",
	},
	strangesteam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: "CAP",
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	tarshot: {
		inherit: true,
		isNonstandard: "CAP",
	},
	teatime: {
		inherit: true,
		isNonstandard: "CAP",
	},
	terrainpulse: {
		inherit: true,
		isNonstandard: "CAP",
	},
	thundercage: {
		inherit: true,
		isNonstandard: "CAP",
	},
	thunderouskick: {
		inherit: true,
		isNonstandard: "CAP",
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: "CAP",
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	wickedblow: {
		inherit: true,
		isNonstandard: "CAP",
		noSketch: true,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		pp: 15,
		willCrit: true,
		secondary: null,
		noSketch: true,
		isNonstandard: "CAP",
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
				if (pokemon.hasType('Grass')) {
					this.add('-sideend', pokemon.side, 'move: Sleazy Spores', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('sleazyspores');
					return;
				}
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
	},
	slimegulp: {
		num: 69044,
		accuracy: 100,
		basePower: 75,
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
	},
	dragonfist: {
		num: 69040,
		accuracy: 100,
		basePower: 75,
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
	},
	lickclean: {
		num: 69045,
		accuracy: 100,
		basePower: 40,
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
	},
	"1000folds": {
		num: 69047,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "1000 Folds",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Steel",
		flags: {contact: 1, mirror: 1, blade: 1},
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
			}
		},
	},
	warhead: {
		num: 69042,
		accuracy: 80,
		basePower: 110,
		category: "Special",
		name: "Warhead",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Steel",
		flags: {protect: 1, mirror: 1},
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
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'sleazyspores', 'gmaxsteelsurge', 'shattershard'];
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
	},
	boltbeam: {
		num: 69048,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Boltbeam",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Electric",
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Ice', type);
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
	},
	banhammer: {
		num: 69049,
		accuracy: 90,
		basePower: 90,
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
			}
		},
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
		flags: {contact: 1, protect: 1, mirror: 0},
		forceSwitch: true,
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
	},
	comengo: {
		num: 69002,
		accuracy: 100,
		basePower: 25,
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
	},
	dailydose: {
		num: 69018,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		name: "Daily Dose",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
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
	},
	falconpunch: {
		num: 69030,
		accuracy: 90,
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
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 170},
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
	},
	owtheedge: {
		num: 69014,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Ow The Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 190},
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
			if (pokemon.activeTurns > 1) {
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
	},
	stratoblade: {
		num: 69006,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Strato Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {basePower: 175},
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
			if (source.status !== 'slp' && !source.hasAbility('comatose')) return false;
		},
		target: "normal",
		type: "Ice",
		zMove: {basePower: 220},
		contestType: "Cute",
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
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) || !source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Swindle', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {basePower: 180},
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
	},
	// maxmemeitude: {
	// 	accuracy: true,
	// 	basePower: 10,
	// 	category: "Physical",
	// 	name: "Max Memeitude",
	// 	pp: 10,
	// 	priority: 0,
	// 	flags: {},
	// 	isMax: true,
	// 	target: "adjacentFoe",
	// 	type: "???",
	// 	contestType: "Cool",
	// },
};

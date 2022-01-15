export const Moves: { [k: string]: ModdedMoveData } = {
	'10000000voltthunderbolt': {
		inherit: true,
		isNonstandard: "Past",
	},
	absorb: {
		inherit: true,
		isNonstandard: null,
	},
	accelerock: {
		inherit: true,
		isNonstandard: null,
	},
	acid: {
		inherit: true,
		isNonstandard: null,
	},
	acidarmor: {
		inherit: true,
		isNonstandard: null,
	},
	aciddownpour: {
		inherit: true,
		isNonstandard: "Past",
	},
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
		isNonstandard: "Future",
	},
	agility: {
		inherit: true,
		isNonstandard: null,
	},
	aircutter: {
		inherit: true,
		isNonstandard: null,
	},
	airslash: {
		inherit: true,
		isNonstandard: null,
	},
	alloutpummeling: {
		inherit: true,
		isNonstandard: "Past",
	},
	allyswitch: {
		inherit: true,
		isNonstandard: "Future",
	},
	amnesia: {
		inherit: true,
		isNonstandard: null,
	},
	anchorshot: {
		inherit: true,
		isNonstandard: null,
	},
	ancientpower: {
		inherit: true,
		isNonstandard: null,
	},
	aquajet: {
		inherit: true,
		isNonstandard: null,
	},
	aquaring: {
		inherit: true,
		isNonstandard: null,
	},
	aquatail: {
		inherit: true,
		isNonstandard: null,
	},
	armthrust: {
		inherit: true,
		isNonstandard: null,
	},
	aromatherapy: {
		inherit: true,
		isNonstandard: null,
	},
	aromaticmist: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		onHit(target) {
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
		isNonstandard: null,
	},
	assurance: {
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
	attract: {
		inherit: true,
		isNonstandard: null,
	},
	aurasphere: {
		inherit: true,
		isNonstandard: null,
	},
	aurawheel: {
		inherit: true,
		isNonstandard: "Future",
	},
	aurorabeam: {
		inherit: true,
		isNonstandard: null,
	},
	auroraveil: {
		inherit: true,
		isNonstandard: null,
	},
	autotomize: {
		inherit: true,
		isNonstandard: null,
	},
	avalanche: {
		inherit: true,
		isNonstandard: null,
	},
	babydolleyes: {
		inherit: true,
		isNonstandard: null,
	},
	baddybad: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		isNonstandard: null,
	},
	banefulbunker: {
		inherit: true,
		isNonstandard: null,
	},
	barrage: {
		inherit: true,
		basePower: 25,
		type: "Steel",
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	batonpass: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	beatup: {
		inherit: true,
		isNonstandard: null,
	},
	behemothbash: {
		inherit: true,
		isNonstandard: "Future",
	},
	behemothblade: {
		inherit: true,
		isNonstandard: "Future",
	},
	belch: {
		inherit: true,
		isNonstandard: null,
	},
	bellydrum: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: "Past",
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	bind: {
		inherit: true,
		isNonstandard: null,
	},
	bite: {
		inherit: true,
		isNonstandard: null,
	},
	blackholeeclipse: {
		inherit: true,
		isNonstandard: "Past",
	},
	blastburn: {
		inherit: true,
		isNonstandard: null,
	},
	blazekick: {
		inherit: true,
		isNonstandard: null,
	},
	blizzard: {
		inherit: true,
		isNonstandard: null,
	},
	block: {
		inherit: true,
		isNonstandard: null,
	},
	bloomdoom: {
		inherit: true,
		isNonstandard: "Past",
	},
	blueflare: {
		inherit: true,
		isNonstandard: null,
	},
	bodyslam: {
		inherit: true,
		isNonstandard: null,
	},
	boltbeak: {
		inherit: true,
		isNonstandard: "Future",
	},
	boltstrike: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		isNonstandard: null,
	},
	bonemerang: {
		inherit: true,
		isNonstandard: null,
	},
	bonerush: {
		inherit: true,
		isNonstandard: null,
	},
	boomburst: {
		inherit: true,
		isNonstandard: null,
	},
	bounce: {
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
	breakneckblitz: {
		inherit: true,
		isNonstandard: "Past",
	},
	brickbreak: {
		inherit: true,
		isNonstandard: null,
	},
	brine: {
		inherit: true,
		isNonstandard: null,
	},
	brutalswing: {
		inherit: true,
		isNonstandard: null,
	},
	bubble: {
		inherit: true,
		isNonstandard: null,
	},
	bubblebeam: {
		inherit: true,
		isNonstandard: null,
	},
	bugbite: {
		inherit: true,
		isNonstandard: null,
	},
	bugbuzz: {
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
	bulletseed: {
		inherit: true,
		isNonstandard: null,
	},
	burnup: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	calmmind: {
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
	catastropika: {
		inherit: true,
		isNonstandard: "Past",
	},
	celebrate: {
		inherit: true,
		isNonstandard: null,
	},
	charge: {
		inherit: true,
		isNonstandard: null,
	},
	chargebeam: {
		inherit: true,
		isNonstandard: null,
	},
	charm: {
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
	circlethrow: {
		inherit: true,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		isNonstandard: null,
	},
	clangingscales: {
		inherit: true,
		isNonstandard: null,
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: "Future",
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: "Past",
	},
	clearsmog: {
		inherit: true,
		isNonstandard: null,
	},
	closecombat: {
		inherit: true,
		isNonstandard: null,
	},
	coil: {
		inherit: true,
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		isNonstandard: null,
	},
	confide: {
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
	constrict: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: "Past",
	},
	conversion: {
		inherit: true,
		isNonstandard: null,
	},
	conversion2: {
		inherit: true,
		isNonstandard: null,
	},
	copycat: {
		inherit: true,
		onHit(pokemon) {
			const noCopycat = [
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
		isNonstandard: null,
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: null,
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: "Past",
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: "Future",
	},
	cosmicpower: {
		inherit: true,
		isNonstandard: null,
	},
	cottonguard: {
		inherit: true,
		isNonstandard: null,
	},
	cottonspore: {
		inherit: true,
		isNonstandard: null,
	},
	counter: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	crabhammer: {
		inherit: true,
		isNonstandard: null,
	},
	craftyshield: {
		inherit: true,
		isNonstandard: null,
	},
	crosschop: {
		inherit: true,
		isNonstandard: null,
	},
	crosspoison: {
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
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		type: "Steel",
		isNonstandard: null,
	},
	darkestlariat: {
		inherit: true,
		isNonstandard: null,
	},
	darkpulse: {
		inherit: true,
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
	dazzlinggleam: {
		inherit: true,
		isNonstandard: null,
	},
	defendorder: {
		inherit: true,
		isNonstandard: null,
	},
	defensecurl: {
		inherit: true,
		isNonstandard: null,
	},
	defog: {
		inherit: true,
		onHit(target, source, move) {
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
			return success;
		},
		isNonstandard: null,
	},
	destinybond: {
		inherit: true,
		isNonstandard: null,
	},
	detect: {
		inherit: true,
		isNonstandard: null,
	},
	devastatingdrake: {
		inherit: true,
		isNonstandard: "Past",
	},
	diamondstorm: {
		inherit: true,
		isNonstandard: null,
	},
	dig: {
		inherit: true,
		isNonstandard: null,
	},
	disable: {
		inherit: true,
		isNonstandard: null,
	},
	disarmingvoice: {
		inherit: true,
		isNonstandard: null,
	},
	discharge: {
		inherit: true,
		isNonstandard: null,
	},
	dive: {
		inherit: true,
		basePower: 100,
		isNonstandard: null,
	},
	dizzypunch: {
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
	doublehit: {
		inherit: true,
		isNonstandard: null,
	},
	doubleironbash: {
		inherit: true,
		isNonstandard: null,
	},
	doublekick: {
		inherit: true,
		isNonstandard: null,
	},
	doubleslap: {
		inherit: true,
		isNonstandard: null,
	},
	doubleteam: {
		inherit: true,
		isNonstandard: null,
	},
	dracometeor: {
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
		isNonstandard: "Future",
	},
	dragonhammer: {
		inherit: true,
		isNonstandard: null,
	},
	dragonpulse: {
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
	dragontail: {
		inherit: true,
		isNonstandard: null,
	},
	drainingkiss: {
		inherit: true,
		isNonstandard: null,
	},
	drainpunch: {
		inherit: true,
		isNonstandard: null,
	},
	dreameater: {
		inherit: true,
		isNonstandard: null,
	},
	drillpeck: {
		inherit: true,
		isNonstandard: null,
	},
	drillrun: {
		inherit: true,
		isNonstandard: null,
	},
	drumbeating: {
		inherit: true,
		isNonstandard: "Future",
	},
	dualchop: {
		inherit: true,
		isNonstandard: null,
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: "Future",
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
	echoedvoice: {
		inherit: true,
		isNonstandard: null,
	},
	eerieimpulse: {
		inherit: true,
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
		isNonstandard: null,
	},
	electricterrain: {
		inherit: true,
		isNonstandard: null,
	},
	electrify: {
		inherit: true,
		isNonstandard: null,
	},
	electroball: {
		inherit: true,
		isNonstandard: null,
	},
	electroweb: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: "Past",
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
	endure: {
		inherit: true,
		isNonstandard: null,
	},
	energyball: {
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
	explosion: {
		inherit: true,
		isNonstandard: null,
	},
	extrasensory: {
		inherit: true,
		isNonstandard: null,
	},
	extremeevoboost: {
		inherit: true,
		isNonstandard: "Past",
	},
	extremespeed: {
		inherit: true,
		isNonstandard: null,
	},
	facade: {
		inherit: true,
		isNonstandard: null,
	},
	fairylock: {
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
	falseswipe: {
		inherit: true,
		isNonstandard: null,
	},
	featherdance: {
		inherit: true,
		isNonstandard: null,
	},
	feint: {
		inherit: true,
		isNonstandard: null,
	},
	feintattack: {
		inherit: true,
		isNonstandard: null,
	},
	fellstinger: {
		inherit: true,
		isNonstandard: null,
	},
	fierydance: {
		inherit: true,
		isNonstandard: null,
	},
	finalgambit: {
		inherit: true,
		isNonstandard: null,
	},
	fireblast: {
		inherit: true,
		isNonstandard: null,
	},
	firefang: {
		inherit: true,
		isNonstandard: null,
	},
	firelash: {
		inherit: true,
		isNonstandard: null,
	},
	firepledge: {
		inherit: true,
		isNonstandard: "Future",
	},
	firepunch: {
		inherit: true,
		isNonstandard: null,
	},
	firespin: {
		inherit: true,
		isNonstandard: null,
	},
	firstimpression: {
		inherit: true,
		isNonstandard: null,
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: "Future",
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
	flamethrower: {
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
	flashcannon: {
		inherit: true,
		isNonstandard: null,
	},
	flatter: {
		inherit: true,
		isNonstandard: null,
	},
	fleurcannon: {
		inherit: true,
		isNonstandard: null,
	},
	fling: {
		inherit: true,
		isNonstandard: "Future",
	},
	floatyfall: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	floralhealing: {
		inherit: true,
		isNonstandard: null,
	},
	flowershield: {
		inherit: true,
		isNonstandard: null,
	},
	fly: {
		inherit: true,
		accuracy: 100,
		basePower: 95,
		isNonstandard: null,
	},
	flyingpress: {
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
	followme: {
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
	forestscurse: {
		inherit: true,
		isNonstandard: null,
	},
	foulplay: {
		inherit: true,
		isNonstandard: null,
	},
	freezedry: {
		inherit: true,
		isNonstandard: null,
	},
	freezeshock: {
		inherit: true,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	frenzyplant: {
		inherit: true,
		isNonstandard: null,
	},
	frostbreath: {
		inherit: true,
		isNonstandard: null,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	furyattack: {
		inherit: true,
		isNonstandard: null,
	},
	furycutter: {
		inherit: true,
		isNonstandard: null,
	},
	furyswipes: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	fusionbolt: {
		inherit: true,
		isNonstandard: null,
	},
	fusionflare: {
		inherit: true,
		isNonstandard: null,
	},
	futuresight: {
		inherit: true,
		isNonstandard: null,
	},
	gastroacid: {
		inherit: true,
		isNonstandard: null,
	},
	geargrind: {
		inherit: true,
		isNonstandard: null,
	},
	gearup: {
		inherit: true,
		isNonstandard: null,
	},
	genesissupernova: {
		inherit: true,
		isNonstandard: "Past",
	},
	geomancy: {
		inherit: true,
		isNonstandard: null,
	},
	gigadrain: {
		inherit: true,
		isNonstandard: null,
	},
	gigaimpact: {
		inherit: true,
		isNonstandard: null,
	},
	gigavolthavoc: {
		inherit: true,
		isNonstandard: "Past",
	},
	glaciallance: {
		inherit: true,
		isNonstandard: "Future",
	},
	glaciate: {
		inherit: true,
		isNonstandard: null,
	},
	glare: {
		inherit: true,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	gmaxbefuddle: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxcannonade: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxcentiferno: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxchistrike: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxcuddle: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxdepletion: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxdrumsolo: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxfinale: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxfireball: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxfoamburst: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxgoldrush: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxgravitas: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxhydrosnipe: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxmalodor: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxmeltdown: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxoneblow: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxrapidflow: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxreplenish: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxresonance: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxsandblast: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxsmite: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxsnooze: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxsteelsurge: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxstonesurge: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxstunshock: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxsweetness: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxtartness: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxterror: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxvinelash: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxvolcalith: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxvoltcrash: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxwildfire: {
		inherit: true,
		isNonstandard: "Gigantamax",
	},
	gmaxwindrage: {
		inherit: true,
		self: {
			onHit(source) {
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
		isNonstandard: "Gigantamax",
	},
	grassknot: {
		inherit: true,
		isNonstandard: null,
	},
	grasspledge: {
		inherit: true,
		isNonstandard: "Future",
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	gravapple: {
		inherit: true,
		isNonstandard: "Future",
	},
	gravity: {
		inherit: true,
		isNonstandard: null,
	},
	growl: {
		inherit: true,
		isNonstandard: null,
	},
	growth: {
		inherit: true,
		isNonstandard: null,
	},
	grudge: {
		inherit: true,
		isNonstandard: null,
	},
	guardianofalola: {
		inherit: true,
		isNonstandard: "Past",
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
	gunkshot: {
		inherit: true,
		isNonstandard: null,
	},
	gust: {
		inherit: true,
		isNonstandard: null,
	},
	gyroball: {
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
		isNonstandard: "Future",
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
	headsmash: {
		inherit: true,
		isNonstandard: null,
	},
	healbell: {
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
	healorder: {
		inherit: true,
		isNonstandard: null,
	},
	healpulse: {
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
	heatcrash: {
		inherit: true,
		isNonstandard: null,
	},
	heatwave: {
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
	hex: {
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
	highhorsepower: {
		inherit: true,
		isNonstandard: null,
	},
	highjumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	holdback: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: "Future",
	},
	honeclaws: {
		inherit: true,
		isNonstandard: null,
	},
	hornattack: {
		inherit: true,
		isNonstandard: null,
	},
	horndrill: {
		inherit: true,
		isNonstandard: null,
	},
	hornleech: {
		inherit: true,
		isNonstandard: null,
	},
	howl: {
		inherit: true,
		isNonstandard: null,
	},
	hurricane: {
		inherit: true,
		isNonstandard: null,
	},
	hydrocannon: {
		inherit: true,
		isNonstandard: null,
	},
	hydropump: {
		inherit: true,
		isNonstandard: null,
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: "Future",
	},
	hyperbeam: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
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
		isNonstandard: null,
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: null,
	},
	hypervoice: {
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
	icebeam: {
		inherit: true,
		isNonstandard: null,
	},
	iceburn: {
		inherit: true,
		isNonstandard: null,
	},
	icefang: {
		inherit: true,
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		isNonstandard: null,
	},
	icepunch: {
		inherit: true,
		isNonstandard: null,
	},
	iceshard: {
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
	imprison: {
		inherit: true,
		isNonstandard: null,
	},
	incinerate: {
		inherit: true,
		isNonstandard: null,
	},
	inferno: {
		inherit: true,
		isNonstandard: null,
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: "Past",
	},
	infestation: {
		inherit: true,
		isNonstandard: null,
	},
	ingrain: {
		inherit: true,
		isNonstandard: null,
	},
	instruct: {
		inherit: true,
		isNonstandard: "Future",
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
	irontail: {
		inherit: true,
		accuracy: 80,
		isNonstandard: null,
	},
	jumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	kinesis: {
		inherit: true,
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		isNonstandard: null,
	},
	knockoff: {
		inherit: true,
		isNonstandard: null,
	},
	landswrath: {
		inherit: true,
		isNonstandard: null,
	},
	laserfocus: {
		inherit: true,
		isNonstandard: null,
	},
	lastresort: {
		inherit: true,
		isNonstandard: null,
	},
	lavaplume: {
		inherit: true,
		isNonstandard: null,
	},
	leafage: {
		inherit: true,
		isNonstandard: null,
	},
	leafblade: {
		inherit: true,
		isNonstandard: null,
	},
	leafstorm: {
		inherit: true,
		isNonstandard: null,
	},
	leaftornado: {
		inherit: true,
		isNonstandard: null,
	},
	leechlife: {
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
	letssnuggleforever: {
		inherit: true,
		isNonstandard: "Past",
	},
	lick: {
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	lightscreen: {
		inherit: true,
		isNonstandard: null,
	},
	lightthatburnsthesky: {
		inherit: true,
		isNonstandard: "Past",
	},
	liquidation: {
		inherit: true,
		isNonstandard: null,
	},
	lockon: {
		inherit: true,
		isNonstandard: null,
	},
	lovelykiss: {
		inherit: true,
		isNonstandard: null,
	},
	lowkick: {
		inherit: true,
		isNonstandard: null,
	},
	lowsweep: {
		inherit: true,
		isNonstandard: null,
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	lunardance: {
		inherit: true,
		isNonstandard: null,
	},
	lunge: {
		inherit: true,
		isNonstandard: null,
	},
	lusterpurge: {
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
	magiccoat: {
		inherit: true,
		isNonstandard: null,
	},
	magicroom: {
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
		isNonstandard: null,
	},
	magmastorm: {
		inherit: true,
		isNonstandard: null,
	},
	magnetbomb: {
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
	maliciousmoonsault: {
		inherit: true,
		isNonstandard: "Past",
	},
	matblock: {
		inherit: true,
		isNonstandard: null,
	},
	maxairstream: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxflare: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxguard: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxlightning: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxooze: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxovergrowth: {
		inherit: true,
		isNonstandard: null,
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxquake: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxstrike: {
		inherit: true,
		isNonstandard: "Future",
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: "Future",
	},
	meanlook: {
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
	megadrain: {
		inherit: true,
		isNonstandard: null,
	},
	megahorn: {
		inherit: true,
		isNonstandard: null,
	},
	megakick: {
		inherit: true,
		isNonstandard: null,
	},
	megapunch: {
		inherit: true,
		isNonstandard: null,
	},
	memento: {
		inherit: true,
		isNonstandard: null,
	},
	menacingmoonrazemaelstrom: {
		inherit: true,
		isNonstandard: "Past",
	},
	metalburst: {
		inherit: true,
		isNonstandard: null,
	},
	metalclaw: {
		inherit: true,
		isNonstandard: null,
	},
	metalsound: {
		inherit: true,
		isNonstandard: null,
	},
	meteormash: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		pp: 30,
		noMetronome: [
			"Assist", "Baneful Bunker", "Beak Blast", "Belech", "Celebrate", "Weird Flex", "Chatter", "Copycat", "Counter", "Covet", "Crafty Shieeld", "Destiny Bond", "Detect", "Diamond Storm", "Endure", "Feint", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Helping Hand", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "King's Shield", "Light of Ruin", "Mat Block", "Me First", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Movee", "Nature Power", "Photon Geyser", "Plasma Fists", "Protect", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Steam Eruption", "Struggle", "Switcheroo", "Techno Blast", "Thousand Arrows", "Thousand Waves", "Thief", "Transform", "Trick", "V-Create", "Wide Guard", "Metronome", "Imprison", "Focus Munch",
		],
		isNonstandard: null,
	},
	milkdrink: {
		inherit: true,
		isNonstandard: null,
	},
	mimic: {
		inherit: true,
		isNonstandard: null,
	},
	mindblown: {
		inherit: true,
		isNonstandard: null,
	},
	mindreader: {
		inherit: true,
		isNonstandard: null,
	},
	minimize: {
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
	mirrorshot: {
		inherit: true,
		isNonstandard: null,
	},
	mist: {
		inherit: true,
		isNonstandard: null,
	},
	mistball: {
		inherit: true,
		isNonstandard: null,
	},
	mistyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	moonblast: {
		inherit: true,
		isNonstandard: null,
	},
	moongeistbeam: {
		inherit: true,
		isNonstandard: null,
	},
	moonlight: {
		inherit: true,
		isNonstandard: null,
	},
	morningsun: {
		inherit: true,
		isNonstandard: null,
	},
	mudbomb: {
		inherit: true,
		isNonstandard: null,
	},
	muddywater: {
		inherit: true,
		isNonstandard: null,
	},
	mudshot: {
		inherit: true,
		isNonstandard: null,
	},
	mudslap: {
		inherit: true,
		isNonstandard: null,
	},
	mudsport: {
		inherit: true,
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		isNonstandard: "Future",
	},
	mysticalfire: {
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
	naturepower: {
		inherit: true,
		isNonstandard: null,
	},
	naturesmadness: {
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
	nightshade: {
		inherit: true,
		isNonstandard: null,
	},
	nightslash: {
		inherit: true,
		isNonstandard: null,
	},
	nobleroar: {
		inherit: true,
		isNonstandard: null,
	},
	nuzzle: {
		inherit: true,
		isNonstandard: null,
	},
	oblivionwing: {
		inherit: true,
		isNonstandard: null,
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: "Past",
	},
	octazooka: {
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
	originpulse: {
		inherit: true,
		isNonstandard: null,
	},
	outrage: {
		inherit: true,
		isNonstandard: null,
	},
	overheat: {
		inherit: true,
		isNonstandard: null,
	},
	painsplit: {
		inherit: true,
		isNonstandard: null,
	},
	paleowave: {
		inherit: true,
		isNonstandard: "Future",
	},
	paraboliccharge: {
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
	payday: {
		inherit: true,
		isNonstandard: null,
	},
	peck: {
		inherit: true,
		isNonstandard: null,
	},
	perishsong: {
		inherit: true,
		isNonstandard: null,
	},
	petalblizzard: {
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
	photongeyser: {
		inherit: true,
		isNonstandard: null,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	pinmissile: {
		inherit: true,
		isNonstandard: null,
	},
	plasmafists: {
		inherit: true,
		isNonstandard: null,
	},
	playnice: {
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
	poisonfang: {
		inherit: true,
		isNonstandard: null,
	},
	poisongas: {
		inherit: true,
		isNonstandard: null,
	},
	poisonjab: {
		inherit: true,
		isNonstandard: null,
	},
	poisonpowder: {
		inherit: true,
		isNonstandard: null,
	},
	poisonsting: {
		inherit: true,
		isNonstandard: null,
	},
	poisontail: {
		inherit: true,
		isNonstandard: null,
	},
	pollenpuff: {
		inherit: true,
		isNonstandard: null,
	},
	pound: {
		inherit: true,
		isNonstandard: null,
	},
	powder: {
		inherit: true,
		isNonstandard: null,
	},
	powdersnow: {
		inherit: true,
		isNonstandard: null,
	},
	powergem: {
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
	poweruppunch: {
		inherit: true,
		isNonstandard: null,
	},
	powerwhip: {
		inherit: true,
		isNonstandard: null,
	},
	precipiceblades: {
		inherit: true,
		isNonstandard: null,
	},
	present: {
		inherit: true,
		isNonstandard: null,
	},
	prismaticlaser: {
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
	psychic: {
		inherit: true,
		isNonstandard: null,
	},
	psychicfangs: {
		inherit: true,
		isNonstandard: null,
	},
	psychicterrain: {
		inherit: true,
		isNonstandard: null,
	},
	psychoboost: {
		inherit: true,
		isNonstandard: null,
	},
	psychocut: {
		inherit: true,
		isNonstandard: null,
	},
	psychoshift: {
		inherit: true,
		isNonstandard: null,
	},
	psychup: {
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
	psywave: {
		inherit: true,
		isNonstandard: null,
	},
	pulverizingpancake: {
		inherit: true,
		isNonstandard: "Past",
	},
	punishment: {
		inherit: true,
		isNonstandard: null,
	},
	purify: {
		inherit: true,
		isNonstandard: null,
	},
	pursuit: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		isNonstandard: "Future",
	},
	quickattack: {
		inherit: true,
		isNonstandard: null,
	},
	quickguard: {
		inherit: true,
		isNonstandard: null,
	},
	quiverdance: {
		inherit: true,
		isNonstandard: null,
	},
	rage: {
		inherit: true,
		isNonstandard: null,
	},
	ragepowder: {
		inherit: true,
		isNonstandard: null,
	},
	raindance: {
		inherit: true,
		isNonstandard: null,
	},
	rapidspin: {
		inherit: true,
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			if (pokemon.hp && pokemon.removeVolatile('livewire')) {
				this.add('-end', pokemon, 'Livewire', '[from] move: Rapid Spin', '[of] ' + pokemon);
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
			if (pokemon.hp && pokemon.removeVolatile('livewire')) {
				this.add('-end', pokemon, 'Livewire', '[from] move: Rapid Spin', '[of] ' + pokemon);
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
		isNonstandard: null,
	},
	razorleaf: {
		inherit: true,
		isNonstandard: null,
	},
	razorshell: {
		inherit: true,
		isNonstandard: null,
	},
	razorwind: {
		inherit: true,
		isNonstandard: null,
	},
	recover: {
		inherit: true,
		isNonstandard: null,
	},
	recycle: {
		inherit: true,
		isNonstandard: null,
	},
	reflect: {
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
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	rest: {
		inherit: true,
		isNonstandard: null,
	},
	retaliate: {
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
	revenge: {
		inherit: true,
		isNonstandard: null,
	},
	reversal: {
		inherit: true,
		isNonstandard: null,
	},
	roar: {
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
	rockclimb: {
		inherit: true,
		type: "Rock",
		isNonstandard: null,
	},
	rockpolish: {
		inherit: true,
		isNonstandard: null,
	},
	rockslide: {
		inherit: true,
		isNonstandard: null,
	},
	rocksmash: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	rockthrow: {
		inherit: true,
		isNonstandard: null,
	},
	rocktomb: {
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
	rollingkick: {
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
	round: {
		inherit: true,
		isNonstandard: null,
	},
	sacredfire: {
		inherit: true,
		isNonstandard: null,
	},
	sacredsword: {
		inherit: true,
		isNonstandard: null,
	},
	safeguard: {
		inherit: true,
		isNonstandard: null,
	},
	sandattack: {
		inherit: true,
		isNonstandard: null,
	},
	sandstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sandtomb: {
		inherit: true,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	savagespinout: {
		inherit: true,
		isNonstandard: "Past",
	},
	scald: {
		inherit: true,
		isNonstandard: null,
	},
	scaryface: {
		inherit: true,
		isNonstandard: null,
	},
	scratch: {
		inherit: true,
		isNonstandard: null,
	},
	screech: {
		inherit: true,
		isNonstandard: null,
	},
	searingshot: {
		inherit: true,
		isNonstandard: null,
	},
	searingsunrazesmash: {
		inherit: true,
		isNonstandard: "Past",
	},
	secretpower: {
		inherit: true,
		isNonstandard: null,
	},
	secretsword: {
		inherit: true,
		isNonstandard: null,
	},
	seedbomb: {
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
	selfdestruct: {
		inherit: true,
		isNonstandard: null,
	},
	shadowball: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbone: {
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
	shadowpunch: {
		inherit: true,
		isNonstandard: null,
	},
	shadowsneak: {
		inherit: true,
		isNonstandard: null,
	},
	shadowstrike: {
		inherit: true,
		isNonstandard: "Future",
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: "Past",
	},
	sheercold: {
		inherit: true,
		isNonstandard: null,
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: "Future",
	},
	shellsmash: {
		inherit: true,
		isNonstandard: null,
	},
	shelltrap: {
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
	shoreup: {
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
	simplebeam: {
		inherit: true,
		isNonstandard: null,
	},
	sing: {
		inherit: true,
		isNonstandard: null,
	},
	sinisterarrowraid: {
		inherit: true,
		isNonstandard: "Past",
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	sketch: {
		inherit: true,
		isNonstandard: null,
	},
	skillswap: {
		inherit: true,
		isNonstandard: null,
	},
	skullbash: {
		inherit: true,
		isNonstandard: null,
	},
	skyattack: {
		inherit: true,
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		isNonstandard: "Past",
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	slackoff: {
		inherit: true,
		isNonstandard: null,
	},
	slam: {
		inherit: true,
		accuracy: 85,
		isNonstandard: null,
	},
	slash: {
		inherit: true,
		isNonstandard: null,
	},
	sleeppowder: {
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
	smackdown: {
		inherit: true,
		isNonstandard: null,
	},
	smartstrike: {
		inherit: true,
		isNonstandard: null,
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: null,
	},
	smog: {
		inherit: true,
		isNonstandard: null,
	},
	smokescreen: {
		inherit: true,
		isNonstandard: null,
	},
	snarl: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
	},
	snore: {
		inherit: true,
		isNonstandard: null,
	},
	soak: {
		inherit: true,
		isNonstandard: null,
	},
	softboiled: {
		inherit: true,
		isNonstandard: null,
	},
	solarbeam: {
		inherit: true,
		isNonstandard: null,
	},
	solarblade: {
		inherit: true,
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	soulstealing7starstrike: {
		inherit: true,
		isNonstandard: "Past",
	},
	spacialrend: {
		inherit: true,
		isNonstandard: null,
	},
	spark: {
		inherit: true,
		isNonstandard: null,
	},
	sparklingaria: {
		inherit: true,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		isNonstandard: "LGPE",
	},
	spectralthief: {
		inherit: true,
		isNonstandard: null,
	},
	speedswap: {
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
	spikes: {
		inherit: true,
		isNonstandard: null,
	},
	spikyshield: {
		inherit: true,
		isNonstandard: null,
	},
	spiritshackle: {
		inherit: true,
		isNonstandard: null,
	},
	spite: {
		inherit: true,
		isNonstandard: null,
	},
	spitup: {
		inherit: true,
		isNonstandard: null,
	},
	splash: {
		inherit: true,
		isNonstandard: null,
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: "Past",
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	spore: {
		inherit: true,
		isNonstandard: null,
	},
	spotlight: {
		inherit: true,
		isNonstandard: "Past",
	},
	stealthrock: {
		inherit: true,
		isNonstandard: null,
	},
	steameruption: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		isNonstandard: null,
	},
	steelwing: {
		inherit: true,
		isNonstandard: null,
	},
	stickyweb: {
		inherit: true,
		isNonstandard: null,
	},
	stockpile: {
		inherit: true,
		isNonstandard: null,
	},
	stokedsparksurfer: {
		inherit: true,
		isNonstandard: "Past",
	},
	stomp: {
		inherit: true,
		isNonstandard: null,
	},
	stompingtantrum: {
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
	stormthrow: {
		inherit: true,
		isNonstandard: null,
	},
	strangesteam: {
		inherit: true,
		isNonstandard: "Future",
	},
	strength: {
		inherit: true,
		type: "Fighting",
		isNonstandard: null,
	},
	strengthsap: {
		inherit: true,
		isNonstandard: null,
	},
	stringshot: {
		inherit: true,
		isNonstandard: null,
	},
	struggle: {
		inherit: true,
		isNonstandard: null,
	},
	strugglebug: {
		inherit: true,
		isNonstandard: null,
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: "Future",
	},
	stunspore: {
		inherit: true,
		isNonstandard: null,
	},
	submission: {
		inherit: true,
		accuracy: 90,
		basePower: 90,
		isNonstandard: null,
	},
	substitute: {
		inherit: true,
		isNonstandard: null,
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: "Past",
	},
	suckerpunch: {
		inherit: true,
		isNonstandard: null,
	},
	sunnyday: {
		inherit: true,
		isNonstandard: null,
	},
	sunsteelstrike: {
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
	supersonic: {
		inherit: true,
		isNonstandard: null,
	},
	supersonicskystrike: {
		inherit: true,
		isNonstandard: "Past",
	},
	surf: {
		inherit: true,
		isNonstandard: null,
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: "Future",
	},
	swagger: {
		inherit: true,
		isNonstandard: null,
	},
	swallow: {
		inherit: true,
		isNonstandard: null,
	},
	sweetkiss: {
		inherit: true,
		isNonstandard: null,
	},
	sweetscent: {
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
	swordsdance: {
		inherit: true,
		isNonstandard: null,
	},
	synchronoise: {
		inherit: true,
		isNonstandard: null,
	},
	synthesis: {
		inherit: true,
		isNonstandard: null,
	},
	tackle: {
		inherit: true,
		isNonstandard: null,
	},
	tailglow: {
		inherit: true,
		isNonstandard: null,
	},
	tailslap: {
		inherit: true,
		isNonstandard: null,
	},
	tailwhip: {
		inherit: true,
		isNonstandard: null,
	},
	tailwind: {
		inherit: true,
		isNonstandard: null,
	},
	takedown: {
		inherit: true,
		isNonstandard: null,
	},
	taunt: {
		inherit: true,
		isNonstandard: null,
	},
	tearfullook: {
		inherit: true,
		isNonstandard: null,
	},
	technoblast: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicrage: {
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
	teleport: {
		inherit: true,
		isNonstandard: null,
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
	thunder: {
		inherit: true,
		isNonstandard: null,
	},
	thunderbolt: {
		inherit: true,
		isNonstandard: null,
	},
	thunderfang: {
		inherit: true,
		isNonstandard: null,
	},
	thunderpunch: {
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
	topsyturvy: {
		inherit: true,
		isNonstandard: null,
	},
	torment: {
		inherit: true,
		isNonstandard: null,
	},
	toxic: {
		inherit: true,
		isNonstandard: null,
	},
	toxicspikes: {
		inherit: true,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		isNonstandard: null,
	},
	transform: {
		inherit: true,
		isNonstandard: null,
	},
	triattack: {
		inherit: true,
		isNonstandard: null,
	},
	trick: {
		inherit: true,
		isNonstandard: null,
	},
	trickortreat: {
		inherit: true,
		isNonstandard: null,
	},
	trickroom: {
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
		isNonstandard: null,
	},
	triplekick: {
		inherit: true,
		isNonstandard: null,
	},
	tropkick: {
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
	twister: {
		inherit: true,
		isNonstandard: null,
	},
	uproar: {
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
		isNonstandard: "LGPE",
	},
	venomdrench: {
		inherit: true,
		isNonstandard: null,
	},
	venoshock: {
		inherit: true,
		isNonstandard: null,
	},
	vinewhip: {
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
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
	},
	waterfall: {
		inherit: true,
		isNonstandard: null,
	},
	watergun: {
		inherit: true,
		isNonstandard: null,
	},
	waterpledge: {
		inherit: true,
		isNonstandard: "Future",
	},
	waterpulse: {
		inherit: true,
		isNonstandard: null,
	},
	watershuriken: {
		inherit: true,
		isNonstandard: null,
	},
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	waterspout: {
		inherit: true,
		isNonstandard: null,
	},
	weatherball: {
		inherit: true,
		isNonstandard: null,
	},
	whirlpool: {
		inherit: true,
		isNonstandard: null,
	},
	whirlwind: {
		inherit: true,
		isNonstandard: null,
	},
	wickedblow: {
		inherit: true,
		isNonstandard: "Future",
	},
	wideguard: {
		inherit: true,
		isNonstandard: null,
	},
	wildcharge: {
		inherit: true,
		isNonstandard: null,
	},
	willowisp: {
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
	wrap: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	xscissor: {
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
	zenheadbutt: {
		inherit: true,
		accuracy: 95,
		isNonstandard: null,
	},
	zingzap: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		isNonstandard: "LGPE",
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
		basePower: 70,
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
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
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
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Great Rage",
		pp: 10,
		priority: 0,
		target: "normal",
		type: "Grass",
		flags: {sound: 1, protect: 1, mirror: 1, authentic: 1},
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
		accuracy: 100,
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
		flags: {sound: 1, protect: 1, mirror: 1, authentic: 1},
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
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
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
	livewire: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Livewire",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.333;
			if (this.field.isTerrain('electricterrain') && pokemon.isGrounded()) {
				factor = 0.667;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
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
				return 100;
			}
			if (ratio < 17) {
				return 80;
			}
			if (ratio < 33) {
				return 40;
			}
			return 20;
		},
		category: "Special",
		name: "Dragon Burst",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
		isNonstandard: "CAP",
	},
	rockclock: {
		num: 42006,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	awaken: {
		num: 42007,
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		isNonstandard: "CAP",
	},
	voltaiccyclone: {
		num: 42008,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Voltaic Cyclone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
			}
			if (pokemon.hp && pokemon.removeVolatile('livewire')) {
				this.add('-end', pokemon, 'Livewire', '[from] move: Rapid Spin', '[of] ' + pokemon);
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
			if (pokemon.hp && pokemon.removeVolatile('livewire')) {
				this.add('-end', pokemon, 'Livewire', '[from] move: Rapid Spin', '[of] ' + pokemon);
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
		isNonstandard: "CAP",
	},
	boilover: {
		num: 42009,
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
		isNonstandard: "CAP",
	},
	soulcrusher: {
		num: 42010,
		accuracy: 90,
		basePower: 10,
		category: "Special",
		name: "Soul Crusher",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		/* lol */
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(999);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Tough",
		isNonstandard: "CAP",
	},
	cheeseclaw: {
		num: 42011,
		accuracy: 90,
		basePower: 95,
		category: "Physical",
		name: "Cheese Claw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		isNonstandard: "CAP",
	},
	avianrush: {
		num: 42012,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Avian Rush",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "???",
		contestType: "Tough",
		isNonstandard: "CAP",
	},
	trickstab: {
		num: 42013,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	moredakka: {
		num: 42014,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		name: "More Dakka",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1},
		willCrit: true,
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Steel",
		isNonstandard: "CAP",
	},
	tombstoner: {
		num: 42015,
		accuracy: 100,
		basePower: 300,
		category: "Physical",
		name: "Tombstoner",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		overrideOffensiveStat: 'def',
		secondary: null,
		target: "allAdjacent",
		type: "Rock",
		isNonstandard: "CAP",
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
		isNonstandard: "CAP",
	},
	phantomfang: {
		num: 42017,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	phasethrough: {
		num: 42018,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Phase Through",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, blade: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		isNonstandard: "CAP",
	},
	coldcutter: {
		num: 42019,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Cold Cutter",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ice",
		isNonstandard: "CAP",
	},
	shadowscales: {
		num: 42020,
		accuracy: 100,
		basePower: 110,
		category: "Special",
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
		isNonstandard: "CAP",
	},
	wingsofcorrection: {
		accuracy: true,
		basePower: 150,
		category: "Special",
		name: "Wings Of Correction",
		pp: 5,
		priority: -6,
		flags: {protect: 1, mirror: 1, authentic: 1},
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
		isNonstandard: "CAP",
	},
	brutalpunishment: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	cloudbreaker: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
		isNonstandard: "CAP",
	},
	gazerbeam: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
		isNonstandard: "CAP",
	},
	memejr: {
		num: 612,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	shinestrike: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
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
		isNonstandard: "CAP",
	},
	petrify: {
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
		isNonstandard: "CAP",
	},
	genesisboost: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Genesis Boost",
		pp: 5,
		priority: 0,
		flags: {},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Genesis Boost only works on your first turn out.");
				return false;
			}
		},
		secondary: null,
		boosts: {
			atk: 2,
			def: 2,
		},
		target: "adjacentAllyOrSelf",
		type: "Fairy",
		isNonstandard: "CAP",
	},
	brandingblade: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Branding Blade",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, blade: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Steel",
		isNonstandard: "CAP",
	},
	mudmaelstrom: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Mud Maelstrom",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ground",
		isNonstandard: "CAP",
	},
	finalhour: {
		accuracy: 100,
		basePower: 160,
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
	medsnow: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Meds Now",
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
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Poison",
		isNonstandard: "CAP",
	},
	badeggs: {
		accuracy: 85,
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
		flags: {snatch: 1},
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
		isNonstandard: "Future",
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
		target: "allAdjacent",
		type: "Dark",
		contestType: "Cute",
		isNonstandard: "CAP",
	},
	nuclearwinter: {
		accuracy: 95,
		basePower: 90,
		category: "Special",
		name: "Nuclear Winter",
		pp: 20,
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
	closeblobmat: {
		accuracy: 100,
		basePower: 255,
		category: "Physical",
		name: "Close Blobmat",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -6,
				spd: -6,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		isNonstandard: "CAP",
	},
	sleppthatblobsthesky: {
		accuracy: true,
		basePower: 200,
		category: "Special",
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
		isNonstandard: "CAP",
	},
	yiikout: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Yiik Out",
		pp: 10,
		priority: 4,
		flags: {protect: 1, mirror: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Yiik is only fun for the first five minutes.");
				return false;
			}
		},
		onHit(target) {
			target.addVolatile('confusion');
			target.addVolatile('attract');
		},
		target: "normal",
		type: "Fairy",
		isNonstandard: "CAP",
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
	appleacid: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bodypress: {
		inherit: true,
		isNonstandard: "CAP",
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
	coaching: {
		inherit: true,
		isNonstandard: "CAP",
	},
	courtchange: {
		inherit: true,
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'sleazyspores', 'shattershard',
			];
			let success = false;
			if (this.gameType === "freeforall") {
				// random integer from 1-3 inclusive
				const offset = this.random(3) + 1;
				// the list of all sides in counterclockwise order
				const sides = [this.sides[0], this.sides[2]!, this.sides[1], this.sides[3]!];
				for (const id of sideConditions) {
					const effectName = this.dex.conditions.get(id).name;
					const rotatedSides = [];
					let someCondition = false;
					for (let i = 0; i < 4; i++) {
						const sourceSide = sides[i];
						const targetSide = sides[(i + offset) % 4]; // the next side in rotation
						rotatedSides.push(targetSide.sideConditions[id]);
						if (sourceSide.sideConditions[id]) {
							this.add('-sideend', sourceSide, effectName, '[silent]');
							someCondition = true;
						}
					}
					if (!someCondition) continue;
					[
						sides[0].sideConditions[id], sides[1].sideConditions[id],
						sides[2]!.sideConditions[id], sides[3]!.sideConditions[id],
					] = [...rotatedSides];
					for (const side of sides) {
						if (side.sideConditions[id]) {
							let layers = side.sideConditions[id].layers || 1;
							for (; layers > 0; layers--) this.add('-sidestart', side, effectName, '[silent]');
						} else {
							delete side.sideConditions[id];
						}
					}
					success = true;
				}
			} else {
				const sourceSide = source.side;
				const targetSide = source.side.foe;
				for (const id of sideConditions) {
					if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
						[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [
							targetSide.sideConditions[id], sourceSide.sideConditions[id],
						];
					} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
						targetSide.sideConditions[id] = sourceSide.sideConditions[id];
						delete sourceSide.sideConditions[id];
					} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
						sourceSide.sideConditions[id] = targetSide.sideConditions[id];
						delete targetSide.sideConditions[id];
					} else {
						continue;
					}
					success = true;
				}
				this.add('-swapsideconditions');
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
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
	dualwingbeat: {
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
	flipturn: {
		inherit: true,
		isNonstandard: "CAP",
	},
	freezingglare: {
		inherit: true,
		isNonstandard: "CAP",
	},
	grassyglide: {
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
	magneticflux: {
		inherit: true,
		isNonstandard: "Future",
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
	steelbeam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	steelroller: {
		inherit: true,
		isNonstandard: "CAP",
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
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: "CAP",
	},
};

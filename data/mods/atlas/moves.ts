export const Moves: { [k: string]: ModdedMoveData } = {
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
	constrict: {
		inherit: true,
		basePower: 20,
		isNonstandard: null,
	},
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		type: "Steel",
	},
	darkvoid: {
		inherit: true,
		desc: "Causes the target to fall asleep.",
		shortDesc: "Causes the foe(s) to fall asleep.",
		accuracy: 80,
		onTry() { return; },
		isNonstandard: null,
	},
	dive: {
		inherit: true,
		basePower: 100,
	},
	eggbomb: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
		isNonstandard: null,
	},
	flash: {
		inherit: true,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		pp: 10,
		flags: {protect: 1, mirror: 1},
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
	furyswipes: {
		inherit: true,
		basePower: 20,
	},
	irontail: {
		inherit: true,
		accuracy: 80,
	},
	metronome: {
		inherit: true,
		pp: 30,
		// TODO: More stuff needed
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
	slam: {
		inherit: true,
		accuracy: 85,
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
			if (!this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem) ||
				!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-enditem', target, yourItem, '[silent]', '[from] move: Thief', '[of] ' + source);
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 95,
	},
	/* Clover Enabled Moves */
	assist: {
		inherit: true,
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
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
	emargo: {
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
	genesissupernova: {
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
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		isNonstandard: null,
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	iondeluge: {
		inherit: true,
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
	razorwind: {
		inherit: true,
		isNonstandard: null,
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	return: {
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
	skydrop: {
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
	spotlight: {
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
	telekinesis: {
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
	/* Clover Exclusive Moves */
	fruitpunch: {
		inherit: true,
		isNonstandard: null,
	},
	dragonfist: {
		inherit: true,
		isNonstandard: null,
	},
	lickclean: {
		inherit: true,
		isNonstandard: null,
	},
	speedweed: {
		inherit: true,
		isNonstandard: null,
	},
	overbite: {
		inherit: true,
		isNonstandard: null,
	},
	warhead: {
		inherit: true,
		isNonstandard: null,
	},
	mop: {
		inherit: true,
		isNonstandard: null,
	},
	thinkfast: {
		inherit: true,
		isNonstandard: null,
	},
	pixiepummel: {
		inherit: true,
		isNonstandard: null,
	},
	greatrage: {
		inherit: true,
		isNonstandard: null,
	},
	erosionwave: {
		inherit: true,
		isNonstandard: null,
	},
	meme: {
		inherit: true,
		isNonstandard: null,
	},
	punchout: {
		inherit: true,
		isNonstandard: null,
	},
	stratoblade: {
		inherit: true,
		isNonstandard: null,
	},
	supersnore: {
		inherit: true,
		isNonstandard: null,
	},
	sudoku: {
		inherit: true,
		isNonstandard: null,
	},
	/* Atlas Exclusive Moves */
	mondayz: {
		inherit: true,
		isNonstandard: null,
	},
	fortunatesun: {
		inherit: true,
		isNonstandard: null,
	},
	cosmiccrunch: {
		inherit: true,
		isNonstandard: null,
	},
	breadclub: {
		inherit: true,
		isNonstandard: null,
	},
	breadmerang: {
		inherit: true,
		isNonstandard: null,
	},
	sentaiblade: {
		inherit: true,
		isNonstandard: null,
	},
	bigshock: {
		inherit: true,
		isNonstandard: null,
	},
	kingsvoice: {
		inherit: true,
		isNonstandard: null,
	},
	psychocrusher: {
		inherit: true,
		isNonstandard: null,
	},
	bordercontrol: {
		inherit: true,
		isNonstandard: null,
	},
	kegerdance: {
		inherit: true,
		isNonstandard: null,
	},
	canslam: {
		inherit: true,
		isNonstandard: null,
	},
	thunderousdrumming: {
		inherit: true,
		isNonstandard: null,
	},
	timebomb: {
		inherit: true,
		isNonstandard: null,
	},
	stonehenge: {
		inherit: true,
		isNonstandard: null,
	},
	jacsmack: {
		inherit: true,
		isNonstandard: null,
	},
	brainblast: {
		inherit: true,
		isNonstandard: null,
	},
	serpentskiss: {
		inherit: true,
		isNonstandard: null,
	},
	wunderbeam: {
		inherit: true,
		isNonstandard: null,
	},
	thornshot: {
		inherit: true,
		isNonstandard: null,
	},
	overthewall: {
		inherit: true,
		isNonstandard: null,
	},
	acidrain: {
		inherit: true,
		isNonstandard: null,
	},
};

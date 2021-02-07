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
	},
	constrict: {
		inherit: true,
		basePower: 20,
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
	},
	dive: {
		inherit: true,
		basePower: 100,
	},
	eggbomb: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
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
	/* Clover Exclusive Moves */
	sleazyspores: {
		inherit: true,
		isNonstandard: null,
	},
	slimegulp: {
		inherit: true,
		isNonstandard: null,
	},
	inverseroom: {
		inherit: true,
		isNonstandard: null,
	},
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
	"1000folds": {
		inherit: true,
		isNonstandard: null,
	},
	warhead: {
		inherit: true,
		isNonstandard: null,
	},
	weirdflex: {
		inherit: true,
		isNonstandard: null,
	},
	scorchedearth: {
		inherit: true,
		isNonstandard: null,
	},
	hulkup: {
		inherit: true,
		isNonstandard: null,
	},
	focusmunch: {
		inherit: true,
		isNonstandard: null,
	},
	mop: {
		inherit: true,
		isNonstandard: null,
	},
	quicksand: {
		inherit: true,
		isNonstandard: null,
	},
	thinkfast: {
		inherit: true,
		isNonstandard: null,
	},
	boltbeam: {
		inherit: true,
		isNonstandard: null,
	},
	checkem: {
		inherit: true,
		isNonstandard: null,
	},
	pixiepummel: {
		inherit: true,
		isNonstandard: null,
	},
	gayagenda: {
		inherit: true,
		isNonstandard: null,
	},
	spooperpower: {
		inherit: true,
		isNonstandard: null,
	},
	greatrage: {
		inherit: true,
		isNonstandard: null,
	},
	wowwiener: {
		inherit: true,
		isNonstandard: null,
	},
	plunder: {
		inherit: true,
		isNonstandard: null,
	},
	blobbybop: {
		inherit: true,
		isNonstandard: null,
	},
	banhammer: {
		inherit: true,
		isNonstandard: null,
	},
	homerunbat: {
		inherit: true,
		isNonstandard: null,
	},
	elbowdrop: {
		inherit: true,
		isNonstandard: null,
	},
	anattack: {
		inherit: true,
		isNonstandard: null,
	},
	chaosdunk: {
		inherit: true,
		isNonstandard: null,
	},
	comengo: {
		inherit: true,
		isNonstandard: null,
	},
	dailydose: {
		inherit: true,
		isNonstandard: null,
	},
	decaydrain: {
		inherit: true,
		isNonstandard: null,
	},
	dildocannon: {
		inherit: true,
		isNonstandard: null,
	},
	enema: {
		inherit: true,
		isNonstandard: null,
	},
	erosionwave: {
		inherit: true,
		isNonstandard: null,
	},
	falconpunch: {
		inherit: true,
		isNonstandard: null,
	},
	firebomb: {
		inherit: true,
		isNonstandard: null,
	},
	fizzbitch: {
		inherit: true,
		isNonstandard: null,
	},
	foryou: {
		inherit: true,
		isNonstandard: null,
	},
	futababreak: {
		inherit: true,
		isNonstandard: null,
	},
	holyduty: {
		inherit: true,
		isNonstandard: null,
	},
	lactoseshot: {
		inherit: true,
		isNonstandard: null,
	},
	meme: {
		inherit: true,
		isNonstandard: null,
	},
	overenergize: {
		inherit: true,
		isNonstandard: null,
	},
	owtheedge: {
		inherit: true,
		isNonstandard: null,
	},
	pukeblood: {
		inherit: true,
		isNonstandard: null,
	},
	punchout: {
		inherit: true,
		isNonstandard: null,
	},
	regenerate: {
		inherit: true,
		isNonstandard: null,
	},
	riotshield: {
		inherit: true,
		isNonstandard: null,
	},
	shitpost: {
		inherit: true,
		isNonstandard: null,
	},
	spookout: {
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
	swindle: {
		inherit: true,
		isNonstandard: null,
	},
	toke: {
		inherit: true,
		isNonstandard: null,
	},
	toxiravage: {
		inherit: true,
		isNonstandard: null,
	},
	trigger: {
		inherit: true,
		isNonstandard: null,
	},
	sudoku: {
		inherit: true,
		isNonstandard: null,
	},
};

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
		isNonstandard: null,
	},
	irontail: {
		inherit: true,
		accuracy: 80,
	},
	metronome: {
		inherit: true,
		pp: 30,
		noMetronome: [
			"Assist", "Baneful Bunker", "Beak Blast", "Belech", "Celebrate", "Weird Flex", "Chatter", "Copycat", "Counter", "Covet", "Crafty Shieeld", "Destiny Bond", "Detect", "Diamond Storm", "Endure", "Feint", "Fleur Cannon", "Focus Punch", "Follow Me", "Freeze Shock", "Helping Hand", "Hyperspace Fury", "Hyperspace Hole", "Ice Burn", "King's Shield", "Light of Ruin", "Mat Block", "Me First", "Mimic", "Mind Blown", "Mirror Coat", "Mirror Movee", "Nature Power", "Photon Geyser", "Plasma Fists", "Protect", "Quick Guard", "Rage Powder", "Relic Song", "Secret Sword", "Shell Trap", "Sketch", "Sleep Talk", "Snarl", "Snatch", "Snore", "Spectral Thief", "Spiky Shield", "Steam Eruption", "Struggle", "Switcheroo", "Techno Blast", "Thousand Arrows", "Thousand Waves", "Thief", "Transform", "Trick", "V-Create", "Wide Guard", "Metronome", "Imprison", "Focus Munch",
		],
		onHit(target, source, effect) {
			const isStandard = (move: Move, format: Format) => {
				if (format.isNonstandard === 'CAP') {
					return (move.isNonstandard === null) || (move.isNonstandard === 'CAP');
				}

				return move.isNonstandard === null;
			};
			const moves = this.dex.moves.all().filter(
				move => (move.availability?.clover === 1) &&
					!move.realMove &&
					!move.isZ &&
					!move.isMax &&
					!effect.noMetronome?.includes(move.name) &&
					!(this.dex.moves.get(move.id).gen > this.gen) &&
					isStandard(move, this.format)
			);
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).name;
			}
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
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
			if (!this.singleEvent('TakeItem', yourItem, target.itemState, source, target, move, yourItem) ||
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
	icehammer: {
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
	razorwind: {
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
	rollingkick: {
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
	/* Clover CAP Moves */
	crusadercrash: {
		inherit: true,
		isNonstandard: "CAP",
	},
	moregun: {
		inherit: true,
		isNonstandard: "CAP",
	},
	psychofists: {
		inherit: true,
		isNonstandard: "CAP",
	},
	livewire: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dragonburst: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rockclock: {
		inherit: true,
		isNonstandard: "CAP",
	},
	awaken: {
		inherit: true,
		isNonstandard: "CAP",
	},
	voltaiccyclone: {
		inherit: true,
		isNonstandard: "CAP",
	},
	boilover: {
		inherit: true,
		isNonstandard: "CAP",
	},
	soulcrusher: {
		inherit: true,
		isNonstandard: "CAP",
	},
	trickstab: {
		inherit: true,
		isNonstandard: "CAP",
	},
	moredakka: {
		inherit: true,
		isNonstandard: "CAP",
	},
	tombstoner: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: "CAP",
	},
	phantomfang: {
		inherit: true,
		isNonstandard: "CAP",
	},
	phasethrough: {
		inherit: true,
		isNonstandard: "CAP",
	},
	coldcutter: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shadowscales: {
		inherit: true,
		isNonstandard: "CAP",
	},
	wingsofcorrection: {
		inherit: true,
		isNonstandard: "CAP",
	},
	brutalpunishment: {
		inherit: true,
		isNonstandard: "CAP",
	},
	cloudbreaker: {
		inherit: true,
		isNonstandard: "CAP",
	},
	gazerbeam: {
		inherit: true,
		isNonstandard: "CAP",
	},
	memejr: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shinestrike: {
		inherit: true,
		isNonstandard: "CAP",
	},
	petrify: {
		inherit: true,
		isNonstandard: "CAP",
	},
	genesisboost: {
		inherit: true,
		isNonstandard: "CAP",
	},
	brandingblade: {
		inherit: true,
		isNonstandard: "CAP",
	},
	mudmaelstrom: {
		inherit: true,
		isNonstandard: "CAP",
	},
	finalhour: {
		inherit: true,
		isNonstandard: "CAP",
	},
	turnabout: {
		inherit: true,
		isNonstandard: "CAP",
	},
	itsover: {
		inherit: true,
		isNonstandard: "CAP",
	},
	medsnow: {
		inherit: true,
		isNonstandard: "CAP",
	},
	villify: {
		inherit: true,
		isNonstandard: "CAP",
	},
	nuclearwinter: {
		inherit: true,
		isNonstandard: "CAP",
	},
	backdraft: {
		inherit: true,
		isNonstandard: "CAP",
	},
	cope: {
		inherit: true,
		isNonstandard: "CAP",
	},
	closeblobmat: {
		inherit: true,
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
	judgment: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	gunshot: {
		inherit: true,
		isNonstandard: "CAP",
	},
	yiikout: {
		inherit: true,
		isNonstandard: "CAP",
	},
	leafshield: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bilebite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	skullcannon: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	badeggs: {
		inherit: true,
		isNonstandard: "CAP",
	},
	frigidend: {
		inherit: true,
		isNonstandard: "CAP",
	},
	amnesiad: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	blizzardd: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	hyperbeamd: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	wrapd: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	darkening: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
};

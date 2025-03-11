export const Moves: { [k: string]: ModdedMoveData } = {
	nightmare: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose') && !pokemon.hasAbility('lethargic')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 11,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
	},
	triattack: {
		inherit: true,
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target. Physical if user's Atk > Sp. Atk.",
		shortDesc: "20% chance to paralyze or burn or freeze target. Physical if user's Atk > Sp. Atk.",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	closeblobmat: {
		inherit: true,
		isNonstandard: null,
	},
	absorption: {
		inherit: true,
		isNonstandard: null,
	},
	terradozer: {
		inherit: true,
		isNonstandard: null,
	},
	roidflex: {
		inherit: true,
		isNonstandard: null,
	},
	sleppthatblobsthesky: {
		inherit: true,
		isNonstandard: null,
	},
	yiikout: {
		inherit: true,
		isNonstandard: null,
	},
	leafshield: {
		inherit: true,
		isNonstandard: null,
	},
	twintowertumblingterror: {
		inherit: true,
		isNonstandard: null,
	},
	skullcannon: {
		inherit: true,
		isNonstandard: null,
	},
	matingpress: {
		inherit: true,
		isNonstandard: null,
	},
	gunshot: {
		inherit: true,
		isNonstandard: null,
	},
	behemothblob: {
		inherit: true,
		isNonstandard: null,
	},
	genwunroom: {
		inherit: true,
		isNonstandard: null,
	},
	backroom: {
		inherit: true,
		isNonstandard: null,
	},
	charmerssong: {
		inherit: true,
		isNonstandard: null,
	},
	psychospell: {
		inherit: true,
		isNonstandard: null,
	},
	wonderwand: {
		inherit: true,
		isNonstandard: null,
	},
	implosion: {
		inherit: true,
		isNonstandard: null,
	},
	portalgun: {
		inherit: true,
		isNonstandard: null,
	},
	sportsball: {
		inherit: true,
		isNonstandard: null,
	},
	rainbowbeam: {
		inherit: true,
		isNonstandard: null,
	},
	freikugel: {
		inherit: true,
		isNonstandard: null,
	},
	firewall: {
		inherit: true,
		isNonstandard: null,
	},
	maximize: {
		inherit: true,
		isNonstandard: null,
	},
	seaquake: {
		inherit: true,
		isNonstandard: null,
	},
	edgequake: {
		inherit: true,
		isNonstandard: null,
	},
	telluriccurrent: {
		inherit: true,
		isNonstandard: null,
	},
	rockout: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	toppingtoss: {
		inherit: true,
		isNonstandard: null,
	},
	heavensblessing: {
		inherit: true,
		isNonstandard: null,
	},
	amogus: {
		inherit: true,
		isNonstandard: null,
	},
	bushido: {
		inherit: true,
		isNonstandard: null,
	},
	auroraveil: {
		inherit: true,
		onTry() {
			return this.field.isWeather(['hail', 'snow', 'hyperboreanarctic']);
		},
	},
	blizzard: {
		inherit: true,
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snow', 'hyperboreanarctic'])) move.accuracy = true;
		},
	},
	groundbomb: {
		inherit: true,
		isNonstandard: null,
	},
	obsidianhorn: {
		inherit: true,
		isNonstandard: null,
	},
	feudefee: {
		inherit: true,
		isNonstandard: null,
	},
	heavenpierce: {
		inherit: true,
		isNonstandard: null,
	},
	chernoboil: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	halflife: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	atombomb: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	radiation: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	nuclearmeltdown: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	toxicbeam: {
		inherit: true,
		isNonstandard: null,
	},
	inverserush: {
		inherit: true,
		isNonstandard: null,
	},
	skulltoss: {
		inherit: true,
		isNonstandard: null,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	blobblast: {
		inherit: true,
		isNonstandard: null,
	},
	floofandpoof: {
		inherit: true,
		isNonstandard: null,
	},
	sunburst: {
		inherit: true,
		isNonstandard: null,
	},
	deepfry: {
		inherit: true,
		isNonstandard: null,
	},
	doubleiceblob: {
		inherit: true,
		isNonstandard: null,
	},
	extremesneed: {
		inherit: true,
		isNonstandard: null,
	},
	bouncyball: {
		inherit: true,
		isNonstandard: null,
	},
	windwhip: {
		inherit: true,
		isNonstandard: null,
	},
	sleepingsands: {
		inherit: true,
		isNonstandard: null,
	},
	feedandseed: {
		inherit: true,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	astralbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: null,
	},
	paranormalactivity: {
		inherit: true,
		isNonstandard: null,
	},
	infectiouswheeze: {
		inherit: true,
		isNonstandard: null,
	},
	siphon: {
		inherit: true,
		isNonstandard: null,
	},
	xenobeam: {
		inherit: true,
		isNonstandard: null,
	},
	abduction: {
		inherit: true,
		isNonstandard: null,
	},
	flashfreeze: {
		inherit: true,
		isNonstandard: null,
	},
	hypersomnia: {
		inherit: true,
		isNonstandard: null,
	},
	sugarrush: {
		inherit: true,
		isNonstandard: null,
	},
	bloodletting: {
		inherit: true,
		isNonstandard: null,
	},
	shadowstrike: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	shadowban: {
		inherit: true,
		isNonstandard: null,
	},
	helldive: {
		inherit: true,
		isNonstandard: null,
	},
	hyperzone: {
		inherit: true,
		isNonstandard: null,
	},
	freeballoonday: {
		inherit: true,
		isNonstandard: null,
	},
	spectresabre: {
		inherit: true,
		isNonstandard: null,
	},
	bloodshot: {
		inherit: true,
		isNonstandard: null,
	},
	overdose: {
		inherit: true,
		isNonstandard: null,
	},
	highjumpsaw: {
		inherit: true,
		isNonstandard: null,
	},
	stingingrage: {
		inherit: true,
		isNonstandard: null,
	},
	afteryou: {
		inherit: true,
		isNonstandard: null,
	},
	bilebite: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	downpour: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
	},
	firepledge: {
		inherit: true,
		isNonstandard: null,
	},
	fling: {
		inherit: true,
		isNonstandard: null,
	},
	grasspledge: {
		inherit: true,
		isNonstandard: null,
	},
	energyburst: {
		inherit: true,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		isNonstandard: null,
	},
	happyhour: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: null,
	},
	icestorm: {
		inherit: true,
		isNonstandard: null,
	},
	instruct: {
		inherit: true,
		isNonstandard: null,
	},
	magneticflux: {
		inherit: true,
		isNonstandard: null,
	},
	paleowave: {
		inherit: true,
		isNonstandard: null,
	},
	poisonivy: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	waterpledge: {
		inherit: true,
		isNonstandard: null,
	},
	coldcutter: {
		inherit: true,
		isNonstandard: null,
	},
	qualityrip: {
		inherit: true,
		isNonstandard: null,
	},
	concussion: {
		inherit: true,
		isNonstandard: null,
	},
	shootingstar: {
		inherit: true,
		isNonstandard: null,
	},
	hornithrust: {
		inherit: true,
		isNonstandard: null,
	},
	mouthmelter: {
		inherit: true,
		isNonstandard: null,
	},
	terrainpulse: {
		inherit: true,
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
			case 'plasticterrain':
				move.type = 'Plastic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
			}
		},
		isNonstandard: null,
	},
	present: {
		inherit: true,
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Blobbos-Clause') {
				move.type = 'Ice';
			} else {
				move.type = 'Normal';
			}
		},
		onTryHit(target, source, move) {
			if (source.species.name === 'Blobbos-Clause') {
				if (source.isAlly(target)) {
					move.basePower = 0;
					move.infiltrates = true;
				}
				move.basePower = 120;
			}
		},
		onHit(target, source) {
			if (source.species.name === 'Blobbos-Clause') {
				if (source.isAlly(target)) {
					if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
						this.add('-immune', target);
						return this.NOT_FAIL;
					}
				}
			}
		},
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
			case 'hyperboreanarctic': // TODO: Text
				move.type = 'Ice';
				break;
			}
		},
	},
	heroicstrike: {
		inherit: true,
		isNonstandard: null,
	},
	heroiconslaught: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxblobbomb: {
		inherit: true,
		isNonstandard: null,
	},
	swamp: {
		inherit: true,
		isNonstandard: null,
	},
	slysquall: {
		inherit: true,
		isNonstandard: null,
	},
	trapcard: {
		inherit: true,
		isNonstandard: null,
	},
	devilsbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	cursedblade: {
		inherit: true,
		isNonstandard: null,
	},
	dousingflame: {
		inherit: true,
		isNonstandard: null,
	},
	riptide: {
		inherit: true,
		isNonstandard: null,
	},
	foolsgambit: {
		inherit: true,
		isNonstandard: null,
	},
	bigshot: {
		inherit: true,
		isNonstandard: null,
	},
	drinkpotion: {
		inherit: true,
		isNonstandard: null,
	},
	rebuild: {
		inherit: true,
		isNonstandard: null,
	},
	winterwhiteout: {
		inherit: true,
		isNonstandard: null,
	},
	flurryfist: {
		inherit: true,
		isNonstandard: null,
	},
	direclaw: {
		inherit: true,
		isNonstandard: null,
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: null,
	},
	powershift: {
		inherit: true,
		isNonstandard: null,
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: null,
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: null,
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: null,
	},
	ragingfury: {
		inherit: true,
		isNonstandard: null,
	},
	wavecrash: {
		inherit: true,
		isNonstandard: null,
	},
	chloroblast: {
		inherit: true,
		isNonstandard: null,
	},
	mountaingale: {
		inherit: true,
		isNonstandard: null,
	},
	victorydance: {
		inherit: true,
		isNonstandard: null,
	},
	headlongrush: {
		inherit: true,
		isNonstandard: null,
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	esperwing: {
		inherit: true,
		isNonstandard: null,
	},
	bittermalice: {
		inherit: true,
		isNonstandard: null,
	},
	shelter: {
		inherit: true,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
		isNonstandard: null,
	},
	infernalparade: {
		inherit: true,
		isNonstandard: null,
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: null,
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: null,
	},
	lunarblessing: {
		inherit: true,
		isNonstandard: null,
	},
	takeheart: {
		inherit: true,
		isNonstandard: null,
	},
	silktrap: {
		inherit: true,
		isNonstandard: null,
	},
	axekick: {
		inherit: true,
		isNonstandard: null,
	},
	lastrespects: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	luminacrash: {
		inherit: true,
		isNonstandard: null,
	},
	orderup: {
		inherit: true,
		isNonstandard: null,
	},
	jetpunch: {
		inherit: true,
		isNonstandard: null,
	},
	spicyextract: {
		inherit: true,
		isNonstandard: null,
	},
	spinout: {
		inherit: true,
		isNonstandard: null,
	},
	populationbomb: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	icespinner: {
		inherit: true,
		isNonstandard: null,
	},
	glaiverush: {
		inherit: true,
		isNonstandard: null,
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	saltcure: {
		inherit: true,
		isNonstandard: null,
	},
	tripledive: {
		num: 865,
		accuracy: 95,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Triple Dive",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Water",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
		desc: "Hits three times. Each hit increases by 20 power but each hit can also miss.",
		shortDesc: "Hits three times. Each hit can miss but power rises.",
		inherit: true,
		isNonstandard: null,
	},
	hydrosteam: {
		inherit: true,
		isNonstandard: null,
	},
	psyblade: {
		inherit: true,
		isNonstandard: null,
	},
	bloodmoon: {
		inherit: true,
		isNonstandard: null,
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: null,
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
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
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
		desc: "Lowers the users Attack and Defense by 1 stage.",
		shortDesc: "Lowers the users Attack and Defense by 1 stage.",
	},
	snaptrap: {
		num: 779,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Snap Trap",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	crosspoison: {
		num: 440,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Cross Poison",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, slicing: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Poison",
		desc: "Always Crits.",
		shortDesc: "Always results in a critical hit.",
	},
	ivycudgel: {
		num: 904,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Ivy Cudgel",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		desc: "Uses the users Primary typing for the typing of this move. High crit ratio.",
		shortDesc: "Type varies based on user's primary type. +2 Crit Ratio.",
	},
	matchagotcha: {
		inherit: true,
		isNonstandard: null,
	},
	mortalspin: {
		inherit: true,
		isNonstandard: null,
	},
	doodle: {
		inherit: true,
		isNonstandard: null,
	},
	filletaway: {
		inherit: true,
		isNonstandard: null,
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: null,
	},
	flowertrick: {
		inherit: true,
		isNonstandard: null,
	},
	torchsong: {
		inherit: true,
		isNonstandard: null,
	},
	aquastep: {
		inherit: true,
		isNonstandard: null,
	},
	makeitrain: {
		inherit: true,
		isNonstandard: null,
	},
	ruination: {
		inherit: true,
		isNonstandard: null,
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: null,
	},
	electrodrift: {
		inherit: true,
		isNonstandard: null,
	},
	shedtail: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	chillyreception: {
		inherit: true,
		isNonstandard: null,
	},
	snowscape: {
		inherit: true,
		isNonstandard: null,
	},
	tidyup: {
		inherit: true,
		isNonstandard: null,
	},
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	trailblaze: {
		inherit: true,
		isNonstandard: null,
	},
	chillingwater: {
		inherit: true,
		isNonstandard: null,
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: null,
	},
	twinbeam: {
		inherit: true,
		isNonstandard: null,
	},
	ragefist: {
		inherit: true,
		isNonstandard: null,
	},
	armorcannon: {
		inherit: true,
		isNonstandard: null,
	},
	bitterblade: {
		inherit: true,
		isNonstandard: null,
	},
	doubleshock: {
		inherit: true,
		isNonstandard: null,
	},
	comeuppance: {
		inherit: true,
		isNonstandard: null,
	},
	aquacutter: {
		inherit: true,
		isNonstandard: null,
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: null,
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: null,
	},
	combattorque: {
		inherit: true,
		isNonstandard: null,
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: null,
	},
	laserbeam: {
		inherit: true,
		isNonstandard: null,
	},
	regularattack: {
		inherit: true,
		isNonstandard: null,
	},
	landmind: {
		inherit: true,
		isNonstandard: null,
	},
	pobybbolb: {
		inherit: true,
		isNonstandard: null,
	},
	eronsrepus: {
		inherit: true,
		isNonstandard: null,
	},
	shuttleloop: {
		inherit: true,
		isNonstandard: null,
	},
	saltsprinkle: {
		inherit: true,
		isNonstandard: null,
	},
	holdit: {
		inherit: true,
		isNonstandard: null,
	},
	objection: {
		inherit: true,
		isNonstandard: null,
	},
	takethat: {
		inherit: true,
		isNonstandard: null,
	},
	plushrush: {
		inherit: true,
		isNonstandard: null,
	},
	seaoffire: {
		inherit: true,
		isNonstandard: null,
	},
	tridentcharge: {
		inherit: true,
		isNonstandard: null,
	},
	blackfire: {
		inherit: true,
		isNonstandard: null,
	},
	bugout: {
		inherit: true,
		isNonstandard: null,
	},
	hardcrash: {
		inherit: true,
		isNonstandard: null,
	},
	driftgear: {
		inherit: true,
		isNonstandard: null,
	},
	gentworrible: {
		inherit: true,
		isNonstandard: null,
	},
	tombstonerd: {
		inherit: true,
		isNonstandard: null,
	},
	secretstrength: {
		inherit: true,
		isNonstandard: null,
	},
	gigatonhammer: {
		num: 893,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Gigaton Hammer",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, hammer: 1},
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
	strifedicekind: {
		inherit: true,
		isNonstandard: null,
	},
	thunderblitz: {
		inherit: true,
		isNonstandard: null,
	},
	moonstrike: {
		inherit: true,
		isNonstandard: null,
	},
	invigorate: {
		inherit: true,
		isNonstandard: null,
	},
	blazingswipe: {
		inherit: true,
		isNonstandard: null,
	},
	hivemind: {
		inherit: true,
		isNonstandard: null,
	},
	fractus: {
		inherit: true,
		isNonstandard: null,
	},
	purge: {
		inherit: true,
		isNonstandard: null,
	},
	extinction: {
		inherit: true,
		isNonstandard: null,
	},
	uproot: {
		inherit: true,
		isNonstandard: null,
	},
	mirageveil: {
		inherit: true,
		isNonstandard: null,
	},
	frostbite: {
		inherit: true,
		isNonstandard: null,
	},
	braindamage: {
		inherit: true,
		isNonstandard: null,
	},
	borebite: {
		inherit: true,
		isNonstandard: null,
	},
	flintfang: {
		inherit: true,
		isNonstandard: null,
	},
	calibrate: {
		inherit: true,
		isNonstandard: null,
	},
	artwall: {
		inherit: true,
		isNonstandard: null,
	},
	badenergy: {
		inherit: true,
		isNonstandard: null,
	},
	cerebralparasite: {
		inherit: true,
		isNonstandard: null,
	},
	bellyflop: {
		inherit: true,
		isNonstandard: null,
	},
	sinkhole: {
		inherit: true,
		isNonstandard: null,
	},
	dustbowl: {
		inherit: true,
		isNonstandard: null,
	},
	dustcannon: {
		inherit: true,
		isNonstandard: null,
	},
	squash: {
		inherit: true,
		isNonstandard: null,
	},
	cherrynobyl: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbox: {
		inherit: true,
		isNonstandard: null,
	},
	mindbreak: {
		inherit: true,
		isNonstandard: null,
	},
	berserkersoul: {
		inherit: true,
		isNonstandard: null,
	},
	heartofthecards: {
		inherit: true,
		isNonstandard: null,
	},
	anyheal: {
		inherit: true,
		isNonstandard: null,
	},
	anystatus: {
		inherit: true,
		isNonstandard: null,
	},
	anyattack: {
		inherit: true,
		isNonstandard: null,
	},
	anystatup: {
		inherit: true,
		isNonstandard: null,
	},
	lavadapt: {
		inherit: true,
		isNonstandard: null,
	},
	trashtalk: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorball: {
		inherit: true,
		isNonstandard: null,
	},
	torchshriek: {
		inherit: true,
		isNonstandard: null,
	},
	sereneshockwave: {
		inherit: true,
		isNonstandard: null,
	},
	battlecry: {
		inherit: true,
		isNonstandard: null,
	},
	scavenge: {
		inherit: true,
		isNonstandard: null,
	},
	glacialgroove: {
		inherit: true,
		isNonstandard: null,
	},
	crystalslash: {
		inherit: true,
		isNonstandard: null,
	},
	carcrash: {
		inherit: true,
		isNonstandard: null,
	},
	ominouswind: {
		num: 466,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
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
	silverwind: {
		num: 318,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
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
	scald: {
		inherit: true,
		basePower: 70,
		pp: 10,
		isNonstandard: null,
	},
	wickedblow: {
		inherit: true,
		basePower: 75,
		isNonstandard: null,
	},
	flashcannon: {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Flash Cannon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Spdef. by 1.",
	},
	rockslide: {
		num: 157,
		accuracy: 100,
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
	skydrop: {
		inherit: true,
		basePower: 95,
		isNonstandard: null,
	},
	blobbybop: {
		num: 69060,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "Blobby Bop",
		pp: 20,
		priority: 0,
		target: "normal",
		type: "Ice",
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	smartstrike: {
		num: 684,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "Smart Strike",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	moonblast: {
		num: 585,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Moonblast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		desc: "Has a 10% chance of lowering special attack upon hit",
		shortDesc: "10% chance to lower the target's Spatk. by 1.",
	},
	armthrust: {
		inherit: true,
		basePower: 25,
		isNonstandard: null,
	},
	detect: {
		inherit: true,
		boosts: {
			accuracy: 1,
		},
		isNonstandard: null,
		desc: "Protects moves from affecting the user this turn. Raises Accuracy by 1 upon successful use.",
		shortDesc: "Protects moves from affecting the user this turn. Raises Accuracy by 1 upon successful use.",
	},
	spore: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 5,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	sharpen: {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
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
	geargrind: {
		num: 544,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
		desc: "Hits Twice.",
		shortDesc: "Hits Twice.",
	},
	cuttingwaves: {
		inherit: true,
		isNonstandard: null,
	},
	uturn: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	lusterpurge: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	mistball: {
		inherit: true,
		basePower: 70,
		isNonstandard: null,
	},
	voltswitch: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	punchout: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	flashbang: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	slipturn: {
		inherit: true,
		basePower: 65,
		isNonstandard: null,
	},
	sadpoem: {
		inherit: true,
		isNonstandard: null,
	},
	annoy: {
		inherit: true,
		isNonstandard: null,
	},
	peptalk: {
		inherit: true,
		isNonstandard: null,
	},
	combatorders: {
		inherit: true,
		isNonstandard: null,
	},
	haste: {
		inherit: true,
		isNonstandard: null,
	},
	sharpeyes: {
		inherit: true,
		isNonstandard: null,
	},
	maplewarrior: {
		inherit: true,
		isNonstandard: null,
	},
	starforce: {
		inherit: true,
		isNonstandard: null,
	},
	errpkmn: {
		inherit: true,
		isNonstandard: null,
	},
	mitosistackle: {
		inherit: true,
		isNonstandard: null,
	},
	mitosismash: {
		inherit: true,
		isNonstandard: null,
	},
	maxmemeitude: {
		inherit: true,
		isNonstandard: null,
	},
	electroball: {
		num: 486,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = Math.floor(pokemon.getStat('spe') / target.getStat('spe'));
			if (!isFinite(ratio)) ratio = 0;
			const bp = [60, 80, 100, 140, 180][Math.min(ratio, 4)];
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
	drumroll: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Drumroll",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.basePower > 109 && move.id !== 'drumrollcap'
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
		shortDesc: "A random attacking move that is 110 Power or more is selected for use.",
		target: "self",
		type: "Normal",
	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		desc: "The user heals for 1/2 of how much damage dealt to the opponent.",
		shortDesc: "Heals for 50% of damage dealt to the opponent.",
	},
	rocketboost: {
		inherit: true,
		isNonstandard: null,
	},
	genesisboost: {
		inherit: true,
		isNonstandard: null,
	},
	scryingwish: {
		inherit: true,
		isNonstandard: null,
	},
	techslash: {
		inherit: true,
		isNonstandard: null,
	},
	banana: {
		inherit: true,
		isNonstandard: null,
	},
	glomp3: {
		inherit: true,
		isNonstandard: null,
	},
	bombrock: {
		inherit: true,
		isNonstandard: null,
	},
	genesiswhirl: {
		inherit: true,
		isNonstandard: null,
	},
	genesisbeam: {
		inherit: true,
		isNonstandard: null,
	},
	genesisflash: {
		inherit: true,
		isNonstandard: null,
	},
	genesisblast: {
		inherit: true,
		isNonstandard: null,
	},
	meteor: {
		inherit: true,
		isNonstandard: null,
	},
	prismspray: {
		inherit: true,
		isNonstandard: null,
	},
	dragoonslash: {
		inherit: true,
		isNonstandard: null,
	},
	hydropump: {
		num: 56,
		accuracy: 85,
		basePower: 110,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
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
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1.",
	},
	focusblast: {
		inherit: true,
		accuracy: 85,
		basePower: 110,
		isNonstandard: null,
	},
	dualwingbeat: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	dreameater: {
		num: 138,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Dream Eater",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'slp' || target.hasAbility('comatose')) {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {basePower: 160},
		contestType: "Clever",
		desc: "The initial damage of this move is altered only when the target is asleep. Then, this moves power is doubled. Only doubles in power for sleeping targets.",
		shortDesc: "User gains 1/2 of targets HP inflicted. Doubles damage against sleeping targets.",
	},
	finishingtouch: {
		inherit: true,
		isNonstandard: null,
	},
	lasagnatoss: {
		inherit: true,
		isNonstandard: null,
	},
	needlepulse: {
		inherit: true,
		isNonstandard: null,
	},
	lightningblastwave: {
		inherit: true,
		isNonstandard: null,
	},
	fivenights: {
		inherit: true,
		isNonstandard: null,
	},
	waddlecopter: {
		inherit: true,
		isNonstandard: null,
	},
	blobascent: {
		inherit: true,
		isNonstandard: null,
	},
	snappingfrost: {
		inherit: true,
		isNonstandard: null,
	},
	transrights: {
		inherit: true,
		isNonstandard: null,
	},
	ultimateflex: {
		inherit: true,
		isNonstandard: null,
	},
	ufftoyyoyoing: {
		inherit: true,
		isNonstandard: null,
	},
	lovelyhug: {
		inherit: true,
		isNonstandard: null,
	},
	psiblobbin: {
		inherit: true,
		isNonstandard: null,
	},
	frostyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	highqualityrip: {
		inherit: true,
		isNonstandard: null,
	},
	ragingbull: {
		num: 873,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Raging Bull",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('auroraveil');
			pokemon.side.removeSideCondition('mirageveil');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		desc: "Uses the users Primary typing for the typing of this move. Destroys Reflect, Light Screen and Aurora Veil.",
		shortDesc: "Type varies based on user's primary type. Destroys screens.",
	},
	toxic: {
		num: 92,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 5,
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
	eggbomb: {
		num: 121,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1.",
	},
	suffocate: {
		num: 42017,
		accuracy: 70,
		basePower: 10,
		category: "Physical",
		name: "Suffocate",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dark",
		contestType: "Beautiful",
	},
	maxairstream: {
		num: 766,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		name: "Max Airstream",
		pp: 10,
		priority: 0,
		flags: {wind: 1},
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
		category: "Special",
		name: "Max Darkness",
		pp: 10,
		priority: 0,
		flags: {},
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
		basePower: 10,
		category: "Physical",
		name: "Max Flare",
		pp: 10,
		priority: 0,
	   flags: {},
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
		name: "Max Flutterby",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Geyser",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Guard",
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
		category: "Special",
		name: "Max Hailstorm",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Knuckle",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Lightning",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Mindstorm",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Ooze",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Overgrowth",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Phantasm",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Quake",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Rockfall",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Starfall",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Steelspike",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "Max Strike",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "Max Wyrmwind",
		pp: 10,
		priority: 0,
		flags: {},
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
	gmaxbefuddle: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Special",
		name: "G-Max Befuddle",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Cannonade",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Centiferno",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Chi Strike",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Cuddle",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Depletion",
		pp: 5,
		priority: 0,
		flags: {},
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
		basePower: 10,
		category: "Physical",
		name: "G-Max Drum Solo",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Finale",
		pp: 5,
		priority: 0,
		flags: {},
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
		basePower: 10,
		category: "Physical",
		name: "G-Max Fireball",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Foam Burst",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Gold Rush",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Gravitas",
		pp: 5,
		priority: 0,
		flags: {},
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
		basePower: 10,
		category: "Special",
		name: "G-Max Hydrosnipe",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Malodor",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Meltdown",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max One Blow",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Rapid Flow",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Replenish",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Resonance",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Sandblast",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Smite",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Snooze",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Steelsurge",
		pp: 5,
		priority: 0,
		flags: {},
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
		name: "G-Max Stonesurge",
		pp: 5,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Stun Shock",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Sweetness",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "G-Max Tartness",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Terror",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "G-Max Vine Lash",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "G-Max Volcalith",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "G-Max Volt Crash",
		pp: 10,
		priority: 0,
		flags: {},
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
		category: "Special",
		name: "G-Max Wildfire",
		pp: 10,
		priority: 0,
		flags: {},
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
		name: "G-Max Wind Rage",
		pp: 10,
		priority: 0,
		flags: {},
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'luckyroll',
					'magictrap', 'pillowpile', 'wiretrap', 'mines', 'brambles', 'icicles', 'scrapmetal', 'legotrap', 'hotcoals', 'acidtrap', 'discombubbles',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'luckyroll',
					'magictrap', 'pillowpile', 'wiretrap', 'mines', 'brambles', 'icicles', 'scrapmetal', 'legotrap', 'hotcoals', 'acidtrap', 'discombubbles'];
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
	landswrath: {
		inherit: true,
		basePower: 80,
		pp: 5,
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
				this.debug('BP doubled in Terrain');
			}
		},
		desc: "Power doubles if the user is grounded and a terrain is active.",
		shortDesc: "User on terrain: power doubles.",
	},
	kinesis: {
		accuracy: 80,
		basePower: 0,
		category: "Status",
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
};

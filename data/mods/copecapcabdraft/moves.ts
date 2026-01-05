export const Moves: { [k: string]: ModdedMoveData } = {
	"10000000voltthunderbolt": {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
	alberspin: {
		inherit: true,
		isNonstandard: null,
	},
	alloutpummeling: {
		inherit: true,
		isNonstandard: null,
	},
	allyswitch: {
		inherit: true,
		isNonstandard: null,
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
	appleacid: {
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	banefulbunker: {
		inherit: true,
		isNonstandard: null,
	},
	barrage: {
		inherit: true,
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
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
		onTry(source) {
			return !!this.canSwitch(source.side);
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cool",
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
		isNonstandard: null,
	},
	behemothblade: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	blueflare: {
		inherit: true,
		isNonstandard: null,
	},
	bodypress: {
		inherit: true,
		isNonstandard: null,
	},
	bodyslam: {
		inherit: true,
		isNonstandard: null,
	},
	boil: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "BOIL",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		isNonstandard: null,
	},
	boltbeak: {
		inherit: true,
		isNonstandard: null,
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
	branchpoke: {
		inherit: true,
		isNonstandard: null,
	},
	bravebird: {
		inherit: true,
		isNonstandard: null,
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: null,
	},
	breakneckblitz: {
		inherit: true,
		isNonstandard: null,
	},
	brickbreak: {
		inherit: true,
		isNonstandard: null,
	},
	brine: {
		inherit: true,
		isNonstandard: null,
	},
	brutalmauling: {
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
	burningjealousy: {
		inherit: true,
		isNonstandard: null,
	},
	burnup: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: null,
	},
	clearsmog: {
		inherit: true,
		isNonstandard: null,
	},
	closecombat: {
		inherit: true,
		isNonstandard: null,
	},
	coaching: {
		inherit: true,
		isNonstandard: null,
	},
	combattorque: {
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
		isNonstandard: null,
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	coreenforcer: {
		inherit: true,
		isNonstandard: null,
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: null,
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
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
	courtchange: {
		inherit: true,
		isNonstandard: null,
	},
	covet: {
		inherit: true,
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
	crustaceancombat: {
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
		isNonstandard: null,
	},
	dazzlinggleam: {
		inherit: true,
		isNonstandard: null,
	},
	decorate: {
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
		isNonstandard: null,
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
	dragondarts: {
		inherit: true,
		isNonstandard: null,
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	dualchop: {
		inherit: true,
		isNonstandard: null,
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: null,
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: null,
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
	eeriespell: {
		inherit: true,
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
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
		isNonstandard: null,
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
	eternabeam: {
		inherit: true,
		isNonstandard: null,
	},
	expandingforce: {
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
		isNonstandard: null,
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
	falsesurrender: {
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
	fierywrath: {
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
		isNonstandard: null,
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
		isNonstandard: null,
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
	flamewheel: {
		inherit: true,
		isNonstandard: null,
	},
	flamethrower: {
		inherit: true,
		isNonstandard: null,
	},
	flareblitz: {
		inherit: true,
		isNonstandard: null,
	},
	flash: {
		inherit: true,
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
		isNonstandard: null,
	},
	flipturn: {
		inherit: true,
		isNonstandard: null,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
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
	freezingglare: {
		inherit: true,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	glaciallance: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	gmaxbefuddle: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcannonade: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcentiferno: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxchistrike: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcuddle: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxdepletion: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxdrumsolo: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfinale: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfireball: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfoamburst: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxgoldrush: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxgravitas: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxhydrosnipe: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxmalodor: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxmeltdown: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxoneblow: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxrapidflow: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxreplenish: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxresonance: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsandblast: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsmite: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsnooze: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsteelsurge: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxstonesurge: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxstunshock: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsweetness: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxtartness: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxterror: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvinelash: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvolcalith: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvoltcrash: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxwildfire: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxwindrage: {
		inherit: true,
		isNonstandard: null,
	},
	grassknot: {
		inherit: true,
		isNonstandard: null,
	},
	grasspledge: {
		inherit: true,
		isNonstandard: null,
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	grassyglide: {
		inherit: true,
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		isNonstandard: null,
	},
	gravapple: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: "Future",
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	hyperbeam: {
		inherit: true,
		isNonstandard: null,
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacefury: {
		inherit: true,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	jawlock: {
		inherit: true,
		isNonstandard: null,
	},
	judgment: {
		inherit: true,
		isNonstandard: null,
	},
	jumpkick: {
		inherit: true,
		isNonstandard: null,
	},
	junglehealing: {
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
	lashout: {
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
		isNonstandard: null,
	},
	lick: {
		inherit: true,
		isNonstandard: null,
	},
	lifedew: {
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
		isNonstandard: null,
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
	magicpowder: {
		inherit: true,
		isNonstandard: null,
	},
	magicroom: {
		inherit: true,
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
	magneticflux: {
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
		isNonstandard: null,
	},
	matblock: {
		inherit: true,
		isNonstandard: null,
	},
	maxairstream: {
		inherit: true,
		isNonstandard: null,
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: null,
	},
	maxflare: {
		inherit: true,
		isNonstandard: null,
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: null,
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: null,
	},
	maxguard: {
		inherit: true,
		isNonstandard: null,
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: null,
	},
	maxlightning: {
		inherit: true,
		isNonstandard: null,
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxooze: {
		inherit: true,
		isNonstandard: null,
	},
	maxovergrowth: {
		inherit: true,
		isNonstandard: null,
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: null,
	},
	maxquake: {
		inherit: true,
		isNonstandard: null,
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: null,
	},
	maxstrike: {
		inherit: true,
		isNonstandard: null,
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: null,
	},
	meteormash: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
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
	mistyexplosion: {
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
	muddywater: {
		inherit: true,
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		isNonstandard: null,
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
	noretreat: {
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
	obstruct: {
		inherit: true,
		isNonstandard: null,
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: null,
	},
	octazooka: {
		inherit: true,
		isNonstandard: null,
	},
	octolock: {
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
	overdrive: {
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
		isNonstandard: null,
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
		isNonstandard: null,
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
	poltergeist: {
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
	psychup: {
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
		isNonstandard: null,
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
	pyroball: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		isNonstandard: null,
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
	risingvoltage: {
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
		isNonstandard: null,
	},
	savagespinout: {
		inherit: true,
		isNonstandard: null,
	},
	scald: {
		inherit: true,
		isNonstandard: null,
	},
	scaleshot: {
		inherit: true,
		isNonstandard: null,
	},
	scaryface: {
		inherit: true,
		isNonstandard: null,
	},
	scorchingsands: {
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: null,
	},
	sheercold: {
		inherit: true,
		isNonstandard: null,
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: null,
	},
	sketch: {
		inherit: true,
		isNonstandard: null,
	},
	skillswap: {
		inherit: true,
		isNonstandard: null,
	},
	skittersmack: {
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
		isNonstandard: null,
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
	snaptrap: {
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
	snipeshot: {
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
		isNonstandard: null,
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
		isNonstandard: null,
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
	spiritbreak: {
		inherit: true,
		isNonstandard: null,
	},
	spiritshackle: {
		inherit: true,
		isNonstandard: null,
	},
	spitup: {
		inherit: true,
		isNonstandard: null,
	},
	spite: {
		inherit: true,
		isNonstandard: null,
	},
	splash: {
		inherit: true,
		isNonstandard: null,
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
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
	steelbeam: {
		inherit: true,
		isNonstandard: null,
	},
	steelroller: {
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	strength: {
		inherit: true,
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
		isNonstandard: null,
	},
	stunspore: {
		inherit: true,
		isNonstandard: null,
	},
	submission: {
		inherit: true,
		isNonstandard: null,
	},
	substitute: {
		inherit: true,
		isNonstandard: null,
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: null,
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
		isNonstandard: null,
	},
	surf: {
		inherit: true,
		isNonstandard: null,
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: null,
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
	tarshot: {
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
	teatime: {
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
	terrainpulse: {
		inherit: true,
		isNonstandard: null,
	},
	thief: {
		inherit: true,
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
	thundercage: {
		inherit: true,
		isNonstandard: null,
	},
	thunderfang: {
		inherit: true,
		isNonstandard: null,
	},
	thunderouskick: {
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
		isNonstandard: null,
	},
	tripleaxel: {
		inherit: true,
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
	uturn: {
		inherit: true,
		isNonstandard: null,
	},
	uproar: {
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	zingzap: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		isNonstandard: null,
	},
	maxmemeitude: {
		inherit: true,
		isNonstandard: null,
	},
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
	slipturn: {
		inherit: true,
		isNonstandard: null,
	},
	crusadercrash: {
		inherit: true,
		isNonstandard: null,
	},
	moregun: {
		inherit: true,
		isNonstandard: null,
	},
	psychofists: {
		inherit: true,
		isNonstandard: null,
	},
	faradaycage: {
		inherit: true,
		isNonstandard: null,
	},
	dragonburst: {
		inherit: true,
		isNonstandard: null,
	},
	rockclock: {
		inherit: true,
		isNonstandard: null,
	},
	awaken: {
		inherit: true,
		isNonstandard: null,
	},
	voltaiccyclone: {
		inherit: true,
		isNonstandard: null,
	},
	boilover: {
		inherit: true,
		isNonstandard: null,
	},
	soulcrusher: {
		inherit: true,
		isNonstandard: null,
	},
	trickstab: {
		inherit: true,
		isNonstandard: null,
	},
	tombstoner: {
		inherit: true,
		isNonstandard: null,
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: null,
	},
	phantomfang: {
		inherit: true,
		isNonstandard: null,
	},
	phasethrough: {
		inherit: true,
		isNonstandard: null,
	},
	coldcutter: {
		inherit: true,
		isNonstandard: null,
	},
	shadowscales: {
		inherit: true,
		isNonstandard: null,
	},
	wingsofcorrection: {
		inherit: true,
		isNonstandard: null,
	},
	brutalpunishment: {
		inherit: true,
		isNonstandard: null,
	},
	cloudbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	gazerbeam: {
		inherit: true,
		isNonstandard: null,
	},
	memepunch: {
		inherit: true,
		isNonstandard: null,
	},
	shinestrike: {
		inherit: true,
		isNonstandard: null,
	},
	petrify: {
		inherit: true,
		isNonstandard: null,
	},
	starseedblast: {
		inherit: true,
		isNonstandard: null,
	},
	brandingblade: {
		inherit: true,
		isNonstandard: null,
	},
	mudmaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	finalhour: {
		inherit: true,
		isNonstandard: null,
	},
	turnabout: {
		inherit: true,
		isNonstandard: null,
	},
	meddymeds: {
		inherit: true,
		isNonstandard: null,
	},
	badeggs: {
		inherit: true,
		isNonstandard: null,
	},
	backdraft: {
		inherit: true,
		isNonstandard: null,
	},
	itsover: {
		inherit: true,
		isNonstandard: null,
	},
	villify: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearwinter: {
		inherit: true,
		isNonstandard: null,
	},
	shroomsnuggle: {
		inherit: true,
		isNonstandard: null,
	},
	acidreflex: {
		inherit: true,
		isNonstandard: null,
	},
	cope: {
		inherit: true,
		isNonstandard: null,
	},
	gunshot: {
		inherit: true,
		isNonstandard: null,
	},
	frigidend: {
		inherit: true,
		isNonstandard: null,
	},
	hyperbeamd: {
		inherit: true,
		isNonstandard: null,
	},
	darkening: {
		inherit: true,
		isNonstandard: null,
	},
	blackbomb: {
		inherit: true,
		isNonstandard: null,
	},
	beamblade: {
		inherit: true,
		isNonstandard: null,
	},
	bearhug: {
		inherit: true,
		isNonstandard: null,
	},
	chilipowder: {
		inherit: true,
		isNonstandard: null,
	},
	thunderdrop: {
		inherit: true,
		isNonstandard: null,
	},
	faeblade: {
		inherit: true,
		isNonstandard: null,
	},
	stickytongue: {
		inherit: true,
		isNonstandard: null,
	},
	rocketpunch: {
		inherit: true,
		isNonstandard: null,
	},
	powerwasher: {
		inherit: true,
		isNonstandard: null,
	},
	cherrybomb: {
		inherit: true,
		isNonstandard: null,
	},
	crashhopper: {
		inherit: true,
		isNonstandard: null,
	},
	flakcannon: {
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
	flintfang: {
		inherit: true,
		isNonstandard: null,
	},
	calibrate: {
		inherit: true,
		isNonstandard: null,
	},
	earthshatter: {
		inherit: true,
		isNonstandard: null,
	},
	clobber: {
		inherit: true,
		isNonstandard: null,
	},
	neosporin: {
		inherit: true,
		isNonstandard: null,
	},
	yiikout: {
		inherit: true,
		basePower: 60,
		isNonstandard: null,
	},
	toxicbeam: {
		inherit: true,
		isNonstandard: null,
	},
	miraclepunch: {
		inherit: true,
		isNonstandard: null,
	},
	makeitrain: {
		inherit: true,
		isNonstandard: null,
	},
	bitterblade: {
		inherit: true,
		isNonstandard: null,
	},
	spinout: {
		inherit: true,
		isNonstandard: null,
	},
	bloodmoon: {
		inherit: true,
		isNonstandard: null,
	},
	icespinner: {
		inherit: true,
		isNonstandard: null,
	},
	brainfreeze: {
		inherit: true,
		isNonstandard: null,
	},
	silktrap: {
		inherit: true,
		isNonstandard: null,
	},
	glaiverush: {
		inherit: true,
		isNonstandard: null,
	},
	trailblaze: {
		inherit: true,
		isNonstandard: null,
	},
	grandbat: {
		inherit: true,
		isNonstandard: null,
	},
	frozensong: {
		inherit: true,
		isNonstandard: null,
	},
	earrape: {
		inherit: true,
		isNonstandard: null,
	},
	headlongrush: {
		inherit: true,
		isNonstandard: null,
	},
	spicyextract: {
		inherit: true,
		isNonstandard: null,
	},
	doubleshock: {
		inherit: true,
		isNonstandard: null,
	},
	ruination: {
		inherit: true,
		isNonstandard: null,
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: null,
	},
	ragingbull: {
		inherit: true,
		isNonstandard: null,
	},
	infernalparade: {
		inherit: true,
		isNonstandard: null,
	},
	tripledive: {
		inherit: true,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
		isNonstandard: null,
	},
	esperwing: {
		inherit: true,
		isNonstandard: null,
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: null,
	},
	mortalspin: {
		inherit: true,
		isNonstandard: null,
	},
	tidyup: {
		inherit: true,
		isNonstandard: null,
	},
	aquacutter: {
		inherit: true,
		isNonstandard: null,
	},
	flowertrick: {
		inherit: true,
		isNonstandard: null,
	},
	jetpunch: {
		inherit: true,
		isNonstandard: null,
	},
	luminacrash: {
		inherit: true,
		isNonstandard: null,
	},
	oceanhorn: {
		inherit: true,
		isNonstandard: null,
	},
	blazingwheel: {
		inherit: true,
		isNonstandard: null,
	},
	prisonroots: {
		inherit: true,
		isNonstandard: null,
	},
	radishpunch: {
		inherit: true,
		isNonstandard: null,
	},
	enhancedfireorbs: {
		inherit: true,
		isNonstandard: null,
	},
	frytoacrisp: {
		inherit: true,
		isNonstandard: null,
	},
	drinkpotion: {
		inherit: true,
		isNonstandard: null,
	},
	pantherkkick: {
		inherit: true,
		isNonstandard: null,
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
	bilebite: {
		inherit: true,
		isNonstandard: null,
	},
	downpour: {
		inherit: true,
		isNonstandard: null,
	},
	energyburst: {
		inherit: true,
		isNonstandard: null,
	},
	icestorm: {
		inherit: true,
		isNonstandard: null,
	},
	poisonivy: {
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
	barbbarrage: {
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
	ceaselessedge: {
		inherit: true,
		isNonstandard: null,
	},
	takeheart: {
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
	orderup: {
		inherit: true,
		isNonstandard: null,
	},
	populationbomb: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
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
	hydrosteam: {
		inherit: true,
		isNonstandard: null,
	},
	psyblade: {
		inherit: true,
		isNonstandard: null,
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: null,
	},
	matchagotcha: {
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
	torchsong: {
		inherit: true,
		isNonstandard: null,
	},
	aquastep: {
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
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	chillingwater: {
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
	comeuppance: {
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
	borebite: {
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
	cuttingwaves: {
		inherit: true,
		isNonstandard: null,
	},
	solarhunger: {
		inherit: true,
		isNonstandard: null,
	},
};

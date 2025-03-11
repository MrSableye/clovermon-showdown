import {Pokemon} from "../../../sim";

/*

List of new flags and their descriptions:

kick: Kick-based moves (for Striker)
blade: Blade-based moves (for Blademaster)
bone: Bone-based moves (for Bone Zone)
hammer: Hammer-based moves (for Admin Abuse)
*/
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
	bodypress: {
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
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
	/* Disabled moves */
	appleacid: {
		inherit: true,
		isNonstandard: "Past",
	},
	behemothbash: {
		inherit: true,
		isNonstandard: "Past",
	},
	behemothblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	boltbeak: {
		inherit: true,
		isNonstandard: "Past",
	},
	branchpoke: {
		inherit: true,
		isNonstandard: "Past",
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: "Past",
	},
	burningjealousy: {
		inherit: true,
		isNonstandard: "Past",
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: "Past",
	},
	coaching: {
		inherit: true,
		isNonstandard: "Past",
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: "Past",
	},
	decorate: {
		inherit: true,
		isNonstandard: "Past",
	},
	dragondarts: {
		inherit: true,
		isNonstandard: "Past",
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: "Past",
	},
	drumbeating: {
		inherit: true,
		isNonstandard: "Past",
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: "Past",
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: "Past",
	},
	eeriespell: {
		inherit: true,
		isNonstandard: "Past",
	},
	eternabeam: {
		inherit: true,
		isNonstandard: "Past",
	},
	expandingforce: {
		inherit: true,
		isNonstandard: "Past",
	},
	falsesurrender: {
		inherit: true,
		isNonstandard: "Past",
	},
	fierywrath: {
		inherit: true,
		isNonstandard: "Past",
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: "Past",
	},
	flipturn: {
		inherit: true,
		isNonstandard: "Past",
	},
	freezingglare: {
		inherit: true,
		isNonstandard: "Past",
	},
	grassyglide: {
		inherit: true,
		isNonstandard: "Past",
	},
	gravapple: {
		inherit: true,
		isNonstandard: "Past",
	},
	jawlock: {
		inherit: true,
		isNonstandard: "Past",
	},
	junglehealing: {
		inherit: true,
		isNonstandard: "Past",
	},
	lashout: {
		inherit: true,
		isNonstandard: "Past",
	},
	lifedew: {
		inherit: true,
		isNonstandard: "Past",
	},
	magicpowder: {
		inherit: true,
		isNonstandard: "Past",
	},
	meteorassault: {
		inherit: true,
		isNonstandard: "Past",
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: "Past",
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: "Past",
	},
	multiattack: {
		inherit: true,
		isNonstandard: "Past",
	},
	noretreat: {
		inherit: true,
		isNonstandard: "Past",
	},
	obstruct: {
		inherit: true,
		isNonstandard: "Past",
	},
	octolock: {
		inherit: true,
		isNonstandard: "Past",
	},
	overdrive: {
		inherit: true,
		isNonstandard: "Past",
	},
	poltergeist: {
		inherit: true,
		isNonstandard: "Past",
	},
	pyroball: {
		inherit: true,
		isNonstandard: "Past",
	},
	risingvoltage: {
		inherit: true,
		isNonstandard: "Past",
	},
	scaleshot: {
		inherit: true,
		isNonstandard: "Past",
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: "Past",
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: "Past",
	},
	skittersmack: {
		inherit: true,
		isNonstandard: "Past",
	},
	snaptrap: {
		inherit: true,
		isNonstandard: "Past",
	},
	snipeshot: {
		inherit: true,
		isNonstandard: "Past",
	},
	spiritbreak: {
		inherit: true,
		isNonstandard: "Past",
	},
	steelbeam: {
		inherit: true,
		isNonstandard: "Past",
	},
	steelroller: {
		inherit: true,
		isNonstandard: "Past",
	},
	strangesteam: {
		inherit: true,
		isNonstandard: "Past",
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: "Past",
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: "Past",
	},
	tarshot: {
		inherit: true,
		isNonstandard: "Past",
	},
	teatime: {
		inherit: true,
		isNonstandard: "Past",
	},
	terrainpulse: {
		inherit: true,
		isNonstandard: "Past",
	},
	thundercage: {
		inherit: true,
		isNonstandard: "Past",
	},
	thunderouskick: {
		inherit: true,
		isNonstandard: "Past",
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: "Past",
	},
	wickedblow: {
		inherit: true,
		isNonstandard: "Past",
	},
	glaciallance: {
		inherit: true,
		isNonstandard: "Past",
	},
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
	// maxmemeitude: {
	// 	inherit: true,
	// 	isNonstandard: "Past",
	// },
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
	/* Gen 9 Moves */
	aquacutter: {
		inherit: true,
		isNonstandard: "Past",
	},
	aquastep: {
		inherit: true,
		isNonstandard: "Past",
	},
	armorcannon: {
		inherit: true,
		isNonstandard: "Past",
	},
	axekick: {
		inherit: true,
		isNonstandard: "Past",
	},
	bitterblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	chillingwater: {
		inherit: true,
		isNonstandard: "Past",
	},
	chillyreception: {
		inherit: true,
		isNonstandard: "Past",
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: "Past",
	},
	comeuppance: {
		inherit: true,
		isNonstandard: "Past",
	},
	doodle: {
		inherit: true,
		isNonstandard: "Past",
	},
	doubleshock: {
		inherit: true,
		isNonstandard: "Past",
	},
	electrodrift: {
		inherit: true,
		isNonstandard: "Past",
	},
	filletaway: {
		inherit: true,
		isNonstandard: "Past",
	},
	flowertrick: {
		inherit: true,
		isNonstandard: "Past",
	},
	gigatonhammer: {
		inherit: true,
		isNonstandard: "Past",
	},
	glaiverush: {
		inherit: true,
		isNonstandard: "Past",
	},
	headlongrush: {
		inherit: true,
		isNonstandard: "Past",
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: "Past",
	},
	icespinner: {
		inherit: true,
		isNonstandard: "Past",
	},
	jetpunch: {
		inherit: true,
		isNonstandard: "Past",
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: "Past",
	},
	lastrespects: {
		inherit: true,
		isNonstandard: "Past",
	},
	luminacrash: {
		inherit: true,
		isNonstandard: "Past",
	},
	makeitrain: {
		inherit: true,
		isNonstandard: "Past",
	},
	mortalspin: {
		inherit: true,
		isNonstandard: "Past",
	},
	orderup: {
		inherit: true,
		isNonstandard: "Past",
	},
	populationbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	pounce: {
		inherit: true,
		isNonstandard: "Past",
	},
	ragefist: {
		inherit: true,
		isNonstandard: "Past",
	},
	ragingbull: {
		inherit: true,
		isNonstandard: "Past",
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: "Past",
	},
	ruination: {
		inherit: true,
		isNonstandard: "Past",
	},
	saltcure: {
		inherit: true,
		isNonstandard: "Past",
	},
	shedtail: {
		inherit: true,
		isNonstandard: "Past",
	},
	silktrap: {
		inherit: true,
		isNonstandard: "Past",
	},
	snowscape: {
		inherit: true,
		isNonstandard: "Past",
	},
	spicyextract: {
		inherit: true,
		isNonstandard: "Past",
	},
	spinout: {
		inherit: true,
		isNonstandard: "Past",
	},
	terablast: {
		inherit: true,
		isNonstandard: "Past",
	},
	tidyup: {
		inherit: true,
		isNonstandard: "Past",
	},
	torchsong: {
		inherit: true,
		isNonstandard: "Past",
	},
	trailblaze: {
		inherit: true,
		isNonstandard: "Past",
	},
	tripledive: {
		inherit: true,
		isNonstandard: "Past",
	},
	twinbeam: {
		inherit: true,
		isNonstandard: "Past",
	},
	wavecrash: {
		inherit: true,
		isNonstandard: "Past",
	},
	psyblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	hydrosteam: {
		inherit: true,
		isNonstandard: "Past",
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	matchagotcha: {
		inherit: true,
		isNonstandard: "Past",
	},
	ivycudgel: {
		inherit: true,
		isNonstandard: "Past",
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: "Past",
	},
	bittermalice: {
		inherit: true,
		isNonstandard: "Past",
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	bloodmoon: {
		inherit: true,
		isNonstandard: "Past",
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: "Past",
	},
	chloroblast: {
		inherit: true,
		isNonstandard: "Past",
	},
	direclaw: {
		inherit: true,
		isNonstandard: "Past",
	},
	frozensong: {
		inherit: true,
		isNonstandard: "Past",
	},
	infernalparade: {
		inherit: true,
		isNonstandard: "Past",
	},
	mountaingale: {
		inherit: true,
		isNonstandard: "Past",
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: "Past",
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: "Past",
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: "Past",
	},
	victorydance: {
		inherit: true,
		isNonstandard: "Past",
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	eructlas: {
		inherit: true,
		isNonstandard: "Past",
	},
	genesisboost: {
		inherit: true,
		isNonstandard: "Past",
	},
	lasagnatoss: {
		inherit: true,
		isNonstandard: "Past",
	},
	metronomeifitwasfunny: {
		inherit: true,
		isNonstandard: "Past",
	},
	mitada: {
		inherit: true,
		isNonstandard: "Past",
	},
	neosporin: {
		inherit: true,
		isNonstandard: "Past",
	},
	/* Modified moves */
	airslash: {
		inherit: true,
		flags: {protect: 1, mirror: 1, distance: 1, slicing: 1},
	},
	armthrust: {
		inherit: true,
		basePower: 20,
	},
	assist: {
		inherit: true,
		isNonstandard: null,
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
		accuracy: 100,
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
	bugbite: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, bite: 1},
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
	courtchange: {
		inherit: true,
		isNonstandard: "Past",
		onHitField(target, source) {
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire', 'sleazyspores', 'luckyroll',
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
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	},
	curse: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost') && !source.hasAbility('phantasma')) {
				move.target = move.nonGhostTarget as MoveTarget;
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost') && !source.hasAbility('phantasma')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
	},
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		type: "Steel",
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
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
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'luckyroll',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'luckyroll',
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
	dragonclaw: {
		inherit: true,
		critRatio: 2,
	},
	dragonhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
	},
	dreameater: {
		inherit: true,
		basePower: 120,
	},
	drillpeck: {
		inherit: true,
		critRatio: 2,
	},
	eggbomb: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
		isNonstandard: null,
	},
	electricterrain: {
		inherit: true,
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
					return this.chainModify(1.5);
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
	},
	falseswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
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
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	},
	furyswipes: {
		inherit: true,
		basePower: 20,
	},
	gmaxwindrage: {
		inherit: true,
		isNonstandard: "Past",
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'sleazyspores', 'luckyroll',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'luckyroll'];
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
	grassyterrain: {
		inherit: true,
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
					return this.chainModify(1.5);
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
	},
	hammerarm: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, hammer: 1},
	},
	hex: {
		inherit: true,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose') || target.hasAbility('boardpowerz')) return move.basePower * 2;
			return move.basePower;
		},
	},
	highjumpkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1},
	},
	hurricane: {
		inherit: true,
		accuracy: 75,
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
	inferno: {
		inherit: true,
		basePower: 120,
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
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
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
			"Assist",
			"Baneful Bunker",
			"Beak Blast",
			"Belech",
			"Celebrate",
			"Weird Flex",
			"Chatter",
			"Copycat",
			"Counter",
			"Covet",
			"Crafty Shieeld",
			"Destiny Bond",
			"Detect",
			"Diamond Storm",
			"Endure",
			"Feint",
			"Fleur Cannon",
			"Focus Punch",
			"Follow Me",
			"Freeze Shock",
			"Helping Hand",
			"Hyperspace Fury",
			"Hyperspace Hole",
			"Ice Burn",
			"King's Shield",
			"Light of Ruin",
			"Mat Block",
			"Me First",
			"Mimic",
			"Mind Blown",
			"Mirror Coat",
			"Mirror Movee",
			"Nature Power",
			"Photon Geyser",
			"Plasma Fists",
			"Protect",
			"Quick Guard",
			"Rage Powder",
			"Relic Song",
			"Secret Sword",
			"Shell Trap",
			"Sketch",
			"Sleep Talk",
			"Snarl",
			"Snatch",
			"Snore",
			"Spectral Thief",
			"Spiky Shield",
			"Steam Eruption",
			"Struggle",
			"Switcheroo",
			"Techno Blast",
			"Thousand Arrows",
			"Thousand Waves",
			"Thief",
			"Transform",
			"Trick",
			"V-Create",
			"Wide Guard",
			"Metronome",
			"Imprison",
			"Focus Munch",
		],
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard ||
					move.isNonstandard === 'Unobtainable' ||
					(this.format.isNonstandard === 'CAP' && move.isNonstandard === 'CAP')) &&
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
	milkdrink: {
		inherit: true,
		pp: 5,
	},
	nightslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	},
	pinmissile: {
		inherit: true,
		accuracy: 100,
	},
	psychicterrain: {
		inherit: true,
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
					return this.chainModify(1.5);
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
	},
	psychocut: {
		inherit: true,
		flags: {protect: 1, mirror: 1, slicing: 1},
	},
	rapidspin: {
		inherit: true,
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
	},
	razorwind: {
		inherit: true,
		isNonstandard: null,
		basePower: 140,
		type: "Flying",
		flags: {charge: 1, protect: 1, mirror: 1, slicing: 1},
	},
	recover: {
		inherit: true,
		pp: 5,
	},
	rest: {
		inherit: true,
		pp: 5,
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
	roost: {
		inherit: true,
		pp: 5,
	},
	sacredsword: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	},
	secretsword: {
		inherit: true,
		flags: {protect: 1, mirror: 1, slicing: 1},
	},
	shadowbone: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	shelltrap: {
		inherit: true,
		basePower: 75,
		priorityChargeCallback() {},
		onTryMove() {},
		onBasePower(basePower, pokemon) {
			if (!pokemon.volatiles['shelltrap']?.gotHit) {
				return this.chainModify(2);
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
				}
			},
		},
	},
	shoreup: {
		inherit: true,
		pp: 5,
	},
	slackoff: {
		inherit: true,
		pp: 5,
	},
	slam: {
		inherit: true,
		accuracy: 85,
	},
	slash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	},
	softboiled: {
		inherit: true,
		pp: 5,
	},
	spikecannon: {
		inherit: true,
		isNonstandard: null,
		basePower: 25,
		type: "Ground",
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
	toxicspikes: {
		inherit: true,
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
				if (pokemon.hasType('Poison') || pokemon.hasAbility('pozzed')) {
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
	},
	triplekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	tropkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose') ||
			target.hasAbility('boardpowerz')) return move.basePower * 2;
			return move.basePower;
		},
	},
	wildcharge: {
		inherit: true,
		secondary: {
			chance: 20,
			status: 'par',
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
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 95,
	},
	beatup: {
		inherit: true,
		damageCallback(pokemon, target, move) {
			let source = pokemon;
			if (move && move.hit > 1) {
				const allies = pokemon.side.pokemon.filter((ally) => ally !== pokemon && !ally.fainted);
				const ally = allies[move.hit - 2];
				if (ally) {
					source = new Pokemon({
						...ally.set,
						ability: undefined,
						item: undefined,
					}, pokemon.side);
				}
			}
			const moveData = {
				name: "Beat Up",
				basePower: 25,
				category: "Physical",
				flags: {futuremove: 1},
				willCrit: false,
				type: 'Dark',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData);
			if (typeof damage === 'number') return damage;
			return false;
		},
		basePowerCallback: undefined,
		onModifyMove(move, pokemon) {
			move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted);
			move.multihit = move.allies.length;
		},
	},
	coreenforcer: {
		inherit: true,
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			if (this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
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
	slipturn: {
		inherit: true,
		isNonstandard: null,
	},
};

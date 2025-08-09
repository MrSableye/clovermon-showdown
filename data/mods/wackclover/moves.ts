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
	conversion: {
		inherit: true,
		pp: 5,
		onHit(target) {
			const possibleTypes = target.moveSlots.map(moveSlot => {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.id !== 'conversion' && !target.hasType(move.type)) {
					return move.type;
				}
				return '';
			}).filter(type => type);
			if (!possibleTypes.length) {
				return false;
			}
			const type = this.sample(possibleTypes);

			if (!target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
		isNonstandard: null,

		onAfterHit(target) {
			if (this.field.getPseudoWeather('cyberspace')) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
			}
		},
	},
	conversion2: {
		inherit: true,
		pp: 5,
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

			if (!source.setType(randomType, false, source, this.effect)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		onAfterHit(pokemon) {
			if (this.field.getPseudoWeather('cyberspace')) {
				const success = !!this.heal(this.modify(pokemon.maxhp, 1.0));
				return pokemon.cureStatus() || success;
			}
		},
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
	},
	magicpowder: {
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		type: "Bone",
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	bonemerang: {
		inherit: true,
		type: "Bone",
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	bonerush: {
		inherit: true,
		type: "Bone",
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
		accuracy: 100,
		basePower: 100,
		type: "Food",
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
		type: "Food",
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
		type: "Virus",
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
	boostermode:{
		inherit: true,
		isNonstandard: null,
	},
	randommode:{
		inherit: true,
		isNonstandard: null,
	},
	scannermode:{
		inherit: true,
		isNonstandard: null,
	},
	hypermode:{
		inherit: true,
		isNonstandard: null,
	},
	shieldmode:{
		inherit: true,
		isNonstandard: null,
	},
	lanceoflonginus:{
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
		type: "Wind",
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
	bouncyball: {
		inherit: true,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "The user bounces up high, then drops on the foe on the second turn. It may also paralyze the foe.",
		shortDesc: "The user bounces up high, then drops on the foe on the second turn. It may also paralyze the foe.",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, bounce: 1},
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
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Rubber",
		isNonstandard: null,
	},
	"5impossiblerequests": {
		inherit: true,
		isNonstandard: null,
		},
		abduct: {
		inherit: true,
		isNonstandard: null,
		},
		abruption: {
		inherit: true,
		isNonstandard: null,
		},
		achillesheel: {
			inherit: true,
			isNonstandard: null,
			},
		acidbath: {
		inherit: true,
		isNonstandard: null,
		},
		acidrain: {
		inherit: true,
		isNonstandard: null,
		},
		adaptray: {
		inherit: true,
		isNonstandard: null,
		},
		aerialrace: {
		inherit: true,
		isNonstandard: null,
		},
		aichmoclaws: {
			inherit: true,
			isNonstandard: null,
			},
		aimforthehorn: {
		inherit: true,
		isNonstandard: null,
		},
		amberwave: {
		inherit: true,
		isNonstandard: null,
		},
		amorouspulse: {
		inherit: true,
		isNonstandard: null,
		},
		anaphylacticshock: {
			inherit: true,
			isNonstandard: null,
			},
		ancientwind: {
		inherit: true,
		isNonstandard: null,
		},
		angelburst: {
		inherit: true,
		isNonstandard: null,
		},
		angelrush: {
		inherit: true,
		isNonstandard: null,
		},
		anglestab: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		},
		antivenom: {
		inherit: true,
		isNonstandard: null,
		},
		antstrength: {
		inherit: true,
		isNonstandard: null,
		},
		anxiety: {
		inherit: true,
		isNonstandard: null,
		},
		anytime: {
		inherit: true,
		isNonstandard: null,
		},
		aquatichorror: {
		inherit: true,
		isNonstandard: null,
		},
		arboreum: {
		inherit: true,
		isNonstandard: null,
		},
		arcaneeye: {
		inherit: true,
		isNonstandard: null,
		},
		arcanebolt: {
			inherit: true,
			isNonstandard: null,
			},
		arclight: {
		inherit: true,
		isNonstandard: null,
		},
		arcticspear: {
		inherit: true,
		isNonstandard: null,
		},
		arcticwind: {
		inherit: true,
		isNonstandard: null,
		},
		armorburst: {
		inherit: true,
		isNonstandard: null,
		},
		arterystrike: {
		inherit: true,
		isNonstandard: null,
		},
		artgallery: {
		inherit: true,
		isNonstandard: null,
		},
		ashrain: {
		inherit: true,
		isNonstandard: null,
		},
		ashspray: {
		inherit: true,
		isNonstandard: null,
		},
		pray: {
			inherit: true,
			isNonstandard: null,
			},
			apexmutation: {
				inherit: true,
				isNonstandard: null,
				},
		astronomy: {
		inherit: true,
		isNonstandard: null,
		},
		atombomb: {
		inherit: true,
		isNonstandard: null,
		},
		atomicenergy: {
		inherit: true,
		isNonstandard: null,
		},
		atomicrush: {
		inherit: true,
		isNonstandard: null,
		},
		atomicpunch: {
			inherit: true,
			isNonstandard: null,
			},
		attackorder: {
		inherit: true,
		isNonstandard: null,
		},
		baconrush: {
		inherit: true,
		isNonstandard: null,
		},
		balance: {
		inherit: true,
		isNonstandard: null,
		},
		ballbreaker: {
		inherit: true,
		isNonstandard: null,
		},
		balljuggle: {
		inherit: true,
		isNonstandard: null,
		},
		balloonpop: {
		inherit: true,
		isNonstandard: null,
		},
		bananapeel: {
		inherit: true,
		isNonstandard: null,
		},
		bananarang: {
		inherit: true,
		isNonstandard: null,
		},
		bandattack: {
		inherit: true,
		isNonstandard: null,
		},
		bandshot: {
		inherit: true,
		isNonstandard: null,
		},
		barking: {
		inherit: true,
		isNonstandard: null,
		},
		barkskin: {
		inherit: true,
		isNonstandard: null,
		},
		barkpress: {
		inherit: true,
		isNonstandard: null,
		},
		baseballbat: {
		inherit: true,
		isNonstandard: null,
		},
		baseballstrike: {
		inherit: true,
		isNonstandard: null,
		},
		bask: {
		inherit: true,
		isNonstandard: null,
		},
		batbite: {
		inherit: true,
		isNonstandard: null,
		},
		beacon: {
		inherit: true,
		isNonstandard: null,
		},
		bearhug: {
		inherit: true,
		isNonstandard: null,
		},
		beatmatch: {
		inherit: true,
		isNonstandard: null,
		},
		befuddlepowder: {
		inherit: true,
		isNonstandard: null,
		},
		bellyflop: {
		inherit: true,
		isNonstandard: null,
		},
		bfg: {
		inherit: true,
		isNonstandard: null,
		},
		bigiron: {
		inherit: true,
		isNonstandard: null,
		},
		birdflu: {
			inherit: true,
			isNonstandard: null,
			},
		bitesthedust: {
		inherit: true,
		isNonstandard: null,
		},
		blackhole: {
		inherit: true,
		isNonstandard: null,
		},
		blacktruth: {
		inherit: true,
		isNonstandard: null,
		},
		blackweb: {
		inherit: true,
		isNonstandard: null,
		},
		bladerain: {
		inherit: true,
		isNonstandard: null,
		},
		blazingshock: {
		inherit: true,
		isNonstandard: null,
		},
		bleedingburst: {
			inherit: true,
			isNonstandard: null,
			},
		blinding: {
			inherit: true,
			isNonstandard: null,
			},
		bloodbath: {
		inherit: true,
		isNonstandard: null,
		},
		bloodsplatter: {
		inherit: true,
		isNonstandard: null,
		},
		bloodbite: {
		inherit: true,
		isNonstandard: null,
		},
		bloodblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, slicing: 1, mirror: 1},
		isNonstandard: null,
		},
		bloodhound: {
		inherit: true,
		isNonstandard: null,
		},
		bloodletting: {
				inherit: true,
				accuracy: 100,
				basePower: 0,
				category: "Status",
				desc: "The user and the target both start Bleeding.",
				shortDesc: "The user and the target both start Bleeding.",
				pp: 10,
				priority: 0,
				flags: {protect: 1, reflectable: 1, mirror: 1},
				secondary: {
					chance: 100,
					volatileStatus: 'bleed',
					status: 'psn',
				},
				self: {
					volatileStatus: 'bleed',
				},
				target: "normal",
				type: "Blood",
				isNonstandard: null,	/** TODO: Code "Bleeding" */
			},
		bloodport: {
		inherit: true,
		isNonstandard: null,
		},
		bloodpump: {
		inherit: true,
		isNonstandard: null,
		},
		bloodrain: {
		inherit: true,
		isNonstandard: null,
		},
		bloodritual: {
		inherit: true,
		isNonstandard: null,
		},
		bloodshower: {
		inherit: true,
		isNonstandard: null,
		},
		bloodsiphon: {
		inherit: true,
		isNonstandard: null,
		},
		bloodspikes: {
		inherit: true,
		isNonstandard: null,
		},
		bloodwhip: {
		inherit: true,
		isNonstandard: null,
		},
		boatbash: {
		inherit: true,
		isNonstandard: null,
		},
		bodyboost: {
		inherit: true,
		isNonstandard: null,
		},
		boltslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		bombard: {
		inherit: true,
		isNonstandard: null,
		}, 
		bondage: {
		inherit: true,
		isNonstandard: null,
		},
		bonebreaker: {
		inherit: true,
		isNonstandard: null,
		},
		bonecrusher: {
		inherit: true,
		isNonstandard: null,
		},
		boo: {
			inherit: true,
			isNonstandard: null,
			},
		boombox: {
		inherit: true,
		isNonstandard: null,
		},
		boostbeam: {
		inherit: true,
		isNonstandard: null,
		},
		boulderbash: {
		inherit: true,
		isNonstandard: null,
		},
		bounceback: {
			inherit: true,
			isNonstandard: null,
			},
		brace: {
		inherit: true,
		isNonstandard: null,
		},
		brainrot: {
		inherit: true,
		isNonstandard: null,
		},
		brandingkiss: {
			inherit: true,
			isNonstandard: null,
			},
		breakfastbreaker: {
		inherit: true,
		isNonstandard: null,
		},
		bucketbomb: {
		inherit: true,
		isNonstandard: null,
		},
		bugkick: {
		inherit: true,
		isNonstandard: null,
		},
		burningice: {
		inherit: true,
		isNonstandard: null,
		},
		bury: {
		inherit: true,
		isNonstandard: null,
		},
		buttslam: {
		inherit: true,
		isNonstandard: null,
		},
		cakeslice: {
		inherit: true,
		isNonstandard: null,
		},
		cakewalk: {
		inherit: true,
		isNonstandard: null,
		},
		caloriebeam: {
		inherit: true,
		isNonstandard: null,
		},
		cancervirus: {
		inherit: true,
		isNonstandard: null,
		},
		cannibalize: {
			inherit: true,
			isNonstandard: null,
			},
		carcrash: {
		inherit: true,
		isNonstandard: null,
		},
		catlaser: {
			inherit: true,
			isNonstandard: null,
			},
		cbt: {
		inherit: true,
		isNonstandard: null,
		},
		channel: {
		inherit: true,
		isNonstandard: null,
		},
		chargecrystal: {
		inherit: true,
		isNonstandard: null,
		},
		charisma: {
		inherit: true,
		isNonstandard: null,
		},
		cheesymelt: {
		inherit: true,
		isNonstandard: null,
		},
		cheddarcrash: {
			inherit: true,
			isNonstandard: null,
			},
		chemicalburn: {
		inherit: true,
		isNonstandard: null,
		},
		chemotherapy: {
		inherit: true,
		isNonstandard: null,
		},
		chlorobeam: {
		inherit: true,
		isNonstandard: null,
		},
		chokehold: {
		inherit: true,
		isNonstandard: null,
		},
		christmasspirit: {
		inherit: true,
		isNonstandard: null,
		},
		chronophage: {
		inherit: true,
		isNonstandard: null,
		},
		chronosrose: {
		inherit: true,
		isNonstandard: null,
		},
		claypulse: {
		inherit: true,
		isNonstandard: null,
		},
		cleavage: {
		inherit: true,
		isNonstandard: null,
		},
		cloudcrash: {
		inherit: true,
		isNonstandard: null,
		},
		coconutpunch: {
		inherit: true,
		isNonstandard: null,
		},
		coffeedrink: {
			inherit: true,
			isNonstandard: null,
			},
		coinburst: {
		inherit: true,
		isNonstandard: null,
		},
		coldfront: {
		inherit: true,
		isNonstandard: null,
		},
		coldheart: {
		inherit: true,
		isNonstandard: null,
		},
		coldspell: {
		inherit: true,
		isNonstandard: null,
		},
		combust: {
		inherit: true,
		isNonstandard: null,
		},
		comfycoil: {
		inherit: true,
		isNonstandard: null,
		},
		communism: {
		inherit: true,
		isNonstandard: null,
		},
		commoncold: {
			inherit: true,
			isNonstandard: null,
			},
		compost: {
		inherit: true,
		isNonstandard: null,
		},
		concentrate: {
		inherit: true,
		isNonstandard: null,
		},
		coneofcold: {
		inherit: true,
		isNonstandard: null,
		},
		consume: {
		inherit: true,
		isNonstandard: null,
		},
		consumerism: {
		inherit: true,
		isNonstandard: null,
		},
		cooldown: {
		inherit: true,
		isNonstandard: null,
		},
		coralblade: {
		inherit: true,
		isNonstandard: null,
		},
		coralgraze: {
		inherit: true,
		isNonstandard: null,
		},
		coralreef: {
		inherit: true,
		isNonstandard: null,
		},
		corner: {
		inherit: true,
		isNonstandard: null,
		},
		corpsewave: {
		inherit: true,
		isNonstandard: null,
		},
		corrosivespray: {
		inherit: true,
		isNonstandard: null,
		},
		corrupt: {
		inherit: true,
		isNonstandard: null,
		},
		cosmicgas: {
		inherit: true,
		isNonstandard: null,
		},
		cosmichorror: {
		inherit: true,
		isNonstandard: null,
		},
		couragerush: {
		inherit: true,
		isNonstandard: null,
		},
		cosmicblade: {
			inherit: true,
			isNonstandard: null,
			flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		},
		crashlanding: {
		inherit: true,
		isNonstandard: null,
		},
		creammissiles: {
		inherit: true,
		isNonstandard: null,
		},
		cremate: {
		inherit: true,
		isNonstandard: null,
		},
		cripple: {
		inherit: true,
		isNonstandard: null,
		},
		cyclonepunch: {
		inherit: true,
		isNonstandard: null,
		},
		sonicpunch: {
		inherit: true,
		isNonstandard: null,
		},
		antiectpunch: {
		inherit: true,
		isNonstandard: null,
		},
		heartpunch: {
		inherit: true,
		isNonstandard: null,
		},
		manapunch: {
		inherit: true,
		isNonstandard: null,
		},
		steampunch: {
		inherit: true,
		isNonstandard: null,
		},
		crystaledge: {
		inherit: true,
		isNonstandard: null,
		},
		crystalize: {
		inherit: true,
		isNonstandard: null,
		},
		crystalpower: {
		inherit: true,
		isNonstandard: null,
		},
		crystalray: {
		inherit: true,
		isNonstandard: null,
		},
		crystalslide: {
		inherit: true,
		isNonstandard: null,
		},
		crystaltail: {
		inherit: true,
		isNonstandard: null,
		},
		crystaltomb: {
		inherit: true,
		isNonstandard: null,
		},
		crystalwave: {
		inherit: true,
		isNonstandard: null,
		},
		curveball: {
		inherit: true,
		isNonstandard: null,
		},
		cutebetrayal: {
		inherit: true,
		isNonstandard: null,
		},
		cyberpunch: {
		inherit: true,
		isNonstandard: null,
		},
		cyberspacerise: {
		inherit: true,
		isNonstandard: null,
		},
		"3dattack": {
		inherit: true,
		isNonstandard: null,
		},
		cyberspace: {
		inherit: true,
		isNonstandard: null,
		},
		datastorm: {
		inherit: true,
		isNonstandard: null,
		},
		dancinglight: {
		inherit: true,
		isNonstandard: null,
		},
		darkerpulse: {
		inherit: true,
		isNonstandard: null,
		},
		darkfire: {
		inherit: true,
		isNonstandard: null,
		},
		darksport: {
		inherit: true,
		isNonstandard: null,
		},
		dawnchorus: {
		inherit: true,
		isNonstandard: null,
		},
		dawnofthedead: {
		inherit: true,
		isNonstandard: null,
		},
		dayblast: {
		inherit: true,
		isNonstandard: null,
		},
		daydream: {
		inherit: true,
		isNonstandard: null,
		},
		dazzlingflames: {
		inherit: true,
		isNonstandard: null,
		},
		decaylimbs: {
		inherit: true,
		isNonstandard: null,
		},
		decaytouch: {
		inherit: true,
		isNonstandard: null,
		},
		decisivestrike: {
		inherit: true,
		isNonstandard: null,
		},
		dedotatedwam: {
		inherit: true,
		isNonstandard: null,
		},
		deepimpact: {
		inherit: true,
		isNonstandard: null,
		},
		defragment: {
		inherit: true,
		isNonstandard: null,
		},
		deliverance: {
		inherit: true,
		isNonstandard: null,
		},
		delivery: {
		inherit: true,
		isNonstandard: null,
		},
		derangedburst: {
		inherit: true,
		isNonstandard: null,
		},
		detonationburst: {
		inherit: true,
		isNonstandard: null,
		},
		digicharge: {
		inherit: true,
		isNonstandard: null,
		},
		dildohorn: {
		inherit: true,
		isNonstandard: null,
		},
		divide: {
		inherit: true,
		isNonstandard: null,
		},
		divinefacade: {
		inherit: true,
		isNonstandard: null,
		},
		divinequake: {
		inherit: true,
		isNonstandard: null,
		},
		dogfight: {
		inherit: true,
		isNonstandard: null,
		},
		donutring: {
		inherit: true,
		isNonstandard: null,
		},
		doublenote: {
		inherit: true,
		isNonstandard: null,
		},
		dracomissiles: {
		inherit: true,
		isNonstandard: null,
		},
		dragondream: {
		inherit: true,
		isNonstandard: null,
		},
		dragonruins: {
			inherit: true,
			isNonstandard: null,
			},
		dragonfire: {
		inherit: true,
		isNonstandard: null,
		},
		dragonkick: {
		inherit: true,
		isNonstandard: null,
		},
		dragonwings: {
		inherit: true,
		isNonstandard: null,
		},
		draineedle: {
		inherit: true,
		isNonstandard: null,
		},
		dreamfist: {
		inherit: true,
		isNonstandard: null,
		},
		dreamswallow: {
		inherit: true,
		isNonstandard: null,
		},
		driveby: {
		inherit: true,
		isNonstandard: null,
		},
		dropguard: {
		inherit: true,
		isNonstandard: null,
		},
		drumpalm: {
		inherit: true,
		isNonstandard: null,
		},
		dualchaos: {
		inherit: true,
		isNonstandard: null,
		},
		dubiousdream: {
		inherit: true,
		isNonstandard: null,
		},
		dumdumuppercut: {
		inherit: true,
		isNonstandard: null,
		},
		duriaantiquior: {
		inherit: true,
		isNonstandard: null,
		},
		dustkick: {
		inherit: true,
		isNonstandard: null,
		},
		dusttornado: {
		inherit: true,
		isNonstandard: null,
		},
		earthchomp: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, bite: 1},
		isNonstandard: null,
		},
		earthenfeast: {
		inherit: true,
		isNonstandard: null,
		},
		ebola: {
		inherit: true,
		isNonstandard: null,
		},
		echolocation: {
		inherit: true,
		isNonstandard: null,
		},
		edenfruit: {
		inherit: true,
		isNonstandard: null,
		},
		edging: {
		inherit: true,
		isNonstandard: null,
		},
		eject: {
		inherit: true,
		isNonstandard: null,
		},
		elastickick: {
		inherit: true,
		isNonstandard: null,
		},
		eldritchpower: {
		inherit: true,
		isNonstandard: null,
		},
		electrify: {
		inherit: true,
		isNonstandard: null,
		},
		electrodrill: {
		inherit: true,
		isNonstandard: null,
		},
		electroleech: {
		inherit: true,
		isNonstandard: null,
		},
		elementalattack: {
		inherit: true,
		isNonstandard: null,
		},
		embrace: {
		inherit: true,
		isNonstandard: null,
		},
		emojibeam: {
		inherit: true,
		isNonstandard: null,
		},
		energyshield: {
		inherit: true,
		isNonstandard: null,
		},
		encycloray: {
			inherit: true,
			isNonstandard: null,
			},
		enfeebleray: {
		inherit: true,
		isNonstandard: null,
		},
		enginecharge: {
		inherit: true,
		isNonstandard: null,
		},
		enlighten: {
		inherit: true,
		isNonstandard: null,
		},
		envelop: {
		inherit: true,
		isNonstandard: null,
		},
		enviousheart: {
		inherit: true,
		isNonstandard: null,
		},
		enviousrage: {
		inherit: true,
		isNonstandard: null,
		},
		essencedrain: {
			inherit: true,
			isNonstandard: null,
		},
		evilhurricane: {
		inherit: true,
		isNonstandard: null,
		},
		exorcism: {
		inherit: true,
		isNonstandard: null,
		},
		
		expulsion: {
		inherit: true,
		isNonstandard: null,
		},
		expunge: {
		inherit: true,
		isNonstandard: null,
		},
		extortionpummel: {
		inherit: true,
		isNonstandard: null,
		},
		extrachromosome: {
			inherit: true,
			isNonstandard: null,
			},
		fabricblast: {
		inherit: true,
		isNonstandard: null,
		},
		fabricpunch: {
		inherit: true,
		isNonstandard: null,
		},
		fabricsoftener: {
		inherit: true,
		isNonstandard: null,
		},
		fabricstab: {
		inherit: true,
		isNonstandard: null,
			flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},

		},
		fabricworld: {
		inherit: true,
		isNonstandard: null,
		},
		factory: {
		inherit: true,
		isNonstandard: null,
		},
		fadeaway: {
		inherit: true,
		isNonstandard: null,
		},
		fadereflection: {
		inherit: true,
		isNonstandard: null,
		},
		faerieorb: {
		inherit: true,
		isNonstandard: null,
		},
		faithcharge: {
		inherit: true,
		isNonstandard: null,
		},
		fart: {
		inherit: true,
		isNonstandard: null,
		},
		fastfood: {
		inherit: true,
		isNonstandard: null,
		},
		fastforward: {
		inherit: true,
		isNonstandard: null,
		},
		fatslam: {
		inherit: true,
		isNonstandard: null,
		},
		fearpulse: {
		inherit: true,
		isNonstandard: null,
		},
		feast: {
			inherit: true,
			isNonstandard: null,
			},
		felltree: {
		inherit: true,
		isNonstandard: null,
		},
		feverishsmooch: {
		inherit: true,
		isNonstandard: null,
		},
		filthbomb: {
		inherit: true,
		isNonstandard: null,
		},
		finalheaven: {
		inherit: true,
		isNonstandard: null,
		},
		finishingmove: {
		inherit: true,
		isNonstandard: null,
		},
		fireplay: {
			inherit: true,
			isNonstandard: null,
			},
		firewallpress: {
		inherit: true,
		isNonstandard: null,
		},
		firstblood: {
		inherit: true,
		isNonstandard: null,
		},
		firstkiss: {
		inherit: true,
		isNonstandard: null,
		},
		fishbite: {
		inherit: true,
		isNonstandard: null,
		},
		fishingdive: {
		inherit: true,
		isNonstandard: null,
		},
		fishingrod: {
		inherit: true,
		isNonstandard: null,
		},
		fishpunch: {
		inherit: true,
		isNonstandard: null,
		},
		fivestarstrike: {
		inherit: true,
		isNonstandard: null,
		},
		flavorburst: {
		inherit: true,
		isNonstandard: null,
		},
		flavortown: {
		inherit: true,
		isNonstandard: null,
		},
		flock: {
		inherit: true,
		isNonstandard: null,
		},
		flowerkiss: {
		inherit: true,
		isNonstandard: null,
		},
		flutter: {
		inherit: true,
		isNonstandard: null,
		},
		foodpoison: {
			inherit: true,
			isNonstandard: null,
			},
			fossilize: {
				inherit: true,
				isNonstandard: null,
				},
		fossilcrash: {
		inherit: true,
		isNonstandard: null,
		},
		fossilfuel: {
		inherit: true,
		isNonstandard: null,
		},
		fortissimo: {
		inherit: true,
		isNonstandard: null,
		},
		foulnote: {
		inherit: true,
		isNonstandard: null,
		},
		foulodor: {
		inherit: true,
		isNonstandard: null,
		},
		fowlplay: {
		inherit: true,
		isNonstandard: null,
		},
		freezepoint: {
		inherit: true,
		isNonstandard: null,
		},
		freezingwave: {
		inherit: true,
		isNonstandard: null,
		},
		frigerate: {
		inherit: true,
		isNonstandard: null,
		},
		frostkick: {
		inherit: true,
		isNonstandard: null,
		},
		fruityburst: {
		inherit: true,
		isNonstandard: null,
		},
		fullsteamahead: {
		inherit: true,
		isNonstandard: null,
		},
		futureattack: {
		inherit: true,
		isNonstandard: null,
		},
		gadget: {
		inherit: true,
		isNonstandard: null,
		},
		galacticforce: {
		inherit: true,
		isNonstandard: null,
		},
		gangbang: {
		inherit: true,
		isNonstandard: null,
		},
		gash: {
		inherit: true,
		isNonstandard: null,
		},
		gasoline: {
		inherit: true,
		isNonstandard: null,
		},
		geyser: {
		inherit: true,
		isNonstandard: null,
		},
		gigabyte: {
		inherit: true,
		isNonstandard: null,
		},
		gigadrillbreak: {
		inherit: true,
		isNonstandard: null,
		},
		glacialrend: {
			inherit: true,
			isNonstandard: null,
			},
		glassbreaker: {
		inherit: true,
		isNonstandard: null,
		},
		glasscannon: {
		inherit: true,
		isNonstandard: null,
		},
		glassdefense: {
		inherit: true,
		isNonstandard: null,
		},
		glassing: {
		inherit: true,
		isNonstandard: null,
		},
		glassstorm: {
		inherit: true,
		isNonstandard: null,
		},
		glitzblitz: {
		inherit: true,
		isNonstandard: null,
		},
		gnashteeth: {
		inherit: true,
		isNonstandard: null,
		},
		greenthumb: {
			inherit: true,
			isNonstandard: null,
			},
		godforce: {
		inherit: true,
		isNonstandard: null,
		},
		godsgrace: {
		inherit: true,
		isNonstandard: null,
		},
		godslayer: {
		inherit: true,
		isNonstandard: null,
		},
		godspeed: {
		inherit: true,
		isNonstandard: null,
		},
		goldrush: {
		inherit: true,
		isNonstandard: null,
		},
		goldtruth: {
		inherit: true,
		isNonstandard: null,
		},
		gorgoneye: {
		inherit: true,
		isNonstandard: null,
		},
		gorillaarm: {
		inherit: true,
		isNonstandard: null,
		},
		gorillapower: {
		inherit: true,
		isNonstandard: null,
		},
		governmentmen: {
		inherit: true,
		isNonstandard: null,
		},
		grandslam: {
		inherit: true,
		isNonstandard: null,
		},
		graveyard: {
		inherit: true,
		isNonstandard: null,
		},
		greasepunch: {
		inherit: true,
		isNonstandard: null,
		},
		greasebomb: {
			inherit: true,
			isNonstandard: null,
			},
			greasepump: {
				inherit: true,
				isNonstandard: null,
				},
		greasygrasp: {
		inherit: true,
		isNonstandard: null,
		},
		greasyslap: {
		inherit: true,
		isNonstandard: null,
		},
		greenhousegas: {
		inherit: true,
		isNonstandard: null,
		},
		goudagun: {
			inherit: true,
			isNonstandard: null,
			},
		guerillapoop: {
		inherit: true,
		isNonstandard: null,
		},
		guidinglight: {
		inherit: true,
		isNonstandard: null,
		},
		hack: {
		inherit: true,
		isNonstandard: null,
		},
		halo: {
		inherit: true,
		isNonstandard: null,
		},
		hannukahcandles: {
		inherit: true,
		isNonstandard: null,
		},
		hatspin: {
			inherit: true,
			isNonstandard: null,
			},
			hauntedhouse: {
				inherit: true,
				isNonstandard: null,
				},
		headrush: {
		inherit: true,
		isNonstandard: null,
		},
		kawaiilook: {
		inherit: true,
		isNonstandard: null,
		},
		heartbreak: {
		inherit: true,
		isNonstandard: null,
		},
		heatmirage: {
		inherit: true,
		isNonstandard: null,
		},
		heatray: {
		inherit: true,
		isNonstandard: null,
		},
		heatup: {
		inherit: true,
		isNonstandard: null,
		},
		heavenshole: {
		inherit: true,
		isNonstandard: null,
		},
		helterskelter: {
		inherit: true,
		isNonstandard: null,
		},
		hexpunch: {
		inherit: true,
		isNonstandard: null,
		},
		hexclaw: {
			inherit: true,
			isNonstandard: null,
			},
		hexvirus: {
		inherit: true,
		isNonstandard: null,
		},
		hibernation: {
		inherit: true,
		isNonstandard: null,
		},
		highnote: {
		inherit: true,
		isNonstandard: null,
		},
		hightide: {
		inherit: true,
		isNonstandard: null,
		},
		hipcheck: {
		inherit: true,
		isNonstandard: null,
		},
		hiphiphooray: {
		inherit: true,
		isNonstandard: null,
		},
		hiv: {
		inherit: true,
		isNonstandard: null,
		},
		holocaust: {
		inherit: true,
		isNonstandard: null,
		},
		holykick: {
		inherit: true,
		isNonstandard: null,
		},
		holysacrifice: {
		inherit: true,
		isNonstandard: null,
		},
		homingbeam: {
		inherit: true,
		isNonstandard: null,
		},
		carpetbomb: {
		inherit: true,
		isNonstandard: null,
		},
		sacrifice: {
		inherit: true,
		isNonstandard: null,
		},
		fieryexplosion: {
		inherit: true,
		isNonstandard: null,
		},
		honeybeam: {
		inherit: true,
		isNonstandard: null,
		},
		honeydewblast: {
		inherit: true,
		isNonstandard: null,
		},
		honeydrip: {
		inherit: true,
		isNonstandard: null,
		},
		hookdown: {
		inherit: true,
		isNonstandard: null,
		},
		hornyattack: {
		inherit: true,
		isNonstandard: null,
		},
		hotpocketcrash: {
		inherit: true,
		isNonstandard: null,
		},
		howlingblaster: {
		inherit: true,
		isNonstandard: null,
		},
		humidray: {
		inherit: true,
		isNonstandard: null,
		},
		hyperrubber: {
			inherit: true,
			isNonstandard: null,
		},
		iceberg: {
		inherit: true,
		isNonstandard: null,
		},
		icecage: {
		inherit: true,
		isNonstandard: null,
		},
		icegatling: {
		inherit: true,
		isNonstandard: null,
		},
		illuminatipower: {
		inherit: true,
		isNonstandard: null,
		},
		infect: {
		inherit: true,
		isNonstandard: null,
		},
		infernowind: {
		inherit: true,
		isNonstandard: null,
		},
		infohazardrush: {
		inherit: true,
		isNonstandard: null,
		},
		infooverload: {
		inherit: true,
		isNonstandard: null,
		},
		initiate: {
		inherit: true,
		isNonstandard: null,
		},
		numbinginjection: {
			inherit: true,
			isNonstandard: null,
			},
			injector: {
				inherit: true,
				isNonstandard: null,
				},
		inkshit: {
		inherit: true,
		isNonstandard: null,
		},
		insanity: {
		inherit: true,
		isNonstandard: null,
		},
		insectdecay: {
		inherit: true,
		isNonstandard: null,
		},
		invasion: {
		inherit: true,
		isNonstandard: null,
		},
		invokedeity: {
		inherit: true,
		isNonstandard: null,
		},
		invokedread: {
		inherit: true,
		isNonstandard: null,
		},
		ironchomp: {
		inherit: true,
		isNonstandard: null,
		},
		irongrip: {
		inherit: true,
		isNonstandard: null,
		},
		irontusks: {
		inherit: true,
		isNonstandard: null,
		},
		itchybite: {
		inherit: true,
		isNonstandard: null,
		},
		jealousy: {
		inherit: true,
		isNonstandard: null,
		},
		jetfuelcharge: {
		inherit: true,
		isNonstandard: null,
		},
		jewrocks: {
		inherit: true,
		isNonstandard: null,
		},
		judge: {
		inherit: true,
		isNonstandard: null,
		},
		jumpscare: {
		inherit: true,
		isNonstandard: null,
		},
		justdesserts: {
		inherit: true,
		isNonstandard: null,
		},
		kaziklibey: {
		inherit: true,
		isNonstandard: null,
		},
		kindle: {
		inherit: true,
		isNonstandard: null,
		},
		kingshammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		kissofbreath: {
		inherit: true,
		isNonstandard: null,
		},
		kleenexray: {
			inherit: true,
			isNonstandard: null,
			},
		lasagnaattack: {
		inherit: true,
		isNonstandard: null,
		},
		lavablitz: {
		inherit: true,
		isNonstandard: null,
		},
		lavadrip: {
		inherit: true,
		isNonstandard: null,
		},
		lavaquake: {
		inherit: true,
		isNonstandard: null,
		},
		layerup: {
		inherit: true,
		isNonstandard: null,
		},
		lazyday: {
		inherit: true,
		isNonstandard: null,
		},
		lazymist: {
		inherit: true,
		isNonstandard: null,
		},
		lazybreak: {
			inherit: true,
			isNonstandard: null,
			},
		leylines: {
		inherit: true,
		isNonstandard: null,
		},
		lifesap: {
		inherit: true,
		isNonstandard: null,
		},
		lightningflash: {
		inherit: true,
		isNonstandard: null,
		},
		lightninggun: {
		inherit: true,
		isNonstandard: null,
		},
		lightpulse: {
		inherit: true,
		isNonstandard: null,
		},
		lightup: {
		inherit: true,
		isNonstandard: null,
		},
		lingerieattack: {
		inherit: true,
		isNonstandard: null,
		},
		liquidflare: {
		inherit: true,
		isNonstandard: null,
		},
		lovehypnosis: {
		inherit: true,
		isNonstandard: null,
		},
		loveserenade: {
		inherit: true,
		isNonstandard: null,
		},
		lubricate: {
		inherit: true,
		isNonstandard: null,
		},
		luckyroom: {
		inherit: true,
		isNonstandard: null,
		},
		lumber: {
		inherit: true,
		isNonstandard: null,
		},
		lunacy: {
		inherit: true,
		isNonstandard: null,
		},
		lunarwave: {
		inherit: true,
		isNonstandard: null,
		},
		lunatictime: {
		inherit: true,
		isNonstandard: null,
		},
		machgunblow: {
		inherit: true,
		isNonstandard: null,
		},
		madepiphany: {
		inherit: true,
		isNonstandard: null,
		},
		madness: {
		inherit: true,
		isNonstandard: null,
		},
		magicburst: {
		inherit: true,
		isNonstandard: null,
		},
		magicflames: {
			inherit: true,
			isNonstandard: null,
			},
		magicwand: {
		inherit: true,
		isNonstandard: null,
		},
		magmaburst: {
		inherit: true,
		isNonstandard: null,
		},
		
		magmaquake: {
			inherit: true,
			isNonstandard: null,
			},
			magmaslash: {
				flags: {contact: 1, protect: 1, slicing: 1},
			inherit: true,
			isNonstandard: null,
			},
		magmahammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		magnetdraw: {
		inherit: true,
		isNonstandard: null,
		},
		magnetforce: {
		inherit: true,
		isNonstandard: null,
		},
	
		malaria: {
		inherit: true,
		isNonstandard: null,
		},
		manaverse: {
		inherit: true,
		isNonstandard: null,
		},
		mandiblecrush: {
		inherit: true,
		isNonstandard: null,
		},
		mania: {
		inherit: true,
		isNonstandard: null,
		},
		marvelousexploits: {
		inherit: true,
		isNonstandard: null,
		},
		masterspark: {
		inherit: true,
		isNonstandard: null,
		},
		matingcall: {
		inherit: true,
		isNonstandard: null,
		},
		matzoball: {
		inherit: true,
		isNonstandard: null,
		},
		meatmash: {
		inherit: true,
		isNonstandard: null,
		},
		megamissile: {
		inherit: true,
		isNonstandard: null,
		},
		megatonpunch: {
		inherit: true,
		isNonstandard: null,
		},
		meltedplastic: {
		inherit: true,
		isNonstandard: null,
		},
		meltdown: {
		inherit: true,
		isNonstandard: null,
		},
		memeticfang: {
		inherit: true,
		isNonstandard: null,
		},
		memorywipe: {
		inherit: true,
		isNonstandard: null,
		},
		mercurywave: {
		inherit: true,
		isNonstandard: null,
		},
		meteorassault: {
		inherit: true,
		isNonstandard: null,
		},
		meteorhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		miasmaslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		micromissiles: {
		inherit: true,
		isNonstandard: null,
		},
		midnight: {
		inherit: true,
		isNonstandard: null,
		},
		midnightblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		mindboost: {
		inherit: true,
		isNonstandard: null,
		},
		mindbreak: {
		inherit: true,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		desc: "Confuses, Sleeps, Infatuates the target if they are the opposite gender.",
		shortDesc: "Confuses, Sleeps, Infatuates the target if they are the opposite gender.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(pokemon) {
			pokemon.addVolatile('confusion');
			pokemon.trySetStatus('slp');
			pokemon.addVolatile('attract');
		},
		onTryImmunity(target, source) {
			return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
		},
		secondary: null,
		target: "normal",
		type: "Heart",
		isNonstandard: null,
	},
		minddrain: {
		inherit: true,
		isNonstandard: null,
		},
		mirrorize: {
		inherit: true,
		isNonstandard: null,
		},
		mirrorworld: {
		inherit: true,
		isNonstandard: null,
		},
		mistletoe: {
		inherit: true,
		isNonstandard: null,
		},
		mittenpound: {
		inherit: true,
		isNonstandard: null,
		},
		mochihammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		mosaicray: {
		inherit: true,
		isNonstandard: null,
		},
		mossyfist: {
		inherit: true,
		isNonstandard: null,
		},
		mothmunch: {
		inherit: true,
		isNonstandard: null,
		},
		mudcover: {
		inherit: true,
		isNonstandard: null,
		},
		murmur: {
		inherit: true,
		isNonstandard: null,
		},
		mysteriousmagic: {
		inherit: true,
		isNonstandard: null,
		},
		mysticsword: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		nanobotbarrier: {
		inherit: true,
		isNonstandard: null,
		},
		necksnap: {
		inherit: true,
		isNonstandard: null,
		},
		necromancy: {
		inherit: true,
		isNonstandard: null,
		},
		nectartap: {
		inherit: true,
		isNonstandard: null,
		},
		needlesquall: {
		inherit: true,
		isNonstandard: null,
		},
		nervegas: {
		inherit: true,
		isNonstandard: null,
		},
		newvirus: {
		inherit: true,
		isNonstandard: null,
		},
		nightwind: {
		inherit: true,
		isNonstandard: null,
		},
		ninelives: {
		inherit: true,
		isNonstandard: null,
		},
		noisepollution: {
		inherit: true,
		isNonstandard: null,
		},
		noose: {
		inherit: true,
		isNonstandard: null,
		},
		nosedive: {
		inherit: true,
		isNonstandard: null,
		},
		nuclearexplosion: {
		inherit: true,
		isNonstandard: null,
		},
		nuclearpulse: {
		inherit: true,
		isNonstandard: null,
		},
		streamline: {
		inherit: true,
		isNonstandard: null,
		},
		oceanhearts: {
		inherit: true,
		isNonstandard: null,
		},
		ogredrive: {
		inherit: true,
		isNonstandard: null,
		},
		odynocharge: {
			inherit: true,
			isNonstandard: null,
			},
		ogreload: {
		inherit: true,
		isNonstandard: null,
		},
		oildrench: {
		inherit: true,
		isNonstandard: null,
		},
		oildrill: {
		inherit: true,
		isNonstandard: null,
		},
		oilskin: {
		inherit: true,
		isNonstandard: null,
		},
		oilup: {
		inherit: true,
		isNonstandard: null,
		},
		oilyterrain: {
		inherit: true,
		isNonstandard: null,
		},
		onionpeel: {
		inherit: true,
		isNonstandard: null,
		},
		opulencecatnap: {
		inherit: true,
		isNonstandard: null,
		},
		orbitalcrash: {
		inherit: true,
		isNonstandard: null,
		},
		ovenslam: {
		inherit: true,
		isNonstandard: null,
		},
		overdrivesong: {
		inherit: true,
		isNonstandard: null,
		},
		overload: {
		inherit: true,
		isNonstandard: null,
		},
		packedice: {
		inherit: true,
		isNonstandard: null,
		},
		paintroller: {
		inherit: true,
		isNonstandard: null,
		},
		paintsplats: {
		inherit: true,
		isNonstandard: null,
		},
		papermissiles: {
		inherit: true,
		isNonstandard: null,
		},
		pandemic: {
			inherit: true,
			isNonstandard: null,
			},
		parasitevirus: {
		inherit: true,
		isNonstandard: null,
		},
		pastalavista: {
		inherit: true,
		isNonstandard: null,
		},
		pastarush: {
		inherit: true,
		isNonstandard: null,
		},
		patchworkdeluge: {
			inherit: true,
			isNonstandard: null,
			},
		performance: {
		inherit: true,
		isNonstandard: null,
		},
		perfumesting: {
		inherit: true,
		isNonstandard: null,
		},
		pikapapow: {
		inherit: true,
		isNonstandard: null,
		},
		pillowdrain: {
		inherit: true,
		isNonstandard: null,
		},
		pillowfight: {
		inherit: true,
		isNonstandard: null,
		},
		pixiedust: {
		inherit: true,
		isNonstandard: null,
		},
		pixiehearts: {
		inherit: true,
		isNonstandard: null,
		},
		pixiewink: {
		inherit: true,
		isNonstandard: null,
		},
		pizzaspin: {
		inherit: true,
		isNonstandard: null,
		},
		plasmacannon: {
		inherit: true,
		isNonstandard: null,
		},
		plastichammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		pollenseason: {
		inherit: true,
		isNonstandard: null,
		},
		polylith: {
		inherit: true,
		isNonstandard: null,
		},
		poof: {
		inherit: true,
		isNonstandard: null,
		},
		poopdunk: {
		inherit: true,
		isNonstandard: null,
		},
		pooptoss: {
		inherit: true,
		isNonstandard: null,
		},
		poseidonwave: {
		inherit: true,
		isNonstandard: null,
		},
		possesion: {
		inherit: true,
		isNonstandard: null,
		},
		poundcake: {
		inherit: true,
		isNonstandard: null,
		},
		powderveil: {
		inherit: true,
		isNonstandard: null,
		},
		powerarena: {
		inherit: true,
		isNonstandard: null,
		},
		powerdownkick: {
		inherit: true,
		isNonstandard: null,
		},
		powerdrill: {
		inherit: true,
		isNonstandard: null,
		},
		powernap: {
		inherit: true,
		isNonstandard: null,
		},
		powersurge: {
		inherit: true,
		isNonstandard: null,
		},
		preach: {
		inherit: true,
		isNonstandard: null,
		},
		prerecord: {
			inherit: true,
			isNonstandard: null,
			},
			prediction: {
		inherit: true,
		isNonstandard: null,
		},
		psychictemple: {
			inherit: true,
			isNonstandard: null,
			},
		psypowder: {
		inherit: true,
		isNonstandard: null,
		},
		pullwool: {
		inherit: true,
		isNonstandard: null,
		},
		pulpstream: {
		inherit: true,
		isNonstandard: null,
		},
		sawdust: {
		inherit: true,
		isNonstandard: null,
		},
		pumpup: {
		inherit: true,
		isNonstandard: null,
		},
		purefear: {
		inherit: true,
		isNonstandard: null,
		},
		pyrophobia: {
		inherit: true,
		isNonstandard: null,
		},
		quarry: {
		inherit: true,
		isNonstandard: null,
		},
		rainbowwave: {
			inherit: true,
			isNonstandard: null,
			},
		ram: {
		inherit: true,
		isNonstandard: null,
		},
		randomgenerate: {
		inherit: true,
		isNonstandard: null,
		},
		ransomware: {
		inherit: true,
		isNonstandard: null,
		},
		ransomwareslam: {
		inherit: true,
		isNonstandard: null,
		},
		reactor: {
		inherit: true,
		isNonstandard: null,
		},
		replicate: {
		inherit: true,
		isNonstandard: null,
		},
		reptize: {
		inherit: true,
		isNonstandard: null,
		},
		restinpeace: {
		inherit: true,
		isNonstandard: null,
		},
		retaliatespell: {
			inherit: true,
			isNonstandard: null,
			},
		retribution: {
		inherit: true,
		isNonstandard: null,
		},
		rhongomyniad: {
		inherit: true,
		isNonstandard: null,
		},
		riptide: {
			inherit: true,
			accuracy: 85,
			basePower: 75,
			category: "Physical",
			desc: "User traps target for four to five turns.",
			shortDesc: "User traps target for four to five turns.",
			pp: 10,
			priority: 0,
			flags: {contact: 1, protect: 1, mirror: 1},
			volatileStatus: 'partiallytrapped',
			secondary: null,
			target: "normal",
			type: "Water",
			isNonstandard: null,
		},
		risingflame: {
		inherit: true,
		isNonstandard: null,
		},
		risinginfo: {
		inherit: true,
		isNonstandard: null,
		},
		risingsun: {
		inherit: true,
		isNonstandard: null,
		},
		rockgather: {
		inherit: true,
		isNonstandard: null,
		},
		rubberball: {
		inherit: true,
		isNonstandard: null,
		},
		rubberray: {
			inherit: true,
			isNonstandard: null,
			},
		rubberbeam: {
		inherit: true,
		isNonstandard: null,
		},
		rubberbeams: {
			inherit: true,
			isNonstandard: null,
			},
		rubberbullets: {
		inherit: true,
		isNonstandard: null,
		},
		rubbercoat: {
		inherit: true,
		isNonstandard: null,
		},
		rubbermallet: {
		inherit: true,
		isNonstandard: null,
		},
		rubberpower: {
		inherit: true,
		isNonstandard: null,
		},
		rubberrub: {
		inherit: true,
		isNonstandard: null,
		},
		rubbershield: {
		inherit: true,
		isNonstandard: null,
		},
		rubberwhip: {
		inherit: true,
		isNonstandard: null,
		},
		rubout: {
		inherit: true,
		isNonstandard: null,
		},
		rustspray: {
		inherit: true,
		isNonstandard: null,
		},
		rustyblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		sakedrink: {
		inherit: true,
		isNonstandard: null,
		},
		samuraipapercut: {
			inherit: true,
			isNonstandard: null,
			},
		sandslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		sandwichstack: {
		inherit: true,
		isNonstandard: null,
		},
		sanityleech: {
			inherit: true,
			isNonstandard: null,
			},
		sappingspell: {
		inherit: true,
		isNonstandard: null,
		},
		satelliteray: {
		inherit: true,
		isNonstandard: null,
		},
		saucesplash: {
		inherit: true,
		isNonstandard: null,
		},
		scarletmist: {
		inherit: true,
		isNonstandard: null,
		},
		schizoboost: {
		inherit: true,
		isNonstandard: null,
		},
		screwattack: {
		inherit: true,
		isNonstandard: null,
		},
		searingsauce: {
		inherit: true,
		isNonstandard: null,
		},
		invocation: {
			inherit: true,
			isNonstandard: null,
			},
		sanguinefang: {
		inherit: true,
		isNonstandard: null,
		},
		seasonalflowers: {
		inherit: true,
		isNonstandard: null,
		},
		seasoning: {
		inherit: true,
		isNonstandard: null,
		},
		selffatten: {
		inherit: true,
		isNonstandard: null,
		},
		selfishdrain: {
		inherit: true,
		isNonstandard: null,
		},
		serenade: {
		inherit: true,
		isNonstandard: null,
		},
		serpentwhip: {
		inherit: true,
		isNonstandard: null,
		},
		seventrumpets: {
		inherit: true,
		isNonstandard: null,
		},
		sexysleep: {
		inherit: true,
		isNonstandard: null,
		},
		sexysquirt: {
		inherit: true,
		isNonstandard: null,
		},
		sexytackle: {
		inherit: true,
		isNonstandard: null,
		},
		shadowbolt: {
		inherit: true,
		isNonstandard: null,
		},
		shadowbreak: {
		inherit: true,
		isNonstandard: null,
		},
		shadowchill: {
		inherit: true,
		isNonstandard: null,
		},
		shadowdown: {
		inherit: true,
		isNonstandard: null,
		},
		shadowfire: {
		inherit: true,
		isNonstandard: null,
		},
		shadownova: {
		inherit: true,
		isNonstandard: null,
		},
		shadowwave: {
		inherit: true,
		isNonstandard: null,
		},
		shamble: {
		inherit: true,
		isNonstandard: null,
		},
		sharkbite: {
		inherit: true,
		isNonstandard: null,
		},
		shatterbeam: {
		inherit: true,
		isNonstandard: null,
		},
		shatterbody: {
		inherit: true,
		isNonstandard: null,
		},
		shattercharge: {
		inherit: true,
		isNonstandard: null,
		},
		shattercrash: {
		inherit: true,
		isNonstandard: null,
		},
		shedleaves: {
		inherit: true,
		isNonstandard: null,
		},
		shellblast: {
		inherit: true,
		isNonstandard: null,
		},
		shieldpress: {
		inherit: true,
		isNonstandard: null,
		},
		shinepunch: {
		inherit: true,
		isNonstandard: null,
		},
		shockingblaze: {
		inherit: true,
		isNonstandard: null,
		},
		shortcircuit: {
		inherit: true,
		isNonstandard: null,
		},
		shout: {
		inherit: true,
		isNonstandard: null,
		},
		skinalive: {
		inherit: true,
		isNonstandard: null,
		},
		skitter: {
		inherit: true,
		isNonstandard: null,
		},
		boneify: {
		inherit: true,
		isNonstandard: null,
		},
		bonewand: {
		inherit: true,
		isNonstandard: null,
		},
		skullbash: {
		inherit: true,
		type: "Bone",
		isNonstandard: null,
		},
		sledgehammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		sledrush: {
		inherit: true,
		isNonstandard: null,
		},
		slitwrists: {
		inherit: true,
		isNonstandard: null,
		},
		slowingfist: {
		inherit: true,
		isNonstandard: null,
		},
		sludgehammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		slugsmooch: {
		inherit: true,
		isNonstandard: null,
		},
		slushcrush: {
		inherit: true,
		isNonstandard: null,
		},
		smashmouth: {
		inherit: true,
		isNonstandard: null,
		},
		smogshot: {
		inherit: true,
		isNonstandard: null,
		},
		sniffing: {
		inherit: true,
		isNonstandard: null,
		},
		snipershot: {
		inherit: true,
		isNonstandard: null,
		},
		snowblind: {
		inherit: true,
		isNonstandard: null,
		},
		snowfort: {
		inherit: true,
		isNonstandard: null,
		},
		snowstorm: {
		inherit: true,
		isNonstandard: null,
		},
		solidify: {
		inherit: true,
		isNonstandard: null,
		},
		solidwood: {
		inherit: true,
		isNonstandard: null,
		},
		sonar: {
		inherit: true,
		isNonstandard: null,
		},
		soniccharge: {
		inherit: true,
		isNonstandard: null,
		},
		sonicpulse: {
		inherit: true,
		isNonstandard: null,
		},
		soulburner: {
		inherit: true,
		isNonstandard: null,
		},
		soulhound: {
		inherit: true,
		isNonstandard: null,
		},
		spaceacid: {
		inherit: true,
		isNonstandard: null,
		},
		spagettiwrap: {
		inherit: true,
		isNonstandard: null,
		},
		speakerblast: {
		inherit: true,
		isNonstandard: null,
		},
		speedsap: {
		inherit: true,
		isNonstandard: null,
		},
		speedway: {
		inherit: true,
		isNonstandard: null,
		},
		spellbind: {
			inherit: true,
			isNonstandard: null,
			},
			spellslash: {
				inherit: true,
				flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
				isNonstandard: null,
				},
				bindingcircle: {
			inherit: true,
			isNonstandard: null,
			},
		spicyleaves: {
		inherit: true,
		isNonstandard: null,
		},
		spicypowder: {
		inherit: true,
		isNonstandard: null,
		},
		spikedarmor: {
		inherit: true,
		isNonstandard: null,
		},
		spiritbreak: {
		inherit: true,
		isNonstandard: null,
		},
		spiritcutter: {
		inherit: true,
		isNonstandard: null,
		},
		spiritdrain: {
		inherit: true,
		isNonstandard: null,
		},
		sporeexplosion: {
		inherit: true,
		isNonstandard: null,
		},
		squeak: {
		inherit: true,
		isNonstandard: null,
		},
		squirtcannon: {
		inherit: true,
		isNonstandard: null,
		},
		stampede: {
		inherit: true,
		isNonstandard: null,
		},
		starfield: {
			inherit: true,
			isNonstandard: null,
			},
		stargaze: {
		inherit: true,
		isNonstandard: null,
		},
		steamblast: {
		inherit: true,
		isNonstandard: null,
		},
		steambomb: {
		inherit: true,
		isNonstandard: null,
		},
		steamcharge: {
		inherit: true,
		isNonstandard: null,
		},
		steamerroller: {
		inherit: true,
		isNonstandard: null,
		},
		steamsale: {
		inherit: true,
		isNonstandard: null,
		},
		steamscald: {
		inherit: true,
		isNonstandard: null,
		},
		steamspout: {
		inherit: true,
		isNonstandard: null,
		},
		steelcasting: {
		inherit: true,
		isNonstandard: null,
		},
		stickyhands: {
		inherit: true,
		isNonstandard: null,
		},
		stingerlance: {
		inherit: true,
		isNonstandard: null,
		},
		stoke: {
		inherit: true,
		isNonstandard: null,
		},
		stonedrills: {
		inherit: true,
		isNonstandard: null,
		},
		stonehammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		stonersunshine: {
		inherit: true,
		isNonstandard: null,
		},
		stormwatch: {
		inherit: true,
		isNonstandard: null,
		},
		stringout: {
		inherit: true,
		isNonstandard: null,
		},
		stuffedtackle: {
		inherit: true,
		isNonstandard: null,
		},
		subzerowail: {
		inherit: true,
		isNonstandard: null,
		},
		sugarbeam: {
		inherit: true,
		isNonstandard: null,
		},
		sugarkiss: {
		inherit: true,
		isNonstandard: null,
		},
		sugarrush: {
		inherit: true,
		isNonstandard: null,
		},
		summonfey: {
		inherit: true,
		isNonstandard: null,
		},
		summonhorrors: {
		inherit: true,
		isNonstandard: null,
		},
		summoninsects: {
		inherit: true,
		isNonstandard: null,
		},
		summonsphinx: {
		inherit: true,
		isNonstandard: null,
		},
		summonspirits: {
		inherit: true,
		isNonstandard: null,
		},
		sunset: {
		inherit: true,
		isNonstandard: null,
		},
		sunrise: {
			inherit: true,
			isNonstandard: null,
			},
			superfly: {
		inherit: true,
		isNonstandard: null,
		},
		superhorn: {
		inherit: true,
		isNonstandard: null,
		},
		superspicysauce: {
		inherit: true,
		isNonstandard: null,
		},
		swansong: {
		inherit: true,
		isNonstandard: null,
		},
		sweetcannon: {
		inherit: true,
		isNonstandard: null,
		},
		swordofdawn: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		takeflight: {
		inherit: true,
		isNonstandard: null,
		},
		talksmack: {
		inherit: true,
		isNonstandard: null,
		},
		techerupt: {
		inherit: true,
		isNonstandard: null,
		},
		technoray: {
		inherit: true,
		isNonstandard: null,
		},
		technologyscoil: {
		inherit: true,
		isNonstandard: null,
		},
		caldera: {
			inherit: true,
			isNonstandard: null,
			},
		technorush: {
		inherit: true,
		isNonstandard: null,
		},
		tectonicslam: {
		inherit: true,
		isNonstandard: null,
		},
		tempest: {
		inherit: true,
		isNonstandard: null,
		},
		tenplagues: {
		inherit: true,
		isNonstandard: null,
		},
		tequilapunch: {
		inherit: true,
		isNonstandard: null,
		},
		terminate: {
		inherit: true,
		isNonstandard: null,
		},
		terraform: {
		inherit: true,
		isNonstandard: null,
		},
		terrahammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		terrify: {
		inherit: true,
		isNonstandard: null,
		},
		terrorscreech: {
		inherit: true,
		isNonstandard: null,
		},
		thalassosurge: {
		inherit: true,
		isNonstandard: null,
		},
		thalassowave: {
		inherit: true,
		isNonstandard: null,
		},
		thawing: {
		inherit: true,
		isNonstandard: null,
		},
		thecure: {
		inherit: true,
		isNonstandard: null,
		},
		thekingoffist: {
		inherit: true,
		isNonstandard: null,
		},
		thenword: {
		inherit: true,
		isNonstandard: null,
		},
		thiccslam: {
		inherit: true,
		isNonstandard: null,
		},
		sewing: {
			inherit: true,
			isNonstandard: null,
		},
		throatheal: {
			inherit: true,
			isNonstandard: null,
			},
		thunderdrill: {
		inherit: true,
		isNonstandard: null,
		},
		tiedup: {
		inherit: true,
		isNonstandard: null,
		},
		timeleech: {
		inherit: true,
		isNonstandard: null,
		},
		timeswap: {
		inherit: true,
		isNonstandard: null,
		},
		timewarp: {
		inherit: true,
		isNonstandard: null,
		},
		tipfedora: {
		inherit: true,
		isNonstandard: null,
		},
		tongueflick: {
		inherit: true,
		isNonstandard: null,
		},
		topsytackle: {
		inherit: true,
		isNonstandard: null,
		},
		torchpass: {
		inherit: true,
		isNonstandard: null,
		},
		tossandturn: {
		inherit: true,
		isNonstandard: null,
		},
		toughlove: {
		inherit: true,
		isNonstandard: null,
		},
		toxiccopy: {
		inherit: true,
		isNonstandard: null,
		},
		toxicinfo: {
		inherit: true,
		isNonstandard: null,
		},
		toxicwind: {
		inherit: true,
		isNonstandard: null,
		},
		traincrash: {
		inherit: true,
		isNonstandard: null,
		},
		toxify: {
		inherit: true,
		isNonstandard: null,
		},
		treasurechest: {
		inherit: true,
		isNonstandard: null,
		},
		treeoflife: {
		inherit: true,
		isNonstandard: null,
		},
		treesmash: {
		inherit: true,
		isNonstandard: null,
		},
		triplenote: {
		inherit: true,
		isNonstandard: null,
		},
		triplepeck: {
		inherit: true,
		isNonstandard: null,
		},
		tripleshot: {
		inherit: true,
		isNonstandard: null,
		},
		trojanrush: {
		inherit: true,
		isNonstandard: null,
		},
		trolling: {
		inherit: true,
		isNonstandard: null,
		},
		tropicalwave: {
			inherit: true,
			isNonstandard: null,
			},
		tuning: {
		inherit: true,
		isNonstandard: null,
		},
		tunnelaway: {
		inherit: true,
		isNonstandard: null,
		},
		typhoon: {
		inherit: true,
		isNonstandard: null,
		},
		ultrasolarray: {
		inherit: true,
		isNonstandard: null,
		},
		undeadagony: {
		inherit: true,
		isNonstandard: null,
		},
		undeadrespite: {
		inherit: true,
		isNonstandard: null,
		},
		undeadspit: {
			inherit: true,
			isNonstandard: null,
			},
		unfetteredsoul: {
		inherit: true,
		isNonstandard: null,
		},
		unhingedhowl: {
		inherit: true,
		isNonstandard: null,
		},
		unihorn: {
		inherit: true,
		isNonstandard: null,
		},
		unyieldstance: {
		inherit: true,
		isNonstandard: null,
		},
		upgradeoptics: {
		inherit: true,
		isNonstandard: null,
		},
		uproot: {
		inherit: true,
		isNonstandard: null,
		},
		uraniumheatbeam: {
		inherit: true,
		isNonstandard: null,
		},
		urbanburst: {
		inherit: true,
		isNonstandard: null,
		},
		vampirebite: {
		inherit: true,
		isNonstandard: null,
		},
		venipuncture: {
		inherit: true,
		isNonstandard: null,
		},
		vformation: {
		inherit: true,
		isNonstandard: null,
		},
		vibecheck: {
		inherit: true,
		isNonstandard: null,
		},
		viralflames: {
			inherit: true,
			isNonstandard: null,
			},
			viraloverdrive: {
			inherit: true,
			isNonstandard: null,
			},
			virgoheart: {
				inherit: true,
				isNonstandard: null,
				},
				
		virus: {
		inherit: true,
		isNonstandard: null,
		},
		viruscrush: {
		inherit: true,
		isNonstandard: null,
		},
		virusdrain: {
		inherit: true,
		isNonstandard: null,
		},
		viruspropogate: {
		inherit: true,
		isNonstandard: null,
		},
		volcaniceruption: {
		inherit: true,
		isNonstandard: null,
		},
		volcanicterrain: {
			inherit: true,
			isNonstandard: null,
			},
			volcanoburst: {
				inherit: true,
				isNonstandard: null,
				},
		volcanopunch: {
		inherit: true,
		isNonstandard: null,
		},
		voltexplosion: {
		inherit: true,
		isNonstandard: null,
		},
		voltfang: {
		inherit: true,
		isNonstandard: null,
		},
		voltkick: {
		inherit: true,
		isNonstandard: null,
		},
		vulcanhammer: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		isNonstandard: null,
		},
		warpaway: {
		inherit: true,
		isNonstandard: null,
		},
		warpdrive: {
		inherit: true,
		isNonstandard: null,
		},
		wastecloud: {
		inherit: true,
		isNonstandard: null,
		},
		weatherblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		webball: {
		inherit: true,
		isNonstandard: null,
		},
		whalesong: {
		inherit: true,
		isNonstandard: null,
		},
		wildfire: {
		inherit: true,
		isNonstandard: null,
		},
		wildgrowth: {
		inherit: true,
		isNonstandard: null,
		},
		wildmushroom: {
		inherit: true,
		isNonstandard: null,
		},
		windblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		isNonstandard: null,
		},
		woodcannon: {
		inherit: true,
		isNonstandard: null,
		},
		woodendefense: {
		inherit: true,
		isNonstandard: null,
		},
		woodrush: {
		inherit: true,
		isNonstandard: null,
		},
		wormattack: {
		inherit: true,
		isNonstandard: null,
		},
		wormhole: {
		inherit: true,
		isNonstandard: null,
		},
		yearblast: {
		inherit: true,
		isNonstandard: null,
		},
		zombieacid: {
		inherit: true,
		isNonstandard: null,
		},
		zombiebite: {
		inherit: true,
		isNonstandard: null,
		},
		zombiehammer: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, hammer: 1},
		},
		zombiehorde: {
		inherit: true,
		isNonstandard: null,
		},
		zombiespread: {
		inherit: true,
		isNonstandard: null,
		},
		zombievirus: {
			inherit: true,
			isNonstandard: null,
			},
			zombiespit: {
				inherit: true,
				isNonstandard: null,
				},
		zombind: {
		inherit: true,
		isNonstandard: null,
		},
		zawarudo: {
			inherit: true,
			isNonstandard: null,
			secondary: {
				chance: 10,
				status: 'frz',
			},
		},
		
		
		
};

export const Abilities: {[k: string]: ModdedAbilityData} = {
	illuminate: {
		inherit: true,
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		rating: 3,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('illuminate - enhancing accuracy');
			return this.chainModify([0x14CD, 0x1000]);
		},
	},
	galewings: {
		inherit: true,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
	},
	soundproof: {
		inherit: true,
		onTryHit(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Soundproof');
				return null;
			}
		},
	},
	protean: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
	},
	/* Clovermons */
	showerpower: {
		inherit: true,
		isNonstandard: null,
	},
	concert: {
		inherit: true,
		isNonstandard: null,
	},
	waitforit: {
		inherit: true,
		isNonstandard: null,
	},
	gradient: {
		inherit: true,
		isNonstandard: null,
	},
	anyability: {
		inherit: true,
		isNonstandard: null,
	},
	adminabuse: {
		inherit: true,
		isNonstandard: null,
	},
	anability: {
		inherit: true,
		isNonstandard: null,
	},
	bigguy: {
		inherit: true,
		isNonstandard: null,
	},
	blademaster: {
		inherit: true,
		isNonstandard: null,
	},
	boombox: {
		inherit: true,
		isNonstandard: null,
	},
	bonezone: {
		inherit: true,
		isNonstandard: null,
	},
	degenerate: {
		inherit: true,
		isNonstandard: null,
	},
	degradation: {
		inherit: true,
		isNonstandard: null,
	},
	flareheal: {
		inherit: true,
		isNonstandard: null,
	},
	ghostnote: {
		inherit: true,
		isNonstandard: null,
	},
	hydrophile: {
		inherit: true,
		isNonstandard: null,
	},
	inversion: {
		inherit: true,
		isNonstandard: null,
	},
	jewelry: {
		inherit: true,
		isNonstandard: null,
	},
	madman: {
		inherit: true,
		isNonstandard: null,
	},
	moreroom: {
		inherit: true,
		isNonstandard: null,
	},
	pollution: {
		inherit: true,
		isNonstandard: null,
	},
	pozzed: {
		inherit: true,
		isNonstandard: null,
	},
	puppeteer: {
		inherit: true,
		isNonstandard: null,
	},
	striker: {
		inherit: true,
		isNonstandard: null,
	},
	suddenly: {
		inherit: true,
		isNonstandard: null,
	},
	woke: {
		inherit: true,
		isNonstandard: null,
	},
	woodenguard: {
		inherit: true,
		isNonstandard: null,
	},
	/* Clover CAP Abilities */
	cakeveil: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rusepower: {
		inherit: true,
		isNonstandard: "CAP",
	},
	omniscience: {
		inherit: true,
		isNonstandard: "CAP",
	},
	oldschool: {
		inherit: true,
		isNonstandard: "CAP",
	},
	wholesome100: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spookyaura: {
		inherit: true,
		isNonstandard: "CAP",
	},
	tetanus: {
		inherit: true,
		isNonstandard: "CAP",
	},
	hewillbedragon: {
		inherit: true,
		isNonstandard: "CAP",
	},
	blueblood: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shavedice: {
		inherit: true,
		isNonstandard: "CAP",
	},
	temperamental: {
		inherit: true,
		isNonstandard: "CAP",
	},
	beamboost: {
		inherit: true,
		isNonstandard: "CAP",
	},
	overeager: {
		inherit: true,
		isNonstandard: "CAP",
	},
	swarming: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stoneflesh: {
		inherit: true,
		isNonstandard: "CAP",
	},
	sousaphone: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spincleaner: {
		inherit: true,
		isNonstandard: "CAP",
	},
	kinglymajesty: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shitbugtactics: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bigbrain: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dispenser: {
		inherit: true,
		isNonstandard: "CAP",
	},
	leech: {
		inherit: true,
		isNonstandard: "CAP",
	},
	supportive: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bonerzoner: {
		inherit: true,
		isNonstandard: "CAP",
	},
	eclipse: {
		inherit: true,
		isNonstandard: "CAP",
	},
	asoneblobbos: {
		inherit: true,
		isNonstandard: "CAP",
	},
	lootable: {
		inherit: true,
		isNonstandard: "CAP",
	},
	sharpshooter: {
		inherit: true,
		isNonstandard: "CAP",
	},
	blobbotype: {
		inherit: true,
		isNonstandard: "CAP",
	},
	icescales: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	parentalbond: {
		inherit: true,
		isNonstandard: "CAP",
	},
	niceface: {
		inherit: true,
		isNonstandard: "CAP",
	},
	evasionhax: {
		inherit: true,
		isNonstandard: "CAP",
	},
	nimblemetalbody: {
		inherit: true,
		isNonstandard: "CAP",
	},
	magicalrealm: {
		inherit: true,
		isNonstandard: "CAP",
	},
	uncompetitive: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fogofwar: {
		inherit: true,
		isNonstandard: "CAP",
	},
	jihad: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bathtime: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stopsign: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rebound: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	stormshelter: {
		inherit: true,
		isNonstandard: "CAP",
	},
	zenmonke: {
		inherit: true,
		isNonstandard: "CAP",
	},
	unseenfist: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	powerspot: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	libero: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	flipflops: {
		inherit: true,
		isNonstandard: "CAP",
	},
	asoneblobbostherian: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	genwunning: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stalwart: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	memepower: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	symbiosis: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	godrejection: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	allskill: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	artillery: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
};

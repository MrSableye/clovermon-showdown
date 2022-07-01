export const Items: {[k: string]: ModdedItemData} = {
	metalcoat: {
		inherit: true,
		onBasePower() {},
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	normalgem: {
		inherit: true,
		isNonstandard: null,
	},
	fairygem: {
		inherit: true,
		isNonstandard: null,
	},
	aguavberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	figyberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	iapapaberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	magoberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	wikiberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.33);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	/* Clover Exclusive Items */
	suedeshoes: {
		inherit: true,
		isNonstandard: null,
	},
	bigfaggot: {
		inherit: true,
		isNonstandard: null,
	},
	baconstrip: {
		inherit: true,
		isNonstandard: null,
	},
	katana: {
		inherit: true,
		isNonstandard: null,
	},
	cutebow: {
		inherit: true,
		isNonstandard: null,
	},
	bible: {
		inherit: true,
		isNonstandard: null,
	},
	taco: {
		inherit: true,
		isNonstandard: null,
	},
	thiccbone: {
		inherit: true,
		isNonstandard: null,
	},
	manifesto: {
		inherit: true,
		isNonstandard: null,
	},
	piratesjug: {
		inherit: true,
		isNonstandard: null,
	},
	blobbosinite: {
		inherit: true,
		isNonstandard: null,
	},
	/* Clover CAP Mega Stones */
	ooganite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	wifeminite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bitekinite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fonduppite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	ebolabite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	somboludite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	floriousite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	illumatrixite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	grimdakite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	hazmatite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	krokizonite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spookzillite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	lizakbarite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rectreemite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	unjoyite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	emplyinite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	upbeddite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	smelloxite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	pigusonite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	condoomite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	hohohomite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	faptite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	jerklite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dowsterite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	reptrillite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	kuklanite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	ricosuavite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	vandashite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	chasumite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	goryannusite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spookscarite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	honradite: {
		inherit: true,
		isNonstandard: "CAP",
	},
	ultrablobbosiumz: {
		inherit: true,
		isNonstandard: "CAP",
	},
	moluganion: {
		inherit: true,
		isNonstandard: "CAP",
	},
	skub: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rustedcrown: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	dracoplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	dreadplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	earthplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	fistplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	flameplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	icicleplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	insectplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	ironplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	meadowplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	mindplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	pixieplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	skyplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	splashplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	spookyplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	stoneplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	toxicplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	zapplate: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	luckypunch: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	fightingmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	flyingmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	poisonmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	groundmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	rockmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	bugmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	ghostmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	steelmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	firememory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	watermemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	grassmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	electricmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	psychicmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	icememory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	darkmemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	fairymemory: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	blobbosite: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	kalosite: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
	sableviumz: {
		availability: {clover: 1},
		inherit: true,
		isNonstandard: "CAP",
	},
};

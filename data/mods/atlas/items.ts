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
};

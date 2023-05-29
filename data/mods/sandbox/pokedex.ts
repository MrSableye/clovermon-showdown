export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	blobbosadventurer: {
		inherit: true,
		baseStats: {
			hp: 85,
			atk: 85,
			def: 85,
			spa: 85,
			spd: 85,
			spe: 85,
		},
	},
	blobbosadventurerlegendary: {
		inherit: true,
		baseStats: {
			hp: 110,
			atk: 130,
			def: 110,
			spa: 130,
			spd: 110,
			spe: 130,
		},
	},
	autumn: {
		inherit: true,
		baseStats: {
			hp: 91,
			atk: 79,
			def: 91,
			spa: 79,
			spd: 93,
			spe: 104,
		},
	},
	smellsumo: {
		inherit: true,
		baseStats: {
			hp: 110,
			atk: 110,
			def: 95,
			spa: 63,
			spd: 71,
			spe: 71,
		},
	},
	fusjahl: {
		inherit: true,
		baseStats: {
			hp: 99,
			atk: 111,
			def: 99,
			spa: 11,
			spd: 111,
			spe: 13,
		},
	},
	pengas: {
		inherit: true,
		evos: ["Oengas"],
	},
	oengas: {
		inherit: true,
		prevo: "Pengas",
		evoType: "other",
		evoCondition: "Win the race.",
	},
	zangoose: {
		inherit: true,
		evos: ["Zangursed"],
	},
	zangursed: {
		inherit: true,
		prevo: "Zangoose",
		evoType: "other",
		evoCondition: "Die from the Poison status after getting mortally wounded by a Seviper.",
	},
	motherfuck: {
	    inherit: true,
	    evos: ["Fatherfuck"],
	},
	fatherfuck: {
	    inherit: true,
	    prevo: "Motherfuck",
	    evoType: "other",
	    evoCondition: "Kill Samuel L. Jackson.",
	},
	hofucno: {
		inherit: true,
		evos: ["Hofucyea"],
	},
	honrade: {
		inherit: true,
		evos: ["Devante", "Vergilion"],
	},
	devante: {
		inherit: true,
		prevo: "Honrade",
		evoType: "useItem",
		evoItem: "Sun Stone",
	},
	vergilion: {
		inherit: true,
		prevo: "Honrade",
		evoType: "useItem",
		evoItem: "Moon Stone",
	},
	blobboscell: {
		inherit: true,
		abilities: {
			0: "Cell Shield",
			1: "Filter",
			H: "Admin Abuse",
			S: "Regenerator",
		},
		color: "Black",

	},
	blobbosforbidden: {
		inherit: true,
		baseStats: {
			hp: 89,
			atk: 131,
			def: 90,
			spa: 133,
			spd: 80,
			spe: 142,
		},
		abilities: {
			0: "Competitive",
			1: "Metagaming",
			H: "Good as Gold",
			S: "Cursed Body",
		},
	},
	blobbosplok: {
		inherit: true,
		baseStats: {
			hp: 80,
			atk: 120,
			def: 70,
			spa: 65,
			spd: 70,
			spe: 110,
		},
	},
	regigigas: {
		inherit: true,
		abilities: {
			0: "Slow Start",
			S: "Big Guy",
		},
	},
	regigigone: {
		inherit: true,
		abilities: {
			0: "Defeatist",
			S: "Flame Body",
		},
	},
	slaking: {
		inherit: true,
		abilities: {
			0: "Truant",
			S: "Stall",
		},
	},
	gigalith: {
		inherit: true,
		baseStats: {
			hp: 100,
			atk: 135,
			def: 130,
			spa: 60,
			spd: 95,
			spe: 25,
		},
		abilities: {
			0: "Sturdy",
			1: "Sand Stream",
			H: "Sand Force",
			S: "Solid Rock",
		},
	},
	alakazam: {
		inherit: true,
		abilities: {
			0: "Synchronize",
			1: "Inner Focus",
			H: "Magic Guard",
		},
	},
	junkgeist: {
		inherit: true,
		baseStats: {
			hp: 115,
			atk: 128,
			def: 80,
			spa: 90,
			spd: 80,
			spe: 38,
		},
		abilities: {
			0: "Stench",
			1: "Tetanus",
			H: "Pollution",
			S: "Technician",
		},
	},
	audinomega: {
		inherit: true,
		abilities: {
			0: "Regenerator",
		},
	},
	tauros: { // i'm not a genwunner i just think tauros got shit on too hard from gen 1 to gen 2 -rex
		inherit: true,
		baseStats: {
			hp: 75,
			atk: 100,
			def: 95,
			spa: 100,
			spd: 100,
			spe: 110,
		},
		abilities: {
			0: "Intimidate",
			1: "Anger Point",
			H: "Sheer Force",
			S: "Rampage",
		},
	},
	towhorse: {
		inherit: true,
		types: ["???", "Fighting"],
	}
};

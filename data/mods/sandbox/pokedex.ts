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
			hp: 88,
			atk: 111,
			def: 99,
			spa: 11,
			spd: 111,
			spe: 13,
		},
	},
	unown: {
		inherit: true,
		baseStats: {
			hp: 88,
			atk: 108,
			def: 88,
			spa: 108,
			spd: 88,
			spe: 48,
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
	pinsir: {
		inherit: true,
		evos: ["Purakkusu"],
	},
	purakkusu: {
		inherit: true,
		prevo: "Pinsir",
		evoType: "other",
		evoCondition: "Prove your might by OHKOing a Buzzwole.",
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
	carbink: {
		inherit: true,
		evos: ["Diancie"],
	},
	diancie: {
	    inherit: true,
	    prevo: "Carbink",
	    evoType: "other",
	    evoCondition: "Level up while holding a Gem.",
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
			H: "Receiver",
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
			H: "Stall",
			S: "Big Guy",
		},
	},
	regigigone: {
		inherit: true,
		abilities: {
			0: "Defeatist",
			H: "Stall",
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
	aegislash: {
		inherit: true,
		baseStats: {
			hp: 60,
			atk: 50,
			def: 150,
			spa: 50,
			spd: 150,
			spe: 60,
		},
	},
	aegislashblade: {
		inherit: true,
		baseStats: {
			hp: 60,
			atk: 150,
			def: 50,
			spa: 150,
			spd: 50,
			spe: 60,
		},
	},
	hemogoblin: {
		inherit: true,
		baseStats: {
			hp: 90,
			atk: 99,
			def: 89,
			spa: 99,
			spd: 97,
			spe: 55,
		},
	},
	fractyvern: {
		inherit: true,
		baseStats: {
			hp: 83,
			atk: 131,
			def: 61,
			spa: 131,
			spd: 79,
			spe: 133,
		},
	},
	abomasnow: {
		inherit: true,
		abilities: {0: "Snow Warning", H: "Shaved Ice"},
		baseStats: {
			hp: 101,
			atk: 114,
			def: 80,
			spa: 114,
			spd: 80,
			spe: 45,
		},
	},
	abomasnowmega: {
		inherit: true,
		abilities: {0: "Shaved Ice"},
		baseStats: {
			hp: 101,
			atk: 139,
			def: 110,
			spa: 139,
			spd: 100,
			spe: 45,
		},
	},
	yanorm: {
		inherit: true,
		abilities: {0: "Swarm", H: "Shed Skin", S: "Jihad"},
		baseStats: {
			hp: 117,
			atk: 47,
			def: 57,
			spa: 47,
			spd: 57,
			spe: 157,
		},
	},
	yancoon: {
		inherit: true,
		abilities: {0: "Swarm", H: "Simple", S: "Flash Fire"},
		baseStats: {
			hp: 67,
			atk: 57,
			def: 147,
			spa: 57,
			spd: 137,
			spe: 37,
		},
	},
	regice: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Ice Body", S: "Heatproof"},
		baseStats: {
			hp: 100,
			atk: 50,
			def: 100,
			spa: 100,
			spd: 200,
			spe: 50,
		},
	},
	regirock: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Sturdy", S: "Solid Rock"},
		baseStats: {
			hp: 100,
			atk: 100,
			def: 200,
			spa: 50,
			spd: 100,
			spe: 50,
		},
	},
	registeel: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Light Metal", S: "Battle Armor"},
		baseStats: {
			hp: 100,
			atk: 75,
			def: 150,
			spa: 75,
			spd: 150,
			spe: 50,
		},
	},
	regieleki: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Transistor", S: "Volt Absorb"},
		baseStats: {
			hp: 100,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 200,
		},
	},
	regidrago: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Dragon's Maw", S: "Multiscale"},
		baseStats: {
			hp: 200,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 100,
		},
	},
	towhorse: {
		inherit: true,
		types: ["???", "Fighting"],
	},
	sherifuego: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Levitate", H: "Solar Power", S: "Flash Fire"},

	},
	rhydon: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Rock Head", H: "Reckless", S: "Old School"},

	},
	gengar: {
		inherit: true,
		abilities: {0: "Cursed Body", 1: "Levitate", H: "Shadow Aura"},

	},
	indignifly: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Synchronoise", H: "Filter", S: "Tinted Lens"},

	},
	cirnumiru: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Refrigerate", S: "Snow Warning"},
		baseStats: {
			hp: 61,
			atk: 67,
			def: 61,
			spa: 127,
			spd: 127,
			spe: 127,
		},
	},
	loituma: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Aerilate", S: "Dazzling"},
        
	},
	spenjbab: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Dry Skin", S: "Harvest"},
        
	},
	spycrab: {
		inherit: true,
		abilities: {0: "Illusion", 1: "Imposter", S: "Inner Focus", H: "Infiltrator"},
        
	},
	impostree: {
		inherit: true,
		abilities: {0: "Skill Link", 1: "Rattled", H: "Infiltrator", S: "Imposter"},
        
	},
	spinda: {
		inherit: true,
		abilities: {0: "Own Tempo", 1: "Tangled Feet", H: "Contrary", S: "Spin Cleaner"},
        
	},
	ignifatu: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Sheer Force", S: "Toxic Boost"},
        baseStats: {
			hp: 101,
			atk: 149,
			def: 89,
			spa: 61,
			spd: 61,
			spe: 109,
		},
	},
	empidae: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Queenly Majesty", S: "Striker"},
        baseStats: {
			hp: 89,
			atk: 127,
			def: 83,
			spa: 53,
			spd: 79,
			spe: 139,
		},
	},
	gigapuddi: {
		inherit: true,
		baseStats: {
			hp: 107,
			atk: 67,
			def: 101,
			spa: 139,
			spd: 109,
			spe: 47,
		},
	},
	seraphill: {
		inherit: true,
		baseStats: {
			hp: 103,
			atk: 97,
			def: 107,
			spa: 97,
			spd: 107,
			spe: 59,
		},
	},
	ranruu: {
		inherit: true,
		baseStats: {
			hp: 67,
			atk: 73,
			def: 71,
			spa: 157,
			spd: 89,
			spe: 113,
		},
	},
	doubtlaw: {
		inherit: true,
		abilities: {0: "Dark Aura", 1: "Quick Draw", H: "Flare Boost", S: "Neuroforce"},
		baseStats: {
			hp: 64,
			atk: 80,
			def: 86,
			spa: 127,
			spd: 68,
			spe: 98,
		},
	},
	sableven: {
		num: -42151,
		name: "Sableven",
		types: ["Steel", "Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Stall", 1: "Admin Abuse", H: "Flare Heal", S: "Prankster"},
		heightm: 8,
		weightkg: 911,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		gen: 8,
	},
	golisopod: {
		inherit: true,
		abilities: {0: "Emergency Exit", H: "Tough Claws", S: "Intimidate"},
	},
	dusknoir: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 135, spa: 55, spd: 135, spe: 25},
		abilities: {0: "Pressure", 1: "Iron Fist", H: "Frisk", S: "Leech"},
	},
};

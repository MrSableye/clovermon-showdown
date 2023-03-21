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
			hp: 96,
			atk: 93,
			def: 91,
			spa: 93,
			spd: 93,
			spe: 101,
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
			spe: 142
		},
		abilities: {
			0: "Competitive", 
			1: "Uncompetitive",
		},
	},
};

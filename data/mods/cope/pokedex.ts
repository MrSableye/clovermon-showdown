export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	flubbster: {
		inherit: true,
		metadata: {
			dexEntry: "The noises FLUBBSTER creates are filled with anguish, for it did not ask to be born into this world",
		},
		/* Pokemon Changes */
	},
	pengas: {
		inherit: true,
		evos: ["Oengas"],
	},
	oengas: {
		inherit: true,
		prevo: "Pengas",
		evoLevel: 100,
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
	pizzisdee: {
		inherit: true,
		baseStats: {
			hp: 75,
			atk: 85,
			def: 80,
			spa: 65,
			spd: 80,
			spe: 135,
		},
	},
	noxilium: {
		inherit: true,
		baseStats: {
			hp: 80,
			atk: 90,
			def: 69,
			spa: 121,
			spd: 64,
			spe: 117,
		},
	},
	emojinn: {
		inherit: true,
		baseStats: {
			hp: 80,
			atk: 48,
			def: 85,
			spa: 121,
			spd: 111,
			spe: 80,
		},
	},
	peashroom: {
		inherit: true,
		baseStats: {
			hp: 90,
			atk: 80,
			def: 60,
			spa: 80,
			spd: 85,
			spe: 35,
		},
	},
	krackodemon: {
		inherit: true,
		baseStats: {
			hp: 90,
			atk: 51,
			def: 86,
			spa: 142,
			spd: 109,
			spe: 69,
		},
	},
};

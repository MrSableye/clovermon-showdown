export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	ribbizap: {
		inherit: true,
		evos: ["Bulbfrog"],
	},
	bulbfrog: {
		inherit: true,
		prevo: "Ribbizap",
		evoType: "useItem",
		evoItem: "Thunder Stone",
	},
	anaconduke: {
		inherit: true,
		evos: ["Ballboa"],
	},
	ballboa: {
		inherit: true,
		prevo: "Anaconduke",
		evoLevel: 50,
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
	kuuroba: {
		num: 69233,
		name: "Kuuroba",
		types: [
			"Grass",
			"Fighting",
		],
		genderRatio: {
			M: 0.25,
			F: 0.75,
		},
		baseStats: {
			hp: 90,
			atk: 105,
			def: 90,
			spa: 80,
			spd: 90,
			spe: 75,
		},
		abilities: {0: "Super Luck", H: "Super Luck", S: "Super Luck"},
		heightm: 1.9,
		weightkg: 102,
		color: "Green",
		prevo: "Clovour",
		evoLevel: 60,
		eggGroups: [
			"Fairy",
			"Grass",
		],
		gen: 8,
	},
	pantherk: {
		inherit: true,
		baseStats: {
			hp: 85,
			atk: 115,
			def: 75,
			spa: 105,
			spd: 75,
			spe: 75,
		},
	},
};


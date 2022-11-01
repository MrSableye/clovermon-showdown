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
		evos: ["Balboa"],
	},
	ballboa: {
		inherit: true,
		prevo: "Anaconduke",
		evoLevel: 50,
	},
};


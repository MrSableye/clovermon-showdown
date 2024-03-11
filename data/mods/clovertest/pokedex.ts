export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	gampster: {
		inherit: true,
		baseStats: {
			hp: 89,
			atk: 90,
			def: 51,
			spa: 84,
			spd: 54,
			spe: 92,
		},
	},
	marionettl: {
		inherit: true,
		baseStats: {
			hp: 80,
			atk: 115,
			def: 70,
			spa: 100,
			spd: 70,
			spe: 110,
		},
	},
	chromox: {
		inherit: true,
		baseStats: {
			hp: 85,
			atk: 80,
			def: 60,
			spa: 80,
			spd: 60,
			spe: 160,
		},
	},
	anonymouse: {
		inherit: true,
		baseStats: {
			hp: 66,
			atk: 86,
			def: 66,
			spa: 86,
			spd: 66,
			spe: 116,
		},
	},
	acufront: {
		inherit: true,
		otherFormes: [
			"Acufront-F",
			"Acufront-W",
			"Acufront-I",
			"Acufront-S",
		],
		formeOrder: [
			"Acufront",
			"Acufront-F",
			"Acufront-W",
			"Acufront-I",
			"Acufront-S",
		],
	},
	phantash: {
		inherit: true,
		abilities: {
			0: "White Smoke",
			1: "Flare Heal",
			H: "Air Lock",
			S: "Cursed Body",
		},
	},
	mooshock: {
		inherit: true,
		abilities: {
			0: "Magnet Pull",
			1: "Volt Absorb",
			H: "Sap Sipper",
			S: "Reckless",
		},
	},
};

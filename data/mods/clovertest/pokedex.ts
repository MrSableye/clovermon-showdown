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
	gangnome: {
		inherit: true,
		baseStats: {
			hp: 120,
			atk: 50,
			def: 115,
			spa: 55,
			spd: 125,
			spe: 50,
		},
	},
	pyongnome: {
		inherit: true,
		baseStats: {
			hp: 70,
			atk: 135,
			def: 60,
			spa: 115,
			spd: 55,
			spe: 80,
		},
	},
	walruskie: {
		inherit: true,
		types: [
			"Water",
			"Steel",
		],
		baseStats: {
			hp: 110,
			atk: 105,
			def: 83,
			spa: 60,
			spd: 70,
			spe: 80,
		},
	},
	venowatt: {
		inherit: true,
		abilities: {
			0: "Illuminate",
			1: "Liquid Ooze",
			H: "Swarm",
			S: "Levitate",
		},
		baseStats: {
			hp: 85,
			atk: 70,
			def: 115,
			spa: 110,
			spd: 85,
			spe: 75,
		},

	},
};

export const Abilities: {[k: string]: ModdedAbilityData} = {
	illuminate: {
		inherit: true,
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		rating: 3,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('illuminate - enhancing accuracy');
			return this.chainModify([0x14CD, 0x1000]);
		},
	},
	galewings: {
		inherit: true,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
	},
	/* Clover CAP Abilities */
	cakeveil: {
		inherit: true,
		isNonstandard: "CAP",
	},
	rusepower: {
		inherit: true,
		isNonstandard: "CAP",
	},
	omniscience: {
		inherit: true,
		isNonstandard: "CAP",
	},
	oldschool: {
		inherit: true,
		isNonstandard: "CAP",
	},
	wholesome100: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spookyaura: {
		inherit: true,
		isNonstandard: "CAP",
	},
	flaminhot: {
		inherit: true,
		isNonstandard: "CAP",
	},
	tetanus: {
		inherit: true,
		isNonstandard: "CAP",
	},
	hewillbedragon: {
		inherit: true,
		isNonstandard: "CAP",
	},
	blueblood: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shavedice: {
		inherit: true,
		isNonstandard: "CAP",
	},
	temperamental: {
		inherit: true,
		isNonstandard: "CAP",
	},
	solarpanels: {
		inherit: true,
		isNonstandard: "CAP",
	},
	beamboost: {
		inherit: true,
		isNonstandard: "CAP",
	},
	overeager: {
		inherit: true,
		isNonstandard: "CAP",
	},
	swarming: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stoneflesh: {
		inherit: true,
		isNonstandard: "CAP",
	},
	sousaphone: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spincleaner: {
		inherit: true,
		isNonstandard: "CAP",
	},
	kinglymajesty: {
		inherit: true,
		isNonstandard: "CAP",
	},
	shitbugtactics: {
		inherit: true,
		isNonstandard: "CAP",
	},
	amplify: {
		inherit: true,
		isNonstandard: "CAP",
	},
	bigbrain: {
		inherit: true,
		isNonstandard: "CAP",
	},
	hydrothermal: {
		inherit: true,
		isNonstandard: "CAP",
	},
};

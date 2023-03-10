export const Items: {[k: string]: ModdedItemData} = {
	sableviumz: {
		inherit: true,
		isNonstandard: null,
	},
	kalosite: {
		inherit: true,
		isNonstandard: null,
	},
	blobbosite: {
		inherit: true,
		isNonstandard: null,
	},
	rustedcrown: {
		inherit: true,
		isNonstandard: null,
	},
	ultrablobbosiumz: {
		inherit: true,
		isNonstandard: null,
	},
	sexite: {
		inherit: true,
		isNonstandard: null,
	},
	reversite: {
		inherit: true,
		isNonstandard: null,
	},
	negite: {
		inherit: true,
		isNonstandard: null,
	},
	dustite: {
		inherit: true,
		isNonstandard: null,
	},
	wackite: {
		inherit: true,
		isNonstandard: null,
	},
	zeroite: {
		inherit: true,
		isNonstandard: null,
	},
	blobbosmikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	thiccbone: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (['Masdawg', 'Pasdawg', 'Naughtycoot'].includes(pokemon.baseSpecies.baseSpecies) ||
			pokemon.species.id === 'blobbosskeleton') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Naughtycoot", "Blobbos-Skeleton"],
	},
	plasticgem: {
		inherit: true,
		isNonstandard: null,
	},
	glassgem: {
		inherit: true,
		isNonstandard: null,
	},
	baitite: {
		inherit: true,
		isNonstandard: null,
	},
	masamune: {
		inherit: true,
		isNonstandard: null,
	},
	kerosenehose: {
		inherit: true,
		isNonstandard: null,
	},
	piratesbooty: {
		inherit: true,
		isNonstandard: null,
	},
	boosterenergy: {
		inherit: true,
		isNonstandard: null,
	},
	terrainboard: {
		inherit: true,
		isNonstandard: null,
	},
	phylactery: {
		inherit: true,
		isNonstandard: null,
	},
};

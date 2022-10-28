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
	blobbosmikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	thiccbone: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (['Masdawg', 'Pasdawg', 'Naughtycoot', 'Blobbos-Skeleton'].includes(pokemon.baseSpecies.baseSpecies)) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Naughtycoot", "Blobbos-Skeleton"],
	},
};

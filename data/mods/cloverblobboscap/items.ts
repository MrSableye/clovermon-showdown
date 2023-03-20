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
	curlykrill: {
		inherit: true,
		isNonstandard: null,
	},
	droopykrill: {
		inherit: true,
		isNonstandard: null,
	},
	stretchykrill: {
		inherit: true,
		isNonstandard: null,
	},
	berserkgene: {
		inherit: true,
		isNonstandard: null,
	},
	moluganion: {
		inherit: true,
		onAfterSetStatusPriority: -1,
		onAfterSetStatus(status, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Blobbos-Cap') {
				this.add('-message', 'The power from the Moluganion cured the status!');
				pokemon.cureStatus();
				pokemon.removeVolatile('confusion');
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				if (pokemon.baseSpecies.baseSpecies === 'Blobbos-Cap') {
					this.add('-message', 'The power from the Moluganion cured the status!');
					pokemon.cureStatus();
					pokemon.removeVolatile('confusion');
				} else {
					this.add('-message', 'The holder is unable to comprehend the Moluganion!');
					pokemon.addVolatile('confusion');
				}
			}
		},
		itemUser: ["Blobbos-Cap"],
		isNonstandard: null,
	},
	mirrorherb: {
		inherit: true,
		isNonstandard: null,
	},
	earmuffs: {
		inherit: true,
		isNonstandard: null,
	},
	paraorb: {
		inherit: true,
		isNonstandard: null,
	},
	usbdrive: {
		inherit: true,
		isNonstandard: null,
	},
	royalcrown: {
		inherit: true,
		isNonstandard: null,
	},
	starrod: {
		inherit: true,
		isNonstandard: null,
	},
	glock: {
		inherit: true,
		isNonstandard: null,
	},
	loadeddisk: {
		inherit: true,
		isNonstandard: null,
	},
	propellerhat: {
		inherit: true,
		isNonstandard: null,
	},
	assaultjacket: {
		inherit: true,
		isNonstandard: null,
	},
	choiceshield: {
		inherit: true,
		isNonstandard: null,
	},
	choicevest: {
		inherit: true,
		isNonstandard: null,
	},
	licensetosellhotdogs: {
		inherit: true,
		isNonstandard: null,
	},
};

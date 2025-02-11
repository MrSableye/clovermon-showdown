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
	tapuniumz: {
		inherit: true,
		isNonstandard: null,
	},
	sexitey: {
		inherit: true,
		isNonstandard: null,
	},
	sexitex: {
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
	mariopartite: {
		inherit: true,
		isNonstandard: null,
	},
	candycornite: {
		inherit: true,
		isNonstandard: null,
	},
	blobbosmikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	blackmagiumz: {
		inherit: true,
		isNonstandard: null,
	},
	thiccbone: {
		name: "Thicc Bone",
		spritenum: 379,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Masdawg' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Gambino' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Toadagi' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Whiteout' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Swoldier' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Mr. Toad' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Staypuft' || pokemon.baseSpecies.baseSpecies === 'Pasdawg' || pokemon.baseSpecies.baseSpecies === 'Naughtycoot' || pokemon.species.name === 'Blobbos-Skeleton') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Naughtycoot", "Blobbos-Skeleton", "Pasdawg-Gambino", "Pasdawg-Toadagi", "Pasdawg-Whiteout", "Pasdawg-Swoldier", "Pasdawg-Mr. Toad", "Pasdawg-Staypuft"],
		isNonstandard: "Future",
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
	creampuffite: {
		inherit: true,
		isNonstandard: null,
	},
	fossilite: {
		inherit: true,
		isNonstandard: null,
	},
	fishite: {
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
	moluganion: {
		inherit: true,
		onAfterSetStatusPriority: -1,
		onAfterSetStatus(status, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Noxilium' || pokemon.species.name === 'Blobbos-Cap') {
				this.add('-message', 'The power from the Moluganion cured the status!');
				pokemon.cureStatus();
				pokemon.removeVolatile('confusion');
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				if (pokemon.baseSpecies.baseSpecies === 'Noxilium' || pokemon.species.name === 'Blobbos-Cap') {
					this.add('-message', 'The power from the Moluganion cured the status!');
					pokemon.cureStatus();
					pokemon.removeVolatile('confusion');
				} else {
					this.add('-message', 'The holder is unable to comprehend the Moluganion!');
					pokemon.addVolatile('confusion');
				}
			}
		},
		itemUser: ["Blobbos-Cap", "Noxilium"],
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
	ancientitem: {
		inherit: true,
		isNonstandard: null,
	},
	pizzaite: {
		inherit: true,
		isNonstandard: null,
	},
	beeite: {
		inherit: true,
		isNonstandard: null,
	},
	mesosack: {
		inherit: true,
		isNonstandard: null,
	},
	marxite: {
		inherit: true,
		isNonstandard: null,
	},
	autobuffskill: {
		inherit: true,
		isNonstandard: null,
	},
	tumultuoustibia: {
		inherit: true,
		isNonstandard: null,
	},
	mascotsorb: {
		inherit: true,
		isNonstandard: null,
	},
	kapala: {
		inherit: true,
		isNonstandard: null,
	},
	eyedropper: {
		inherit: true,
		isNonstandard: null,
	},
	powerrush: {
		inherit: true,
		isNonstandard: null,
	},
	splashsword: {
		inherit: true,
		isNonstandard: null,
	},
	sparksword: {
		inherit: true,
		isNonstandard: null,
	},
	frostsword: {
		inherit: true,
		isNonstandard: null,
	},
	flamesword: {
		inherit: true,
		isNonstandard: null,
	},
	souldew: {
		inherit: true,
		isNonstandard: null,
	},
	punchingglove: {
		inherit: true,
		isNonstandard: null,
	},
	parasleepite: {
		inherit: true,
		isNonstandard: null,
	},
	dreamite: {
		inherit: true,
		isNonstandard: null,
	},
	sacredbong: {
		inherit: true,
		isNonstandard: null,
	},
	partnerspendant: {
		inherit: true,
		isNonstandard: null,
	},
};

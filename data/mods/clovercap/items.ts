export const Items: {[k: string]: ModdedItemData} = {
	/* Enabled items */
	blunderpolicy: {
		inherit: true,
		isNonstandard: null,
	},
	keeberry: {
		inherit: true,
		isNonstandard: null,
	},
	marangaberry: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorherb: {
		inherit: true,
		isNonstandard: null,
	},
	ejectpack: {
		inherit: true,
		isNonstandard: null,
	},
	redcard: {
		inherit: true,
		isNonstandard: null,
	},
	throatspray: {
		inherit: true,
		isNonstandard: null,
	},
	toothpaste: {
		inherit: true,
		isNonstandard: null,
	},
	whetstone: {
		inherit: true,
		isNonstandard: null,
	},
	utilityumbrella: {
		inherit: true,
		isNonstandard: null,
	},
	protectivepads: {
		inherit: true,
		isNonstandard: null,
	},
	snowball: {
		inherit: true,
		isNonstandard: null,
	},
	cellbattery: {
		inherit: true,
		isNonstandard: null,
	},
	ringtarget: {
		inherit: true,
		isNonstandard: null,
	},
	roomservice: {
		inherit: true,
		isNonstandard: null,
	},
	grassyseed: {
		inherit: true,
		isNonstandard: null,
	},
	electricseed: {
		inherit: true,
		isNonstandard: null,
	},
	psychicseed: {
		inherit: true,
		isNonstandard: null,
	},
	mistyseed: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		isNonstandard: null,
	},
	adrenalineorb: {
		inherit: true,
		isNonstandard: null,
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: null,
	},
	absorbbulb: {
		inherit: true,
		isNonstandard: null,
	},
	fullincense: {
		inherit: true,
		isNonstandard: null,
	},
	oddincense: {
		inherit: true,
		isNonstandard: null,
	},
	rockincense: {
		inherit: true,
		isNonstandard: null,
	},
	roseincense: {
		inherit: true,
		isNonstandard: null,
	},
	waveincense: {
		inherit: true,
		isNonstandard: null,
	},
	rowapberry: {
		inherit: true,
		isNonstandard: null,
	},
	loadeddice: {
		inherit: true,
		isNonstandard: null,
	},
	jabocaberry: {
		inherit: true,
		isNonstandard: null,
	},

	/* Modified items */
	luckypunch: {
		inherit: true,
		onModifyCritRatio(critRatio, user) {
			if (user.baseSpecies.name === 'Chansey' || user.baseSpecies.baseSpecies === 'Fucker') {
				return critRatio + 2;
			}
		},
		itemUser: ["Chansey", "Fucker"],
		isNonstandard: null,
	},
	thiccbone: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Bandicute' || pokemon.baseSpecies.baseSpecies === 'Naughtycoot' || pokemon.baseSpecies.baseSpecies === 'Masdawg' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Gambino' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Toadagi' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Whiteout' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Swoldier' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Mr. Toad' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Staypuft' || pokemon.baseSpecies.baseSpecies === 'Pasdawg') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Bandicute", "Naughtycoot", "Blobbos-Skeleton", "Pasdawg-Gambino", "Pasdawg-Toadagi", "Pasdawg-Whiteout", "Pasdawg-Swoldier", "Pasdawg-Mr. Toad", "Pasdawg-Staypuft"],
		isNonstandard: null,
	},
	/* Clover CAP Exclusive Items */
	moluganion: {
		inherit: true,
		isNonstandard: null,
	},
	skub: {
		inherit: true,
		isNonstandard: null,
	},
	nullgem: {
		inherit: true,
		isNonstandard: null,
	},
	cursedfang: {
		inherit: true,
		isNonstandard: null,
	},
	crimsonlens: {
		inherit: true,
		isNonstandard: null,
	},
	efficientpick: {
		inherit: true,
		isNonstandard: null,
	},
	lampoffortunes: {
		inherit: true,
		isNonstandard: null,
	},
	joyfulmask: {
		inherit: true,
		isNonstandard: null,
	},
	sobbingmask: {
		inherit: true,
		isNonstandard: null,
	},
	ragingmask: {
		inherit: true,
		isNonstandard: null,
	},
	sterilizingampoule: {
		inherit: true,
		isNonstandard: null,
	},
	burntsiennapaint: {
		inherit: true,
		isNonstandard: null,
	},
	ceruleanbluepaint: {
		inherit: true,
		isNonstandard: null,
	},
	manganesevioletpaint: {
		inherit: true,
		isNonstandard: null,
	},
	umberpaint: {
		inherit: true,
		isNonstandard: null,
	},
	yellowochrepaint: {
		inherit: true,
		isNonstandard: null,
	},
	malachitepaint: {
		inherit: true,
		isNonstandard: null,
	},
	cobaltwhitepaint: {
		inherit: true,
		isNonstandard: null,
	},
	leadwhitepaint: {
		inherit: true,
		isNonstandard: null,
	},
	pyrroleorangepaint: {
		inherit: true,
		isNonstandard: null,
	},
	azuritepaint: {
		inherit: true,
		isNonstandard: null,
	},
	phthalogreenpaint: {
		inherit: true,
		isNonstandard: null,
	},
	hansayellowpaint: {
		inherit: true,
		isNonstandard: null,
	},
	quinacridonepaint: {
		inherit: true,
		isNonstandard: null,
	},
	titaniumwhitepaint: {
		inherit: true,
		isNonstandard: null,
	},
	ultramarinepaint: {
		inherit: true,
		isNonstandard: null,
	},
	carbonblackpaint: {
		inherit: true,
		isNonstandard: null,
	},
	potterspinkpaint: {
		inherit: true,
		isNonstandard: null,
	},
	chargedmicrophone: {
		inherit: true,
		isNonstandard: null,
	},
	powermask: {
		inherit: true,
		isNonstandard: null,
	},
};

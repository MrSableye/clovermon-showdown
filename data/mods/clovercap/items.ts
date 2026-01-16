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
	dracoplate: {
		inherit: true,
		isNonstandard: null,
	},
	dreadplate: {
		inherit: true,
		isNonstandard: null,
	},
	earthplate: {
		inherit: true,
		isNonstandard: null,
	},
	ejectpack: {
		inherit: true,
		isNonstandard: null,
	},
	fistplate: {
		inherit: true,
		isNonstandard: null,
	},
	flameplate: {
		inherit: true,
		isNonstandard: null,
	},
	icicleplate: {
		inherit: true,
		isNonstandard: null,
	},
	insectplate: {
		inherit: true,
		isNonstandard: null,
	},
	ironplate: {
		inherit: true,
		isNonstandard: null,
	},
	meadowplate: {
		inherit: true,
		isNonstandard: null,
	},
	mindplate: {
		inherit: true,
		isNonstandard: null,
	},
	pixieplate: {
		inherit: true,
		isNonstandard: null,
	},
	redcard: {
		inherit: true,
		isNonstandard: null,
	},
	skyplate: {
		inherit: true,
		isNonstandard: null,
	},
	splashplate: {
		inherit: true,
		isNonstandard: null,
	},
	spookyplate: {
		inherit: true,
		isNonstandard: null,
	},
	stoneplate: {
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
	toxicplate: {
		inherit: true,
		isNonstandard: null,
	},
	utilityumbrella: {
		inherit: true,
		isNonstandard: null,
	},
	zapplate: {
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
	/* Clover CAP Mega Stones */
	ooganite: {
		inherit: true,
		isNonstandard: null,
	},
	wifeminite: {
		inherit: true,
		isNonstandard: null,
	},
	bitekinite: {
		inherit: true,
		isNonstandard: null,
	},
	fonduppite: {
		inherit: true,
		isNonstandard: null,
	},
	ebolabite: {
		inherit: true,
		isNonstandard: null,
	},
	somboludite: {
		inherit: true,
		isNonstandard: null,
	},
	floriousite: {
		inherit: true,
		isNonstandard: null,
	},
	illumatrixite: {
		inherit: true,
		isNonstandard: null,
	},
	grimdakite: {
		inherit: true,
		isNonstandard: null,
	},
	hazmatite: {
		inherit: true,
		isNonstandard: null,
	},
	krokizonite: {
		inherit: true,
		isNonstandard: null,
	},
	spookzillite: {
		inherit: true,
		isNonstandard: null,
	},
	lizakbarite: {
		inherit: true,
		isNonstandard: null,
	},
	rectreemite: {
		inherit: true,
		isNonstandard: null,
	},
	unjoyite: {
		inherit: true,
		isNonstandard: null,
	},
	emplyinite: {
		inherit: true,
		isNonstandard: null,
	},
	upbeddite: {
		inherit: true,
		isNonstandard: null,
	},
	smelloxite: {
		inherit: true,
		isNonstandard: null,
	},
	pigusonite: {
		inherit: true,
		isNonstandard: null,
	},
	condoomite: {
		inherit: true,
		isNonstandard: null,
	},
	hohohomite: {
		inherit: true,
		isNonstandard: null,
	},
	faptite: {
		inherit: true,
		isNonstandard: null,
	},
	jerklite: {
		inherit: true,
		isNonstandard: null,
	},
	dowsterite: {
		inherit: true,
		isNonstandard: null,
	},
	reptrillite: {
		inherit: true,
		isNonstandard: null,
	},
	kuklanite: {
		inherit: true,
		isNonstandard: null,
	},
	ricosuavite: {
		inherit: true,
		isNonstandard: null,
	},
	vandashite: {
		inherit: true,
		isNonstandard: null,
	},
	chasumite: {
		inherit: true,
		isNonstandard: null,
	},
	goryannusite: {
		inherit: true,
		isNonstandard: null,
	},
	spookscarite: {
		inherit: true,
		isNonstandard: null,
	},
	honradite: {
		inherit: true,
		isNonstandard: null,
	},
	ointmiteite: {
		inherit: true,
		isNonstandard: null,
	},
};

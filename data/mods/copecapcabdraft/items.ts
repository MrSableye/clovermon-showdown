export const Items: {[k: string]: ModdedItemData} = {
	/* Enabled items */
	blunderpolicy: {
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
			if (pokemon.baseSpecies.baseSpecies === 'Naughtycoot' || pokemon.baseSpecies.baseSpecies === 'Masdawg' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Gambino' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Toadagi' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Whiteout' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Swoldier' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Mr. Toad' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Staypuft' || pokemon.baseSpecies.baseSpecies === 'Pasdawg') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Naughtycoot", "Blobbos-Skeleton", "Pasdawg-Gambino", "Pasdawg-Toadagi", "Pasdawg-Whiteout", "Pasdawg-Swoldier", "Pasdawg-Mr. Toad", "Pasdawg-Staypuft"],
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
	fusjite: {
		inherit: true,
		isNonstandard: null,
	},
	ginoccite: {
		inherit: true,
		isNonstandard: null,
	},
	salezerkite: {
		inherit: true,
		isNonstandard: null,
	},
	lemirethite: {
		inherit: true,
		isNonstandard: null,
	},
	platylicite: {
		inherit: true,
		isNonstandard: null,
	},
	camerite: {
		inherit: true,
		isNonstandard: null,
	},
	glucusite: {
		inherit: true,
		isNonstandard: null,
	},
	ointmiteite: {
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
	blobbosmikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	blackmagiumz: {
		inherit: true,
		isNonstandard: null,
	},
};

export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	bulbasaur: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
	},
	ivysaur: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
	},
	venusaur: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
	},
	charmander: {
		inherit: true,
		abilities: {0: "Solar Power", 1: "Blaze"},
	},
	charmeleon: {
		inherit: true,
		abilities: {0: "Solar Power", 1: "Blaze"},
	},
	charizard: {
		inherit: true,
		abilities: {0: "Solar Power", 1: "Blaze"},
	},
	squirtle: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Rain Dish"},
	},
	wartortle: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Rain Dish"},
	},
	blastoise: {
		inherit: true,
		types: ["Water", "Steel"],
		abilities: {0: "Torrent", 1: "Rain Dish"},
	},
	caterpie: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Shield Dust"},
	},
	metapod: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Shield Dust"},
	},
	butterfree: {
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 80, atk: 45, def: 60, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Compound Eyes", 1: "Tinted Lens"},
	},
	weedle: {
		inherit: true,
		abilities: {0: "Shield Dust", H: "Honey Gather"},
	},
	kakuna: {
		inherit: true,
		abilities: {0: "Shed Skin", H: "Honey Gather"},
	},
	beedrill: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 40, spa: 45, spd: 101, spe: 75},
		abilities: {0: "Sniper", 1: "Anger Point", H: "Honey Gather"},
	},
	pidgeotto: {
		inherit: true,
		baseStats: {hp: 63, atk: 60, def: 55, spa: 64, spd: 50, spe: 71},
	},
	pidgeot: {
		inherit: true,
		baseStats: {hp: 83, atk: 90, def: 75, spa: 90, spd: 101, spe: 105},
	},
	rattata: {
		inherit: true,
		abilities: {0: "Poison Heal", 1: "Guts", H: "Strong Jaw"},
	},
	raticate: {
		inherit: true,
		baseStats: {hp: 80, atk: 90, def: 65, spa: 50, spd: 85, spe: 70},
		abilities: {0: "Hustle", 1: "Guts", H: "Strong Jaw"},
	},
	spearow: {
		inherit: true,
		baseStats: {hp: 40, atk: 65, def: 30, spa: 31, spd: 31, spe: 70},
		abilities: {0: "Sniper", 1: "Big Pecks", H: "Guts"},
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 75, spa: 61, spd: 71, spe: 110},
		abilities: {0: "Sniper", 1: "Mold Breaker", H: "Guts", S: "Intimidate"},
	},
	ekans: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Cold Blooded"},
	},
	arbok: {
		inherit: true,
		baseStats: {hp: 66, atk: 95, def: 94, spa: 102, spd: 87, spe: 65},
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Cold Blooded"},
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 55, spa: 95, spd: 80, spe: 110},
	},
	sandshrew: {
		inherit: true,
		abilities: {0: "Sand Veil", 1: "Sand Rush"},
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 85, atk: 110, def: 110, spa: 45, spd: 65, spe: 85},
		abilities: {0: "Sand Veil", 1: "Sand Rush", H: "Sand Force"},
	},
	nidoqueen: {
		inherit: true,
		baseStats: {hp: 100, atk: 92, def: 90, spa: 75, spd: 88, spe: 76},
	},
	nidorino: {
		inherit: true,
		abilities: {0: "Hustle", 1: "Rivalry"},
	},
	nidoking: {
		inherit: true,
		baseStats: {hp: 81, atk: 92, def: 77, spa: 86, spd: 75, spe: 110},
		abilities: {0: "Sheer Force", 1: "Rivalry", H: "Hustle"},
	},
	clefairy: {
		inherit: true,
		types: ["Fairy", "Cosmic"],
	},
	clefable: {
		inherit: true,
		types: ["Fairy", "Cosmic"],
		abilities: {0: "Unaware", 1: "Magic Guard", H: "Friend Guard"},
	},
	vulpix: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Drought", H: "Forewarn"},
	},
	ninetales: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Drought", H: "Forewarn"},
	},
	jigglypuff: {
		inherit: true,
		types: ["Sound", "Fairy"],
		abilities: {0: "Cute Charm", 1: "Frisk"},
	},
	wigglytuff: {
		inherit: true,
		types: ["Sound", "Fairy"],
		baseStats: {hp: 145, atk: 45, def: 74, spa: 85, spd: 75, spe: 70},
		abilities: {0: "Cute Charm", 1: "Frisk", H: "Friend Guard"},
	},
	zubat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Infiltrator", H: "Anticipation"},
	},
	golbat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Infiltrator", H: "Anticipation"},
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 95, spa: 110, spd: 100, spe: 50},
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 80, atk: 95, def: 100, spa: 65, spd: 125, spe: 50},
	},
	venomoth: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 60, spa: 95, spd: 85, spe: 95},
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120},
	},
	persian: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 65, spa: 85, spd: 85, spe: 133},
	},
	psyduck: {
		inherit: true,
		abilities: {0: "Headache", 1: "Cloud Nine"},
	},
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 97, def: 78, spa: 95, spd: 85, spe: 85},
		abilities: {0: "Headache", 1: "Cloud Nine"},
	},
	mankey: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Anger Point"},
	},
	primeape: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 60, spa: 60, spd: 70, spe: 105},
		abilities: {0: "Insomnia", 1: "Anger Point"},
	},
	poliwag: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Damp", H: "Magic Bounce"},
	},
	poliwrath: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 100, spa: 70, spd: 90, spe: 70},
	},
	abra: {
		inherit: true,
		types: ["Psychic", "Magic"],
	},
	kadabra: {
		inherit: true,
		types: ["Psychic", "Magic"],
	},
	alakazam: {
		inherit: true,
		types: ["Psychic", "Magic"],
	},
	bellsprout: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Flytrap"},
	},
	weepinbell: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Flytrap"},
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 75, spa: 105, spd: 60, spe: 80},
		abilities: {0: "Chlorophyll", 1: "Flytrap", H: "Merciless"},
	},
	golem: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 130, spa: 55, spd: 65, spe: 45},
	},
	rapidash: {
		inherit: true,
		baseStats: {hp: 85, atk: 102, def: 70, spa: 80, spd: 80, spe: 115},
		abilities: {0: "Reckless", 1: "Flash Fire"},
	},
	magnemite: {
		inherit: true,
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Levitate"},
	},
	magneton: {
		inherit: true,
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Levitate"},
	},
	farfetchd: {
		inherit: true,
		baseStats: {hp: 62, atk: 95, def: 55, spa: 58, spd: 62, spe: 105},
		abilities: {0: "Defiant", 1: "Super Luck", H: "Sheer Force"},
	},
	dodrio: {
		inherit: true,
		baseStats: {hp: 75, atk: 113, def: 73, spa: 63, spd: 63, spe: 113},
		abilities: {0: "Own Tempo", 1: "Early Bird", H: "Speed Boost"},
	},
	seel: {
		inherit: true,
		types: ["Water", "Ice"],
		abilities: {0: "Thick Fat", 1: "Snow Rush"},
	},
	dewgong: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Snow Rush"},
	},
	shellder: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Skill Link"},
	},
	cloyster: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Skill Link"},
	},
	gastly: {
		inherit: true,
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	haunter: {
		inherit: true,
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	gengar: {
		inherit: true,
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	onix: {
		inherit: true,
		baseStats: {hp: 70, atk: 85, def: 160, spa: 30, spd: 60, spe: 70},
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 75, def: 70, spa: 75, spd: 115, spe: 67},
	},
	krabby: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Battle Armor"},
	},
	kingler: {
		inherit: true,
		baseStats: {hp: 75, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
		abilities: {0: "Shed Skin", 1: "Sheer Force", H: "Battle Armor"},
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 70, spa: 85, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Aftermath", H: "Explosive"},
	},
	exeggcute: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Harvest"},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 85, spa: 125, spd: 105, spe: 55},
		abilities: {0: "Chlorophyll", 1: "Harvest"},
	},
	cubone: {
		inherit: true,
		types: ["Bone"],
	},
	marowak: {
		inherit: true,
		types: ["Bone"],
		baseStats: {hp: 65, atk: 80, def: 115, spa: 50, spd: 85, spe: 70},
	},
	hitmonlee: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 53, spa: 35, spd: 110, spe: 87},
		abilities: {0: "Furious Feet"},
	},
	hitmonchan: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 79, spa: 35, spd: 110, spe: 76},
		abilities: {0: "Iron Fist"},
	},
	lickitung: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 85, spa: 60, spd: 85, spe: 30},
	},
	koffing: {
		inherit: true,
		abilities: {0: "Levitate", H: "Aftermath"},
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 75, atk: 70, def: 120, spa: 90, spd: 80, spe: 60},
		abilities: {0: "Levitate", H: "Aftermath"},
	},
	rhyhorn: {
		inherit: true,
		types: ["Bone", "Rock"],
	},
	rhydon: {
		inherit: true,
		types: ["Bone", "Rock"],
		baseStats: {hp: 105, atk: 130, def: 120, spa: 95, spd: 45, spe: 40},
	},
	seadra: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 95, spa: 95, spd: 95, spe: 85},
	},
	goldeen: {
		inherit: true,
		baseStats: {hp: 45, atk: 68, def: 60, spa: 35, spd: 50, spe: 63},
	},
	seaking: {
		inherit: true,
		types: ["Water", "Bone"],
		baseStats: {hp: 80, atk: 109, def: 75, spa: 65, spd: 80, spe: 100},
		abilities: {0: "Lightning Rod", 1: "Water Veil", H: "Swift Swim"},
	},
	starmie: {
		inherit: true,
		types: ["Water", "Cosmic"],
	},
	mrmime: {
		inherit: true,
		types: ["Psychic", "Fairy"],
		abilities: {0: "Soundproof", 1: "Filter", H: "Builder"},
	},
	jynx: {
		inherit: true,
		baseStats: {hp: 65, atk: 80, def: 35, spa: 115, spd: 110, spe: 124},
		abilities: {0: "Oblivious", 1: "Forewarn", H: "Filter"},
	},
	electabuzz: {
		inherit: true,
		baseStats: {hp: 65, atk: 83, def: 67, spa: 95, spd: 85, spe: 105},
		abilities: {0: "Static", 1: "Insomnia"},
	},
	magmar: {
		inherit: true,
		abilities: {0: "Flame Body", 1: "Insomnia"},
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 75, atk: 120, def: 95, spa: 40, spd: 70, spe: 110},
		abilities: {0: "Intimidate", 1: "Sheer Force"},
	},
	magikarp: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Rattled"},
	},
	gyarados: {
		inherit: true,
		baseStats: {hp: 95, atk: 125, def: 79, spa: 73, spd: 100, spe: 81},
		abilities: {0: "Intimidate", 1: "Moxie", H: "Pride"},
	},
	lapras: {
		inherit: true,
		baseStats: {hp: 130, atk: 90, def: 80, spa: 90, spd: 95, spe: 60},
		abilities: {0: "Water Absorb", 1: "Battle Armor", H: "Drizzle"},
	},
	ditto: {
		inherit: true,
		baseStats: {hp: 68, atk: 68, def: 68, spa: 68, spd: 68, spe: 68},
		abilities: {0: "Limber", 1: "Imposter"},
	},
	vaporeon: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Hydration"},
	},
	jolteon: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Quick Feet"},
	},
	flareon: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Guts", H: "Fur Coat"},
	},
	porygon: {
		inherit: true,
		types: ["Normal", "Cyber"],
		baseStats: {hp: 75, atk: 60, def: 70, spa: 95, spd: 75, spe: 40},
	},
	omanyte: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Battle Armor"},
	},
	omastar: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Battle Armor"},
	},
	kabuto: {
		inherit: true,
		baseStats: {hp: 50, atk: 82, def: 93, spa: 65, spd: 55, spe: 55},
	},
	articuno: {
		inherit: true,
		abilities: {0: "Snow Warning"},
	},
	zapdos: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Lightning Rod"},
	},
	moltres: {
		inherit: true,
		abilities: {0: "Bellows", H: "Drought"},
	},
	chikorita: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Overgrow", H: "Natural Cure"},
	},
	bayleef: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Overgrow", H: "Natural Cure"},
	},
	meganium: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Overgrow", H: "Natural Cure"},
	},
	cyndaquil: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Blaze"},
	},
	quilava: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Blaze"},
	},
	typhlosion: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Blaze", H: "Magma Armor"},
	},
	totodile: {
		inherit: true,
		abilities: {0: "Sheer Force", 1: "Torrent", H: "Strong Jaw"},
	},
	croconaw: {
		inherit: true,
		types: ["Water", "Bone"],
		abilities: {0: "Sheer Force", 1: "Torrent", H: "Strong Jaw"},
	},
	feraligatr: {
		inherit: true,
		types: ["Water", "Bone"],
		abilities: {0: "Sheer Force", 1: "Torrent", H: "Strong Jaw"},
	},
	furret: {
		inherit: true,
		baseStats: {hp: 90, atk: 76, def: 64, spa: 45, spd: 75, spe: 90},
		abilities: {0: "Fur Coat", 1: "Simple"},
	},
	hoothoot: {
		inherit: true,
		baseStats: {hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 53},
		abilities: {0: "Insomnia", 1: "Dreamcatcher"},
	},
	noctowl: {
		inherit: true,
		baseStats: {hp: 100, atk: 70, def: 50, spa: 86, spd: 100, spe: 70},
		abilities: {0: "Insomnia", 1: "Dreamcatcher", H: "Tinted Lens", S: "Vespertine"},
	},
	ledyba: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 30, spa: 40, spd: 80, spe: 55},
	},
	ledian: {
		inherit: true,
		types: ["Bug", "Cosmic"],
		baseStats: {hp: 90, atk: 110, def: 85, spa: 110, spd: 100, spe: 108},
		abilities: {0: "Iron Fist", 1: "Defiant", H: "Victory Star"},
	},
	spinarak: {
		inherit: true,
		baseStats: {hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 44},
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 70, atk: 90, def: 80, spa: 70, spd: 80, spe: 116},
		abilities: {0: "Sniper", 1: "Insomnia", H: "Swarm"},
	},
	crobat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Infiltrator"},
	},
	chinchou: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Illuminate", H: "Swift Swim"},
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 58, def: 86, spa: 90, spd: 96, spe: 67},
		abilities: {0: "Volt Absorb", 1: "Illuminate", H: "Swift Swim"},
	},
	cleffa: {
		inherit: true,
		types: ["Fairy"],
	},
	igglybuff: {
		inherit: true,
		types: ["Fairy"],
		abilities: {0: "Fur Coat", 1: "Serene Grace"},
	},
	togepi: {
		inherit: true,
		types: ["Fairy"],
	},
	togetic: {
		inherit: true,
		types: ["Fairy", "Flying"],
	},
	natu: {
		inherit: true,
		abilities: {0: "Magic Bounce", 1: "Early Bird"},
	},
	xatu: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 70, spa: 100, spd: 70, spe: 100},
		abilities: {0: "Magic Bounce", 1: "Early Bird"},
	},
	mareep: {
		inherit: true,
		abilities: {0: "Static", H: "Fur Coat"},
	},
	flaaffy: {
		inherit: true,
		abilities: {0: "Static", H: "Fur Coat"},
	},
	ampharos: {
		inherit: true,
		types: ["Electric", "Light"],
		baseStats: {hp: 90, atk: 55, def: 75, spa: 115, spd: 90, spe: 75},
	},
	bellossom: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 95, spa: 100, spd: 100, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Own Tempo"},
	},
	marill: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 70, atk: 30, def: 50, spa: 40, spd: 50, spe: 40},
	},
	azumarill: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 110, atk: 50, def: 80, spa: 75, spd: 80, spe: 50},
	},
	sudowoodo: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 130, spa: 30, spd: 85, spe: 30},
	},
	politoed: {
		inherit: true,
		baseStats: {hp: 90, atk: 75, def: 85, spa: 90, spd: 100, spe: 75},
		abilities: {0: "Water Absorb", 1: "Drizzle", H: "Soundproof"},
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 105, atk: 70, def: 70, spa: 50, spd: 85, spe: 130},
	},
	sunkern: {
		inherit: true,
		abilities: {0: "Moody", 1: "Solar Power"},
	},
	sunflora: {
		inherit: true,
		types: ["Grass", "Light"],
		baseStats: {hp: 100, atk: 95, def: 90, spa: 115, spd: 95, spe: 75},
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Drought"},
	},
	yanma: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 45, spa: 76, spd: 45, spe: 95},
	},
	wooper: {
		inherit: true,
		abilities: {0: "Unaware", 1: "Water Absorb", H: "Sap Sipper"},
	},
	quagsire: {
		inherit: true,
		baseStats: {hp: 100, atk: 90, def: 95, spa: 65, spd: 75, spe: 35},
		abilities: {0: "Unaware", 1: "Water Absorb", H: "Sap Sipper"},
	},
	espeon: {
		inherit: true,
		abilities: {0: "Magic Bounce", 1: "Synchronize", H: "Sunbathe", S: "Solar Power"},
	},
	umbreon: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Inner Focus", H: "Poison Heal"},
	},
	murkrow: {
		inherit: true,
		baseStats: {hp: 66, atk: 85, def: 42, spa: 85, spd: 42, spe: 91},
		abilities: {0: "Prankster", 1: "Super Luck", H: "Insomnia"},
	},
	misdreavus: {
		inherit: true,
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	unown: {
		inherit: true,
		baseStats: {hp: 78, atk: 82, def: 78, spa: 82, spd: 78, spe: 68},
		abilities: {0: "Levitate", H: "Pressure"},
	},
	wobbuffet: {
		inherit: true,
		baseStats: {hp: 190, atk: 33, def: 68, spa: 33, spd: 68, spe: 33},
	},
	girafarig: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 85, spa: 100, spd: 85, spe: 105},
		abilities: {0: "Sap Sipper", 1: "Early Bird", H: "Contrary"},
	},
	pineco: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Overcoat"},
	},
	forretress: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Overcoat", H: "Heatproof"},
	},
	dunsparce: {
		inherit: true,
		baseStats: {hp: 100, atk: 85, def: 70, spa: 65, spd: 65, spe: 45},
		abilities: {0: "Serene Grace", 1: "Rattled", H: "Guts"},
	},
	gligar: {
		inherit: true,
		abilities: {0: "Hyper Cutter", 1: "Immunity", H: "Sand Veil"},
	},
	steelix: {
		inherit: true,
		baseStats: {hp: 80, atk: 91, def: 200, spa: 55, spd: 75, spe: 30},
	},
	snubbull: {
		inherit: true,
		types: ["Fairy"],
	},
	granbull: {
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 90, atk: 130, def: 75, spa: 60, spd: 80, spe: 65},
		abilities: {0: "Intimidate", 1: "Pixilate", H: "Strong Jaw"},
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 85, atk: 100, def: 95, spa: 85, spd: 55, spe: 85},
		abilities: {0: "Poison Point", 1: "Intimidate", H: "Rough Skin"},
	},
	scizor: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Technician", H: "Unburden"},
	},
	shuckle: {
		inherit: true,
		baseStats: {hp: 35, atk: 10, def: 230, spa: 10, spd: 230, spe: 5},
		abilities: {0: "Poison Heal", 1: "Contrary", H: "Gluttony"},
	},
	sneasel: {
		inherit: true,
		abilities: {0: "Technician", 1: "Snow Rush"},
	},
	teddiursa: {
		inherit: true,
		abilities: {0: "Pickup", 1: "Honey Gather", H: "Quick Feet"},
	},
	ursaring: {
		inherit: true,
		baseStats: {hp: 90, atk: 130, def: 110, spa: 75, spd: 95, spe: 65},
		abilities: {0: "Guts", 1: "Quick Feet", H: "Honey Gather"},
	},
	slugma: {
		inherit: true,
		abilities: {0: "Magma Armor", 1: "Vaporize"},
	},
	magcargo: {
		inherit: true,
		baseStats: {hp: 80, atk: 65, def: 135, spa: 95, spd: 100, spe: 30},
		abilities: {0: "Magma Armor", 1: "Vaporize"},
	},
	piloswine: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 85, spa: 60, spd: 70, spe: 50},
		abilities: {0: "Oblivious", 1: "Thick Fat"},
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 100, atk: 65, def: 115, spa: 95, spd: 110, spe: 35},
		abilities: {0: "Regenerator", 1: "Natural Cure", H: "Hustle"},
	},
	octillery: {
		inherit: true,
		abilities: {0: "Moody", 1: "Sniper", H: "Mega Launcher"},
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 45, spa: 75, spd: 100, spe: 75},
		abilities: {0: "Insomnia", 1: "Hustle", H: "Prankster"},
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 95, atk: 40, def: 70, spa: 80, spd: 140, spe: 70},
	},
	kingdra: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 105},
	},
	donphan: {
		inherit: true,
		types: ["Ground", "Bone"],
		baseStats: {hp: 90, atk: 125, def: 125, spa: 75, spd: 70, spe: 50},
	},
	porygon2: {
		inherit: true,
		types: ["Normal", "Cyber"],
	},
	stantler: {
		inherit: true,
		types: ["Normal", "Fear"],
		baseStats: {hp: 100, atk: 95, def: 85, spa: 85, spd: 86, spe: 95},
		abilities: {0: "Intimidate", 1: "Graze"},
	},
	smeargle: {
		inherit: true,
		types: ["Normal", "Paint"],
		baseStats: {hp: 75, atk: 75, def: 70, spa: 75, spd: 70, spe: 85},
		abilities: {0: "Moody", 1: "Technician", H: "Trace"},
	},
	tyrogue: {
		inherit: true,
		abilities: {0: "Guts", 1: "Steadfast", H: "Insomnia"},
	},
	hitmontop: {
		inherit: true,
		baseStats: {hp: 80, atk: 95, def: 95, spa: 35, spd: 110, spe: 70},
	},
	elekid: {
		inherit: true,
		abilities: {0: "Static", 1: "Insomnia"},
	},
	magby: {
		inherit: true,
		abilities: {0: "Flame Body", H: "Insomnia"},
	},
	miltank: {
		inherit: true,
		types: ["Normal", "Food"],
		baseStats: {hp: 95, atk: 100, def: 105, spa: 40, spd: 105, spe: 100},
	},
	blissey: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Serene Grace", H: "Fur Coat"},
	},
	raikou: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Volt Absorb", H: "Static"},
	},
	entei: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Flash Fire", H: "White Smoke"},
	},
	suicune: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Water Absorb"},
	},
	lugia: {
		inherit: true,
		abilities: {0: "Multiscale", H: "Drizzle"},
	},
	hooh: {
		inherit: true,
		abilities: {0: "Regenerator", H: "Drought"},
	},
	celebi: {
		inherit: true,
		types: ["Time", "Grass"],
		abilities: {0: "Natural Cure", H: "Shed Skin"},
	},
	treecko: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Unburden"},
	},
	grovyle: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Unburden"},
	},
	sceptile: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Unburden"},
	},
	torchic: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Speed Boost"},
	},
	combusken: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Speed Boost"},
	},
	blaziken: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Speed Boost"},
	},
	mudkip: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Damp"},
	},
	marshtomp: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Damp"},
	},
	swampert: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Damp", H: "Sap Sipper"},
	},
	mightyena: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 70, spa: 60, spd: 60, spe: 90},
		abilities: {0: "Moxie", 1: "Quick Feet", H: "Shadow Tag"},
	},
	linoone: {
		inherit: true,
		baseStats: {hp: 88, atk: 82, def: 71, spa: 50, spd: 71, spe: 110},
		abilities: {0: "Pickup", 1: "Unburden"},
	},
	wurmple: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Run Away"},
	},
	beautifly: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 87, spa: 87, spd: 107, spe: 110},
		abilities: {0: "Swarm", 1: "Rivalry"},
	},
	dustox: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 90, spa: 110, spd: 87, spe: 103},
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Vespertine"},
	},
	ludicolo: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 70, spa: 90, spd: 120, spe: 85},
	},
	shiftry: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 85, spa: 105, spd: 85, spe: 80},
	},
	taillow: {
		inherit: true,
		abilities: {0: "Guts", 1: "Scrappy", H: "Speed Boost"},
	},
	swellow: {
		inherit: true,
		baseStats: {hp: 80, atk: 85, def: 60, spa: 85, spd: 50, spe: 125},
		abilities: {0: "Guts", 1: "Scrappy", H: "Speed Boost"},
	},
	wingull: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Hydration"},
	},
	pelipper: {
		inherit: true,
		baseStats: {hp: 70, atk: 50, def: 100, spa: 95, spd: 70, spe: 75},
		abilities: {0: "Keen Eye", 1: "Drizzle"},
	},
	ralts: {
		inherit: true,
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 28, atk: 25, def: 25, spa: 55, spd: 35, spe: 40},
		abilities: {0: "Synchronize", 1: "Trace", H: "Serene Grace"},
	},
	kirlia: {
		inherit: true,
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 38, atk: 35, def: 35, spa: 85, spd: 55, spe: 50},
		abilities: {0: "Synchronize", 1: "Trace", H: "Serene Grace"},
	},
	gardevoir: {
		inherit: true,
		types: ["Psychic", "Fairy"],
		abilities: {0: "Synchronize", 1: "Trace", H: "Serene Grace"},
	},
	surskit: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Rain Dish"},
	},
	masquerain: {
		inherit: true,
		types: ["Bug", "Water"],
		baseStats: {hp: 70, atk: 60, def: 62, spa: 100, spd: 102, spe: 90},
		abilities: {0: "Intimidate", 1: "Levitate"},
	},
	slakoth: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 65, spa: 35, spd: 40, spe: 30},
	},
	vigoroth: {
		inherit: true,
		abilities: {0: "Insomnia"},
	},
	slaking: {
		inherit: true,
		baseStats: {hp: 155, atk: 160, def: 100, spa: 95, spd: 75, spe: 100},
	},
	shedinja: {
		inherit: true,
		baseStats: {hp: 1, atk: 95, def: 40, spa: 70, spd: 30, spe: 70},
	},
	whismur: {
		inherit: true,
		types: ["Sound"],
		abilities: {0: "Soundproof", 1: "Rattled"},
	},
	loudred: {
		inherit: true,
		types: ["Sound"],
		baseStats: {hp: 84, atk: 76, def: 63, spa: 76, spd: 63, spe: 48},
		abilities: {0: "Soundproof", 1: "Scrappy", H: "Pride"},
	},
	exploud: {
		inherit: true,
		types: ["Sound"],
		baseStats: {hp: 104, atk: 100, def: 73, spa: 111, spd: 83, spe: 68},
		abilities: {0: "Soundproof", 1: "Scrappy", H: "Cacophony"},
	},
	hariyama: {
		inherit: true,
		baseStats: {hp: 154, atk: 125, def: 70, spa: 40, spd: 63, spe: 50},
	},
	azurill: {
		inherit: true,
		types: ["Normal", "Fairy"],
	},
	nosepass: {
		inherit: true,
		baseStats: {hp: 55, atk: 45, def: 135, spa: 65, spd: 90, spe: 30},
	},
	skitty: {
		inherit: true,
		abilities: {0: "Cute Charm", 1: "Pounce"},
	},
	delcatty: {
		inherit: true,
		types: ["Normal", "Cosmic"],
		baseStats: {hp: 97, atk: 65, def: 75, spa: 95, spd: 75, spe: 90},
		abilities: {0: "Simple", 1: "Wonder Skin", H: "Normalize"},
	},
	sableye: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 75, spa: 65, spd: 65, spe: 50},
		abilities: {0: "Prankster", 1: "Filter", H: "Keen Eye"},
	},
	mawile: {
		inherit: true,
		types: ["Steel", "Fairy"],
		abilities: {0: "Hyper Cutter", 1: "Intimidate", H: "Strong Jaw"},
	},
	aron: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Stamina"},
	},
	lairon: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Strong Jaw"},
	},
	aggron: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 180, spa: 75, spd: 60, spe: 50},
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Sheer Force"},
	},
	meditite: {
		inherit: true,
		abilities: {0: "Huge Power", H: "Isolation"},
	},
	medicham: {
		inherit: true,
		abilities: {0: "Huge Power", H: "Vast Knowledge"},
	},
	electrike: {
		inherit: true,
		baseStats: {hp: 40, atk: 55, def: 40, spa: 65, spd: 40, spe: 65},
	},
	manectric: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 60, spa: 105, spd: 60, spe: 105},
		abilities: {0: "Static", 1: "Lightning Rod", H: "Intimidate", S: "Minus"},
	},
	volbeat: {
		inherit: true,
		types: ["Bug", "Light"],
		baseStats: {hp: 65, atk: 73, def: 75, spa: 90, spd: 85, spe: 85},
		abilities: {0: "Illuminate", 1: "Prankster"},
	},
	illumise: {
		inherit: true,
		types: ["Bug", "Fairy"],
		baseStats: {hp: 65, atk: 47, def: 86, spa: 96, spd: 90, spe: 85},
	},
	roselia: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 55, spa: 100, spd: 80, spe: 65},
		abilities: {0: "Natural Cure", 1: "Poison Point", H: "Serene Grace"},
	},
	gulpin: {
		inherit: true,
		abilities: {0: "Sticky Hold", 1: "Gluttony", H: "Regenerator"},
	},
	swalot: {
		inherit: true,
		baseStats: {hp: 100, atk: 83, def: 90, spa: 83, spd: 90, spe: 55},
		abilities: {0: "Thick Fat", 1: "Gluttony", H: "Regenerator"},
	},
	carvanha: {
		inherit: true,
		abilities: {0: "Rough Skin", 1: "Swift Swim"},
	},
	sharpedo: {
		inherit: true,
		abilities: {0: "Rough Skin", 1: "Speed Boost", H: "Strong Jaw"},
	},
	wailord: {
		inherit: true,
		abilities: {0: "Drizzle", 1: "Oblivious"},
	},
	camerupt: {
		inherit: true,
		abilities: {0: "Anger Point", 1: "Filter", H: "Drought"},
	},
	torkoal: {
		inherit: true,
		abilities: {0: "White Smoke", 1: "Drought", H: "Battle Armor"},
	},
	spoink: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Own Tempo", H: "Magic Bounce"},
	},
	grumpig: {
		inherit: true,
		baseStats: {hp: 80, atk: 90, def: 65, spa: 90, spd: 110, spe: 80},
		abilities: {0: "Thick Fat", 1: "Own Tempo", H: "Magic Bounce"},
	},
	spinda: {
		inherit: true,
		types: ["Normal", "Chaos"],
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
	},
	trapinch: {
		inherit: true,
		types: ["Ground", "Bug"],
		baseStats: {hp: 45, atk: 100, def: 65, spa: 45, spd: 55, spe: 10},
	},
	vibrava: {
		inherit: true,
		abilities: {0: "Levitate", H: "Sand Rush"},
	},
	flygon: {
		inherit: true,
		abilities: {0: "Levitate", H: "Sand Stream"},
	},
	cacnea: {
		inherit: true,
		abilities: {0: "Sand Veil", 1: "Water Absorb", H: "Rough Skin"},
	},
	cacturne: {
		inherit: true,
		baseStats: {hp: 70, atk: 115, def: 70, spa: 115, spd: 60, spe: 65},
		abilities: {0: "Sand Veil", 1: "Water Absorb", H: "Rough Skin"},
	},
	seviper: {
		inherit: true,
		baseStats: {hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 125},
		abilities: {0: "Shed Skin", 1: "Adaptability"},
	},
	lunatone: {
		inherit: true,
		types: ["Rock", "Cosmic"],
		abilities: {0: "Levitate", H: "Rain Dish"},
	},
	solrock: {
		inherit: true,
		types: ["Rock", "Cosmic"],
		abilities: {0: "Levitate", H: "Solar Force"},
	},
	barboach: {
		inherit: true,
		baseStats: {hp: 54, atk: 52, def: 43, spa: 50, spd: 49, spe: 65},
	},
	whiscash: {
		inherit: true,
		baseStats: {hp: 100, atk: 92, def: 89, spa: 80, spd: 120, spe: 87},
		abilities: {0: "Oblivious", 1: "Filter"},
	},
	corphish: {
		inherit: true,
		abilities: {0: "Hyper Cutter", 1: "Battle Armor"},
	},
	crawdaunt: {
		inherit: true,
		baseStats: {hp: 66, atk: 120, def: 85, spa: 90, spd: 55, spe: 65},
		abilities: {0: "Hyper Cutter", 1: "Adaptability"},
	},
	baltoy: {
		inherit: true,
		abilities: {0: "Levitate", H: "Filter"},
	},
	claydol: {
		inherit: true,
		abilities: {0: "Levitate", H: "Filter"},
	},
	lileep: {
		inherit: true,
		abilities: {0: "Suction Cups", 1: "Storm Drain", H: "Hydration"},
	},
	cradily: {
		inherit: true,
		baseStats: {hp: 90, atk: 83, def: 100, spa: 83, spd: 111, spe: 43},
		abilities: {0: "Suction Cups", 1: "Storm Drain", H: "Hydration"},
	},
	anorith: {
		inherit: true,
		types: ["Bone", "Bug"],
		abilities: {0: "Battle Armor", 1: "Swift Swim"},
	},
	armaldo: {
		inherit: true,
		types: ["Bone", "Bug"],
		baseStats: {hp: 75, atk: 125, def: 105, spa: 70, spd: 80, spe: 55},
		abilities: {0: "Battle Armor", 1: "Swift Swim", H: "Regenerator"},
	},
	castform: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
	},
	kecleon: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 95, spa: 90, spd: 120, spe: 85},
		abilities: {0: "Color Change", 1: "Protean"},
	},
	banette: {
		inherit: true,
		baseStats: {hp: 64, atk: 115, def: 65, spa: 97, spd: 63, spe: 65},
	},
	duskull: {
		inherit: true,
		types: ["Ghost", "Bone"],
		abilities: {0: "Levitate", 1: "Frisk", H: "Cursed Body"},
	},
	dusclops: {
		inherit: true,
		baseStats: {hp: 50, atk: 70, def: 130, spa: 60, spd: 130, spe: 25},
		abilities: {0: "Pressure", 1: "Frisk", H: "Shadow Call"},
	},
	tropius: {
		inherit: true,
		baseStats: {hp: 125, atk: 90, def: 83, spa: 92, spd: 100, spe: 71},
		abilities: {0: "Harvest", 1: "Thick Fat", H: "Graze"},
	},
	chimecho: {
		inherit: true,
		types: ["Psychic", "Sound"],
		abilities: {0: "Levitate", H: "Prankster"},
	},
	absol: {
		inherit: true,
		baseStats: {hp: 75, atk: 130, def: 60, spa: 75, spd: 60, spe: 75},
		abilities: {0: "Forewarn", 1: "Super Luck"},
	},
	wynaut: {
		inherit: true,
		abilities: {0: "Shadow Tag", H: "Filter"},
	},
	snorunt: {
		inherit: true,
		abilities: {0: "Moody", 1: "Ice Body", H: "Filter"},
	},
	glalie: {
		inherit: true,
		types: ["Ice", "Bone"],
		baseStats: {hp: 80, atk: 95, def: 80, spa: 95, spd: 80, spe: 80},
		abilities: {0: "Moody", 1: "Ice Body", H: "Filter"},
	},
	sealeo: {
		inherit: true,
		baseStats: {hp: 90, atk: 60, def: 75, spa: 75, spd: 75, spe: 45},
	},
	walrein: {
		inherit: true,
		baseStats: {hp: 120, atk: 90, def: 90, spa: 95, spd: 98, spe: 65},
	},
	clamperl: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Rattled"},
	},
	huntail: {
		inherit: true,
		types: ["Water", "Fear"],
		baseStats: {hp: 65, atk: 108, def: 105, spa: 94, spd: 75, spe: 72},
		abilities: {0: "Swift Swim", 1: "Intimidate"},
	},
	gorebyss: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 85, atk: 87, def: 105, spa: 117, spd: 85, spe: 53},
		abilities: {0: "Swift Swim", 1: "Siphon"},
	},
	relicanth: {
		inherit: true,
		baseStats: {hp: 100, atk: 90, def: 130, spa: 55, spd: 85, spe: 55},
		abilities: {0: "Marvel Scale", 1: "Rock Head", H: "Multiscale"},
	},
	luvdisc: {
		inherit: true,
		types: ["Water", "Heart"],
		baseStats: {hp: 100, atk: 50, def: 75, spa: 65, spd: 75, spe: 120},
		abilities: {0: "Swift Swim", 1: "Cute Charm"},
	},
	bagon: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sheer Force"},
	},
	shelgon: {
		inherit: true,
		types: ["Dragon", "Bone"],
		abilities: {0: "Rock Head", 1: "Overcoat", H: "Filter"},
	},
	salamence: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Moxie"},
	},
	beldum: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Rock Head", H: "Levitate"},
	},
	metang: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Analytic", H: "Levitate"},
	},
	metagross: {
		inherit: true,
		abilities: {0: "Download", 1: "Analytic", H: "Clear Body"},
	},
	regirock: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Filter", H: "Sand Stream"},
	},
	regice: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Filter", H: "Snow Warning"},
	},
	registeel: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Filter", H: "Magnet Pull"},
	},
	latias: {
		inherit: true,
		abilities: {0: "Levitate", H: "Plus"},
	},
	latios: {
		inherit: true,
		abilities: {0: "Levitate", H: "Minus"},
	},
	rayquaza: {
		inherit: true,
		abilities: {0: "Cloud Nine"},
	},
	jirachi: {
		inherit: true,
		types: ["Steel", "Cosmic"],
	},
	deoxys: {
		inherit: true,
		types: ["Psychic", "Cosmic"],
	},
	turtwig: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Overgrow"},
	},
	grotle: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Overgrow"},
	},
	torterra: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Sap Sipper", H: "Overgrow"},
	},
	chimchar: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Iron Fist"},
	},
	monferno: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Iron Fist"},
	},
	infernape: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Iron Fist"},
	},
	piplup: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Defiant"},
	},
	prinplup: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Defiant"},
	},
	empoleon: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Defiant"},
	},
	starly: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Big Pecks"},
	},
	staravia: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Reckless"},
	},
	staraptor: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Reckless"},
	},
	bibarel: {
		inherit: true,
		baseStats: {hp: 81, atk: 89, def: 70, spa: 55, spd: 75, spe: 101},
		abilities: {0: "Simple", 1: "Moody", H: "Adaptability"},
	},
	kricketot: {
		inherit: true,
		types: ["Bug", "Sound"],
		baseStats: {hp: 37, atk: 25, def: 41, spa: 35, spd: 51, spe: 25},
		abilities: {0: "Shed Skin", 1: "Swarm"},
	},
	kricketune: {
		inherit: true,
		types: ["Bug", "Sound"],
		baseStats: {hp: 77, atk: 95, def: 51, spa: 95, spd: 98, spe: 105},
		abilities: {0: "Technician", 1: "No Guard"},
	},
	luxray: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 90},
		abilities: {0: "Frisk", 1: "Intimidate"},
	},
	budew: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Leaf Guard"},
	},
	roserade: {
		inherit: true,
		baseStats: {hp: 60, atk: 80, def: 55, spa: 125, spd: 105, spe: 90},
		abilities: {0: "Natural Cure", 1: "Poison Touch"},
	},
	cranidos: {
		inherit: true,
		types: ["Rock", "Bone"],
	},
	rampardos: {
		inherit: true,
		types: ["Rock", "Bone"],
		baseStats: {hp: 100, atk: 165, def: 73, spa: 65, spd: 60, spe: 78},
		abilities: {0: "Mold Breaker", 1: "Rock Head", H: "Reckless"},
	},
	bastiodon: {
		inherit: true,
		baseStats: {hp: 70, atk: 63, def: 168, spa: 47, spd: 138, spe: 30},
	},
	burmy: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Overcoat"},
	},
	wormadam: {
		inherit: true,
		baseStats: {hp: 86, atk: 59, def: 95, spa: 99, spd: 125, spe: 46},
		abilities: {0: "Anticipation", 1: "Overcoat", H: "Filter"},
	},
	mothim: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 50, spa: 110, spd: 50, spe: 120},
		abilities: {0: "Tinted Lens", H: "Flash Fire"},
	},
	combee: {
		inherit: true,
		abilities: {0: "Hustle", 1: "Honey Gather"},
	},
	vespiquen: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 90, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
		abilities: {0: "Levitate", 1: "Honey Gather", H: "Dazzling"},
	},
	pachirisu: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Pickup", H: "Ionate"},
	},
	buizel: {
		inherit: true,
		baseStats: {hp: 55, atk: 65, def: 35, spa: 60, spd: 30, spe: 90},
		abilities: {0: "Swift Swim", 1: "Sheer Force"},
	},
	floatzel: {
		inherit: true,
		baseStats: {hp: 85, atk: 105, def: 55, spa: 85, spd: 50, spe: 120},
		abilities: {0: "Swift Swim", 1: "Sheer Force"},
	},
	cherrim: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 70, spa: 92, spd: 78, spe: 90},
	},
	ambipom: {
		inherit: true,
		abilities: {0: "Technician", 1: "Skill Link"},
	},
	drifloon: {
		inherit: true,
		abilities: {0: "Flare Boost", 1: "Unburden"},
	},
	drifblim: {
		inherit: true,
		abilities: {0: "Flare Boost", 1: "Unburden", H: "Flash Fire"},
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Magic"],
		baseStats: {hp: 65, atk: 65, def: 65, spa: 115, spd: 115, spe: 115},
		abilities: {0: "Levitate", H: "Magic Guard"},
	},
	honchkrow: {
		inherit: true,
		abilities: {0: "Moxie", 1: "Super Luck", H: "Insomnia"},
	},
	purugly: {
		inherit: true,
		baseStats: {hp: 81, atk: 82, def: 74, spa: 64, spd: 59, spe: 112},
	},
	chingling: {
		inherit: true,
		types: ["Psychic", "Sound"],
		abilities: {0: "Levitate", H: "Cute Charm"},
	},
	stunky: {
		inherit: true,
		abilities: {0: "Stench", 1: "Keen Eye"},
	},
	skuntank: {
		inherit: true,
		baseStats: {hp: 115, atk: 95, def: 70, spa: 71, spd: 60, spe: 85},
		abilities: {0: "Stench", 1: "Keen Eye", H: "Aftermath"},
	},
	bronzor: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Heatproof", H: "Drizzle"},
	},
	bronzong: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Heatproof", H: "Drizzle"},
	},
	mimejr: {
		inherit: true,
		types: ["Psychic", "Fairy"],
	},
	chatot: {
		inherit: true,
		types: ["Sound", "Flying"],
		baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 72, spe: 97},
		abilities: {0: "Cacophony", 1: "Big Pecks", H: "Soundproof"},
	},
	riolu: {
		inherit: true,
		baseStats: {hp: 40, atk: 70, def: 30, spa: 35, spd: 40, spe: 60},
	},
	lucario: {
		inherit: true,
		baseStats: {hp: 60, atk: 110, def: 60, spa: 115, spd: 70, spe: 90},
	},
	hippowdon: {
		inherit: true,
		baseStats: {hp: 110, atk: 112, def: 118, spa: 68, spd: 74, spe: 47},
	},
	carnivine: {
		inherit: true,
		baseStats: {hp: 84, atk: 100, def: 82, spa: 90, spd: 82, spe: 46},
		abilities: {0: "Flytrap", H: "Arena Trap"},
	},
	finneon: {
		inherit: true,
		baseStats: {hp: 79, atk: 29, def: 66, spa: 69, spd: 64, spe: 71},
	},
	lumineon: {
		inherit: true,
		types: ["Water", "Light"],
		baseStats: {hp: 100, atk: 35, def: 86, spa: 89, spd: 100, spe: 97},
		abilities: {0: "Illuminate", 1: "Serene Grace", H: "Storm Drain"},
	},
	weavile: {
		inherit: true,
		abilities: {0: "Technician", 1: "Snow Rush"},
	},
	lickilicky: {
		inherit: true,
		types: ["Normal", "Food"],
		baseStats: {hp: 115, atk: 90, def: 95, spa: 80, spd: 95, spe: 50},
	},
	rhyperior: {
		inherit: true,
		baseStats: {hp: 120, atk: 140, def: 140, spa: 75, spd: 55, spe: 40},
		abilities: {0: "Mold Breaker", 1: "Filter"},
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 125, def: 67, spa: 95, spd: 85, spe: 95},
		abilities: {0: "Motor Drive", 1: "Iron Fist", H: "Insomnia"},
	},
	magmortar: {
		inherit: true,
		types: ["Fire", "Dark"],
		abilities: {0: "Flame Body", 1: "Mega Launcher", H: "Magma Armor"},
	},
	togekiss: {
		inherit: true,
		types: ["Fairy", "Flying"],
	},
	yanmega: {
		inherit: true,
		baseStats: {hp: 86, atk: 76, def: 96, spa: 116, spd: 56, spe: 98},
	},
	glaceon: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 65, spa: 130, spd: 95, spe: 110},
		abilities: {0: "Snow Cloak", 1: "Snow Rush", H: "Serene Grace"},
	},
	porygonz: {
		inherit: true,
		types: ["Normal", "Cyber"],
	},
	gallade: {
		inherit: true,
		abilities: {0: "Steadfast", 1: "Justified"},
	},
	dusknoir: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 135, spa: 65, spd: 135, spe: 45},
		abilities: {0: "Cursed Body", 1: "Shadow Call", H: "Iron Fist"},
	},
	froslass: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 70, spa: 105, spd: 70, spe: 110},
		abilities: {0: "Cursed Body", 1: "Snow Rush", H: "Snow Warning"},
	},
	rotom: {
		inherit: true,
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	uxie: {
		inherit: true,
		types: ["Psychic", "Meme"],
		abilities: {0: "Levitate", H: "Cursed Body"},
	},
	mesprit: {
		inherit: true,
		types: ["Psychic", "Heart"],
		abilities: {0: "Levitate", H: "Synchronize"},
	},
	azelf: {
		inherit: true,
		types: ["Psychic", "Fairy"],
		abilities: {0: "Levitate", H: "Pride"},
	},
	dialga: {
		inherit: true,
		abilities: {0: "Pressure", H: "Levitate"},
	},
	palkia: {
		inherit: true,
		abilities: {0: "Pressure", H: "No Guard"},
	},
	heatran: {
		inherit: true,
		types: ["Magma", "Steel"],
	},
	regigigas: {
		inherit: true,
		abilities: {0: "Slow Start", H: "Normalize"},
	},
	giratina: {
		inherit: true,
		abilities: {0: "Pressure", H: "Cursed Body"},
	},
	cresselia: {
		inherit: true,
		types: ["Psychic", "Cosmic"],
		abilities: {0: "Levitate", H: "Healer"},
	},
	phione: {
		inherit: true,
		types: ["Water", "Fairy"],
		abilities: {0: "Hydration", H: "Clear Body"},
	},
	manaphy: {
		inherit: true,
		types: ["Water", "Light"],
		abilities: {0: "Hydration", H: "Isolation"},
	},
	darkrai: {
		inherit: true,
		types: ["Dark", "Cosmic"],
	},
	arceus: {
		inherit: true,
		baseStats: {hp: 130, atk: 130, def: 130, spa: 130, spd: 130, spe: 130},
	},
	snivy: {
		inherit: true,
		abilities: {0: "Contrary", 1: "Overgrow"},
	},
	servine: {
		inherit: true,
		abilities: {0: "Contrary", 1: "Overgrow", H: "Leaf Guard"},
	},
	serperior: {
		inherit: true,
		types: ["Grass", "Dragon"],
		abilities: {0: "Contrary", 1: "Overgrow", H: "Leaf Guard"},
	},
	tepig: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Blaze"},
	},
	pignite: {
		inherit: true,
		types: ["Fire", "Ground"],
		abilities: {0: "Thick Fat", 1: "Blaze"},
	},
	emboar: {
		inherit: true,
		types: ["Fire", "Ground"],
		abilities: {0: "Reckless", 1: "Blaze", H: "Thick Fat"},
	},
	oshawott: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Torrent"},
	},
	dewott: {
		inherit: true,
		types: ["Water", "Fighting"],
		abilities: {0: "Battle Armor", 1: "Torrent"},
	},
	samurott: {
		inherit: true,
		types: ["Water", "Fighting"],
		abilities: {0: "Insomnia", 1: "Torrent", H: "Battle Armor"},
	},
	watchog: {
		inherit: true,
		baseStats: {hp: 65, atk: 85, def: 69, spa: 60, spd: 69, spe: 77},
		abilities: {0: "Analytic", 1: "Keen Eye", H: "Intimidate"},
	},
	lillipup: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Pickup"},
	},
	purrloin: {
		inherit: true,
		abilities: {0: "Limber", 1: "Prankster"},
	},
	liepard: {
		inherit: true,
		abilities: {0: "Limber", 1: "Prankster", H: "Pounce"},
	},
	munna: {
		inherit: true,
		abilities: {0: "Forewarn", 1: "Synchronize", H: "Early Bird"},
	},
	musharna: {
		inherit: true,
		baseStats: {hp: 116, atk: 55, def: 85, spa: 106, spd: 107, spe: 29},
		abilities: {0: "Forewarn", 1: "Synchronize", H: "Early Bird"},
	},
	pidove: {
		inherit: true,
		baseStats: {hp: 50, atk: 36, def: 50, spa: 55, spd: 30, spe: 55},
	},
	tranquill: {
		inherit: true,
		baseStats: {hp: 62, atk: 50, def: 62, spa: 65, spd: 42, spe: 78},
	},
	unfezant: {
		inherit: true,
		baseStats: {hp: 90, atk: 65, def: 80, spa: 85, spd: 75, spe: 108},
	},
	zebstrika: {
		inherit: true,
		baseStats: {hp: 81, atk: 101, def: 63, spa: 80, spd: 63, spe: 116},
	},
	roggenrola: {
		inherit: true,
		baseStats: {hp: 55, atk: 75, def: 85, spa: 65, spd: 25, spe: 15},
		abilities: {0: "Sturdy", 1: "Weak Armor"},
	},
	boldore: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 105, spa: 95, spd: 40, spe: 20},
		abilities: {0: "Sturdy", 1: "Weak Armor"},
	},
	gigalith: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 130, spa: 135, spd: 70, spe: 25},
		abilities: {0: "Sturdy", 1: "Sand Stream"},
	},
	woobat: {
		inherit: true,
		baseStats: {hp: 65, atk: 45, def: 53, spa: 55, spd: 63, spe: 75},
		abilities: {0: "Simple"},
	},
	swoobat: {
		inherit: true,
		baseStats: {hp: 97, atk: 70, def: 65, spa: 87, spd: 85, spe: 114},
		abilities: {0: "Simple", H: "Fur Coat"},
	},
	audino: {
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp: 105, atk: 70, def: 111, spa: 70, spd: 111, spe: 50},
	},
	palpitoad: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Cacophony"},
	},
	seismitoad: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Cacophony", S: "Poison Touch"},
	},
	leavanny: {
		inherit: true,
		abilities: {0: "Overcoat", 1: "Chlorophyll", H: "Marvel Scale"},
	},
	venipede: {
		inherit: true,
		abilities: {0: "Poison Point", 1: "Speed Boost"},
	},
	whirlipede: {
		inherit: true,
		abilities: {0: "Poison Point", 1: "Speed Boost"},
	},
	scolipede: {
		inherit: true,
		abilities: {0: "Poison Point", 1: "Speed Boost"},
	},
	cottonee: {
		inherit: true,
		types: ["Grass", "Fairy"],
	},
	whimsicott: {
		inherit: true,
		types: ["Grass", "Fairy"],
	},
	lilligant: {
		inherit: true,
		types: ["Grass", "Heart"],
		baseStats: {hp: 75, atk: 60, def: 75, spa: 110, spd: 75, spe: 95},
	},
	basculin: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 65, spa: 85, spd: 65, spe: 107},
	},
	krookodile: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Moxie", H: "Anger Point", S: "Cold Blooded"},
	},
	darmanitan: {
		inherit: true,
		abilities: {0: "Sheer Force", 1: "Zen Mode"},
	},
	maractus: {
		inherit: true,
		types: ["Grass", "Sound"],
		abilities: {0: "Water Absorb", 1: "Oasis"},
	},
	dwebble: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Battle Armor"},
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 45},
		abilities: {0: "Sturdy", 1: "Battle Armor"},
	},
	tirtouga: {
		inherit: true,
		abilities: {0: "Filter", 1: "Sturdy", H: "Strong Jaw"},
	},
	carracosta: {
		inherit: true,
		abilities: {0: "Filter", 1: "Sturdy", H: "Strong Jaw"},
	},
	archen: {
		inherit: true,
		abilities: {0: "Defeatist", 1: "Klutz"},
	},
	archeops: {
		inherit: true,
		baseStats: {hp: 76, atk: 140, def: 65, spa: 115, spd: 65, spe: 113},
		abilities: {0: "Defeatist", H: "Klutz"},
	},
	garbodor: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 102, spa: 60, spd: 102, spe: 75},
	},
	zorua: {
		inherit: true,
		abilities: {0: "Trace"},
	},
	zoroark: {
		inherit: true,
		abilities: {0: "Trace"},
	},
	cinccino: {
		inherit: true,
		baseStats: {hp: 80, atk: 95, def: 75, spa: 65, spd: 60, spe: 120},
		abilities: {0: "Skill Link", 1: "Technician", H: "Fur Coat"},
	},
	gothita: {
		inherit: true,
		types: ["Psychic", "Cosmic"],
		abilities: {0: "Frisk", H: "Shadow Tag", S: "Shadow Tag"},
	},
	gothorita: {
		inherit: true,
		types: ["Psychic", "Cosmic"],
		abilities: {0: "Frisk", 1: "Shadow Tag"},
	},
	gothitelle: {
		inherit: true,
		types: ["Psychic", "Cosmic"],
		abilities: {0: "Frisk", 1: "Shadow Tag"},
	},
	ducklett: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Big Pecks", H: "Water Absorb"},
	},
	swanna: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 123, spa: 90, spd: 83, spe: 98},
		abilities: {0: "Serene Grace", 1: "Competitive", H: "Drizzle"},
	},
	vanillite: {
		inherit: true,
		types: ["Ice", "Food"],
		abilities: {0: "Ice Body", 1: "Snow Cloak"},
	},
	vanillish: {
		inherit: true,
		types: ["Ice", "Food"],
		abilities: {0: "Ice Body", 1: "Snow Cloak"},
	},
	vanilluxe: {
		inherit: true,
		types: ["Ice", "Food"],
		abilities: {0: "Ice Body", 1: "Snow Warning"},
	},
	emolga: {
		inherit: true,
		baseStats: {hp: 55, atk: 85, def: 60, spa: 85, spd: 60, spe: 103},
	},
	escavalier: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Battle Armor"},
	},
	alomomola: {
		inherit: true,
		baseStats: {hp: 165, atk: 75, def: 100, spa: 40, spd: 85, spe: 65},
	},
	ferroseed: {
		inherit: true,
		abilities: {0: "Rough Skin", H: "Stench"},
	},
	ferrothorn: {
		inherit: true,
		abilities: {0: "Rough Skin", H: "Stench"},
	},
	klink: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "No Guard", H: "Simple"},
	},
	klang: {
		inherit: true,
		abilities: {0: "Levitate", 1: "No Guard", H: "Simple"},
	},
	klinklang: {
		inherit: true,
		types: ["Steel", "Tech"],
		abilities: {0: "Levitate", 1: "No Guard", H: "Simple"},
	},
	tynamo: {
		inherit: true,
		abilities: {0: "Levitate", H: "Siphon"},
	},
	eelektrik: {
		inherit: true,
		baseStats: {hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 70},
		abilities: {0: "Levitate", H: "Siphon"},
	},
	eelektross: {
		inherit: true,
		baseStats: {hp: 85, atk: 115, def: 80, spa: 115, spd: 90, spe: 100},
		abilities: {0: "Levitate", H: "Siphon"},
	},
	elgyem: {
		inherit: true,
		types: ["Cosmic"],
		baseStats: {hp: 55, atk: 55, def: 55, spa: 90, spd: 85, spe: 30},
		abilities: {0: "Analytic", 1: "Synchronize", H: "Levitate"},
	},
	beheeyem: {
		inherit: true,
		types: ["Cosmic", "Psychic"],
		baseStats: {hp: 90, atk: 75, def: 95, spa: 125, spd: 125, spe: 30},
		abilities: {0: "Analytic", 1: "Synchronize", H: "Levitate"},
	},
	fraxure: {
		inherit: true,
		abilities: {0: "Rivalry", 1: "Mold Breaker", H: "Technician"},
	},
	haxorus: {
		inherit: true,
		types: ["Dragon", "Steel"],
		abilities: {0: "Rivalry", 1: "Mold Breaker", H: "Technician"},
	},
	cubchoo: {
		inherit: true,
		abilities: {0: "Winter Force", 1: "Rattled"},
	},
	beartic: {
		inherit: true,
		baseStats: {hp: 95, atk: 130, def: 90, spa: 70, spd: 90, spe: 71},
		abilities: {0: "Winter Force", 1: "Swift Swim", H: "Snow Warning"},
	},
	cryogonal: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 50, spa: 95, spd: 135, spe: 117},
		abilities: {0: "Levitate", H: "Snow Warning"},
	},
	shelmet: {
		inherit: true,
		abilities: {0: "Hydration", 1: "Battle Armor"},
	},
	accelgor: {
		inherit: true,
		types: ["Bug", "Dark"],
		baseStats: {hp: 80, atk: 70, def: 40, spa: 110, spd: 60, spe: 145},
		abilities: {0: "Hydration", 1: "Unburden"},
	},
	stunfisk: {
		inherit: true,
		abilities: {0: "Static", 1: "Regenerator"},
	},
	druddigon: {
		inherit: true,
		baseStats: {hp: 82, atk: 120, def: 90, spa: 60, spd: 90, spe: 48},
	},
	golett: {
		inherit: true,
		baseStats: {hp: 60, atk: 74, def: 55, spa: 35, spd: 55, spe: 35},
		abilities: {0: "Iron Fist", 1: "No Guard", H: "Klutz"},
	},
	golurk: {
		inherit: true,
		baseStats: {hp: 105, atk: 130, def: 100, spa: 55, spd: 90, spe: 55},
		abilities: {0: "Iron Fist", 1: "No Guard", H: "Klutz"},
	},
	braviary: {
		inherit: true,
		abilities: {0: "Mold Breaker", 1: "Sheer Force"},
	},
	vullaby: {
		inherit: true,
		types: ["Bone", "Flying"],
	},
	mandibuzz: {
		inherit: true,
		types: ["Bone", "Flying"],
	},
	heatmor: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 76, spa: 105, spd: 76, spe: 65},
		abilities: {0: "White Smoke", 1: "Flash Fire", H: "Gluttony"},
	},
	durant: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Truant"},
	},
	hydreigon: {
		inherit: true,
		baseStats: {hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 99},
		abilities: {0: "Levitate", H: "Hustle"},
	},
	larvesta: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 65, spa: 65, spd: 65, spe: 70},
	},
	tornadus: {
		inherit: true,
		types: ["Wind", "Flying"],
	},
	reshiram: {
		inherit: true,
		abilities: {0: "Mold Breaker"},
	},
	zekrom: {
		inherit: true,
		abilities: {0: "Mold Breaker"},
	},
	kyurem: {
		inherit: true,
		abilities: {0: "Snow Warning", 1: "Pressure"},
	},
	meloetta: {
		inherit: true,
		types: ["Sound", "Psychic"],
	},
	chespin: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Filter"},
	},
	quilladin: {
		inherit: true,
		types: ["Grass", "Fighting"],
	},
	chesnaught: {
		inherit: true,
		baseStats: {hp: 88, atk: 107, def: 132, spa: 54, spd: 85, spe: 64},
		abilities: {0: "Overgrow", 1: "Bulletproof", H: "Filter"},
	},
	fennekin: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Forewarn"},
	},
	braixen: {
		inherit: true,
		types: ["Fire", "Magic"],
		baseStats: {hp: 59, atk: 59, def: 58, spa: 93, spd: 70, spe: 73},
		abilities: {0: "Blaze", 1: "Forewarn"},
	},
	delphox: {
		inherit: true,
		types: ["Fire", "Magic"],
		abilities: {0: "Blaze", 1: "Forewarn", H: "Magic Guard"},
	},
	froakie: {
		inherit: true,
		abilities: {0: "Protean", 1: "Torrent"},
	},
	frogadier: {
		inherit: true,
		types: ["Water", "Dark"],
		abilities: {0: "Protean", 1: "Torrent"},
	},
	greninja: {
		inherit: true,
		abilities: {0: "Protean", 1: "Torrent"},
	},
	bunnelby: {
		inherit: true,
		abilities: {0: "Pickup", 1: "Huge Power"},
	},
	diggersby: {
		inherit: true,
		abilities: {0: "Pickup", 1: "Huge Power", H: "Sturdy"},
	},
	fletchinder: {
		inherit: true,
		abilities: {0: "Gale Wings"},
	},
	talonflame: {
		inherit: true,
		abilities: {0: "Gale Wings"},
	},
	vivillon: {
		inherit: true,
		types: ["Bug", "Fairy"],
		baseStats: {hp: 83, atk: 52, def: 50, spa: 94, spd: 74, spe: 89},
		abilities: {0: "Pixilate", 1: "Compound Eyes"},
	},
	litleo: {
		inherit: true,
		types: ["Fire", "Sound"],
		abilities: {0: "Rivalry", 1: "Pride"},
	},
	pyroar: {
		inherit: true,
		types: ["Fire", "Sound"],
		baseStats: {hp: 86, atk: 75, def: 75, spa: 112, spd: 70, spe: 106},
		abilities: {0: "Rivalry", 1: "Pride"},
	},
	flabebe: {
		inherit: true,
		abilities: {0: "Flower Veil"},
	},
	floette: {
		inherit: true,
		abilities: {0: "Flower Veil"},
	},
	florges: {
		inherit: true,
		abilities: {0: "Flower Veil"},
	},
	skiddo: {
		inherit: true,
		abilities: {0: "Sap Sipper", H: "Rock Head"},
	},
	gogoat: {
		inherit: true,
		types: ["Grass", "Rock"],
		baseStats: {hp: 123, atk: 100, def: 95, spa: 97, spd: 81, spe: 68},
		abilities: {0: "Sap Sipper", H: "Fur Coat"},
	},
	pangoro: {
		inherit: true,
		baseStats: {hp: 95, atk: 124, def: 98, spa: 69, spd: 71, spe: 58},
	},
	espurr: {
		inherit: true,
		abilities: {0: "Breakdown", 1: "Infiltrator"},
	},
	meowstic: {
		inherit: true,
		baseStats: {hp: 74, atk: 48, def: 76, spa: 93, spd: 81, spe: 114},
	},
	aegislash: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 140, spa: 50, spd: 140, spe: 60},
		abilities: {0: "Hyper Cutter"},
	},
	spritzee: {
		inherit: true,
		abilities: {0: "Healer", 1: "Aroma Veil", H: "Natural Cure"},
	},
	aromatisse: {
		inherit: true,
		types: ["Fairy", "Poison"],
		abilities: {0: "Healer", 1: "Aroma Veil", H: "Natural Cure"},
	},
	swirlix: {
		inherit: true,
		types: ["Fairy", "Food"],
		abilities: {0: "Sweet Veil", 1: "Unburden", H: "Oblivious"},
	},
	slurpuff: {
		inherit: true,
		types: ["Fairy", "Food"],
		baseStats: {hp: 95, atk: 80, def: 86, spa: 85, spd: 75, spe: 72},
		abilities: {0: "Sweet Veil", 1: "Unburden", H: "Oblivious"},
	},
	inkay: {
		inherit: true,
		abilities: {0: "Contrary", 1: "Prankster"},
	},
	malamar: {
		inherit: true,
		abilities: {0: "Contrary", 1: "Infiltrator"},
	},
	dragalge: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 75},
		abilities: {0: "Adaptability"},
	},
	clawitzer: {
		inherit: true,
		types: ["Water", "Fire"],
	},
	helioptile: {
		inherit: true,
		abilities: {0: "Dry Skin", 1: "Solar Power"},
	},
	heliolisk: {
		inherit: true,
		baseStats: {hp: 62, atk: 75, def: 52, spa: 110, spd: 94, spe: 110},
		abilities: {0: "Dry Skin", 1: "Solar Power", H: "Sand Veil"},
	},
	amaura: {
		inherit: true,
		abilities: {0: "Refrigerate", 1: "Ice Body", H: "Simple"},
	},
	aurorus: {
		inherit: true,
		abilities: {0: "Refrigerate", 1: "Snow Warning", H: "Simple"},
	},
	sylveon: {
		inherit: true,
		abilities: {0: "Cute Charm", 1: "Pixilate", H: "Adaptability"},
	},
	dedenne: {
		inherit: true,
		abilities: {0: "Plus", 1: "Pickup", H: "Minus"},
	},
	goomy: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Gooey", H: "Hydration"},
	},
	sliggoo: {
		inherit: true,
		types: ["Dragon", "Poison"],
		abilities: {0: "Sap Sipper", 1: "Gooey", H: "Hydration"},
	},
	goodra: {
		inherit: true,
		types: ["Dragon", "Poison"],
		abilities: {0: "Sap Sipper", 1: "Gooey", H: "Hydration"},
	},
	klefki: {
		inherit: true,
		abilities: {0: "Prankster"},
	},
	avalugg: {
		inherit: true,
		baseStats: {hp: 100, atk: 117, def: 184, spa: 44, spd: 46, spe: 28},
		abilities: {0: "Sturdy", 1: "Ice Body", H: "Own Tempo"},
	},
	noibat: {
		inherit: true,
		types: ["Sound", "Dragon"],
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Soundproof"},
	},
	noivern: {
		inherit: true,
		types: ["Sound", "Dragon"],
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Soundproof"},
	},
	xerneas: {
		inherit: true,
		abilities: {0: "Adaptability"},
	},
	yveltal: {
		inherit: true,
		abilities: {0: "Shadow Call"},
	},
	hoopa: {
		inherit: true,
		abilities: {0: "Prankster"},
	},
	rowlet: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Unburden"},
	},
	dartrix: {
		inherit: true,
		baseStats: {hp: 78, atk: 75, def: 75, spa: 70, spd: 70, spe: 62},
		abilities: {0: "Overgrow", H: "Unburden"},
	},
	decidueye: {
		inherit: true,
		baseStats: {hp: 78, atk: 107, def: 73, spa: 100, spd: 100, spe: 74},
		abilities: {0: "Compound Eyes", 1: "Sniper", H: "Unburden"},
	},
	litten: {
		inherit: true,
		abilities: {0: "Blaze", H: "Solar Power"},
	},
	incineroar: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 65},
		abilities: {0: "Intimidate", 1: "Blaze"},
	},
	popplio: {
		inherit: true,
		abilities: {0: "Torrent", H: "Rain Dish"},
	},
	brionne: {
		inherit: true,
		abilities: {0: "Torrent", H: "Rain Dish"},
	},
	primarina: {
		inherit: true,
		abilities: {0: "Cacophony", 1: "Soundproof", H: "Hydrate"},
	},
	pikipek: {
		inherit: true,
		baseStats: {hp: 35, atk: 75, def: 30, spa: 30, spd: 65, spe: 55},
		abilities: {0: "Keen Eye", 1: "Skill Link", H: "Big Pecks"},
	},
	trumbeak: {
		inherit: true,
		baseStats: {hp: 55, atk: 85, def: 50, spa: 50, spd: 75, spe: 70},
		abilities: {0: "Keen Eye", 1: "Skill Link", H: "Big Pecks"},
	},
	toucannon: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 105},
		abilities: {0: "Keen Eye", 1: "Skill Link", H: "Flame Body"},
	},
	yungoos: {
		inherit: true,
		baseStats: {hp: 48, atk: 30, def: 41, spa: 30, spd: 41, spe: 60},
		abilities: {0: "Strong Jaw", 1: "Adaptability", H: "Quick Feet"},
	},
	gumshoos: {
		inherit: true,
		baseStats: {hp: 88, atk: 110, def: 80, spa: 55, spd: 60, spe: 45},
		abilities: {0: "Strong Jaw", 1: "Analytic"},
	},
	grubbin: {
		inherit: true,
		abilities: {0: "Swarm", H: "Run Away"},
	},
	charjabug: {
		inherit: true,
		abilities: {0: "Static", H: "Motor Drive"},
	},
	vikavolt: {
		inherit: true,
		baseStats: {hp: 77, atk: 70, def: 80, spa: 145, spd: 75, spe: 100},
		abilities: {0: "Levitate", H: "Speed Boost"},
	},
	crabrawler: {
		inherit: true,
		baseStats: {hp: 47, atk: 88, def: 63, spa: 47, spd: 63, spe: 50},
		abilities: {0: "Iron Fist", 1: "Anger Point", H: "Hyper Cutter"},
	},
	crabominable: {
		inherit: true,
		baseStats: {hp: 97, atk: 138, def: 81, spa: 60, spd: 81, spe: 60},
		abilities: {0: "Iron Fist", 1: "Fur Coat", H: "Snow Rush"},
	},
	oricorio: {
		inherit: true,
		abilities: {0: "Insomnia"},
	},
	cutiefly: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Honey Gather", H: "Filter"},
	},
	ribombee: {
		inherit: true,
		baseStats: {hp: 80, atk: 55, def: 60, spa: 95, spd: 70, spe: 125},
		abilities: {0: "Shield Dust", 1: "Honey Gather", H: "Filter"},
	},
	rockruff: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Insomnia", H: "Quick Feet"},
	},
	dlycanroc: {
		inherit: true,
		types: ["Rock", "Light"],
		baseStats: {hp: 75, atk: 120, def: 65, spa: 55, spd: 65, spe: 112},
		abilities: {0: "Sheer Force", 1: "Sand Rush", H: "Quick Feet"},
	},
	nlycanroc: {
		inherit: true,
		types: ["Rock", "Fighting"],
		baseStats: {hp: 85, atk: 120, def: 86, spa: 38, spd: 81, spe: 82},
		abilities: {0: "No Guard", 1: "Insomnia", H: "Quick Feet"},
	},
	wishiwashi: {
		inherit: true,
		name: "Wishiwashi",
		baseForme: "School",
		baseStats: {hp: 80, atk: 140, def: 130, spa: 140, spd: 135, spe: 40},
		abilities: {0: "Water Veil"},
		heightm: 8.2,
		weightkg: 78.6,
		color: "Blue",
		eggGroups: ["Water 2"],
		otherFormes: ["Wishiwashi-Solo"],
		formeOrder: ["Wishiwashi", "Wishiwashi-Solo"],
	},
	wishiwashisolo: {
		num: 746,
		name: "Wishiwashi-Solo",
		baseSpecies: "Wishiwashi",
		forme: "Solo",
		types: ["Water"],
		baseStats: {hp: 80, atk: 20, def: 20, spa: 25, spd: 25, spe: 70},
		abilities: {0: "Water Veil"},
		heightm: 0.2,
		weightkg: 0.3,
		color: "Blue",
		eggGroups: ["Water 2"],
		requiredAbility: "Water Veil",
		battleOnly: "Wishiwashi",
	},
	mareanie: {
		inherit: true,
		types: ["Water", "Poison"],
		baseStats: {hp: 50, atk: 53, def: 62, spa: 52, spd: 45, spe: 43},
		abilities: {0: "Limber", 1: "Regenerator", H: "Merciless"},
	},
	toxapex: {
		inherit: true,
		types: ["Water", "Poison"],
		abilities: {0: "Limber", 1: "Merciless", H: "Regenerator"},
	},
	mudsdale: {
		inherit: true,
		baseStats: {hp: 100, atk: 125, def: 100, spa: 45, spd: 85, spe: 70},
	},
	dewpider: {
		inherit: true,
		abilities: {0: "Water Veil", H: "Rain Dish"},
	},
	araquanid: {
		inherit: true,
		abilities: {0: "Water Veil", H: "Rain Dish"},
	},
	fomantis: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Contrary", H: "Regenerator"},
	},
	lurantis: {
		inherit: true,
		baseStats: {hp: 70, atk: 105, def: 90, spa: 100, spd: 90, spe: 45},
		abilities: {0: "Leaf Guard", 1: "Contrary", H: "Regenerator"},
	},
	morelull: {
		inherit: true,
		abilities: {0: "Effect Spore", 1: "Rain Dish", H: "Illuminate"},
	},
	shiinotic: {
		inherit: true,
		baseStats: {hp: 100, atk: 45, def: 80, spa: 90, spd: 100, spe: 30},
		abilities: {0: "Effect Spore", 1: "Rain Dish", H: "Illuminate"},
	},
	salandit: {
		inherit: true,
		types: ["Fire", "Poison"],
		abilities: {0: "Scrappy"},
	},
	salazzle: {
		inherit: true,
		types: ["Fire", "Poison"],
		abilities: {0: "Scrappy", H: "Acid Rush"},
	},
	stufful: {
		inherit: true,
		abilities: {0: "Fur Coat", 1: "Cute Charm", H: "Klutz"},
	},
	bewear: {
		inherit: true,
		abilities: {0: "Fur Coat", 1: "Unnerve", H: "Klutz"},
	},
	bounsweet: {
		inherit: true,
		abilities: {0: "Oblivious", 1: "Leaf Guard"},
	},
	steenee: {
		inherit: true,
		abilities: {0: "Oblivious", 1: "Leaf Guard"},
	},
	tsareena: {
		inherit: true,
		baseStats: {hp: 78, atk: 120, def: 100, spa: 70, spd: 98, spe: 82},
		abilities: {0: "Dazzling", 1: "Furious Feet"},
	},
	comfey: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Prankster", H: "Healer"},
	},
	oranguru: {
		inherit: true,
		abilities: {0: "Inner Focus", H: "Sap Sipper"},
	},
	passimian: {
		inherit: true,
		baseStats: {hp: 100, atk: 120, def: 90, spa: 40, spd: 60, spe: 85},
		abilities: {0: "Defiant", H: "Inner Focus"},
	},
	wimpod: {
		inherit: true,
		abilities: {0: "Defeatist", H: "Rain Dish"},
	},
	golisopod: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 140, spa: 60, spd: 90, spe: 50},
		abilities: {0: "Guts", 1: "Battle Armor", H: "Intimidate"},
	},
	sandygast: {
		inherit: true,
		abilities: {0: "Water Absorb"},
	},
	palossand: {
		inherit: true,
		baseStats: {hp: 85, atk: 75, def: 110, spa: 100, spd: 85, spe: 35},
		abilities: {0: "Water Absorb"},
	},
	pyukumuku: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 130, spa: 40, spd: 130, spe: 5},
		abilities: {0: "Aftermath", 1: "Unaware", H: "Hydration"},
	},
	silvally: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 95, spa: 100, spd: 95, spe: 100},
		abilities: {0: "Multitype"},
	},
	minior: {
		inherit: true,
		types: ["Flying", "Rock"],
		baseStats: {hp: 60, atk: 60, def: 125, spa: 60, spd: 125, spe: 60},
		abilities: {0: "Zen Mode", H: "Moody"},
	},
	komala: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 90, spa: 85, spd: 75, spe: 65},
		abilities: {0: "Early Bird"},
	},
	turtonator: {
		inherit: true,
		abilities: {0: "Battle Armor", H: "Sheer Force"},
	},
	togedemaru: {
		inherit: true,
		baseStats: {hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 101},
		abilities: {0: "Rough Skin", 1: "Lightning Rod"},
	},
	mimikyu: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 95, spa: 50, spd: 105, spe: 96},
		abilities: {0: "Multiscale", H: "Cursed Body"},
	},
	bruxish: {
		inherit: true,
		baseStats: {hp: 70, atk: 115, def: 75, spa: 70, spd: 75, spe: 105},
		abilities: {0: "Strong Jaw", 1: "Dazzling"},
	},
	drampa: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Berserk"},
	},
	dhelmise: {
		inherit: true,
		abilities: {0: "Metalworker", H: "Heatproof"},
	},
	jangmoo: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Bulletproof"},
	},
	hakamoo: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Bulletproof"},
	},
	kommoo: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Bulletproof"},
	},
	tapukoko: {
		inherit: true,
		abilities: {0: "Inner Focus", H: "Anger Point"},
	},
	tapulele: {
		inherit: true,
		abilities: {0: "Cute Charm", H: "Magic Guard"},
	},
	tapubulu: {
		inherit: true,
		abilities: {0: "Anger Point", H: "Chlorophyll"},
	},
	tapufini: {
		inherit: true,
		abilities: {0: "Rain Dish"},
	},
	cosmog: {
		inherit: true,
		types: ["Cosmic"],
		baseStats: {hp: 43, atk: 60, def: 41, spa: 60, spd: 41, spe: 67},
		abilities: {0: "Unaware", H: "Run Away"},
	},
	cosmoem: {
		inherit: true,
		types: ["Cosmic"],
		baseStats: {hp: 43, atk: 30, def: 131, spa: 30, spd: 131, spe: 37},
		abilities: {0: "Sturdy", H: "Filter"},
	},
	solgaleo: {
		inherit: true,
		types: ["Cosmic", "Steel"],
		abilities: {0: "Clear Body", H: "Drought"},
	},
	lunala: {
		inherit: true,
		types: ["Cosmic", "Ghost"],
		abilities: {0: "Multiscale", H: "Shadow Call"},
	},
	nihilego: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Suction Cups"},
	},
	buzzwole: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Siphon"},
	},
	pheromosa: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Furious Feet"},
	},
	xurkitree: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Lightning Rod"},
	},
	celesteela: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Sap Sipper"},
	},
	kartana: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Hyper Cutter"},
	},
	guzzlord: {
		inherit: true,
		abilities: {0: "Beast Boost", H: "Skeptic"},
	},
	necrozma: {
		inherit: true,
		abilities: {0: "Filter", H: "Battle Armor"},
	},
	magearna: {
		inherit: true,
		abilities: {0: "Pride", H: "Plus"},
	},
	marshadow: {
		inherit: true,
		abilities: {0: "Technician", H: "Soul Eater"},
	},
	stakataka: {
		inherit: true,
		baseStats: {hp: 71, atk: 131, def: 211, spa: 54, spd: 101, spe: 13},
	},
	zeraora: {
		inherit: true,
		baseStats: {hp: 88, atk: 112, def: 75, spa: 102, spd: 80, spe: 140},
	},
	melmetal: {
		inherit: true,
		baseStats: {hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 55},
		abilities: {0: "Iron Fist", H: "Magnet Pull"},
	},
	grookey: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Mold Breaker"},
	},
	thwackey: {
		inherit: true,
		baseStats: {hp: 70, atk: 85, def: 70, spa: 60, spd: 80, spe: 80},
		abilities: {0: "Overgrow", H: "Mold Breaker"},
	},
	rillaboom: {
		inherit: true,
		types: ["Grass", "Sound"],
		abilities: {0: "Overgrow", H: "Mold Breaker"},
	},
	scorbunny: {
		inherit: true,
		abilities: {0: "Blaze", H: "Furious Feet"},
	},
	raboot: {
		inherit: true,
		baseStats: {hp: 60, atk: 76, def: 60, spa: 55, spd: 60, spe: 94},
		abilities: {0: "Blaze", H: "Furious Feet"},
	},
	cinderace: {
		inherit: true,
		types: ["Fire", "Electric"],
		baseStats: {hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 120},
		abilities: {0: "Blaze", H: "Furious Feet"},
	},
	sobble: {
		inherit: true,
		abilities: {0: "Torrent", H: "Defeatist"},
	},
	drizzile: {
		inherit: true,
		abilities: {0: "Torrent", H: "Unaware"},
	},
	inteleon: {
		inherit: true,
		types: ["Water", "Dark"],
	},
	skwovet: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Pickpocket"},
	},
	greedent: {
		inherit: true,
		baseStats: {hp: 133, atk: 105, def: 100, spa: 65, spd: 75, spe: 26},
		abilities: {0: "Gluttony", H: "Pickpocket"},
	},
	corvisquire: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Big Pecks", H: "Battle Armor"},
	},
	corviknight: {
		inherit: true,
		baseStats: {hp: 98, atk: 87, def: 105, spa: 54, spd: 85, spe: 67},
		abilities: {0: "Pressure", 1: "Unnerve", H: "Battle Armor"},
	},
	blipbug: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Compound Eyes", H: "Run Away"},
	},
	dottler: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Compound Eyes", H: "Wonder Skin"},
	},
	orbeetle: {
		inherit: true,
		baseStats: {hp: 60, atk: 45, def: 110, spa: 85, spd: 120, spe: 90},
		abilities: {0: "Tinted Lens", 1: "Wonder Skin", H: "Swarm"},
	},
	thievul: {
		inherit: true,
		baseStats: {hp: 70, atk: 90, def: 58, spa: 93, spd: 92, spe: 105},
		abilities: {0: "Unburden", H: "Detonator"},
	},
	gossifleur: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 65, spa: 40, spd: 70, spe: 10},
		abilities: {0: "Gooey", 1: "Regenerator", H: "Chlorophyll"},
	},
	eldegoss: {
		inherit: true,
		baseStats: {hp: 66, atk: 64, def: 100, spa: 85, spd: 128, spe: 72},
		abilities: {0: "Gooey", 1: "Regenerator", H: "Chlorophyll"},
	},
	wooloo: {
		inherit: true,
		baseStats: {hp: 42, atk: 40, def: 55, spa: 45, spd: 48, spe: 48},
		abilities: {0: "Fur Coat", 1: "Run Away", H: "Adaptability"},
	},
	dubwool: {
		inherit: true,
		baseStats: {hp: 72, atk: 81, def: 100, spa: 62, spd: 90, spe: 88},
		abilities: {0: "Fur Coat", 1: "Steadfast"},
	},
	chewtle: {
		inherit: true,
		abilities: {0: "Strong Jaw", 1: "Battle Armor", H: "Rough Skin"},
	},
	drednaw: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 95, spa: 48, spd: 70, spe: 74},
		abilities: {0: "Strong Jaw", 1: "Battle Armor", H: "Rough Skin"},
	},
	yamper: {
		inherit: true,
		abilities: {0: "Static", 1: "Pickup", H: "Plus"},
	},
	boltund: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 70, spa: 101, spd: 69, spe: 135},
		abilities: {0: "Static", 1: "Strong Jaw", H: "Speed Boost"},
	},
	rolycoly: {
		inherit: true,
		baseStats: {hp: 30, atk: 40, def: 55, spa: 45, spd: 55, spe: 30},
		abilities: {0: "Steam Engine", 1: "Flash Fire", H: "Heatproof"},
	},
	coalossal: {
		inherit: true,
		baseStats: {hp: 121, atk: 90, def: 128, spa: 86, spd: 96, spe: 40},
		abilities: {0: "Steam Engine", 1: "Flash Fire", H: "Filter"},
	},
	applin: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40},
		abilities: {0: "Gluttony"},
	},
	flapple: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 70, spa: 95, spd: 60, spe: 110},
		abilities: {0: "Levitate", 1: "Hustle", H: "Weak Armor"},
	},
	appletun: {
		inherit: true,
		abilities: {0: "Thick Fat", H: "Graze"},
	},
	silicobra: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Sand Veil", H: "Cold Blooded"},
	},
	sandaconda: {
		inherit: true,
		baseStats: {hp: 83, atk: 111, def: 139, spa: 75, spd: 83, spe: 86},
		abilities: {0: "Shed Skin", 1: "Sand Veil", H: "Cold Blooded"},
	},
	cramorant: {
		inherit: true,
		baseStats: {hp: 70, atk: 85, def: 75, spa: 120, spd: 75, spe: 90},
		abilities: {0: "Parental Bond", H: "Water Absorb"},
	},
	arrokuda: {
		inherit: true,
		baseStats: {hp: 51, atk: 90, def: 45, spa: 50, spd: 30, spe: 100},
		abilities: {0: "Swift Swim", H: "Mold Breaker"},
	},
	barraskewda: {
		inherit: true,
		abilities: {0: "Swift Swim", H: "Mold Breaker"},
	},
	toxel: {
		inherit: true,
		types: ["Poison", "Electric"],
		abilities: {0: "Rattled", 1: "Static", H: "Competitive"},
	},
	toxtricity: {
		inherit: true,
		types: ["Poison", "Electric"],
		baseStats: {hp: 75, atk: 98, def: 75, spa: 114, spd: 80, spe: 75},
		abilities: {0: "Cacophony", 1: "Plus"},
	},
	sizzlipede: {
		inherit: true,
		abilities: {0: "White Smoke", 1: "Flash Fire"},
	},
	centiskorch: {
		inherit: true,
		baseStats: {hp: 107, atk: 119, def: 83, spa: 104, spd: 106, spe: 102},
		abilities: {0: "White Smoke", 1: "Flash Fire"},
	},
	clobbopus: {
		inherit: true,
		abilities: {0: "Guts", 1: "Limber", H: "Infiltrator"},
	},
	grapploct: {
		inherit: true,
		baseStats: {hp: 95, atk: 123, def: 99, spa: 82, spd: 90, spe: 48},
		abilities: {0: "Guts", 1: "Limber", H: "Suction Cups"},
	},
	polteageist: {
		inherit: true,
		baseStats: {hp: 74, atk: 68, def: 71, spa: 144, spd: 119, spe: 73},
		abilities: {0: "Weak Armor", H: "Water Absorb"},
	},
	hattrem: {
		inherit: true,
		baseStats: {hp: 57, atk: 50, def: 65, spa: 86, spd: 76, spe: 49},
		abilities: {0: "Anticipation", 1: "Healer", H: "Anger Point"},
	},
	hatterene: {
		inherit: true,
		baseStats: {hp: 61, atk: 90, def: 96, spa: 136, spd: 103, spe: 44},
		abilities: {0: "Anticipation", 1: "Healer", H: "Anger Point"},
	},
	morgrem: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 45, spa: 75, spd: 55, spe: 70},
	},
	grimmsnarl: {
		inherit: true,
		baseStats: {hp: 95, atk: 120, def: 75, spa: 95, spd: 85, spe: 60},
		abilities: {0: "Prankster", 1: "Frisk", H: "Anger Point"},
	},
	obstagoon: {
		inherit: true,
		baseStats: {hp: 102, atk: 92, def: 109, spa: 63, spd: 105, spe: 101},
		abilities: {0: "Reckless", 1: "Guts", H: "Tough Claws"},
	},
	perrserker: {
		inherit: true,
		baseStats: {hp: 80, atk: 124, def: 110, spa: 59, spd: 68, spe: 58},
		abilities: {0: "Tough Claws", 1: "Battle Armor", H: "Berserker"},
	},
	cursola: {
		inherit: true,
		baseStats: {hp: 65, atk: 106, def: 63, spa: 156, spd: 133, spe: 35},
		abilities: {0: "Weak Armor", H: "Cursed Body"},
	},
	sirfetchd: {
		inherit: true,
		baseStats: {hp: 72, atk: 130, def: 105, spa: 50, spd: 82, spe: 105},
		abilities: {0: "Steadfast", H: "Guts"},
	},
	mrrime: {
		inherit: true,
		types: ["Psychic", "Ice"],
		abilities: {0: "Tangled Feet", 1: "Ice Body", H: "Truant"},
	},
	runerigus: {
		inherit: true,
		types: ["Ghost", "Ground"],
		abilities: {0: "Mummy"},
	},
	milcery: {
		inherit: true,
		types: ["Fairy", "Food"],
		baseStats: {hp: 68, atk: 49, def: 56, spa: 66, spd: 134, spe: 50},
		abilities: {0: "Sweet Veil", H: "Cute Charm"},
	},
	alcremie: {
		inherit: true,
		types: ["Fairy", "Food"],
		baseStats: {hp: 105, atk: 70, def: 89, spa: 90, spd: 134, spe: 62},
		abilities: {0: "Sweet Veil", H: "Cute Charm"},
	},
	falinks: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 100, spa: 70, spd: 60, spe: 85},
		abilities: {0: "Battle Armor", H: "Skill Link"},
	},
	pincurchin: {
		inherit: true,
		baseStats: {hp: 56, atk: 98, def: 109, spa: 102, spd: 90, spe: 21},
		abilities: {0: "Lightning Rod", H: "Rough Skin"},
	},
	snom: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Isolation", H: "Swarm"},
	},
	frosmoth: {
		inherit: true,
		baseStats: {hp: 81, atk: 75, def: 76, spa: 130, spd: 100, spe: 105},
		abilities: {0: "Shield Dust", 1: "Isolation", H: "Snow Warning"},
	},
	stonjourner: {
		inherit: true,
		baseStats: {hp: 100, atk: 125, def: 145, spa: 20, spd: 20, spe: 70},
		abilities: {0: "Victory Star"},
	},
	eiscue: {
		inherit: true,
		baseForme: "Standard",
		baseStats: {hp: 80, atk: 82, def: 176, spa: 70, spd: 130, spe: 55},
		abilities: {0: "Multiscale", H: "Ice Body"},
	},
	indeedee: {
		inherit: true,
		baseStats: {hp: 79, atk: 59, def: 68, spa: 107, spd: 116, spe: 98},
		abilities: {0: "Inner Focus", 1: "Synchronize", H: "Own Tempo"},
	},
	morpeko: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 68, spa: 70, spd: 68, spe: 97},
		abilities: {0: "Zen Mode", H: "Lightning Rod"},
	},
	cufant: {
		inherit: true,
		abilities: {0: "Sheer Force", H: "Battle Armor"},
	},
	copperajah: {
		inherit: true,
		baseStats: {hp: 122, atk: 130, def: 70, spa: 80, spd: 68, spe: 30},
		abilities: {0: "Sheer Force", H: "Lightning Rod", S: "Immunity"},
	},
	arctozolt: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Static", H: "Snow Rush"},
	},
	arctovish: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 100, spa: 90, spd: 55, spe: 80},
		abilities: {0: "Water Absorb", 1: "Ice Body", H: "Snow Rush"},
	},
	duraludon: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 115, spa: 120, spd: 65, spe: 95},
		abilities: {0: "Inner Focus", H: "Stamina"},
	},
	dreepy: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Rough Skin"},
	},
	drakloak: {
		inherit: true,
		baseStats: {hp: 68, atk: 80, def: 50, spa: 65, spd: 85, spe: 102},
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Rough Skin"},
	},
	dragapult: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Rough Skin"},
	},
	zacian: {
		inherit: true,
		types: ["Fairy", "Steel"],
		abilities: {0: "Justified"},
	},
	eternatus: {
		inherit: true,
		abilities: {0: "Pressure", H: "Beast Boost"},
	},
	kubfu: {
		inherit: true,
		abilities: {0: "Inner Focus", H: "Steadfast"},
	},
	zarude: {
		inherit: true,
		baseStats: {hp: 85, atk: 125, def: 90, spa: 105, spd: 80, spe: 127},
		abilities: {0: "Leaf Guard", H: "Sand Stream"},
	},
	solotl: {
		inherit: true,
		abilities: {0: "Regenerator", 1: "Insomnia", H: "Pickpocket"},
	},
	astrolotl: {
		inherit: true,
		baseStats: {hp: 68, atk: 48, def: 34, spa: 72, spd: 24, spe: 84},
		abilities: {0: "Regenerator", 1: "Insomnia", H: "Pickpocket"},
	},
	argalis: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Compound Eyes", H: "Magic Guard"},
	},
	aurumoth: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Compound Eyes", H: "Magic Guard"},
	},
	electrelk: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Lightning Rod"},
	},
	caribolt: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Lightning Rod"},
	},
	colossoil: {
		inherit: true,
		abilities: {0: "Guts", 1: "Unnerve", H: "Magic Bounce"},
	},
	crucibelle: {
		inherit: true,
		types: ["Rock", "Fairy"],
		abilities: {0: "Regenerator", H: "Mold Breaker"},
	},
	monohm: {
		inherit: true,
		types: ["Electric", "Dragon"],
		baseStats: {hp: 48, atk: 50, def: 68, spa: 62, spd: 40, spe: 60},
	},
	duohm: {
		inherit: true,
		types: ["Electric", "Dragon"],
		baseStats: {hp: 78, atk: 55, def: 88, spa: 82, spd: 55, spe: 60},
	},
	fidgit: {
		inherit: true,
		abilities: {0: "Unburden", 1: "Insomnia", H: "Frisk", S: "Builder"},
	},
	mumbao: {
		inherit: true,
		abilities: {0: "Solar Power", 1: "Trace", H: "Overcoat"},
	},
	jumbao: {
		inherit: true,
		abilities: {0: "Solar Power", 1: "Trace", H: "Overcoat"},
	},
	pluffle: {
		inherit: true,
		abilities: {0: "Natural Cure", H: "Friend Guard"},
	},
	kerfluffle: {
		inherit: true,
		abilities: {0: "Natural Cure", H: "Friend Guard"},
	},
	nohface: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Limber", H: "Iron Fist"},
	},
	protowatt: {
		inherit: true,
		baseStats: {hp: 80, atk: 64, def: 53, spa: 63, spd: 54, spe: 85},
	},
	brattler: {
		inherit: true,
		abilities: {0: "Harvest", 1: "Infiltrator", H: "Drought"},
	},
	miasmaw: {
		inherit: true,
		abilities: {0: "Mold Breaker", 1: "Hyper Cutter", H: "Compound Eyes"},
	},
	naviathan: {
		inherit: true,
		abilities: {0: "Water Veil", 1: "Heatproof", H: "Hydration"},
	},
	necturine: {
		inherit: true,
		abilities: {0: "Anticipation"},
	},
	necturna: {
		inherit: true,
		baseStats: {hp: 64, atk: 120, def: 100, spa: 85, spd: 120, spe: 81},
		abilities: {0: "Anticipation"},
	},
	pajantom: {
		inherit: true,
		abilities: {0: "Marvel Scale", H: "Early Bird"},
	},
	snugglow: {
		inherit: true,
		abilities: {0: "Storm Drain", 1: "Insomnia", H: "Clear Body"},
	},
	plasmanta: {
		inherit: true,
		abilities: {0: "Storm Drain", 1: "Insomnia", H: "Clear Body"},
	},
	embirch: {
		inherit: true,
		abilities: {0: "Reckless", 1: "Leaf Guard", H: "White Smoke"},
	},
	flarelm: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 95, spa: 75, spd: 70, spe: 70},
	},
	pyroak: {
		inherit: true,
		abilities: {0: "Reckless", 1: "Battle Armor", H: "White Smoke"},
		baseStats: {hp: 120, atk: 70, def: 105, spa: 95, spd: 90, spe: 60},
	},
	revenankh: {
		inherit: true,
		abilities: {0: "Shed Skin", 1: "Cloud Nine", H: "Iron Fist"},
	},
	snaelstrom: {
		inherit: true,
		baseStats: {hp: 91, atk: 94, def: 110, spa: 80, spd: 63, spe: 63},
	},
	rebble: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Filter", H: "Sniper"},
	},
	syclant: {
		inherit: true,
		abilities: {0: "Compound Eyes", 1: "Snow Cloak", H: "Ice Body"},
	},
	scratchet: {
		inherit: true,
		abilities: {0: "Scrappy", 1: "Prankster", H: "Insomnia"},
	},
	voodoom: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 80, spa: 105, spd: 80, spe: 110},
	},
};

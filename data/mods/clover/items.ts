export const Items: {[k: string]: ModdedItemData} = {
	abomasite: {
		inherit: true,
		isNonstandard: "Past",
	},
	absolite: {
		inherit: true,
		isNonstandard: "Past",
	},
	absorbbulb: {
		inherit: true,
		isNonstandard: "Future",
	},
	adamantorb: {
		inherit: true,
		isNonstandard: "Future",
	},
	adrenalineorb: {
		inherit: true,
		isNonstandard: "Future",
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: "Past",
	},
	aggronite: {
		inherit: true,
		isNonstandard: "Past",
	},
	aguavberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	airballoon: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: "Past",
	},
	aloraichiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	altarianite: {
		inherit: true,
		isNonstandard: "Past",
	},
	ampharosite: {
		inherit: true,
		isNonstandard: "Past",
	},
	apicotberry: {
		inherit: true,
		isNonstandard: null,
	},
	armorfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	aspearberry: {
		inherit: true,
		isNonstandard: null,
	},
	assaultvest: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: "Past",
	},
	babiriberry: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: "Past",
	},
	beastball: {
		inherit: true,
		isNonstandard: "Future",
	},
	beedrillite: {
		inherit: true,
		isNonstandard: "Past",
	},
	belueberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	berry: {
		inherit: true,
		isNonstandard: "Past",
	},
	berryjuice: {
		inherit: true,
		isNonstandard: null,
	},
	berrysweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	berserkgene: {
		inherit: true,
		isNonstandard: "Past",
	},
	bigroot: {
		inherit: true,
		onTryHeal(damage, target, source, effect) {
      const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap', 'livewire'];
      if (heals.includes(effect.id)) {
        return this.chainModify([5324, 4096]);
      }
    },
		isNonstandard: null,
	},
	bindingband: {
		inherit: true,
		isNonstandard: null,
	},
	bitterberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	blackbelt: {
		inherit: true,
		isNonstandard: null,
	},
	blackglasses: {
		inherit: true,
		isNonstandard: null,
	},
	blacksludge: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: "Past",
	},
	blazikenite: {
		inherit: true,
		isNonstandard: "Past",
	},
	blueorb: {
		inherit: true,
		isNonstandard: "Past",
	},
	blukberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	blunderpolicy: {
		inherit: true,
		isNonstandard: "Future",
	},
	bottlecap: {
		inherit: true,
		isNonstandard: null,
	},
	brightpowder: {
		inherit: true,
		isNonstandard: null,
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	buginiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	bugmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	burndrive: {
		inherit: true,
		isNonstandard: null,
	},
	burntberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	cameruptite: {
		inherit: true,
		isNonstandard: "Past",
	},
	cellbattery: {
		inherit: true,
		isNonstandard: "Future",
	},
	charcoal: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: "Past",
	},
	charizarditey: {
		inherit: true,
		isNonstandard: "Past",
	},
	chartiberry: {
		inherit: true,
		isNonstandard: null,
	},
	cheriberry: {
		inherit: true,
		isNonstandard: null,
	},
	cherishball: {
		inherit: true,
		isNonstandard: "Future",
	},
	chestoberry: {
		inherit: true,
		isNonstandard: null,
	},
	chilanberry: {
		inherit: true,
		isNonstandard: null,
	},
	chilldrive: {
		inherit: true,
		isNonstandard: null,
	},
	chippedpot: {
		inherit: true,
		isNonstandard: "Future",
	},
	choiceband: {
		inherit: true,
		isNonstandard: null,
	},
	choicescarf: {
		inherit: true,
		isNonstandard: null,
	},
	choicespecs: {
		inherit: true,
		isNonstandard: null,
	},
	chopleberry: {
		inherit: true,
		isNonstandard: null,
	},
	clawfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	cloversweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	cobaberry: {
		inherit: true,
		isNonstandard: null,
	},
	colburberry: {
		inherit: true,
		isNonstandard: null,
	},
	cornnberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	coverfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	crackedpot: {
		inherit: true,
		isNonstandard: "Future",
	},
	crucibellite: {
		inherit: true,
		isNonstandard: "Future",
	},
	custapberry: {
		inherit: true,
		isNonstandard: null,
	},
	damprock: {
		inherit: true,
		isNonstandard: null,
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	darkiniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	darkmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	dawnstone: {
		inherit: true,
		isNonstandard: "Future",
	},
	decidiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	deepseascale: {
		inherit: true,
		isNonstandard: "Future",
	},
	deepseatooth: {
		inherit: true,
		isNonstandard: "Future",
	},
	destinyknot: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: "Past",
	},
	diveball: {
		inherit: true,
		isNonstandard: null,
	},
	domefossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	dousedrive: {
		inherit: true,
		isNonstandard: null,
	},
	dragonfang: {
		inherit: true,
		isNonstandard: null,
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	dragoniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	dragonmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	dragonscale: {
		inherit: true,
		isNonstandard: "Future",
	},
	dreamball: {
		inherit: true,
		isNonstandard: null,
	},
	dubiousdisc: {
		inherit: true,
		isNonstandard: "Future",
	},
	durinberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	duskball: {
		inherit: true,
		isNonstandard: null,
	},
	duskstone: {
		inherit: true,
		isNonstandard: "Future",
	},
	eeviumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	ejectbutton: {
		inherit: true,
		isNonstandard: null,
	},
	ejectpack: {
		inherit: true,
		isNonstandard: "Future",
	},
	electirizer: {
		inherit: true,
		isNonstandard: "Future",
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	electricmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	electricseed: {
		inherit: true,
		isNonstandard: "Future",
	},
	electriumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	energypowder: {
		inherit: true,
		isNonstandard: null,
	},
	enigmaberry: {
		inherit: true,
		isNonstandard: null,
	},
	eviolite: {
		inherit: true,
		isNonstandard: null,
	},
	expertbelt: {
		inherit: true,
		isNonstandard: null,
	},
	fairiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	fairygem: {
		inherit: true,
		isNonstandard: null,
	},
	fairymemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	fastball: {
		inherit: true,
		isNonstandard: "Future",
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	fightingmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	fightiniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	figyberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	firememory: {
		inherit: true,
		isNonstandard: "Future",
	},
	firestone: {
		inherit: true,
		isNonstandard: null,
	},
	firiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	flameorb: {
		inherit: true,
		isNonstandard: null,
	},
	floatstone: {
		inherit: true,
		isNonstandard: "Future",
	},
	flowersweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	flyingmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	flyiniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	focusband: {
		inherit: true,
		isNonstandard: null,
	},
	focussash: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizedbird: {
		inherit: true,
		isNonstandard: "Future",
	},
	fossilizeddino: {
		inherit: true,
		isNonstandard: "Future",
	},
	fossilizeddrake: {
		inherit: true,
		isNonstandard: "Future",
	},
	fossilizedfish: {
		inherit: true,
		isNonstandard: "Future",
	},
	friendball: {
		inherit: true,
		isNonstandard: "Future",
	},
	fullincense: {
		inherit: true,
		isNonstandard: "Future",
	},
	galaricacuff: {
		inherit: true,
		isNonstandard: "Future",
	},
	galaricawreath: {
		inherit: true,
		isNonstandard: "Future",
	},
	galladite: {
		inherit: true,
		isNonstandard: "Past",
	},
	ganlonberry: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: "Past",
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: "Past",
	},
	gengarite: {
		inherit: true,
		isNonstandard: "Past",
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	ghostiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	ghostmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	glalitite: {
		inherit: true,
		isNonstandard: "Past",
	},
	goldberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	goldbottlecap: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	grassmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	grassyseed: {
		inherit: true,
		isNonstandard: "Future",
	},
	greatball: {
		inherit: true,
		isNonstandard: null,
	},
	grepaberry: {
		inherit: true,
		isNonstandard: null,
	},
	gripclaw: {
		inherit: true,
		isNonstandard: null,
	},
	griseousorb: {
		inherit: true,
		isNonstandard: "Future",
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	groundiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	groundmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: "Past",
	},
	habanberry: {
		inherit: true,
		isNonstandard: null,
	},
	hardstone: {
		inherit: true,
		isNonstandard: null,
	},
	healball: {
		inherit: true,
		isNonstandard: null,
	},
	heatrock: {
		inherit: true,
		isNonstandard: null,
	},
	heavyball: {
		inherit: true,
		isNonstandard: "Future",
	},
	heavydutyboots: {
		inherit: true,
		isNonstandard: "Future",
	},
	helixfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	heracronite: {
		inherit: true,
		isNonstandard: "Past",
	},
	hondewberry: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: "Past",
	},
	iapapaberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	iceberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	icememory: {
		inherit: true,
		isNonstandard: "Future",
	},
	icestone: {
		inherit: true,
		isNonstandard: "Future",
	},
	iciumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	icyrock: {
		inherit: true,
		isNonstandard: null,
	},
	inciniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	ironball: {
		inherit: true,
		isNonstandard: null,
	},
	jabocaberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	jawfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: "Past",
	},
	kasibberry: {
		inherit: true,
		isNonstandard: null,
	},
	kebiaberry: {
		inherit: true,
		isNonstandard: null,
	},
	keeberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	kelpsyberry: {
		inherit: true,
		isNonstandard: null,
	},
	kingsrock: {
		inherit: true,
		isNonstandard: null,
	},
	kommoniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	laggingtail: {
		inherit: true,
		isNonstandard: null,
	},
	lansatberry: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: "Past",
	},
	latiosite: {
		inherit: true,
		isNonstandard: "Past",
	},
	laxincense: {
		inherit: true,
		isNonstandard: null,
	},
	leafstone: {
		inherit: true,
		isNonstandard: null,
	},
	leek: {
		inherit: true,
		isNonstandard: "Future",
	},
	leftovers: {
		inherit: true,
		isNonstandard: null,
	},
	leppaberry: {
		inherit: true,
		isNonstandard: null,
	},
	levelball: {
		inherit: true,
		isNonstandard: "Future",
	},
	liechiberry: {
		inherit: true,
		isNonstandard: null,
	},
	lifeorb: {
		inherit: true,
		isNonstandard: null,
	},
	lightball: {
		inherit: true,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Pikachu' || pokemon.baseSpecies.baseSpecies === 'Ampstar') {
        return this.chainModify(2);
      }
    },
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Pikachu' || pokemon.baseSpecies.baseSpecies === 'Pikotton' || pokemon.baseSpecies.baseSpecies === 'Ampstar') {
        return this.chainModify(2);
      }
    },
    itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikotton", "Ampstar"],
		isNonstandard: null,
	},
	lightclay: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: "Past",
	},
	loveball: {
		inherit: true,
		isNonstandard: "Future",
	},
	lovesweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	lucarionite: {
		inherit: true,
		isNonstandard: "Past",
	},
	luckypunch: {
		inherit: true,
		isNonstandard: "Past",
	},
	lumberry: {
		inherit: true,
		isNonstandard: null,
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: "Future",
	},
	lunaliumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	lureball: {
		inherit: true,
		isNonstandard: "Future",
	},
	lustrousorb: {
		inherit: true,
		isNonstandard: "Future",
	},
	luxuryball: {
		inherit: true,
		isNonstandard: null,
	},
	lycaniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	machobrace: {
		inherit: true,
		isNonstandard: null,
	},
	magmarizer: {
		inherit: true,
		isNonstandard: "Future",
	},
	magnet: {
		inherit: true,
		isNonstandard: null,
	},
	magoberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.50);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	magostberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	mail: {
		inherit: true,
		isNonstandard: "Past",
	},
	manectite: {
		inherit: true,
		isNonstandard: "Past",
	},
	marangaberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	marshadiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	masterball: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: "Past",
	},
	medichamite: {
		inherit: true,
		isNonstandard: "Past",
	},
	mentalherb: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: "Past",
	},
	metalcoat: {
		inherit: true,
		onBasePower() {},
	},
	metalpowder: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		isNonstandard: "Future",
	},
	mewniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: "Past",
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: "Past",
	},
	micleberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	mimikiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	mintberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	miracleberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	miracleseed: {
		inherit: true,
		isNonstandard: null,
	},
	mistyseed: {
		inherit: true,
		isNonstandard: "Future",
	},
	moonball: {
		inherit: true,
		isNonstandard: "Future",
	},
	moonstone: {
		inherit: true,
		isNonstandard: null,
	},
	muscleband: {
		inherit: true,
		isNonstandard: "Future",
	},
	mysteryberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	mysticwater: {
		inherit: true,
		isNonstandard: null,
	},
	nanabberry: {
		inherit: true,
		isNonstandard: null,
	},
	nestball: {
		inherit: true,
		isNonstandard: null,
	},
	netball: {
		inherit: true,
		isNonstandard: null,
	},
	nevermeltice: {
		inherit: true,
		isNonstandard: null,
	},
	nomelberry: {
		inherit: true,
		isNonstandard: null,
	},
	normalgem: {
		inherit: true,
		isNonstandard: null,
	},
	normaliumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	occaberry: {
		inherit: true,
		isNonstandard: null,
	},
	oddincense: {
		inherit: true,
		isNonstandard: "Future",
	},
	oldamber: {
		inherit: true,
		isNonstandard: "Past",
	},
	oranberry: {
		inherit: true,
		isNonstandard: null,
	},
	ovalstone: {
		inherit: true,
		isNonstandard: "Future",
	},
	pamtreberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	parkball: {
		inherit: true,
		isNonstandard: "Future",
	},
	passhoberry: {
		inherit: true,
		isNonstandard: null,
	},
	payapaberry: {
		inherit: true,
		isNonstandard: null,
	},
	pechaberry: {
		inherit: true,
		isNonstandard: null,
	},
	persimberry: {
		inherit: true,
		isNonstandard: null,
	},
	petayaberry: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: "Past",
	},
	pikaniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	pikashuniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	pinapberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	pinkbow: {
		inherit: true,
		isNonstandard: "Past",
	},
	pinsirite: {
		inherit: true,
		isNonstandard: "Past",
	},
	plumefossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	poisonbarb: {
		inherit: true,
		isNonstandard: null,
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	poisoniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	poisonmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	pokeball: {
		inherit: true,
		isNonstandard: null,
	},
	polkadotbow: {
		inherit: true,
		isNonstandard: "Past",
	},
	pomegberry: {
		inherit: true,
		isNonstandard: null,
	},
	poweranklet: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerband: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerbelt: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerbracer: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerherb: {
		inherit: true,
		isNonstandard: null,
	},
	powerlens: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerweight: {
		inherit: true,
		isNonstandard: "Future",
	},
	premierball: {
		inherit: true,
		isNonstandard: null,
	},
	primariumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	prismscale: {
		inherit: true,
		isNonstandard: "Future",
	},
	protectivepads: {
		inherit: true,
		isNonstandard: "Future",
	},
	protector: {
		inherit: true,
		isNonstandard: "Future",
	},
	przcureberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	psncureberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	psychicmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	psychicseed: {
		inherit: true,
		isNonstandard: "Future",
	},
	psychiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	qualotberry: {
		inherit: true,
		isNonstandard: null,
	},
	quickball: {
		inherit: true,
		isNonstandard: null,
	},
	quickclaw: {
		inherit: true,
		isNonstandard: null,
	},
	quickpowder: {
		inherit: true,
		isNonstandard: "Future",
	},
	rabutaberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	rarebone: {
		inherit: true,
		isNonstandard: null,
	},
	rawstberry: {
		inherit: true,
		isNonstandard: null,
	},
	razorclaw: {
		inherit: true,
		isNonstandard: null,
	},
	razorfang: {
		inherit: true,
		isNonstandard: "Past",
	},
	razzberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	reapercloth: {
		inherit: true,
		isNonstandard: "Future",
	},
	redcard: {
		inherit: true,
		isNonstandard: "Future",
	},
	redorb: {
		inherit: true,
		isNonstandard: "Past",
	},
	repeatball: {
		inherit: true,
		isNonstandard: null,
	},
	ribbonsweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	rindoberry: {
		inherit: true,
		isNonstandard: null,
	},
	ringtarget: {
		inherit: true,
		isNonstandard: "Future",
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	rockincense: {
		inherit: true,
		isNonstandard: "Future",
	},
	rockiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	rockmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	rockyhelmet: {
		inherit: true,
		isNonstandard: null,
	},
	roomservice: {
		inherit: true,
		isNonstandard: "Future",
	},
	rootfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	roseincense: {
		inherit: true,
		isNonstandard: "Future",
	},
	roseliberry: {
		inherit: true,
		isNonstandard: null,
	},
	rowapberry: {
		inherit: true,
		isNonstandard: "Future",
	},
	rustedshield: {
		inherit: true,
		isNonstandard: "Future",
	},
	rustedsword: {
		inherit: true,
		isNonstandard: "Future",
	},
	sablenite: {
		inherit: true,
		isNonstandard: "Past",
	},
	sachet: {
		inherit: true,
		isNonstandard: "Future",
	},
	safariball: {
		inherit: true,
		isNonstandard: null,
	},
	safetygoggles: {
		inherit: true,
		isNonstandard: null,
	},
	sailfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	salacberry: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: "Past",
	},
	sceptilite: {
		inherit: true,
		isNonstandard: "Past",
	},
	scizorite: {
		inherit: true,
		isNonstandard: "Past",
	},
	scopelens: {
		inherit: true,
		isNonstandard: null,
	},
	seaincense: {
		inherit: true,
		isNonstandard: null,
	},
	sharpbeak: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: "Past",
	},
	shedshell: {
		inherit: true,
		isNonstandard: null,
	},
	shellbell: {
		inherit: true,
		isNonstandard: null,
	},
	shinystone: {
		inherit: true,
		isNonstandard: "Future",
	},
	shockdrive: {
		inherit: true,
		isNonstandard: null,
	},
	shucaberry: {
		inherit: true,
		isNonstandard: null,
	},
	silkscarf: {
		inherit: true,
		isNonstandard: null,
	},
	silverpowder: {
		inherit: true,
		isNonstandard: null,
	},
	sitrusberry: {
		inherit: true,
		isNonstandard: null,
	},
	skullfossil: {
		inherit: true,
		isNonstandard: "Past",
	},
	slowbronite: {
		inherit: true,
		isNonstandard: "Past",
	},
	smoothrock: {
		inherit: true,
		isNonstandard: null,
	},
	snorliumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	snowball: {
		inherit: true,
		isNonstandard: "Future",
	},
	softsand: {
		inherit: true,
		isNonstandard: null,
	},
	solganiumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	souldew: {
		inherit: true,
		isNonstandard: "Future",
	},
	spelltag: {
		inherit: true,
		isNonstandard: null,
	},
	spelonberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	sportball: {
		inherit: true,
		isNonstandard: "Future",
	},
	starfberry: {
		inherit: true,
		isNonstandard: null,
	},
	starsweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	steeliumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	steelixite: {
		inherit: true,
		isNonstandard: "Past",
	},
	steelmemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	stick: {
		inherit: true,
		isNonstandard: "Past",
	},
	stickybarb: {
		inherit: true,
		isNonstandard: null,
	},
	strawberrysweet: {
		inherit: true,
		isNonstandard: "Future",
	},
	sunstone: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: "Past",
	},
	sweetapple: {
		inherit: true,
		isNonstandard: "Future",
	},
	tamatoberry: {
		inherit: true,
		isNonstandard: null,
	},
	tangaberry: {
		inherit: true,
		isNonstandard: null,
	},
	tapuniumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	tartapple: {
		inherit: true,
		isNonstandard: "Future",
	},
	terrainextender: {
		inherit: true,
		isNonstandard: null,
	},
	thickclub: {
		inherit: true,
		isNonstandard: "Future",
	},
	throatspray: {
		inherit: true,
		isNonstandard: "Future",
	},
	thunderstone: {
		inherit: true,
		isNonstandard: null,
	},
	timerball: {
		inherit: true,
		isNonstandard: null,
	},
	toxicorb: {
		inherit: true,
		isNonstandard: null,
	},
	tr00: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr01: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr02: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr03: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr04: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr05: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr06: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr07: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr08: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr09: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr10: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr11: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr12: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr13: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr14: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr15: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr16: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr17: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr18: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr19: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr20: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr21: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr22: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr23: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr24: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr25: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr26: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr27: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr28: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr29: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr30: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr31: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr32: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr33: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr34: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr35: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr36: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr37: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr38: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr39: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr40: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr41: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr42: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr43: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr44: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr45: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr46: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr47: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr48: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr49: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr50: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr51: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr52: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr53: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr54: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr55: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr56: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr57: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr58: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr59: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr60: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr61: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr62: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr63: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr64: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr65: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr66: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr67: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr68: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr69: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr70: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr71: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr72: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr73: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr74: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr75: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr76: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr77: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr78: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr79: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr80: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr81: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr82: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr83: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr84: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr85: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr86: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr87: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr88: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr89: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr90: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr91: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr92: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr93: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr94: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr95: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr96: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr97: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr98: {
		inherit: true,
		isNonstandard: "Future",
	},
	tr99: {
		inherit: true,
		isNonstandard: "Future",
	},
	twistedspoon: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: "Past",
	},
	ultraball: {
		inherit: true,
		isNonstandard: null,
	},
	ultranecroziumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	upgrade: {
		inherit: true,
		isNonstandard: null,
	},
	utilityumbrella: {
		inherit: true,
		isNonstandard: "Future",
	},
	venusaurite: {
		inherit: true,
		isNonstandard: "Past",
	},
	wacanberry: {
		inherit: true,
		isNonstandard: null,
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	wateriumz: {
		inherit: true,
		isNonstandard: "Past",
	},
	watermemory: {
		inherit: true,
		isNonstandard: "Future",
	},
	waterstone: {
		inherit: true,
		isNonstandard: null,
	},
	watmelberry: {
		inherit: true,
		isNonstandard: null,
	},
	waveincense: {
		inherit: true,
		isNonstandard: "Future",
	},
	weaknesspolicy: {
		inherit: true,
		isNonstandard: null,
	},
	wepearberry: {
		inherit: true,
		isNonstandard: "Past",
	},
	whippeddream: {
		inherit: true,
		isNonstandard: "Future",
	},
	whiteherb: {
		inherit: true,
		isNonstandard: null,
	},
	widelens: {
		inherit: true,
		isNonstandard: null,
	},
	wikiberry: {
		inherit: true,
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * 0.33);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	wiseglasses: {
		inherit: true,
		isNonstandard: "Future",
	},
	yacheberry: {
		inherit: true,
		isNonstandard: null,
	},
	zoomlens: {
		inherit: true,
		isNonstandard: null,
	},
	/* Clover Exclusive Items */
  suedeshoes: {
    name: "Suede Shoes",
    spritenum: 746,
    onModifySpe(spe, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Pretzely') {
        return this.chainModify(2);
      }
    },
    itemUser: ["Pretzely"],
    isNonstandard: null,
  },
  bigfaggot: {
    name: "Big Faggot",
    spritenum: 741,
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Flameboyan') {
        return this.chainModify(2);
      }
    },
    itemUser: ["Flameboyan"],
    isNonstandard: null,
  },
  baconstrip: {
    name: "Bacon Strip",
    spritenum: 749,
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Urswine') {
        return this.chainModify(2);
      }
    },
    itemUser: ["Urswine"],
    isNonstandard: null,
  },
  katana: {
    name: "Katana",
    spritenum: 743,
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === 'Steel') {
        return this.chainModify([0x1333, 0x1000]);
      }
    },
    isNonstandard: null,
  },
  cutebow: {
    name: "Cute Bow",
    spritenum: 742,
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === 'Fairy') {
        return this.chainModify([0x1333, 0x1000]);
      }
    },
    isNonstandard: null,
  },
  bible: {
    name: "Bible",
    spritenum: 748,
    onModifyCritRatio(critRatio, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Caroline') {
        return critRatio + 2;
      }
    },
    itemUser: ["Caroline"],
    isNonstandard: null,
  },
  taco: {
    name: "Taco",
    spritenum: 747,
    onUpdate(pokemon) {
      if (pokemon.hp <= pokemon.maxhp / 2) {
        if (this.runEvent('TryHeal', pokemon) && pokemon.useItem()) {
          this.heal(50);
        }
      }
    },
    isNonstandard: null,
  },
  thiccbone: {
    name: "Thicc Bone",
    spritenum: 379,
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Masdawg' || pokemon.baseSpecies.baseSpecies === 'Pasdawg') {
        return this.chainModify(2);
      }
    },
    itemUser: ["Masdawg", "Pasdawg"],
    isNonstandard: null,
  },
  manifesto: {
    name: "Manifesto",
    spritenum: 744,
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && user.baseSpecies.baseSpecies === 'Walruskie' && (move.type === 'Steel' || move.type === 'Ice')) {
        return this.chainModify(1.5);
      }
    },
    itemUser: ["Walruskie"],
    isNonstandard: null,
  },
  piratesjug: {
    name: "Pirate's Jug",
    spritenum: 745,
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && user.baseSpecies.baseSpecies === 'Octai' && move.id === 'lactoseshot') {
        return this.chainModify([2, 1]);
      }
    },
    itemUser: ["Octai"],
    isNonstandard: null,
  },
  blobbosinite: {
    name: "Blobbosinite",
    spritenum: 617,
    onStart(pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Blobbos') {
        pokemon.formeChange('megablobbos', this.effect, true);

        this.add('-message', 'Blobbos is unleashing its true power!');

        const moves = Object.values(this.dex.data.Moves);
        let animationsRemaining = 30;
        while (animationsRemaining > 0 && moves.length > 0) {
          this.add('-anim', pokemon, this.sample(moves).name, pokemon);
          animationsRemaining--;
        }

        pokemon.formeChange('blobbos', this.effect, true);

        pokemon.eatItem(true, pokemon);

        if (this.format.id.includes('ultimateblobbos')) {
          this.random();
          if (this.randomChance(1, 2)) {
            this.add('-message', 'The Blobbosinite gave Blobbos an ulcer... but raised its stats!');
            this.directDamage(pokemon.maxhp / 3);
            this.boost({
              atk: 1,
              def: 1,
              spa: 1,
              spd: 1,
              spe: 1,
            });
          } else {
            if (this.randomChance(1, 2)) {
              this.add('-message', "The Blobbosinite was highly toxic... but gave it special power!");
              pokemon.setStatus('tox', null, this.effect);
              this.boost({
                spa: 12,
              });
            } else {
              if (this.randomChance(1, 2)) {
                this.add('-message', 'The Blobbosinite weakened its defenses... but gave it a wonderful ability!');
                this.boost({
                  def: -6,
                  spd: -6,
                });
                pokemon.setAbility('Wonder Guard');
                this.add('-ability', pokemon, 'Wonder Guard', '[from] item: Blobbosinite');
              } else {
                if (this.randomChance(1, 2)) {
                  this.add('-message', 'The Blobbosinite turned Blobbos gay... but increased its strength!');
                  pokemon.setType('Fairy');
                  this.add('-start', pokemon, 'typechange', 'Fairy', '[from] item: Blobbosinite');
                  this.boost({
                    atk: 1,
                    spa: 1,
                  });
                } else {
                  if (this.randomChance(1, 2)) {
                    this.add('-message', 'The Blobbosinite gave Blobbos polio... but made it hard as iron!');
                    pokemon.setStatus('par', null, this.effect);
                    this.boost({
                      def: 2,
                    });
                    pokemon.addType('Steel');
                    this.add('-start', pokemon, 'typeadd', 'Steel', '[from] item: Blobbosinite');
                  } else {
                    if (this.randomChance(1, 2)) {
                      this.add('-message', "The Blobbosinite ruptured Blobbos's intestines... but turned it into a cute trap!");
                      this.directDamage(pokemon.maxhp / 2);
                      pokemon.formeChange('pikachubelle');
                      this.add('-formechange', pokemon, pokemon.name, undefined, `[from] item: Blobbosinite`);
                    } else {
                      this.add('-message', 'The Blobbosinite was delicious and Blobbos saved some for later!');
                      pokemon.setItem('Leftovers', undefined, this.effect);
                      this.add('-item', pokemon, 'Leftovers', '[from] item: Blobbosinite');
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        this.hint('Blobbosinite can only be used by Blobbos... idiot...');
      }
    },
    itemUser: ["Blobbos"],
    isNonstandard: null,
  },
  /* Clover CAP */
  moluganion: {
    name: "Moluganion",
    spritenum: 748,
    fling: {
      basePower: 20,
    },
    onAfterSetStatusPriority: -1,
    onAfterSetStatus(status, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Noxilium') {
        this.add('-message', 'The power from the Moluganion cured the status!');
        pokemon.cureStatus();
        pokemon.removeVolatile('confusion');
      }
    },
    onUpdate(pokemon) {
      if (pokemon.status || pokemon.volatiles['confusion']) {
        if (pokemon.baseSpecies.baseSpecies === 'Noxilium') {
          this.add('-message', 'The power from the Moluganion cured the status!');
          pokemon.cureStatus();
          pokemon.removeVolatile('confusion');
        } else {
          this.add('-message', 'The holder is unable to comprehend the Moluganion!');
          pokemon.addVolatile('confusion');
        }
      }
    },
    itemUser: ["Noxilium"],
    isNonstandard: "Future",
  },
  skub: {
    name: "Skub",
    spritenum: 286,
    fling: {
      basePower: 20,
    },
    onModifyDefPriority: 1,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Skuba') {
        return this.chainModify(1.5);
      }
    },
    onModifySpDPriority: 1,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Skuba') {
        return this.chainModify(1.5);
      }
    },
    onModifyAtkPriority: 1,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Skuba-Anti') {
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.baseSpecies === 'Skuba-Anti') {
        return this.chainModify(1.5);
      }
    },
    itemUser: ["Skuba", "Skuba-Anti"],
  },
  /* Clover CAP Mega Stones */
  ooganite: {
    name: "Ooganite",
    spritenum: 577,
    megaStone: "Oogabuga-Mega",
    megaEvolves: "Oogabuga",
    itemUser: ["Oogabuga"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "Future",
  },
  wifeminite: {
    name: "Wifeminite",
    spritenum: 577,
    megaStone: "Wifemin-Mega",
    megaEvolves: "Wifemin",
    itemUser: ["Wifemin"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  bitekinite: {
    name: "Bitekinite",
    spritenum: 577,
    megaStone: "Biteki-Mega",
    megaEvolves: "Biteki",
    itemUser: ["Biteki"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  fonduppite: {
    name: "Fonduppite",
    spritenum: 577,
    megaStone: "Fondupple-Mega",
    megaEvolves: "Fondupple",
    itemUser: ["Fondupple"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  ebolabite: {
    name: "Ebolabite",
    spritenum: 577,
    megaStone: "Ebolable-Mega",
    megaEvolves: "Ebolable",
    itemUser: ["Ebolable"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  somboludite: {
    name: "Somboludite",
    spritenum: 577,
    megaStone: "Somboludo-Mega",
    megaEvolves: "Somboludo",
    itemUser: ["Somboludo"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  floriousite: {
    name: "Floriousite",
    spritenum: 577,
    megaStone: "Florious-Mega",
    megaEvolves: "Florious",
    itemUser: ["Florious"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  illumatrixite: {
    name: "Illumatrixite",
    spritenum: 577,
    megaStone: "Illumatrix-Mega",
    megaEvolves: "Illumatrix",
    itemUser: ["Illumatrix"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  grimdakite: {
    name: "Grimdakite",
    spritenum: 577,
    megaStone: "Grimdak-Mega",
    megaEvolves: "Grimdak",
    itemUser: ["Grimdak"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  hazmatite: {
    name: "Hazmatite",
    spritenum: 577,
    megaStone: "Hazmate-Mega",
    megaEvolves: "Hazmate",
    itemUser: ["Hazmate"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  krokizonite: {
    name: "Krokizonite",
    spritenum: 577,
    megaStone: "Krokizon-Mega",
    megaEvolves: "Krokizon",
    itemUser: ["Krokizon"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  spookzillite: {
    name: "Spookzillite",
    spritenum: 577,
    megaStone: "Spookzilla-Mega",
    megaEvolves: "Spookzilla",
    itemUser: ["Spookzilla"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  lizakbarite: {
    name: "Lizakbarite",
    spritenum: 577,
    megaStone: "Lizakbar-Mega",
    megaEvolves: "Lizakbar",
    itemUser: ["Lizakbar"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  rectreemite: {
    name: "Rectreemite",
    spritenum: 577,
    megaStone: "Rectreem-Mega",
    megaEvolves: "Rectreem",
    itemUser: ["Rectreem"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  unjoyite: {
    name: "Unjoyite",
    spritenum: 577,
    megaStone: "Unjoy-Mega",
    megaEvolves: "Unjoy",
    itemUser: ["Unjoy"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  emplyinite: {
    name: "Emplyinite",
    spritenum: 577,
    megaStone: "Emplyin-Mega",
    megaEvolves: "Emplyin",
    itemUser: ["Emplyin"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  upbeddite: {
    name: "Upbeddite",
    spritenum: 577,
    megaStone: "Upbeddit-Mega",
    megaEvolves: "Upbeddit",
    itemUser: ["Upbeddit"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  smelloxite: {
    name: "Smelloxite",
    spritenum: 577,
    megaStone: "Smellox-Mega",
    megaEvolves: "Smellox",
    itemUser: ["Smellox"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  pigusonite: {
    name: "Pigusonite",
    spritenum: 577,
    megaStone: "Piguson-Mega",
    megaEvolves: "Piguson",
    itemUser: ["Piguson"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  condoomite: {
    name: "Condoomite",
    spritenum: 577,
    megaStone: "Condoom-Mega",
    megaEvolves: "Condoom",
    itemUser: ["Condoom"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  hohohomite: {
    name: "Hohohomite",
    spritenum: 577,
    megaStone: "Hohohoming-Mega",
    megaEvolves: "Hohohoming",
    itemUser: ["Hohohoming"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  faptite: {
    name: "Faptite",
    spritenum: 577,
    megaStone: "Faptime-Mega",
    megaEvolves: "Faptime",
    itemUser: ["Faptime"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  jerklite: {
    name: "Jerklite",
    spritenum: 577,
    megaStone: "Jerkle-Mega",
    megaEvolves: "Jerkle",
    itemUser: ["Jerkle"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  dowsterite: {
    name: "Dowsterite",
    spritenum: 577,
    megaStone: "Dowster-Mega",
    megaEvolves: "Dowster",
    itemUser: ["Dowster"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  reptrillite: {
    name: "Reptrillite",
    spritenum: 577,
    megaStone: "Reptrill-Mega",
    megaEvolves: "Reptrill",
    itemUser: ["Reptrill"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  kuklanite: {
    name: "Kuklanite",
    spritenum: 577,
    megaStone: "Kuklan-Mega",
    megaEvolves: "Kuklan",
    itemUser: ["Kuklan"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  ricosuavite: {
    name: "Ricosuavite",
    spritenum: 577,
    megaStone: "Ricosuave-Mega",
    megaEvolves: "Ricosuave",
    itemUser: ["Ricosuave"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  vandashite: {
    name: "Vandashite",
    spritenum: 577,
    megaStone: "Vandash-Mega",
    megaEvolves: "Vandash",
    itemUser: ["Vandash"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  chasumite: {
    name: "Chasumite",
    spritenum: 577,
    megaStone: "Chasumo-Mega",
    megaEvolves: "Chasumo",
    itemUser: ["Chasumo"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  goryannusite: {
    name: "Goryannusite",
    spritenum: 577,
    megaStone: "Goryannus-Mega",
    megaEvolves: "Goryannus",
    itemUser: ["Goryannus"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  spookscarite: {
    name: "Spookscarite",
    spritenum: 577,
    megaStone: "Spookscare-Mega",
    megaEvolves: "Spookscare",
    itemUser: ["Spookscare"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  honradite: {
    name: "Honradite",
    spritenum: 577,
    megaStone: "Honrade-Mega",
    megaEvolves: "Honrade",
    itemUser: ["Honrade"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
      return true;
    },
    num: -1,
    gen: 8,
    isNonstandard: "CAP",
  },
  ultrablobbosiumz: {
    name: "Ultrablobbosium Z",
    spritenum: 686,
    onTakeItem: false,
    zMove: "Slepp That Blobs the Sky",
    zMoveFrom: "Blobby Bop",
    itemUser: ["Blobbos-Ultra"],
    gen: 8,
    isNonstandard: "CAP",
  },
	dracoplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	dreadplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	earthplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	fistplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	flameplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	icicleplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	insectplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	ironplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	meadowplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	mindplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	pixieplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	skyplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	splashplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	spookyplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	stoneplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	toxicplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
	zapplate: {
		inherit: true,
		isNonstandard: "CAP",
	},
};

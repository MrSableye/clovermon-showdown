export const Items: {[k: string]: ModdedItemData} = {
	syrupyapple: {
		inherit: true,
		isNonstandard: "Past",
	},
	wellspringmask: {
		inherit: true,
		isNonstandard: "Past",
	},
	hearthflamemask: {
		inherit: true,
		isNonstandard: "Past",
	},
	cornerstonemask: {
		inherit: true,
		isNonstandard: "Past",
	},
	firestone: {
		inherit: true,
		isNonstandard: null,
	},
	thunderstone: {
		inherit: true,
		isNonstandard: null,
	},
	waterstone: {
		inherit: true,
		isNonstandard: null,
	},
	leafstone: {
		inherit: true,
		isNonstandard: null,
	},
	moonstone: {
		inherit: true,
		isNonstandard: null,
	},
	sunstone: {
		inherit: true,
		isNonstandard: null,
	},
	duskstone: {
		inherit: true,
		isNonstandard: null,
	},
	dawnstone: {
		inherit: true,
		isNonstandard: null,
	},
	shinystone: {
		inherit: true,
		isNonstandard: null,
	},
	helixfossil: {
		inherit: true,
		isNonstandard: null,
	},
	domefossil: {
		inherit: true,
		isNonstandard: null,
	},
	oldamber: {
		inherit: true,
		isNonstandard: null,
	},
	rootfossil: {
		inherit: true,
		isNonstandard: null,
	},
	clawfossil: {
		inherit: true,
		isNonstandard: null,
	},
	skullfossil: {
		inherit: true,
		isNonstandard: null,
	},
	armorfossil: {
		inherit: true,
		isNonstandard: null,
	},
	coverfossil: {
		inherit: true,
		isNonstandard: null,
	},
	plumefossil: {
		inherit: true,
		isNonstandard: null,
	},
	rarebone: {
		inherit: true,
		isNonstandard: null,
	},
	airballoon: {
		inherit: true,
		isNonstandard: null,
	},
	brightpowder: {
		inherit: true,
		isNonstandard: null,
	},
	eviolite: {
		inherit: true,
		isNonstandard: null,
	},
	floatstone: {
		inherit: true,
		isNonstandard: null,
	},
	destinyknot: {
		inherit: true,
		isNonstandard: null,
	},
	rockyhelmet: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 6, source, target, null, true);
			}
		},
		isNonstandard: null,
	},
	ejectbutton: {
		inherit: true,
		isNonstandard: null,
	},
	redcard: {
		inherit: true,
		isNonstandard: null,
	},
	shedshell: {
		inherit: true,
		isNonstandard: null,
	},
	choiceband: {
		inherit: true,
		isNonstandard: null,
	},
	choicespecs: {
		inherit: true,
		isNonstandard: null,
	},
	choicescarf: {
		inherit: true,
		isNonstandard: null,
	},
	heatrock: {
		inherit: true,
		isNonstandard: null,
	},
	damprock: {
		inherit: true,
		isNonstandard: null,
	},
	smoothrock: {
		inherit: true,
		isNonstandard: null,
	},
	icyrock: {
		inherit: true,
		isNonstandard: null,
	},
	lightclay: {
		inherit: true,
		isNonstandard: null,
	},
	gripclaw: {
		inherit: true,
		isNonstandard: null,
	},
	bindingband: {
		inherit: true,
		isNonstandard: null,
	},
	bigroot: {
		inherit: true,
		isNonstandard: null,
	},
	blacksludge: {
		inherit: true,
		isNonstandard: null,
	},
	leftovers: {
		inherit: true,
		isNonstandard: null,
	},
	shellbell: {
		inherit: true,
		isNonstandard: null,
	},
	mentalherb: {
		inherit: true,
		isNonstandard: null,
	},
	whiteherb: {
		inherit: true,
		isNonstandard: null,
	},
	powerherb: {
		inherit: true,
		isNonstandard: null,
	},
	absorbbulb: {
		inherit: true,
		isNonstandard: null,
	},
	cellbattery: {
		inherit: true,
		isNonstandard: null,
	},
	lifeorb: {
		inherit: true,
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !move.ohko) {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
			}
		},
		isNonstandard: null,
	},
	expertbelt: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		isNonstandard: null,
	},
	muscleband: {
		inherit: true,
		isNonstandard: null,
	},
	wiseglasses: {
		inherit: true,
		isNonstandard: null,
	},
	razorclaw: {
		inherit: true,
		isNonstandard: null,
	},
	scopelens: {
		inherit: true,
		isNonstandard: null,
	},
	widelens: {
		inherit: true,
		isNonstandard: null,
	},
	zoomlens: {
		inherit: true,
		isNonstandard: null,
	},
	kingsrock: {
		inherit: true,
		isNonstandard: null,
	},
	razorfang: {
		inherit: true,
		isNonstandard: null,
	},
	laggingtail: {
		inherit: true,
		isNonstandard: null,
	},
	quickclaw: {
		inherit: true,
		isNonstandard: null,
	},
	focusband: {
		inherit: true,
		isNonstandard: null,
	},
	focussash: {
		inherit: true,
		isNonstandard: null,
	},
	flameorb: {
		inherit: true,
		isNonstandard: null,
	},
	toxicorb: {
		inherit: true,
		isNonstandard: null,
	},
	stickybarb: {
		inherit: true,
		isNonstandard: null,
	},
	ironball: {
		inherit: true,
		isNonstandard: null,
	},
	ringtarget: {
		inherit: true,
		isNonstandard: null,
	},
	machobrace: {
		inherit: true,
		isNonstandard: null,
	},
	powerweight: {
		inherit: true,
		isNonstandard: null,
	},
	powerbracer: {
		inherit: true,
		isNonstandard: null,
	},
	powerbelt: {
		inherit: true,
		isNonstandard: null,
	},
	powerlens: {
		inherit: true,
		isNonstandard: null,
	},
	powerband: {
		inherit: true,
		isNonstandard: null,
	},
	poweranklet: {
		inherit: true,
		isNonstandard: null,
	},
	laxincense: {
		inherit: true,
		isNonstandard: null,
	},
	fullincense: {
		inherit: true,
		isNonstandard: null,
	},
	seaincense: {
		inherit: true,
		isNonstandard: null,
	},
	waveincense: {
		inherit: true,
		isNonstandard: null,
	},
	roseincense: {
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
	charcoal: {
		inherit: true,
		isNonstandard: null,
	},
	mysticwater: {
		inherit: true,
		isNonstandard: null,
	},
	magnet: {
		inherit: true,
		isNonstandard: null,
	},
	miracleseed: {
		inherit: true,
		isNonstandard: null,
	},
	nevermeltice: {
		inherit: true,
		isNonstandard: null,
	},
	blackbelt: {
		inherit: true,
		isNonstandard: null,
	},
	poisonbarb: {
		inherit: true,
		isNonstandard: null,
	},
	softsand: {
		inherit: true,
		isNonstandard: null,
	},
	sharpbeak: {
		inherit: true,
		isNonstandard: null,
	},
	twistedspoon: {
		inherit: true,
		isNonstandard: null,
	},
	silverpowder: {
		inherit: true,
		isNonstandard: null,
	},
	hardstone: {
		inherit: true,
		isNonstandard: null,
	},
	spelltag: {
		inherit: true,
		isNonstandard: null,
	},
	dragonfang: {
		inherit: true,
		isNonstandard: null,
	},
	blackglasses: {
		inherit: true,
		isNonstandard: null,
	},
	metalcoat: {
		inherit: true,
		isNonstandard: null,
	},
	silkscarf: {
		inherit: true,
		isNonstandard: null,
	},
	flameplate: {
		inherit: true,
		isNonstandard: null,
	},
	splashplate: {
		inherit: true,
		isNonstandard: null,
	},
	zapplate: {
		inherit: true,
		isNonstandard: null,
	},
	meadowplate: {
		inherit: true,
		isNonstandard: null,
	},
	icicleplate: {
		inherit: true,
		isNonstandard: null,
	},
	fistplate: {
		inherit: true,
		isNonstandard: null,
	},
	toxicplate: {
		inherit: true,
		isNonstandard: null,
	},
	earthplate: {
		inherit: true,
		isNonstandard: null,
	},
	skyplate: {
		inherit: true,
		isNonstandard: null,
	},
	mindplate: {
		inherit: true,
		isNonstandard: null,
	},
	insectplate: {
		inherit: true,
		isNonstandard: null,
	},
	stoneplate: {
		inherit: true,
		isNonstandard: null,
	},
	spookyplate: {
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
	ironplate: {
		inherit: true,
		isNonstandard: null,
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	normalgem: {
		inherit: true,
		isNonstandard: null,
	},
	lightball: {
		inherit: true,
		isNonstandard: null,
	},
	luckypunch: {
		inherit: true,
		isNonstandard: null,
	},
	metalpowder: {
		inherit: true,
		isNonstandard: null,
	},
	quickpowder: {
		inherit: true,
		isNonstandard: null,
	},
	thickclub: {
		inherit: true,
		isNonstandard: null,
	},
	stick: {
		inherit: true,
		isNonstandard: null,
	},
	souldew: {
		inherit: true,
		onBasePower() {},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.num === 380 || pokemon.baseSpecies.num === 381) {
				return this.chainModify(1.5);
			}
		},
		desc: "If held by a Latias or a Latios, its Sp. Atk and Sp. Def are 1.5x.",
		isNonstandard: null,
	},
	deepseatooth: {
		inherit: true,
		isNonstandard: null,
	},
	deepseascale: {
		inherit: true,
		isNonstandard: null,
	},
	adamantorb: {
		inherit: true,
		isNonstandard: null,
	},
	lustrousorb: {
		inherit: true,
		isNonstandard: null,
	},
	griseousorb: {
		inherit: true,
		isNonstandard: null,
	},
	dousedrive: {
		inherit: true,
		isNonstandard: null,
	},
	shockdrive: {
		inherit: true,
		isNonstandard: null,
	},
	burndrive: {
		inherit: true,
		isNonstandard: null,
	},
	chilldrive: {
		inherit: true,
		isNonstandard: null,
	},
	dragonscale: {
		inherit: true,
		isNonstandard: null,
	},
	upgrade: {
		inherit: true,
		isNonstandard: null,
	},
	dubiousdisc: {
		inherit: true,
		isNonstandard: null,
	},
	protector: {
		inherit: true,
		isNonstandard: null,
	},
	electirizer: {
		inherit: true,
		isNonstandard: null,
	},
	magmarizer: {
		inherit: true,
		isNonstandard: null,
	},
	reapercloth: {
		inherit: true,
		isNonstandard: null,
	},
	prismscale: {
		inherit: true,
		isNonstandard: null,
	},
	ovalstone: {
		inherit: true,
		isNonstandard: null,
	},
	berryjuice: {
		inherit: true,
		isNonstandard: null,
	},
	masterball: {
		inherit: true,
		isNonstandard: null,
	},
	ultraball: {
		inherit: true,
		isNonstandard: null,
	},
	greatball: {
		inherit: true,
		isNonstandard: null,
	},
	pokeball: {
		inherit: true,
		isNonstandard: null,
	},
	safariball: {
		inherit: true,
		isNonstandard: null,
	},
	sportball: {
		inherit: true,
		isNonstandard: null,
	},
	netball: {
		inherit: true,
		isNonstandard: null,
	},
	diveball: {
		inherit: true,
		isNonstandard: null,
	},
	nestball: {
		inherit: true,
		isNonstandard: null,
	},
	repeatball: {
		inherit: true,
		isNonstandard: null,
	},
	timerball: {
		inherit: true,
		isNonstandard: null,
	},
	luxuryball: {
		inherit: true,
		isNonstandard: null,
	},
	premierball: {
		inherit: true,
		isNonstandard: null,
	},
	duskball: {
		inherit: true,
		isNonstandard: null,
	},
	healball: {
		inherit: true,
		isNonstandard: null,
	},
	quickball: {
		inherit: true,
		isNonstandard: null,
	},
	cherishball: {
		inherit: true,
		isNonstandard: null,
	},
	fastball: {
		inherit: true,
		isNonstandard: null,
	},
	levelball: {
		inherit: true,
		isNonstandard: null,
	},
	lureball: {
		inherit: true,
		isNonstandard: null,
	},
	heavyball: {
		inherit: true,
		isNonstandard: null,
	},
	loveball: {
		inherit: true,
		isNonstandard: null,
	},
	friendball: {
		inherit: true,
		isNonstandard: null,
	},
	moonball: {
		inherit: true,
		isNonstandard: null,
	},
	cheriberry: {
		inherit: true,
		isNonstandard: null,
	},
	chestoberry: {
		inherit: true,
		isNonstandard: null,
	},
	pechaberry: {
		inherit: true,
		isNonstandard: null,
	},
	rawstberry: {
		inherit: true,
		isNonstandard: null,
	},
	aspearberry: {
		inherit: true,
		isNonstandard: null,
	},
	leppaberry: {
		inherit: true,
		isNonstandard: null,
	},
	oranberry: {
		inherit: true,
		isNonstandard: null,
	},
	persimberry: {
		inherit: true,
		isNonstandard: null,
	},
	lumberry: {
		inherit: true,
		isNonstandard: null,
	},
	sitrusberry: {
		inherit: true,
		isNonstandard: null,
	},
	figyberry: {
		inherit: true,
		isNonstandard: null,
	},
	wikiberry: {
		inherit: true,
		isNonstandard: null,
	},
	magoberry: {
		inherit: true,
		isNonstandard: null,
	},
	aguavberry: {
		inherit: true,
		isNonstandard: null,
	},
	iapapaberry: {
		inherit: true,
		isNonstandard: null,
	},
	razzberry: {
		inherit: true,
		isNonstandard: null,
	},
	blukberry: {
		inherit: true,
		isNonstandard: null,
	},
	nanabberry: {
		inherit: true,
		isNonstandard: null,
	},
	wepearberry: {
		inherit: true,
		isNonstandard: null,
	},
	pinapberry: {
		inherit: true,
		isNonstandard: null,
	},
	pomegberry: {
		inherit: true,
		isNonstandard: null,
	},
	kelpsyberry: {
		inherit: true,
		isNonstandard: null,
	},
	qualotberry: {
		inherit: true,
		isNonstandard: null,
	},
	hondewberry: {
		inherit: true,
		isNonstandard: null,
	},
	grepaberry: {
		inherit: true,
		isNonstandard: null,
	},
	tamatoberry: {
		inherit: true,
		isNonstandard: null,
	},
	cornnberry: {
		inherit: true,
		isNonstandard: null,
	},
	magostberry: {
		inherit: true,
		isNonstandard: null,
	},
	rabutaberry: {
		inherit: true,
		isNonstandard: null,
	},
	nomelberry: {
		inherit: true,
		isNonstandard: null,
	},
	spelonberry: {
		inherit: true,
		isNonstandard: null,
	},
	pamtreberry: {
		inherit: true,
		isNonstandard: null,
	},
	watmelberry: {
		inherit: true,
		isNonstandard: null,
	},
	durinberry: {
		inherit: true,
		isNonstandard: null,
	},
	belueberry: {
		inherit: true,
		isNonstandard: null,
	},
	occaberry: {
		inherit: true,
		isNonstandard: null,
	},
	passhoberry: {
		inherit: true,
		isNonstandard: null,
	},
	wacanberry: {
		inherit: true,
		isNonstandard: null,
	},
	rindoberry: {
		inherit: true,
		isNonstandard: null,
	},
	yacheberry: {
		inherit: true,
		isNonstandard: null,
	},
	chopleberry: {
		inherit: true,
		isNonstandard: null,
	},
	kebiaberry: {
		inherit: true,
		isNonstandard: null,
	},
	shucaberry: {
		inherit: true,
		isNonstandard: null,
	},
	cobaberry: {
		inherit: true,
		isNonstandard: null,
	},
	payapaberry: {
		inherit: true,
		isNonstandard: null,
	},
	tangaberry: {
		inherit: true,
		isNonstandard: null,
	},
	chartiberry: {
		inherit: true,
		isNonstandard: null,
	},
	kasibberry: {
		inherit: true,
		isNonstandard: null,
	},
	habanberry: {
		inherit: true,
		isNonstandard: null,
	},
	colburberry: {
		inherit: true,
		isNonstandard: null,
	},
	babiriberry: {
		inherit: true,
		isNonstandard: null,
	},
	chilanberry: {
		inherit: true,
		isNonstandard: null,
	},
	liechiberry: {
		inherit: true,
		isNonstandard: null,
	},
	ganlonberry: {
		inherit: true,
		isNonstandard: null,
	},
	salacberry: {
		inherit: true,
		isNonstandard: null,
	},
	petayaberry: {
		inherit: true,
		isNonstandard: null,
	},
	apicotberry: {
		inherit: true,
		isNonstandard: null,
	},
	lansatberry: {
		inherit: true,
		isNonstandard: null,
	},
	starfberry: {
		inherit: true,
		isNonstandard: null,
	},
	enigmaberry: {
		inherit: true,
		isNonstandard: null,
	},
	micleberry: {
		inherit: true,
		isNonstandard: null,
	},
	custapberry: {
		inherit: true,
		isNonstandard: null,
	},
	jabocaberry: {
		inherit: true,
		isNonstandard: null,
	},
	rowapberry: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	snowball: {
		inherit: true,
		isNonstandard: null,
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: null,
	},
	safetygoggles: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'acidrain' || type === 'bladerain' || type === 'powder') return false;
		},
		desc: "Holder is immune to powder moves and damage from Sandstorm, Hail, Acid Rain and Blade Rain.",
		isNonstandard: null,
	},
	weaknesspolicy: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		isNonstandard: null,
	},
	pixieplate: {
		inherit: true,
		isNonstandard: null,
	},
	icestone: {
		inherit: true,
		isNonstandard: null,
	},
	terrainextender: {
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
	fairygem: {
		inherit: true,
		isNonstandard: null,
	},
	beastball: {
		inherit: true,
		isNonstandard: null,
	},
	throatspray: {
		inherit: true,
		isNonstandard: null,
	},
	heavydutyboots: {
		inherit: true,
		isNonstandard: null,
	},
	roseliberry: {
		inherit: true,
		isNonstandard: null,
	},
	assaultvest: {
		inherit: true,
		isNonstandard: null,
	},
	blunderpolicy: {
		inherit: true,
		isNonstandard: null,
	},
	glalite: {
		inherit: true,
		isNonstandard: null,
	},
	avalugite: {
		inherit: true,
		isNonstandard: null,
	},
	butterfrite: {
		inherit: true,
		isNonstandard: null,
	},
	rubberflite: {
		inherit: true,
		isNonstandard: null,
	},
	haicawite: {
		inherit: true,
		isNonstandard: null,
	},
	shattaratite: {
		inherit: true,
		isNonstandard: null,
	},
	grasstaclite: {
		inherit: true,
		isNonstandard: null,
	},
	chillzite: {
		inherit: true,
		isNonstandard: null,
	},
	lunightonite: {
		inherit: true,
		isNonstandard: null,
	},
	vanilluxite: {
		inherit: true,
		isNonstandard: null,
	},
	blizzlamite: {
		inherit: true,
		isNonstandard: null,
	},
	synthitite: {
		inherit: true,
		isNonstandard: null,
	},
	chokolite: {
		inherit: true,
		isNonstandard: null,
	},
	mouseeite: {
		inherit: true,
		isNonstandard: null,
	},
	hoverite: {
		inherit: true,
		isNonstandard: null,
	},
	naminite: {
		inherit: true,
		isNonstandard: null,
	},
	solaiossite: {
		inherit: true,
		isNonstandard: null,
	},
	goralite: {
		inherit: true,
		isNonstandard: null,
	},
	neutralite: {
		inherit: true,
		isNonstandard: null,
	},
	drumgite: {
		inherit: true,
		isNonstandard: null,
	},
	godzillusite: {
		inherit: true,
		isNonstandard: null,
	},
	muchoshotite: {
		inherit: true,
		isNonstandard: null,
	},
	miracactite: {
		inherit: true,
		isNonstandard: null,
	},
	hitmonite: {
		inherit: true,
		isNonstandard: null,
	},
	snowfistnite: {
		inherit: true,
		isNonstandard: null,
	},
	capsilite: {
		inherit: true,
		isNonstandard: null,
	},
	torkoalite: {
		inherit: true,
		isNonstandard: null,
	},
	comistorite: {
		inherit: true,
		isNonstandard: null,
	},
	heruptite: {
		inherit: true,
		isNonstandard: null,
	},
	otyashite: {
		inherit: true,
		isNonstandard: null,
	},
	buglitchite: {
		inherit: true,
		isNonstandard: null,
	},
	bauminite: {
		inherit: true,
		isNonstandard: null,
	},
	log: {
		inherit: true,
		isNonstandard: null,
	},
	steamer: {
		inherit: true,
		isNonstandard: null,
	},
	mysticmagma: {
		inherit: true,
		isNonstandard: null,
	},
	gear: {
		inherit: true,
		isNonstandard: null,
	},
	ancientorb: {
		inherit: true,
		isNonstandard: null,
	},
	kite: {
		inherit: true,
		isNonstandard: null,
	},
	magicwand: {
		inherit: true,
		isNonstandard: null,
	},
	prism: {
		inherit: true,
		isNonstandard: null,
	},
	fluffycoat: {
		inherit: true,
		isNonstandard: null,
	},
	ancienthelm: {
		inherit: true,
		isNonstandard: null,
	},
	seaweed: {
		inherit: true,
		isNonstandard: null,
	},
	drubberite: {
		inherit: true,
		isNonstandard: null,
	},
	neonazite: {
		inherit: true,
		isNonstandard: null,
	},
	chairite: {
		inherit: true,
		isNonstandard: null,
	},
	pikachite: {
		inherit: true,
		isNonstandard: null,
	},
	socialite: {
		inherit: true,
		isNonstandard: null,
	},
	arbroodite: {
		inherit: true,
		isNonstandard: null,
	},
	steamboatite: {
		inherit: true,
		isNonstandard: null,
	},
	lavagunite: {
		inherit: true,
		isNonstandard: null,
	},
	gachambite: {
		inherit: true,
		isNonstandard: null,
	},
	gummite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoomite: {
		inherit: true,
		isNonstandard: null,
	},
	gigasvyrite: {
		inherit: true,
		isNonstandard: null,
	},
	corruptorb: {
		inherit: true,
		isNonstandard: null,
	},
	cummunculite: {
		inherit: true,
		isNonstandard: null,
	},
	mladite: {
		inherit: true,
		isNonstandard: null,
	},
	pinnistite: {
		inherit: true,
		isNonstandard: null,
	},
	rootspookite: {
		inherit: true,
		isNonstandard: null,
	},
	malwormite: {
		inherit: true,
		isNonstandard: null,
	},
	delite: {
		inherit: true,
		isNonstandard: null,
	},
	panthannonite: {
		inherit: true,
		isNonstandard: null,
	},
	gourgeistite: {
		inherit: true,
		isNonstandard: null,
	},
	lavaplate: {
		inherit: true,
		isNonstandard: null,
	},
	vaporplate: {
		inherit: true,
		isNonstandard: null,
	},
	lumberplate: {
		inherit: true,
		isNonstandard: null,
	},
	angelplate: {
		inherit: true,
		isNonstandard: null,
	},
	demonicplate: {
		inherit: true,
		isNonstandard: null,
	},
	paperplate: {
		inherit: true,
		isNonstandard: null,
	},
	lusterplate: {
		inherit: true,
		isNonstandard: null,
	},
	tornadoplate: {
		inherit: true,
		isNonstandard: null,
	},
	arcaneplate: {
		inherit: true,
		isNonstandard: null,
	},
	machineplate: {
		inherit: true,
		isNonstandard: null,
	},
	elasticplate: {
		inherit: true,
		isNonstandard: null,
	},
	phobiaplate: {
		inherit: true,
		isNonstandard: null,
	},
	spaceplate: {
		inherit: true,
		isNonstandard: null,
	},
	sonarplate: {
		inherit: true,
		isNonstandard: null,
	},
	gourmetplate: {
		inherit: true,
		isNonstandard: null,
	},
	undeadplate: {
		inherit: true,
		isNonstandard: null,
	},
	radiationplate: {
		inherit: true,
		isNonstandard: null,
	},
	infectionplate: {
		inherit: true,
		isNonstandard: null,
	},
	digitalplate: {
		inherit: true,
		isNonstandard: null,
	},
	glassplate: {
		inherit: true,
		isNonstandard: null,
	},
	plasticplate: {
		inherit: true,
		isNonstandard: null,
	},
	carpetplate: {
		inherit: true,
		isNonstandard: null,
	},
	agesplate: {
		inherit: true,
		isNonstandard: null,
	},
	artplate: {
		inherit: true,
		isNonstandard: null,
	},
	crystalplate: {
		inherit: true,
		isNonstandard: null,
	},
	infoplate: {
		inherit: true,
		isNonstandard: null,
	},
	ichorplate: {
		inherit: true,
		isNonstandard: null,
	},
	fatplate: {
		inherit: true,
		isNonstandard: null,
	},
	emotionplate: {
		inherit: true,
		isNonstandard: null,
	},
	page: {
		inherit: true,
		isNonstandard: null,
	},
	rubberglove: {
		inherit: true,
		isNonstandard: null,
	},
	spookymask: {
		inherit: true,
		isNonstandard: null,
	},
	telescope: {
		inherit: true,
		isNonstandard: null,
	},
	speaker: {
		inherit: true,
		isNonstandard: null,
	},
	sauce: {
		inherit: true,
		isNonstandard: null,
	},
	brains: {
		inherit: true,
		isNonstandard: null,
	},
	uranium: {
		inherit: true,
		isNonstandard: null,
	},
	motherboard: {
		inherit: true,
		isNonstandard: null,
	},
	optimizerpro: {
		inherit: true,
		isNonstandard: null,
	},
	glasspiece: {
		inherit: true,
		isNonstandard: null,
	},
	plasticpiece: {
		inherit: true,
		isNonstandard: null,
	},
	carpet: {
		inherit: true,
		isNonstandard: null,
	},
	holycross: {
		inherit: true,
		isNonstandard: null,
	},
	stopwatch: {
		inherit: true,
		isNonstandard: null,
	},
	primeapite: {
		inherit: true,
		isNonstandard: null,
	},
	teskarite: {
		inherit: true,
		isNonstandard: null,
	},
	hypnite: {
		inherit: true,
		isNonstandard: null,
	},
	onionplate: {
		inherit: true,
		isNonstandard: null,
	},
	facarvite: {
		inherit: true,
		isNonstandard: null,
	},
	saplomite: {
		inherit: true,
		isNonstandard: null,
	},
	absorspongite: {
		inherit: true,
		isNonstandard: null,
	},
	serperiorite: {
		inherit: true,
		isNonstandard: null,
	},
	emboarite: {
		inherit: true,
		isNonstandard: null,
	},
	samurottite: {
		inherit: true,
		isNonstandard: null,
	},
	empoleonite: {
		inherit: true,
		isNonstandard: null,
	},
	infernapite: {
		inherit: true,
		isNonstandard: null,
	},
	torterrite: {
		inherit: true,
		isNonstandard: null,
	},
	dominatrixoutfit: {
		inherit: true,
		isNonstandard: null,
	},
	frillydress: {
		inherit: true,
		isNonstandard: null,
	},
	bouncectarmor: {
		inherit: true,
		isNonstandard: null,
	},
	frankenspookite: {
		inherit: true,
		isNonstandard: null,
	},
	zangoosite: {
		inherit: true,
		isNonstandard: null,
	},
	virivite: {
		inherit: true,
		isNonstandard: null,
	},
	rubberite: {
		inherit: true,
		isNonstandard: null,
	},
	bottleodrakite: {
		inherit: true,
		isNonstandard: null,
	},
	dargouite: {
		inherit: true,
		isNonstandard: null,
	},
	sonotite: {
		inherit: true,
		isNonstandard: null,
	},
	arbokite: {
		inherit: true,
		isNonstandard: null,
	},
	shedinjite: {
		inherit: true,
		isNonstandard: null,
	},
	lynchite: {
		inherit: true,
		isNonstandard: null,
	},
	sevipite: {
		inherit: true,
		isNonstandard: null,
	},
	volcaronite: {
		inherit: true,
		isNonstandard: null,
	},
	feraligatrite: {
		inherit: true,
		isNonstandard: null,
	},
	meganiumite: {
		inherit: true,
		isNonstandard: null,
	},
	typhlosionite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditez: {
		inherit: true,
		isNonstandard: null,
	},
	johnspleenite: {
		inherit: true,
		isNonstandard: null,
	},
	primalorb: {
		inherit: true,
		isNonstandard: null,
	},
	behemistite: {
		inherit: true,
		isNonstandard: null,
	},
	luminite: {
		inherit: true,
		isNonstandard: null,
	},
	bersergutsite: {
		inherit: true,
		isNonstandard: null,
	},
	wendigite: {
		inherit: true,
		isNonstandard: null,
	},
	flygonite: {
		inherit: true,
		isNonstandard: null,
	},
	delphoxite: {
		inherit: true,
		isNonstandard: null,
	},
	greninjite: {
		inherit: true,
		isNonstandard: null,
	},
	chesnaughtite: {
		inherit: true,
		isNonstandard: null,
	},
	chatotite: {
		inherit: true,
		isNonstandard: null,
	},
	angelpowder: {
		inherit: true,
		isNonstandard: null,
	},
	apexorb: {
		inherit: true,
		isNonstandard: null,
	},
	sloggerothite: {
		inherit: true,
		isNonstandard: null,
	},
	archangite: {
		inherit: true,
		isNonstandard: null,
	},
	ledevilainite: {
		inherit: true,
		isNonstandard: null,
	},
	satelite: {
		inherit: true,
		isNonstandard: null,
	},
	sphinxiantite: {
		inherit: true,
		isNonstandard: null,
	},
	clefablite: {
		inherit: true,
		isNonstandard: null,
	},
	eeveeite: {
		inherit: true,
		isNonstandard: null,
	},
	fonightonite: {
		inherit: true,
		isNonstandard: null,
	},
	brickorite: {
		inherit: true,
		isNonstandard: null,
	},
	frostearite: {
		inherit: true,
		isNonstandard: null,
	},
	stantlerite: {
		inherit: true,
		isNonstandard: null,
	},
	melonvilite: {
		inherit: true,
		isNonstandard: null,
	},
	delcattite: {
		inherit: true,
		isNonstandard: null,
	},
	electrodite: {
		inherit: true,
		isNonstandard: null,
	},
	tantalberry: {
		inherit: true,
		isNonstandard: null,
	},
	holyward: {
		inherit: true,
		isNonstandard: null,
	},
	blessorb: {
		inherit: true,
		isNonstandard: null,
	},
	octillerite: {
		inherit: true,
		isNonstandard: null,
	},
	jetcraftite: {
		inherit: true,
		isNonstandard: null,
	},
	crobatite: {
		inherit: true,
		isNonstandard: null,
	},
	cradilite: {
		inherit: true,
		isNonstandard: null,
	},
	martianorb: {
		inherit: true,
		isNonstandard: null,
	},
	venusorb: {
		inherit: true,
		isNonstandard: null,
	},
	mercuryorb: {
		inherit: true,
		isNonstandard: null,
	},
	chipoloberry: {
		inherit: true,
		isNonstandard: null,
	},
	haridoberry: {
		inherit: true,
		isNonstandard: null,
	},
	bakyuuberry: {
		inherit: true,
		isNonstandard: null,
	},
	darayberry: {
		inherit: true,
		isNonstandard: null,
	},
	loispberry: {
		inherit: true,
		isNonstandard: null,
	},
	orptekberry: {
		inherit: true,
		isNonstandard: null,
	},
	oligalberry: {
		inherit: true,
		isNonstandard: null,
	},
	ampireberry: {
		inherit: true,
		isNonstandard: null,
	},
	goldstandarrow: {
		inherit: true,
		isNonstandard: null,
	},
	goldenfiddle: {
		inherit: true,
		isNonstandard: null,
	},
	novaisite: {
		inherit: true,
		isNonstandard: null,
	},
	darkolite: {
		inherit: true,
		isNonstandard: null,
	},
	vivillonite: {
		inherit: true,
		isNonstandard: null,
	},
	jokercard: {
		inherit: true,
		isNonstandard: null,
	},
	ariadosite: {
		inherit: true,
		isNonstandard: null,
	},
	gettertomahawk: {
		inherit: true,
		isNonstandard: null,
	},
	getterdrill: {
		inherit: true,
		isNonstandard: null,
	},
	gettermissile: {
		inherit: true,
		isNonstandard: null,
	},
	mozartite: {
		inherit: true,
		isNonstandard: null,
	},
	icyseed: {
		inherit: true,
		isNonstandard: null,
	},
	dongorillite: {
		inherit: true,
		isNonstandard: null,
	},
	helioliskite: {
		inherit: true,
		isNonstandard: null,
	},
	narwharite: {
		inherit: true,
		isNonstandard: null,
	},
	suwiseglasses: {
		inherit: true,
		isNonstandard: null,
	},
	plasbulite: {
		inherit: true,
		isNonstandard: null,
	},
	lightulbite: {
		inherit: true,
		isNonstandard: null,
	},
	rodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	pressureorb: {
		inherit: true,
		isNonstandard: null,
	},
	earplugs: {
		inherit: true,
		isNonstandard: null,
	},
	reactioxite: {
		inherit: true,
		isNonstandard: null,
	},
	donphanite: {
		inherit: true,
		isNonstandard: null,
	},
	jynxite: {
		inherit: true,
		isNonstandard: null,
	},
	charizardites: {
		inherit: true,
		isNonstandard: null,
	},
	farfetchditen: {
		inherit: true,
		isNonstandard: null,
	},
	gigantamax: {
		inherit: true,
		isNonstandard: null,
	},
	dragonitite: {
		inherit: true,
		isNonstandard: null,
	},
	carnivinite: {
		inherit: true,
		isNonstandard: null,
	},
	cultulzite: {
		inherit: true,
		isNonstandard: null,
	},
	gorebyssite: {
		inherit: true,
		isNonstandard: null,
	},
	huntailite: {
		inherit: true,
		isNonstandard: null,
	},
	garbodorite: {
		inherit: true,
		isNonstandard: null,
	},
	kecleonite: {
		inherit: true,
		isNonstandard: null,
	},
	cocaiturdite: {
		inherit: true,
		isNonstandard: null,
	},
	albinguinite: {
		inherit: true,
		isNonstandard: null,
	},
	undlouisite: {
		inherit: true,
		isNonstandard: null,
	},
	tropilightnite: {
		inherit: true,
		isNonstandard: null,
	},
	nukreepite: {
		inherit: true,
		isNonstandard: null,
	},
	tutterflite: {
		inherit: true,
		isNonstandard: null,
	},
	swoobatite: {
		inherit: true,
		isNonstandard: null,
	},
	parasectite: {
		inherit: true,
		isNonstandard: null,
	},
	smolstronite: {
		inherit: true,
		isNonstandard: null,
	},
	antiplebshield: {
		inherit: true,
		isNonstandard: null,
	},
	paintipite: {
		inherit: true,
		isNonstandard: null,
	},
	silverkey: {
		inherit: true,
		isNonstandard: null,
	},
	horroruxite: {
		inherit: true,
		isNonstandard: null,
	},
	pyramidite: {
		inherit: true,
		isNonstandard: null,
	},
	warshinite: {
		inherit: true,
		isNonstandard: null,
	},
	omastarite: {
		inherit: true,
		isNonstandard: null,
	},
	kabutopsite: {
		inherit: true,
		isNonstandard: null,
	},
	dolphottlite: {
		inherit: true,
		isNonstandard: null,
	},
	corsolite: {
		inherit: true,
		isNonstandard: null,
	},
	victreebelite: {
		inherit: true,
		isNonstandard: null,
	},
	sunflorite: {
		inherit: true,
		isNonstandard: null,
	},
	relicanthite: {
		inherit: true,
		isNonstandard: null,
	},
	whiscashite: {
		inherit: true,
		isNonstandard: null,
	},
	tangrowthitex: {
		inherit: true,
		isNonstandard: null,
	},
	tangrowthitey: {
		inherit: true,
		isNonstandard: null,
	},
	tangrowthitez: {
		inherit: true,
		isNonstandard: null,
	},
	luvdiscitex: {
		inherit: true,
		isNonstandard: null,
	},
	luvdiscitey: {
		inherit: true,
		isNonstandard: null,
	},
	jumpluffitex: {
		inherit: true,
		isNonstandard: null,
	},
	jumpluffitey: {
		inherit: true,
		isNonstandard: null,
	},
	magcargite: {
		inherit: true,
		isNonstandard: null,
	},
	poliwrathite: {
		inherit: true,
		isNonstandard: null,
	},
	rapidashitey: {
		inherit: true,
		isNonstandard: null,
	},
	rapidashitex: {
		inherit: true,
		isNonstandard: null,
	},
	ninetalesite: {
		inherit: true,
		isNonstandard: null,
	},
	heatmorite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditeg: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditer: {
		inherit: true,
		isNonstandard: null,
	},
	arcaninite: {
		inherit: true,
		isNonstandard: null,
	},
	magmortarite: {
		inherit: true,
		isNonstandard: null,
	},
	snorlaxite: {
		inherit: true,
		isNonstandard: null,
	},
	spindite: {
		inherit: true,
		isNonstandard: null,
	},
	pyroarite: {
		inherit: true,
		isNonstandard: null,
	},
	slakingite: {
		inherit: true,
		isNonstandard: null,
	},
	steamistite: {
		inherit: true,
		isNonstandard: null,
	},
	stweamsite: {
		inherit: true,
		isNonstandard: null,
	},
	steamnite: {
		inherit: true,
		isNonstandard: null,
	},
	thorncrown: {
		inherit: true,
		isNonstandard: null,
	},
	pricklythorns: {
		inherit: true,
		isNonstandard: null,
	},
	pressuredgem: {
		inherit: true,
		isNonstandard: null,
	},
	pizzaurexitex: {
		inherit: true,
		isNonstandard: null,
	},
	tenablerusite: {
		inherit: true,
		isNonstandard: null,
	},
	canyouite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditei: {
		inherit: true,
		isNonstandard: null,
	},
	magmocketite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditew: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditef: {
		inherit: true,
		isNonstandard: null,
	},
	ludicolite: {
		inherit: true,
		isNonstandard: null,
	},
	shiftryite: {
		inherit: true,
		isNonstandard: null,
	},
	persianite: {
		inherit: true,
		isNonstandard: null,
	},
	golemite: {
		inherit: true,
		isNonstandard: null,
	},
	tsareenite: {
		inherit: true,
		isNonstandard: null,
	},
	pizzaurexitey: {
		inherit: true,
		isNonstandard: null,
	},
	pelipperite: {
		inherit: true,
		isNonstandard: null,
	},
	sudowoodite: {
		inherit: true,
		isNonstandard: null,
	},
	armaldite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditeb: {
		inherit: true,
		isNonstandard: null,
	},
	mismagiusite: {
		inherit: true,
		isNonstandard: null,
	},
	snatanite: {
		inherit: true,
		isNonstandard: null,
	},
	pagieite: {
		inherit: true,
		isNonstandard: null,
	},
	booklyite: {
		inherit: true,
		isNonstandard: null,
	},
	lusfairite: {
		inherit: true,
		isNonstandard: null,
	},
	boxoite: {
		inherit: true,
		isNonstandard: null,
	},
	poweredfan: {
		inherit: true,
		isNonstandard: null,
	},
	thickscarf: {
		inherit: true,
		isNonstandard: null,
	},
	wheelchair: {
		inherit: true,
		isNonstandard: null,
	},
	shockorb: {
		inherit: true,
		isNonstandard: null,
	},
	frostorb: {
		inherit: true,
		isNonstandard: null,
	},
	naporb: {
		inherit: true,
		isNonstandard: null,
	},
	woodgem: {
		inherit: true,
		isNonstandard: null,
	},
	magmagem: {
		inherit: true,
		isNonstandard: null,
	},
	steamgem: {
		inherit: true,
		isNonstandard: null,
	},
	windgem: {
		inherit: true,
		isNonstandard: null,
	},
	papergem: {
		inherit: true,
		isNonstandard: null,
	},
	techgem: {
		inherit: true,
		isNonstandard: null,
	},
	magicgem: {
		inherit: true,
		isNonstandard: null,
	},
	rubbergem: {
		inherit: true,
		isNonstandard: null,
	},
	feargem: {
		inherit: true,
		isNonstandard: null,
	},
	lightgem: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicgem: {
		inherit: true,
		isNonstandard: null,
	},
	soundgem: {
		inherit: true,
		isNonstandard: null,
	},
	foodgem: {
		inherit: true,
		isNonstandard: null,
	},
	zombiegem: {
		inherit: true,
		isNonstandard: null,
	},
	nucleargem: {
		inherit: true,
		isNonstandard: null,
	},
	virusgem: {
		inherit: true,
		isNonstandard: null,
	},
	cybergem: {
		inherit: true,
		isNonstandard: null,
	},
	fabricgem: {
		inherit: true,
		isNonstandard: null,
	},
	chaosgem: {
		inherit: true,
		isNonstandard: null,
	},
	divinegem: {
		inherit: true,
		isNonstandard: null,
	},
	qmarksgem: {
		inherit: true,
		isNonstandard: null,
	},
	timegem: {
		inherit: true,
		isNonstandard: null,
	},
	paintgem: {
		inherit: true,
		isNonstandard: null,
	},
	crystalgem: {
		inherit: true,
		isNonstandard: null,
	},
	memegem: {
		inherit: true,
		isNonstandard: null,
	},
	bloodgem: {
		inherit: true,
		isNonstandard: null,
	},
	greasygem: {
		inherit: true,
		isNonstandard: null,
	},
	heartgem: {
		inherit: true,
		isNonstandard: null,
	},
	ogregem: {
		inherit: true,
		isNonstandard: null,
	},
	shadowgem: {
		inherit: true,
		isNonstandard: null,
	},
	acidrock: {
		inherit: true,
		isNonstandard: null,
	},
	blackrock: {
		inherit: true,
		isNonstandard: null,
	},
	hulklearite: {
		inherit: true,
		isNonstandard: null,
	},
	fearowite: {
		inherit: true,
		isNonstandard: null,
	},
	skippingstone: {
		inherit: true,
		isNonstandard: null,
	},
	arrowhead: {
		inherit: true,
		isNonstandard: null,
	},
	bootsofblindingspeed: {
		inherit: true,
		isNonstandard: null,
	},
	minigalaxy: {
		inherit: true,
		isNonstandard: null,
	},
	mienshaonite: {
		inherit: true,
		isNonstandard: null,
	},
	lipstick: {
		inherit: true,
		isNonstandard: null,
	},
	gascan: {
		inherit: true,
		isNonstandard: null,
	},
	spices: {
		inherit: true,
		isNonstandard: null,
	},
	kettle: {
		inherit: true,
		isNonstandard: null,
	},
	magmapowder: {
		inherit: true,
		isNonstandard: null,
	},
	sapling: {
		inherit: true,
		isNonstandard: null,
	},
	fertilizer: {
		inherit: true,
		isNonstandard: null,
	},
	sturdypebbles: {
		inherit: true,
		isNonstandard: null,
	},
	sandycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	rainycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	snowycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	sunnycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	lamwerberry: {
		inherit: true,
		isNonstandard: null,
	},
	prigtinberry: {
		inherit: true,
		isNonstandard: null,
	},
	borcygberry: {
		inherit: true,
		isNonstandard: null,
	},
	lascetberry: {
		inherit: true,
		isNonstandard: null,
	},
	yboogberry: {
		inherit: true,
		isNonstandard: null,
	},
	shieginberry: {
		inherit: true,
		isNonstandard: null,
	},
	exretberry: {
		inherit: true,
		isNonstandard: null,
	},
	cousactiberry: {
		inherit: true,
		isNonstandard: null,
	},
	rottunberry: {
		inherit: true,
		isNonstandard: null,
	},
	niossifberry: {
		inherit: true,
		isNonstandard: null,
	},
	tahrestberry: {
		inherit: true,
		isNonstandard: null,
	},
	ackegapberry: {
		inherit: true,
		isNonstandard: null,
	},
	thiclonberry: {
		inherit: true,
		isNonstandard: null,
	},
	naltereberry: {
		inherit: true,
		isNonstandard: null,
	},
	istartberry: {
		inherit: true,
		isNonstandard: null,
	},
	stomegenberry: {
		inherit: true,
		isNonstandard: null,
	},
	fohazamberry: {
		inherit: true,
		isNonstandard: null,
	},
	lomeitberry: {
		inherit: true,
		isNonstandard: null,
	},
	symgrieberry: {
		inherit: true,
		isNonstandard: null,
	},
	murkycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	acidycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	blazingfeather: {
		inherit: true,
		isNonstandard: null,
	},
	riotshield: {
		inherit: true,
		isNonstandard: null,
	},
	falloutcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	grassycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	mistycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	electriccapsule: {
		inherit: true,
		isNonstandard: null,
	},
	psychiccapsule: {
		inherit: true,
		isNonstandard: null,
	},
	icycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	marshycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	wizardcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	volcaniccapsule: {
		inherit: true,
		isNonstandard: null,
	},
	starfieldcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	librarycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	greencard: {
		inherit: true,
		isNonstandard: null,
	},
	holyshield: {
		inherit: true,
		isNonstandard: null,
	},
	lavarock: {
		inherit: true,
		isNonstandard: null,
	},
	arhelmet: {
		inherit: true,
		isNonstandard: null,
	},
	vrheadset: {
		inherit: true,
		isNonstandard: null,
	},
	boxinggloves: {
		inherit: true,
		isNonstandard: null,
	},
	spikedboots: {
		inherit: true,
		isNonstandard: null,
	},
	shoepolish: {
		inherit: true,
		isNonstandard: null,
	},
	trainingglove: {
		inherit: true,
		isNonstandard: null,
	},
	sandals: {
		inherit: true,
		isNonstandard: null,
	},
	skis: {
		inherit: true,
		isNonstandard: null,
	},
	skates: {
		inherit: true,
		isNonstandard: null,
	},
	librarycard: {
		inherit: true,
		isNonstandard: null,
	},
	saunaheater: {
		inherit: true,
		isNonstandard: null,
	},
	foggysteamer: {
		inherit: true,
		isNonstandard: null,
	},
	swimsuit: {
		inherit: true,
		isNonstandard: null,
	},
	volcanicseed: {
		inherit: true,
		isNonstandard: null,
	},
	marshyseed: {
		inherit: true,
		isNonstandard: null,
	},
	tunlawberry: {
		inherit: true,
		isNonstandard: null,
	},
	excisberry: {
		inherit: true,
		isNonstandard: null,
	},
	coagberry: {
		inherit: true,
		isNonstandard: null,
	},
	ambrosaberry: {
		inherit: true,
		isNonstandard: null,
	},
	wingrenberry: {
		inherit: true,
		isNonstandard: null,
	},
	garsinberry: {
		inherit: true,
		isNonstandard: null,
	},
	yllohberry: {
		inherit: true,
		isNonstandard: null,
	},
	looffahberry: {
		inherit: true,
		isNonstandard: null,
	},
	bandaid: {
		inherit: true,
		isNonstandard: null,
	},
	librarybinding: {
		inherit: true,
		isNonstandard: null,
	},
	cyberspacecapsule: {
		inherit: true,
		isNonstandard: null,
	},
	gallerycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	choicejacket: {
		inherit: true,
		isNonstandard: null,
	},
	choicecloak: {
		inherit: true,
		isNonstandard: null,
	},
	mettleberry: {
		inherit: true,
		isNonstandard: null,
	},
	boisonberry: {
		inherit: true,
		isNonstandard: null,
	},
	perepberry: {
		inherit: true,
		isNonstandard: null,
	},
	dollberry: {
		inherit: true,
		isNonstandard: null,
	},
	normaldust: {
		inherit: true,
		isNonstandard: null,
	},
	waterdust: {
		inherit: true,
		isNonstandard: null,
	},
	firedust: {
		inherit: true,
		isNonstandard: null,
	},
	grassdust: {
		inherit: true,
		isNonstandard: null,
	},
	fightingdust: {
		inherit: true,
		isNonstandard: null,
	},
	flyingdust: {
		inherit: true,
		isNonstandard: null,
	},
	poisondust: {
		inherit: true,
		isNonstandard: null,
	},
	grounddust: {
		inherit: true,
		isNonstandard: null,
	},
	rockdust: {
		inherit: true,
		isNonstandard: null,
	},
	bugdust: {
		inherit: true,
		isNonstandard: null,
	},
	ghostdust: {
		inherit: true,
		isNonstandard: null,
	},
	electricdust: {
		inherit: true,
		isNonstandard: null,
	},
	psychicdust: {
		inherit: true,
		isNonstandard: null,
	},
	icedust: {
		inherit: true,
		isNonstandard: null,
	},
	steeldust: {
		inherit: true,
		isNonstandard: null,
	},
	darkdust: {
		inherit: true,
		isNonstandard: null,
	},
	dragondust: {
		inherit: true,
		isNonstandard: null,
	},
	fairydust: {
		inherit: true,
		isNonstandard: null,
	},
	wooddust: {
		inherit: true,
		isNonstandard: null,
	},
	magmadust: {
		inherit: true,
		isNonstandard: null,
	},
	steamdust: {
		inherit: true,
		isNonstandard: null,
	},
	winddust: {
		inherit: true,
		isNonstandard: null,
	},
	paperdust: {
		inherit: true,
		isNonstandard: null,
	},
	techdust: {
		inherit: true,
		isNonstandard: null,
	},
	rubberdust: {
		inherit: true,
		isNonstandard: null,
	},
	feardust: {
		inherit: true,
		isNonstandard: null,
	},
	magicdust: {
		inherit: true,
		isNonstandard: null,
	},
	lightdust: {
		inherit: true,
		isNonstandard: null,
	},
	cosmicdust: {
		inherit: true,
		isNonstandard: null,
	},
	sounddust: {
		inherit: true,
		isNonstandard: null,
	},
	fooddust: {
		inherit: true,
		isNonstandard: null,
	},
	zombiedust: {
		inherit: true,
		isNonstandard: null,
	},
	nucleardust: {
		inherit: true,
		isNonstandard: null,
	},
	virusdust: {
		inherit: true,
		isNonstandard: null,
	},
	cyberdust: {
		inherit: true,
		isNonstandard: null,
	},
	glassdust: {
		inherit: true,
		isNonstandard: null,
	},
	plasticdust: {
		inherit: true,
		isNonstandard: null,
	},
	fabricdust: {
		inherit: true,
		isNonstandard: null,
	},
	chaosdust: {
		inherit: true,
		isNonstandard: null,
	},
	divinedust: {
		inherit: true,
		isNonstandard: null,
	},
	timedust: {
		inherit: true,
		isNonstandard: null,
	},
	paintdust: {
		inherit: true,
		isNonstandard: null,
	},
	crystaldust: {
		inherit: true,
		isNonstandard: null,
	},
	memedust: {
		inherit: true,
		isNonstandard: null,
	},
	blooddust: {
		inherit: true,
		isNonstandard: null,
	},
	greasydust: {
		inherit: true,
		isNonstandard: null,
	},
	heartdust: {
		inherit: true,
		isNonstandard: null,
	},
	ogredust: {
		inherit: true,
		isNonstandard: null,
	},
	qmarksdust: {
		inherit: true,
		isNonstandard: null,
	},
	shadowdust: {
		inherit: true,
		isNonstandard: null,
	},
	icepack: {
		inherit: true,
		isNonstandard: null,
	},
	novicebelt: {
		inherit: true,
		isNonstandard: null,
	},
	gravitymodule: {
		inherit: true,
		isNonstandard: null,
	},
	rockcandy: {
		inherit: true,
		isNonstandard: null,
	},
	gubiberry: {
		inherit: true,
		isNonstandard: null,
	},
	siberrberry: {
		inherit: true,
		isNonstandard: null,
	},
	waterballoon: {
		inherit: true,
		isNonstandard: null,
	},
	mudballoon: {
		inherit: true,
		isNonstandard: null,
	},
	magmaballoon: {
		inherit: true,
		isNonstandard: null,
	},
	steamballoon: {
		inherit: true,
		isNonstandard: null,
	},
	supressionstone: {
		inherit: true,
		isNonstandard: null,
	},
	resistancepolicy: {
		inherit: true,
		isNonstandard: null,
	},
	chloroflower: {
		inherit: true,
		isNonstandard: null,
	},
	coconaberry: {
		inherit: true,
		isNonstandard: null,
	},
	gravityseed: {
		inherit: true,
		isNonstandard: null,
	},
	sunglasses: {
		inherit: true,
		isNonstandard: null,
	},
	gravitycore: {
		inherit: true,
		isNonstandard: null,
	},
	sandcastlekit: {
		inherit: true,
		isNonstandard: null,
	},
	raincoat: {
		inherit: true,
		isNonstandard: null,
	},
	ativumberry: {
		inherit: true,
		isNonstandard: null,
	},
	igaradberry: {
		inherit: true,
		isNonstandard: null,
	},
	inshuberry: {
		inherit: true,
		isNonstandard: null,
	},
	drakfruberry: {
		inherit: true,
		isNonstandard: null,
	},
	pyscoberry: {
		inherit: true,
		isNonstandard: null,
	},
	ogravberry: {
		inherit: true,
		isNonstandard: null,
	},
	poltraberry: {
		inherit: true,
		isNonstandard: null,
	},
	cowbell: {
		inherit: true,
		isNonstandard: null,
	},
	iaraytberry: {
		inherit: true,
		isNonstandard: null,
	},
	zodziberry: {
		inherit: true,
		isNonstandard: null,
	},
	arcakberry: {
		inherit: true,
		isNonstandard: null,
	},
	shurbberry: {
		inherit: true,
		isNonstandard: null,
	},
	vaccuberry: {
		inherit: true,
		isNonstandard: null,
	},
	gluttberry: {
		inherit: true,
		isNonstandard: null,
	},
	tivomberry: {
		inherit: true,
		isNonstandard: null,
	},
	srapyberry: {
		inherit: true,
		isNonstandard: null,
	},
	invertedrune: {
		inherit: true,
		isNonstandard: null,
	},
	gouraberry: {
		inherit: true,
		isNonstandard: null,
	},
	gravitycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	chaosflute: {
		inherit: true,
		isNonstandard: null,
	},
	flyingballoon: {
		inherit: true,
		isNonstandard: null,
	},
	pandemiccapsule: {
		inherit: true,
		isNonstandard: null,
	},
	aethercapsule: {
		inherit: true,
		isNonstandard: null,
	},
	steamyrock: {
		inherit: true,
		isNonstandard: null,
	},
	featherrock: {
		inherit: true,
		isNonstandard: null,
	},
	erodedrock: {
		inherit: true,
		isNonstandard: null,
	},
	scalyrock: {
		inherit: true,
		isNonstandard: null,
	},
	chargedrock: {
		inherit: true,
		isNonstandard: null,
	},
	brightrock: {
		inherit: true,
		isNonstandard: null,
	},
	mossyrock: {
		inherit: true,
		isNonstandard: null,
	},
	weirdrock: {
		inherit: true,
		isNonstandard: null,
	},
	virtualrock: {
		inherit: true,
		isNonstandard: null,
	},
	reflectiverock: {
		inherit: true,
		isNonstandard: null,
	},
	radioactiverock: {
		inherit: true,
		isNonstandard: null,
	},
	paperrock: {
		inherit: true,
		isNonstandard: null,
	},
	sweetrock: {
		inherit: true,
		isNonstandard: null,
	},
	viralrock: {
		inherit: true,
		isNonstandard: null,
	},
	woodenrock: {
		inherit: true,
		isNonstandard: null,
	},
	echorock: {
		inherit: true,
		isNonstandard: null,
	},
	clasticrock: {
		inherit: true,
		isNonstandard: null,
	},
	swarmedrock: {
		inherit: true,
		isNonstandard: null,
	},
	chromerock: {
		inherit: true,
		isNonstandard: null,
	},
	paintedrock: {
		inherit: true,
		isNonstandard: null,
	},
	bloodyrock: {
		inherit: true,
		isNonstandard: null,
	},
	plagueorb: {
		inherit: true,
		isNonstandard: null,
	},
	infernoorb: {
		inherit: true,
		isNonstandard: null,
	},
	stormorb: {
		inherit: true,
		isNonstandard: null,
	},
	glassarmor: {
		inherit: true,
		isNonstandard: null,
	},
	confoundorb: {
		inherit: true,
		isNonstandard: null,
	},
	tormentorb: {
		inherit: true,
		isNonstandard: null,
	},
	tauntorb: {
		inherit: true,
		isNonstandard: null,
	},
	hotchocolate: {
		inherit: true,
		isNonstandard: null,
	},
	icecream: {
		inherit: true,
		isNonstandard: null,
	},
	yogurt: {
		inherit: true,
		isNonstandard: null,
	},
	mixedmushrooms: {
		inherit: true,
		isNonstandard: null,
	},
	carritberry: {
		inherit: true,
		isNonstandard: null,
	},
	ginsioberry: {
		inherit: true,
		isNonstandard: null,
	},
	rottedrock: {
		inherit: true,
		isNonstandard: null,
	},
	feastcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	plainrock: {
		inherit: true,
		isNonstandard: null,
	},
	graveyardcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	iceballoon: {
		inherit: true,
		isNonstandard: null,
	},
	arboreumcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	saunacapsule: {
		inherit: true,
		isNonstandard: null,
	},
	sexyswimsuit: {
		inherit: true,
		isNonstandard: null,
	},
	rainbarrel: {
		inherit: true,
		isNonstandard: null,
	},
	blaringspeaker: {
		inherit: true,
		isNonstandard: null,
	},
	factorycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	recyclecapsule: {
		inherit: true,
		isNonstandard: null,
	},
	prankkit: {
		inherit: true,
		isNonstandard: null,
	},
	nightlight: {
		inherit: true,
		isNonstandard: null,
	},
	plasticrock: {
		inherit: true,
		isNonstandard: null,
	},
	bruxishite: {
		inherit: true,
		isNonstandard: null,
	},
	drampite: {
		inherit: true,
		isNonstandard: null,
	},
	youthincense: {
		inherit: true,
		isNonstandard: null,
	},
	marshyincense: {
		inherit: true,
		isNonstandard: null,
	},
	teaincense: {
		inherit: true,
		isNonstandard: null,
	},
	trojorsite: {
		inherit: true,
		isNonstandard: null,
	},
	dusknoirite: {
		inherit: true,
		isNonstandard: null,
	},
	manarock: {
		inherit: true,
		isNonstandard: null,
	},
	gueriestite: {
		inherit: true,
		isNonstandard: null,
	},
	darkballoon: {
		inherit: true,
		isNonstandard: null,
	},
	c4: {
		inherit: true,
		isNonstandard: null,
	},
	soupbowl: {
		inherit: true,
		isNonstandard: null,
	},
	toiletpaper: {
		inherit: true,
		isNonstandard: null,
	},
	swarmcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	prismolisite: {
		inherit: true,
		isNonstandard: null,
	},
	horrorizer: {
		inherit: true,
		isNonstandard: null,
	},
	steadywindcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	tempestcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	invertedcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	bouncycapsule: {
		inherit: true,
		isNonstandard: null,
	},
	manaversecapsule: {
		inherit: true,
		isNonstandard: null,
	},
	ultracloak: {
		inherit: true,
		isNonstandard: null,
	},
	ultrascarf: {
		inherit: true,
		isNonstandard: null,
	},
	godsorb: {
		inherit: true,
		isNonstandard: null,
	},
	probopassite: {
		inherit: true,
		isNonstandard: null,
	},
	vampirefangs: {
		inherit: true,
		isNonstandard: null,
	},
	eviolate: {
		inherit: true,
		isNonstandard: null,
	},
	archersbow: {
		inherit: true,
		isNonstandard: null,
	},
	spiritbell: {
		inherit: true,
		isNonstandard: null,
	},
	battlewhip: {
		inherit: true,
		isNonstandard: null,
	},
	weakeningwhip: {
		inherit: true,
		isNonstandard: null,
	},
	shatteringhammer: {
		inherit: true,
		isNonstandard: null,
	},
	distracttrumpet: {
		inherit: true,
		isNonstandard: null,
	},
	enfeeblescepter: {
		inherit: true,
		isNonstandard: null,
	},
	gooeygloves: {
		inherit: true,
		isNonstandard: null,
	},
	blindingprism: {
		inherit: true,
		isNonstandard: null,
	},
	alluringnectar: {
		inherit: true,
		isNonstandard: null,
	},
	curseddoll: {
		inherit: true,
		isNonstandard: null,
	},
	gigadrill: {
		inherit: true,
		isNonstandard: null,
	},
	sheriffhat: {
		inherit: true,
		isNonstandard: null,
	},
	sheriffbadge: {
		inherit: true,
		isNonstandard: null,
	},
	wildwestcapsule: {
		inherit: true,
		isNonstandard: null,
	},
	safetyhelmet: {
		inherit: true,
		isNonstandard: null,
	},
	pengemperorite: {
		inherit: true,
		isNonstandard: null,
	},
	golurkite: {
		inherit: true,
		isNonstandard: null,
	},
	nidoqueenite: {
		inherit: true,
		isNonstandard: null,
	},
	dontstopmenow: {
		inherit: true,
		isNonstandard: null,
	},
	sanshoodie: {
		inherit: true,
		isNonstandard: null,
	},
	eviocicle: {
		inherit: true,
		isNonstandard: null,
	},
	wackorb: {
		inherit: true,
		isNonstandard: null,
	},
	fancyapple: {
		inherit: true,
		isNonstandard: null,
	},
	fruitbunch: {
		inherit: true,
		isNonstandard: null,
	},
	tinofbeans: {
		inherit: true,
		isNonstandard: null,
	},
	friedfood: {
		inherit: true,
		isNonstandard: null,
	},
	spicemix: {
		inherit: true,
		isNonstandard: null,
	},
	saladmix: {
		inherit: true,
		isNonstandard: null,
	},
	magnezonite: {
		inherit: true,
		isNonstandard: null,
	},
	saturnorb: {
		inherit: true,
		isNonstandard: null,
	},
	jupiterorb: {
		inherit: true,
		isNonstandard: null,
	},
	neptuneorb: {
		inherit: true,
		isNonstandard: null,
	},
	uranusorb: {
		inherit: true,
		isNonstandard: null,
	},
	borderwall: {
		inherit: true,
		isNonstandard: null,
	},
	brittlebones: {
		inherit: true,
		isNonstandard: null,
	},
	sodapowder: {
		inherit: true,
		isNonstandard: null,
	},
	supermalevitality: {
		inherit: true,
		isNonstandard: null,
	},
	brainforce: {
		inherit: true,
		isNonstandard: null,
	},
	angerorb: {
		inherit: true,
		isNonstandard: null,
	},
	breakdownorb: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditec: {
		inherit: true,
		isNonstandard: null,
	},
	pitchsludge: {
		inherit: true,
		isNonstandard: null,
	},
	craggyhelmet: {
		inherit: true,
		isNonstandard: null,
	},
	fangclaw: {
		inherit: true,
		isNonstandard: null,
	},
	theberry: {
		inherit: true,
		isNonstandard: null,
	},
	banhammer: {
		inherit: true,
		isNonstandard: null,
	},
	firewallarmor: {
		inherit: true,
		isNonstandard: null,
	},
	virusbuster: {
		inherit: true,
		isNonstandard: null,
	},
	necronomicon: {
		inherit: true,
		isNonstandard: null,
	},
	superpaper: {
		inherit: true,
		isNonstandard: null,
	},
	balletoutfit: {
		inherit: true,
		isNonstandard: null,
	},
	kaleidoscope: {
		inherit: true,
		isNonstandard: null,
	},
	coldpack: {
		inherit: true,
		isNonstandard: null,
	},
	skyrimse: {
		inherit: true,
		isNonstandard: null,
	},
	weddingdress: {
		inherit: true,
		isNonstandard: null,
	},
	bunnysuit: {
		inherit: true,
		isNonstandard: null,
	},
	catears: {
		inherit: true,
		isNonstandard: null,
	},
	instantnoodles: {
		inherit: true,
		isNonstandard: null,
	},
	sausages: {
		inherit: true,
		isNonstandard: null,
	},
	packagedcurry: {
		inherit: true,
		isNonstandard: null,
	},
	precookedburger: {
		inherit: true,
		isNonstandard: null,
	},
	freshcream: {
		inherit: true,
		isNonstandard: null,
	},
	/** Wack items that have their name taken by Clover */
	glassgem: {
		inherit: true,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Glass' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		isNonstandard: null,
	},
	plasticgem: {
		inherit: true,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Plastic' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		isNonstandard: null,
	},
	propellerhat: {
		inherit: true,
		onModifyMovePriority: 1,
		onModifyMove(move) {
			delete move.flags['gravity'];
		},
		isNonstandard: null,
	},
};

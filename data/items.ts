export const Items: {[itemid: string]: ItemData} = {
	abilityshield: {
		name: "Ability Shield",
		spritenum: 0, // TODO
		ignoreKlutz: true,
		// Neutralizing Gas protection implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
		// and in Neutralizing Gas itself within data/abilities.ts
		onSetAbility(ability, target, source, effect) {
			if (effect && effect.effectType === 'Ability' && effect.name !== 'Trace') {
				this.add('-ability', source, effect);
			}
			this.add('-block', target, 'item: Ability Shield');
			return null;
		},
		// Mold Breaker protection implemented in Battle.suppressingAbility() within sim/battle.ts
		num: 1881,
		gen: 9,
	},
	abomasite: {
		name: "Abomasite",
		spritenum: 575,
		megaStone: "Abomasnow-Mega",
		megaEvolves: "Abomasnow",
		itemUser: ["Abomasnow"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		isNonstandard: "Past",
	},
	absolite: {
		name: "Absolite",
		spritenum: 576,
		megaStone: "Absol-Mega",
		megaEvolves: "Absol",
		itemUser: ["Absol"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 677,
		gen: 6,
		isNonstandard: "Past",
	},
	absorbbulb: {
		name: "Absorb Bulb",
		spritenum: 2,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				target.useItem();
			}
		},
		boosts: {
			spa: 1,
		},
		num: 545,
		gen: 5,
	},
	adamantcrystal: {
		name: "Adamant Crystal",
		spritenum: 4, // TODO
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 483 && (move.type === 'Steel' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 483 || pokemon.baseSpecies.num === 483) {
				return false;
			}
			return true;
		},
		forcedForme: "Dialga-Origin",
		itemUser: ["Dialga-Origin"],
		num: 1777,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	adamantorb: {
		name: "Adamant Orb",
		spritenum: 4,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 483 && (move.type === 'Steel' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Dialga"],
		num: 135,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	adrenalineorb: {
		name: "Adrenaline Orb",
		spritenum: 660,
		fling: {
			basePower: 30,
		},
		onBoostPriority: 1,
		onBoost(boost, target) {
			target.itemState.lastAtk = target.boosts['atk'];
		},
		onAfterBoost(boost, target, source, effect) {
			const noAtkChange = boost.atk! < 0 && target.boosts['atk'] === -6 && target.itemState.lastAtk === -6;
			const noContraryAtkChange = boost.atk! > 0 && target.boosts['atk'] === 6 && target.itemState.lastAtk === 6;
			if (target.boosts['spe'] === 6 || noAtkChange || noContraryAtkChange) {
				return;
			}
			if (effect.name === 'Intimidate') {
				target.useItem();
			}
		},
		boosts: {
			spe: 1,
		},
		num: 846,
		gen: 7,
	},
	aerodactylite: {
		name: "Aerodactylite",
		spritenum: 577,
		megaStone: "Aerodactyl-Mega",
		megaEvolves: "Aerodactyl",
		itemUser: ["Aerodactyl"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 672,
		gen: 6,
		isNonstandard: "Past",
	},
	aggronite: {
		name: "Aggronite",
		spritenum: 578,
		megaStone: "Aggron-Mega",
		megaEvolves: "Aggron",
		itemUser: ["Aggron"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 667,
		gen: 6,
		isNonstandard: "Past",
	},
	aguavberry: {
		name: "Aguav Berry",
		spritenum: 5,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 162,
		gen: 3,
	},
	airballoon: {
		name: "Air Balloon",
		spritenum: 6,
		fling: {
			basePower: 10,
		},
		onStart(target) {
			if (!target.ignoringItem() && !this.field.getPseudoWeather('gravity')) {
				this.add('-item', target, 'Air Balloon');
			}
		},
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		onDamagingHit(damage, target, source, move) {
			this.add('-enditem', target, 'Air Balloon');
			target.item = '';
			target.itemState = {id: '', target};
			this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
		},
		onAfterSubDamage(damage, target, source, effect) {
			this.debug('effect: ' + effect.id);
			if (effect.effectType === 'Move') {
				this.add('-enditem', target, 'Air Balloon');
				target.item = '';
				target.itemState = {id: '', target};
				this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
			}
		},
		num: 541,
		gen: 5,
	},
	alakazite: {
		name: "Alakazite",
		spritenum: 579,
		megaStone: "Alakazam-Mega",
		megaEvolves: "Alakazam",
		itemUser: ["Alakazam"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 679,
		gen: 6,
		isNonstandard: "Past",
	},
	aloraichiumz: {
		name: "Aloraichium Z",
		spritenum: 655,
		onTakeItem: false,
		zMove: "Stoked Sparksurfer",
		zMoveFrom: "Thunderbolt",
		itemUser: ["Raichu-Alola"],
		num: 803,
		gen: 7,
		isNonstandard: "Past",
	},
	altarianite: {
		name: "Altarianite",
		spritenum: 615,
		megaStone: "Altaria-Mega",
		megaEvolves: "Altaria",
		itemUser: ["Altaria"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 755,
		gen: 6,
		isNonstandard: "Past",
	},
	ampharosite: {
		name: "Ampharosite",
		spritenum: 580,
		megaStone: "Ampharos-Mega",
		megaEvolves: "Ampharos",
		itemUser: ["Ampharos"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 658,
		gen: 6,
		isNonstandard: "Past",
	},
	apicotberry: {
		name: "Apicot Berry",
		spritenum: 10,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spd: 1});
		},
		num: 205,
		gen: 3,
	},
	armorfossil: {
		name: "Armor Fossil",
		spritenum: 12,
		fling: {
			basePower: 100,
		},
		num: 104,
		gen: 4,
		isNonstandard: "Past",
	},
	aspearberry: {
		name: "Aspear Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.cureStatus();
			}
		},
		num: 153,
		gen: 3,
	},
	assaultvest: {
		name: "Assault Vest",
		spritenum: 581,
		fling: {
			basePower: 80,
		},
		onModifySpDPriority: 1,
		onModifySpD(spd) {
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: 640,
		gen: 6,
	},
	audinite: {
		name: "Audinite",
		spritenum: 617,
		megaStone: "Audino-Mega",
		megaEvolves: "Audino",
		itemUser: ["Audino"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 757,
		gen: 6,
		isNonstandard: "Past",
	},
	auspiciousarmor: {
		name: "Auspicious Armor",
		spritenum: 0, // TODO
		num: 2344,
		gen: 9,
	},
	babiriberry: {
		name: "Babiri Berry",
		spritenum: 17,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Steel' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 199,
		gen: 4,
	},
	banettite: {
		name: "Banettite",
		spritenum: 582,
		megaStone: "Banette-Mega",
		megaEvolves: "Banette",
		itemUser: ["Banette"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 668,
		gen: 6,
		isNonstandard: "Past",
	},
	beastball: {
		name: "Beast Ball",
		spritenum: 661,
		num: 851,
		gen: 7,
		isPokeball: true,
	},
	beedrillite: {
		name: "Beedrillite",
		spritenum: 628,
		megaStone: "Beedrill-Mega",
		megaEvolves: "Beedrill",
		itemUser: ["Beedrill"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 770,
		gen: 6,
		isNonstandard: "Past",
	},
	belueberry: {
		name: "Belue Berry",
		spritenum: 21,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Electric",
		},
		onEat: false,
		num: 183,
		gen: 3,
		isNonstandard: "Past",
	},
	berryjuice: {
		name: "Berry Juice",
		spritenum: 22,
		fling: {
			basePower: 30,
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				if (this.runEvent('TryHeal', pokemon) && pokemon.useItem()) {
					this.heal(20);
				}
			}
		},
		num: 43,
		gen: 2,
		isNonstandard: "Past",
	},
	berrysweet: {
		name: "Berry Sweet",
		spritenum: 706,
		fling: {
			basePower: 10,
		},
		num: 1111,
		gen: 8,
		isNonstandard: "Past",
	},
	bigroot: {
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10,
		},
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		num: 296,
		gen: 4,
	},
	bindingband: {
		name: "Binding Band",
		spritenum: 31,
		fling: {
			basePower: 30,
		},
		// implemented in statuses
		num: 544,
		gen: 5,
	},
	blackbelt: {
		name: "Black Belt",
		spritenum: 32,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 241,
		gen: 2,
	},
	blackglasses: {
		name: "Black Glasses",
		spritenum: 35,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 240,
		gen: 2,
	},
	blacksludge: {
		name: "Black Sludge",
		spritenum: 34,
		fling: {
			basePower: 30,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		num: 281,
		gen: 4,
	},
	blastoisinite: {
		name: "Blastoisinite",
		spritenum: 583,
		megaStone: "Blastoise-Mega",
		megaEvolves: "Blastoise",
		itemUser: ["Blastoise"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
	},
	blazikenite: {
		name: "Blazikenite",
		spritenum: 584,
		megaStone: "Blaziken-Mega",
		megaEvolves: "Blaziken",
		itemUser: ["Blaziken"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 664,
		gen: 6,
		isNonstandard: "Past",
	},
	blueorb: {
		name: "Blue Orb",
		spritenum: 41,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Kyogre') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Kyogre-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Kyogre') return false;
			return true;
		},
		itemUser: ["Kyogre"],
		num: 535,
		gen: 6,
		isNonstandard: "Past",
	},
	blukberry: {
		name: "Bluk Berry",
		spritenum: 44,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fire",
		},
		onEat: false,
		num: 165,
		gen: 3,
		isNonstandard: "Past",
	},
	blunderpolicy: {
		name: "Blunder Policy",
		spritenum: 716,
		fling: {
			basePower: 80,
		},
		// Item activation located in scripts.js
		num: 1121,
		gen: 8,
	},
	boosterenergy: {
		name: "Booster Energy",
		spritenum: 0, // TODO
		onUpdate(pokemon) {
			if (pokemon.transformed) return;
			if (this.queue.peek(true)?.choice === 'runSwitch') return;

			if (pokemon.hasAbility('protosynthesis') && !this.field.isWeather('sunnyday') && pokemon.useItem()) {
				pokemon.addVolatile('protosynthesis');
			}
			if (pokemon.hasAbility('quarkdrive') && !this.field.isTerrain('electricterrain') && pokemon.useItem()) {
				pokemon.addVolatile('quarkdrive');
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.tags.includes("Paradox")) return false;
			return true;
		},
		num: 1880,
		gen: 9,
	},
	bottlecap: {
		name: "Bottle Cap",
		spritenum: 696,
		fling: {
			basePower: 30,
		},
		num: 795,
		gen: 7,
	},
	brightpowder: {
		name: "Bright Powder",
		spritenum: 51,
		fling: {
			basePower: 10,
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('brightpowder - decreasing accuracy');
			return this.chainModify([3686, 4096]);
		},
		num: 213,
		gen: 2,
	},
	buggem: {
		name: "Bug Gem",
		spritenum: 53,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Bug' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 558,
		gen: 5,
		isNonstandard: "Past",
	},
	bugmemory: {
		name: "Bug Memory",
		spritenum: 673,
		onMemory: 'Bug',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Bug",
		itemUser: ["Silvally-Bug"],
		num: 909,
		gen: 7,
		isNonstandard: "Past",
	},
	buginiumz: {
		name: "Buginium Z",
		spritenum: 642,
		onPlate: 'Bug',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Bug",
		forcedForme: "Arceus-Bug",
		num: 787,
		gen: 7,
		isNonstandard: "Past",
	},
	burndrive: {
		name: "Burn Drive",
		spritenum: 54,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Fire',
		forcedForme: "Genesect-Burn",
		itemUser: ["Genesect-Burn"],
		num: 118,
		gen: 5,
		isNonstandard: "Past",
	},
	cameruptite: {
		name: "Cameruptite",
		spritenum: 625,
		megaStone: "Camerupt-Mega",
		megaEvolves: "Camerupt",
		itemUser: ["Camerupt"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 767,
		gen: 6,
		isNonstandard: "Past",
	},
	cellbattery: {
		name: "Cell Battery",
		spritenum: 60,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Electric') {
				target.useItem();
			}
		},
		boosts: {
			atk: 1,
		},
		num: 546,
		gen: 5,
	},
	charcoal: {
		name: "Charcoal",
		spritenum: 61,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 249,
		gen: 2,
	},
	charizarditex: {
		name: "Charizardite X",
		spritenum: 585,
		megaStone: "Charizard-Mega-X",
		megaEvolves: "Charizard",
		itemUser: ["Charizard"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 660,
		gen: 6,
		isNonstandard: "Past",
	},
	charizarditey: {
		name: "Charizardite Y",
		spritenum: 586,
		megaStone: "Charizard-Mega-Y",
		megaEvolves: "Charizard",
		itemUser: ["Charizard"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 678,
		gen: 6,
		isNonstandard: "Past",
	},
	chartiberry: {
		name: "Charti Berry",
		spritenum: 62,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Rock' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 195,
		gen: 4,
	},
	cheriberry: {
		name: "Cheri Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		num: 149,
		gen: 3,
	},
	cherishball: {
		name: "Cherish Ball",
		spritenum: 64,
		num: 16,
		gen: 4,
		isPokeball: true,
		isNonstandard: "Unobtainable",
	},
	chestoberry: {
		name: "Chesto Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.cureStatus();
			}
		},
		num: 150,
		gen: 3,
	},
	chilanberry: {
		name: "Chilan Berry",
		spritenum: 66,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Normal",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (
				move.type === 'Normal' &&
				(!target.volatiles['substitute'] || move.flags['bypasssub'] || (move.infiltrates && this.gen >= 6))
			) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 200,
		gen: 4,
	},
	chilldrive: {
		name: "Chill Drive",
		spritenum: 67,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Ice',
		forcedForme: "Genesect-Chill",
		itemUser: ["Genesect-Chill"],
		num: 119,
		gen: 5,
		isNonstandard: "Past",
	},
	chippedpot: {
		name: "Chipped Pot",
		spritenum: 720,
		fling: {
			basePower: 80,
		},
		num: 1254,
		gen: 8,
	},
	choiceband: {
		name: "Choice Band",
		spritenum: 68,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 220,
		gen: 3,
	},
	choicescarf: {
		name: "Choice Scarf",
		spritenum: 69,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 287,
		gen: 4,
	},
	choicespecs: {
		name: "Choice Specs",
		spritenum: 70,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 297,
		gen: 4,
	},
	chopleberry: {
		name: "Chople Berry",
		spritenum: 71,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fighting' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 189,
		gen: 4,
	},
	clawfossil: {
		name: "Claw Fossil",
		spritenum: 72,
		fling: {
			basePower: 100,
		},
		num: 100,
		gen: 3,
		isNonstandard: "Past",
	},
	clearamulet: {
		name: "Clear Amulet",
		spritenum: 0, // TODO
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add('-fail', target, 'unboost', '[from] item: Clear Amulet', '[of] ' + target);
			}
		},
		num: 1882,
		gen: 9,
	},
	cloversweet: {
		name: "Clover Sweet",
		spritenum: 707,
		fling: {
			basePower: 10,
		},
		num: 1112,
		gen: 8,
		isNonstandard: "Past",
	},
	cobaberry: {
		name: "Coba Berry",
		spritenum: 76,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Flying' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 192,
		gen: 4,
	},
	colburberry: {
		name: "Colbur Berry",
		spritenum: 78,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Dark' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 198,
		gen: 4,
	},
	cornnberry: {
		name: "Cornn Berry",
		spritenum: 81,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Bug",
		},
		onEat: false,
		num: 175,
		gen: 3,
		isNonstandard: "Past",
	},
	coverfossil: {
		name: "Cover Fossil",
		spritenum: 85,
		fling: {
			basePower: 100,
		},
		num: 572,
		gen: 5,
		isNonstandard: "Past",
	},
	covertcloak: {
		name: "Covert Cloak",
		fling: {
			basePower: 10,
		},
		spritenum: 0, // TODO
		onModifySecondaries(secondaries) {
			this.debug('Covert Cloak prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		num: 1885,
		gen: 9,
	},
	crackedpot: {
		name: "Cracked Pot",
		spritenum: 719,
		fling: {
			basePower: 80,
		},
		num: 1253,
		gen: 8,
	},
	custapberry: {
		name: "Custap Berry",
		spritenum: 86,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ghost",
		},
		onFractionalPriorityPriority: -2,
		onFractionalPriority(priority, pokemon) {
			if (
				priority <= 0 &&
				(pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
				pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony))
			) {
				if (pokemon.eatItem()) {
					this.add('-activate', pokemon, 'item: Custap Berry', '[consumed]');
					return 0.1;
				}
			}
		},
		onEat() { },
		num: 210,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	damprock: {
		name: "Damp Rock",
		spritenum: 88,
		fling: {
			basePower: 60,
		},
		num: 285,
		gen: 4,
	},
	darkgem: {
		name: "Dark Gem",
		spritenum: 89,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Dark' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 562,
		gen: 5,
		isNonstandard: "Past",
	},
	darkmemory: {
		name: "Dark Memory",
		spritenum: 683,
		onMemory: 'Dark',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Dark",
		itemUser: ["Silvally-Dark"],
		num: 919,
		gen: 7,
		isNonstandard: "Past",
	},
	darkiniumz: {
		name: "Darkinium Z",
		spritenum: 646,
		onPlate: 'Dark',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Dark",
		forcedForme: "Arceus-Dark",
		num: 791,
		gen: 7,
		isNonstandard: "Past",
	},
	dawnstone: {
		name: "Dawn Stone",
		spritenum: 92,
		fling: {
			basePower: 80,
		},
		num: 109,
		gen: 4,
	},
	decidiumz: {
		name: "Decidium Z",
		spritenum: 650,
		onTakeItem: false,
		zMove: "Sinister Arrow Raid",
		zMoveFrom: "Spirit Shackle",
		itemUser: ["Decidueye"],
		num: 798,
		gen: 7,
		isNonstandard: "Past",
	},
	deepseascale: {
		name: "Deep Sea Scale",
		spritenum: 93,
		fling: {
			basePower: 30,
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl"],
		num: 227,
		gen: 3,
		isNonstandard: "Past",
	},
	deepseatooth: {
		name: "Deep Sea Tooth",
		spritenum: 94,
		fling: {
			basePower: 90,
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Clamperl"],
		num: 226,
		gen: 3,
		isNonstandard: "Past",
	},
	destinyknot: {
		name: "Destiny Knot",
		spritenum: 95,
		fling: {
			basePower: 10,
		},
		onAttractPriority: -100,
		onAttract(target, source) {
			this.debug('attract intercepted: ' + target + ' from ' + source);
			if (!source || source === target) return;
			if (!source.volatiles['attract']) source.addVolatile('attract', target);
		},
		num: 280,
		gen: 4,
	},
	diancite: {
		name: "Diancite",
		spritenum: 624,
		megaStone: "Diancie-Mega",
		megaEvolves: "Diancie",
		itemUser: ["Diancie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 764,
		gen: 6,
		isNonstandard: "Past",
	},
	diveball: {
		name: "Dive Ball",
		spritenum: 101,
		num: 7,
		gen: 3,
		isPokeball: true,
	},
	domefossil: {
		name: "Dome Fossil",
		spritenum: 102,
		fling: {
			basePower: 100,
		},
		num: 102,
		gen: 3,
		isNonstandard: "Past",
	},
	dousedrive: {
		name: "Douse Drive",
		spritenum: 103,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Water',
		forcedForme: "Genesect-Douse",
		itemUser: ["Genesect-Douse"],
		num: 116,
		gen: 5,
		isNonstandard: "Past",
	},
	dracoplate: {
		name: "Draco Plate",
		spritenum: 105,
		onPlate: 'Dragon',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Dragon",
		num: 311,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	dragonfang: {
		name: "Dragon Fang",
		spritenum: 106,
		fling: {
			basePower: 70,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 250,
		gen: 2,
	},
	dragongem: {
		name: "Dragon Gem",
		spritenum: 107,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Dragon' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 561,
		gen: 5,
		isNonstandard: "Past",
	},
	dragonmemory: {
		name: "Dragon Memory",
		spritenum: 682,
		onMemory: 'Dragon',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Dragon",
		itemUser: ["Silvally-Dragon"],
		num: 918,
		gen: 7,
		isNonstandard: "Past",
	},
	dragonscale: {
		name: "Dragon Scale",
		spritenum: 108,
		fling: {
			basePower: 30,
		},
		num: 235,
		gen: 2,
		isNonstandard: "Past",
	},
	dragoniumz: {
		name: "Dragonium Z",
		spritenum: 645,
		onPlate: 'Dragon',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Dragon",
		forcedForme: "Arceus-Dragon",
		num: 790,
		gen: 7,
		isNonstandard: "Past",
	},
	dreadplate: {
		name: "Dread Plate",
		spritenum: 110,
		onPlate: 'Dark',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Dark",
		num: 312,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	dreamball: {
		name: "Dream Ball",
		spritenum: 111,
		num: 576,
		gen: 5,
		isPokeball: true,
	},
	dubiousdisc: {
		name: "Dubious Disc",
		spritenum: 113,
		fling: {
			basePower: 50,
		},
		num: 324,
		gen: 4,
		isNonstandard: "Past",
	},
	durinberry: {
		name: "Durin Berry",
		spritenum: 114,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Water",
		},
		onEat: false,
		num: 182,
		gen: 3,
		isNonstandard: "Past",
	},
	duskball: {
		name: "Dusk Ball",
		spritenum: 115,
		num: 13,
		gen: 4,
		isPokeball: true,
	},
	duskstone: {
		name: "Dusk Stone",
		spritenum: 116,
		fling: {
			basePower: 80,
		},
		num: 108,
		gen: 4,
	},
	earthplate: {
		name: "Earth Plate",
		spritenum: 117,
		onPlate: 'Ground',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ground",
		num: 305,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	eeviumz: {
		name: "Eevium Z",
		spritenum: 657,
		onTakeItem: false,
		zMove: "Extreme Evoboost",
		zMoveFrom: "Last Resort",
		itemUser: ["Eevee"],
		num: 805,
		gen: 7,
		isNonstandard: "Past",
	},
	ejectbutton: {
		name: "Eject Button",
		spritenum: 118,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondaryPriority: 2,
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && target.hp && move && move.category !== 'Status' && !move.isFutureMove) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.beingCalledBack || target.isSkyDropped()) return;
				if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
				for (const pokemon of this.getAllActive()) {
					if (pokemon.switchFlag === true) return;
				}
				target.switchFlag = true;
				if (target.useItem()) {
					source.switchFlag = false;
				} else {
					target.switchFlag = false;
				}
			}
		},
		num: 547,
		gen: 5,
	},
	ejectpack: {
		name: "Eject Pack",
		spritenum: 714,
		fling: {
			basePower: 50,
		},
		onAfterBoost(boost, target, source, effect) {
			if (this.activeMove?.id === 'partingshot') return;
			let eject = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					eject = true;
				}
			}
			if (eject) {
				if (target.hp) {
					if (!this.canSwitch(target.side)) return;
					if (target.volatiles['commanding'] || target.volatiles['commanded']) return;
					for (const pokemon of this.getAllActive()) {
						if (pokemon.switchFlag === true) return;
					}
					if (target.useItem()) target.switchFlag = true;
				}
			}
		},
		num: 1119,
		gen: 8,
	},
	electirizer: {
		name: "Electirizer",
		spritenum: 119,
		fling: {
			basePower: 80,
		},
		num: 322,
		gen: 4,
		isNonstandard: "Past",
	},
	electricgem: {
		name: "Electric Gem",
		spritenum: 120,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Electric' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 550,
		gen: 5,
		isNonstandard: "Past",
	},
	electricmemory: {
		name: "Electric Memory",
		spritenum: 679,
		onMemory: 'Electric',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Electric",
		itemUser: ["Silvally-Electric"],
		num: 915,
		gen: 7,
		isNonstandard: "Past",
	},
	electricseed: {
		name: "Electric Seed",
		spritenum: 664,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('electricterrain')) {
				pokemon.useItem();
			}
		},
		onTerrainChange(pokemon) {
			if (this.field.isTerrain('electricterrain')) {
				pokemon.useItem();
			}
		},
		boosts: {
			def: 1,
		},
		num: 881,
		gen: 7,
	},
	electriumz: {
		name: "Electrium Z",
		spritenum: 634,
		onPlate: 'Electric',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Electric",
		forcedForme: "Arceus-Electric",
		num: 779,
		gen: 7,
		isNonstandard: "Past",
	},
	enigmaberry: {
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Bug",
		},
		onHit(target, source, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				if (target.eatItem()) {
					this.heal(target.baseMaxhp / 4);
				}
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat() { },
		num: 208,
		gen: 3,
		isNonstandard: "Unobtainable",
	},
	eviolite: {
		name: "Eviolite",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		num: 538,
		gen: 5,
	},
	expertbelt: {
		name: "Expert Belt",
		spritenum: 132,
		fling: {
			basePower: 10,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 268,
		gen: 4,
	},
	fairiumz: {
		name: "Fairium Z",
		spritenum: 648,
		onPlate: 'Fairy',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fairy",
		forcedForme: "Arceus-Fairy",
		num: 793,
		gen: 7,
		isNonstandard: "Past",
	},
	fairygem: {
		name: "Fairy Gem",
		spritenum: 611,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Fairy' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 715,
		gen: 6,
		isNonstandard: "Past",
	},
	fairymemory: {
		name: "Fairy Memory",
		spritenum: 684,
		onMemory: 'Fairy',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fairy",
		itemUser: ["Silvally-Fairy"],
		num: 920,
		gen: 7,
		isNonstandard: "Past",
	},
	fastball: {
		name: "Fast Ball",
		spritenum: 137,
		num: 492,
		gen: 2,
		isPokeball: true,
	},
	fightinggem: {
		name: "Fighting Gem",
		spritenum: 139,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Fighting' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 553,
		gen: 5,
		isNonstandard: "Past",
	},
	fightingmemory: {
		name: "Fighting Memory",
		spritenum: 668,
		onMemory: 'Fighting',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fighting",
		itemUser: ["Silvally-Fighting"],
		num: 904,
		gen: 7,
		isNonstandard: "Past",
	},
	fightiniumz: {
		name: "Fightinium Z",
		spritenum: 637,
		onPlate: 'Fighting',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fighting",
		forcedForme: "Arceus-Fighting",
		num: 782,
		gen: 7,
		isNonstandard: "Past",
	},
	figyberry: {
		name: "Figy Berry",
		spritenum: 140,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 159,
		gen: 3,
	},
	firegem: {
		name: "Fire Gem",
		spritenum: 141,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Fire' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 548,
		gen: 5,
		isNonstandard: "Past",
	},
	firememory: {
		name: "Fire Memory",
		spritenum: 676,
		onMemory: 'Fire',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Fire",
		itemUser: ["Silvally-Fire"],
		num: 912,
		gen: 7,
		isNonstandard: "Past",
	},
	firestone: {
		name: "Fire Stone",
		spritenum: 142,
		fling: {
			basePower: 30,
		},
		num: 82,
		gen: 1,
	},
	firiumz: {
		name: "Firium Z",
		spritenum: 632,
		onPlate: 'Fire',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fire",
		forcedForme: "Arceus-Fire",
		num: 777,
		gen: 7,
		isNonstandard: "Past",
	},
	fistplate: {
		name: "Fist Plate",
		spritenum: 143,
		onPlate: 'Fighting',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fighting",
		num: 303,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	flameorb: {
		name: "Flame Orb",
		spritenum: 145,
		fling: {
			basePower: 30,
			status: 'brn',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('brn', pokemon);
		},
		num: 273,
		gen: 4,
	},
	flameplate: {
		name: "Flame Plate",
		spritenum: 146,
		onPlate: 'Fire',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fire",
		num: 298,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	floatstone: {
		name: "Float Stone",
		spritenum: 147,
		fling: {
			basePower: 30,
		},
		onModifyWeight(weighthg) {
			return this.trunc(weighthg / 2);
		},
		num: 539,
		gen: 5,
	},
	flowersweet: {
		name: "Flower Sweet",
		spritenum: 708,
		fling: {
			basePower: 0,
		},
		num: 1113,
		gen: 8,
		isNonstandard: "Past",
	},
	flyinggem: {
		name: "Flying Gem",
		spritenum: 149,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Flying' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 556,
		gen: 5,
		isNonstandard: "Past",
	},
	flyingmemory: {
		name: "Flying Memory",
		spritenum: 669,
		onMemory: 'Flying',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Flying",
		itemUser: ["Silvally-Flying"],
		num: 905,
		gen: 7,
		isNonstandard: "Past",
	},
	flyiniumz: {
		name: "Flyinium Z",
		spritenum: 640,
		onPlate: 'Flying',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Flying",
		forcedForme: "Arceus-Flying",
		num: 785,
		gen: 7,
		isNonstandard: "Past",
	},
	focusband: {
		name: "Focus Band",
		spritenum: 150,
		fling: {
			basePower: 10,
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			}
		},
		num: 230,
		gen: 2,
	},
	focussash: {
		name: "Focus Sash",
		spritenum: 151,
		fling: {
			basePower: 10,
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				if (target.useItem()) {
					return target.hp - 1;
				}
			}
		},
		num: 275,
		gen: 4,
	},
	fossilizedbird: {
		name: "Fossilized Bird",
		spritenum: 700,
		fling: {
			basePower: 100,
		},
		num: 1105,
		gen: 8,
		isNonstandard: "Past",
	},
	fossilizeddino: {
		name: "Fossilized Dino",
		spritenum: 703,
		fling: {
			basePower: 100,
		},
		num: 1108,
		gen: 8,
		isNonstandard: "Past",
	},
	fossilizeddrake: {
		name: "Fossilized Drake",
		spritenum: 702,
		fling: {
			basePower: 100,
		},
		num: 1107,
		gen: 8,
		isNonstandard: "Past",
	},
	fossilizedfish: {
		name: "Fossilized Fish",
		spritenum: 701,
		fling: {
			basePower: 100,
		},
		num: 1106,
		gen: 8,
		isNonstandard: "Past",
	},
	friendball: {
		name: "Friend Ball",
		spritenum: 153,
		num: 497,
		gen: 2,
		isPokeball: true,
	},
	fullincense: {
		name: "Full Incense",
		spritenum: 155,
		fling: {
			basePower: 10,
		},
		onFractionalPriority: -0.1,
		num: 316,
		gen: 4,
		isNonstandard: "Past",
	},
	galaricacuff: {
		name: "Galarica Cuff",
		spritenum: 739,
		fling: {
			basePower: 30,
		},
		num: 1582,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	galaricawreath: {
		name: "Galarica Wreath",
		spritenum: 740,
		fling: {
			basePower: 30,
		},
		num: 1592,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	galladite: {
		name: "Galladite",
		spritenum: 616,
		megaStone: "Gallade-Mega",
		megaEvolves: "Gallade",
		itemUser: ["Gallade"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 756,
		gen: 6,
		isNonstandard: "Past",
	},
	ganlonberry: {
		name: "Ganlon Berry",
		spritenum: 158,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({def: 1});
		},
		num: 202,
		gen: 3,
	},
	garchompite: {
		name: "Garchompite",
		spritenum: 589,
		megaStone: "Garchomp-Mega",
		megaEvolves: "Garchomp",
		itemUser: ["Garchomp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 683,
		gen: 6,
		isNonstandard: "Past",
	},
	gardevoirite: {
		name: "Gardevoirite",
		spritenum: 587,
		megaStone: "Gardevoir-Mega",
		megaEvolves: "Gardevoir",
		itemUser: ["Gardevoir"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 657,
		gen: 6,
		isNonstandard: "Past",
	},
	gengarite: {
		name: "Gengarite",
		spritenum: 588,
		megaStone: "Gengar-Mega",
		megaEvolves: "Gengar",
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 656,
		gen: 6,
		isNonstandard: "Past",
	},
	ghostgem: {
		name: "Ghost Gem",
		spritenum: 161,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ghost' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 560,
		gen: 5,
		isNonstandard: "Past",
	},
	ghostmemory: {
		name: "Ghost Memory",
		spritenum: 674,
		onMemory: 'Ghost',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ghost",
		itemUser: ["Silvally-Ghost"],
		num: 910,
		gen: 7,
		isNonstandard: "Past",
	},
	ghostiumz: {
		name: "Ghostium Z",
		spritenum: 644,
		onPlate: 'Ghost',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ghost",
		forcedForme: "Arceus-Ghost",
		num: 789,
		gen: 7,
		isNonstandard: "Past",
	},
	glalitite: {
		name: "Glalitite",
		spritenum: 623,
		megaStone: "Glalie-Mega",
		megaEvolves: "Glalie",
		itemUser: ["Glalie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 763,
		gen: 6,
		isNonstandard: "Past",
	},
	goldbottlecap: {
		name: "Gold Bottle Cap",
		spritenum: 697,
		fling: {
			basePower: 30,
		},
		num: 796,
		gen: 7,
	},
	grassgem: {
		name: "Grass Gem",
		spritenum: 172,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Grass' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 551,
		gen: 5,
		isNonstandard: "Past",
	},
	grassmemory: {
		name: "Grass Memory",
		spritenum: 678,
		onMemory: 'Grass',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Grass",
		itemUser: ["Silvally-Grass"],
		num: 914,
		gen: 7,
		isNonstandard: "Past",
	},
	grassiumz: {
		name: "Grassium Z",
		spritenum: 635,
		onPlate: 'Grass',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Grass",
		forcedForme: "Arceus-Grass",
		num: 780,
		gen: 7,
		isNonstandard: "Past",
	},
	grassyseed: {
		name: "Grassy Seed",
		spritenum: 667,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('grassyterrain')) {
				pokemon.useItem();
			}
		},
		onTerrainChange(pokemon) {
			if (this.field.isTerrain('grassyterrain')) {
				pokemon.useItem();
			}
		},
		boosts: {
			def: 1,
		},
		num: 884,
		gen: 7,
	},
	greatball: {
		name: "Great Ball",
		spritenum: 174,
		num: 3,
		gen: 1,
		isPokeball: true,
	},
	grepaberry: {
		name: "Grepa Berry",
		spritenum: 178,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Flying",
		},
		onEat: false,
		num: 173,
		gen: 3,
	},
	gripclaw: {
		name: "Grip Claw",
		spritenum: 179,
		fling: {
			basePower: 90,
		},
		// implemented in statuses
		num: 286,
		gen: 4,
	},
	griseouscore: {
		name: "Griseous Core",
		spritenum: 180, // TODO
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 487 || pokemon.baseSpecies.num === 487) {
				return false;
			}
			return true;
		},
		forcedForme: "Giratina-Origin",
		itemUser: ["Giratina-Origin"],
		num: 1779,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	griseousorb: {
		name: "Griseous Orb",
		spritenum: 180,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Giratina"],
		num: 112,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	groundgem: {
		name: "Ground Gem",
		spritenum: 182,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ground' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 555,
		gen: 5,
		isNonstandard: "Past",
	},
	groundmemory: {
		name: "Ground Memory",
		spritenum: 671,
		onMemory: 'Ground',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ground",
		itemUser: ["Silvally-Ground"],
		num: 907,
		gen: 7,
		isNonstandard: "Past",
	},
	groundiumz: {
		name: "Groundium Z",
		spritenum: 639,
		onPlate: 'Ground',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ground",
		forcedForme: "Arceus-Ground",
		num: 784,
		gen: 7,
		isNonstandard: "Past",
	},
	gyaradosite: {
		name: "Gyaradosite",
		spritenum: 589,
		megaStone: "Gyarados-Mega",
		megaEvolves: "Gyarados",
		itemUser: ["Gyarados"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 676,
		gen: 6,
		isNonstandard: "Past",
	},
	habanberry: {
		name: "Haban Berry",
		spritenum: 185,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Dragon' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 197,
		gen: 4,
	},
	hardstone: {
		name: "Hard Stone",
		spritenum: 187,
		fling: {
			basePower: 100,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 238,
		gen: 2,
	},
	healball: {
		name: "Heal Ball",
		spritenum: 188,
		num: 14,
		gen: 4,
		isPokeball: true,
	},
	heatrock: {
		name: "Heat Rock",
		spritenum: 193,
		fling: {
			basePower: 60,
		},
		num: 284,
		gen: 4,
	},
	heavyball: {
		name: "Heavy Ball",
		spritenum: 194,
		num: 495,
		gen: 2,
		isPokeball: true,
	},
	heavydutyboots: {
		name: "Heavy-Duty Boots",
		spritenum: 715,
		fling: {
			basePower: 80,
		},
		num: 1120,
		gen: 8,
		// Hazard Immunity implemented in moves.ts
	},
	helixfossil: {
		name: "Helix Fossil",
		spritenum: 195,
		fling: {
			basePower: 100,
		},
		num: 101,
		gen: 3,
		isNonstandard: "Past",
	},
	heracronite: {
		name: "Heracronite",
		spritenum: 590,
		megaStone: "Heracross-Mega",
		megaEvolves: "Heracross",
		itemUser: ["Heracross"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 680,
		gen: 6,
		isNonstandard: "Past",
	},
	hondewberry: {
		name: "Hondew Berry",
		spritenum: 213,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ground",
		},
		onEat: false,
		num: 172,
		gen: 3,
	},
	houndoominite: {
		name: "Houndoominite",
		spritenum: 591,
		megaStone: "Houndoom-Mega",
		megaEvolves: "Houndoom",
		itemUser: ["Houndoom"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 666,
		gen: 6,
		isNonstandard: "Past",
	},
	iapapaberry: {
		name: "Iapapa Berry",
		spritenum: 217,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 163,
		gen: 3,
	},
	icegem: {
		name: "Ice Gem",
		spritenum: 218,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ice' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 552,
		gen: 5,
		isNonstandard: "Past",
	},
	icememory: {
		name: "Ice Memory",
		spritenum: 681,
		onMemory: 'Ice',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Ice",
		itemUser: ["Silvally-Ice"],
		num: 917,
		gen: 7,
		isNonstandard: "Past",
	},
	icestone: {
		name: "Ice Stone",
		spritenum: 693,
		fling: {
			basePower: 30,
		},
		num: 849,
		gen: 7,
	},
	icicleplate: {
		name: "Icicle Plate",
		spritenum: 220,
		onPlate: 'Ice',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ice",
		num: 302,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	iciumz: {
		name: "Icium Z",
		spritenum: 636,
		onPlate: 'Ice',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Ice",
		forcedForme: "Arceus-Ice",
		num: 781,
		gen: 7,
		isNonstandard: "Past",
	},
	icyrock: {
		name: "Icy Rock",
		spritenum: 221,
		fling: {
			basePower: 40,
		},
		num: 282,
		gen: 4,
	},
	inciniumz: {
		name: "Incinium Z",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Malicious Moonsault",
		zMoveFrom: "Darkest Lariat",
		itemUser: ["Incineroar"],
		num: 799,
		gen: 7,
		isNonstandard: "Past",
	},
	insectplate: {
		name: "Insect Plate",
		spritenum: 223,
		onPlate: 'Bug',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Bug",
		num: 308,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	ironball: {
		name: "Iron Ball",
		spritenum: 224,
		fling: {
			basePower: 130,
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (target.volatiles['ingrain'] || target.volatiles['smackdown'] || this.field.getPseudoWeather('gravity')) return;
			if (move.type === 'Ground' && target.hasType('Flying')) return 0;
		},
		// airborneness negation implemented in sim/pokemon.js:Pokemon#isGrounded
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 278,
		gen: 4,
	},
	ironplate: {
		name: "Iron Plate",
		spritenum: 225,
		onPlate: 'Steel',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Steel",
		num: 313,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	jabocaberry: {
		name: "Jaboca Berry",
		spritenum: 230,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dragon",
		},
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
				}
			}
		},
		onEat() { },
		num: 211,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	jawfossil: {
		name: "Jaw Fossil",
		spritenum: 694,
		fling: {
			basePower: 100,
		},
		num: 710,
		gen: 6,
		isNonstandard: "Past",
	},
	kasibberry: {
		name: "Kasib Berry",
		spritenum: 233,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ghost' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 196,
		gen: 4,
	},
	kebiaberry: {
		name: "Kebia Berry",
		spritenum: 234,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Poison' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 190,
		gen: 4,
	},
	keeberry: {
		name: "Kee Berry",
		spritenum: 593,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fairy",
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.category === 'Physical') {
				if (move.id === 'present' && move.heal) return;
				target.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({def: 1});
		},
		num: 687,
		gen: 6,
		isNonstandard: "Unobtainable",
	},
	kelpsyberry: {
		name: "Kelpsy Berry",
		spritenum: 235,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fighting",
		},
		onEat: false,
		num: 170,
		gen: 3,
	},
	kangaskhanite: {
		name: "Kangaskhanite",
		spritenum: 592,
		megaStone: "Kangaskhan-Mega",
		megaEvolves: "Kangaskhan",
		itemUser: ["Kangaskhan"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 675,
		gen: 6,
		isNonstandard: "Past",
	},
	kingsrock: {
		name: "King's Rock",
		spritenum: 236,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch',
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		num: 221,
		gen: 2,
	},
	kommoniumz: {
		name: "Kommonium Z",
		spritenum: 690,
		onTakeItem: false,
		zMove: "Clangorous Soulblaze",
		zMoveFrom: "Clanging Scales",
		itemUser: ["Kommo-o", "Kommo-o-Totem"],
		num: 926,
		gen: 7,
		isNonstandard: "Past",
	},
	laggingtail: {
		name: "Lagging Tail",
		spritenum: 237,
		fling: {
			basePower: 10,
		},
		onFractionalPriority: -0.1,
		num: 279,
		gen: 4,
	},
	lansatberry: {
		name: "Lansat Berry",
		spritenum: 238,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Flying",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.addVolatile('focusenergy');
		},
		num: 206,
		gen: 3,
	},
	latiasite: {
		name: "Latiasite",
		spritenum: 629,
		megaStone: "Latias-Mega",
		megaEvolves: "Latias",
		itemUser: ["Latias"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 684,
		gen: 6,
		isNonstandard: "Past",
	},
	latiosite: {
		name: "Latiosite",
		spritenum: 630,
		megaStone: "Latios-Mega",
		megaEvolves: "Latios",
		itemUser: ["Latios"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 685,
		gen: 6,
		isNonstandard: "Past",
	},
	laxincense: {
		name: "Lax Incense",
		spritenum: 240,
		fling: {
			basePower: 10,
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('lax incense - decreasing accuracy');
			return this.chainModify([3686, 4096]);
		},
		num: 255,
		gen: 3,
		isNonstandard: "Past",
	},
	leafstone: {
		name: "Leaf Stone",
		spritenum: 241,
		fling: {
			basePower: 30,
		},
		num: 85,
		gen: 1,
	},
	leek: {
		name: "Leek",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (["farfetchd", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies))) {
				return critRatio + 2;
			}
		},
		itemUser: ["Farfetch\u2019d", "Farfetch\u2019d-Galar", "Sirfetch\u2019d"],
		num: 259,
		gen: 8,
		isNonstandard: "Past",
	},
	leftovers: {
		name: "Leftovers",
		spritenum: 242,
		fling: {
			basePower: 10,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		num: 234,
		gen: 2,
	},
	leppaberry: {
		name: "Leppa Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (!pokemon.hp) return;
			if (pokemon.moveSlots.some(move => move.pp === 0)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
				pokemon.moveSlots.find(move => move.pp < move.maxpp);
			if (!moveSlot) return;
			moveSlot.pp += 10;
			if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
			this.add('-activate', pokemon, 'item: Leppa Berry', moveSlot.move, '[consumed]');
		},
		num: 154,
		gen: 3,
	},
	levelball: {
		name: "Level Ball",
		spritenum: 246,
		num: 493,
		gen: 2,
		isPokeball: true,
	},
	liechiberry: {
		name: "Liechi Berry",
		spritenum: 248,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({atk: 1});
		},
		num: 201,
		gen: 3,
	},
	lifeorb: {
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
			}
		},
		num: 270,
		gen: 4,
	},
	lightball: {
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
		num: 236,
		gen: 2,
	},
	lightclay: {
		name: "Light Clay",
		spritenum: 252,
		fling: {
			basePower: 30,
		},
		// implemented in the corresponding thing
		num: 269,
		gen: 4,
	},
	loadeddice: {
		name: "Loaded Dice",
		spritenum: 0, // TODO
		// partially implemented in sim/battle-actions.ts:BattleActions#hitStepMoveHitLoop
		onModifyMove(move) {
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		num: 1886,
		gen: 9,
	},
	lopunnite: {
		name: "Lopunnite",
		spritenum: 626,
		megaStone: "Lopunny-Mega",
		megaEvolves: "Lopunny",
		itemUser: ["Lopunny"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 768,
		gen: 6,
		isNonstandard: "Past",
	},
	loveball: {
		name: "Love Ball",
		spritenum: 258,
		num: 496,
		gen: 2,
		isPokeball: true,
	},
	lovesweet: {
		name: "Love Sweet",
		spritenum: 705,
		fling: {
			basePower: 10,
		},
		num: 1110,
		gen: 8,
		isNonstandard: "Past",
	},
	lucarionite: {
		name: "Lucarionite",
		spritenum: 594,
		megaStone: "Lucario-Mega",
		megaEvolves: "Lucario",
		itemUser: ["Lucario"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 673,
		gen: 6,
		isNonstandard: "Past",
	},
	luckypunch: {
		name: "Lucky Punch",
		spritenum: 261,
		fling: {
			basePower: 40,
		},
		onModifyCritRatio(critRatio, user) {
			if (user.baseSpecies.name === 'Chansey') {
				return critRatio + 2;
			}
		},
		itemUser: ["Chansey"],
		num: 256,
		gen: 2,
		isNonstandard: "Past",
	},
	lumberry: {
		name: "Lum Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onAfterSetStatusPriority: -1,
		onAfterSetStatus(status, pokemon) {
			pokemon.eatItem();
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
		num: 157,
		gen: 3,
	},
	luminousmoss: {
		name: "Luminous Moss",
		spritenum: 595,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				target.useItem();
			}
		},
		boosts: {
			spd: 1,
		},
		num: 648,
		gen: 6,
	},
	lunaliumz: {
		name: "Lunalium Z",
		spritenum: 686,
		onTakeItem: false,
		zMove: "Menacing Moonraze Maelstrom",
		zMoveFrom: "Moongeist Beam",
		itemUser: ["Lunala", "Necrozma-Dawn-Wings"],
		num: 922,
		gen: 7,
		isNonstandard: "Past",
	},
	lureball: {
		name: "Lure Ball",
		spritenum: 264,
		num: 494,
		gen: 2,
		isPokeball: true,
	},
	lustrousglobe: {
		name: "Lustrous Globe",
		spritenum: 265, // TODO
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === 484 || pokemon.baseSpecies.num === 484) {
				return false;
			}
			return true;
		},
		forcedForme: "Palkia-Origin",
		itemUser: ["Palkia-Origin"],
		num: 1778,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	lustrousorb: {
		name: "Lustrous Orb",
		spritenum: 265,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 484 && (move.type === 'Water' || move.type === 'Dragon')) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Palkia"],
		num: 136,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	luxuryball: {
		name: "Luxury Ball",
		spritenum: 266,
		num: 11,
		gen: 3,
		isPokeball: true,
	},
	lycaniumz: {
		name: "Lycanium Z",
		spritenum: 689,
		onTakeItem: false,
		zMove: "Splintered Stormshards",
		zMoveFrom: "Stone Edge",
		itemUser: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
		num: 925,
		gen: 7,
		isNonstandard: "Past",
	},
	machobrace: {
		name: "Macho Brace",
		spritenum: 269,
		ignoreKlutz: true,
		fling: {
			basePower: 60,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 215,
		gen: 3,
		isNonstandard: "Past",
	},
	magmarizer: {
		name: "Magmarizer",
		spritenum: 272,
		fling: {
			basePower: 80,
		},
		num: 323,
		gen: 4,
		isNonstandard: "Past",
	},
	magnet: {
		name: "Magnet",
		spritenum: 273,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 242,
		gen: 2,
	},
	magoberry: {
		name: "Mago Berry",
		spritenum: 274,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 161,
		gen: 3,
	},
	magostberry: {
		name: "Magost Berry",
		spritenum: 275,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Rock",
		},
		onEat: false,
		num: 176,
		gen: 3,
		isNonstandard: "Past",
	},
	mail: {
		name: "Mail",
		spritenum: 403,
		onTakeItem(item, source) {
			if (!this.activeMove) return false;
			if (this.activeMove.id !== 'knockoff' && this.activeMove.id !== 'thief' && this.activeMove.id !== 'covet') return false;
		},
		num: 137,
		gen: 2,
		isNonstandard: "Past",
	},
	maliciousarmor: {
		name: "Malicious Armor",
		spritenum: 0, // TODO
		num: 1861,
		gen: 9,
	},
	manectite: {
		name: "Manectite",
		spritenum: 596,
		megaStone: "Manectric-Mega",
		megaEvolves: "Manectric",
		itemUser: ["Manectric"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 682,
		gen: 6,
		isNonstandard: "Past",
	},
	marangaberry: {
		name: "Maranga Berry",
		spritenum: 597,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dark",
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.category === 'Special') {
				target.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spd: 1});
		},
		num: 688,
		gen: 6,
		isNonstandard: "Unobtainable",
	},
	marshadiumz: {
		name: "Marshadium Z",
		spritenum: 654,
		onTakeItem: false,
		zMove: "Soul-Stealing 7-Star Strike",
		zMoveFrom: "Spectral Thief",
		itemUser: ["Marshadow"],
		num: 802,
		gen: 7,
		isNonstandard: "Past",
	},
	masterball: {
		name: "Master Ball",
		spritenum: 276,
		num: 1,
		gen: 1,
		isPokeball: true,
	},
	mawilite: {
		name: "Mawilite",
		spritenum: 598,
		megaStone: "Mawile-Mega",
		megaEvolves: "Mawile",
		itemUser: ["Mawile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 681,
		gen: 6,
		isNonstandard: "Past",
	},
	meadowplate: {
		name: "Meadow Plate",
		spritenum: 282,
		onPlate: 'Grass',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Grass",
		num: 301,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	medichamite: {
		name: "Medichamite",
		spritenum: 599,
		megaStone: "Medicham-Mega",
		megaEvolves: "Medicham",
		itemUser: ["Medicham"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 665,
		gen: 6,
		isNonstandard: "Past",
	},
	mentalherb: {
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect(pokemon) {
				const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
				for (const firstCondition of conditions) {
					if (pokemon.volatiles[firstCondition]) {
						for (const secondCondition of conditions) {
							pokemon.removeVolatile(secondCondition);
							if (firstCondition === 'attract' && secondCondition === 'attract') {
								this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
							}
						}
						return;
					}
				}
			},
		},
		onUpdate(pokemon) {
			const conditions = ['attract', 'taunt', 'encore', 'torment', 'disable', 'healblock'];
			for (const firstCondition of conditions) {
				if (pokemon.volatiles[firstCondition]) {
					if (!pokemon.useItem()) return;
					for (const secondCondition of conditions) {
						pokemon.removeVolatile(secondCondition);
						if (firstCondition === 'attract' && secondCondition === 'attract') {
							this.add('-end', pokemon, 'move: Attract', '[from] item: Mental Herb');
						}
					}
					return;
				}
			}
		},
		num: 219,
		gen: 3,
	},
	metagrossite: {
		name: "Metagrossite",
		spritenum: 618,
		megaStone: "Metagross-Mega",
		megaEvolves: "Metagross",
		itemUser: ["Metagross"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 758,
		gen: 6,
		isNonstandard: "Past",
	},
	metalcoat: {
		name: "Metal Coat",
		spritenum: 286,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 233,
		gen: 2,
	},
	metalpowder: {
		name: "Metal Powder",
		fling: {
			basePower: 10,
		},
		spritenum: 287,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto"],
		num: 257,
		gen: 2,
		isNonstandard: "Past",
	},
	metronome: {
		name: "Metronome",
		spritenum: 289,
		fling: {
			basePower: 30,
		},
		onStart(pokemon) {
			pokemon.addVolatile('metronome');
		},
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
				return this.chainModify([dmgMod[numConsecutive], 4096]);
			},
		},
		num: 277,
		gen: 4,
	},
	mewniumz: {
		name: "Mewnium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Genesis Supernova",
		zMoveFrom: "Psychic",
		itemUser: ["Mew"],
		num: 806,
		gen: 7,
		isNonstandard: "Past",
	},
	mewtwonitex: {
		name: "Mewtwonite X",
		spritenum: 600,
		megaStone: "Mewtwo-Mega-X",
		megaEvolves: "Mewtwo",
		itemUser: ["Mewtwo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 662,
		gen: 6,
		isNonstandard: "Past",
	},
	mewtwonitey: {
		name: "Mewtwonite Y",
		spritenum: 601,
		megaStone: "Mewtwo-Mega-Y",
		megaEvolves: "Mewtwo",
		itemUser: ["Mewtwo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 663,
		gen: 6,
		isNonstandard: "Past",
	},
	micleberry: {
		name: "Micle Berry",
		spritenum: 290,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Rock",
		},
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.addVolatile('micleberry');
		},
		condition: {
			duration: 2,
			onSourceAccuracy(accuracy, target, source, move) {
				if (!move.ohko) {
					this.add('-enditem', source, 'Micle Berry');
					source.removeVolatile('micleberry');
					if (typeof accuracy === 'number') {
						return this.chainModify([4915, 4096]);
					}
				}
			},
		},
		num: 209,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	mimikiumz: {
		name: "Mimikium Z",
		spritenum: 688,
		onTakeItem: false,
		zMove: "Let's Snuggle Forever",
		zMoveFrom: "Play Rough",
		itemUser: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
		num: 924,
		isNonstandard: "Past",
		gen: 7,
	},
	mindplate: {
		name: "Mind Plate",
		spritenum: 291,
		onPlate: 'Psychic',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Psychic",
		num: 307,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	miracleseed: {
		name: "Miracle Seed",
		fling: {
			basePower: 30,
		},
		spritenum: 292,
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 239,
		gen: 2,
	},
	mirrorherb: {
		name: "Mirror Herb",
		fling: {
			basePower: 10,
		},
		spritenum: 0, // TODO
		onFoeAfterBoost(boost, target, source, effect) {
			if (effect?.name === 'Opportunist' || effect?.name === 'Mirror Herb') return;
			const boostPlus: SparseBoostsTable = {};
			let statsRaised = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! > 0) {
					boostPlus[i] = boost[i];
					statsRaised = true;
				}
			}
			if (!statsRaised) return;
			const pokemon: Pokemon = this.effectState.target;
			pokemon.useItem();
			this.boost(boostPlus, pokemon);
		},
		num: 1883,
		gen: 9,
	},
	mistyseed: {
		name: "Misty Seed",
		spritenum: 666,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('mistyterrain')) {
				pokemon.useItem();
			}
		},
		onTerrainChange(pokemon) {
			if (this.field.isTerrain('mistyterrain')) {
				pokemon.useItem();
			}
		},
		boosts: {
			spd: 1,
		},
		num: 883,
		gen: 7,
	},
	moonball: {
		name: "Moon Ball",
		spritenum: 294,
		num: 498,
		gen: 2,
		isPokeball: true,
	},
	moonstone: {
		name: "Moon Stone",
		spritenum: 295,
		fling: {
			basePower: 30,
		},
		num: 81,
		gen: 1,
	},
	muscleband: {
		name: "Muscle Band",
		spritenum: 297,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Physical') {
				return this.chainModify([4505, 4096]);
			}
		},
		num: 266,
		gen: 4,
	},
	mysticwater: {
		name: "Mystic Water",
		spritenum: 300,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 243,
		gen: 2,
	},
	nanabberry: {
		name: "Nanab Berry",
		spritenum: 302,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Water",
		},
		onEat: false,
		num: 166,
		gen: 3,
		isNonstandard: "Past",
	},
	nestball: {
		name: "Nest Ball",
		spritenum: 303,
		num: 8,
		gen: 3,
		isPokeball: true,
	},
	netball: {
		name: "Net Ball",
		spritenum: 304,
		num: 6,
		gen: 3,
		isPokeball: true,
	},
	nevermeltice: {
		name: "Never-Melt Ice",
		spritenum: 305,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 246,
		gen: 2,
	},
	nomelberry: {
		name: "Nomel Berry",
		spritenum: 306,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dragon",
		},
		onEat: false,
		num: 178,
		gen: 3,
		isNonstandard: "Past",
	},
	normalgem: {
		name: "Normal Gem",
		spritenum: 307,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Normal' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 564,
		gen: 5,
	},
	normaliumz: {
		name: "Normalium Z",
		spritenum: 631,
		onTakeItem: false,
		zMove: true,
		zMoveType: "Normal",
		num: 776,
		gen: 7,
		isNonstandard: "Past",
	},
	occaberry: {
		name: "Occa Berry",
		spritenum: 311,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fire' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 184,
		gen: 4,
	},
	oddincense: {
		name: "Odd Incense",
		spritenum: 312,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 314,
		gen: 4,
		isNonstandard: "Past",
	},
	oldamber: {
		name: "Old Amber",
		spritenum: 314,
		fling: {
			basePower: 100,
		},
		num: 103,
		gen: 3,
		isNonstandard: "Past",
	},
	oranberry: {
		name: "Oran Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(10);
		},
		num: 155,
		gen: 3,
	},
	ovalstone: {
		name: "Oval Stone",
		spritenum: 321,
		fling: {
			basePower: 80,
		},
		num: 110,
		gen: 4,
	},
	pamtreberry: {
		name: "Pamtre Berry",
		spritenum: 323,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Steel",
		},
		onEat: false,
		num: 180,
		gen: 3,
		isNonstandard: "Past",
	},
	parkball: {
		name: "Park Ball",
		spritenum: 325,
		num: 500,
		gen: 4,
		isPokeball: true,
		isNonstandard: "Unobtainable",
	},
	passhoberry: {
		name: "Passho Berry",
		spritenum: 329,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Water' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 185,
		gen: 4,
	},
	payapaberry: {
		name: "Payapa Berry",
		spritenum: 330,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Psychic' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 193,
		gen: 4,
	},
	pechaberry: {
		name: "Pecha Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.cureStatus();
			}
		},
		num: 151,
		gen: 3,
	},
	persimberry: {
		name: "Persim Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('confusion');
		},
		num: 156,
		gen: 3,
	},
	petayaberry: {
		name: "Petaya Berry",
		spritenum: 335,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Poison",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spa: 1});
		},
		num: 204,
		gen: 3,
	},
	pidgeotite: {
		name: "Pidgeotite",
		spritenum: 622,
		megaStone: "Pidgeot-Mega",
		megaEvolves: "Pidgeot",
		itemUser: ["Pidgeot"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 762,
		gen: 6,
		isNonstandard: "Past",
	},
	pikaniumz: {
		name: "Pikanium Z",
		spritenum: 649,
		onTakeItem: false,
		zMove: "Catastropika",
		zMoveFrom: "Volt Tackle",
		itemUser: ["Pikachu"],
		num: 794,
		gen: 7,
		isNonstandard: "Past",
	},
	pikashuniumz: {
		name: "Pikashunium Z",
		spritenum: 659,
		onTakeItem: false,
		zMove: "10,000,000 Volt Thunderbolt",
		zMoveFrom: "Thunderbolt",
		itemUser: ["Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner"],
		num: 836,
		isNonstandard: "Past",
		gen: 7,
	},
	pinapberry: {
		name: "Pinap Berry",
		spritenum: 337,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Grass",
		},
		onEat: false,
		num: 168,
		gen: 3,
		isNonstandard: "Past",
	},
	pinsirite: {
		name: "Pinsirite",
		spritenum: 602,
		megaStone: "Pinsir-Mega",
		megaEvolves: "Pinsir",
		itemUser: ["Pinsir"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 671,
		gen: 6,
		isNonstandard: "Past",
	},
	pixieplate: {
		name: "Pixie Plate",
		spritenum: 610,
		onPlate: 'Fairy',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fairy",
		num: 644,
		gen: 6,
		isNonstandard: "Unobtainable",
	},
	plumefossil: {
		name: "Plume Fossil",
		spritenum: 339,
		fling: {
			basePower: 100,
		},
		num: 573,
		gen: 5,
		isNonstandard: "Past",
	},
	poisonbarb: {
		name: "Poison Barb",
		spritenum: 343,
		fling: {
			basePower: 70,
			status: 'psn',
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 245,
		gen: 2,
	},
	poisongem: {
		name: "Poison Gem",
		spritenum: 344,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Poison' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 554,
		gen: 5,
		isNonstandard: "Past",
	},
	poisonmemory: {
		name: "Poison Memory",
		spritenum: 670,
		onMemory: 'Poison',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Poison",
		itemUser: ["Silvally-Poison"],
		num: 906,
		gen: 7,
		isNonstandard: "Past",
	},
	poisoniumz: {
		name: "Poisonium Z",
		spritenum: 638,
		onPlate: 'Poison',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Poison",
		forcedForme: "Arceus-Poison",
		num: 783,
		gen: 7,
		isNonstandard: "Past",
	},
	pokeball: {
		name: "Poke Ball",
		spritenum: 345,
		num: 4,
		gen: 1,
		isPokeball: true,
	},
	pomegberry: {
		name: "Pomeg Berry",
		spritenum: 351,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ice",
		},
		onEat: false,
		num: 169,
		gen: 3,
	},
	poweranklet: {
		name: "Power Anklet",
		spritenum: 354,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 293,
		gen: 4,
	},
	powerband: {
		name: "Power Band",
		spritenum: 355,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 292,
		gen: 4,
	},
	powerbelt: {
		name: "Power Belt",
		spritenum: 356,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 290,
		gen: 4,
	},
	powerbracer: {
		name: "Power Bracer",
		spritenum: 357,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 289,
		gen: 4,
	},
	powerherb: {
		onChargeMove(pokemon, target, move) {
			if (pokemon.useItem()) {
				this.debug('power herb - remove charge turn for ' + move.id);
				this.attrLastMove('[still]');
				this.addMove('-anim', pokemon, move.name, target);
				return false; // skip charge turn
			}
		},
		name: "Power Herb",
		spritenum: 358,
		fling: {
			basePower: 10,
		},
		num: 271,
		gen: 4,
	},
	powerlens: {
		name: "Power Lens",
		spritenum: 359,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 291,
		gen: 4,
	},
	powerweight: {
		name: "Power Weight",
		spritenum: 360,
		ignoreKlutz: true,
		fling: {
			basePower: 70,
		},
		onModifySpe(spe) {
			return this.chainModify(0.5);
		},
		num: 294,
		gen: 4,
	},
	premierball: {
		name: "Premier Ball",
		spritenum: 363,
		num: 12,
		gen: 3,
		isPokeball: true,
	},
	primariumz: {
		name: "Primarium Z",
		spritenum: 652,
		onTakeItem: false,
		zMove: "Oceanic Operetta",
		zMoveFrom: "Sparkling Aria",
		itemUser: ["Primarina"],
		num: 800,
		gen: 7,
		isNonstandard: "Past",
	},
	prismscale: {
		name: "Prism Scale",
		spritenum: 365,
		fling: {
			basePower: 30,
		},
		num: 537,
		gen: 5,
		isNonstandard: "Past",
	},
	protectivepads: {
		name: "Protective Pads",
		spritenum: 663,
		fling: {
			basePower: 30,
		},
		// protective effect handled in Battle#checkMoveMakesContact
		num: 880,
		gen: 7,
	},
	protector: {
		name: "Protector",
		spritenum: 367,
		fling: {
			basePower: 80,
		},
		num: 321,
		gen: 4,
		isNonstandard: "Past",
	},
	psychicgem: {
		name: "Psychic Gem",
		spritenum: 369,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Psychic' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 557,
		gen: 5,
		isNonstandard: "Past",
	},
	psychicmemory: {
		name: "Psychic Memory",
		spritenum: 680,
		onMemory: 'Psychic',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Psychic",
		itemUser: ["Silvally-Psychic"],
		num: 916,
		gen: 7,
		isNonstandard: "Past",
	},
	psychicseed: {
		name: "Psychic Seed",
		spritenum: 665,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('psychicterrain')) {
				pokemon.useItem();
			}
		},
		onTerrainChange(pokemon) {
			if (this.field.isTerrain('psychicterrain')) {
				pokemon.useItem();
			}
		},
		boosts: {
			spd: 1,
		},
		num: 882,
		gen: 7,
	},
	psychiumz: {
		name: "Psychium Z",
		spritenum: 641,
		onPlate: 'Psychic',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Psychic",
		forcedForme: "Arceus-Psychic",
		num: 786,
		gen: 7,
		isNonstandard: "Past",
	},
	punchingglove: {
		name: "Punching Glove",
		spritenum: 0, // TODO
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Punching Glove boost');
				return this.chainModify([4506, 4096]);
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move) {
			if (move.flags['punch']) delete move.flags['contact'];
		},
		num: 1884,
		gen: 9,
	},
	qualotberry: {
		name: "Qualot Berry",
		spritenum: 371,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Poison",
		},
		onEat: false,
		num: 171,
		gen: 3,
	},
	quickball: {
		name: "Quick Ball",
		spritenum: 372,
		num: 15,
		gen: 4,
		isPokeball: true,
	},
	quickclaw: {
		onFractionalPriorityPriority: -2,
		onFractionalPriority(priority, pokemon) {
			if (priority <= 0 && this.randomChance(1, 5)) {
				this.add('-activate', pokemon, 'item: Quick Claw');
				return 0.1;
			}
		},
		name: "Quick Claw",
		spritenum: 373,
		fling: {
			basePower: 80,
		},
		num: 217,
		gen: 2,
	},
	quickpowder: {
		name: "Quick Powder",
		spritenum: 374,
		fling: {
			basePower: 10,
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.species.name === 'Ditto' && !pokemon.transformed) {
				return this.chainModify(2);
			}
		},
		itemUser: ["Ditto"],
		num: 274,
		gen: 4,
		isNonstandard: "Past",
	},
	rabutaberry: {
		name: "Rabuta Berry",
		spritenum: 375,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ghost",
		},
		onEat: false,
		num: 177,
		gen: 3,
		isNonstandard: "Past",
	},
	rarebone: {
		name: "Rare Bone",
		spritenum: 379,
		fling: {
			basePower: 100,
		},
		num: 106,
		gen: 4,
	},
	rawstberry: {
		name: "Rawst Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		num: 152,
		gen: 3,
	},
	razorclaw: {
		name: "Razor Claw",
		spritenum: 382,
		fling: {
			basePower: 80,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		num: 326,
		gen: 4,
	},
	razorfang: {
		name: "Razor Fang",
		spritenum: 383,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch',
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		num: 327,
		gen: 4,
		isNonstandard: "Past",
	},
	razzberry: {
		name: "Razz Berry",
		spritenum: 384,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel",
		},
		onEat: false,
		num: 164,
		gen: 3,
		isNonstandard: "Past",
	},
	reapercloth: {
		name: "Reaper Cloth",
		spritenum: 385,
		fling: {
			basePower: 10,
		},
		num: 325,
		gen: 4,
		isNonstandard: "Past",
	},
	redcard: {
		name: "Red Card",
		spritenum: 387,
		fling: {
			basePower: 10,
		},
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && source.hp && target.hp && move && move.category !== 'Status') {
				if (!source.isActive || !this.canSwitch(source.side) || source.forceSwitchFlag || target.forceSwitchFlag) {
					return;
				}
				// The item is used up even against a pokemon with Ingrain or that otherwise can't be forced out
				if (target.useItem(source)) {
					if (this.runEvent('DragOut', source, target, move)) {
						source.forceSwitchFlag = true;
					}
				}
			}
		},
		num: 542,
		gen: 5,
	},
	redorb: {
		name: "Red Orb",
		spritenum: 390,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Groudon') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Groudon-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Groudon') return false;
			return true;
		},
		itemUser: ["Groudon"],
		num: 534,
		gen: 6,
		isNonstandard: "Past",
	},
	repeatball: {
		name: "Repeat Ball",
		spritenum: 401,
		num: 9,
		gen: 3,
		isPokeball: true,
	},
	ribbonsweet: {
		name: "Ribbon Sweet",
		spritenum: 710,
		fling: {
			basePower: 10,
		},
		num: 1115,
		gen: 8,
		isNonstandard: "Past",
	},
	rindoberry: {
		name: "Rindo Berry",
		spritenum: 409,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Grass' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 187,
		gen: 4,
	},
	ringtarget: {
		name: "Ring Target",
		spritenum: 410,
		fling: {
			basePower: 10,
		},
		onNegateImmunity: false,
		num: 543,
		gen: 5,
	},
	rockgem: {
		name: "Rock Gem",
		spritenum: 415,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Rock' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 559,
		gen: 5,
		isNonstandard: "Past",
	},
	rockincense: {
		name: "Rock Incense",
		spritenum: 416,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 315,
		gen: 4,
		isNonstandard: "Past",
	},
	rockmemory: {
		name: "Rock Memory",
		spritenum: 672,
		onMemory: 'Rock',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Rock",
		itemUser: ["Silvally-Rock"],
		num: 908,
		gen: 7,
		isNonstandard: "Past",
	},
	rockiumz: {
		name: "Rockium Z",
		spritenum: 643,
		onPlate: 'Rock',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Rock",
		forcedForme: "Arceus-Rock",
		num: 788,
		gen: 7,
		isNonstandard: "Past",
	},
	rockyhelmet: {
		name: "Rocky Helmet",
		spritenum: 417,
		fling: {
			basePower: 60,
		},
		onDamagingHitOrder: 2,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				this.damage(source.baseMaxhp / 6, source, target);
			}
		},
		num: 540,
		gen: 5,
	},
	roomservice: {
		name: "Room Service",
		spritenum: 717,
		fling: {
			basePower: 100,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.getPseudoWeather('trickroom')) {
				pokemon.useItem();
			}
		},
		onAnyPseudoWeatherChange() {
			const pokemon = this.effectState.target;
			if (this.field.getPseudoWeather('trickroom')) {
				pokemon.useItem(pokemon);
			}
		},
		boosts: {
			spe: -1,
		},
		num: 1122,
		gen: 8,
	},
	rootfossil: {
		name: "Root Fossil",
		spritenum: 418,
		fling: {
			basePower: 100,
		},
		num: 99,
		gen: 3,
		isNonstandard: "Past",
	},
	roseincense: {
		name: "Rose Incense",
		spritenum: 419,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 318,
		gen: 4,
		isNonstandard: "Past",
	},
	roseliberry: {
		name: "Roseli Berry",
		spritenum: 603,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fairy",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fairy' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 686,
		gen: 6,
	},
	rowapberry: {
		name: "Rowap Berry",
		spritenum: 420,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dark",
		},
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Special' && source.hp && source.isActive && !source.hasAbility('magicguard')) {
				if (target.eatItem()) {
					this.damage(source.baseMaxhp / (target.hasAbility('ripen') ? 4 : 8), source, target);
				}
			}
		},
		onEat() { },
		num: 212,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	rustedshield: {
		name: "Rusted Shield",
		spritenum: 699,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 889) || pokemon.baseSpecies.num === 889) {
				return false;
			}
			return true;
		},
		itemUser: ["Zamazenta-Crowned"],
		num: 1104,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	rustedsword: {
		name: "Rusted Sword",
		spritenum: 698,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 888) || pokemon.baseSpecies.num === 888) {
				return false;
			}
			return true;
		},
		itemUser: ["Zacian-Crowned"],
		num: 1103,
		gen: 8,
		isNonstandard: "Unobtainable",
	},
	sablenite: {
		name: "Sablenite",
		spritenum: 614,
		megaStone: "Sableye-Mega",
		megaEvolves: "Sableye",
		itemUser: ["Sableye"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 754,
		gen: 6,
		isNonstandard: "Past",
	},
	sachet: {
		name: "Sachet",
		spritenum: 691,
		fling: {
			basePower: 80,
		},
		num: 647,
		gen: 6,
		isNonstandard: "Past",
	},
	safariball: {
		name: "Safari Ball",
		spritenum: 425,
		num: 5,
		gen: 1,
		isPokeball: true,
		isNonstandard: "Unobtainable",
	},
	safetygoggles: {
		name: "Safety Goggles",
		spritenum: 604,
		fling: {
			basePower: 80,
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHit(pokemon, source, move) {
			if (move.flags['powder'] && pokemon !== source && this.dex.getImmunity('powder', pokemon)) {
				this.add('-activate', pokemon, 'item: Safety Goggles', move.name);
				return null;
			}
		},
		num: 650,
		gen: 6,
	},
	sailfossil: {
		name: "Sail Fossil",
		spritenum: 695,
		fling: {
			basePower: 100,
		},
		num: 711,
		gen: 6,
		isNonstandard: "Past",
	},
	salacberry: {
		name: "Salac Berry",
		spritenum: 426,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({spe: 1});
		},
		num: 203,
		gen: 3,
	},
	salamencite: {
		name: "Salamencite",
		spritenum: 627,
		megaStone: "Salamence-Mega",
		megaEvolves: "Salamence",
		itemUser: ["Salamence"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 769,
		gen: 6,
		isNonstandard: "Past",
	},
	sceptilite: {
		name: "Sceptilite",
		spritenum: 613,
		megaStone: "Sceptile-Mega",
		megaEvolves: "Sceptile",
		itemUser: ["Sceptile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 753,
		gen: 6,
		isNonstandard: "Past",
	},
	scizorite: {
		name: "Scizorite",
		spritenum: 605,
		megaStone: "Scizor-Mega",
		megaEvolves: "Scizor",
		itemUser: ["Scizor"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 670,
		gen: 6,
		isNonstandard: "Past",
	},
	scopelens: {
		name: "Scope Lens",
		spritenum: 429,
		fling: {
			basePower: 30,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		num: 232,
		gen: 2,
	},
	seaincense: {
		name: "Sea Incense",
		spritenum: 430,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 254,
		gen: 3,
		isNonstandard: "Past",
	},
	sharpbeak: {
		name: "Sharp Beak",
		spritenum: 436,
		fling: {
			basePower: 50,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 244,
		gen: 2,
	},
	sharpedonite: {
		name: "Sharpedonite",
		spritenum: 619,
		megaStone: "Sharpedo-Mega",
		megaEvolves: "Sharpedo",
		itemUser: ["Sharpedo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 759,
		gen: 6,
		isNonstandard: "Past",
	},
	shedshell: {
		name: "Shed Shell",
		spritenum: 437,
		fling: {
			basePower: 10,
		},
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
		num: 295,
		gen: 4,
	},
	shellbell: {
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 8, pokemon);
			}
		},
		num: 253,
		gen: 3,
	},
	shinystone: {
		name: "Shiny Stone",
		spritenum: 439,
		fling: {
			basePower: 80,
		},
		num: 107,
		gen: 4,
	},
	shockdrive: {
		name: "Shock Drive",
		spritenum: 442,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 649) || pokemon.baseSpecies.num === 649) {
				return false;
			}
			return true;
		},
		onDrive: 'Electric',
		forcedForme: "Genesect-Shock",
		itemUser: ["Genesect-Shock"],
		num: 117,
		gen: 5,
		isNonstandard: "Past",
	},
	shucaberry: {
		name: "Shuca Berry",
		spritenum: 443,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ground' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 191,
		gen: 4,
	},
	silkscarf: {
		name: "Silk Scarf",
		spritenum: 444,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 251,
		gen: 3,
	},
	silverpowder: {
		name: "Silver Powder",
		spritenum: 447,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 222,
		gen: 2,
	},
	sitrusberry: {
		name: "Sitrus Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 4);
		},
		num: 158,
		gen: 3,
	},
	skullfossil: {
		name: "Skull Fossil",
		spritenum: 449,
		fling: {
			basePower: 100,
		},
		num: 105,
		gen: 4,
		isNonstandard: "Past",
	},
	skyplate: {
		name: "Sky Plate",
		spritenum: 450,
		onPlate: 'Flying',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Flying') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Flying",
		num: 306,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	slowbronite: {
		name: "Slowbronite",
		spritenum: 620,
		megaStone: "Slowbro-Mega",
		megaEvolves: "Slowbro",
		itemUser: ["Slowbro"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 760,
		gen: 6,
		isNonstandard: "Past",
	},
	smoothrock: {
		name: "Smooth Rock",
		spritenum: 453,
		fling: {
			basePower: 10,
		},
		num: 283,
		gen: 4,
	},
	snorliumz: {
		name: "Snorlium Z",
		spritenum: 656,
		onTakeItem: false,
		zMove: "Pulverizing Pancake",
		zMoveFrom: "Giga Impact",
		itemUser: ["Snorlax"],
		num: 804,
		gen: 7,
		isNonstandard: "Past",
	},
	snowball: {
		name: "Snowball",
		spritenum: 606,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Ice') {
				target.useItem();
			}
		},
		boosts: {
			atk: 1,
		},
		num: 649,
		gen: 6,
	},
	softsand: {
		name: "Soft Sand",
		spritenum: 456,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ground') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 237,
		gen: 2,
	},
	solganiumz: {
		name: "Solganium Z",
		spritenum: 685,
		onTakeItem: false,
		zMove: "Searing Sunraze Smash",
		zMoveFrom: "Sunsteel Strike",
		itemUser: ["Solgaleo", "Necrozma-Dusk-Mane"],
		num: 921,
		gen: 7,
		isNonstandard: "Past",
	},
	souldew: {
		name: "Soul Dew",
		spritenum: 459,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (
				move && (user.baseSpecies.num === 380 || user.baseSpecies.num === 381) &&
				(move.type === 'Psychic' || move.type === 'Dragon')
			) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Latios", "Latias"],
		num: 225,
		gen: 3,
		isNonstandard: "Past",
	},
	spelltag: {
		name: "Spell Tag",
		spritenum: 461,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 247,
		gen: 2,
	},
	spelonberry: {
		name: "Spelon Berry",
		spritenum: 462,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dark",
		},
		onEat: false,
		num: 179,
		gen: 3,
		isNonstandard: "Past",
	},
	splashplate: {
		name: "Splash Plate",
		spritenum: 463,
		onPlate: 'Water',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Water",
		num: 299,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	spookyplate: {
		name: "Spooky Plate",
		spritenum: 464,
		onPlate: 'Ghost',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ghost",
		num: 310,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	sportball: {
		name: "Sport Ball",
		spritenum: 465,
		num: 499,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable",
	},
	starfberry: {
		name: "Starf Berry",
		spritenum: 472,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Psychic",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in pokemon.boosts) {
				if (stat !== 'accuracy' && stat !== 'evasion' && pokemon.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 2;
				this.boost(boost);
			}
		},
		num: 207,
		gen: 3,
	},
	starsweet: {
		name: "Star Sweet",
		spritenum: 709,
		fling: {
			basePower: 10,
		},
		num: 1114,
		gen: 8,
		isNonstandard: "Past",
	},
	steelixite: {
		name: "Steelixite",
		spritenum: 621,
		megaStone: "Steelix-Mega",
		megaEvolves: "Steelix",
		itemUser: ["Steelix"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 761,
		gen: 6,
		isNonstandard: "Past",
	},
	steelgem: {
		name: "Steel Gem",
		spritenum: 473,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Steel' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 563,
		gen: 5,
		isNonstandard: "Past",
	},
	steelmemory: {
		name: "Steel Memory",
		spritenum: 675,
		onMemory: 'Steel',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Steel",
		itemUser: ["Silvally-Steel"],
		num: 911,
		gen: 7,
		isNonstandard: "Past",
	},
	steeliumz: {
		name: "Steelium Z",
		spritenum: 647,
		onPlate: 'Steel',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Steel",
		forcedForme: "Arceus-Steel",
		num: 792,
		gen: 7,
		isNonstandard: "Past",
	},
	stick: {
		name: "Stick",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (this.toID(user.baseSpecies.baseSpecies) === 'farfetchd') {
				return critRatio + 2;
			}
		},
		itemUser: ["Farfetch\u2019d"],
		num: 259,
		gen: 2,
		isNonstandard: "Past",
	},
	stickybarb: {
		name: "Sticky Barb",
		spritenum: 476,
		fling: {
			basePower: 80,
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
		onHit(target, source, move) {
			if (source && source !== target && !source.item && move && this.checkMoveMakesContact(move, source, target)) {
				const barb = target.takeItem();
				if (!barb) return; // Gen 4 Multitype
				source.setItem(barb);
				// no message for Sticky Barb changing hands
			}
		},
		num: 288,
		gen: 4,
	},
	stoneplate: {
		name: "Stone Plate",
		spritenum: 477,
		onPlate: 'Rock',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Rock",
		num: 309,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	strangeball: {
		name: "Strange Ball",
		spritenum: 303, // TODO
		num: 1785,
		gen: 8,
		isPokeball: true,
		isNonstandard: "Unobtainable",
	},
	strawberrysweet: {
		name: "Strawberry Sweet",
		spritenum: 704,
		fling: {
			basePower: 10,
		},
		num: 1109,
		gen: 8,
		isNonstandard: "Past",
	},
	sunstone: {
		name: "Sun Stone",
		spritenum: 480,
		fling: {
			basePower: 30,
		},
		num: 80,
		gen: 2,
	},
	swampertite: {
		name: "Swampertite",
		spritenum: 612,
		megaStone: "Swampert-Mega",
		megaEvolves: "Swampert",
		itemUser: ["Swampert"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 752,
		gen: 6,
		isNonstandard: "Past",
	},
	sweetapple: {
		name: "Sweet Apple",
		spritenum: 711,
		fling: {
			basePower: 30,
		},
		num: 1116,
		gen: 8,
	},
	tamatoberry: {
		name: "Tamato Berry",
		spritenum: 486,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Psychic",
		},
		onEat: false,
		num: 174,
		gen: 3,
	},
	tangaberry: {
		name: "Tanga Berry",
		spritenum: 487,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Bug' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 194,
		gen: 4,
	},
	tapuniumz: {
		name: "Tapunium Z",
		spritenum: 653,
		onTakeItem: false,
		zMove: "Guardian of Alola",
		zMoveFrom: "Nature's Madness",
		itemUser: ["Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini"],
		num: 801,
		gen: 7,
		isNonstandard: "Past",
	},
	tartapple: {
		name: "Tart Apple",
		spritenum: 712,
		fling: {
			basePower: 30,
		},
		num: 1117,
		gen: 8,
	},
	terrainextender: {
		name: "Terrain Extender",
		spritenum: 662,
		fling: {
			basePower: 60,
		},
		num: 879,
		gen: 7,
	},
	thickclub: {
		name: "Thick Club",
		spritenum: 491,
		fling: {
			basePower: 90,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Cubone' || pokemon.baseSpecies.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem", "Cubone"],
		num: 258,
		gen: 2,
		isNonstandard: "Past",
	},
	throatspray: {
		name: "Throat Spray",
		spritenum: 713,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondarySelf(target, source, move) {
			if (move.flags['sound']) {
				target.useItem();
			}
		},
		boosts: {
			spa: 1,
		},
		num: 1118,
		gen: 8,
	},
	thunderstone: {
		name: "Thunder Stone",
		spritenum: 492,
		fling: {
			basePower: 30,
		},
		num: 83,
		gen: 1,
	},
	timerball: {
		name: "Timer Ball",
		spritenum: 494,
		num: 10,
		gen: 3,
		isPokeball: true,
	},
	toxicorb: {
		name: "Toxic Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'tox',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('tox', pokemon);
		},
		num: 272,
		gen: 4,
	},
	toxicplate: {
		name: "Toxic Plate",
		spritenum: 516,
		onPlate: 'Poison',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Poison",
		num: 304,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	tr00: {
		name: "TR00",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1130,
		gen: 8,
		isNonstandard: "Past",
	},
	tr01: {
		name: "TR01",
		fling: {
			basePower: 85,
		},
		spritenum: 721,
		num: 1131,
		gen: 8,
		isNonstandard: "Past",
	},
	tr02: {
		name: "TR02",
		fling: {
			basePower: 90,
		},
		spritenum: 730,
		num: 1132,
		gen: 8,
		isNonstandard: "Past",
	},
	tr03: {
		name: "TR03",
		fling: {
			basePower: 110,
		},
		spritenum: 731,
		num: 1133,
		gen: 8,
		isNonstandard: "Past",
	},
	tr04: {
		name: "TR04",
		fling: {
			basePower: 90,
		},
		spritenum: 731,
		num: 1134,
		gen: 8,
		isNonstandard: "Past",
	},
	tr05: {
		name: "TR05",
		fling: {
			basePower: 90,
		},
		spritenum: 735,
		num: 1135,
		gen: 8,
		isNonstandard: "Past",
	},
	tr06: {
		name: "TR06",
		fling: {
			basePower: 110,
		},
		spritenum: 735,
		num: 1136,
		gen: 8,
		isNonstandard: "Past",
	},
	tr07: {
		name: "TR07",
		fling: {
			basePower: 10,
		},
		spritenum: 722,
		num: 1137,
		gen: 8,
		isNonstandard: "Past",
	},
	tr08: {
		name: "TR08",
		fling: {
			basePower: 90,
		},
		spritenum: 733,
		num: 1138,
		gen: 8,
		isNonstandard: "Past",
	},
	tr09: {
		name: "TR09",
		fling: {
			basePower: 110,
		},
		spritenum: 733,
		num: 1139,
		gen: 8,
		isNonstandard: "Past",
	},
	tr10: {
		name: "TR10",
		fling: {
			basePower: 100,
		},
		spritenum: 725,
		num: 1140,
		gen: 8,
		isNonstandard: "Past",
	},
	tr11: {
		name: "TR11",
		fling: {
			basePower: 90,
		},
		spritenum: 734,
		num: 1141,
		gen: 8,
		isNonstandard: "Past",
	},
	tr12: {
		name: "TR12",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1142,
		gen: 8,
		isNonstandard: "Past",
	},
	tr13: {
		name: "TR13",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1143,
		gen: 8,
		isNonstandard: "Past",
	},
	tr14: {
		name: "TR14",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1144,
		gen: 8,
		isNonstandard: "Past",
	},
	tr15: {
		name: "TR15",
		fling: {
			basePower: 110,
		},
		spritenum: 730,
		num: 1145,
		gen: 8,
		isNonstandard: "Past",
	},
	tr16: {
		name: "TR16",
		fling: {
			basePower: 80,
		},
		spritenum: 731,
		num: 1146,
		gen: 8,
		isNonstandard: "Past",
	},
	tr17: {
		name: "TR17",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1147,
		gen: 8,
		isNonstandard: "Past",
	},
	tr18: {
		name: "TR18",
		fling: {
			basePower: 80,
		},
		spritenum: 727,
		num: 1148,
		gen: 8,
		isNonstandard: "Past",
	},
	tr19: {
		name: "TR19",
		fling: {
			basePower: 80,
		},
		spritenum: 721,
		num: 1149,
		gen: 8,
		isNonstandard: "Past",
	},
	tr20: {
		name: "TR20",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1150,
		gen: 8,
		isNonstandard: "Past",
	},
	tr21: {
		name: "TR21",
		fling: {
			basePower: 10,
		},
		spritenum: 722,
		num: 1151,
		gen: 8,
		isNonstandard: "Past",
	},
	tr22: {
		name: "TR22",
		fling: {
			basePower: 90,
		},
		spritenum: 724,
		num: 1152,
		gen: 8,
		isNonstandard: "Past",
	},
	tr23: {
		name: "TR23",
		fling: {
			basePower: 10,
		},
		spritenum: 725,
		num: 1153,
		gen: 8,
		isNonstandard: "Past",
	},
	tr24: {
		name: "TR24",
		fling: {
			basePower: 120,
		},
		spritenum: 736,
		num: 1154,
		gen: 8,
		isNonstandard: "Past",
	},
	tr25: {
		name: "TR25",
		fling: {
			basePower: 80,
		},
		spritenum: 734,
		num: 1155,
		gen: 8,
		isNonstandard: "Past",
	},
	tr26: {
		name: "TR26",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1156,
		gen: 8,
		isNonstandard: "Past",
	},
	tr27: {
		name: "TR27",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1157,
		gen: 8,
		isNonstandard: "Past",
	},
	tr28: {
		name: "TR28",
		fling: {
			basePower: 120,
		},
		spritenum: 727,
		num: 1158,
		gen: 8,
		isNonstandard: "Past",
	},
	tr29: {
		name: "TR29",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1159,
		gen: 8,
		isNonstandard: "Past",
	},
	tr30: {
		name: "TR30",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1160,
		gen: 8,
		isNonstandard: "Past",
	},
	tr31: {
		name: "TR31",
		fling: {
			basePower: 100,
		},
		spritenum: 729,
		num: 1161,
		gen: 8,
		isNonstandard: "Past",
	},
	tr32: {
		name: "TR32",
		fling: {
			basePower: 80,
		},
		spritenum: 737,
		num: 1162,
		gen: 8,
		isNonstandard: "Past",
	},
	tr33: {
		name: "TR33",
		fling: {
			basePower: 80,
		},
		spritenum: 728,
		num: 1163,
		gen: 8,
		isNonstandard: "Past",
	},
	tr34: {
		name: "TR34",
		fling: {
			basePower: 120,
		},
		spritenum: 734,
		num: 1164,
		gen: 8,
		isNonstandard: "Past",
	},
	tr35: {
		name: "TR35",
		fling: {
			basePower: 90,
		},
		spritenum: 721,
		num: 1165,
		gen: 8,
		isNonstandard: "Past",
	},
	tr36: {
		name: "TR36",
		fling: {
			basePower: 95,
		},
		spritenum: 730,
		num: 1166,
		gen: 8,
		isNonstandard: "Past",
	},
	tr37: {
		name: "TR37",
		fling: {
			basePower: 10,
		},
		spritenum: 737,
		num: 1167,
		gen: 8,
		isNonstandard: "Past",
	},
	tr38: {
		name: "TR38",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1168,
		gen: 8,
		isNonstandard: "Past",
	},
	tr39: {
		name: "TR39",
		fling: {
			basePower: 120,
		},
		spritenum: 722,
		num: 1169,
		gen: 8,
		isNonstandard: "Past",
	},
	tr40: {
		name: "TR40",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1170,
		gen: 8,
		isNonstandard: "Past",
	},
	tr41: {
		name: "TR41",
		fling: {
			basePower: 85,
		},
		spritenum: 730,
		num: 1171,
		gen: 8,
		isNonstandard: "Past",
	},
	tr42: {
		name: "TR42",
		fling: {
			basePower: 90,
		},
		spritenum: 721,
		num: 1172,
		gen: 8,
		isNonstandard: "Past",
	},
	tr43: {
		name: "TR43",
		fling: {
			basePower: 130,
		},
		spritenum: 730,
		num: 1173,
		gen: 8,
		isNonstandard: "Past",
	},
	tr44: {
		name: "TR44",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1174,
		gen: 8,
		isNonstandard: "Past",
	},
	tr45: {
		name: "TR45",
		fling: {
			basePower: 90,
		},
		spritenum: 731,
		num: 1175,
		gen: 8,
		isNonstandard: "Past",
	},
	tr46: {
		name: "TR46",
		fling: {
			basePower: 10,
		},
		spritenum: 729,
		num: 1176,
		gen: 8,
		isNonstandard: "Past",
	},
	tr47: {
		name: "TR47",
		fling: {
			basePower: 80,
		},
		spritenum: 736,
		num: 1177,
		gen: 8,
		isNonstandard: "Past",
	},
	tr48: {
		name: "TR48",
		fling: {
			basePower: 10,
		},
		spritenum: 722,
		num: 1178,
		gen: 8,
		isNonstandard: "Past",
	},
	tr49: {
		name: "TR49",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1179,
		gen: 8,
		isNonstandard: "Past",
	},
	tr50: {
		name: "TR50",
		fling: {
			basePower: 90,
		},
		spritenum: 732,
		num: 1180,
		gen: 8,
		isNonstandard: "Past",
	},
	tr51: {
		name: "TR51",
		fling: {
			basePower: 10,
		},
		spritenum: 736,
		num: 1181,
		gen: 8,
		isNonstandard: "Past",
	},
	tr52: {
		name: "TR52",
		fling: {
			basePower: 10,
		},
		spritenum: 729,
		num: 1182,
		gen: 8,
		isNonstandard: "Past",
	},
	tr53: {
		name: "TR53",
		fling: {
			basePower: 120,
		},
		spritenum: 722,
		num: 1183,
		gen: 8,
		isNonstandard: "Past",
	},
	tr54: {
		name: "TR54",
		fling: {
			basePower: 10,
		},
		spritenum: 724,
		num: 1184,
		gen: 8,
		isNonstandard: "Past",
	},
	tr55: {
		name: "TR55",
		fling: {
			basePower: 120,
		},
		spritenum: 730,
		num: 1185,
		gen: 8,
		isNonstandard: "Past",
	},
	tr56: {
		name: "TR56",
		fling: {
			basePower: 80,
		},
		spritenum: 722,
		num: 1186,
		gen: 8,
		isNonstandard: "Past",
	},
	tr57: {
		name: "TR57",
		fling: {
			basePower: 80,
		},
		spritenum: 724,
		num: 1187,
		gen: 8,
		isNonstandard: "Past",
	},
	tr58: {
		name: "TR58",
		fling: {
			basePower: 80,
		},
		spritenum: 737,
		num: 1188,
		gen: 8,
		isNonstandard: "Past",
	},
	tr59: {
		name: "TR59",
		fling: {
			basePower: 80,
		},
		spritenum: 732,
		num: 1189,
		gen: 8,
		isNonstandard: "Past",
	},
	tr60: {
		name: "TR60",
		fling: {
			basePower: 80,
		},
		spritenum: 727,
		num: 1190,
		gen: 8,
		isNonstandard: "Past",
	},
	tr61: {
		name: "TR61",
		fling: {
			basePower: 90,
		},
		spritenum: 727,
		num: 1191,
		gen: 8,
		isNonstandard: "Past",
	},
	tr62: {
		name: "TR62",
		fling: {
			basePower: 85,
		},
		spritenum: 736,
		num: 1192,
		gen: 8,
		isNonstandard: "Past",
	},
	tr63: {
		name: "TR63",
		fling: {
			basePower: 80,
		},
		spritenum: 726,
		num: 1193,
		gen: 8,
		isNonstandard: "Past",
	},
	tr64: {
		name: "TR64",
		fling: {
			basePower: 120,
		},
		spritenum: 722,
		num: 1194,
		gen: 8,
		isNonstandard: "Past",
	},
	tr65: {
		name: "TR65",
		fling: {
			basePower: 90,
		},
		spritenum: 732,
		num: 1195,
		gen: 8,
		isNonstandard: "Past",
	},
	tr66: {
		name: "TR66",
		fling: {
			basePower: 120,
		},
		spritenum: 723,
		num: 1196,
		gen: 8,
		isNonstandard: "Past",
	},
	tr67: {
		name: "TR67",
		fling: {
			basePower: 90,
		},
		spritenum: 725,
		num: 1197,
		gen: 8,
		isNonstandard: "Past",
	},
	tr68: {
		name: "TR68",
		fling: {
			basePower: 10,
		},
		spritenum: 737,
		num: 1198,
		gen: 8,
		isNonstandard: "Past",
	},
	tr69: {
		name: "TR69",
		fling: {
			basePower: 80,
		},
		spritenum: 734,
		num: 1199,
		gen: 8,
		isNonstandard: "Past",
	},
	tr70: {
		name: "TR70",
		fling: {
			basePower: 80,
		},
		spritenum: 729,
		num: 1200,
		gen: 8,
		isNonstandard: "Past",
	},
	tr71: {
		name: "TR71",
		fling: {
			basePower: 130,
		},
		spritenum: 732,
		num: 1201,
		gen: 8,
		isNonstandard: "Past",
	},
	tr72: {
		name: "TR72",
		fling: {
			basePower: 120,
		},
		spritenum: 732,
		num: 1202,
		gen: 8,
		isNonstandard: "Past",
	},
	tr73: {
		name: "TR73",
		fling: {
			basePower: 120,
		},
		spritenum: 724,
		num: 1203,
		gen: 8,
		isNonstandard: "Past",
	},
	tr74: {
		name: "TR74",
		fling: {
			basePower: 80,
		},
		spritenum: 729,
		num: 1204,
		gen: 8,
		isNonstandard: "Past",
	},
	tr75: {
		name: "TR75",
		fling: {
			basePower: 100,
		},
		spritenum: 726,
		num: 1205,
		gen: 8,
		isNonstandard: "Past",
	},
	tr76: {
		name: "TR76",
		fling: {
			basePower: 10,
		},
		spritenum: 726,
		num: 1206,
		gen: 8,
		isNonstandard: "Past",
	},
	tr77: {
		name: "TR77",
		fling: {
			basePower: 10,
		},
		spritenum: 732,
		num: 1207,
		gen: 8,
		isNonstandard: "Past",
	},
	tr78: {
		name: "TR78",
		fling: {
			basePower: 95,
		},
		spritenum: 724,
		num: 1208,
		gen: 8,
		isNonstandard: "Past",
	},
	tr79: {
		name: "TR79",
		fling: {
			basePower: 10,
		},
		spritenum: 729,
		num: 1209,
		gen: 8,
		isNonstandard: "Past",
	},
	tr80: {
		name: "TR80",
		fling: {
			basePower: 10,
		},
		spritenum: 733,
		num: 1210,
		gen: 8,
		isNonstandard: "Past",
	},
	tr81: {
		name: "TR81",
		fling: {
			basePower: 95,
		},
		spritenum: 737,
		num: 1211,
		gen: 8,
		isNonstandard: "Past",
	},
	tr82: {
		name: "TR82",
		fling: {
			basePower: 20,
		},
		spritenum: 734,
		num: 1212,
		gen: 8,
		isNonstandard: "Past",
	},
	tr83: {
		name: "TR83",
		fling: {
			basePower: 10,
		},
		spritenum: 734,
		num: 1213,
		gen: 8,
		isNonstandard: "Past",
	},
	tr84: {
		name: "TR84",
		fling: {
			basePower: 80,
		},
		spritenum: 731,
		num: 1214,
		gen: 8,
		isNonstandard: "Past",
	},
	tr85: {
		name: "TR85",
		fling: {
			basePower: 10,
		},
		spritenum: 721,
		num: 1215,
		gen: 8,
		isNonstandard: "Past",
	},
	tr86: {
		name: "TR86",
		fling: {
			basePower: 90,
		},
		spritenum: 733,
		num: 1216,
		gen: 8,
		isNonstandard: "Past",
	},
	tr87: {
		name: "TR87",
		fling: {
			basePower: 80,
		},
		spritenum: 725,
		num: 1217,
		gen: 8,
		isNonstandard: "Past",
	},
	tr88: {
		name: "TR88",
		fling: {
			basePower: 10,
		},
		spritenum: 730,
		num: 1218,
		gen: 8,
		isNonstandard: "Past",
	},
	tr89: {
		name: "TR89",
		fling: {
			basePower: 110,
		},
		spritenum: 723,
		num: 1219,
		gen: 8,
		isNonstandard: "Past",
	},
	tr90: {
		name: "TR90",
		fling: {
			basePower: 90,
		},
		spritenum: 738,
		num: 1220,
		gen: 8,
		isNonstandard: "Past",
	},
	tr91: {
		name: "TR91",
		fling: {
			basePower: 10,
		},
		spritenum: 724,
		num: 1221,
		gen: 8,
		isNonstandard: "Past",
	},
	tr92: {
		name: "TR92",
		fling: {
			basePower: 80,
		},
		spritenum: 738,
		num: 1222,
		gen: 8,
		isNonstandard: "Past",
	},
	tr93: {
		name: "TR93",
		fling: {
			basePower: 85,
		},
		spritenum: 737,
		num: 1223,
		gen: 8,
		isNonstandard: "Past",
	},
	tr94: {
		name: "TR94",
		fling: {
			basePower: 95,
		},
		spritenum: 725,
		num: 1224,
		gen: 8,
		isNonstandard: "Past",
	},
	tr95: {
		name: "TR95",
		fling: {
			basePower: 80,
		},
		spritenum: 737,
		num: 1225,
		gen: 8,
		isNonstandard: "Past",
	},
	tr96: {
		name: "TR96",
		fling: {
			basePower: 90,
		},
		spritenum: 727,
		num: 1226,
		gen: 8,
		isNonstandard: "Past",
	},
	tr97: {
		name: "TR97",
		fling: {
			basePower: 85,
		},
		spritenum: 734,
		num: 1227,
		gen: 8,
		isNonstandard: "Past",
	},
	tr98: {
		name: "TR98",
		fling: {
			basePower: 85,
		},
		spritenum: 731,
		num: 1228,
		gen: 8,
		isNonstandard: "Past",
	},
	tr99: {
		name: "TR99",
		fling: {
			basePower: 80,
		},
		spritenum: 722,
		num: 1229,
		gen: 8,
		isNonstandard: "Past",
	},
	twistedspoon: {
		name: "Twisted Spoon",
		spritenum: 520,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 248,
		gen: 2,
	},
	tyranitarite: {
		name: "Tyranitarite",
		spritenum: 607,
		megaStone: "Tyranitar-Mega",
		megaEvolves: "Tyranitar",
		itemUser: ["Tyranitar"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 669,
		gen: 6,
		isNonstandard: "Past",
	},
	ultraball: {
		name: "Ultra Ball",
		spritenum: 521,
		num: 2,
		gen: 1,
		isPokeball: true,
	},
	ultranecroziumz: {
		name: "Ultranecrozium Z",
		spritenum: 687,
		onTakeItem: false,
		zMove: "Light That Burns the Sky",
		zMoveFrom: "Photon Geyser",
		itemUser: ["Necrozma-Ultra"],
		num: 923,
		gen: 7,
		isNonstandard: "Past",
	},
	upgrade: {
		name: "Up-Grade",
		spritenum: 523,
		fling: {
			basePower: 30,
		},
		num: 252,
		gen: 2,
		isNonstandard: "Past",
	},
	utilityumbrella: {
		name: "Utility Umbrella",
		spritenum: 718,
		fling: {
			basePower: 60,
		},
		// Partially implemented in Pokemon.effectiveWeather() in sim/pokemon.ts
		onStart(pokemon) {
			if (!pokemon.ignoringItem()) return;
			if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
				this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
			}
		},
		onUpdate(pokemon) {
			if (!this.effectState.inactive) return;
			this.effectState.inactive = false;
			if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
				this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
			}
		},
		onEnd(pokemon) {
			if (['sunnyday', 'raindance', 'desolateland', 'primordialsea'].includes(this.field.effectiveWeather())) {
				this.runEvent('WeatherChange', pokemon, pokemon, this.effect);
			}
			this.effectState.inactive = true;
		},
		num: 1123,
		gen: 8,
	},
	venusaurite: {
		name: "Venusaurite",
		spritenum: 608,
		megaStone: "Venusaur-Mega",
		megaEvolves: "Venusaur",
		itemUser: ["Venusaur"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 659,
		gen: 6,
		isNonstandard: "Past",
	},
	wacanberry: {
		name: "Wacan Berry",
		spritenum: 526,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Electric' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 186,
		gen: 4,
	},
	watergem: {
		name: "Water Gem",
		spritenum: 528,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Water' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 549,
		gen: 5,
		isNonstandard: "Past",
	},
	watermemory: {
		name: "Water Memory",
		spritenum: 677,
		onMemory: 'Water',
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 773) || pokemon.baseSpecies.num === 773) {
				return false;
			}
			return true;
		},
		forcedForme: "Silvally-Water",
		itemUser: ["Silvally-Water"],
		num: 913,
		gen: 7,
		isNonstandard: "Past",
	},
	waterstone: {
		name: "Water Stone",
		spritenum: 529,
		fling: {
			basePower: 30,
		},
		num: 84,
		gen: 1,
	},
	wateriumz: {
		name: "Waterium Z",
		spritenum: 633,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Water",
		forcedForme: "Arceus-Water",
		num: 778,
		gen: 7,
		isNonstandard: "Past",
	},
	watmelberry: {
		name: "Watmel Berry",
		spritenum: 530,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fire",
		},
		onEat: false,
		num: 181,
		gen: 3,
		isNonstandard: "Past",
	},
	waveincense: {
		name: "Wave Incense",
		spritenum: 531,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 317,
		gen: 4,
		isNonstandard: "Past",
	},
	weaknesspolicy: {
		name: "Weakness Policy",
		spritenum: 609,
		fling: {
			basePower: 80,
		},
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
				target.useItem();
			}
		},
		boosts: {
			atk: 2,
			spa: 2,
		},
		num: 639,
		gen: 6,
	},
	wepearberry: {
		name: "Wepear Berry",
		spritenum: 533,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Electric",
		},
		onEat: false,
		num: 167,
		gen: 3,
		isNonstandard: "Past",
	},
	whippeddream: {
		name: "Whipped Dream",
		spritenum: 692,
		fling: {
			basePower: 80,
		},
		num: 646,
		gen: 6,
		isNonstandard: "Past",
	},
	whiteherb: {
		name: "White Herb",
		spritenum: 535,
		fling: {
			basePower: 10,
			effect(pokemon) {
				let activate = false;
				const boosts: SparseBoostsTable = {};
				let i: BoostID;
				for (i in pokemon.boosts) {
					if (pokemon.boosts[i] < 0) {
						activate = true;
						boosts[i] = 0;
					}
				}
				if (activate) {
					pokemon.setBoost(boosts);
					this.add('-clearnegativeboost', pokemon, '[silent]');
				}
			},
		},
		onUpdate(pokemon) {
			let activate = false;
			const boosts: SparseBoostsTable = {};
			let i: BoostID;
			for (i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					activate = true;
					boosts[i] = 0;
				}
			}
			if (activate && pokemon.useItem()) {
				pokemon.setBoost(boosts);
				this.add('-clearnegativeboost', pokemon, '[silent]');
			}
		},
		num: 214,
		gen: 3,
	},
	widelens: {
		name: "Wide Lens",
		spritenum: 537,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify([4505, 4096]);
			}
		},
		num: 265,
		gen: 4,
	},
	wikiberry: {
		name: "Wiki Berry",
		spritenum: 538,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		num: 160,
		gen: 3,
	},
	wiseglasses: {
		name: "Wise Glasses",
		spritenum: 539,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Special') {
				return this.chainModify([4505, 4096]);
			}
		},
		num: 267,
		gen: 4,
	},
	yacheberry: {
		name: "Yache Berry",
		spritenum: 567,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ice' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		onEat() { },
		num: 188,
		gen: 4,
	},
	zapplate: {
		name: "Zap Plate",
		spritenum: 572,
		onPlate: 'Electric',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Electric",
		num: 300,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
	zoomlens: {
		name: "Zoom Lens",
		spritenum: 574,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				return this.chainModify([4915, 4096]);
			}
		},
		num: 276,
		gen: 4,
	},

	// Gen 2 items

	berserkgene: {
		name: "Berserk Gene",
		spritenum: 388,
		onUpdate(pokemon) {
			if (pokemon.useItem()) {
				pokemon.addVolatile('confusion');
			}
		},
		boosts: {
			atk: 2,
		},
		num: 0,
		gen: 2,
		isNonstandard: "Past",
	},
	berry: {
		name: "Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onResidualOrder: 5,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(10);
		},
		num: 155,
		gen: 2,
		isNonstandard: "Past",
	},
	bitterberry: {
		name: "Bitter Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('confusion');
		},
		num: 156,
		gen: 2,
		isNonstandard: "Past",
	},
	burntberry: {
		name: "Burnt Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.cureStatus();
			}
		},
		num: 153,
		gen: 2,
		isNonstandard: "Past",
	},
	goldberry: {
		name: "Gold Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onResidualOrder: 5,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(30);
		},
		num: 158,
		gen: 2,
		isNonstandard: "Past",
	},
	iceberry: {
		name: "Ice Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		num: 152,
		gen: 2,
		isNonstandard: "Past",
	},
	mintberry: {
		name: "Mint Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.cureStatus();
			}
		},
		num: 150,
		gen: 2,
		isNonstandard: "Past",
	},
	miracleberry: {
		name: "Miracle Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
		num: 157,
		gen: 2,
		isNonstandard: "Past",
	},
	mysteryberry: {
		name: "Mystery Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onUpdate(pokemon) {
			if (!pokemon.hp) return;
			const moveSlot = pokemon.lastMove && pokemon.getMoveData(pokemon.lastMove.id);
			if (moveSlot && moveSlot.pp === 0) {
				pokemon.addVolatile('leppaberry');
				pokemon.volatiles['leppaberry'].moveSlot = moveSlot;
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			let moveSlot;
			if (pokemon.volatiles['leppaberry']) {
				moveSlot = pokemon.volatiles['leppaberry'].moveSlot;
				pokemon.removeVolatile('leppaberry');
			} else {
				let pp = 99;
				for (const possibleMoveSlot of pokemon.moveSlots) {
					if (possibleMoveSlot.pp < pp) {
						moveSlot = possibleMoveSlot;
						pp = moveSlot.pp;
					}
				}
			}
			moveSlot.pp += 5;
			if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
			this.add('-activate', pokemon, 'item: Mystery Berry', moveSlot.move);
		},
		num: 154,
		gen: 2,
		isNonstandard: "Past",
	},
	pinkbow: {
		name: "Pink Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return basePower * 1.1;
			}
		},
		num: 251,
		gen: 2,
		isNonstandard: "Past",
	},
	polkadotbow: {
		name: "Polkadot Bow",
		spritenum: 444,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return basePower * 1.1;
			}
		},
		num: 251,
		gen: 2,
		isNonstandard: "Past",
	},
	przcureberry: {
		name: "PRZ Cure Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		num: 149,
		gen: 2,
		isNonstandard: "Past",
	},
	psncureberry: {
		name: "PSN Cure Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.cureStatus();
			}
		},
		num: 151,
		gen: 2,
		isNonstandard: "Past",
	},

	// CAP items

	crucibellite: {
		name: "Crucibellite",
		spritenum: 577,
		megaStone: "Crucibelle-Mega",
		megaEvolves: "Crucibelle",
		itemUser: ["Crucibelle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 6,
		isNonstandard: "CAP",
	},
	vilevial: {
		name: "Vile Vial",
		spritenum: 752,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === -66 && ['Poison', 'Flying'].includes(move.type)) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -66 || pokemon.baseSpecies.num === -66) {
				return false;
			}
			return true;
		},
		forcedForme: "Venomicon-Epilogue",
		itemUser: ["Venomicon-Epilogue"],
		num: -2,
		gen: 8,
		isNonstandard: "CAP",
	},
	/* Clover Exclusive Items */
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
	},
	suedeshoes: {
		name: "Suede Shoes",
		spritenum: 746,
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pretzely') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Pretzely"],
		isNonstandard: "Future",
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
		isNonstandard: "Future",
	},
	thiccbone: {
		name: "Thicc Bone",
		spritenum: 379,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Masdawg' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Gambino' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Toadagi' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Whiteout' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Swoldier' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Mr. Toad' || pokemon.baseSpecies.baseSpecies === 'Pasdawg-Staypuft' || pokemon.baseSpecies.baseSpecies === 'Pasdawg' || pokemon.baseSpecies.baseSpecies === 'Naughtycoot') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Masdawg", "Pasdawg", "Naughtycoot", "Blobbos-Skeleton", "Pasdawg-Gambino", "Pasdawg-Toadagi", "Pasdawg-Whiteout", "Pasdawg-Swoldier", "Pasdawg-Mr. Toad", "Pasdawg-Staypuft"],
		isNonstandard: "Future",
	},
	/* Clover CAP Exclusive Items */
	moluganion: {
		name: "Moluganion",
		spritenum: 751,
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
		spritenum: 752,
		fling: {
			basePower: 20,
		},
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			 if (['Skubmarine', 'Skuba'].includes(pokemon.species.name)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			 if (['Skubmarine', 'Skuba'].includes(pokemon.species.name)) {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			 if (['Skubmarine-Anti', 'Skuba-Anti'].includes(pokemon.species.name)) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (['Skubmarine-Anti', 'Skuba-Anti'].includes(pokemon.species.name)) {
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Skubmarine", "Skubmarine-Anti", "Skuba", "Skuba-Anti"],
		isNonstandard: "Future",
	},
	rustedcrown: {
		name: "Rusted Crown",
		spritenum: 236,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.name === 'Blobbos-Galar') || pokemon.baseSpecies.name === 'Blobbos-Galar-Crowned') {
				return false;
			}
			return true;
		},
		forcedForme: "Blobbos-Galar-Crowned",
		itemUser: ["Blobbos-Galar-Crowned"],
		gen: 8,
		isNonstandard: "Future",
	},
	nullgem: {
		name: "Null Gem",
		spritenum: 750,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === '???' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 562,
		gen: 5,
		isNonstandard: "Past",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
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
		isNonstandard: "Future",
	},
	fusjite: {
		name: "Fusjite",
		spritenum: 577,
		megaStone: "Fusjahl-Mega",
		megaEvolves: "Fusjahl",
		itemUser: ["Fusjahl"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	ultrablobbosiumz: {
		name: "Ultrablobbosium Z",
		spritenum: 686,
		onTakeItem: false,
		zMove: "Slepp That Blobs the Sky",
		zMoveFrom: "Blobby Bop",
		itemUser: ["Blobbos-Ultra"],
		gen: 8,
		isNonstandard: "Future",
	},
	ointmiteite: {
		name: "Ointmiteite",
		spritenum: 599,
		megaStone: "Ointmite-Mega",
		megaEvolves: "Ointmite",
		itemUser: ["Ointmite"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	sableviumz: {
		name: "Sablevium Z",
		spritenum: 636,
		onTakeItem: false,
		zMove: "Twin Tower Tumbling Terror",
		zMoveFrom: "Freeze-Dry",
		itemUser: ["Blobbos-Rembered", "Sableven"],
		gen: 8,
		isNonstandard: "Future",
	},
	kalosite: {
		name: "Kalosite",
		spritenum: 599,
		megaStone: "Blobbos-Kalos-Mega",
		megaEvolves: "Blobbos-Kalos",
		itemUser: ["Blobbos-Kalos"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	blobbosite: {
		name: "Blobbosite",
		spritenum: 630,
		megaStone: "Blobbos-Mega",
		megaEvolves: "Blobbos",
		itemUser: ["Blobbos"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	reversite: {
		name: "Reversite",
		spritenum: 625,
		megaStone: "Blobbos-Reverse-Mega",
		megaEvolves: "Blobbos-Reverse",
		itemUser: ["Blobbos-Reverse"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	sexitey: {
		name: "Sexite Y",
		spritenum: 587,
		megaStone: "Blobbos-Sexy-Mega-Y",
		megaEvolves: "Blobbos-Sexy",
		itemUser: ["Blobbos-Sexy"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	sexitex: {
		name: "Sexite X",
		spritenum: 577,
		megaStone: "Blobbos-Sexy-Mega-X",
		megaEvolves: "Blobbos-Sexy",
		itemUser: ["Blobbos-Sexy"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	negite: {
		name: "Negite",
		spritenum: 628,
		megaStone: "Blobbos-Nega-Mega",
		megaEvolves: "Blobbos-Nega",
		itemUser: ["Blobbos-Nega"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	dustite: {
		name: "Dustite",
		spritenum: 623,
		megaStone: "Blobbos-Dust-Mega",
		megaEvolves: "Blobbos-Dust",
		itemUser: ["Blobbos-Dust"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	blobbosmikiumz: {
		name: "Blobbosmikium Z",
		spritenum: 686,
		onTakeItem: false,
		zMove: "Let's Slepp Forever",
		zMoveFrom: "Flash Freeze",
		itemUser: ["Blobbos-Mimikyu", "Blobbos-Mimikyu-Busted"],
		gen: 8,
		isNonstandard: "Future",
	},
	wackite: {
		name: "Wackite",
		spritenum: 589,
		megaStone: "Blobbos-Wack-Mega",
		megaEvolves: "Blobbos-Wack",
		itemUser: ["Blobbos-Wack"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	zeroite: {
		name: "Zeroite",
		spritenum: 616,
		megaStone: "Blobbos-Zero-Mega",
		megaEvolves: "Blobbos-Zero",
		itemUser: ["Blobbos-Zero"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	plasticgem: {
		name: "Plastic Gem",
		spritenum: 53,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Plastic' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 558,
		gen: 5,
		isNonstandard: "Future",
	},
	glassgem: {
		name: "Glass Gem",
		spritenum: 53,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Glass' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 558,
		gen: 5,
		isNonstandard: "Future",
	},
	piratesbooty: {
		name: "Pirate's Booty",
		spritenum: 745,
		fling: {
			basePower: 80,
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.species.name === 'Blobbos-Pirate') {
				return this.chainModify(2);
			}
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.species.name === 'Blobbos-Pirate') {
				return this.chainModify(2);
			}
		},
		num: 640,
		gen: 8,
		itemUser: ["Blobbos-Pirate"],
		isNonstandard: "Future",
	},
	masamune: {
		name: "Masamune",
		spritenum: 743,
		fling: {
			basePower: 80,
		},
		onModifySpDPriority: 2,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Blobbos-Ninja') {
				return this.chainModify(2);
			}
		},
		onModifyDefPriority: 2,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Blobbos-Ninja') {
				return this.chainModify(2);
			}
		},
		num: 640,
		gen: 8,
		itemUser: ["Blobbos-Ninja"],
		isNonstandard: "Future",
	},
	kerosenehose: {
		name: "Kerosene Hose",
		spritenum: 574,
		fling: {
			basePower: 80,
		},
		onModifySpePriority: 2,
		onModifySpe(spe, pokemon) {
			if (pokemon.species.name === 'Blobbos-Firefighter') {
				return this.chainModify(1.5);
			}
		},
		num: 640,
		gen: 8,
		itemUser: ["Blobbos-Firefighter"],
		isNonstandard: "Future",
	},
	baitite: {
		name: "Baitite",
		spritenum: 585,
		megaStone: "Blobbos-Bait-Mega",
		megaEvolves: "Blobbos-Bait",
		itemUser: ["Blobbos-Bait"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	phylactery: {
		name: "Phylactery",
		isNonstandard: "Future",
		onResidual(pokemon) {
			if (['blobboslich', 'blobboslichmortal'].includes(pokemon.species.id)) return;
			const mortals = pokemon.side.pokemon.filter((ally) => ally.ability === 'mortal');

			for (const mortal of mortals) {
				mortal.abilityState.recovered = true;
			}

			if (mortals.length) {
				this.add('-activate', pokemon, 'item: Phylactery');
			}
		},
	},
	toxanite: {
		name: "Toxanite",
		spritenum: 577,
		megaStone: "Toxanine-Mega",
		megaEvolves: "Toxanine",
		itemUser: ["Toxanine"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	fusjiniumz: {
		name: "Fusjinium Z",
		spritenum: 686,
		onTakeItem: false,
		zMove: "Gigasubferno Strike",
		zMoveFrom: "Tri-Punch",
		itemUser: ["Fusjahl"],
		gen: 8,
		isNonstandard: "Future",
	},
	charger: {
		name: "Charger",
		spritenum: 60,
		onHit(target, source, move) {
			if (move.type === 'Electric' || move.id.includes('energy')) {
				target.addVolatile('charge');
			}
		},
		isNonstandard: "Future",
	},
	blackmagiumz: {
		name: "Blackmagium Z	",
		spritenum: 648,
		onTakeItem: false,
		zMove: "Ultima",
		zMoveFrom: "Meteor",
		itemUser: ["Blobbos-Black Mage"],
		num: 1836,
		isNonstandard: "Future",
	},
	terrainboard: {
		name: "Terrain Board",
		spritenum: 730,
		onModifySpePriority: 1,
		onModifySpe(spe, pokemon) {
			if (this.field.terrain && pokemon.species.name === 'Blobbos-Surfer') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Surfer"],
		isNonstandard: "Future",
	},
	curlykrill: {
		name: "Curly Krill",
		spritenum: 730,
		onAfterMove(pokemon, target, move) {
			if (move.id === 'orderup') {
				this.boost({atk: 1});
			}
		},
		isNonstandard: "Future",
	},
	droopykrill: {
		name: "Droopy Krill",
		spritenum: 730,
		onAfterMove(pokemon, target, move) {
			if (move.id === 'orderup') {
				this.boost({def: 1});
			}
		},
		isNonstandard: "Future",
	},
	stretchykrill: {
		name: "Stretchy Krill",
		spritenum: 730,
		onAfterMove(pokemon, target, move) {
			if (move.id === 'orderup') {
				this.boost({spe: 1});
			}
		},
		isNonstandard: "Future",
	},
	earmuffs: {
		name: "Earmuffs",
		spritenum: 367,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				this.debug('Earmuffs weaken');
				return this.chainModify(0.5);
			}
		},
		isNonstandard: "Future",
	},
	paraorb: {
		name: "Para Orb",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		num: 2512,
		isNonstandard: "Future",
	},
	usbdrive: {
		name: "USB Drive",
		spritenum: 103,
		fling: {
			basePower: 42,
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onSwitchIn(pokemon) {
			if (pokemon.hasType('Steel')) {
				pokemon.useItem();
			}
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		num: 2512,
		isNonstandard: "Future",
	},
	royalcrown: {
		name: "Royal Crown",
		spritenum: 236,
		fling: {
			basePower: 80,
		},
		onModifySpePriority: 2,
		onModifySpe(spe, pokemon) {
			if (pokemon.species.name === 'Blobbos-King') {
				return this.chainModify(2);
			}
		},
		num: 640,
		gen: 8,
		itemUser: ["Blobbos-King"],
		isNonstandard: "Future",
	},
	starrod: {
		name: "Star Rod",
		spritenum: 343,
		fling: {
			basePower: 30,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Blobbos-Kirby') {
				return this.chainModify(1.3);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Blobbos-Kirby') {
				return this.chainModify(1.3);
			}
		},
		itemUser: ["Blobbos-Kirby"],
		isNonstandard: "Future",
	},
	glock: {
		name: "Glock",
		spritenum: 343,
		fling: {
			basePower: 30,
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Blobbos-Unova') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Unova"],
		isNonstandard: "Future",
	},
	loadeddisk: {
		name: "Loaded Disk",
		spritenum: 730,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.species.name === 'Blobbos-Spamton') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Spamton"],
		isNonstandard: "Future",
	},
	propellerhat: {
		name: "Propeller Hat",
		spritenum: 417,
		fling: {
			basePower: 80,
		},
		onModifySpePriority: 2,
		onModifySpe(spe, pokemon) {
			if (pokemon.species.name === 'Blobbos-Keks') {
				return this.chainModify(1.5);
			}
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		itemUser: ["Blobbos-Keks"],
		isNonstandard: "Future",
	},
	choiceshield: {
		name: "Choice Shield",
		spritenum: 699,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifyDef(def, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		isNonstandard: "Future",
	},
	choicevest: {
		name: "Choice Vest",
		spritenum: 581,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: ' + pokemon.volatiles['choicelock']);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpD(spd, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		isNonstandard: "Future",
	},
	licensetosellhotdogs: {
		name: "License to Sell Hotdogs",
		spritenum: 609,
		fling: {
			basePower: 5185550170,
		},
		itemUser: ["Blobbos-Snek", "Blobbos-Angel"],
		isNonstandard: "Future",
	},
	ancientitem: {
		name: "Ancient Item",
		isNonstandard: "Future",
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (target.species.id !== 'blobbosduelist') return;
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				if (target.useItem()) {
					target.formeChange('blobbosduelistdark', this.effect, true);
					return target.hp - 1;
				}
			}
		},
		itemUser: ['Blobbos-Duelist', 'Blobbos-Duelist-Dark'],
	},
	pizzaite: {
		name: "Pizzaite",
		spritenum: 587,
		megaStone: "Blobbos-Pizza-Mega",
		megaEvolves: "Blobbos-Pizza",
		itemUser: ["Blobbos-Pizza"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	marxite: {
		name: "Marxite",
		spritenum: 616,
		megaStone: "Blobbos-Marx-Mega",
		megaEvolves: "Blobbos-Marx",
		itemUser: ["Blobbos-Marx"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	beeite: {
		name: "Beeite",
		spritenum: 628,
		megaStone: "Blobbos-Bee-Mega",
		megaEvolves: "Blobbos-Bee",
		itemUser: ["Blobbos-Bee"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	ultrafuckiumz: {
		name: "Ultrafuckium Z",
		spritenum: 687,
		onTakeItem: false,
		zMove: "Move That Fucks Yourself",
		zMoveFrom: "Rocket Punch",
		itemUser: ["Fucker-Ultra"],
		isNonstandard: "Future",
	},
	stunfiskite: {
		name: "Stunfiskite",
		spritenum: 628,
		megaStone: "Stunfisk-Mega",
		megaEvolves: "Stunfisk",
		itemUser: ["Stunfisk"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
	},
	focusspecs: {
		name: "Focus Specs",
		spritenum: 70,
		onStart() {
			this.effectState.forme = this.sample(['focus', 'specs', 'nothing', 'nothing', 'nothing']);
		},
		onResidual() {
			this.effectState.forme = this.sample(['focus', 'specs', 'nothing', 'nothing', 'nothing']);
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (!pokemon.species.tags.includes('Weedlekind')) return;
			if (this.effectState.forme !== 'specs') return;
			return this.chainModify(1.5);
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (!target.species.tags.includes('Weedlekind')) return;
			if (this.effectState.forme !== 'focus') return;
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Specs");
				return target.hp - 1;
			}
		},
		isNonstandard: "Future",
	},
	krack: {
		name: "Krack",
		isNonstandard: "Future",
		spritenum: 305,
		onResidual(pokemon) {
			if (!pokemon.species.tags.includes('Krackokind')) return;
			this.boost({
				atk: -1,
				def: -1,
				spa: -1,
				spd: -1,
				spe: 1,
			}, pokemon);
		},
	},
	mirrorclaw: {
		name: "Mirror Claw",
		spritenum: 373,
		isNonstandard: "Future",
		onModifyMove(move) {
			if (move.category === "Status") return;
			if (move.multihit) return;
			if (this.randomChance(1, 20)) {
				move.multihit = 2;
			}
		},
	},
	rope: {
		name: "Rope",
		isNonstandard: "Future",
		onResidual(pokemon) {
			const isSuicidal = (pokemon.hasType('Fairy') && (pokemon.hp / pokemon.baseMaxhp) < 0.41) ||
				(pokemon.hp / pokemon.baseMaxhp < 0.33);

			if (isSuicidal) {
				for (const foe of pokemon.foes()) {
					foe.addVolatile('curse', pokemon, this.effect);
				}
				pokemon.faint(pokemon, this.effect);
			}
		},
	},
	midnightsnack: {
		name: "Midnight Snack",
		spritenum: 242,
		isNonstandard: "Future",
		onResidual(pokemon) {
			if (pokemon.status !== 'slp') return;
			this.heal(pokemon.baseMaxhp / 8);
		},
	},
	squirtgun: {
		name: "Squirt Gun",
		isNonstandard: "Future",
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target) return;
			if (move.target !== 'normal') return;
			if (source.useItem()) {
				this.actions.useMove('watergun', source, target);
			}
		},
	},
	grimseeds: {
		name: "Grim Seeds",
		isNonstandard: "Future",
		onFaint(pokemon) {
			if (!pokemon.hasType('grass')) return;
			const target = this.sample(pokemon.foes().filter((foe) => !foe.fainted));
			if (!target) return;
			target.addVolatile('leechseeds');
		},
	},
	kikeousorb: {
		name: "Kikeous Orb",
		spritenum: 180,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.num === 6969248 && (move.type === 'Normal' || move.type === 'Bug')) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Jewipede"],
		num: 69112,
		isNonstandard: "Future",
	},
	alcohol: {
		name: "Alcohol",
		spritenum: 22,
		itemUser: ["Tsuchinoko", "Sanickel", "Skoxious"],
		isNonstandard: "Future",
		fling: {
			basePower: 1,
			status: 'slp',
		},
		onUpdate(pokemon) {
			if (pokemon.hp < pokemon.maxhp) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			const random = this.random(4);
			const drunken = this.random(6);
			if (pokemon.species.name === 'Tsuchinoko' || pokemon.species.name === 'Sanickel' || pokemon.species.name === 'Skoxious' && !pokemon.transformed) {
				if (random === 0) {
					this.damage(pokemon.baseMaxhp / 4);
				}
				if (random === 1) {
					this.heal(pokemon.baseMaxhp / 2);
				}
				if (random === 2) {
					this.heal(pokemon.baseMaxhp);
				}
				if (drunken === 0) {
					pokemon.trySetStatus('slp', pokemon);
				}
				if (drunken === 1) {
					pokemon.addVolatile('confusion');
				}
				if (drunken === 2) {
					pokemon.addVolatile('stockpile');
				}
				if (drunken === 3) {
					pokemon.addVolatile('flinch');
				}
				if (drunken === 4) {
					pokemon.addVolatile('aquaring');
				}
				if (drunken === 5) {
					pokemon.addVolatile('focusenergy');
				}
			} else {
				if (random === 0) {
					this.damage(pokemon.baseMaxhp / 3);
				}
				if (random === 1) {
					this.damage(pokemon.baseMaxhp / 2);
				}
				if (random === 2) {
					this.damage(pokemon.baseMaxhp / 4);
				}
				if (drunken === 0) {
					pokemon.trySetStatus('lockedmove', pokemon);
					pokemon.addVolatile('confusion');
				}
				if (drunken === 1) {
					pokemon.trySetStatus('slp', pokemon);
				}
				if (drunken === 2) {
					pokemon.addVolatile('confusion');
				}
				if (drunken === 3) {
					pokemon.addVolatile('confusion');
					pokemon.addVolatile('taunt');
					pokemon.addVolatile('torment');
					pokemon.addVolatile('lockedmove');
				}
				if (drunken === 4) {
					pokemon.addVolatile('yawn');
					pokemon.addVolatile('confusion');
					pokemon.addVolatile('taunt');
					pokemon.addVolatile('torment');
				}
				if (drunken === 5) {
					pokemon.trySetStatus('slp', pokemon);
					pokemon.addVolatile('nightmare');
				}
				if (drunken === 6) {
					pokemon.trySetStatus('slp', pokemon);
					pokemon.addVolatile('confusion');
					pokemon.addVolatile('nightmare');
				}
			}
		},
	},
	mesosack: {
		name: "Meso Sack",
		isNonstandard: "Future",
	},
	missingvoirite: {
		name: "Missingvoirite",
		spritenum: 587,
		megaStone: "Missingvoir-Mega",
		megaEvolves: "Missingvoir",
		itemUser: ["Missingvoir"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		isNonstandard: "Future",
	},
	tumultuoustibia: {
		name: "Tumultuous Tibia",
		spritenum: 379,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Blobbos-Skeleton') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Skeleton"],
		isNonstandard: "Future",
	},
	mascotsorb: {
		name: "Mascot's Orb",
		spritenum: 251,
		fling: {
			basePower: 50,
			volatileStatus: 'curse',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Blobbos-Pika') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Blobbos-Pika') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Pika"],
		num: 236,
		isNonstandard: "Future",
	},
	repel: {
		name: "Repel",
		spritenum: 0,
		num: 66600,
		isNonstandard: "Future",
	},
	superrepel: {
		name: "Super Repel",
		spritenum: 0,
		num: 66601,
		isNonstandard: "Future",
	},
	maxrepel: {
		name: "Max Repel",
		spritenum: 0,
		num: 66602,
		isNonstandard: "Future",
	},
	blackflute: {
		name: "Black Flute",
		spritenum: 0,
		num: 66603,
		isNonstandard: "Future",
	},
	whiteflute: {
		name: "White Flute",
		spritenum: 0,
		num: 66604,
		isNonstandard: "Future",
	},
	honey: {
		name: "Honey",
		spritenum: 0,
		num: 66605,
		isNonstandard: "Future",
	},
	escaperope: {
		name: "Escape Rope",
		spritenum: 0,
		num: 66606,
		isNonstandard: "Future",
	},
	redshard: {
		name: "Red Shard",
		spritenum: 0,
		num: 66607,
		isNonstandard: "Future",
	},
	yellowshard: {
		name: "Yellow Shard",
		spritenum: 0,
		num: 66608,
		isNonstandard: "Future",
	},
	blueshard: {
		name: "Blue Shard",
		spritenum: 0,
		num: 66609,
		isNonstandard: "Future",
	},
	greenshard: {
		name: "Green Shard",
		spritenum: 0,
		num: 66610,
		isNonstandard: "Future",
	},
	redapricorn: {
		name: "Red Apricorn",
		spritenum: 0,
		num: 66611,
		isNonstandard: "Future",
	},
	ylwapricorn: {
		name: "Ylw Apricorn",
		spritenum: 0,
		num: 66612,
		isNonstandard: "Future",
	},
	bluapricorn: {
		name: "Blu Apricorn",
		spritenum: 0,
		num: 66613,
		isNonstandard: "Future",
	},
	grnapricorn: {
		name: "Grn Apricorn",
		spritenum: 0,
		num: 66614,
		isNonstandard: "Future",
	},
	pnkapricorn: {
		name: "Pnk Apricorn",
		spritenum: 0,
		num: 66615,
		isNonstandard: "Future",
	},
	whtapricorn: {
		name: "Wht Apricorn",
		spritenum: 0,
		num: 66616,
		isNonstandard: "Future",
	},
	blkapricorn: {
		name: "Blk Apricorn",
		spritenum: 0,
		num: 66617,
		isNonstandard: "Future",
	},
	prettywing: {
		name: "Pretty Wing",
		spritenum: 0,
		num: 66618,
		isNonstandard: "Future",
	},
	tinymushroom: {
		name: "Tinymushroom",
		spritenum: 0,
		num: 66619,
		isNonstandard: "Future",
	},
	bigmushroom: {
		name: "Big Mushroom",
		spritenum: 0,
		num: 66620,
		isNonstandard: "Future",
	},
	balmmushroom: {
		name: "Balmmushroom",
		spritenum: 0,
		num: 66621,
		isNonstandard: "Future",
	},
	pearl: {
		name: "Pearl",
		spritenum: 0,
		num: 66622,
		isNonstandard: "Future",
	},
	bigpearl: {
		name: "Big Pearl",
		spritenum: 0,
		num: 66623,
		isNonstandard: "Future",
	},
	pearlstring: {
		name: "Pearl String",
		spritenum: 0,
		num: 66624,
		isNonstandard: "Future",
	},
	stardust: {
		name: "Stardust",
		spritenum: 0,
		num: 66625,
		isNonstandard: "Future",
	},
	starpiece: {
		name: "Star Piece",
		spritenum: 0,
		num: 66626,
		isNonstandard: "Future",
	},
	cometshard: {
		name: "Comet Shard",
		spritenum: 0,
		num: 66627,
		isNonstandard: "Future",
	},
	nugget: {
		name: "Nugget",
		spritenum: 0,
		num: 66628,
		isNonstandard: "Future",
	},
	bignugget: {
		name: "Big Nugget",
		spritenum: 0,
		num: 66629,
		isNonstandard: "Future",
	},
	heartscale: {
		name: "Heart Scale",
		spritenum: 0,
		num: 66630,
		isNonstandard: "Future",
	},
	slowpoketail: {
		name: "Slowpoketail",
		spritenum: 0,
		num: 66631,
		isNonstandard: "Future",
	},
	reliccopper: {
		name: "Relic Copper",
		spritenum: 0,
		num: 66632,
		isNonstandard: "Future",
	},
	relicsilver: {
		name: "Relic Silver",
		spritenum: 0,
		num: 66633,
		isNonstandard: "Future",
	},
	relicgold: {
		name: "Relic Gold",
		spritenum: 0,
		num: 66634,
		isNonstandard: "Future",
	},
	relicvase: {
		name: "Relic Vase",
		spritenum: 0,
		num: 66635,
		isNonstandard: "Future",
	},
	relicband: {
		name: "Relic Band",
		spritenum: 0,
		num: 66636,
		isNonstandard: "Future",
	},
	relicstatue: {
		name: "Relic Statue",
		spritenum: 0,
		num: 66637,
		isNonstandard: "Future",
	},
	reliccrown: {
		name: "Relic Crown",
		spritenum: 0,
		num: 66638,
		isNonstandard: "Future",
	},
	growthmulch: {
		name: "Growth Mulch",
		spritenum: 0,
		num: 66639,
		isNonstandard: "Future",
	},
	dampmulch: {
		name: "Damp Mulch",
		spritenum: 0,
		num: 66640,
		isNonstandard: "Future",
	},
	stablemulch: {
		name: "Stable Mulch",
		spritenum: 0,
		num: 66641,
		isNonstandard: "Future",
	},
	gooeymulch: {
		name: "Gooey Mulch",
		spritenum: 0,
		num: 66642,
		isNonstandard: "Future",
	},
	shoalsalt: {
		name: "Shoal Salt",
		spritenum: 0,
		num: 66643,
		isNonstandard: "Future",
	},
	shoalshell: {
		name: "Shoal Shell",
		spritenum: 0,
		num: 66644,
		isNonstandard: "Future",
	},
	oddkeystone: {
		name: "Odd Keystone",
		spritenum: 0,
		num: 66645,
		isNonstandard: "Future",
	},
	smokeball: {
		name: "Smoke Ball",
		spritenum: 0,
		num: 66646,
		isNonstandard: "Future",
	},
	luckyegg: {
		name: "Lucky Egg",
		spritenum: 0,
		num: 66647,
		isNonstandard: "Future",
	},
	expshare: {
		name: "Exp Share",
		spritenum: 0,
		num: 66648,
		isNonstandard: "Future",
	},
	amuletcoin: {
		name: "Amulet Coin",
		spritenum: 0,
		num: 66649,
		isNonstandard: "Future",
	},
	soothebell: {
		name: "Soothe Bell",
		spritenum: 0,
		num: 66650,
		isNonstandard: "Future",
	},
	cleansetag: {
		name: "Cleanse Tag",
		spritenum: 0,
		num: 66651,
		isNonstandard: "Future",
	},
	luckincense: {
		name: "Luck Incense",
		spritenum: 0,
		num: 66652,
		isNonstandard: "Future",
	},
	pureincense: {
		name: "Pure Incense",
		spritenum: 0,
		num: 66653,
		isNonstandard: "Future",
	},
	everstone: {
		name: "Everstone",
		spritenum: 0,
		num: 66654,
		isNonstandard: "Future",
	},
	redscarf: {
		name: "Red Scarf",
		spritenum: 0,
		num: 66655,
		isNonstandard: "Future",
	},
	bluescarf: {
		name: "Blue Scarf",
		spritenum: 0,
		num: 66656,
		isNonstandard: "Future",
	},
	pinkscarf: {
		name: "Pink Scarf",
		spritenum: 0,
		num: 66657,
		isNonstandard: "Future",
	},
	greenscarf: {
		name: "Green Scarf",
		spritenum: 0,
		num: 66658,
		isNonstandard: "Future",
	},
	yellowscarf: {
		name: "Yellow Scarf",
		spritenum: 0,
		num: 66659,
		isNonstandard: "Future",
	},
	chicken: {
		name: "Chicken",
		spritenum: 0,
		num: 66660,
		isNonstandard: "Future",
	},
	glalite: {
		name: "Glalite",
		spritenum: 0,
		num: 66661,
		isNonstandard: "Future",
	},
	avalugite: {
		name: "Avalugite",
		spritenum: 0,
		num: 66662,
		isNonstandard: "Future",
	},
	butterfrite: {
		name: "Butterfrite",
		spritenum: 0,
		num: 66663,
		isNonstandard: "Future",
	},
	rubberflite: {
		name: "Rubberflite",
		spritenum: 0,
		num: 66664,
		isNonstandard: "Future",
	},
	haicawite: {
		name: "Haicawite",
		spritenum: 0,
		num: 66665,
		isNonstandard: "Future",
	},
	shattaratite: {
		name: "Shattaratite",
		spritenum: 0,
		num: 66666,
		isNonstandard: "Future",
	},
	grasstaclite: {
		name: "Grasstaclite",
		spritenum: 0,
		num: 66667,
		isNonstandard: "Future",
	},
	chillzite: {
		name: "Chillzite",
		spritenum: 0,
		num: 66668,
		isNonstandard: "Future",
	},
	lunightonite: {
		name: "Lunightonite",
		spritenum: 0,
		num: 66669,
		isNonstandard: "Future",
	},
	vanilluxite: {
		name: "Vanilluxite",
		spritenum: 0,
		num: 66670,
		isNonstandard: "Future",
	},
	blizzlamite: {
		name: "Blizzlamite",
		spritenum: 0,
		num: 66671,
		isNonstandard: "Future",
	},
	synthitite: {
		name: "Synthitite",
		spritenum: 0,
		num: 66672,
		isNonstandard: "Future",
	},
	chokolite: {
		name: "Chokolite",
		spritenum: 0,
		num: 66673,
		isNonstandard: "Future",
	},
	mouseeite: {
		name: "Mouseeite",
		spritenum: 0,
		num: 66674,
		isNonstandard: "Future",
	},
	hoverite: {
		name: "Hoverite",
		spritenum: 0,
		num: 66675,
		isNonstandard: "Future",
	},
	naminite: {
		name: "Naminite",
		spritenum: 0,
		num: 66676,
		isNonstandard: "Future",
	},
	solaiossite: {
		name: "Solaiossite",
		spritenum: 0,
		num: 66677,
		isNonstandard: "Future",
	},
	goralite: {
		name: "Goralite",
		spritenum: 0,
		num: 66678,
		isNonstandard: "Future",
	},
	neutralite: {
		name: "Neutralite",
		spritenum: 0,
		num: 66679,
		isNonstandard: "Future",
	},
	drumgite: {
		name: "Drumgite",
		spritenum: 0,
		num: 66680,
		isNonstandard: "Future",
	},
	godzillusite: {
		name: "Godzillusite",
		spritenum: 0,
		num: 66681,
		isNonstandard: "Future",
	},
	muchoshotite: {
		name: "Muchoshotite",
		spritenum: 0,
		num: 66682,
		isNonstandard: "Future",
	},
	miracactite: {
		name: "Miracactite",
		spritenum: 0,
		num: 66683,
		isNonstandard: "Future",
	},
	hitmonite: {
		name: "Hitmonite",
		spritenum: 0,
		num: 66684,
		isNonstandard: "Future",
	},
	snowfistnite: {
		name: "Snowfistnite",
		spritenum: 0,
		num: 66685,
		isNonstandard: "Future",
	},
	capsilite: {
		name: "Capsilite",
		spritenum: 0,
		num: 66686,
		isNonstandard: "Future",
	},
	tusk: {
		name: "Tusk",
		spritenum: 0,
		num: 66687,
		isNonstandard: "Future",
	},
	ballbreaker: {
		name: "Ballbreaker",
		spritenum: 0,
		num: 66688,
		isNonstandard: "Future",
	},
	inasilentway: {
		name: "In A Silent Way",
		spritenum: 0,
		num: 66689,
		isNonstandard: "Future",
	},
	heyya: {
		name: "Hey Ya",
		spritenum: 0,
		num: 66690,
		isNonstandard: "Future",
	},
	ratt: {
		name: "Ratt",
		spritenum: 0,
		num: 66691,
		isNonstandard: "Future",
	},
	torkoalite: {
		name: "Torkoalite",
		spritenum: 0,
		num: 66692,
		isNonstandard: "Future",
	},
	cheaptrick: {
		name: "Cheap Trick",
		spritenum: 0,
		num: 66693,
		isNonstandard: "Future",
	},
	comistorite: {
		name: "Comistorite",
		spritenum: 0,
		num: 66694,
		isNonstandard: "Future",
	},
	heruptite: {
		name: "Heruptite",
		spritenum: 0,
		num: 66695,
		isNonstandard: "Future",
	},
	otyashite: {
		name: "Otyashite",
		spritenum: 0,
		num: 66696,
		isNonstandard: "Future",
	},
	buglitchite: {
		name: "Buglitchite",
		spritenum: 0,
		num: 66697,
		isNonstandard: "Future",
	},
	bauminite: {
		name: "Bauminite",
		spritenum: 0,
		num: 66698,
		isNonstandard: "Future",
	},
	miststone: {
		name: "Mist Stone",
		spritenum: 0,
		num: 66699,
		isNonstandard: "Future",
	},
	volcanicrock: {
		name: "Volcanic Rock",
		spritenum: 0,
		num: 66700,
		isNonstandard: "Future",
	},
	fallenrock: {
		name: "Fallen Rock",
		spritenum: 0,
		num: 66701,
		isNonstandard: "Future",
	},
	maliciousdisc: {
		name: "Malicious Disc",
		spritenum: 0,
		num: 66702,
		isNonstandard: "Future",
	},
	stuff: {
		name: "Stuff",
		spritenum: 0,
		num: 66703,
		isNonstandard: "Future",
	},
	log: {
		name: "Log",
		spritenum: 0,
		num: 66704,
		isNonstandard: "Future",
	},
	steamer: {
		name: "Steamer",
		spritenum: 0,
		num: 66705,
		isNonstandard: "Future",
	},
	mysticmagma: {
		name: "Mystic Magma",
		spritenum: 0,
		num: 66706,
		isNonstandard: "Future",
	},
	gear: {
		name: "Gear",
		spritenum: 0,
		num: 66707,
		isNonstandard: "Future",
	},
	ancientorb: {
		name: "Ancient Orb",
		spritenum: 0,
		num: 66708,
		isNonstandard: "Future",
	},
	kite: {
		name: "Kite",
		spritenum: 0,
		num: 66709,
		isNonstandard: "Future",
	},
	magicwand: {
		name: "Magic Wand",
		spritenum: 0,
		num: 66710,
		isNonstandard: "Future",
	},
	prism: {
		name: "Prism",
		spritenum: 0,
		num: 66711,
		isNonstandard: "Future",
	},
	fluffycoat: {
		name: "Fluffy Coat",
		spritenum: 0,
		num: 66712,
		isNonstandard: "Future",
	},
	ancienthelm: {
		name: "Ancient Helm",
		spritenum: 0,
		num: 66713,
		isNonstandard: "Future",
	},
	seaweed: {
		name: "Seaweed",
		spritenum: 0,
		num: 66714,
		isNonstandard: "Future",
	},
	drubberite: {
		name: "Drubberite",
		spritenum: 0,
		num: 66715,
		isNonstandard: "Future",
	},
	neonazite: {
		name: "Neonazite",
		spritenum: 0,
		num: 66716,
		isNonstandard: "Future",
	},
	chairite: {
		name: "Chairite",
		spritenum: 0,
		num: 66717,
		isNonstandard: "Future",
	},
	pikachite: {
		name: "Pikachite",
		spritenum: 0,
		num: 66718,
		isNonstandard: "Future",
	},
	socialite: {
		name: "Socialite",
		spritenum: 0,
		num: 66719,
		isNonstandard: "Future",
	},
	arbroodite: {
		name: "Arbroodite",
		spritenum: 0,
		num: 66720,
		isNonstandard: "Future",
	},
	steamboatite: {
		name: "Steamboatite",
		spritenum: 0,
		num: 66721,
		isNonstandard: "Future",
	},
	lavagunite: {
		name: "Lavagunite",
		spritenum: 0,
		num: 66722,
		isNonstandard: "Future",
	},
	gachambite: {
		name: "Gachambite",
		spritenum: 0,
		num: 66723,
		isNonstandard: "Future",
	},
	gummite: {
		name: "Gummite",
		spritenum: 0,
		num: 66724,
		isNonstandard: "Future",
	},
	houndoomite: {
		name: "Houndoomite",
		spritenum: 0,
		num: 66725,
		isNonstandard: "Future",
	},
	gigasvyrite: {
		name: "Gigasvyrite",
		spritenum: 0,
		num: 66726,
		isNonstandard: "Future",
	},
	corruptorb: {
		name: "Corrupt Orb",
		spritenum: 0,
		num: 66727,
		isNonstandard: "Future",
	},
	cummunculite: {
		name: "Cummunculite",
		spritenum: 0,
		num: 66728,
		isNonstandard: "Future",
	},
	theworld: {
		name: "The World",
		spritenum: 0,
		num: 66729,
		isNonstandard: "Future",
	},
	hierophant: {
		name: "Hierophant",
		spritenum: 0,
		num: 66730,
		isNonstandard: "Future",
	},
	hermit: {
		name: "Hermit",
		spritenum: 0,
		num: 66731,
		isNonstandard: "Future",
	},
	magician: {
		name: "Magician",
		spritenum: 0,
		num: 66732,
		isNonstandard: "Future",
	},
	chariot: {
		name: "Chariot",
		spritenum: 0,
		num: 66733,
		isNonstandard: "Future",
	},
	thefool: {
		name: "The Fool",
		spritenum: 0,
		num: 66734,
		isNonstandard: "Future",
	},
	cream: {
		name: "Cream",
		spritenum: 0,
		num: 66735,
		isNonstandard: "Future",
	},
	themoon: {
		name: "The Moon",
		spritenum: 0,
		num: 66736,
		isNonstandard: "Future",
	},
	tower: {
		name: "Tower",
		spritenum: 0,
		num: 66737,
		isNonstandard: "Future",
	},
	sphinxpaw: {
		name: "Sphinx Paw",
		spritenum: 0,
		num: 66738,
		isNonstandard: "Future",
	},
	devil: {
		name: "Devil",
		spritenum: 0,
		num: 66739,
		isNonstandard: "Future",
	},
	temperance: {
		name: "Temperance",
		spritenum: 0,
		num: 66740,
		isNonstandard: "Future",
	},
	mladite: {
		name: "Mladite",
		spritenum: 0,
		num: 66741,
		isNonstandard: "Future",
	},
	pinnistite: {
		name: "Pinnistite",
		spritenum: 0,
		num: 66742,
		isNonstandard: "Future",
	},
	rootspookite: {
		name: "Rootspookite",
		spritenum: 0,
		num: 66743,
		isNonstandard: "Future",
	},
	malwormite: {
		name: "Malwormite",
		spritenum: 0,
		num: 66744,
		isNonstandard: "Future",
	},
	delite: {
		name: "Delite",
		spritenum: 0,
		num: 66745,
		isNonstandard: "Future",
	},
	strength: {
		name: "Strength",
		spritenum: 0,
		num: 66746,
		isNonstandard: "Future",
	},
	wheeloffortune: {
		name: "Wheel Of Fortune",
		spritenum: 0,
		num: 66747,
		isNonstandard: "Future",
	},
	panthannonite: {
		name: "Panthannonite",
		spritenum: 0,
		num: 66748,
		isNonstandard: "Future",
	},
	hangedman: {
		name: "Hanged Man",
		spritenum: 0,
		num: 66749,
		isNonstandard: "Future",
	},
	emperor: {
		name: "Emperor",
		spritenum: 0,
		num: 66750,
		isNonstandard: "Future",
	},
	empress: {
		name: "Empress",
		spritenum: 0,
		num: 66751,
		isNonstandard: "Future",
	},
	thesun: {
		name: "The Sun",
		spritenum: 0,
		num: 66752,
		isNonstandard: "Future",
	},
	justice: {
		name: "Justice",
		spritenum: 0,
		num: 66753,
		isNonstandard: "Future",
	},
	lovers: {
		name: "Lovers",
		spritenum: 0,
		num: 66754,
		isNonstandard: "Future",
	},
	death: {
		name: "Death",
		spritenum: 0,
		num: 66755,
		isNonstandard: "Future",
	},
	judgement: {
		name: "Judgement",
		spritenum: 0,
		num: 66756,
		isNonstandard: "Future",
	},
	highpriestess: {
		name: "High Priestess",
		spritenum: 0,
		num: 66757,
		isNonstandard: "Future",
	},
	geb: {
		name: "Geb",
		spritenum: 0,
		num: 66758,
		isNonstandard: "Future",
	},
	sethan: {
		name: "Sethan",
		spritenum: 0,
		num: 66759,
		isNonstandard: "Future",
	},
	khnum: {
		name: "Khnum",
		spritenum: 0,
		num: 66760,
		isNonstandard: "Future",
	},
	tohth: {
		name: "Tohth",
		spritenum: 0,
		num: 66761,
		isNonstandard: "Future",
	},
	bastet: {
		name: "Bastet",
		spritenum: 0,
		num: 66762,
		isNonstandard: "Future",
	},
	anubis: {
		name: "Anubis",
		spritenum: 0,
		num: 66763,
		isNonstandard: "Future",
	},
	osiris: {
		name: "Osiris",
		spritenum: 0,
		num: 66764,
		isNonstandard: "Future",
	},
	atum: {
		name: "Atum",
		spritenum: 0,
		num: 66765,
		isNonstandard: "Future",
	},
	horus: {
		name: "Horus",
		spritenum: 0,
		num: 66766,
		isNonstandard: "Future",
	},
	tenoresax: {
		name: "Tenore Sax",
		spritenum: 0,
		num: 66767,
		isNonstandard: "Future",
	},
	gourgeistite: {
		name: "Gourgeistite",
		spritenum: 0,
		num: 66768,
		isNonstandard: "Future",
	},
	ghostmask: {
		name: "Ghost Mask",
		spritenum: 0,
		num: 66769,
		isNonstandard: "Future",
	},
	vampiremask: {
		name: "Vampire Mask",
		spritenum: 0,
		num: 66770,
		isNonstandard: "Future",
	},
	witchmask: {
		name: "Witch Mask",
		spritenum: 0,
		num: 66771,
		isNonstandard: "Future",
	},
	demonmask: {
		name: "Demon Mask",
		spritenum: 0,
		num: 66772,
		isNonstandard: "Future",
	},
	lavaplate: {
		name: "Lava Plate",
		spritenum: 0,
		num: 66773,
		isNonstandard: "Future",
	},
	vaporplate: {
		name: "Vapor Plate",
		spritenum: 0,
		num: 66774,
		isNonstandard: "Future",
	},
	lumberplate: {
		name: "Lumber Plate",
		spritenum: 0,
		num: 66775,
		isNonstandard: "Future",
	},
	angelplate: {
		name: "Angel Plate",
		spritenum: 0,
		num: 66776,
		isNonstandard: "Future",
	},
	demonicplate: {
		name: "Demonic Plate",
		spritenum: 0,
		num: 66777,
		isNonstandard: "Future",
	},
	paperplate: {
		name: "Paper Plate",
		spritenum: 0,
		num: 66778,
		isNonstandard: "Future",
	},
	lusterplate: {
		name: "Luster Plate",
		spritenum: 0,
		num: 66779,
		isNonstandard: "Future",
	},
	tornadoplate: {
		name: "Tornado Plate",
		spritenum: 0,
		num: 66780,
		isNonstandard: "Future",
	},
	arcaneplate: {
		name: "Arcane Plate",
		spritenum: 0,
		num: 66781,
		isNonstandard: "Future",
	},
	machineplate: {
		name: "Machine Plate",
		spritenum: 0,
		num: 66782,
		isNonstandard: "Future",
	},
	elasticplate: {
		name: "Elastic Plate",
		spritenum: 0,
		num: 66783,
		isNonstandard: "Future",
	},
	phobiaplate: {
		name: "Phobia Plate",
		spritenum: 0,
		num: 66784,
		isNonstandard: "Future",
	},
	spaceplate: {
		name: "Space Plate",
		spritenum: 0,
		num: 66785,
		isNonstandard: "Future",
	},
	sonarplate: {
		name: "Sonarplate",
		spritenum: 0,
		num: 66786,
		isNonstandard: "Future",
	},
	gourmetplate: {
		name: "Gourmetplate",
		spritenum: 0,
		num: 66787,
		isNonstandard: "Future",
	},
	undeadplate: {
		name: "Undead Plate",
		spritenum: 0,
		num: 66788,
		isNonstandard: "Future",
	},
	radiationplate: {
		name: "Radiation Plate",
		spritenum: 0,
		num: 66789,
		isNonstandard: "Future",
	},
	infectionplate: {
		name: "Infection Plate",
		spritenum: 0,
		num: 66790,
		isNonstandard: "Future",
	},
	digitalplate: {
		name: "Digital Plate",
		spritenum: 0,
		num: 66791,
		isNonstandard: "Future",
	},
	glassplate: {
		name: "Glass Plate",
		spritenum: 0,
		num: 66792,
		isNonstandard: "Future",
	},
	plasticplate: {
		name: "Plastic Plate",
		spritenum: 0,
		num: 66793,
		isNonstandard: "Future",
	},
	carpetplate: {
		name: "Carpetplate",
		spritenum: 0,
		num: 66794,
		isNonstandard: "Future",
	},
	agesplate: {
		name: "Ages Plate",
		spritenum: 0,
		num: 66795,
		isNonstandard: "Future",
	},
	artplate: {
		name: "Art Plate",
		spritenum: 0,
		num: 66796,
		isNonstandard: "Future",
	},
	crystalplate: {
		name: "Crystal Plate",
		spritenum: 0,
		num: 66797,
		isNonstandard: "Future",
	},
	infoplate: {
		name: "Info Plate",
		spritenum: 0,
		num: 66798,
		isNonstandard: "Future",
	},
	ichorplate: {
		name: "Ichor Plate",
		spritenum: 0,
		num: 66799,
		isNonstandard: "Future",
	},
	fatplate: {
		name: "Fat Plate",
		spritenum: 0,
		num: 66800,
		isNonstandard: "Future",
	},
	emotionplate: {
		name: "Emotion Plate",
		spritenum: 0,
		num: 66801,
		isNonstandard: "Future",
	},
	crazydiamond: {
		name: "Crazy Diamond",
		spritenum: 0,
		num: 66802,
		isNonstandard: "Future",
	},
	thehand: {
		name: "The Hand",
		spritenum: 0,
		num: 66803,
		isNonstandard: "Future",
	},
	echoes: {
		name: "Echoes",
		spritenum: 0,
		num: 66804,
		isNonstandard: "Future",
	},
	aquanecklace: {
		name: "Aqua Necklace",
		spritenum: 0,
		num: 66805,
		isNonstandard: "Future",
	},
	page: {
		name: "Page",
		spritenum: 0,
		num: 66806,
		isNonstandard: "Future",
	},
	rubberglove: {
		name: "Rubber Glove",
		spritenum: 0,
		num: 66807,
		isNonstandard: "Future",
	},
	spookymask: {
		name: "Spooky Mask",
		spritenum: 0,
		num: 66808,
		isNonstandard: "Future",
	},
	telescope: {
		name: "Telescope",
		spritenum: 0,
		num: 66809,
		isNonstandard: "Future",
	},
	speaker: {
		name: "Speaker",
		spritenum: 0,
		num: 66810,
		isNonstandard: "Future",
	},
	sauce: {
		name: "Sauce",
		spritenum: 0,
		num: 66811,
		isNonstandard: "Future",
	},
	brains: {
		name: "Brains",
		spritenum: 0,
		num: 66812,
		isNonstandard: "Future",
	},
	uranium: {
		name: "Uranium",
		spritenum: 0,
		num: 66813,
		isNonstandard: "Future",
	},
	motherboard: {
		name: "Motherboard",
		spritenum: 0,
		num: 66814,
		isNonstandard: "Future",
	},
	optimizerpro: {
		name: "Optimizer Pro",
		spritenum: 0,
		num: 66815,
		isNonstandard: "Future",
	},
	glasspiece: {
		name: "Glass Piece",
		spritenum: 0,
		num: 66816,
		isNonstandard: "Future",
	},
	plasticpiece: {
		name: "Plastic Piece",
		spritenum: 0,
		num: 66817,
		isNonstandard: "Future",
	},
	carpet: {
		name: "Carpet",
		spritenum: 0,
		num: 66818,
		isNonstandard: "Future",
	},
	holycross: {
		name: "Holy Cross",
		spritenum: 0,
		num: 66819,
		isNonstandard: "Future",
	},
	stopwatch: {
		name: "Stopwatch",
		spritenum: 0,
		num: 66820,
		isNonstandard: "Future",
	},
	purplehaze: {
		name: "Purple Haze",
		spritenum: 0,
		num: 66821,
		isNonstandard: "Future",
	},
	primeapite: {
		name: "Primeapite",
		spritenum: 0,
		num: 66822,
		isNonstandard: "Future",
	},
	teskarite: {
		name: "Teskarite",
		spritenum: 0,
		num: 66823,
		isNonstandard: "Future",
	},
	hypnite: {
		name: "Hypnite",
		spritenum: 0,
		num: 66824,
		isNonstandard: "Future",
	},
	aerosmith: {
		name: "Aerosmith",
		spritenum: 0,
		num: 66825,
		isNonstandard: "Future",
	},
	sexpistols: {
		name: "Sex Pistols",
		spritenum: 0,
		num: 66826,
		isNonstandard: "Future",
	},
	moodyblues: {
		name: "Moody Blues",
		spritenum: 0,
		num: 66827,
		isNonstandard: "Future",
	},
	spicegirl: {
		name: "Spice Girl",
		spritenum: 0,
		num: 66828,
		isNonstandard: "Future",
	},
	superfly: {
		name: "Super Fly",
		spritenum: 0,
		num: 66829,
		isNonstandard: "Future",
	},
	weatherreport: {
		name: "Weather Report",
		spritenum: 0,
		num: 66830,
		isNonstandard: "Future",
	},
	onionplate: {
		name: "Onion Plate",
		spritenum: 0,
		num: 66831,
		isNonstandard: "Future",
	},
	facarvite: {
		name: "Facarvite",
		spritenum: 0,
		num: 66832,
		isNonstandard: "Future",
	},
	saplomite: {
		name: "Saplomite",
		spritenum: 0,
		num: 66833,
		isNonstandard: "Future",
	},
	absorspongite: {
		name: "Absorspongite",
		spritenum: 0,
		num: 66834,
		isNonstandard: "Future",
	},
	prisonbottle: {
		name: "Prison Bottle",
		spritenum: 0,
		num: 66835,
		isNonstandard: "Future",
	},
	metallica: {
		name: "Metallica",
		spritenum: 0,
		num: 66836,
		isNonstandard: "Future",
	},
	serperiorite: {
		name: "Serperiorite",
		spritenum: 0,
		num: 66837,
		isNonstandard: "Future",
	},
	emboarite: {
		name: "Emboarite",
		spritenum: 0,
		num: 66838,
		isNonstandard: "Future",
	},
	samurottite: {
		name: "Samurottite",
		spritenum: 0,
		num: 66839,
		isNonstandard: "Future",
	},
	highwaystar: {
		name: "Highway Star",
		spritenum: 0,
		num: 66840,
		isNonstandard: "Future",
	},
	cinderella: {
		name: "Cinderella",
		spritenum: 0,
		num: 66841,
		isNonstandard: "Future",
	},
	achtungbaby: {
		name: "Achtung Baby",
		spritenum: 0,
		num: 66842,
		isNonstandard: "Future",
	},
	atomheartfather: {
		name: "Atom Heart Father",
		spritenum: 0,
		num: 66843,
		isNonstandard: "Future",
	},
	boyiiman: {
		name: "Boy Ii Man",
		spritenum: 0,
		num: 66844,
		isNonstandard: "Future",
	},
	earthwindandfire: {
		name: "Earthwindandfire",
		spritenum: 0,
		num: 66845,
		isNonstandard: "Future",
	},
	blacksabbath: {
		name: "Black Sabbath",
		spritenum: 0,
		num: 66846,
		isNonstandard: "Future",
	},
	oasis: {
		name: "Oasis",
		spritenum: 0,
		num: 66847,
		isNonstandard: "Future",
	},
	whitealbum: {
		name: "White Album",
		spritenum: 0,
		num: 66848,
		isNonstandard: "Future",
	},
	greenday: {
		name: "Green Day",
		spritenum: 0,
		num: 66849,
		isNonstandard: "Future",
	},
	rollingstones: {
		name: "Rolling Stones",
		spritenum: 0,
		num: 66850,
		isNonstandard: "Future",
	},
	softmachine: {
		name: "Soft Machine",
		spritenum: 0,
		num: 66851,
		isNonstandard: "Future",
	},
	kraftwork: {
		name: "Kraft Work",
		spritenum: 0,
		num: 66852,
		isNonstandard: "Future",
	},
	littlefeet: {
		name: "Little Feet",
		spritenum: 0,
		num: 66853,
		isNonstandard: "Future",
	},
	maninthemirror: {
		name: "Maninthemirror",
		spritenum: 0,
		num: 66854,
		isNonstandard: "Future",
	},
	mrpresident: {
		name: "Mr President",
		spritenum: 0,
		num: 66855,
		isNonstandard: "Future",
	},
	beachboy: {
		name: "Beach Boy",
		spritenum: 0,
		num: 66856,
		isNonstandard: "Future",
	},
	gratefuldead: {
		name: "Grateful Dead",
		spritenum: 0,
		num: 66857,
		isNonstandard: "Future",
	},
	babyface: {
		name: "Baby Face",
		spritenum: 0,
		num: 66858,
		isNonstandard: "Future",
	},
	clash: {
		name: "Clash",
		spritenum: 0,
		num: 66859,
		isNonstandard: "Future",
	},
	talkinghead: {
		name: "Talking Head",
		spritenum: 0,
		num: 66860,
		isNonstandard: "Future",
	},
	notoriousbig: {
		name: "Notorious Big",
		spritenum: 0,
		num: 66861,
		isNonstandard: "Future",
	},
	survivor: {
		name: "Survivor",
		spritenum: 0,
		num: 66862,
		isNonstandard: "Future",
	},
	skyhigh: {
		name: "Sky High",
		spritenum: 0,
		num: 66863,
		isNonstandard: "Future",
	},
	silverstandarrow: {
		name: "Silver Stand Arrow",
		spritenum: 0,
		num: 66864,
		isNonstandard: "Future",
	},
	empoleonite: {
		name: "Empoleonite",
		spritenum: 0,
		num: 66865,
		isNonstandard: "Future",
	},
	infernapite: {
		name: "Infernapite",
		spritenum: 0,
		num: 66866,
		isNonstandard: "Future",
	},
	torterrite: {
		name: "Torterrite",
		spritenum: 0,
		num: 66867,
		isNonstandard: "Future",
	},
	highwaytohell: {
		name: "Highwaytohell",
		spritenum: 0,
		num: 66868,
		isNonstandard: "Future",
	},
	dominatrixoutfit: {
		name: "Dominatrix Outfit",
		spritenum: 0,
		num: 66869,
		isNonstandard: "Future",
	},
	frillydress: {
		name: "Frilly Dress",
		spritenum: 0,
		num: 66870,
		isNonstandard: "Future",
	},
	bouncectarmor: {
		name: "Bouncect Armor",
		spritenum: 0,
		num: 66871,
		isNonstandard: "Future",
	},
	tropicalstone: {
		name: "Tropical Stone",
		spritenum: 0,
		num: 66872,
		isNonstandard: "Future",
	},
	frankenspookite: {
		name: "Frankenspookite",
		spritenum: 0,
		num: 66873,
		isNonstandard: "Future",
	},
	zangoosite: {
		name: "Zangoosite",
		spritenum: 0,
		num: 66874,
		isNonstandard: "Future",
	},
	virivite: {
		name: "Virivite",
		spritenum: 0,
		num: 66875,
		isNonstandard: "Future",
	},
	rubberite: {
		name: "Rubberite",
		spritenum: 0,
		num: 66876,
		isNonstandard: "Future",
	},
	bottleodrakite: {
		name: "Bottleodrakite",
		spritenum: 0,
		num: 66877,
		isNonstandard: "Future",
	},
	dargouite: {
		name: "Dargouite",
		spritenum: 0,
		num: 66878,
		isNonstandard: "Future",
	},
	sonotite: {
		name: "Sonotite",
		spritenum: 0,
		num: 66879,
		isNonstandard: "Future",
	},
	arbokite: {
		name: "Arbokite",
		spritenum: 0,
		num: 66880,
		isNonstandard: "Future",
	},
	echoes2: {
		name: "Echoes2",
		spritenum: 0,
		num: 66881,
		isNonstandard: "Future",
	},
	echoes3: {
		name: "Echoes3",
		spritenum: 0,
		num: 66882,
		isNonstandard: "Future",
	},
	redhotchilipepper: {
		name: "Red Hot Chili Pepper",
		spritenum: 0,
		num: 66883,
		isNonstandard: "Future",
	},
	killerqueen: {
		name: "Killer Queen",
		spritenum: 0,
		num: 66884,
		isNonstandard: "Future",
	},
	heavensdoor: {
		name: "Heavens Door",
		spritenum: 0,
		num: 66885,
		isNonstandard: "Future",
	},
	badcompany: {
		name: "Bad Company",
		spritenum: 0,
		num: 66886,
		isNonstandard: "Future",
	},
	goldexperience: {
		name: "Gold Experience",
		spritenum: 0,
		num: 66887,
		isNonstandard: "Future",
	},
	scarymonsters: {
		name: "Scary Monsters",
		spritenum: 0,
		num: 66888,
		isNonstandard: "Future",
	},
	shedinjite: {
		name: "Shedinjite",
		spritenum: 0,
		num: 66889,
		isNonstandard: "Future",
	},
	goldenstandarrow: {
		name: "Golden Stand Arrow",
		spritenum: 0,
		num: 66890,
		isNonstandard: "Future",
	},
	straycat: {
		name: "Stray Cat",
		spritenum: 0,
		num: 66891,
		isNonstandard: "Future",
	},
	lynchite: {
		name: "Lynchite",
		spritenum: 0,
		num: 66892,
		isNonstandard: "Future",
	},
	sevipite: {
		name: "Sevipite",
		spritenum: 0,
		num: 66893,
		isNonstandard: "Future",
	},
	surface: {
		name: "Surface",
		spritenum: 0,
		num: 66894,
		isNonstandard: "Future",
	},
	thelock: {
		name: "The Lock",
		spritenum: 0,
		num: 66895,
		isNonstandard: "Future",
	},
	volcaronite: {
		name: "Volcaronite",
		spritenum: 0,
		num: 66896,
		isNonstandard: "Future",
	},
	feraligatrite: {
		name: "Feraligatrite",
		spritenum: 0,
		num: 66897,
		isNonstandard: "Future",
	},
	meganiumite: {
		name: "Meganiumite",
		spritenum: 0,
		num: 66898,
		isNonstandard: "Future",
	},
	typhlosionite: {
		name: "Typhlosionite",
		spritenum: 0,
		num: 66899,
		isNonstandard: "Future",
	},
	charizarditez: {
		name: "Charizardite Z",
		spritenum: 0,
		num: 66900,
		isNonstandard: "Future",
	},
	johnspleenite: {
		name: "Johnspleenite",
		spritenum: 0,
		num: 66901,
		isNonstandard: "Future",
	},
	primalorb: {
		name: "Primal Orb",
		spritenum: 0,
		num: 66902,
		isNonstandard: "Future",
	},
	behemistite: {
		name: "Behemistite",
		spritenum: 0,
		num: 66903,
		isNonstandard: "Future",
	},
	luminite: {
		name: "Luminite",
		spritenum: 0,
		num: 66904,
		isNonstandard: "Future",
	},
	bersergutsite: {
		name: "Bersergutsite",
		spritenum: 0,
		num: 66905,
		isNonstandard: "Future",
	},
	wendigite: {
		name: "Wendigite",
		spritenum: 0,
		num: 66906,
		isNonstandard: "Future",
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 0,
		num: 66907,
		isNonstandard: "Future",
	},
	delphoxite: {
		name: "Delphoxite",
		spritenum: 0,
		num: 66908,
		isNonstandard: "Future",
	},
	greninjite: {
		name: "Greninjite",
		spritenum: 0,
		num: 66909,
		isNonstandard: "Future",
	},
	chesnaughtite: {
		name: "Chesnaughtite",
		spritenum: 0,
		num: 66910,
		isNonstandard: "Future",
	},
	lovedeluxe: {
		name: "Love Deluxe",
		spritenum: 0,
		num: 66911,
		isNonstandard: "Future",
	},
	pearljam: {
		name: "Pearl Jam",
		spritenum: 0,
		num: 66912,
		isNonstandard: "Future",
	},
	stonefree: {
		name: "Stone Free",
		spritenum: 0,
		num: 66913,
		isNonstandard: "Future",
	},
	chatotite: {
		name: "Chatotite",
		spritenum: 0,
		num: 66914,
		isNonstandard: "Future",
	},
	angelpowder: {
		name: "Angel Powder",
		spritenum: 0,
		num: 66915,
		isNonstandard: "Future",
	},
	apexorb: {
		name: "Apex Orb",
		spritenum: 0,
		num: 66916,
		isNonstandard: "Future",
	},
	sloggerothite: {
		name: "Sloggerothite",
		spritenum: 0,
		num: 66917,
		isNonstandard: "Future",
	},
	softandwet: {
		name: "Softandwet",
		spritenum: 0,
		num: 66918,
		isNonstandard: "Future",
	},
	archangite: {
		name: "Archangite",
		spritenum: 0,
		num: 66919,
		isNonstandard: "Future",
	},
	ledevilainite: {
		name: "Ledevilainite",
		spritenum: 0,
		num: 66920,
		isNonstandard: "Future",
	},
	satelite: {
		name: "Satelite",
		spritenum: 0,
		num: 66921,
		isNonstandard: "Future",
	},
	sphinxiantite: {
		name: "Sphinxiantite",
		spritenum: 0,
		num: 66922,
		isNonstandard: "Future",
	},
	kingcrimson: {
		name: "King Crimson",
		spritenum: 0,
		num: 66923,
		isNonstandard: "Future",
	},
	clefablite: {
		name: "Clefablite",
		spritenum: 0,
		num: 66924,
		isNonstandard: "Future",
	},
	eeveeite: {
		name: "Eeveeite",
		spritenum: 0,
		num: 66925,
		isNonstandard: "Future",
	},
	fonightonite: {
		name: "Fonightonite",
		spritenum: 0,
		num: 66926,
		isNonstandard: "Future",
	},
	whitesnake: {
		name: "White Snake",
		spritenum: 0,
		num: 66927,
		isNonstandard: "Future",
	},
	stickyfingers: {
		name: "Sticky Fingers",
		spritenum: 0,
		num: 66928,
		isNonstandard: "Future",
	},
	cmoon: {
		name: "Cmoon",
		spritenum: 0,
		num: 66929,
		isNonstandard: "Future",
	},
	thestar: {
		name: "The Star",
		spritenum: 0,
		num: 66930,
		isNonstandard: "Future",
	},
	dirtydeeds: {
		name: "Dirtydeeds",
		spritenum: 0,
		num: 66931,
		isNonstandard: "Future",
	},
	brickorite: {
		name: "Brickorite",
		spritenum: 0,
		num: 66932,
		isNonstandard: "Future",
	},
	frostearite: {
		name: "Frostearite",
		spritenum: 0,
		num: 66933,
		isNonstandard: "Future",
	},
	stantlerite: {
		name: "Stantlerite",
		spritenum: 0,
		num: 66934,
		isNonstandard: "Future",
	},
	melonvilite: {
		name: "Melonvilite",
		spritenum: 0,
		num: 66935,
		isNonstandard: "Future",
	},
	delcattite: {
		name: "Delcattite",
		spritenum: 0,
		num: 66936,
		isNonstandard: "Future",
	},
	necrozium: {
		name: "Necrozium",
		spritenum: 0,
		num: 66937,
		isNonstandard: "Future",
	},
	rednectar: {
		name: "Red Nectar",
		spritenum: 0,
		num: 66938,
		isNonstandard: "Future",
	},
	bluenectar: {
		name: "Bluenectar",
		spritenum: 0,
		num: 66939,
		isNonstandard: "Future",
	},
	yellownectar: {
		name: "Yellownectar",
		spritenum: 0,
		num: 66940,
		isNonstandard: "Future",
	},
	pinknectar: {
		name: "Pinknectar",
		spritenum: 0,
		num: 66941,
		isNonstandard: "Future",
	},
	electrodite: {
		name: "Electrodite",
		spritenum: 0,
		num: 66942,
		isNonstandard: "Future",
	},
	tantalberry: {
		name: "Tantal Berry",
		spritenum: 0,
		num: 66943,
		isNonstandard: "Future",
	},
	holyward: {
		name: "Holy Ward",
		spritenum: 0,
		num: 66944,
		isNonstandard: "Future",
	},
	blessorb: {
		name: "Bless Orb",
		spritenum: 0,
		num: 66945,
		isNonstandard: "Future",
	},
	octillerite: {
		name: "Octillerite",
		spritenum: 0,
		num: 66946,
		isNonstandard: "Future",
	},
	jetcraftite: {
		name: "Jetcraftite",
		spritenum: 0,
		num: 66947,
		isNonstandard: "Future",
	},
	crobatite: {
		name: "Crobatite",
		spritenum: 0,
		num: 66948,
		isNonstandard: "Future",
	},
	cradilite: {
		name: "Cradilite",
		spritenum: 0,
		num: 66949,
		isNonstandard: "Future",
	},
	betastone: {
		name: "Beta Stone",
		spritenum: 0,
		num: 66950,
		isNonstandard: "Future",
	},
	martianorb: {
		name: "Martian Orb",
		spritenum: 0,
		num: 66951,
		isNonstandard: "Future",
	},
	venusorb: {
		name: "Venus Orb",
		spritenum: 0,
		num: 66952,
		isNonstandard: "Future",
	},
	mercuryorb: {
		name: "Mercury Orb",
		spritenum: 0,
		num: 66953,
		isNonstandard: "Future",
	},
	dlc: {
		name: "DLC",
		spritenum: 0,
		num: 66954,
		isNonstandard: "Future",
	},
	chipoloberry: {
		name: "Chipolo Berry",
		spritenum: 0,
		num: 66955,
		isNonstandard: "Future",
	},
	haridoberry: {
		name: "Harido Berry",
		spritenum: 0,
		num: 66956,
		isNonstandard: "Future",
	},
	bakyuuberry: {
		name: "Bakyuu Berry",
		spritenum: 0,
		num: 66957,
		isNonstandard: "Future",
	},
	darayberry: {
		name: "Daray Berry",
		spritenum: 0,
		num: 66958,
		isNonstandard: "Future",
	},
	loispberry: {
		name: "Loisp Berry",
		spritenum: 0,
		num: 66959,
		isNonstandard: "Future",
	},
	orptekberry: {
		name: "Orptek Berry",
		spritenum: 0,
		num: 66960,
		isNonstandard: "Future",
	},
	oligalberry: {
		name: "Oligal Berry",
		spritenum: 0,
		num: 66961,
		isNonstandard: "Future",
	},
	ampireberry: {
		name: "Ampire Berry",
		spritenum: 0,
		num: 66962,
		isNonstandard: "Future",
	},
	goldstandarrow: {
		name: "Gold Stand Arrow",
		spritenum: 0,
		num: 66963,
		isNonstandard: "Future",
	},
	goldenfiddle: {
		name: "Golden Fiddle",
		spritenum: 0,
		num: 66964,
		isNonstandard: "Future",
	},
	novaisite: {
		name: "Novaisite",
		spritenum: 0,
		num: 66965,
		isNonstandard: "Future",
	},
	darkolite: {
		name: "Darkolite",
		spritenum: 0,
		num: 66966,
		isNonstandard: "Future",
	},
	harvest: {
		name: "Harvest",
		spritenum: 0,
		num: 66967,
		isNonstandard: "Future",
	},
	abilitycapsule: {
		name: "Ability Capsule",
		spritenum: 0,
		num: 66968,
		isNonstandard: "Future",
	},
	dreamcapsule: {
		name: "Dream Capsule",
		spritenum: 0,
		num: 66969,
		isNonstandard: "Future",
	},
	pumpkinmask: {
		name: "Pumpkin Mask",
		spritenum: 0,
		num: 66970,
		isNonstandard: "Future",
	},
	skullmask: {
		name: "Skull Mask",
		spritenum: 0,
		num: 66971,
		isNonstandard: "Future",
	},
	vivillonite: {
		name: "Vivillonite",
		spritenum: 0,
		num: 66972,
		isNonstandard: "Future",
	},
	jokercard: {
		name: "Joker Card",
		spritenum: 0,
		num: 66973,
		isNonstandard: "Future",
	},
	ariadosite: {
		name: "Ariadosite",
		spritenum: 0,
		num: 66974,
		isNonstandard: "Future",
	},
	gettertomahawk: {
		name: "Getter Tomahawk",
		spritenum: 0,
		num: 66975,
		isNonstandard: "Future",
	},
	getterdrill: {
		name: "Getter Drill",
		spritenum: 0,
		num: 66976,
		isNonstandard: "Future",
	},
	gettermissile: {
		name: "Getter Missile",
		spritenum: 0,
		num: 66977,
		isNonstandard: "Future",
	},
	mozartite: {
		name: "Mozartite",
		spritenum: 0,
		num: 66978,
		isNonstandard: "Future",
	},
	icyseed: {
		name: "Icy Seed",
		spritenum: 0,
		num: 66979,
		isNonstandard: "Future",
	},
	dongorillite: {
		name: "DONGORILLITE",
		spritenum: 0,
		num: 66980,
		isNonstandard: "Future",
	},
	helioliskite: {
		name: "Helioliskite",
		spritenum: 0,
		num: 66981,
		isNonstandard: "Future",
	},
	narwharite: {
		name: "Narwharite",
		spritenum: 0,
		num: 66982,
		isNonstandard: "Future",
	},
	suwiseglasses: {
		name: "Suwise Glasses",
		spritenum: 0,
		num: 66983,
		isNonstandard: "Future",
	},
	plasbulite: {
		name: "Plasbulite",
		spritenum: 0,
		num: 66984,
		isNonstandard: "Future",
	},
	lightulbite: {
		name: "Lightulbite",
		spritenum: 0,
		num: 66985,
		isNonstandard: "Future",
	},
	rodactylite: {
		name: "Rodactylite",
		spritenum: 0,
		num: 66986,
		isNonstandard: "Future",
	},
	pressureorb: {
		name: "Pressure Orb",
		spritenum: 0,
		num: 66987,
		isNonstandard: "Future",
	},
	earplugs: {
		name: "Ear Plugs",
		spritenum: 0,
		num: 66988,
		isNonstandard: "Future",
	},
	reactioxite: {
		name: "Reactioxite",
		spritenum: 0,
		num: 66989,
		isNonstandard: "Future",
	},
	donphanite: {
		name: "Donphanite",
		spritenum: 0,
		num: 66990,
		isNonstandard: "Future",
	},
	jynxite: {
		name: "Jynxite",
		spritenum: 0,
		num: 66991,
		isNonstandard: "Future",
	},
	charizardites: {
		name: "Charizardite S",
		spritenum: 0,
		num: 66992,
		isNonstandard: "Future",
	},
	farfetchditen: {
		name: "Farfetchdite N",
		spritenum: 0,
		num: 66993,
		isNonstandard: "Future",
	},
	gigantamax: {
		name: "Gigantamax",
		spritenum: 0,
		num: 66994,
		isNonstandard: "Future",
	},
	dragonitite: {
		name: "Dragonitite",
		spritenum: 0,
		num: 66995,
		isNonstandard: "Future",
	},
	carnivinite: {
		name: "Carnivinite",
		spritenum: 0,
		num: 66996,
		isNonstandard: "Future",
	},
	cultulzite: {
		name: "Cultulzite",
		spritenum: 0,
		num: 66997,
		isNonstandard: "Future",
	},
	gorebyssite: {
		name: "Gorebyssite",
		spritenum: 0,
		num: 66998,
		isNonstandard: "Future",
	},
	huntailite: {
		name: "Huntailite",
		spritenum: 0,
		num: 66999,
		isNonstandard: "Future",
	},
	bluenight: {
		name: "Blue Night",
		spritenum: 0,
		num: 67000,
		isNonstandard: "Future",
	},
	garbodorite: {
		name: "Garbodorite",
		spritenum: 0,
		num: 67001,
		isNonstandard: "Future",
	},
	highhighpriestess: {
		name: "High High Priestess",
		spritenum: 0,
		num: 67002,
		isNonstandard: "Future",
	},
	kecleonite: {
		name: "Kecleonite",
		spritenum: 0,
		num: 67003,
		isNonstandard: "Future",
	},
	cocaiturdite: {
		name: "Cocaiturdite",
		spritenum: 0,
		num: 67004,
		isNonstandard: "Future",
	},
	albinguinite: {
		name: "Albinguinite",
		spritenum: 0,
		num: 67005,
		isNonstandard: "Future",
	},
	undlouisite: {
		name: "Undlouisite",
		spritenum: 0,
		num: 67006,
		isNonstandard: "Future",
	},
	tropilightnite: {
		name: "Tropilightnite",
		spritenum: 0,
		num: 67007,
		isNonstandard: "Future",
	},
	nukreepite: {
		name: "Nukreepite",
		spritenum: 0,
		num: 67008,
		isNonstandard: "Future",
	},
	tutterflite: {
		name: "Tutterflite",
		spritenum: 0,
		num: 67009,
		isNonstandard: "Future",
	},
	swoobatite: {
		name: "Swoobatite",
		spritenum: 0,
		num: 67010,
		isNonstandard: "Future",
	},
	parasectite: {
		name: "Parasectite",
		spritenum: 0,
		num: 67011,
		isNonstandard: "Future",
	},
	shinytrapezohedron: {
		name: "Shinytrapezohedron",
		spritenum: 0,
		num: 67012,
		isNonstandard: "Future",
	},
	thebeastspaw: {
		name: "Thebeasts Paw",
		spritenum: 0,
		num: 67013,
		isNonstandard: "Future",
	},
	smolstronite: {
		name: "Smolstronite",
		spritenum: 0,
		num: 67014,
		isNonstandard: "Future",
	},
	antiplebshield: {
		name: "Antiplebshield",
		spritenum: 0,
		num: 67015,
		isNonstandard: "Future",
	},
	paintipite: {
		name: "Paintipite",
		spritenum: 0,
		num: 67016,
		isNonstandard: "Future",
	},
	silverkey: {
		name: "Silver Key",
		spritenum: 0,
		num: 67017,
		isNonstandard: "Future",
	},
	bloodytongue: {
		name: "Bloodytongue",
		spritenum: 0,
		num: 67018,
		isNonstandard: "Future",
	},
	darkankh: {
		name: "Dark Ankh",
		spritenum: 0,
		num: 67019,
		isNonstandard: "Future",
	},
	bloatedfan: {
		name: "Bloated Fan",
		spritenum: 0,
		num: 67020,
		isNonstandard: "Future",
	},
	horroruxite: {
		name: "Horroruxite",
		spritenum: 0,
		num: 67021,
		isNonstandard: "Future",
	},
	pyramidite: {
		name: "Pyramidite",
		spritenum: 0,
		num: 67022,
		isNonstandard: "Future",
	},
	warshinite: {
		name: "Warshinite",
		spritenum: 0,
		num: 67023,
		isNonstandard: "Future",
	},
	omastarite: {
		name: "Omastarite",
		spritenum: 0,
		num: 67024,
		isNonstandard: "Future",
	},
	kabutopsite: {
		name: "Kabutopsite",
		spritenum: 0,
		num: 67025,
		isNonstandard: "Future",
	},
	dolphottlite: {
		name: "Dolphottlite",
		spritenum: 0,
		num: 67026,
		isNonstandard: "Future",
	},
	corsolite: {
		name: "Corsolite",
		spritenum: 0,
		num: 67027,
		isNonstandard: "Future",
	},
	victreebelite: {
		name: "Victreebelite",
		spritenum: 0,
		num: 67028,
		isNonstandard: "Future",
	},
	sunflorite: {
		name: "Sunflorite",
		spritenum: 0,
		num: 67029,
		isNonstandard: "Future",
	},
	relicanthite: {
		name: "Relicanthite",
		spritenum: 0,
		num: 67030,
		isNonstandard: "Future",
	},
	whiscashite: {
		name: "Whiscashite",
		spritenum: 0,
		num: 67031,
		isNonstandard: "Future",
	},
	tangrowthitex: {
		name: "Tangrowthite X",
		spritenum: 0,
		num: 67032,
		isNonstandard: "Future",
	},
	tangrowthitey: {
		name: "Tangrowthite Y",
		spritenum: 0,
		num: 67033,
		isNonstandard: "Future",
	},
	tangrowthitez: {
		name: "Tangrowthite Z",
		spritenum: 0,
		num: 67034,
		isNonstandard: "Future",
	},
	luvdiscitex: {
		name: "Luvdiscite X",
		spritenum: 0,
		num: 67035,
		isNonstandard: "Future",
	},
	luvdiscitey: {
		name: "Luvdiscite Y",
		spritenum: 0,
		num: 67036,
		isNonstandard: "Future",
	},
	jumpluffitex: {
		name: "Jumpluffite X",
		spritenum: 0,
		num: 67037,
		isNonstandard: "Future",
	},
	jumpluffitey: {
		name: "Jumpluffite Y",
		spritenum: 0,
		num: 67038,
		isNonstandard: "Future",
	},
	magcargite: {
		name: "Magcargite",
		spritenum: 0,
		num: 67039,
		isNonstandard: "Future",
	},
	poliwrathite: {
		name: "Poliwrathite",
		spritenum: 0,
		num: 67040,
		isNonstandard: "Future",
	},
	blackcloak: {
		name: "Black Cloak",
		spritenum: 0,
		num: 67041,
		isNonstandard: "Future",
	},
	rapidashitey: {
		name: "Rapidashite Y",
		spritenum: 0,
		num: 67042,
		isNonstandard: "Future",
	},
	rapidashitex: {
		name: "Rapidashite X",
		spritenum: 0,
		num: 67043,
		isNonstandard: "Future",
	},
	ninetalesite: {
		name: "Ninetalesite",
		spritenum: 0,
		num: 67044,
		isNonstandard: "Future",
	},
	heatmorite: {
		name: "Heatmorite",
		spritenum: 0,
		num: 67045,
		isNonstandard: "Future",
	},
	charizarditeg: {
		name: "Charizardite G",
		spritenum: 0,
		num: 67046,
		isNonstandard: "Future",
	},
	charizarditer: {
		name: "Charizardite R",
		spritenum: 0,
		num: 67047,
		isNonstandard: "Future",
	},
	arcaninite: {
		name: "Arcaninite",
		spritenum: 0,
		num: 67048,
		isNonstandard: "Future",
	},
	magmortarite: {
		name: "Magmortarite",
		spritenum: 0,
		num: 67049,
		isNonstandard: "Future",
	},
	snorlaxite: {
		name: "Snorlaxite",
		spritenum: 0,
		num: 67050,
		isNonstandard: "Future",
	},
	spindite: {
		name: "Spindite",
		spritenum: 0,
		num: 67051,
		isNonstandard: "Future",
	},
	pyroarite: {
		name: "Pyroarite",
		spritenum: 0,
		num: 67052,
		isNonstandard: "Future",
	},
	slakingite: {
		name: "Slakingite",
		spritenum: 0,
		num: 67053,
		isNonstandard: "Future",
	},
	steamistite: {
		name: "Steamistite",
		spritenum: 0,
		num: 67054,
		isNonstandard: "Future",
	},
	stweamsite: {
		name: "Stweamsite",
		spritenum: 0,
		num: 67055,
		isNonstandard: "Future",
	},
	steamnite: {
		name: "Steamnite",
		spritenum: 0,
		num: 67056,
		isNonstandard: "Future",
	},
	thorncrown: {
		name: "Thorn Crown",
		spritenum: 0,
		num: 67057,
		isNonstandard: "Future",
	},
	pricklythorns: {
		name: "Prickly Thorns",
		spritenum: 0,
		num: 67058,
		isNonstandard: "Future",
	},
	pressuredgem: {
		name: "Pressured Gem",
		spritenum: 0,
		num: 67059,
		isNonstandard: "Future",
	},
	fishmask: {
		name: "Fish Mask",
		spritenum: 0,
		num: 67060,
		isNonstandard: "Future",
	},
	alienmask: {
		name: "Alien Mask",
		spritenum: 0,
		num: 67061,
		isNonstandard: "Future",
	},
	pizzaurexitex: {
		name: "Pizzaurexite X",
		spritenum: 0,
		num: 67062,
		isNonstandard: "Future",
	},
	tenablerusite: {
		name: "Tenablerusite",
		spritenum: 0,
		num: 67063,
		isNonstandard: "Future",
	},
	zombiemask: {
		name: "Zombie Mask",
		spritenum: 0,
		num: 67064,
		isNonstandard: "Future",
	},
	wolfmask: {
		name: "Wolf Mask",
		spritenum: 0,
		num: 67065,
		isNonstandard: "Future",
	},
	clownmask: {
		name: "Clown Mask",
		spritenum: 0,
		num: 67066,
		isNonstandard: "Future",
	},
	mummymask: {
		name: "Mummy Mask",
		spritenum: 0,
		num: 67067,
		isNonstandard: "Future",
	},
	canyouite: {
		name: "Canyouite",
		spritenum: 0,
		num: 67068,
		isNonstandard: "Future",
	},
	charizarditei: {
		name: "Charizardite I",
		spritenum: 0,
		num: 67069,
		isNonstandard: "Future",
	},
	magmocketite: {
		name: "Magmocketite",
		spritenum: 0,
		num: 67070,
		isNonstandard: "Future",
	},
	charizarditew: {
		name: "Charizardite W",
		spritenum: 0,
		num: 67071,
		isNonstandard: "Future",
	},
	charizarditef: {
		name: "Charizardite F",
		spritenum: 0,
		num: 67072,
		isNonstandard: "Future",
	},
	ludicolite: {
		name: "Ludicolite",
		spritenum: 0,
		num: 67073,
		isNonstandard: "Future",
	},
	shiftryite: {
		name: "Shiftryite",
		spritenum: 0,
		num: 67074,
		isNonstandard: "Future",
	},
	persianite: {
		name: "Persianite",
		spritenum: 0,
		num: 67075,
		isNonstandard: "Future",
	},
	golemite: {
		name: "Golemite",
		spritenum: 0,
		num: 67076,
		isNonstandard: "Future",
	},
	tsareenite: {
		name: "Tsareenite",
		spritenum: 0,
		num: 67077,
		isNonstandard: "Future",
	},
	pizzaurexitey: {
		name: "Pizzaurexite Y",
		spritenum: 0,
		num: 67078,
		isNonstandard: "Future",
	},
	pelipperite: {
		name: "Pelipperite",
		spritenum: 0,
		num: 67079,
		isNonstandard: "Future",
	},
	sudowoodite: {
		name: "Sudowoodite",
		spritenum: 0,
		num: 67080,
		isNonstandard: "Future",
	},
	armaldite: {
		name: "Armaldite",
		spritenum: 0,
		num: 67081,
		isNonstandard: "Future",
	},
	betaincense: {
		name: "Beta Incense",
		spritenum: 0,
		num: 67082,
		isNonstandard: "Future",
	},
	charizarditeb: {
		name: "Charizardite B",
		spritenum: 0,
		num: 67083,
		isNonstandard: "Future",
	},
	victorysword: {
		name: "Victory Sword",
		spritenum: 0,
		num: 67084,
		isNonstandard: "Future",
	},
	mismagiusite: {
		name: "Mismagiusite",
		spritenum: 0,
		num: 67085,
		isNonstandard: "Future",
	},
	snatanite: {
		name: "Snatanite",
		spritenum: 0,
		num: 67086,
		isNonstandard: "Future",
	},
	pagieite: {
		name: "Pagieite",
		spritenum: 0,
		num: 67087,
		isNonstandard: "Future",
	},
	booklyite: {
		name: "Booklyite",
		spritenum: 0,
		num: 67088,
		isNonstandard: "Future",
	},
	lusfairite: {
		name: "Lusfairite",
		spritenum: 0,
		num: 67089,
		isNonstandard: "Future",
	},
	boxoite: {
		name: "Boxoite",
		spritenum: 0,
		num: 67090,
		isNonstandard: "Future",
	},
	poweredfan: {
		name: "Powered Fan",
		spritenum: 0,
		num: 67091,
		isNonstandard: "Future",
	},
	thickscarf: {
		name: "Thick Scarf",
		spritenum: 0,
		num: 67092,
		isNonstandard: "Future",
	},
	wheelchair: {
		name: "Wheelchair",
		spritenum: 0,
		num: 67093,
		isNonstandard: "Future",
	},
	shockorb: {
		name: "Shock Orb",
		spritenum: 0,
		num: 67094,
		isNonstandard: "Future",
	},
	frostorb: {
		name: "Frost Orb",
		spritenum: 0,
		num: 67095,
		isNonstandard: "Future",
	},
	naporb: {
		name: "Nap Orb",
		spritenum: 0,
		num: 67096,
		isNonstandard: "Future",
	},
	woodgem: {
		name: "Wood Gem",
		spritenum: 0,
		num: 67097,
		isNonstandard: "Future",
	},
	magmagem: {
		name: "Magma Gem",
		spritenum: 0,
		num: 67098,
		isNonstandard: "Future",
	},
	steamgem: {
		name: "Steam Gem",
		spritenum: 0,
		num: 67099,
		isNonstandard: "Future",
	},
	windgem: {
		name: "Wind Gem",
		spritenum: 0,
		num: 67100,
		isNonstandard: "Future",
	},
	papergem: {
		name: "Paper Gem",
		spritenum: 0,
		num: 67101,
		isNonstandard: "Future",
	},
	techgem: {
		name: "Tech Gem",
		spritenum: 0,
		num: 67102,
		isNonstandard: "Future",
	},
	magicgem: {
		name: "Magicgem",
		spritenum: 0,
		num: 67103,
		isNonstandard: "Future",
	},
	rubbergem: {
		name: "Rubber Gem",
		spritenum: 0,
		num: 67104,
		isNonstandard: "Future",
	},
	feargem: {
		name: "Fear Gem",
		spritenum: 0,
		num: 67105,
		isNonstandard: "Future",
	},
	lightgem: {
		name: "Light Gem",
		spritenum: 0,
		num: 67106,
		isNonstandard: "Future",
	},
	cosmicgem: {
		name: "Cosmic Gem",
		spritenum: 0,
		num: 67107,
		isNonstandard: "Future",
	},
	soundgem: {
		name: "Sound Gem",
		spritenum: 0,
		num: 67108,
		isNonstandard: "Future",
	},
	foodgem: {
		name: "Food Gem",
		spritenum: 0,
		num: 67109,
		isNonstandard: "Future",
	},
	zombiegem: {
		name: "Zombie Gem",
		spritenum: 0,
		num: 67110,
		isNonstandard: "Future",
	},
	nucleargem: {
		name: "Nuclear Gem",
		spritenum: 0,
		num: 67111,
		isNonstandard: "Future",
	},
	virusgem: {
		name: "Virus Gem",
		spritenum: 0,
		num: 67112,
		isNonstandard: "Future",
	},
	cybergem: {
		name: "Cyber Gem",
		spritenum: 0,
		num: 67113,
		isNonstandard: "Future",
	},
	fabricgem: {
		name: "Fabric Gem",
		spritenum: 0,
		num: 67114,
		isNonstandard: "Future",
	},
	chaosgem: {
		name: "Chaos Gem",
		spritenum: 0,
		num: 67115,
		isNonstandard: "Future",
	},
	divinegem: {
		name: "Divine Gem",
		spritenum: 0,
		num: 67116,
		isNonstandard: "Future",
	},
	qmarksgem: {
		name: "Qmarksgem",
		spritenum: 0,
		num: 67117,
		isNonstandard: "Future",
	},
	timegem: {
		name: "Time Gem",
		spritenum: 0,
		num: 67118,
		isNonstandard: "Future",
	},
	paintgem: {
		name: "Paint Gem",
		spritenum: 0,
		num: 67119,
		isNonstandard: "Future",
	},
	crystalgem: {
		name: "Crystal Gem",
		spritenum: 0,
		num: 67120,
		isNonstandard: "Future",
	},
	memegem: {
		name: "Meme Gem",
		spritenum: 0,
		num: 67121,
		isNonstandard: "Future",
	},
	bloodgem: {
		name: "Blood Gem",
		spritenum: 0,
		num: 67122,
		isNonstandard: "Future",
	},
	greasygem: {
		name: "Greasy Gem",
		spritenum: 0,
		num: 67123,
		isNonstandard: "Future",
	},
	heartgem: {
		name: "Heart Gem",
		spritenum: 0,
		num: 67124,
		isNonstandard: "Future",
	},
	ogregem: {
		name: "Ogre Gem",
		spritenum: 0,
		num: 67125,
		isNonstandard: "Future",
	},
	shadowgem: {
		name: "Shadow Gem",
		spritenum: 0,
		num: 67126,
		isNonstandard: "Future",
	},
	acidrock: {
		name: "Acid Rock",
		spritenum: 0,
		num: 67127,
		isNonstandard: "Future",
	},
	blackrock: {
		name: "Black Rock",
		spritenum: 0,
		num: 67128,
		isNonstandard: "Future",
	},
	hulklearite: {
		name: "Hulklearite",
		spritenum: 0,
		num: 67129,
		isNonstandard: "Future",
	},
	fearowite: {
		name: "Fearowite",
		spritenum: 0,
		num: 67130,
		isNonstandard: "Future",
	},
	skippingstone: {
		name: "Skipping Stone",
		spritenum: 0,
		num: 67131,
		isNonstandard: "Future",
	},
	arrowhead: {
		name: "Arrowhead",
		spritenum: 0,
		num: 67132,
		isNonstandard: "Future",
	},
	bootsofblindingspeed: {
		name: "Bootsofblindingspeed",
		spritenum: 0,
		num: 67133,
		isNonstandard: "Future",
	},
	minigalaxy: {
		name: "Mini Galaxy",
		spritenum: 0,
		num: 67134,
		isNonstandard: "Future",
	},
	mienshaonite: {
		name: "Mienshaonite",
		spritenum: 0,
		num: 67135,
		isNonstandard: "Future",
	},
	lipstick: {
		name: "Lipstick",
		spritenum: 0,
		num: 67136,
		isNonstandard: "Future",
	},
	gascan: {
		name: "Gas Can",
		spritenum: 0,
		num: 67137,
		isNonstandard: "Future",
	},
	spices: {
		name: "Spices",
		spritenum: 0,
		num: 67138,
		isNonstandard: "Future",
	},
	kettle: {
		name: "Kettle",
		spritenum: 0,
		num: 67139,
		isNonstandard: "Future",
	},
	magmapowder: {
		name: "Magma Powder",
		spritenum: 0,
		num: 67140,
		isNonstandard: "Future",
	},
	sapling: {
		name: "Sapling",
		spritenum: 0,
		num: 67141,
		isNonstandard: "Future",
	},
	fertilizer: {
		name: "Fertilizer",
		spritenum: 0,
		num: 67142,
		isNonstandard: "Future",
	},
	sturdypebbles: {
		name: "Sturdy Pebbles",
		spritenum: 0,
		num: 67143,
		isNonstandard: "Future",
	},
	sandycapsule: {
		name: "Sandy Capsule",
		spritenum: 0,
		num: 67144,
		isNonstandard: "Future",
	},
	rainycapsule: {
		name: "Rainy Capsule",
		spritenum: 0,
		num: 67145,
		isNonstandard: "Future",
	},
	snowycapsule: {
		name: "Snowy Capsule",
		spritenum: 0,
		num: 67146,
		isNonstandard: "Future",
	},
	sunnycapsule: {
		name: "Sunny Capsule",
		spritenum: 0,
		num: 67147,
		isNonstandard: "Future",
	},
	lamwerberry: {
		name: "Lamwer Berry",
		spritenum: 0,
		num: 67148,
		isNonstandard: "Future",
	},
	prigtinberry: {
		name: "Prigtin Berry",
		spritenum: 0,
		num: 67149,
		isNonstandard: "Future",
	},
	borcygberry: {
		name: "Borcyg Berry",
		spritenum: 0,
		num: 67150,
		isNonstandard: "Future",
	},
	lascetberry: {
		name: "Lascet Berry",
		spritenum: 0,
		num: 67151,
		isNonstandard: "Future",
	},
	yboogberry: {
		name: "Yboog Berry",
		spritenum: 0,
		num: 67152,
		isNonstandard: "Future",
	},
	shieginberry: {
		name: "Shiegin Berry",
		spritenum: 0,
		num: 67153,
		isNonstandard: "Future",
	},
	exretberry: {
		name: "Exret Berry",
		spritenum: 0,
		num: 67154,
		isNonstandard: "Future",
	},
	cousactiberry: {
		name: "Cousacti Berry",
		spritenum: 0,
		num: 67155,
		isNonstandard: "Future",
	},
	rottunberry: {
		name: "Rottun Berry",
		spritenum: 0,
		num: 67156,
		isNonstandard: "Future",
	},
	niossifberry: {
		name: "Niossif Berry",
		spritenum: 0,
		num: 67157,
		isNonstandard: "Future",
	},
	tahrestberry: {
		name: "Tahrest Berry",
		spritenum: 0,
		num: 67158,
		isNonstandard: "Future",
	},
	ackegapberry: {
		name: "Ackegap Berry",
		spritenum: 0,
		num: 67159,
		isNonstandard: "Future",
	},
	thiclonberry: {
		name: "Thiclon Berry",
		spritenum: 0,
		num: 67160,
		isNonstandard: "Future",
	},
	naltereberry: {
		name: "Naltere Berry",
		spritenum: 0,
		num: 67161,
		isNonstandard: "Future",
	},
	istartberry: {
		name: "Istart Berry",
		spritenum: 0,
		num: 67162,
		isNonstandard: "Future",
	},
	stomegenberry: {
		name: "Stomegen Berry",
		spritenum: 0,
		num: 67163,
		isNonstandard: "Future",
	},
	fohazamberry: {
		name: "Fohazam Berry",
		spritenum: 0,
		num: 67164,
		isNonstandard: "Future",
	},
	lomeitberry: {
		name: "Lomeit Berry",
		spritenum: 0,
		num: 67165,
		isNonstandard: "Future",
	},
	symgrieberry: {
		name: "Symgrie Berry",
		spritenum: 0,
		num: 67166,
		isNonstandard: "Future",
	},
	murkycapsule: {
		name: "Murky Capsule",
		spritenum: 0,
		num: 67167,
		isNonstandard: "Future",
	},
	acidycapsule: {
		name: "Acidy Capsule",
		spritenum: 0,
		num: 67168,
		isNonstandard: "Future",
	},
	blazingfeather: {
		name: "Blazing Feather",
		spritenum: 0,
		num: 67169,
		isNonstandard: "Future",
	},
	riotshield: {
		name: "Riot Shield",
		spritenum: 0,
		num: 67170,
		isNonstandard: "Future",
	},
	falloutcapsule: {
		name: "Fallout Capsule",
		spritenum: 0,
		num: 67171,
		isNonstandard: "Future",
	},
	grassycapsule: {
		name: "Grassy Capsule",
		spritenum: 0,
		num: 67172,
		isNonstandard: "Future",
	},
	mistycapsule: {
		name: "Misty Capsule",
		spritenum: 0,
		num: 67173,
		isNonstandard: "Future",
	},
	electriccapsule: {
		name: "Electric Capsule",
		spritenum: 0,
		num: 67174,
		isNonstandard: "Future",
	},
	psychiccapsule: {
		name: "Psychic Capsule",
		spritenum: 0,
		num: 67175,
		isNonstandard: "Future",
	},
	icycapsule: {
		name: "Icy Capsule",
		spritenum: 0,
		num: 67176,
		isNonstandard: "Future",
	},
	marshycapsule: {
		name: "Marshy Capsule",
		spritenum: 0,
		num: 67177,
		isNonstandard: "Future",
	},
	wizardcapsule: {
		name: "Wizard Capsule",
		spritenum: 0,
		num: 67178,
		isNonstandard: "Future",
	},
	volcaniccapsule: {
		name: "Volcanic Capsule",
		spritenum: 0,
		num: 67179,
		isNonstandard: "Future",
	},
	starfieldcapsule: {
		name: "Starfield Capsule",
		spritenum: 0,
		num: 67180,
		isNonstandard: "Future",
	},
	librarycapsule: {
		name: "Library Capsule",
		spritenum: 0,
		num: 67181,
		isNonstandard: "Future",
	},
	comfypillow: {
		name: "Comfy Pillow",
		spritenum: 0,
		num: 67182,
		isNonstandard: "Future",
	},
	greencard: {
		name: "Green Card",
		spritenum: 0,
		num: 67183,
		isNonstandard: "Future",
	},
	holyshield: {
		name: "Holy Shield",
		spritenum: 0,
		num: 67184,
		isNonstandard: "Future",
	},
	quickrepel: {
		name: "Quick Repel",
		spritenum: 0,
		num: 67185,
		isNonstandard: "Future",
	},
	lavarock: {
		name: "Lava Rock",
		spritenum: 0,
		num: 67186,
		isNonstandard: "Future",
	},
	arhelmet: {
		name: "Ar Helmet",
		spritenum: 0,
		num: 67187,
		isNonstandard: "Future",
	},
	vrheadset: {
		name: "Vr Headset",
		spritenum: 0,
		num: 67188,
		isNonstandard: "Future",
	},
	boxinggloves: {
		name: "Boxing Gloves",
		spritenum: 0,
		num: 67189,
		isNonstandard: "Future",
	},
	spikedboots: {
		name: "Spiked Boots",
		spritenum: 0,
		num: 67190,
		isNonstandard: "Future",
	},
	shoepolish: {
		name: "Shoe Polish",
		spritenum: 0,
		num: 67191,
		isNonstandard: "Future",
	},
	trainingglove: {
		name: "Training Glove",
		spritenum: 0,
		num: 67192,
		isNonstandard: "Future",
	},
	sandals: {
		name: "Sandals",
		spritenum: 0,
		num: 67193,
		isNonstandard: "Future",
	},
	skis: {
		name: "Skis",
		spritenum: 0,
		num: 67194,
		isNonstandard: "Future",
	},
	skates: {
		name: "Skates",
		spritenum: 0,
		num: 67195,
		isNonstandard: "Future",
	},
	snowshoes: {
		name: "Snowshoes",
		spritenum: 0,
		num: 67196,
		isNonstandard: "Future",
	},
	hazmatsuit: {
		name: "Hazmat Suit",
		spritenum: 0,
		num: 67197,
		isNonstandard: "Future",
	},
	librarycard: {
		name: "Library Card",
		spritenum: 0,
		num: 67198,
		isNonstandard: "Future",
	},
	saunaheater: {
		name: "Sauna Heater",
		spritenum: 0,
		num: 67199,
		isNonstandard: "Future",
	},
	foggysteamer: {
		name: "Foggy Steamer",
		spritenum: 0,
		num: 67200,
		isNonstandard: "Future",
	},
	swimsuit: {
		name: "Swim Suit",
		spritenum: 0,
		num: 67201,
		isNonstandard: "Future",
	},
	volcanicseed: {
		name: "Volcanic Seed",
		spritenum: 0,
		num: 67202,
		isNonstandard: "Future",
	},
	marshyseed: {
		name: "Marshy Seed",
		spritenum: 0,
		num: 67203,
		isNonstandard: "Future",
	},
	tunlawberry: {
		name: "Tunlaw Berry",
		spritenum: 0,
		num: 67204,
		isNonstandard: "Future",
	},
	excisberry: {
		name: "Excis Berry",
		spritenum: 0,
		num: 67205,
		isNonstandard: "Future",
	},
	coagberry: {
		name: "Coag Berry",
		spritenum: 0,
		num: 67206,
		isNonstandard: "Future",
	},
	ambrosaberry: {
		name: "Ambrosa Berry",
		spritenum: 0,
		num: 67207,
		isNonstandard: "Future",
	},
	wingrenberry: {
		name: "Wingren Berry",
		spritenum: 0,
		num: 67208,
		isNonstandard: "Future",
	},
	garsinberry: {
		name: "Garsin Berry",
		spritenum: 0,
		num: 67209,
		isNonstandard: "Future",
	},
	yllohberry: {
		name: "Ylloh Berry",
		spritenum: 0,
		num: 67210,
		isNonstandard: "Future",
	},
	looffahberry: {
		name: "Looffah Berry",
		spritenum: 0,
		num: 67211,
		isNonstandard: "Future",
	},
	bandaid: {
		name: "Bandaid",
		spritenum: 0,
		num: 67212,
		isNonstandard: "Future",
	},
	librarybinding: {
		name: "Library Binding",
		spritenum: 0,
		num: 67213,
		isNonstandard: "Future",
	},
	cyberspacecapsule: {
		name: "Cyberspace Capsule",
		spritenum: 0,
		num: 67214,
		isNonstandard: "Future",
	},
	gallerycapsule: {
		name: "Gallery Capsule",
		spritenum: 0,
		num: 67215,
		isNonstandard: "Future",
	},
	choicejacket: {
		name: "Choice Jacket",
		spritenum: 0,
		num: 67216,
		isNonstandard: "Future",
	},
	choicecloak: {
		name: "Choice Cloak",
		spritenum: 0,
		num: 67217,
		isNonstandard: "Future",
	},
	mettleberry: {
		name: "Mettle Berry",
		spritenum: 0,
		num: 67218,
		isNonstandard: "Future",
	},
	boisonberry: {
		name: "Boison Berry",
		spritenum: 0,
		num: 67219,
		isNonstandard: "Future",
	},
	perepberry: {
		name: "Perep Berry",
		spritenum: 0,
		num: 67220,
		isNonstandard: "Future",
	},
	dollberry: {
		name: "Doll Berry",
		spritenum: 0,
		num: 67221,
		isNonstandard: "Future",
	},
	normaldust: {
		name: "Normal Dust",
		spritenum: 0,
		num: 67222,
		isNonstandard: "Future",
	},
	waterdust: {
		name: "Water Dust",
		spritenum: 0,
		num: 67223,
		isNonstandard: "Future",
	},
	firedust: {
		name: "Fire Dust",
		spritenum: 0,
		num: 67224,
		isNonstandard: "Future",
	},
	grassdust: {
		name: "Grass Dust",
		spritenum: 0,
		num: 67225,
		isNonstandard: "Future",
	},
	fightingdust: {
		name: "Fighting Dust",
		spritenum: 0,
		num: 67226,
		isNonstandard: "Future",
	},
	flyingdust: {
		name: "Flying Dust",
		spritenum: 0,
		num: 67227,
		isNonstandard: "Future",
	},
	poisondust: {
		name: "Poison Dust",
		spritenum: 0,
		num: 67228,
		isNonstandard: "Future",
	},
	grounddust: {
		name: "Ground Dust",
		spritenum: 0,
		num: 67229,
		isNonstandard: "Future",
	},
	rockdust: {
		name: "Rock Dust",
		spritenum: 0,
		num: 67230,
		isNonstandard: "Future",
	},
	bugdust: {
		name: "Bug Dust",
		spritenum: 0,
		num: 67231,
		isNonstandard: "Future",
	},
	ghostdust: {
		name: "Ghost Dust",
		spritenum: 0,
		num: 67232,
		isNonstandard: "Future",
	},
	electricdust: {
		name: "Electric Dust",
		spritenum: 0,
		num: 67233,
		isNonstandard: "Future",
	},
	psychicdust: {
		name: "Psychic Dust",
		spritenum: 0,
		num: 67234,
		isNonstandard: "Future",
	},
	icedust: {
		name: "Ice Dust",
		spritenum: 0,
		num: 67235,
		isNonstandard: "Future",
	},
	steeldust: {
		name: "Steel Dust",
		spritenum: 0,
		num: 67236,
		isNonstandard: "Future",
	},
	darkdust: {
		name: "Dark Dust",
		spritenum: 0,
		num: 67237,
		isNonstandard: "Future",
	},
	dragondust: {
		name: "Dragon Dust",
		spritenum: 0,
		num: 67238,
		isNonstandard: "Future",
	},
	fairydust: {
		name: "Fairy Dust",
		spritenum: 0,
		num: 67239,
		isNonstandard: "Future",
	},
	wooddust: {
		name: "Wood Dust",
		spritenum: 0,
		num: 67240,
		isNonstandard: "Future",
	},
	magmadust: {
		name: "Magma Dust",
		spritenum: 0,
		num: 67241,
		isNonstandard: "Future",
	},
	steamdust: {
		name: "Steam Dust",
		spritenum: 0,
		num: 67242,
		isNonstandard: "Future",
	},
	winddust: {
		name: "Wind Dust",
		spritenum: 0,
		num: 67243,
		isNonstandard: "Future",
	},
	paperdust: {
		name: "Paper Dust",
		spritenum: 0,
		num: 67244,
		isNonstandard: "Future",
	},
	techdust: {
		name: "Tech Dust",
		spritenum: 0,
		num: 67245,
		isNonstandard: "Future",
	},
	rubberdust: {
		name: "Rubber Dust",
		spritenum: 0,
		num: 67246,
		isNonstandard: "Future",
	},
	feardust: {
		name: "Fear Dust",
		spritenum: 0,
		num: 67247,
		isNonstandard: "Future",
	},
	magicdust: {
		name: "Magic Dust",
		spritenum: 0,
		num: 67248,
		isNonstandard: "Future",
	},
	lightdust: {
		name: "Light Dust",
		spritenum: 0,
		num: 67249,
		isNonstandard: "Future",
	},
	cosmicdust: {
		name: "Cosmic Dust",
		spritenum: 0,
		num: 67250,
		isNonstandard: "Future",
	},
	sounddust: {
		name: "Sound Dust",
		spritenum: 0,
		num: 67251,
		isNonstandard: "Future",
	},
	fooddust: {
		name: "Food Dust",
		spritenum: 0,
		num: 67252,
		isNonstandard: "Future",
	},
	zombiedust: {
		name: "Zombie Dust",
		spritenum: 0,
		num: 67253,
		isNonstandard: "Future",
	},
	nucleardust: {
		name: "Nuclear Dust",
		spritenum: 0,
		num: 67254,
		isNonstandard: "Future",
	},
	virusdust: {
		name: "Virus Dust",
		spritenum: 0,
		num: 67255,
		isNonstandard: "Future",
	},
	cyberdust: {
		name: "Cyber Dust",
		spritenum: 0,
		num: 67256,
		isNonstandard: "Future",
	},
	glassdust: {
		name: "Glass Dust",
		spritenum: 0,
		num: 67257,
		isNonstandard: "Future",
	},
	plasticdust: {
		name: "Plastic Dust",
		spritenum: 0,
		num: 67258,
		isNonstandard: "Future",
	},
	fabricdust: {
		name: "Fabric Dust",
		spritenum: 0,
		num: 67259,
		isNonstandard: "Future",
	},
	chaosdust: {
		name: "Chaos Dust",
		spritenum: 0,
		num: 67260,
		isNonstandard: "Future",
	},
	divinedust: {
		name: "Divine Dust",
		spritenum: 0,
		num: 67261,
		isNonstandard: "Future",
	},
	timedust: {
		name: "Time Dust",
		spritenum: 0,
		num: 67262,
		isNonstandard: "Future",
	},
	paintdust: {
		name: "Paint Dust",
		spritenum: 0,
		num: 67263,
		isNonstandard: "Future",
	},
	crystaldust: {
		name: "Crystal Dust",
		spritenum: 0,
		num: 67264,
		isNonstandard: "Future",
	},
	memedust: {
		name: "Meme Dust",
		spritenum: 0,
		num: 67265,
		isNonstandard: "Future",
	},
	blooddust: {
		name: "Blood Dust",
		spritenum: 0,
		num: 67266,
		isNonstandard: "Future",
	},
	greasydust: {
		name: "Greasy Dust",
		spritenum: 0,
		num: 67267,
		isNonstandard: "Future",
	},
	heartdust: {
		name: "Heart Dust",
		spritenum: 0,
		num: 67268,
		isNonstandard: "Future",
	},
	ogredust: {
		name: "Ogre Dust",
		spritenum: 0,
		num: 67269,
		isNonstandard: "Future",
	},
	qmarksdust: {
		name: "Qmarksdust",
		spritenum: 0,
		num: 67270,
		isNonstandard: "Future",
	},
	shadowdust: {
		name: "Shadow Dust",
		spritenum: 0,
		num: 67271,
		isNonstandard: "Future",
	},
	icepack: {
		name: "Icepack",
		spritenum: 0,
		num: 67272,
		isNonstandard: "Future",
	},
	novicebelt: {
		name: "Novice Belt",
		spritenum: 0,
		num: 67273,
		isNonstandard: "Future",
	},
	gravitymodule: {
		name: "Gravity Module",
		spritenum: 0,
		num: 67274,
		isNonstandard: "Future",
	},
	rockcandy: {
		name: "Rock Candy",
		spritenum: 0,
		num: 67275,
		isNonstandard: "Future",
	},
	gubiberry: {
		name: "Gubi Berry",
		spritenum: 0,
		num: 67276,
		isNonstandard: "Future",
	},
	siberrberry: {
		name: "Siberr Berry",
		spritenum: 0,
		num: 67277,
		isNonstandard: "Future",
	},
	waterballoon: {
		name: "Water Balloon",
		spritenum: 0,
		num: 67278,
		isNonstandard: "Future",
	},
	mudballoon: {
		name: "Mud Balloon",
		spritenum: 0,
		num: 67279,
		isNonstandard: "Future",
	},
	magmaballoon: {
		name: "Magma Balloon",
		spritenum: 0,
		num: 67280,
		isNonstandard: "Future",
	},
	steamballoon: {
		name: "Steam Balloon",
		spritenum: 0,
		num: 67281,
		isNonstandard: "Future",
	},
	supressionstone: {
		name: "Supression Stone",
		spritenum: 0,
		num: 67282,
		isNonstandard: "Future",
	},
	resistancepolicy: {
		name: "Resistance Policy",
		spritenum: 0,
		num: 67283,
		isNonstandard: "Future",
	},
	chloroflower: {
		name: "Chloro Flower",
		spritenum: 0,
		num: 67284,
		isNonstandard: "Future",
	},
	coconaberry: {
		name: "Cocona Berry",
		spritenum: 0,
		num: 67285,
		isNonstandard: "Future",
	},
	gravityseed: {
		name: "Gravity Seed",
		spritenum: 0,
		num: 67286,
		isNonstandard: "Future",
	},
	sunglasses: {
		name: "Sunglasses",
		spritenum: 0,
		num: 67287,
		isNonstandard: "Future",
	},
	gravitycore: {
		name: "Gravity Core",
		spritenum: 0,
		num: 67288,
		isNonstandard: "Future",
	},
	sandcastlekit: {
		name: "Sandcastle Kit",
		spritenum: 0,
		num: 67289,
		isNonstandard: "Future",
	},
	raincoat: {
		name: "Raincoat",
		spritenum: 0,
		num: 67290,
		isNonstandard: "Future",
	},
	ativumberry: {
		name: "Ativum Berry",
		spritenum: 0,
		num: 67291,
		isNonstandard: "Future",
	},
	igaradberry: {
		name: "Igarad Berry",
		spritenum: 0,
		num: 67292,
		isNonstandard: "Future",
	},
	inshuberry: {
		name: "Inshu Berry",
		spritenum: 0,
		num: 67293,
		isNonstandard: "Future",
	},
	drakfruberry: {
		name: "Drakfru Berry",
		spritenum: 0,
		num: 67294,
		isNonstandard: "Future",
	},
	pyscoberry: {
		name: "Pysco Berry",
		spritenum: 0,
		num: 67295,
		isNonstandard: "Future",
	},
	ogravberry: {
		name: "Ograv Berry",
		spritenum: 0,
		num: 67296,
		isNonstandard: "Future",
	},
	poltraberry: {
		name: "Poltra Berry",
		spritenum: 0,
		num: 67297,
		isNonstandard: "Future",
	},
	cowbell: {
		name: "Cowbell",
		spritenum: 0,
		num: 67298,
		isNonstandard: "Future",
	},
	iaraytberry: {
		name: "Iarayt Berry",
		spritenum: 0,
		num: 67299,
		isNonstandard: "Future",
	},
	zodziberry: {
		name: "Zodzi Berry",
		spritenum: 0,
		num: 67300,
		isNonstandard: "Future",
	},
	arcakberry: {
		name: "Arcak Berry",
		spritenum: 0,
		num: 67301,
		isNonstandard: "Future",
	},
	shurbberry: {
		name: "Shurb Berry",
		spritenum: 0,
		num: 67302,
		isNonstandard: "Future",
	},
	vaccuberry: {
		name: "Vaccu Berry",
		spritenum: 0,
		num: 67303,
		isNonstandard: "Future",
	},
	gluttberry: {
		name: "Glutt Berry",
		spritenum: 0,
		num: 67304,
		isNonstandard: "Future",
	},
	tivomberry: {
		name: "Tivom Berry",
		spritenum: 0,
		num: 67305,
		isNonstandard: "Future",
	},
	srapyberry: {
		name: "Srapy Berry",
		spritenum: 0,
		num: 67306,
		isNonstandard: "Future",
	},
	invertedrune: {
		name: "Inverted Rune",
		spritenum: 0,
		num: 67307,
		isNonstandard: "Future",
	},
	gouraberry: {
		name: "Goura Berry",
		spritenum: 0,
		num: 67308,
		isNonstandard: "Future",
	},
	gravitycapsule: {
		name: "Gravity Capsule",
		spritenum: 0,
		num: 67309,
		isNonstandard: "Future",
	},
	chaosflute: {
		name: "Chaos Flute",
		spritenum: 0,
		num: 67310,
		isNonstandard: "Future",
	},
	flyingballoon: {
		name: "Flying Balloon",
		spritenum: 0,
		num: 67311,
		isNonstandard: "Future",
	},
	pandemiccapsule: {
		name: "Pandemic Capsule",
		spritenum: 0,
		num: 67312,
		isNonstandard: "Future",
	},
	aethercapsule: {
		name: "Aether Capsule",
		spritenum: 0,
		num: 67313,
		isNonstandard: "Future",
	},
	steamyrock: {
		name: "Steamy Rock",
		spritenum: 0,
		num: 67314,
		isNonstandard: "Future",
	},
	featherrock: {
		name: "Feather Rock",
		spritenum: 0,
		num: 67315,
		isNonstandard: "Future",
	},
	erodedrock: {
		name: "Eroded Rock",
		spritenum: 0,
		num: 67316,
		isNonstandard: "Future",
	},
	scalyrock: {
		name: "Scaly Rock",
		spritenum: 0,
		num: 67317,
		isNonstandard: "Future",
	},
	chargedrock: {
		name: "Charged Rock",
		spritenum: 0,
		num: 67318,
		isNonstandard: "Future",
	},
	brightrock: {
		name: "Bright Rock",
		spritenum: 0,
		num: 67319,
		isNonstandard: "Future",
	},
	mossyrock: {
		name: "Mossy Rock",
		spritenum: 0,
		num: 67320,
		isNonstandard: "Future",
	},
	weirdrock: {
		name: "Weird Rock",
		spritenum: 0,
		num: 67321,
		isNonstandard: "Future",
	},
	virtualrock: {
		name: "Virtual Rock",
		spritenum: 0,
		num: 67322,
		isNonstandard: "Future",
	},
	reflectiverock: {
		name: "Reflective Rock",
		spritenum: 0,
		num: 67323,
		isNonstandard: "Future",
	},
	radioactiverock: {
		name: "Radioactive Rock",
		spritenum: 0,
		num: 67324,
		isNonstandard: "Future",
	},
	paperrock: {
		name: "Paper Rock",
		spritenum: 0,
		num: 67325,
		isNonstandard: "Future",
	},
	sweetrock: {
		name: "Sweet Rock",
		spritenum: 0,
		num: 67326,
		isNonstandard: "Future",
	},
	viralrock: {
		name: "Viral Rock",
		spritenum: 0,
		num: 67327,
		isNonstandard: "Future",
	},
	woodenrock: {
		name: "Woodenrock",
		spritenum: 0,
		num: 67328,
		isNonstandard: "Future",
	},
	echorock: {
		name: "Echo Rock",
		spritenum: 0,
		num: 67329,
		isNonstandard: "Future",
	},
	clasticrock: {
		name: "Clastic Rock",
		spritenum: 0,
		num: 67330,
		isNonstandard: "Future",
	},
	swarmedrock: {
		name: "Swarmed Rock",
		spritenum: 0,
		num: 67331,
		isNonstandard: "Future",
	},
	chromerock: {
		name: "Chrome Rock",
		spritenum: 0,
		num: 67332,
		isNonstandard: "Future",
	},
	darkkatana: {
		name: "Dark Katana",
		spritenum: 0,
		num: 67333,
		isNonstandard: "Future",
	},
	plagueorb: {
		name: "Plague Orb",
		spritenum: 0,
		num: 67334,
		isNonstandard: "Future",
	},
	infernoorb: {
		name: "Inferno Orb",
		spritenum: 0,
		num: 67335,
		isNonstandard: "Future",
	},
	stormorb: {
		name: "Storm Orb",
		spritenum: 0,
		num: 67336,
		isNonstandard: "Future",
	},
	glassarmor: {
		name: "Glass Armor",
		spritenum: 0,
		num: 67337,
		isNonstandard: "Future",
	},
	confoundorb: {
		name: "Confound Orb",
		spritenum: 0,
		num: 67338,
		isNonstandard: "Future",
	},
	tormentorb: {
		name: "Torment Orb",
		spritenum: 0,
		num: 67339,
		isNonstandard: "Future",
	},
	tauntorb: {
		name: "Taunt Orb",
		spritenum: 0,
		num: 67340,
		isNonstandard: "Future",
	},
	hotchocolate: {
		name: "Hot Chocolate",
		spritenum: 0,
		num: 67341,
		isNonstandard: "Future",
	},
	icecream: {
		name: "Ice Cream",
		spritenum: 0,
		num: 67342,
		isNonstandard: "Future",
	},
	yogurt: {
		name: "Yogurt",
		spritenum: 0,
		num: 67343,
		isNonstandard: "Future",
	},
	mixedmushrooms: {
		name: "Mixed Mushrooms",
		spritenum: 0,
		num: 67344,
		isNonstandard: "Future",
	},
	carritberry: {
		name: "Carrit Berry",
		spritenum: 0,
		num: 67345,
		isNonstandard: "Future",
	},
	ginsioberry: {
		name: "Ginsio Berry",
		spritenum: 0,
		num: 67346,
		isNonstandard: "Future",
	},
	rottedrock: {
		name: "Rotted Rock",
		spritenum: 0,
		num: 67347,
		isNonstandard: "Future",
	},
	feastcapsule: {
		name: "Feast Capsule",
		spritenum: 0,
		num: 67348,
		isNonstandard: "Future",
	},
	mirrorcapsule: {
		name: "Mirror Capsule",
		spritenum: 0,
		num: 67349,
		isNonstandard: "Future",
	},
	plainrock: {
		name: "Plain Rock",
		spritenum: 0,
		num: 67350,
		isNonstandard: "Future",
	},
	graveyardcapsule: {
		name: "Graveyard Capsule",
		spritenum: 0,
		num: 67351,
		isNonstandard: "Future",
	},
	iceballoon: {
		name: "Ice Balloon",
		spritenum: 0,
		num: 67352,
		isNonstandard: "Future",
	},
	arboreumcapsule: {
		name: "Arboreum Capsule",
		spritenum: 0,
		num: 67353,
		isNonstandard: "Future",
	},
	saunacapsule: {
		name: "Sauna Capsule",
		spritenum: 0,
		num: 67354,
		isNonstandard: "Future",
	},
	sexyswimsuit: {
		name: "Sexy Swimsuit",
		spritenum: 0,
		num: 67355,
		isNonstandard: "Future",
	},
	rainbarrel: {
		name: "Rain Barrel",
		spritenum: 0,
		num: 67356,
		isNonstandard: "Future",
	},
	blaringspeaker: {
		name: "Blaring Speaker",
		spritenum: 0,
		num: 67357,
		isNonstandard: "Future",
	},
	factorycapsule: {
		name: "Factory Capsule",
		spritenum: 0,
		num: 67358,
		isNonstandard: "Future",
	},
	recyclecapsule: {
		name: "Recycle Capsule",
		spritenum: 0,
		num: 67359,
		isNonstandard: "Future",
	},
	prankkit: {
		name: "Prank Kit",
		spritenum: 0,
		num: 67360,
		isNonstandard: "Future",
	},
	nightlight: {
		name: "Nightlight",
		spritenum: 0,
		num: 67361,
		isNonstandard: "Future",
	},
	plasticrock: {
		name: "Plastic Rock",
		spritenum: 0,
		num: 67362,
		isNonstandard: "Future",
	},
	bruxishite: {
		name: "Bruxishite",
		spritenum: 0,
		num: 67363,
		isNonstandard: "Future",
	},
	drampite: {
		name: "Drampite",
		spritenum: 0,
		num: 67364,
		isNonstandard: "Future",
	},
	youthincense: {
		name: "Youth Incense",
		spritenum: 0,
		num: 67365,
		isNonstandard: "Future",
	},
	marshyincense: {
		name: "Marshy Incense",
		spritenum: 0,
		num: 67366,
		isNonstandard: "Future",
	},
	teaincense: {
		name: "Tea Incense",
		spritenum: 0,
		num: 67367,
		isNonstandard: "Future",
	},
	trojorsite: {
		name: "Trojorsite",
		spritenum: 0,
		num: 67368,
		isNonstandard: "Future",
	},
	dusknoirite: {
		name: "Dusknoirite",
		spritenum: 0,
		num: 67369,
		isNonstandard: "Future",
	},
	manarock: {
		name: "Mana Rock",
		spritenum: 0,
		num: 67370,
		isNonstandard: "Future",
	},
	gueriestite: {
		name: "Gueriestite",
		spritenum: 0,
		num: 67371,
		isNonstandard: "Future",
	},
	darkballoon: {
		name: "Dark Balloon",
		spritenum: 0,
		num: 67372,
		isNonstandard: "Future",
	},
	c4: {
		name: "C4",
		spritenum: 0,
		num: 67373,
		isNonstandard: "Future",
	},
	soupbowl: {
		name: "Soup Bowl",
		spritenum: 0,
		num: 67374,
		isNonstandard: "Future",
	},
	toiletpaper: {
		name: "Toilet Paper",
		spritenum: 0,
		num: 67375,
		isNonstandard: "Future",
	},
	coomstone: {
		name: "Coom Stone",
		spritenum: 0,
		num: 67376,
		isNonstandard: "Future",
	},
	swarmcapsule: {
		name: "Swarm Capsule",
		spritenum: 0,
		num: 67377,
		isNonstandard: "Future",
	},
	prismolisite: {
		name: "Prismolisite",
		spritenum: 0,
		num: 67378,
		isNonstandard: "Future",
	},
	horrorizer: {
		name: "Horrorizer",
		spritenum: 0,
		num: 67379,
		isNonstandard: "Future",
	},
	steadywindcapsule: {
		name: "Steadywind Capsule",
		spritenum: 0,
		num: 67380,
		isNonstandard: "Future",
	},
	tempestcapsule: {
		name: "Tempest Capsule",
		spritenum: 0,
		num: 67381,
		isNonstandard: "Future",
	},
	invertedcapsule: {
		name: "Inverted Capsule",
		spritenum: 0,
		num: 67382,
		isNonstandard: "Future",
	},
	bouncycapsule: {
		name: "Bouncy Capsule",
		spritenum: 0,
		num: 67383,
		isNonstandard: "Future",
	},
	manaversecapsule: {
		name: "Manaverse Capsule",
		spritenum: 0,
		num: 67384,
		isNonstandard: "Future",
	},
	ultracloak: {
		name: "Ultra Cloak",
		spritenum: 0,
		num: 67385,
		isNonstandard: "Future",
	},
	ultrascarf: {
		name: "Ultra Scarf",
		spritenum: 0,
		num: 67386,
		isNonstandard: "Future",
	},
	godsorb: {
		name: "GODSORB",
		spritenum: 0,
		num: 67387,
		isNonstandard: "Future",
	},
	safecapsule: {
		name: "Safe Capsule",
		spritenum: 0,
		num: 67388,
		isNonstandard: "Future",
	},
	chaosguard: {
		name: "Chaos Guard",
		spritenum: 0,
		num: 67389,
		isNonstandard: "Future",
	},
	wackstone: {
		name: "Wack Stone",
		spritenum: 0,
		num: 67390,
		isNonstandard: "Future",
	},
	probopassite: {
		name: "Probopassite",
		spritenum: 0,
		num: 67391,
		isNonstandard: "Future",
	},
	vampirefangs: {
		name: "Vampire Fangs",
		spritenum: 0,
		num: 67392,
		isNonstandard: "Future",
	},
	eviolate: {
		name: "Eviolate",
		spritenum: 0,
		num: 67393,
		isNonstandard: "Future",
	},
	archersbow: {
		name: "Archers Bow",
		spritenum: 0,
		num: 67394,
		isNonstandard: "Future",
	},
	spiritbell: {
		name: "Spirit Bell",
		spritenum: 0,
		num: 67395,
		isNonstandard: "Future",
	},
	battlewhip: {
		name: "Battle Whip",
		spritenum: 0,
		num: 67396,
		isNonstandard: "Future",
	},
	weakeningwhip: {
		name: "Weakening Whip",
		spritenum: 0,
		num: 67397,
		isNonstandard: "Future",
	},
	shatteringhammer: {
		name: "Shattering Hammer",
		spritenum: 0,
		num: 67398,
		isNonstandard: "Future",
	},
	distracttrumpet: {
		name: "Distract Trumpet",
		spritenum: 0,
		num: 67399,
		isNonstandard: "Future",
	},
	enfeeblescepter: {
		name: "Enfeeble Scepter",
		spritenum: 0,
		num: 67400,
		isNonstandard: "Future",
	},
	gooeygloves: {
		name: "Gooey Gloves",
		spritenum: 0,
		num: 67401,
		isNonstandard: "Future",
	},
	blindingprism: {
		name: "Blinding Prism",
		spritenum: 0,
		num: 67402,
		isNonstandard: "Future",
	},
	alluringnectar: {
		name: "Alluring Nectar",
		spritenum: 0,
		num: 67403,
		isNonstandard: "Future",
	},
	curseddoll: {
		name: "Cursed Doll",
		spritenum: 0,
		num: 67404,
		isNonstandard: "Future",
	},
	gigadrill: {
		name: "Giga Drill",
		spritenum: 0,
		num: 67405,
		isNonstandard: "Future",
	},
	sheriffhat: {
		name: "Sheriff Hat",
		spritenum: 0,
		num: 67406,
		isNonstandard: "Future",
	},
	sheriffbadge: {
		name: "Sheriff Badge",
		spritenum: 0,
		num: 67407,
		isNonstandard: "Future",
	},
	wildwestcapsule: {
		name: "Wildwest Capsule",
		spritenum: 0,
		num: 67408,
		isNonstandard: "Future",
	},
	safetyhelmet: {
		name: "Safety Helmet",
		spritenum: 0,
		num: 67409,
		isNonstandard: "Future",
	},
	pengemperorite: {
		name: "Pengemperorite",
		spritenum: 0,
		num: 67410,
		isNonstandard: "Future",
	},
	golurkite: {
		name: "Golurkite",
		spritenum: 0,
		num: 67411,
		isNonstandard: "Future",
	},
	nidoqueenite: {
		name: "Nidoqueenite",
		spritenum: 0,
		num: 67412,
		isNonstandard: "Future",
	},
	dontstopmenow: {
		name: "Dontstopmenow",
		spritenum: 0,
		num: 67413,
		isNonstandard: "Future",
	},
	kaijustone: {
		name: "Kaiju Stone",
		spritenum: 0,
		num: 67414,
		isNonstandard: "Future",
	},
	sanshoodie: {
		name: "Sans Hoodie",
		spritenum: 0,
		num: 67415,
		isNonstandard: "Future",
	},
	fortunateegg: {
		name: "Fortunate Egg",
		spritenum: 0,
		num: 67416,
		isNonstandard: "Future",
	},
	blessedegg: {
		name: "Blessed Egg",
		spritenum: 0,
		num: 67417,
		isNonstandard: "Future",
	},
	providenceegg: {
		name: "Providence Egg",
		spritenum: 0,
		num: 67418,
		isNonstandard: "Future",
	},
	unluckyegg: {
		name: "Unlucky Egg",
		spritenum: 0,
		num: 67419,
		isNonstandard: "Future",
	},
	unfortunateegg: {
		name: "Unfortunate Egg",
		spritenum: 0,
		num: 67420,
		isNonstandard: "Future",
	},
	cursedegg: {
		name: "Cursed Egg",
		spritenum: 0,
		num: 67421,
		isNonstandard: "Future",
	},
	eviocicle: {
		name: "Eviocicle",
		spritenum: 0,
		num: 67422,
		isNonstandard: "Future",
	},
	wackorb: {
		name: "Wack Orb",
		spritenum: 0,
		num: 67423,
		isNonstandard: "Future",
	},
	fancyapple: {
		name: "Fancy Apple",
		spritenum: 0,
		num: 67424,
		isNonstandard: "Future",
	},
	fruitbunch: {
		name: "Fruit Bunch",
		spritenum: 0,
		num: 67425,
		isNonstandard: "Future",
	},
	tinofbeans: {
		name: "Tin Of Beans",
		spritenum: 0,
		num: 67426,
		isNonstandard: "Future",
	},
	friedfood: {
		name: "Fried Food",
		spritenum: 0,
		num: 67427,
		isNonstandard: "Future",
	},
	spicemix: {
		name: "Spice Mix",
		spritenum: 0,
		num: 67428,
		isNonstandard: "Future",
	},
	saladmix: {
		name: "Salad Mix",
		spritenum: 0,
		num: 67429,
		isNonstandard: "Future",
	},
	magnezonite: {
		name: "Magnezonite",
		spritenum: 0,
		num: 67430,
		isNonstandard: "Future",
	},
	saturnorb: {
		name: "Saturn Orb",
		spritenum: 0,
		num: 67431,
		isNonstandard: "Future",
	},
	jupiterorb: {
		name: "Jupiter Orb",
		spritenum: 0,
		num: 67432,
		isNonstandard: "Future",
	},
	neptuneorb: {
		name: "Neptune Orb",
		spritenum: 0,
		num: 67433,
		isNonstandard: "Future",
	},
	uranusorb: {
		name: "Uranus Orb",
		spritenum: 0,
		num: 67434,
		isNonstandard: "Future",
	},
	borderwall: {
		name: "Border Wall",
		spritenum: 0,
		num: 67435,
		isNonstandard: "Future",
	},
	brittlebones: {
		name: "Brittle Bones",
		spritenum: 0,
		num: 67436,
		isNonstandard: "Future",
	},
	microchip: {
		name: "Microchip",
		spritenum: 0,
		num: 67437,
		isNonstandard: "Future",
	},
	sodapowder: {
		name: "Soda Powder",
		spritenum: 0,
		num: 67438,
		isNonstandard: "Future",
	},
	ultrafeastcapsule: {
		name: "Ultrafeastcapsule",
		spritenum: 0,
		num: 67439,
		isNonstandard: "Future",
	},
	supermalevitality: {
		name: "Super Male Vitality",
		spritenum: 0,
		num: 67440,
		isNonstandard: "Future",
	},
	brainforce: {
		name: "Brainforce",
		spritenum: 0,
		num: 67441,
		isNonstandard: "Future",
	},
	commonplanter: {
		name: "Common Planter",
		spritenum: 0,
		num: 67442,
		isNonstandard: "Future",
	},
	boiledegg: {
		name: "Boiled Egg",
		spritenum: 0,
		num: 67443,
		isNonstandard: "Future",
	},
	packofpotatoes: {
		name: "Pack Of Potatoes",
		spritenum: 0,
		num: 67444,
		isNonstandard: "Future",
	},
	angerorb: {
		name: "Anger Orb",
		spritenum: 0,
		num: 67445,
		isNonstandard: "Future",
	},
	breakdownorb: {
		name: "Breakdown Orb",
		spritenum: 0,
		num: 67446,
		isNonstandard: "Future",
	},
	pungentroot: {
		name: "Pungent Root",
		spritenum: 0,
		num: 67447,
		isNonstandard: "Future",
	},
	largeleek: {
		name: "Large Leek",
		spritenum: 0,
		num: 67448,
		isNonstandard: "Future",
	},
	pasta: {
		name: "Pasta",
		spritenum: 0,
		num: 67449,
		isNonstandard: "Future",
	},
	coconutmilk: {
		name: "Coconut Milk",
		spritenum: 0,
		num: 67450,
		isNonstandard: "Future",
	},
	bread: {
		name: "Bread",
		spritenum: 0,
		num: 67451,
		isNonstandard: "Future",
	},
	moomoocheese: {
		name: "Moomoo Cheese",
		spritenum: 0,
		num: 67452,
		isNonstandard: "Future",
	},
	bobsfoodtin: {
		name: "Bobs Food Tin",
		spritenum: 0,
		num: 67453,
		isNonstandard: "Future",
	},
	bachsfoodtin: {
		name: "Bachs Food Tin",
		spritenum: 0,
		num: 67454,
		isNonstandard: "Future",
	},
	pokeruspoison: {
		name: "Pokerus Poison",
		spritenum: 0,
		num: 67455,
		isNonstandard: "Future",
	},
	pokeruscure: {
		name: "Pokerus Cure",
		spritenum: 0,
		num: 67456,
		isNonstandard: "Future",
	},
	shinyperfume: {
		name: "Shiny Perfume",
		spritenum: 0,
		num: 67457,
		isNonstandard: "Future",
	},
	wealthcharm: {
		name: "Wealth Charm",
		spritenum: 0,
		num: 67458,
		isNonstandard: "Future",
	},
	invisiblemask: {
		name: "Invisible Mask",
		spritenum: 0,
		num: 67460,
		isNonstandard: "Future",
	},
	charizarditec: {
		name: "Charizardite C",
		spritenum: 0,
		num: 67461,
		isNonstandard: "Future",
	},
	pitchsludge: {
		name: "Pitch Sludge",
		spritenum: 0,
		num: 67462,
		isNonstandard: "Future",
	},
	craggyhelmet: {
		name: "Craggy Helmet",
		spritenum: 0,
		num: 67463,
		isNonstandard: "Future",
	},
	fangclaw: {
		name: "Fangclaw",
		spritenum: 0,
		num: 67464,
		isNonstandard: "Future",
	},
	theberry: {
		name: "The Berry",
		spritenum: 0,
		num: 67465,
		isNonstandard: "Future",
	},
	banhammer: {
		name: "Banhammer",
		spritenum: 0,
		num: 67466,
		isNonstandard: "Future",
	},
	firewallarmor: {
		name: "Firewall Armor",
		spritenum: 0,
		num: 67467,
		isNonstandard: "Future",
	},
	virusbuster: {
		name: "Virus Buster",
		spritenum: 0,
		num: 67468,
		isNonstandard: "Future",
	},
	necronomicon: {
		name: "Necronomicon",
		spritenum: 0,
		num: 67469,
		isNonstandard: "Future",
	},
	superpaper: {
		name: "Super Paper",
		spritenum: 0,
		num: 67470,
		isNonstandard: "Future",
	},
	balletoutfit: {
		name: "Ballet Outfit",
		spritenum: 0,
		num: 67471,
		isNonstandard: "Future",
	},
	kaleidoscope: {
		name: "Kaleido Scope",
		spritenum: 0,
		num: 67472,
		isNonstandard: "Future",
	},
	limbershoes: {
		name: "Limber Shoes",
		spritenum: 0,
		num: 67473,
		isNonstandard: "Future",
	},
	coldpack: {
		name: "Cold Pack",
		spritenum: 0,
		num: 67474,
		isNonstandard: "Future",
	},
	santahat: {
		name: "Santa Hat",
		spritenum: 0,
		num: 67475,
		isNonstandard: "Future",
	},
	skyrimse: {
		name: "Skyrimse",
		spritenum: 0,
		num: 67476,
		isNonstandard: "Future",
	},
	weddingdress: {
		name: "Wedding Dress",
		spritenum: 0,
		num: 67477,
		isNonstandard: "Future",
	},
	bunnysuit: {
		name: "Bunny Suit",
		spritenum: 0,
		num: 67478,
		isNonstandard: "Future",
	},
	catears: {
		name: "Cat Ears",
		spritenum: 0,
		num: 67479,
		isNonstandard: "Future",
	},
	chaosemerald: {
		name: "Chaos Emerald",
		spritenum: 0,
		num: 67480,
		isNonstandard: "Future",
	},
};

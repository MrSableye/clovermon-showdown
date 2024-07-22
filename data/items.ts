export const Items: {[itemid: string]: ItemData} = {
	abilityshield: {
		name: "Ability Shield",
		spritenum: 746,
		fling: {
			basePower: 30,
		},
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	adamantcrystal: {
		name: "Adamant Crystal",
		spritenum: 741,
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
		rating: 1,
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
		rating: 1,
	},
	adrenalineorb: {
		name: "Adrenaline Orb",
		spritenum: 660,
		fling: {
			basePower: 30,
		},
		onAfterBoost(boost, target, source, effect) {
			// Adrenaline Orb activates if Intimidate is blocked by an ability like Hyper Cutter,
			// which deletes boost.atk,
			// but not if the holder's attack is already at -6 (or +6 if it has Contrary),
			// which sets boost.atk to 0
			if (target.boosts['spe'] === 6 || boost.atk === 0) {
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 0,
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
		rating: 3,
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
		rating: 1,
	},
	auspiciousarmor: {
		name: "Auspicious Armor",
		spritenum: 753,
		fling: {
			basePower: 30,
		},
		num: 2344,
		gen: 9,
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	beastball: {
		name: "Beast Ball",
		spritenum: 661,
		num: 851,
		gen: 7,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 2,
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
		rating: -1,
	},
	bignugget: {
		name: "Big Nugget",
		spritenum: 27,
		fling: {
			basePower: 130,
		},
		num: 581,
		gen: 5,
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
		rating: 0,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
	},
	boosterenergy: {
		name: "Booster Energy",
		spritenum: 745,
		fling: {
			basePower: 30,
		},
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
		rating: 1,
	},
	bottlecap: {
		name: "Bottle Cap",
		spritenum: 696,
		fling: {
			basePower: 30,
		},
		num: 795,
		gen: 7,
		rating: -1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
	},
	cherishball: {
		name: "Cherish Ball",
		spritenum: 64,
		num: 16,
		gen: 4,
		isPokeball: true,
		isNonstandard: "Unobtainable",
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	chippedpot: {
		name: "Chipped Pot",
		spritenum: 720,
		fling: {
			basePower: 80,
		},
		num: 1254,
		gen: 8,
		rating: -1,
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
		rating: 3,
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
		rating: 3,
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
		rating: 3,
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
		rating: 1,
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
		rating: -1,
	},
	clearamulet: {
		name: "Clear Amulet",
		spritenum: 747,
		fling: {
			basePower: 30,
		},
		onTryBoost(boost, target, source, effect) {
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	cornerstonemask: {
		name: "Cornerstone Mask",
		spritenum: 758,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.name.startsWith('Ogerpon-Cornerstone')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Cornerstone",
		itemUser: ["Ogerpon-Cornerstone"],
		num: 2406,
		gen: 9,
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
		rating: -1,
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
		rating: -1,
	},
	covertcloak: {
		name: "Covert Cloak",
		spritenum: 750,
		fling: {
			basePower: 30,
		},
		onModifySecondaries(secondaries) {
			this.debug('Covert Cloak prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		num: 1885,
		gen: 9,
		rating: 1,
	},
	crackedpot: {
		name: "Cracked Pot",
		spritenum: 719,
		fling: {
			basePower: 80,
		},
		num: 1253,
		gen: 8,
		rating: -1,
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
		rating: 1,
	},
	damprock: {
		name: "Damp Rock",
		spritenum: 88,
		fling: {
			basePower: 60,
		},
		num: 285,
		gen: 4,
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
	},
	dawnstone: {
		name: "Dawn Stone",
		spritenum: 92,
		fling: {
			basePower: 80,
		},
		num: 109,
		gen: 4,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 1,
	},
	diveball: {
		name: "Dive Ball",
		spritenum: 101,
		num: 7,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 2,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
	},
	dreamball: {
		name: "Dream Ball",
		spritenum: 111,
		num: 576,
		gen: 5,
		isPokeball: true,
		rating: -1,
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
		rating: -1,
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
		rating: -1,
	},
	duskball: {
		name: "Dusk Ball",
		spritenum: 115,
		num: 13,
		gen: 4,
		isPokeball: true,
		rating: -1,
	},
	duskstone: {
		name: "Dusk Stone",
		spritenum: 116,
		fling: {
			basePower: 80,
		},
		num: 108,
		gen: 4,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	ejectbutton: {
		name: "Eject Button",
		spritenum: 118,
		fling: {
			basePower: 30,
		},
		onAfterMoveSecondaryPriority: 2,
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && target.hp && move && move.category !== 'Status' && !move.flags['futuremove']) {
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
	},
	electricgem: {
		name: "Electric Gem",
		spritenum: 120,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Electric' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 550,
		gen: 5,
		isNonstandard: "Past",
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
	},
	eviolite: {
		name: "Eviolite",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'dipplin') {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe || pokemon.baseSpecies.id === 'dipplin') {
				return this.chainModify(1.5);
			}
		},
		num: 538,
		gen: 5,
		rating: 3,
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
		rating: 3,
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
		rating: 1,
	},
	fairyfeather: {
		name: "Fairy Feather",
		spritenum: 754,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fairy') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 2401,
		gen: 9,
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
		rating: 2,
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
		rating: 1,
	},
	fastball: {
		name: "Fast Ball",
		spritenum: 137,
		num: 492,
		gen: 2,
		isPokeball: true,
		rating: -1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 3,
	},
	firegem: {
		name: "Fire Gem",
		spritenum: 141,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Fire' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 548,
		gen: 5,
		isNonstandard: "Past",
		rating: 2,
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
		rating: 1,
	},
	firestone: {
		name: "Fire Stone",
		spritenum: 142,
		fling: {
			basePower: 30,
		},
		num: 82,
		gen: 1,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: -1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 3,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
	},
	friendball: {
		name: "Friend Ball",
		spritenum: 153,
		num: 497,
		gen: 2,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	goldbottlecap: {
		name: "Gold Bottle Cap",
		spritenum: 697,
		fling: {
			basePower: 30,
		},
		num: 796,
		gen: 7,
		rating: -1,
	},
	grassgem: {
		name: "Grass Gem",
		spritenum: 172,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Grass' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 551,
		gen: 5,
		isNonstandard: "Past",
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	greatball: {
		name: "Great Ball",
		spritenum: 174,
		num: 3,
		gen: 1,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	griseouscore: {
		name: "Griseous Core",
		spritenum: 743,
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
		rating: 1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	healball: {
		name: "Heal Ball",
		spritenum: 188,
		num: 14,
		gen: 4,
		isPokeball: true,
		rating: -1,
	},
	hearthflamemask: {
		name: "Hearthflame Mask",
		spritenum: 760,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.name.startsWith('Ogerpon-Hearthflame')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Hearthflame",
		itemUser: ["Ogerpon-Hearthflame"],
		num: 2408,
		gen: 9,
	},
	heatrock: {
		name: "Heat Rock",
		spritenum: 193,
		fling: {
			basePower: 60,
		},
		num: 284,
		gen: 4,
		rating: 1,
	},
	heavyball: {
		name: "Heavy Ball",
		spritenum: 194,
		num: 495,
		gen: 2,
		isPokeball: true,
		rating: -1,
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
		rating: 3,
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
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 2,
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
		rating: 1,
	},
	icestone: {
		name: "Ice Stone",
		spritenum: 693,
		fling: {
			basePower: 30,
		},
		num: 849,
		gen: 7,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	icyrock: {
		name: "Icy Rock",
		spritenum: 221,
		fling: {
			basePower: 40,
		},
		num: 282,
		gen: 4,
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 1,
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
		rating: 0,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	leafstone: {
		name: "Leaf Stone",
		spritenum: 241,
		fling: {
			basePower: 30,
		},
		num: 85,
		gen: 1,
		rating: -1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
	},
	levelball: {
		name: "Level Ball",
		spritenum: 246,
		num: 493,
		gen: 2,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
	},
	loadeddice: {
		name: "Loaded Dice",
		spritenum: 751,
		fling: {
			basePower: 30,
		},
		// partially implemented in sim/battle-actions.ts:BattleActions#hitStepMoveHitLoop
		onModifyMove(move) {
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		num: 1886,
		gen: 9,
		rating: 1,
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
		rating: 1,
	},
	loveball: {
		name: "Love Ball",
		spritenum: 258,
		num: 496,
		gen: 2,
		isPokeball: true,
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
	},
	lureball: {
		name: "Lure Ball",
		spritenum: 264,
		num: 494,
		gen: 2,
		isPokeball: true,
		rating: -1,
	},
	lustrousglobe: {
		name: "Lustrous Globe",
		spritenum: 742,
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
		rating: 1,
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
		rating: 1,
	},
	luxuryball: {
		name: "Luxury Ball",
		spritenum: 266,
		num: 11,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: 0,
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
		rating: -1,
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
		rating: 1,
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
		rating: 3,
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
		rating: -1,
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
		rating: 2,
	},
	maliciousarmor: {
		name: "Malicious Armor",
		spritenum: 744,
		fling: {
			basePower: 30,
		},
		num: 1861,
		gen: 9,
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	masterball: {
		name: "Master Ball",
		spritenum: 276,
		num: 1,
		gen: 1,
		isPokeball: true,
		rating: -1,
	},
	masterpieceteacup: {
		name: "Masterpiece Teacup",
		spritenum: 757,
		fling: {
			basePower: 80,
		},
		num: 2404,
		gen: 9,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	mirrorherb: {
		name: "Mirror Herb",
		spritenum: 748,
		fling: {
			basePower: 30,
		},
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
		rating: 1,
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
		rating: 1,
	},
	moonball: {
		name: "Moon Ball",
		spritenum: 294,
		num: 498,
		gen: 2,
		isPokeball: true,
		rating: -1,
	},
	moonstone: {
		name: "Moon Stone",
		spritenum: 295,
		fling: {
			basePower: 30,
		},
		num: 81,
		gen: 1,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
	},
	nestball: {
		name: "Nest Ball",
		spritenum: 303,
		num: 8,
		gen: 3,
		isPokeball: true,
		rating: -1,
	},
	netball: {
		name: "Net Ball",
		spritenum: 304,
		num: 6,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: -1,
	},
	normalgem: {
		name: "Normal Gem",
		spritenum: 307,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Normal' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 564,
		gen: 5,
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 0,
	},
	ovalstone: {
		name: "Oval Stone",
		spritenum: 321,
		fling: {
			basePower: 80,
		},
		num: 110,
		gen: 4,
		rating: -1,
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
		rating: -1,
	},
	parkball: {
		name: "Park Ball",
		spritenum: 325,
		num: 500,
		gen: 4,
		isPokeball: true,
		isNonstandard: "Unobtainable",
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
	},
	pokeball: {
		name: "Poke Ball",
		spritenum: 345,
		num: 4,
		gen: 1,
		isPokeball: true,
		rating: -1,
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
		rating: -1,
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
		rating: 0,
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
		rating: 0,
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
		rating: 0,
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
		rating: 0,
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
		rating: 3,
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
		rating: 0,
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
		rating: 0,
	},
	premierball: {
		name: "Premier Ball",
		spritenum: 363,
		num: 12,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	punchingglove: {
		name: "Punching Glove",
		spritenum: 749,
		fling: {
			basePower: 30,
		},
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
		rating: 1,
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
		rating: -1,
	},
	quickball: {
		name: "Quick Ball",
		spritenum: 372,
		num: 15,
		gen: 4,
		isPokeball: true,
		rating: -1,
	},
	quickclaw: {
		onFractionalPriorityPriority: -2,
		onFractionalPriority(priority, pokemon, target, move) {
			if (move.category === "Status" && pokemon.hasAbility("myceliummight")) return;
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
	},
	rarebone: {
		name: "Rare Bone",
		spritenum: 379,
		fling: {
			basePower: 100,
		},
		num: 106,
		gen: 4,
		rating: -1,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	repeatball: {
		name: "Repeat Ball",
		spritenum: 401,
		num: 9,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
	},
	safariball: {
		name: "Safari Ball",
		spritenum: 425,
		num: 5,
		gen: 1,
		isPokeball: true,
		isNonstandard: "Unobtainable",
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	shinystone: {
		name: "Shiny Stone",
		spritenum: 439,
		fling: {
			basePower: 80,
		},
		num: 107,
		gen: 4,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 2,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	smoothrock: {
		name: "Smooth Rock",
		spritenum: 453,
		fling: {
			basePower: 10,
		},
		num: 283,
		gen: 4,
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	sportball: {
		name: "Sport Ball",
		spritenum: 465,
		num: 499,
		gen: 2,
		isPokeball: true,
		isNonstandard: "Unobtainable",
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 2,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	strangeball: {
		name: "Strange Ball",
		spritenum: 308,
		num: 1785,
		gen: 8,
		isPokeball: true,
		isNonstandard: "Unobtainable",
		rating: -1,
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
		rating: -1,
	},
	sunstone: {
		name: "Sun Stone",
		spritenum: 480,
		fling: {
			basePower: 30,
		},
		num: 80,
		gen: 2,
		rating: -1,
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
		rating: 1,
	},
	sweetapple: {
		name: "Sweet Apple",
		spritenum: 711,
		fling: {
			basePower: 30,
		},
		num: 1116,
		gen: 8,
		rating: -1,
	},
	syrupyapple: {
		name: "Syrupy Apple",
		spritenum: 755,
		fling: {
			basePower: 30,
		},
		num: 2402,
		gen: 9,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	tartapple: {
		name: "Tart Apple",
		spritenum: 712,
		fling: {
			basePower: 30,
		},
		num: 1117,
		gen: 8,
		rating: -1,
	},
	terrainextender: {
		name: "Terrain Extender",
		spritenum: 662,
		fling: {
			basePower: 60,
		},
		num: 879,
		gen: 7,
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	thunderstone: {
		name: "Thunder Stone",
		spritenum: 492,
		fling: {
			basePower: 30,
		},
		num: 83,
		gen: 1,
		rating: -1,
	},
	timerball: {
		name: "Timer Ball",
		spritenum: 494,
		num: 10,
		gen: 3,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	ultraball: {
		name: "Ultra Ball",
		spritenum: 521,
		num: 2,
		gen: 1,
		isPokeball: true,
		rating: -1,
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
		rating: 1,
	},
	unremarkableteacup: {
		name: "Unremarkable Teacup",
		spritenum: 756,
		fling: {
			basePower: 80,
		},
		num: 2403,
		gen: 9,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	watergem: {
		name: "Water Gem",
		spritenum: 528,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.flags['pledgecombo']) return;
			if (move.type === 'Water' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 549,
		gen: 5,
		isNonstandard: "Past",
		rating: 2,
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
		rating: 1,
	},
	waterstone: {
		name: "Water Stone",
		spritenum: 529,
		fling: {
			basePower: 30,
		},
		num: 84,
		gen: 1,
		rating: -1,
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
		rating: 1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
	},
	wellspringmask: {
		name: "Wellspring Mask",
		spritenum: 759,
		fling: {
			basePower: 60,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (user.baseSpecies.name.startsWith('Ogerpon-Wellspring')) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ogerpon') return false;
			return true;
		},
		forcedForme: "Ogerpon-Wellspring",
		itemUser: ["Ogerpon-Wellspring"],
		num: 2407,
		gen: 9,
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
		rating: -1,
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
		rating: -1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 3,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 0,
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
		rating: 0,
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
		rating: 1,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 0,
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
		rating: 0,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	berserkmeme: {
		name: "Berserk Meme",
		spritenum: 388,
		onTakeItem: false,
		onStart(pokemon) {
			pokemon.setType('???', false, pokemon, this.effect);
			this.add('-start', pokemon, 'typechange', '???');
		},
		onModifyMove(move, pokemon) {
			if (pokemon.species.name !== 'Memenace') return;
			if (move.id === 'meme') {
				move.basePower = 90;
			}
		},
		itemUser: ["Memenace"],
		isNonstandard: "Future",
	},
	anitem: {
		name: "An Item",
		spritenum: 750,
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === '???') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		isNonstandard: "Future",
		rating: 1,
	},
	aberry: {
		name: "A Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Normal",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (
				move.type === '???' &&
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
		rating: 1,
		isNonstandard: "Future",
	},
	firering: {
		name: "Fire Ring",
		spritenum: 410,
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			this.add('-immune', target, '[from] ability: Comatose');
			return false;
		},
		isNonstandard: "Future",
	},
	skillguard: {
		name: "Skill Guard",
		spritenum: 746,
		ignoreKlutz: true,
		onSetAbility(ability, target, source, effect) {
			if (target === source) return;
			this.add('-block', target, 'item: Skill Guard');
			return null;
		},
		onTypeChange(typeChange, target, source, effect) {
			if (target === source) return;
			this.add('-block', target, 'item: Skill Guard');
			return false;
		},
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	crimsonlens: {
		name: "Crimson Lens",
		spritenum: 93,
		fling: {
			basePower: 30,
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Winkhulu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Winkhulu"],
		isNonstandard: "Past",
		rating: 1,
	},
	cursedfang: {
		name: "Cursed Fang",
		spritenum: 94,
		fling: {
			basePower: 90,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.name === 'Winkhulu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Winkhulu"],
		isNonstandard: "Past",
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	mariopartite: {
		name: "Mariopartite",
		spritenum: 596,
		megaStone: "Blobbos-Mario Party-Mega",
		megaEvolves: "Blobbos-Mario Party",
		itemUser: ["Blobbos-Mario Party"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1,
		gen: 8,
		isNonstandard: "Future",
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	loadeddisk: {
		name: "Loaded Disk",
		spritenum: 730,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.species.name === 'Blobbos-Spamton') {
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Blobbos-Spamton"],
		isNonstandard: "Future",
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	licensetosellhotdogs: {
		name: "License to Sell Hotdogs",
		spritenum: 609,
		fling: {
			basePower: 5185550170,
		},
		itemUser: ["Blobbos-Snek", "Blobbos-Angel"],
		isNonstandard: "Future",
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	partnerspendant: {
		name: "Partner's Pendant",
		spritenum: 300,
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onStart(pokemon) {
			if (pokemon.species.name !== 'Blobbos-Partner') return;
			this.boost({
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1,
				evasion: 1,
				accuracy: 1,
			});
		},
		num: 2512,
		isNonstandard: "Future",
		rating: 1,
	},
	ultrafuckiumz: {
		name: "Ultrafuckium Z",
		spritenum: 687,
		onTakeItem: false,
		zMove: "Move That Fucks Yourself",
		zMoveFrom: "Rocket Punch",
		itemUser: ["Fucker-Ultra"],
		isNonstandard: "Future",
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	midnightsnack: {
		name: "Midnight Snack",
		spritenum: 242,
		isNonstandard: "Future",
		onResidual(pokemon) {
			if (pokemon.status !== 'slp') return;
			this.heal(pokemon.baseMaxhp / 8);
		},
		rating: 1,
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
		rating: 1,
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
		rating: 1,
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
		rating: 1,
	},
	queensrock: {
		name: "Queen's Rock",
		spritenum: 236,
		fling: {
			basePower: 30,
			volatileStatus: 'attract',
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'attract') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'attract',
				});
			}
		},
		num: -69420221,
		isNonstandard: "Future",
		gen: 8,
		rating: 1,
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
		rating: 1,
	},
	servicerendered: {
		name: "Service Rendered",
		isNonstandard: "Future",
		onResidual(pokemon) {
			if (pokemon.volatiles['commanding'] || pokemon.volatiles['commanded']) return;
			if (!pokemon.moveThisTurn || !pokemon.moveThisTurnResult || typeof pokemon.moveThisTurn === 'boolean') return;
			const buffMoves = ['maplewarrior', 'combatorders', 'haste', 'sharpeyes'];
			if (buffMoves.includes(pokemon.moveThisTurn) && pokemon.useItem()) {
				pokemon.switchFlag = true;
			}
		},
		rating: 1,
	},
	autobuffskill: {
		name: "Auto Buff Skill",
		isNonstandard: "Future",
		onAfterMoveSecondarySelf(source, target, move) {
			const buffMoves = ['maplewarrior', 'combatorders', 'haste', 'sharpeyes'];
			if (!buffMoves.includes(move.id)) return;
			if (source.useItem()) {
				const movesToUse = source.moveSlots.filter((moveSlot) => buffMoves.includes(moveSlot.id) && (moveSlot.id !== move.id));
				movesToUse.forEach((moveToUse) => {
					this.actions.useMove(moveToUse.id, source, target);
				});
			}
		},
		rating: 1,
	},
	choicechoice: {
		name: "Choice Choice",
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
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (this.effectState.mode !== 'atk') return;
			if (pokemon.volatiles['dynamax']) return;
			this.effectState.mode = 'atk';
			return this.chainModify(1.5);
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (this.effectState.mode !== 'spa') return;
			if (pokemon.volatiles['dynamax']) return;
			this.effectState.mode = 'spa';
			return this.chainModify(1.5);
		},
		isChoice: true,
		isNonstandard: "Future",
	},
	mesosack: {
		name: "Meso Sack",
		isNonstandard: "Future",
		rating: 1,
	},
	radishorb: {
		name: "Radish Orb",
		spritenum: 530,
		fling: {
			basePower: 30,
			status: 'radish',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('radish', pokemon);
		},
		isNonstandard: "Future",
		rating: 1,
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
		rating: 1,
	},
	splashsword: {
		name: "Splash Sword",
		spritenum: 698,
		onTakeItem(item, pokemon, source) {
			if (pokemon.species.name === 'Blobbos-Mech') {
				return false;
			}
			return true;
		},
		onDrive: 'Water',
		forcedForme: "Blobbos-Mech-Water",
		itemUser: ["Blobbos-Mech-Water"],
		num: 116,
		isNonstandard: "Future",
		rating: 1,
	},
	flamesword: {
		name: "Flame Sword",
		spritenum: 698,
		onTakeItem(item, pokemon, source) {
			if (pokemon.species.name === 'Blobbos-Mech') {
				return false;
			}
			return true;
		},
		onDrive: 'Fire',
		forcedForme: "Blobbos-Mech-Fire",
		itemUser: ["Blobbos-Mech-Fire"],
		num: 116,
		isNonstandard: "Future",
		rating: 1,
	},
	frostsword: {
		name: "Frost Sword",
		spritenum: 698,
		onTakeItem(item, pokemon, source) {
			if (pokemon.species.name === 'Blobbos-Mech') {
				return false;
			}
			return true;
		},
		onDrive: 'Ice',
		forcedForme: "Blobbos-Mech-Ice",
		itemUser: ["Blobbos-Mech-Ice"],
		num: 116,
		isNonstandard: "Future",
		rating: 1,
	},
	sparksword: {
		name: "Spark Sword",
		spritenum: 698,
		onTakeItem(item, pokemon, source) {
			if (pokemon.species.name === 'Blobbos-Mech') {
				return false;
			}
			return true;
		},
		onDrive: 'Electric',
		forcedForme: "Blobbos-Mech-Electric",
		itemUser: ["Blobbos-Mech-Electric"],
		num: 116,
		isNonstandard: "Future",
		rating: 1,
	},
	powerrush: {
		name: "Power Rush",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.id !== 'blobbospaper') return;
			if (pokemon.hp <= pokemon.maxhp / 4) {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.id !== 'blobbospaper') return;
			if (pokemon.hp <= pokemon.maxhp / 4) {
				return this.chainModify(2);
			}
		},
		onTakeItem(item, source) {
			return source.species.id !== 'blobbospaper';
		},
		isNonstandard: "Future",
		itemUser: ["Blobbos-Paper"],
		rating: 1,
	},
	tumultuoustibia: {
		name: "Tumultuous Tibia",
		spritenum: 379,
		fling: {
			basePower: 50,
			volatileStatus: 'curse',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Blobbos-Skeleton') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Skeleton"],
		isNonstandard: "Future",
		rating: 1,
	}, 
	usbdrive: {
		name: "USB Drive",
		spritenum: 103,
		fling: {
			basePower: 73,
			volatileStatus: 'par',
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Blobbos-Idiot') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Idiot"], 
		num: 2512,
		isNonstandard: "Future",
		rating: 1,
	},
	mascotsorb: {
		name: "Mascot's Orb",
		spritenum: 251,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.species.name === 'Blobbos-Pika') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.species.name === 'Blobbos-Pika') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Blobbos-Pika"],
		num: 236,
		isNonstandard: "Future",
		rating: 1,
	},
	kapala: {
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (pokemon.species.id !== 'blobbosspelunky') return;
			if (move.totalDamage) {
				this.heal(move.totalDamage / 2, pokemon);
			}
		},
		itemUser: ["Blobbos-Spelunky"],
		name: "Kapala",
		isNonstandard: "Future",
	},
	eyedropper: {
		name: "Eye Dropper",
		onStart(pokemon) {
			if (pokemon.species.name !== 'Blobbos-Chroma') return;
			const typeTotals: Record<string, number> = {};
			for (const ally of pokemon.side.pokemon) {
				if (pokemon === ally) continue;
				for (const type of ally.getTypes()) {
					if (!typeTotals[type]) typeTotals[type] = 0;
					typeTotals[type]++;
				}
			}
			const primaryType = Object.entries(typeTotals).sort((a, b) => b[1] - a[1])[0];
			if (!primaryType) return;
			const enemyTypes: Record<string, number> = {};
			for (const foe of pokemon.foes()) {
				for (const type of foe.getTypes()) {
					enemyTypes[type] = 0;
				}
			}
			let maxResists = -1;
			let maxResistedType = '';
			for (const type of this.dex.types.all()) {
				if (type.name === primaryType[0]) continue; // Always get a secondary type
				let totalResists = 0;
				for (const [enemyType] of Object.entries(enemyTypes)) {
					if (!this.dex.getImmunity(enemyType, [primaryType[0], type.name])) {
						totalResists += 1.5;
					} else if (this.dex.getEffectiveness(enemyType, [primaryType[0], type.name]) < 0) {
						totalResists++;
					}
				}
				if (totalResists > maxResists) {
					maxResists = totalResists;
					maxResistedType = type.name;
				}
			}
			const types = [primaryType[0]];
			if (maxResistedType.length) {
				types.push(maxResistedType);
			}

			if (!pokemon.setType(types)) return;
			this.add('-start', pokemon, 'typechange', types.join('/'), '[from] item: Eye Dropper');
		},
		onTakeItem: false,
		isNonstandard: "Future",
		itemUser: ["Blobbos-Chroma"],
	},
	glalite: {
		name: "Glalite",
		spritenum: 0,
		num: 66661,
		isNonstandard: "Future",
		rating: 1,
	},
	avalugite: {
		name: "Avalugite",
		spritenum: 0,
		num: 66662,
		isNonstandard: "Future",
		rating: 1,
	},
	butterfrite: {
		name: "Butterfrite",
		spritenum: 0,
		num: 66663,
		isNonstandard: "Future",
		rating: 1,
	},
	rubberflite: {
		name: "Rubberflite",
		spritenum: 0,
		num: 66664,
		isNonstandard: "Future",
		rating: 1,
	},
	haicawite: {
		name: "Haicawite",
		spritenum: 0,
		num: 66665,
		isNonstandard: "Future",
		rating: 1,
	},
	shattaratite: {
		name: "Shattaratite",
		spritenum: 0,
		num: 66666,
		isNonstandard: "Future",
		rating: 1,
	},
	grasstaclite: {
		name: "Grasstaclite",
		spritenum: 0,
		num: 66667,
		isNonstandard: "Future",
		rating: 1,
	},
	chillzite: {
		name: "Chillzite",
		spritenum: 0,
		num: 66668,
		isNonstandard: "Future",
		rating: 1,
	},
	lunightonite: {
		name: "Lunightonite",
		spritenum: 0,
		num: 66669,
		isNonstandard: "Future",
		rating: 1,
	},
	vanilluxite: {
		name: "Vanilluxite",
		spritenum: 0,
		num: 66670,
		isNonstandard: "Future",
		rating: 1,
	},
	blizzlamite: {
		name: "Blizzlamite",
		spritenum: 0,
		num: 66671,
		isNonstandard: "Future",
		rating: 1,
	},
	synthitite: {
		name: "Synthitite",
		spritenum: 0,
		num: 66672,
		isNonstandard: "Future",
		rating: 1,
	},
	chokolite: {
		name: "Chokolite",
		spritenum: 0,
		num: 66673,
		isNonstandard: "Future",
		rating: 1,
	},
	mouseeite: {
		name: "Mouseeite",
		spritenum: 0,
		num: 66674,
		isNonstandard: "Future",
		rating: 1,
	},
	hoverite: {
		name: "Hoverite",
		spritenum: 0,
		num: 66675,
		isNonstandard: "Future",
		rating: 1,
	},
	naminite: {
		name: "Naminite",
		spritenum: 0,
		num: 66676,
		isNonstandard: "Future",
		rating: 1,
	},
	solaiossite: {
		name: "Solaiossite",
		spritenum: 0,
		num: 66677,
		isNonstandard: "Future",
		rating: 1,
	},
	goralite: {
		name: "Goralite",
		spritenum: 0,
		num: 66678,
		isNonstandard: "Future",
		rating: 1,
	},
	neutralite: {
		name: "Neutralite",
		spritenum: 0,
		num: 66679,
		isNonstandard: "Future",
		rating: 1,
	},
	drumgite: {
		name: "Drumgite",
		spritenum: 0,
		num: 66680,
		isNonstandard: "Future",
		rating: 1,
	},
	godzillusite: {
		name: "Godzillusite",
		spritenum: 0,
		num: 66681,
		isNonstandard: "Future",
		rating: 1,
	},
	muchoshotite: {
		name: "Muchoshotite",
		spritenum: 0,
		num: 66682,
		isNonstandard: "Future",
		rating: 1,
	},
	miracactite: {
		name: "Miracactite",
		spritenum: 0,
		num: 66683,
		isNonstandard: "Future",
		rating: 1,
	},
	hitmonite: {
		name: "Hitmonite",
		spritenum: 0,
		num: 66684,
		isNonstandard: "Future",
		rating: 1,
	},
	snowfistnite: {
		name: "Snowfistnite",
		spritenum: 0,
		num: 66685,
		isNonstandard: "Future",
		rating: 1,
	},
	capsilite: {
		name: "Capsilite",
		spritenum: 0,
		num: 66686,
		isNonstandard: "Future",
		rating: 1,
	},
	torkoalite: {
		name: "Torkoalite",
		spritenum: 0,
		num: 66692,
		isNonstandard: "Future",
		rating: 1,
	},
	comistorite: {
		name: "Comistorite",
		spritenum: 0,
		num: 66694,
		isNonstandard: "Future",
		rating: 1,
	},
	heruptite: {
		name: "Heruptite",
		spritenum: 0,
		num: 66695,
		isNonstandard: "Future",
		rating: 1,
	},
	otyashite: {
		name: "Otyashite",
		spritenum: 0,
		num: 66696,
		isNonstandard: "Future",
		rating: 1,
	},
	buglitchite: {
		name: "Buglitchite",
		spritenum: 0,
		num: 66697,
		isNonstandard: "Future",
		rating: 1,
	},
	bauminite: {
		name: "Bauminite",
		spritenum: 0,
		num: 66698,
		isNonstandard: "Future",
		rating: 1,
	},
	log: {
		name: "Log",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Wood') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66704,
		isNonstandard: "Future",
		rating: 1,
	},
	steamer: {
		name: "Steamer",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steam') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66705,
		isNonstandard: "Future",
		rating: 1,
	},
	mysticmagma: {
		name: "Mystic Magma",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Magma') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66706,
		isNonstandard: "Future",
		rating: 1,
	},
	gear: {
		name: "Gear",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Tech') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66707,
		isNonstandard: "Future",
		rating: 1,
	},
	ancientorb: {
		name: "Ancient Orb",
		spritenum: 0,
		num: 66708,
		isNonstandard: "Future",
		rating: 1,
	},
	kite: {
		name: "Kite",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Wind') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66709,
		isNonstandard: "Future",
		rating: 1,
	},
	magicwand: {
		name: "Magic Wand",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Magic') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66710,
		isNonstandard: "Future",
		rating: 1,
	},
	prism: {
		name: "Prism",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Light') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66711,
		isNonstandard: "Future",
		rating: 1,
	},
	fluffycoat: {
		name: "Fluffy Coat",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (move && move.type === 'Ice') {
				this.debug('Fluffycoat weaken');
				return this.chainModify(0.65);
			}
		},
		num: 66712,
		isNonstandard: "Future",
		rating: 1,
	},
	ancienthelm: {
		name: "Ancient Helm",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (
				move && (user.baseSpecies.baseSpecies === 'Bushin' || user.baseSpecies.baseSpecies === 'Bushidon') &&
				(move.type === 'Zombie' || move.type === 'Steel' || move.type === 'Fighting')
			) {
				this.debug('Ancient Helm boost');
				return this.chainModify([5324, 4096]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (
				move && (target.baseSpecies.baseSpecies === 'Bushin' || target.baseSpecies.baseSpecies === 'Bushidon') &&
				(move.type === 'Zombie' || move.type === 'Steel' || move.type === 'Fighting')
			) {
				this.debug('Ancient Helm weaken');
				return this.chainModify(0.5);
			}
		},
		itemUser: ["Bushin", "Bushidon"],
		num: 66713,
		isNonstandard: "Future",
		rating: 1,
	},
	seaweed: {
		name: "Seaweed",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (
				move && (user.baseSpecies.baseSpecies === 'Sushish' || user.baseSpecies.baseSpecies === 'Sashumish' ||
					user.baseSpecies.baseSpecies === 'Onigi' || user.baseSpecies.baseSpecies === 'Onigirice') &&
				(move.type === 'Food' || move.type === 'Water' || move.type === 'Grass')
			) {
				this.debug('Seaweed boost');
				return this.chainModify([5324, 4096]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (
				move && (target.baseSpecies.baseSpecies === 'Sushish' || target.baseSpecies.baseSpecies === 'Sashumish' ||
				target.baseSpecies.baseSpecies === 'Onigi' || target.baseSpecies.baseSpecies === 'Onigirice') &&
				(move.type === 'Food' || move.type === 'Water' || move.type === 'Grass')
			) {
				this.debug('Seaweed weaken');
				return this.chainModify(0.5);
			}
		},
		itemUser: ["Sushish", "Sashumish", "Onigi", "Onigirice"],
		num: 66714,
		isNonstandard: "Future",
		rating: 1,
	},
	drubberite: {
		name: "Drubberite",
		spritenum: 0,
		num: 66715,
		isNonstandard: "Future",
		rating: 1,
	},
	neonazite: {
		name: "Neonazite",
		spritenum: 0,
		num: 66716,
		isNonstandard: "Future",
		rating: 1,
	},
	chairite: {
		name: "Chairite",
		spritenum: 0,
		num: 66717,
		isNonstandard: "Future",
		rating: 1,
	},
	pikachite: {
		name: "Pikachite",
		spritenum: 0,
		num: 66718,
		isNonstandard: "Future",
		rating: 1,
	},
	socialite: {
		name: "Socialite",
		spritenum: 0,
		num: 66719,
		isNonstandard: "Future",
		rating: 1,
	},
	arbroodite: {
		name: "Arbroodite",
		spritenum: 0,
		num: 66720,
		isNonstandard: "Future",
		rating: 1,
	},
	steamboatite: {
		name: "Steamboatite",
		spritenum: 0,
		num: 66721,
		isNonstandard: "Future",
		rating: 1,
	},
	lavagunite: {
		name: "Lavagunite",
		spritenum: 0,
		num: 66722,
		isNonstandard: "Future",
		rating: 1,
	},
	gachambite: {
		name: "Gachambite",
		spritenum: 0,
		num: 66723,
		isNonstandard: "Future",
		rating: 1,
	},
	gummite: {
		name: "Gummite",
		spritenum: 0,
		num: 66724,
		isNonstandard: "Future",
		rating: 1,
	},
	houndoomite: {
		name: "Houndoomite",
		spritenum: 0,
		num: 66725,
		isNonstandard: "Future",
		rating: 1,
	},
	gigasvyrite: {
		name: "Gigasvyrite",
		spritenum: 0,
		num: 66726,
		isNonstandard: "Future",
		rating: 1,
	},
	corruptorb: {
		name: "Corrupt Orb",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem()) {
				pokemon.useItem();
			}
		},
		boosts: {
			atk: 1,
			spa: 1,
			def: 1,
			spd: 1,
			spe: 1,
		},
		num: 66727,
		isNonstandard: "Future",
		rating: 4,
	},
	cummunculite: {
		name: "Cummunculite",
		spritenum: 0,
		num: 66728,
		isNonstandard: "Future",
		rating: 1,
	},
	mladite: {
		name: "Mladite",
		spritenum: 0,
		num: 66741,
		isNonstandard: "Future",
		rating: 1,
	},
	pinnistite: {
		name: "Pinnistite",
		spritenum: 0,
		num: 66742,
		isNonstandard: "Future",
		rating: 1,
	},
	rootspookite: {
		name: "Rootspookite",
		spritenum: 0,
		num: 66743,
		isNonstandard: "Future",
		rating: 1,
	},
	malwormite: {
		name: "Malwormite",
		spritenum: 0,
		num: 66744,
		isNonstandard: "Future",
		rating: 1,
	},
	delite: {
		name: "Delite",
		spritenum: 0,
		num: 66745,
		isNonstandard: "Future",
		rating: 1,
	},
	panthannonite: {
		name: "Panthannonite",
		spritenum: 0,
		num: 66748,
		isNonstandard: "Future",
		rating: 1,
	},
	gourgeistite: {
		name: "Gourgeistite",
		spritenum: 0,
		num: 66768,
		isNonstandard: "Future",
		rating: 1,
	},
	lavaplate: {
		name: "Lava Plate",
		spritenum: 0,
		onPlate: 'Magma',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Magma') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Magma",
		num: 66773,
		isNonstandard: "Future",
		rating: 1,
	},
	vaporplate: {
		name: "Vapor Plate",
		spritenum: 0,
		onPlate: 'Steam',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steam') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Steam",
		num: 66774,
		isNonstandard: "Future",
		rating: 1,
	},
	lumberplate: {
		name: "Lumber Plate",
		spritenum: 0,
		onPlate: 'Wood',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Wood') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Wood",
		num: 66775,
		isNonstandard: "Future",
		rating: 1,
	},
	angelplate: {
		name: "Angel Plate",
		spritenum: 0,
		onPlate: 'Divine',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Divine') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Divine",
		num: 66776,
		isNonstandard: "Future",
		rating: 1,
	},
	demonicplate: {
		name: "Demonic Plate",
		spritenum: 0,
		onPlate: 'Chaos',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Chaos') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Chaos",
		num: 66777,
		isNonstandard: "Future",
		rating: 1,
	},
	paperplate: {
		name: "Paper Plate",
		spritenum: 0,
		onPlate: 'Paper',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Paper') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Paper",
		num: 66778,
		isNonstandard: "Future",
		rating: 1,
	},
	lusterplate: {
		name: "Luster Plate",
		spritenum: 0,
		onPlate: 'Light',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Light') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Light",
		num: 66779,
		isNonstandard: "Future",
		rating: 1,
	},
	tornadoplate: {
		name: "Tornado Plate",
		spritenum: 0,
		onPlate: 'Wind',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Wind') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Wind",
		num: 66780,
		isNonstandard: "Future",
		rating: 1,
	},
	arcaneplate: {
		name: "Arcane Plate",
		spritenum: 0,
		onPlate: 'Magic',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Magic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Magic",
		num: 66781,
		isNonstandard: "Future",
		rating: 1,
	},
	machineplate: {
		name: "Machine Plate",
		spritenum: 0,
		onPlate: 'Tech',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Tech') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Tech",
		num: 66782,
		isNonstandard: "Future",
		rating: 1,
	},
	elasticplate: {
		name: "Elastic Plate",
		spritenum: 0,
		onPlate: 'Rubber',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Rubber') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Rubber",
		num: 66783,
		isNonstandard: "Future",
		rating: 1,
	},
	phobiaplate: {
		name: "Phobia Plate",
		spritenum: 0,
		onPlate: 'Fear',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Fear') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fear",
		num: 66784,
		isNonstandard: "Future",
		rating: 1,
	},
	spaceplate: {
		name: "Space Plate",
		spritenum: 0,
		onPlate: 'Cosmic',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Cosmic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Cosmic",
		num: 66785,
		isNonstandard: "Future",
		rating: 1,
	},
	sonarplate: {
		name: "Sonarplate",
		spritenum: 0,
		onPlate: 'Sound',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Sound') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Sound",
		num: 66786,
		isNonstandard: "Future",
		rating: 1,
	},
	gourmetplate: {
		name: "Gourmetplate",
		spritenum: 0,
		onPlate: 'Food',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Food') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Food",
		num: 66787,
		isNonstandard: "Future",
		rating: 1,
	},
	undeadplate: {
		name: "Undead Plate",
		spritenum: 0,
		onPlate: 'Zombie',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Zombie') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Zombie",
		num: 66788,
		isNonstandard: "Future",
		rating: 1,
	},
	radiationplate: {
		name: "Radiation Plate",
		spritenum: 0,
		onPlate: 'Nuclear',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Nuclear') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Nuclear",
		num: 66789,
		isNonstandard: "Future",
		rating: 1,
	},
	infectionplate: {
		name: "Infection Plate",
		spritenum: 0,
		onPlate: 'Virus',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Virus') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Virus",
		num: 66790,
		isNonstandard: "Future",
		rating: 1,
	},
	digitalplate: {
		name: "Digital Plate",
		spritenum: 0,
		onPlate: 'Cyber',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Cyber') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Cyber",
		num: 66791,
		isNonstandard: "Future",
		rating: 1,
	},
	glassplate: {
		name: "Glass Plate",
		spritenum: 0,
		onPlate: 'Glass',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Glass') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Glass",
		num: 66792,
		isNonstandard: "Future",
		rating: 1,
	},
	plasticplate: {
		name: "Plastic Plate",
		spritenum: 0,
		onPlate: 'Plastic',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Plastic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Plastic",
		num: 66793,
		isNonstandard: "Future",
		rating: 1,
	},
	carpetplate: {
		name: "Carpetplate",
		spritenum: 0,
		onPlate: 'Fabric',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Fabric') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Fabric",
		num: 66794,
		isNonstandard: "Future",
		rating: 1,
	},
	agesplate: {
		name: "Ages Plate",
		spritenum: 0,
		onPlate: 'Time',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Time') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Time",
		num: 66795,
		isNonstandard: "Future",
		rating: 1,
	},
	artplate: {
		name: "Art Plate",
		spritenum: 0,
		onPlate: 'Paint',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Paint') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Paint",
		num: 66796,
		isNonstandard: "Future",
		rating: 1,
	},
	crystalplate: {
		name: "Crystal Plate",
		spritenum: 0,
		onPlate: 'Crystal',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Crystal') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Crystal",
		num: 66797,
		isNonstandard: "Future",
		rating: 1,
	},
	infoplate: {
		name: "Info Plate",
		spritenum: 0,
		onPlate: 'Meme',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Meme') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Meme",
		num: 66798,
		isNonstandard: "Future",
		rating: 1,
	},
	ichorplate: {
		name: "Ichor Plate",
		spritenum: 0,
		onPlate: 'Blood',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Blood') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Blood",
		num: 66799,
		isNonstandard: "Future",
		rating: 1,
	},
	fatplate: {
		name: "Fat Plate",
		spritenum: 0,
		onPlate: 'Greasy',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Greasy') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Greasy",
		num: 66800,
		isNonstandard: "Future",
		rating: 1,
	},
	emotionplate: {
		name: "Emotion Plate",
		spritenum: 0,
		onPlate: 'Heart',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Heart') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Heart",
		num: 66801,
		isNonstandard: "Future",
		rating: 1,
	},
	page: {
		name: "Page",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Paper') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66806,
		isNonstandard: "Future",
		rating: 1,
	},
	rubberglove: {
		name: "Rubber Glove",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rubber') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66807,
		isNonstandard: "Future",
		rating: 1,
	},
	spookymask: {
		name: "Spooky Mask",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fear') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66808,
		isNonstandard: "Future",
		rating: 1,
	},
	telescope: {
		name: "Telescope",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Cosmic') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66809,
		isNonstandard: "Future",
		rating: 1,
	},
	speaker: {
		name: "Speaker",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Sound') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66810,
		isNonstandard: "Future",
		rating: 1,
	},
	sauce: {
		name: "Sauce",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Food') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66811,
		isNonstandard: "Future",
		rating: 1,
	},
	brains: {
		name: "Brains",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Zombie') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66812,
		isNonstandard: "Future",
		rating: 1,
	},
	uranium: {
		name: "Uranium",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Nuclear') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66813,
		isNonstandard: "Future",
		rating: 1,
	},
	motherboard: {
		name: "Motherboard",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Cyber') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66814,
		isNonstandard: "Future",
		rating: 1,
	},
	optimizerpro: {
		name: "Optimizer Pro",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Virus') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66815,
		isNonstandard: "Future",
		rating: 1,
	},
	glasspiece: {
		name: "Glass Piece",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Glass') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66816,
		isNonstandard: "Future",
		rating: 1,
	},
	plasticpiece: {
		name: "Plastic Piece",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Plastic') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66817,
		isNonstandard: "Future",
		rating: 1,
	},
	carpet: {
		name: "Carpet",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fabric') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66818,
		isNonstandard: "Future",
		rating: 1,
	},
	holycross: {
		name: "Holy Cross",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Divine') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66819,
		isNonstandard: "Future",
		rating: 1,
	},
	stopwatch: {
		name: "Stopwatch",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Time') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 66820,
		isNonstandard: "Future",
		rating: 1,
	},
	primeapite: {
		name: "Primeapite",
		spritenum: 0,
		num: 66822,
		isNonstandard: "Future",
		rating: 1,
	},
	teskarite: {
		name: "Teskarite",
		spritenum: 0,
		num: 66823,
		isNonstandard: "Future",
		rating: 1,
	},
	hypnite: {
		name: "Hypnite",
		spritenum: 0,
		num: 66824,
		isNonstandard: "Future",
		rating: 1,
	},
	onionplate: {
		name: "Onion Plate",
		spritenum: 0,
		onPlate: 'Ogre',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ogre') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Ogre",
		num: 66831,
		isNonstandard: "Future",
		rating: 1,
	},
	facarvite: {
		name: "Facarvite",
		spritenum: 0,
		num: 66832,
		isNonstandard: "Future",
		rating: 1,
	},
	saplomite: {
		name: "Saplomite",
		spritenum: 0,
		num: 66833,
		isNonstandard: "Future",
		rating: 1,
	},
	absorspongite: {
		name: "Absorspongite",
		spritenum: 0,
		num: 66834,
		isNonstandard: "Future",
		rating: 1,
	},
	serperiorite: {
		name: "Serperiorite",
		spritenum: 0,
		num: 66837,
		isNonstandard: "Future",
		rating: 1,
	},
	emboarite: {
		name: "Emboarite",
		spritenum: 0,
		num: 66838,
		isNonstandard: "Future",
		rating: 1,
	},
	samurottite: {
		name: "Samurottite",
		spritenum: 0,
		num: 66839,
		isNonstandard: "Future",
		rating: 1,
	},
	empoleonite: {
		name: "Empoleonite",
		spritenum: 0,
		num: 66865,
		isNonstandard: "Future",
		rating: 1,
	},
	infernapite: {
		name: "Infernapite",
		spritenum: 0,
		num: 66866,
		isNonstandard: "Future",
		rating: 1,
	},
	torterrite: {
		name: "Torterrite",
		spritenum: 0,
		num: 66867,
		isNonstandard: "Future",
		rating: 1,
	},
	dominatrixoutfit: {
		name: "Dominatrix Outfit",
		spritenum: 0,
		onModifyCritRatio(critRatio, source, target) {
			if (source.gender && target.gender && !target.volatiles['attract']) {
				if (source.gender !== target.gender) {
					this.debug('Dominatrix Outfit boost');
					return critRatio + 2;
				}
			}
		},
		num: 66869,
		isNonstandard: "Future",
		rating: 1,
	},
	frillydress: { // TODO: Add Full Moon interaction
		name: "Frilly Dress",
		spritenum: 0,
		onStart(source) {
			if (source.baseSpecies.baseSpecies === 'Kawaidesha') {
				this.field.setWeather('Midnight');
			}
		},
		itemUser: ['Kawaidesha'],
		num: 66870,
		isNonstandard: "Future",
		rating: 1,
	},
	bouncectarmor: {/* TODO introduce Mega interaction **/
		name: "Bouncect Armor",
		spritenum: 0,
		onModifyMove(move, pokemon, target) {
			delete move.flags['contact'];
			if (move.secondaries) {
				delete move.secondaries;
				delete move.self;
				if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
			}
		},
		num: 66871,
		isNonstandard: "Future",
		rating: 1,
	},
	frankenspookite: {
		name: "Frankenspookite",
		spritenum: 0,
		num: 66873,
		isNonstandard: "Future",
		rating: 1,
	},
	zangoosite: {
		name: "Zangoosite",
		spritenum: 0,
		num: 66874,
		isNonstandard: "Future",
		rating: 1,
	},
	virivite: {
		name: "Virivite",
		spritenum: 0,
		num: 66875,
		isNonstandard: "Future",
		rating: 1,
	},
	rubberite: {
		name: "Rubberite",
		spritenum: 0,
		num: 66876,
		isNonstandard: "Future",
		rating: 1,
	},
	bottleodrakite: {
		name: "Bottleodrakite",
		spritenum: 0,
		num: 66877,
		isNonstandard: "Future",
		rating: 1,
	},
	dargouite: {
		name: "Dargouite",
		spritenum: 0,
		num: 66878,
		isNonstandard: "Future",
		rating: 1,
	},
	sonotite: {
		name: "Sonotite",
		spritenum: 0,
		num: 66879,
		isNonstandard: "Future",
		rating: 1,
	},
	arbokite: {
		name: "Arbokite",
		spritenum: 0,
		num: 66880,
		isNonstandard: "Future",
		rating: 1,
	},
	shedinjite: {
		name: "Shedinjite",
		spritenum: 0,
		num: 66889,
		isNonstandard: "Future",
		rating: 1,
	},
	lynchite: {
		name: "Lynchite",
		spritenum: 0,
		num: 66892,
		isNonstandard: "Future",
		rating: 1,
	},
	sevipite: {
		name: "Sevipite",
		spritenum: 0,
		num: 66893,
		isNonstandard: "Future",
		rating: 1,
	},
	volcaronite: {
		name: "Volcaronite",
		spritenum: 0,
		num: 66896,
		isNonstandard: "Future",
		rating: 1,
	},
	feraligatrite: {
		name: "Feraligatrite",
		spritenum: 0,
		num: 66897,
		isNonstandard: "Future",
		rating: 1,
	},
	meganiumite: {
		name: "Meganiumite",
		spritenum: 0,
		num: 66898,
		isNonstandard: "Future",
		rating: 1,
	},
	typhlosionite: {
		name: "Typhlosionite",
		spritenum: 0,
		num: 66899,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditez: {
		name: "Charizardite Z",
		spritenum: 0,
		num: 66900,
		isNonstandard: "Future",
		rating: 1,
	},
	johnspleenite: {
		name: "Johnspleenite",
		spritenum: 0,
		num: 66901,
		isNonstandard: "Future",
		rating: 1,
	},
	primalorb: {
		name: "Primal Orb",
		spritenum: 0,
		num: 66902,
		isNonstandard: "Future",
		rating: 1,
	},
	behemistite: {
		name: "Behemistite",
		spritenum: 0,
		num: 66903,
		isNonstandard: "Future",
		rating: 1,
	},
	luminite: {
		name: "Luminite",
		spritenum: 0,
		num: 66904,
		isNonstandard: "Future",
		rating: 1,
	},
	bersergutsite: {
		name: "Bersergutsite",
		spritenum: 0,
		num: 66905,
		isNonstandard: "Future",
		rating: 1,
	},
	wendigite: {
		name: "Wendigite",
		spritenum: 0,
		num: 66906,
		isNonstandard: "Future",
		rating: 1,
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 0,
		num: 66907,
		isNonstandard: "Future",
		rating: 1,
	},
	delphoxite: {
		name: "Delphoxite",
		spritenum: 0,
		num: 66908,
		isNonstandard: "Future",
		rating: 1,
	},
	greninjite: {
		name: "Greninjite",
		spritenum: 0,
		num: 66909,
		isNonstandard: "Future",
		rating: 1,
	},
	chesnaughtite: {
		name: "Chesnaughtite",
		spritenum: 0,
		num: 66910,
		isNonstandard: "Future",
		rating: 1,
	},
	chatotite: {
		name: "Chatotite",
		spritenum: 0,
		num: 66914,
		isNonstandard: "Future",
		rating: 1,
	},
	angelpowder: {
		name: "Angel Powder",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 13);
		},
		num: 66915,
		isNonstandard: "Future",
		rating: 3,
	},
	apexorb: {
		name: "Apex Orb",
		spritenum: 0,
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('Apex Orb boosting accuracy');
				return this.chainModify([4505, 4096]);
			}
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('Apex Orb decreasing accuracy');
			return this.chainModify([3686, 4096]);
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		num: 66916,
		isNonstandard: "Future",
		rating: 4,
	},
	sloggerothite: {
		name: "Sloggerothite",
		spritenum: 0,
		num: 66917,
		isNonstandard: "Future",
		rating: 1,
	},
	archangite: {
		name: "Archangite",
		spritenum: 0,
		num: 66919,
		isNonstandard: "Future",
		rating: 1,
	},
	ledevilainite: {
		name: "Ledevilainite",
		spritenum: 0,
		num: 66920,
		isNonstandard: "Future",
		rating: 1,
	},
	satelite: {
		name: "Satelite",
		spritenum: 0,
		num: 66921,
		isNonstandard: "Future",
		rating: 1,
	},
	sphinxiantite: {
		name: "Sphinxiantite",
		spritenum: 0,
		num: 66922,
		isNonstandard: "Future",
		rating: 1,
	},
	clefablite: {
		name: "Clefablite",
		spritenum: 0,
		num: 66924,
		isNonstandard: "Future",
		rating: 1,
	},
	eeveeite: {
		name: "Eeveeite",
		spritenum: 0,
		num: 66925,
		isNonstandard: "Future",
		rating: 1,
	},
	fonightonite: {
		name: "Fonightonite",
		spritenum: 0,
		num: 66926,
		isNonstandard: "Future",
		rating: 1,
	},
	brickorite: {
		name: "Brickorite",
		spritenum: 0,
		num: 66932,
		isNonstandard: "Future",
		rating: 1,
	},
	frostearite: {
		name: "Frostearite",
		spritenum: 0,
		num: 66933,
		isNonstandard: "Future",
		rating: 1,
	},
	stantlerite: {
		name: "Stantlerite",
		spritenum: 0,
		num: 66934,
		isNonstandard: "Future",
		rating: 1,
	},
	melonvilite: {
		name: "Melonvilite",
		spritenum: 0,
		num: 66935,
		isNonstandard: "Future",
		rating: 1,
	},
	delcattite: {
		name: "Delcattite",
		spritenum: 0,
		num: 66936,
		isNonstandard: "Future",
		rating: 1,
	},
	electrodite: {
		name: "Electrodite",
		spritenum: 0,
		num: 66942,
		isNonstandard: "Future",
		rating: 1,
	},
	tantalberry: {
		name: "Tantal Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Chaos",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Chaos' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66943,
		isNonstandard: "Future",
		rating: 1,
	},
	holyward: {
		name: "Holy Ward",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Chaos' && target.getMoveHitData(move).typeMod > 0) {
				this.debug('-50% Holy Ward reduction');
				return this.chainModify(0.5);
			}
		},
		num: 66944,
		isNonstandard: "Future",
		rating: 1,
	},
	blessorb: {
		name: "Bless Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Chaos' && target.getMoveHitData(move).typeMod > 0) {
				this.debug('-20% Bless Orb reduction');
				return this.chainModify(0.8);
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Chaos') {
				target.useItem();
			}
		},
		boosts: {
			spe: 1,
		},
		num: 66945,
		isNonstandard: "Future",
		rating: 1,
	},
	octillerite: {
		name: "Octillerite",
		spritenum: 0,
		num: 66946,
		isNonstandard: "Future",
		rating: 1,
	},
	jetcraftite: {
		name: "Jetcraftite",
		spritenum: 0,
		num: 66947,
		isNonstandard: "Future",
		rating: 1,
	},
	crobatite: {
		name: "Crobatite",
		spritenum: 0,
		num: 66948,
		isNonstandard: "Future",
		rating: 1,
	},
	cradilite: {
		name: "Cradilite",
		spritenum: 0,
		num: 66949,
		isNonstandard: "Future",
		rating: 1,
	},
	martianorb: {
		name: "Martian Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Martian Orb");
				this.boost({atk: 1}, target, target);
			}
		},
		num: 66951,
		isNonstandard: "Future",
		rating: 2,
	},
	venusorb: {
		name: "Venus Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Venus Orb");
				this.boost({spd: 1}, target, target);
			}
		},
		num: 66952,
		isNonstandard: "Future",
		rating: 2,
	},
	mercuryorb: {
		name: "Mercury Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Mercury Orb");
				this.boost({spe: 1}, target, target);
			}
		},
		num: 66953,
		isNonstandard: "Future",
		rating: 2,
	},
	chipoloberry: {
		name: "Chipolo Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Wood",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Wood' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66955,
		isNonstandard: "Future",
		rating: 1,
	},
	haridoberry: {
		name: "Harido Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Magma",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Magma' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66956,
		isNonstandard: "Future",
		rating: 1,
	},
	bakyuuberry: {
		name: "Bakyuu Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steam",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Steam' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66957,
		isNonstandard: "Future",
		rating: 1,
	},
	darayberry: {
		name: "Daray Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Wind",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Wind' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66958,
		isNonstandard: "Future",
		rating: 1,
	},
	loispberry: {
		name: "Loisp Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Food",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Food' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66959,
		isNonstandard: "Future",
		rating: 1,
	},
	orptekberry: {
		name: "Orptek Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Virus",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Virus' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66960,
		isNonstandard: "Future",
		rating: 1,
	},
	oligalberry: {
		name: "Oligal Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Magic",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Magic' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66961,
		isNonstandard: "Future",
		rating: 1,
	},
	ampireberry: {
		name: "Ampire Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Blood",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Blood' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 66962,
		isNonstandard: "Future",
		rating: 1,
	},
	goldstandarrow: {
		name: "Gold Stand Arrow",
		spritenum: 0,
		num: 66963,
		isNonstandard: "Future",
		rating: 1,
	},
	goldenfiddle: {
		name: "Golden Fiddle",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Divine' || move.type === 'Chaos') {
				this.debug('Golden Fiddle weaken');
				return this.chainModify(0.4);
			}
		},
		num: 66964,
		isNonstandard: "Future",
		rating: 2,
	},
	novaisite: {
		name: "Novaisite",
		spritenum: 0,
		num: 66965,
		isNonstandard: "Future",
		rating: 1,
	},
	darkolite: {
		name: "Darkolite",
		spritenum: 0,
		num: 66966,
		isNonstandard: "Future",
		rating: 1,
	},
	vivillonite: {
		name: "Vivillonite",
		spritenum: 0,
		num: 66972,
		isNonstandard: "Future",
		rating: 1,
	},
	jokercard: {
		name: "Joker Card",
		spritenum: 0,
		num: 66973,
		isNonstandard: "Future",
		rating: 1,
	},
	ariadosite: {
		name: "Ariadosite",
		spritenum: 0,
		num: 66974,
		isNonstandard: "Future",
		rating: 1,
	},
	gettertomahawk: {
		name: "Getter Tomahawk",
		spritenum: 0,
		num: 66975,
		isNonstandard: "Future",
		rating: 1,
	},
	getterdrill: {
		name: "Getter Drill",
		spritenum: 0,
		num: 66976,
		isNonstandard: "Future",
		rating: 1,
	},
	gettermissile: {
		name: "Getter Missile",
		spritenum: 0,
		num: 66977,
		isNonstandard: "Future",
		rating: 1,
	},
	mozartite: {
		name: "Mozartite",
		spritenum: 0,
		num: 66978,
		isNonstandard: "Future",
		rating: 1,
	},
	icyseed: {/* TODO when icy terrain is introduced **/
		name: "Icy Seed",
		spritenum: 0,
		num: 66979,
		isNonstandard: "Future",
		rating: 1,
	},
	dongorillite: {
		name: "DONGORILLITE",
		spritenum: 0,
		num: 66980,
		isNonstandard: "Future",
		rating: 1,
	},
	helioliskite: {
		name: "Helioliskite",
		spritenum: 0,
		num: 66981,
		isNonstandard: "Future",
		rating: 1,
	},
	narwharite: {
		name: "Narwharite",
		spritenum: 0,
		num: 66982,
		isNonstandard: "Future",
		rating: 1,
	},
	suwiseglasses: {
		name: "Suwise Glasses",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 16,
		onBasePower(basePower, user, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(2);
			}
		},
		num: 66983,
		isNonstandard: "Future",
		rating: 1,
	},
	plasbulite: {
		name: "Plasbulite",
		spritenum: 0,
		num: 66984,
		isNonstandard: "Future",
		rating: 1,
	},
	lightulbite: {
		name: "Lightulbite",
		spritenum: 0,
		num: 66985,
		isNonstandard: "Future",
		rating: 1,
	},
	rodactylite: {
		name: "Rodactylite",
		spritenum: 0,
		num: 66986,
		isNonstandard: "Future",
		rating: 1,
	},
	pressureorb: {
		name: "Pressure Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onTryMove(pokemon, target, move) {
			const moveData = pokemon.getMoveData(move.id);
			if (!moveData || moveData.pp < 1) return;
			moveData.pp -= 1;
		},
		num: 66987,
		isNonstandard: "Future",
		rating: 1,
	},
	earplugs: {
		name: "Ear Plugs",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Sound') {
				this.debug('Ear Plugs weaken');
				return this.chainModify(0.65);
			}
		},
		num: 66988,
		isNonstandard: "Future",
		rating: 1,
	},
	reactioxite: {
		name: "Reactioxite",
		spritenum: 0,
		num: 66989,
		isNonstandard: "Future",
		rating: 1,
	},
	donphanite: {
		name: "Donphanite",
		spritenum: 0,
		num: 66990,
		isNonstandard: "Future",
		rating: 1,
	},
	jynxite: {
		name: "Jynxite",
		spritenum: 0,
		num: 66991,
		isNonstandard: "Future",
		rating: 1,
	},
	charizardites: {
		name: "Charizardite S",
		spritenum: 0,
		num: 66992,
		isNonstandard: "Future",
		rating: 1,
	},
	farfetchditen: {
		name: "Farfetchdite N",
		spritenum: 0,
		num: 66993,
		isNonstandard: "Future",
		rating: 1,
	},
	gigantamax: {
		name: "Gigantamax",
		spritenum: 0,
		num: 66994,
		isNonstandard: "Future",
		rating: 1,
	},
	dragonitite: {
		name: "Dragonitite",
		spritenum: 0,
		num: 66995,
		isNonstandard: "Future",
		rating: 1,
	},
	carnivinite: {
		name: "Carnivinite",
		spritenum: 0,
		num: 66996,
		isNonstandard: "Future",
		rating: 1,
	},
	cultulzite: {
		name: "Cultulzite",
		spritenum: 0,
		num: 66997,
		isNonstandard: "Future",
		rating: 1,
	},
	gorebyssite: {
		name: "Gorebyssite",
		spritenum: 0,
		num: 66998,
		isNonstandard: "Future",
		rating: 1,
	},
	huntailite: {
		name: "Huntailite",
		spritenum: 0,
		num: 66999,
		isNonstandard: "Future",
		rating: 1,
	},
	garbodorite: {
		name: "Garbodorite",
		spritenum: 0,
		num: 67001,
		isNonstandard: "Future",
		rating: 1,
	},
	kecleonite: {
		name: "Kecleonite",
		spritenum: 0,
		num: 67003,
		isNonstandard: "Future",
		rating: 1,
	},
	cocaiturdite: {
		name: "Cocaiturdite",
		spritenum: 0,
		num: 67004,
		isNonstandard: "Future",
		rating: 1,
	},
	albinguinite: {
		name: "Albinguinite",
		spritenum: 0,
		num: 67005,
		isNonstandard: "Future",
		rating: 1,
	},
	undlouisite: {
		name: "Undlouisite",
		spritenum: 0,
		num: 67006,
		isNonstandard: "Future",
		rating: 1,
	},
	tropilightnite: {
		name: "Tropilightnite",
		spritenum: 0,
		num: 67007,
		isNonstandard: "Future",
		rating: 1,
	},
	nukreepite: {
		name: "Nukreepite",
		spritenum: 0,
		num: 67008,
		isNonstandard: "Future",
		rating: 1,
	},
	tutterflite: {
		name: "Tutterflite",
		spritenum: 0,
		num: 67009,
		isNonstandard: "Future",
		rating: 1,
	},
	swoobatite: {
		name: "Swoobatite",
		spritenum: 0,
		num: 67010,
		isNonstandard: "Future",
		rating: 1,
	},
	parasectite: {
		name: "Parasectite",
		spritenum: 0,
		num: 67011,
		isNonstandard: "Future",
		rating: 1,
	},
	smolstronite: {
		name: "Smolstronite",
		spritenum: 0,
		num: 67014,
		isNonstandard: "Future",
		rating: 1,
	},
	antiplebshield: {
		name: "Antiplebshield",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			return this.chainModify(20);
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			return this.chainModify(20);
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			return this.chainModify(20);
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('Antiplebshield boosting accuracy');
				return this.chainModify(20);
			}
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('brightpowder - decreasing accuracy');
			return this.chainModify(0.05);
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		onModifyPriority(priority, pokemon, target, move) {
			return priority + 6;
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp);
			if (pokemon.activeTurns) {
				this.boost({atk: 1, spa: 1, def: 1, spd: 1, spe: 1});
			}
			if (pokemon.hp && pokemon.status && this.randomChance(33, 100)) {
				this.debug('antiplebshield');
				this.add('-activate', pokemon, 'item: Antiplebshield');
				pokemon.cureStatus();
			}
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.status) {
					this.damage(target.baseMaxhp, target, pokemon);
				}
			}
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Antiplebshield");
				return target.hp - 1;
			}
		},
		onTryHit(target, source, move) {
			if (target !== source && ((move.flags['bullet'] || move.flags['above'] || move.flags['contact']) ||
			(move.type === 'Divine' || move.type === 'Virus' || move.type === 'Fighting' || move.type === 'Ghost' ||
			move.type === 'Dark' || move.type === 'Poison' || move.type === 'Chaos' || move.type === 'Qmarks' ||
			move.type === 'Light' || move.type === 'Normal'))) {
				this.add('-immune', target, '[from] item: Antiplebshield');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if ((move.flags['bullet'] || move.flags['above'] || move.flags['contact']) ||
			(move.type === 'Divine' || move.type === 'Virus' || move.type === 'Fighting' || move.type === 'Ghost' ||
			move.type === 'Dark' || move.type === 'Poison' || move.type === 'Chaos' || move.type === 'Qmarks' ||
			move.type === 'Light' || move.type === 'Normal')) {
				this.add('-immune', this.effectState.target, '[from] item: Antiplebshield');
			}
		},
		num: 67015,
		isNonstandard: "Future",
		rating: 4,
	},
	paintipite: {
		name: "Paintipite",
		spritenum: 0,
		num: 67016,
		isNonstandard: "Future",
		rating: 1,
	},
	silverkey: {
		name: "Silver Key",
		spritenum: 0,
		num: 67017,
		isNonstandard: "Future",
		rating: 1,
	},
	horroruxite: {
		name: "Horroruxite",
		spritenum: 0,
		num: 67021,
		isNonstandard: "Future",
		rating: 1,
	},
	pyramidite: {
		name: "Pyramidite",
		spritenum: 0,
		num: 67022,
		isNonstandard: "Future",
		rating: 1,
	},
	warshinite: {
		name: "Warshinite",
		spritenum: 0,
		num: 67023,
		isNonstandard: "Future",
		rating: 1,
	},
	omastarite: {
		name: "Omastarite",
		spritenum: 0,
		num: 67024,
		isNonstandard: "Future",
		rating: 1,
	},
	kabutopsite: {
		name: "Kabutopsite",
		spritenum: 0,
		num: 67025,
		isNonstandard: "Future",
		rating: 1,
	},
	dolphottlite: {
		name: "Dolphottlite",
		spritenum: 0,
		num: 67026,
		isNonstandard: "Future",
		rating: 1,
	},
	corsolite: {
		name: "Corsolite",
		spritenum: 0,
		num: 67027,
		isNonstandard: "Future",
		rating: 1,
	},
	victreebelite: {
		name: "Victreebelite",
		spritenum: 0,
		num: 67028,
		isNonstandard: "Future",
		rating: 1,
	},
	sunflorite: {
		name: "Sunflorite",
		spritenum: 0,
		num: 67029,
		isNonstandard: "Future",
		rating: 1,
	},
	relicanthite: {
		name: "Relicanthite",
		spritenum: 0,
		num: 67030,
		isNonstandard: "Future",
		rating: 1,
	},
	whiscashite: {
		name: "Whiscashite",
		spritenum: 0,
		num: 67031,
		isNonstandard: "Future",
		rating: 1,
	},
	tangrowthitex: {
		name: "Tangrowthite X",
		spritenum: 0,
		num: 67032,
		isNonstandard: "Future",
		rating: 1,
	},
	tangrowthitey: {
		name: "Tangrowthite Y",
		spritenum: 0,
		num: 67033,
		isNonstandard: "Future",
		rating: 1,
	},
	tangrowthitez: {
		name: "Tangrowthite Z",
		spritenum: 0,
		num: 67034,
		isNonstandard: "Future",
		rating: 1,
	},
	luvdiscitex: {
		name: "Luvdiscite X",
		spritenum: 0,
		num: 67035,
		isNonstandard: "Future",
		rating: 1,
	},
	luvdiscitey: {
		name: "Luvdiscite Y",
		spritenum: 0,
		num: 67036,
		isNonstandard: "Future",
		rating: 1,
	},
	jumpluffitex: {
		name: "Jumpluffite X",
		spritenum: 0,
		num: 67037,
		isNonstandard: "Future",
		rating: 1,
	},
	jumpluffitey: {
		name: "Jumpluffite Y",
		spritenum: 0,
		num: 67038,
		isNonstandard: "Future",
		rating: 1,
	},
	magcargite: {
		name: "Magcargite",
		spritenum: 0,
		num: 67039,
		isNonstandard: "Future",
		rating: 1,
	},
	poliwrathite: {
		name: "Poliwrathite",
		spritenum: 0,
		num: 67040,
		isNonstandard: "Future",
		rating: 1,
	},
	rapidashitey: {
		name: "Rapidashite Y",
		spritenum: 0,
		num: 67042,
		isNonstandard: "Future",
		rating: 1,
	},
	rapidashitex: {
		name: "Rapidashite X",
		spritenum: 0,
		num: 67043,
		isNonstandard: "Future",
		rating: 1,
	},
	ninetalesite: {
		name: "Ninetalesite",
		spritenum: 0,
		num: 67044,
		isNonstandard: "Future",
		rating: 1,
	},
	heatmorite: {
		name: "Heatmorite",
		spritenum: 0,
		num: 67045,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditeg: {
		name: "Charizardite G",
		spritenum: 0,
		num: 67046,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditer: {
		name: "Charizardite R",
		spritenum: 0,
		num: 67047,
		isNonstandard: "Future",
		rating: 1,
	},
	arcaninite: {
		name: "Arcaninite",
		spritenum: 0,
		num: 67048,
		isNonstandard: "Future",
		rating: 1,
	},
	magmortarite: {
		name: "Magmortarite",
		spritenum: 0,
		num: 67049,
		isNonstandard: "Future",
		rating: 1,
	},
	snorlaxite: {
		name: "Snorlaxite",
		spritenum: 0,
		num: 67050,
		isNonstandard: "Future",
		rating: 1,
	},
	spindite: {
		name: "Spindite",
		spritenum: 0,
		num: 67051,
		isNonstandard: "Future",
		rating: 1,
	},
	pyroarite: {
		name: "Pyroarite",
		spritenum: 0,
		num: 67052,
		isNonstandard: "Future",
		rating: 1,
	},
	slakingite: {
		name: "Slakingite",
		spritenum: 0,
		num: 67053,
		isNonstandard: "Future",
		rating: 1,
	},
	steamistite: {
		name: "Steamistite",
		spritenum: 0,
		num: 67054,
		isNonstandard: "Future",
		rating: 1,
	},
	stweamsite: {
		name: "Stweamsite",
		spritenum: 0,
		num: 67055,
		isNonstandard: "Future",
		rating: 1,
	},
	steamnite: {
		name: "Steamnite",
		spritenum: 0,
		num: 67056,
		isNonstandard: "Future",
		rating: 1,
	},
	thorncrown: {
		name: "Thorn Crown",
		spritenum: 0,
		onModifyMove(move, pokemon, target) {
			if (move.type === 'Blood') {
				move.type = 'Divine';
			}
		},
		num: 67057,
		isNonstandard: "Future",
		rating: 1,
	},
	pricklythorns: {
		name: "Prickly Thorns",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			return this.chainModify(0.9);
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hasType('Grass')) {
				if (move && (move.type === 'Bug' || move.type === 'Flying')) {
					this.debug('Prickly Thorns weaken');
					return this.chainModify(0.6);
				}
			}
		},
		num: 67058,
		isNonstandard: "Future",
		rating: 1,
	},
	pressuredgem: {
		name: "Pressured Gem",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			return this.chainModify(0.9);
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hasType('Rock')) {
				if (move && (move.type === 'Water' || move.type === 'Grass')) {
					this.debug('Pressured Gem weaken');
					return this.chainModify(0.6);
				}
			}
		},
		num: 67059,
		isNonstandard: "Future",
		rating: 1,
	},
	pizzaurexitex: {
		name: "Pizzaurexite X",
		spritenum: 0,
		num: 67062,
		isNonstandard: "Future",
		rating: 1,
	},
	tenablerusite: {
		name: "Tenablerusite",
		spritenum: 0,
		num: 67063,
		isNonstandard: "Future",
		rating: 1,
	},
	canyouite: {
		name: "Canyouite",
		spritenum: 0,
		num: 67068,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditei: {
		name: "Charizardite I",
		spritenum: 0,
		num: 67069,
		isNonstandard: "Future",
		rating: 1,
	},
	magmocketite: {
		name: "Magmocketite",
		spritenum: 0,
		num: 67070,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditew: {
		name: "Charizardite W",
		spritenum: 0,
		num: 67071,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditef: {
		name: "Charizardite F",
		spritenum: 0,
		num: 67072,
		isNonstandard: "Future",
		rating: 1,
	},
	ludicolite: {
		name: "Ludicolite",
		spritenum: 0,
		num: 67073,
		isNonstandard: "Future",
		rating: 1,
	},
	shiftryite: {
		name: "Shiftryite",
		spritenum: 0,
		num: 67074,
		isNonstandard: "Future",
		rating: 1,
	},
	persianite: {
		name: "Persianite",
		spritenum: 0,
		num: 67075,
		isNonstandard: "Future",
		rating: 1,
	},
	golemite: {
		name: "Golemite",
		spritenum: 0,
		num: 67076,
		isNonstandard: "Future",
		rating: 1,
	},
	tsareenite: {
		name: "Tsareenite",
		spritenum: 0,
		num: 67077,
		isNonstandard: "Future",
		rating: 1,
	},
	pizzaurexitey: {
		name: "Pizzaurexite Y",
		spritenum: 0,
		num: 67078,
		isNonstandard: "Future",
		rating: 1,
	},
	pelipperite: {
		name: "Pelipperite",
		spritenum: 0,
		num: 67079,
		isNonstandard: "Future",
		rating: 1,
	},
	sudowoodite: {
		name: "Sudowoodite",
		spritenum: 0,
		num: 67080,
		isNonstandard: "Future",
		rating: 1,
	},
	armaldite: {
		name: "Armaldite",
		spritenum: 0,
		num: 67081,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditeb: {
		name: "Charizardite B",
		spritenum: 0,
		num: 67083,
		isNonstandard: "Future",
		rating: 1,
	},
	mismagiusite: {
		name: "Mismagiusite",
		spritenum: 0,
		num: 67085,
		isNonstandard: "Future",
		rating: 1,
	},
	snatanite: {
		name: "Snatanite",
		spritenum: 0,
		num: 67086,
		isNonstandard: "Future",
		rating: 1,
	},
	pagieite: {
		name: "Pagieite",
		spritenum: 0,
		num: 67087,
		isNonstandard: "Future",
		rating: 1,
	},
	booklyite: {
		name: "Booklyite",
		spritenum: 0,
		num: 67088,
		isNonstandard: "Future",
		rating: 1,
	},
	lusfairite: {
		name: "Lusfairite",
		spritenum: 0,
		num: 67089,
		isNonstandard: "Future",
		rating: 1,
	},
	boxoite: {
		name: "Boxoite",
		spritenum: 0,
		num: 67090,
		isNonstandard: "Future",
		rating: 1,
	},
	poweredfan: {/* TODO when Tempest is introduced **/
		name: "Powered Fan",
		spritenum: 0,
		num: 67091,
		isNonstandard: "Future",
		rating: 1,
	},
	thickscarf: {
		name: "Thick Scarf",
		spritenum: 0,
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move && move.type === 'Ice') {
				this.debug('Thick Scarf Gem weaken');
				return this.chainModify(0.85);
			}
		},
		num: 67092,
		isNonstandard: "Future",
		rating: 1,
	},
	wheelchair: {
		name: "Wheelchair",
		spritenum: 0,
		fling: {
			basePower: 100,
		},
		onModifySpePriority: 5,
		onModifySpe(spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(2);
			} else {
				return this.chainModify(0.5);
			}
		},
		num: 67093,
		isNonstandard: "Future",
		rating: 1,
	},
	shockorb: {
		name: "Shock Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		num: 67094,
		isNonstandard: "Future",
		rating: 1,
	},
	frostorb: {
		name: "Frost Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'frz',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('frz', pokemon);
		},
		num: 67095,
		isNonstandard: "Future",
		rating: 4,
	},
	naporb: {
		name: "Nap Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'slp',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('slp', pokemon);
		},
		num: 67096,
		isNonstandard: "Future",
		rating: 4,
	},
	woodgem: {
		name: "Wood Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Wood' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67097,
		isNonstandard: "Future",
		rating: 2,
	},
	magmagem: {
		name: "Magma Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Magma' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67098,
		isNonstandard: "Future",
		rating: 2,
	},
	steamgem: {
		name: "Steam Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Magma' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67099,
		isNonstandard: "Future",
		rating: 2,
	},
	windgem: {
		name: "Wind Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Wind' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67100,
		isNonstandard: "Future",
		rating: 2,
	},
	papergem: {
		name: "Paper Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Paper' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67101,
		isNonstandard: "Future",
		rating: 2,
	},
	techgem: {
		name: "Tech Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Tech' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67102,
		isNonstandard: "Future",
		rating: 2,
	},
	magicgem: {
		name: "Magicgem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Magic' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67103,
		isNonstandard: "Future",
		rating: 2,
	},
	rubbergem: {
		name: "Rubber Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Rubber' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67104,
		isNonstandard: "Future",
		rating: 2,
	},
	feargem: {
		name: "Fear Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Fear' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67105,
		isNonstandard: "Future",
		rating: 2,
	},
	lightgem: {
		name: "Light Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Light' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67106,
		isNonstandard: "Future",
		rating: 2,
	},
	cosmicgem: {
		name: "Cosmic Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Cosmic' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67107,
		isNonstandard: "Future",
		rating: 2,
	},
	soundgem: {
		name: "Sound Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Sound' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67108,
		isNonstandard: "Future",
		rating: 2,
	},
	foodgem: {
		name: "Food Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Food' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67109,
		isNonstandard: "Future",
		rating: 2,
	},
	zombiegem: {
		name: "Zombie Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Zombie' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67110,
		isNonstandard: "Future",
		rating: 2,
	},
	nucleargem: {
		name: "Nuclear Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Nuclear' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67111,
		isNonstandard: "Future",
		rating: 2,
	},
	virusgem: {
		name: "Virus Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Virus' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67112,
		isNonstandard: "Future",
		rating: 2,
	},
	cybergem: {
		name: "Cyber Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Cyber' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67113,
		isNonstandard: "Future",
		rating: 2,
	},
	fabricgem: {
		name: "Fabric Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Fabric' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67114,
		isNonstandard: "Future",
		rating: 2,
	},
	chaosgem: {
		name: "Chaos Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Chaos' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67115,
		isNonstandard: "Future",
		rating: 2,
	},
	divinegem: {
		name: "Divine Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Divine' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67116,
		isNonstandard: "Future",
		rating: 2,
	},
	qmarksgem: {
		name: "Qmarksgem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Qmarks' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67117,
		isNonstandard: "Future",
		rating: 2,
	},
	timegem: {
		name: "Time Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Time' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67118,
		isNonstandard: "Future",
		rating: 2,
	},
	paintgem: {
		name: "Paint Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Paint' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67119,
		isNonstandard: "Future",
		rating: 2,
	},
	crystalgem: {
		name: "Crystal Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Crystal' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67120,
		isNonstandard: "Future",
		rating: 2,
	},
	memegem: {
		name: "Meme Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Meme' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67121,
		isNonstandard: "Future",
		rating: 2,
	},
	bloodgem: {
		name: "Blood Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Blood' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67122,
		isNonstandard: "Future",
		rating: 2,
	},
	greasygem: {
		name: "Greasy Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Greasy' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67123,
		isNonstandard: "Future",
		rating: 2,
	},
	heartgem: {
		name: "Heart Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Heart' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67124,
		isNonstandard: "Future",
		rating: 2,
	},
	ogregem: {
		name: "Ogre Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Ogre' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67125,
		isNonstandard: "Future",
		rating: 2,
	},
	shadowgem: {
		name: "Shadow Gem",
		spritenum: 0,
		isGem: true,
		onSourceTryPrimaryHit(target, source, move) {
			const pledges = ['firepledge', 'grasspledge', 'waterpledge'];
			if (target === source || move.category === 'Status' || pledges.includes(move.id)) return;
			if (move.type === 'Shadow' && source.useItem()) {
				source.addVolatile('gem');
			}
		},
		num: 67126,
		isNonstandard: "Future",
		rating: 2,
	},
	acidrock: {
		name: "Acid Rock",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 67127,
		isNonstandard: "Future",
		rating: 1,
	},
	blackrock: {
		name: "Black Rock",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		num: 67128,
		isNonstandard: "Future",
		rating: 1,
	},
	hulklearite: {
		name: "Hulklearite",
		spritenum: 0,
		num: 67129,
		isNonstandard: "Future",
		rating: 1,
	},
	fearowite: {
		name: "Fearowite",
		spritenum: 0,
		num: 67130,
		isNonstandard: "Future",
		rating: 1,
	},
	skippingstone: {
		name: "Skipping Stone",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				target.useItem();
			}
		},
		boosts: {
			spe: 2,
		},
		num: 67131,
		isNonstandard: "Future",
		rating: 1,
	},
	arrowhead: {
		name: "Arrowhead",
		spritenum: 0,
		onBeforeMovePriority: 6,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['arrow']) {
				this.add("-activate", pokemon, "item: Arrow Head");
				this.boost({accuracy: 1}, pokemon, pokemon);
			}
		},
		num: 67132,
		isNonstandard: "Future",
		rating: 1,
	},
	bootsofblindingspeed: {
		name: "Bootsofblindingspeed",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			if (pokemon.hasAbility('noguard')) return;
			return this.chainModify(10.5);
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify(0.05);
			}
		},
		num: 67133,
		isNonstandard: "Future",
		rating: 2,
	},
	minigalaxy: {/* TODO when Starfield is introduced **/
		name: "Mini Galaxy",
		spritenum: 0,
		num: 67134,
		isNonstandard: "Future",
		rating: 1,
	},
	mienshaonite: {
		name: "Mienshaonite",
		spritenum: 0,
		num: 67135,
		isNonstandard: "Future",
		rating: 1,
	},
	lipstick: {
		name: "Lipstick",
		spritenum: 0,
		onModifyDamage(damage, source, target, move) {
			if (move && move.flags['kiss']) {
				return this.chainModify(2);
			}
		},
		num: 67136,
		isNonstandard: "Future",
		rating: 1,
	},
	gascan: {
		name: "Gas Can",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify(1.65);
			}
		},
		num: 67137,
		isNonstandard: "Future",
		rating: 1,
	},
	spices: {
		name: "Spices",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move && move.type === 'Food') {
				return this.chainModify(1.65);
			}
		},
		num: 67138,
		isNonstandard: "Future",
		rating: 1,
	},
	kettle: {
		name: "Kettle",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyMovePriority: -3,
		onModifyMove(move) {
			if (move.secondaries && move.type === 'Steam') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		num: 67139,
		isNonstandard: "Future",
		rating: 1,
	},
	magmapowder: {
		name: "Magma Powder",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyMovePriority: -3,
		onModifyMove(move) {
			if (move.secondaries && move.type === 'Magma') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		num: 67140,
		isNonstandard: "Future",
		rating: 1,
	},
	sapling: {
		name: "Sapling",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyMovePriority: -3,
		onModifyMove(move) {
			if (move.secondaries && move.type === 'Wood') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		num: 67141,
		isNonstandard: "Future",
		rating: 1,
	},
	fertilizer: {
		name: "Fertilizer",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyMovePriority: -3,
		onModifyMove(move) {
			if (move.secondaries && move.type === 'Grass') {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		num: 67142,
		isNonstandard: "Future",
		rating: 1,
	},
	sturdypebbles: {
		name: "Sturdy Pebbles",
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasType('Ground') || pokemon.hasType('Rock')) { return this.chainModify(2); }
		},
		spritenum: 0,
		num: 67143,
		isNonstandard: "Future",
		rating: 1,
	},
	sandycapsule: {
		name: "Sandy Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('sandstorm');
		},
		num: 67144,
		isNonstandard: "Future",
		rating: 1,
	},
	rainycapsule: {
		name: "Rainy Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('raindance');
		},
		num: 67145,
		isNonstandard: "Future",
		rating: 1,
	},
	snowycapsule: {
		name: "Snowy Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('hail');
		},
		num: 67146,
		isNonstandard: "Future",
		rating: 1,
	},
	sunnycapsule: {
		name: "Sunny Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('sunnyday');
		},
		num: 67147,
		isNonstandard: "Future",
		rating: 1,
	},
	lamwerberry: {
		name: "Lamwer Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Cyber",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Cyber' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67148,
		isNonstandard: "Future",
		rating: 1,
	},
	prigtinberry: {
		name: "Prigtin Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Paper",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Paper' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67149,
		isNonstandard: "Future",
		rating: 1,
	},
	borcygberry: {
		name: "Borcyg Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Tech",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Tech' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67150,
		isNonstandard: "Future",
		rating: 1,
	},
	lascetberry: {
		name: "Lascet Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rubber",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Rubber' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67151,
		isNonstandard: "Future",
		rating: 1,
	},
	yboogberry: {
		name: "Yboog Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fear",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fear' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67152,
		isNonstandard: "Future",
		rating: 1,
	},
	shieginberry: {
		name: "Shiegin Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Light",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Light' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67153,
		isNonstandard: "Future",
		rating: 1,
	},
	exretberry: {
		name: "Exret Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Cosmic",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Cosmic' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67154,
		isNonstandard: "Future",
		rating: 1,
	},
	cousactiberry: {
		name: "Cousacti Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Sound",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Sound' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67155,
		isNonstandard: "Future",
		rating: 1,
	},
	rottunberry: {
		name: "Rottun Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Berry",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Berry' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67156,
		isNonstandard: "Future",
		rating: 1,
	},
	niossifberry: {
		name: "Niossif Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Nuclear",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Nuclear' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67157,
		isNonstandard: "Future",
		rating: 1,
	},
	tahrestberry: {
		name: "Tahrest Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Glass",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Glass' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67158,
		isNonstandard: "Future",
		rating: 1,
	},
	ackegapberry: {
		name: "Ackegap Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Plastic",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Plastic' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67159,
		isNonstandard: "Future",
		rating: 1,
	},
	thiclonberry: {
		name: "Thiclon Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fabric",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fabric' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67160,
		isNonstandard: "Future",
		rating: 1,
	},
	naltereberry: {
		name: "Naltere Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Time",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Time' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67161,
		isNonstandard: "Future",
		rating: 1,
	},
	istartberry: {
		name: "Istart Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Paint",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Paint' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67162,
		isNonstandard: "Future",
		rating: 1,
	},
	stomegenberry: {
		name: "Stomegen Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Crystal",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Crystal' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67163,
		isNonstandard: "Future",
		rating: 1,
	},
	fohazamberry: {
		name: "Fohazam Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Meme",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Meme' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67164,
		isNonstandard: "Future",
		rating: 1,
	},
	lomeitberry: {
		name: "Lomeit Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Heart",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Heart' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67165,
		isNonstandard: "Future",
		rating: 1,
	},
	symgrieberry: {
		name: "Symgrie Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Greasy",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Greasy' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67166,
		isNonstandard: "Future",
		rating: 1,
	},
	murkycapsule: {
		name: "Murky Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('midnight');
		},
		num: 67167,
		isNonstandard: "Future",
		rating: 1,
	},
	acidycapsule: {
		name: "Acidy Capsule",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setWeather('acidrain');
		},
		num: 67168,
		isNonstandard: "Future",
		rating: 1,
	},
	blazingfeather: {
		name: "Blazing Feather",
		spritenum: 0,
		fling: {
			basePower: 110,
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hasType('Fire') && target.hasType('Flying')) {
				if (move && (move.type === 'Rock' || move.type === 'Wind')) {
					return this.chainModify(0.4);
				}
			}
		},
		num: 67169,
		isNonstandard: "Future",
		rating: 1,
	},
	riotshield: {
		name: "Riot Shield",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		onModifyDefPriority: 1,
		onModifyDef(def) {
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: 67170,
		isNonstandard: "Future",
		rating: 3,
	},
	falloutcapsule: {/* TODO when Fallout is introduced **/
		name: "Fallout Capsule",
		spritenum: 0,
		num: 67171,
		isNonstandard: "Future",
		rating: 1,
	},
	grassycapsule: {
		name: "Grassy Capsule",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setTerrain('grassyterrain');
		},
		num: 67172,
		isNonstandard: "Future",
		rating: 1,
	},
	mistycapsule: {
		name: "Misty Capsule",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setTerrain('mistyterrain');
		},
		num: 67173,
		isNonstandard: "Future",
		rating: 1,
	},
	electriccapsule: {
		name: "Electric Capsule",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setTerrain('electricterrain');
		},
		num: 67174,
		isNonstandard: "Future",
		rating: 1,
	},
	psychiccapsule: {
		name: "Psychic Capsule",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.setTerrain('psychicterrain');
		},
		num: 67175,
		isNonstandard: "Future",
		rating: 1,
	},
	icycapsule: {/* TODO when introduced **/
		name: "Icy Capsule",
		spritenum: 0,
		num: 67176,
		isNonstandard: "Future",
		rating: 1,
	},
	marshycapsule: {/* TODO when introduced **/
		name: "Marshy Capsule",
		spritenum: 0,
		num: 67177,
		isNonstandard: "Future",
		rating: 1,
	},
	wizardcapsule: {/* TODO when introduced **/
		name: "Wizard Capsule",
		spritenum: 0,
		num: 67178,
		isNonstandard: "Future",
		rating: 1,
	},
	volcaniccapsule: {/* TODO when introduced **/
		name: "Volcanic Capsule",
		spritenum: 0,
		num: 67179,
		isNonstandard: "Future",
		rating: 1,
	},
	starfieldcapsule: {/* TODO when introduced **/
		name: "Starfield Capsule",
		spritenum: 0,
		num: 67180,
		isNonstandard: "Future",
		rating: 1,
	},
	librarycapsule: {/* TODO when introduced **/
		name: "Library Capsule",
		spritenum: 0,
		num: 67181,
		isNonstandard: "Future",
		rating: 1,
	},
	comfypillow: {/* Used in data/mod/wack/condition.ts **/
		name: "Comfy Pillow",
		spritenum: 0,
		num: 67182,
		isNonstandard: "Future",
		rating: 1,
	},
	greencard: {
		name: "Green Card",
		spritenum: 0,
		onTrapPokemon(pokemon) {
			pokemon.tryTrap();
		},
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'item: Green Card');
			return null;
		},
		num: 67183,
		isNonstandard: "Future",
		rating: 1,
	},
	holyshield: {
		name: "Holy Shield",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Chaos') {
				this.add("-activate", target, "item: Holy Shield");
				this.add('-immune', target, '[from] item: Holy Shield');
				return null;
			}
		},
		onBeforeMove(source, target, move) {
			if (move.category === 'Physical' || move.category === 'Special') {
				const item = source.takeItem();
				if (item) {
					this.add('-enditem', source, item.name, '[from] item: Holy Shield', '[of] ' + source);
				}
			}
		},
		num: 67184,
		isNonstandard: "Future",
		rating: 1,
	},
	lavarock: {
		name: "Lava Rock",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hasType('Magma') || pokemon.hasType('Fire')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else if (!pokemon.hasAbility('magmarmor')) {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		num: 67186,
		isNonstandard: "Future",
		rating: 1,
	},
	arhelmet: {
		name: "Ar Helmet",	/* TODO: Rooms for Ar Helmet to be later defined in data/mod/wack/moves.ts **/
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		num: 67187,
		isNonstandard: "Future",
		rating: 1,
	},
	vrheadset: {/* TODO: Rooms for Vr Helmet to be later defined in data/mod/wack/moves.ts **/
		name: "Vr Headset",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		num: 67188,
		isNonstandard: "Future",
		rating: 1,
	},
	boxinggloves: {
		name: "Boxing Gloves",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && move.flags['punch']) {
				return this.chainModify(1.25);
			}
		},
		num: 67189,
		isNonstandard: "Future",
		rating: 1,
	},
	spikedboots: {
		name: "Spiked Boots",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && move.flags['kick']) {
				return this.chainModify(1.2);
			}
		},
		num: 67190,
		isNonstandard: "Future",
		rating: 1,
	},
	shoepolish: {
		name: "Shoe Polish",
		spritenum: 0,
		onAfterMoveSecondarySelf(target, source, move) {
			if (move.flags['kick']) {
				this.add("-activate", target, "item: Shoe Polish");
				this.boost({spe: 1}, target, target);
			}
		},
		num: 67191,
		isNonstandard: "Future",
		rating: 1,
	},
	trainingglove: {
		name: "Training Glove",
		spritenum: 0,
		onAfterMoveSecondarySelf(target, source, move) {
			if (move.flags['punch']) {
				this.add("-activate", target, "item: Training Glove");
				this.boost({atk: 1}, target, target);
			}
		},
		num: 67192,
		isNonstandard: "Future",
		rating: 1,
	},
	sandals: {
		name: "Sandals",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.25);
			}
		},
		num: 67193,
		isNonstandard: "Future",
		rating: 1,
	},
	skis: {
		name: "Skis",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('hail')) {
				return this.chainModify(1.25);
			}
		},
		num: 67194,
		isNonstandard: "Future",
		rating: 1,
	},
	skates: {/* TODO when Icy Terrain is introduced **/
		name: "Skates",
		spritenum: 0,
		num: 67195,
		isNonstandard: "Future",
		rating: 1,
	},
	snowshoes: {/* TODO Add Icy Terrain condition **/
		name: "Snowshoes",
		spritenum: 0,
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (!this.field.isWeather('hail')) return;
			if (boost.spe && boost.spe < 0) {
				delete boost.spe;
				if (!(effect as ActiveMove).secondaries) {
					this.add('-activate', target, 'item: Snowshoes');
					this.add("-fail", target, "unboost", "Speed", "[from] item: Snowshoes", "[of] " + target);
				}
			}
		},
		num: 67196,
		isNonstandard: "Future",
		rating: 1,
	},
	hazmatsuit: {/* TODO Add Fallout and other conditions **/
		name: "Hazmat Suit",
		spritenum: 0,
		num: 67197,
		isNonstandard: "Future",
		rating: 1,
	},
	librarycard: {/* TODO when Library is introduced **/
		name: "Library Card",
		spritenum: 0,
		num: 67198,
		isNonstandard: "Future",
		rating: 1,
	},
	saunaheater: {/* TODO when Sauna is introduced **/
		name: "Sauna Heater",
		spritenum: 0,
		num: 67199,
		isNonstandard: "Future",
		rating: 1,
	},
	foggysteamer: {/* TODO when Sauna is introduced **/
		name: "Foggy Steamer",
		spritenum: 0,
		num: 67200,
		isNonstandard: "Future",
		rating: 1,
	},
	swimsuit: {
		name: "Swim Suit",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('raindance')) {
				return this.chainModify(1.25);
			}
		},
		num: 67201,
		isNonstandard: "Future",
		rating: 1,
	},
	volcanicseed: {/* TODO when Volcano Terrain is introduced **/
		name: "Volcanic Seed",
		spritenum: 0,
		num: 67202,
		isNonstandard: "Future",
		rating: 1,
	},
	marshyseed: {/* TODO when Marshy Terrain is introduced **/
		name: "Marshy Seed",
		spritenum: 0,
		num: 67203,
		isNonstandard: "Future",
		rating: 1,
	},
	tunlawberry: {
		name: "Tunlaw Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Heart",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('attract');
		},
		num: 67204,
		isNonstandard: "Future",
		rating: 1,
	},
	excisberry: {
		name: "Excis Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Divine",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['curse']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('curse');
		},
		num: 67205,
		isNonstandard: "Future",
		rating: 1,
	},
	coagberry: {/* TODO when Bleeding is introduced */
		name: "Coag Berry",
		spritenum: 0,
		num: 67206,
		isNonstandard: "Future",
		rating: 1,
	},
	ambrosaberry: {
		name: "Ambrosa Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Divine",
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fabric' && target.getMoveHitData(move).typeMod > 0) {
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
		num: 67207,
		isNonstandard: "Future",
		rating: 1,
	},
	wingrenberry: {
		name: "Wingren Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Time",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['encore']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('encore');
		},
		num: 67208,
		isNonstandard: "Future",
		rating: 1,
	},
	garsinberry: {
		name: "Garsin Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Sound",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['taunt']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('taunt');
		},
		num: 67209,
		isNonstandard: "Future",
		rating: 1,
	},
	yllohberry: {
		name: "Ylloh Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Cyber",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['disable']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('disable');
		},
		num: 67210,
		isNonstandard: "Future",
		rating: 1,
	},
	looffahberry: {
		name: "Looffah Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Magic",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['torment']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('torment');
		},
		num: 67211,
		isNonstandard: "Future",
		rating: 1,
	},
	bandaid: {/* TODO when Bleeding is introduced **/
		name: "Bandaid",
		spritenum: 0,
		num: 67212,
		isNonstandard: "Future",
		rating: 1,
	},
	librarybinding: {/* TODO when Library is introduced **/
		name: "Library Binding",
		spritenum: 0,
		num: 67213,
		isNonstandard: "Future",
		rating: 1,
	},
	cyberspacecapsule: {/* TODO when Cyberspace is introduced **/
		name: "Cyberspace Capsule",
		spritenum: 0,
		num: 67214,
		isNonstandard: "Future",
		rating: 1,
	},
	gallerycapsule: {/* TODO when Art Gallery is introduced **/
		name: "Gallery Capsule",
		spritenum: 0,
		num: 67215,
		isNonstandard: "Future",
		rating: 1,
	},
	choicejacket: {
		name: "Choice Jacket",
		spritenum: 0,
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
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 67216,
		isNonstandard: "Future",
		rating: 1,
	},
	choicecloak: {
		name: "Choice Cloak",
		spritenum: 0,
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
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.5);
		},
		isChoice: true,
		num: 67217,
		isNonstandard: "Future",
		rating: 1,
	},
	mettleberry: {
		name: "Mettle Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Wood",
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') {
				pokemon.eatItem();
				return null;
			}
		},
		onEat() { },
		num: 67218,
		isNonstandard: "Future",
		rating: 1,
	},
	boisonberry: {
		name: "Boison Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Virus",
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
			this.heal(pokemon.baseMaxhp / 2);
			pokemon.trySetStatus('psn', pokemon);
		},
		num: 67219,
		isNonstandard: "Future",
		rating: 1,
	},
	perepberry: {
		name: "Perep Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Magma",
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
			this.heal(pokemon.baseMaxhp / 2);
			pokemon.trySetStatus('brn', pokemon);
		},
		num: 67220,
		isNonstandard: "Future",
		rating: 1,
	},
	dollberry: {
		name: "Doll Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Tech",
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
			this.heal(pokemon.baseMaxhp / 2);
			pokemon.trySetStatus('par', pokemon);
		},
		num: 67221,
		isNonstandard: "Future",
		rating: 1,
	},
	normaldust: {
		name: "Normal Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Normal';
			}
		},
		num: 67222,
		isNonstandard: "Future",
		rating: 1,
	},
	waterdust: {
		name: "Water Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Water';
			}
		},
		num: 67223,
		isNonstandard: "Future",
		rating: 1,
	},
	firedust: {
		name: "Fire Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Fire';
			}
		},
		num: 67224,
		isNonstandard: "Future",
		rating: 1,
	},
	grassdust: {
		name: "Grass Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Grass';
			}
		},
		num: 67225,
		isNonstandard: "Future",
		rating: 1,
	},
	fightingdust: {
		name: "Fighting Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Fighting';
			}
		},
		num: 67226,
		isNonstandard: "Future",
		rating: 1,
	},
	flyingdust: {
		name: "Flying Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Flying';
			}
		},
		num: 67227,
		isNonstandard: "Future",
		rating: 1,
	},
	poisondust: {
		name: "Poison Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Poison';
			}
		},
		num: 67228,
		isNonstandard: "Future",
		rating: 1,
	},
	grounddust: {
		name: "Ground Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Ground';
			}
		},
		num: 67229,
		isNonstandard: "Future",
		rating: 1,
	},
	rockdust: {
		name: "Rock Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Rock';
			}
		},
		num: 67230,
		isNonstandard: "Future",
		rating: 1,
	},
	bugdust: {
		name: "Bug Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Bug';
			}
		},
		num: 67231,
		isNonstandard: "Future",
		rating: 1,
	},
	ghostdust: {
		name: "Ghost Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Ghost';
			}
		},
		num: 67232,
		isNonstandard: "Future",
		rating: 1,
	},
	electricdust: {
		name: "Electric Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Electric';
			}
		},
		num: 67233,
		isNonstandard: "Future",
		rating: 1,
	},
	psychicdust: {
		name: "Psychic Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Psychic';
			}
		},
		num: 67234,
		isNonstandard: "Future",
		rating: 1,
	},
	icedust: {
		name: "Ice Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Ice';
			}
		},
		num: 67235,
		isNonstandard: "Future",
		rating: 1,
	},
	steeldust: {
		name: "Steel Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Steel';
			}
		},
		num: 67236,
		isNonstandard: "Future",
		rating: 1,
	},
	darkdust: {
		name: "Dark Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Dark';
			}
		},
		num: 67237,
		isNonstandard: "Future",
		rating: 1,
	},
	dragondust: {
		name: "Dragon Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Dragon';
			}
		},
		num: 67238,
		isNonstandard: "Future",
		rating: 1,
	},
	fairydust: {
		name: "Fairy Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Fairy';
			}
		},
		num: 67239,
		isNonstandard: "Future",
		rating: 1,
	},
	wooddust: {
		name: "Wood Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Wood';
			}
		},
		num: 67240,
		isNonstandard: "Future",
		rating: 1,
	},
	magmadust: {
		name: "Magma Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Magma';
			}
		},
		num: 67241,
		isNonstandard: "Future",
		rating: 1,
	},
	steamdust: {
		name: "Steam Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Steam';
			}
		},
		num: 67242,
		isNonstandard: "Future",
		rating: 1,
	},
	winddust: {
		name: "Wind Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Wind';
			}
		},
		num: 67243,
		isNonstandard: "Future",
		rating: 1,
	},
	paperdust: {
		name: "Paper Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Paper';
			}
		},
		num: 67244,
		isNonstandard: "Future",
		rating: 1,
	},
	techdust: {
		name: "Tech Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Tech';
			}
		},
		num: 67245,
		isNonstandard: "Future",
		rating: 1,
	},
	rubberdust: {
		name: "Rubber Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Rubber';
			}
		},
		num: 67246,
		isNonstandard: "Future",
		rating: 1,
	},
	feardust: {
		name: "Fear Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Fear';
			}
		},
		num: 67247,
		isNonstandard: "Future",
		rating: 1,
	},
	magicdust: {
		name: "Magic Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Magic';
			}
		},
		num: 67248,
		isNonstandard: "Future",
		rating: 1,
	},
	lightdust: {
		name: "Light Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Light';
			}
		},
		num: 67249,
		isNonstandard: "Future",
		rating: 1,
	},
	cosmicdust: {
		name: "Cosmic Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Cosmic';
			}
		},
		num: 67250,
		isNonstandard: "Future",
		rating: 1,
	},
	sounddust: {
		name: "Sound Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Sound';
			}
		},
		num: 67251,
		isNonstandard: "Future",
		rating: 1,
	},
	fooddust: {
		name: "Food Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Food';
			}
		},
		num: 67252,
		isNonstandard: "Future",
		rating: 1,
	},
	zombiedust: {
		name: "Zombie Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Zombie';
			}
		},
		num: 67253,
		isNonstandard: "Future",
		rating: 1,
	},
	nucleardust: {
		name: "Nuclear Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Nuclear';
			}
		},
		num: 67254,
		isNonstandard: "Future",
		rating: 1,
	},
	virusdust: {
		name: "Virus Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Virus';
			}
		},
		num: 67255,
		isNonstandard: "Future",
		rating: 1,
	},
	cyberdust: {
		name: "Cyber Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Cyber';
			}
		},
		num: 67256,
		isNonstandard: "Future",
		rating: 1,
	},
	glassdust: {
		name: "Glass Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Glass';
			}
		},
		num: 67257,
		isNonstandard: "Future",
		rating: 1,
	},
	plasticdust: {
		name: "Plastic Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Plastic';
			}
		},
		num: 67258,
		isNonstandard: "Future",
		rating: 1,
	},
	fabricdust: {
		name: "Fabric Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Fabric';
			}
		},
		num: 67259,
		isNonstandard: "Future",
		rating: 1,
	},
	chaosdust: {
		name: "Chaos Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Chaos';
			}
		},
		num: 67260,
		isNonstandard: "Future",
		rating: 1,
	},
	divinedust: {
		name: "Divine Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Divine';
			}
		},
		num: 67261,
		isNonstandard: "Future",
		rating: 1,
	},
	timedust: {
		name: "Time Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Time';
			}
		},
		num: 67262,
		isNonstandard: "Future",
		rating: 1,
	},
	paintdust: {
		name: "Paint Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Paint';
			}
		},
		num: 67263,
		isNonstandard: "Future",
		rating: 1,
	},
	crystaldust: {
		name: "Crystal Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Crystal';
			}
		},
		num: 67264,
		isNonstandard: "Future",
		rating: 1,
	},
	memedust: {
		name: "Meme Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Meme';
			}
		},
		num: 67265,
		isNonstandard: "Future",
		rating: 1,
	},
	blooddust: {
		name: "Blood Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Blood';
			}
		},
		num: 67266,
		isNonstandard: "Future",
		rating: 1,
	},
	greasydust: {
		name: "Greasy Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Greasy';
			}
		},
		num: 67267,
		isNonstandard: "Future",
		rating: 1,
	},
	heartdust: {
		name: "Heart Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Heart';
			}
		},
		num: 67268,
		isNonstandard: "Future",
		rating: 1,
	},
	ogredust: {
		name: "Ogre Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Ogre';
			}
		},
		num: 67269,
		isNonstandard: "Future",
		rating: 1,
	},
	qmarksdust: {
		name: "Qmarksdust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Qmarks';
			}
		},
		num: 67270,
		isNonstandard: "Future",
		rating: 1,
	},
	shadowdust: {
		name: "Shadow Dust",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status') &&
			!(move.name === 'Tera Blast' && pokemon.terastallized)) {
				pokemon.useItem();
				move.type = 'Shadow';
			}
		},
		num: 67271,
		isNonstandard: "Future",
		rating: 1,
	},
	icepack: {
		name: "Icepack",
		spritenum: 0,
		fling: {
			basePower: 50,
		},
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Water' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ice';
			}
		},
		num: 67272,
		isNonstandard: "Future",
		rating: 1,
	},
	novicebelt: {
		name: "Novice Belt",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Novice Belt boost');
				return this.chainModify(1.2);
			}
		},
		num: 67273,
		isNonstandard: "Future",
		rating: 1,
	},
	gravitymodule: {/* Used in data/mod/wack/moves.ts **/
		name: "Gravity Module",
		spritenum: 0,
		num: 67274,
		isNonstandard: "Future",
		rating: 1,
	},
	rockcandy: {
		name: "Rock Candy",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hasType('Rock')) {
				this.heal(pokemon.baseMaxhp / 16);
			} else {
				this.damage(pokemon.baseMaxhp / 8);
			}
		},
		num: 67275,
		isNonstandard: "Future",
		rating: 1,
	},
	gubiberry: {
		name: "Gubi Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Plastic",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['embargo']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('embargo');
		},
		num: 67276,
		isNonstandard: "Future",
		rating: 1,
	},
	siberrberry: {
		name: "Siberr Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Rubber",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['healblock']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('healblock');
		},
		num: 67277,
		isNonstandard: "Future",
		rating: 1,
	},
	waterballoon: {
		name: "Water Balloon",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.addPseudoWeather('watersport');
		},
		num: 67278,
		isNonstandard: "Future",
		rating: 1,
	},
	mudballoon: {
		name: "Mud Balloon",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			target.useItem();
			this.field.addPseudoWeather('mudsport');
		},
		num: 67279,
		isNonstandard: "Future",
		rating: 1,
	},
	magmaballoon: {
		name: "Magma Balloon",
		spritenum: 0,
		onStart(target) {
			if (!target.ignoringItem() && !this.field.getPseudoWeather('gravity')) {
				this.add('-item', target, 'Magma Balloon');
			}
		},
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		onDamagingHit(damage, target, source, move) {
			this.add('-enditem', target, 'Magma Balloon');
			target.item = '';
			target.itemState = {id: '', target};
			this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('magmaballoon'));
		},
		onAfterSubDamage(damage, target, source, effect) {
			this.debug('effect: ' + effect.id);
			if (effect.effectType === 'Move') {
				this.add('-enditem', target, 'Magma Balloon');
				target.item = '';
				target.itemState = {id: '', target};
				this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('magmaballoon'));
			}
		},
		num: 67280,
		isNonstandard: "Future",
		rating: 1,
	},
	steamballoon: {/* TODO when Steam Sport is introduced **/
		name: "Steam Balloon",
		spritenum: 0,
		num: 67281,
		isNonstandard: "Future",
		rating: 1,
	},
	supressionstone: { // Implemented in sim/pokemon.ts
		name: "Supression Stone",
		spritenum: 0,
		num: 67282,
		isNonstandard: "Future",
		rating: 1,
	},
	resistancepolicy: {
		name: "Resistance Policy",
		spritenum: 0,
		fling: {
			basePower: 80,
		},
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod < 0) {
				target.useItem();
			}
		},
		boosts: {
			def: 2,
			spd: 2,
		},
		num: 67283,
		isNonstandard: "Future",
		rating: 1,
	},
	chloroflower: {
		name: "Chloro Flower",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sunnyday')) {
				return this.chainModify(1.25);
			}
		},
		num: 67284,
		isNonstandard: "Future",
		rating: 1,
	},
	coconaberry: {
		name: "Cocona Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Sound",
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['meanlook'] || pokemon.volatiles['block']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.volatiles['meanlook']) pokemon.removeVolatile('taunt');
			if (pokemon.volatiles['block']) pokemon.removeVolatile('block');
		},
		num: 67285,
		isNonstandard: "Future",
		rating: 1,
	},
	gravityseed: {
		name: "Gravity Seed",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.getPseudoWeather('gravity')) {
				pokemon.useItem();
			}
		},
		onAnyPseudoWeatherChange(pokemon) {
			if (this.field.getPseudoWeather('gravity')) {
				pokemon.useItem();
			}
		},
		boosts: {
			spd: 1,
		},
		num: 67286,
		isNonstandard: "Future",
		rating: 1,
	},
	sunglasses: {
		name: "Sunglasses",
		spritenum: 0,
		fling: {
			basePower: 30,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Light') {
				return this.chainModify([4915, 4096]);
			}
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target) && ['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				this.debug('Zoom Lens boosting accuracy');
				return this.chainModify([4915, 4096]);
			}
		},
		num: 67287,
		isNonstandard: "Future",
		rating: 1,
	},
	gravitycore: {
		name: "Gravity Core",
		spritenum: 0,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.getPseudoWeather('gravity') && move.type === 'Cosmic') {
				return this.chainModify(1.75);
			}
		},
		num: 67288,
		isNonstandard: "Future",
		rating: 1,
	},
	sandcastlekit: {
		name: "Sandcastle Kit",
		spritenum: 0,
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(1.3);
			}
		},
		num: 67289,
		isNonstandard: "Future",
		rating: 1,
	},
	raincoat: {
		name: "Raincoat",
		spritenum: 0,
		onModifySpDPriority: 1,
		onModifySpD(def, pokemon) {
			if (this.field.isWeather('raindance')) {
				return this.chainModify(1.3);
			}
		},
		num: 67290,
		isNonstandard: "Future",
		rating: 1,
	},
	ativumberry: {
		name: "Ativum Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Light",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true && target?.hasType('Ghost')) {
				if (move.type !== 'Fear') {
					move.ignoreImmunity['Fighting'] = true;
					move.ignoreImmunity['Normal'] = true;
					move.ignoreImmunity['Blood'] = true;
					pokemon.eatItem();
				} else if (!target?.hasType('Zombie') && move.type === 'Fear') {
					move.ignoreImmunity['Fear'] = true;
					pokemon.eatItem();
				}
			}
		},
		onEat(pokemon) { },
		num: 67291,
		isNonstandard: "Future",
		rating: 1,
	},
	igaradberry: {
		name: "Igarad Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Steel",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
				pokemon.eatItem();
			}
		},
		num: 67292,
		isNonstandard: "Future",
		rating: 1,
	},
	inshuberry: {
		name: "Inshu Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fabric",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true && !target?.hasType('Rubber')) {
				move.ignoreImmunity['Electric'] = true;
				pokemon.eatItem();
			}
		},
		num: 67293,
		isNonstandard: "Future",
		rating: 1,
	},
	drakfruberry: {
		name: "Drakfru Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dragon",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Dragon'] = true;
				pokemon.eatItem();
			}
		},
		num: 67294,
		isNonstandard: "Future",
		rating: 1,
	},
	pyscoberry: {
		name: "Pysco Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fairy",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Dark'] = true;
				pokemon.eatItem();
			}
		},
		num: 67295,
		isNonstandard: "Future",
		rating: 1,
	},
	ogravberry: {
		name: "Ograv Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Wind",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Flying'] = true;
				pokemon.eatItem();
			}
		},
		num: 67296,
		isNonstandard: "Future",
		rating: 1,
	},
	poltraberry: {
		name: "Poltra Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Normal",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Normal'] = true;
				pokemon.eatItem();
			}
		},
		num: 67297,
		isNonstandard: "Future",
		rating: 1,
	},
	cowbell: {
		name: "Cowbell",
		spritenum: 0,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Miltank') {
				return this.chainModify(1.25);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Miltank') {
				return this.chainModify(1.25);
			}
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Miltank') {
				this.heal(pokemon.baseMaxhp / 18);
			}
		},
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage || !(target.baseSpecies.baseSpecies === 'Miltank')) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2 && target.baseSpecies.baseSpecies) {
				this.add("-activate", target, "item: Cowbell");
				this.boost({atk: 1, def: 1}, target, target);
			}
		},
		itemUser: ['Miltank'],
		num: 67298,
		isNonstandard: "Future",
		rating: 1,
	},
	iaraytberry: {
		name: "Iarayt Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Nuclear",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Bug'] = true;
				pokemon.eatItem();
			}
		},
		num: 67299,
		isNonstandard: "Future",
		rating: 1,
	},
	zodziberry: {
		name: "Zodzi Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Cosmic",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Psychic'] = true;
				pokemon.eatItem();
			}
		},
		num: 67300,
		isNonstandard: "Future",
		rating: 1,
	},
	arcakberry: {
		name: "Arcak Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Magic",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Dragon'] = true;
				pokemon.eatItem();
			}
		},
		num: 67301,
		isNonstandard: "Future",
		rating: 1,
	},
	shurbberry: {
		name: "Shurb Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Rubber",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Rubber'] = true;
				pokemon.eatItem();
			}
		},
		num: 67302,
		isNonstandard: "Future",
		rating: 1,
	},
	vaccuberry: {
		name: "Vaccu Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Cosmic",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Cosmic'] = true;
				pokemon.eatItem();
			}
		},
		num: 67303,
		isNonstandard: "Future",
		rating: 1,
	},
	gluttberry: {
		name: "Glutt Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Food",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Food'] = true;
				pokemon.eatItem();
			}
		},
		num: 67304,
		isNonstandard: "Future",
		rating: 1,
	},
	tivomberry: {
		name: "Tivom Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Zombie",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fear'] = true;
				pokemon.eatItem();
			}
		},
		num: 67305,
		isNonstandard: "Future",
		rating: 1,
	},
	srapyberry: {
		name: "Srapy Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Glass",
		},
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon, target) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Glass'] = true;
				pokemon.eatItem();
			}
		},
		num: 67306,
		isNonstandard: "Future",
		rating: 1,
	},
	invertedrune: {
		name: "Inverted Rune",
		spritenum: 0,
		onEffectivenessPriority: 1,
		onEffectiveness(typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && move.id === '1000folds' && type === 'Steel') return;
			if (move && move.id === 'airshooter' && type === 'Flying') return;
			if (move && !this.dex.getImmunity(move, type)) return 1;
			return -typeMod;
		},
		num: 67307,
		isNonstandard: "Future",
		rating: 1,
	},
	gouraberry: {
		name: "Goura Berry",
		spritenum: 0,
		onCriticalHit(pokemon, source, move) {
			if (pokemon.hasItem('gouraberry')) {
				pokemon.eatItem();
				return false;
			}
			return;
		},
		onEat() { },
		num: 67308,
		isNonstandard: "Future",
		rating: 1,
	},
	gravitycapsule: {
		name: "Gravity Capsule",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			this.field.addPseudoWeather('gravity');
			target.useItem();
		},
		num: 67309,
		isNonstandard: "Future",
		rating: 1,
	},
	chaosflute: {
		name: "Chaos Flute",
		spritenum: 0,
		onFaint(target, source, effect) {
			source.addVolatile('confusion');
		},
		num: 67310,
		isNonstandard: "Future",
		rating: 1,
	},
	flyingballoon: {/* TODO when introduced **/
		name: "Flying Balloon",
		spritenum: 0,
		num: 67311,
		isNonstandard: "Future",
		rating: 1,
	},
	pandemiccapsule: {/* TODO when introduced **/
		name: "Pandemic Capsule",
		spritenum: 0,
		num: 67312,
		isNonstandard: "Future",
		rating: 1,
	},
	aethercapsule: {/* TODO when introduced **/
		name: "Aether Capsule",
		spritenum: 0,
		num: 67313,
		isNonstandard: "Future",
		rating: 1,
	},
	steamyrock: {/* TODO when introduced **/
		name: "Steamy Rock",
		spritenum: 0,
		num: 67314,
		isNonstandard: "Future",
		rating: 1,
	},
	featherrock: {/* TODO when introduced **/
		name: "Feather Rock",
		spritenum: 0,
		num: 67315,
		isNonstandard: "Future",
		rating: 1,
	},
	erodedrock: {/* TODO when introduced **/
		name: "Eroded Rock",
		spritenum: 0,
		num: 67316,
		isNonstandard: "Future",
		rating: 1,
	},
	scalyrock: {/* TODO when introduced **/
		name: "Scaly Rock",
		spritenum: 0,
		num: 67317,
		isNonstandard: "Future",
		rating: 1,
	},
	chargedrock: {/* Implemented in data/mod/wack/moves.ts **/
		name: "Charged Rock",
		spritenum: 0,
		num: 67318,
		isNonstandard: "Future",
		rating: 1,
	},
	brightrock: {/* TODO when introduced **/
		name: "Bright Rock",
		spritenum: 0,
		num: 67319,
		isNonstandard: "Future",
		rating: 1,
	},
	mossyrock: {/* Implemented in data/mod/wack/moves.ts **/
		name: "Mossy Rock",
		spritenum: 0,
		num: 67320,
		isNonstandard: "Future",
		rating: 1,
	},
	weirdrock: {/* Implemented in data/mod/wack/moves.ts **/
		name: "Weird Rock",
		spritenum: 0,
		num: 67321,
		isNonstandard: "Future",
		rating: 1,
	},
	virtualrock: {/* TODO when introduced **/
		name: "Virtual Rock",
		spritenum: 0,
		num: 67322,
		isNonstandard: "Future",
		rating: 1,
	},
	reflectiverock: {/* TODO when introduced **/
		name: "Reflective Rock",
		spritenum: 0,
		num: 67323,
		isNonstandard: "Future",
		rating: 1,
	},
	radioactiverock: {/* TODO when introduced **/
		name: "Radioactive Rock",
		spritenum: 0,
		num: 67324,
		isNonstandard: "Future",
		rating: 1,
	},
	paperrock: {/* TODO when introduced **/
		name: "Paper Rock",
		spritenum: 0,
		num: 67325,
		isNonstandard: "Future",
		rating: 1,
	},
	sweetrock: {/* TODO when introduced **/
		name: "Sweet Rock",
		spritenum: 0,
		num: 67326,
		isNonstandard: "Future",
		rating: 1,
	},
	viralrock: {/* TODO when introduced **/
		name: "Viral Rock",
		spritenum: 0,
		num: 67327,
		isNonstandard: "Future",
		rating: 1,
	},
	woodenrock: {/* TODO when introduced **/
		name: "Woodenrock",
		spritenum: 0,
		num: 67328,
		isNonstandard: "Future",
		rating: 1,
	},
	echorock: {/* TODO when introduced **/
		name: "Echo Rock",
		spritenum: 0,
		num: 67329,
		isNonstandard: "Future",
		rating: 1,
	},
	clasticrock: {/* TODO when introduced **/
		name: "Clastic Rock",
		spritenum: 0,
		num: 67330,
		isNonstandard: "Future",
		rating: 1,
	},
	swarmedrock: {/* TODO when introduced **/
		name: "Swarmed Rock",
		spritenum: 0,
		num: 67331,
		isNonstandard: "Future",
		rating: 1,
	},
	chromerock: {/* TODO when introduced **/
		name: "Chrome Rock",
		spritenum: 0,
		num: 67332,
		isNonstandard: "Future",
		rating: 1,
	},
	plagueorb: {
		name: "Plague Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'tox',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('tox', pokemon);
		},
		num: 67334,
		isNonstandard: "Future",
		rating: 1,
	},
	infernoorb: {
		name: "Inferno Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'brn',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('brn', pokemon);
		},
		num: 67335,
		isNonstandard: "Future",
		rating: 1,
	},
	stormorb: {
		name: "Storm Orb",
		spritenum: 0,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		num: 67336,
		isNonstandard: "Future",
		rating: 1,
	},
	glassarmor: {
		name: "Glass Armor",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (move && move.category === 'Special') {
				return this.chainModify(0.5);
			} else if (move && move.category === 'Physical') {
				return this.chainModify(2);
			}
		},
		num: 67337,
		isNonstandard: "Future",
		rating: 3,
	},
	confoundorb: {
		name: "Confound Orb",
		spritenum: 0,
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.addVolatile('confusion');
		},
		num: 67338,
		isNonstandard: "Future",
		rating: 1,
	},
	tormentorb: {
		name: "Torment Orb",
		spritenum: 0,
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.addVolatile('torment');
		},
		num: 67339,
		isNonstandard: "Future",
		rating: 1,
	},
	tauntorb: {
		name: "Taunt Orb",
		spritenum: 0,
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.addVolatile('taunt');
		},
		num: 67340,
		isNonstandard: "Future",
		rating: 1,
	},
	hotchocolate: {
		name: "Hot Chocolate",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.status === 'frz') {
				this.heal(pokemon.baseMaxhp / 10);
			}
		},
		num: 67341,
		isNonstandard: "Future",
		rating: 1,
	},
	icecream: {
		name: "Ice Cream",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.status === 'brn') {
				this.heal(pokemon.baseMaxhp / 10);
			}
		},
		num: 67342,
		isNonstandard: "Future",
		rating: 1,
	},
	yogurt: {
		name: "Yogurt",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.status === 'par') {
				this.heal(pokemon.baseMaxhp / 10);
			}
		},
		num: 67343,
		isNonstandard: "Future",
		rating: 1,
	},
	mixedmushrooms: {
		name: "Mixed Mushrooms",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.heal(pokemon.baseMaxhp / 10);
			}
		},
		num: 67344,
		isNonstandard: "Future",
		rating: 1,
	},
	carritberry: {
		name: "Carrit Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 120,
			type: "Glass",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({accuracy: 1});
		},
		num: 67345,
		isNonstandard: "Future",
		rating: 1,
	},
	ginsioberry: {
		name: "Ginsio Berry",
		spritenum: 0,
		isBerry: true,
		naturalGift: {
			basePower: 120,
			type: "Steam",
		},
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
					pokemon.hasAbility(['gluttony', 'bountifulharvest']) && pokemon.abilityState.gluttony)) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.boost({evasion: 1});
		},
		num: 67346,
		isNonstandard: "Future",
		rating: 4,
	},
	rottedrock: {/* TODO when introduced **/
		name: "Rotted Rock",
		spritenum: 0,
		num: 67347,
		isNonstandard: "Future",
		rating: 1,
	},
	feastcapsule: {/* TODO when introduced **/
		name: "Feast Capsule",
		spritenum: 0,
		num: 67348,
		isNonstandard: "Future",
		rating: 1,
	},
	mirrorcapsule: {/* TODO when introduced **/
		name: "Mirror Capsule",
		spritenum: 0,
		num: 67349,
		isNonstandard: "Future",
		rating: 1,
	},
	plainrock: {/* TODO when introduced **/
		name: "Plain Rock",
		spritenum: 0,
		num: 67350,
		isNonstandard: "Future",
		rating: 1,
	},
	graveyardcapsule: {/* TODO when introduced **/
		name: "Graveyard Capsule",
		spritenum: 0,
		num: 67351,
		isNonstandard: "Future",
		rating: 1,
	},
	iceballoon: {/* TODO when introduced **/
		name: "Ice Balloon",
		spritenum: 0,
		num: 67352,
		isNonstandard: "Future",
		rating: 1,
	},
	arboreumcapsule: {/* TODO when introduced **/
		name: "Arboreum Capsule",
		spritenum: 0,
		num: 67353,
		isNonstandard: "Future",
		rating: 1,
	},
	saunacapsule: {/* TODO when introduced **/
		name: "Sauna Capsule",
		spritenum: 0,
		num: 67354,
		isNonstandard: "Future",
		rating: 1,
	},
	sexyswimsuit: {
		name: "Sexy Swimsuit",
		spritenum: 0,
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(target, source) {
			if (this.randomChance(4, 10) && this.field.isWeather('rain')) {
				source.addVolatile('attract', target);
			}
		},
		num: 67355,
		isNonstandard: "Future",
		rating: 1,
	},
	rainbarrel: {
		name: "Rain Barrel",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (this.field.isWeather('rain')) {
				this.heal(pokemon.baseMaxhp / 14);
			}
		},
		num: 67356,
		isNonstandard: "Future",
		rating: 1,
	},
	blaringspeaker: {/* TODO when introduced **/
		name: "Blaring Speaker",
		spritenum: 0,
		num: 67357,
		isNonstandard: "Future",
		rating: 1,
	},
	factorycapsule: {/* TODO when introduced **/
		name: "Factory Capsule",
		spritenum: 0,
		num: 67358,
		isNonstandard: "Future",
		rating: 1,
	},
	recyclecapsule: {/* TODO when introduced **/
		name: "Recycle Capsule",
		spritenum: 0,
		num: 67359,
		isNonstandard: "Future",
		rating: 1,
	},
	prankkit: {
		name: "Prank Kit",
		spritenum: 0,
		onModifyPriority(priority, source, target, move) {
			if (move.category === 'Status') {
				source.useItem();
				return priority + 1;
			}
		},
		num: 67360,
		isNonstandard: "Future",
		rating: 1,
	},
	nightlight: {
		name: "Nightlight",
		spritenum: 0,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Dark' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Light';
			}
		},
		num: 67361,
		isNonstandard: "Future",
		rating: 1,
	},
	plasticrock: {/* TODO when introduced **/
		name: "Plastic Rock",
		spritenum: 0,
		num: 67362,
		isNonstandard: "Future",
		rating: 1,
	},
	bruxishite: {
		name: "Bruxishite",
		spritenum: 0,
		num: 67363,
		isNonstandard: "Future",
		rating: 1,
	},
	drampite: {
		name: "Drampite",
		spritenum: 0,
		num: 67364,
		isNonstandard: "Future",
		rating: 1,
	},
	youthincense: {
		name: "Youth Incense",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Time') {
				return this.chainModify(1.25);
			}
		},
		num: 67365,
		isNonstandard: "Future",
		rating: 1,
	},
	marshyincense: {
		name: "Marshy Incense",
		spritenum: 0,
		fling: {
			basePower: 10,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ground' || move.type === 'Water') {
				return this.chainModify(1.15);
			}
		},
		num: 67366,
		isNonstandard: "Future",
		rating: 1,
	},
	teaincense: {
		name: "Tea Incense",
		spritenum: 0,
		onUpdate(pokemon) {
			if (pokemon.volatiles['torment']) {
				pokemon.removeVolatile('torment');
			}
		},
		num: 67367,
		isNonstandard: "Future",
		rating: 1,
	},
	trojorsite: {
		name: "Trojorsite",
		spritenum: 0,
		num: 67368,
		isNonstandard: "Future",
		rating: 1,
	},
	dusknoirite: {
		name: "Dusknoirite",
		spritenum: 0,
		num: 67369,
		isNonstandard: "Future",
		rating: 1,
	},
	manarock: {/* TODO when Manaverse introduced **/
		name: "Mana Rock",
		spritenum: 0,
		num: 67370,
		isNonstandard: "Future",
		rating: 1,
	},
	gueriestite: {
		name: "Gueriestite",
		spritenum: 0,
		num: 67371,
		isNonstandard: "Future",
		rating: 1,
	},
	darkballoon: {/* TODO when Dark Spot introduced **/
		name: "Dark Balloon",
		spritenum: 0,
		num: 67372,
		isNonstandard: "Future",
		rating: 1,
	},
	c4: {
		name: "C4",
		spritenum: 0,
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				target.useItem();
				this.damage(source.baseMaxhp / 4, source, target);
			}
		},
		num: 67373,
		isNonstandard: "Future",
		rating: 1,
	},
	soupbowl: {
		name: "Soup Bowl",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			if (pokemon.hasType('Food')) {
				return this.chainModify(0.5);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (source.hasType('Food')) {
				return this.chainModify(0.75);
			}
		},
		num: 67374,
		isNonstandard: "Future",
		rating: 1,
	},
	toiletpaper: {
		name: "Toilet Paper",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Ground' || move.type === 'Poison') {
				target.useItem();
			}
		},
		boosts: {
			def: 2,
		},
		num: 67375,
		isNonstandard: "Future",
		rating: 1,
	},
	swarmcapsule: {/* TODO When introduced **/
		name: "Swarm Capsule",
		spritenum: 0,
		num: 67377,
		isNonstandard: "Future",
		rating: 1,
	},
	prismolisite: {
		name: "Prismolisite",
		spritenum: 0,
		num: 67378,
		isNonstandard: "Future",
		rating: 1,
	},
	horrorizer: {
		name: "Horrorizer",
		spritenum: 0,
		num: 67379,
		isNonstandard: "Future",
		rating: 1,
	},
	steadywindcapsule: {/* TODO When introduced **/
		name: "Steadywind Capsule",
		spritenum: 0,
		num: 67380,
		isNonstandard: "Future",
		rating: 1,
	},
	tempestcapsule: {/* TODO When introduced **/
		name: "Tempest Capsule",
		spritenum: 0,
		num: 67381,
		isNonstandard: "Future",
		rating: 1,
	},
	invertedcapsule: {/* TODO When introduced **/
		name: "Inverted Capsule",
		spritenum: 0,
		num: 67382,
		isNonstandard: "Future",
		rating: 1,
	},
	bouncycapsule: {/* TODO When introduced **/
		name: "Bouncy Capsule",
		spritenum: 0,
		num: 67383,
		isNonstandard: "Future",
		rating: 1,
	},
	manaversecapsule: {/* TODO When introduced **/
		name: "Manaverse Capsule",
		spritenum: 0,
		num: 67384,
		isNonstandard: "Future",
		rating: 1,
	},
	ultracloak: {
		name: "Ultra Cloak",
		spritenum: 0,
		onModifyDefPriority: 1,
		onModifyDef(def) {
			return this.chainModify(2.5);
		},
		onModifySpDPriority: 1,
		onModifySpD(spd) {
			return this.chainModify(2.5);
		},
		num: 67385,
		isNonstandard: "Future",
		rating: 4,
	},
	ultrascarf: {
		name: "Ultra Scarf",
		spritenum: 0,
		onModifySpe(spe) {
			return this.chainModify(2.5);
		},
		num: 67386,
		isNonstandard: "Future",
		rating: 4,
	},
	godsorb: {
		name: "GODSORB",
		spritenum: 0,
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('GODSORB boosting accuracy');
				return this.chainModify(1.8);
			}
		},
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('GODSORB decreasing accuracy');
			return this.chainModify(0.8);
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67387,
		isNonstandard: "Future",
		rating: 4,
	},
	probopassite: {
		name: "Probopassite",
		spritenum: 0,
		num: 67391,
		isNonstandard: "Future",
		rating: 1,
	},
	vampirefangs: {
		name: "Vampire Fangs",
		spritenum: 0,
		onAfterMoveSecondarySelf(source, target, move) {
			if (target.hasAbility('liquidooze') && move && move.flags['bite']) {
				this.damage(source.baseMaxhp / 8, source, target);
			} else if (source && source !== target && move && move.flags['bite'] && !source.forceSwitchFlag) {
				this.heal(source.baseMaxhp / 8, source, source);
			}
		},
		num: 67392,
		isNonstandard: "Future",
		rating: 2,
	},
	eviolate: {
		name: "Eviolate",
		spritenum: 0,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk(def, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA(spd, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		num: 67393,
		isNonstandard: "Future",
		rating: 3,
	},
	archersbow: {
		name: "Archers Bow",
		spritenum: 0,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['arrow']) {
				this.debug('Archers Bow boost');
				return this.chainModify(1.25);
			}
		},
		num: 67394,
		isNonstandard: "Future",
		rating: 1,
	},
	spiritbell: {
		name: "Spirit Bell",
		spritenum: 0,
		onModifyMove(move, pokemon, target) {
			if (this.randomChance(2, 100)) {
				move.ohko = true;
			}
		},
		num: 67395,
		isNonstandard: "Future",
		rating: 1,
	},
	battlewhip: {/* Only exists in the PBS, not the game's code**/
		name: "Battle Whip",
		spritenum: 0,
		num: 67396,
		isNonstandard: "Future",
		rating: 1,
	},
	weakeningwhip: {
		name: "Weakening Whip",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						atk: -1,
					},
				});
			}
		},
		num: 67397,
		isNonstandard: "Future",
		rating: 1,
	},
	shatteringhammer: {
		name: "Shattering Hammer",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						def: -1,
					},
				});
			}
		},
		num: 67398,
		isNonstandard: "Future",
		rating: 1,
	},
	distracttrumpet: {
		name: "Distract Trumpet",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						spa: -1,
					},
				});
			}
		},
		num: 67399,
		isNonstandard: "Future",
		rating: 1,
	},
	enfeeblescepter: {
		name: "Enfeeble Scepter",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						spd: -1,
					},
				});
			}
		},
		num: 67400,
		isNonstandard: "Future",
		rating: 1,
	},
	gooeygloves: {
		name: "Gooey Gloves",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						spe: -1,
					},
				});
			}
		},
		num: 67401,
		isNonstandard: "Future",
		rating: 1,
	},
	blindingprism: {
		name: "Blinding Prism",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						accuracy: -1,
					},
				});
			}
		},
		num: 67402,
		isNonstandard: "Future",
		rating: 1,
	},
	alluringnectar: {
		name: "Alluring Nectar",
		spritenum: 0,
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 40,
					boosts: {
						evasion: -1,
					},
				});
			}
		},
		num: 67403,
		isNonstandard: "Future",
		rating: 1,
	},
	curseddoll: {
		name: "Cursed Doll",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
		num: 67404,
		isNonstandard: "Future",
		rating: 1,
	},
	gigadrill: {/* Only exists in the PBS, not the game's code**/
		name: "Giga Drill",
		spritenum: 0,
		num: 67405,
		isNonstandard: "Future",
		rating: 1,
	},
	sheriffhat: {
		name: "Sheriff Hat",
		spritenum: 0,
		onModifyPriority(priority, source, target, move) {
			if (source.activeMoveActions === 0) {
				return priority + 1;
			}
		},
		num: 67406,
		isNonstandard: "Future",
		rating: 3,
	},
	sheriffbadge: {
		name: "Sheriff Badge",
		spritenum: 0,
		onTryHitPriority: 4,
		onTryHit(target, source, move) {
			if (move.priority <= 0.1) return;
			if (!move.flags['protect']) {
				if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
				if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
				return;
			}
			this.add('-activate', target, 'move: Quick Guard');
			const lockedmove = source.getVolatile('lockedmove');
			if (lockedmove) {
				// Outrage counter is reset
				if (source.volatiles['lockedmove'].duration === 2) {
					delete source.volatiles['lockedmove'];
				}
			}
			return this.NOT_FAIL;
		},
		num: 67407,
		isNonstandard: "Future",
		rating: 3,
	},
	wildwestcapsule: {/* TODO when Wild West is introduced **/
		name: "Wildwest Capsule",
		spritenum: 0,
		num: 67408,
		isNonstandard: "Future",
		rating: 1,
	},
	safetyhelmet: {
		name: "Safety Helmet",
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		spritenum: 0,
		num: 67409,
		isNonstandard: "Future",
		rating: 1,
	},
	pengemperorite: {
		name: "Pengemperorite",
		spritenum: 0,
		num: 67410,
		isNonstandard: "Future",
		rating: 1,
	},
	golurkite: {
		name: "Golurkite",
		spritenum: 0,
		num: 67411,
		isNonstandard: "Future",
		rating: 1,
	},
	nidoqueenite: {
		name: "Nidoqueenite",
		spritenum: 0,
		num: 67412,
		isNonstandard: "Future",
		rating: 1,
	},
	dontstopmenow: {
		name: "Dontstopmenow",
		spritenum: 0,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				this.heal(pokemon.baseMaxhp / 5);
			}
		},
		num: 67413,
		isNonstandard: "Future",
		rating: 3,
	},
	sanshoodie: {
		name: "Sans Hoodie",
		spritenum: 0,
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('Sans Hoodie decreasing accuracy');
			return this.chainModify(0.5);
		},
		num: 67415,
		isNonstandard: "Future",
		rating: 4,
	},
	eviocicle: {
		name: "Eviocicle",
		spritenum: 0,
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		num: 67422,
		isNonstandard: "Future",
		rating: 3,
	},
	wackorb: {
		name: "Wack Orb",
		spritenum: 0,
		num: 67423,
		isNonstandard: "Future",
		rating: 1,
	},
	fancyapple: {
		name: "Fancy Apple",
		spritenum: 0,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			return this.chainModify(1.5);
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			return this.chainModify(0.5);
		},
		num: 67424,
		isNonstandard: "Future",
		rating: 1,
	},
	fruitbunch: {
		name: "Fruit Bunch",
		spritenum: 0,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			return this.chainModify(0.5);
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			return this.chainModify(1.5);
		},
		num: 67425,
		isNonstandard: "Future",
		rating: 1,
	},
	tinofbeans: {
		name: "Tin Of Beans",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if (!target.fainted && target.hp > 0 && target.hp <= target.maxhp / 4) {
				target.useItem();
				this.heal(target.baseMaxhp / 7);
				source.trySetStatus('psn', target, this.effect);
			}
		},
		num: 67426,
		isNonstandard: "Future",
		rating: 1,
	},
	friedfood: {
		name: "Fried Food",
		spritenum: 0,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.eatItem();
				this.heal(pokemon.baseMaxhp / 6);
				pokemon.weighthg += 50;
			}
		},
		num: 67427,
		isNonstandard: "Future",
		rating: 1,
	},
	spicemix: {
		name: "Spice Mix",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if (!target.fainted && target.hp > 0 && target.hp <= target.maxhp / 4) {
				target.useItem();
				this.heal(target.baseMaxhp / 7);
				source.trySetStatus('brn', target, this.effect);
			}
		},
		num: 67428,
		isNonstandard: "Future",
		rating: 1,
	},
	saladmix: {/* TODO when Grass-type Charge move is introduced **/
		name: "Salad Mix",
		spritenum: 0,
		num: 67429,
		isNonstandard: "Future",
		rating: 1,
	},
	magnezonite: {
		name: "Magnezonite",
		spritenum: 0,
		num: 67430,
		isNonstandard: "Future",
		rating: 1,
	},
	saturnorb: {
		name: "Saturn Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Saturn Orb");
				this.boost({def: 1}, target, target);
			}
		},
		num: 67431,
		isNonstandard: "Future",
		rating: 2,
	},
	jupiterorb: {
		name: "Jupiter Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Jupiter Orb");
				this.boost({spa: 1}, target, target);
			}
		},
		num: 67432,
		isNonstandard: "Future",
		rating: 2,
	},
	neptuneorb: {
		name: "Neptune Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Neptune Orb");
				this.boost({accuracy: 1}, target, target);
			}
		},
		num: 67433,
		isNonstandard: "Future",
		rating: 2,
	},
	uranusorb: {
		name: "Uranus Orb",
		spritenum: 0,
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				this.effectState.checkedBerserk = false;
			} else {
				this.effectState.checkedBerserk = true;
			}
		},
		onTryEatItem(item) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return this.effectState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			this.effectState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.add("-activate", target, "item: Uranus Orb");
				this.boost({evasion: 1}, target, target);
			}
		},
		num: 67434,
		isNonstandard: "Future",
		rating: 4,
	},
	borderwall: {
		name: "Border Wall",
		spritenum: 0,
		onStart(target) {
			target.side.addSideCondition('lightscreen');
			target.side.addSideCondition('reflect');
		},
		num: 67435,
		isNonstandard: "Future",
		rating: 4,
	},
	brittlebones: {
		name: "Brittle Bones",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			return this.chainModify(1.2);
		},
		onModifySpe(spe, pokemon) {
			return this.chainModify(1.2);
		},
		num: 67436,
		isNonstandard: "Future",
		rating: 1,
	},
	sodapowder: {
		name: "Soda Powder",
		spritenum: 0,
		onDamagingHit(damage, target, source, move) {
			if ((move.type === 'Magma' || move.type === 'Fire') && target.hasType('Food')) {
				target.useItem();
			}
		},
		boosts: {
			def: 1,
			spd: 1,
		},
		num: 67438,
		isNonstandard: "Future",
		rating: 1,
	},
	supermalevitality: {
		name: "Super Male Vitality",
		spritenum: 0,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.useItem();
			}
		},
		boosts: {
			atk: 1,
			def: 1,
		},
		num: 67440,
		isNonstandard: "Future",
		rating: 1,
	},
	brainforce: {
		name: "Brainforce",
		spritenum: 0,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 4) {
				pokemon.useItem();
			}
		},
		boosts: {
			spa: 1,
			spd: 1,
		},
		num: 67441,
		isNonstandard: "Future",
		rating: 1,
	},
	angerorb: {
		name: "Anger Orb",
		spritenum: 0,
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] item: Anger Orb');
			}
		},
		num: 67445,
		isNonstandard: "Future",
		rating: 1,
	},
	breakdownorb: {
		name: "Breakdown Orb",
		spritenum: 0,
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({spa: 6});
				this.add('-setboost', target, 'spa', 12, '[from] item: Breakdown Orb');
			}
		},
		num: 67446,
		isNonstandard: "Future",
		rating: 1,
	},
	charizarditec: {
		name: "Charizardite C",
		spritenum: 0,
		num: 67461,
		isNonstandard: "Future",
		rating: 1,
	},
	pitchsludge: {
		name: "Pitch Sludge",
		spritenum: 0,
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.baseMaxhp / 4);
			} else {
				this.damage(pokemon.baseMaxhp / 2);
			}
		},
		num: 67462,
		isNonstandard: "Future",
		rating: 4,
	},
	craggyhelmet: {
		name: "Craggy Helmet",
		spritenum: 0,
		onDamagingHitOrder: 2,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				this.damage(source.baseMaxhp / 2, source, target);
			}
		},
		num: 67463,
		isNonstandard: "Future",
		rating: 3,
	},
	fangclaw: {
		name: "Fangclaw",
		spritenum: 0,
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
		onModifyCritRatio(critRatio, user) {
			return critRatio + 3;
		},
		num: 67464,
		isNonstandard: "Future",
		rating: 1,
	},
	theberry: {
		name: "The Berry",
		spritenum: 0,
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
		num: 67465,
		isNonstandard: "Future",
		rating: 3,
	},
	banhammer: {
		name: "Banhammer",
		spritenum: 0,
		onAfterMoveSecondary(target, source, move) {
			if (this.randomChance(4, 10) && move.type === 'Cyber') {
				source.addVolatile('volatile', target, this.effect);
			}
		},
		num: 67466,
		isNonstandard: "Future",
		rating: 1,
	},
	firewallarmor: {
		name: "Firewall Armor",
		spritenum: 0,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hasType('Cosmic')) {
				return this.chainModify(0.8);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.hasType('Cosmic')) {
				return this.chainModify(0.8);
			}
		},
		num: 67467,
		isNonstandard: "Future",
		rating: 1,
	},
	virusbuster: {/* TODO when Anti-Virus is included **/
		name: "Virus Buster",
		spritenum: 0,
		num: 67468,
		isNonstandard: "Future",
		rating: 1,
	},
	necronomicon: {/* TODO when Graveyard is included **/
		name: "Necronomicon",
		spritenum: 0,
		num: 67469,
		isNonstandard: "Future",
		rating: 1,
	},
	superpaper: {
		name: "Super Paper",
		spritenum: 0,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, source) {
			if (source.baseSpecies.baseSpecies === 'Pagie') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, source) {
			if (source.baseSpecies.baseSpecies === 'Pagie') {
				return this.chainModify(2);
			}
		},
		onModifySpe(spe, source) {
			if (source.baseSpecies.baseSpecies === 'Pagie') {
				return this.chainModify(2);
			}
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Paper' && user.baseSpecies.baseSpecies === 'Pagie') {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ['Pagie'],
		num: 67470,
		isNonstandard: "Future",
		rating: 1,
	},
	balletoutfit: {
		name: "Ballet Outfit",
		spritenum: 0,
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		num: 67471,
		isNonstandard: "Future",
		rating: 4,
	},
	kaleidoscope: {
		name: "Kaleido Scope",
		spritenum: 0,
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 3;
				}
			}
			if (move.self?.chance) move.self.chance *= 3;
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify(0.8);
			}
		},
		num: 67472,
		isNonstandard: "Future",
		rating: 1,
	},
	limbershoes: {/* Used in data/mod/wack/condition.ts **/
		name: "Limber Shoes",
		spritenum: 0,
		num: 67473,
		isNonstandard: "Future",
		rating: 1,
	},
	coldpack: {/* Used in sim/battle-actions.ts **/
		name: "Cold Pack",
		spritenum: 0,
		num: 67474,
		isNonstandard: "Future",
		rating: 1,
	},
	skyrimse: {
		name: "Skyrimse",
		spritenum: 0,
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
				if (!pokemon.hasItem('skyrimse')) {
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
				this.debug(`Current Skyrimse boost: ${dmgMod[numConsecutive]}/4096`);
				return this.chainModify([dmgMod[numConsecutive], 4096]);
			},
		},
		num: 67476,
		isNonstandard: "Future",
		rating: 1,
	},
	weddingdress: {
		name: "Wedding Dress",
		spritenum: 0,
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Heart') {
				return this.chainModify([4915, 4096]);
			}
		},
		num: 67477,
		isNonstandard: "Future",
		rating: 1,
	},
	bunnysuit: {/* TODO when move effect is introduced **/
		name: "Bunny Suit",
		spritenum: 0,
		num: 67478,
		isNonstandard: "Future",
		rating: 1,
	},
	catears: {/* TODO when move effect is introduced **/
		name: "Cat Ears",
		spritenum: 0,
		num: 67479,
		isNonstandard: "Future",
		rating: 1,
	},
	instantnoodles: {
		name: "Instant Noodles",
		spritenum: 0,
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
			this.boost({spe: 1});
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67480,
		isNonstandard: "Future",
		rating: 1,
	},
	sausages: {
		name: "Sausages",
		spritenum: 0,
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
			this.boost({atk: 1});
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67480,
		isNonstandard: "Future",
		rating: 1,
	},
	packagedcurry: {
		name: "Packaged Curry",
		spritenum: 0,
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
			this.boost({spa: 1});
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67480,
		isNonstandard: "Future",
		rating: 1,
	},
	precookedburger: {
		name: "Precooked Burger",
		spritenum: 0,
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
			this.boost({def: 1});
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67480,
		isNonstandard: "Future",
		rating: 1,
	},
	freshcream: {
		name: "Fresh Cream",
		spritenum: 0,
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
			this.boost({spd: 1});
			this.heal(pokemon.baseMaxhp / 10);
		},
		num: 67480,
		isNonstandard: "Future",
		rating: 1,
	},
	paintedrock: { 
		name: "Painted Rock",
		spritenum: 0,
		num: 67482,
		isNonstandard: "Future",
		rating: 1,
	},
		bloodyrock: { 
		name: "Bloody Rock",
		spritenum: 0,
		num: 67483,
		isNonstandard: "Future",
		rating: 1,
	},
};

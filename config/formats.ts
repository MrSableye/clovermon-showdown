// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: 'custom-formats.ts'

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	///////////////////////////////////////////////////////////////////
	// Clover Core Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover Core Tiers',
	},
	{
		name: '[Gen 8 Clover Only] OU',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] UU',
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: '[Gen 8 Clover Only] RU',
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: '[Gen 8 Clover Only] NU',
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] RU'],
		banlist: ['RU', 'NUBL'],
	},
	///////////////////////////////////////////////////////////////////
	// Clover Singles
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover Singles',
	},
	{
		name: '[Gen 8 Clover Only] Random Battle',
		mod: 'clover',
		team: 'random',
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Ultimate Blobbos Metronome Showdown DX',
		mod: 'clover',
		team: 'randomBlobbosMetronome',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Free-For-All Random Battle',
		mod: 'clover',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Ubers',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Baton Pass'],
	},
	{
		name: '[Gen 8 Clover Only] LC',
		mod: 'clover',
		ruleset: [
			'Little Cup',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: [
			'Moody', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
			'Wedgard', 'Chompest', 'Masdawg', 'Flowre', 'Charagon', 'Ayylamo', 'Ninoop', 'Embortion', 'Nutjobber',
		],
	},
	{
		name: '[Gen 8 Clover Only] Monotype',
		mod: 'clover',
		ruleset: [
			'Same Type Clause',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] Anything Goes',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Clover Only',
			'Blobbos Clause',
		],
	},
	{
		name: '[Gen 8 Clover Only] CAP',
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU', '+CAP', 'No Blobbos'],
		banlist: ['Condoomite'],
	},
	{
		name: '[Gen 8 Clover Only] Blobbos CAP',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Only',
			'+CAP',
		],
	},
	///////////////////////////////////////////////////////////////////
	// Clover Doubles & Triples
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover Doubles & Triples',
	},
	{
		name: '[Gen 8 Clover Only] Doubles OU',
		mod: 'clover',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Species Clause',
			'OHKO Clause',
			'Swagger Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] Triples OU',
		mod: 'clover',
		gameType: 'triples',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Species Clause',
			'OHKO Clause',
			'Swagger Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] Doubles CAP',
		rated: false,
		mod: 'clover',
		gameType: 'doubles',
		ruleset: ['[Gen 8 Clover Only] CAP'],
	},
	///////////////////////////////////////////////////////////////////
	// Seasonal Clover
	///////////////////////////////////////////////////////////////////
	{
		section: 'Seasonal Clover',
		column: 2,
	},
	{
		name: '[Gen 8 Clover Only] Festive Random Battle',
		mod: 'clover',
		team: 'randomFestive',
		searchShow: false,
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBattleStart() {
			this.field.setWeather('hail', this.getAllPokemon()[0]);
			this.hint('Fairy-types use "Wish" after fainting.');
			this.hint('Grass-types seed all enemies and start Grassy Terrain after fainting.');
			this.hint('Ice-types uses "Lunar Dance" after fainting if Hail is active, otherwise Hail activates.');
			this.hint('Normal-types use "Spikes" after fainting.');
			this.hint('Only one effect will occur and it prioritizes types in the order above.');
		},
		onFaint(target) {
			if (target.types.includes('Fairy')) {
				target.side.addSlotCondition(target, 'Wish', target);
			} else if (target.types.includes('Grass')) {
				target.foes(true).forEach((foe) => {
					foe.addVolatile('leechseed');
				});
				this.field.setTerrain('grassyterrain');
			} else if (target.types.includes('Ice')) {
				if (this.field.weather === 'hail') {
					target.side.addSlotCondition(target, 'lunardance', target);
				} else {
					this.field.setWeather('hail');
				}
			} else if (target.types.includes('Normal')) {
				target.side.foeSidesWithConditions().forEach((side) => {
					side.addSideCondition('spikes');
				});
			}
		},
	},
	///////////////////////////////////////////////////////////////////
	// Clover OMs
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover OMs',
		column: 2,
	},
	{
		name: '[Gen 8 Clover Only] NFE',
		mod: 'clover',
		ruleset: [
			'Not Fully Evolved',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: [
			'Chancer', 'Semrust',
			'Baton Pass', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Wonder Guard',
		],
	},
	{
		name: '[Gen 8 Clover Only] Balanced Hackmons',
		mod: 'clover',
		ruleset: ['Clover Only', '-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash', 'Toke', 'Adesign', 'Any Ability',
		],
	},
	{
		name: '[Gen 8 Clover Only] Multi-Tier',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
			'Multi Tier',
		],
		banlist: ['Baton Pass', 'Shadow Tag', 'Arena Trap', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] 350 Cup',
		mod: 'clover',
		ruleset: [
			'350 Cup Mod',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Baton Pass', 'Shadow Tag', 'Arena Trap', 'Eviolite'],
	},
	{
		name: '[Gen 8 Clover Only] Almost Any Ability',
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'clover',
		ruleset: ['Clover Only', 'Obtainable', '!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Uber', 'Niterpent',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword',
			'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost',
			'Flare Heal', 'Suddenly',
			'Water Bubble', 'Wonder Guard', 'Baton Pass',
		],
	},
	{
		name: '[Gen 8 Clover Only] STABmons',
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'clover',
		ruleset: [
			'Clover Only',
			'Standard NatDex',
			'STABmons Move Legality',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Wonder Guard'],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Glacial Lance', 'Lovely Kiss', 'Precipice Blades', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
			'Toke', 'Dark Void',
		],
	},
	{
		name: '[Gen 8 Clover Only] Alphabet Cup',
		desc: `Allows Pok&eacute;mon to use any move that shares the same first letter as their name or a previous evolution's name.`,
		mod: 'clover',
		ruleset: [
			'Clover Only',
			'Standard NatDex',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'Alphabet Cup Move Legality',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Acupressure', 'Baton Pass', 'Wonder Guard',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Geomancy', 'Glacial Lance',
			'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Sleep Powder', 'Spore', 'Surging Strikes', 'Thousand Arrows',
			'Toke',
		],
	},
	{
		name: "[Gen 8 Clover Only] Scalemons",
		desc: `Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible.`,
		mod: 'clover',
		ruleset: [
			'Clover Only',
			'Standard NatDex',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'Scalemons Mod',
		],
		banlist: [
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard',
			'Huge Power', 'Pure Power', 'Eviolite', 'Light Ball', 'Thick Club', 'Big Faggot', 'Militant',
		],
	},
	{
		name: "[Gen 8 Clover Only] Camomons",
		desc: `Pok&eacute;mon change type to match their first two moves.`,
		mod: 'clover',
		ruleset: [
			'Clover Only',
			'Standard NatDex',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'Camomons Mod',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8 Clover Only] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		mod: 'cloverabilities',
		ruleset: [
			'Clover Only',
			'Standard NatDex',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
		],
		banlist: [
			'Uber',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: '[Gen 8 Clover Only] Custom Game',
		mod: 'clover',
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: '[Gen 8 Clover Only] Custom Game (Doubles)',
		mod: 'clover',
		gameType: 'doubles',
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	///////////////////////////////////////////////////////////////////
	// Clover NatDex Singles
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover National Dex Singles',
		column: 2,
	},
	{
		name: '[Gen 8 Clover National Dex] AG',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
		],
	},
	///////////////////////////////////////////////////////////////////
	// Non-Clover
	///////////////////////////////////////////////////////////////////
	{
		section: 'Other Memes',
		column: 2,
	},
	{
		name: '[Gen 8] Random Showderp Meme Battle',
		mod: 'gen8',
		team: 'randomMeme',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8] Free-For-All Random Showderp Meme Battle',
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		team: 'randomMeme',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Random SPOOKY Battle',
		mod: 'clover',
		team: 'randomSpooky',
		searchShow: false,
		onEffectiveness(typeMod, target, type, move) {
			if (['Dark', 'Ghost'].includes(type) && ['Dark', 'Ghost'].includes(move.type)) {
				return 0;
			}
		},
		ruleset: ['Dynamax Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 1] Ubers",
		mod: 'gen1',
		challengeShow: false,
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		challengeShow: false,
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] UU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL'],
	},
];

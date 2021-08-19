// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

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

	// Clovermon Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Clover Only Singles",
	},
	{
		name: "[Gen 8 Clover Only] Random Battle",
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
		name: "[Gen 8 Clover Only] Free-For-All Random Battle",
		mod: 'clover',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8 Clover Only] OU",
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
		name: "[Gen 8 Clover Only] Ubers",
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
		name: "[Gen 8 Clover Only] UU",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8 Clover Only] RU",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8 Clover Only] NU",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 8 Clover Only] LC",
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
		name: "[Gen 8 Clover Only] Monotype",
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
		name: "[Gen 8 Clover Only] Anything Goes",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Clover Only',
			'Blobbos Clause',
		],
	},
	{
		name: "[Gen 8 Clover Only] CAP",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU', '+CAP'],
	},
	{
		section: "Clover Only Doubles/Triples",
	},
	{
		name: "[Gen 8 Clover Only] Doubles OU",
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
		name: "[Gen 8 Clover Only] Triples OU",
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
		name: "[Gen 8 Clover Only] CAP Doubles",
		rated: false,
		mod: 'clover',
		gameType: 'doubles',
		ruleset: ['[Gen 8 Clover Only] CAP'],
	},
	{
		section: "Other Clover Metagames",
	},
	{
		name: "[Gen 8 Clover Only] NFE",
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
		name: "[Gen 8 Clover Only] Balanced Hackmons",
		mod: 'clover',
		ruleset: ['Clover Only', '-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash', 'Toke', 'Adesign', 'Any Ability',
		],
	},
	{
		name: "[Gen 8 Clover Only] Multi-Tier",
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
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 8 Clover Only] 350 Cup",
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
		name: "[Gen 8 Clover Only] Almost Any Ability",
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
		name: "[Gen 8 Clover Only] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'clover',
		ruleset: ['Clover Only', 'Standard NatDex', 'STABmons Move Legality', 'Dynamax Clause'],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Wonder Guard'],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Glacial Lance', 'Lovely Kiss', 'Precipice Blades', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
			'Toke', 'Dark Void',
		],
	},
	{
		name: "[Gen 8 Clover Only] Custom Game",
		mod: 'clover',
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 8 Clover Only] Custom Game (Doubles)",
		mod: 'clover',
		gameType: 'doubles',
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		section: "Clover National Dex Singles",
	},
	{
		name: "[Gen 8 Clover National Dex] AG",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
		],
	},
	{
		section: 'Atlas Only Singles',
	},
	{
		name: "[Gen 8 Atlas Only] OU",
		mod: 'atlas',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Atlas Only',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8 Atlas Only] Ubers",
		mod: 'atlas',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Atlas Only',
		],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 8 Atlas Only] Anything Goes",
		mod: 'atlas',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Atlas Only',
		],
	},
	{
		name: "[Gen 8 Atlas Only] LC",
		mod: 'atlas',
		ruleset: [
			'Little Cup',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Atlas Only',
		],
		banlist: [
			'Moody', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
		],
	},

	{
		section: 'Atlas Only Doubles/Triples',
	},
	{
		name: "[Gen 8 Atlas Only] Doubles OU",
		mod: 'atlas',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'Swagger Clause',
			'OHKO Clause',
			'Atlas Only',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8 Atlas Only] Triples OU",
		mod: 'atlas',
		gameType: 'triples',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'Swagger Clause',
			'OHKO Clause',
			'Atlas Only',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
];

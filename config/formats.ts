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
		name: "[Gen 8 Clover Only] OU",
		threads: [],
		mod: 'gen8',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: "[Gen 8 Clover Only] Ubers",
		threads: [],
		mod: 'gen8',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 8 Clover Only] LC",
		threads: [],
		mod: 'gen8',
		ruleset: [
			'Little Cup',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
		banlist: ['LC Uber', 'Moody', 'Baton Pass'],
	},
	{
		name: "[Gen 8 Clover Only] Monotype",
		threads: [],
		mod: 'gen8',
		ruleset: [
			'Same Type Clause',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: "[Gen 8 Clover Only] Anything Goes",
		threads: [],
		mod: 'gen8',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
	},
	{
		section: "Clover Only Doubles",
	},
	{
		name: "[Gen 8 Clover Only] Doubles OU",
		threads: [],
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Species Clause',
			'OHKO Clause',
			'Swagger Clause',
			'Gravity Sleep Clause',
			'Evasion Moves Clause',
			'+Future',
			'Fochun Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		section: "Clover x Pokemon Singles"
	},
	{
		name: "[Gen 8 National Dex] AG",
		mod: 'gen8',
		ruleset: [
			'Be Original Please',
			'Obtainable',
			'+Unobtainable',
			'+Past',
			'+Future',
			'Team Preview',
			'Nickname Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Endless Battle Clause',
			'Dynamax Clause',
		],
	},
];

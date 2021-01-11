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
		section: "Clovermon Singles",
	},
	{
		name: "[Gen 8 Clover Only] AG",
		mod: 'gen8',
		ruleset: ['Standard', '+Future', 'Fochun Pokedex', 'Fochun Items'],
	},
	{
		name: "[Gen 8 National Dex] AG",
		mod: 'gen8',
		ruleset: ['Standard NatDex', '+Future'],
	},
];

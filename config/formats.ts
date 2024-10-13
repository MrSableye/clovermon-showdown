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
	{
		section: 'Special',
	},
	{
		name: '[Gen 8 Clover Test Only] OU',
		mod: 'clovertest',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard',
			'Condoom + Unaware',
		],
	},
	{
		name: '[Gen 8 Clover Test Only] 3v3',
		mod: 'clovertest',
		ruleset: [
			'Max Team Size = 3',
			'Terastal Clause',
			'Obtainable',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves'
		],
		banlist: ['Uber', 'Wonder Guard'],
		unbanlist: ['Fontaba-Z', 'Funnedong', 'Kuuroba'],
	},
	///////////////////////////////////////////////////////////////////
	// Clover
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover',
	},
	{
		name: '[Gen 8 Clover Only] OU',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard',
			'Condoom + Unaware',
		],
	},
	{
		name: '[Gen 8 Clover Only] Ubers',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Baton Pass', 'Shadow Tag', 'Hailsanta'],
	},
	{
		name: '[Gen 8 Clover Only] UU',
		mod: 'clover',
		ruleset: ['Terastal Clause', '[Gen 8 Clover Only] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: '[Gen 8 Clover Only] RU',
		mod: 'clover',
		ruleset: ['Terastal Clause', '[Gen 8 Clover Only] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: '[Gen 8 Clover Only] NU',
		mod: 'clover',
		ruleset: ['Terastal Clause', '[Gen 8 Clover Only] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: '[Gen 8 Clover Only] Random Battle',
		mod: 'clover',
		team: 'random',
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Sketch Post-Gen 7 Moves'],
	},
	{
		name: '[Gen 8 Clover Only] Pick Your Team Random Battle',
		mod: 'clover',
		team: 'random',
		ruleset: [
			'Terastal Clause',
			'Picked Team Size = 6',
			'Max Team Size = 12',
			'Team Preview',
			'Dynamax Clause',
			'Obtainable',
			'Species Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sleep Clause Mod',
			'Sketch Post-Gen 7 Moves',
		],
	},
	{
		name: '[Gen 8 Clover Only] Ultimate Blobbos Metronome Showdown DX',
		mod: 'cloverblobboscap',
		team: 'randomBlobbosMetronome',
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Free-For-All Random Battle',
		mod: 'clover',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Pick Your Team FFA Random Battle',
		mod: 'clover',
		team: 'random',
		gameType: 'freeforall',
		rated: false,
		searchShow: false,
		ruleset: [
			'Terastal Clause',
			'Picked Team Size = 6',
			'Max Team Size = 12',
			'Team Preview',
			'Dynamax Clause',
			'Obtainable',
			'Species Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sleep Clause Mod',
			'Sketch Post-Gen 7 Moves',
		],
	},
	{
		name: "[Gen 8 Clover Only] Multi Random Battle",
		mod: 'clover',
		team: 'random',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		searchShow: false,
		ruleset: ['Terastal Clause', 'Max Team Size = 3', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: '[Gen 8 Clover Only] NFE',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Not Fully Evolved',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Chancer', 'Semrust', 'Hosajack', 'Masdawg', 'Nonegative', 'Proboskito',
			'Baton Pass', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Wonder Guard',
		],
	},
	{
		name: '[Gen 8 Clover Only] LC',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Little Cup',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Moody', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
			'Chompest', 'Masdawg', 'Flowre', 'Ayylamo', 'Embortion', 'Nutjobber',
		],
	},
	{
		name: '[Gen 8 Clover Only] Monotype',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Same Type Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
		unbanlist: ['Adesign'], // fucking lmao
	},
	{
		name: '[Gen 8 Clover Only] Anything Goes',
		mod: 'clover',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
		],
	},
	{
		name: '[Gen 9 Clover National Dex] AG',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
		],
	},
	{
		name: '[Gen 9 Clover National Dex] Monotype',
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Terastal Clause',
			'! Nickname Clause',
			'Same Type Clause',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
		unbanlist: ['Darmanitan-Galar', 'Deoxys-Speed', 'Regieleki', 'Melmetal', 'Shedinja', 'Cinderace', 'Roaring Moon', 'Walking Wake'],
	},
	{
		name: '[Gen 8 Clover Only] Doubles OU',
		mod: 'clover',
		gameType: 'doubles',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] Triples OU',
		mod: 'clover',
		gameType: 'triples',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover Only] VGC',
		mod: 'clover',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Force Open Team Sheets', 'Terastal Clause', 'Dynamax Clause', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	///////////////////////////////////////////////////////////////////
	// Clover OMs
	///////////////////////////////////////////////////////////////////
	{
		section: 'Clover OMs',
	},
	{
		name: '[Gen 8 Clover Only] OU (No Team Preview)',
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Sleep Clause Mod',
			'Species Clause',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard', 'Wheygle + Belly Drum', 'Condoom + Unaware'],
	},
	{
		name: '[Gen 8 Clover Only] Balanced Hackmons',
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', '-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Stink Bomb',  'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash', 'Toke', 'Adesign', 'Any Ability',
		],
	},
	{
		name: '[Gen 8 Clover Only] Multi-Tier',
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Multi Tier',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Baton Pass', 'Shadow Tag', 'Arena Trap', 'Wonder Guard', 'Wheygle + Belly drum', 'Condoom + Unaware'],
	},
	{
		name: '[Gen 8 Clover Only] 350 Cup',
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'350 Cup Mod',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Baton Pass', 'Shadow Tag', 'Arena Trap', 'Eviolite', 'Nutjobber'],
	},
	{
		name: "[Gen 8 Clover Only] Godly Gift",
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Unjoy', 'Chancer', 'Tarditank', 'Flameboyan', 'Eviolite', 'Seamapan',
			'Pikotton', 'Pretzely', 'Urswine', 'Masdawg', 'Pasdawg', 'Uber > 1', 'AG ++ Uber > 1', 'Arena Trap', 'Huge Power',
			'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim',
			'Baton Pass', 'Wonder Guard', 'Wheygle + Belly Drum', 'Condoom + Unaware',
		],
		onValidateTeam(team) {
			const gods = new Set<string>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				if (typeof species.battleOnly === 'string') species = this.dex.species.get(species.battleOnly);
				if (set.item && this.dex.items.get(set.item).megaStone) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === species.baseSpecies) {
						species = this.dex.species.get(item.megaStone);
					}
				}
				if (this.ruleTable.has('standardnatdex')) {
					const format = this.dex.formats.getRuleTable(this.dex.formats.get('gen8nationaldex'));
					if (format.isBannedSpecies(species)) gods.add(species.name);
				} else {
					if (['ag', 'uber'].includes(this.toID(species.tier)) || this.toID(set.ability) === 'powerconstruct') {
						gods.add(species.name);
					}
				}
			}
			if (gods.size > 1) {
				return [`You have too many Gods.`, `(${Array.from(gods).join(', ')} are Gods.)`];
			}
		},
		onModifySpeciesPriority: 3,
		onModifySpecies(species, target, source) {
			if (source || !target?.side) return;
			const god = target.side.team.find(set => {
				let setSpecies = this.dex.species.get(set.species);
				if (typeof setSpecies.battleOnly === 'string') setSpecies = this.dex.species.get(setSpecies.battleOnly);
				if (set.item && this.dex.items.get(set.item).megaStone) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === setSpecies.baseSpecies) {
						setSpecies = this.dex.species.get(item.megaStone);
					}
				}
				if (this.ruleTable.has('standardnatdex')) {
					const format = this.dex.formats.getRuleTable(this.dex.formats.get('gen8nationaldex'));
					if (format.isBannedSpecies(setSpecies)) return true;
				} else {
					if (['ag', 'uber'].includes(this.toID(setSpecies.tier)) || this.toID(set.ability) === 'powerconstruct') {
						return true;
					}
				}

				return false;
			}) || target.side.team[0];
			const stat = Dex.stats.ids()[target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.species.get(god.species);
			if (typeof godSpecies.battleOnly === 'string') {
				godSpecies = this.dex.species.get(godSpecies.battleOnly);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat];
			newSpecies.bst += newSpecies.baseStats[stat];
			return newSpecies;
		},
	},
	{
		name: '[Gen 8 Clover Only] Inverse',
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Inverse Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard', 'Draconius', 'Bunnorgy',
			'Wheygle + Belly Drum', 'Condoom + Unaware'],
		unbanlist: ['Condoom', 'Foryu', 'Narwhiz', 'Scytill'],
	},
	{
		name: '[Gen 8 Clover Only] Almost Any Ability',
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Sketch Post-Gen 7 Moves', 'Obtainable', '!Obtainable Abilities', 'Species Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Uber', 'Niterpent',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fuk U', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword',
			'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Stink Bomb',
			'Speed Boost', 'Flare Heal', 'Suddenly',
			'Water Bubble', 'Wonder Guard', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8 Clover Only] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714223/">The Loser's Game</a>`,
		],

		mod: 'clover',
		// searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Picked Team Size = 6', 'Adjust Level = 100', 'Terastal Clause', 'Sketch Post-Gen 7 Moves', '!Obtainable Abilities', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		banlist: ['Infiltrator', 'Choice Scarf', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct', 'Sudoku'],
		unbanlist: ['Uber'],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			checkWin(faintData) {
				const team1PokemonLeft = this.sides[0].pokemonLeft;
				const team2PokemonLeft = this.sides[1].pokemonLeft;
				if (!team1PokemonLeft && !team2PokemonLeft) {
					this.win(faintData?.target.side || null);
					return true;
				}
				for (const side of this.sides) {
					if (!side.pokemonLeft) {
						this.win(side);
						return true;
					}
				}
			},
		},
	},
	{
		name: "[Gen 8 Clover Only] Flipped",
		desc: `Pok&eacute;mon have their base stats flipped.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Standard', 'Flipped Mod', 'Dynamax Clause', 'Sketch Post-Gen 7 Moves', '! Nickname Clause',],
		banlist: ['Draconius', 'Manatank', 'Pasdawg', 'Arena Trap', 'Moody', 'Power Construct', 'Psychic Surge', 'Shadow Tag', 'Baton Pass', 'Psychic Terrain', 'Shell Smash', 'Toke', 'Uber'],
		unbanlist: ['Chromox', 'Condoom', 'Funnedong', 'Foryu'],
	},
	{
		name: '[Gen 8 Clover Only] STABmons',
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'STABmons Move Legality',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Glacial Lance', 'Lovely Kiss', 'Precipice Blades', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
			'Toke', 'Dark Void', 'Wheygle + Belly Drum', 'Condoom + Unaware',
		],
	},
	{
		name: '[Gen 8 Clover Only] Alphabet Cup',
		desc: `Allows Pok&eacute;mon to use any move that shares the same first letter as their name or a previous evolution's name.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Alphabet Cup Move Legality',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Acupressure', 'Baton Pass', 'Wonder Guard',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Geomancy', 'Glacial Lance',
			'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Sleep Powder', 'Spore', 'Surging Strikes', 'Thousand Arrows',
			'Toke', 'Wheygle + Belly Drum', 'Condoom + Unaware',
		],
	},
	{
		name: "[Gen 8 Clover Only] Scalemons",
		desc: `Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Scalemons Mod',
			'Sketch Post-Gen 7 Moves',
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
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Camomons Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard', 'Stink Bomb',
			 'Condoom + Unaware',
		],
	},
	{
		name: "[Gen 8 Clover Only] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		mod: 'cloverabilities',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Baton Pass',
			'Shadow Tag', 'Arena Trap', 'Moody',
			'Bunnorgy', 'Sprucifix', 'Traumobra',
			'Hohohoming', 'Condoom',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const ruleTable = this.dex.formats.getRuleTable(this.format);

				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => !ruleTable.isBanned(`ability:${ability}`))
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
		name: "[Gen 8 Clover Only] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
		mod: 'clovermixandmega',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Standard','! Nickname Clause', 'Overflow Stat Mod', 'Dynamax Clause', 'Sketch Post-Gen 7 Moves'],
		banlist: [
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify', 'Blobbosite', 'Kalosite', 'Sexite Y', 'Reversite', 'Upbeddite'],
		unbanlist: [
			'Abomasite', 'Absolite', 'Aerodactylite', 'Aggronite', 'Alakazite', 'Altarianite', 'Ampharosite', 'Audinite', 'Banettite', 'Blastoisinite', 'Blue Orb', 'Cameruptite', 'Charizardite X', 'Charizardite Y', 'Diancite', 'Galladite', 'Garchompite', 'Gardevoirite', 'Glalitite', 'Gyaradosite', 'Heracronite', 'Houndoominite', 'Latiasite', 'Latiosite', 'Lopunnite', 'Lucarionite', 'Manectite', 'Metagrossite', 'Mewtwonite X', 'Mewtwonite Y', 'Pinsirite', 'Red Orb', 'Sablenite', 'Salamencite', 'Sceptilite', 'Scizorite', 'Sharpedonite', 'Slowbronite', 'Steelixite', 'Swampertite', 'Tyranitarite', 'Venusaurite', 'Uber', 'Ooganite', 'Wifeminite', 'Bitekinite', 'Fonduppite', 'Ebolabite', 'Somboludite', 'Floriousite', 'Illumatrixite', 'Grimdakite', 'Hazmatite', 'Krokizonite', 'Spookzillite', 'Lizakbarite', 'Rectreemite', 'Unjoyite', 'Emplyinite', 'Smelloxite', 'Pigusonite', 'Hohohomite', 'Faptite', 'Jerklite', 'Dowsterite', 'Reptrillite', 'Kuklanite', 'Ricosuavite', 'Vandashite', 'Chasumite', 'Goryannusite', 'Spookscarite', 'Honradite'],
		restricted: [
			'Adesign', 'Baddon', 'Boarnograf', 'Chromox', 'Clovenix', 'Demiwaifu', 'Endranther', 'Foryu', 'Funnedong',
			'Griffawork', 'Heliofug', 'Jewipede', 'Narwhiz', 'Scytill', 'Semdemen', 'Tentaquil',
			'Vivaiger', 'Niterpent', 'Notridley', 'Condoom + Unaware',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 8.`];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 8 Clover Only] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'clover',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard',
			'! Nickname Clause',
			'Accuracy Moves Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Adesign', 'Baddon', 'Boarnograf', 'Chasumo', 'Chromox', 'Clovenix', 'Condoom', 'Demiwaifu', 'Endranther', 'Fontaba-/z/', 'Foryu', 'Funnedong', 'Griffawork', 'Heliofug',
			'Jewipede', 'Kuuroba', 'Narwhiz', 'Notridley', 'Scytill', 'Semdemen', 'Tentaquil', 'Vivaiger', 'Wonder Guard', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw', 'Perish Song',
		],
	},
	{
		name: '[Gen 8 Clover Only] Custom Game',
		mod: 'clover',
		searchShow: false,
		rated: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Terastal Clause', 'Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: '[Gen 8 Clover Only] Custom Game (Doubles)',
		mod: 'clover',
		gameType: 'doubles',
		searchShow: false,
		rated: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Terastal Clause', 'Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	///////////////////////////////////////////////////////////////////
	// Seasonal Clover
	///////////////////////////////////////////////////////////////////
	{
		section: 'Seasonal Clover',
	},
	{
		name: '[Gen 8 Clover Only] Festive Random Battle',
		mod: 'clover',
		team: 'randomFestive',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
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
	{
		name: '[Gen 8 Clover Only] Random Irish Battle',
		mod: 'clover',
		team: 'randomIrish',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Random SPOOKY Battle',
		mod: 'clover',
		team: 'randomSpooky',
		searchShow: false,
		rated: false,
		onEffectiveness(typeMod, target, type, move) {
			if (['Dark', 'Ghost'].includes(type) && ['Dark', 'Ghost'].includes(move.type)) {
				return 0;
			}
		},
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	///////////////////////////////////////////////////////////////////
	// Wack
	///////////////////////////////////////////////////////////////////
	{
		section: 'Wack (HEAVY WIP)',
		column: 2,
	},
	{
		name: '[Gen 8 Wack Only] OU',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Overflow Stat Mod',
	
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost', 'Pillow Pile', 'Adaptive Body', 'Divine Protection', 'Hot Coals',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm', 'Freezing Kiss',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet', 'Discombubbles',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis', 'Suwise Glasses', 'Pressure Orb', 'Training Glove','Wire Trap', 'Sketch', 'Soul Barrier',
		],
	},
	{
        name: '[Gen 8 Wack Only] UU',
        mod: 'wack',
        ruleset: [
            'Terastal Clause',
            'Standard',
            '! Nickname Clause',
            'Dynamax Clause',
            'Overflow Stat Mod',
    
        ],
        banlist: [
            'OU', 'UUBL', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
            'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost', 'Pillow Pile', 'Adaptive Body', 'Divine Protection', 'Hot Coals',
            'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm', 'Freezing Kiss',
            'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
            'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet', 'Discombubbles',
            'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
            'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis', 'Suwise Glasses', 'Pressure Orb', 'Training Glove','Wire Trap', 'Sketch', 'Soul Barrier',
        ],
    },
	{
		name: '[Gen 8 Wack Only] Ubers',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] NFE',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Not Fully Evolved',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] LC',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Little Cup',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] Monotype',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Same Type Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] Anything Goes',
		mod: 'wack',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Team Preview',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Antiplebshield',
		],
	},
	{
		name: '[Gen 8 Wack Only] Doubles OU',
		mod: 'wack',
		gameType: 'doubles',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] Triples OU',
		mod: 'wack',
		gameType: 'triples',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] Random Battle',
		mod: 'wack',
		team: 'random',
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Wack Only] Pick Your Team Random Battle',
		mod: 'wack',
		team: 'random',
		ruleset: ['Terastal Clause', 'Sleep Clause Mod', 'Picked Team Size = 6', 'Max Team Size = 12', 'Team Preview', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Wack Only] FFA Random Battle',
		mod: 'wack',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	///////////////////////////////////////////////////////////////////
	// Wack OMs
	///////////////////////////////////////////////////////////////////
	{
		section: 'Wack OMs',
		column: 2,
	},
	{
		name: '[Gen 8 Wack Only] FFA Battle',
		mod: 'wack',
		gameType: 'freeforall',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: "[Gen 8 Wack Only] Multi Battle",

		mod: 'wack',
		gameType: 'multi',
		searchShow: false,
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Swagger Clause',
			'Overflow Stat Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['DUber', 'Uber', 'Arena Trap', 'Moody', 'Sand Veil', 'Snow Cloak', 'Computer Bug', 'Baton Pass', 'Gods Endurance', 'Shadow Tag', 'Wonder Guard', 'Wacky',
			'Abyssal Hell Drag', 'Twindeath', 'Desecrations', 'Extreme Evoboost',
			'Cryaa', 'aaryC', 'Drizzle', 'Drought', 'Snow Warning', 'Sand Stream', 'Shadow Call', 'Acid Cloudburst', 'Thunderstorm',
			'Corrupt Orb', 'Border Wall', 'Ultra Cloak', 'Ultra Scarf', 'Pitch Sludge', 'Apex Orb', 'Antiplebshield', 'GODSORB', 'Sans Hoodie',
			'Ginsio Berry', 'Uranus Orb', 'Ballet Outfit', 'Frost Orb', 'Nap Orb', 'Ethereal', 'Glass Armor', 'Fangclaw', 'Craggy Helmet',
			'Bootsofblindingspeed + Bestow', 'Bootsofblindingspeed + Trick', 'Bootsofblindingspeed + Switcheroo', 'Inverted Rune', 'Sheriff Hat',
			'Hell Drag', 'Pacify', 'Rift Strike', 'Perfect Freeze', 'Time Stasis',
		],
	},
	{
		name: '[Gen 8 Wack Only] Custom Game',
		mod: 'wack',
		searchShow: false,
		rated: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['Terastal Clause', 'Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Overflow Stat Mod'],
	},
	{
		name: '[Gen 8 Wack Only] Custom Game (Doubles)',
		mod: 'wack',
		gameType: 'doubles',
		searchShow: false,
		rated: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['Terastal Clause', 'Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Overflow Stat Mod'],
	},
	///////////////////////////////////////////////////////////////////
	// CAP & Cope
	///////////////////////////////////////////////////////////////////
	{
		section: 'CAP & Cope',
		column: 2,
	},
	{
		name: '[Gen 8 Clover CAP Only] Ubers',
		mod: 'clovercap',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Baton Pass', 'AG'],
	},
	{
		name: '[Gen 8 Clover CAP Only] OU',
		mod: 'clovercap',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard', 'Condoom + Unaware'],
	},
	{
		name: '[Gen 8 Clover CAP Only] NFE',
		mod: 'clovercap',
		ruleset: [
			'Terastal Clause',
			'Not Fully Evolved',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Baton Pass', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Wonder Guard'],
	},
	{
		name: '[Gen 8 Clover CAP Only] LC',
		mod: 'clovercap',
		ruleset: [
			'Terastal Clause',
			'Little Cup',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Moody', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Ribbizap', 'Cursed Fang', 'Crimson Lens', 'Dinomight', 'Sphare', 'Yuukiino', 'Honrade'],
	},
	{
		name: '[Gen 8 Clover CAP Only] Monotype',
		mod: 'clovercap',
		ruleset: [
			'Terastal Clause',
			'Same Type Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard', 'Condoom + Unaware'],
	},
	{
		name: '[Gen 8 Clover CAP Only] Anything Goes',
		mod: 'clovercap',
		ruleset: ['Terastal Clause', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Sketch Post-Gen 7 Moves', 'Dynamax Clause'],
	},
	{
		name: '[Gen 8 Clover CAP Only] Doubles OU',
		rated: false,
		mod: 'clovercap',
		gameType: 'doubles',
		ruleset: ['Terastal Clause', '[Gen 8 Clover CAP Only] OU'],
	},
	{
		name: '[Gen 8 Clover CAP Only] Random Battle',
		mod: 'clovercap',
		team: 'random',
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Clover CAP Only] Free-For-All Random Battle',
		mod: 'clovercap',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Cope Only] Anything Goes',
		mod: 'cope',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Team Preview',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			],
	},
	{
		name: '[Gen 8 Cope Only] Ubers',
		mod: 'cope',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Team Preview',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause',
		],
		banlist: [
			'AG',
			'Baton Pass',
			'Moody',
			'Arena Trap',
			'Shadow Tag',
			'Doomsday',
			'Doomsday-Revenant',
			'Worldle',
			'Eternal Walk',
			'Cope',
			'Fuck You'],
		unbanlist: ['THROBAK + Wonder Guard'],
	},
	{
		name: '[Gen 8 Cope Only] OU',
		mod: 'cope',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Team Preview',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause',
		],
		banlist: [
				'AG',
				'Uber', 
				'Baton Pass',
				'Moody',
				'Arena Trap',
				'Shadow Tag',
				'Doomsday',
				'Doomsday-Revenant',
				'Worldle',
				'Eternal Walk',
				'Fuck You',
				'Drizzle',
				'Drought',
				'Krackocean',
				'Aurora Veil',
				'Maximize',
				"Cope + King's Rock"],
		unbanlist: ['THROBAK + Wonder Guard'],
	},
{
		name: '[Gen 8 Cope Draft Only] Season 3',
		mod: 'copedraft',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'Baton Pass Mod'
		],
		banlist: [
			'AG',
			'Uber',
			'Moody',
			'Arena Trap',
			'Shadow Tag',
			'Doomsday',
			'Doomsday-Revenant',
			'Worldle',
			'Eternal Walk',
			'Fuck You',
			'Krackocean',
			'Pixilate + Extreme Speed',
			'Raidenetti + Speed Boost',
			'Alberfect Cell + Pure Power',
			'Stingulor + Toke',
			'Spycrab + Illusion', 
         	'Rendalopod + Fishious Rend',
			'Rendalopod + Bolt Beak',
			'Dall-eedle + Dire Claw',
			'Catalyst',
			'Transfusion',
			'More Room',
			'Dowster-Mega',
			'Hazmate-Mega',
			'Emplyin-Mega',
			'Upbeddit-Mega',
			'Cocken + Ancient Power',
			'Fuk U',
			'Stink Bomb',
			'Baton Pass + Ingrain',
			'Baton Pass + Aqua Ring',
			'Baton Pass + Substitute'
		],
		unbanlist: [
			'THROBAK + Wonder Guard'],
},
	{
		name: '[Gen 8 Cope Only] Flipped',
		mod: 'cope',
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Team Preview',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause',
			'Flipped Mod',
		],
		banlist: ['AG', 'Uber', 'Baton Pass', 'Moody', 'Arena Trap', 'Shadow Tag', 'Doomsday', 'Doomsday-Revenant', 'Worldle', 'Eternal Walk', 'Cope', 'Fuck You', 'Wicked Blow', 'Krackocean'],
		unbanlist: ['THROBAK + Wonder Guard'],
	},
	///////////////////////////////////////////////////////////////////
	// Create-a-Blobbos (CAB)
	///////////////////////////////////////////////////////////////////
	{
		section: 'Create-a-Blobbos (CAB)',
		column: 3,
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] OU',
		mod: 'cloverblobboscap',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Blobbos Only',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: ['Uber', 'Baton Pass', 'Moody', 'Arena Trap', 'Shadow Tag', 'Blobbos-Plok + Jet Punch', 'Fling + License to Sell Hotdogs', 'Mitosis Mash', 'Cell Construct', 'Power Herb + Geomancy', 'Power Herb + Awaken', 'Baitite + Destiny Bond', 'Star Rod + Victory Dance', "Partner's Pendant + Super Snore"],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] Ubers',
		mod: 'cloverblobboscap',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Blobbos Only',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: ['Fling + License to Sell Hotdogs', 'Wheygle + Unburden', 'Condoom + Unaware'],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] Doubles OU',
		gameType: 'doubles',
		mod: 'cloverblobboscap',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Blobbos Only',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: ['Uber', 'Baton Pass', 'Moody', 'Arena Trap', 'Shadow Tag', 'Blobbos-Plok + Jet Punch', 'Fling + License to Sell Hotdogs', 'Mitosis Mash', 'Cell Construct'],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] Draft OU',
		mod: 'cloverblobboscap',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Blobbos Only',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: ['Baton Pass', 'Uber', 'Blobbos-Attack', 'Blobbos-Defense', 'Blobbos-Speed', 'Blobbos-Eon', 'Blobbos-Eon-F', 'Moody', 'Mating Press', 'Soul Crusher', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Loaded Disk', 'Banana', 'Glomp :3', 'Sexite Y', 'Nimble Metal Body', 'Arena Trap', 'Shadow Tag', 'Fling + License to Sell Hotdogs', 'Mitosis Mash', 'Cell Construct', 'Power Herb + Geomancy', 'Last Respects + Blobbos-Paldea', 'Sketch + Blobbos-Doodle', 'Huge Power + Blobbos-Chad', 'Pure Power + Blobbos-Chad', 'Power Herb + Awaken', 'Baitite', 'Fossilite', 'Zeroite', 'Star Rod + Victory Dance', 'A Blobbos', 'Blobbos-Adventurer', 'Blobbos-Manticore', 'Blobbos-Extradimensional', 'High Quality Rip', 'Immortality', 'Blobbos-Gay', 'Infection', 'Blobbos-Arceus', 'Blobbos-Clover', 'Blobbos-Dark Matter', 'Blobbos-Zero', 'Blobbos-Forbidden', 'Blobbos-Horse', 'Blobbos-Lich', 'Blobbos-Primal', "Partner's Pendant + Super Snore"],
		unbanlist: ['Blobbos-King'],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] Random Battle',
		mod: 'cloverblobboscap',
		team: 'random',
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] Pick Your Team Random Battle',
		mod: 'cloverblobboscap',
		team: 'random',
		ruleset: [
			'Terastal Clause',
			'Picked Team Size = 6',
			'Max Team Size = 12',
			'Team Preview',
			'Dynamax Clause',
			'Obtainable',
			'HP Percentage Mod',
			'Cancel Mod'
		],
	},
	{
		name: '[Gen 8 Clover Blobbos CAP Only] FFA Random Battle',
		mod: 'cloverblobboscap',
		gameType: 'freeforall',
		team: 'random',
		tournamentShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
   {
		name: '[Gen 8 Clover Blobbos CAP Only] Pokebilities',
		mod: 'cloverblobboscap',
		rated: false,
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Blobbos Only',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
		],
		banlist: [
			'Uber', 'Baton Pass',
			'Shadow Tag', 'Arena Trap', 'Moody',
			'Blobbos-Chad', 'Cell Construct', 'Stink Bomb',
			'Blobbos-Bunny', 'Neutralizing Gas', 'Blobbos-Nega',
			'Ascension', 'Mitosis Mash', 'Blobbos-Plok + Jet Punch', 'Fling + License to Sell Hotdogs', 
         'Power Herb + Geomancy', 'Power Herb + Awaken', 'Baitite + Destiny Bond', 'Star Rod + Victory Dance', 
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const ruleTable = this.dex.formats.getRuleTable(this.format);

				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => !ruleTable.isBanned(`ability:${ability}`))
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
		name: '[Gen 8 Clover Blobbos CAP Only] Pokebilities FFA Random Battle',
		mod: 'cloverblobboscap',
		gameType: 'freeforall',
		team: 'random',
		tournamentShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const ruleTable = this.dex.formats.getRuleTable(this.format);

				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => !ruleTable.isBanned(`ability:${ability}`))
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

	///////////////////////////////////////////////////////////////////
	// Showderp
	///////////////////////////////////////////////////////////////////
	{
		section: 'Showderp',
		column: 3,
	},
	{
		name: '[Gen 9] Random Showderp Meme Battle',
		mod: 'gen9',
		team: 'randomMeme',
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 9] Random Showderp Meme Battle Doubles',
		mod: 'gen9',
		gameType: 'doubles',
		team: 'randomMeme',
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 9] Free-For-All Random Showderp Meme Battle',
		mod: 'gen9',
		gameType: 'freeforall',
		tournamentShow: false,
		team: 'randomMeme',
		rated: false,
		ruleset: ['Terastal Clause', 'Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	///////////////////////////////////////////////////////////////////
	// Other Nonsense
	///////////////////////////////////////////////////////////////////
	{
		section: 'Other Nonsense',
		column: 3,
	},
	{
		name: '[Gen 8 Sandbox Only] OU',
		mod: 'sandbox',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause but Special for Blobbos',
		],
		banlist: ['Baton Pass', 'Nothing', 'Moody', 'Arena Trap', 'Shadow Tag', 'Doomsday', 'Doomsday-Revenant', 'Fusjite', 'Eternatus-Eternamax', 'Fuck You', 'Eternal Walk', 'Cope', 'Francine', "It's Over", "F Bomb", "Pokestar-Spirit", "Kingmadio", "Zacian", "Zacian-Crowned", "Calyrex-Shadow", 'Fling + License to Sell Hotdogs', 'Skull Cannon', 'Extinction Wave', 'Wonder Guard', 'Junkbane', 'Shed Tail'],
	},
	{
		name: '[Gen 8 Sandbox Only] FFA Battle',
		mod: 'sandbox',
		gameType: 'freeforall',
		searchShow: false,
		rated: false,
		ruleset: [
			'Obtainable',
			'Team Preview',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: ['Nothing', 'Doomsday', 'Doomsday-Revenant', 'Fusjite', 'Eternatus-Eternamax', 'Fuck You', 'Eternal Walk', 'Cope', 'Francine', "It's Over", "F Bomb", "Pokestar-Spirit", "Kingmadio", 'Fling + License to Sell Hotdogs'],
	},
	{
		name: '[Gen 8 Sandbox Only] Regulated OU',
		mod: 'sandbox',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause but Special for Blobbos',
		],
		banlist: ['Baton Pass', 'Nothing', 'Moody', 'Arena Trap', 'Shadow Tag', 'Doomsday', 'Doomsday-Revenant', 'Fusjite', 'Eternatus-Eternamax', 'Fuck You', 'Eternal Walk', 'Cope', 'Francine', "It's Over", "F Bomb", "Pokestar-Spirit", "Kingmadio", "Zacian", "Zacian-Crowned", "Calyrex-Shadow", 'Fling + License to Sell Hotdogs', 'Skull Cannon', 'Extinction Wave', 'Wonder Guard', 'Junkbane', 'Shed Tail',
			'Condoom + Unaware',
			'Adesign', 'Demiwaifu', 'Notridley', 'Endranther', 'Baddon', 'Scytill', 'Foryu', 'Clovenix', 'Jewipede', 'Chromox', 'Heliofug', 'Vivaiger',
			'Fontaba-/z/', 'Arceus', 'Kuuroba', 'Funnedong', 'Narwhiz', 'Niterpent', 'Griffawork', 'Boarnograf', 'Tentaquil', 'Regishort', 'Regicide', 'Devante', 'Manatank',
			'Nyanonite', 'The Forest', 'Vergilion', 'Dragapult', 'Annihilape', 'Calyrex-Ice', 'Chien-Pao', 'Dialga', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Iron Bundle', 'Landorus', 'Koraidon', 'Kyogre', 'Magearna', 'Mewtwo', 'Miraidon', 'Palafin', 'Palafin-Hero', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Volcarona', 'Zamazenta', 'Zamazenta-Crowned', 'Cinderace', 'Darmanitan-Galar', 'Darmanitan-Galar-Zen',
			'Dracovish', 'Genesect', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Naganadel', 'Necrozma-Dusk Mane', 'Necrozma-Dawn Wings', 'Pheromosa', 'Solgaleo',
			'Spectrier', 'Xerneas', 'Yveltal', 'Zygarde', 'Zygarde-Complete', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Gengarite', 'Groudon-Primal', 'Kangaskhanite', 'Kyogre-Primal',
			'Lucarionite', 'Metagrossite', 'Necrozma-Ultra', 'Ultranecrozium Z', 'Salamencite', 'Sablenite', 'Regigigas + Big Guy', 'Blobbos-Forbidden', 'Fatherfuck', 'Hofucyea', 'Blobbos-Cell + Regenerator',
			'Blobbos-Clover', 'Oblivion', 'Infected-Zombie', 'Blobbos-Wack', 'Blobbos-Wack-Mega', 'Dussans', 'Ho-Oh', 'Jewipede-O', 'Fucker-Ultra', 'Regigigone +  Flame Body', 'Beegyosh', 'Dugwalker',
			'Taterdoom', 'Lemonhorse', 'Neohorse', 'Piiviasuustro', 'Purplegoat', 'Blobbos-Homestuck-God-Tier', 'Blobbos-Dark Matter', 'Blobbos-eedle', 'Blobbos-eedle-True', 'Blobbos-King',
			'Blobbos-Zero', 'Oengas', 'Aurumoth', 'Galashitwatt', 'Sableven', 'Zangursed', 'Abdiking', 'Smellsumo', 'Autumn', 'Shroomageddon', 'Junkgeist', 'Sableedle', 'Spireedle', 'Cell Construct',
		],

	},
	
	{
		name: '[Gen 8 Sandbox Only] Multi-Battle',
		mod: 'sandbox',
		ruleset: [
			'Terastal Clause',
			'Obtainable',
			'Team Preview',
			'Sleep Clause Mod',
			'Endless Battle Clause',
			'HP Percentage Mod',
			'Cancel Mod',
			'Sketch Post-Gen 7 Moves',
			'OHKO Clause',
			'Evasion Moves Clause',
			'Species Clause but Special for Blobbos',
		],
		tournamentShow: false,
		rated: false,
		searchShow: false,
		gameType: 'multi',
		banlist: ['Baton Pass', 'Nothing', 'Moody', 'Arena Trap', 'Shadow Tag', 'Doomsday', 'Doomsday-Revenant', 'Fusjite', 'Eternatus-Eternamax', 'Fuck You', 'Eternal Walk', 'Cope', 'Francine', "It's Over", "F Bomb", "Pokestar-Spirit", "Kingmadio", "Zacian", "Zacian-Crowned", "Calyrex-Shadow", 'Fling + License to Sell Hotdogs', 'Skull Cannon', 'Extinction Wave', 'Wonder Guard', 'Junkbane', 'Shed Tail'],
	},

	{
		name: '[Gen 8 Sburbmons Only] OU',
		mod: 'sburbmons',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: '[Gen 8 Sweet Only] OU',
		mod: 'sweet',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: '[Gen 8 WIPMons Only] OU',
		mod: 'wipmons',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Uber', 'Arena Trap', 'Smellox + Stink Bomb', 'Chasumo + Fuk U', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard',
			'Condoom + Unaware',
		],
	},
	{
		name: '[Gen 8 WIPMons Only] Ubers',
		mod: 'wipmons',
		ruleset: [
			'Terastal Clause',
			'Standard',
			'! Nickname Clause',
			'Dynamax Clause',
			'Sketch Post-Gen 7 Moves',
		],
		banlist: [
			'Baton Pass',
		],
	},
	{
		name: "[Gen 1] Ubers",
		mod: 'gen1',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Standard','! Nickname Clause',],
	},
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', 'Standard','! Nickname Clause',],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] UU",
		mod: 'gen1',
		searchShow: false,
		rated: false,
		ruleset: ['Terastal Clause', '[Gen 1] OU', 'APT Clause'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 1] 10u",
		mod: "gen1",
		ruleset: ['Standard','! Nickname Clause',],
		banlist: ["AG", "Uber", "OU", "UUBL", "UU", "RUBL", "RU", "NUBL", "NU", "PUBL", "PU", "NFE", "DUber", "DOU", "DBL", "DUU", "LC"],
		unbanlist: ['Weedle', 'Kakuna', 'Caterpie', 'Metapod', 'Ditto', 'Magikarp', 'Magikarp + Dragon Rage'],
	},
	{
		name: "[Gen 1] 10u (No Teambuilder)",
		mod: "gen1",
		ruleset: ['Standard'],
		team: 'random10u',
	},
];

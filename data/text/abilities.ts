export const AbilitiesText: {[k: string]: AbilityText} = {
	noability: {
		name: "No Ability",
		shortDesc: "Does nothing.",
	},
	adaptability: {
		name: "Adaptability",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	aerilate: {
		name: "Aerilate",
		desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.3x power.",
		},
	},
	aftermath: {
		name: "Aftermath",
		desc: "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	airlock: {
		name: "Air Lock",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "  The effects of the weather disappeared.",
	},
	analytic: {
		name: "Analytic",
		desc: "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
		shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
	},
	angerpoint: {
		name: "Anger Point",
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",
		gen4: {
			desc: "If this Pokemon, or its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
			shortDesc: "If this Pokemon or its substitute takes a critical hit, its Attack is raised 12 stages.",
		},

		boost: "  [POKEMON] maxed its Attack!",
	},
	angershell: {
		name: "Anger Shell",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Attack, Special Attack, and Speed are raised by 1 stage, and its Defense and Special Defense are lowered by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
		shortDesc: "At 1/2 or less of this Pokemon's max HP: +1 Atk, Sp. Atk, Spe, and -1 Def, Sp. Def.",
	},
	anticipation: {
		name: "Anticipation",
		desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move. This effect considers any move that deals direct damage as an attacking move of its respective type, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
		shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",
		gen6: {
			desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move. This effect considers any move that deals direct damage as an attacking move of its respective type, Hidden Power counts as its determined type, and Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.",
		},
		gen5: {
			desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move. This effect considers any move that deals direct damage as an attacking move of its respective type, and Hidden Power, Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.",
		},
		gen4: {
			desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move that this Pokemon is not immune to and if its level is less than or equal to the opposing Pokemon's level. This effect does not consider Counter, Dragon Rage, Metal Burst, Mirror Coat, Night Shade, Psywave, or Seismic Toss as attacking moves, and Hidden Power, Judgment, Natural Gift, and Weather Ball are considered Normal-type moves. This effect considers any changes to the effectiveness of attacks against this Pokemon due to the effects of Gravity or the Normalize or Scrappy Abilities.",
		},

		activate: "  [POKEMON] shuddered!",
	},
	arenatrap: {
		name: "Arena Trap",
		desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.",
		shortDesc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne.",
		gen6: {
			desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.",
		},
		gen5: {
			desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are airborne or holding a Shed Shell.",
		},
		gen4: {
			desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne or holding a Shed Shell.",
		},
		gen3: {
			desc: "Prevents opposing Pokemon from choosing to switch out unless they are airborne.",
		},
	},
	armortail: {
		name: "Armor Tail",
		desc: "Priority moves used by opposing Pokemon targeting this Pokemon or its allies are prevented from having an effect.",
		shortDesc: "This Pokemon and its allies are protected from opposing priority moves.",

		block: "#damp",
	},
	aromaveil: {
		name: "Aroma Veil",
		desc: "This Pokemon and its allies cannot become affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.",
		shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",

		block: "  [POKEMON] is protected by an aromatic veil!",
	},
	asone: {
		name: "As One",
		shortDesc: "See 'As One (Glastrier)' and 'As One (Spectrier)'.",

		start: "  [POKEMON] has two Abilities!",
	},
	asoneglastrier: {
		name: "As One (Glastrier)",
		shortDesc: "Combination of the Unnerve and Chilling Neigh Abilities.",
	},
	asonespectrier: {
		name: "As One (Spectrier)",
		shortDesc: "Combination of the Unnerve and Grim Neigh Abilities.",
	},
	aurabreak: {
		name: "Aura Break",
		desc: "While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.",
		shortDesc: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.",

		start: "  [POKEMON] reversed all other Pok\u00E9mon's auras!",
	},
	baddreams: {
		name: "Bad Dreams",
		desc: "Causes opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping foes to lose 1/8 of their max HP at the end of each turn.",
		gen6: {
			desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
			shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",
		},
		gen4: {
			desc: "Causes opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
			shortDesc: "Causes sleeping foes to lose 1/8 of their max HP at the end of each turn.",
		},

		damage: "  [POKEMON] is tormented!",
	},
	ballfetch: {
		name: "Ball Fetch",
		shortDesc: "No competitive use.",
	},
	battery: {
		name: "Battery",
		shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
	},
	battlearmor: {
		name: "Battle Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	battlebond: {
		name: "Battle Bond",
		desc: "If this Pokemon is a Greninja, its Attack, Special Attack, and Speed are raised by 1 stage if it attacks and knocks out another Pokemon. This effect can only happen once per battle.",
		shortDesc: "After KOing a Pokemon: raises Attack, Sp. Atk, Speed by 1 stage. Once per battle.",
		gen8: {
			desc: "If this Pokemon is a Greninja, it transforms into Ash-Greninja if it attacks and knocks out another Pokemon. If this Pokemon is an Ash-Greninja, its Water Shuriken has 20 power and always hits three times.",
			shortDesc: "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.",
		},
		activate: "  [POKEMON] became fully charged due to its bond with its Trainer!",
		transform: "[POKEMON] became Ash-Greninja!",
	},
	beadsofruin: {
		name: "Beads of Ruin",
		shortDesc: "Active Pokemon without this Ability have their Special Defense multiplied by 0.75.",

		start: "  [POKEMON]'s Beads of Ruin weakened the Sp. Def of all surrounding Pokémon!",
	},
	beastboost: {
		name: "Beast Boost",
		desc: "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon. Stat stage changes are not considered. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order.",
		shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
	},
	berserk: {
		name: "Berserk",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	bigpecks: {
		name: "Big Pecks",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
	},
	blaze: {
		name: "Blaze",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Fire attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Fire-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Fire-type attacks have 1.5x power.",
		},
	},
	bulletproof: {
		name: "Bulletproof",
		shortDesc: "This Pokemon is immune to bullet moves.",
	},
	cheekpouch: {
		name: "Cheek Pouch",
		desc: "If this Pokemon eats a held Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect. This effect can also activate after the effects of Bug Bite, Fling, Pluck, Stuff Cheeks, and Teatime if the eaten Berry had an effect on this Pokemon.",
		shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
		gen7: {
			desc: "If this Pokemon eats a held Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect. This effect can also activate after the effects of Bug Bite, Fling, and Pluck if the eaten Berry has an effect on this Pokemon.",
		},
	},
	chillingneigh: {
		name: "Chilling Neigh",
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	chlorophyll: {
		name: "Chlorophyll",
		desc: "If Sunny Day is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		},
	},
	clearbody: {
		name: "Clear Body",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	cloudnine: {
		name: "Cloud Nine",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "#airlock",
	},
	colorchange: {
		name: "Color Change",
		desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
		gen4: {
			desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after each hit from a multi-hit move. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
	},
	comatose: {
		name: "Comatose",
		desc: "This Pokemon is considered to be asleep and cannot become affected by a non-volatile status condition or Yawn.",
		shortDesc: "This Pokemon cannot be statused, and is considered to be asleep.",

		start: "  [POKEMON] is drowsing!",
	},
	commander: {
		name: "Commander",
		desc: "If this Pokemon is a Tatsugiri and a Dondozo is an active ally, this Pokemon goes into the Dondozo's mouth. The Dondozo has its Attack, Special Attack, Speed, Defense, and Special Defense raised by 2 stages. During the effect, the Dondozo cannot be switched out, this Pokemon cannot select an action, and attacks targeted at this Pokemon will be avoided but it will still take indirect damage. If this Pokemon faints during the effect, a Pokemon can be switched in as a replacement but the Dondozo remains unable to be switched out. If the Dondozo faints during the effect, this Pokemon regains the ability to select an action.",
		shortDesc: "If ally is Dondozo: this Pokemon cannot act or be hit, +2 to all Dondozo's stats.",

		activate: "  [POKEMON] was swallowed by [TARGET] and became [TARGET]'s commander!",
	},
	competitive: {
		name: "Competitive",
		desc: "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
	},
	compoundeyes: {
		name: "Compound Eyes",
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
	},
	contrary: {
		name: "Contrary",
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		gen7: {
			desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		},
		gen6: {
			desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		},
	},
	corrosion: {
		name: "Corrosion",
		shortDesc: "This Pokemon can poison or badly poison a Pokemon regardless of its typing.",
	},
	costar: {
		name: "Costar",
		shortDesc: "On switch-in, this Pokemon copies all of its ally's stat stage changes.",
	},
	cottondown: {
		name: "Cotton Down",
		desc: "When this Pokemon is hit by an attack, the Speed of all other Pokemon on the field is lowered by 1 stage.",
		shortDesc: "If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage.",
	},
	cudchew: {
		name: "Cud Chew",
		shortDesc: "If this Pokemon eats a Berry, it will eat that Berry again at the end of the next turn.",
	},
	curiousmedicine: {
		name: "Curious Medicine",
		shortDesc: "On switch-in, this Pokemon's allies have their stat stages reset to 0.",
	},
	cursedbody: {
		name: "Cursed Body",
		desc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
		shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.",
	},
	cutecharm: {
		name: "Cute Charm",
		desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
		gen4: {
			desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "There is a 1/3 chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance of infatuating Pokemon of the opposite gender if they make contact.",
		},
	},
	damp: {
		name: "Damp",
		desc: "While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.",
		gen7: {
			desc: "While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
			shortDesc: "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.",
		},
		gen6: {
			desc: "While this Pokemon is active, Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
			shortDesc: "Prevents Explosion/Self-Destruct/Aftermath while this Pokemon is active.",
		},
		gen3: {
			desc: "While this Pokemon is active, Explosion and Self-Destruct are prevented from having an effect.",
			shortDesc: "Prevents Explosion and Self-Destruct while this Pokemon is active.",
		},

		block: "  [SOURCE] cannot use [MOVE]!",
	},
	dancer: {
		name: "Dancer",
		desc: "After another Pokemon uses a dance move, this Pokemon uses the same move. The copied move is subject to all effects that can prevent a move from being executed. A move used through this Ability cannot be copied again by other Pokemon with this Ability.",
		shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move.",
	},
	darkaura: {
		name: "Dark Aura",
		desc: "While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a dark aura!",
	},
	dauntlessshield: {
		name: "Dauntless Shield",
		shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage. Once per battle.",
		gen8: {
			shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",
		},
	},
	dazzling: {
		name: "Dazzling",
		desc: "Priority moves used by opposing Pokemon targeting this Pokemon or its allies are prevented from having an effect.",
		shortDesc: "This Pokemon and its allies are protected from opposing priority moves.",

		block: "#damp",
	},
	defeatist: {
		name: "Defeatist",
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",
	},
	defiant: {
		name: "Defiant",
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
	},
	deltastream: {
		name: "Delta Stream",
		desc: "On switch-in, the weather becomes Delta Stream, which removes the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by the Desolate Land or Primordial Sea Abilities.",
		shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle.",
	},
	desolateland: {
		name: "Desolate Land",
		desc: "On switch-in, the weather becomes Desolate Land, which includes all the effects of Sunny Day and prevents damaging Water-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by the Delta Stream or Primordial Sea Abilities.",
		shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.",
	},
	disguise: {
		name: "Disguise",
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.",
		shortDesc: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.",
		gen7: {
			desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.",
			shortDesc: "(Mimikyu only) First hit deals 0 damage, breaks disguise.",
		},

		block: "  Its disguise served it as a decoy!",
		transform: "[POKEMON]'s disguise was busted!",
	},
	download: {
		name: "Download",
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
	},
	dragonsmaw: {
		name: "Dragon's Maw",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Dragon-type attack.",
	},
	drizzle: {
		name: "Drizzle",
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
	},
	drought: {
		name: "Drought",
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
	},
	dryskin: {
		name: "Dry Skin",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. The weather effects are prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",
		gen7: {
			desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.",
		},

		damage: "  ([POKEMON] was hurt by its Dry Skin.)",
	},
	earlybird: {
		name: "Early Bird",
		shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
	},
	eartheater: {
		name: "Earth Eater",
		desc: "This Pokemon is immune to Ground-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Ground-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Ground moves; Ground immunity.",
	},
	effectspore: {
		name: "Effect Spore",
		desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.",
		shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "10% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "10% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		},
	},
	electricsurge: {
		name: "Electric Surge",
		shortDesc: "On switch-in, this Pokemon summons Electric Terrain.",
	},
	electromorphosis: {
		name: "Electromorphosis",
		shortDesc: "This Pokemon gains the Charge effect when it takes a hit from an attack.",

		start: "  Being hit by [MOVE] charged [POKEMON] with power!",
	},
	embodyaspectcornerstone: {
		name: "Embody Aspect (Cornerstone)",
		shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",

		boost: "  The Cornerstone Mask worn by [POKEMON] shone brilliantly, and [POKEMON]'s Defense rose!",
	},
	embodyaspecthearthflame: {
		name: "Embody Aspect (Hearthflame)",
		shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",

		boost: "  The Hearthflame Mask worn by [POKEMON] shone brilliantly, and [POKEMON]'s Attack rose!",
	},
	embodyaspectteal: {
		name: "Embody Aspect (Teal)",
		shortDesc: "On switch-in, this Pokemon's Speed is raised by 1 stage.",

		boost: "  The Teal Mask worn by [POKEMON] shone brilliantly, and [POKEMON]'s Speed rose!",
	},
	embodyaspectwellspring: {
		name: "Embody Aspect (Wellspring)",
		shortDesc: "On switch-in, this Pokemon's Special Defense is raised by 1 stage.",

		boost: "  The Wellspring Mask worn by [POKEMON] shone brilliantly, and [POKEMON]'s Sp. Def rose!",
	},
	emergencyexit: {
		name: "Emergency Exit",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	fairyaura: {
		name: "Fairy Aura",
		desc: "While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a fairy aura!",
	},
	filter: {
		name: "Filter",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	flamebody: {
		name: "Flame Body",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be burned.",
		},
	},
	flareboost: {
		name: "Flare Boost",
		desc: "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is burned, its special attacks have 1.5x power.",
	},
	flashfire: {
		name: "Flash Fire",
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its offensive stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
		gen4: {
			desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability.",
		},
		gen3: {
			desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability. If this Pokemon has a non-volatile status condition, is a Fire type, or has a substitute, Will-O-Wisp will not activate this Ability.",
		},

		start: "  The power of [POKEMON]'s Fire-type moves rose!",
	},
	flowergift: {
		name: "Flower Gift",
		desc: "If Sunny Day is active, the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is holding Utility Umbrella, the Attack and Special Defense stats of it and its allies are not boosted. If an ally is holding Utility Umbrella, they will not receive the Attack and Special Defense boosts. If this Pokemon is a Cherim and is not holding Utility Umrella, it transforms into its Sunshine Form",
		shortDesc: "If Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x and if it is a Cherrim, it transforms into its Sunshine Form.",
		gen7: {
			desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.",
		},
		gen4: {
			desc: "If Sunny Day is active, the Attack and Special Defense of this Pokemon and its allies are multiplied by 1.5.",
			shortDesc: "If Sunny Day is active, Attack and Sp. Def of this Pokemon and its allies are 1.5x.",
		},
	},
	flowerveil: {
		name: "Flower Veil",
		desc: "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a non-volatile status condition inflicted on them by other Pokemon.",
		shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",

		block: "  [POKEMON] surrounded itself with a veil of petals!",
	},
	fluffy: {
		name: "Fluffy",
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.",
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",
	},
	forecast: {
		name: "Forecast",
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. This effect is prevented if this Pokemon is holding a Utility Umbrella and the weather is Rain Dance or Sunny Day.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		gen7: {
			desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
		},
	},
	forewarn: {
		name: "Forewarn",
		desc: "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon. This effect considers OHKO moves to have 150 power, Counter, Mirror Coat, and Metal Burst to have 120 power, every other attacking move with an unspecified power to have 80 power, and non-damaging moves to have 1 power.",
		shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",
		gen4: {
			desc: "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon. This effect considers OHKO moves to have 150 power, Counter, Mirror Coat, and Metal Burst to have 120 power, and every other attacking move with an unspecified power to have 80 power.",
		},

		activate: "  [TARGET]'s [MOVE] was revealed!",
		activateNoTarget: "  [POKEMON]'s Forewarn alerted it to [MOVE]!",
	},
	friendguard: {
		name: "Friend Guard",
		shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
	},
	frisk: {
		name: "Frisk",
		shortDesc: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",
		gen5: {
			shortDesc: "On switch-in, this Pokemon identifies the held item of a random opposing Pokemon.",
		},

		activate: "  [POKEMON] frisked [TARGET] and found its [ITEM]!",
		activateNoTarget: "  [POKEMON] frisked its target and found one [ITEM]!",
	},
	fullmetalbody: {
		name: "Full Metal Body",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	furcoat: {
		name: "Fur Coat",
		shortDesc: "This Pokemon's Defense is doubled.",
	},
	galewings: {
		name: "Gale Wings",
		shortDesc: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.",
		gen6: {
			shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		},
	},
	galvanize: {
		name: "Galvanize",
		desc: "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
	},
	gluttony: {
		name: "Gluttony",
		desc: "When this Pokemon is holding a Berry that usually activates with 1/4 or less of its maximum HP, it is eaten at 1/2 or less of its maximum HP instead.",
		shortDesc: "This Pokemon eats Berries at 1/2 max HP or less instead of their usual 1/4 max HP.",
	},
	goodasgold: {
		name: "Good as Gold",
		shortDesc: "This Pokemon is immune to Status moves.",
	},
	gooey: {
		name: "Gooey",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	gorillatactics: {
		name: "Gorilla Tactics",
		desc: "This Pokemon's Attack is multiplied by 1.5, but it can only select the first move it executes. These effects are prevented while this Pokemon is Dynamaxed.",
		shortDesc: "This Pokemon's Attack is 1.5x, but it can only select the first move it executes.",
	},
	grasspelt: {
		name: "Grass Pelt",
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
	},
	grassysurge: {
		name: "Grassy Surge",
		shortDesc: "On switch-in, this Pokemon summons Grassy Terrain.",
	},
	grimneigh: {
		name: "Grim Neigh",
		desc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	guarddog: {
		name: "Guard Dog",
		desc: "This Pokemon is immune to the effect of the Intimidate Ability and raises its Attack by 1 stage instead. This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
		shortDesc: "Immune to Intimidate. Intimidated: +1 Attack. Cannot be forced to switch out.",
	},
	gulpmissile: {
		name: "Gulp Missile",
		desc: "If this Pokemon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.",
		shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.",
	},
	guts: {
		name: "Guts",
		desc: "If this Pokemon has a non-volatile status condition, its Attack is multiplied by 1.5. This Pokemon's physical attacks ignore the burn effect of halving damage.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",
	},
	hadronengine: {
		name: "Hadron Engine",
		shortDesc: "On switch-in, summons Electric Terrain. During Electric Terrain, Sp. Atk is 1.3333x.",

		start: "  [POKEMON] turned the ground into Electric Terrain, energizing its futuristic engine!",
		activate: "  [POKEMON] used the Electric Terrain to energize its futuristic engine!",
	},
	harvest: {
		name: "Harvest",
		desc: "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
		shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",

		addItem: "  [POKEMON] harvested one [ITEM]!",
	},
	healer: {
		name: "Healer",
		desc: "30% chance this Pokemon's ally has its non-volatile status condition cured at the end of each turn.",
		shortDesc: "30% chance this Pokemon's ally has its status cured at the end of each turn.",
		gen6: {
			desc: "30% chance each of this Pokemon's adjacent allies has its non-volatile status condition cured at the end of each turn.",
			shortDesc: "30% chance each adjacent ally has its status cured at the end of each turn.",
		},
	},
	heatproof: {
		name: "Heatproof",
		desc: "If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon takes half of the usual burn damage, rounded down.",
		shortDesc: "Fire damage against this Pokemon is dealt with 1/2 offensive stat; 1/2 burn damage.",
		gen8: {
			desc: "The power of Fire-type attacks against this Pokemon is halved. This Pokemon takes half of the usual burn damage, rounded down.",
			shortDesc: "The power of Fire-type attacks against this Pokemon is halved; burn damage halved.",
		},
	},
	heavymetal: {
		name: "Heavy Metal",
		desc: "This Pokemon's weight is doubled. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone.",
		shortDesc: "This Pokemon's weight is doubled.",
	},
	honeygather: {
		name: "Honey Gather",
		shortDesc: "No competitive use.",
	},
	hospitality: {
		name: "Hospitality",
		shortDesc: "On switch-in, this Pokemon restores 1/4 of its ally's maximum HP, rounded down.",

		heal: "  [POKEMON] drank down all the matcha that [SOURCE] made!",
	},
	hugepower: {
		name: "Huge Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	hungerswitch: {
		name: "Hunger Switch",
		desc: "If this Pokemon is a Morpeko, it changes formes between its Full Belly Mode and Hangry Mode at the end of each turn.",
		shortDesc: "If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn.",
	},
	hustle: {
		name: "Hustle",
		desc: "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
	},
	hydration: {
		name: "Hydration",
		desc: "This Pokemon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		gen7: {
			desc: "This Pokemon has its non-volatile status condition cured at the end of each turn if Rain Dance is active.",
		},
	},
	hypercutter: {
		name: "Hyper Cutter",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
	},
	icebody: {
		name: "Ice Body",
		desc: "If Snow is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Snow is active, this Pokemon heals 1/16 of its max HP each turn.",
		gen8: {
			desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
			shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
		},
	},
	iceface: {
		name: "Ice Face",
		desc: "If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Snow begins or when Eiscue switches in while Snow is active. Confusion damage also breaks the ice face.",
		shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. Effect is restored in Snow.",
		gen8: {
			desc: "If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face.",
			shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.",
		},
	},
	icescales: {
		name: "Ice Scales",
		shortDesc: "This Pokemon receives 1/2 damage from special attacks.",
	},
	illuminate: {
		name: "Illuminate",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		gen8: {
			shortDesc: "No competitive use.",
		},
	},
	illusion: {
		name: "Illusion",
		desc: "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",

		end: "  [POKEMON]'s illusion wore off!",
	},
	immunity: {
		name: "Immunity",
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
	},
	imposter: {
		name: "Imposter",
		desc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.",
		shortDesc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.",
	},
	infiltrator: {
		name: "Infiltrator",
		desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist, and Aurora Veil.",
		shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
		gen6: {
			desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, and Mist.",
			shortDesc: "Moves ignore substitutes and the foe's Reflect, Light Screen, Safeguard, and Mist.",
		},
		gen5: {
			desc: "This Pokemon's moves ignore the opposing side's Reflect, Light Screen, Safeguard, and Mist.",
			shortDesc: "This Pokemon's moves ignore the foe's Reflect, Light Screen, Safeguard, and Mist.",
		},
	},
	innardsout: {
		name: "Innards Out",
		desc: "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
		shortDesc: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Inner Focus",
		desc: "This Pokemon cannot be made to flinch. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be made to flinch. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon cannot be made to flinch.",
			shortDesc: "This Pokemon cannot be made to flinch.",
		},
	},
	insomnia: {
		name: "Insomnia",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	intimidate: {
		name: "Intimidate",
		desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon with the Inner Focus, Oblivious, Own Tempo, or Scrappy Abilities and Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage.",
		gen7: {
			desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		},
		gen6: {
			desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
			shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		},
		gen4: {
			desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune. If U-turn breaks an opposing substitute and this Pokemon switches in as the replacement, the Pokemon that had the substitute is still immune to this Ability.",
			shortDesc: "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage.",
		},
		gen3: {
			desc: "On switch-in, this Pokemon lowers the Attack of opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		},
	},
	intrepidsword: {
		name: "Intrepid Sword",
		shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage. Once per battle.",
		gen8: {
			shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",
		},
	},
	ironbarbs: {
		name: "Iron Barbs",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "#roughskin",
	},
	ironfist: {
		name: "Iron Fist",
		desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
	},
	justified: {
		name: "Justified",
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
	},
	keeneye: {
		name: "Keen Eye",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		gen5: {
			desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
			shortDesc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
		},
	},
	klutz: {
		name: "Klutz",
		desc: "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
		shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
	},
	leafguard: {
		name: "Leaf Guard",
		desc: "If Sunny Day is active, this Pokemon cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it.",
		},
		gen4: {
			desc: "If Sunny Day is active, this Pokemon cannot become affected by a non-volatile status condition or Yawn, but can use Rest normally.",
			shortDesc: "If Sunny Day is active, this Pokemon cannot be statused, but Rest works normally.",
		},
	},
	levitate: {
		name: "Levitate",
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pokemon as if it did not have this Ability.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		gen5: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, and Iron Ball nullify the immunity.",
		},
		gen4: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, and Iron Ball nullify the immunity.",
			shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Iron Ball nullify it.",
		},
		gen3: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes and the Arena Trap Ability.",
			shortDesc: "This Pokemon is immune to Ground.",
		},
	},
	libero: {
		name: "Libero",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pokemon is not Terastallized.",
		shortDesc: "This Pokemon's type changes to the type of the move it is using. Once per switch-in.",
		gen8: {
			desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
			shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
		},
	},
	lightmetal: {
		name: "Light Metal",
		desc: "This Pokemon's weight is halved, rounded down to a tenth of a kilogram. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone. A Pokemon's weight will not drop below 0.1 kg.",
		shortDesc: "This Pokemon's weight is halved.",
	},
	lightningrod: {
		name: "Lightning Rod",
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move. If multiple Pokemon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
		gen4: {
			desc: "If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself.",
			shortDesc: "This Pokemon draws single-target Electric moves to itself.",
		},
		gen3: {
			desc: "If this Pokemon is not the target of a single-target Electric-type move used by an opposing Pokemon, this Pokemon redirects that move to itself. This effect considers Hidden Power a Normal-type move.",
			shortDesc: "This Pokemon draws single-target Electric moves used by opponents to itself.",
		},

		activate: "  [POKEMON] took the attack!",
	},
	limber: {
		name: "Limber",
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
	},
	lingeringaroma: {
		name: "Lingering Aroma",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Lingering Aroma. Does not affect Pokemon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Lingering Aroma, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero Abilities.",
		shortDesc: "Making contact with this Pokemon has the attacker's Ability become Lingering Aroma.",

		changeAbility: "  A lingering aroma clings to [TARGET]!",
	},
	liquidooze: {
		name: "Liquid Ooze",
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",
		gen4: {
			desc: "This Pokemon damages those draining HP from it for as much as they would heal. This effect does not consider Dream Eater.",
		},

		damage: "  [POKEMON] sucked up the liquid ooze!",
	},
	liquidvoice: {
		name: "Liquid Voice",
		desc: "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Water type.",
	},
	longreach: {
		name: "Long Reach",
		shortDesc: "This Pokemon's attacks do not make contact with the target.",
	},
	magicbounce: {
		name: "Magic Bounce",
		desc: "This Pokemon is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or Magic Coat's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or Magic Coat's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this Ability takes effect.",
		shortDesc: "This Pokemon blocks certain Status moves and bounces them back to the user.",
		gen5: {
			desc: "This Pokemon is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or Magic Coat's effect. Spikes, Stealth Rock, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or Magic Coat's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this Ability takes effect.",
		},

		move: "#magiccoat",
	},
	magicguard: {
		name: "Magic Guard",
		desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
		shortDesc: "This Pokemon can only be damaged by direct attacks.",
		gen4: {
			desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage. This Pokemon cannot be prevented from moving because of paralysis, and is unaffected by Toxic Spikes on switch-in.",
			shortDesc: "This Pokemon can only be damaged by direct attacks, and can't be fully paralyzed.",
		},
	},
	magician: {
		name: "Magician",
		desc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.",
		shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.",
	},
	magmaarmor: {
		name: "Magma Armor",
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
	},
	magnetpull: {
		name: "Magnet Pull",
		desc: "Prevents opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
		shortDesc: "Prevents opposing Steel-type Pokemon from choosing to switch out.",
		gen6: {
			desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
			shortDesc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out.",
		},
		gen5: {
			desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell.",
			shortDesc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out.",
		},
		gen4: {
			desc: "Prevents opposing Steel-type Pokemon from choosing to switch out, unless they are holding a Shed Shell.",
			shortDesc: "Prevents opposing Steel-type Pokemon from choosing to switch out.",
		},
		gen3: {
			desc: "Prevents Steel-type Pokemon from choosing to switch out, other than this Pokemon.",
			shortDesc: "Prevents Steel-type Pokemon from choosing to switch out, other than this Pokemon.",
		},
	},
	marvelscale: {
		name: "Marvel Scale",
		shortDesc: "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5.",
	},
	megalauncher: {
		name: "Mega Launcher",
		desc: "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
	},
	merciless: {
		name: "Merciless",
		shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",
	},
	mimicry: {
		name: "Mimicry",
		desc: "This Pokemon's types change to match the active Terrain when this Pokemon acquires this Ability, or whenever a Terrain begins. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain. If this Ability is acquired without an active Terrain, or a Terrain ends, this Pokemon's types become the original types for its species.",
		shortDesc: "This Pokemon's types change to match the Terrain. Type reverts when Terrain ends.",

		activate: "  [POKEMON] returned to its original type!",
	},
	mindseye: {
		name: "Mind's Eye",
		desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "Fighting, Normal moves hit Ghost. Accuracy can't be lowered, ignores evasiveness.",
	},
	minus: {
		name: "Minus",
		desc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		gen4: {
			desc: "If an active ally has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active ally has the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
		gen3: {
			desc: "If an active Pokemon has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active Pokemon has the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
	},
	mirrorarmor: {
		name: "Mirror Armor",
		desc: "When one of this Pokemon's stat stages would be lowered by another Pokemon, that Pokemon's stat stage is lowered instead. This effect does not happen if this Pokemon's stat stage was already -6. If the other Pokemon has a substitute, neither Pokemon has its stat stage lowered.",
		shortDesc: "If this Pokemon's stat stages would be lowered, the attacker's are lowered instead.",
	},
	mistysurge: {
		name: "Misty Surge",
		shortDesc: "On switch-in, this Pokemon summons Misty Terrain.",
	},
	moldbreaker: {
		name: "Mold Breaker",
		desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		gen7: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen6: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen5: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Battle Armor, Big Pecks, Clear Body, Contrary, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Friend Guard, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen4: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightning Rod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, and Wonder Guard. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move. The Attack modifier from an ally's Flower Gift Ability is not negated.",
		},

		start: "  [POKEMON] breaks the mold!",
	},
	moody: {
		name: "Moody",
		desc: "This Pokemon has a random stat, other than accuracy or evasiveness, raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
		shortDesc: "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.",
		gen7: {
			desc: "This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
			shortDesc: "Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.",
		},
	},
	motordrive: {
		name: "Motor Drive",
		desc: "This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
	},
	moxie: {
		name: "Moxie",
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	multiscale: {
		name: "Multiscale",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	multitype: {
		name: "Multitype",
		shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate.",
		gen7: {
			shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.",
		},
		gen6: {
			shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate.",
		},
		gen4: {
			shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate. This Pokemon cannot lose its held item due to another Pokemon's attack.",
		},
	},
	mummy: {
		name: "Mummy",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect Pokemon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Mummy, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",
		gen8: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect Pokemon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
		},
		gen7: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect Pokemon with the Battle Bond, Comatose, Disguise, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
		},
		gen6: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect Pokemon with the Multitype, Mummy, or Stance Change Abilities.",
		},
		gen5: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect Pokemon with the Multitype or Mummy Abilities.",
		},

		changeAbility: "  [TARGET]'s Ability became Mummy!",
	},
	myceliummight: {
		name: "Mycelium Might",
		desc: "This Pokemon's Status moves ignore certain Abilities of other Pokemon, and go last among Pokemon using the same or greater priority moves.",
		shortDesc: "This Pokemon's Status moves go last in their priority bracket and ignore Abilities.",
	},
	naturalcure: {
		name: "Natural Cure",
		shortDesc: "This Pokemon has its non-volatile status condition cured when it switches out.",

		activate: "  ([POKEMON] is cured by its Natural Cure!)",
	},
	neuroforce: {
		name: "Neuroforce",
		desc: "This Pokemon's attacks that are super effective against the target have their damage multiplied by 1.25.",
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
	},
	neutralizinggas: {
		name: "Neutralizing Gas",
		desc: "While this Pokemon is active, Abilities have no effect. This Ability activates before hazards and other Abilities take effect. Does not affect the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
		shortDesc: "While this Pokemon is active, Abilities have no effect.",

		start: "  Neutralizing gas filled the area!",
		end: "  The effects of the neutralizing gas wore off!",
	},
	noguard: {
		name: "No Guard",
		shortDesc: "Every move used by or against this Pokemon will always hit.",
	},
	normalize: {
		name: "Normalize",
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's moves are changed to be Normal type. This effect comes before other effects that change a move's type.",
			shortDesc: "This Pokemon's moves are changed to be Normal type.",
		},
		gen4: {
			desc: "This Pokemon's moves are changed to be Normal type. This effect comes after other effects that change a move's type, except Struggle.",
		},
	},
	oblivious: {
		name: "Oblivious",
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it.",
			shortDesc: "This Pokemon cannot be infatuated or taunted.",
		},
		gen5: {
			desc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
			shortDesc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
		},
	},
	opportunist: {
		name: "Opportunist",
		shortDesc: "When an opposing Pokemon has a stat stage raised, this Pokemon copies the effect.",
	},
	orichalcumpulse: {
		name: "Orichalcum Pulse",
		shortDesc: "On switch-in, summons Sunny Day. During Sunny Day, Attack is 1.3333x.",

		start: "  [POKEMON] turned the sunlight harsh, sending its ancient pulse into a frenzy!",
		activate: "  [POKEMON] basked in the sunlight, sending its ancient pulse into a frenzy!",
	},
	overcoat: {
		name: "Overcoat",
		desc: "This Pokemon is immune to powder moves, damage from Sandstorm, and the effects of Rage Powder and the Effect Spore Ability.",
		shortDesc: "This Pokemon is immune to powder moves, Sandstorm damage, and Effect Spore.",
		gen8: {
			desc: "This Pokemon is immune to powder moves, damage from Sandstorm or Hail, and the effects of Rage Powder and the Effect Spore Ability.",
			shortDesc: "This Pokemon is immune to powder moves, Sandstorm or Hail damage, Effect Spore.",
		},
		gen5: {
			desc: "This Pokemon is immune to damage from Sandstorm or Hail.",
			shortDesc: "This Pokemon is immune to damage from Sandstorm or Hail.",
		},
	},
	overgrow: {
		name: "Overgrow",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Grass attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Grass-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Grass-type attacks have 1.5x power.",
		},
	},
	owntempo: {
		name: "Own Tempo",
		desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "This Pokemon cannot be confused. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
			shortDesc: "This Pokemon cannot be confused.",
		},
	},
	parentalbond: {
		name: "Parental Bond",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Dragon Darts, Dynamax Cannon, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, or any two-turn move.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
		gen8: {
			desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Dragon Darts, Dynamax Cannon, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, any two-turn move, or any Max Move.",
		},
		gen7: {
			desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, any two-turn move, or any Z-Move.",
		},
		gen6: {
			desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved. Does not affect Doom Desire, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, or any two-turn move.",
			shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage halved.",
		},
	},
	pastelveil: {
		name: "Pastel Veil",
		desc: "This Pokemon and its allies cannot be poisoned. Gaining this Ability while this Pokemon or its ally is poisoned cures them. If this Ability is being ignored during an effect that causes poison, this Pokemon is cured immediately but its ally is not.",
		shortDesc: "This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies.",
	},
	perishbody: {
		name: "Perish Body",
		desc: "Making contact with this Pokemon starts the Perish Song effect for it and the attacker. This effect does not happen for this Pokemon if the attacker already has a perish count.",
		shortDesc: "Making contact with this Pokemon starts the Perish Song effect for it and the attacker.",

		start: "  Both Pok\u00E9mon will faint in three turns!",
	},
	pickpocket: {
		name: "Pickpocket",
		desc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
		shortDesc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item.",
	},
	pickup: {
		name: "Pickup",
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
		gen4: {
			desc: "No competitive use.",
			shortDesc: "No competitive use.",
		},

		addItem: "#recycle",
	},
	pixilate: {
		name: "Pixilate",
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.3x power.",
		},
	},
	plus: {
		name: "Plus",
		desc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		gen4: {
			desc: "If an active ally has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active ally has the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
		gen3: {
			desc: "If an active Pokemon has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active Pokemon has the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
	},
	poisonheal: {
		name: "Poison Heal",
		desc: "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
	},
	poisonpoint: {
		name: "Poison Point",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned.",
		},
	},
	poisontouch: {
		name: "Poison Touch",
		desc: "This Pokemon's contact moves have a 30% chance of poisoning. This effect comes after a move's inherent secondary effect chance.",
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
	},
	powerconstruct: {
		name: "Power Construct",
		desc: "If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.",
		shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.",

		activate: "  You sense the presence of many!",
		transform: "[POKEMON] transformed into its Complete Forme!",
	},
	powerofalchemy: {
		name: "Power of Alchemy",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, and Zero to Hero.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		gen8: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},
		gen7: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Power Spot",
		desc: "This Pokemon's allies have the power of their moves multiplied by 1.3. This affects Doom Desire and Future Sight, even if the user is not on the field.",
		shortDesc: "This Pokemon's allies have the power of their moves multiplied by 1.3.",
	},
	prankster: {
		name: "Prankster",
		desc: "This Pokemon's non-damaging moves have their priority increased by 1. Opposing Dark-type Pokemon are immune to these moves, and any move called by these moves, if the resulting user of the move has this Ability.",
		shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
		gen6: {
			desc: "This Pokemon's non-damaging moves have their priority increased by 1.",
			shortDesc: "This Pokemon's non-damaging moves have their priority increased by 1.",
		},
	},
	pressure: {
		name: "Pressure",
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison, Snatch, and Tera Blast also lose one additional PP when used by an opposing Pokemon, but Sticky Web does not.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		gen8: {
			desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison and Snatch also lose one additional PP when used by an opposing Pokemon, but Sticky Web does not.",
		},
		gen5: {
			desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. Imprison and Snatch also lose one additional PP when used by an opposing Pokemon.",
		},
		gen4: {
			desc: "If this Pokemon is the target of another Pokemon's move, that move loses one additional PP.",
			shortDesc: "If this Pokemon is the target of a move, that move loses one additional PP.",
		},

		start: "  [POKEMON] is exerting its pressure!",
	},
	primordialsea: {
		name: "Primordial Sea",
		desc: "On switch-in, the weather becomes Primordial Sea, which includes all the effects of Rain Dance and prevents damaging Fire-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by the Delta Stream or Desolate Land Abilities.",
		shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle.",
	},
	prismarmor: {
		name: "Prism Armor",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	propellertail: {
		name: "Propeller Tail",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	protean: {
		name: "Protean",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pokemon is not Terastallized.",
		shortDesc: "This Pokemon's type changes to the type of the move it is using. Once per switch-in.",
		gen8: {
			desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
			shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
		},
	},
	protosynthesis: {
		name: "Protosynthesis",
		desc: "If Sunny Day is active or this Pokemon uses a held Booster Energy, this Pokemon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed. Stat stage changes are considered at the time this Ability activates. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order. If this effect was started by Sunny Day, a held Booster Energy will not activate and the effect ends when Sunny Day is no longer active. If this effect was started by a held Booster Energy, it ends when this Pokemon is no longer active.",
		shortDesc: "Sunny Day active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed.",

		activate: "  The harsh sunlight activated [POKEMON]'s Protosynthesis!",
		activateFromItem: "  [POKEMON] used its Booster Energy to activate Protosynthesis!",
		start: "  [POKEMON]'s [STAT] was heightened!",
		end: "  The effects of [POKEMON]'s Protosynthesis wore off!",
	},
	psychicsurge: {
		name: "Psychic Surge",
		shortDesc: "On switch-in, this Pokemon summons Psychic Terrain.",
	},
	punkrock: {
		name: "Punk Rock",
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
	},
	purepower: {
		name: "Pure Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	purifyingsalt: {
		name: "Purifying Salt",
		desc: "This Pokemon cannot become affected by a non-volatile status condition or Yawn. If a Pokemon uses a Ghost-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Ghost damage to this Pokemon dealt with a halved offensive stat; can't be statused.",
	},
	quarkdrive: {
		name: "Quark Drive",
		desc: "If Electric Terrain is active or this Pokemon uses a held Booster Energy, this Pokemon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed. Stat stage changes are considered at the time this Ability activates. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order. If this effect was started by Electric Terrain, a held Booster Energy will not activate and the effect ends when Electric Terrain is no longer active. If this effect was started by a held Booster Energy, it ends when this Pokemon is no longer active.",
		shortDesc: "Electric Terrain active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed.",

		activate: "  The Electric Terrain activated [POKEMON]'s Quark Drive!",
		activateFromItem: "  [POKEMON] used its Booster Energy to activate its Quark Drive!",
		start: "  [POKEMON]'s [STAT] was heightened!",
		end: "  The effects of [POKEMON]'s Quark Drive wore off!",
	},
	queenlymajesty: {
		name: "Queenly Majesty",
		desc: "Priority moves used by opposing Pokemon targeting this Pokemon or its allies are prevented from having an effect.",
		shortDesc: "This Pokemon and its allies are protected from opposing priority moves.",

		block: "#damp",
	},
	quickdraw: {
		name: "Quick Draw",
		shortDesc: "This Pokemon has a 30% chance to move first in its priority bracket with attacking moves.",

		activate: "  Quick Draw made [POKEMON] move faster!",
	},
	quickfeet: {
		name: "Quick Feet",
		desc: "If this Pokemon has a non-volatile status condition, its Speed is multiplied by 1.5. This Pokemon ignores the paralysis effect of halving Speed.",
		shortDesc: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.",
		gen6: {
			desc: "If this Pokemon has a non-volatile status condition, its Speed is multiplied by 1.5. This Pokemon ignores the paralysis effect of quartering Speed.",
		},
	},
	raindish: {
		name: "Rain Dish",
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
		gen7: {
			desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		},
	},
	rattled: {
		name: "Rattled",
		desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or if an opposing Pokemon affected this Pokemon with the Intimidate Ability.",
		shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.",
		gen7: {
			desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
			shortDesc: "This Pokemon's Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
		},
	},
	receiver: {
		name: "Receiver",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, and Zero to Hero.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		gen8: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},
		gen7: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},

		changeAbility: "  [SOURCE]'s [ABILITY] was taken over!",
	},
	reckless: {
		name: "Reckless",
		desc: "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
	},
	refrigerate: {
		name: "Refrigerate",
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.3x power.",
		},
	},
	regenerator: {
		name: "Regenerator",
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
	},
	ripen: {
		name: "Ripen",
		desc: "When this Pokemon eats certain Berries, the effects are doubled. Berries that restore HP or PP have the amount doubled, Berries that raise stat stages have the amount doubled, Berries that halve damage taken quarter it instead, and a Jaboca Berry or Rowap Berry has the attacker lose 1/4 of its maximum HP, rounded down.",
		shortDesc: "When this Pokemon eats certain Berries, the effects are doubled.",
	},
	rivalry: {
		name: "Rivalry",
		desc: "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
	},
	rkssystem: {
		name: "RKS System",
		shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",
	},
	rockhead: {
		name: "Rock Head",
		desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
		gen3: {
			desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect crash damage.",
			shortDesc: "This Pokemon does not take recoil damage besides Struggle and crash damage.",
		},
	},
	rockypayload: {
		name: "Rocky Payload",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Rock-type attack.",
	},
	roughskin: {
		name: "Rough Skin",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
		gen4: {
			desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "Pokemon making contact with this Pokemon lose 1/16 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "Pokemon making contact with this Pokemon lose 1/16 of their max HP.",
		},

		damage: "  [POKEMON] was hurt!",
	},
	runaway: {
		name: "Run Away",
		shortDesc: "No competitive use.",
	},
	sandforce: {
		name: "Sand Force",
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
	},
	sandrush: {
		name: "Sand Rush",
		desc: "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
	},
	sandspit: {
		name: "Sand Spit",
		shortDesc: "When this Pokemon is hit by an attack, the effect of Sandstorm begins.",
		gen8: {
			desc: "When this Pokemon is hit by an attack, the effect of Sandstorm begins. This effect comes after the effects of Max and G-Max Moves.",
		},
	},
	sandstream: {
		name: "Sand Stream",
		shortDesc: "On switch-in, this Pokemon summons Sandstorm.",
	},
	sandveil: {
		name: "Sand Veil",
		desc: "If Sandstorm is active, the accuracy of moves used against this Pokemon is multiplied by 0.8. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
	},
	sapsipper: {
		name: "Sap Sipper",
		desc: "This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.",
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
	},
	schooling: {
		name: "Schooling",
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.",

		transform: "[POKEMON] formed a school!",
		transformEnd: "[POKEMON] stopped schooling!",
	},
	scrappy: {
		name: "Scrappy",
		desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. This Pokemon is immune to the effect of the Intimidate Ability.",
		shortDesc: "Fighting, Normal moves hit Ghost. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
			shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
		},
	},
	screencleaner: {
		name: "Screen Cleaner",
		shortDesc: "On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides.",
	},
	seedsower: {
		name: "Seed Sower",
		shortDesc: "When this Pokemon is hit by an attack, the effect of Grassy Terrain begins.",
	},
	serenegrace: {
		name: "Serene Grace",
		desc: "This Pokemon's moves have their secondary effect chance doubled. This effect stacks with the Rainbow effect, except for secondary effects that cause the target to flinch.",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		gen4: {
			desc: "This Pokemon's moves have their secondary effect chance doubled.",
		},
	},
	shadowshield: {
		name: "Shadow Shield",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	shadowtag: {
		name: "Shadow Tag",
		desc: "Prevents opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.",
		shortDesc: "Prevents foes from choosing to switch unless they also have this Ability.",
		gen6: {
			desc: "Prevents adjacent opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.",
			shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",
		},
		gen5: {
			desc: "Prevents adjacent opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell or also have this Ability.",
		},
		gen4: {
			desc: "Prevents opposing Pokemon from choosing to switch out, unless they are holding a Shed Shell or also have this Ability.",
			shortDesc: "Prevents foes from choosing to switch unless they also have this Ability.",
		},
		gen3: {
			desc: "Prevents opposing Pokemon from choosing to switch out.",
			shortDesc: "Prevents opposing Pokemon from choosing to switch out.",
		},
	},
	sharpness: {
		name: "Sharpness",
		shortDesc: "This Pokemon's slicing moves have their power multiplied by 1.5.",
	},
	shedskin: {
		name: "Shed Skin",
		desc: "This Pokemon has a 33% chance to have its non-volatile status condition cured at the end of each turn.",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
	},
	sheerforce: {
		name: "Sheer Force",
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Anger Shell, Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
		gen8: {
			desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		},
		gen6: {
			desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Color Change, Pickpocket, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		},
		gen5: {
			desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Color Change, Pickpocket, Red Card, and Eject Button from activating.",
		},
	},
	shellarmor: {
		name: "Shell Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	shielddust: {
		name: "Shield Dust",
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
	},
	shieldsdown: {
		name: "Shields Down",
		desc: "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by a non-volatile status condition or Yawn.",
		shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.",

		transform: "Shields Down deactivated!\n([POKEMON] shielded itself.)",
		transformEnd: "Shields Down activated!\n([POKEMON] stopped shielding itself.)",
	},
	simple: {
		name: "Simple",
		shortDesc: "When one of this Pokemon's stat stages is raised or lowered, the amount is doubled.",
		gen7: {
			desc: "When one of this Pokemon's stat stages is raised or lowered, the amount is doubled. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Status Z-Move is used.",
		},
		gen6: {
			desc: "When one of this Pokemon's stat stages is raised or lowered, the amount is doubled.",
		},
		gen4: {
			desc: "This Pokemon's stat stages are considered doubled during stat calculations. A stat stage cannot be considered more than 6 or less than -6.",
			shortDesc: "This Pokemon's stat stages are considered doubled during stat calculations.",
		},
	},
	skilllink: {
		name: "Skill Link",
		desc: "This Pokemon's multi-hit attacks always hit the maximum number of times. Triple Kick and Triple Axel do not check accuracy for the second and third hits.",
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
		gen7: {
			desc: "This Pokemon's multi-hit attacks always hit the maximum number of times. Triple Kick does not check accuracy for the second and third hits.",
		},
		gen4: {
			desc: "This Pokemon's multi-hit attacks always hit the maximum number of times. Does not affect Triple Kick.",
		},
	},
	slowstart: {
		name: "Slow Start",
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
		gen7: {
			desc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns. During the effect, if this Pokemon uses a generic Z-Move based on a special move, its Special Attack is halved during damage calculation.",
		},
		gen6: {
			desc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
		},

		start: "  [POKEMON] can't get it going!",
		end: "  [POKEMON] finally got its act together!",
	},
	slushrush: {
		name: "Slush Rush",
		shortDesc: "If Snow is active, this Pokemon's Speed is doubled.",
		gen8: {
			shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
		},
	},
	sniper: {
		name: "Sniper",
		shortDesc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.",
	},
	snowcloak: {
		name: "Snow Cloak",
		desc: "If Snow is active, the accuracy of moves used against this Pokemon is multiplied by 0.8.",
		shortDesc: "If Snow is active, this Pokemon's evasiveness is 1.25x.",
		gen8: {
			desc: "If Hail is active, the accuracy of moves used against this Pokemon is multiplied by 0.8. This Pokemon takes no damage from Hail.",
			shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
		},
	},
	snowwarning: {
		name: "Snow Warning",
		shortDesc: "On switch-in, this Pokemon summons Snow.",
		gen8: {
			shortDesc: "On switch-in, this Pokemon summons Hail.",
		},
	},
	solarpower: {
		name: "Solar Power",
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
		},
	},
	solidrock: {
		name: "Solid Rock",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	soulheart: {
		name: "Soul-Heart",
		shortDesc: "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
	},
	soundproof: {
		name: "Soundproof",
		shortDesc: "This Pokemon is immune to sound-based moves, unless it used the move.",
		gen7: {
			shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		},
		gen5: {
			shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
		},
		gen4: {
			shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		},
	},
	speedboost: {
		name: "Speed Boost",
		desc: "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
		shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
	},
	stakeout: {
		name: "Stakeout",
		shortDesc: "This Pokemon's offensive stat is doubled against a target that switched in this turn.",
	},
	stall: {
		name: "Stall",
		shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
	},
	stalwart: {
		name: "Stalwart",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	stamina: {
		name: "Stamina",
		shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
	},
	stancechange: {
		name: "Stance Change",
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before using an attacking move, and changes to Shield Forme before using King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
		gen6: {
			desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		},

		transform: "Changed to Blade Forme!",
		transformEnd: "Changed to Shield Forme!",
	},
	static: {
		name: "Static",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed.",
		},
	},
	steadfast: {
		name: "Steadfast",
		shortDesc: "If this Pokemon flinches, its Speed is raised by 1 stage.",
	},
	steamengine: {
		name: "Steam Engine",
		desc: "This Pokemon's Speed is raised by 6 stages after it is damaged by a Fire- or Water-type move.",
		shortDesc: "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
	},
	steelworker: {
		name: "Steelworker",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Steel-type attack.",
	},
	steelyspirit: {
		name: "Steely Spirit",
		desc: "This Pokemon and its allies' Steel-type moves have their power multiplied by 1.5. This affects Doom Desire even if the user is not on the field.",
		shortDesc: "This Pokemon and its allies' Steel-type moves have their power multiplied by 1.5.",
	},
	stench: {
		name: "Stench",
		desc: "This Pokemon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
		shortDesc: "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch.",
		gen4: {
			desc: "No competitive use.",
			shortDesc: "No competitive use.",
		},
	},
	stickyhold: {
		name: "Sticky Hold",
		desc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack, unless the attack knocks out this Pokemon. A Sticky Barb will be transferred to other Pokemon regardless of this Ability.",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack.",
		gen4: {
			desc: "This Pokemon cannot lose its held item due to another Pokemon's attack, even if the attack knocks out this Pokemon. A Sticky Barb will be transferred to other Pokemon regardless of this Ability.",
		},

		block: "  [POKEMON]'s item cannot be removed!",
	},
	stormdrain: {
		name: "Storm Drain",
		desc: "This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move. If multiple Pokemon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
		shortDesc: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",
		gen4: {
			desc: "If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself.",
			shortDesc: "This Pokemon draws single-target Water moves to itself.",
		},

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Strong Jaw",
		desc: "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
	},
	sturdy: {
		name: "Sturdy",
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		gen4: {
			desc: "OHKO moves fail when used against this Pokemon.",
			shortDesc: "OHKO moves fail when used against this Pokemon.",
		},

		activate: "  [POKEMON] endured the hit!",
	},
	suctioncups: {
		name: "Suction Cups",
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",

		block: "  [POKEMON] is anchored in place with its suction cups!",
	},
	superluck: {
		name: "Super Luck",
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
	},
	supersweetsyrup: {
		name: "Supersweet Syrup",
		shortDesc: "On switch-in, this Pokemon lowers the evasiveness of opponents 1 stage. Once per battle.",

		start: "  A supersweet aroma is wafting from the syrup covering [POKEMON]!",
	},
	supremeoverlord: {
		name: "Supreme Overlord",
		desc: "This Pokemon's moves have their power multiplied by 1+(X*0.1), where X is the total number of times any Pokemon has fainted on the user's side when this Ability became active, and X cannot be greater than 5.",
		shortDesc: "This Pokemon's moves have 10% more power for each fainted ally, up to 5 allies.",

		activate: "  [POKEMON] gained strength from the fallen!",
	},
	surgesurfer: {
		name: "Surge Surfer",
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
	},
	swarm: {
		name: "Swarm",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Bug attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Bug-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Bug-type attacks have 1.5x power.",
		},
	},
	sweetveil: {
		name: "Sweet Veil",
		desc: "This Pokemon and its allies cannot fall asleep, but those already asleep do not wake up immediately. This Pokemon and its allies cannot use Rest successfully or become affected by Yawn, and those previously affected will not fall asleep.",
		shortDesc: "This Pokemon and its allies cannot fall asleep; those already asleep do not wake up.",

		block: "  [POKEMON] can't fall asleep due to a veil of sweetness!",
	},
	swiftswim: {
		name: "Swift Swim",
		desc: "If Rain Dance is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		gen7: {
			desc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		},
	},
	swordofruin: {
		name: "Sword of Ruin",
		shortDesc: "Active Pokemon without this Ability have their Defense multiplied by 0.75.",

		start: "  [POKEMON]'s Sword of Ruin weakened the Defense of all surrounding Pokémon!",
	},
	symbiosis: {
		name: "Symbiosis",
		desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off, or if the ally used an Eject Button or Eject Pack.",
		shortDesc: "If an ally uses its item, this Pokemon gives its item to that ally immediately.",
		gen7: {
			desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off, or if the ally used an Eject Button.",
		},
		gen6: {
			desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
		},

		activate: "  [POKEMON] shared its [ITEM] with [TARGET]!",
	},
	synchronize: {
		name: "Synchronize",
		desc: "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same non-volatile status condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
		gen4: {
			desc: "If another Pokemon burns, paralyzes, or poisons this Pokemon, that Pokemon receives the same non-volatile status condition. If another Pokemon badly poisons this Pokemon, that Pokemon becomes poisoned.",
		},
	},
	tabletsofruin: {
		name: "Tablets of Ruin",
		shortDesc: "Active Pokemon without this Ability have their Attack multiplied by 0.75.",

		start: "  [POKEMON]'s Tablets of Ruin weakened the Attack of all surrounding Pokémon!",
	},
	tangledfeet: {
		name: "Tangled Feet",
		shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",
	},
	tanglinghair: {
		name: "Tangling Hair",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	technician: {
		name: "Technician",
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5, including Struggle. This effect comes after a move's effect changes its own power.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power, including Struggle.",
		gen4: {
			desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5, except Struggle. This effect comes after a move's effect changes its own power, as well as the effects of Charge and Helping Hand.",
			shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power, except Struggle.",
		},
	},
	telepathy: {
		name: "Telepathy",
		shortDesc: "This Pokemon does not take damage from attacks made by its allies.",

		block: "  [POKEMON] can't be hit by attacks from its ally Pok\u00E9mon!",
	},
	teravolt: {
		name: "Teravolt",
		desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		gen7: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen6: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen5: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Battle Armor, Big Pecks, Clear Body, Contrary, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Friend Guard, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},

		start: "  [POKEMON] is radiating a bursting aura!",
	},
	thermalexchange: {
		name: "Thermal Exchange",
		desc: "This Pokemon's Attack is raised 1 stage after it is damaged by a Fire-type move. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Attack is raised by 1 when damaged by Fire moves; can't be burned.",
	},
	thickfat: {
		name: "Thick Fat",
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire-/Ice-type moves against this Pokemon deal damage with a halved offensive stat.",
		gen4: {
			desc: "The power of Fire- and Ice-type attacks against this Pokemon is halved.",
			shortDesc: "The power of Fire- and Ice-type attacks against this Pokemon is halved.",
		},
		gen3: {
			desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's Special Attack is halved when calculating the damage to this Pokemon.",
			shortDesc: "Fire-/Ice-type moves against this Pokemon deal damage with a halved Sp. Atk stat.",
		},
	},
	tintedlens: {
		name: "Tinted Lens",
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
	},
	torrent: {
		name: "Torrent",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Water attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Water-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Water-type attacks have 1.5x power.",
		},
	},
	toughclaws: {
		name: "Tough Claws",
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",
	},
	toxicboost: {
		name: "Toxic Boost",
		desc: "While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is poisoned, its physical attacks have 1.5x power.",
	},
	toxicchain: {
		name: "Toxic Chain",
		desc: "This Pokemon's moves have a 30% chance of badly poisoning. This effect comes after a move's inherent secondary effect chance.",
		shortDesc: "This Pokemon's moves have a 30% chance of badly poisoning.",
	},
	toxicdebris: {
		name: "Toxic Debris",
		shortDesc: "If this Pokemon is hit by a physical attack, Toxic Spikes are set on the opposing side.",
	},
	trace: {
		name: "Trace",
		desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Zen Mode, and Zero to Hero. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		gen8: {
			desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		},
		gen7: {
			desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		},
		gen6: {
			desc: "On switch-in, this Pokemon copies a random adjacent opposing Pokemon's Ability. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		},
		gen5: {
			desc: "On switch-in, this Pokemon copies a random adjacent opposing Pokemon's Ability. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Trace, and Zen Mode. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		},
		gen4: {
			desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability. Abilities that cannot be copied are Forecast, Multitype, and Trace. If no opposing Pokemon has an Ability that can be copied, this Ability will activate as soon as one does.",
		},
		gen3: {
			desc: "On switch-in, this Pokemon copies a random opposing Pokemon's Ability.",
		},

		changeAbility: "  [POKEMON] traced [SOURCE]'s [ABILITY]!",
	},
	transistor: {
		name: "Transistor",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.3 while using an Electric-type attack.",
		gen8: {
			shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using an Electric-type attack.",
		},
	},
	triage: {
		name: "Triage",
		shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
	},
	truant: {
		name: "Truant",
		shortDesc: "This Pokemon skips every other turn instead of using a move.",
		gen3: {
			desc: "This Pokemon skips every other turn instead of using a move. If this Pokemon replaces a Pokemon that fainted during end-of-turn effects, its first turn will be skipped.",
		},

		cant: "[POKEMON] is loafing around!",
	},
	turboblaze: {
		name: "Turboblaze",
		desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		gen7: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen6: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},
		gen5: {
			desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Battle Armor, Big Pecks, Clear Body, Contrary, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Friend Guard, Heatproof, Heavy Metal, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Motor Drive, Multiscale, Oblivious, Own Tempo, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
		},

		start: "  [POKEMON] is radiating a blazing aura!",
	},
	unaware: {
		name: "Unaware",
		desc: "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
	},
	unburden: {
		name: "Unburden",
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled as long as it remains active, has this Ability, and is not holding an item.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
	},
	unnerve: {
		name: "Unnerve",
		desc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. This Ability activates before hazards and other Abilities take effect.",
		shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries.",

		start: "  [TEAM] is too nervous to eat Berries!",
	},
	unseenfist: {
		name: "Unseen Fist",
		shortDesc: "This Pokemon's contact moves ignore the target's protection, except Max Guard.",
	},
	vesselofruin: {
		name: "Vessel of Ruin",
		shortDesc: "Active Pokemon without this Ability have their Special Attack multiplied by 0.75.",

		start: "  [POKEMON]'s Vessel of Ruin weakened the Sp. Atk of all surrounding Pokémon!",
	},
	victorystar: {
		name: "Victory Star",
		shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
	},
	vitalspirit: {
		name: "Vital Spirit",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	voltabsorb: {
		name: "Volt Absorb",
		desc: "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		gen3: {
			desc: "This Pokemon is immune to damaging Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by one.",
			shortDesc: "This Pokemon heals 1/4 its max HP when hit by a damaging Electric move; immunity.",
		},
	},
	wanderingspirit: {
		name: "Wandering Spirit",
		desc: "Pokemon making contact with this Pokemon have their Ability swapped with this one. Does not affect Pokemon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, Zen Mode, or Zero to Hero Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability swapped with this one.",
		gen8: {
			desc: "Pokemon making contact with this Pokemon have their Ability swapped with this one. Does not affect Pokemon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode Abilities.",
		},

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Water Absorb",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
	},
	waterbubble: {
		name: "Water Bubble",
		desc: "This Pokemon's offensive stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
	},
	watercompaction: {
		name: "Water Compaction",
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
	},
	waterveil: {
		name: "Water Veil",
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
	},
	weakarmor: {
		name: "Weak Armor",
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.",
		gen6: {
			desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 1 stage.",
			shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 1.",
		},
	},
	wellbakedbody: {
		name: "Well-Baked Body",
		desc: "This Pokemon is immune to Fire-type moves and raises its Defense by 2 stages when hit by a Fire-type move.",
		shortDesc: "This Pokemon's Defense is raised 2 stages if hit by a Fire move; Fire immunity.",
	},
	whitesmoke: {
		name: "White Smoke",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	wimpout: {
		name: "Wimp Out",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	windpower: {
		name: "Wind Power",
		desc: "This Pokemon gains the Charge effect when it takes a hit from a wind move or when Tailwind begins on this Pokemon's side.",
		shortDesc: "This Pokemon gains the Charge effect when hit by a wind move or Tailwind begins.",

		start: "#electromorphosis",
	},
	windrider: {
		name: "Wind Rider",
		desc: "This Pokemon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move or when Tailwind begins on this Pokemon's side.",
		shortDesc: "Attack raised by 1 if hit by a wind move or Tailwind begins. Wind move immunity.",
	},
	wonderguard: {
		name: "Wonder Guard",
		shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",
		gen4: {
			shortDesc: "This Pokemon is only damaged by Fire Fang, supereffective moves, indirect damage.",
		},
		gen3: {
			shortDesc: "This Pokemon is only damaged by supereffective moves and indirect damage.",
		},
	},
	wonderskin: {
		name: "Wonder Skin",
		desc: "Non-damaging moves that check accuracy have their accuracy changed to 50% when used against this Pokemon. This effect comes before other effects that modify accuracy.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
	},
	zenmode: {
		name: "Zen Mode",
		desc: "If this Pokemon is a Darmanitan or Galarian Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode.",
		shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",
		gen7: {
			desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode.",
		},
		gen6: {
			desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. If Darmanitan loses this Ability while in Zen Mode, it reverts to Standard Mode immediately.",
		},

		transform: "Zen Mode triggered!",
		transformEnd: "Zen Mode ended!",
	},
	zerotohero: {
		name: "Zero to Hero",
		shortDesc: "If this Pokemon is a Palafin in Zero Form, switching out has it change to Hero Form.",

		activate: "  [POKEMON] underwent a heroic transformation!",
	},

	// CAP
	mountaineer: {
		name: "Mountaineer",
		shortDesc: "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",
	},
	rebound: {
		name: "Rebound",
		desc: "On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "On switch-in, blocks certain status moves and bounces them back to the user.",

		move: "#magiccoat",
	},
	persistent: {
		name: "Persistent",
		desc: "The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.",
		shortDesc: "When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.",

		activate: "  [POKEMON] extends [MOVE] by 2 turns!",
	},

	/* Clovermons */
	showerpower: {
		name: "Shower Power",
		desc: "If Rain Dance is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
		shortDesc: "If Rain Dance is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
	},
	concert: {
		name: "Concert",
		shortDesc: "All Pokemon on the field lose 1/16 HP per turn if they're not immune to sound effects.",
		start: "  [POKEMON] is getting ready to throw a concert!",
	},
	waitforit: {
		name: "Wait For It",
		shortDesc: "Boosts all stats after 5 turns.",
		start: "  [POKEMON] is asking you kindly to wait!",
		end: "  [POKEMON]'s announcement came true!",
	},
	gradient: {
		name: "Gradient",
		shortDesc: "Changes type in battle based on the foe's color. Biteki always has STAB with Ice and Psychic moves, Blobbos-Fool's always has STAB with Dark and ??? moves and Blobbos-Artist always has STAB with Normal and ??? moves.",
		desc: "Changes type in battle based on the foe's color. Biteki always has STAB with Ice and Psychic moves. Red = Fire, Blue = Water, Yellow = Electric, Green = Grass, Black = Dark, Brown = Ground, Purple = Poison, Gray = Steel, White = Flying, Pink = Fairy.",
	},
	anyability: {
		name: "Any Ability",
		shortDesc: "It's any ability. Becomes a random ability available in Clover on switch-in.",
		changeAbility: "  [POKEMON] acquired [ABILITY] :^)",
	},
	adminabuse: {
		name: "Admin Abuse",
		shortDesc: "This Pokemon's hammer-based attacks have 1.2x power and have their negative effects removed.",
	},
	anability: {
		name: "An Ability",
		shortDesc: "No competitive use :^)",
	},
	bigguy: {
		name: "Big Guy",
		shortDesc: "Summons Gravity upon switch-in.",
	},
	blademaster: {
		name: "Blademaster",
		shortDesc: "This Pokemon's sword- or cutting-based attacks have 1.2x power and have +1 crit ratio.",
	},
	boombox: {
		name: "Boombox",
		shortDesc: "This Pokemon's sound-based attacks have their power multiplied by 1.2 and takes 1/2 damage from sound attacks.",
	},
	bonezone: {
		name: "Bone Zone",
		shortDesc: "This Pokemon's Bone-based moves ignore immunities and abilities.",
		start: "  [POKEMON] has entered the Bone Zone!",
	},
	degenerate: {
		name: "Degenerate",
		shortDesc: "This Pokemon's Normal-type moves become Dark type and have 1.2x power.",
		desc: "This Pokemon's Normal-type moves become Dark-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
	},
	degradation: {
		name: "Degradation",
		shortDesc: "This Pokemon's Dark-type attacks are super-effective against Normal- and Fairy-types.",
	},
	flareheal: {
		name: "Flare Heal",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when burned; no HP loss or reduction to the power of its physical moves.",
		desc: "If this Pokemon is burned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP; burn's physical damage halving is ignored.",
	},
	ghostnote: {
		name: "Ghost Note",
		shortDesc: "This Pokemon's sound-based moves become Ghost type.",
		desc: "This Pokemon's sound-based moves become Ghost-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
	},
	hydrophile: {
		name: "Hydrophile",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Water-type attack. This Pokemon is healed 1/4 by Water, 1/8 by Rain.",
	},
	inversion: {
		name: "Inverse Room",
		shortDesc: "Summons Inverse Room upon switch-in.",
	},
	jewelry: {
		name: "Jewelry",
		shortDesc: "If this Pokemon has no item, it finds a gem matching the type of one of its moves at the end of this turn.",
		desc: "If this Pokemon has no item, it finds a gem matching the type of one of its moves, prioritizing attacking moves, at the end of this turn.",
	},
	madman: {
		name: "Madman",
		desc: "This Pokemon's contact moves have a 100% chance of confusing.",
	},
	moreroom: {
		name: "More Room",
		shortDesc: "When used, Room effects last 2 more turns.",
		desc: "The duration of Inverse Room, Magic Room, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.",
	},
	pollution: {
		name: "Pollution",
		shortDesc: "This Pokemon's Poison-type attacks are super-effective against Water-, Flying- and Ground-types.",
	},
	pozzed: {
		name: "Pozzed",
		shortDesc: "This Pokemon is immune to Poison-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Poison-type move. No HP loss from Poison. This Pokemon's attacking stat is multiplied by 1.5 while using a Poison-type attack. Absorbs Toxic Spikes.",
		desc: "This Pokemon heals 1/4 of its max HP when hit by Poison moves; Poison immunity. Toxic Orb, Toxic Spikes, etc. and non-Poison-type moves can still Poison this Pokemon. No HP loss from Poison. This Pokemon's attacking stat is multiplied by 1.5 while using a Poison-type attack. Absorbs Toxic Spikes.",
	},
	puppeteer: {
		name: "Puppeteer",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Bug-type attack.",
	},
	striker: {
		name: "Striker",
		shortDesc: "This Pokemon's kick-based attacks have 1.2x power and always hit.",
	},
	suddenly: {
		name: "Suddenly",
		shortDesc: "This Pokemon's two-turn moves complete in one turn (except Sky Drop).",
	},
	woke: {
		name: "Woke",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Woke.",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Woke. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.",
	},
	woodenguard: {
		name: "Wooden Guard",
		shortDesc: "This Pokemon recieves 1.5x damage from Fire moves, 0.75x from other moves.",
	},
	jihad: {
		name: "Jihad",
		shortDesc: "+1 priority to suicide moves. Immune to sandstorm.",
	},
	phantasma: {
		name: "Phantasma",
		shortDesc: "1.5x boost to Ghost-type moves. Immune to trapping. Curse is Ghost-type.",
	},
	shitstorm: {
		name: "Shitstorm",
		shortDesc: "Starts Mud Sport and Water Sport on switch-in.",
	},
	fuku: {
		name: "Fuk U",
		shortDesc: "Sets all other mons to Normal-type on switch-in.",
	},
	stinkbomb: {
		name: "Stink Bomb",
		shortDesc: "Sets all mons abilities to Stench. Makes all attacks Poison-type for 1 turn.",
	},
	whiteflames: {
		name: "White Flames",
		shortDesc: "1.2x damage against inferior mons. Takes 0.5x damage from inferior mons.",
	},
	boardpowera: {
		name: "Board Power (/a/)",
		shortDesc: "Sturdy. Omniboost + Clear Body on switch-in if the last unfainted Pokemon.",
	},
	boardpowerb: {
		name: "Board Power (/b/)",
		shortDesc: "Gets a random different Board Power.",
	},
	boardpowerc: {
		name: "Board Power (/c/)",
		shortDesc: "Adds Fairy-type. Fairy Aura. Gender-neutral Cute Charm. Attract works on any gender.",
	},
	boardpowerco: {
		name: "Board Power (/co/)",
		shortDesc: "Magic Guard + Marvel Scale + Justified + Resists Dark.",
	},
	boardpowerd: {
		name: "Board Power (/d/)",
		shortDesc: "Adds Dark-type. Degenerates. Uses Stockpile on switch-in.",
	},
	boardpowerf: {
		name: "Board Power (/f/)",
		shortDesc: "Sets Inverse Room. Flash BP = 90.",
	},
	boardpowerfa: {
		name: "Board Power (/fa/)",
		shortDesc: "Copies opponent's typing, ability, and boosts.",
	},
	boardpowerfit: {
		name: "Board Power (/fit/)",
		shortDesc: "Adds Fighting-type. Uses Hulk Up on switch-in.",
	},
	boardpowerg: {
		name: "Board Power (/g/)",
		shortDesc: "Adds Electric-type. Sets Electric Terrain and uses Charge on switch-in.",
	},
	boardpowerh: {
		name: "Board Power (/h/)",
		shortDesc: "Adds Fire-type. Gender-neutral Cute Charm. Attract works on any gender. 1/3 chance to attract on hit.",
	},
	boardpowerint: {
		name: "Board Power (/int/)",
		shortDesc: "Adaptability. Sets Psychic Terrain on switch-in.",
	},
	boardpowerjp: {
		name: "Board Power (/jp/)",
		shortDesc: "Adds Fairy-type. Serene Grace. Treated as female.",
	},
	boardpowerk: {
		name: "Board Power (/k/)",
		shortDesc: "Adds Steel-type. Bulletproof. +1 Def and +SpD on switch-in.",
	},
	boardpowerout: {
		name: "Board Power (/out/)",
		shortDesc: "Sets Grassy Terrain on switch-in. 2x boost to Nature Power moves.",
	},
	boardpowerpol: {
		name: "Board Power (/pol/)",
		shortDesc: "Stakeout. Analytic. Psychic-type moves hit Dark-types.",
	},
	boardpowerr9k: {
		name: "Board Power (/r9k/)",
		shortDesc: "Torments all mons.",
	},
	boardpower5: {
		name: "Board Power (/5/)",
		shortDesc: "Wait For It. Skill Link.",
	},
	boardpowers4s: {
		name: "Board Power (/s4s/)",
		shortDesc: "+1 priority to status moves. Immune to Prankster.",
	},
	boardpowersoc: {
		name: "Board Power (/soc/)",
		shortDesc: "Frisk. Friend Guard. Poison Absorb (like Water Absorb). Poison-type moves have 1.5x power.",
	},
	boardpowersp: {
		name: "Board Power (/sp/)",
		shortDesc: "Magic Bounce. +1 Spe on switch-in.",
	},
	boardpowertrv: {
		name: "Board Power (/trv/)",
		shortDesc: "2x Spe in weather. 150 BP Weather Ball in weather.",
	},
	boardpowertv: {
		name: "Board Power (/tv/)",
		shortDesc: "Adds Ground-type. Sets Gravity on switch-in.",
	},
	boardpowerv: {
		name: "Board Power (/v/)",
		shortDesc: "Gorilla Tactics. Anger Point. +1 Atk when hit.",
	},
	boardpowervg: {
		name: "Board Power (/vg/)",
		shortDesc: "Adds Dragon-type. Repeated attacks get 20% BP boosted up to 160 BP.",
	},
	boardpowervp: {
		name: "Board Power (/vp/)",
		shortDesc: "Poison Heal. Puppeteer. Bug Absorb (like Water Absorb).",
	},
	boardpowervr: {
		name: "Board Power (/vr/)",
		shortDesc: "Sets Magic Room and suppresses all other abilities other than Comatose and Board Power on switch-in.",
	},
	boardpowerx: {
		name: "Board Power (/x/)",
		shortDesc: "Adds Ghost-type. Turns all other mons into pure Ghost-types.",
	},
	boardpowerz: {
		name: "Board Power (/z/)",
		shortDesc: "Becomes pure ???-type. Shield Dust. Keen Eye. Comatose. Shell Armor.",
	},
	presage: {
		name: "Presage",
		desc: "Changes weather when using certain moves relating to weather.",
		shortDesc: "Changes weather to benefit certain moves.",
	},
	cacophony: {
		name: "Cacophony",
		shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		gen5: {
			shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
		},
		gen4: {
			shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		},
	},
	artificial: {
		name: "Artificial",
		shortDesc: "Long Reach + Shield Dust + Filter + Keen Eye. Immune to status. Can't be crit or flinched. Infinite PP. Ability cannot be altered or suppressed. Immune to Disable, Encore, Taunt, Torment, OHKO moves, Leech Seed, Pain Split, Psycho Shift, Spite, Perish Song, Endeavor, Destiny Bond, Grudge, Trick, Heart Swap, Guard Split, Power Swap, Speed Swap, Power Split, Super Fang, and damage from trapping moves. Cannot be transformed into. +3 Spe when under 1/3 HP.",
	},
	/* Clover CAP Abilities */
	amplify: {
		name: "Amplify",
		desc: "This Pokemon's attacking stat is doubled while using a Electric-type attack. If a Pokemon uses a Flying-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be put to sleep. Gaining this Ability while asleep cures it.",
		shortDesc: "This Pokemon's Electric power is 2x; can't sleep; Flying power against it is halved.",
	},
	bathtime: {
		name: "Bath Time",
		shortDesc: "Product Label: KEEP AWAY FROM WATER.",

		damage: "  Uh oh!",
	},
	beamboost: {
		name: "Beam Boost",
		desc: "This Pokemon's Beam-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's beam attacks have 1.5x power.",
	},
	brainpower: {
		name: "Brain Power",
		shortDesc: "This Pokemon's Special Attack is doubled.",
	},
	blueblood: {
		name: "Blue Blood",
		shortDesc: "This Pokemon's Attack is raised by 12 stages after it is damaged by a Dark-type move.",
	},
	bonerzoner: {
		name: "Boner Zoner",
		shortDesc: "This Pokemon's Bone-based and Dragon moves ignore immunities and abilities.",
		start: "  [POKEMON] has descended into the Boner Zoner!",
	},
	cakeveil: {
		name: "Cake Veil",
		desc: "At the end of every turn, this Pokemon restores 1/10 of its max HP.",
	},
	colonoscopy: {
		name: "Colonoscopy",
		shortDesc: "This Pokemon's draining moves have 1.5x power.",
	},
	vampiric: {
		name: "Vampiric",
		shortDesc: "This Pokemon's draining moves have 1.5x power.",
	},
	detonator: {
		name: "Detonator",
		shortDesc: "Bomb attacks have 1.2x power and doubled secondary effect chances.",
	},
	dispenser: {
		name: "Dispenser",
		
		shortDesc: "At the end of every turn, heals user and allies for 1/16 of their max HP and recycles the user's item, unless it's a berry.",
		addItem: "  [POKEMON] dispensed one [ITEM]!",
	},
	eclipse: {
		name: "Eclipse",
		desc: "On switch-in, removes Sunny Day for a boost in Attack and Special Attack by 2 stages and in Desolate Land for a boost in all stats (excluding acc/eva).",
	},
	fogofwar: {
		name: "Fog Of War",
		shortDesc: "On switch-in, this Pokemon summons Dense Fog which disables all status moves on both sides for 5 Turns.",
	},
	hewillbedragon: {
		name: "He Will Be Dragon",
		desc: "This Pokemon's Normal-type moves become Dragon-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Dragon type and have 1.2x power.",
	},
	hydrothermal: {
		name: "Hydrothermal",
		desc: "Fire- and Water-type moves have a 10% higher chance to burn.",
	},
	leech: {
		name: "Leech",
		shortDesc: "User recovers 50% of damage dealt.",
	},
	oldschool: {
		name: "Old School",
		desc: "The user's high crit ratio moves always crit.",
	},
	omniscience: {
		name: "Omniscience",
		desc: "This Pokemon can hit Dark types with Psychic-type moves. Psychic-type attacks don't miss.",
	},
	horror: {
		name: "Horror",
		desc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field. On switch-in, adds Grass to the all foe's type(s).",
	},
	overeager: {
		name: "Overeager",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit thrice. Subsequent hits has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's moves hit thrice. Hits after the first have their damage quartered.",
	},
	pairoswrath: {
		name: "Pairo's Wrath",
		desc: "This Pokemon is immune to Fire-type moves and raises its Special Attack by 1 stage when hit by a Fire-type move.",

		activate: "#lightningrod",
	},
	frozenbunker: {
		name: "Frozen Bunker",
		desc: "This Pokémon permanently changes into Freed forme upon taking supereffective damage. Takes half damage from neutral hits in base forme.",
	},
	boundary: {
		name: "Boundary",
		desc: "This Pokemon's attacks that are super effective against the target have their damage multiplied by 1.5.",
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.5x damage.",
	},
	transfusion: {
		name: "Transfusion",
		shortDesc: "Upon being hit, changes the opponent's type to the primary type of the ability-holder. When the ability-holder switches out, change their types back.",
	},
	catalyst: {
		name: "Catalyst",
		desc: "Upon switching in, adds an opposing Pokemon's types to this Pokemon's types.",
		shortDesc: "Upon switching in, adds the opponent's types to this Pokemon's types",
	},
	delusion: {
		name: "Delusion",
		shortDesc: "End of every turn -2 stat +1 stat, Ability spreads when the holder is hit.",
	},
	rusepower: {
		name: "Ruse Power",
		desc: "This Pokemon's attacking stat is multiplied by 1.2 while using Poison- or Dark-type attacks.",
	},
	shavedice: {
		name: "Shaved Ice",
		desc: "The power of Fire, Steel, Rock and Fighting-type attacks against this Pokemon is halved.",
		shortDesc: "Halves the damage from Ice-type's weaknesses.",
	},
	slavemaster: {
		name: "Slavemaster",
		desc: "The power of Cut, Fly, Surf, Strength, Whirlpool, Rock Smash, Waterfall, Rock Climb and Dive when used by this Pokemon doubled.",
		shortDesc: "Doubles the power of HM moves.",
	},
	sousaphone: {
		name: "Sousaphone",
		desc: "This Pokemon's sound-based moves become Steel-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Steel type.",
	},
	spincleaner: {
		name: "Spin Cleaner",
		shortDesc: "When this Pokemon switches in, entry hazards on this side are removed.",
	},
	spookyaura: {
		name: "Spooky Aura",
		desc: "While this Pokemon is active, the power of Ghost-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Ghost move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a spooky aura!",
	},
	stoneflesh: {
		name: "Stoneflesh",
		desc: "If this Pokemon is an Gargarramer, it changes to Awoken Forme before attempting to use an attacking move, and changes to Statue Forme before attempting to use Petrify.",
		shortDesc: "If Gargarramer, changes Forme to Awoken before attacks and Statue before Petrify.",

		transform: "Changed to Awoken Forme!",
		transformEnd: "Changed to Statue Forme!",
	},
	stopsign: {
		name: "Stop Sign",
		desc: "While this Pokemon is active, moves that switch the user out are prevented from having an effect.",
		shortDesc: "Prevents pivoting moves while active.",

		block: "  [SOURCE] was stopped from using [MOVE]!",

		start: "  [POKEMON] has eight fantastic sides, and eight awesome angles!",
	},
	stormshelter: {
		name: "Storm Shelter",
		shortDesc: "Grants immunity to the type of each weather in that weather.",
	},
	supportive: {
		name: "Supportive",
		desc: "While this Pokemon is active, moves with recoil and faint the user are prevented from having an effect.",
		shortDesc: "Prevents self harming moves while active.",

		block: "  [SOURCE] was stopped from using [MOVE]!",

		start: "  [POKEMON] is being supportive!",
	},
	swarming: {
		name: "Swarming",
		desc: "On switch-in, if this Pokemon is a Jermin that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to Swarm Form. If it is in Swarm Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to Swarm Form.",
		shortDesc: "If user is Jermin, changes to Swarm Form if it has > 1/4 max HP, else Solo Form.",

		transform: "[POKEMON] formed a swarm!",
		transformEnd: "[POKEMON] stopped swarming!",
	},
	temperamental: {
		name: "Temperamental",
		shortDesc: "If Disbeary, it changes between Nice and Ebil Mode at the end of each turn.",
	},
	tetanus: {
		name: "Tetanus",
		shortDesc: "A Pokemon making contact with this Pokemon will be Toxic poisoned.",
	},
	wholesome100: {
		name: "Wholesome 100",
		desc: "This Pokemon is immune to Dark-type moves.",
	},
	zenmonke: {
		name: "Zen Monke",
		shortDesc: "If Simionach, goes into Zen Mode while under full HP.",

		transform: "  [SOURCE] enters a state of pure zen!",
		transformEnd: "  [SOURCE] snaps out of its zen state!",
	},
	/* Blobbos CAP Abilities */
	lootable: {
		name: "Lootable",
		desc: "If this Pokemon is knocked out, it gives +2 crit ratio and Serene Grace to the next Pokemon.",
		shortDesc: "After fainting, gives +2 crit ratio and Serene Grace to next Pokemon.",
	},
	asoneblobbos: {
		name: "As One (Blobbos)",
		shortDesc: "The combination of Pure Power and Huge Power.",

		start: "  [POKEMON] is ready to kick your ass!",
	},
	metagaming: {
		name: "Metagaming",
		shortDesc: "The combination of Intimidate and Levitate.",

		start: "  [POKEMON] is ready to kick your ass in OU!",
	},
	powerofyeehaw: {
		name: "Power of YEEHAW!",
		shortDesc: "Kick moves deal 1.2x damage and always hit. Attack and Sp. Attack are boosted by 1 upon KO-ing an opponent.",

		start: "  [POKEMON] lets out a loud YEEHAW!",
	},
	sharpshooter: {
		name: "Sharpshooter",
		shortDesc: "This Pokemon's critical hits deal 1.5x damage; +1 Crit ratio.",
	},
	flipflops: {
		name: "Flip Flops",
		shortDesc: "Doubles Attack and Speed under Inverse Room.",
	},
	memepower: {
		name: "Meme Power",
		shortDesc: "Adds a Meme to every attack.",
	},
	godrejection: {
		name: "God Rejection",
		shortDesc: "Lowers damage from Fairy and Dragon moves, Dark + Fighting deal more damage to Fairy and Dragon foes.",
	},
	allskill: {
		name: "All Skill",
		shortDesc: "Shield Dust + Shell Armor + No Guard.",
	},
	artillery: {
		name: "Artillery",
		shortDesc: "Boosts bomb and bullet moves by 1.5x.",
	},
	colonization: {
		name: "Colonization",
		shortDesc: "If user is Blobbos-Colony (Level 20 or Above), changes to Colonized form if it has > 1/4 max HP, else Solo Form.",
	},
	genwunning: {
		name: "Genwunning",
		shortDesc: "Summons Genwun Room upon switch-in, how nostalgic!",
	},
	blobbotype: {
		name: "Blobbotype",
		shortDesc: "If this Pokemon is a Blobbos-Arceus, its secondary type changes to match its held Plate or Z-Crystal.",
		gen6: {
			shortDesc: "If this Pokemon is a Blobbos-Arceus, its secondary type changes to match its held Plate.",
		},
	},
	uncompetitive: {
		name: "Uncompetitive",
		shortDesc: "Snow Cloak + Sand Veil + Bright Powder + Lax Incense + Razor Fang + King's Rock + Moody + Arena Trap + Shadow Tag + Focus Band.",
	},
	niceface: {
		name: "Nice Face",
		desc: "If this Pokemon is an Blobbos-Nice, the first physical hit it takes in battle deals 0 neutral damage. Its leaf shield is then broken and it changes forme to Noice Face. Blobbos-Nice regains its Leaf Shield forme when Grassy Terrain begins or when Eiscue switches in while Grassy Terrain is active. Confusion damage also breaks the leaf shield.",
		shortDesc: "If Blobbos-Nice, the first physical hit it takes deals 0 damage. This effect is restored in Grassy Terrain.",
	},
	evasionhax: {
		name: "Evasion Hax",
		shortDesc: "Moves used against this Pokemon have their accuracy halved.",
	},
	nimblemetalbody: {
		name: "Nimble Metal Body",
		shortDesc: "This Pokemon's pivot moves have their priority increased by 1.",
	},
	magicalrealm: {
		name: "Magical Realm",
		shortDesc: "Summons Magic Room upon switch-in.",
	},
	peaceandtranquility: {
		name: "Peace and Tranquility",
		shortDesc: "This Pokemon's attacks will always land a critical hit if this Pokemon is under 1/2 max HP.",
	},
	darkthoughts: {
		name: "Dark Thoughts",
		shortDesc: "30% to Torment the opponent when you make contact with them.",
	},
	gmaxcomatose: {
		name: "GMax Comatose",
		shortDesc: "Protection from status, moves that restrict choices, and switching. Max and G-Max moves have 25x power.",
	},
	bloodthirsty: {
		name: "Bloodthirsty",
		shortDesc: "This Pokemon's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
	},
	intangible: {
		name: "Intangible",
		shortDesc: "This Pokemon is immune to Normal and Fighting moves.",
	},
	hyperboreanarctic: {
		name: "Hyperborean Arctic",
		shortDesc: "While this Pokemon is active, an extremely harsh blizzard occurs, preventing Fighting-type moves from doing anything.",
	},
	sneedboost: {
		name: "Sneed Boost",
		shortDesc: "This Pokemon's Speed and accuracy are raised 1 stage at the end of each turn.",
	},
	armorplate: {
		name: "Armor Plate",
		shortDesc: "This Pokemon's Normal-type moves become Steel type and have 1.3x power.",
	},
	kinglymajesty: {
		name: "Kingly Majesty",
		desc: "Priority moves used by opposing Pokemon targeting this Pokemon or its allies are prevented from having an effect.",
		shortDesc: "This Pokemon and its allies are protected from opposing priority moves.",

		block: "#damp",
	},
	infected: {
		name: "Infected",
		desc: "Pokemon is infected by a virus that revives the dead.",
		shortDesc: "Pokemon is infected by a virus that revives the dead.",
	},
	perishtouch: {
		name: "Perish Touch",
		shortDesc: "This Pokemon's contact moves cause the opponent to perish in three turns.",
		activate: "  ([Target] has been hit with the touch of death!)",
	},
	lethargic: {
		name: "Lethargic",
		shortDesc: "This Pokemon is on the verge of sleeping, and is considered to be aslepp.",
	},
	triforce: {
		name: "Triforce",
		shortDesc: "In 3 turns, this Pokemon collects the Triforce, boosting Atk, Sp. Atk, and Sp. Def.",
	},
	infection: {
		name: "Infection",
		shortDesc: "(Blobbos-Infected or Infected) When this Pokemon faints, it regains HP and changes form to be a zombie.",
	},
	costume: {
		name: "Costume",
		desc: "If this Pokemon is a Blobbos-Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its costume is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the costume.",
		shortDesc: "(Blobbos-Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.",
		gen7: {
			desc: "If this Pokemon is a Blobbos-Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its costume is then broken and it changes to Busted Form. Confusion damage also breaks the costume.",
			shortDesc: "(Blobbos-Mimikyu only) First hit deals 0 damage, breaks costume.",
		},

		block: "  Its costume served it as a decoy!",
		transform: "[POKEMON]'s costume was busted!",
	},
	eyeofblobbos: {
		name: "Eye of Blobbos",
		shortDesc: "If Blobbos-Eye, at end of the turn, changes to Eye-Mouth mode if below full HP.",

		transform: "You feel an evil presence watching you!",
		transformEnd: "Blobbos-Eye-Mouth has calmed down!",
	},
	codename: {
		name: "Codename",
		shortDesc: "+1 crit ratio; critical hit damage is boosted by 1.5x.",
	},
	reconstruct: {
		name: "Reconstruct",
		shortDesc: "Rebuilds item on switchout. Does not rebuild knocked off items.",

		activate: "  [POKEMON] obatined one [ITEM]!",
	},
	ultraego: {
		name: "Ultra Ego",
		shortDesc: "Boosts Attack by 1 whenever this Pokemon takes damage from any source.",
	},
	limblauncher: {
		name: "Limb Launcher",
		shortDesc: "Powers up Punch and Kick moves by 1.3x. Punch/Kick moves don't make contact.",
	},
	plasticsurge: {
		name: "Plastic Surge",
		shortDesc: "On switch-in, this Pokemon summons Plastic Terrain.",
	},
	thatscap: {
		name: "That's Cap",
		shortDesc: "Doubles the damage of Head-based moves.",
	},
	radioactive: {
		name: "Radioactive",
		shortDesc: "Pokemon making contact become Nuclear type.",
	},
	paperpower: {
		name: "Paper Power",
		shortDesc: "Boosts Kick and Hammer moves by 1.5x, becomes weak to Fire and Water.",
	},
	artist: {
		name: "Artist",
		shortDesc: "The opponent becomes the type of the last move used.",
	},
	ultrainstinct: {
		name: "Ultra Instinct",
		shortDesc: "This Pokemon boosts all stats by 1 when it reaches 1/4 or less HP.",
	},
	balance: {
		name: "Balance",
		shortDesc: "NVE moves deal 1.25x damage; takes 0.75x damage from SE moves.",
	},
	breakdown: {
		name: "Breakdown",
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Special Attack is raised by 12 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Sp. Atk is raised 12 stages.",
		boost: "  [POKEMON] maxed its Special Attack!",
	},
	turbine: {
		name: "Turbine",
		desc: "This Pokemon is immune to Flying-type moves and raises its Special Attack by 1 stage when hit by an Flying-type move. If this Pokemon is not the target of a single-target Flying-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Flying moves to itself to raise Sp. Atk by 1; Flying immunity.",
		activate: "  [POKEMON] took the attack!",
	},
	drenchedbulb: {
		name: "Drenched Bulb",
		desc: "This Pokemon is immune to Fire-type moves and self destruct moves.",
	},
	intoxicate: {
		name: "Intoxicate",
		desc: "This Pokemon's Normal-type moves become Poison-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Poison type and have 1.2x power.",
	},
	hyperzone: {
		name: "Hyper Zone",
		shortDesc: "Summons Hyper Zone upon switch-in, protecting Dark type pokemon from priority, status, and screens.",
	},
	shadowaura: {
		name: "Shadow Aura",
		shortDesc: "Shadow moves deal 1.5x damage; takes half damage at full HP.",
	},
	presentpower: {
		name: "Present Power",
		shortDesc: "Adds a Present to every attack.",
	},
	acupower: {
		name: "Acu Power",
		shortDesc: "Adds an Acupressure to every attack. Immune to critical hits.",
	},
	assistpower: {
		name: "Assist Power",
		shortDesc: "Adds an Assist to every attack.",
	},
	supermentum: {
		name: "Supermentum",
		shortDesc: "Switches out after using a move.",
	},
	muhmentum: {
		name: "Muhmentum",
		shortDesc: "Switches out after using an offensive move.",
	},
	rollan: {
		name: "Rollan",
		shortDesc: "Gives 2 random boosts on switch-in. If they are the same boosts, also give +2 crit",

		activate: "  [POKEMON] got dubs! Check 'em!",
	},
	aromascale: {
		name: "Aromascale",
		shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment and halves the damage from attacks when at 100% health.",
	},
	serenetrace: {
		name: "Serene Trace",
		shortDesc: "On switch-in, or when it can, this Pokemon sets up Rainbow for 5 turns and then copies a random adjacent foe's Ability.",
	},
	terraform: {
		name: "Terraform",
		desc: "Changes terrain when using certain moves relating to terrain.",
		shortDesc: "Changes terrain to benefit certain moves.",
	},
	fbomb: {
		name: "F Bomb",
		shortDesc: "Sets all mons abilities to Stench. Makes all attacks Poison-type for 1 turn. Makes everyone else Normal.",
	},
	deathstranding: {
		name: "Death Stranding",
		shortDesc: "Sets Timefall. All Pokemon on the field lose 1/8 HP per turn and boost their highest stat by 1 stage.",
	},
	aphenphosmphobia: {
		name: "Aphenphosmphobia",
		shortDesc: "This Pokemon receives 2x damage from contact attacks. The accuracy of attacks against this Pokemon is 0.9x.",
	},
	chiralnetwork: {
		name: "Chiral Network",
		shortDesc: "Creates a bridge. If the next Pokemon that switches out switches back to a Pokemon with Chiral Network, it gets its positive boosts.",
	},
	fishermansruse: {
		name: "Fisherman's Ruse",
		shortDesc: "Prankster + Lightningrod + STAB on Water + Bug SE on Steel.",
	},
	masterbait: {
		name: "Masterbait",
		shortDesc: "This Pokemon's Dark-type moves become Bug-type and Water-Type moves become Dark-type and have 1.2x power.",
	},
	captchahorni: {
		name: "Captcha: Horni",
		shortDesc: "This Pokemon's horn moves have 1.5x power and trap for a turn.",
	},
	metronomepower: {
		name: "Metronome Power",
		shortDesc: "Adds a Metronome to every attack.",
	},
	swamped: {
		name: "Swamped",
		shortDesc: "On switch-in, summons a swamp that lowers all opponents speed stats by 50% for 4 turns.",
	},
	revvingmalice: {
		name: "Revving Malice",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dark-type attack.",
	},
	woodchipper: {
		name: "Woodchipper",
		shortDesc: "Pokemon making contact with this Pokemon lose their item. Blade moves deal 1.2x damage.",
	},
	pooperpower: {
		name: "Pooperpower",
		shortDesc: "Doubles the power of Mud and Shit moves.",
	},
	onaquest: {
		name: "On A Quest",
		shortDesc: "When first switched in, begins a quest. Complete it to become a legendary hero!",

		start: "  [POKEMON] started a quest: [[QUESTNAME]] - [QUESTTEXT]",
		activate: "  [POKEMON]'s quest was updated: [[QUESTNAME]] - [QUESTPROGRESS] / [QUESTREQUIREMENT] [QUESTPROGRESSTEXT]",
		end: "  [POKEMON] finished [[QUESTNAME]]!",
		transform: "[POKEMON] became a legendary hero!",
	},
	legendary: {
		name: "Legendary",
		desc: "This Pokemon cannot be statused. Prevents this Pokemon's stat stages from lowering. The power of this Pokemon's move is multiplied by 1.5 against Dark- and Dragon-types. Heroic Strike becomes Heroic Onslaught.",
		shortDesc: "Cannot be statused, Clear Body, x1.5 damage vs Dark/Dragon, Heroic Strike -> Heroic Onslaught.",
	},
	copypower: {
		name: "Copy Power",
		desc: "After your ally pokemon has fainted, when this Pokemon switches in, they will replicate their ability.",
	},
	taskoriented: {
		name: "Task Oriented",
		shortDesc: "Complete 2 tasks for a massive boost.",

		start: "  [POKEMON] recieved a task: [TASKNAME] - [TASKTEXT]",
		activate: "  [POKEMON]'s task was updated: [TASKNAME] - [TASKPROGRESS] / [TASKREQUIREMENT] [TASKPROGRESSTEXT]",
		end: "  [POKEMON] finished their tasks!",
	},
	inmemoriam: {
		name: "In Memoriam",
		shortDesc: "Magic Guard, Flare Heal, immune to Fire and Steel.",

		start: "  [POKEMON] is always ready to rember ;_;7",
	},
	/* Sandbox + Misc. Abilities */
	bejeweled: {
		name: "Bejeweled",
		shortDesc: "Sets Psychic Surge; recovers gems at the end of turns.",
	},
	boardpoweryou: {
		name: "Board Power (/you/)",
		shortDesc: "Every Board Power combined except /z/ and Gorilla Tactics.",
	},
	capacitance: {
		name: "Capacitance",
		desc: "Pokemon making contact with this Pokemon lose 1/8 times this Pokemon's Stockpile count of their maximum HP, rounded down. Factors Electric weakness. 20% chance per use of Stockpile to paralyze. Resets Stockpile.",

		damage: "  [POKEMON] was shocked!",
	},
	chording: {
		name: "Chording",
		desc: "After using a Special attack, its Atk is raised by 1 stage. After using a Physical attack, its Sp. Atk is raised by 1 stage.",
	},
	numerouno: {
		name: "Numero Uno",
		shortDesc: "Removes the restriction of first-turn out moves.",

		start: "BRAZIL NUMERO UNO! CAMPEAO DE MUNDO!",
	},
	real: {
		name: "Real",
		shortDesc: "This Pokemon is real.",

		start: "  [POKEMON] real!",
	},
	bereavement: {
		name: "Bereavement",
		shortDesc: "Transforms into Dullahan state if active on the turn after an ally faints.",
	},
	kattapillarssecretpower: {
		name: "Kattapillar's Secret Power",
		shortDesc: "Has a variety of effects depending on certain circumstances.",
	},
	fake: {
		name: "Fake",
		shortDesc: "This Pokemon is not real.",

		start: "The snake hisses at you menacingly...",
	},
	mindzap: {
		name: "Mind Zap",
		shortDesc: "Clears all disruptions from the field (screens, hazards, weather).",
	},
	overeagerest: {
		name: "Overeagerest",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit 100 times. Subsequent hits deal 2^N more damage. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's moves hit 100 times. Hits after the first increase in damage exponentially.",
	},
	shitbugtactics: {
		name: "Shitbug Tactics",
		shortDesc: "This Pokemon's SpA is 1.5x, but it can only select the first move it executes.",
	},
	neurotoxin: {
		name: "Neurotoxin",
		shortDesc: "Immune to Psychic-type moves; restores 1/4 HP. Poison-type attacks hit Psychic-types super effectively.",
	},
	suicidelead: {
		name: "Suicide Lead",
		shortDesc: "On switch-in, ability holder uses Explosion.",
	},
	inandout: {
		name: "In and Out",
		shortDesc: "On switch-in, ability holder uses U-turn.",
	},
	onepunch: {
		name: "One Punch",
		shortDesc: "On switch-in, ability holder attempts to use Focus Punch.",
	},
	invasivethoughts: {
		name: "Invasive Thoughts",
		shortDesc: "I AM IN YOUR WALLS.",
	},
	forthefunny: {
		name: "For the Funny",
		shortDesc: "On switch-in, ability holder uses Metronome for the funny.",
	},
	bully: {
		name: "Bully",
		shortDesc: "On switch-in, ability holder uses Knock Off.",
	},
	leafblower: {
		name: "Leaf Blower",
		shortDesc: "On switch-in, ability holder uses Whirlwind.",
	},
	imitator: {
		name: "Imitator",
		shortDesc: "On switch-in, ability holder uses Copycat.",
	},
	procrastinator: {
		name: "Procrastinator",
		shortDesc: "On switch-in, ability holder uses Rest.",
	},
	resurrection: {
		name: "Resurrection",
		shortDesc: "On switch-in, ability holder uses Revival Blessing.",
	},
hideandseek: {
		name: "Hide and Seek",
		shortDesc: "On switch-in, ability holder uses Substitute.",
	},
resilience: {
		name: "Resilience",
		shortDesc: "On switch-in, ability holder uses Endure.",
	},
scavenger: {
		name: "Scavenger",
		shortDesc: "On switch-in, ability holder uses Recycle.",
	},
trolling: {
		name: "Trolling",
		shortDesc: "we do a little bit of trolling",
	},
headwind: {
		name: "Headwind",
		shortDesc: "On switch-in, ability holder uses Tailwind.",
	},
misleading: {
		name: "Misleading",
		shortDesc: "On switch-in, ability holder uses Fake Out.",
	},
prestidigitation: {
		name: "Prestidigitation",
		shortDesc: "On switch-in, ability holder uses Trick.",
	},
malediction: {
		name: "Malediction",
		shortDesc: "On switch-in, ability holder uses Curse.",
	},
	metamorphosis: {
		name: "Metamorphosis",
		shortDesc: "If this Pokemon is a Blobbos-eedle, switching out makes it change into its True Form.",

		activate: "  [POKEMON] harnessed the power of the Weedles!",
	},
	fourwarn: {
		name: "Fourwarn",
		desc: "On switch-in, this Pokemon is alerted to every opponent's move.",
		shortDesc: "On switch-in, this Pokemon is alerted to every opponent's move.",

		activate: "  [TARGET]'s [MOVE] was revealed!",
		activateNoTarget: "  [POKEMON]'s Fourwarn alerted it to [MOVE]!",
	},
	snooping: {
		name: "Snooping",
		desc: "On switch-in, this Pokemon is alerted to every opponent's move.",
		shortDesc: "On switch-in, this Pokemon is alerted to every opponent's move.",

		activate: "  [TARGET]'s [MOVE] was revealed!",
		activateNoTarget: "  [POKEMON]'s Snooping alerted it to [MOVE]!",
	},
	anythingyoucando: {
		name: "Anything You Can Do",
		shortDesc: "All foes that used the same move as this Pokemon lose 1/8 HP at the end of the turn.",
	},
	allaccordingtokeikakuplan: {
		name: "All According to Keikaku (Plan)",
		shortDesc: "2x BP when using a move SE against a mon when the previous mon in its slot resisted the move. 0.25x BP when using a move resisted against a mon when the previous mon also resisted it.",
	},
	goodaszinc: {
		name: "Good as Zinc",
		shortDesc: "This Pokemon cannot be confused.",
	},
	halfbakedbody: {
		name: "Half-Baked Body",
		shortDesc: "The power of Fire-type attacks against this Pokemon is halved and raises its Defense by 1 stage when hit by a Fire-type move.",
	},
	scaredycat: {
		name: "Scaredy Cat",
		shortDesc: "This Pokemon switches out when Intimidated.",
	},
	shroomspeed: {
		name: "Shroom Speed",
		shortDesc: "This Pokemon's non-Status moves have priority raised by 1.",
	},
	supremeunderlord: {
		name: "Supreme Underlord",
		desc: "This Pokemon's moves have their power multiplied by 1+((5-X)*0.1), where X is the total number of times any Pokemon has fainted on the user's side when this Ability became active, and X cannot be greater than 5.",
		shortDesc: "This Pokemon's moves have Pokemon's moves have 10% more power for each living ally, up to 5 allies.",

		activate: "  [POKEMON] gained strength from the living!",
	},
	altruist: {
		name: "Altruist",
		shortDesc: "When this Pokemon has a stat stage raised, all opposing Pokemon copy the effect.",
	},
	finale: {
		name: "Finale",
		shortDesc: "Changes type to match moves used and to resist oncoming moves.",
	},
	magmaticeruption: {
		name: "Magmatic Eruption",
		shortDesc: "On switch-in, this Pokemon summons a Sea of Fire.",
	},
	shrimpleas: {
		name: "Shrimple As",
		desc: "This Pokemon's attacks without secondary effects have their power multiplied by 1.3.",
		shortDesc: "This Pokemon's attacks without secondary effects have 1.3x power.",
	},
	cellshield: {
		name: "Cell Shield",
		shortDesc: "Water and Dark-type moves used against this Pokemon do half damage. Cannot be trapped.",
	},
	hellfirerush: {
		name: "Hellfire Rush",
		shortDesc: "Speed Doubles during Sea of Fire.",
	},
	swampforce: {
		name: "Swamp Force",
		shortDesc: "1.5x atk during Grassy Terrain or Swamp. 2x atk during both.",
	},
	mortal: {
		name: "Mortal",
		shortDesc: "Turns into Blobbos-Lich at end of turn if any unfainted ally holding a Phylactery spent a turn switched in and restores 1/3 of its max HP.",

		transform: "[POKEMON] has lost its immortality!",
	},
	immortality: {
		name: "Immortality",
		shortDesc: "This Pokemon survives damage with at least 1 HP. Immune to OHKO. It transforms into Blobbos-Lich-Mortal if it survives lethal damage.",

		transform: "[POKEMON] has regained its immortality!",
	},
	assimilation: {
		name: "Assimilation",
		shortDesc: "Immune to status. Upon being statused, gains a type associated with the status, becomes immune to it, and receive a bonus effect based on the type. Poison/Tox (Poison) = 1/4 Heal, Burn (Fire) = +2 Atk & +2 Spa, Paralyze (Electric) = +2 Spe, Freeze (Ice) = +2 Def & +2 SpD, Sleep (Normal) = +1 to all.",
	},
	thermalfumes: {
		name: "Thermal Fumes",
		shortDesc: "Fire-type attacking moves have 20% chance to poison. Poison-type attacking moves have a 20% chance to burn.",
	},
	joycon: {
		name: "Joycon",
		desc: "If this Pokemon is an Blobbos-Switch, it changes to Blue Forme before using a special move, Red forme before using a physical move, and its base forme Shield Forme before using a status move.",
		shortDesc: "If Blobbos-Switch, changes Forme to Blue before special attacks, Red before physical attacks, and base before status moves.",
	},
	ancientstyle: {
		name: "Ancient Style",
		desc: "Switches between Agile and Strong styles at end of turn. If Strong, 1.25x base power and 0.75x speed. If Agile, 0.75x base power and 1.25x speed.",
	},
	constrictor: {
		name: "Binding Band",
		desc: "User's partial-trapping moves deal 1/6 max HP per turn instead of 1/8.",
	},
	deadlypincers: {
		name: "Deadly Pincers",
		desc: "This Pokemon's Defense and Special Defense is 1.5x before using a force switch move.",
	},
	bountifulharvest: {
		name: "Bountiful Harvest",
		desc: "Harvest + Ripen + Gluttony + Cheek Pouch + Cud Chew.",
	},
	possessed: {
		name: "Possessed",
		shortDesc: "If Blobbos-Doll, changes to Possessed form after using Plush Rush.",
	},
	plunderedluck: {
		name: "Plundered Luck",
		desc: "This Pokemon's moves have their secondary effect chance doubled. Foes's moves have their secondary effect chance halved.",
		shortDesc: "Doubles user's secondary effect chances, halves foe's secondary effect chance.",
	},
	gogetter: {
		name: "Go-Getter",
		desc: "This Pokemon's recharge moves don't need to recharge.",
		shortDesc: "This Pokemon's recharge moves don't need to recharge.",
	},
	masshopping: {
		name: "Mass Hopping",
		desc: "Hopping moves used by this Pokemon have 1.3x power.",
		shortDesc: "Hopping moves used by this Pokemon have 1.3x power.",
	},
	stringpower: {
		name: "String Power",
		shortDesc: "Adds a String Shot to every attack.",
	},
	lasagnatoss: {
		name: "Lasagna Toss",
		shortDesc: "Upon hitting, makes all users on the field use their current held berry.",
	},
	madlad: {
		name: "Madlad",
		shortDesc: "Pokemon making contact with this Pokemon will be confused. +1 priority on Status moves.",
	},
	fallenangel: {
		name: "Fallen Angel",
		shortDesc: "Gains STAB on Fairy and Dark-type moves. Takes halved damage from Fairy and Ghost moves.",
	},
	kantonaut: {
		name: "Kantonaut",
		shortDesc: "Takes halved damage from Fairy, Steel, and Dark. Takes double damage from Ice.",
	},
	doomed: {
		name: "Doomed",
		shortDesc: "boosts Head based moves (Lose 1/3 HP upon switching out; Head-based moves deal half damage; Halved speed upon item loss; Immunity.)",
	},
	hpower: {
		name: "H Power",
		shortDesc: "Berserk + Technician.", // ???
	},
	hyperspeen: {
		name: "Hyperspeen",
		shortDesc: "Doubles the damage of Spin-based moves.",
	},
	colorboost: {
		name: "Color Boost",
		shortDesc: "This Pokemon's gets a 1.5x boost to its offenses after changing type. Once per switch-in.",
	},
	cancer: {
		name: "Cancer",
		shortDesc: "At end of turn, try to toxic all foes, ignoring immunity. If the foe is already poisoned, they lose 1/16 of their max HP and heal for that amount.",
	},
	doomguard: {
		name: "Doom Guard",
		shortDesc: "This Pokemon can only be damaged by not very effective moves and indirect damage.",
	},
	mindovermatter: {
		name: "Mind Over Matter",
		shortDesc: "This Pokemon's Attack boosts are replaced with Sp. Attack boosts.",
	},
	healthybody: {
		name: "Healthy Body",
		shortDesc: "If this Pokemon has 3 or more boosts, its Attack is added to its Sp. Attack.",
	},
	holyboost: {
		name: "Holy Boost",
		shortDesc: "This Pokemon's lowest stat is raised by 1 if it attacks and KOes another Pokemon.",
	},
	rot: {
		name: "Rot",
		shortDesc: "On-switch in, all active Pokemon's Leftovers are turned into Black Sludge.",
	},
	"2mss": {
		name: "2MSS",
		shortDesc: "This Pokemon's third and fourth moves are disabled.",
	},
	evolutionaryadvantage: {
		name: "Evolutionary Advantage",
		shortDesc: "This Pokemon's base power is doubled against different colored Pokemon.",
	},
	closequarterscombat: {
		name: "Close-Quarters Combat",
		shortDesc: "On switch-in, attempt to remove a random foe's item.",
	},
	predator: {
		name: "Predator",
		shortDesc: "This Pokemon has +1 Crit for each stat drop its target has.",
	},
	hazey: {
		name: "Hazey",
		shortDesc: "On switch-in, this Pokemon clears all boosts of all Pokemon.",
	},
	crippleguard: {
		name: "Cripple Guard",
		shortDesc: "This Pokemon takes 25% less damage from statused Pokemon.",
	},
	boostboost: {
		name: "Boost Boost",
		shortDesc: "This Pokemon gains 10% base power for each boost it has.",
	},
	fetalrupture: {
		name: "Fetal Rupture",
		shortDesc: "This Pokemon's attacking moves OHKO not fully evolved Pokemon.",
	},
	sleeper: {
		name: "Sleeper",
		shortDesc: "This Pokemon can use moves and takes double damage while asleep. Tries to fall asleep every 2 turns.",
	},
	sequencer: {
		name: "Sequencer",
		shortDesc: "Each hit of a multihit move beyond the first has 10 more BP.",
	},
	frostysurge: {
		name: "Frosty Surge",
		shortDesc: "Sets Frosty Terrain on switch-in.",
	},
	brainwash: {
		name: "Brainwash",
		shortDesc: "On switch-in, this Pokemon lowers the Sp. Attack of opponents by 1 stage.",
	},
	paralysisheal: {
		name: "Paralysis Heal",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when paralyzed; no Speed loss, cannot be fully paralyzed.",
	},
	dramatic: {
		name: "Dramatic",
		shortDesc: "This Pokemon's next attack is a critical hit if it was crit against. +2 crit ratio when below 1/4 max HP.",
	},
	digger: {
		name: "Digger",
		shortDesc: "Dig has 1.5x power, ignores the target's protection, infiltrates, and immunities but is not very effective against Flying-types. Immune to Earthquake and Magnitude during Dig.",
	},
	windglider: {
		name: "Windglider",
		shortDesc: "Boosts Wind moves by 1.3; gains immunity to Flying-type moves and +1 Speed if hit by one.",
	},
	mongoosesmalice: {
		name: "Mongoose's Malice",
		shortDesc: "This Pokemon's Poison/Ghost moves deal 1.5x damage, and Normal/Fighting moves deal 0.5x damage.",
	},
	extremeskill: {
		name: "Extreme Skill",
		shortDesc: "This Pokemon's hits have a 1% chance to win the game instantly.",
	},
	fuckforce: {
		name: "Fuckforce",
		shortDesc: "Neuroforce + Scrappy + Swift Swim + Iron Fist. Miracle Punch hits twice.",
	},
	ironfish: {
		name: "Iron Fish",
		desc: "This Pokemon's fish-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's fish-based attacks have 1.2x power. Flounder Punch is not boosted.",
	},
	originalsin: {
		name: "Original Sin",
		shortDesc: "Added 1/256 chance for user's moves to miss. User's held item does nothing. Poison Sting always poisons. User takes 16x damage from Poison moves, and 4x damage from Bug moves.",
	},
	rampage: {
		name: "Rampage",
		shortDesc: "If the user KO's the target with a recharge move, the user does not need to recharge.",
	},
	trickster: {
		name: "Trickster",
		shortDesc: "This Pokemon's Status moves have priority raised by 1, going first within its priority. If hit by one Fairy move, this Pokemon's Status moves ignore type immunites and certain Abilities of other Pokemon. Fairy immunity.",

		start: "  The power of [POKEMON]'s Status moves rose!",
	},
	compensate: {
		name: "Compensate",
		shortDesc: "This Pokemon's Attack is boosted by 25% of the higher of its unboosted, unmodified Defense or Speed",
	},
	dexterity: {
		name: "Dexterity",
		shortDesc: "This Pokemon's Attack is boosted by 25% of its unboosted, unmodified Speed",
	},
	vindication: {
		name: "Vindication",
		shortDesc: "This Pokemon's Attack is boosted by 25% of its unboosted, unmodified Defense",
	},
	ascension: {
		name: "Ascension",
		shortDesc: "This Pokemon transforms into Blobbos-Homestuck-God-Tier and heals to full health if it deals lethal damage to itself.",
	},
	thiefoflight: {
		name: "Thief of Light",
		desc: "This Pokemon's moves have their secondary effect chance doubled. Foes's moves have their secondary effect chance removed. Immune to Ground. Light of Ruin becomes Heroine's Light.",
		shortDesc: "Doubles user's secondary effect chances, removes foe's secondary effect chance. Immune to Ground. Light of Ruin becomes Heroine's Light.",
	},
	homogeneity: {
		name: "Homogeneity",
		desc: "This Pokemon's moves have 20% increased power for every unfainted party member that shares a type with it.",
	},
	multiversal: {
		name: "Multiversal",
		desc: "This Pokemon's boosts, volatile conditions, and status are synced among all Pokemon with Multiversal among all battles. Wackiness will ensue.",
	},
	warden: {
		name: "warden",
		desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
		shortDesc: "No foe can use any move known by the user.",

		start: "  [POKEMON] sealed any moves its target shares with it!",
		cant: "[POKEMON] can't use its sealed [MOVE]!",
	},
	medusascurse: {
		name: "Medusa's Curse",
		shortDesc: "Sets all other Pokemon to Rock-type on switch-in.",
	},
	sweetdreams: {
		name: "Sweet Dreams",
		desc: "At the end of every turn, this Pokemon restores 1/16 of its max HP if it or its opposing Pokemon is asleep. If both are asleep, it heals 2/16.",
	},
	barkback: {
		name: "Bark Back",
		shortDesc: "Immune to sound-based moves. Opponent loses 1/4 of its max HP if it uses a sound-based move.",
	},
	sapiophile: {
		name: "sapiophile",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Psychic-type attack. This Pokemon is healed 1/4 by Psychic, 1/8 by Psychic Terain.",
	},
	sufferasihave: {
		name: "Suffer As I Have",
		shortDesc: "When this Pokemon is hit by an opponent's attack, the opponent is inflicted with Curse.",
	},
	amplifier: {
		name: "Amplifier",
		shortDesc: "User's sound-based moves deal double damage. User takes halved damage from sound-based moves.",
	},
	wonderland: {
		name: "Wonderland",
		shortDesc: "Summons Wonder Room upon switch-in.",
	},
	runngun: {
		name: "Run N' Gun",
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage and the accuracy of its attacks is 0.9x.",
	},
	massacre: {
		name: "Massacre",
		shortDesc: "Kills everyone when hit by a Dark or Fairy move.",

		damage: "  The massacre is complete!",
	},
	feelthefoliage: {
		name: "Feel The Foliage",
		shortDesc: "Opponent making contact: -1/4 max hp, 1/3 chance to brn/par/psn.",

		damage: "#roughskin",
	},
	radishbody: {
		name: "Radish Body",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be radished.",
	},
	falsedark: {
		name: "False Dark",
		desc: "Reduces damage taken from Grass and Fighting moves by half.",
	},
	musclemass: {
		name: "Muscle Mass",
		desc: "This Pokemon is immune to Fighting-type moves and raises its Defense by 1 stage when hit by a Fighting-type move. If this Pokemon is not the target of a single-target Fighting-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move. If multiple Pokemon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
		shortDesc: "This Pokemon draws Fighting moves to itself to raise Defense by 1; Fighting immunity.",

		activate: "#lightningrod",
	},
	acapability: {
		name: "A Cap Ability",
		desc: "Beast Boost + Levitate.",
	},
	acabability: {
		name: "A Cab Ability",
		desc: "https://pastebin.com/Nt7DxGis",
	},
	cellconstruct: {
		name: "Cell Construct",
		desc: "If Blobbos-Mitosis reaches under 50% of health, transforms into Blobbos-Mitosis-Complete.",
	},
	crowheaded: {
		name: "Crowheaded",
		desc: "Peck, Drill Peck and Pluck deal 2x damage.",
	},
	aintnothingonnabreakmystride: {
		name: "AIN'T NOTHIN' GONNA BREAK MY STRIDE",
		desc: "Realwalker's unbreakable stride boosts its STAB to 2x, and makes its stats impossible to lower.",
	},
	baller: {
		name: "Baller",
		desc: "Boosts the damage of Ball moves by 1.5x.",
	},
	madeofglass: {
		name: "Made of Glass",
		desc: "Dies after landing any damaging move. Takes absurdly reduced damage from all damaging moves.",

		damage: "  [POKEMON] shattered into millions of glass shards!",
	},
	"3d": {
		name: "3D",
		shortDesc: "On switch-in, summons Magic, Wonder and Trick room at the same time for 5 Turns.",
	},
	"invertedfate": {
		name: "Inverted Fate",
		shortDesc: "On switch-in, summons Trick room for 5 Turns.",
	},
	carbonated: {
		name: "Carbonated",
		shortDesc: "On switch-in, +1 Atk and +1 SpA. After 2 turns, -1 Atk and -1 SpA.",
	},
	atlonglast: {
		name: "At Long Last",
		desc: "If this Pokemon is at 70% HP or more, it survives one hit with at least 1 HP.",
		shortDesc: "If this Pokemon is at 70% HP or more, it survives one hit with at least 1 HP.",

		activate: "  [POKEMON]'s resolve!",
	},
	fireaffinity: {
		name: "Fire Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Fire-type attack. This Pokemon is healed 1/8 by Fire. Immune to Burn.",
	},
	electricityaffinity: {
		name: "Electricity Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Electric-type attack. This Pokemon is healed 1/8 by Electricity. While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect. Immune to Paralysis.",
	},
	wateraffinity: {
		name: "Water Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Water-type attack. This Pokemon is healed 1/8 by Water. If Rain Dance is active, this Pokemon's Speed is doubled and it heals 1/16 of its max HP each turn.",
	},
	strengthaffinity: {
		name: "Strength Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Fighting-type attack. This Pokemon is healed 1/8 by Fighting. Increases the power of Strength by 1.5x.",
	},
	poisonaffinity: {
		name: "Poison Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Poison-type attack. This Pokemon is healed 1/8 by Poison. If this Pokemon has no item, it finds a gem matching the type of one of its moves at the end of this turn. If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP. Immune to Poison.",
	},
	rockaffinity: {
		name: "Rock Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Rock-type attack. This Pokemon is healed 1/8 by Rock. If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
	},
	flightaffinity: {
		name: "Flight Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Flying-type attack. This Pokemon is healed 1/8 by Flying. Immune to Ground.",
	},
	iceaffinity: {
		name: "Ice Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Ice-type attack. This Pokemon is healed 1/8 by Ice. This Pokemon's Ice-type attacks are super-effective against Water-types. Immune to Freeze.",
	},
	lightaffinity: {
		name: "Light Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Fairy-type attack. This Pokemon is healed 1/8 by Fairy. This Pokemon's moves have their accuracy multiplied by 2.",
	},
	parasiteaffinity: {
		name: "Parasite Affinity",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Dark-type attack. This Pokemon is healed 1/8 by Dark. All foes on the field lose 1/16 HP per turn and this Pokemon is healed by that much.",
	},
	noweaknesses: {
		name: "NO WEAKNESSES",
		shortDesc: "This Pokemon's typing and ability change when using Normal, Ghost, Bug, Steel, Dark, Poison, Water, or Ground moves.",
	},
	jumper: {
		name: "Jumper",
		shortDesc: "Flying and Poison type moves do double damage against this mon. Water and ground type moves do half damage against this mon. 2 turn moves attack on the first move.",
	},
	malevolentsoul: {
		name: "Malevolent Soul",
		shortDesc: "This Pokemon is immune to status and has doubled power on Fairy-Type moves. Takes 10% recoil for moves used and Ghost moves have x4 power against this Pokemon.",
	},
	darklife: {
		name: "Dark Life",
		shortDesc: "Heals during Midnight.",
		desc: "Heals during Midnight.",
	},
	memetic: {
		name: "Memetic",
		shortDesc: "Contact spreads this ability. Lwrs stats non-Meme types.",
		desc: "Contact spreads this ability. Lwrs stats non-Meme types.",
	},
	isolation: {
		name: "Isolation",
		shortDesc: "Reduces the damage of incoming special moves.",
		desc: "Reduces the damage of incoming special moves.",
	},
	acidcloudburst: {
		name: "Acid Cloudburst",
		shortDesc: "The Pokemon makes it acid rain if it appears in battle.",
		desc: "The Pokemon makes it acid rain if it appears in battle.",
	},
	ethereal: {
		name: "Ethereal",
		shortDesc: "Immune to contact moves.",
		desc: "Immune to contact moves.",
	},
	mozart: {
		name: "Mozart",
		shortDesc: "Could MOZART still be alive?",
		desc: "Could MOZART still be alive?",
	},
	pride: {
		name: "Pride",
		shortDesc: "Raises Special Attack when you defeat a pokemon.",
		desc: "Raises Special Attack when you defeat a pokemon.",
	},
	pounce: {
		name: "Pounce",
		shortDesc: "Goes first on the first turn.",
		desc: "Goes first on the first turn.",
	},
	vespertine: {
		name: "Vespertine",
		shortDesc: "Boosts the Pokemon's Speed in Midnight.",
		desc: "Boosts the Pokemon's Speed in Midnight.",
	},
	acidrush: {
		name: "Acid Rush",
		shortDesc: "Raises Speed in Acid Rain.",
		desc: "Raises Speed in Acid Rain.",
	},
	headache: {
		name: "Headache",
		shortDesc: "User's SpAtk rises while confused.",
		desc: "User's SpAtk rises while confused.",
	},
	windate: {
		name: "Windate",
		shortDesc: "Normal-type moves become Wind-type moves.",
		desc: "Normal-type moves become Wind-type moves.",
	},
	immolate: {
		name: "Immolate",
		shortDesc: "Normal-type moves become Fire-type moves.",
		desc: "Normal-type moves become Fire-type moves.",
	},
	sunbathe: {
		name: "Sunbathe",
		shortDesc: "The Pokemon gradually regains HP in sun.",
		desc: "The Pokemon gradually regains HP in sun.",
	},
	snowrush: {
		name: "Snow Rush",
		shortDesc: "Boosts the Pokemon's Speed in hail.",
		desc: "Boosts the Pokemon's Speed in hail.",
	},
	magicate: {
		name: "Magicate",
		shortDesc: "Normal-type moves become Magic-type moves.",
		desc: "Normal-type moves become Magic-type moves.",
	},
	oasis: {
		name: "Oasis",
		shortDesc: "The Pokemon gradually regains HP in sandstorms.",
		desc: "The Pokemon gradually regains HP in sandstorms.",
	},
	winterforce: {
		name: "Winter Force",
		shortDesc: "Boosts certain moves' power in hail.",
		desc: "Boosts certain moves' power in hail.",
	},
	evaporate: {
		name: "Evaporate",
		shortDesc: "Normal-type moves become Steam-type moves.",
		desc: "Normal-type moves become Steam-type moves.",
	},
	berserker: {
		name: "Berserker",
		shortDesc: "Raises Attack when hit.",
		desc: "Raises Attack when hit.",
	},
	martialate: {
		name: "Martialate",
		shortDesc: "Normal-type moves become Fighting-type moves.",
		desc: "Normal-type moves become Fighting-type moves.",
	},
	machinate: {
		name: "Machinate",
		shortDesc: "Normal-type moves become Steel-type moves.",
		desc: "Normal-type moves become Steel-type moves.",
	},
	furiousfeet: {
		name: "Furious Feet",
		shortDesc: "Boosts the power of kicking moves.",
		desc: "Boosts the power of kicking moves.",
	},
	thicktail: {
		name: "Thick Tail",
		shortDesc: "Boosts the power of tail moves.",
		desc: "Boosts the power of tail moves.",
	},
	skeptic: {
		name: "Skeptic",
		shortDesc: "Ups resistance to Fairy, Divine and Magic-type moves.",
		desc: "Ups resistance to Fairy, Divine and Magic-type moves.",
	},
	coldblooded: {
		name: "Cold Blooded",
		shortDesc: "Reduces HP if it is cold. Fire restores HP.",
		desc: "Reduces HP if it is cold. Fire restores HP.",
	},
	lodestone: {
		name: "Lodestone",
		shortDesc: "Raises Defense if hit by a Steel-type move.",
		desc: "Raises Defense if hit by a Steel-type move.",
	},
	vaporize: {
		name: "Vaporize",
		shortDesc: "Raises Sp.Def if hit by a Water-type move.",
		desc: "Raises Sp.Def if hit by a Water-type move.",
	},
	firewall: {
		name: "Firewall",
		shortDesc: "Adjusts defenses according to a foe's offenses.",
		desc: "Adjusts defenses according to a foe's offenses.",
	},
	focus: {
		name: "Focus",
		shortDesc: "Boosts SpAtk if there is a status problem.",
		desc: "Boosts SpAtk if there is a status problem.",
	},
	shadowcall: {
		name: "Shadow Call",
		shortDesc: "Brings up Midnight weather.",
		desc: "Brings up Midnight weather.",
	},
	wacky: {
		name: "Wacky",
		shortDesc: "Makes all moves Wack.",
		desc: "Makes all moves Wack.",
	},
	hydrate: {
		name: "Hydrate",
		shortDesc: "Normal-type moves become Water-type moves.",
		desc: "Normal-type moves become Water-type moves.",
	},
	sugarrush: {
		name: "Sugar Rush",
		shortDesc: "Raises Speed if hit by a Fairy- or Food-type move.",
		desc: "Raises Speed if hit by a Fairy- or Food-type move.",
	},
	vacuum: {
		name: "Vacuum",
		shortDesc: "Draws in all Wind and Flying-type moves to up Defense.",
		desc: "Draws in all Wind and Flying-type moves to up Defense.",
	},
	solarforce: {
		name: "Solar Force",
		shortDesc: "Boosts certain moves' power in sun.",
		desc: "Boosts certain moves' power in sun.",
	},
	ionate: {
		name: "Ionate",
		shortDesc: "Normal-type moves become Electric-type moves.",
		desc: "Normal-type moves become Electric-type moves.",
	},
	graze: {
		name: "Graze",
		shortDesc: "The Pokemon gradually regains HP.",
		desc: "The Pokemon gradually regains HP.",
	},
	pro: {
		name: "Pro",
		shortDesc: "Slightly boosts the power of supereffective moves.",
		desc: "Slightly boosts the power of supereffective moves.",
	},
	builder: {
		name: "Builder",
		shortDesc: "Extends the duration of barrier and room moves.",
		desc: "Extends the duration of barrier and room moves.",
	},
	siphon: {
		name: "Siphon",
		shortDesc: "Boosts the power of draining moves.",
		desc: "Boosts the power of draining moves.",
	},
	bellows: {
		name: "Bellows",
		shortDesc: "Wind moves power up this pokemon's fire moves.",
		desc: "Wind moves power up this pokemon's fire moves.",
	},
	sadist: {
		name: "Sadist",
		shortDesc: "HP is restored a little every time it inflicts damage.",
		desc: "HP is restored a little every time it inflicts damage.",
	},
	metalworker: {
		name: "Metalworker",
		shortDesc: "Boosts the power of Steel type moves.",
		desc: "Boosts the power of Steel type moves.",
	},
	drumroll: {
		name: "Drum Roll",
		shortDesc: "Boosts moves used consecutively and sound based moves.",
		desc: "Boosts moves used consecutively and sound based moves.",
	},
	explosive: {
		name: "Explosive",
		shortDesc: "Boosts the power of self destructing moves.",
		desc: "Boosts the power of self destructing moves.",
	},
	dreamcatcher: {
		name: "Dreamcatcher",
		shortDesc: "Draws in all Psychic-type moves to up Sp. Attack.",
		desc: "Draws in all Psychic-type moves to up Sp. Attack.",
	},
	irradiated: {
		name: "Irradiated",
		shortDesc: "Reduces a poisoned foe's HP.",
		desc: "Reduces a poisoned foe's HP.",
	},
	safeshield: {
		name: "Safe Shield",
		shortDesc: "Sets up Safeguard.",
		desc: "Sets up Safeguard.",
	},
	choicepower: {
		name: "Choice Power",
		shortDesc: "Powers up moves but can only choose one.",
		desc: "Powers up moves but can only choose one.",
	},
	cactus: {
		name: "Cactus",
		shortDesc: "The Pokemon receives benefits in rain/sandstorm and inflicts damage on contact.",
		desc: "The Pokemon receives benefits in rain/sandstorm and inflicts damage on contact.",
	},
	vastknowledge: {
		name: "Vast Knowledge",
		shortDesc: "Raises the Pokemon's SpAtk stat.",
		desc: "Raises the Pokemon's SpAtk stat.",
	},
	neutral: {
		name: "Neutral",
		shortDesc: "Filter+Tinted Lens+Friend Guard+Lightning Rod+Plus+Minus",
		desc: "Filter+Tinted Lens+Friend Guard+Lightning Rod+Plus+Minus",
	},
	rubberboost: {
		name: "Rubber Boost",
		shortDesc: "Its stats are gradually boosted.",
		desc: "Its stats are gradually boosted.",
	},
	activecurrent: {
		name: "Active Current",
		shortDesc: "Reduces a paralyzed foe's HP.",
		desc: "Reduces a paralyzed foe's HP.",
	},
	triggered: {
		name: "Triggered",
		shortDesc: "Cyber, Virus and Dark moves raise its stats.",
		desc: "Cyber, Virus and Dark moves raise its stats.",
	},
	glitchboost: {
		name: "Glitch Boost",
		shortDesc: "All kinds of things.",
		desc: "All kinds of things.",
	},
	thunderstorm: {
		name: "Thunderstorm",
		shortDesc: "Drizzle+Normal becomes Electric+Volt Absorb.",
		desc: "Drizzle+Normal becomes Electric+Volt Absorb.",
	},
	flytrap: {
		name: "Flytrap",
		shortDesc: "Restores HP if hit by a Bug-type move.",
		desc: "Restores HP if hit by a Bug-type move.",
	},
	wishmaker: {
		name: "Wish Maker",
		shortDesc: "Jirachi.",
		desc: "Jirachi.",
	},
	burningdisease: {
		name: "Burning Disease",
		shortDesc: "Bellows+Flame Body+Poison Touch",
		desc: "Bellows+Flame Body+Poison Touch",
	},
	computerbug: {
		name: "Computer Bug",
		shortDesc: "Moody+Compound Eyes",
		desc: "Moody+Compound Eyes",
	},
	trashpile: {
		name: "Trash Pile",
		shortDesc: "Poison Point+Poison Touch+Stench+Liquid Ooze",
		desc: "Poison Point+Poison Touch+Stench+Liquid Ooze",
	},
	godsendurance: {
		name: "Gods Endurance",
		shortDesc: "Cannot be defeated if its HP is above 1.",
		desc: "Cannot be defeated if its HP is above 1.",
	},
	souleater: {
		name: "Soul Eater",
		shortDesc: "Restores HP if hit by a Ghost-type move.",
		desc: "Restores HP if hit by a Ghost-type move.",
	},
	mrshield: {
		name: "MR Shield",
		shortDesc: "Reduces Super Effective moves by 25%. Immune to status moves.",
		desc: "Super effective damage taken is increased by 0.75x. The ability holder is also immune to status moves.",
	},
	beyondultimate: {
		name: "Beyond Ultimate",
		shortDesc: "Reduces Super Effective moves by 50%.",
		desc: "Super effective damage taken is halved.",
	},
	mothsmajesty: {
		name: "Moth's Majesty",
		shortDesc: "Raises highest stat by 1 on switch-in.",
	},
	nuclearization: {
		name: "Nuclearization",
		shortDesc: "Normal type moves are Super Effective on Poison and Normal types.",
	},
	speculate: {
		name: "Speculate",
		shortDesc: "This Pokemon's normal-type moves become ??? type and has 1.2x power.",
	},
	ancientfrenzy: {
		name: "Ancient Frenzy",
		shortDesc: "This Pokemon's rock-type moves are doubled but Speed is lowered by 1 each turn.",
	},
	futuuuure: {
		name: "FUTUUURE",
		shortDesc: "This Pokemon's electric-type moves are doubled but Defense is lowered by 1 each turn.",
	},
	you: {
		name: "You.",
		shortDesc: "Lowers target defense by 1 once per battle on switch-in.",

		activate: "  [POKEMON] pointed directly at the target.",
	},
	izanamisrage: {
		name: "Izanami's Rage",
		shortDesc: "Attacks have a 40% chance of tormenting the foe.",
	},
	mossyexterior: {
		name: "Mossy Exterior",
		shortDesc: "This pokemon draws in water-type moves to raise Spdef. by 1. Water immunity.",
	},
	surprise: {
		name: "Surprise!",
		shortDesc: "If Jakubrik, changes Forme to Active before attacks and Dormant before Enclose.",
	},
	inedible: {
		name: "Inedible",
		shortDesc: "Fairy type moves are now Bug type and have 1.5x more power.",
	},
	mrshadow: {
		name: "MR-Shadow",
		shortDesc: "Immune to Ground-type moves and heals for 1% of HP if hit by a Ground-type move. Ghost-type moves do neutral damage on Normal and Dark Pokemon. Every attack has a 50% chance of inflicting toxic on the foe.",
	},
	ultimateregeneration: {
		name: "Ultimate Regeneration",
		shortDesc: "Heals the holder of this ability for 100% of their health at the end of each turn.",
	},
	bulletreflect: {
		name: "Bullet Reflect",
		shortDesc: "Reflects back Bomb/Bullet based moves at the user.",
	},
	walker: {
		name: "Walker",
		shortDesc: "Raises Attack and Speed by 1 each turn.",
	},
	shipwrecker: {
		name: "Shipwrecker",
		shortDesc: "Ice type moves are super-effective against Steel types.",
	},
	polite: {
		name: "Polite",
		shortDesc: "Moves last. STAB increased to 2.",
	},
	raservant: {
		name: "Rá Servant",
		shortDesc: "The emergence of the servant of Ra brings with him the power of the sun and serious damage to the opponent.",
	},
	copyandpaste: {
		name: "Copy and Paste",
		shortDesc: "Summons Knight of Owner",
	},
	babymonster: {
		name: "Baby Monster",
		shortDesc: "Summons Fughamut",
	},
	regate: {
		name: "Regate",
		shortDesc: "Summons Endeavor",
	},
	gooddaytodie: {
		name: "Thor's Sledgehammer",
		shortDesc: "Curse of yig",
	},
	dezgrace: {
		name: "10 Grace",
		shortDesc: "Summons Wish",
	},
	halflife: {
		name: "Half Life",
		shortDesc: "Ruination",
	},
	firstyou: {
		name: "First You",
		shortDesc: "Summons Portal Gun",
	},
	saback: {
		name: "Saback",
		shortDesc: "Summons Shed Tail",
	},
	thelittleone: {
		name: "The Little One",
		shortDesc: "Summons Minimize",
	},
	smashability: {
		name: "Smash Hability",
		shortDesc: "Summons Antares Snipe",
	},

	olapele: {
		name: "Ola Pele",
		shortDesc: "Summons Zippy Zap",
	},

	hitswhere: {
		name: "Hits Where",
		shortDesc: "Summons Too Slow",
	},

	robberyatak: {
		name: "Robbery Atak",
		shortDesc: "Me First",
	},

	assistantbreakswall: {
		name: "Assistant Breaks Wall",
		shortDesc: "Summons Meowsa",
	},

	abilityanulation: {
		name: "Ability Anulation",
		shortDesc: "Summons Yiik Out",
	},

	quicksacrifice: {
		name: "Quick Sacrifice",
		shortDesc: "Summons Destiny Bond",
	},
	
};

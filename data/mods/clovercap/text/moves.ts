export const MovesText: {[k: string]: ModdedMoveText} = {
	bulletseed: {
		inherit: true,
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is a Grass-type, each hit has a 1/16 chance to apply Leech Seeds.",
		shortDesc: "Hits 2-5 times. Grass-type: 1/16 odds to Leech Seed per hit.",
	},
	grassyterrain: {
		name: "Grassy Terrain",
		desc: "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.3, the power of Bulldoze, Earthquake, Earth Power and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
		shortDesc: "5 turns. Ground: +Grass power, +1/16 max HP.",
	},
	needlearm: {
		inherit: true,
		desc: "Has a 50% chance to set Spikes.",
		shortDesc: "50% chance to set Spikes.",
	},
	seedbomb: {
		inherit: true,
		desc: "If the user is a Grass-type, has a 30% chance to apply Leech Seeds.",
		shortDesc: "Grass-type users have a 30% chance to Leech Seed.",
	},
	xscissor: {
		inherit: true,
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
	},
	smellingsalts: {
		inherit: true,
		desc: "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis. Has a 10% chance of paralyzing the opponent on hit.",
		shortDesc: "Power doubles if target is paralyzed, and cures it. 10% chance to paralyze.",
	},
	razorwind: {
		inherit: true,
		desc: "Guaranteed to land a critical hit.",
		shortDesc: "Always crits.",
	},
	rototiller: {
		inherit: true,
		desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sandstorm, this move raises the user's Attack and Special Attack by 2 stages.",
		shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sandstorm.",
	},
	skyuppercut: {
		inherit: true,
		desc: "This move is neutrally effective on Flying-type Pokemon. This move can hit Pokemon that are using Bounce, Fly, or Sky Drop.",
		shortDesc: "Neutral on Flying. Can hit Pokemon using Bounce, Fly, or Sky Drop.",
	},
	sonicboom: {
		name: "Sonic Boom",
		desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.",
		shortDesc: "User loses 50% max HP. Hits adjacent Pokemon.",

		damage: "  ([POKEMON] cut its own HP to power up its move!)",
	},
	geargrind: {
		inherit: true,
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Both hits individually have a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "Hits 2 times in one turn. 30% chance to lower Def.",
	},
	sharpen: {
		inherit: true,
		desc: "Raises the user's Attack by 1 stage. Uses Focus Energy at the same time.",
		shortDesc: "Raises the user's Attack by 1. Applies Focus Energy to the user.",
	},
	mistball: {
		name: "Mist Ball",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
	},
	lusterpurge: {
		name: "Luster Purge",
		desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Def by 1.",
	},
	chargebeam: {
		inherit: true,
		desc: "Has a 100% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Sp. Atk by 1.",
	},
	sleazyspores: {
		inherit: true,
		shortDesc: "Lowers Speed of foes by 1 on switch-in. Grass-type Pokemon remove it on switch-in.",
		desc: "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is immune to powder moves. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog. Grass-type Pokemon, upon switching in, will remove the hazard.",
	},
};

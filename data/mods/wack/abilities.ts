export const Abilities: {[k: string]: ModdedAbilityData} = {
	darklife: {
		inherit: true,
		isNonstandard: null,
	},
	memetic: {
		inherit: true,
		isNonstandard: null,
	},
	isolation: {
		inherit: true,
		isNonstandard: null,
	},
	acidrain: {
		inherit: true,
		isNonstandard: null,
	},
	ethereal: {
		inherit: true,
		isNonstandard: null,
	},
	mozart: {
		inherit: true,
		isNonstandard: null,
	},
	pride: {
		inherit: true,
		isNonstandard: null,
	},
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	vespertine: {
		inherit: true,
		isNonstandard: null,
	},
	acidrush: {
		inherit: true,
		isNonstandard: null,
	},
	headache: {
		inherit: true,
		isNonstandard: null,
	},
	windate: {
		inherit: true,
		isNonstandard: null,
	},
	immolate: {
		inherit: true,
		isNonstandard: null,
	},
	sunbathe: {
		inherit: true,
		isNonstandard: null,
	},
	snowrush: {
		inherit: true,
		isNonstandard: null,
	},
	magicate: {
		inherit: true,
		isNonstandard: null,
	},
	oasis: {
		inherit: true,
		isNonstandard: null,
	},
	winterforce: {
		inherit: true,
		isNonstandard: null,
	},
	evaporate: {
		inherit: true,
		isNonstandard: null,
	},
	berserker: {
		inherit: true,
		isNonstandard: null,
	},
	martialate: {
		inherit: true,
		isNonstandard: null,
	},
	machinate: {
		inherit: true,
		isNonstandard: null,
	},
	furiousfeet: {
		inherit: true,
		isNonstandard: null,
	},
	thicktail: {
		inherit: true,
		isNonstandard: null,
	},
	sceptic: {
		inherit: true,
		isNonstandard: null,
	},
	coldblooded: {
		inherit: true,
		isNonstandard: null,
	},
	lodestone: {
		inherit: true,
		isNonstandard: null,
	},
	vaporize: {
		inherit: true,
		isNonstandard: null,
	},
	firewall: {
		inherit: true,
		isNonstandard: null,
	},
	focus: {
		inherit: true,
		isNonstandard: null,
	},
	shadowcall: {
		inherit: true,
		isNonstandard: null,
	},
	wacky: {
		inherit: true,
		isNonstandard: null,
	},
	hydrate: {
		inherit: true,
		isNonstandard: null,
	},
	sugarrush: {
		inherit: true,
		isNonstandard: null,
	},
	vacuum: {
		inherit: true,
		isNonstandard: null,
	},
	solarforce: {
		inherit: true,
		isNonstandard: null,
	},
	ionate: {
		inherit: true,
		isNonstandard: null,
	},
	graze: {
		inherit: true,
		isNonstandard: null,
	},
	pro: {
		inherit: true,
		isNonstandard: null,
	},
	builder: {
		inherit: true,
		isNonstandard: null,
	},
	siphon: {
		inherit: true,
		isNonstandard: null,
	},
	bellows: {
		inherit: true,
		isNonstandard: null,
	},
	sadist: {
		inherit: true,
		isNonstandard: null,
	},
	metalworker: {
		inherit: true,
		isNonstandard: null,
	},
	drumroll: {
		inherit: true,
		isNonstandard: null,
	},
	explosive: {
		inherit: true,
		isNonstandard: null,
	},
	dreamcatcher: {
		inherit: true,
		isNonstandard: null,
	},
	irradiated: {
		inherit: true,
		isNonstandard: null,
	},
	safeshield: {
		inherit: true,
		isNonstandard: null,
	},
	choicepower: {
		inherit: true,
		isNonstandard: null,
	},
	cactus: {
		inherit: true,
		isNonstandard: null,
	},
	vastknowledge: {
		inherit: true,
		isNonstandard: null,
	},
	neutral: {
		inherit: true,
		isNonstandard: null,
	},
	rubberboost: {
		inherit: true,
		isNonstandard: null,
	},
	activecurrent: {
		inherit: true,
		isNonstandard: null,
	},
	triggered: {
		inherit: true,
		isNonstandard: null,
	},
	glitchboost: {
		inherit: true,
		isNonstandard: null,
	},
	thunderstorm: {
		inherit: true,
		isNonstandard: null,
	},
	flytrap: {
		inherit: true,
		isNonstandard: null,
	},
	wishmaker: {
		inherit: true,
		isNonstandard: null,
	},
	burningdisease: {
		inherit: true,
		isNonstandard: null,
	},
	computerbug: {
		inherit: true,
		isNonstandard: null,
	},
	trashpile: {
		inherit: true,
		isNonstandard: null,
	},
	godsendurance: {
		inherit: true,
		isNonstandard: null,
	},
	souleater: {
		inherit: true,
		isNonstandard: null,
	},
	/** Wack abilities that have their name taken by Clover */
	turbine: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Wind') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Turbine');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Wind' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Turbine');
				}
				return this.effectState.target;
			}
		},
		name: "Turbine",
		shortDesc: "Draws in all Wind-type moves to up Sp. Attack.",
		desc: "Draws in all Wind-type moves to up Sp. Attack.",
		isBreakable: true,
		isNonstandard: null,
	},
	constrictor: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.volatileStatus === 'partiallytrapped') {
				this.debug('Constrictor boost');
				return this.chainModify(1.3);
			}
		},
		name: "Constrictor",
		shortDesc: "Boosts the power of trapping moves.",
		desc: "Boosts the power of trapping moves.",
		isBreakable: false,
		isNonstandard: null,
	},
	breakdown: {	/** Same as in data/abilities.ts */
		inherit: true,
		isNonstandard: null,
	},
	cacophony: {
		inherit: true,
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Cacophony boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onTryHit(target, source, move) {},
		onAllyTryHitSide(target, source, move) {},
		name: "Cacophony",
		shortDesc: "Boosts the power of sound based moves.",
		desc: "Boosts the power of sound based moves.",
		isBreakable: false,
		isNonstandard: null,
	},
	balance: {		/** Same as in data/abilities.ts */
		inherit: true,
		shortDesc: "This pokemon's not very effective moves are boosted and super effective moves against it are decreased.",
		desc: "This pokemon's not very effective moves are boosted and super effective moves against it are decreased.",
		isNonstandard: null,
	},
	detonator: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (move.selfdestruct) delete move.selfdestruct;
		},
		onHit(target, source, move) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(move.id)) {
				this.directDamage(source.maxhp / 5);
			}
		},
		onBasePower(basePower, attacker, defender, move) {},
		name: "Detonator",
		shortDesc: "Explosion don't kill, 1/5 max HP recoil.",
		desc: "Explosion moves do not kill the user, just recoil.",
		isNonstandard: null,
	},
	/**Infected somehow exists in 'data/text/abilities.ts' but nowhere else, doing this just to change the descs in Wack*/
	infected: {
		inherit: true,
		name: "Infected",
		shortDesc: "Contact spreads this Ability. Dmgs non-Zombie and Virus types.",
		desc: "Contact spreads this Ability. Dmgs non-Zombie and Virus types.",
		isNonstandard: "Future" /** TODO */
	},
};
export const Abilities: {[k: string]: ModdedAbilityData} = {
	/* Modified Abilities */
	disguise: {
		inherit: true,
		isNonstandard: null,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) || target.transformed) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['mimikyu', 'mimikyutotem', 'sabsute'].includes(target.species.id) || target.transformed) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem', 'sabsute'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'mimikyutotem' ?
					'Mimikyu-Busted-Totem'	:
					pokemon.species.id === 'sabsute' ?
						'Sabsute-Busted' :
						'Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
	},
	/* Enabled Abilities */
	dragonsmaw: {
		inherit: true,
		isNonstandard: null,
	},
	/* Clover CAP Abilities */
	cakeveil: {
		inherit: true,
		isNonstandard: null,
	},
	rusepower: {
		inherit: true,
		isNonstandard: null,
	},
	omniscience: {
		inherit: true,
		isNonstandard: null,
	},
	oldschool: {
		inherit: true,
		isNonstandard: null,
	},
	wholesome100: {
		inherit: true,
		isNonstandard: null,
	},
	spookyaura: {
		inherit: true,
		isNonstandard: null,
	},
	tetanus: {
		inherit: true,
		isNonstandard: null,
	},
	colonoscopy: {
		inherit: true,
		isNonstandard: null,
	},
	hewillbedragon: {
		inherit: true,
		isNonstandard: null,
	},
	blueblood: {
		inherit: true,
		isNonstandard: null,
	},
	shavedice: {
		inherit: true,
		isNonstandard: null,
	},
	temperamental: {
		inherit: true,
		isNonstandard: null,
	},
	beamboost: {
		inherit: true,
		isNonstandard: null,
	},
	overeager: {
		inherit: true,
		isNonstandard: null,
	},
	overeagerest: {
		inherit: true,
		isNonstandard: null,
	},
	swarming: {
		inherit: true,
		isNonstandard: null,
	},
	stoneflesh: {
		inherit: true,
		isNonstandard: null,
	},
	sousaphone: {
		inherit: true,
		isNonstandard: null,
	},
	spincleaner: {
		inherit: true,
		isNonstandard: null,
	},
	kinglymajesty: {
		inherit: true,
		isNonstandard: null,
	},
	shitbugtactics: {
		inherit: true,
		isNonstandard: null,
	},
	bigbrain: {
		inherit: true,
		isNonstandard: null,
	},
	dispenser: {
		inherit: true,
		isNonstandard: null,
	},
	leech: {
		inherit: true,
		isNonstandard: null,
	},
	supportive: {
		inherit: true,
		isNonstandard: null,
	},
	bonerzoner: {
		inherit: true,
		isNonstandard: null,
	},
	eclipse: {
		inherit: true,
		isNonstandard: null,
	},
	chording: {
		inherit: true,
		isNonstandard: null,
	},
	fogofwar: {
		inherit: true,
		isNonstandard: null,
	},
	jihad: {
		inherit: true,
		isNonstandard: null,
	},
	bathtime: {
		inherit: true,
		isNonstandard: null,
	},
	stopsign: {
		inherit: true,
		isNonstandard: null,
	},
	stormshelter: {
		inherit: true,
		isNonstandard: null,
	},
	zenmonke: {
		inherit: true,
		isNonstandard: null,
	},
	pairoswrath: {
		inherit: true,
		isNonstandard: null,
	},
};

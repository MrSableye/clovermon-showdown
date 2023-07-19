export const Conditions: {[k: string]: ModdedConditionData} = {
	slp: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'slp', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'slp', '[from] move: ' + sourceEffect.name);
			} else {
				this.add('-status', target, 'slp');
			}
			// 1-3 turns / 3-5 turns if the pokemon has the item Comfy Pillow
			this.effectState.startTime = this.random(2, 5);
			if (target.hasItem('comfypillow')) {
				this.effectState.time = this.effectState.startTime + 2;
			} else {
				this.effectState.time = this.effectState.startTime;
			}

			if (target.removeVolatile('nightmare')) {
				this.add('-end', target, 'Nightmare', '[silent]');
			}
		},
	},
	par: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility(['quickfeet', 'paralysisheal']) && !pokemon.hasItem('limbershoes')) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
	},
	raindance: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'RainDance', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'RainDance', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'RainDance');
			}
		},
	},
	hail: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'Hail', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('hail')) {
				return this.modify(def, 1.5);
			}
		},
	},
	sunnyday: {
		inherit: true,
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'SunnyDay', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire' || move.type === 'Light') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
	},
	sandstorm: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'Sandstorm', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'Sandstorm', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Sandstorm');
			}
		},
	},
	snow: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'Snow', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'Snow', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Snow');
			}
		},
	},
	midnight: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'Midnight', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'Midnight', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Midnight');
			}
		},
	},
	acidrain: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'AcidRain', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'AcidRain', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'AcidRain');
			}
		},
	},
	bladerain: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.effectState.duration = 0;
				this.add('-weather', 'BladeRain', '[from] ability: ' + effect.name, '[of] ' + source);
			} else if (effect?.effectType === 'Item') {
				this.effectState.duration = 4;
				this.add('-weather', 'BladeRain', '[from] item: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'BladeRain');
			}
		},
	},
}
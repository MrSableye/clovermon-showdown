export const Conditions: {[k: string]: ModdedConditionData} = {
	/* Modified conditions */
	gem: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify(1.5);
		},
	},

	// Clover Conditions
	backdraft: {
		duration: 2,
		onSideStart(side) {
			this.add('-sidestart', side, 'Backdraft');
		},
		onModifySpe(spe, pokemon) {
			return this.chainModify(2);
		},
		onSideResidualOrder: 26,
		onSideResidualSubOrder: 5,
		onSideEnd(side) {
			this.add('-sideend', side, 'Backdraft');
		},
	},


	lootable: {
		// this is a slot condition
		name: 'Lootable',
		onSwap(target) {
			target.addVolatile('focusenergy');
			const oldAbility = target.setAbility('serenegrace');
			if (oldAbility) {
				this.add('-activate', target, 'ability: Serene Grace', this.dex.abilities.get(oldAbility).name);
			}
			target.side.removeSlotCondition(target, 'lootable');
		},
	},
	densefog: {
		name: 'DenseFog',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			return 5;
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.dex.moves.get(moveSlot.move).category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'DenseFog', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'DenseFog');
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	bound: {
		name: 'bound',
		duration: 2,
		onBeforeMovePriority: 4,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'bound');
			return false;
		},
	},
	buried: {
		name: 'buried',
		duration: 2,
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[buried]');
		},
		onTrapPokemon(pokemon) {
			if (this.effectState.source?.isActive) pokemon.tryTrap();
		},
	},
	temptrapped: {
		name: 'temptrapped',
		duration: 2,
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[temptrapped]');
		},
		onTrapPokemon(pokemon) {
			if (this.effectState.source?.isActive) pokemon.tryTrap();
		},
	},
};

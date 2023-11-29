export const Conditions: {[k: string]: ModdedConditionData} = {
	raindance: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Vanilla') {
				this.debug('rain vanilla boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Chocolate') {
				this.debug('rain chocolate suppress');
				return this.chainModify(0.5);
			}
		},
	},
	sunnyday: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.id === 'hydrosteam' && !attacker.hasItem('utilityumbrella')) {
				this.debug('Sunny Day Hydro Steam boost');
				return this.chainModify(1.5);
			}
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Chocolate') {
				this.debug('Sunny Day chocolate boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Vanilla') {
				this.debug('Sunny Day vanilla suppress');
				return this.chainModify(0.5);
			}
		},
	},
	sandstorm: {
		inherit: true,
		onModifySpD() {},
	},
};

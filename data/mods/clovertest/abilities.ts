export const Abilities: { [k: string]: ModdedAbilityData } = {
	puppeteer: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Bug') {
				this.add('-immune', target, '[from] ability: Puppeteer');
				return null;
			}
		},
	},
	presage: {
		name: "Presage",
		onBeforeMove(source, target, move) {
			const allowedStatusMoves = ['shoreup', 'auroraveil', 'morningsun', 'synthesis', 'moonlight'];
			if (move.category === 'Status' && !allowedStatusMoves.includes(move.id)) return;
			const sunMoves = ['solarbeam', 'solarblaade', 'morningsun', 'synthesis', 'moonlight'];
			const rainMoves = ['thunder', 'hurricane'];
			const hailMoves = ['auroraveil'];
			const sandMoves = ['shoreup'];
			const isInRain = ['raindance', 'primordialsea'].includes(target.effectiveWeather());
			const isInSun = ['sunnyday', 'desolateland'].includes(target.effectiveWeather());
			const isInHail = ['hail'].includes(target.effectiveWeather());
			const isInSandstorm = ['sandstorm'].includes(target.effectiveWeather());

			if (!isInSun && (sunMoves.includes(move.id) || move.type === 'Fire')) {
				this.field.setWeather('sunnyday');
			} else if (!isInRain && (rainMoves.includes(move.id) || move.type === 'Water')) {
				this.field.setWeather('raindance');
			} else if (!isInHail && (hailMoves.includes(move.id) || move.type === 'Ice')) {
				this.field.setWeather('hail');
			} else if (!isInSandstorm && (sandMoves.includes(move.id) || move.type === 'Rock')) {
				this.field.setWeather('sandstorm');
			} else if (move.type === 'Normal' && move.id !== 'weatherball') {
				this.field.clearWeather();
			}

			if (source.transformed) return;
			if (source.baseSpecies.baseSpecies === 'Acufront') {
				let forme = null;
				switch (source.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (source.species.id !== 'acufrontf') forme = 'Acufront-F';
					break;
				case 'raindance':
				case 'primordialsea':
					if (source.species.id !== 'acufrontw') forme = 'Acufront-W';
					break;
				case 'hail':
					if (source.species.id !== 'acufronti') forme = 'Acufront-I';
					break;
				case 'sandstorm':
					if (source.species.id !== 'acufronts') forme = 'Acufront-S';
					break;
				default:
					if (source.species.id !== 'acufront') forme = 'Acufront';
					break;
				}
				if (source.isActive && forme) {
					source.formeChange(forme, this.effect, false, '[msg]');
				}
			}
		},
		onModifyMovePriority: -6969,
		onModifyMove(move, source) {
			if (move.id !== 'weatherball') return;
			if (!this.field.effectiveWeather().length) return;
			move.basePower = 150;
		},
		onAfterMoveSecondarySelf(source, target, move) {
			this.field.clearWeather();
		},
		onUpdate(pokemon) {
			if (pokemon.transformed) return;
			if (pokemon.baseSpecies.baseSpecies === 'Acufront') {
				let forme = null;
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (pokemon.species.id !== 'acufrontf') forme = 'Acufront-F';
					break;
				case 'raindance':
				case 'primordialsea':
					if (pokemon.species.id !== 'acufrontw') forme = 'Acufront-W';
					break;
				case 'hail':
					if (pokemon.species.id !== 'acufronti') forme = 'Acufront-I';
					break;
				case 'sandstorm':
					if (pokemon.species.id !== 'acufronts') forme = 'Acufront-S';
					break;
				default:
					if (pokemon.species.id !== 'acufront') forme = 'Acufront';
					break;
				}
				if (pokemon.isActive && forme) {
					pokemon.formeChange(forme, this.effect, false, '[msg]');
				}
			}
		},
	},
};

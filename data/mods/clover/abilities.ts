export const Abilities: {[k: string]: ModdedAbilityData} = {
	/* Disabled abilities */
	asoneglastrier: {
		inherit: true,
		isNonstandard: "Past",
	},
	asonespectrier: {
		inherit: true,
		isNonstandard: "Past",
	},
	battlebond: {
		inherit: true,
		isNonstandard: "Past",
	},
	chillingneigh: {
		inherit: true,
		isNonstandard: "Past",
	},
	cottondown: {
		inherit: true,
		isNonstandard: "Past",
	},
	dauntlessshield: {
		inherit: true,
		isNonstandard: "Past",
	},
	desolateland: {
		inherit: true,
		isNonstandard: "Past",
	},
	dragonsmaw: {
		inherit: true,
		isNonstandard: "Past",
	},
	gorillatactics: {
		inherit: true,
		isNonstandard: "Past",
	},
	grimneigh: {
		inherit: true,
		isNonstandard: "Past",
	},
	gulpmissile: {
		inherit: true,
		isNonstandard: "Past",
	},
	honeygather: {
		inherit: true,
		isNonstandard: "Past",
	},
	hungerswitch: {
		inherit: true,
		isNonstandard: "Past",
	},
	iceface: {
		inherit: true,
		isNonstandard: "Past",
	},
	intrepidsword: {
		inherit: true,
		isNonstandard: "Past",
	},
	mimicry: {
		inherit: true,
		isNonstandard: "Past",
	},
	mirrorarmor: {
		inherit: true,
		isNonstandard: "Past",
	},
	mountaineer: {
		inherit: true,
		isNonstandard: "Future",
	},
	multitype: {
		inherit: true,
		isNonstandard: "Past",
	},
	noability: {
		inherit: true,
		isNonstandard: "Past",
	},
	parentalbond: {
		inherit: true,
		isNonstandard: "Past",
	},
	pastelveil: {
		inherit: true,
		isNonstandard: "Past",
	},
	perishbody: {
		inherit: true,
		isNonstandard: "Past",
	},
	persistent: {
		inherit: true,
		isNonstandard: "Future",
	},
	powerconstruct: {
		inherit: true,
		isNonstandard: "Past",
	},
	primordialsea: {
		inherit: true,
		isNonstandard: "Past",
	},
	propellertail: {
		inherit: true,
		isNonstandard: "Past",
	},
	punkrock: {
		inherit: true,
		isNonstandard: "Past",
	},
	ripen: {
		inherit: true,
		isNonstandard: "Past",
	},
	rkssystem: {
		inherit: true,
		isNonstandard: "Past",
	},
	sandspit: {
		inherit: true,
		isNonstandard: "Past",
	},
	schooling: {
		inherit: true,
		isNonstandard: "Past",
	},
	screencleaner: {
		inherit: true,
		isNonstandard: "Past",
	},
	shieldsdown: {
		inherit: true,
		isNonstandard: "Past",
	},
	stancechange: {
		inherit: true,
		isNonstandard: "Past",
	},
	steelyspirit: {
		inherit: true,
		isNonstandard: "Past",
	},
	transistor: {
		inherit: true,
		isNonstandard: "Past",
	},
	wanderingspirit: {
		inherit: true,
		isNonstandard: "Past",
	},
	zenmode: {
		inherit: true,
		isNonstandard: "Past",
	},
	/* Modified abilities */
	disguise: {
		inherit: true,
		isNonstandard: "CAP", // TODO: Cap-only
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
	flowergift: {
		inherit: true,
		onAllyModifyAtk(atk, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onAllyModifySpD(spd, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
	},
	forecast: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.transformed) return;
			if (pokemon.baseSpecies.baseSpecies === 'Castform') {
				let forme = null;
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
					break;
				case 'raindance':
				case 'primordialsea':
					if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
					break;
				case 'hail':
					if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
					break;
				default:
					if (pokemon.species.id !== 'castform') forme = 'Castform';
					break;
				}
				if (pokemon.isActive && forme) {
					pokemon.formeChange(forme, this.effect, false, '[msg]');
				}
			} else if (pokemon.baseSpecies.baseSpecies === 'Acufront') {
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
	galewings: {
		inherit: true,
		shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying') return priority + 1;
		},
	},
	illuminate: {
		inherit: true,
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		rating: 3,
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('illuminate - enhancing accuracy');
			return this.chainModify([0x14CD, 0x1000]);
		},
	},
	illusion: {
		inherit: true,
		onBeforeSwitchIn(pokemon) { // TODO: Cap-only
			pokemon.illusion = null;
			// yes, you can Illusion an active pokemon but only if it's to your right
			for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				const possibleTarget = pokemon.side.pokemon[i];
				if (!possibleTarget.fainted) {
					pokemon.illusion = possibleTarget;
					break;
				}
			}

			if (pokemon.illusion) {
				const amogusIndex = pokemon.moves.indexOf('amogus');
				if (amogusIndex < 0) return;
				const replacementMove = Dex.moves.get(pokemon.illusion?.moves[0]);

				if (replacementMove) {
					pokemon.moveSlots[amogusIndex] = {
						move: replacementMove.name,
						id: replacementMove.id,
						pp: replacementMove.pp,
						maxpp: replacementMove.pp,
						target: replacementMove.target,
						disabled: false,
						used: false,
						virtual: true,
					};

					pokemon.abilityState.replacedMoveIndex = amogusIndex;
				}
			}
		},
		onTryMove(source, target, move) {
			const sourceMoveIndex = source.moveSlots.findIndex((moveSlot) => moveSlot.id === move.id);
			const moveIndex = source.abilityState.replacedMoveIndex;
			if (!source.illusion && moveIndex !== undefined && moveIndex === sourceMoveIndex) {
				const amogusMove = Dex.moves.get('amogus');

				source.moveSlots[moveIndex] = {
					move: amogusMove.name,
					id: amogusMove.id,
					pp: amogusMove.pp,
					maxpp: amogusMove.pp,
					target: amogusMove.target,
					disabled: false,
					used: false,
				};

				source.abilityState.replacedMoveIndex = undefined;

				this.actions.useMove('amogus', source, target);

				return null;
			}
		},
	},
	liquidooze: {
		inherit: true,
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			const canOoze = ['drain', 'leechseed', 'strengthsap', 'livewire']; // TODO: Cap-only
			if (canOoze.includes(effect.id)) {
				this.damage(damage);
				return 0;
			}
		},
	},
	protean: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
	},
	soundproof: {
		inherit: true,
		onTryHit(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Soundproof');
				return null;
			}
		},
	},
	trace: {
		inherit: true,
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode', 'zenmonke', // TODO: Cap-only
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			pokemon.setAbility(ability);
		},
	},
	wonderguard: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Wonder Guard');
				}
				return null;
			}
		},
	},
	/* Clover Exclusive Abilities */
	adminabuse: {
		name: "Admin Abuse",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.hammer) {
				this.debug('Admin Abuse boost');
				return this.chainModify(1.2);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.flags.hammer) {
				if (move.recoil) delete move.recoil;
				if (move.self && move.self.boosts) {
					this.debug('eliminating possible stat drops on the user');
					Object.entries(move.self.boosts).forEach(([key, value]) => {
						if (value && value < 0 && move?.self?.boosts) {
							delete (move.self.boosts as any)[key];
						}
					});
				}
			}
		},
		rating: 4,
	},
	anability: {
		name: "An Ability",
		rating: 0,
	},
	anyability: {
		name: "Any Ability",
		onStart(pokemon) {
			const bannedAbilities = ['wonderguard', 'trace', 'forecast', 'comatose', 'artificial', 'anability', 'anyability'];
			const abilityList = Object.values(this.dex.data.Abilities)
				.filter((ability) => !bannedAbilities.includes(this.toID(ability.name)))
				.filter((ability) => !ability.isNonstandard)
				.map((ability) => this.toID(ability.name));
			const randomAbility = this.sample(abilityList);

			if (randomAbility) {
				const oldAbility = pokemon.setAbility(randomAbility);

				if (oldAbility) {
					this.add('-ability', pokemon, randomAbility, '[from] move: Any Ability');
					return;
				}
			}

			return false;
		},
		rating: 4,
	},
	bigguy: {
		name: "Big Guy",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Big Guy');
			this.field.addPseudoWeather('gravity');
		},
		rating: 4,
	},
	blademaster: {
		name: "Blademaster",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.blade) {
				this.debug('Blademaster boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onModifyCritRatio(critRatio, target, source, move) {
			if (target && move.flags.blade) return critRatio + 1;
		},
		rating: 4,
	},
	boombox: {
		name: "Boombox",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Boombox boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		rating: 3,
	},
	bonezone: {
		name: "Bone Zone",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Bone Zone');
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (move.flags.bone) {
				this.dex.types.all().forEach(({name}) => {
					if (!move.ignoreImmunity) move.ignoreImmunity = {};
					if (move.ignoreImmunity !== true) {
						move.ignoreImmunity[name] = true;
					}
				});
			}
		},
		rating: 3.5,
	},
	concert: {
		name: "Concert",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Concert');
		},
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			const targets = this.sides.flatMap((side) => side.allies(true));
			for (const target of targets) {
				if (!target || !target.hp || pokemon === target) continue;
				if (!target.hasAbility('soundproof')) {
					this.damage(target.baseMaxhp / 16, target, pokemon);
				}
			}
		},
		rating: 3,
	},
	degenerate: {
		name: "Degenerate",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dark';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.type === 'Dark' || move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		rating: 4,
	},
	degradation: {
		name: "Degradation",
		onAnyEffectiveness(typemod, target, type, move) {
			const degradationUser = this.effectState.target;

			if (degradationUser !== this.activePokemon) return;

			if (move.type === 'Dark' && type === 'Normal') {
				return 1;
			}
		},
		rating: 3,
	},
	flareheal: {
		name: "Flare Heal",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.status === 'brn' && move.id !== 'facade') {
				return this.chainModify(2);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.maxhp / 8);
				if (this.toID(target.side.name).includes('doomwillbefallall')) {
					this.add('-message', `${target.side.name} is cringe!`);
					this.add('-message', `${target.side.name} still wets the bed!`);
					this.add('-message', `${target.side.name} sharted!`);
				}
				return false;
			}
		},
		rating: 4,
	},
	ghostnote: {
		name: "Ghost Note",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Ghost';
			}
		},
		rating: 2,
	},
	gradient: {
		name: "Gradient",
		onStart(pokemon) {
			const possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && pokemon.isAdjacent(foeActive));
			let rand = 0;
			if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
			const target = possibleTargets[rand];
			if (target && target.species) {
				const color = target.species.color;
				const colorType: Record<string, string> = {
					red: 'Fire',
					blue: 'Water',
					yellow: 'Electric',
					green: 'Grass',
					black: 'Dark',
					brown: 'Ground',
					purple: 'Poison',
					gray: 'Steel',
					white: 'Flying',
					pink: 'Fairy',
				};
				const type = colorType[this.toID(color)];
				if (type) {
					const typeAdded = pokemon.addType(type);
					if (!typeAdded) return false;
					this.add('-start', pokemon, 'typeadd', type, '[from] ability: Gradient');
				}
			}
		},
		rating: 2,
	},
	hydrophile: {
		name: "Hydrophile",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Hydrophile boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Hydrophile boost');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
	},
	inversion: {
		name: "Inversion",
		onStart(source) {
			this.field.addPseudoWeather('inverseroom');
		},
		rating: 2.5,
	},
	jewelry: {
		name: "Jewelry",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.item) return;
			let possibleMoves = pokemon.moveSlots.filter((moveSlot) => {
				const move = this.dex.moves.get(moveSlot.move);

				return move.category === 'Physical' || move.category === 'Special';
			});

			if (possibleMoves.length < 1) {
				possibleMoves = pokemon.moveSlots;
			}

			const randomMoveSlot = this.sample(possibleMoves);

			if (randomMoveSlot) {
				const randomMove = this.dex.moves.get(randomMoveSlot.move);
				const itemText = `${randomMove.type} Gem`;
				const item = this.dex.items.get(itemText);
				if (pokemon.setItem(item)) {
					this.add('-item', pokemon, item, '[from] ability: Jewelry');
				}
			}
		},
		rating: 3.5,
	},
	madman: {
		name: "Madman",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('confusion');
				}
			}
		},
		rating: 3,
	},
	moreroom: {
		name: "More Room",
		rating: 2.5,
	},
	pollution: {
		name: "Pollution",
		onAnyEffectiveness(typemod, target, type, move) {
			const pollutionUser = this.effectState.target;

			if (pollutionUser !== this.activePokemon) return;

			if (move.type === 'Poison' && type === 'Water') {
				return 1;
			}
		},
		rating: 3,
	},
	pozzed: {
		name: "Pozzed",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Poison') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Pozzed');
				}
				return null;
			}
		},
		rating: 3.5,
	},
	puppeteer: {
		name: "Puppeteer",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Puppeteer boost');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
	},
	showerpower: {
		name: "Shower Power",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		rating: 2,
	},
	striker: {
		name: "Striker",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags.kick) {
				this.debug('Striker boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move.flags.kick) {
				this.debug('Striker - ensuring perfect accuracy');
				return true;
			}
			return accuracy;
		},
		rating: 3,
	},
	suddenly: {
		name: "Suddenly",
		onChargeMove(pokemon, target, move) {
			this.debug('suddenly - remove charge turn for ' + move.id);
			this.attrLastMove('[still]');
			this.addMove('-anim', pokemon, move.name, target);
			return false; // skip charge turn
		},
		rating: 4,
	},
	waitforit: {
		name: "Wait For It",
		onStart(pokemon) {
			pokemon.addVolatile('waitforit');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['waitforit'];
			this.add('-end', pokemon, 'Wait For It', '[silent]');
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Wait For It');
			},
			onEnd(target) {
				this.boost({
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				});
				this.add('-end', target, 'Wait For It');
			},
		},
		rating: 2,
	},
	woke: {
		name: "Woke",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'woke') {
				return;
			}
			if (move.flags['contact']) {
				const oldAbility = source.setAbility('woke', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Woke', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.25);
		},
		rating: 2,
	},
	woodenguard: {
		name: "Wooden Guard",
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Fire') return this.chainModify(1.5);
			return this.chainModify(0.75);
		},
		rating: 3,
	},
	/* Clover CAP Abilities */
	cakeveil: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
		},
		name: "Cake Veil",
		rating: 4,
		isNonstandard: "CAP",
	},
	rusepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (['Poison', 'Dark'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (['Poison', 'Dark'].includes(move.type)) {
				this.debug('Ruse Power boost');
				return this.chainModify(1.5);
			}
		},
		name: "Ruse Power",
		rating: 5,
		isNonstandard: "CAP",
	},
	omniscience: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Psychic'] = true;
			}
		},
		name: "Omniscience",
		rating: 3,
		num: 113,
		isNonstandard: "CAP",
	},
	oldschool: {
		onBasePowerPriority: 23,
		onModifyCritRatio(critRatio, user, target, move) {
			if (move.critRatio && move.critRatio >= 2) {
				return 5;
			}
		},
		name: "Old School",
		rating: 3,
		isNonstandard: "CAP",
	},
	wholesome100: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				this.add('-immune', target, '[from] ability: Wholesome 100');
				return null;
			}
		},
		name: "Wholesome 100",
		rating: 3.5,
		isNonstandard: "CAP",
	},
	spookyaura: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Spooky Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Ghost') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		isBreakable: false,
		name: "Spooky Aura",
		rating: 3,
		isNonstandard: "CAP",
	},
	tetanus: {
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				source.trySetStatus('tox', target);
			}
		},
		name: "Tetanus",
		rating: 1.5,
		isNonstandard: "CAP",
	},
	colonoscopy: {
		onModifyAtk(atk, pokemon, target, move) {
			if (move?.flags['heal']) return this.chainModify(1.5);
		},
		name: "Colonoscopy",
		rating: 3.5,
		isNonstandard: "CAP",
	},
	hewillbedragon: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Dragon';
				move.aerilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.aerilateBoosted) return this.chainModify([4915, 4096]);
		},
		name: "He Will Be Dragon",
		rating: 4,
		isNonstandard: "CAP",
	},
	blueblood: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				this.boost({atk: 12});
			}
		},
		name: "Blue Blood",
		isNonstandard: "CAP",
	},
	shavedice: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (['Fire', 'Steel', 'Fighting', 'Rock'].includes(move.type)) {
				return this.chainModify(0.5);
			}
		},
		name: "Shaved Ice",
		rating: 2,
		isNonstandard: "CAP",
	},
	temperamental: {
		onResidual(pokemon) {
			if (pokemon.species.baseSpecies !== 'Disbeary' || pokemon.transformed) return;
			const targetForme = pokemon.species.name === 'Disbeary' ? 'Disbeary-Ebil' : 'Disbeary';
			pokemon.formeChange(targetForme);
		},
		name: "Temperamental",
		rating: 1,
		isNonstandard: "CAP",
	},
	beamboost: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (['aurorabeam', 'boltbeam', 'bubblebeam', 'chargebeam', 'eternabeam', 'gazerbeam', 'hyperbeam', 'icebeam', 'meteorbeam', 'moongeistbeam', 'powergem', 'psybeam', 'signalbeam', 'solarbeam', 'solarblade', 'solarblade', 'steelbeam', 'prismaticlaser'].includes(move.id)) {
				this.debug('Beam Boost boost');
				return this.chainModify(1.5);
			}
		},
		name: "Beam Boost",
		isNonstandard: "CAP",
	},
	overeager: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 3;
				move.multihitType = 'overeager';
			}
		},
		onBasePowerPriority: 7,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'overeager' && move.hit > 1) return this.chainModify(0.25);
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'overeager' && move.id === 'secretpower' && move.hit < 3) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Overeager",
		isNonstandard: "CAP",
	},
	overeagerest: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 100;
				move.multihitType = 'overeagerest';
			}
		},
		onBasePowerPriority: 7,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'overeagerest' && move.hit > 1) return this.chainModify(Math.pow(move.hit, 2));
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'overeagerest' && move.id === 'secretpower' && move.hit < 100) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Overeagerest",
		isNonstandard: "CAP",
	},
	swarming: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Jermin' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'jermin') {
					pokemon.formeChange('Jermin-Swarm');
				}
			} else {
				if (pokemon.species.id === 'jerminswarm') {
					pokemon.formeChange('Jermin');
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Jermin' || pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'jermin') {
					pokemon.formeChange('Jermin-Swarm');
				}
			} else {
				if (pokemon.species.id === 'jerminswarm') {
					pokemon.formeChange('Jermin');
				}
			}
		},
		isPermanent: true,
		name: "Swarming",
		rating: 3,
		num: 208,
		isNonstandard: "CAP",
	},
	stoneflesh: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Gargarramer' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'petrify') return;
			const targetForme = (move.id === 'petrify' ? 'Gargarramer' : 'Gargarramer-Awoken');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Stoneflesh",
		rating: 4,
		isNonstandard: "CAP",
	},
	sousaphone: {
		name: "Sousaphone",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Steel';
			}
		},
		rating: 2,
		isNonstandard: "CAP",
	},
	spincleaner: {
		name: "Spin Cleaner",
		onStart(pokemon) {
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge', 'sleazyspores', 'shattershard', 'fragments'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
			}
		},
		isNonstandard: "CAP",
	},
	kinglymajesty: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.side === dazzlingHolder.side || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
				return false;
			}
		},
		name: "Kingly Majesty",
		rating: 2.5,
		isNonstandard: "CAP",
	},
	shitbugtactics: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Shitbug Tactics");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Shitbug Tactics SpA Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Shitbug Tactics",
		rating: 4.5,
		isNonstandard: "CAP",
	},
	bigbrain: {
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Big Brain",
		rating: 5,
		num: 37,
		isNonstandard: "CAP",
	},
	dispenser: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon, source, effect) {
			let activated = false;
			for (const ally of pokemon.alliesAndSelf()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Dispenser');
					activated = true;
				}
				ally.heal(ally.baseMaxhp / 10);
				this.add('-heal', ally, ally.getHealth);
				const moveSlots = ally.moveSlots.filter(move => move.pp < move.maxpp);
				if (moveSlots.length) {
					const moveSlot = this.sample(moveSlots);
					moveSlot.pp += 1;
					if (moveSlot.pp > moveSlot.maxpp) moveSlot.pp = moveSlot.maxpp;
					this.add('-activate', ally, 'ability: Dispenser', moveSlot.move, '[of] ' + pokemon);
				}
			}
		},
		name: "Dispenser",
		rating: 4,
		isNonstandard: "CAP",
	},
	leech: {
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage) {
				this.heal(move.totalDamage / 4, pokemon);
			}
		},
		name: "Leech",
		rating: 3.5,
		isNonstandard: "CAP",
	},
	supportive: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Supportive');
		},
		onAnyTryMove(target, source, move) {
			if (move.mindBlownRecoil || move.recoil || move.selfdestruct) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Supportive', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Supportive",
		rating: 1,
		isNonstandard: "CAP",
	},
	bonerzoner: {
		name: "Boner Zoner",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Boner Zoner');
		},
		onModifyMovePriority: -5,
		onModifyMove(move, attacker, defender) {
			if (move.flags.bone || (move.type === 'Dragon')) {
				this.dex.types.all().forEach(({name}) => {
					if (!move.ignoreImmunity) move.ignoreImmunity = {};
					if (move.ignoreImmunity !== true) {
						move.ignoreImmunity[name] = true;
					}
				});
			}
		},
		rating: 3.5,
		isNonstandard: "CAP",
	},
	eclipse: {
		onStart(source) {
			if (['sunnyday'].includes(source.effectiveWeather())) {
				this.boost({atk: 2, spa: 2});
				this.field.clearWeather();
			}
			if (['desolateland'].includes(source.effectiveWeather())) {
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1});
				this.field.clearWeather();
			}
		},
		name: "Eclipse",
		rating: 4,
		isNonstandard: "CAP",
	},
	chording: {
		name: "Chording",
		onAfterMove(source, target, move) {
			const baseMove = this.dex.moves.get(move.id);
			if (baseMove.category === 'Physical') {
				this.boost({spa: 1});
			} else if (baseMove.category === 'Special') {
				this.boost({atk: 1});
			}
		},
		isNonstandard: "CAP",
	},
	lootable: {
		name: "Lootable",
		onFaint(target) {
			target.side.addSlotCondition(target, 'lootable', target);
		},
		isNonstandard: "CAP",
	},
	asoneblobbos: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One (Blobbos)');
			this.add('-ability', pokemon, 'Pure Power');
			this.add('-ability', pokemon, 'Huge Power');
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(4);
		},
		isPermanent: true,
		name: "As One (Blobbos)",
		isNonstandard: "CAP",
	},
	sharpshooter: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Sharpshooter",
		isNonstandard: "CAP",
	},
	blobbotype: {
		isPermanent: true,
		name: "Blobbotype",
		rating: 4,
		num: 121,
		isNonstandard: "CAP",
		onSwitchIn(source) {
			const type = source.getItem().onPlate;
			if (type) {
				const types = ['Ice', type];
				source.setType(['Ice', type]);
				this.add('-start', source, 'typechange', types.join('/'), '[from] ability: Blobbotype');
			}
		},
	},
	niceface: {
		onStart(pokemon) {
			if (this.field.isTerrain('grassyterrain') && pokemon.species.id === 'blobbosnoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Nice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Blobbos-Nice', this.effect, true);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' && effect.category === 'Physical' &&
				target.species.id === 'blobbosnice' && !target.transformed
			) {
				this.add('-activate', target, 'ability: Nice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'blobbosnice' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'blobbosnice' || target.transformed) return;

			const hitSub = target.volatiles['substitute'] && !move.flags['authentic'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'blobbosnice' && this.effectState.busted) {
				pokemon.formeChange('Blobbos-Noice', this.effect, true);
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectState.target;
			if (!pokemon.hp) return;
			if (this.field.isTerrain('grassyterrain') && pokemon.species.id === 'blobbosnoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Nice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Blobbos-Nice', this.effect, true);
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Nice Face",
		isNonstandard: "CAP",
		rating: 3,
	},
	evasionhax: {
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			return this.chainModify([1, 2]);
		},
		isBreakable: true,
		name: "Evasion Hax",
		rating: 1.5,
		isNonstandard: "CAP",
	},
	nimblemetalbody: {
		onModifyPriority(priority, pokemon, target, move) {
			const momentum = [
				'batonpass', 'uturn', 'flipturn', 'partingshot', 'teleport', 'uturn', 'voltswitch',
			];
			if (momentum.includes(move.id)) return priority + 1;
		},
		name: "Nimble Metal Body",
		rating: 3,
		isNonstandard: "CAP",
	},
	magicalrealm: {
		name: "Magical Realm",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Magical Realm');
			this.field.addPseudoWeather('magicroom');
		},
		rating: 4,
		isNonstandard: "CAP",
	},
	fogofwar: {
		onStart(source) {
			this.field.setWeather('densefog');
		},
		onSourceModifyAccuracy(acc, pokemon) {
			if (this.field.isWeather('densefog')) {
				return this.chainModify(2);
			}
		},
		name: "Fog Of War",
		rating: 4,
		isNonstandard: "CAP",
	},
	jihad: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move.selfdestruct) return priority + 1;
		},
		name: "Jihad",
		isNonstandard: "CAP",
	},
	bathtime: {
		onDamagingHit(damage, target, source, move) {
			if (target !== source && move.type === 'Water') {
				this.damage(source.baseMaxhp, source, target);
				this.damage(source.baseMaxhp, target, target);
			}
		},
		isBreakable: true,
		name: "Bath Time",
		isNonstandard: "CAP",
	},
	uncompetitive: {
		name: "Uncompetitive",
		isPermanent: true,
		isNonstandard: "CAP",
		onImmunity(type) {
			if (type === 'hail') return false;
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('hail')) {
				this.debug('Snow Cloak - decreasing accuracy');
				this.chainModify([3277, 4096]);
			} else if (this.field.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				this.chainModify([3277, 4096]);
			}
			this.debug('brightpowder - decreasing accuracy');
			this.chainModify([3686, 4096]);
			this.debug('lax incense - decreasing accuracy');
			this.chainModify([3686, 4096]);
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 20,
					volatileStatus: 'flinch',
				});
			}
		},
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			} else if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) {
				pokemon.maybeTrapped = true;
			} else if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 10) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			}
		},
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost);
		},
	},
	stopsign: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Stop Sign');
		},
		onAnyTryMove(target, source, move) {
			if (move.selfSwitch) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Stop Sign', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Stop Sign",
		rating: 1,
		isNonstandard: "CAP",
	},
	stormshelter: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail') return false;
		},
		onTryHit(target, source, move) {
			if (['raindance', 'primordialsea'].includes(target.effectiveWeather()) && target !== source && move.type === 'Water') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['sunnyday', 'desolateland'].includes(target.effectiveWeather()) && target !== source && move.type === 'Fire') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['hail'].includes(target.effectiveWeather()) && target !== source && move.type === 'Ice') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['sandstorm'].includes(target.effectiveWeather()) && target !== source && move.type === 'Rock') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			} else if (['deltastream'].includes(target.effectiveWeather()) && target !== source && move.type === 'Flying') {
				this.add('-immune', target, '[from] ability: Storm Shelter');
				return null;
			}
		},
		isBreakable: true,
		name: "Storm Shelter",
		rating: 3,
		isNonstandard: "CAP",
	},
	zenmonke: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Simionach' || pokemon.transformed) return;
			if (pokemon.hp < pokemon.maxhp) {
				if (pokemon.species.id === 'simionach') {
					pokemon.formeChange('Simionach-Zen');
				}
			} else {
				if (pokemon.species.id === 'simionachzen') {
					pokemon.formeChange('Simionach');
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Simionach' ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp < pokemon.maxhp) {
				if (pokemon.species.id === 'simionach') {
					pokemon.formeChange('Simionach-Zen');
				}
			} else {
				if (pokemon.species.id === 'simionachzen') {
					pokemon.formeChange('Simionach');
				}
			}
		},
		isPermanent: true,
		name: "Zen Monke",
		rating: 3,
		isNonstandard: "CAP",
	},


	asoneblobbostherian: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One (Blobbos-Therian)');
			this.add('-ability', pokemon, 'Intimidate');
			this.add('-ability', pokemon, 'Levitate');
			this.effectState.unnerved = true;
		},

		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},

		isPermanent: true,
		name: "As One (Blobbos-Therian)",
		isNonstandard: "CAP",
		rating: 3.5,
	},


	asoneblobbosremembered: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One (Blobbos-Remembered)');
			this.add('-ability', pokemon, 'Flare Heal');
			this.add('-ability', pokemon, 'Magic Guard');
			this.effectState.unnerved = true;
		},

		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock' || effect.id === 'spikes' || effect.id === 'gmaxsteelsurge') {
				return false;
			}
		},

		isPermanent: true,
		isNonstandard: "CAP",
		name: "As One (Blobbos-Remembered)",
		rating: 3.5,
	},

	flipflops: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		onModifySpe(spe, pokemon) {
			if (this.field.getPseudoWeather('inverseroom')) {
				return this.chainModify(2);
			}
		},
		name: "Flip Flops",
		rating: 3.5,
		isNonstandard: "CAP",
	},

	genwunning: {
		name: "Genwunning",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Genwunning');
			this.field.addPseudoWeather('genwunroom');
		},
		rating: 4,
		isNonstandard: "CAP",
	},

	memepower: {
		onAfterMoveSecondarySelf(source, target, move) {
			const targetSlot = target.getSlot();
			if (!move || !target) return;
			if (source.ability !== 'memepower') return;
			if (move.category === 'Status') return;
			if (source.abilityState.hasMemed?.[targetSlot]) return;

			if (!source.abilityState?.hasMemed) source.abilityState.hasMemed = {};
			source.abilityState.hasMemed[targetSlot] = true;

			this.actions.useMove('meme', source, target);
		},
		onResidual(pokemon) {
			pokemon.abilityState.hasMemed = undefined;
		},
		name: "Meme Power",
		rating: 4.5,
		isNonstandard: "CAP",
	},


	godrejection: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(0.125);
			} else if (move.type === 'Dragon') {
				return this.chainModify(0.25);
			}
		},


		onAnyEffectiveness(typemod, target, type, move) {
			const godrejectionUser = this.effectState.target;
			if (godrejectionUser !== this.activePokemon) return;
			if (move.type === 'Dark' && type === 'Fairy') {
				return 1;
			} else if (move.type === 'Fighting' && type === 'Fairy') {
				return 1;
			} else if (move.type === 'Fighting' && type === 'Dragon') {
				return 1;
			} else if (move.type === 'Dark' && type === 'Dragon') {
				return 1;
			}
		},
		isBreakable: true,
		name: "God Rejection",
		rating: 3.5,
		isNonstandard: "CAP",
	},

	allskill: {
		onCriticalHit: false,
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		isBreakable: true,
		isNonstandard: "CAP",
		name: "All Skill",
		rating: 2,
		num: 19,
	},

	artillery: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				return this.chainModify(1.5);
			}
		},
		name: "Artillery",
		isNonstandard: "CAP",
		rating: 3,
		num: 178,
	},
	sneedboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1, accuracy: 1});
			}
		},
		name: "Sneed Boost",
		isNonstandard: "CAP",
		rating: 4.5,
		num: 3,
	},

	armorplate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Steel';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Armor Plate",
		isNonstandard: "CAP",
		rating: 3,
	},

	asonehorse: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Grim Neigh');
			this.add('-ability', pokemon, 'Chilling Neigh');
			this.effectState.unnerved = true;
		},

		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source, source, this.dex.abilities.get('grimneigh'));
				this.boost({atk: length}, source, source, this.dex.abilities.get('chillingneigh'));
			}
		},
		isPermanent: true,
		name: "As One (Horse)",
		isNonstandard: "CAP",
		rating: 3.5,

	},
	copypower: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statName = 'atk';
				let bestStat = 0;
				let s: StatIDExceptHP;
				for (s in source.storedStats) {
					if (source.storedStats[s] > bestStat) {
						statName = s;
						bestStat = source.storedStats[s];
					}
				}
				this.boost({[statName]: length}, source);
				this.add('-ability', source, target.getAbility());
			}
		},
		name: "Copy Power",
		isNonstandard: "CAP",
		rating: 3.5,
		num: 224,
	},
};

export const Moves: { [k: string]: ModdedMoveData } = {
	/* CAP Enabled/Modified Moves */
	aerialace: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, slicing: 1},
	},
	moonblast: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bullet: 1},
	},
	technoblast: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bullet: 1},
	},
	fireblast: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bullet: 1},
	},
	abyssalwave: {
		inherit: true,
		isNonstandard: null,
	},
	fling: {
		inherit: true,
		isNonstandard: null,
	},
	appleacid: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		isNonstandard: null,
		onHit(target) {
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection', 'leafshield',
			];

			const moves = [];
			for (const pokemon of target.side.pokemon) {
				if (pokemon === target) continue;
				for (const moveSlot of pokemon.moveSlots) {
					const moveid = moveSlot.id;
					if (noAssist.includes(moveid)) continue;
					const move = this.dex.moves.get(moveid);
					if (move.isZ || move.isMax) {
						continue;
					}
					moves.push(moveid);
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
	},
	bodypress: {
		inherit: true,
		isNonstandard: null,
	},
	behemothbash: {
		inherit: true,
		isNonstandard: null,
	},
	behemothblade: {
		inherit: true,
		isNonstandard: null,
	},
	boltbeak: {
		inherit: true,
		isNonstandard: null,
	},
	branchpoke: {
		inherit: true,
		isNonstandard: null,
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: null,
	},
	burningjealousy: {
		inherit: true,
		isNonstandard: null,
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: null,
	},
	coaching: {
		inherit: true,
		isNonstandard: null,
	},
	copycat: {
		inherit: true,
		onHit(pokemon) {
			const noCopycat = [
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
	},
	courtchange: {
		inherit: true,
		isNonstandard: null,
	},
	decorate: {
		inherit: true,
		isNonstandard: null,
	},
	dragondarts: {
		inherit: true,
		isNonstandard: null,
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	drumbeating: {
		inherit: true,
		isNonstandard: null,
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: null,
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: null,
	},
	eeriespell: {
		inherit: true,
		isNonstandard: null,
	},
	eternabeam: {
		inherit: true,
		isNonstandard: null,
	},
	expandingforce: {
		inherit: true,
		isNonstandard: null,
	},
	falsesurrender: {
		inherit: true,
		isNonstandard: null,
	},
	fierywrath: {
		inherit: true,
		isNonstandard: null,
	},
	firefang: {
		inherit: true,
		accuracy: 100,
	},
	firstimpression: {
		inherit: true,
		priority: 3,
	},
	inverseroom: {
		inherit: true,
		priority: -6,
		type: "???",
	},
	octazooka: {
		inherit: true,
		basePower: 70,
		accuracy: 100,
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: null,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	flipturn: {
		inherit: true,
		isNonstandard: null,
	},
	freezingglare: {
		inherit: true,
		isNonstandard: null,
	},
	glaciallance: {
		inherit: true,
		isNonstandard: null,
	},
	grassyglide: {
		inherit: true,
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude', 'earthpower'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.id === 'earthpower') {
					this.add('-message', 'In Clover CAP, Earth Power is weakened by Grassy Terrain.');
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
	},
	gravapple: {
		inherit: true,
		isNonstandard: null,
	},
	heartstamp: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: null,
		name: "Heart Stamp",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	hammerarm: {
		inherit: true,
		accuracy: 100,
	},
	icehammer: {
		inherit: true,
		accuracy: 100,
	},
	icefang: {
		inherit: true,
		accuracy: 100,
	},
	jawlock: {
		inherit: true,
		isNonstandard: null,
	},
	judgment: {
		inherit: true, 
		basePower: 120,
		isNonstandard: null,
	},
	junglehealing: {
		inherit: true,
		isNonstandard: null,
	},
	lashout: {
		inherit: true,
		isNonstandard: null,
	},
	lifedew: {
		inherit: true,
		isNonstandard: null,
	},
	lowsweep: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	lusterpurge: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: null,
		name: "Luster Purge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	magicpowder: {
		inherit: true,
		isNonstandard: null,
	},
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
	meteorbeam: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Meteor Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spa: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: null,
		basePower: 125,
		pp: 5,
		onBasePower(basePower, source) {
					if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
						this.debug('misty terrain boost');
						return this.chainModify(2);
					}
				},
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('mistyterrain');
				},
			},
		},
		desc: "User faints. User on Misty Terrain: 2x power. Sets Misty Terrain after hitting.",
		shortDesc: "User faints. User on Misty Terrain: 2x power. Sets Misty Terrain.",
	},
	mistball: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: null,
		name: "Mist Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	multiattack: {
		num: 449,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Multi Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.onMemory) {
				move.type = item.onPlate;
			} else { move.type = this.runEvent('Memory', pokemon, null, move, 'Normal'); }
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	needlearm: {
		inherit: true,
		basePower: 65,
		onHit(target) {
			if (this.randomChance(1, 1)) {
				target.side.addSideCondition('spikes');
			}
		},
		secondary: null,
	},
	noretreat: {
		inherit: true,
		isNonstandard: null,
	},
	swordbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	criticalmass: {
		inherit: true,
		isNonstandard: null,
	},
	extremeedge: {
		inherit: true,
		isNonstandard: null,
	},
	obstruct: {
		inherit: true,
		isNonstandard: null,
	},
	octolock: {
		inherit: true,
		isNonstandard: null,
	},
	overdrive: {
		inherit: true,
		isNonstandard: null,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	poltergeist: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	pyroball: {
		inherit: true,
		isNonstandard: null,
	},
	risingvoltage: {
		inherit: true,
		basePowerCallback(source, target, move) {
					if (this.field.isTerrain('electricterrain') && target.isGrounded()) {
						if (!source.isAlly(target)) this.hint(`${move.name}'s BP increased on grounded target.`);
						return move.basePower * 1.5;
					}
					return move.basePower;
				},
		isNonstandard: null,
	},
	scaleshot: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bullet: 1},
		isNonstandard: null,
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: null,
	},
	seedbomb: {
		inherit: true,
		onHit(target, source) {
			if (source.types.includes('Grass')) {
				if (this.randomChance(3, 10)) {
					target.addVolatile('leechseed');
				}
			}
		},
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		volatileStatus: 'focusenergy',
	},
	smartstrike: {
		inherit: true,
		isNonstandard: null,
		secondary: {
					chance: 100,
					self: {
						boosts: {
							accuracy: 1,
						},
					},
				},
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		isNonstandard: null,
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 80},
		contestType: "Cool",
		},
	growth: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {spa: 1}},
		contestType: "Beautiful",
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: null,
	},
	skittersmack: {
		inherit: true,
		isNonstandard: null,
	},
	smackdown: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) { // TODO: Blobbos cap
				let applies = false;
				if (
					pokemon.hasType('Flying') ||
					pokemon.hasAbility('levitate')) {
					applies = true;
				}
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
	},
	snaptrap: {
		inherit: true,
		isNonstandard: null,
	},
	snipeshot: {
		inherit: true,
		isNonstandard: null,
	},
	solarbeam: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	spiritbreak: {
		inherit: true,
		isNonstandard: null,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	steelbeam: {
		inherit: true,
		isNonstandard: null,
	},
	steelroller: {
		num: 798,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Steel Roller",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
					move.basePower *= 2;
					this.debug('BP doubled in Terrain');
				}
			},
			onHit() {
				this.field.clearTerrain();
			},
			onAfterSubDamage() {
				this.field.clearTerrain();
			},
			target: "normal",
		    type: "Steel",
		    contestType: "Beautiful",
		    isNonstandard: null,
			desc: "Power doubles if the user is grounded and a terrain is active. Removes Terrain.",
			shortDesc: "User on terrain: power doubles and removes terrain.",
		},
	strangesteam: {
		inherit: true,
		isNonstandard: null,
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: null,
	},
	suckerpunch: {
		inherit: true,
		flags: {punch: 1, contact: 1, protect: 1, mirror: 1},
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: null,
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	tarshot: {
		inherit: true,
		isNonstandard: null,
	},
	teatime: {
		inherit: true,
		isNonstandard: null,
	},
	spotlight: {
		inherit: true,
		isNonstandard: null,
	},
	afteryou: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		condition: {
			duration: 3,
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast', 'Fusjahl'].includes(target.baseSpecies.baseSpecies) ||
					['Gengar-Mega', 'Goryannus-Mega'].includes(target.baseSpecies.name)) {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseSpecies.name === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
	},
	thundercage: {
		inherit: true,
		isNonstandard: null,
	},
	thunderfang: {
		inherit: true,
		accuracy: 100,
	},
	thunderouskick: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	trickroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (this.activeMove?.id === 'backroom') {
					return 2;
				}
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	xscissor: {
		inherit: true,
		critRatio: 2,
	},
	weatherball: {
		inherit: true,
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
				move.basePower *= 2;
				break;
			case 'densefog':
				move.basePower *= 2;
				break;
			}
		},
	},
	wickedblow: {
		inherit: true,
		isNonstandard: null,
	},
	wavecrash: {
		inherit: true,
		isNonstandard: null,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		pp: 15,
		willCrit: true,
		secondary: null,
		noSketch: true,
		isNonstandard: null,
	},
	/* CAP Exclusive Moves */
	clobber: {
		inherit: true,
		isNonstandard: null,
	},
	scarletchant: {
		inherit: true,
		isNonstandard: null,
	},
	allaprima: {
		inherit: true,
		isNonstandard: null,
	},
	suffocate: {
		inherit: true,
		isNonstandard: null,
	},
	crusadercrash: {
		inherit: true,
		isNonstandard: null,
	},
	earthshatter: {
		inherit: true,
		isNonstandard: null,
	},
	moregun: {
		inherit: true,
		isNonstandard: null,
	},
	psychofists: {
		inherit: true,
		isNonstandard: null,
	},
	faradaycage: {
		inherit: true,
		isNonstandard: null,
	},
	dragonburst: {
		inherit: true,
		isNonstandard: null,
	},
	rockclock: {
		inherit: true,
		isNonstandard: null,
	},
	blockbuster: {
		inherit: true,
		isNonstandard: null,
	},
	carvingbeak: {
		inherit: true,
		isNonstandard: null,
	},
	awaken: {
		inherit: true,
		isNonstandard: null,
	},
	voltaiccyclone: {
		inherit: true,
		isNonstandard: null,
	},
	boilover: {
		inherit: true,
		isNonstandard: null,
	},
	soulcrusher: {
		inherit: true,
		isNonstandard: null,
	},
	trickstab: {
		inherit: true,
		isNonstandard: null,
	},
	tombstoner: {
		inherit: true,
		isNonstandard: null,
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: null,
	},
	phantomfang: {
		inherit: true,
		isNonstandard: null,
	},
	phasethrough: {
		inherit: true,
		isNonstandard: null,
	},
	coldcutter: {
		inherit: true,
		isNonstandard: null,
	},
	shadowscales: {
		inherit: true,
		isNonstandard: null,
	},
	wingsofcorrection: {
		inherit: true,
		isNonstandard: null,
	},
	brutalpunishment: {
		inherit: true,
		isNonstandard: null,
	},
	cloudbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	gazerbeam: {
		inherit: true,
		isNonstandard: null,
	},
	memepunch: {
		inherit: true,
		isNonstandard: null,
	},
	shinestrike: {
		inherit: true,
		isNonstandard: null,
	},
	petrify: {
		inherit: true,
		isNonstandard: null,
	},
	starseedblast: {
		inherit: true,
		isNonstandard: null,
	},
	brandingblade: {
		inherit: true,
		isNonstandard: null,
	},
	mudmaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	finalhour: {
		inherit: true,
		isNonstandard: null,
	},
	turnabout: {
		inherit: true,
		isNonstandard: null,
	},
	meddymeds: {
		inherit: true,
		isNonstandard: null,
	},
	badeggs: {
		inherit: true,
		isNonstandard: null,
	},
	backdraft: {
		inherit: true,
		isNonstandard: null,
	},
	villify: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearwinter: {
		inherit: true,
		isNonstandard: null,
	},
	shroomsnuggle: {
		inherit: true,
		isNonstandard: null,
	},
	acidreflex: {
		inherit: true,
		isNonstandard: null,
	},
	darkening: {
		inherit: true,
		isNonstandard: null,
	},
	beamblade: {
		inherit: true,
		isNonstandard: null,
	},
	bearhug: {
		inherit: true,
		isNonstandard: null,
	},
	chilipowder: {
		inherit: true,
		isNonstandard: null,
	},
	thunderdrop: {
		inherit: true,
		isNonstandard: null,
	},
	faeblade: {
		inherit: true,
		isNonstandard: null,
	},
	stickytongue: {
		inherit: true,
		isNonstandard: null,
	},
	rocketpunch: {
		inherit: true,
		isNonstandard: null,
	},
	powerwasher: {
		inherit: true,
		isNonstandard: null,
	},
	flakcannon: {
		inherit: true,
		isNonstandard: null,
	},
	blackbomb: {
		inherit: true,
		isNonstandard: null,
	},
	cherrybomb: {
		inherit: true,
		isNonstandard: null,
	},
	crashhopper: {
		inherit: true,
		isNonstandard: null,
	},
	wrapd: {
		inherit: true,
		isNonstandard: null,
	},
	blizzardd: {
		inherit: true,
		isNonstandard: null,
	},
	amnesiad: {
		inherit: true,
		isNonstandard: null,
	},
	hyperbeamd: {
		inherit: true,
		isNonstandard: null,
	},
	fractus: {
		inherit: true,
		isNonstandard: null,
	},
	purge: {
		inherit: true,
		isNonstandard: null,
	},
	extinction: {
		inherit: true,
		isNonstandard: null,
	},
	uproot: {
		inherit: true,
		isNonstandard: null,
	},
	mirageveil: {
		inherit: true,
		isNonstandard: null,
	},
	frostbite: {
		inherit: true,
		isNonstandard: null,
	},
	braindamage: {
		inherit: true,
		isNonstandard: null,
	},
	borebite: {
		inherit: true,
		isNonstandard: null,
	},
	brackishgash: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorcannon: {
		inherit: true,
		isNonstandard: null,
	},
	evocation: {
		inherit: true,
		isNonstandard: null,
	},
	lunarimpact: {
		inherit: true,
		isNonstandard: null,
	},
	flintfang: {
		inherit: true,
		isNonstandard: null,
	},
	calibrate: {
		inherit: true,
		isNonstandard: null,
	},
	razorwind: {
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: null,
	},
	rototiller: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rototiller",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['sandstorm'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	skyuppercut: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 0;
		},
	},
	smellingsalts: {
		inherit: true,
		type: "Fighting",
		secondary: {
			chance: 10,
			status: 'par',
		},
		isNonstandard: null,
	},
	terrainpulse: {
		num: 805,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Terrain Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
			case 'electricterrain':
				move.type = 'Electric';
				break;
			case 'grassyterrain':
				move.type = 'Grass';
				break;
			case 'mistyterrain':
				move.type = 'Fairy';
				break;
			case 'psychicterrain':
				move.type = 'Psychic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
				this.debug('BP doubled in Terrain');
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
	},
	sonicboom: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Sonic Boom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Sonic Boom'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Flying",
		isNonstandard: null,
	},
	geargrind: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
	},
	belch: {
		inherit: true,
		accuracy: 100,
		basePower: 140,
	},
	holdback: {
		inherit: true,
		category: "Special",
	},
	aquastep: {
		inherit: true,
		isNonstandard: "Past",
	},
	armorcannon: {
		inherit: true,
		isNonstandard: "Past",
	},
	axekick: {
		inherit: true,
		isNonstandard: "Past",
	},
	bitterblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	chillingwater: {
		inherit: true,
		isNonstandard: "Past",
	},
	chillyreception: {
		inherit: true,
		isNonstandard: "Past",
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: "Past",
	},
	comeuppance: {
		inherit: true,
		isNonstandard: "Past",
	},
	doodle: {
		inherit: true,
		isNonstandard: "Past",
	},
	doubleshock: {
		inherit: true,
		isNonstandard: "Past",
	},
	electrodrift: {
		inherit: true,
		isNonstandard: "Past",
	},
	filletaway: {
		inherit: true,
		isNonstandard: "Past",
	},
	flowertrick: {
		inherit: true,
		isNonstandard: "Past",
	},
	gigatonhammer: {
		inherit: true,
		isNonstandard: "Past",
	},
	headlongrush: {
		inherit: true,
		isNonstandard: "Past",
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: "Past",
	},
	icespinner: {
		inherit: true,
		isNonstandard: "Past",
	},
	jetpunch: {
		inherit: true,
		isNonstandard: "Past",
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: "Past",
	},
	lastrespects: {
		inherit: true,
		isNonstandard: "Past",
	},
	luminacrash: {
		inherit: true,
		isNonstandard: "Past",
	},
	makeitrain: {
		inherit: true,
		isNonstandard: "Past",
	},
	mortalspin: {
		inherit: true,
		isNonstandard: "Past",
	},
	orderup: {
		inherit: true,
		isNonstandard: "Past",
	},
	populationbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	pounce: {
		inherit: true,
		isNonstandard: "Past",
	},
	ragingbull: {
		inherit: true,
		isNonstandard: "Past",
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: "Past",
	},
	saltcure: {
		inherit: true,
		isNonstandard: "Past",
	},
	shedtail: {
		inherit: true,
		isNonstandard: "Past",
	},
	silktrap: {
		inherit: true,
		isNonstandard: "Past",
	},
	snowscape: {
		inherit: true,
		isNonstandard: "Past",
	},
	spicyextract: {
		inherit: true,
		isNonstandard: "Past",
	},
	spinout: {
		inherit: true,
		isNonstandard: "Past",
	},
	terablast: {
		inherit: true,
		isNonstandard: "Past",
	},
	tidyup: {
		inherit: true,
		isNonstandard: "Past",
	},
	torchsong: {
		inherit: true,
		isNonstandard: "Past",
	},
	trailblaze: {
		inherit: true,
		isNonstandard: "Past",
	},
	tripledive: {
		inherit: true,
		isNonstandard: "Past",
	},
	twinbeam: {
		inherit: true,
		isNonstandard: "Past",
	},
	psyblade: {
		inherit: true,
		isNonstandard: "Past",
	},
	hydrosteam: {
		inherit: true,
		isNonstandard: "Past",
	},
	syrupbomb: {
		inherit: true,
		isNonstandard: "Past",
	},
	matchagotcha: {
		inherit: true,
		isNonstandard: "Past",
	},
	ivycudgel: {
		inherit: true,
		isNonstandard: "Past",
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: "Past",
	},
	bittermalice: {
		inherit: true,
		isNonstandard: "Past",
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	bloodmoon: {
		inherit: true,
		isNonstandard: "Past",
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: "Past",
	},
	chloroblast: {
		inherit: true,
		isNonstandard: "Past",
	},
	direclaw: {
		inherit: true,
		isNonstandard: "Past",
	},
	frozensong: {
		inherit: true,
		isNonstandard: "Past",
	},
	infernalparade: {
		inherit: true,
		isNonstandard: "Past",
	},
	mountaingale: {
		inherit: true,
		isNonstandard: "Past",
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: "Past",
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: "Past",
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: "Past",
	},
	victorydance: {
		inherit: true,
		isNonstandard: "Past",
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: "Past",
	},
	shelter: {
		inherit: true,
		isNonstandard: "Past",
	},
	eructlas: {
		inherit: true,
		isNonstandard: "Past",
	},
	genesisboost: {
		inherit: true,
		isNonstandard: "Past",
	},
	lasagnatoss: {
		inherit: true,
		isNonstandard: "Past",
	},
	metronomeifitwasfunny: {
		inherit: true,
		isNonstandard: "Past",
	},
	mitada: {
		inherit: true,
		isNonstandard: "Past",
	},
	neosporin: {
		inherit: true,
		isNonstandard: "Past",
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	poweruppunch: {
		num: 612,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Power-Up Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
	chargebeam: {
		num: 451,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Charge Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	superpower: {
		num: 210,
		accuracy: 100,
		basePower: 120,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['furycutter'] || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			const bp = this.clampIntRange(move.basePower / pokemon.volatiles['furycutter'].multiplier, 30, 120);
			return bp;
		},
		category: "Physical",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	drumroll: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Drumroll",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				!move.realMove && !move.isZ && !move.isMax &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.basePower > 109 && move.id !== 'drumrollcap'
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	oblivionwing: {
		inherit: true,
		basePower: 75,
		drain: [1, 2],
	},
	meteorhammer: {
		inherit: true,
		isNonstandard: null,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Meteor Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	kinesis: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Kinesis",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
		isNonstandard: null,
	},
	coreenforcer: {
		inherit: true,
			onHit(target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
	},
	landswrath: {
		inherit: true,
			onHit(target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			target.addVolatile('gastroacid');
		},
	},
	toxicthread: {
		inherit: true,
		status: 'tox',
	},
	dragonhammer: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		isNonstandard: null,
		name: "Dragon Hammer",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, hammer: 1, contact: 1},
		secondary: {
			chance: 100,
			boosts: {
				evasion: -1,
			},
		},
		target: "normal",
		type: "Dragon",
	},
	sleazyspores: {
		inherit: true,
		isNonstandard: "Past",
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sleazy Spores');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasType('Grass')) {
					this.add('-sideend', pokemon.side, 'move: Sleazy Spores', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('sleazyspores');
				}
				if (!pokemon.runStatusImmunity('powder')) return;
				if (pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sleazy Spores');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('sleazyspores'));
			},
		},
	},
};

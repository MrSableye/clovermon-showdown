export const Moves: { [k: string]: ModdedMoveData } = {
	knockoff: {
		inherit: true,
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
					if (item.id === 'firering') {
						source.trySetStatus('brn', target, item);
					}
				}
			}
		},
	},
	hyperbeam: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	gigaimpact: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	frenzyplant: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	blastburn: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	hydrocannon: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	rockwrecker: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	roaroftime: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
	prismaticlaser: {
		inherit: true,
		self: null,
		onAfterHit(source, target) {
			if (target && target.hp) {
				source.addVolatile('mustrecharge');
			}
		},
	},
};

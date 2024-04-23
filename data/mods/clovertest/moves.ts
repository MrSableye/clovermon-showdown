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
};

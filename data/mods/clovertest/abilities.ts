export const Abilities: { [k: string]: ModdedAbilityData } = {
	puppeteer: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Bug') {
				this.add('-immune', target, '[from] ability: Puppeteer');
				return null;
			}
		},
	}
};

export const Abilities: { [k: string]: ModdedAbilityData } = {
	puppeteer: {
		inherit: true,
		onImmunity(type, pokemon) {
			if (type === 'Bug') return false;
		},
	}
};

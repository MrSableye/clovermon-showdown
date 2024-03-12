'use strict';

const assert = require('./assert');
const Dex = require('./../dist/sim/dex').Dex;

Dex.includeModData();

Object.entries(Dex.dexes).forEach(function ([modId, modDex]) {
	if (['joltemons', 'gennext', 'ssb', 'gen8joltemons'].includes(modId)) return; // These mods SUCK

	describe(`Mod: ${modId}`, function () {
		it('should have existing moves', function () {
			for (const move of modDex.moves.all()) {
				assert.equal(Dex.moves.get(move.id).exists, true, `Mod: ${modId} has non-existent move: ${move.id}`);
			}
		});

		it('should have existing items', function () {
			for (const item of modDex.items.all()) {
				assert.equal(item.exists, true, `Mod: ${modId} has non-existent item: ${item.id}`);
			}
		});


		it('should have existing abilities', function () {
			for (const ability of modDex.abilities.all()) {
				assert.equal(ability.exists, true, `Mod: ${modId} has non-existent ability: ${ability.id}`);
			}
		});
	});
});

describe('Formats', function () {
	it('should load all rule tables properly', function () {
		this.timeout(20000);
		for (const format of Dex.formats.all()) {
			assert.doesNotThrow(() => Dex.formats.getRuleTable(format));
		}
	});
});

describe('Moves', function () {
	it('should have a name that matches its id', function () {
		for (const move of Dex.moves.all()) {
			if (move.realMove) continue;
			assert.equal(move.id, Dex.toID(move.name), `${move.id} has mismatched name ${move.name}.`);
		}
	});
	it.skip('should have descriptions', function () {
		for (const move of Dex.moves.all()) {
			const description = move.desc || move.shortDesc;
			assert(description, `${move.id} does not have a description.`);
		}
	});
});

describe('Items', function () {
	it('should have a name that matches its id', function () {
		for (const item of Dex.items.all()) {
			assert.equal(item.id, Dex.toID(item.name), `${item.id} has mismatched name ${item.name}.`);
		}
	});
	it.skip('should have descriptions', function () {
		for (const item of Dex.items.all()) {
			const description = item.desc || item.shortDesc;
			assert(description, `${item.id} does not have a description.`);
		}
	});
});

describe('Abilities', function () {
	it('should have a name that matches its id', function () {
		for (const ability of Dex.abilities.all()) {
			assert.equal(ability.id, Dex.toID(ability.name), `${ability.id} has mismatched name ${ability.name}.`);
		}
	});
	it.skip('should have descriptions', function () {
		for (const ability of Dex.abilities.all()) {
			const description = ability.desc || ability.shortDesc;
			assert(description, `${ability.id} does not have a description.`);
		}
	});
});

describe('Learnsets', function () {
	it('should have valid moves in learnset', function () {
		for (const species of Dex.species.all()) {
			const learnset = Dex.species.getLearnset(species.id);
			if (learnset === undefined) {
				continue;
			}

			for (const moveId of Object.keys(learnset)) {
				const move = Dex.moves.get(moveId);
				assert.equal(move.exists, true, `${species.id}'s move ${moveId} does not exist.`);
			}
		}
	});
});

describe('Pokemon', function () {
	it('should have valid abilities', function () {
		for (const species of Dex.species.all()) {
			const abilities = species.abilities;
			for (const dexAbility of Object.values(abilities)) {
				if (!dexAbility) continue;
				const ability = Dex.abilities.get(dexAbility);
				assert.equal(ability.exists, true, `${species.id}'s ability ${ability} does not exist.`);
			}
		}
	});
});

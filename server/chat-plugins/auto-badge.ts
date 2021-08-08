/**
 * Auto badges plugin.
 * Allows for automatically adding or removing badges from users.
 * Written by Mr. Sableye.
 * @author MrSableye
 */
import {FS, Utils} from '../../lib';

const AUTO_BADGE_FILE = 'config/chat-plugins/auto-badge.json';

type Frequency = 'HOURLY';
interface BadgeConditions {
	elo: { format: string; ratingThreshold: number; };
}
type BadgeCondition<K extends keyof BadgeConditions = keyof BadgeConditions> = {
	[key in K]: { type: K, data: BadgeConditions[K] };
}[K];

interface BadgeData {
	badgeId: string;
	isAdd: boolean;
	condition: BadgeCondition;
}

export const handlers: Chat.Handlers = {
	onBattleEnd(room) {
		const battle = room.battle;
		if (battle && battle.ended) {
			
			battle.players.forEach((player) => {
			});
		}
	},
};

const handleBadgeData = async (badgeData: BadgeData) => {
	const {badgeId, isAdd, condition} = badgeData;
	let executeChange = false;

	if (condition.type === 'elo') {
		const conditionData = condition.data as BadgeConditions[typeof condition.type];
		const ladder = Ladders(conditionData.format);
		const rating = await ladder.getTop()
		ladder.getRating()
		Ladders.LadderStore.visualizeAll
		ladder.
		ladder.getTop
		ladder.ge
	} else if (condition[0] === 'battlesPlayed') {

	}

	switch (condition[0]) {
		case 'battlesWon': {
			Ladders(condition.format)
		}
		case 'battlesPlayed': {

		}
	}
};

export let autoBadgeData: {[frequency in Frequency]: Record<string, BadgeData> } = {
	HOURLY: {},
};

try {
	autoBadgeData = JSON.parse(FS(AUTO_BADGE_FILE).readSync());
} catch (e) {}

export const AutoBadges = new class {
	autoBadgeCheckers = new Map<string, NodeJS.Timeout>();

	constructor() {
		if (!Config.usesqlitebadges) return;
		Object.entries(autoBadgeData).forEach(([frequency, frequencyData]) => {
			Object.entries(frequencyData).forEach(([id, badgeData]) => {
				this.startChecker(frequency as Frequency, id, badgeData);
			})
		});
	}

	startChecker(frequency: Frequency, id: string, badgeData: BadgeData) {

	}

	stopChecker(id: string) {
		const timeout = this.autoBadgeCheckers.get(id);

		if (timeout) clearTimeout(timeout);

		this.autoBadgeCheckers.delete(id)
	}

	destroy() {
		for (const [id] of this.autoBadgeCheckers) {
			this.stopChecker(id);
		}
	}
}

export function destroy() {
	AutoBadges.destroy();
}

export const commands: Chat.ChatCommands = {
	hangman: {
		create: 'new',
		new(target, room, user, connection) {
			room = this.requireRoom();
			target = target.trim();
			const text = this.filter(target);
			if (target !== text) return this.errorReply("You are not allowed to use filtered words in hangmans.");
			const params = text.split(',');

			this.checkCan('minigame', null, room);
			if (room.settings.hangmanDisabled) return this.errorReply("Hangman is disabled for this room.");
			this.checkChat();
			if (room.game) return this.errorReply(`There is already a game of ${room.game.title} in progress in this room.`);

			if (!params) return this.errorReply("No word entered.");
			const {phrase, hint} = Hangman.validateParams(params);

			const game = new Hangman(room, user, phrase, hint);
			room.game = game;
			game.display(user, true);

			this.modlog('HANGMAN');
			return this.addModAction(`A game of hangman was started by ${user.name} – use /guess to play!`);
		},
		createhelp: ["/hangman create [word], [hint] - Makes a new hangman game. Requires: % @ # &"],

		guess(target, room, user) {
			const word = this.filter(target);
			if (word !== target) return this.errorReply(`You may not use filtered words in guesses.`);
			this.parse(`/choose ${target}`);
		},
		guesshelp: [
			`/guess [letter] - Makes a guess for the letter entered.`,
			`/guess [word] - Same as a letter, but guesses an entire word.`,
		],

		stop: 'end',
		end(target, room, user) {
			room = this.requireRoom();
			this.checkCan('minigame', null, room);
			this.checkChat();
			const game = this.requireGame(Hangman);
			game.end();
			this.modlog('ENDHANGMAN');
			return this.privateModAction(`The game of hangman was ended by ${user.name}.`);
		},
		endhelp: ["/hangman end - Ends the game of hangman before the man is hanged or word is guessed. Requires: % @ # &"],

		disable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('gamemanagement', null, room);
			if (room.settings.hangmanDisabled) {
				return this.errorReply("Hangman is already disabled.");
			}
			room.settings.hangmanDisabled = true;
			room.saveSettings();
			return this.sendReply("Hangman has been disabled for this room.");
		},

		enable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('gamemanagement', null, room);
			if (!room.settings.hangmanDisabled) {
				return this.errorReply("Hangman is already enabled.");
			}
			delete room.settings.hangmanDisabled;
			room.saveSettings();
			return this.sendReply("Hangman has been enabled for this room.");
		},

		display(target, room, user) {
			room = this.requireRoom();
			const game = this.requireGame(Hangman);
			if (!this.runBroadcast()) return;
			room.update();

			game.display(user, this.broadcasting);
		},

		''(target, room, user) {
			return this.parse('/help hangman');
		},

		random(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (room.game) {
				throw new Chat.ErrorMessage(`There is already a game of ${room.game.title} running.`);
			}
			target = toID(target);
			const {question, hint} = Hangman.getRandom(room.roomid, target);
			const game = new Hangman(room, user, question, hint, {allowCreator: true});
			room.game = game;
			this.addModAction(`${user.name} started a random game of hangman - use /guess to play!`);
			game.display(user, true);
			this.modlog(`HANGMAN RANDOM`, null, target ? `tag: ${target}` : '');
		},
		addrandom(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (!hangmanData[room.roomid]) hangmanData[room.roomid] = {};
			if (!target) return this.parse('/help hangman');
			// validation
			const args = target.split(target.includes('|') ? '|' : ',');
			const {phrase} = Hangman.validateParams(args);
			if (!hangmanData[room.roomid][phrase]) hangmanData[room.roomid][phrase] = {hints: []};
			args.shift();
			hangmanData[room.roomid][phrase].hints.push(...args);
			Hangman.save();
			this.privateModAction(`${user.name} added a random hangman with ${Chat.count(args.length, 'hints')}.`);
			this.modlog(`HANGMAN ADDRANDOM`, null, `${phrase}: ${args.join(', ')}`);
		},
		rr: 'removerandom',
		removerandom(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			let [word, ...hints] = target.split(',');
			if (!toID(target) || !word) return this.parse('/help hangman');
			for (const [i, hint] of hints.entries()) {
				if (hint.startsWith('room:')) {
					const newID = hint.slice(5);
					const targetRoom = Rooms.search(newID);
					if (!targetRoom) {
						return this.errorReply(`Invalid room: ${newID}`);
					}
					this.room = targetRoom;
					room = targetRoom;
					hints.splice(i, 1);
				}
			}
			if (!hangmanData[room.roomid]) {
				return this.errorReply("There are no hangman words for this room.");
			}
			const roomKeys = Object.keys(hangmanData[room.roomid]);
			const roomKeyIDs = roomKeys.map(toID);
			const index = roomKeyIDs.indexOf(toID(word));
			if (index < 0) {
				return this.errorReply(`That word is not a saved hangman.`);
			}
			word = roomKeys[index];
			hints = hints.map(toID);

			if (!hints.length) {
				delete hangmanData[room.roomid][word];
				this.privateModAction(`${user.name} deleted the hangman entry for '${word}'`);
				this.modlog(`HANGMAN REMOVERANDOM`, null, word);
			} else {
				hangmanData[room.roomid][word].hints = hangmanData[room.roomid][word].hints.filter(item => !hints.includes(toID(item)));
				if (!hangmanData[room.roomid][word].hints.length) {
					delete hangmanData[room.roomid][word];
				}
				this.privateModAction(`${user.name} deleted ${Chat.count(hints, 'hints')} for the hangman term '${word}'`);
				this.modlog(`HANGMAN REMOVERANDOM`, null, `${word}: ${hints.join(', ')}`);
			}
			this.refreshPage(`hangman-${room.roomid}`);
			Hangman.save();
		},
		addtag(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			let [term, ...tags] = target.split(',');
			// only a .trim() because toID will make it unable to find the term if it has caps
			term = term.trim();
			tags = tags.map(i => toID(i)).filter(Boolean);
			if (!term || !tags || !tags.length) {
				return this.parse('/help hangman');
			}
			if (!hangmanData[room.roomid]) {
				hangmanData[room.roomid] = {};
			}
			if (!hangmanData[room.roomid][term]) {
				return this.errorReply(`Term ${term} not found.`);
			}
			if (!hangmanData[room.roomid][term].tags) hangmanData[room.roomid][term].tags = [];
			for (const [i, tag] of tags.entries()) {
				if (hangmanData[room.roomid][term].tags!.includes(tag)) {
					this.errorReply(`The tag ${tag} is already on the term ${term} and has been skipped.`);
					tags.splice(i, 1);
				}
			}
			if (!tags.length) {
				this.errorReply(`Specify at least one valid tag.`);
				return this.parse(`/help hangman`);
			}
			hangmanData[room.roomid][term].tags!.push(...tags);
			Hangman.save();
			this.privateModAction(`${user.name} added ${Chat.count(tags, "tags")} to the hangman term ${term}`);
			this.modlog(`HANGMAN ADDTAG`, null, `${term}: ${tags.map(Utils.escapeHTML).join(', ')}`);
			this.refreshPage(`hangman-${room.roomid}`);
		},
		untag(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (!toID(target)) {
				return this.parse(`/help hangman`);
			}
			let [term, ...tags] = target.split(',');
			tags = tags.map(i => toID(i)).filter(Boolean);
			if (!term || !tags) {
				return this.parse('/help hangman');
			}
			if (!hangmanData[room.roomid]) {
				return this.errorReply(`This room has no hangman terms.`);
			}
			if (!hangmanData[room.roomid][term]) {
				return this.errorReply(`That term was not found.`);
			}
			if (!hangmanData[room.roomid][term].tags) {
				return this.errorReply(`That term has no tags.`);
			}
			if (tags.length) {
				this.privateModAction(`${user.name} removed ${Chat.count(tags, "tags")} from the hangman term ${term}`);
				this.modlog(`HANGMAN UNTAG`, null, `${term}: ${tags.map(Utils.escapeHTML).join(', ')}`);
				hangmanData[room.roomid][term].tags = hangmanData[room.roomid][term].tags?.filter(t => !tags.includes(t));
			} else {
				this.privateModAction(`${user.name} removed all tags from the hangman term ${term}`);
				this.modlog(`HANGMAN UNTAG`, null, `${term}`);
				hangmanData[room.roomid][term].tags = [];
			}

			if (!hangmanData[room.roomid][term].tags!.length) {
				delete hangmanData[room.roomid][term].tags;
			}
			Hangman.save();
			this.refreshPage(`hangman-${room.roomid}`);
		},
		view: 'terms',
		terms(target, room, user) {
			room = this.requireRoom();
			return this.parse(`/j view-hangman-${target || room.roomid}`);
		},
	},

	hangmanhelp: [
		`/hangman allows users to play the popular game hangman in PS rooms.`,
		`Accepts the following commands:`,
		`/hangman create [word], [hint] - Makes a new hangman game. Requires: % @ # &`,
		`/hangman guess [letter] - Makes a guess for the letter entered.`,
		`/hangman guess [word] - Same as a letter, but guesses an entire word.`,
		`/hangman display - Displays the game.`,
		`/hangman end - Ends the game of hangman before the man is hanged or word is guessed. Requires: % @ # &`,
		`/hangman [enable/disable] - Enables or disables hangman from being started in a room. Requires: # &`,
		`/hangman random [tag]- Runs a random hangman, if the room has any added. `,
		`If a tag is given, randomizes from only terms with those tags. Requires: % @ # &`,
		`/hangman addrandom [word], [...hints] - Adds an entry for [word] with the [hints] provided to the room's hangman pool. Requires: % @ # &`,
		`/hangman removerandom [word][, hints] - Removes data from the hangman entry for [word]. If hints are given, removes only those hints.` +
		` Otherwise it removes the entire entry. Requires: % @ & #`,
		`/hangman addtag [word], [...tags] - Adds tags to the hangman term matching [word]. Requires: % @ & #`,
		`/hangman untag [term][, ...tags] - Removes tags from the hangman [term]. If tags are given, removes only those tags. Requires: % @ # * `,
		`/hangman terms - Displays all random hangman in a room. Requires: % @ # &`,
	],
};

export const pages: Chat.PageTable = {
	hangman(args, user) {
		const room = this.requireRoom();
		this.title = `[Hangman]`;
		this.checkCan('mute', null, room);
		let buf = `<div class="pad"><button style="float:right;" class="button" name="send" value="/join view-hangman-${room.roomid}"><i class="fa fa-refresh"></i> Refresh</button>`;
		buf += `<div class="pad"><h2>Hangman entries on ${room.title}</h2>`;
		const roomTerms = hangmanData[room.roomid];
		if (!roomTerms) {
			return this.errorReply(`No hangman terms found for ${room.title}.`);
		}
		for (const t in roomTerms) {
			buf += `<div class="infobox">`;
			buf += `<h3>${t}</h3><hr />`;
			if (user.can('mute', null, room, 'hangman addrandom')) {
				buf += `<strong>Hints:</strong> `;
				buf += roomTerms[t].hints.map(
					hint => `${hint} <button class="button" name="send" value="/msgroom ${room.roomid}, /hangman rr ${t},${hint}" aria-label="Delete"><i class="fa fa-trash"></i></button>`
				).join(', ');
				buf += `<button style="float:right;" class="button" name="send" value="/msgroom ${room.roomid}, /hangman rr ${t}"><i class="fa fa-trash"></i> Delete all terms</button>`;
				if (roomTerms[t].tags) {
					buf += `<br /><strong>Tags: </strong> `;
					buf += roomTerms[t].tags?.map(
						tag => `${tag} <button class="button" name="send" value="/msgroom ${room.roomid}, /hangman untag ${t},${tag}" aria-label="Delete"><i class="fa fa-trash"></i></button>`
					).join(', ');
					buf += `<button style="float:right;" class="button" name="send" value="/msgroom ${room.roomid}, /hangman untag ${t}"><i class="fa fa-trash"></i> Delete all tags</button>`;
				}
			}
			buf += `</div><br />`;
		}
		buf += `</div>`;
		return buf;
	},
};

export const roomSettings: Chat.SettingsHandler = room => ({
	label: "Hangman",
	permission: 'editroom',
	options: [
		[`disabled`, room.settings.hangmanDisabled || 'hangman disable'],
		[`enabled`, !room.settings.hangmanDisabled || 'hangman enable'],
	],
});

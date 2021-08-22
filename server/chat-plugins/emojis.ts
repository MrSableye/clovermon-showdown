import {FS} from '../../lib';

const EMOJI_SIZE = 32;

type Emojis = Record<string, string>;

export const emojis: Emojis = JSON.parse(
	FS('config/chat-plugins/emojis.json').readIfExistsSync() || "{}"
);

const createEmojiRegex = (emojiNames: string[]) => new RegExp(`(${emojiNames.map((emojiName) => `:${emojiName}:`).join('|')})`, 'g');

let emojiRegex: RegExp = createEmojiRegex(Object.keys(emojis));

const saveEmojis = () => {
	FS('config/chat-plugins/emojis.json').writeUpdate(() => JSON.stringify(emojis));
};

const addOrUpdateEmoji = (name: string, url: string) => {
	emojis[name] = url;
	emojiRegex = createEmojiRegex(Object.keys(emojis));
	saveEmojis();
};

const deleteEmoji = (name: string) => {
	delete emojis[name];
	emojiRegex = createEmojiRegex(Object.keys(emojis));
	saveEmojis();
};

const toAlphaNumeric = (text: string) => ('' + text).replace(/[^A-Za-z0-9]+/g, '');

const createEmojiHtml = (name: string, url: string) => `<img src="${url}" title="${name}" height="${EMOJI_SIZE}" width="${EMOJI_SIZE}">`;

export const commands: Chat.ChatCommands = {
	emoji: {
		list() {
			return this.sendReplyBox(Object.entries(emojis).map(([emojiName, emojiUrl]) => createEmojiHtml(emojiName, emojiUrl)).join(', '));
		},
		add(target) {
			this.checkCan('badge'); // TODO: Replace with more appropriate permission
			const [rawEmojiName, emojiUrl] = target.split(',').map((part) => part.trim());

			const emojiName = toAlphaNumeric(rawEmojiName);

			addOrUpdateEmoji(emojiName, emojiUrl);

			return this.sendReplyBox(`Added: ${createEmojiHtml(emojiName, emojiUrl)}`);
		},
		remove(target) {
			this.checkCan('badge'); // TODO: Replace with more appropriate permission
			const emojiName = toAlphaNumeric(target);

			deleteEmoji(emojiName);

			return this.sendReply(`Deleted :${emojiName}:`);
		},
	},
};

export const chatfilter: Chat.ChatFilter = (message, user, room) => {
	if (Object.keys(emojis).length > 0 && emojiRegex.test(message)) {
		return '/html ' + message.replace(emojiRegex, (match) => {
			const emojiName = match.slice(1, -1);
			return createEmojiHtml(emojiName, emojis[emojiName]);
		});
	}
	return message;
};

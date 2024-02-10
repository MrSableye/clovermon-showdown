import {FS} from '../../lib';
import {Badges} from './badges';

interface Data {
	slowpoke: Record<string, number>,
}

const defaultData: Data = {
	slowpoke: {},
};

const data: Data = JSON.parse(
	FS('config/chat-plugins/secret.json').readIfExistsSync() || JSON.stringify(defaultData),
);

const saveData = () => {
	FS('config/chat-plugins/secret.json').writeUpdate(() => JSON.stringify(data));
};

export const chatfilter: Chat.ChatFilter = function (message, user, room) {
	const now = Date.now();
	if (message === 'slow') {
		data.slowpoke[user.id] = now;
		saveData();
	} else if (message === 'poke') {
		const existingTimestamp = data.slowpoke[user.id];
		if (existingTimestamp && (now - existingTimestamp > 10 * 60 * 1000)) {
			Badges.addBadgeToUser(user.id, 'slowpoke', user, true);
		}
	} else if (data.slowpoke[user.id]) {
		delete data.slowpoke[user.id];
	}
};

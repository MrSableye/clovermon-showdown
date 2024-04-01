import {FS} from '../../lib';
import {UserBadge} from '../badges';
import {avatars, titles} from './custom';

interface UserData {
	id: string;
	name: string;
	group: GroupSymbol;
	badges: UserBadge[];
	customAvatar?: string;
	customTitle?: string;
}

function getAvatar(name: string) {
	const avatarData = avatars[toID(name)];
	if (!avatarData) return undefined;
	return avatarData.avatar;
}

function getTitle(name: string) {
	const titleData = titles[toID(name)];
	if (!titleData) return undefined;
	return titleData.title;
}

async function getUserData(user: User): Promise<UserData | null> {
	return {
		id: user.id,
		name: user.name,
		group: user.tempGroup,
		badges: user.badges || [],
		customAvatar: getAvatar(user.name),
		customTitle: getTitle(user.name),
	};
}

export const loginfilter: Chat.LoginFilter = (user) => {
	getUserData(user)
		.then((userData) => FS(`config/users/${user.id}.json`).writeSync(JSON.stringify(userData)))
		.catch(() => {});
};

import {YouTube} from './youtube';

export const loginfilter: Chat.LoginFilter = async user => {
	if (user.id === 'rudedolphin') {
		const videoDisplay = await YouTube.generateVideoDisplay('https://www.youtube.com/watch?v=pX-ZtR4XDpY');

		if (Rooms.lobby) {
			Rooms.lobby.add(`|html|${videoDisplay}`);
		}
	}
};

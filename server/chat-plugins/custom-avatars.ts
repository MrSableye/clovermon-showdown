import {avatarTable} from '../chat-commands/core';

const cloverAvatars: string[] = [];
const cloverAvatarPrefixes = ['clover-', 'showderp-', 'secret-'];

for (const avatar of avatarTable) {
	if (cloverAvatarPrefixes.some((prefix) => avatar.startsWith(prefix))) {
		cloverAvatars.push(avatar);
	}
}

const createAvatarHtml = (
	avatarName: string,
	isCustom = false,
) => `<img src="//${Config.routes.client}/sprites/trainers${isCustom ? '-custom' : ''}/${avatarName}.png" title="${avatarName}" alt="${avatarName}" width="80" height="80" class="pixelated" />`;

export const commands: Chat.ChatCommands = {
	blobbos(target, room, user) {
		if (Config.blobbosTournamentWinners && Config.blobbosTournamentWinners.includes(user.id)) {
			this.user.avatar = '#blobbos';
			this.sendReply(`${this.tr`Avatar changed to:`}\n|raw|${createAvatarHtml('blobbos', true)}`);
		}
	},
	cloveravatars() {
		this.sendReplyBox(`<b><u>Avatars <i>(try <code>/avatar NAME</code>)</i></b><br />${cloverAvatars.map((avatar) => createAvatarHtml(avatar)).join(' ')}`);
	},
};

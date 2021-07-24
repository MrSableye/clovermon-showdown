export const commands: Chat.ChatCommands = {
	blobbos(target, room, user) {
		if (Config.blobbosTournamentWinners && Config.blobbosTournamentWinners.includes(user.id)) {
			this.user.avatar = '#blobbos';

			const avatarUrl = 'trainers-custom/blobbos.png';
			this.sendReply(`${this.tr`Avatar changed to:`}\n|raw|<img src="//${Config.routes.client}/sprites/${avatarUrl}" alt="${'#blobbos'}" width="80" height="80" class="pixelated" />`);
		}
	},
};

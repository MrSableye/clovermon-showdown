export const commands: Chat.ChatCommands = {
	requestbattle(target, room, user) {
		room = this.requireRoom('lobby' as RoomID);
		this.checkChat();

		if (!target) {
			throw new Chat.ErrorMessage('Please specify a format.');
	 	}
		const format = Dex.formats.get(target);
		if (!format || !format.exists) {
			throw new Chat.ErrorMessage(`${target} is not a valid format.`);
		}

		return `/html <button class="button" name="send" value="/challenge ${user.id}, ${format.id}">Challenge me to ${format.name}</button>`;
	},
};

const getFormatButton = (format: Format) => `<button name="send" value="/requestbattle ${format.id}" class="button">Request ${format.name} battle</button>`;

export const commands: Chat.ChatCommands = {
	requestbattle(target, room, user) {
		room = this.requireRoom('lobby' as RoomID);
		this.checkChat();

		if (!target) {
			const formats = Dex.formats.all();
			return this.sendReplyBox(formats.map(getFormatButton).join(', '));
	 	}
		const format = Dex.formats.get(target);
		if (!format || !format.exists) {
			throw new Chat.ErrorMessage(`${target} is not a valid format.`);
		}

		return `/html <button class="button" name="openChallenge" value="${user.id},${format.id}">Challenge me to ${format.name}</button>`;
	},
};

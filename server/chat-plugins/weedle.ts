export const chatfilter: Chat.ChatFilter = function (message, user, room) {
	if (!room || room.roomid !== 'weedle') return message;
	return 'weedle';
};

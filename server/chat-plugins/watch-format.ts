import {FS} from '../../lib';

type RoomBattleReporterConfig = Record<string, { rooms: Record<string, boolean> }>;

const roomBattleReporterConfig: RoomBattleReporterConfig = JSON.parse(
	FS('config/chat-plugins/room-battles.json').readIfExistsSync() || "{}"
);

const saveRoomBattleReporterConfig = () => {
	FS('config/chat-plugins/room-battles.json').writeUpdate(() => JSON.stringify(roomBattleReporterConfig));
};

const addRoom = (formatId: string, roomId: string) => {
	const rooms = roomBattleReporterConfig[formatId] || {rooms: {}};

	rooms.rooms[roomId] = true;

	roomBattleReporterConfig[formatId] = rooms;

	saveRoomBattleReporterConfig();
};

const removeRoom = (formatId: string, roomId: string) => {
	const rooms = roomBattleReporterConfig[formatId] || {rooms: {}};

	delete rooms.rooms[roomId];

	roomBattleReporterConfig[formatId] = rooms;

	saveRoomBattleReporterConfig();
};

const getRooms = (formatId: string) => {
	const rooms = roomBattleReporterConfig[formatId];

	if (rooms) {
		return Object.keys(rooms.rooms)
			.map((roomId) => Rooms.get(roomId))
			.filter((room) => room !== undefined) as Room[];
	}

	return [];
};

export const commands: Chat.ChatCommands = {
	watchformat(target, room) {
		if (!room) {
			throw new Chat.ErrorMessage(`Command must be used from a room.`);
		}

		this.checkCan('editroom', null, room);

		const format = Dex.formats.get(target);

		if (!format.exists) {
			throw new Chat.ErrorMessage(`Format ${format} doesn't exist.`);
		}

		addRoom(format.id, room.roomid);

		return this.sendReply(`Successfully added ${format.name} to watched formats.`);
	},
	unwatchformat(target, room) {
		if (!room) {
			throw new Chat.ErrorMessage(`Command must be used from a room.`);
		}

		this.checkCan('editroom', null, room);

		const format = Dex.formats.get(target);

		if (!format) {
			throw new Chat.ErrorMessage(`Format ${format} doesn't exist.`);
		}

		removeRoom(format.id, room.roomid);

		return this.sendReply(`Successfully removed ${format.name} to watched formats.`);
	},
	unwatchformathelp: 'watchformathelp',
	watchformathelp() {
		this.sendReplyBox(
			'<code>/watchformat [format]</code>: adds a format to report battles on in the current room. Requires: #, &<br />' +
			'<code>/unwatchformat [format]</code>: removes a format to report battles on in the current room. Requires: #, &',
		);
	},
};

const handledBattles: Record<string, boolean> = {};

export const handlers: Chat.Handlers = {
	onBattleStart(user, room) {
		const players = [room.p1, room.p2, room.p3, room.p4]
			.filter((player) => player !== null) as User[];
		const reportPlayers = players.map(p => p.getIdentity()).join('|');

		const battleRoomId = toID(room.format);

		if (handledBattles[battleRoomId]) {
			return;
		}

		const formatRooms = getRooms(battleRoomId);
		formatRooms.forEach((formatRoom) => {
			formatRoom
				.add(`|b|${room.roomid}|${reportPlayers}`)
				.update();
		});

		handledBattles[battleRoomId] = true;
	},
	onBattleEnd(battle) {
		delete handledBattles[battle.roomid];
	},
};

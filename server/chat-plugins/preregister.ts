import { FS } from "../../lib";
import { Badges } from "./badges";

const PREREGISTRATION_LIMIT = 2;

interface UserPreregistration {
	id: string;
	name: string;
	approved: boolean;
}

type Pregistration = Record<string, UserPreregistration[]>;

const pregistration: Pregistration = JSON.parse(
	FS('config/chat-plugins/pregister.json').readIfExistsSync() || "{}"
);

const savePreregistration = () => {
	FS('config/chat-plugins/pregister.json').writeUpdate(() => JSON.stringify(pregistration));
};

const pregristrationBadges = [
	'1tournamentwinner',
	'2tournamentwinner',
	'3tournamentwinner',
];

const canUserPreregister = async (user: User): Promise<boolean> => {
	const userBadges = await Badges.getUserBadges(user.id);
	const isTournamentWinner = userBadges.some((userBadge) => pregristrationBadges.includes(userBadge.badge_id));
	const isGlobalAuth = Users.globalAuth.atLeast(user, '+');

	return isTournamentWinner || isGlobalAuth;
};

const isValidName = (name: string) => {
	const id = toID(name);
	if (id.length <= 2) return false;
	if (id.length > 18) return false;
	return true;
};

const registrationExists = (name: string) => {
	const id = toID(name);
	return Object.values(pregistration).some((userRegistrations) => userRegistrations.some((registration) => (registration.id === id) && registration.approved));
};

const createPendingPregistrationHtml = () => {
	const userHtml = Object.entries(pregistration).map(([userId, userRegistrations]) => {
		let content = '<details>';
		content += `<summary><b>${userId}</b></summary>`;
		userRegistrations.forEach((reg) => {
			if (reg.approved) return;
			content += `<button class="button" name="send" value="/preregister approve ${userId},${reg.id}">Approve ${reg.id}</button><br />`;
		});
		return content + '</details>';
	});

	return '<b><u>Preregistration Requests</u></b><br />' + userHtml.join('<br />');
};

export const commands: Chat.ChatCommands = {
	preregister: {
		submit(target, room, user) {
			if (!canUserPreregister(user)) throw new Chat.ErrorMessage('You have won a tournament or be + or higher to preregister.');
			if (!isValidName(target)) throw new Chat.ErrorMessage('Name must be greater than 2 characters and less than 19 characters.');
			if (registrationExists(target)) throw new Chat.ErrorMessage('Name is already registered.');
			if (!pregistration[user.id]) pregistration[user.id] = [];
			if (pregistration[user.id].length >= PREREGISTRATION_LIMIT) throw new Chat.ErrorMessage(`You can only preregister up to ${PREREGISTRATION_LIMIT} names.`);

			pregistration[user.id].push({ approved: false, id: toID(target), name: target.trim() });
			savePreregistration();

			return this.sendReplyBox(`Successfully submitted preregistration for: ${target.trim()}`);
		},
		unsubmit(target, room, user) {
			const targetId = toID(target);
			const userRegistrations = pregistration[user.id];
			if (!userRegistrations) throw new Chat.ErrorMessage('You have not preregistered any names.');
			const registrationIndex = userRegistrations.findIndex((reg) => reg.id === targetId);
			if (registrationIndex < 0) throw new Chat.ErrorMessage(`You have not not preregistered ${targetId}`);
			
			pregistration[user.id]= pregistration[user.id].splice(registrationIndex, 1);
			savePreregistration();

			return this.sendReplyBox(`Successfully unsubmitted preregistration for: ${targetId}`);
		},
		list(target, room, user) {
			const userRegistrations = pregistration[user.id];
			if (!userRegistrations) throw new Chat.ErrorMessage('You have not preregistered any names.');
			
			return this.sendReplyBox(`Pregistrations: ${userRegistrations.map((reg) => `${reg.name} (${reg.approved ? 'APPROVED' : 'UNAPPROVED'})`).join(', ')}`);
		},
		approve(target, room, user) {
			if (user.id !== 'mrsableye') throw new Chat.ErrorMessage('no');
			const [targetId, targetApprovalId] = target.split(',').map(toID);
			const userRegistrations = pregistration[targetId];
			if (!userRegistrations) throw new Chat.ErrorMessage(`No one has pregistered under ${targetId}`);
			const registrationIndex = userRegistrations.findIndex((reg) => reg.id === targetApprovalId);
			if (registrationIndex < 0) throw new Chat.ErrorMessage(`${targetId} has not preregistered ${targetApprovalId}`);
			userRegistrations[registrationIndex].approved = true;
			savePreregistration();
			return this.sendReplyBox(`${targetApprovalId} has been approved for ${targetId}.`);
		},
		approvallist(target, room, user) {
			if (user.id !== 'mrsableye') throw new Chat.ErrorMessage('no');
			return this.sendReplyBox(createPendingPregistrationHtml());
		},
	},
};

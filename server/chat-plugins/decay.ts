import {LadderRow} from "../ladders-local";

const createUserFilter = (currentDate: Date, dayThreshold: number, minimumRating: number) => (row: LadderRow): boolean => {
	const rating = row[1];

	if (rating <= minimumRating) return false;

	const updatedDate = new Date(row[6]);
	const timeDifference = currentDate.getTime() - updatedDate.getTime();
	const dayDifference = timeDifference / (1000 * 3600 * 24);

	return dayDifference > dayThreshold;
};

const createUserRatingAdjust = (minimumRating: number, adjustmentFactor: number) => (row: LadderRow): number => {
	const rating = row[1];
	const adjustment = 1 + Math.min(0, (rating - minimumRating) / adjustmentFactor);

	return Math.max(minimumRating, rating - adjustment);
};

const adjustRating = async (formatId: string) => {
	const ladder = Ladders(formatId);
	const userFilter = createUserFilter(new Date(), 7, 1200);
	const userRatingAdjust = createUserRatingAdjust(1200, 50);
	const users = await ladder.getUsers(userFilter);

	await Promise.all(users.map((user) => ladder.updateUserRating(user, userRatingAdjust)));
};

export const commands: Chat.ChatCommands = {
	async decay(target) {
		this.checkCan('disableladder');

		const format = toID(target);

		await adjustRating(format);

		this.sendReply('Successfully updated user ratings.');
	},
};

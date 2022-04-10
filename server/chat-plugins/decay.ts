import {FS} from '../../lib';
import {LadderRow} from "../ladders-local";

interface DecaySettings {
	minimumRating: number;
	dayThreshold: number;
	adjustmentFactor: number;
}

type DecayConfig = Record<string, DecaySettings>;

const decayConfig: DecayConfig = JSON.parse(
	FS('config/chat-plugins/decay.json').readIfExistsSync() || "{}"
);

const saveDecayConfig = () => {
	FS('config/chat-plugins/decay.json').writeUpdate(() => JSON.stringify(decayConfig));
};

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
	const adjustment = 1 + Math.max(0, (rating - minimumRating) / adjustmentFactor);

	return Math.max(minimumRating, rating - adjustment);
};

const updateFormat = async (formatId: string) => {
	const decaySettings = decayConfig[formatId];

	if (!decaySettings) return;

	const ladder = Ladders(formatId);
	const userFilter = createUserFilter(new Date(), decaySettings.dayThreshold, decaySettings.minimumRating);
	const userRatingAdjust = createUserRatingAdjust(decaySettings.minimumRating, decaySettings.adjustmentFactor);
	const users = await ladder.getUsers(userFilter);

	await Promise.all(users.map((user) => ladder.updateUserRating(user, userRatingAdjust)));
};

const updateAllFormats = async () => {
	await Promise.all(Object.keys(decayConfig).map(async (formatId) => {
		await updateFormat(formatId);
	}));
};

const decayFrequency = 1000 * 60 * 60 * 24; // 1 Day

let decayTimeout: NodeJS.Timeout | null = setInterval(() => { void updateAllFormats(); }, decayFrequency);

export const commands: Chat.ChatCommands = {
	decay: {
		async force(target) {
			this.checkCan('disableladder');

			const format = toID(target);

			await updateFormat(format);

			this.sendReply(`Successfully decayed user ratings for format ${format}`);
		},
		async forceall(target) {
			this.checkCan('disableladder');

			await updateAllFormats();

			this.sendReply('Successfully decayed all user ratings.');
		},
		start() {
			this.checkCan('disableladder');

			decayTimeout = setInterval(() => { void updateAllFormats(); }, decayFrequency);

			this.sendReply('Successfully enabled ladder decay.');
		},
		stop() {
			this.checkCan('disableladder');

			if (decayTimeout) {
				clearInterval(decayTimeout);
				decayTimeout = null;

				this.sendReply('Successfully disabled ladder decay.');
			} else {
				this.errorReply('Ladder already disabled.');
			}
		},
		config(target) {
			this.checkCan('disableladder');

			const [formatId, minimumRatingText, dayThresholdText, adjustmentFactorText] = target.split(',').map((input) => toID(input.trim()));

			if (!formatId) {
				return this.errorReply('Please provide a format id.');
			}

			if (!minimumRatingText) {
				return this.errorReply('Please provide a minimum rating.');
			}

			const minimumRating = parseInt(minimumRatingText);

			if (Number.isNaN(minimumRating) || !Number.isInteger(minimumRating) || minimumRating < 1000) {
				return this.errorReply('Please provide a minimum rating greater than or equal to 1000.');
			}

			if (!dayThresholdText) {
				return this.errorReply('Please provide a day threshold.');
			}

			const dayThreshold = parseInt(dayThresholdText);

			if (Number.isNaN(dayThreshold) || !Number.isInteger(dayThreshold) || dayThreshold < 1) {
				return this.errorReply('Please provide a day threshold greater than or equal to 1.');
			}

			if (!adjustmentFactorText) {
				return this.errorReply('Please provide an adjustment factor.');
			}

			const adjustmentFactor = parseInt(adjustmentFactorText);

			if (Number.isNaN(adjustmentFactor) || !Number.isInteger(adjustmentFactor) || adjustmentFactor < 1) {
				return this.errorReply('Please provide an adjustment factor greater than or equal to 1.');
			}

			decayConfig[formatId] = {
				minimumRating,
				dayThreshold,
				adjustmentFactor,
			};

			saveDecayConfig();

			this.sendReply(`Successfully updated ladder decay settings for ${formatId}.`);
		},
		list() {
			const decayList = Object.entries(decayConfig).map(([formatId, decaySettings]) => `${formatId} - Minimum Rating: ${decaySettings.minimumRating}, Day Threshold: ${decaySettings.dayThreshold}, Adjustment Factor: ${decaySettings.adjustmentFactor}`);

			return this.sendReplyBox(decayList.join('<br />'));
		},
	},
};

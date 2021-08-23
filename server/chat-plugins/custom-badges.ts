import {Badge} from '../badges';
import {Badges} from './badges';

interface Team {
	teamToBadge: Record<string, string>;
	badges: string[];
}

const createTeam = (teamToBadge: Record<string, string>): Team => ({
	teamToBadge,
	badges: Object.values(teamToBadge),
});

const teams: Record<string, Team> = {
	waifu: createTeam({
		kymmi: 'teamkymmi',
		bavi: 'teambavi',
	}),
	crewmate: createTeam({
		red: 'redcrewmate',
		blue: 'bluecrewmate',
		green: 'greencrewmate',
		yellow: 'yellowcrewmate',
		orange: 'orangecrewmate',
		pink: 'pinkcrewmate',
		purple: 'purplecrewmate',
		lime: 'limecrewmate',
		black: 'blackcrewmate',
		white: 'whitecrewmate',
		brown: 'browncrewmate',
		cyan: 'cyancrewmate',
		maroon: 'marooncrewmate',
		rose: 'rosecrewmate',
		banana: 'bananacrewmate',
		gray: 'graycrewmate',
		tan: 'tancrewmate',
		coral: 'coralcrewmate',
		rainbow: 'rainbowcrewmate',
		reverse: 'reversecrewmate',
		australian: 'australiancrewmate',
	}),
};

const joinTeam = async (user: User, teamName: string, teamSide: string): Promise<Badge | undefined> => {
	const team = teams[teamName];

	if (!team) {
		throw new Chat.ErrorMessage(`Team ${teamName} does not exist.`);
	}

	const badgeID = team.teamToBadge[teamSide];

	if (!badgeID) {
		throw new Chat.ErrorMessage(`Team ${teamName} does not have a side ${teamSide} to join.`);
	}

	const userBadges = user.badges;
	if (userBadges) {
		const existingTeamBadges = userBadges.filter((userBadge) => team.badges.includes(userBadge.badge_id));

		await Promise.all(existingTeamBadges.map((existingTeamBadge) => Badges.removeBadgeFromUser(user.id, existingTeamBadge.badge_id, user, true)));
	}

	await Badges.addBadgeToUser(user.id, badgeID, user, true);

	return Badges.getBadge(badgeID);
};

export const commands: Chat.ChatCommands = {
	team: {
		list() {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			this.runBroadcast();

			return this.sendReplyBox(`<div class="pad">${Object.entries(teams).map(([teamName, team]) => `<div>${teamName}: ${Object.keys(team.teamToBadge).join(',')}</div>`)}</div>`);
		},
		async join(target, room, user) {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			const [teamName, teamSide] = target.split(',').map(toID);

			if (!teamName) {
				return this.errorReply('Please specify a team name.');
			}

			if (!teamSide) {
				return this.errorReply('Please specify a side to join.');
			}

			const badge = await joinTeam(user, teamName, teamSide);

			if (!badge) {
				return this.errorReply(`Unable to join ${teamSide} as it does not have an associated badge.`);
			}

			return this.sendReplyBox(`Successfully joined team ${teamSide}: ${Badges.createBadgeHtml(badge, false)}`);
		},
	},
};

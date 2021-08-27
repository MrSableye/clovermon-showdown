import {Badge} from '../badges';
import {Badges} from './badges';

type Team = Record<string, Badge>;

const createTeam = async (teamToBadge: Record<string, string>): Promise<Team> => {
	const team: Team = {};

	await Promise.all(Object.entries(teamToBadge).map(async ([sideName, badgeID]) => {
		const badge = await Badges.getBadge(badgeID);

		if (badge) {
			team[sideName] = badge;
		}
	}));

	return team;
};

let teams: Record<string, Team> = {};

const initializeTeams = async () => {
	teams = {
		waifu: await createTeam({
			kymmi: 'teamkymmi',
			bavi: 'teambavi',
		}),
		crewmate: await createTeam({
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
};
void initializeTeams();

const createTeamHtml = (teamName: string, team: Team) => {
	let teamHtml = `<b>${teamName} <i>(try <code>/badgeteam join ${teamName}, SIDE</code>)</i></b><br />`;

	teamHtml += Object.entries(team).map(([sideName, badge]) => Badges.createBadgeHtml({...badge, badge_id: sideName}, false)).join(' ');

	return teamHtml;
};

const joinTeam = async (user: User, teamName: string, teamSide: string): Promise<Badge | undefined> => {
	const team = teams[teamName];

	if (!team) {
		throw new Chat.ErrorMessage(`Team ${teamName} does not exist.`);
	}

	const badge = team[teamSide];

	if (!badge) {
		throw new Chat.ErrorMessage(`Team ${teamName} does not have a side ${teamSide} to join.`);
	}

	const userBadges = user.badges;
	if (userBadges) {
		const existingTeamBadges = userBadges.filter((userBadge) => Object.values(team).map((teamBadge) => teamBadge.badge_id).includes(userBadge.badge_id));

		await Promise.all(existingTeamBadges.map((existingTeamBadge) => Badges.removeBadgeFromUser(user.id, existingTeamBadge.badge_id, user, true)));
	}

	await Badges.addBadgeToUser(user.id, badge.badge_id, user, true);

	return badge;
};

export const commands: Chat.ChatCommands = {
	badgeteam: {
		list() {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			this.runBroadcast();

			return this.sendReplyBox('<b><u>Team Badges</b><br />' +
				Object.entries(teams).map(([teamName, team]) => createTeamHtml(teamName, team)).join('<br />'));
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

import {Badge} from '../badges';
import {Badges} from './badges';

const CHUNK_SIZE = 4;

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
let isInitialized = false;

const initializeTeams = async () => {
	if (isInitialized) return;
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
		horoscope: await createTeam({
			virgo: 'virgo',
			taurus: 'taurus',
			scorpio: 'scorpio',
			sagittarius: 'sagittarius',
			pisces: 'pisces',
			libra: 'libra',
			leo: 'leo',
			gemini: 'gemini',
			capricorn: 'capricorn',
			cancer: 'cancer',
			aries: 'aries',
			aquarius: 'aquarius',
		}),
		flag: await createTeam({
			usa: 'usaflag',
			uk: 'ukflag',
			brazil: 'brazilflag',
			italy: 'italyflag',
			canada: 'canadaflag',
			eu: 'euflag',
			chile: 'chileflag',
			mexico: 'mexicoflag',
			afghanistan: 'afghanistanflag',
			africanunion: 'africanunionflag',
			albania: 'albaniaflag',
			algeria: 'algeriaflag',
			americansamoa: 'americansamoaflag',
			andorra: 'andorraflag',
			angola: 'angolaflag',
			anguilla: 'anguillaflag',
			antarctica: 'antarcticaflag',
			argentina: 'argentinaflag',
			armenia: 'armeniaflag',
			aruba: 'arubaflag',
			australia: 'australiaflag',
			austria: 'austriaflag',
			azerbaijan: 'azerbaijanflag',
			bahamas: 'bahamasflag',
			bahrain: 'bahrainflag',
			bangladesh: 'bangladeshflag',
			barbados: 'barbadosflag',
			belarus: 'belarusflag',
			belgium: 'belgiumflag',
			belize: 'belizeflag',
			benin: 'beninflag',
			bermuda: 'bermudaflag',
			bhutan: 'bhutanflag',
			bolivia: 'boliviaflag',
			botswana: 'botswanaflag',
			brunei: 'bruneiflag',
			bulgaria: 'bulgariaflag',
			burkinafaso: 'burkinafasoflag',
			burundi: 'burundiflag',
			cambodja: 'cambodjaflag',
			cameroon: 'cameroonflag',
			capeverde: 'capeverdeflag',
			caymanislands: 'caymanislandsflag',
			centralafricanrepublic: 'centralafricanrepublicflag',
			chad: 'chadflag',
			colombia: 'colombiaflag',
			commonwealth: 'commonwealthflag',
			comoros: 'comorosflag',
			cookislands: 'cookislandsflag',
			costarica: 'costaricaflag',
			cotedivoire: 'cotedivoireflag',
			croatia: 'croatiaflag',
			cuba: 'cubaflag',
			cyprus: 'cyprusflag',
			czechrepublic: 'czechrepublicflag',
			denmark: 'denmarkflag',
			djibouti: 'djiboutiflag',
			dominica: 'dominicaflag',
			dominicanrepublic: 'dominicanrepublicflag',
			ecuador: 'ecuadorflag',
			egypt: 'egyptflag',
			elsalvador: 'elsalvadorflag',
			equatorialguinea: 'equatorialguineaflag',
			eritrea: 'eritreaflag',
			estonia: 'estoniaflag',
			ethiopia: 'ethiopiaflag',
			faroes: 'faroesflag',
			fiji: 'fijiflag',
			finland: 'finlandflag',
			gabon: 'gabonflag',
			gambia: 'gambiaflag',
			georgia: 'georgiaflag',
			germany: 'germanyflag',
			ghana: 'ghanaflag',
			gibraltar: 'gibraltarflag',
			greece: 'greeceflag',
			greenland: 'greenlandflag',
			grenada: 'grenadaflag',
			guadeloupe: 'guadeloupeflag',
			guademala: 'guademalaflag',
			guam: 'guamflag',
			guernsey: 'guernseyflag',
			guinea: 'guineaflag',
			guyana: 'guyanaflag',
			haiti: 'haitiflag',
			honduras: 'hondurasflag',
			hungary: 'hungaryflag',
			iceland: 'icelandflag',
			india: 'indiaflag',
			indonesia: 'indonesiaflag',
			iran: 'iranflag',
			iraq: 'iraqflag',
			ireland: 'irelandflag',
			islamicconference: 'islamicconferenceflag',
			isleofman: 'isleofmanflag',
			israel: 'israelflag',
			jamaica: 'jamaicaflag',
			japan: 'japanflag',
			jersey: 'jerseyflag',
			jordan: 'jordanflag',
			kazakhstan: 'kazakhstanflag',
			kenya: 'kenyaflag',
			kiribati: 'kiribatiflag',
			kosovo: 'kosovoflag',
			kuwait: 'kuwaitflag',
			kyrgyzstan: 'kyrgyzstanflag',
			laos: 'laosflag',
			latvia: 'latviaflag',
			lebanon: 'lebanonflag',
			lesotho: 'lesothoflag',
			liberia: 'liberiaflag',
			libya: 'libyaflag',
			liechtenstein: 'liechtensteinflag',
			lithuania: 'lithuaniaflag',
			luxembourg: 'luxembourgflag',
			macao: 'macaoflag',
			macedonia: 'macedoniaflag',
			madagascar: 'madagascarflag',
			malawi: 'malawiflag',
			malaysia: 'malaysiaflag',
			maldives: 'maldivesflag',
			mali: 'maliflag',
			malta: 'maltaflag',
			marshallislands: 'marshallislandsflag',
			martinique: 'martiniqueflag',
			mauritania: 'mauritaniaflag',
			mauritius: 'mauritiusflag',
			micronesia: 'micronesiaflag',
			moldova: 'moldovaflag',
			monaco: 'monacoflag',
			mongolia: 'mongoliaflag',
			montenegro: 'montenegroflag',
			montserrat: 'montserratflag',
			morocco: 'moroccoflag',
			mozambique: 'mozambiqueflag',
			nato: 'natoflag',
			namibia: 'namibiaflag',
			nauru: 'nauruflag',
			nepal: 'nepalflag',
			netherlands: 'netherlandsflag',
			netherlandsantilles: 'netherlandsantillesflag',
			newcaledonia: 'newcaledoniaflag',
			newzealand: 'newzealandflag',
			nicaragua: 'nicaraguaflag',
			northkorea: 'northkoreaflag',
			northerncyprus: 'northerncyprusflag',
			northernireland: 'northernirelandflag',
			norway: 'norwayflag',
			opec: 'opecflag',
			olimpicmovement: 'olimpicmovementflag',
			oman: 'omanflag',
			pakistan: 'pakistanflag',
			palau: 'palauflag',
			palestine: 'palestineflag',
			panama: 'panamaflag',
			papuanewguinea: 'papuanewguineaflag',
			paraguay: 'paraguayflag',
			peru: 'peruflag',
			philippines: 'philippinesflag',
			poland: 'polandflag',
			portugal: 'portugalflag',
			puertorico: 'puertoricoflag',
			qatar: 'qatarflag',
			redcross: 'redcrossflag',
			reunion: 'reunionflag',
			romania: 'romaniaflag',
			rwanda: 'rwandaflag',
			saintlucia: 'saintluciaflag',
			samoa: 'samoaflag',
			sanmarino: 'sanmarinoflag',
			saudiarabia: 'saudiarabiaflag',
			scotland: 'scotlandflag',
			senegal: 'senegalflag',
			serbia: 'serbiaflag',
			seyshelles: 'seyshellesflag',
			sierraleone: 'sierraleoneflag',
			singapore: 'singaporeflag',
			slovakia: 'slovakiaflag',
			slovenia: 'sloveniaflag',
			solomonislands: 'solomonislandsflag',
			somalia: 'somaliaflag',
			somaliland: 'somalilandflag',
			southafriica: 'southafriicaflag',
			southkorea: 'southkoreaflag',
			srilanka: 'srilankaflag',
			sudan: 'sudanflag',
			suriname: 'surinameflag',
			swaziland: 'swazilandflag',
			sweden: 'swedenflag',
			switzerland: 'switzerlandflag',
			syria: 'syriaflag',
			taiwan: 'taiwanflag',
			tajikistan: 'tajikistanflag',
			tanzania: 'tanzaniaflag',
			thailand: 'thailandflag',
			togo: 'togoflag',
			tonga: 'tongaflag',
			tunisia: 'tunisiaflag',
			turkey: 'turkeyflag',
			turkmenistan: 'turkmenistanflag',
			turksandcaicosislands: 'turksandcaicosislandsflag',
			tuvalu: 'tuvaluflag',
			uganda: 'ugandaflag',
			ukraine: 'ukraineflag',
			unitedarabemirates: 'unitedarabemiratesflag',
			unitednations: 'unitednationsflag',
			uruguay: 'uruguayflag',
			uzbekistan: 'uzbekistanflag',
			vanutau: 'vanutauflag',
			vaticancity: 'vaticancityflag',
			venezuela: 'venezuelaflag',
			vietnam: 'vietnamflag',
			virginislandsbritish: 'virginislandsbritishflag',
			virginislandsus: 'virginislandsusflag',
			wales: 'walesflag',
			westernsahara: 'westernsaharaflag',
			yemen: 'yemenflag',
			zambia: 'zambiaflag',
			zimbabwe: 'zimbabweflag',
			china: 'chinaflag',
			england: 'englandflag',
			france: 'franceflag',
			russian: 'russianflag',
			spain: 'spainflag',
		}),
	};
	isInitialized = true;
};

const chunk = <T>(array: T[], chunkSize: number): T[][] => {
	const chunks = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};

const createTeamHtml = (teamName: string, team: Team) => {
	let teamHtml = `<details><summary><b>${teamName} <i>(try <code>/badgeteam join ${teamName}, SIDE</code>)</i></b></summary>`;

	const chunkedBadges = chunk(Object.entries(team), CHUNK_SIZE);
	teamHtml += '<table>';
	chunkedBadges.forEach((badgeChunk) => {
		teamHtml += '<tr>';
		teamHtml += badgeChunk.map(([sideName, badge]) => '<td>' + Badges.createBadgeHtml({...badge, badge_id: sideName}, false) + '</td>').join('');
		teamHtml += '</tr>';
	});
	teamHtml += '</table></details>';

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
		const existingTeamBadges = userBadges.filter(
			(userBadge) => Object.values(team).map((teamBadge) => teamBadge.badge_id).includes(userBadge.badge_id),
		);

		await Promise.all(
			existingTeamBadges.map(
				(existingTeamBadge) => Badges.removeBadgeFromUser(user.id, existingTeamBadge.badge_id, user, true),
			),
		);
	}

	await Badges.addBadgeToUser(user.id, badge.badge_id, user, true);

	return badge;
};

export const commands: Chat.ChatCommands = {
	sidejoin: 'badgeteam',
	joinside: 'badgeteam',
	teambadge: 'badgeteam',
	badgeteam: {
		async list() {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			await initializeTeams();

			this.runBroadcast();

			return this.sendReplyBox('<b><u>Team Badges</b><br />' +
				Object.entries(teams).map(([teamName, team]) => createTeamHtml(teamName, team)).join('<br />'));
		},
		async join(target, room, user) {
			if (!Config.usesqlitebadges) {
				throw new Chat.ErrorMessage(`The badges feature is currently disabled.`);
			}

			await initializeTeams();

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
		'': 'help',
		help() {
			return this.parse("/badgeteam list");
		},
	},
};

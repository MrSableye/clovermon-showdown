import {avatarTable} from '../chat-commands/core';

const cloverAvatars: string[] = [];
const cloverAvatarPrefixes = ['clover-', 'showderp-', 'secret-'];

for (const avatar of avatarTable) {
	if (cloverAvatarPrefixes.some((prefix) => avatar.startsWith(prefix))) {
		cloverAvatars.push(avatar);
	}
}

const createAvatarHtml = (
	avatarName: string,
	isCustom = false,
) => `<img src="//${Config.routes.client}/sprites/trainers${isCustom ? '-custom' : ''}/${avatarName}.png" title="${avatarName}" alt="${avatarName}" width="80" height="80" class="pixelated" />`;

export const commands: Chat.ChatCommands = {
	clover: {
		avatars() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Avatars</u> <i>(hover for name, try <code>/avatar NAME</code>)</i></b><br />' +
				`${cloverAvatars.map((avatar) => createAvatarHtml(avatar)).join(' ')}`
			);
		},
		donate: 'support',
		support() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Support Clovermon Showdown</u></b> <br />' +
				`<p>Donating to <a href="https://ko-fi.com/mrsableye">Mr. Sableye's Ko-Fi</a> will pay for server costs and server advertisement.</p>` +
				'<p>Donating $5, $10, and $20 will grant you unique donor badges!</p>'
			);
		},
		contribute() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Contribute to Clovermon Showdown</u></b> <br />' +
				`<p>Clovermon Showdown is open source! Bug fixes and new features are welcome from community members. If one of your pull requests is merged, you'll receive a unique badge!</p>` +
				'<p>Repos: <a href="https://github.com/MrSableye/clovermon-showdown">MrSableye/clovermon-showdown</a> / <a href="https://github.com/MrSableye/clovermon-showdown-client">MrSableye/clovermon-showdown-client</a></p>'
			);
		},
		usage() {
			this.runBroadcast();
			this.sendReplyBox(
				'<b><u>Usage Stats</u></b><br />' +
				'<p>Daily usage stats for most Clovermon Showdown formats can be found on our <a href="https://clover.weedl.es/usage/">usage site</a>.</p>'
			);
		},
	},
	cloverhelp() {
		this.runBroadcast();
		this.sendReplyBox(
			`<code>/clover avatars</code>: shows all Clovermon Showdown avatars<br />` +
			`<code>/clover support</code>: shows how you can support Clovermon Showdown<br />` +
			`<code>/clover contribute</code>: shows how you can contribute to Clovermon Showdown<br />` +
			`<code>/clover usage</code>: shows information on Clovermon Showdown usage statistics<br />`
		);
	},
};

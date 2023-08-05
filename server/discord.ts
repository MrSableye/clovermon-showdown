import Discord, {Events} from 'discord.js';

export class DiscordClient {
	private discordClient?: Discord.Client;

	private getToken(): string | undefined {
		return Config.discordtoken || '';
	}

	private async initializeClient(): Promise<Discord.Client> {
		const discordClient = new Discord.Client({intents: []});

		return new Promise((resolve, reject) => {
			discordClient.on(Events.ClientReady, resolve);
			discordClient.login(this.getToken()).catch(() => reject());
			setTimeout(() => reject(), 5000);
		});
	}

	async getClient(): Promise<Discord.Client> {
		if (this.discordClient && this.discordClient.isReady()) {
			return this.discordClient;
		}

		return this.initializeClient();
	}
}

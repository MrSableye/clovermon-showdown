import {getLastCommit} from 'git-last-commit';

export const commands: ChatCommands = {
	git() {
		getLastCommit((error, commit) => {
			if (!error) {
				this.sendReply(`\n|raw|Latest commit by ${commit.author.name}: ${commit.subject} (<a href="https://github.com/showderp/clovermon-showdown/commit/${commit.hash}">#${commit.shortHash}</a>)`);
			}
		});
	},
};

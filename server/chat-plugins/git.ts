import * as path from 'path';
import * as child_process from 'child_process';

const bash = (command: string, cwd?: string): Promise<[number, string, string]> => new Promise(resolve => {
	child_process.exec(command, {
		cwd: cwd || `${__dirname}/../..`,
	}, (error, stdout, stderr) => {
		resolve([error?.code || 0, stdout, stderr]);
	});
});

const exec = (command: string) => bash(command, path.resolve(`${__dirname}/../..`));

const getCommitMetadata = async (format: string): Promise<string | undefined> => {
	const [code, stdout] = await exec(`git show HEAD --pretty=format:"${format}" --no-patch`);

	if (!code) {
		return stdout;
	}
};

export const commands: Chat.ChatCommands = {
	async commit() {
		const author = await getCommitMetadata('%aN');
		const title = await getCommitMetadata('%s');
		const hash = await getCommitMetadata('%h');

		this.sendReplyBox(`Latest commit by ${author}: ${title} (<a href="https://github.com/showderp/clovermon-showdown/commit/${hash}">#${hash}</a>)`);
	},
};

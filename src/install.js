import inquirer from 'inquirer';
import { checkVersion, vancedVersion } from './checkVersion';
import { downloadVanced } from './downloadVanced';

export async function install() {
	await checkVersion();
	const questions = [
		{
			type: 'list',
			name: 'arch',
			message: 'Choose an architecture:',
			choices: ['Default', 'Legacy'],
			default: 'Default'
		},
		{
			type: 'list',
			name: 'theme',
			message: 'Choose a theme:',
			choices: ['Dark', 'Black'],
			default: 'Dark'
		}
	];

	inquirer.prompt(questions).then(answers => {
		console.log();
		setTimeout(() => {
			console.log('Latest Vanced Version: ' + vancedVersion);
			downloadVanced(
				vancedVersion,
				answers.arch.toLowerCase(),
				answers.theme.toLowerCase()
			);
		}, 5000);
	});
}

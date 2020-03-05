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
		},
		{
			type: 'checkbox',
			message: 'Choose which languages to install:',
			name: 'chosenLang',
			choices: [
				new inquirer.Separator('Popular Languages'),
				{
					name: 'en',
					checked: true
				},
                new inquirer.Separator(''),
                'af', 'am', 'ar', 'bg', 'bn', 'bs', 'ca', 'cs', 'da', 'de', 'el', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'gl', 'gu', 'hi', 'hr', 'hu', 'hy', 'in', 'is', 'it', 'iw', 'ja', 'ka', 'kk', 'km', 'kn', 'ko', 'lo', 'lt', 'lv', 'mk', 'ml', 'mn', 'mr', 'ms', 'my', 'nb', 'ne', 'nl', 'pa', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'ta', 'te', 'th', 'tl', 'tr', 'uk', 'ur', 'vi', 'zh', 'zu'
            ],
            validate: (answer) => {
                if (answer.length < 1) {
                  return 'You must choose at least one language.';
				}
				return true;
            }
		}
	];

	inquirer.prompt(questions).then(answers => {
		console.log();
		setTimeout(() => {
			console.log('Latest Vanced Version: ' + vancedVersion);
			downloadVanced(
				vancedVersion,
				answers.arch.toLowerCase(),
				answers.theme.toLowerCase(),
				answers.chosenLang
			);
		}, 5000);
	});
}

import chalk from 'chalk';

const menus = {
	main: `
${chalk.greenBright('Usage: vanced [command]')}

${chalk.greenBright('List of commands available: ')}
  ${chalk.blueBright(
		'install'
  )} ................ Installs Youtube Vanced to your device
  ${chalk.blueBright('version')} ................ Show the package version
  ${chalk.blueBright(
		'help'
  )}    ................ Show the help menu for a list of commands
`
};

export async function help(args) {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
	console.log(menus[subCmd] || menus.main);
}

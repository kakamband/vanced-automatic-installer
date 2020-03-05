import glob from 'glob';
import fs from 'fs';
import shell from 'shelljs';
import { cleanUp } from './cleanUp';

export async function checkFiles(arch) {
	glob(__dirname + '/youtube/' + 'YouTube*.apk', {}, (er, files) => {
		if (er) {
			Console.log("Can't find Youtube apk");
		} else {
			fs.rename(
				files[0],
				__dirname + '/youtube/' + 'youtube.apk',
				err => {
					if (err) {
						console.log('ERROR: ' + err);
					} else {
						if (arch == 'default') {
							shell.exec(__dirname + '/defaultInstall.sh');
							cleanUp();
						} else {
							shell.exec(__dirname + '/legacyInstall.sh');
							cleanUp();
						}
					}
				}
			);
		}
	});
}

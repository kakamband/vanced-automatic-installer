import fs from 'fs';

const directory = __dirname + '/youtube/';
const files = fs.readdirSync(directory);

export async function cleanUp() {
	for (const file of files) {
		fs.unlink(path.join(directory, file), err => {
			if (err) throw err;
		});
	}
}

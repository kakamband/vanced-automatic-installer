import wget from 'wget-improved';
import cliprogress from 'cli-progress';
import extract from 'extract-zip';
import fs from 'fs';
import { checkFiles } from './checkFiles';

const progressBar = new cliprogress.SingleBar(
	{
		format: '{bar} {percentage}% | ETA: {eta}s'
	},
	cliprogress.Presets.shades_classic
);

export async function downloadVanced(version, arch, theme) {
	let src =
		'https://vanced.app/downloads/YouTube_Vanced-v' +
		version +
		'-nonroot-' +
		arch +
		'-' +
		theme +
		'.apks';

	let output = __dirname + '/youtube/youtube.zip';
	let download = wget.download(src, output);
	let receivedBytes = 0;

	download.on('error', err => {
		progressBar.stop();
		console.log(err);
	});

	download.on('start', fileSize => {
		console.log(fileSize);
		progressBar.start(fileSize, 0);
	});

	download.on('bytes', bytes => {
		receivedBytes += bytes;
		progressBar.update(receivedBytes);
	});

	download.on('end', output => {
		progressBar.stop();
		console.log(output);
		extract(
			__dirname + '/youtube/youtube.zip',
			{ dir: __dirname + '/youtube/' },
			err => {
				if (err) {
					console.log(err);
				} else {
					console.log('Done extracting file');
					fs.unlinkSync(__dirname + '/youtube/youtube.zip');
					checkFiles(arch);
					console.log('Done renaming file');
				}
			}
		);
	});
}

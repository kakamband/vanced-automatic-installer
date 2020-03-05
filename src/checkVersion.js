import request from 'request';
import cheerio from 'cheerio';

let vancedVersion = '';

export async function checkVersion() {
	request('https://vanced.app/', (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let $ = cheerio.load(body);
			vancedVersion = $('div.toprow>p:nth-child(2)').text();
		}
	});
}

export { vancedVersion };

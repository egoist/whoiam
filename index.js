'use strict';
const fetch = require('node-fetch');
const Spin = require('io-spin');
const chalk = require('chalk');
const spin = new Spin('Box1', 'Let me guess');

function fixedWidth(string, minWidth) {
	minWidth = minWidth || 10;
	return string + ' '.repeat(minWidth - string.length);
}

module.exports = function () {
	spin.start();
	fetch('http://ipinfo.io/json')
		.then(data => data.json())
		.then(data => {
			spin.stop();
			for (var name in data) {
				if (data[name]) {
					console.log(chalk.cyan(fixedWidth(name)) + ': ' + data[name]);
				}
			}
		})
		.catch(err => {
			spin.stop();
			console.log(err);
		});
};

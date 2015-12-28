'use strict';
var fetch = require('node-fetch');
var Spin = require('io-spin');
var chalk = require('chalk');
var spin = new Spin('Box1', 'Let me guess');

function fixedWidth(string, minWidth) {
	minWidth = minWidth || 10;
	return string + ' '.repeat(minWidth - string.length);
}

module.exports = function () {
	spin.start();
	fetch('http://ipinfo.io/json')
		.then(function (data) {
			return data.json();
		})
		.then(function (data) {
			spin.stop();
			for (var name in data) {
				if (data[name]) {
					console.log(chalk.cyan(fixedWidth(name)) + ': ' + data[name]);
				}
			}
		})
		.catch(function (err) {
			spin.stop();
			console.log(err);
		});
};

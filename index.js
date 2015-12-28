'use strict';
const fetch = require('node-fetch');
const Spin = require('io-spin');
const chalk = require('chalk');
const shell = require('shelljs');
const spin = new Spin('Box1', 'Let me guess');

function fixedWidth(string, minWidth) {
	minWidth = minWidth || 10;
	return string + ' '.repeat(minWidth - string.length);
}

function whoiam() {
	const name = shell.exec('git config --get user.name', {silent: true}).output.trim();
	const email = shell.exec('git config --get user.email', {silent: true}).output.trim();
	return {
		system: process.env.USER,
		git: name,
		email
	};
}

module.exports = function () {
	spin.start();
	fetch('http://ipinfo.io/json')
		.then(data => data.json())
		.then(data => {
			spin.stop();
			const props = Object.assign({}, whoiam(), data);
			for (var name in props) {
				if (props[name]) {
					console.log(chalk.cyan(fixedWidth(name)) + ': ' + props[name]);
				}
			}
		})
		.catch(err => {
			spin.stop();
			console.log(err);
		});
};

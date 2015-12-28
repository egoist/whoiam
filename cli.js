#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const whoiam = require('./');
const pkg = require('./package');

updateNotifier({pkg: pkg});
const cli = meow([
	'Usage',
	'  $ whoiam'
]);

whoiam(cli.input[0]);

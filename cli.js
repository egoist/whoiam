#!/usr/bin/env node
'use strict';
var meow = require('meow');
var updateNotifier = require('update-notifier');
var whoiam = require('./');
var pkg = require('./package');

updateNotifier({pkg: pkg});
var cli = meow([
	'Usage',
	'  $ whoiam'
]);

whoiam(cli.input[0]);

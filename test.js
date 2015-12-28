import test from 'ava';
import execa from 'execa';

test('main', t => {
	execa.shell('node ./cli.js', result => {
		t.is(typeof result, 'string');
	});
});

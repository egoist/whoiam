import test from 'ava';
import execa from 'execa';

test('main', t => {
	execa.shell('node ./cli.js', result => {
		t.plan(2);
		t.is(typeof result.stdout.ip, 'string');
		t.is(typeof result.stdout.city, 'string');
	});
});

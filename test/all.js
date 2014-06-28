var test = require('tape');
var getUsername = require('../');

var USERNAME = process.env['GITHUB_USERNAME'] || 'jaz303';

test("get username", function(assert) {

	getUsername(function(err, username) {
		assert.equal(username, USERNAME);
		assert.end();
	});

});
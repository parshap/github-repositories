'use strict';

var test = require('ava');
var githubRepos = require('./');

test('user with more than 100 repos', function (t) {
	t.plan(2);
	var token = '523ef691191741c99d5afbcfe58079bfa0038771';

	githubRepos('kevva', {token: token}, function (err, data) {
		t.assert(!err, err);
		t.assert(data.length, data.length);
	});
});

test('user with lower than 100 repos', function (t) {
	t.plan(2);
	var token = '523ef691191741c99d5afbcfe58079bfa0038771';

	githubRepos('octocat', {token: token}, function (err, data) {
		t.assert(!err, err);
		t.assert(data.length, data.length);
	});
});

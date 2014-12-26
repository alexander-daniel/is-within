'use strict';

var test = require('tape');
var isWithin = require('../index');

test('returns properly', function (t) {
    t.plan(2);

    var input = 5;
    var target = 6;
    var threshold = 2;
    var thresholdZero = 0;

    t.ok(isWithin(input, target, threshold));
    t.notOk(isWithin(input, target, thresholdZero));
    t.end();
});

'use strict';

var bPromise = require('bluebird')
    , fsBluebird = require('./index')
    , assert = require('chai').assert;

suite("fs-bluebird", function() {
    test("fs.existsAsync", function testing() {
        return bPromise.all([
            fsBluebird.existsAsync('./index.js')
            , fsBluebird.existsAsync('./index1.js')
            , fsBluebird.existsAsync('./README.md')
        ]).then(function(result) {
            assert.isTrue(result[0]);
            assert.isFalse(result[1]);
            assert.isTrue(result[2]);
        });
    });
});

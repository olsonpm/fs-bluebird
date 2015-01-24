'use strict';

var bPromise = require('bluebird')
    , fsBluebird = require('./index');

suite("fs-bluebird", function() {
    test("fs.existsAsync", function testing() {
        return bPromise.all([
            fsBluebird.existsAsync('./index.js')
            ,!fsBluebird.existsAsync('./index1.js')
        ]);
    });
});

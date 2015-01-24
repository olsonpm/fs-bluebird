'use strict';

var bPromise = require('bluebird')
    , fs = require('fs')
    , bFs = bPromise.promisifyAll(fs);

bFs.existsAsync = function(path) {
    return new bPromise(function(resolve, reject) {
        fs.exists(path, resolve);
    })
}

module.exports = bFs;

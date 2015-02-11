'use strict';

var bPromise = require('bluebird')
    , fs = require('fs')
    , bFs = bPromise.promisifyAll(fs);

bFs.existsAsync = function(path) {
    return new bPromise(function(resolve, reject) {
        fs.exists(path, resolve);
    })
}

// internal bluebird property to tell whether a method is the promisified version.  Setting this will prevent errors
//   arrising from the fs library being promisified more than once.
bFs.existsAsync.__isPromisified__ = true;

module.exports = bFs;

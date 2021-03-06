/*
 * grunt-nativejsx
 * https://github.com/treycordova/grunt-nativejsx
 *
 * Copyright (c) 2015 Trey Cordova
 * Licensed under the MIT license.
 */

'use strict';

let path = require('path');
let os = require('os');
let async = require('async');
let nativejsx = require('nativejsx');
let concurrencyCount = (os.cpus().length || 1) * 4;

module.exports = function(grunt) {
  grunt.registerMultiTask('nativejsx', 'Transpile JSX to native DOM', function() {
    let callback = this.async();
    let options = this.options();

    async.eachLimit(this.files, concurrencyCount, function(file, next) {
      if (!file.src[0]) { return next(); }

      nativejsx.parse(file.src[0], options).then(function(transpiled) {
        grunt.file.write(file.dest, transpiled);
        next();
      }).catch(function(error) {
        grunt.warn(`grunt-nativejsx: ${error}`);
        next();
      });
    }, callback);
  });
};

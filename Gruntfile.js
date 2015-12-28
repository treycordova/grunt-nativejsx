/*
 * grunt-jsxdom
 * https://github.com/treycordova/grunt-jsxdom
 *
 * Copyright (c) 2015 Trey Cordova
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    jsxdom: {
      variablePrefix: {
        options: {
          variablePrefix: '_'
        },
        files: {
          'test/tmp/variable-prefix.js': 'test/fixtures/variable-prefix.jsx'
        }
      },
      declarationType: {
        options: {
          declarationType: 'let'
        },
        files: {
          'test/tmp/declaration-type.js': 'test/fixtures/declaration-type.jsx'
        }
      }
    },

    nodeunit: {
      tests: ['test/*.test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'jsxdom', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};

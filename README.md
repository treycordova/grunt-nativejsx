## grunt-jsxdom [![Build Status](https://travis-ci.org/treycordova/grunt-jsxdom.svg?branch=master)](https://travis-ci.org/treycordova/grunt-jsxdom) [![Version Status](https://img.shields.io/npm/v/grunt-jsxdom.svg)](https://www.npmjs.org/package/grunt-jsxdom)
#### Grunt task for [jsxdom](https://github.com/treycordova/jsxdom).
Hello fellow Grunters, go hog-wild over this jsxdom Gruntjs plugin (*snorts*).

#### Installation
This plugin requires Grunt `~0.4.5`

Install `grunt-jsxdom` by running this command in your project folder:
```shell
npm install grunt-jsxdom --save-dev
```

Add this to your `Gruntfile.js`:
```js
grunt.loadNpmTasks('grunt-jsxdom');
```

#### Configuration
```js
grunt.initConfig({
  jsxdom: {
    options: {
      // Task-specific options go here.
    },
    your_subtask: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

##### Options
- **options.declarationType**: Either `var` (default) or `let`.
- **options.variablePrefix**: Any string (defaults to `$$`) you can conjure up that produces a _valid_ JavaScript variable.
- **options.acorn**: All acorn options are available [here](https://github.com/ternjs/acorn#main-parser). Defaults to `{plugins: {jsx: true}}`.

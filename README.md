## grunt-nativejsx [![Build Status](https://travis-ci.org/treycordova/grunt-nativejsx.svg?branch=master)](https://travis-ci.org/treycordova/grunt-nativejsx) [![Version Status](https://img.shields.io/npm/v/grunt-nativejsx.svg)](https://www.npmjs.org/package/grunt-nativejsx)
#### Grunt task for [nativejsx](https://github.com/treycordova/nativejsx).
Hello fellow Grunters, go hog-wild over this nativejsx Gruntjs plugin (*snorts*).

#### Installation
This plugin requires Grunt `~0.4.5`

Install `grunt-nativejsx` by running this command in your project folder:
```shell
npm install grunt-nativejsx --save-dev
```

Add this to your `Gruntfile.js`:
```js
grunt.loadNpmTasks('grunt-nativejsx');
```

#### Configuration
```js
grunt.initConfig({
  nativejsx: {
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

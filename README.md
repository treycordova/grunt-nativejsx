## grunt-jsxdom

> Grunt task for jsxdom.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsxdom --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsxdom');
```

## The "jsxdom" task

### Overview
In your project's Gruntfile, add a section named `jsxdom` to the data object passed into `grunt.initConfig()`.

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

### Options

#### options.variablePrefix
Type: `String`
Default value: `$$`

A string value that represents that variable prefixes to append to jsxdom native DOM assignments.

#### options.declarationType
Type: `String` (`var` or `let`)
Default value: `var`

A string value that represents the type of declaration to use. Either `var` or `let`.

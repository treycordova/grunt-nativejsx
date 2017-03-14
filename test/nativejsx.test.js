const grunt = require('grunt');

exports.nativejsx = {
  variablePrefix: function(test) {
    test.expect(1);

    const actual = grunt.file.read('test/tmp/variable-prefix.js') + '\n';
    const expected = grunt.file.read('test/expected/variable-prefix.js');

    test.equal(actual, expected, 'compiles JSX to native DOM using _ prefix.');
    test.done();
  },
  declarationType: function(test) {
    test.expect(1);

    const actual = grunt.file.read('test/tmp/declaration-type.js') + '\n';
    const expected = grunt.file.read('test/expected/declaration-type.js');

    test.equal(actual, expected, 'compiles JSX to native DOM using lets');
    test.done();
  }
};

const gulp = require('gulp');
const foo = require('./app/gulp/tasks/foo');

gulp.task('default', foo);
console.log('...');;
console.log('>>>');

exports.default = foo;
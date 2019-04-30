const { series, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync');

const styles = (cb) => {
  console.log(`css file was changed!!!`);
  return src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(dest('./app/temp/styles'));
};

const injectCss = (cb) => {
  return src("./app/temp/styles/styles.css")
    .pipe(browsersync.stream());
}

exports.default = series(styles, injectCss);
const { src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const run =
  (cb) => {
    console.log('building sprite from svgs...');
    return src('./app/assets/images/icons/**/*.svg')
      .pipe(dest('./app/temp/sprite/'));
  };

module.exports = run;
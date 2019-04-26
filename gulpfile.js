const { series, parallel, watch, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const task = (cb) => { console.log('hooray - a gulp task'), cb() };
const html = (cb) => { console.log('doing something useful with HTML!'), cb() };
const changed = (cb) => { console.log(`file index.html was changed!!!`), cb() };
const styles = (cb) => {
  console.log(`css file was changed!!!`);
  return
  src('./app/assets/styles/styles.css')
    //  .pipe(postcss([autoprefixer]))
    .pipe(dest('./app/temp/styles'));
};
watch('./app/index.html', changed);
watch('./app/assets/styles/*.css', styles);


exports.default = parallel(task, html);
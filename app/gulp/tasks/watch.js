const { watch, } = require('gulp');
const browsersync = require('browser-sync');
const styles = require('./styles');

const start =
  (cb) => {
    console.log('...starting...');
    browsersync.init({ server: { baseDir: "app" } });
    cb();
  };

const changed = (cb) => {
  console.log(`file index.html was changed!!!`);
  browsersync.reload();
  cb();
};

watch('./app/index.html', changed);
watch('./app/assets/styles/**/*.css', styles);

exports.default = start;
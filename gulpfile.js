var gulp       = require('gulp');
// var coffee     = require('gulp-coffee');
// var plumber    = require('gulp-plumber');
var sass       = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
// var watch      = require('gulp-watch');

// var onError = function(error) {
//   util.log(util.colors.red('Error plugin: ' + error.plugin));
//   util.log(util.colors.red('Error message: ' + error.message));
//   util.beep();
//   this.emit('end');
// };

// gulp.task('javascripts', function() {
//   watch({glob: '*.coffee'}, function() {
//     return gulp.src([
//       '*.coffee'
//     ]).pipe(plumber(onError))
//       // .pipe(sourcemaps.init())
//       .pipe(coffee())
//       // .pipe(sourcemaps.write())
//       .pipe(gulp.dest(''));
//   });
// });

gulp.task('stylesheets', function() {
  // watch({glob: '*.scss'}, function() {
  //   return gulp.src('*.scss')
  //     .pipe(plumber(onError))
  //     // .pipe(sourcemaps.init())
  //     .pipe(sass())
  //     // .pipe(sourcemaps.write())
  //     .pipe(gulp.dest(''));
  // });
  gulp.src('*.scss')
      .pipe(gulp.dest(''));
});

gulp.task('default', [
  // 'javascripts',
  // 'stylesheets'
]);

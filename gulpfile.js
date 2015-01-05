var gulp   = require('gulp');
var coffee = require('gulp-coffee');
var sass   = require('gulp-sass');

gulp.task('javascripts', function() {
  gulp.src('./source/micro-modal.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./'));
});

gulp.task('stylesheets', function() {
  gulp.src('./source/micro-modal.scss')
      .pipe(sass())
      .pipe(gulp.dest('./'));
});

gulp.task('default', [
  'javascripts',
  'stylesheets'
]);

const gulp = require('gulp');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const utilities = require('gulp-util');
const del = require('del');
const distProduction = utilities.env.production;


gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src("./dist/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
});




gulp.task('clean', function(){
  return del(['dist', 'tmp']);
});

gulp.task('dist', ['clean'], function(){
  if (distProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});

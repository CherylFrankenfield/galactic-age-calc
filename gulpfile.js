const gulp = require('gulp');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const utilities = require('gulp-util');
const del = require('del');
const browserSync = require('browser-sync').create();
const babelify = require('babelify');
const distProduction = utilities.env.production;
const lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

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
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src("./dist/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('clean', function(){
  return del(['dist', 'tmp']);
});

gulp.task('dist', ['clean'], function(){
  if (distProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsDist']);
  gulp.watch(['bower.json'], ['bowerDist']);
});

gulp.task('jsDist', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerDist', ['bower'], function(){
  browserSync.reload();
});

gulp.task('cssDist', function() {
  gulp.src(['css/*.css'])
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./dist/css'))
});

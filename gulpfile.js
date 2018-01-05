const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const utilities = require('gulp-util');
const jshint = require('gulp-jshint');
const del = require('del');
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
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const chromeLauncher = require('chrome-launcher');
const babelify = require('babelify');

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

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('bowerCSS', function() {
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
  gulp.start('cssDist');
});


gulp.task('serve', ['dist'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsDist']);
  gulp.watch(['bower.json'], ['bowerDist']);
  gulp.watch(['*.html'], ['htmlDist']);
  gulp.watch(['sass/*.scss'], ['cssDist']);
});

gulp.task('jsDist', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerDist', ['bower'], function(){
  browserSync.reload();
});

gulp.task('htmlDist', ['bower'], function(){
  browserSync.reload();
});

gulp.task('cssDist', ['bower'], function(){
  return gulp.src('sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream());
});

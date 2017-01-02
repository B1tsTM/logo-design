var gulp = require('gulp');

var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');

var del = require('del');

var appDev = "assets/app";
var appProd = "public/js/app";
var vendor = "public/js/vendor";

var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('build-ts', function() {
  return gulp.src(appDev + "/**/*.ts")
  .pipe(gulpSourcemaps.init())
  .pipe(gulpTypescript(tsconfig))
  .pipe(gulpSourcemaps.write())
  .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function() {
  return gulp.src([appDev + "/**/*.html", appDev + "/**/*.css"])
  .pipe(gulp.dest(appProd));
});

gulp.task('vendor', function() {
  gulp.src('node_modules/@angular/**')
  .pipe(gulp.dest(vendor + "/@angular/"));

  gulp.src('node_modules/core-js/**')
  .pipe(gulp.dest(vendor + "/core-js/"));

  gulp.src('node_modules/reflect-metadata/**')
  .pipe(gulp.dest(vendor + "/reflect-metadata/"));

  gulp.src('node_modules/rxjs/**')
  .pipe(gulp.dest(vendor + "/rxjs/"));

  gulp.src('node_modules/systemjs/**')
  .pipe(gulp.dest(vendor + "/systemjs/"));

   gulp.src('node_modules/ng2-bootstrap/**')
  .pipe(gulp.dest(vendor + "/ng2-bootstrap/"));

  gulp.src('node_modules/moment/**')
  .pipe(gulp.dest(vendor + "/moment/"));

  gulp.src('node_modules/primeng/**')
  .pipe(gulp.dest(vendor + "/primeng/"));

   gulp.src('node_modules/ng2-bs3-modal/**')
  .pipe(gulp.dest(vendor + "/ng2-bs3-modal/"));

  gulp.src('node_modules/ng2-file-upload/**')
  .pipe(gulp.dest(vendor + "/ng2-file-upload/"));

  gulp.src('node_modules/ng2-pagination/**')
  .pipe(gulp.dest(vendor + "/ng2-pagination/"));

  gulp.src('node_modules/angular2-fontawesome/**')
  .pipe(gulp.dest(vendor + "/angular2-fontawesome/"));

   gulp.src('node_modules/crypto-js/**')
  .pipe(gulp.dest(vendor + "/crypto-js/"));

  gulp.src('node_modules/angular2-notifications/**')
  .pipe(gulp.dest(vendor + "/angular2-notifications/"));

  return gulp.src('node_modules/zone.js/**')
  .pipe(gulp.dest(vendor + "/zone.js/"));
});

gulp.task('clean', function() {
  del(appProd + '/**/*');
});

gulp.task('watch', function() {
  gulp.watch(appDev + "**/*.ts", ['build-ts']);
  gulp.watch(appDev + "**/*.{html,css}", ['build-copy']);
});

gulp.task('ng2notifications:clean', function() {
  return del([
        vendor + '/angular2-notifications/**/*.ts',
        '!' +vendor + '/angular2-notifications/**/*.d.ts'
    ], {force: true});
});

gulp.task('default', ['watch', 'build-ts', 'build-copy', 'vendor']);
gulp.task('build', ['build-ts', 'build-copy', 'vendor']);
gulp.task('reload', ['build-ts', 'build-copy', 'watch']);


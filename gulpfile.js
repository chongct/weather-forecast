const gulp = require('gulp');
const merger = require('lcov-result-merger');
const coveralls = require('gulp-coveralls');

gulp.task("coverage", function() {
  console.log("running coverage");
  return gulp.src(["./client/coverage/lcov.info", "./server/coverage/lcov.info"])
    .pipe(merger())
    .pipe(gulp.dest("./coverage/merged"))
    .pipe(coveralls());
});

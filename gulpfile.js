const gulp = require('gulp');
const coveralls = require('gulp-coveralls');

gulp.task("coverage", function() {
  console.log("running coverage");
  return gulp.src(["./server/coverage/lcov.info", "./client/coverage/lcov.info"])
    .pipe(coveralls());
});

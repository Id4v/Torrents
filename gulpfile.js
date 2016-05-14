var gulp = require('gulp');
var less = require('gulp-less')
gulp.task('default', function() {
    gulp.src("./assets/less/style.less")
    .pipe(less())
    .pipe(
        gulp.dest("./assets/css")
    )
});
var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});

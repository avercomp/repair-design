const gulp = require('gulp'); 
const browserSync = require('browser-sync').create();
const  cssmin = require('gulp-cssmin');
const  rename = require('gulp-rename');

// Hello
gulp.task ('hello', function(done) {
    console.log ('Привет Мир!');
    done();
} )

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// minify css using gulp.
gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
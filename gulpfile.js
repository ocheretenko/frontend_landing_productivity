import gulp from "gulp";
import pug from 'gulp-pug';

gulp.task('pug-compile', function () {
    return gulp.src('src/**/*.pug')
        .pipe(
            pug({})
        )
        .pipe(gulp.dest('dist'));
});

// watch
gulp.watch('src/**/*.pug', gulp.parallel('pug-compile'));

// default
gulp.task('default', gulp.parallel('pug-compile'));
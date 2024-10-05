// process.env.DISABLE_NOTIFIER = true;
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');

function compileSass() {
    return gulp
        .src(['src/scss/**/*.scss'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('CSS [COMPILADO] - <%= file.relative %>'));
}

function compileJs() {
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('JS [COMPILADO] - <%= file.relative %>'));
}

function watch() {
    gulp.watch('src/js/**/*.js', compileJs);
    gulp.watch('src/scss/**/*.scss', compileSass);
}

gulp.task('default', gulp.parallel(compileJs, compileSass, watch));

// Tarefa para deploy
gulp.task('deploy', gulp.series(compileSass, compileJs));
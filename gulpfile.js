const {dest, src} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');

const task1 = async () => {
    return src("./**/*.js")
        .pipe(concat("result.js"))
        .pipe(dest("./output"));
}

const task2 = async () => {
    return src("./**/*.css")
        .pipe(concat("result.css"))
        .pipe(dest("./output"));
}

const groupTask = gulp.parallel(task1, task2);

exports.default = groupTask;
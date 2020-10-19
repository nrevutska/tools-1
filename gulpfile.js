const {dest, src} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat')

const task1 = async () => {
    return src("./**/*.js")
        .pipe(concat("./output/result.js"));
}

const task2 = async () => {
    return src("./**/*.css")
        .pipe(concat("./output/result.css"));
}

const groupTask = gulp.parallel(task1, task2);

exports.default = groupTask;
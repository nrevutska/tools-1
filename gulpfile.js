const {dest, src} = require('gulp');
const gulp = require('gulp');

const task1 = async () => {
    return src("./**/*.js")
        .pipe(dest("./output/result.js"));
}

const task2 = async () => {
    return src("./**/*.css")
        .pipe(dest("./output/result.css"));
}

const groupTask = gulp.parallel(task1, task2);

exports.default = groupTask;
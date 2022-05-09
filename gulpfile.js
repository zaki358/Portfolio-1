//モジュールの読み込み
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const sassGlob = require("gulp-sass-glob-use-forward");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

//関数定義
function compile(done) {
    src("./sass/**/*.scss")
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest("./css"));
    done();
}

exports.compile = series(compile);

// webpackのタスクの定義。
gulp.task("default", () => {
    //webpackStreamの第2引数にwebpackを渡す
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});

//後ほど削除↓
// //style.scssの監視タスクを作成する
// gulp.task("default", function () {
//     return gulp.watch("css/style.scss", function () {
//         return (gulp.src("css/style.scss")
//                 .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
//                 .pipe(autoprefixer({  //autoprefixerの実行
//                     browsers: ["last 2 versions"],
//                     cascade: false
//                 }))
//                 .pipe(gulp.dest("css"))
//         );
//     });
// });
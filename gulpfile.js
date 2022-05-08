// gulpプラグインの読み込み
// Sassをコンパイルするプラグインの読み込み
// webpackをコンパイルするプラグインの読み込み
// webpackの設定ファイルの読み込み
// autoprefixerの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const autoprefixer = require('gulp-autoprefixer');

//style.scssの監視タスクを作成する
gulp.task("default", function () {
    return gulp.watch("css/style.scss", function () {
        return (gulp.src("css/style.scss")
                .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
                .pipe(autoprefixer({  //autoprefixerの実行
                    browsers: ["last 2 versions"],
                    cascade: false
                }))  
                .pipe(gulp.dest("css"))
        );
    });
});

// webpackのタスクの定義。
gulp.task("default", () => {
    //webpackStreamの第2引数にwebpackを渡す
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});
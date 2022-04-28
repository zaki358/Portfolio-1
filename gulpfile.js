// gulpプラグインの読み込み
// Sassをコンパイルするプラグインの読み込み
// webpackをコンパイルするプラグインの読み込み
// webpackの設定ファイルの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

// style.scssをタスクを作成する
// style.scssファイルを取得
gulp.task("default",  () => {
    return (
        gulp
            .src("scss/style.scss")
            // Sassのコンパイルを実行
            .pipe(sass())
            // cssフォルダー以下に保存
            .pipe(gulp.dest("css"))
    );
});

// webpackのタスクの定義。
gulp.task("default", () => {
    //webpackStreamの第2引数にwebpackを渡す
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});
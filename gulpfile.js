// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
// webpackをコンパイルするプラグインの読み込み
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

// style.scssをタスクを作成する
gulp.task("default", function () {
    // style.scssファイルを取得
    return (
        gulp
            .src("scss/style.scss")
            // Sassのコンパイルを実行
            .pipe(sass())
            // cssフォルダー以下に保存
            .pipe(gulp.dest("css"))
    );
});

// webpackのタスクの定義。 ()=> の部分はfunction() でも可
gulp.task("default", () => {
    // ☆ webpackStreamの第2引数にwebpackを渡す☆
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist"));
});
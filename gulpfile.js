// gulpプラグインの読み込み
// Sassをコンパイルするプラグインの読み込み
// webpackをコンパイルするプラグインの読み込み
// webpackの設定ファイルの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

// style.scssの監視タスクを作成する
gulp.task("default", function () {
    // ★ style.scssファイルを監視
    return gulp.watch("css/style.scss", function () {
        // style.scssの更新があった場合の処理

        // style.scssファイルを取得
        return (
            gulp
                .src("css/style.scss")
                // Sassのコンパイルを実行
                .pipe(
                    sass({
                        outputStyle: "expanded"
                    })
                        // Sassのコンパイルエラーを表示
                        // (これがないと自動的に止まってしまう)
                        .on("error", sass.logError)
                )
                // cssフォルダー以下に保存
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
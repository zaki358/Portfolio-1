module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    // メインのJS
    entry: "./script/main.js",
    // 出力ファイル
    output: {
      filename: "bundle.js"
    }
  }
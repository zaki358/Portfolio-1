//MutationObserverと.classList.containsは無し


const body = document.querySelector("body");
    const deviation = document.querySelector(".deviation");


window.addEventListener("load", function () {
  loader(body, deviation);
})

export function loader(el, dev) {
  window.setTimeout(function () {
    el.classList.add("appear");
    window.setTimeout(function () {
      dev.style.display = "none";
    }, 2000);
  }, 500);
}



// // オブザーバインスタンスを作成
// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       console.log(body.classList.contains('pace-done'));
//     });
// });

// // オブザーバの設定
// const config = {
//     characterData: true,
//     subtree: true
// };

// // 対象ノードとオブザーバの設定を渡す
// observer.observe(body, config);









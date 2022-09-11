/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/icon.js":
/*!********************************!*\
  !*** ./src/js/modules/icon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setting": function() { return /* binding */ setting; }
/* harmony export */ });
function setting() {
  let inc = 0;
  let angle = 0;
  let screenSize = window.innerHeight;

  function positioning(el) {
    switch (inc) {
      case 0:
        angle = 270;
        break;

      case 1:
        angle = 315;
        break;

      case 2:
        angle = 0;
        break;

      case 3:
        angle = 45;
        break;

      case 4:
        angle = 90;
        break;

      case 5:
        angle = 135;
        break;

      case 6:
        angle = 180;
        break;

      case 7:
        angle = 225;
        break;

      default:
        break;
    }

    let moveEl = document.querySelector(el);
    let radius = screenSize * 0.7 / 2;
    let centerX = radius - screenSize * 0.1 / 2;
    let centerY = radius - screenSize * 0.1 / 2;
    let moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    let moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    moveEl.style.left = moveX + "px";
    moveEl.style.top = moveY + "px";
    moveEl.style.opacity = 0.5;
    inc++;
    console.log(inc);
  }

  return positioning;
}

/***/ }),

/***/ "./src/js/modules/loader.js":
/*!**********************************!*\
  !*** ./src/js/modules/loader.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loader": function() { return /* binding */ loader; }
/* harmony export */ });
//MutationObserverと.classList.containsは無し
const body = document.querySelector("body");
const deviation = document.querySelector(".deviation");
window.addEventListener("load", function () {
  loader(body, deviation);
});
function loader(el, dev) {
  window.setTimeout(function () {
    el.classList.add("appear");
    window.setTimeout(function () {
      dev.style.display = "none";
    }, 2000);
  }, 500);
} // // オブザーバインスタンスを作成
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

/***/ }),

/***/ "./src/js/modules/rotate.js":
/*!**********************************!*\
  !*** ./src/js/modules/rotate.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollRotate": function() { return /* binding */ ScrollRotate; }
/* harmony export */ });
document.addEventListener('DOMContentLoaded', function () {
  const rotate1 = new ScrollRotate('.p-area__front-menu--lv1', 30);
  const rotate2 = new ScrollRotate('.p-area__front-menu--lv2', 150);
  const rotate3 = new ScrollRotate('.p-area__front-menu--lv3', 270);
});
class ScrollRotate {
  constructor(el, angle) {
    this.el = document.querySelector(el);
    this.angle = angle;

    this._initialPosition();

    this._animation();
  }

  _positionCalculation(num) {
    let windowHeigh = window.innerHeight; //角度

    let angle = num; //中心の円の半径(0.7は円の大きさ(70vh))

    let radius = windowHeigh * 0.7 / 2; //menuの円の半径(0.14は円の大きさ(14vh)

    let centerLeft = radius - windowHeigh * 0.14 / 2;
    let centerTop = radius - windowHeigh * 0.14 / 2; //算出

    let positionLeft = Math.cos(Math.PI / 180 * angle) * radius + centerLeft;
    let positionTop = Math.sin(Math.PI / 180 * angle) * radius + centerTop;
    return [positionLeft, positionTop];
  } //ベジェ曲線（X:Left)


  _moveCurveLeft(t, startX, endX, controlX) {
    let tp = 1 - t;
    let moveLeft = tp ** 2 * startX + 2 * tp * t * controlX + t ** 2 * endX;
    return moveLeft;
  }

  //ベジェ曲線（Y:Top)
  _moveCurveTop(t, startY, endY, controlY) {
    let tp = 1 - t;
    let moveTop = tp ** 2 * startY + 2 * tp * t * controlY + t ** 2 * endY;
    return moveTop;
  }

  //ページ読み込んだ後の初期位置
  _initialPosition() {
    let [left, top] = this._positionCalculation(this.angle);

    const mainEl = document.querySelector(".p-area__main");
    let mainLink = mainEl.firstChild.href;

    if (this.angle === 270) {
      mainEl.firstElementChild.textContent = this.el.textContent;
      mainLink = this.el.firstElementChild.href;
      mainEl.firstElementChild.setAttribute("href", mainLink);
    }

    console.log(mainEl);
    console.log(left, top);
    this.el.style.left = left + "px";
    this.el.style.top = top + "px";
  } //移動位置設定


  _movePosition(num) {
    const height = window.innerHeight;
    const endNum = num + 120;
    const controlNum = num + 60;

    let [startLeft, startTop] = this._positionCalculation(num);

    let [endLeft, endTop] = this._positionCalculation(endNum); //ベクトル


    let [controlLeft, controlTop] = this._positionCalculation(controlNum);

    switch (num) {
      case 30:
        controlLeft = height * 0.7 / 2 - height * 0.07;
        controlTop = height * 0.7 + height * 0.07;
        break;

      case 150:
        controlLeft = controlLeft - height * 0.14;
        controlTop = controlTop - height * 0.14;
        break;

      case 270:
        controlLeft = controlLeft + height * 0.14;
        controlTop = controlTop - height * 0.14;
        break;
    }

    return [startLeft, startTop, endLeft, endTop, controlLeft, controlTop];
  }

  _animation() {
    const _this = this;

    const els = this.el;
    const elText = els.textContent;
    const mainEl = document.querySelector(".p-area__main");
    const elLink = els.firstElementChild.href;
    let mainLink = mainEl.firstChild.href;
    const time = 1000;
    let keepAngle = this.angle;
    let start;
    const rotation = keep();
    let countFlg = false;
    window.addEventListener("mousewheel", function (e) {
      console.log(e);
      start = undefined;

      if (!countFlg) {
        rotation();
        countFlg = true;
      }

      setTimeout(function () {
        countFlg = false;
      }, 2000);
    });

    function keep() {
      function update(timestamp) {
        let [startX, startY, endX, endY, controlX, controlY] = _this._movePosition(keepAngle);

        if (start === undefined) {
          start = timestamp;
        }

        const elapsed = start ? timestamp - start : 0; //console.log(start);

        const progress = Math.min(1, elapsed / time);
        let tp = 1 - progress;
        let moveLeft = tp ** 2 * startX + 2 * tp * progress * controlX + progress ** 2 * endX;
        let moveTop = tp ** 2 * startY + 2 * tp * progress * controlY + progress ** 2 * endY;
        els.style.left = moveLeft + "px";
        els.style.top = moveTop + "px";

        if (progress < 1) {
          countFlg = true;
          requestAnimationFrame(update);
        } else if (progress === 1) {
          switch (keepAngle) {
            case 30:
              keepAngle += 120;
              break;

            case 150:
              keepAngle += 120;
              break;

            case 270:
              keepAngle = 30;
              break;
          }

          if (keepAngle === 270) {
            mainEl.firstElementChild.textContent = elText;
            mainLink = elLink;
            mainEl.firstElementChild.setAttribute("href", mainLink);
          }
        }
      }

      return update;
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": function() { return /* binding */ slider; }
/* harmony export */ });
document.addEventListener("DOMContentLoaded", function () {
  const workSlider = new slider(".swiper"); //WorkSlider.start();
});
class slider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      spaceBetween: 30,
      effect: "fade",
      grabCursor: true,
      mousewheel: true,
      loop: true,
      //centeredSlider: true,
      sliderPerView: 1,
      speed: 1000,
      //direction: 'vertical',
      // autoplay: {
      //    delay: 4000,
      //    disableOnInteraction: false
      // },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  } //引数は空のオブジェクト


  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader.js */ "./src/js/modules/loader.js");
/* harmony import */ var _modules_rotate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rotate.js */ "./src/js/modules/rotate.js");
/* harmony import */ var _modules_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/icon.js */ "./src/js/modules/icon.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider.js */ "./src/js/modules/slider.js");
// "use strict";




const body = document.querySelector("body");
const deviation = document.querySelector(".deviation");
const btnHtml = document.querySelector(".p-about__item--html");
const btnCss = document.querySelector(".p-about__item--css");
const btnJs = document.querySelector(".p-about__item--js");
const btnWp = document.querySelector(".p-about__item--wp");
const btnAi = document.querySelector(".p-about__item--ai");
const btnPs = document.querySelector(".p-about__item--ps");
const btnXd = document.querySelector(".p-about__item--xd");
const btnFigma = document.querySelector(".p-about__item--figma");
const position = (0,_modules_icon_js__WEBPACK_IMPORTED_MODULE_2__.setting)();
document.addEventListener('DOMContentLoaded', function () {
  const rotate1 = new _modules_rotate_js__WEBPACK_IMPORTED_MODULE_1__.ScrollRotate('.p-area__front-menu--lv1', 30);
  const rotate2 = new _modules_rotate_js__WEBPACK_IMPORTED_MODULE_1__.ScrollRotate('.p-area__front-menu--lv2', 150);
  const rotate3 = new _modules_rotate_js__WEBPACK_IMPORTED_MODULE_1__.ScrollRotate('.p-area__front-menu--lv3', 270);
  const workSlider = new _modules_slider_js__WEBPACK_IMPORTED_MODULE_3__.slider(".swiper"); //WorkSlider.start();
});
window.addEventListener("load", function () {
  (0,_modules_loader_js__WEBPACK_IMPORTED_MODULE_0__.loader)(body, deviation);
});
btnHtml.addEventListener("click", function () {
  position(".p-about__icon--html");
});
btnCss.addEventListener("click", function () {
  position(".p-about__icon--css");
});
btnJs.addEventListener("click", function () {
  position(".p-about__icon--js");
});
btnWp.addEventListener("click", function () {
  position(".p-about__icon--wp");
});
btnAi.addEventListener("click", function () {
  position(".p-about__icon--ai");
});
btnPs.addEventListener("click", function () {
  position(".p-about__icon--ps");
});
btnXd.addEventListener("click", function () {
  position(".p-about__icon--xd");
});
btnFigma.addEventListener("click", function () {
  position(".p-about__icon--figma");
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map
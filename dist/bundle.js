/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/main.js":
/*!************************!*\
  !*** ./script/main.js ***!
  \************************/
/***/ (function() {

eval("let angle1 = 30;\r\n\r\nconst circumference = (hhh) => {\r\n    let moveElement = document.querySelector('.p-area__front-menu--lv1');\r\n    let radius = (hhh * 0.7) / 2;\r\n    let centerX = radius - ((hhh*0.14)/2);\r\n    let centerY = radius - ((hhh*0.14)/2);\r\n    let moveX = Math.cos(Math.PI / 180 * angle1) * radius + centerX;\r\n    let moveY = Math.sin(Math.PI / 180 * angle1) * radius + centerY;\r\n    moveElement.style.left = moveX + \"px\";\r\n    moveElement.style.top = moveY + \"px\";\r\n    if (angle1 < 360) {\r\n        angle1++;\r\n    } else {\r\n        angle1 = 0;\r\n    }\r\n}\r\n\r\nlet angle2 = 150;\r\nconst circumference2 = (hhh) => {\r\n    let moveElement = document.querySelector('.p-area__front-menu--lv2');\r\n    let radius = (hhh * 0.7) / 2;\r\n    let centerX = radius - ((hhh*0.14)/2);\r\n    let centerY = radius - ((hhh*0.14)/2);\r\n    let moveX = Math.cos(Math.PI / 180 * angle2) * radius + centerX;\r\n    let moveY = Math.sin(Math.PI / 180 * angle2) * radius + centerY;\r\n    moveElement.style.left = moveX + \"px\";\r\n    moveElement.style.top = moveY + \"px\";\r\n    if (angle2 < 360) {\r\n        angle2++;\r\n    } else {\r\n        angle2 = 0;\r\n    }\r\n}\r\n\r\nlet angle3 = 270;\r\nconst circumference3= (hhh) => {\r\n    let moveElement = document.querySelector('.p-area__front-menu--lv3');\r\n    //0.7は円の大きさ(0.7vh)→円の半径\r\n    let radius = (hhh * 0.7) / 2;\r\n    //0.14はmenuの円の大きさ(14vh)\r\n    let centerX = radius - ((hhh*0.14)/2);\r\n    console.log(centerX);\r\n    //console.log(hhh);\r\n    let centerY = radius - ((hhh*0.14)/2);\r\n    let moveX = Math.cos(Math.PI / 180 * angle3) * radius + centerX;\r\n    let moveY = Math.sin(Math.PI / 180 * angle3) * radius + centerY;\r\n    moveElement.style.left = moveX + \"px\";\r\n    moveElement.style.top = moveY + \"px\";\r\n    if (angle3 < 360) {\r\n        angle3++;\r\n    } else {\r\n        angle3 = 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\nsetInterval(() => {\r\n    let window_h = window.innerHeight;\r\n    circumference(window_h);\r\n    circumference2(window_h);\r\n    circumference3(window_h);\r\n},100);\r\n\r\n\r\n// const screenSize = (w, h) => {\r\n//    const container = document.querySelector(\"#l-container\");\r\n//    container.style.width = w + \"px\";\r\n//    container.style.height = h + \"px\";\r\n//    return {\r\n//        a: w,\r\n//        b: h\r\n//    };\r\n// };\r\n\r\n//window.addEventListener('load', screenSize);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio-1/./script/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/main.js"]();
/******/ 	
/******/ })()
;
// "use strict";
import {loader} from "./modules/loader.js";
import {ScrollRotate} from "./modules/rotate.js";
import {setting} from "./modules/icon.js";
import {slider} from "./modules/slider.js"



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

const position = setting();

document.addEventListener('DOMContentLoaded', function () {
  const rotate1 = new ScrollRotate('.p-area__front-menu--lv1', 30);
  const rotate2 = new ScrollRotate('.p-area__front-menu--lv2', 150);
  const rotate3 = new ScrollRotate('.p-area__front-menu--lv3', 270);
  const workSlider = new slider(".swiper");
  //WorkSlider.start();
});

window.addEventListener("load", function () {
  loader(body, deviation);
})

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

let window_h = window.innerHeight;

//角度30°の座標位置を取得（制御点を求めるため）

const get30position= (hhh) => {
   //角度30°
   let angle3 = 30;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;

   return {
      left:x,
      top:y
   };
}

const get150position= (hhh) => {
   //角度150°
   let angle3 = 150;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;

   return {
      left:x,
      top:y
   };
}

const get270position= (hhh) => {
   //角度30°
   let angle3 = 270;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;

   return {
      left:x,
      top:y
   };
}

//270-30
const pointA= (hhh) => {
   //角度330°
   let angle3 = 330;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;

   x = x + (hhh*0.14);
   y = y - (hhh*0.07);

   return {
      left:x,
      top:y
   };
}

//30-150
const pointB= (hhh) => {
   //角度90°
   let angle3 = 90;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;

   x = ((hhh * 0.7) / 2) - (hhh*0.07) ;
   y = (hhh * 0.7) + (hhh*0.07);

   return {
      left:x,
      top:y
   };
}

//150-270
const pointC= (hhh) => {
   //角度210°
   let angle3 = 210;
   //0.7は円の大きさ(70vh)→円の半径
   let radius = (hhh * 0.7) / 2;
   //0.14はmenuの円の大きさ(14vh)
   let centerX = radius - ((hhh*0.14)/2);
   let centerY = radius - ((hhh*0.14)/2);
   let x = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
   let y = Math.sin(Math.PI / 180 * angle3) * radius + centerY;
   x = x - (hhh*0.14);
   y = y - (hhh*0.14);
   return {
      left:x,
      top:y
   };
}


const get30 = get30position(window_h);
const get150 = get150position(window_h);
const get270 = get270position(window_h);
const A = pointA(window_h);
const B = pointB(window_h);
const C = pointC(window_h);

//座標
const left30 = get30.left;
const top30 = get30.top;
const left150 = get150.left;
const top150 = get150.top;
const left270 = get270.left;
const top270 = get270.top;
//制御点
const leftA = A.left;
const topA = A.top;
const leftB = B.left;
const topB = B.top;
const leftC = C.left;
const topC = C.top;

console.log("left30の値",left30);
console.log("top30の値",top30);
console.log("left150の値",left150);
console.log("top150の値",top150);
console.log("left270の値",left270);
console.log("top270の値",top270);
console.log("要素の高さ",window_h);
console.log("leftAの値",leftA);
console.log("topAの値",topA);
console.log("leftBの値",leftB);
console.log("topBの値",topB);
console.log("leftCの値",leftC);
console.log("topCの値",topC);

//二次ベジェ曲線算出
function moveCurve(t, startX, startY, endX, endY, controlX, controlY) {
   let tp = 1 - t;
   let moveLeft = (tp ** 2 * startX) + (2 * tp * t * controlX) + (t ** 2 * endX );
   let moveTop = (tp ** 2 * startY) + (2 * tp * t * controlY) + (t ** 2 * endY );
   return {
      left:moveLeft,
      top:moveTop
   }
}


let progress = 0;
let time = 3000;



window.addEventListener('DOMContentLoaded', function(){

   window.addEventListener('wheel', function(){
      requestAnimationFrame(update1);
      requestAnimationFrame(update2);
      requestAnimationFrame(update3);
   });
});

          




   //window.addEventListener('scroll',function(){
      
   //});



function update1(timestamp) {
   progress = timestamp / time;
   progress = Math.min(progress, 1);
   //console.log(progress);
   let moveElement = document.querySelector('.p-area__front-menu--lv1');
   if (progress >= 0) {

      let tp = 1 - progress;
      let moveLeft = (tp ** 2 * left30) + (2 * tp * progress * leftB) + (progress ** 2 * left150 );
      let moveTop = (tp ** 2 * top30) + (2 * tp * progress * topB) + (progress ** 2 * top150 );

      //moveCurve(progress, left30, top30, left150, top150, leftB, topB);
      //console.log("移動距離",moveLeft);
      moveElement.style.left = moveLeft + "px";
      moveElement.style.top = moveTop + "px";
   }
   if (progress < 1){
      requestAnimationFrame(update1);
   }
}

function update2(timestamp) {
   progress = timestamp / time;
   progress = Math.min(progress, 1);
   //console.log(progress);
   let moveElement = document.querySelector('.p-area__front-menu--lv2');
   if (progress >= 0) {

      let tp = 1 - progress;
      let moveLeft = (tp ** 2 * left150) + (2 * tp * progress * leftC) + (progress ** 2 * left270 );
      let moveTop = (tp ** 2 * top150) + (2 * tp * progress * topC) + (progress ** 2 * top270 );

      //moveCurve(progress, left30, top30, left150, top150, leftB, topB);
      //console.log("移動距離",moveLeft);
      moveElement.style.left = moveLeft + "px";
      moveElement.style.top = moveTop + "px";
   }
   if (progress < 1){
      requestAnimationFrame(update2);
   }
}

function update3(timestamp) {
   progress = timestamp / time;
   progress = Math.min(progress, 1);
   //console.log(progress);
   let moveElement = document.querySelector('.p-area__front-menu--lv3');
   if (progress >= 0) {

      let tp = 1 - progress;
      let moveLeft = (tp ** 2 * left270) + (2 * tp * progress * leftA) + (progress ** 2 * left30 );
      let moveTop = (tp ** 2 * top270) + (2 * tp * progress * topA) + (progress ** 2 * top30 );

      //moveCurve(progress, left30, top30, left150, top150, leftB, topB);
      //console.log("移動距離",moveLeft);
      moveElement.style.left = moveLeft + "px";
      moveElement.style.top = moveTop + "px";
   }
   if (progress < 1){
      requestAnimationFrame(update3);
   }
}







// //270-30
// const pointA = function () {
//    let x = left30;
//    let y = (window_h * 0.7) / 4;
   
//    return {
//       left:x,
//       top:y
//    }
// }

// //30-150
// const pointB = function () {
//    let x = left30;
//    let y = (window_h * 0.7);
   
//    return {
//       left:x,
//       top:y
//    }
// }

// //150-270
// const pointC = function () {
//    let x = left30;
//    let y = (window_h * 0.7) / 4;
   
//    return {
//       left:x,
//       top:y
//    }
// }

// const leftA = pointA().left;
// const topA = pointA().top;

// console.log("制御点A",leftA);
// console.log("制御点A",topA);
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

   return {
      left:x,
      top:y
   };
}

//150-270
const pointC= (hhh) => {
   //角度210°
   let angle3 = 90;
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


const get30 = get30position(window_h);
const get150 = get150position(window_h);
const get270 = get270position(window_h);
const A = pointA(window_h);
const B = pointB(window_h);
const C = pointC(window_h);


const left30 = get30.left;
const top30 = get30.top;
const left150 = get150.left;
const top150 = get150.top;
const left270 = get270.left;
const top270 = get270.top;
const leftA = A.left;
const topA = A.top;
const leftB = B.left;
const topB = B.top;
const leftC = C.left;
const topC = C.top;

console.log(left30);
console.log(top30);
console.log(left150);
console.log(top150);
console.log(left270);
console.log(top270);
console.log("要素の高さ",window_h);
console.log(leftA);
console.log(topA);
console.log(leftB);
console.log(topB);
console.log(leftC);
console.log(topC);






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
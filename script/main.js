// let angle1 = 30;

// const circumference = (hhh) => {
//     let moveElement = document.querySelector('.p-area__front-menu--lv1');
//     let radius = (hhh * 0.7) / 2;
//     let centerX = radius - ((hhh*0.14)/2);
//     let centerY = radius - ((hhh*0.14)/2);
//     let moveX = Math.cos(Math.PI / 180 * angle1) * radius + centerX;
//     let moveY = Math.sin(Math.PI / 180 * angle1) * radius + centerY;
//     moveElement.style.left = moveX + "px";
//     moveElement.style.top = moveY + "px";
//     if (angle1 < 360) {
//         angle1++;
//     } else {
//         angle1 = 0;
//     }
// }

// let angle2 = 150;
// const circumference2 = (hhh) => {
//     let moveElement = document.querySelector('.p-area__front-menu--lv2');
//     let radius = (hhh * 0.7) / 2;
//     let centerX = radius - ((hhh*0.14)/2);
//     let centerY = radius - ((hhh*0.14)/2);
//     let moveX = Math.cos(Math.PI / 180 * angle2) * radius + centerX;
//     let moveY = Math.sin(Math.PI / 180 * angle2) * radius + centerY;
//     moveElement.style.left = moveX + "px";
//     moveElement.style.top = moveY + "px";
//     if (angle2 < 360) {
//         angle2++;
//     } else {
//         angle2 = 0;
//     }
// }

// let angle3 = 270;
// const circumference3= (hhh) => {
//     let moveElement = document.querySelector('.p-area__front-menu--lv3');
//     //0.7は円の大きさ(70vh)→円の半径
//     let radius = (hhh * 0.7) / 2;
//     //0.14はmenuの円の大きさ(14vh)
//     let centerX = radius - ((hhh*0.14)/2);
//     console.log(centerX);
//     //console.log(hhh);
//     let centerY = radius - ((hhh*0.14)/2);
//     let moveX = Math.cos(Math.PI / 180 * angle3) * radius + centerX;
//     let moveY = Math.sin(Math.PI / 180 * angle3) * radius + centerY;
//     moveElement.style.left = moveX + "px";
//     moveElement.style.top = moveY + "px";
//     if (angle3 < 360) {
//         angle3++;
//     } else {
//         angle3 = 0;
//     }
// }



// document.addEventListener("DOMContentLoaded",function(){
//    let window_h = window.innerHeight;
//     circumference(window_h);
//     circumference2(window_h);
//     circumference3(window_h);
// });








//捨て
// setInterval(() => {
//     let window_h = window.innerHeight;
//     circumference(window_h);
//     circumference2(window_h);
//     circumference3(window_h);
// },1000);


// const screenSize = (w, h) => {
//    const container = document.querySelector("#l-container");
//    container.style.width = w + "px";
//    container.style.height = h + "px";
//    return {
//        a: w,
//        b: h
//    };
// };

//window.addEventListener('load', screenSize);






document.addEventListener('DOMContentLoaded', function(){
   const rotate = new ScrollRotate('.p-area__front-menu--lv1', 30);
});


// window.addEventListener('wheel', function(){
//    const aaa = new ScrollRotate('.p-area__front-menu--lv1', 30);
//    aaa.animation();
// });



class ScrollRotate {
   constructor(el, angle) {
      this.el = document.querySelector(el);
      this.angle = angle;
      //this.callback = callback;
      
      this._initialPosition();
      this._animation();

   }
   _positionCalculation(num) {
      let windowHeigh = window.innerHeight;
      //角度
      let angle = num;
      //中心の円の半径(0.7は円の大きさ(70vh))
      let radius = (windowHeigh * 0.7) / 2;
      //menuの円の半径(0.14は円の大きさ(14vh)
      let centerLeft = radius - ((windowHeigh * 0.14) / 2);
      let centerTop = radius - ((windowHeigh * 0.14) / 2);
      //算出
      let positionLeft = Math.cos(Math.PI / 180 * angle) * radius + centerLeft;
      let positionTop = Math.sin(Math.PI / 180 * angle) * radius + centerTop;
   
      return [positionLeft, positionTop];
   }

   //ベジェ曲線（X:Left)
   _moveCurveLeft(t, startX, endX, controlX) {
      let tp = 1 - t;
      let moveLeft = (tp ** 2 * startX) + (2 * tp * t * controlX) + (t ** 2 * endX );
      return moveLeft
   };

   //ベジェ曲線（Y:Top)
   _moveCurveTop(t,startY, endY, controlY) {
      let tp = 1 - t;
      let moveTop = (tp ** 2 * startY) + (2 * tp * t * controlY) + (t ** 2 * endY );
      return moveTop
   };



   //ページ読み込んだ後の初期位置
   _initialPosition() {
      let [left, top] = this._positionCalculation(this.angle);
      console.log(left,top);
      this.el.style.left = left + "px";
      this.el.style.top = top + "px";
   }

   //移動位置設定
   _movePosition(num2) {
      let height = window.innerHeight;
         switch (num2) {
            case 30: //30°～150°を移動（制御点は90°）
               let [startLeft, startTop] = this._positionCalculation(30);
               let [endLeft, endTop]= this._positionCalculation(150);
               let [controlLeft, controlTop] = this._positionCalculation(90);
               controlLeft = ((height * 0.7) / 2) - (height * 0.07);
               controlTop = (height * 0.7) + (height * 0.07);
               return [startLeft, startTop, endLeft, endTop, controlLeft, controlTop];

            case 150: //30°～150°を移動（制御点は90°）
               [startLeft, startTop] = this._positionCalculation(150);
               [endLeft, endTop]= this._positionCalculation(270);
               [controlLeft, controlTop] = this._positionCalculation(210);
               controlLeft = controlLeft - (height * 0.14);
               controlTop = controlTop - (height * 0.14);
               return [startLeft, startTop, endLeft, endTop, controlLeft, controlTop];

            case 270: //30°～150°を移動（制御点は90°）
               [startLeft, startTop] = this._positionCalculation(270);
               [endLeft, endTop]= this._positionCalculation(30);
               [controlLeft, controlTop] = this._positionCalculation(330);
               controlLeft = controlLeft + (height * 0.14);
               controlTop = controlTop - (height * 0.14);
               return [startLeft, startTop, endLeft, endTop, controlLeft, controlTop];
         }
   }


   _animation() {
      let progress = 0;
      let time = 3000;
      let [startX, startY, endX, endY, controlX, controlY] = this._movePosition(this.angle);
      let els = this.el;



      window.addEventListener("mousewheel", function(){
         //let aaa = 0;
         requestAnimationFrame(update);
         function update(timestamp) {
            //timestamp = aaa;
            progress = aaa / time;
            progress = Math.min(progress, 1);
            if (progress >= 0) {
               console.log(progress);
               let tp = 1 - progress;
               let moveLeft = (tp ** 2 * startX) + (2 * tp * progress * controlX) + (progress ** 2 * endX);
               let moveTop = (tp ** 2 * startY) + (2 * tp * progress * controlY) + (progress ** 2 * endY);
               els.style.left = moveLeft + "px";
               els.style.top = moveTop+ "px";
            }
            if (progress < 1){
               requestAnimationFrame(update);
            }
         }
         //
      });

   }
};
      // window.addEventListener("wheel", function(){
      //    function update(timestamp) {
      //       progress = timestamp / time;
      //       progress = Math.min(progress, 1);
      //       if (progress >= 0) {
      //          console.log(progress);
      //          let tp = 1 - progress;
      //          let moveLeft = (tp ** 2 * startX) + (2 * tp * progress * controlX) + (progress ** 2 * endX);
      //          let moveTop = (tp ** 2 * startY) + (2 * tp * progress * controlY) + (progress ** 2 * endY);
      //          els.style.left = moveLeft + "px";
      //          els.style.top = moveTop+ "px";
      //       }
      //       if (progress < 1){
      //          requestAnimationFrame(update);
      //       }
      //    }
      //    requestAnimationFrame(update);
      // });
   








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


document.addEventListener('DOMContentLoaded', function(){
   const rotate1 = new ScrollRotate('.p-area__front-menu--lv1', 30);
   const rotate2 = new ScrollRotate('.p-area__front-menu--lv2', 150);
   const rotate3 = new ScrollRotate('.p-area__front-menu--lv3', 270);
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
               let [startLeft30, startTop30] = this._positionCalculation(30);
               let [endLeft30, endTop30]= this._positionCalculation(150);
               let [controlLeft30, controlTop30] = this._positionCalculation(90);
               controlLeft30 = ((height * 0.7) / 2) - (height * 0.07);
               controlTop30 = (height * 0.7) + (height * 0.07);
               return [startLeft30, startTop30, endLeft30, endTop30, controlLeft30, controlTop30];

            case 150: //30°～150°を移動（制御点は90°）
               let [startLeft150, startTop150] = this._positionCalculation(150);
               let [endLeft150, endTop150]= this._positionCalculation(270);
               let [controlLeft150, controlTop150] = this._positionCalculation(210);
               controlLeft150 = controlLeft150 - (height * 0.14);
               controlTop150 = controlTop150 - (height * 0.14);
               return [startLeft150, startTop150, endLeft150, endTop150, controlLeft150, controlTop150];

            case 270: //30°～150°を移動（制御点は90°）
               let [startLeft270, startTop270] = this._positionCalculation(270);
               let [endLeft270, endTop270]= this._positionCalculation(30);
               let [controlLeft270, controlTop270] = this._positionCalculation(330);
               controlLeft270 = controlLeft270 + (height * 0.14);
               controlTop270 = controlTop270 - (height * 0.14);
               return [startLeft270, startTop270, endLeft270, endTop270, controlLeft270, controlTop270];
         }
   }


   // _angleChange() {
   //    let value = this.el;
   //       if(value = 30 || 150) {
   //          value +=120;
   //       }
   //       else if (val = 270) {
   //          value = 30;
   //       }
   //       console.log(value);
   //       return value;
   //    }


   _animation() {
      const els = this.el;
      let keepAngle = this. angle;
      const time = 1500;
      let start;
      const _this = this;
      
      const rotation = keep()

      window.addEventListener("mousewheel", function(){
         start = undefined;
         rotation();
   });

   function keep() {
      
      function update (timestamp)  {
         let [startX, startY, endX, endY, controlX, controlY] = _this._movePosition(keepAngle);
         if (start === undefined) {
            start = timestamp;
         }
         const elapsed = start ? timestamp - start : 0;
         //console.log(start);
         const progress = Math.min(1, elapsed / time);
         let tp = 1 - progress;
         let moveLeft = (tp ** 2 * startX) + (2 * tp * progress * controlX) + (progress ** 2 * endX);
         let moveTop = (tp ** 2 * startY) + (2 * tp * progress * controlY) + (progress ** 2 * endY);
         els.style.left = moveLeft + "px";
         els.style.top = moveTop+ "px";
         if (progress < 1){
            requestAnimationFrame(update);
         }
         else if (progress === 1) {
            switch(keepAngle) {
               case 30:
                  keepAngle += 120;
                  break
               case 150:
                  keepAngle += 120;
                  break
               case 270:
                  keepAngle = 30;
                  break
            }
            console.log(keepAngle);
         }
      }
      return update;
   }
      

   }
}
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
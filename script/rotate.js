

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
      let endNum = num2 + 120;
      let controlNum = num2 + 60;
      let [startLeft, startTop] = this._positionCalculation(num2);
      let [endLeft, endTop]= this._positionCalculation(endNum);
      let [controlLeft, controlTop] = this._positionCalculation(controlNum);
      switch (num2) {
         case 30:
            controlLeft = ((height * 0.7) / 2) - (height * 0.07);
            controlTop = (height * 0.7) + (height * 0.07);
            break;
         case 150:
            controlLeft = controlLeft - (height * 0.14);
            controlTop = controlTop - (height * 0.14);
            break;
         case 270:
            controlLeft = controlLeft + (height * 0.14);
            controlTop = controlTop - (height * 0.14);
            break;
      }
      return[startLeft, startTop, endLeft, endTop, controlLeft, controlTop];
   }

   _animation() {
      const _this = this;
      const els = this.el;
      const elText = els.textContent;
      const mainEl = document.querySelector(".p-area__main");
      const elLink = els.firstElementChild.href;
      let mainLink = mainEl.firstChild.href;
      const time = 1500;
      let keepAngle = this. angle;
      let start;
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
            if (keepAngle === 270) {
               mainEl.firstElementChild.textContent = elText;
               mainLink = elLink;
               console.log(mainLink);
               console.log(mainEl.firstElementChild);
               mainEl.firstElementChild.setAttribute("href", mainLink);
            }
            console.log(keepAngle);
         }
      }
      return update;
   }
      

   }
}

document.addEventListener("DOMContentLoaded",function(){
   const WorkSlider = new slider(".swiper");
   //WorkSlider.start();
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
            el: '.swiper-pagination',
         },

         // Navigation arrows
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },

         // And if we need scrollbar
         scrollbar: {
            el: '.swiper-scrollbar',
         },
      });
   }

   //引数は空のオブジェクト
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

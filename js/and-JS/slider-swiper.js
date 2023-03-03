const swiper = new Swiper('.main-very__slider', {
   loop: true,
   spaceBetween: 30,
   slidesPerView: 1,
   effect: 'cube',
   grabCursor: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.very-butifal__arrow-right',
      prevEl: '.very-butifal__arrov-left',
   },
   speed: 1200,

});
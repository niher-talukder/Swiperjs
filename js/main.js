$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
        loop: false,
        
    });
});
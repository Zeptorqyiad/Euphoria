new Swiper('.feedback-swiper', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 23,
   pagination: {
      el: '.feedback-pagination',
   },
   scrollbar: {
      el: '.feedback-scrollbar',
   },
   autoplay: {
      disableOnInteraction: false,
      delay: 5000,
      stopOnLastSlide: false,
   },
   breakpoints: {
      986: {
         slidesPerView: 3,
      },
      658: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
})

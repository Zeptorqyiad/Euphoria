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
})


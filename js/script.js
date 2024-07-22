let burgerList = document.querySelector('.burger__list')
let burgerIcon = document.querySelector('.menu__icon')

burgerIcon.addEventListener('click', () => {
   if (burgerIcon) {
      burgerList.classList.toggle('active')
      document.body.classList.toggle('_lock')
      burgerIcon.classList.toggle('active')
   }
})

const bannerSwiper = new Swiper('.swiper-hero', {
   loop: true,
   pagination: {
      el: '.hero-pagination',
   },
   navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
   },
   scrollbar: {
      el: '.hero-scrollbar',
   },
   autoplay: {
      disableOnInteraction: false,
      delay: 5000,
      stopOnLastSlide: false,
   },
})
bannerSwiper()

const feedbackSwiper = new Swiper('.feedback-swiper', {
   loop: true,
   slidesPerView: 3,

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
feedbackSwiper()

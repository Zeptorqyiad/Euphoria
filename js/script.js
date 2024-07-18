let burgerList = document.querySelector('.burger__list')
let burgerIcon = document.querySelector('.menu__icon')

burgerIcon.addEventListener('click', () => {
   if (burgerIcon) {
      burgerList.classList.toggle('active')
      document.body.classList.toggle('_lock')
      burgerIcon.classList.toggle('active')
   }
})

new Swiper('.swiper', {
   loop: true,

   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },
   autoplay: {
      disableOnInteraction: false,
      delay: 5000,
      stopOnLastSlide: false,
   },
})

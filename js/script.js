let burgerList = document.querySelector('.burger__list')
let burgerIcon = document.querySelector('.menu__icon')

burgerIcon.addEventListener('click', () => {
   if (burgerIcon) {
      burgerList.classList.toggle('active')
      document.body.classList.toggle('_lock')
      burgerIcon.classList.toggle('active')
   }
})

new Swiper('.swiper-hero', {
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

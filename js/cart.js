// Массив всех элементов
let productArray = []

// Общая структура
let cartMain = document.querySelector('.cart__bracket')

let product = {
   image: '../assets/image/Shop/categories-1.png',
   name: 'Blue Flower Print Crop Top',
   color: 'Yellow',
   size: 'M',
   price: '$29.00',
   // qnty: 1,
   shipping: 'FREE',
   subtotal: '$29.00',
   action: '../assets/icon/Delete.svg',
}

let ul = document.createElement('ul')
ul.classList.add('cart__list')

function getStrong(text) {
   return `<strong>${text}</strong>`
}

function getCard(image, title, color, size, price, totalPrice, removeImg) {
   let productCart = document.createElement('li')

   let AllInfoCart = document.createElement('div')

   // Создание коробки деталей
   let detailsBox = document.createElement('div')
   let detailsBoxText = document.createElement('div')
   let imageCart = document.createElement('img')
   imageCart.src = image
   let detailsTitle = document.createElement('h4')
   detailsTitle.textContent = title
   let detailsColor = document.createElement('p')
   detailsColor.textContent = `Color: ${color}`
   let detailsSize = document.createElement('p')
   detailsSize.textContent = `Size: ${size}`

   // Создание цены
   let priceCart = document.createElement('p')
   priceCart.textContent = price

   // Создание коробки количества
   let quantityBox = document.createElement('div')
   let quantityMinus = document.createElement('button')
   let quantityCounter = document.createElement('span')
   let quantityPlus = document.createElement('button')

   // Создание отправки
   let shippingCart = document.createElement('p')
   shippingCart.textContent = 'FREE'

   // Создание общей суммы
   let subtotalCart = document.createElement('p')
   subtotalCart.textContent = totalPrice

   // Создание кнопки удаления
   let removeBtn = document.createElement('img')
   removeBtn.src = removeImg

   detailsBoxText.append(detailsTitle, detailsColor, detailsSize)
   detailsBox.append(imageCart, detailsBoxText)
   quantityBox.append(quantityMinus, quantityCounter, quantityPlus)

   productCart.append(
      detailsBox,
      priceCart,
      quantityBox,
      shippingCart,
      subtotalCart,
      removeBtn
   )
   AllInfoCart.append(productCart)

   // Стили деталей заказа
   productCart.classList.add('product__container')
   detailsBox.classList.add('details__box')
   detailsBoxText.classList.add('details__box-text')
   imageCart.classList.add('image-cart')
   detailsTitle.classList.add('details__title')
   detailsColor.classList.add('details__color')
   detailsSize.classList.add('details__size')
   priceCart.classList.add('details__price')
   quantityBox.classList.add('details__quantity')
   // quantityMinus.classList.add('')
   // quantityCounter.classList.add('')
   // quantityPlus.classList.add('')
   shippingCart.classList.add('details__shipping')
   subtotalCart.classList.add('details__totalPrice')
   removeBtn.classList.add('details__btn')
   return AllInfoCart
}

let cart = getCard(
   '../assets/image/Shop/categories-1.png',
   'Blue Flower Print Crop Top',
   'Yellow',
   'M',
   '$29.00',
   '$29.00',
   '../assets/icon/Delete.svg'
)

let cart2 = getCard(
   '../assets/image/Shop/categories-2.png',
   'Black Sweatshirt',
   'Black',
   'S',
   '$39.00',
   '$39.00',
   '../assets/icon/Delete.svg'
)

if (cart) {
   let hr = document.createElement('hr')
   hr.style.backgroundColor = '#BEBCBD'
   hr.style.height = '1px'
   hr.classList.add('hr-cart__container')
   cart.append(hr)
}

if (cart) {
   let emptyCart = document.querySelector('.cart-empty')
   emptyCart.style.display = 'none'
} else if (!cart) {
   let bracketCart = document.querySelector('.cart')
   emptyCart.style.display = 'block'
   bracketCart.style.display = 'none'
}

// Добавление в коробку
ul.append(cart, cart2)
cartMain.append(ul)

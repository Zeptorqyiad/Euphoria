// Массив всех элементов
let productArray = [
   {
      image: '../assets/image/Shop/categories-1.png',
      title: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: '$29.00',
   },
   {
      image: '../assets/image/Shop/categories-2.png',
      title: 'Black Sweatshirt',
      color: 'Black',
      size: 'S',
      price: '$39.00',
   },
]
let counter = 1

let cartDetails = productArray.Object.values[0]
console.log(cartDetails)

// Нужно сделать цикл, который будет доставать объекты, вытаскивая их значения

// Общая структура
let cartMain = document.querySelector('.cart__bracket')

let ul = document.createElement('ul')
ul.classList.add('cart__list')

function getCart(image, title, color, size, price, counter, totalPrice) {
   let productCart = document.createElement('li')

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
   quantityMinus.textContent = '-'
   let quantityCounter = document.createElement('span')
   quantityCounter.textContent = counter
   let quantityPlus = document.createElement('button')
   quantityPlus.textContent = '+'

   // Создание отправки
   let shippingCart = document.createElement('p')
   shippingCart.textContent = 'FREE'

   // Создание общей суммы
   let subtotalCart = document.createElement('p')
   subtotalCart.textContent = totalPrice

   // Создание кнопки удаления
   let removeBtn = document.createElement('img')
   removeBtn.src = '../assets/icon/Delete.svg'

   removeBtn.onclick = function () {
      productCart.remove()
   }

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
   quantityMinus.classList.add('details__minus')
   quantityCounter.classList.add('details__quantity--counter')
   quantityPlus.classList.add('details__plus')
   shippingCart.classList.add('details__shipping')
   subtotalCart.classList.add('details__totalPrice')
   removeBtn.classList.add('details__btn')

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
   return productCart
}

let cart = getCart(
   '../assets/image/Shop/categories-1.png',
   'Blue Flower Print Crop Top',
   'Yellow',
   'M',
   '$29.00'
)

// Добавление в коробку
ul.append(cart)
cartMain.append(ul)

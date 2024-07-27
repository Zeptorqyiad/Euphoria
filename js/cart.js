// Общая структура
let cartBracket = document.createElement('div')
let cartMain = document.querySelector('.cart__bracket')

let product = {
   name: productName,
   color: productColor,
   size: productSize,
   price: productPrice,
   qnty: productQnty,
   shipping: productShipping,
   subtotal: productSubtotal,
   action: productAction,
}

// Добавление в коробку
cartMain.append(cartBracket)

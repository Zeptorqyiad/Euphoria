const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 300

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '')
         const curentPopup = document.getElementById(popupName)
         popupOpen(curentPopup)
         e.preventDefault()
      })
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener('click', function (e) {
         popupCLose(el.closest('.account-popup'))
         e.preventDefault()
		})
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.account-popup.open')
      if (popupActive) {
         popupCLose(popupActive, open)
      } else {
         bodyLock()
      }
      curentPopup.classList.add('open')
      curentPopup.addEventListener('click', function (e) {
         if (!e.target.closest('.account-popup__content')) {
            popupCLose(e.target.closest('.account-popup'))
         }
      })
   }
}
function popupCLose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open')
      if (doUnlock) {
         bodyUnlock()
      }
   }
}
function bodyLock() {
   const lockPaddingValue =
      window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

   for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index]
      el.style.paddingRight = lockPaddingValue
   }
   body.style.paddingRight = lockPaddingValue
   body.classList.add('lock')

   unlock = false
   setTimeout(function () {
      unlock = true
   }, timeout)
}

function bodyUnlock() {
   setTimeout(function () {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index]
         el.style.paddingRight = '0px'
      }
      body.style.paddingRight = '0px'
      body.classList.remove('lock')
   }, timeout)

   unlock = false
   setTimeout(function () {
      unlock = true
   }, timeout)
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.account-popup.open')
      popupCLose(popupActive)
   }
})
;(function () {
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this
         while (node) {
            if (node.matches(css)) return node
            else node = node.parentElement
         }
         return null
      }
   }
})()
;(function () {
   if (!Element.prototype.matches) {
      Element.prototype.matches =
         Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector
   }
})()

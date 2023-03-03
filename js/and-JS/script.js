const burger = document.querySelector('.header__burger')
const Bclose = document.querySelector('.burger__close')
if (burger) {
   burger.addEventListener('click', e => {
      document.body.classList.add("_hidden")
      document.querySelector('.burger').classList.add('_active')
      document.body.classList.add('_hidden')
   })
}
if (Bclose) {
   Bclose.addEventListener('click', e => {
      document.body.classList.remove("_hidden")
      document.querySelector('.burger').classList.remove('_active')
      document.body.classList.remove('_hidden')
   })
}
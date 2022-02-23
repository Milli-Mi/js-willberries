
const cart = function () {
  const cartBtn = document.querySelector('.button-cart');
const cart = document.getElementById('modal-cart');
const closeBtn = cart.querySelector('.modal-close')

// cartBtn.onclick = function() {
//   console.log('click')
// }
// console.log(cart);

// cartBtn.addEventListener('click', function() {
//   console.log('click')
// })

// cartBtn.addEventListener('click', function() {
//   console.log('click1')
// })
cartBtn.addEventListener('click', function() {
cart.style.display = 'flex'
})

closeBtn.addEventListener('click', function() {
  cart.style.display = ''
  })
}

cart();

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if(window.scrollY >= 100) {
    navbar.classList.add('scroll-active')
  }

  else {
    navbar.classList.remove('scroll-active')
  }

})
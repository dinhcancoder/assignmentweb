window.addEventListener('scroll', () => {
  let headerBottom = document.querySelector('.header-bottom');
  headerBottom.classList.toggle('scrollSticky', window.scrollY > 185);
})
const burgerBtn = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelectorAll('.links');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel_block = document.querySelector('.carousel-block');
const carousel = document.querySelector('.carousel');
const img_first = document.querySelector('.first');

let width = img_first.offsetWidth;

next.addEventListener('click', () => {
  carousel_block.scrollBy(width, 0);
  if (carousel_block.scrollLeft + width == carousel.offsetWidth - carousel_block.offsetWidth) {
    next.style.display = "none";
  } 
  prev.style.display = "block";
  console.log(carousel_block.scrollLeft)
  console.log(carousel.offsetWidth - carousel_block.offsetWidth)
});

prev.addEventListener("click", () => {
  carousel_block.scrollBy(-width, 0);
  if (carousel_block.scrollLeft - width === 0) {
    prev.style.display = "none";
  }
  next.style.display = "block";
});

window.addEventListener("resize", () => (width = img_first.offsetWidth));

burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.style.position = 'fixed';
  } else burgerBtn.style.position = 'absolute';
});

menuItem.forEach(element => {
  element.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
    burgerBtn.style.position = 'absolute';
  });
});

document.addEventListener('click', (e) => {
  let target = e.target;
  if (!burgerMenu.contains(target) && burgerMenu.classList.contains('active')) {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    burgerBtn.style.position = 'absolute';
  }
});
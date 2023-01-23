const burgerBtn = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelectorAll('.links');

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
const menuBtn = document.querySelector('.menu-offer-button');
const menuList = document.querySelector('.menu-offer-list');
const menuIcon = document.querySelector('.menu-btn-icon');
const menuOferItem = document.querySelectorAll('.menu-offer-item');
const menuMobile = document.querySelector('.mobile-view');
const menuMobileList = document.querySelector('.menu ');
const menuitem = document.querySelectorAll('.menu-item');

console.log(menuBtn);
console.log(menuList);
console.log(menuIcon);

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('hide');
});

menuOferItem.forEach((item) => {
  item.addEventListener('click', () => {
    menuList.classList.add('hide');
  });
});

goUpButton = document.querySelector('.goUp-btn');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  console.log(y);
  if (y >= 700) {
    goUpButton.classList.add('show');
  } else if (y < 700) {
    goUpButton.classList.remove('show');
  }
});

menuMobile.addEventListener('click', () => {
  menuMobileList.classList.toggle('active');
  menuMobile.classList.toggle('mobile-active');
});

menuitem.forEach((item) => {
  item.addEventListener('click', () => {
    menuMobileList.classList.remove('active');
    menuMobile.classList.remove('mobile-active');
  });
});

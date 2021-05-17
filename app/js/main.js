let swiper = new Swiper(".mySwiper", {
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// header_burger //

let burgerButton = document.querySelector('.header-burger__menu');

burgerButton.addEventListener('click', menuBurger);

function menuBurger() {
  let menuList = document.querySelector('.header-list');
  if (menuList.classList.contains('menu_active')) {
    menuList.classList.remove('menu_active')
  } else {
    menuList.classList.add('menu_active')
  }
  burgerButton.classList.toggle('burger__active')
}

// header_burger //

AOS.init();
let navHeader = document.querySelector('.main-header__navigation');
let navToggle = document.querySelector('.main-header__toggle');

navHeader.classList.remove('main-header__navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('main-header__navigation--closed')) {
    navHeader.classList.remove('main-header__navigation--closed');
    navHeader.classList.add('main-header__navigation--opened');
  } else {
    navHeader.classList.add('main-header__navigation--closed');
    navHeader.classList.remove('main-header__navigation--opened');
  }
});

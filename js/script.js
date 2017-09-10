var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var application = document.querySelector('.form__apply');
var modalSuccess = document.querySelector('.modal-success');
var modalFailure = document.querySelector('.modal-failure');
var modalSuccessClose = document.querySelector('.modal-success__close');
var modalFailureClose = document.querySelector('.modal-failure__close');


application.addEventListener('click', function(event) {
  event.preventDefault();
  modalSuccess.classList.add('modal-success--show');
});

modalSuccessClose.addEventListener('click', function(event) {
  event.preventDefault();
  modalSuccess.classList.remove('modal-success--show');
});

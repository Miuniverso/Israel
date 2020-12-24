'use strict';

var faqTitle = document.querySelectorAll('.faq__item'),
    active = document.getElementsByClassName('faq__item--open');

Array.from(faqTitle).forEach(function(item, i, faqTitle) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный раздел, и это не тот, по которому кликнули
      active[0].classList.remove('faq__item--open');

    // изменить состояние класса на текущем разделе: добавить если не было, убрать если было.
    this.classList.toggle('faq__item--open');
  });
});

var popupBtn = document.querySelector(".main-nav__link--popup");
var popupWrapper = document.querySelector(".popup");
var overlay = document.querySelector(".popup__overlay");
var body = document.querySelector("body");

popupBtn.addEventListener("click", function() {
  popupWrapper.style.display = "block";
  // popupWrapper.classList.toggle("visible");
  overlay.classList.add("visible");
})

var close = document.querySelector(".popup__close");

close.addEventListener("click", function() {
  popupWrapper.style.display = "none";
  overlay.classList.remove("visible");
})

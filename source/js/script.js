'use strict';

var faqTitle = document.querySelectorAll('.faq__item'),
    active = document.getElementsByClassName('faq__item--open');

Array.from(faqTitle).forEach(function(item, i, faqTitle) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('faq__item--open'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('faq__item--open');
  });
});

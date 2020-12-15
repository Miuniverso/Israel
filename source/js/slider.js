// slider

var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoHeight: true,

      pagination: {
        el: '.rewiews-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });

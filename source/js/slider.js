// slider

var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoHeight: true,

  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },
});

var mySwiper;

var SwiperOn = function () {
  console.log("ON");
  mySwiper = new Swiper(".life__wrapper", {
  pagination: {
    el: ".life__pagination",
    type: "bullets",
  },
});
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth < 1023) {
    console.log("< 1023");
    // Array.from(sliders).forEach(function(slider, i, sliders) {
    //   console.log(i);
    //   slider.classList.add("swiper-slide");
    // })
    // new Swiper(".life__wrapper");
    SwiperOn();
  // } else {
  //   // Array.from(sliders).forEach(function(slider, i, sliders) {
  //   //   console.log(i);
  //   //   slider.classList.remove("swiper-slide");
  //   //   console.log(slider.className);
  //   // })
  //   mySwiper.destroy(true, true);
  // }

}, false);

// var swiper = new Swiper(".life__wrapper", {
//   pagination: {
//           el: ".life__pagination",
//           clickable: true,
//         },
//   // Responsive breakpoints
//   breakpoints: {
//
//   320: {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//   },
//
//   768: {
//     slidesPerView: 2,
//     slidesPerGroup: 2,
//     }
//   }
// })

// var sliders = document.querySelectorAll(".life__image");
// var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//
// if (viewportWidth < 1023) {
//   console.log("< 1023");
//   Array.from(sliders).forEach(function(slider, i) {
//     console.log(i);
//     slider.classList.add("swiper-slide");
//     console.log(slider.className);
//   })
//   new Swiper(".life__wrapper");
// } else {
//   Array.from(sliders).forEach(function(slider, i) {
//     console.log(i);
//     slider.classList.remove("swiper-slide");
//     console.log(slider.className);
//   })
// }




// var SwiperOn = function () {
//   console.log("ON");
//   var mySwiper = new Swiper(lifeWrapper, {
//
//     loop: true,
//
//     pagination: {
//       el: `.izrael__pagination`,
//       clickable: true,
//     },
//
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//       },
//
//       768: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       }
//     }
//
//   });
//
//   };

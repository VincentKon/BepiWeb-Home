var swiper1 = new Swiper(".js-slide-content-recent", {
  slidesPerView: 3,
  spaceBetween: 25,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  pagination: {
    el: ".js-swiper-pagination-recent",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".js-swiper-button-next-recent",
    prevEl: ".js-swiper-button-prev-recent",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

var swiper3 = new Swiper(".js-slide-content-oldest", {
  slidesPerView: 3,
  spaceBetween: 25,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  pagination: {
    el: ".js-swiper-pagination-oldest",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".js-swiper-button-next-oldest",
    prevEl: ".js-swiper-button-prev-oldest",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".js-slide-content-popular", {
  slidesPerView: 3,
  spaceBetween: 25,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  pagination: {
    el: ".js-swiper-pagination-popular",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".js-swiper-button-next-popular",
    prevEl: ".js-swiper-button-prev-popular",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});



const Home = {
  setIconsSwiper: () => {
    const swiper = new Swiper('.swiper-icons', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      direction:'horizontal',
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      breakpoints: {
        0: {
          slidesPerView:1,
          spaceBetween:0
        },
        565: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  },

  init: function () {
    const _this = this;

    _this.setIconsSwiper();
  },
};

export default Home;

import Swiper, { Navigation, Pagination } from "swiper"

Swiper.use([Navigation, Pagination]);

const Home = {
  setIconsSwiper: () => {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
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

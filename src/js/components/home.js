

const Home = {
  setIconsSwiper: () => {
    const swiper = new Swiper('.swiper-icons', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      direction: 'horizontal',
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
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
  setStructureSwiper: () => {
    const swiper = new Swiper('.swiper-structure', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      direction: 'horizontal',
      autoplay: {
        delay: 4000
      },
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
  setTeamSwiper: () => {
    const swiper = new Swiper('.swiper-team', {
      // Optional parameters
      direction: 'horizontal',
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        565: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
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
  accordions: () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        accordionItem.classList.toggle("active");
        accordionContent.classList.toggle("active");
      });
    });
  },

  animateElements: () => {
    const element = document.querySelector('.animate-el');

    function animateOnScroll() {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight / 1.5) {
        element.classList.add('animate');
      }
    }

    window.addEventListener('scroll', animateOnScroll);
  },

  init: function () {
    const _this = this;
    _this.setIconsSwiper();
    _this.setStructureSwiper();
    _this.accordions();
    _this.setTeamSwiper();

    _this.animateElements();
  },
};

export default Home;

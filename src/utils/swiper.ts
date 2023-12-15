import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

function swiperJockeys() {
  new Swiper('.swiper.is-jockeys', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 1750,
  });
}

function swiperPartnersLine(selector: string, reverseDirection: boolean) {
  new Swiper(selector, {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: reverseDirection,
    },
    speed: 2500,
  });
}

export { swiperJockeys, swiperPartnersLine };

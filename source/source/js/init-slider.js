import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initSliderJuri = () => {

  const sliderJuri = new Swiper('.juri__swiper', {

    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    initialSlide: -4,
    speed: 700,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 2,
        simulateTouch: true,
      },
      1366: {
        slidesPerView: 4,
        simulateTouch: false,
      }
    },
    navigation: {
      nextEl: '.juri__button-next',
      prevEl: '.juri__button-prev',
    },
  });

  return sliderJuri;
};

const initSliderReviews = () => {

  const sliderReviews = new Swiper('.reviews__swiper', {

    modules: [Navigation],
    direction: 'horizontal',
    initialSlide: 0,
    speed: 700,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 1,
        simulateTouch: true,
      },
      1366: {
        slidesPerView: 1,
        simulateTouch: false,
      }
    },
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });

  return sliderReviews;
};

export {initSliderJuri, initSliderReviews};

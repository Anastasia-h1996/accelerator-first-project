// https://swiperjs.com/get-started#installation

import {initVideoPlayer} from './video.js';
import {initPriceTab, initFaqTab} from './init-tab.js';
import {initSliderJuri, initSliderReviews} from './init-slider.js';
import {validateForm, validateInputs} from './validate.js';

validateForm();
validateInputs();
initSliderJuri();
initSliderReviews();
initVideoPlayer();
initPriceTab();
initFaqTab();

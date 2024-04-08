import {Accordion} from './accordion.js';

const initTab = (controlsContainer, controlButtons, tabLists) => {

  const clearActiveItems = () => {
    controlButtons.forEach((controlButton) => controlButton.classList.remove('is-active'));
    tabLists.forEach((tabList) => tabList.classList.remove('is-show'));
  };

  if (controlButtons.length && tabLists.length) {

    controlsContainer.addEventListener('click', (evt) => {
      const controlButton = evt.target.closest('.tab-control-button');

      if (!controlButton) {
        return;
      }

      evt.preventDefault();

      const dataTab = evt.target.getAttribute('data-tab');
      const linkedTab = document.querySelector(dataTab);

      if (linkedTab) {
        clearActiveItems();
        linkedTab.classList.add('is-show');

        controlButtons.forEach((control) => {
          control.classList.remove('is-active');
        });

        controlButton.classList.add('is-active');
      }
    });

  }

};

const initPriceTab = () => {
  const controlsContainer = document.querySelector('.price-tab__controls');
  const controlButtons = document.querySelectorAll('.price-tab__control-button');
  const tabLists = document.querySelectorAll('.price-tab__list');

  initTab(controlsContainer, controlButtons, tabLists);
};

const initFaqTab = () => {
  const controlsContainer = document.querySelector('.faq-tab__controls');
  const controlButtons = document.querySelectorAll('.faq-tab__control-button');
  const tabLists = document.querySelectorAll('.faq-tab__item');

  initTab(controlsContainer, controlButtons, tabLists);

  document.querySelectorAll('.accordion-details').forEach((element) => {
    new Accordion(element);
  });
};

export {initPriceTab, initFaqTab};

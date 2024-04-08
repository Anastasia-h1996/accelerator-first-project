const form = document.querySelector('.contact-form__form');
const nameInput = form.querySelector('.contact-form__input-name');
const phoneInput = form.querySelector('.contact-form__input-phone');

const NAME_REGEX = /^[а-яА-ЯЁёa-zA-Z\s]+$/;
const PHONE_REGEX = /^(8|\+7)[1-9]{10}$/;

const isValidName = (name) => NAME_REGEX.test(name);
const isValidPhone = (phone) => PHONE_REGEX.test(phone);

const createError = (element, errorMessage) => {

  const errorElementCheck = element.parentElement.querySelector('.contact-form__error');

  if (errorElementCheck) {
    errorElementCheck.textContent = errorMessage;
    errorElementCheck.classList.add('contact-form__error--error');
    return;
  }

  const errorElement = document.createElement('p');
  errorElement.className = 'contact-form__error contact-form__error--error';
  errorElement.textContent = errorMessage;

  element.insertAdjacentElement('afterend', errorElement);
};

const clearError = (element) => {
  const errorElementCheck = element.parentElement.querySelector('.contact-form__error');
  if (errorElementCheck) {
    errorElementCheck.remove();
  }
};

const validateInput = (inputElement, pattern, errorMessage) => {
  inputElement.addEventListener('input', () => {
    const inputValue = inputElement.value;
    const isValid = pattern.test(inputValue);

    if (!isValid && inputValue.length > 0) {
      createError(inputElement, errorMessage);
    } else {
      clearError(inputElement);
    }
  });
};

const validateInputs = () => {
  validateInput(nameInput, NAME_REGEX, 'Некорректный формат имени');
  validateInput(phoneInput, PHONE_REGEX, 'Некорректный формат номера');
};

const validateForm = () => {

  form.setAttribute('novalidate', 'novalidate');

  form.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const name = nameInput.value;
    const phone = phoneInput.value;

    if (!name || !phone) {
      if (!name) {
        createError(nameInput, 'Заполните это поле');
      }
      if (!phone) {
        createError(phoneInput, 'Заполните это поле');
      }
      return;
    }

    if (!isValidName(name)) {
      createError(nameInput, 'Некорректный формат имени');
      return;
    }

    if (!isValidPhone(phone)) {
      createError(phoneInput, 'Некорректный формат номера');
      return;
    }

    form.submit();
  });

};

export {validateForm, validateInputs};

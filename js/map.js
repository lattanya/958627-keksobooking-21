'use strict';

(function () {
  // константы
  const MIN_Y_COORD = 130;
  const MAX_Y_COORD = 630;
  const MAX_PINS_AMMOUNT = 5;

  const map = document.querySelector(`.map`);
  const filtersContainer = map.querySelector(`.map__filters-container`);
  const form = document.querySelector(`.ad-form`);

  const generateCardsAndPins = function (data) {
    const fragment = document.createDocumentFragment();
    const fragmentForCards = document.createDocumentFragment();

    const partialData = data.slice(0, MAX_PINS_AMMOUNT);

    for (let i = 0; i < partialData.length; i++) {
      const obj = partialData[i];
      const pin = window.renderPin(obj);
      const card = window.renderCard(obj);
      fragment.appendChild(pin);
      fragmentForCards.appendChild(card);

      window.addShowCardHandler(pin, card);
    }

    map.appendChild(fragment);
    map.insertBefore(fragmentForCards, filtersContainer);
  };

  const toggleForm = function (isDisabled) {
    const fieldsets = form.querySelectorAll(`fieldset`);
    for (let i = 0; i < fieldsets.length; i++) {
      const fieldset = fieldsets[i];
      fieldset.disabled = isDisabled;

      const inputs = fieldset.querySelectorAll(`input`);
      for (let k = 0; k < inputs.length; k++) {
        const input = inputs[k];
        input.disabled = isDisabled;
      }
    }

    if (isDisabled) {
      form.classList.add(`ad-form--disabled`);
    } else {
      form.classList.remove(`ad-form--disabled`);
    }
  };

  toggleForm(true);

  // функция позиции пина

  const mainPin = map.querySelector(`.map__pin--main`);
  const findPinPosition = function () {
    const coordX = Math.round(mainPin.offsetLeft + window.PinSizes.WIDTH / 2);
    const coordY = Math.round(mainPin.offsetTop + window.PinSizes.HEIGHT);
    const addressInput = form.querySelector(`#address`);
    addressInput.value = coordX + `, ` + coordY;
  };

  // обработчик события активация карты

  const onMainPinMousedown = function () {
    map.classList.remove(`map--faded`);
    toggleForm(false);
    findPinPosition();

    if (window.getData().length === 0) {
      window.loadData(function (data) {
        window.saveData(data);
        generateCardsAndPins(data);
      }, window.showErrorMessage);
    }

    const onMainPinMousemove = function (evt) {
      const pageWidth = document.querySelector(`html`).clientWidth;
      const mapWidth = map.clientWidth;
      const mapOffset = (pageWidth - mapWidth) / 2;
      const maxXCoord = mapWidth + mapOffset;

      mainPin.style.left = evt.pageX - mapOffset + `px`;
      mainPin.style.top = evt.pageY + `px`;

      if (evt.pageY < MIN_Y_COORD) {
        mainPin.style.top = MIN_Y_COORD + `px`;
      } else if (evt.pageY > MAX_Y_COORD) {
        mainPin.style.top = MAX_Y_COORD + `px`;
      }

      if (evt.pageX < mapOffset) {
        mainPin.style.left = `0`;
      } else if (evt.pageX > maxXCoord) {
        mainPin.style.left = mapWidth - window.PinSizes.WIDTH + `px`;
      }

    };

    const onMainPinMouseup = function () {
      findPinPosition();
      document.removeEventListener(`mouseup`, onMainPinMouseup);
      document.removeEventListener(`mousemove`, onMainPinMousemove);
    };

    document.addEventListener(`mousemove`, onMainPinMousemove);
    document.addEventListener(`mouseup`, onMainPinMouseup);
  };

  const onMainPinEnterKeydown = function (evt) {
    if (evt.keyCode === window.KeyCodes.ENTER) {
      onMainPinMousedown();
    }
  };

  mainPin.addEventListener(`mousedown`, onMainPinMousedown);
  mainPin.addEventListener(`keydown`, onMainPinEnterKeydown);

  // экспорт

  window.form = form;
  window.map = map;
  window.generateCardsAndPins = generateCardsAndPins;
  window.toggleForm = toggleForm;
  window.mainPin = mainPin;
})();

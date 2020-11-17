'use strict';

(function () {
  // константы
  const MIN_Y_COORD = 130;
  const MAX_Y_COORD = 630;
  const MAX_PINS_AMMOUNT = 5;

  const map = document.querySelector(`.map`);
  const filtersContainer = map.querySelector(`.map__filters-container`);
  const form = document.querySelector(`.ad-form`);

  let isPinsRendered = false;

  const generateCardsAndPins = function (data) {
    if (isPinsRendered) {
      return;
    }

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

    isPinsRendered = true;
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

    if (!isPinsRendered) {
      if (window.getData().length === 0) {
        window.loadData(function (data) {
          window.saveData(data);
          generateCardsAndPins(data);
        }, window.showErrorMessage);
      } else {
        generateCardsAndPins(window.getData());
      }
    }

    const onMainPinMousemove = function (evt) {
      const pageWidth = document.querySelector(`html`).clientWidth;
      const mapWidth = map.clientWidth;
      const mapOffset = (pageWidth - mapWidth) / 2;
      const maxXCoord = mapWidth + mapOffset;

      mainPin.style.left = evt.pageX - mapOffset - window.PinSizes.WIDTH / 2 + `px`;
      mainPin.style.top = evt.pageY - window.PinSizes.HEIGHT + `px`;

      if (evt.pageY < MIN_Y_COORD) {
        mainPin.style.top = MIN_Y_COORD - window.PinSizes.HEIGHT + `px`;
      } else if (evt.pageY > MAX_Y_COORD) {
        mainPin.style.top = MAX_Y_COORD - window.PinSizes.HEIGHT + `px`;
      }

      if (evt.pageX < mapOffset) {
        mainPin.style.left = -window.PinSizes.WIDTH / 2 + `px`;
      } else if (evt.pageX > maxXCoord) {
        mainPin.style.left = mapWidth - window.PinSizes.WIDTH / 2 + `px`;
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

  const clearMap = function () {
    if (!isPinsRendered) {
      return;
    }

    const allPins = window.map.querySelectorAll(`.map__pin:not(.map__pin--main)`);
    allPins.forEach(function (pin) {
      pin.remove();
    });
    const allCards = window.map.querySelectorAll(`.popup`);
    if (allCards) {
      allCards.forEach(function (card) {
        card.remove();
      });
    }

    isPinsRendered = false;
  };

  // экспорт

  window.form = form;
  window.map = map;
  window.mainPin = mainPin;
  window.MAX_PINS_AMMOUNT = MAX_PINS_AMMOUNT;
  window.generateCardsAndPins = generateCardsAndPins;
  window.toggleForm = toggleForm;
  window.findPinPosition = findPinPosition;
  window.clearMap = clearMap;
})();

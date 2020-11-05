'use strict';

(function () {
// в этой функции обработчики событий клика и клавиатуры на пин, которые будут показывать карточку
// обявление в функции обработчики и будем добавлять их для пина, также как добавляли для главного пина

  const addShowCardHandler = function (pin, card) {

    const onPinClick = function () {
      const visibleCard = window.map.querySelector('.map__card:not(.hidden)');

      if (visibleCard !== null) {
        visibleCard.classList.add('hidden');
      }

      card.classList.remove('hidden');
    };

    pin.addEventListener('click', onPinClick);

    const onPinEnterKeydown = function (evt) {
      if (evt.keyCode === window.KeyCodes.ENTER) {
        onPinClick();
      }
    };

    pin.addEventListener('keydown', onPinEnterKeydown);

    // добавить обработчики для клика и для клаивши Esc, которые будут закрывать карточку
    // клик будет обрабатываться на крестике, а esc на документе, т.е. при нажатии esc проверять
    // есть ли видимая карточка и закрывать ее

    const popupClose = card.querySelector('.popup__close');
    const onPopupCloseClick = function () {

      card.classList.add('hidden');

    };

    popupClose.addEventListener('click', onPopupCloseClick);

  };

  const onCardEscKeydown = function (evt) {
    if (evt.keyCode === window.KeyCodes.ESC) {
      const visibleCard = window.map.querySelector('.map__card:not(.hidden)');

      if (visibleCard !== null) {
        visibleCard.classList.add('hidden');
      }
    }
  };

  window.addEventListener('keydown', onCardEscKeydown);

  // эспорты

  window.addShowCardHandler = addShowCardHandler;

})();


'use strict';

(function () {
// в этой функции обработчики событий клика и клавиатуры на пин, которые будут показывать карточку
// обявление в функции обработчики и будем добавлять их для пина, также как добавляли для главного пина

  var addShowCardHandler = function (pin, card) {

    var onPinClick = function () {
      var visibleCard = window.map.querySelector('.map__card:not(.hidden)');

      if (visibleCard !== null) {
        visibleCard.classList.add('hidden');
      }

      card.classList.remove('hidden');
    };

    pin.addEventListener('click', onPinClick);

    var onPinEnterKeydown = function (evt) {
      if (evt.keyCode === window.KeyCodes.ENTER) {
        onPinClick();
      }
    };

    pin.addEventListener('keydown', onPinEnterKeydown);

    // добавить обработчики для клика и для клаивши Esc, которые будут закрывать карточку
    // клик будет обрабатываться на крестике, а esc на документе, т.е. при нажатии esc проверять
    // есть ли видимая карточка и закрывать ее

    var popupClose = card.querySelector('.popup__close');
    var onPopupCloseClick = function () {

      card.classList.add('hidden');

    };

    popupClose.addEventListener('click', onPopupCloseClick);

  };

  var onCardEscKeydown = function (evt) {
    if (evt.keyCode === window.KeyCodes.ESC) {
      var visibleCard = window.map.querySelector('.map__card:not(.hidden)');

      if (visibleCard !== null) {
        visibleCard.classList.add('hidden');
      }
    }
  };

  window.addEventListener('keydown', onCardEscKeydown);

  // эспорты

  window.addShowCardHandler = addShowCardHandler;

})();


`use strict`;

(function () {
// перенесла переменную, объявляющую блок ошибки
  const template = document.querySelector(`#error`);
  const errorBlock = template.content.querySelector(`.error`);

  const showErrorMessage = function (errorText) {

    const clone = errorBlock.cloneNode(true);
    const messageNode = clone.querySelector(`.error__message`);
    messageNode.textContent = errorText;
    document.body.appendChild(clone);

    const errorButton = clone.querySelector(`.error__button`);

    const clearAddEventListner = function () {
      errorButton.removeEventListener(`click`, closeErrorMessageByClick);
      document.removeEventListener(`click`, closeErrorMessageByClick);
      window.removeEventListener(`keydown`, closeErrorMessageByKeydown);
    };

    const closeErrorMessageByClick = function () {
      clone.remove();
      clearAddEventListner();
    };

    errorButton.addEventListener(`click`, closeErrorMessageByClick);
    document.addEventListener(`click`, closeErrorMessageByClick);

    const closeErrorMessageByKeydown = function (evt) {
      if (evt.keyCode === window.KeyCodes.ESC) {
        closeErrorMessageByClick();
      }
    };

    window.addEventListener(`keydown`, closeErrorMessageByKeydown);
  };

  // экспорты

  window.showErrorMessage = showErrorMessage;
})();

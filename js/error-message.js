`use strict`;

(function () {
  const showErrorMessage = function (errorText) {
    const template = document.querySelector(`#error`);
    const errorBlock = template.content.querySelector(`.error`);
    const clone = errorBlock.cloneNode(true);
    const messageNode = clone.querySelector(`.error__message`);
    messageNode.textContent = errorText;
    document.body.appendChild(clone);
  };

  // экспорты
  window.showErrorMessage = showErrorMessage;
})();

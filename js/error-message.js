'use strict';

(function () {
  var showErrorMessage = function (errorText) {
    var template = document.querySelector('#error');
    var errorBlock = template.content.querySelector('.error');
    var clone = errorBlock.cloneNode(true);
    var messageNode = clone.querySelector('.error__message');
    messageNode.textContent = errorText;
    document.body.appendChild(clone);
  };

  // экспорты
  window.showErrorMessage = showErrorMessage;
})();

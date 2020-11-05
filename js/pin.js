'use strict';

(function () {
  const renderPin = function (obj) {
    const template = document.querySelector('#pin');
    const content = template.content.querySelector('button');
    const pin = content.cloneNode(true);
    const img = pin.querySelector('img');

    img.src = obj.author.avatar;
    pin.style.left = obj.location.x + 'px';
    pin.style.top = obj.location.y + 'px';

    return pin;
  };

  // экспорт
  window.renderPin = renderPin;

})();

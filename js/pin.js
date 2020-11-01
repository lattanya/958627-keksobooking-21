'use strict';

(function () {
  var renderPin = function (obj) {
    var template = document.querySelector('#pin');
    var content = template.content.querySelector('button');
    var pin = content.cloneNode(true);
    var img = pin.querySelector('img');

    img.src = obj.author.avatar;
    pin.style.left = obj.location.x + 'px';
    pin.style.top = obj.location.y + 'px';

    return pin;
  };

  // экспорт
  window.renderPin = renderPin;

})();

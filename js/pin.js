'use strict';

(function () {
  class Pin {
    static WIDTH = 65;
    static HEIGHT = 87;

    constructor (offer) {
      this.offer = offer;
      this.view = this.render();
    };

    render () {
      const template = document.querySelector(`#pin`);
      const content = template.content.querySelector(`button`);
      const pin = content.cloneNode(true);
      const img = pin.querySelector(`img`);

      img.src = this.offer.author.avatar;
      pin.style.left = this.offer.location.x + `px`;
      pin.style.top = this.offer.location.y + `px`;

      return pin;
    };
  };

  // экспорт
  window.Pin = Pin;

})();

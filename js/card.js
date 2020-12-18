'use strict';

(function () {

  class Card {
    constructor (data) {
      this.data = data;
      this.view = this.render();
    };

    render() {
      const template = document.querySelector(`#card`);
      const content = template.content.querySelector(`.map__card`);
      const card = content.cloneNode(true);
      const { author, offer } = this.data;

      const img = card.querySelector(`img`);
      img.src = author.avatar;

      const title = card.querySelector(`.popup__title`);
      title.textContent = offer.title;

      const address = card.querySelector(`.popup__text--address`);
      address.textContent = offer.address;

      const price = card.querySelector(`.popup__text--price`);
      price.textContent = offer.price + ` ₽/ночь`;

      const type = card.querySelector(`.popup__type`);
      type.textContent = window.HouseTypes[offer.type];

      const capacity = card.querySelector(`.popup__text--capacity`);
      capacity.textContent = offer.rooms + ` комнаты для ` + offer.guests + ` гостей`;

      const time = card.querySelector(`.popup__text--time`);
      time.textContent = `Заезд после ` + offer.checkin + `, выезд до ` + offer.checkout;

      const features = card.querySelector(`.popup__features`);
      features.innerHTML = ``;

      for (let i = 0; i < offer.features.length; i++) {
        const feature = offer.features[i];
        const item = document.createElement(`li`);
        item.classList.add(`popup__feature`);
        item.classList.add(`popup__feature--` + feature);
        features.appendChild(item);
      }

      const description = card.querySelector(`.popup__description`);
      description.textContent = offer.description;

      const photosWrapper = card.querySelector(`.popup__photos`);
      const photo = photosWrapper.querySelector(`.popup__photo`);
      photosWrapper.innerHTML = ``;

      for (let k = 0; k < offer.photos.length; k++) {
        const photoSrc = offer.photos[k];
        const imgCopy = photo.cloneNode();
        imgCopy.src = photoSrc;
        photosWrapper.appendChild(imgCopy);
      }

      card.classList.add(`hidden`);


      return card;
    };
  };

  // экспорт
  window.Card = Card;

})();

'use strict';

(function () {
  const renderCard = function (obj) {
    const template = document.querySelector(`#card`);
    const content = template.content.querySelector(`.map__card`);
    const card = content.cloneNode(true);

    const img = card.querySelector(`img`);
    img.src = obj.author.avatar;

    const title = card.querySelector(`.popup__title`);
    title.textContent = obj.offer.title;

    const address = card.querySelector(`.popup__text--address`);
    address.textContent = obj.offer.address;

    const price = card.querySelector(`.popup__text--price`);
    price.innerHTML = obj.offer.price + ` &#x20bd;/ночь`;

    const type = card.querySelector(`.popup__type`);
    type.textContent = window.HouseTypes[obj.offer.type];

    const capacity = card.querySelector(`.popup__text--capacity`);
    capacity.textContent = obj.offer.rooms + ` комнаты для ` + obj.offer.guests + ` гостей`;

    const time = card.querySelector(`.popup__text--time`);
    time.textContent = `Заезд после ` + obj.offer.checkin + `, выезд до ` + obj.offer.checkout;

    const features = card.querySelector(`.popup__features`);
    features.innerHTML = ``;
    for (let i = 0; i < obj.offer.features.length; i++) {
      const feature = obj.offer.features[i];
      const item = document.createElement(`li`);
      item.classList.add(`popup__feature`);
      item.classList.add(`popup__feature--` + feature);
      features.appendChild(item);
    }

    const description = card.querySelector(`.popup__description`);
    description.textContent = obj.offer.description;

    const photosWrapper = card.querySelector(`.popup__photos`);
    const photo = photosWrapper.querySelector(`.popup__photo`);
    photosWrapper.innerHTML = ``;
    for (let k = 0; k < obj.offer.photos.length; k++) {
      const photoSrc = obj.offer.photos[k];
      const imgCopy = photo.cloneNode();
      imgCopy.src = photoSrc;
      photosWrapper.appendChild(imgCopy);
    }

    card.classList.add(`hidden`);

    return card;
  };

  // экспорт
  window.renderCard = renderCard;

})();

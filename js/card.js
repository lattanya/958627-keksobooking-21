'use strict';

(function () {
  var renderCard = function (obj) {
    var template = document.querySelector('#card');
    var content = template.content.querySelector('.map__card');
    var card = content.cloneNode(true);

    var img = card.querySelector('img');
    img.src = obj.author.avatar;

    var title = card.querySelector('.popup__title');
    title.textContent = obj.offer.title;

    var address = card.querySelector('.popup__text--address');
    address.textContent = obj.offer.address;

    var price = card.querySelector('.popup__text--price');
    price.innerHTML = obj.offer.price + ' &#x20bd;/ночь';

    var type = card.querySelector('.popup__type');
    type.textContent = window.HouseTypes[obj.offer.type];

    var capacity = card.querySelector('.popup__text--capacity');
    capacity.textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';

    var time = card.querySelector('.popup__text--time');
    time.textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;

    var features = card.querySelector('.popup__features');
    features.innerHTML = '';
    for (var i = 0; i < obj.offer.features.length; i++) {
      var feature = obj.offer.features[i];
      var item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add('popup__feature--' + feature);
      features.appendChild(item);
    }

    var description = card.querySelector('.popup__description');
    description.textContent = obj.offer.description;

    var photosWrapper = card.querySelector('.popup__photos');
    var photo = photosWrapper.querySelector('.popup__photo');
    photosWrapper.innerHTML = '';
    for (var k = 0; k < obj.offer.photos.length; k++) {
      var photoSrc = obj.offer.photos[k];
      var imgCopy = photo.cloneNode();
      imgCopy.src = photoSrc;
      photosWrapper.appendChild(imgCopy);
    }

    card.classList.add('hidden');

    return card;
  };

  // экспорт
  window.renderCard = renderCard;

})();

'use strict';

(function () {

  const LOW_PRICE = 10000;
  const HIGH_PRICE = 50000;

  // фильтр по полю тип жилья

  const mapFiltersForm = window.map.querySelector(`.map__filters`);
  const filterHouseType = mapFiltersForm.querySelector(`#housing-type`);
  const filterHousePrice = mapFiltersForm.querySelector(`#housing-price`);
  const filterHouseRooms = mapFiltersForm.querySelector(`#housing-rooms`);
  const filterHouseGuests = mapFiltersForm.querySelector(`#housing-guests`);
  const filterHouseFeatures = Array.from(mapFiltersForm.querySelectorAll(`input[name="features"]`));

  // в константы записаны значения фильтров прайс
  // фильтр переписан используя функции проверки для каждого фильтра

  const checkFilterHouseTypeValue = function (offer) {
    const valueFilterHouseType = filterHouseType.value;
    const offerType = offer.type;

    return (valueFilterHouseType === window.FilterHouseTypes.ANY || offerType === valueFilterHouseType);
  };

  const checkFilterHousePriceValue = function (offer) {
    const valueFilterHousePrice = filterHousePrice.value;
    const offerPrice = offer.price;

    switch (valueFilterHousePrice) {
      case window.FilterHousePrice.ANY:
        return true;
      case window.FilterHousePrice.LOW:
        return offerPrice < LOW_PRICE;
      case window.FilterHousePrice.MIDDLE:
        return offerPrice >= LOW_PRICE && offerPrice <= HIGH_PRICE;
      case window.FilterHousePrice.HIGH:
        return offerPrice > HIGH_PRICE;
      default:
        return false;
    }
  };

  const checkFilterHouseRoomsValue = function (offer) {
    const valueFilterHouseRooms = filterHouseRooms.value;
    const offerRooms = offer.rooms;

    switch (valueFilterHouseRooms) {
      case window.FilterHouseRooms.ANY:
        return true;
      case window.FilterHouseRooms.ONE:
        return offerRooms === Number(valueFilterHouseRooms);
      case window.FilterHouseRooms.TWO:
        return offerRooms === Number(valueFilterHouseRooms);
      case window.FilterHouseRooms.THREE:
        return offerRooms === Number(valueFilterHouseRooms);
      default:
        return false;
    }
  };

  const checkFilterHouseGuestsValue = function (offer) {
    const valueFilterHouseGuests = filterHouseGuests.value;
    const offerGuests = offer.guests;

    switch (valueFilterHouseGuests) {
      case window.FilterHouseGuests.ANY:
        return true;
      case window.FilterHouseGuests.ONE:
        return offerGuests === Number(valueFilterHouseGuests);
      case window.FilterHouseGuests.TWO:
        return offerGuests === Number(valueFilterHouseGuests);
      case window.FilterHouseGuests.ZERO:
        return offerGuests === Number(valueFilterHouseGuests);
      default:
        return false;
    }
  };

  const checkFilterHouseFeaturesValue = function (offer) {
    const checkedFeaturesNodes = filterHouseFeatures.filter(function (input) {
      return input.checked;
    });
    const checkedFeatures = checkedFeaturesNodes.map(function (input) {
      return input.value;
    });

    const offerFeatures = offer.features;

    return checkedFeatures.every(function (feature) {
      return offerFeatures.indexOf(feature) !== -1;
    });

  };

  // переделать на цикл for, обьявить новый массив для отфильтрованных элементов,
  //  сделать последовательный циккл с проверкой по кажддому критерию, пушить в новый массив отобранные элементы

  const onFiltersChange = function () {
    const data = window.getData();
    const filterData = [];

    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const offer = dataItem.offer;
      const isFilterValid = ((checkFilterHouseTypeValue(offer))
      && (checkFilterHousePriceValue(offer))
      && (checkFilterHouseRoomsValue(offer))
      && (checkFilterHouseGuestsValue(offer))
      && (checkFilterHouseFeaturesValue(offer)));

      if (isFilterValid) {
        filterData.push(dataItem);
      }
      if (filterData.length >= window.MAX_PINS_AMMOUNT) {
        break;
      }
    }

    window.clearMap();
    window.generateCardsAndPins(filterData);
  };

  const onFiltersChangeDebounced = window.debounce(onFiltersChange);
  mapFiltersForm.addEventListener(`change`, onFiltersChangeDebounced);
}());

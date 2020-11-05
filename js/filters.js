'use strict';

(function () {

  // фильтр по полю тип жилья

  const mapFiltersForm = window.map.querySelector('.map__filters');
  const filterHouseType = mapFiltersForm.querySelector('#housing-type');
  const filterHousePrice = mapFiltersForm.querySelector('#housing-price');
  const filterHouseRooms = mapFiltersForm.querySelector('#housing-rooms');
  const filterHouseGuests = mapFiltersForm.querySelector('#housing-guests');
  const filterHouseFeatures = Array.from(mapFiltersForm.querySelectorAll('input[name="features"]'));

  // записать в константы значения фильтров прайс
  // переписать фильтр используя функции проверки для каждого фильтра

  const checkFilterHouseTypeValue = function (offer) {
    const valueFilterHouseType = filterHouseType.value;
    const offerType = offer.type;

    return (valueFilterHouseType === window.FilterHouseTypes.any || offerType === valueFilterHouseType);
  };

  const LOW_PRICE = 10000;
  const HIGH_PRICE = 50000;

  const checkFilterHousePriceValue = function (offer) {
    const valueFilterHousePrice = filterHousePrice.value;
    const offerPrice = offer.price;

    switch (valueFilterHousePrice) {
      case window.FilterHousePrice.any:
        return true;
      case window.FilterHousePrice.low:
        return offerPrice < LOW_PRICE;
      case window.FilterHousePrice.middle:
        return offerPrice >= LOW_PRICE && offerPrice <= HIGH_PRICE;
      case window.FilterHousePrice.high:
        return offerPrice > HIGH_PRICE;
      default:
        return false;
    }
  };

  const checkFilterHouseRoomsValue = function (offer) {
    const valueFilterHouseRooms = filterHouseRooms.value;
    const offerRooms = offer.rooms;

    switch (valueFilterHouseRooms) {
      case window.FilterHouseRooms.any:
        return true;
      case window.FilterHouseRooms.one:
        return offerRooms === Number(valueFilterHouseRooms);
      case window.FilterHouseRooms.two:
        return offerRooms === Number(valueFilterHouseRooms);
      case window.FilterHouseRooms.three:
        return offerRooms === Number(valueFilterHouseRooms);
      default:
        return false;
    }
  };

  const checkFilterHouseGuestsValue = function (offer) {
    const valueFilterHouseGuests = filterHouseGuests.value;
    const offerGuests = offer.guests;

    switch (valueFilterHouseGuests) {
      case window.FilterHouseGuests.any:
        return true;
      case window.FilterHouseGuests.one:
        return offerGuests === Number(valueFilterHouseGuests);
      case window.FilterHouseGuests.two:
        return offerGuests === Number(valueFilterHouseGuests);
      case window.FilterHouseGuests.zero:
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

  // выучить методы массивов и input
  // прочитать про замыкания и области видимости

  const onFiltersChange = function () {

    const filterData = window.data.filter(function (dataItem) {
      const offer = dataItem.offer;
      const isFilterValid = ((checkFilterHouseTypeValue(offer))
      && (checkFilterHousePriceValue(offer))
      && (checkFilterHouseRoomsValue(offer))
      && (checkFilterHouseGuestsValue(offer))
      && (checkFilterHouseFeaturesValue(offer)));

      return isFilterValid;
    });

    window.clearMap();
    window.generateCardsAndPins(filterData);
  };

  const onFiltersChangeDebounced = window.debounce(onFiltersChange);
  mapFiltersForm.addEventListener('change', onFiltersChangeDebounced);


  // const onFilterHouseTypeChange = function (evt) {
  //   const currentFilterValue = evt.target.value;
  //   const filterDataByHouseType = window.data.filter(function (dataItem) {
  //     return dataItem.offer.type === currentFilterValue;
  //   });

  //   window.clearMap();
  //   window.generateCardsAndPins(filterDataByHouseType);
  // };

  // filterHouseType.addEventListener('change', onFilterHouseTypeChange);

  // для map__features вернуть массив значений
  // написать функцию с несколькими фильтрами, делать фильтр в обработчике,
  // которая будет вызываться на форме, доставать значения и фильтровать данные

}());


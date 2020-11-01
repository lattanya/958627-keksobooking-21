
'use strict';

(function () {

  // фильтр по полю тип жилья

  var mapFiltersForm = window.map.querySelector('.map__filters');
  var filterHouseType = mapFiltersForm.querySelector('#housing-type');
  var filterHousePrice = mapFiltersForm.querySelector('#housing-price');
  var filterHouseRooms = mapFiltersForm.querySelector('#housing-rooms');
  var filterHouseGuests = mapFiltersForm.querySelector('#housing-guests');
  var filterHouseFeatures = Array.from(mapFiltersForm.querySelectorAll('input[name="features"]'));


  var getFilterHouseTypeValue = function () {
    return filterHouseType.value;
  };


  // 18.10.20 записать в константы значения фильтров прайс
  // переписать фильтр используя функции проверки для каждого фильтра

  var checkFilterHouseTypeValue = function (offer) {
    var valueFilterHouseType = filterHouseType.value;
    var offerType = offer.type;

    return (valueFilterHouseType === window.FilterHouseTypes.any || offerType === valueFilterHouseType);
  };

  var LOW_PRICE = 10000;
  var HIGH_PRICE = 50000;

  var checkFilterHousePriceValue = function (offer) {
    var valueFilterHousePrice = filterHousePrice.value;
    var offerPrice = offer.price;

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

  var checkFilterHouseRoomsValue = function (offer) {
    var valueFilterHouseRooms = filterHouseRooms.value;
    var offerRooms = offer.rooms;

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

  var checkFilterHouseGuestsValue = function (offer) {
    var valueFilterHouseGuests = filterHouseGuests.value;
    var offerGuests = offer.guests;

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


  var checkFilterHouseFeaturesValue = function (offer) {
    var checkedFeaturesNodes = filterHouseFeatures.filter(function (input) {
      return input.checked;
    });
    var checkedFeatures = checkedFeaturesNodes.map(function (input) {
      return input.value;
    });

    var offerFeatures = offer.features;

    return checkedFeatures.every(function (feature) {
      return offerFeatures.indexOf(feature) !== -1;
    });

  };

  // выучить методы массивов и input
  // прочитать про замыкания и области видимости

  var onFiltersChange = function () {

    var filterData = window.data.filter(function (dataItem) {
      var offer = dataItem.offer;
      var isFilterValid = ((checkFilterHouseTypeValue(offer))
      && (checkFilterHousePriceValue(offer))
      && (checkFilterHouseRoomsValue(offer))
      && (checkFilterHouseGuestsValue(offer))
      && (checkFilterHouseFeaturesValue(offer)));

      return isFilterValid;
    });

    window.clearMap();
    window.generateCardsAndPins(filterData);
  };

  var onFiltersChangeDebounced = window.debounce(onFiltersChange);
  mapFiltersForm.addEventListener('change', onFiltersChangeDebounced);


  // var onFilterHouseTypeChange = function (evt) {
  //   var currentFilterValue = evt.target.value;
  //   var filterDataByHouseType = window.data.filter(function (dataItem) {
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


'use strict';

(function () {

  // написать словари для каждого фильтра, и заменить условие фильтра, если
  var DEBOUNCE_TIMEOUT = 500;

  var FilterHouseTypes = {
    any: 'any',
    palace: 'palace',
    flat: 'flat',
    house: 'house',
    bungalo: 'bungalo',
  };

  var FilterHousePrice = {
    any: 'any',
    middle: 'middle',
    low: 'low',
    high: 'high',
  };

  var FilterHouseRooms = {
    any: 'any',
    one: '1',
    two: '2',
    three: '3',
  };

  var FilterHouseGuests = {
    any: 'any',
    two: '2',
    one: '1',
    zero: '0',
  };

  var FilterHouseFeatures = {
    wifi: 'wifi',
    dishwasher: 'dishwasher',
    parking: 'parking',
    washer: 'washer',
    elevator: 'elevator',
    conditioner: 'conditioner',
    };





  var KeyCodes = {
    ENTER: 13,
    ESC: 27,
  };

  var PinSizes = {
    WIDTH: 65,
    HEIGHT: 87,
  };

  var HouseTypes = {
    palace: 'Дворец',
    flat: 'Квартира',
  };

  var HouseCapacity = {
    ONE_GUEST: 1,
    TWO_GUESTS: 2,
    THREE_GUESTS: 3,
    NO_GUESTS: 0,
  };

  var RoomsAmount = {
    ONE_ROOM: 1,
    TWO_ROOMS: 2,
    THREE_ROOMS: 3,
    HUNDRED_ROOMS: 100,
  };

  var RoomsCapacity = {
    [RoomsAmount.ONE_ROOM]: {
      allowedGuests: [HouseCapacity.ONE_GUEST],
      default: HouseCapacity.ONE_GUEST,
    },

    [RoomsAmount.TWO_ROOMS]: {
      allowedGuests: [HouseCapacity.ONE_GUEST, HouseCapacity.TWO_GUESTS],
      default: HouseCapacity.TWO_GUESTS,
    },

    [RoomsAmount.THREE_ROOMS]: {
      allowedGuests: [HouseCapacity.ONE_GUEST, HouseCapacity.TWO_GUESTS, HouseCapacity.THREE_GUESTS],
      default: HouseCapacity.THREE_GUESTS,
    },

    [RoomsAmount.HUNDRED_ROOMS]: {
      allowedGuests: [HouseCapacity.NO_GUESTS],
      default: HouseCapacity.NO_GUESTS,
    },
  };

  var MinHouseTypePrices = {
    "bungalo": 0,
    "flat": 1000,
    "house": 5000,
    "palace": 10000,
  };

  var findElementCenter = function (element) {
    var elementWidth = element.clientWidth;
    var elementHeight = element.clientHeight;
    var elementCenter = {
      x: elementWidth / 2,
      y: elementHeight / 2,
    };
    return elementCenter;
  };


      // переписать на методы массивов
  var clearMap = function () {
    var allPins = window.map.querySelectorAll('.map__pin:not(.map__pin--main)');

    allPins.forEach(function (pin) {
      pin.remove();
    });

    var allCards = window.map.querySelectorAll('.popup');
    if (allCards) {
      allCards.forEach(function (card) {
        card.remove();
      });
    }
  };

  var debounce = function (cb) {
    var timeout;
    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(cb, DEBOUNCE_TIMEOUT)
    };
  };



   // экспорт
   window.KeyCodes = KeyCodes;
   window.PinSizes = PinSizes;

   window.HouseTypes = HouseTypes;
   window.HouseCapacity = HouseCapacity;
   window.RoomsAmount = RoomsAmount;
   window.RoomsCapacity = RoomsCapacity;
   window.MinHouseTypePrices = MinHouseTypePrices;

   window.clearMap = clearMap;
   window.findElementCenter = findElementCenter;
   window.debounce = debounce;

   window.FilterHouseTypes = FilterHouseTypes;
   window.FilterHousePrice = FilterHousePrice;
   window.FilterHouseRooms = FilterHouseRooms;
   window.FilterHouseGuests = FilterHouseGuests;
   window.FilterHouseFeatures = FilterHouseFeatures;
})();



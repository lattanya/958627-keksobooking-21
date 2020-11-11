`use strict`;

(function () {

  // словари для каждого фильтра
  const DEBOUNCE_TIMEOUT = 500;

  const FilterHouseTypes = {
    any: `any`,
    palace: `palace`,
    flat: `flat`,
    house: `house`,
    bungalow: `bungalow`,
  };

  const FilterHousePrice = {
    any: `any`,
    middle: `middle`,
    low: `low`,
    high: `high`,
  };

  const FilterHouseRooms = {
    any: `any`,
    one: `1`,
    two: `2`,
    three: `3`,
  };

  const FilterHouseGuests = {
    any: `any`,
    two: `2`,
    one: `1`,
    zero: `0`,
  };

  const FilterHouseFeatures = {
    wifi: `wifi`,
    dishwasher: `dishwasher`,
    parking: `parking`,
    washer: `washer`,
    elevator: `elevator`,
    conditioner: `conditioner`,
  };

  const KeyCodes = {
    ENTER: 13,
    ESC: 27,
  };

  const PinSizes = {
    WIDTH: 65,
    HEIGHT: 87,
  };

  const HouseTypes = {
    palace: `Дворец`,
    flat: `Квартира`,
  };

  const HouseCapacity = {
    ONE_GUEST: 1,
    TWO_GUESTS: 2,
    THREE_GUESTS: 3,
    NO_GUESTS: 0,
  };

  const RoomsAmount = {
    ONE_ROOM: 1,
    TWO_ROOMS: 2,
    THREE_ROOMS: 3,
    HUNDRED_ROOMS: 100,
  };

  const RoomsCapacity = {
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

  const MinHouseTypePrices = {
    "bungalow": 0,
    "flat": 1000,
    "house": 5000,
    "palace": 10000,
  };

  const findElementCenter = function (element) {
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;
    const elementCenter = {
      x: elementWidth / 2,
      y: elementHeight / 2,
    };
    return elementCenter;
  };

  // перепиcано на методы массивов

  const clearMap = function () {
    const allPins = window.map.querySelectorAll(`.map__pin:not(.map__pin--main)`);
    allPins.forEach(function (pin) {
      pin.remove();
    });
    const allCards = window.map.querySelectorAll(`.popup`);
    if (allCards) {
      allCards.forEach(function (card) {
        card.remove();
      });
    }
  };

  const debounce = function (cb) {
    let timeout;
    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(cb, DEBOUNCE_TIMEOUT);
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

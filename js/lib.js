'use strict';

(function () {

  // словари для каждого фильтра
  const DEBOUNCE_TIMEOUT = 500;

  const FilterHouseTypes = {
    ANY: `any`,
    PALACE: `palace`,
    FLAT: `flat`,
    HOUSE: `house`,
    BUNGALOW: `bungalow`,
  };

  const FilterHousePrice = {
    ANY: `any`,
    MIDDLE: `middle`,
    LOW: `low`,
    HIGH: `high`,
  };

  const FilterHouseRooms = {
    ANY: `any`,
    ONE: `1`,
    TWO: `2`,
    THREE: `3`,
  };

  const FilterHouseGuests = {
    ANY: `any`,
    TWO: `2`,
    ONE: `1`,
    ZERO: `0`,
  };

  const FilterHouseFeatures = {
    WIFI: `wifi`,
    DISHWASHER: `dishwasher`,
    PARKING: `parking`,
    WASHER: `washer`,
    ELEVATOR: `elevator`,
    CONDITIONER: `conditioner`,
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
    PALACE: `Дворец`,
    FLAT: `Квартира`,
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

  window.findElementCenter = findElementCenter;
  window.debounce = debounce;

  window.FilterHouseTypes = FilterHouseTypes;
  window.FilterHousePrice = FilterHousePrice;
  window.FilterHouseRooms = FilterHouseRooms;
  window.FilterHouseGuests = FilterHouseGuests;
  window.FilterHouseFeatures = FilterHouseFeatures;
})();

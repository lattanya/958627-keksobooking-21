`use strict`;

(function () {
  // валидация формы

  const selectCapacity = window.form.querySelector(`#capacity`);

  const selectRooms = window.form.querySelector(`#room_number`);

  const isCapacityValid = function (capacityValue, roomsValue) {
    const selectedRoomsData = window.RoomsCapacity[roomsValue];
    const currentAllowedGuests = selectedRoomsData.allowedGuests;

    const isValid = currentAllowedGuests.some(function (el) {
      return el === parseInt(capacityValue, 10);
    });

    return isValid;
  };

  const validateCapacity = function () {
    const capacityValue = selectCapacity.value;
    const roomsValue = selectRooms.value;

    const isValid = isCapacityValid(capacityValue, roomsValue);

    const textValidation = isValid ? `` : `неверное количество гостей`;

    selectCapacity.setCustomValidity(textValidation);

    selectCapacity.reportValidity();
  };

  selectCapacity.addEventListener(`change`, validateCapacity);

  // функция синхронизации комнат и гостей, которая вызывается на обработчике события
  // change для селекта rooms при изменении селекта
  // rooms должно изменять значение селекта capacity, если оно не правильное, то используется поле дефолт


  const syncRoomsWithCapacity = function () {
    const capacityValue = selectCapacity.value;
    const roomsValue = selectRooms.value;

    const isValid = isCapacityValid(capacityValue, roomsValue);

    if (!isValid) {

      const selectedRoomsData = window.RoomsCapacity[roomsValue];
      const currentDefolt = selectedRoomsData.default;

      selectCapacity.value = currentDefolt;
    }
  };

  selectRooms.addEventListener(`change`, syncRoomsWithCapacity);

  // валидация поля минимальная цена
  // создан объект соотношения типа жилья и минимальной цены

  const selectType = window.form.querySelector(`#type`);
  const inputPrice = window.form.querySelector(`#price`);


  const syncPrice = function () {

    const houseTypeValue = selectType.value;
    const selectMinPrice = window.MinHouseTypePrices[houseTypeValue];

    if (selectMinPrice !== undefined) {
      inputPrice.min = selectMinPrice;
      inputPrice.placeholder = String(selectMinPrice);
    }
  };

  selectType.addEventListener(`change`, syncPrice);

  // синхронизация поля даты вьезда и выезда

  const selectTimeIn = window.form.querySelector(`#timein`);
  const selectTimeOut = window.form.querySelector(`#timeout`);


  const syncTime = function (evt) {

    if (selectTimeIn.value !== evt.target.value) {
      selectTimeIn.value = evt.target.value;
    }
    if (selectTimeOut.value !== evt.target.value) {
      selectTimeOut.value = evt.target.value;
    }
  };

  selectTimeIn.addEventListener(`change`, syncTime);
  selectTimeOut.addEventListener(`change`, syncTime);

  const moveMainPinToCenter = function () {
    const mapCenter = window.findElementCenter(window.map);
    const mainPinWidth = window.mainPin.offsetWidth;
    const mainPinHeight = window.mainPin.offsetHeight;
    window.mainPin.style.left = mapCenter.x + mainPinWidth / 2 + `px`;
    window.mainPin.style.top = mapCenter.y + mainPinHeight / 2 + `px`;
  };

  const onFormSubmit = function () {
    window.form.reset();
    window.clearMap();
    window.toggleForm(true);
    window.map.classList.add(`map--faded`);
    moveMainPinToCenter();
  };


  window.form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    const formsData = new FormData(window.form);
    // window.sendData(formData, onFormSubmit, window.showErrorMessage);
    onFormSubmit();
  });
})();

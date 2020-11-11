`use strict`;

(function () {
  const loadData = function (onLoad, onError) {
    const URL = `https://21.javascript.pages.academy/keksobooking/data`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 404:
          onError(`ошибка` + xhr.status + ` ` + xhr.statusText + `данные не найдены`);
          break;

        default:
          onError(`ошибка` + xhr.status + ` ` + xhr.statusText);
          break;
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`ошибка соединения с сервером`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`истек таймаут соединения`);
    });

    xhr.timeout = 10000;

    xhr.open(`GET`, URL, true);
    xhr.send();
  };


  const sendData = function (data, onLoad, onError) {
    const URL = `https://21.javascript.pages.academy/keksobooking`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      switch (xhr.status) {
        case 200:
          onLoad();
          break;

        case 404:
          onError(`ошибка` + xhr.status + ` ` + xhr.statusText + `данные не найдены`);
          break;

        default:
          onError(`ошибка` + xhr.status + ` ` + xhr.statusText);
          break;
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`ошибка соединения с сервером`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`истек таймаут соединения`);
    });

    xhr.timeout = 10000;

    xhr.open(`POST`, URL, true);
    xhr.send(data);
  };
  // экспорт

  window.loadData = loadData;
  window.sendData = sendData;
})();

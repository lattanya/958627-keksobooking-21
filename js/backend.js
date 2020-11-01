'use strict';

(function () {
  var loadData = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/keksobooking/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 404:
          onError('ошибка' + xhr.status + ' ' + xhr.statusText + 'данные не найдены');
          break;

        default:
          onError('ошибка' + xhr.status + ' ' + xhr.statusText);
          break;
      }
    });

    xhr.addEventListener('error', function () {
      onError('ошибка соединения с сервером');
    });

    xhr.addEventListener('timeout', function () {
      onError('истек таймаут соединения');
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    xhr.send();
  };


  var sendData = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/keksobooking';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad();
          break;

        case 404:
          onError('ошибка' + xhr.status + ' ' + xhr.statusText + 'данные не найдены');
          break;

        default:
          onError('ошибка' + xhr.status + ' ' + xhr.statusText);
          break;
      }

      xhr.addEventListener('error', function () {
        onError('ошибка соединения с сервером');
      });

      xhr.addEventListener('timeout', function () {
        onError('истек таймаут соединения');
      });

      xhr.timeout = 10000;

      xhr.open('POST', URL, true);
      xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      xhr.send(data);
    });

  };
  // экспорт

  window.loadData = loadData;
  window.sendData = sendData;
})();

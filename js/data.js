'use strict';

(function () {
  let data = [];

  const saveData = function (response) {
    data = response;
  };

  const getData = function () {
    return data;
  };

  // экспорт
  window.saveData = saveData;
  window.getData = getData;
})();

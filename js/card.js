'use strict';

(function () {
  var getData = function () {
    var dataArray = [
      {
        author: {
          avatar: 'img/avatars/user01.png',
        },
        offer: {
          title: 'Заголовок1',
          address: '400, 350',
          price: 5000,
          type: 'palace',
          rooms: 1,
          guests: 1,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 100,
          y: 400,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user02.png',
        },
        offer: {
          title: 'Заголовок2',
          address: '400, 350',
          price: 15000,
          type: 'flat',
          rooms: 2,
          guests: 3,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 300,
          y: 500,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user03.png',
        },
        offer: {
          title: 'Заголовок3',
          address: '400, 350',
          price: 5000,
          type: 'flat',
          rooms: 3,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 500,
          y: 600,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user04.png',
        },
        offer: {
          title: 'Заголовок4',
          address: '400, 350',
          price: 5000,
          type: 'flat',
          rooms: 1,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 150,
          y: 360,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user05.png',
        },
        offer: {
          title: 'Заголовок5',
          address: '400, 350',
          price: 5000,
          type: 'palace',
          rooms: 8,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 260,
          y: 333,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user06.png',
        },
        offer: {
          title: 'Заголовок6',
          address: '400, 350',
          price: 5000,
          type: 'palace',
          rooms: 8,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 500,
          y: 240,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user07.png',
        },
        offer: {
          title: 'Заголовок7',
          address: '400, 350',
          price: 5000,
          type: 'palace',
          rooms: 8,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 750,
          y: 330,
        },
      },
      {
        author: {
          avatar: 'img/avatars/user08.png',
        },
        offer: {
          title: 'Заголовок8',
          address: '400, 350',
          price: 5000,
          type: 'palace',
          rooms: 8,
          guests: 10,
          checkin: '14:00',
          checkout: '14:00',
          features: [
            'wifi',
            'dishwasher',
            'parking',
            'washer',
            'elevator',
            'conditioner',
          ],
          description: 'Все хорошо',
          photos: [
            'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
          ],
        },

        location: {
          x: 860,
          y: 310,
        },
      },
    ];

    return dataArray;
  };

  // экспорт
  window.getData = getData;
})();

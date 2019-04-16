
const faker = require('faker');
const db = require("./connection.js");
const Reservation = require('./Reservation');
var fakeData = [];
for (var i = 0; i <= 100; i++) {
  const User = {
    resId: i,
    size: faker.random.number({min:2, max:10}),
    date: faker.date.between('2018-10-31', '2018-12-31'),
    time: faker.date.soon
  };
  fakeData.push(User);
}

Reservation.create(fakeData);


// const mongoose = require('mongoose');
const mongoose = require('./connection.js');

const reservationSchema = new mongoose.Schema({
  resId: Number,
  size: Number,
  date: Date,
  time: Date
}, 
  {
    timestamps: true
  }
);

const db = mongoose.model('Reservation', reservationSchema);

module.exports = db;


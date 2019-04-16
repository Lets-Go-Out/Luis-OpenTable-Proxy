
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reservations';

mongoose.connect(mongoUri, { useNewUrlParser: true});

module.exports = mongoose;




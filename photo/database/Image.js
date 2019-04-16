const mongoose = require('mongoose');
const db = require('./myConnection.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  res_id: Number,
  images_array: [
    {
      image_id: Number,
      image_url: String,
      description: String,
      taken_by: String,
    },
  ],
});

const RestaurentGallery = mongoose.model('restaurant', restaurantSchema);

const find = (cb) => {
  RestaurentGallery.find({}, cb);
};

module.exports = RestaurentGallery;

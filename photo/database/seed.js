const faker = require('faker');
const Restaurent_Gallery = require('./Image.js');

const ourfaker = [];
let imageCounter = 1;
for (let i = 1; i < 101; i += 1) {
  const data = {};
  data.res_id = i;
  const images_array = [];
  for (let j = 1; j < faker.random.number(10) + 6; j += 1) {
    const imageObject = {};
    imageObject.image_id = (i * 100) + j;
    imageObject.image_url = `https://s3-us-west-1.amazonaws.com/lanakhan/img${imageCounter}.jpg`;
    if (imageCounter === 57) {
      imageCounter = 0;
    }
    imageCounter += 1;
    imageObject.description = faker.lorem.sentence();
    imageObject.taken_by = faker.name.findName();
    images_array.push(imageObject);
  }
  data.images_array = images_array;
  ourfaker.push(data);
}
Restaurent_Gallery.create(ourfaker);

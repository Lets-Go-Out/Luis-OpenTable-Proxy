import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Gallery from '../../client/components/Gallery';


const imageList = {
  _id: '5bd64cab68e1ad0549e747cb',
  res_id: 2,
  images_array: [{
    _id: '5bd64cab68e1ad0549e747d5', image_id: 201, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img11.jpg', description: 'Doloribus ex est.', taken_by: 'Tom Kilback V',
  }, {
    _id: '5bd64cab68e1ad0549e747d4', image_id: 202, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img12.jpg', description: 'Perferendis autem assumenda laudantium veritatis.', taken_by: 'Gabe Hane',
  }, {
    _id: '5bd64cab68e1ad0549e747d3', image_id: 203, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img13.jpg', description: 'Aut vel modi.', taken_by: 'Miss Rosa Parker',
  }, {
    _id: '5bd64cab68e1ad0549e747d2', image_id: 204, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img14.jpg', description: 'Rem quasi nisi.', taken_by: 'Rudolph Feil',
  }, {
    _id: '5bd64cab68e1ad0549e747d1', image_id: 205, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img15.jpg', description: 'Ut fugit rerum voluptatem.', taken_by: 'Rosalyn Lindgren',
  }, {
    _id: '5bd64cab68e1ad0549e747d0', image_id: 206, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img16.jpg', description: 'Quia mollitia laudantium.', taken_by: 'Ms. Landen Gibson',
  }, {
    _id: '5bd64cab68e1ad0549e747cf', image_id: 207, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img17.jpg', description: 'Magni atque hic natus facere nihil soluta eligendi minus doloribus.', taken_by: 'Micah Jones',
  }, {
    _id: '5bd64cab68e1ad0549e747ce', image_id: 208, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img18.jpg', description: 'Hic eveniet eius.', taken_by: 'Imani Von MD',
  }, {
    _id: '5bd64cab68e1ad0549e747cd', image_id: 209, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img19.jpg', description: 'Necessitatibus eius quod perferendis id asperiores soluta quasi.', taken_by: 'Shea Gutkowski',
  }, {
    _id: '5bd64cab68e1ad0549e747cc', image_id: 210, image_url: 'https://s3-us-west-1.amazonaws.com/lanakhan/img20.jpg', description: 'Dicta quas quasi et tempora ab qui consequatur et.', taken_by: 'Cristobal Tromp',
  }],
  __v: 0,
};

test("confirm properties of Gallery's props", () => {
  const test1 = shallow(
    <Gallery imageList={imageList} />,
  );
  expect(test1.contains('res_id'));
  expect(test1.contains('images_array'));
});
test('should have a right amount of states', () => {
  const wrapper = shallow(<Gallery />);
  const stateLen = Object.keys(wrapper.state()).length;
  expect(stateLen).toEqual(3);
});
test('checking on openModal function of <Gallery/>', () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().openModal();
});

test('checking on closeModal function of <Gallery/>', () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().closeModal();
});

test('checking on findPrev function of <Gallery/>', () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().findPrev();
});

test('checking on findNext function of <Gallery/>', () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().findNext();
});

test('should have a right amount of div tags', () => {
  const wrapper = shallow(<Gallery imageList={imageList} />);
  expect(wrapper.find('div')).toHaveLength(2);
});

test('find div with class gallery-grid', () => {
  const wrapper = shallow(<Gallery />);
  expect(wrapper.find('div.gallery-grid')).toHaveLength(1);
});

const imgUrl = ['https://s3-us-west-1.amazonaws.com/lanakhan/img11.jpg', 'https://s3-us-west-1.amazonaws.com/lanakhan/img12.jpg', 'https://s3-us-west-1.amazonaws.com/lanakhan/img13.jpg', 'https://s3-us-west-1.amazonaws.com/lanakhan/img14.jpg', 'https://s3-us-west-1.amazonaws.com/lanakhan/img15.jpg'];
test('calls componentDidMount', () => {
  sinon.spy(Gallery.prototype, 'componentDidMount');
  for (let i = 0; i < imgUrl.length; i += 1) {
    shallow(<Gallery imageList={imgUrl[i]} />);
    expect(Gallery.prototype.componentDidMount.callCount).toBe(i + 1);
  }
});

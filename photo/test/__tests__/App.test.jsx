import React from 'react';
import { shallow } from 'enzyme';
import PhotoApp from '../../client/components/App';


test('should render correctly with props', () => {
  const component = shallow(<PhotoApp />);
  expect(component.exists()).toBe(true);
});

test('checking on render function of <App/>', () => {
  const wrapper = shallow(<PhotoApp />);
  wrapper.instance().render();
});


const mock = {
  res_id: 25,
  images_array: [],
};
test('should display loading until data arrives', async () => {
  const wrapper = shallow(<PhotoApp info={mock} />);
  expect(wrapper.html()).toBe('<div>Loading...</div>');
  await Promise.resolve();
  expect(wrapper.html()).toBe('<div>imageList</div>');
});

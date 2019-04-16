import React from 'react';
import { shallow } from 'enzyme';
import Report from '../../client/components/Report';

test('should render correctly with props', () => {
  const component = shallow(<Report />);
  expect(component.exists()).toBe(true);
});

test('should be clicked with first buttom from <Report/>', () => {
  const gallerymodal = jest.fn();
  const bl = false;
  const component = shallow(<Report showModal={bl} handleCloseModal={gallerymodal} />);
  component.find('.ReportDiv').childAt(2).simulate('click');
  expect(gallerymodal).toHaveBeenCalled();
});


test('should be clicked with second buttom from <Report/>', () => {
  const gallerymodal2 = jest.fn();
  const bl = false;
  const component2 = shallow(<Report showModal={bl} handleCloseModal={gallerymodal2} />);
  component2.find('.ReportDiv').childAt(4).simulate('click');
  expect(gallerymodal2).toHaveBeenCalled();
});

test('should be clicked with third buttom from <Report/>', () => {
  const gallerymodal3 = jest.fn();
  const bl = false;
  const component3 = shallow(<Report showModal={bl} handleCloseModal={gallerymodal3} />);
  component3.find('.ReportDiv').childAt(6).simulate('click');
  expect(gallerymodal3).toHaveBeenCalled();
});

test('should be clicked with fourth buttom from <Report/>', () => {
  const gallerymodal4 = jest.fn();
  const bl = false;
  const component4 = shallow(<Report showModal={bl} handleCloseModal={gallerymodal4} />);
  component4.find('.ReportDiv').childAt(8).simulate('click');
  expect(gallerymodal4).toHaveBeenCalled();
});

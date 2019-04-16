/**
 * @jest-environment jsdom
*/
/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import App from '../../client/src/components/App.jsx';
// import PartySizeMenu from '../../client/src/components/PartySizeMenu'
import TimeMenu from '../../client/src/components/TimeMenu'


describe("Testing TimeMenu component", function() {
// window.document.addEventListener = jest.fn();
let mock = jest.fn()
    const wrapper = shallow(<TimeMenu onClick={mock}/>);
  // it("should render App component ", function() {
  // // jest.mock('../../client/src/components/PartySizeMenu');
  // // console.log(wrapper.debug())
  //   expect(wrapper.props().className).toBe('dd-list-item');
    // console.log(
    //   wrapper
    //     .debug()
    // );
  // });
  it('should have a className of dd-list-time', () => {
    expect(wrapper.hasClass('dd-list-time'));
  });

  // it("should render TimeMenu component ", function() {
  // // jest.mock('../../client/src/components/PartySizeMenu');
  // // console.log(wrapper.debug())
  //   expect(wrapper.props().className).toBe('dd-list-time');
  // });

});
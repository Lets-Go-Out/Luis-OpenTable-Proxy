/**
 * @jest-environment jsdom
*/
/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import App from '../../client/src/components/App.jsx';
import PartySizeMenu from '../../client/src/components/PartySizeMenu'

describe("Testing PartySizeMenu component", function() {
// window.document.addEventListener = jest.fn();
let mock = jest.fn()
    const wrapper = shallow(<PartySizeMenu onClick={mock}/>);
  it("should render App component ", function() {
  // jest.mock('../../client/src/components/PartySizeMenu');
  // console.log(wrapper.debug())
    expect(wrapper.props().className).toBe('dd-list-item');
  });
  it('should have a className of menu-border', () => {
    expect(wrapper.hasClass('dd-list-item'));
  });
  // // it('should have a class dd-list-item', () => {
  // //   const wrapper = shallow(<PartySizeMenu />);
  // //   // console.log(wrapper.debug());
  // //   expect(wrapper.find('.dd-list-item').hasClass('dd-list-item')).to.equal(true);
  // })


});

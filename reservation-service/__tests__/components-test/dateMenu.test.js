/**
 * @jest-environment jsdom
*/
/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/App.jsx';
import DateMenu from '../../client/src/components/DateMenu'

describe("Testing DateMenu component", function() {
// window.document.addEventListener = jest.fn();
// const wrapper = shallow(<DateMenu />);
// console.log(wrapper.debug());

  it("should render DateMenu component ", function() {
    let mock = jest.fn()
    const wrapper = shallow(<DateMenu />);
    // console.log(
    //   wrapper
    //     .find("#mycalendar")
    //     .debug()
    // );
    // expect(wrapper.find("#mycalendar")).to.have.leng(1);
    // expect(wrapper.find('#mycalendar')).to.have.lengthOf(1);
  // jest.mock('../../client/src/components/PartySizeMenu');
    // console.log(wrapper.debug())
  });
  

});
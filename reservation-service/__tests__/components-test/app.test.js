/*eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/App.jsx';
import PartySizeMenu from '../../client/src/components/PartySizeMenu'

describe("Testing App component", function() {
    const wrapper = shallow(<App />);
  it("should render App component ", function() {
    // console.log(
    //   wrapper
    //     .find("#masterContainer")
    //     .children()
    //     .debug()
    // );
    expect(wrapper.find("#masterContainer").children()).toHaveLength(2);
  });
  it('should have a className of menu-border', () => {
    expect(wrapper.hasClass('menu-border'));
  });

  it('should have a state Calendar', () => {
    expect(wrapper.state('Calendar')).toBe(false);
  });

  it('should have a title TimeMenu', () => {
    expect(wrapper.contains('Make a reservation')).toBe(true);
  });

  it('should have a state TimeMenu', () => {
    expect(wrapper.state('TimeMenu')).toEqual([]);
  })

  it('should call a method partySizeStateChanger', () => {
    expect(wrapper.instance().partySizeStateChanger()).toBe(wrapper.state('For 3'));
  });

  it('should call a method timeMenuStateChanger', () => {
    expect(wrapper.instance().timeMenuStateChanger()).toBe(wrapper.state('Today'));
  });

  it('should call a method timeClickHandler', () => {
    expect(wrapper.instance().timeClickHandler()).toBe(wrapper.state('"7:00 PM"'));
  });

});








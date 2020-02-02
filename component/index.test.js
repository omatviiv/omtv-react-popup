import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component, { thm } from 'componnt';

describe('Component', () => {
  it('renders with value', () => {
    const wrapper = shallow(<Component value='test' />);
    expect(wrapper).toMatchSnapshot();
  });
  describe('theme', () => {
    it('Main', () => {
      const wrapper = renderer.create(<thm.Main />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
    it('Strong', () => {
      const wrapper = renderer.create(<thm.Strong />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});

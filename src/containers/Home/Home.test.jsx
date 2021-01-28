import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  it('it should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

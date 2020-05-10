import React from 'react';
import { Header } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Header', () => {
  const header: ShallowWrapper = shallow(<Header />);

  it('will have a header div', () => {
    expect(header.hasClass('header')).toBeTruthy();
  });

  it('will display the current users username', () => {
    fail();
  });

  it('will display the current users purse balance', () => {
    fail();
  });

  it('will display the current users bank balance', () => {
    fail();
  });
});

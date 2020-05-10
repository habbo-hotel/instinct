import React from 'react';
import { Card, CardProps } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Card', () => {
  const cardProps: CardProps = {
    header: 'Testing Card Header',
    children: <span>Card Test</span>,
  };

  it('will not have a background by default', () => {
    const card: ShallowWrapper = shallow(<Card {...cardProps} />);
    expect(card.hasClass('bg-')).toBeFalsy();
  });

  it('will use the given background', () => {
    const card: ShallowWrapper = shallow(<Card bg="dark" {...cardProps} />);
    expect(card.hasClass('bg-dark')).toBeTruthy();
    expect(card.hasClass('bg-light')).not.toBeTruthy();
  });

  it('will not have a text color by default', () => {
    const card: ShallowWrapper = shallow(<Card {...cardProps} />);
    expect(card.hasClass('text-')).toBeFalsy();
  });

  it('will use the given color', () => {
    const card: ShallowWrapper = shallow(<Card color="white" {...cardProps} />);
    expect(card.hasClass('text-white')).toBeTruthy();
  });

  it('will render a h5 with the given header', () => {
    const card: ShallowWrapper = shallow(<Card {...cardProps} />);
    expect(card.find('h5').text()).toBe(cardProps.header);
  });

  it('will render the given children', () => {
    const card: ShallowWrapper = shallow(<Card {...cardProps} />);
    expect(card.contains(cardProps.children)).toBeTruthy();
  });
});

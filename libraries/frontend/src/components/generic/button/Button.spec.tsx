import React from 'react';
import { Button, ButtonProps } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Button', () => {
  const mockOnClick = jest.fn();
  const mockChildren = <span>Button Test</span>;

  const buttonProps: ButtonProps = {
    onClick: mockOnClick,
    children: mockChildren,
  };

  it('will default to the light button', () => {
    const button: ShallowWrapper = shallow(<Button {...buttonProps} />);
    expect(button.hasClass('btn-light')).toBeTruthy();
  });

  it('will update the button color to the specified one if given', () => {
    const button: ShallowWrapper = shallow(<Button color="dark" {...buttonProps} />);
    expect(button.hasClass('btn-dark')).toBeTruthy();
    expect(button.hasClass('btn-light')).not.toBeTruthy();
  });

  it('will call onClick when clicked', () => {
    const button: ShallowWrapper = shallow(<Button {...buttonProps} />);
    button.find('button').simulate('click');
    expect(buttonProps.onClick).toBeCalledTimes(1);
  });

  it('will render the given children', () => {
    const button: ShallowWrapper = shallow(<Button {...buttonProps} />);
    expect(button.contains(buttonProps.children)).toBeTruthy();
  });
});

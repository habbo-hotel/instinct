import React from 'react';
import { Container, ContainerProps } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Container', () => {
  const containerProps: ContainerProps = {
    children: <span>Container Test</span>,
  };

  it('will have a container div', () => {
    const container: ShallowWrapper = shallow(<Container {...containerProps} />);
    expect(container.hasClass('container')).toBeTruthy();
  });

  it('will render the given children', () => {
    const container: ShallowWrapper = shallow(<Container {...containerProps} />);
    expect(container.contains(containerProps.children)).toBeTruthy();
  });
});

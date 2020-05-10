import React from 'react';
import { Icon, IconProps } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Icon', () => {
  const iconProps: IconProps = {
    type: 'test',
  };

  const icon: ShallowWrapper = shallow(<Icon {...iconProps} />);

  it('will use the given icon type', () => {
    expect(icon.hasClass(`fa-${iconProps.type}`)).toBeTruthy();
  });

  it('will default className to mr-2', () => {
    expect(icon.hasClass('mr-2')).toBeTruthy();
  });

  it('will use the given className', () => {
    const otherIcon: ShallowWrapper = shallow(<Icon className="ml-2" {...iconProps} />);
    expect(otherIcon.hasClass('ml-2')).toBeTruthy();
    expect(otherIcon.hasClass('mr-2')).not.toBeTruthy();
  });
});

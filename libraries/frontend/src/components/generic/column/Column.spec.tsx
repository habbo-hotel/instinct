import React from 'react';
import { Column, ColumnProps } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Column', () => {
  const columnProps: ColumnProps = {
    children: <span>Column Test</span>,
    side: 'left',
  };

  it('will have a column div', () => {
    const column: ShallowWrapper = shallow(<Column {...columnProps} />);
    expect(column.hasClass('column')).toBeTruthy();
  });

  it('will render the given children', () => {
    const column: ShallowWrapper = shallow(<Column {...columnProps} />);
    expect(column.contains(columnProps.children)).toBeTruthy();
  });
});

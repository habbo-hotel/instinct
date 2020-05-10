import { Children } from 'components';

export interface ColumnProps {
  children: Children;
  side: 'left' | 'right';
  style?: object;
}

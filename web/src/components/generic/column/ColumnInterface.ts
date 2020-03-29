import { Children } from '../../common.type';

export interface ColumnProps {
  children: Children;
  side: 'left' | 'right';
  style?: object;
}

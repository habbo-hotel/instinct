import { Children } from 'component';

export interface ColumnProps {
  children: Children;
  side: 'left' | 'right';
  style?: object;
}

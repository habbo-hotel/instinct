import { ReactNode } from 'react';
import { Children } from 'components';

export interface NavBarDropdownProps {
  children: Children;
  to: string;
  text: ReactNode;
}

import React from 'react';
import { NavBarLabelProps } from './index';

export function NavBarLabel({ children }: NavBarLabelProps) {
  return <li className="navigation-item mobile-menu cant-select">{children}</li>;
}

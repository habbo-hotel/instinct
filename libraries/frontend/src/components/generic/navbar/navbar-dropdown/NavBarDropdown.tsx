import React from 'react';
import { Icon } from 'components';
import { Link } from 'wouter';
import { NavBarDropdownProps } from './';

export function NavBarDropdown({ children, text, to }: NavBarDropdownProps) {
  return (
    <li className="navigation-item has-items">
      <Link to={to}>
        {text}
        <Icon className="ml-2" family="fas" type="caret-down" />
      </Link>
      <ul className="navigation-submenu">{children}</ul>
    </li>
  );
}

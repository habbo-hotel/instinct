import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarChildLinkProps } from './';

export function NavBarChildLink({ children, to }: NavBarChildLinkProps) {
  return (
    <li className="navigation-subitem">
      <Link to={to}>{children}</Link>
    </li>
  );
}

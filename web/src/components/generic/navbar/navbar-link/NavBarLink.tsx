import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavBarLinkProps } from './index';

function NavBarLinkComponent({ children, className = '', to, location }: NavBarLinkProps) {
  const active: boolean = location.pathname === to;
  return (
    <li className={`navigation-item ${className} ${active ? 'selected' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export const NavBarLink = withRouter(NavBarLinkComponent);

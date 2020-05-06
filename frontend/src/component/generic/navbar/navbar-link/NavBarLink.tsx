import React from 'react';
import { NavBarLinkProps } from './';
import { Link, withRouter } from 'react-router-dom';

function NavBarLinkComponent({ children, className = '', to, location }: NavBarLinkProps) {
  const active: boolean = location.pathname === to;
  return (
    <li className={`navigation-item ${className} ${active ? 'selected' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export const NavBarLink = withRouter(NavBarLinkComponent);

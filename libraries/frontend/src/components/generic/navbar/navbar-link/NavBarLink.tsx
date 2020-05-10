import React from 'react';
import { NavBarLinkProps } from './';
import { Link, useLocation } from 'react-router-dom';

function NavBarLinkComponent({ children, className = '', to }: NavBarLinkProps) {
  const location = useLocation();
  const active: boolean = location.pathname === to;
  return (
    <li className={`navigation-item ${className} ${active ? 'selected' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export const NavBarLink = NavBarLinkComponent;

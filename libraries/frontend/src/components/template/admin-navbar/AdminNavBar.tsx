import React from 'react';
import { NavBarLink, NavBarLabel, UserDropdown } from 'components';

export function AdminNavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container">
        <NavBarLabel>Menu</NavBarLabel>
        <NavBarLink className="main-link-item" to="/" />
        <NavBarLink to="/admin">Dashboard</NavBarLink>
        <NavBarLink to="/admin/website">Configure Website</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

import React from 'react';
import { NavBarLink, UserDropdown } from 'components';

export function AdminNavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container" style={{ width: '100%', maxWidth: 1055, margin: '0 auto' }}>
        <NavBarLink to="/admin">Dashboard</NavBarLink>
        <NavBarLink to="/admin/website">Website</NavBarLink>
        <NavBarLink to="/admin/news">News</NavBarLink>
        <NavBarLink to="/admin/users">Users</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

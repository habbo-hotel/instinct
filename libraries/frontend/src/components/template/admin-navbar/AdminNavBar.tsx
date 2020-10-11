import React from 'react';
import { NavBarDropdown, NavBarLink, UserDropdown } from 'components';

export function AdminNavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container" style={{ width: '100%', maxWidth: 1055, margin: '0 auto' }}>
        <NavBarLink to="/admin">Dashboard</NavBarLink>
        <NavBarLink to="/admin/website">Configure Website</NavBarLink>
        <NavBarLink to="/admin/news">News Articles</NavBarLink>
        <NavBarDropdown to="/admin/users" text="Users">
          <NavBarLink to="/admin/users">Users</NavBarLink>
          <NavBarLink to="/admin/users/ranks">Permission Groups</NavBarLink>
        </NavBarDropdown>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

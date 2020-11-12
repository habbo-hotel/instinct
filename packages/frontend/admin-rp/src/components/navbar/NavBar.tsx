import React from 'react';
import {NavBarLink} from '@instinct-prj/frontend';
import {UserDropdown} from './UserDropdown';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <ul
        className="navigation-menu flex-container"
        style={{width: '100%', maxWidth: 1055, margin: '0 auto'}}
      >
        <NavBarLink to="/me">Back to Site</NavBarLink>
        <NavBarLink to="/admin/rp">Dashboard</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

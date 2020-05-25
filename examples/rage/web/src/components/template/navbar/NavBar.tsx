import React from 'react';
import { UserDropdown } from 'components';
import { NavBarChildLink, NavBarDropdown, NavBarLink, NavBarLabel } from 'instinct-frontend';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container">
        <NavBarLabel>Menu</NavBarLabel>
        <NavBarLink className="main-link-item" to="/" />
        <NavBarLink to="/home">Home</NavBarLink>
        <NavBarDropdown text="Business" to="/business/jobs">
          <NavBarChildLink to="/business/jobs">Job Centre</NavBarChildLink>
          <NavBarChildLink to="/business/owned">My Businesses</NavBarChildLink>
        </NavBarDropdown>
        <NavBarLink to="/leaderboard">Leaderboard</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

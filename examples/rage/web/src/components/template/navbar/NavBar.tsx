import React from 'react';
import { UserDropdown } from 'components';
import { NavBarChildLink, NavBarDropdown, NavBarLink } from 'instinct-frontend';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <div className="container">
        <ul className="navigation-menu flex-container">
          <NavBarLink to="/home">Home</NavBarLink>
          <NavBarDropdown text="Business" to="/business/corporations">
            <NavBarChildLink to="/business/corporations">Corporations</NavBarChildLink>
            <NavBarChildLink to="/business/state-funded">State Funded</NavBarChildLink>
            <NavBarChildLink to="/business/personal">My Businesses</NavBarChildLink>
          </NavBarDropdown>
          <NavBarDropdown text="Crime" to="/crime/gangs">
            <NavBarChildLink to="/crime/gangs">Gangs</NavBarChildLink>
          </NavBarDropdown>
          <NavBarLink to="/leaderboard">Leaderboard</NavBarLink>
          <li className="navigation-item navigation-right-side-item has-items">
            <UserDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}

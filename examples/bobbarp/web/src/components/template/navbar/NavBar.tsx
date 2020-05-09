import React from 'react';
import { NavBarChildLink, NavBarDropdown, NavBarLink, NavBarLabel, UserDropdown } from 'instinct-frontend';

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
        <NavBarDropdown to="/life" text="Life">
          <NavBarChildLink to="/life/government">The Government</NavBarChildLink>
          <NavBarChildLink to="/life/laws">Law and Order</NavBarChildLink>
          <NavBarChildLink to="/life/property">Century22</NavBarChildLink>
          <NavBarChildLink to="/life/finance">Finances</NavBarChildLink>
        </NavBarDropdown>
        <NavBarDropdown to="/crime/arrestable-offenses" text="Crime">
          <NavBarChildLink to="/crime/arrestable-offenses">Arrestable Offenses</NavBarChildLink>
          <NavBarChildLink to="/crime/gangs">Gangs</NavBarChildLink>
        </NavBarDropdown>
        <NavBarDropdown to="/other/behind-the-curtains" text="Other">
          <NavBarChildLink to="/other/behind-the-curtains">Behind The Curtains</NavBarChildLink>
          <NavBarChildLink to="/other/discord">Our Discord</NavBarChildLink>
        </NavBarDropdown>
        <NavBarLink to="/leaderboard">Leaderboard</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

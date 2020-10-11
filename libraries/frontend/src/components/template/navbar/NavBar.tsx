import React from 'react';
import { NavBarChildLink, NavBarDropdown, NavBarLink, UserDropdown } from 'components';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container" style={{ width: '100%', maxWidth: 1055, margin: '0 auto' }}>
        <NavBarLink to="/home">Home</NavBarLink>
        <NavBarDropdown text="Community" to="/community/news">
          <NavBarChildLink to="/community/staff">Staff</NavBarChildLink>
          <NavBarChildLink to="/community/news">News</NavBarChildLink>
          <NavBarChildLink to="/community/photos">Photos</NavBarChildLink>
          <NavBarChildLink to="/community/online">Online Users</NavBarChildLink>
          <NavBarChildLink to="/rooms">Rooms</NavBarChildLink>
          <NavBarChildLink to="/groups">Groups</NavBarChildLink>
        </NavBarDropdown>
        <NavBarLink to="/community/games">High Scores</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}

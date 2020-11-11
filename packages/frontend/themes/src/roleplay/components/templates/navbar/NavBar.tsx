import React, {useContext} from 'react';
import {
  NavBarLink,
  UserDropdown,
  NavBarDropdown,
  NavBarChildLink,
  sessionContext,
} from '@instinct-prj/frontend';

export function NavBar() {
  const {user} = useContext(sessionContext);

  return (
    <nav className="navigation-container">
      <ul
        className="navigation-menu flex-container"
        style={{width: '100%', maxWidth: 1055, margin: '0 auto'}}
      >
        {!!user && (
          <>
            <NavBarLink to="/home">Home</NavBarLink>
            <NavBarDropdown text="Community" to="/community/news">
              <NavBarChildLink to="/community/news">News</NavBarChildLink>
              <NavBarChildLink to="/community/staff">Staff</NavBarChildLink>
              <NavBarChildLink to="/community/games">
                High Scores
              </NavBarChildLink>
            </NavBarDropdown>
            <NavBarLink to="/business">Business</NavBarLink>
            <NavBarLink to="/gangs">Gangs</NavBarLink>
            <li className="navigation-item navigation-right-side-item has-items">
              <UserDropdown />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

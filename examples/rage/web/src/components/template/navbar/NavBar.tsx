import React from 'react';
import { UserDropdown } from 'components';
import { Icon, NavBarChildLink, NavBarDropdown, NavBarLink } from 'instinct-frontend';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <div className="container">
        <ul className="navigation-menu flex-container">
          <NavBarLink to="/home">
            <Icon family="fas" type="home" />
            Home
          </NavBarLink>
          <NavBarDropdown
            text={
              <>
                <Icon family="fas" type="bullhorn" /> Community
              </>
            }
            to="/community/news"
          >
            <NavBarChildLink to="/community/news">News and Updates</NavBarChildLink>
            <NavBarChildLink to="/community/staff">Staff Team</NavBarChildLink>
            <NavBarChildLink to="/community/updates">Updates</NavBarChildLink>
            <NavBarChildLink to="/community/leaderboard">Leaderboard</NavBarChildLink>
          </NavBarDropdown>
          <NavBarDropdown
            text={
              <>
                <Icon family="fas" type="building" /> Business
              </>
            }
            to="/business/corporations"
          >
            <NavBarChildLink to="/business/job-centre">Job Centre</NavBarChildLink>
            <NavBarChildLink to="/business/corporations">Corporations</NavBarChildLink>
            <NavBarChildLink to="/business/state-funded">State Funded</NavBarChildLink>
            <NavBarChildLink to="/business/personal">My Businesses</NavBarChildLink>
          </NavBarDropdown>
          <NavBarDropdown
            text={
              <>
                <Icon family="fas" type="star" /> Crime
              </>
            }
            to="/crime/gangs"
          >
            <NavBarChildLink to="/crime/gangs">Gangs</NavBarChildLink>
            <NavBarChildLink to="/crime/armory">Armory</NavBarChildLink>
          </NavBarDropdown>
          <NavBarLink to="/education/job-training">
            <Icon family="fas" type="graduation-cap" />
            Education
          </NavBarLink>
          <li className="navigation-item navigation-right-side-item has-items">
            <UserDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}

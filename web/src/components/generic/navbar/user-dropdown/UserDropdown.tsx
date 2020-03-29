import React, { useContext } from 'react';
import { Avatar, Icon, NavBarChildLink } from 'components';
import { SessionInterface, SessionContext } from 'app/context';

export function UserDropdown() {
  const sessionContext = useContext<SessionInterface>(SessionContext);

  if (sessionContext.user === undefined) {
    return null;
  }

  return (
    <>
      <a href="#">
        <div className="account-avatar">
          <Avatar
            look={`${sessionContext.user.figure}&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=n`}
          />
        </div>
        <span>
          {sessionContext.user.username}
          <Icon className="ml-2" type="caret-down" />
        </span>
      </a>
      <ul className="navigation-submenu">
        <NavBarChildLink to="/preferences">Account Settings</NavBarChildLink>
        <NavBarChildLink to={`/profile/${sessionContext.user.username}`} />
        <NavBarChildLink to="/logout">Logout</NavBarChildLink>
      </ul>
    </>
  );
}

import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Avatar, Icon, NavBarChildLink } from '../../';
import { SessionTypes, SessionContext } from 'context';

export function UserDropdown() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  if (sessionContext.user === undefined) {
    return null;
  }

  return (
    <>
      <Link to={`/profile/${sessionContext.user.username}`}>
        <div className="account-avatar">
          <Avatar
            look={`${sessionContext.user.figure}&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=n`}
          />
        </div>
        <span>
          {sessionContext.user.username}
          <Icon className="ml-2" type="caret-down" />
        </span>
      </Link>
      <ul className="navigation-submenu">
        {sessionContext.user.rank?.permissions.websiteShowAdminPanel && (
          <NavBarChildLink to="/admin">Admin Panel</NavBarChildLink>
        )}
        <NavBarChildLink to="/preferences">Account Settings</NavBarChildLink>
        <NavBarChildLink to={`/profile/${sessionContext.user.username}`}>My Profile</NavBarChildLink>
        <NavBarChildLink to="/logout">Logout</NavBarChildLink>
      </ul>
    </>
  );
}

import './MyProfile.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Avatar, Icon } from 'instinct-frontend';
import { SessionContext, SessionTypes, } from 'app/context';

export function MyProfile() {
  const { user }: SessionTypes = useContext<SessionTypes>(SessionContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image">
        <Link className="rounded-button white plain hotel-button enter-hotel" to="/play">
          Enter Hotel
        </Link>
      </div>
      <div className="profile-content">
        <div className="header-image">
          <Avatar className="figure" look={user?.figure} />
        </div>
        <div className="stats">
          <div className="icons">
            <Icon type="pound-sign"/>
          </div>
          <div>{user?.credits.toLocaleString()}</div>
        </div>
      </div>
    </article>
  );
}

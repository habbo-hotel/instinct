import './MyProfile.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { SessionContext } from 'app/context';
import { Avatar, ConfigContext, Icon } from 'instinct-frontend';

export function MyProfile() {
  const { user } = useContext(SessionContext);
  const { siteName } = useContext(ConfigContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image">
        <Link className="rounded-button white plain hotel-button enter-hotel" to="/play">
          Enter {siteName}
        </Link>
      </div>
      <div className="profile-content">
        <div className="header-image">
          <Avatar className="figure" look={user?.figure} />
        </div>
        <div className="stats">
          <br/>
        </div>
      </div>
    </article>
  );
}

import './MyProfile.scss';
import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Avatar, sessionContext} from '@instinct/frontend';

export function MyProfile() {
  const {user} = useContext(sessionContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image">
        <Link
          className="rounded-button white plain hotel-button enter-hotel"
          to="/play"
        >
          Enter Hotel
        </Link>
      </div>
      <div className="profile-content">
        <div className="header-image">
          <Avatar className="figure" look={user?.figure} />
        </div>
        <div className="stats">
          <div
            className="icons"
            style={{
              background: 'url(/img/icons/credits.png) no-repeat center center',
            }}
          />
          <div style={{color: '#E2AE1D'}}>{user?.credits}</div>
          <div
            className="icons"
            style={{
              background: 'url(/img/icons/duckets.png) no-repeat center center',
            }}
          />
          <div style={{color: '#BA7CC2'}}>{user?.pixels}</div>
          <div
            className="icons"
            style={{
              background:
                'url(/img/icons/diamonds.png) no-repeat center center',
            }}
          />
          <div style={{color: '#BA7CC2'}}>{user?.points}</div>
        </div>
      </div>
    </article>
  );
}

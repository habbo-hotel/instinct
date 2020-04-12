import './MyProfile.scss';
import { Avatar } from 'components';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { SessionContext, SessionInterface } from 'app/context';

export function MyProfile() {
  const { user }: SessionInterface = useContext<SessionInterface>(SessionContext);
  return (
    <article className="default-section profile-section">
      <div className="background-image">
        <Link className="rounded-button white plain hotel-button enter-hotel" to="/play">
          Enter Hotel
        </Link>
      </div>
      <div className="profile-content">
        <div className="header-image">
          <Avatar className="figure" look={user!.figure} />
        </div>
        <div className="stats">
          <div className="icons" style={{ background: 'url(/img/icons/credits.png) no-repeat center center' }} />
          <div style={{ color: '#E2AE1D' }}>{user!.credits}</div>
          <div className="icons" style={{ background: 'url(/img/icons/duckets.png) no-repeat center center' }} />
          <div style={{ color: '#BA7CC2' }}>{user!.pixels}</div>
          <div className="icons" style={{ background: 'url(/img/icons/diamonds.png) no-repeat center center' }} />
          <div style={{ color: '#BA7CC2' }}>{user!.points}</div>
        </div>
      </div>
    </article>
  );
}

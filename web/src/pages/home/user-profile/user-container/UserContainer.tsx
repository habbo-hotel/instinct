import Moment from 'moment';
import React from 'react';
import { Avatar, Icon } from 'components';
import { UserProfileWidgetProps } from '../';
import { DetailsContainer } from './details-container';

export function UserContainer({ user }: UserProfileWidgetProps) {
  return (
    <aside id="profile" className="default-section">
      <div className="profile-header">
        <div className="header-content flex-container flex-vertical-center" style={{ backgroundColor: '#47AEE' }}>
          <Avatar look={user?.figure || ''} direction={2} headDirection={2} size="l" />
          <div className="header-details">
            <div className="header-title">{user?.username}</div>
            <div className="header-description" />
            <div className="profile-icon">
              <img alt="credits" src="/img/icons/credits.png" style={{ position: 'initial' }} />
              &nbsp;
              {user?.credits}
            </div>
            <div className="profile-icon">
              <img alt="duckets" src="/img/icons/duckets.png" style={{ position: 'initial' }} />
              &nbsp;
              {user?.pixels}
            </div>
            <div className="profile-icon">
              <img alt="diamonds" src="/img/icons/diamonds.png" style={{ position: 'initial' }} />
              &nbsp;{user?.points}
            </div>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <div className="details-container">
          <Icon type="hotel" />
          Currently&nbsp;
          {user?.online ? <strong className="online">online</strong> : <strong className="offline">offline</strong>}
        </div>
        <DetailsContainer icon="user" header="Registered Since">
          {Moment(user?.joinDate).format('MM/DD/YYYY')}
        </DetailsContainer>
        <DetailsContainer icon="door-open" header="Last Logged In">
          {Moment(user?.lastLoginDate).format('MM/DD/YYYY')}
        </DetailsContainer>
        <DetailsContainer icon="headphones-alt">
          <a className="youtube-link" href="https://youtu.be/GfxcnX7XWfg" target="_blank" rel="noopener noreferrer">
            https://youtu.be/GfxcnX7XWfg
          </a>
        </DetailsContainer>
      </div>
    </aside>
  );
}

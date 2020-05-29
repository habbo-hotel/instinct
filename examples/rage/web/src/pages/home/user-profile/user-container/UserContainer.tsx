import Moment from 'moment';
import React from 'react';
import { UserProfileWidgetProps } from '../';
import { Avatar, Icon } from 'instinct-frontend';
import { DetailsContainer } from './details-container';

export function UserContainer({ profile }: UserProfileWidgetProps) {
  return (
    <aside id="profile" className="default-section">
      <div className="profile-header">
        <div className="header-content flex-container flex-vertical-center" style={{ backgroundColor: '#47AEE' }}>
          <Avatar look={profile?.user.figure || ''} direction={2} headDirection={2} size="l" />
          <div className="header-details">
            <div className="header-title">{profile?.user.username}</div>
            <div className="header-description" />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="profile-content">
        <div className="details-container">
          <Icon type="hotel" />
          Currently&nbsp;
          {profile?.user.online ? <strong className="online">online</strong> : <strong className="offline">offline</strong>}
        </div>
        <DetailsContainer icon="user" header="Registered Since">
          {Moment(profile?.user.joinDate).format('MM/DD/YYYY')}
        </DetailsContainer>
        <DetailsContainer icon="door-open" header="Last Logged In">
          {Moment(profile?.user.lastLoginDate).format('MM/DD/YYYY')}
        </DetailsContainer>
      </div>
    </aside>
  );
}

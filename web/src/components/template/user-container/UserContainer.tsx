import React from 'react';
import { UserContainerProps } from './';
import { Link } from 'react-router-dom';
import { Avatar } from '../../generic/avatar';

export function UserContainer({ user }: UserContainerProps) {
  return (
    <div className="member-container">
      <Link className="member-content flex-container flex-vertical-center" to={`/profile/${user.username}`}>
        <div className="member-avatar flex-container flex-vertical-center flex-horizontal-center" style={{ overflow: 'hidden' }}>
          <Avatar look={user.figure} />
        </div>
        <div className="member-details">
          <div className="details-username">{user.username}</div>
          <div className="details-motto">{user.motto}</div>
        </div>
        <div className="member-status flex-container flex-vertical-center flex-horizontal-center">
          <span className="status-icon " title={user.online ? 'Online' : 'Offline'} />
        </div>
      </Link>
    </div>
  );
}

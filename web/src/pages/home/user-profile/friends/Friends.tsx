import React from 'react';
import { take } from 'lodash';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';
import { FriendContainer } from './friend-container';

export function Friends({ profile }: UserProfileWidgetProps) {
  return (
    <Card header="Friends">
      <div className="items-container">
        {
          profile?.friends.length === 0 && (
            <p>{profile.user?.username} hasn't added any friends</p>
          )
        }
        {
          take(profile?.friends, 5).map(user => (
            <div className="item-container" key={user.id}>
              <FriendContainer user={user}/>
            </div>
          ))
        }
      </div>
    </Card>
  )
}

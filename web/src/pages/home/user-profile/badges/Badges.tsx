import React from 'react';
import { take } from 'lodash';
import { Badge } from 'components';
import { Card } from 'instinct-frontend';
import { UserProfileWidgetProps } from '../';

export function Badges({ profile }: UserProfileWidgetProps) {
  return (
    <Card header="Badges">
      <div className="items-container">
        {
          profile?.badges.length === 0 && (
            <p>{profile.user?.username} doesn't have any badges</p>
          )
        }
        {
          take(profile?.badges, 5).map(badge => (
            <div className="item-container" key={badge.id}>
              <Badge badge={badge}/>
            </div>
          ))
        }
      </div>
    </Card>
  )
}

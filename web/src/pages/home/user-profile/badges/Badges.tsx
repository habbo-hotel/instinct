import React from 'react';
import { Badge, Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Badges({ profile }: UserProfileWidgetProps) {
  return (
    <Card header="Badges">
      <div className="items-container">
        <div className="item-container">
          {
            profile?.badges.map(badge => (
              <Badge badge={badge} key={badge.id}/>
            ))
          }
        </div>
      </div>
    </Card>
  )
}

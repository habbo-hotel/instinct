import React from 'react';
import { GangRow } from 'components';
import { Icon } from 'instinct-frontend';
import { UserProfileWidgetProps } from '../UserProfile.types';

export function UserGang({ profile }: UserProfileWidgetProps) {
  return (
    <div className="mt-4">
      <h3>Gang</h3>
      {
        profile?.stats?.gang
          ? <GangRow gang={profile.stats.gang}  style={{ background: 'white' }}/>
          : <Icon className="fa-spin" family="fas" type="spinner"/>
      }
    </div>
  )
}
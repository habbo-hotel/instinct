import React from 'react';
import { GangRow } from 'components';
import { UserProfileWidgetProps } from '../UserProfile.types';

export function UserGang({ profile }: UserProfileWidgetProps) {
  return (
    <div className="mt-4">
      <h3>Gang</h3>
      {profile?.stats?.gang ? <GangRow gang={profile.stats.gang} /> : <p>This user doesn't belong to a gang</p>}
    </div>
  );
}

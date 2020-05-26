import React from 'react';
import { BusinessRow } from 'components';
import { Icon } from 'instinct-frontend';
import { UserProfileWidgetProps } from '../UserProfile.types';

export function UserEmployment({ profile }: UserProfileWidgetProps) {
  return (
    <div className="mt-4">
      <h3>Employment</h3>
      {
        profile?.stats?.job?.business
          ? <BusinessRow business={profile.stats.job.business}/>
          : <Icon className="fa-spin" family="fas" type="spinner"/>
      }
    </div>
  )
}
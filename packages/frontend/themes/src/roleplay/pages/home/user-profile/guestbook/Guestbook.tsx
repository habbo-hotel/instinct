import React from 'react';
import {UserProfileWidgetProps} from '../UserProfile.types';
import {Card} from '@instinct-prj/frontend';

export function Guestbook({profile}: UserProfileWidgetProps) {
  return (
    <Card header="Guestbook">
      <p>talk shit bitch do IT</p>
    </Card>
  );
}

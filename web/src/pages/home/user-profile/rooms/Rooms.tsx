import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Rooms({ profile }: UserProfileWidgetProps) {
  return <Card header="Rooms">This user doesn't own any rooms</Card>;
}

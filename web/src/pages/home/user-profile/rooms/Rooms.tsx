import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Rooms({ user }: UserProfileWidgetProps) {
  return <Card header="Rooms">This user doesn't own any rooms</Card>;
}

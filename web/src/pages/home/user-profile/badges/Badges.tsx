import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Badges({ user }: UserProfileWidgetProps) {
  return <Card header="Badges">This user doesn't have any badges</Card>;
}

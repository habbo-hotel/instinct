import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Friends({ profile }: UserProfileWidgetProps) {
  return <Card header="Friends">This user doesn't have any friends</Card>;
}

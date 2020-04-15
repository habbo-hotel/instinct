import React from 'react';
import { Card } from 'components';
import { UserProfileWidgetProps } from '../';

export function Groups({ user }: UserProfileWidgetProps) {
  return <Card header="Groups">This user doesn't belong to any groups</Card>;
}

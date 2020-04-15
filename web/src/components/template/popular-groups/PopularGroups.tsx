import React, { useState } from 'react';
import { Card } from 'components';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
  const [state, setState] = useState<PopularGroupsState>(defaultPopularGroupsState);

  return (
    <Card header="Popular Groups" subHeader="Who do you want to join?">
      Coming soon
    </Card>
  );
}

import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
  const [state] = useState<PopularGroupsState>(defaultPopularGroupsState);

  return (
    <Card header="Popular Groups" subHeader="Who do you want to join?">
      <Loading isLoading={state.showSpinner}>
        <p>Coming soon</p>
      </Loading>
    </Card>
  );
}

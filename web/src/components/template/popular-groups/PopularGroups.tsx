import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultPopularGroupsState, PopularGroupsState } from './';

export function PopularGroups() {
  const [state] = useState<PopularGroupsState>(defaultPopularGroupsState);

  return (
    <Loading isLoading={state.showSpinner}>
      <Card header="Popular Groups" subHeader="Who do you want to join?">
        <p>Coming soon</p>
      </Card>
    </Loading>
  );
}

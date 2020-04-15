import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultUserOfTheWeekState, UserOfTheWeekState } from './';

export function UserOfTheWeek() {
  const [state] = useState<UserOfTheWeekState>(defaultUserOfTheWeekState);

  return (
    <Card header="User of the week">
      <Loading isLoading={state.showSpinner}>
        <p>Coming soon</p>
      </Loading>
    </Card>
  );
}

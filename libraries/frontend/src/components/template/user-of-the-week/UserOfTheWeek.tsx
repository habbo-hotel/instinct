import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultUserOfTheWeekState, UserOfTheWeekState } from './';

export function UserOfTheWeek() {
  const [state] = useState<UserOfTheWeekState>(defaultUserOfTheWeekState);

  return (
    <Loading isLoading={state.showSpinner} text="Coming Soon">
      <Card header="User of the week">
        <p>Coming soon</p>
      </Card>
    </Loading>
  );
}

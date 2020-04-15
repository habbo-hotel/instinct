import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultPopularRoomsState, PopularRoomsState } from './';

export function PopularRooms() {
  const [state] = useState<PopularRoomsState>(defaultPopularRoomsState);

  return (
    <Loading isLoading={state.showSpinner}>
      <Card header="Popular Rooms">
        <p>Coming soon</p>
      </Card>
    </Loading>
  );
}

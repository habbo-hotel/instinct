import React, { useState } from 'react';
import { Card, Loading } from 'components';
import { defaultPopularRoomsState, PopularRoomsState } from './';

export function PopularRooms() {
  const [state] = useState<PopularRoomsState>(defaultPopularRoomsState);

  return (
    <Card header="Popular Rooms">
      <Loading isLoading={state.showSpinner}>
        <p>Coming soon</p>
      </Loading>
    </Card>
  );
}

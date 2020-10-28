import React from 'react';
import {UserLayout} from '../../components/layout/user';
import {
  Column,
  Container,
  Jumbotron,
  PopularRooms as PopularRoomsWidget,
  setURL,
} from '@instinct-prj/frontend';

setURL('rooms', <PopularRooms />);

export function PopularRooms() {
  return (
    <UserLayout section="community_rooms">
      <Jumbotron title="Popular Rooms" />
      <Container>
        <Column side="left">
          <PopularRoomsWidget />
        </Column>
      </Container>
    </UserLayout>
  );
}

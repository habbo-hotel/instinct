import React from 'react';
import { MyProfile } from './my-profile';
import { PopularGangs, UserLayout } from 'components';
import { Container, Column, setURL, PopularRooms } from 'instinct-frontend';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <br />
          <PopularRooms />
        </Column>
        <Column side="right">
          <PopularGangs/>
        </Column>
      </Container>
    </UserLayout>
  );
}

import React from 'react';
import { MyProfile } from './my-profile';
import { Container, Column } from 'instinct-frontend';
import { UserLayout, setURL, RecentNews, PopularGroups, PopularRooms } from 'components';

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
          <RecentNews />
          <br />
          <PopularGroups />
        </Column>
      </Container>
    </UserLayout>
  );
}

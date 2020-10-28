import React from 'react';
import {
  Container,
  Column,
  UserLayout,
  setURL,
  RecentNews,
  PopularGroups,
  PopularRooms,
  Referral,
  MyProfile,
  UserOfTheWeek,
} from '@instinct-prj/frontend';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <Referral />
          <PopularRooms />
        </Column>
        <Column side="right">
          <UserOfTheWeek />
          <RecentNews />
          <PopularGroups />
        </Column>
      </Container>
    </UserLayout>
  );
}

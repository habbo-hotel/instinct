import React from 'react';
import { MyProfile } from './my-profile';
import {
  Container,
  Column,
  UserLayout,
  setURL,
  RecentNews,
  PopularGroups,
  PopularRooms,
} from '@instinct/frontend';
import {Referral} from './referral/Referral';

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
          <RecentNews />
          <PopularGroups />
        </Column>
      </Container>
    </UserLayout>
  )
}
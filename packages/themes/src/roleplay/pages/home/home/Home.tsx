import React from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  UserOfTheWeek,
  Referral,
} from '@instinct-prj/frontend';
import {OnlineFriendsCard} from './widgets/OnlineFriends';
import {MyEmploymentCard} from './widgets/MyEmployment';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <MyEmploymentCard />
          <Referral />
        </Column>
        <Column side="right">
          <RecentNews />
          <OnlineFriendsCard />
        </Column>
      </Container>
    </UserLayout>
  );
}

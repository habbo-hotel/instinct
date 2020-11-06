import React from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  Referral,
} from '@instinct-prj/frontend';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card';
import {OnlineFriendsCard} from '../../../components/templates/online-friends-card';

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

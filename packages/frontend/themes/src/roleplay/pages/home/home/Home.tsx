import React from 'react';
import {useFetchRPStats} from '../../../hooks/session';
import {UserLayout} from '../../../components/layout/user';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card';
import {OnlineFriendsCard} from '../../../components/templates/online-friends-card';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  Referral,
} from '@instinct-prj/frontend';

setURL('home', <Home />);

export function Home() {
  const rpStats = useFetchRPStats();
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <MyEmploymentCard rpStats={rpStats} />
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

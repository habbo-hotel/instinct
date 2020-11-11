import React from 'react';
import {useFetchRPStats} from '../../../../hooks/session';
import {MyEmploymentCard} from '../../../../components/templates/my-employment-card';
import {OnlineFriendsCard} from '../../../../components/templates/online-friends-card';
import {
  Container,
  Column,
  RecentNews,
  MyProfile,
  Referral,
} from '@instinct-prj/frontend';

export function HomePage() {
  const rpStats = useFetchRPStats();
  return (
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
  );
}

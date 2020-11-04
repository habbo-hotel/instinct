import React from 'react';
import {Link} from 'wouter';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  Card,
  Icon,
} from '@instinct-prj/frontend';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
        </Column>
        <Column side="right">
          <p />
        </Column>
      </Container>
    </UserLayout>
  );
}

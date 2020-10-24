import React from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  RecentNews,
  MyProfile,
  Card,
  Icon,
} from '@instinct/frontend';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <Card
            header={
              <>
                <Icon type="exclamation-triangle" /> Beta
              </>
            }
          >
            <p>
              We are currently still in the development phase of our project.
              Expect changes, bugs and possible downtime as we work to perfect
              our game.
            </p>
          </Card>
        </Column>
        <Column side="right">
          <RecentNews />
        </Column>
      </Container>
    </UserLayout>
  );
}

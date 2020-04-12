import React from 'react';
import { MyProfile } from './my-profile';
import { UserLayout, setURL, Container, Column, RecentNews } from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
        </Column>
        <Column side="right">
          <RecentNews />
        </Column>
      </Container>
    </UserLayout>
  );
}

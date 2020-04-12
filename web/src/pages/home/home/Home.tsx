import React from 'react';
import { MyProfile } from './my-profile';
import { UserLayout, setURL, Container, Column } from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile/>
        </Column>
      </Container>
    </UserLayout>
  );
}

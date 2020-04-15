import React from 'react';
import { Column, Container, setURL, UserLayout } from 'components';

setURL('groups', <GroupsHome />);

export function GroupsHome() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <p>Coming soon</p>
        </Column>
      </Container>
    </UserLayout>
  );
}

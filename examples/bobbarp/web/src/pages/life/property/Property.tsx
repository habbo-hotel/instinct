import React from 'react';
import { UserLayout } from 'components';
import { Card, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/property', <Property/>);

export function Property() {

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="Property">
        <p>Reeee.</p>
      </Jumbotron>
      <Container>
        <Card header="Hello">
          <p>hi</p>
        </Card>
      </Container>
    </UserLayout>
  );
}

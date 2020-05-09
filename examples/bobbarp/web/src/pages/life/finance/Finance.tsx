import React from 'react';
import { UserLayout } from 'components';
import { Card, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/finance', <Finance/>);

export function Finance() {

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="Finance">
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

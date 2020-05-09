import React from 'react';
import { UserLayout } from 'components';
import { Card, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/laws', <LawAndOrder/>);

export function LawAndOrder() {

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="Law And Order">
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

import React from 'react';
import {UserLayout} from '../../../components/layout/user';
import {Container, Column, setURL, Card, Jumbotron} from '@instinct/frontend';

setURL('updates', <Updates />);

export function Updates() {
  return (
    <UserLayout>
      <Jumbotron title="Updates">
        <p>Take a sneak peak at what's been added</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card>
            <p>Comign soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

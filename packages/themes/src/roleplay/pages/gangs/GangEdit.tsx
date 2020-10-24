import React from 'react';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Container,
  Column,
  Jumbotron,
  Row,
  setURL,
} from '@instinct/frontend';

setURL('gangs/:gangID/edit', <GangEdit />);

export function GangEdit() {
  return (
    <UserLayout section="community_team">
      <Jumbotron title="Gang Editor">
        <p>Gang</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card>
              <p>Coming soon</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}

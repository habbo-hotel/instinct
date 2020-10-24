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

setURL('gangs/create', <GangCreate />);

export function GangCreate() {
  return (
    <UserLayout section="community_team">
      <Jumbotron title="Gang Creator">
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

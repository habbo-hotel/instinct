import React from 'react';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Container,
  Column,
  MiniJumbotron,
  Row,
  setURL,
} from '@instinct-prj/frontend';

setURL('gangs/creator', <GangCreate />);

export function GangCreate() {
  return (
    <UserLayout section="community_team">
      <Container>
        <Row>
          <MiniJumbotron>
            <h2>Gang Creator</h2>
            <p>Kickstart your criminal empire today</p>
          </MiniJumbotron>
        </Row>
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

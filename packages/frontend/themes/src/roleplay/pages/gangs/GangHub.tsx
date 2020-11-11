import React from 'react';
import {useFetchAllGangs} from '../../hooks/gang';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Container,
  Column,
  Row,
  setURL,
  MiniJumbotron,
} from '@instinct-prj/frontend';

setURL('gangs', <GangHub />);

export function GangHub() {
  const gangs = useFetchAllGangs();
  return (
    <UserLayout section="community_team">
      <Container>
        <Row>
          <MiniJumbotron>
            <h1>Gangs</h1>
            <p>Can you make the cut?</p>
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

import React, {useContext} from 'react';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Column,
  setURL,
  Card,
  Row,
  MiniJumbotron,
  configContext,
} from '@instinct-prj/frontend';

setURL('community/rules', <Rules />);

export function Rules() {
  const {config} = useContext(configContext);

  return (
    <UserLayout>
      <Container>
        <Row>
          <MiniJumbotron>
            <h2>{config.siteName} Rules</h2>
            <p>
              Here's a few guidelines to abide by to keep a safe and friendly
              environment
            </p>
          </MiniJumbotron>
        </Row>
        <Row>
          <Column side="left">
            <Card>
              <p>We don't have any rules. Anarchy!</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}

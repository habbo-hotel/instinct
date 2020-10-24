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

setURL('business', <BusinessHub />);

export function BusinessHub() {
  return (
    <UserLayout section="business">
      <Jumbotron title="Business Hub">
        <p>Test </p>
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

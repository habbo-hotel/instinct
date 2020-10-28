import React from 'react';
import {UserLayout} from '../../components/layout/user';
import {
  Card,
  Container,
  Column,
  Jumbotron,
  Row,
  setURL,
} from '@instinct-prj/frontend';

setURL('business/create', <BusinessCreate />);

export function BusinessCreate() {
  return (
    <UserLayout section="business">
      <Jumbotron title="Business Creator">
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

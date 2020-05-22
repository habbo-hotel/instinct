import React from 'react';
import './MyBusinesses.scss';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/owned', <MyBusinesses/>);

export function MyBusinesses() {

  return (
    <UserLayout section="my_business">
      <Jumbotron title="My Businesses">
        <p>Here's an overview of your businesses</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="My Businesses">
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Create A Business">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

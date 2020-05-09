import './Gangs.scss';
import React from 'react';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('crime/gangs', <Finance/>);

export function Finance() {

  return (
    <UserLayout section="gangs">
      <Jumbotron title="Gangs">
        <p>Ain't nothing to it, Gangsta Rap made me do it</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="All Gangs">
            <p>Coming soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="My Gang">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

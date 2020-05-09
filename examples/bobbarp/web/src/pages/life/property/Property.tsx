import React from 'react';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/property', <Property/>);

export function Property() {
  return (
    <UserLayout section="community_photos">
      <Jumbotron title="Property">
        <p>Reeee.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Listed Properties" subHeader="Take a look at properties currently for sale">
            <p>Coming Soon</p>
          </Card>
          <Card header="Search Properties">
            <p>Search for information about a property</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="My Properties">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

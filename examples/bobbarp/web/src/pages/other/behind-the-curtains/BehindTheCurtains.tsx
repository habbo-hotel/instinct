import React from 'react';
import './BehindTheCurtains.scss';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('other/behind-the-curtains', <BehindTheCurtains/>);

export function BehindTheCurtains() {

  return (
    <UserLayout section="behind-the-curtains">
      <Jumbotron title="Behind The Curtains">
        <p>Reeee.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Development Team">
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Who We Are">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

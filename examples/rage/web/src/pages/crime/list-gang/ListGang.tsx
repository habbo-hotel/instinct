import './ListGang.scss';
import React from 'react';
import { MyGang, UserLayout } from 'components';
import { GangContainer } from './gang-container';
import { Card, Column, Container, Icon, Jumbotron, setURL } from 'instinct-frontend';

setURL('crime/gangs', <ListGang />);

export function ListGang() {
  return (
    <UserLayout section="list_gangs">
      <Jumbotron title="Gangs">
        <p>Take a look at some of the fiercest gangs in the world!</p>
      </Jumbotron>
      <Container>
        <h3>Gangs</h3>
        <Column side="left">
          <GangContainer />
        </Column>
        <Column side="right">
          <Card>
            <b>Introduction</b>
            <br />
            <p>Gangs let users form deadly alliances for capturing turf, engaging in heists or general mayhem.</p>
            <br />
            <br />

            <b>Turfs</b>
            <br />
            <p>Turfs are properties within the city you can take over for additional income, XP and to show off.</p>
            <br />
            <br />

            <b>
              <Icon family="fas" type="info-circle" /> Did you know?
            </b>
            <br />
            <p>Police cannot enter a turf under any circumstances.</p>
          </Card>
          <MyGang />
        </Column>
      </Container>
    </UserLayout>
  );
}

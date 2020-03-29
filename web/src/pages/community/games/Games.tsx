import React from 'react';
import { Card, Column, Container, Jumbotron, Row, setURL, UserLayout } from 'components';

setURL('community/games', <Games/>);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <Jumbotron title="Leaderboard"/>
      <Container>
        <Row>
          <Column side="left">
            <Card header="Credits">
              <p>Coming soon</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  )
}
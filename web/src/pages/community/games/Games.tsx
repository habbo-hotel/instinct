import React from 'react';
import { Card, Column, Container, Jumbotron, Row, setURL, UserLayout } from 'components';
import { TopCredits } from './top-credits';
import { TopPixels } from './top-pixels';

setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <Jumbotron title="Leaderboard" />
      <Container>
        <Row>
          <Column side="left" style={{ width: '48%' }}>
            <TopCredits />
          </Column>
          <Column side="right" style={{ width: '48%' }}>
            <TopPixels />
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}

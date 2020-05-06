import React from 'react';
import { TopPixels } from './top-pixels';
import { TopPoints } from './top-points';
import { TopCredits } from './top-credits';
import { setURL, UserLayout  } from 'components';
import { Container, Jumbotron, Row } from 'instinct-frontend';

setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <Jumbotron title="Leaderboard" />
      <Container>
        <Row>
          <div className="col-4">
            <TopCredits />
          </div>
          <div className="col-4">
            <TopPixels />
          </div>
          <div className="col-4">
            <TopPoints />
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}

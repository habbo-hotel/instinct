import React from 'react';
import './Leaderboard.scss';
import { MostHits } from './most-hits';
import { UserLayout } from 'components';
import { MostMoney } from './most-money';
import { MostKills } from './most-kills';
import { Container, Jumbotron, Row, setURL } from 'instinct-frontend';

setURL('leaderboard', <Discord/>);

export function Discord() {

  return (
    <UserLayout section="games_ranking">
      <Jumbotron title="Leaderboard">
        <p>Meet the best players.</p>
      </Jumbotron>
      <Container>
        <Row>
          <div className="col-4">
            <MostKills/>
          </div>
          <div className="col-4">
            <MostMoney/>
          </div>
          <div className="col-4">
            <MostHits/>
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}

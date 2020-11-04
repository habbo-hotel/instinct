import './Games.scss';
import React from 'react';
import {MostKillsCard} from './widgets/MostKills';
import {MostDeathsCard} from './widgets/MostDeaths';
import {MostDamageCard} from './widgets/MostDamage';
import {MostActiveCard} from './widgets/MostActive';
import {MostArrestsCard} from './widgets/MostArrests';
import {MostJailTimeCard} from './widgets/MostJailTime';
import {UserLayout} from '../../../components/layout/user';
import {Container, Row, setURL, MiniJumbotron} from '@instinct-prj/frontend';

setURL('community/games', <Games />);

export function Games() {
  return (
    <UserLayout section="games_ranking">
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <h1>High Scores</h1>
              <p>Can you make it to the top?</p>
            </MiniJumbotron>
          </div>
        </Row>
        <br />
        <Row>
          <div className="col-4">
            <MostKillsCard />
          </div>
          <div className="col-4">
            <MostDeathsCard />
          </div>
          <div className="col-4">
            <MostDamageCard />
          </div>
        </Row>
        <br />
        <Row>
          <div className="col-4">
            <MostArrestsCard />
          </div>
          <div className="col-4">
            <MostJailTimeCard />
          </div>
          <div className="col-4">
            <MostActiveCard />
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}

import './Gangs.scss';
import { UserLayout } from 'components';
import { Link } from 'react-router-dom';
import { gangService } from 'app/service';
import { Gang } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultGangsState, GangsState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('crime/gangs', <Gangs/>);

export function Gangs() {
  const [state, setState] = useState<GangsState>(defaultGangsState);

  useEffect(() => {
    async function fetchGangs(): Promise<void> {
      const gangs: Gang[] = await gangService.getAll();
      setState({
        gangs,
        showSpinner: false,
      })
    }

    fetchGangs();
  }, []);

  return (
    <UserLayout section="gangs">
      <Jumbotron title="Gangs">
        <p>Ain't nothing to it, Gangsta Rap made me do it</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="All Gangs">
            <Loading isLoading={state.showSpinner}>
              {
                state.gangs.map(gang => (
                  <Link to={`/crime/gangs/${gang.id}`} key={gang.id}>
                    <div className="gang-container">
                      <div className="user-count">0</div>
                      <div className="name">{gang.name}</div>
                      <div className="desc">{gang.kills} kills</div>
                    </div>
                  </Link>
                ))
              }
            </Loading>
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

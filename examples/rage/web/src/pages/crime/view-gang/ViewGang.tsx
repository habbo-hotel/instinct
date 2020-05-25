import './ViewGang.scss';
import { UserLayout } from 'components';
import { gangService } from 'app/service';
import { useParams } from 'react-router-dom';
import { Gang } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultViewGangState, ViewGangState } from './';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('crime/gangs/:gangID', <ViewGang/>);

export function ViewGang() {
  const { gangID }: Record<'gangID', string> = useParams();
  const [ state, setState ] = useState<ViewGangState>(defaultViewGangState);

  useEffect(() => {
    async function fetchGangs(): Promise<void> {
      const gang: Gang = await gangService.getByID(Number(gangID));
      setState({
        gang,
        showSpinner: false,
      });
    }

    fetchGangs();
  }, []);

  return (
    <UserLayout section="view_gang">
      <Jumbotron title="Gangs">
        <p>Take a look at these fucking cunts</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card>
            Lmaoo
          </Card>
        </Column>
      </Container>
    </UserLayout>
  )
}

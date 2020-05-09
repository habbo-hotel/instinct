import './ViewGang.scss';
import { UserLayout } from 'components';
import { gangService } from 'app/service';
import { useParams } from 'react-router-dom';
import { Gang } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultViewGangState, ViewGangState} from './';
import { Card, Column, Container, Icon, Jumbotron, Loading, setURL, UserContainer } from 'instinct-frontend';

setURL('crime/gangs/:gangID', <ViewGang/>);

export function ViewGang() {
  const {gangID} = useParams();
  const [state, setState] = useState<ViewGangState>(defaultViewGangState);

  useEffect(() => {
    async function fetchGang(): Promise<void> {
      const gang: Gang = await gangService.getByID(gangID);
      setState({
        gang,
        showSpinner: false,
      });
    }

    fetchGang();
  }, [gangID]);

  return (
    <UserLayout section="gangs">
      <Jumbotron title={state.gang?.name}/>
      <Container>
        <Column side="left">
          <Card header="Gang Statistics">
            <Loading isLoading={state.showSpinner}>
              <ul>
                <li>Kills: <b>{state.gang?.kills}</b></li>
                <li>Deaths: <b>{state.gang?.deaths}</b></li>
              </ul>
            </Loading>
          </Card>
          <Card header="Gang Members">
            <div className="members-container">
              {
                state.gang?.users?.length === 0 && (
                  <p>Nobody has joined this gang yet!</p>
                )
              }
              {
                state.gang?.users?.map(user => (
                  <UserContainer key={user.id} user={user}/>
                ))
              }
            </div>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Gang Leader">
            <div className="members-container">
              {
                state.gang
                  ? <UserContainer user={state.gang.owner}/>
                  : <Icon className="fa-spinner" type="spin"/>
              }
            </div>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

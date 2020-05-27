import './ViewGang.scss';
import { BackButton, UserLayout } from 'components';
import { gangService } from 'app/service';
import { useParams } from 'react-router-dom';
import { Gang } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultViewGangState, ViewGangState } from './';
import { Card, Column, Container, Jumbotron, setURL, Icon, Avatar, Button, redirect, UserContainer } from 'instinct-frontend';

setURL('crime/gangs/:gangID', <ViewGang />);

export function ViewGang() {
  const { gangID }: Record<'gangID', string> = useParams();
  const [state, setState] = useState<ViewGangState>(defaultViewGangState);

  useEffect(() => {
    async function fetchGangs(): Promise<void> {
      const gang: Gang = await gangService.getByID(Number(gangID));
      setState({
        gang,
        showSpinner: false,
      });
    }

    fetchGangs();
  }, [gangID]);

  return (
    <UserLayout section="community_team">
      <Jumbotron style={{ backgroundColor: '#004D40', backgroundImage: 'none' }} title={state.gang?.name} />
      <Container>
        <BackButton />
        <Column side="left">
          <Card>
            <h3>Members</h3>
            <div className="members-container">
              {state.gang?.users?.length === 0 && <p>There are no users in this gang yet.</p>}
              {state.gang?.users?.map((user) => (
                <UserContainer key={user.id} user={user} />
              ))}
            </div>
          </Card>
        </Column>
        <Column side="right">
          <Card>
            <h3>Founder</h3>
            <div className="row">
              <div className="col-4">
                <div style={{ height: 140, overflow: 'hidden', marginTop: -50, marginLeft: -20 }}>
                  <Avatar look={state.gang?.owner?.figure} direction={2} gesture="sml" size="l" />
                </div>
              </div>
              <div className="col-8 text-right">
                <h4 style={{ textTransform: 'uppercase' }}>{state.gang?.owner?.username}</h4>
                <Button color="success" style={{ fontSize: 12 }} onClick={() => redirect(`profile/${state.gang?.owner?.username}`)}>
                  View Profile
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <h3>Stats</h3>
            <div className="row">
              <div className="col-4">
                <h5>Members</h5>
                {state.gang?.users !== undefined ? state.gang.users.length : <Icon className="fa-spin" family="fas" type="spinner" />}
              </div>
              <div className="col-4">
                <h5>Kills</h5>
                {state.gang?.kills !== undefined ? state.gang.kills : <Icon className="fa-spin" family="fas" type="spinner" />}
              </div>
              <div className="col-4">
                <h5>Deaths</h5>
                {state.gang?.deaths !== undefined ? state.gang.deaths : <Icon className="fa-spin" family="fas" type="spinner" />}
              </div>
            </div>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

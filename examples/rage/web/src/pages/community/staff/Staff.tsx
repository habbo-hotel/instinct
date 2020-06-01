import { rankService } from 'app/service';
import { Rank } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultStaffState, StaffState } from './';
import { UserContainer, UserLayout } from 'components';
import { Card, Column, Container, Icon, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('community/staff', <Staff />);

export function Staff() {
  const [state, setState] = useState<StaffState>(defaultStaffState);

  useEffect(() => {
    async function fetchStaff(): Promise<void> {
      const ranks: Rank[] = await rankService.getStaff();
      setState({
        ranks,
        showSpinner: false,
      });
    }

    fetchStaff();
  }, []);

  return (
    <UserLayout section="community_team">
      <Jumbotron title="Staff Team">
        <p>Coming soon</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Column side="left">
            <h3>Meet The Team</h3>
            <p>Our staff team strives to maintain a professional, safe and responsible environment to keep our users safe.</p>
            {state.ranks.length === 0 && !state.showSpinner && (
              <Card>
                <h4>
                  <Icon family="fas" type="info-circle" />
                  Not Setup
                </h4>
                <p>There are no staff ranks setup yet.</p>
              </Card>
            )}
            {state.ranks.map((rank) => (
              <Card key={rank.id} header={rank.name}>
                <div className="members-container">
                  {rank.users!.map((user) => (
                    <UserContainer key={user.id} user={{ ...user, rank }} />
                  ))}
                </div>
              </Card>
            ))}
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  );
}

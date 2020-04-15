import { Rank } from 'fashionkilla-interfaces';
import { defaultStaffState, StaffState } from './';
import React, { useEffect, useState } from 'react';
import { rankService } from '../../../app/service/rank';
import { UserContainer } from '../../../components/template/user-container';
import { Card, Container, Column, UserLayout, setURL, Jumbotron, Row, Loading } from 'components';

setURL('community/staff', <Staff />);

export function Staff() {
  const [{ ranks, showSpinner }, setState] = useState<StaffState>(defaultStaffState);
  useEffect(() => {
    fetchRanks();
    async function fetchRanks(): Promise<void> {
      const ranks: Rank[] = await rankService.getStaff();
      setState({
        ranks,
        showSpinner: false,
      });
    }

  }, []);

  return (
    <UserLayout section="community_team">
      <Jumbotron title="Staff Team">
        <p>
          These volunteer players represent the official team and are responsible for maintaining order and security
          inside the hotel.
        </p>
      </Jumbotron>
      <Container>
        <Loading isLoading={showSpinner}>
          <Row>
            <Column side="left">
              <div className="members-container">
                {ranks.map(rank => (
                  <Card key={rank.id} header={rank.name}>
                    {rank.users!.map(user => (
                      <UserContainer key={user.id} user={user} />
                    ))}
                  </Card>
                ))}
              </div>
            </Column>
          </Row>
        </Loading>
      </Container>
    </UserLayout>
  );
}

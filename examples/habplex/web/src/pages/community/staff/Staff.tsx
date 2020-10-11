import React from 'react';
import { Card, Container, Column,Jumbotron, Row, Loading, UserContainer, UserLayout, setURL, useFetchStaffTeam} from 'instinct-frontend';

setURL('community/staff', <Staff />);

export function Staff() {
  const staff = useFetchStaffTeam();

  return (
    <UserLayout section="community_team">
      <Jumbotron title="Staff Team">
        <p>These volunteer players represent the official team and are responsible for maintaining order and security inside the hotel.</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={staff === undefined}>
          <Row>
            <Column side="left">
              <div className="members-container">
                {staff?.map(rank => (
                  <Card key={rank.id} header={rank.name}>
                      {rank.users!.map(user => (
                        <div key={user.id} className="mt-2">
                         <UserContainer user={user} />
                        </div>
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

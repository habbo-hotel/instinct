import React from 'react';
import {Col} from 'reactstrap';
import {useRoute} from 'wouter';
import {UserLayout} from '../../components/layout/user';
import {
  Avatar,
  Card,
  Container,
  MiniJumbotron,
  Row,
  setURL,
  Skeleton,
  UserContainer,
} from '@instinct-prj/frontend';
import {useFetchGangByID} from '../../hooks/gang';

setURL('gangs/:gangID', <GangPage />);

export function GangPage() {
  const [matched, params] = useRoute<{gangID: string}>('/gangs/:gangID');

  const gang = useFetchGangByID(params!.gangID);

  if (!gang) {
    return (
      <UserLayout>
        <Container>
          <Row>
            <h2 style={{marginLeft: 15}}>
              <Skeleton />
            </h2>
          </Row>
        </Container>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-8">
                  <h1>{gang.name}</h1>
                  <p>
                    Founded <b>sometime</b>
                  </p>
                </div>
                <div className="col-4 text-right">
                  <img
                    src={`/img/corps/${gang.badge}.gif`}
                    style={{marginTop: 10, height: 80}}
                  />
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          <Col xs={3}>
            <Card className="text-center" header="Founded By">
              <h3 style={{background: '#0f406b', padding: 5, borderRadius: 2}}>
                {gang.owner.username}
              </h3>
              <div
                className="avatar"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
              >
                <Avatar
                  look={gang.owner.figure}
                  direction={2}
                  gesture="sml"
                  size="l"
                />
              </div>
            </Card>
          </Col>
          <Col xs={9}>
            {gang.ranks.map(rank => (
              <Card key={rank.id} header={rank.name}>
                {rank.users.length === 0 && (
                  <p>There are no users in this rank yet!</p>
                )}
                {rank.users.map(user => (
                  <UserContainer key={user.id} user={user} />
                ))}
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
}

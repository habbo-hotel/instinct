import React from 'react';
import {Col} from 'reactstrap';
import {useRoute} from 'wouter';
import {UserLayout} from '../../components/layout/user';
import {useFetchBusinessByID} from '../../hooks/business';
import {
  Avatar,
  Card,
  Container,
  Jumbotron,
  Row,
  setURL,
  Skeleton,
  UserContainer,
} from '@instinct/frontend';

setURL('business/:businessID', <BusinessPage />);

export function BusinessPage() {
  const [matched, params] = useRoute<{businessID: string}>(
    '/business/:businessID'
  );
  const business = useFetchBusinessByID(params!.businessID);

  if (!business) {
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
      <Jumbotron
        style={{
          backgroundColor: '#263238',
          backgroundImage:
            'url(https://game.peakrp.com/habbo-imaging/badge/police.gif)',
          backgroundSize: 140,
        }}
        title={business.name}
      >
        <p>{business?.desc}</p>
      </Jumbotron>
      <Container>
        <Row className="mt-5">
          <Col xs={3}>
            <Card className="text-center" header="Managed By">
              <h3 style={{background: '#0f406b', padding: 5, borderRadius: 2}}>
                {business.owner.username}
              </h3>
              <div
                className="avatar"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
              >
                <Avatar
                  look={business.owner.figure}
                  direction={2}
                  gesture="sml"
                  size="l"
                />
              </div>
            </Card>
          </Col>
          <Col xs={9}>
            <Card header="Employees">
              {business.employees.length === 0 && (
                <p>This business has no employees.</p>
              )}
              {business.employees.map(_ => (
                <UserContainer key={_.id} user={_} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
}

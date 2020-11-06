import React from 'react';
import './BusinessPage.scss';
import {Col} from 'reactstrap';
import {useRoute} from 'wouter';
import {UserLayout} from '../../components/layout/user';
import {useFetchBusinessByID} from '../../hooks/business';
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

setURL('businesses/:businessID', <BusinessPage />);

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
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-8">
                  <h1>{business.name}</h1>
                  <p>{business.desc} </p>
                </div>
                <div className="col-4 text-right">
                  <img
                    src="https://game.peakrp.com/habbo-imaging/badge/police.gif"
                    style={{marginTop: 10, height: 80}}
                  />
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
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
            <Card>
              <div className="row">
                <div className="col-6">
                  <h4>Bank</h4>
                  <div className="more-info-stats">$50</div>
                </div>
                <div className="col-6">
                  <h4>Stock</h4>
                  <div className="more-info-stats">50</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={9}>
            {business.positions.map(position => (
              <Card key={position.id} header={position.name}>
                {position.employees.length === 0 && (
                  <p>There are no employees in this role yet!</p>
                )}
                {position.employees.map(user => (
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

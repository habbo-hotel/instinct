import React from 'react';
import {Col} from 'reactstrap';
import {UserLayout} from '../../components/layout/user';
import {useFetchAllBusinesses} from '../../hooks/business';
import {BusinessCard} from '../../components/templates/business-card';
import {Container, MiniJumbotron, Row, setURL} from '@instinct-prj/frontend';

setURL('business', <BusinessHub />);

export function BusinessHub() {
  const businesses = useFetchAllBusinesses();
  return (
    <UserLayout>
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <h1>Business Hub</h1>
              <p>Elevate your career to the next level</p>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          {businesses?.map(_ => (
            <Col key={_.id} xs={6}>
              <BusinessCard business={_} />
            </Col>
          ))}
        </Row>
      </Container>
    </UserLayout>
  );
}

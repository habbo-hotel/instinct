import React from 'react';
import {UserLayout} from '../../components/layout/user';
import {Container, Row, setURL} from '@instinct/frontend';
import {Col} from 'reactstrap';
import {exampleBusiness} from '@instinct/interface-rp';
import {BusinessCard} from '../../components/templates/business-card';

setURL('business', <BusinessHub />);

export function BusinessHub() {
  return (
    <UserLayout>
      <Container>
        <Row>
          <h2 style={{color: 'white', marginLeft: 15}}>Companies</h2>
        </Row>
        <Row>
          <Col xs={6}>
            <BusinessCard business={exampleBusiness} />
          </Col>
          <Col xs={6}>
            <BusinessCard business={exampleBusiness} />
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
}

import React from 'react';
import {Col} from 'reactstrap';
import {UserLayout} from '../../components/layout/user';
import {exampleBusiness} from '@instinct-prj/interface-rp';
import {BusinessCard} from '../../components/templates/business-card';
import {Container, MiniJumbotron, Row, setURL} from '@instinct-prj/frontend';

setURL('business', <BusinessHub />);

export function BusinessHub() {
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

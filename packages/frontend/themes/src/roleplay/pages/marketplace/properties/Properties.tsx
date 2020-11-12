import React from 'react';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {
  Card,
  Container,
  Icon,
  MiniJumbotron,
  Row,
  setURL,
} from '@instinct-prj/frontend';

setURL('properties', <Properties />);

export function Properties() {
  return (
    <UserLayout>
      <Container>
        <Row>
          <div className="col-12">
            <MiniJumbotron>
              <h2>Properties</h2>
              <p>
                Check out our finest selection of apartments, houses and more!
              </p>
            </MiniJumbotron>
          </div>
        </Row>
        <Row>
          <div className="col-8">
            <Card>
              <h3>Coming Soon</h3>
            </Card>
          </div>
          <div className="col-4">
            <Card
              header={
                <>
                  <Icon type="question-circle" /> Help
                </>
              }
            >
              <div />
            </Card>
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}

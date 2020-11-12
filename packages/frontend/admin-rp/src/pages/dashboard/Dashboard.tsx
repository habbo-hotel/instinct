import React from 'react';
import {Col} from 'reactstrap';
import {AdminLayout} from '../../components/admin-layout/AdminLayout';
import {Card, Container, Jumbotron, Row, setURL} from '@instinct-prj/frontend';

setURL('admin/rp', <Dashboard />);

export function Dashboard() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Admin Panel RP">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={6}>
            <Card header="About">
              <p>
                Welcome to the RP Admin Panel. Here you can manage businesses,
                gangs and other RP related features.
              </p>
            </Card>
            <Card header="Inspirational Video">
              <iframe
                width="100%"
                height={315}
                src="https://www.youtube-nocookie.com/embed/_5lUSTmkM_0?controls=0&amp;"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </Col>
          <Col xs={6}>
            <Card header="Diagnostics">
              <p>Coming soon</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
}

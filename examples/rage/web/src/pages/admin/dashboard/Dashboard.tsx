import React from 'react';
import { AdminLayout, Card, Column, Container, Jumbotron, Row, setURL } from 'instinct-frontend';

setURL('admin', <Dashboard />);

export function Dashboard() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="Hotel Statistics">
              <p>Coming soon</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </AdminLayout>
  );
}

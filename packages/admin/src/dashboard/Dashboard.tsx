import React from 'react';
import {
  AdminLayout,
  Card,
  Column,
  Container,
  Jumbotron,
  setURL,
} from '@instinct-prj/frontend';

setURL('admin', <Dashboard />);

export function Dashboard() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Hotel Statistics">
            <p>Coming soon</p>
          </Card>
          <Card header="Instinct">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube-nocookie.com/embed/_5lUSTmkM_0?controls=0&amp;autoplay=true"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Column>
      </Container>
    </AdminLayout>
  );
}

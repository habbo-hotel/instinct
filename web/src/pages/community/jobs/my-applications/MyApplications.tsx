import React from 'react';
import { Card, Container, Column, Jumbotron, Row, UserLayout, setURL, Tabs } from 'components';

setURL('community/applications', <MyApplications />);

export function MyApplications() {
  return (
    <UserLayout section="jobs">
      <Jumbotron title="My Applications">
        <p>Track and view your application of the role you applied for.</p>
      </Jumbotron>
      <Container>
        <Tabs
          tabs={[
            {
              text: 'List Of Jobs',
              path: '/community/jobs',
            },
            {
              text: 'My Applications',
              path: '/community/jobs/applications',
            },
          ]}
        />
        <Row>
          <Column side="left">
            <Card header="My Applications">
              <p>You have not applied for any role.</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}

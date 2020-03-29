import React from 'react';
import { Card, Container, Column, Jumbotron, Row, UserLayout, setURL, Tabs } from 'components';

setURL('community/jobs', <JobListings />);

export function JobListings() {
  return (
    <UserLayout section="jobs">
      <Jumbotron title="Job Offers">
        <p>Listed below are the available jobs for which we are actively seeking volunteers for.</p>
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
              path: '/community/applications',
            },
          ]}
        />
        <Row>
          <Column side="left">
            <Card header="Available Positions">
              <p>There are currently no available positions.</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}

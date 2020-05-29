import React from 'react';
import { MyJob, UserLayout } from 'components';
import { VacantPositions } from './vacant-positions';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('business/job-centre', <JobCentre />);

export function JobCentre() {
  return (
    <UserLayout>
      <Jumbotron title="Job Centre">
        <p>Looking for a job? You came to the right place.</p>
      </Jumbotron>
      <Loading isLoading={false}>
        <Container>
          <Column side="left">
            <VacantPositions/>
          </Column>
          <Column side="right">
            <Card header="Employment">
              <p>Coming soon</p>
            </Card>
            <MyJob />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}

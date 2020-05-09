import './JobCentre.scss';
import React from 'react';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, Row, setURL } from 'instinct-frontend';

setURL('business/jobs', <JobCentre/>);

export function JobCentre() {

  return (
    <UserLayout section="job_centre">
      <Jumbotron title="Job Centre">
        <p>Are you unemployed? Check out the list of available jobs by clicking below.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Available Jobs">
            <p>Coming soon</p>
          </Card>
          <Card header="Search For A Business">
            <p>Coming soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="My Job">
            <p>Coming soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

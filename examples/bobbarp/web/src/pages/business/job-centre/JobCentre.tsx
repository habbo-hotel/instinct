import './JobCentre.scss';
import React from 'react';
import { UserLayout } from 'components';
import { SearchBusinesses } from './search-businesses';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

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
          <SearchBusinesses/>
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

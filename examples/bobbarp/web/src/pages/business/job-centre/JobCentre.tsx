import './JobCentre.scss';
import React from 'react';
import { VacantJobs } from './vacant-jobs';
import { MyJob, UserLayout } from 'components';
import { SearchBusinesses } from './search-businesses';
import { Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/jobs', <JobCentre/>);

export function JobCentre() {

  return (
    <UserLayout section="job_centre">
      <Jumbotron title="Job Centre">
        <p>Are you unemployed? Check out the list of available jobs by clicking below.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <VacantJobs/>
          <SearchBusinesses/>
        </Column>
        <Column side="right">
          <MyJob/>
        </Column>
      </Container>
    </UserLayout>
  );
}

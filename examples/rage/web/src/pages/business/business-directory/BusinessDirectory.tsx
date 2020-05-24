import React from 'react';
import './BusinessDirectory.scss';
import { MyJob, UserLayout } from 'components';
import { BusinessListings } from './business-listings';
import { Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/directory', <JobCentre/>);

export function JobCentre() {

  return (
    <UserLayout section="business_directory">
      <Jumbotron title="Corporations">
        <p>Here is an overview of all corporations.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <BusinessListings/>
        </Column>
        <Column side="right">
          <MyJob/>
        </Column>
      </Container>
    </UserLayout>
  );
}

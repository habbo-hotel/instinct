import React from 'react';
import { MyJob, UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('education/job-training', <JobTraining />);

export function JobTraining() {
  return (
    <UserLayout>
      <Jumbotron title="Job Training">
        <p>Valuable skills for a low price.</p>
      </Jumbotron>
      <Loading isLoading={false}>
        <Container>
          <Column side="left">
            <Card header="Available Skills">
              <p>Coming soon</p>
            </Card>
          </Column>
          <Column side="right">
            <Card header="What">
              <p>Coming soon</p>
            </Card>
            <MyJob />
          </Column>
        </Container>
      </Loading>
    </UserLayout>
  );
}

import { UserLayout } from 'components';
import React, { useEffect, useState } from 'react';
import { defaultStaffState, StaffState } from './';
import { Card, Column, Container, Jumbotron, Loading, setURL } from 'instinct-frontend';

setURL('community/staff', <Staff/>);

export function Staff() {
  const [ state, setState ] = useState<StaffState>(defaultStaffState);

  useEffect(() => {
    async function fetchStaff(): Promise<void> {

    }

    fetchStaff();
  }, []);

  return (
    <UserLayout>
      <Jumbotron title="Staff Team">
        <p>Coming soon</p>
      </Jumbotron>
      <Container>
        <Loading isLoading={state.showSpinner}>
          <Column side="left">
            <Card header="Staff">
              <p>Coming Soon</p>
            </Card>
          </Column>
        </Loading>
      </Container>
    </UserLayout>
  )
}
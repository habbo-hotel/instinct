import React from 'react';
import { UserLayout } from 'components';
import { GovernmentBusinesses} from './government-businesses';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/state-funded', <Government/>);

export function Government() {
  return (
    <UserLayout section="corporations">
      <Jumbotron title="State Funded">
        <p>These various departments, offices and agencies are funded from The Royal Government.  These are compromised of national resources and operated independently of private corporations.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <h3>Government Businesses</h3>
          <GovernmentBusinesses/>
        </Column>
        <Column side="right">
          <h3>About</h3>
          <Card>
            <b>Management</b>
            <br/>
            <p>Government businesses are ran by individuals whom are elected into position by The Government.</p>
            <br/>

            <b>Operation</b>
            <br/>
            <p>These businesses help ensure the health, security and operation of the state.  Every businesses here is ran as a resource of the public.</p>
            <br/>

            <b>Employment</b>
            <br/>
            <p>Government businesses adhere to all guidelines when performing hiring practices.</p>
            <p>All jobs below level of director are available to the general product, if they meet the background process that consists of a criminal and drug check..</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

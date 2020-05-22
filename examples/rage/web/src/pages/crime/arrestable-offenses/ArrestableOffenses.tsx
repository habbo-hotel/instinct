import './ArrestableOffenses.scss';
import { UserLayout } from 'components';
import React, { useContext } from 'react';
import { Card, Column, ConfigContext, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('crime/arrestable-offenses', <ArrestableOffenses/>);

export function ArrestableOffenses() {
  const configContext = useContext(ConfigContext);
  return (
    <UserLayout section="arrestable_offenses">
      <Jumbotron title="Arrestable Offenses">
        <p>A brief guide to what is not allowed in {configContext.siteName}</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header={<>Felonies <small>- 15 minutes</small></>}>
            <p>Coming Soon</p>
          </Card>
          <Card header={<>Misdemeanors <small>- 10 minutes</small></>}>
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Department Of Crime">
            <p>The department of crime takes a no tolerance policy towards crime.</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

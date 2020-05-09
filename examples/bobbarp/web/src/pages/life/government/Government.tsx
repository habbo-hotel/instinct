import './Government.scss';
import { UserLayout } from 'components';
import React, { useContext } from 'react';
import { Card, Column, ConfigContext, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/government', <Government/>);

export function Government() {
  const configContext = useContext(ConfigContext);
  return (
    <UserLayout section="government">
      <Jumbotron title={`Government of ${configContext.siteName}`}>
        <p>Meet the representatives of the people.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Office of the President">
            <p>Coming Soon</p>
          </Card>
          <Card header={`National Assembly for ${configContext.siteName}`}>
            <p>Coming Soon.</p>
          </Card>
          <Card header="Heads of Statutory Bodiess">
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="The Executive Branch">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

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
          <Card header="Heads of Statutory Bodies">
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="The Executive Branch">
            <p>The Executive Branch in {configContext.siteName} comprises of the President, the Prime Minister, and the Cabinet Ministers. The President appoints the Prime Minister, and then the Prime Minister appoints his/her cabinet. Each Minister has responsibility over a different department, and is accountable to the National Assembly.</p>
          </Card>
          <Card header="National Assembly">
            <p>The National Assembly (NA) is a body of individuals elected to represent the people of {configContext.siteName} every two months. All laws that govern {configContext.siteName} are made by the National Assembly. The leader of the largest party in the Assembly after an election is appointed by the President as Prime Minister. Members of the Prime Minister's Cabinet are also Members of the National Assembly.</p>
          </Card>
          <Card header="Heads of Statutory Bodies">
            <p>A Statutory Body is one founded by an Act of the National Assembly. Statutory Bodies currently include the Central Bank, The Police, The National Health System, The Tax Administration, {configContext.siteName} Energy, and the Business Services Authority. Heads of Statutory Bodies are accountable to the National Assembly.</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

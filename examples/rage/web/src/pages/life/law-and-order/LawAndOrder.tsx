import './LawAndOrder.scss';
import { UserLayout } from 'components';
import React, { useContext } from 'react';
import { Card, Column, ConfigContext, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/laws', <LawAndOrder/>);

export function LawAndOrder() {
  const configContext = useContext(ConfigContext);
  return (
    <UserLayout section="law_and_order">
      <Jumbotron title="Law and Order">
        <p>A brief guide to what is not allowed in {configContext.siteName}</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Test">
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

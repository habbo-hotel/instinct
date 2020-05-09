import './Finance.scss';
import React from 'react';
import { UserLayout } from 'components';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('life/finance', <Finance/>);

export function Finance() {
  return (
    <UserLayout section="finance">
      <Jumbotron title="Finance">
        <p>Here is a breakdown on your finances</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <Card header="Income Over Time">
            <p>Coming Soon</p>
          </Card>
          <Card header="Recent Expenses">
            <p>Coming Soon</p>
          </Card>
        </Column>
        <Column side="right">
          <Card header="Quick Statistics">
            <p>Coming Soon</p>
          </Card>
          <Card header="Taxes Paid To Date">
            <p>Coming Soon</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

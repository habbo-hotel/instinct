import React from 'react';
import './Corporations.scss';
import { SearchCorporations, UserLayout } from 'components';
import { PrivateBusinesses } from './private-businesses';
import { Card, Column, Container, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/corporations', <Corporations/>);

export function Corporations() {

  return (
    <UserLayout section="corporations">
      <Jumbotron title="Corporations">
        <p>These corporations are privately owned and managed separate of the government.</p>
      </Jumbotron>
      <Container>
        <Column side="left">
          <h3>Private Businesses</h3>
          <PrivateBusinesses/>
          <SearchCorporations/>
        </Column>
        <Column side="right">
          <h3>About</h3>
          <Card>
            <b>Management</b>
            <br/>
            <p>Private businesses are solely owned and maintained by individual players.</p>
            <br/>

            <b>Operation</b>
            <br/>
            <p>These private businesses can do a range of services from restaurants to private security.  All businesses must follow the law and meet all license requirements.</p>
            <br/>

            <b>Employment</b>
            <br/>
            <p>Business owners may hire and fire users as they please provided the actions are inclusive of all people.</p>
            <p>Employees cannot be forced to perform solicit acts nor asked to do anything non work related.</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

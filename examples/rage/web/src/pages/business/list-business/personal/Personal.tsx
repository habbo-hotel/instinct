import React from 'react';
import { UserLayout } from 'components';
import { PersonalBusinesses } from './personal-businesses';
import { PreviousApplications } from './previous-applications';
import { Button, Card, Column, Container, Icon, Jumbotron, redirect, setURL } from 'instinct-frontend';

setURL('business/personal', <Personal/>);

export function Personal() {
  return (
    <UserLayout section="corporations">
      <Jumbotron title="My Businesses">
        <p>Below you can find a list of businesses you own, as well as tips for any first time business owners.</p>
      </Jumbotron>
      <Container>
        <h3>My Businesses</h3>
        <Column side="left">
          <PersonalBusinesses/>
          <h3 className="mt-5">Previous Applications</h3>
          <div style={{ marginTop: 0 }}>
            <PreviousApplications/>
          </div>
        </Column>
        <Column side="right">
          <Card>
            <div className="container">
              <div className="row">
                <div className="col-lg-1">
                  <div style={{ fontSize: 36, marginTop: 10 }}>
                    <Icon family="fas" type="city"/>
                  </div>
                </div>
                <div className="col text-right">
                  <h4>Business Creator</h4>
                  <Button color="success" style={{ fontSize: 12 }} onClick={() => redirect('business/create')}>New Application</Button>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <b>Requirements</b>
            <br/>
            <p>Business owners must receive the online certification for <b>Business Management</b>.</p>
            <p>When applying for a business, the application fee will be collected upon submission.  This is non refundable regardless of approval status and goes to HM's Treasury.</p>
            <br/><br/>

            <b>Management Portal</b>
            <br/>
            <p>As a business owner, you gain access to the management portal which gives you insights on your business and assists with HR tasks.</p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  )

}

import React, { useState } from 'react';
import { BackButton, UserLayout } from 'components';
import { CreateBusinessState, defaultCreateBusinessState } from './';
import { Button, Card, Column, Container, Form, Jumbotron, setURL } from 'instinct-frontend';

setURL('business/create', <CreateBusiness />);

export function CreateBusiness() {
  const [state, setState] = useState<CreateBusinessState>(defaultCreateBusinessState);

  return (
    <UserLayout section="corporations">
      <Jumbotron title="Business Creator">
        <p>Coming soon</p>
      </Jumbotron>
      <Container>
        <BackButton />
        <Column side="left">
          <Form className="">
            <Card header="Branding">
              <div className="mb-2">
                <h4>Business Name</h4>
                <input className="form-control" placeholder="Sally's Store" />
              </div>
              <div className="mb-2">
                <h4>Description</h4>
                <textarea className="form-control" rows={3} />
              </div>
            </Card>
            <Card header="Strategy">
              <div className="mb-2">
                <h4>Main Concept</h4>
                <textarea className="form-control" rows={3} />
              </div>
              <div className="mb-2">
                <h4>Primary Source of Income</h4>
                <textarea className="form-control" rows={3} />
              </div>
              <div className="text-right">
                <Button color="success" style={{ fontSize: 12 }}>
                  Submit Application
                </Button>
              </div>
            </Card>
          </Form>
        </Column>
        <Column side="right">
          <Card>
            <h4>Useful Tips</h4>
            <p>
              Your business must be unique and have a fully developed idea on how you will implement it. Be sure to go into as much detail
              as you can on the main concept.
            </p>
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}

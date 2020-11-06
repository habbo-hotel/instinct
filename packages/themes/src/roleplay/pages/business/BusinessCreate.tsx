import React from 'react';
import {BusinessEditor} from './editor/BusinessEditor';
import {UserLayout} from '../../components/layout/user';
import {Container, Row, setURL, MiniJumbotron} from '@instinct-prj/frontend';

setURL('business/creator', <BusinessCreate />);

export function BusinessCreate() {
  async function onSubmit() {}

  return (
    <UserLayout section="business">
      <Container>
        <Row>
          <MiniJumbotron>
            <h2>Business Creator</h2>
            <p>Kickstart your new business today!</p>
          </MiniJumbotron>
        </Row>
        <Row>
          <div style={{width: '100%'}}>
            <BusinessEditor onSubmit={onSubmit} />
          </div>
        </Row>
      </Container>
    </UserLayout>
  );
}

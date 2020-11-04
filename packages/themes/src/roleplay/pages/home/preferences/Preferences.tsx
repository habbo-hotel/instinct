import React from 'react';
import {preferenceTabs} from './tabs';
import {UserLayout} from '../../../components/layout/user';
import {Container, Loading, Row, TabCard, setURL} from '@instinct-prj/frontend';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <Container>
          <Row>
            <article className="default-section">
              <TabCard tabs={preferenceTabs} />
            </article>
          </Row>
        </Container>
      </Loading>
    </UserLayout>
  );
}

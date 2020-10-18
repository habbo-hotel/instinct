import React from 'react';
import {preferenceTabs} from './tabs';
import {
  Container,
  Jumbotron,
  Loading,
  Row,
  TabCard,
  UserLayout,
  setURL,
} from '@instinct/frontend';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <Jumbotron title="Account Settings">
          <p>
            Set your preferences, update your email, and secure your account
            from your personal portal.
          </p>
        </Jumbotron>
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

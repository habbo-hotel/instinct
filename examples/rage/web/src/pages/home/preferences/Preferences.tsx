import React from 'react';
import './Preferences.scss';
import { UserLayout } from 'components';
import { preferenceTabs } from './tabs';
import { Container, Jumbotron, Row, TabCard, setURL } from 'instinct-frontend';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="preferences">
      <Jumbotron title="Account Settings">
        <p>Set your preferences, update your email, and secure your account from your personal portal.</p>
      </Jumbotron>
      <Container>
        <Row>
          <article className="default-section">
            <TabCard header="Preferences" tabs={preferenceTabs} />
          </article>
        </Row>
      </Container>
    </UserLayout>
  );
}

import React from 'react';
import { Container, Jumbotron, Loading, Row, setURL, UserLayout } from 'components';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <Jumbotron title="Account Settings">
          <p>Set your preferences, update your email, and secure your account from your personal portal.</p>
        </Jumbotron>
        <Container>
          <Row>
            <p>Coming Soon</p>
          </Row>
        </Container>
      </Loading>
    </UserLayout>
  );
}

import React, {useContext} from 'react';
import {EmailPreferences} from './tabs/email';
import {ProfilePreferences} from './tabs/profile';
import {SecurityPreferences} from './tabs/security';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Loading,
  setURL,
  NavTabs,
  Icon,
  configContext,
} from '@instinct-prj/frontend';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  const {config} = useContext(configContext);
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <Container>
          <h1 className="text-center">
            <Icon className="mr-2" type="user-circle" />
            Manage Your {config.siteName} Account
          </h1>
          <NavTabs
            tabs={[
              {
                text: <Icon type="lock" />,
                children: <SecurityPreferences />,
              },
              {
                text: <Icon type="envelope" />,
                children: <EmailPreferences />,
              },
              {
                text: <Icon type="user" />,
                children: <ProfilePreferences />,
              },
            ]}
          />
        </Container>
      </Loading>
    </UserLayout>
  );
}

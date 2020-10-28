import React from 'react';
import {GameSettings} from './views/GameSettings';
import {ServerSettings} from './views/ServerSettings';
import {SitePreferences} from './views/SitePreferences';
import {WebsiteSettingsProvider} from './context/WebsiteSettings.provider';
import {
  AdminLayout,
  Container,
  Jumbotron,
  Row,
  setURL,
  TabCard,
} from '@instinct-prj/frontend';
import {GoogleSettings} from './views/GoogleSettings';
import {MailSettings} from './views/MailSettings';

setURL('admin/website', <WebsiteSettings />);

export function WebsiteSettings() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Website Settings">
        <p>
          Here you can update your website and update your SWFs, maintenance,
          etc.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Container>
            <WebsiteSettingsProvider>
              <article className="default-section" style={{paddingLeft: 60}}>
                <TabCard
                  tabs={[
                    {
                      name: 'Site Preferences',
                      icon: 'wrench',
                      children: <SitePreferences />,
                    },
                    {
                      name: 'Server Settings',
                      icon: 'server',
                      children: <ServerSettings />,
                    },
                    {
                      name: 'Game Settings',
                      icon: 'gamepad',
                      children: <GameSettings />,
                    },
                    {
                      name: 'Captcha Settings',
                      icon: 'robot',
                      children: <GoogleSettings />,
                    },
                    {
                      name: 'Email Settings',
                      icon: 'envelope-open',
                      children: <MailSettings />,
                    },
                  ]}
                />
              </article>
            </WebsiteSettingsProvider>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  );
}

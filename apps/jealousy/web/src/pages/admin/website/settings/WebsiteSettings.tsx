import React from 'react';
import {GameSWFs} from './game-swfs/GameSWFs';
import {SitePreferences} from './site-preferences/SitePreferences';
import { AdminLayout, Container, Jumbotron, Row, setURL, TabCard } from '@instinct/frontend';

setURL('admin/website', <WebsiteSettings/>);

export function WebsiteSettings() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Website Settings">
        <p>Here you can update your website and update your SWFs, maintenance, etc.</p>
      </Jumbotron>
      <Container>
        <Row>
          <Container>
            <article className="default-section" style={{ paddingLeft: 60 }}>
              <TabCard tabs={[
                {
                  name: 'Site Preferences',
                  icon: 'wrench',
                  children: <SitePreferences />,
                },
                {
                  name: 'Game SWFs',
                  icon: 'gamepad',
                  children: <GameSWFs/>,
                },
              ]}/>
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  )
}
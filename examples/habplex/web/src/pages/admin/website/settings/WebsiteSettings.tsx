import React from 'react';
import { MaintenanceMode } from './views/MaintenanceMode';
import { AdminLayout, Container, Jumbotron, Row, setURL, TabCard } from 'instinct-frontend';

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
              <TabCard header="Website Settings" tabs={[
                {
                  name: 'Site Preferences',
                  icon: 'wrench',
                  children: <p>preferences</p>,
                },
                {
                  name: 'Game SWFs',
                  icon: 'gamepad',
                  children: <p>swfs</p>,
                },
                {
                  name: 'Maintenance Mode',
                  icon: 'user-hard-hat',
                  children: <MaintenanceMode />,
                }
              ]}/>
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  )
}
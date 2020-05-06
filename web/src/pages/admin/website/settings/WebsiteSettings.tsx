import React from 'react';
import { AdminLayout, setURL } from 'components';
import { Card, Column, Container, Jumbotron, Row } from 'instinct-frontend';
setURL('admin/website', <WebsiteSettings/>);

export function WebsiteSettings() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Website Settings">
        <p>Here you can update your website and update your SWFs, maintenance, etc.</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card>
              <p>Coming soon</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </AdminLayout>
  )
}
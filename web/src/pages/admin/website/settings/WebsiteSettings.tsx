import React from 'react';
import { AdminLayout, Card, Column, Container, Jumbotron, Row, setURL } from 'components';

setURL('admin/website', <WebsiteSettings/>);

export function WebsiteSettings() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{ background: '#263238' }} title="Website Settings"/>
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
import React from 'react';
import { CreateRankModal } from './views/rank-modals';
import { ListBans, ListRanks, ListUsers } from './views';
import { AdminLayout, Container, Jumbotron, Row, setURL, TabCard } from 'instinct-frontend';

setURL('admin/users', <Users/>);

export function Users() {
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
                  name: 'Users',
                  icon: 'users',
                  children: <ListUsers/>
                },
                {
                  name: (
                    <div className="row">
                      <div className="col-6">Ranks</div>
                      <div className="col-6 text-right">
                        <CreateRankModal/>
                      </div>
                    </div>
                  ),
                  icon: 'users-class',
                  children: <ListRanks/>
                },
                {
                  name: 'Bans',
                  icon: 'ban',
                  children: <ListBans/>,
                },
              ]}/>
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  )
}
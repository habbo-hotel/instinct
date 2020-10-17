import React from 'react';
import {ListUsers} from './views/ListUsers';
import {ListBans} from './views/bans/ListBans';
import {ListRanks} from './views/ranks/ListRanks';
import {CreateBanModal} from './views/bans/ban-modals';
import {CreateRankModal} from './views/ranks/rank-modals';
import {
  AdminLayout,
  Container,
  Jumbotron,
  Row,
  setURL,
  TabCard,
} from '@instinct/frontend';

setURL('admin/users', <Users />);

export function Users() {
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
            <article className="default-section" style={{paddingLeft: 60}}>
              <TabCard
                tabs={[
                  {
                    name: 'Users',
                    icon: 'users',
                    children: <ListUsers />,
                  },
                  {
                    name: (
                      <div className="row">
                        <div className="col-6">Ranks</div>
                        <div className="col-6 text-right">
                          <CreateRankModal />
                        </div>
                      </div>
                    ),
                    icon: 'users-class',
                    children: <ListRanks />,
                  },
                  {
                    name: (
                      <div className="row">
                        <div className="col-6">Bans</div>
                        <div className="col-6 text-right">
                          <CreateBanModal />
                        </div>
                      </div>
                    ),
                    icon: 'ban',
                    children: <ListBans />,
                  },
                ]}
              />
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  );
}

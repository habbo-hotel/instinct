import React from 'react';
import {Link, useLocation} from 'wouter';
import {AdminLayout, Container, Icon, Jumbotron, Row} from '@instinct-prj/frontend';

export function UsersLayout({children}: {children: any}) {
  const [location] = useLocation();
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
              <article className="tab-card" style={{position: 'relative'}}>
                <ul className="navigation">
                  <Link to="/admin/users">
                    <li
                      className={location === '/admin/users' ? 'selected' : ''}
                    >
                      <Icon className="mr-0" type="users" />
                    </li>
                  </Link>
                  <Link to="/admin/users/ranks">
                    <li
                      className={
                        location === '/admin/users/ranks' ? 'selected' : ''
                      }
                    >
                      <Icon className="mr-0" type="users-class" />
                    </li>
                  </Link>
                  <Link to="/admin/users/bans">
                    <li
                      className={
                        location === '/admin/users/bans' ? 'selected' : ''
                      }
                    >
                      <Icon className="mr-0" type="ban" />
                    </li>
                  </Link>
                </ul>
                {children}
              </article>
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  );
}

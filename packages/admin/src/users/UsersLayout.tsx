import React from 'react';
import {Link, useLocation} from 'wouter';
import {
  AdminLayout,
  Container,
  Icon,
  Jumbotron,
  Row,
} from '@instinct-prj/frontend';

export function UsersLayout({children}: {children: any}) {
  const [location] = useLocation();

  function getHeader() {
    return (
      <ul className="nav nav-tabs">
        <Link to="/admin/users">
          <li
            className={
              location === '/admin/users' ? 'nav-link active' : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="users" />
          </li>
        </Link>
        <Link to="/admin/users/ranks">
          <li
            className={
              location === '/admin/users/ranks' ? 'nav-link active' : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="users-class" />
          </li>
        </Link>
        <Link to="/admin/users/bans">
          <li
            className={
              location === '/admin/users/bans' ? 'nav-link active' : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="ban" />
          </li>
        </Link>
      </ul>
    );
  }

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
              <div className="aside-title">{getHeader()}</div>
              <div className="aside-content">{children}</div>
            </article>
          </Container>
        </Row>
      </Container>
    </AdminLayout>
  );
}

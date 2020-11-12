import React, {useContext} from 'react';
import {NavBar} from '../navbar/NavBar';
import {
  EnterHotelButton,
  Header,
  healthContext,
  PermissionGuard,
  Footer,
  Icon,
  AdminLayoutProps,
} from '@instinct-prj/frontend';

export function AdminLayout({children, permission}: AdminLayoutProps) {
  const {health} = useContext(healthContext);

  return (
    <PermissionGuard permission={permission}>
      <span className="page-container">
        <Header>
          <EnterHotelButton />
          <div
            className="rounded-button"
            style={{
              background: '#001726',
              border: 'none',
              boxShadow: '2px 2px #0F416C',
              color: 'white',
            }}
          >
            {health.usersOnline}
            <Icon className="ml-2" type="user" />
          </div>
        </Header>
        <NavBar />
        <main>
          <section className="page-container">{children}</section>
        </main>
      </span>
      <Footer />
    </PermissionGuard>
  );
}

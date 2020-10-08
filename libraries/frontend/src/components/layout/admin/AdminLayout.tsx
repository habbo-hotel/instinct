import { Link } from 'wouter';
import { AdminLayoutProps } from './';
import { healthContext } from 'context';
import React, { useContext } from 'react';
import { AdminNavBar, Footer, Header, Icon, PermissionGuard } from 'components';

export function AdminLayout({ children, permission }: AdminLayoutProps) {
  const { health } = useContext(healthContext);

  return (
    <PermissionGuard permission={permission}>
      <span className="page-container">
        <Header>
          <Link className="rounded-button white plain mr-4" to="/play">
            Enter Hotel
          </Link>
          <button className="rounded-button white">
            {health.usersOnline}
            <Icon className="ml-2" type="user" />
          </button>
        </Header>
        <AdminNavBar />
        <main>
          <section className="page-container">{children}</section>
        </main>
      </span>
      <Footer />
    </PermissionGuard>
  );
}

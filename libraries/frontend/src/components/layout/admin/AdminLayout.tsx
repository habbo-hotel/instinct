import { AdminLayoutProps } from './';
import { Link } from 'react-router-dom';
import { HealthContext } from 'context';
import React, { useContext, ReactNode } from 'react';
import { AdminNavBar, Header, Icon, PermissionGuard } from 'components';

export function AdminLayout({ children, permission }: AdminLayoutProps) {
  const healthContext = useContext(HealthContext);

  return (
    <PermissionGuard permission={permission}>
      <span className="page-container">
        <Header>
          <Link className="rounded-button white plain mr-4" to="/play">
            Enter Hotel
          </Link>
          <button className="rounded-button white">
            {healthContext.usersOnline}
            <Icon className="ml-2" type="user" />
          </button>
        </Header>
        <AdminNavBar />
        <main>
          <section className="page-container">{children}</section>
        </main>
      </span>
    </PermissionGuard>
  );
}

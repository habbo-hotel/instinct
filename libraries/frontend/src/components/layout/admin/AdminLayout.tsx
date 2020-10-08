import { Link } from 'wouter';
import { AdminLayoutProps } from './';
import { healthContext } from 'context';
import React, { useContext } from 'react';
import { AdminNavBar, Header, Icon, PermissionGuard } from 'components';

export function AdminLayout({ children, permission }: AdminLayoutProps) {
  const { usersOnline } = useContext(healthContext);

  return (
    <PermissionGuard permission={permission}>
      <span className="page-container">
        <Header>
          <Link className="rounded-button white plain mr-4" to="/play">
            Enter Hotel
          </Link>
          <button className="rounded-button white">
            {usersOnline}
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

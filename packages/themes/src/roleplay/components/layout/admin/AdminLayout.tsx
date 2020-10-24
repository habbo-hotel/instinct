import {Link} from 'wouter';
import {AdminLayoutProps} from './';
import React, {useContext} from 'react';
import {Icon} from '../../generic/icon';
import {Footer} from '../../template/footer';
import {Header} from '../../template/header';
import {healthContext} from '../../../context/health';
import {PermissionGuard} from '../../guard/permission';
import {AdminNavBar} from '../../template/admin-navbar';

export function AdminLayout({children, permission}: AdminLayoutProps) {
  const {health} = useContext(healthContext);

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

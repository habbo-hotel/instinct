import {AdminLayoutProps} from './';
import React, {useContext} from 'react';
import {Icon} from '../../generic/icon';
import {Footer} from '../../template/footer';
import {healthContext} from '../../../context/health';
import {PermissionGuard} from '../../guard/permission';
import {AdminNavBar} from '../../template/admin-navbar';
import {EnterHotelButton, Header} from '../../template/header';

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
        <AdminNavBar />
        <main>
          <section className="page-container">{children}</section>
        </main>
      </span>
      <Footer />
    </PermissionGuard>
  );
}

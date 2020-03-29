import { UserLayoutProps } from './';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Header, Icon, NavBar, redirect, UserGuard } from 'components';
import { HealthContext, HealthInterface, SessionContext, SessionInterface } from 'app/context';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const healthContext: HealthInterface = useContext(HealthContext);
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return (
    <UserGuard>
      <Header>
        <Link className="rounded-button white plain mr-4" to="/play">
          Enter Hotel
        </Link>
        <button className="rounded-button white">
          {healthContext.onlineUsers}
          <Icon className="ml-2" type="user"/>
        </button>
      </Header>
      <NavBar />
      <main>
        <section className="page-container" data-page={section} style={style}>
          {children}
        </section>
      </main>
    </UserGuard>
  );
}

import { UserLayoutProps } from './';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { HealthContext, SessionContext } from 'context';
import { Footer, Header, Icon, NavBar, redirect, UserGuard } from 'components';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const healthContext = useContext(HealthContext);
  const sessionContext = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return (
    <UserGuard>
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
        <NavBar />
        <main>
          <section className="page-container" data-page={section} style={style}>
            {children}
          </section>
        </main>
      </span>
      <Footer />
    </UserGuard>
  );
}

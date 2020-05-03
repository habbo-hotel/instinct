import { UserLayoutProps } from './';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Footer, Header, Icon, NavBar, redirect, UserGuard } from 'components';
import { HealthContext, HealthTypes, SessionContext, SessionTypes } from 'app/context';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const healthContext: HealthTypes = useContext(HealthContext);
  const sessionContext: SessionTypes = useContext(SessionContext);

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
          { healthContext.onlineUsers }
          <Icon className="ml-2" type="user"/>
        </button>
      </Header>
      <NavBar/>
      <main>
        <section className="page-container" data-page={ section } style={ style }>
          { children }
        </section>
      </main>
      </span>
      <Footer/>
    </UserGuard>
  );
}

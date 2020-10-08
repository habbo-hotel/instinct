import { UserLayoutProps } from './';
import { Link, useLocation } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { healthContext, sessionContext } from 'context';
import { Footer, Header, Icon, NavBar } from 'components';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const [location, setLocation] = useLocation();
  const { user } = useContext(sessionContext);
  const { usersOnline } = useContext(healthContext);

  useEffect(() => {
    if (user === undefined) {
      setLocation('/login');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <>
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
        <NavBar />
        <main>
          <section className="page-container" data-page={section} style={style}>
            {children}
          </section>
        </main>
      </span>
      <Footer />
    </>
  );
}

import {UserLayoutProps} from './';
import {useLocation} from 'wouter';
import {NavBar} from '../../templates/navbar';
import React, {useContext, useEffect} from 'react';
import {
  Icon,
  UserGuard,
  Header,
  Footer,
  healthContext,
  sessionContext,
  EnterHotelButton,
} from '@instinct-prj/frontend';

export function UserLayout({
  children,
  section = 'home',
  style,
}: UserLayoutProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
  const {health} = useContext(healthContext);

  useEffect(() => {
    if (user === undefined) {
      setLocation('/login');
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <UserGuard>
      <span className="page-container">
        <Header>
          <EnterHotelButton />
          <button className="rounded-button white">
            {health.usersOnline}
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

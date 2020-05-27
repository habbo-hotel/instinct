import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserGuard, NavBar } from 'components';
import { ConfigContext, Footer, Header, HealthContext, Icon, UserLayoutProps } from 'instinct-frontend';

export function UserLayout({ children, section, style }: UserLayoutProps) {
  const configContext = useContext(ConfigContext);
  const healthContext = useContext(HealthContext);
  return (
    <UserGuard>
      <span className="page-container">
        <Header>
          <Link className="rounded-button white plain mr-4" to="/play">
            Enter {configContext.siteName}
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

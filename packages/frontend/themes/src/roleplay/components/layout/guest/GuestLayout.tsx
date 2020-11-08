import React from 'react';
import {GuestLayoutProps} from './';
import {Card, Footer, GuestGuard} from '@instinct-prj/frontend';

export function GuestLayout({children, style}: GuestLayoutProps) {
  return (
    <GuestGuard>
      <span className="page-container">
        <main>
          <section className="page-content" style={style}>
            <div className="login-page">
              <div>
                <img className="header-logo" src="/img/logo/regular.png" />
                <Card>{children}</Card>
              </div>
            </div>
          </section>
        </main>
      </span>
      <Footer />
    </GuestGuard>
  );
}

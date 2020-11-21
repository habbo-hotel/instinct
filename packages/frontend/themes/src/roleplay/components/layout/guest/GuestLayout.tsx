import React from 'react';
import {GuestLayoutProps} from './';
import {Footer} from '../../templates/footer';
import {Card, GuestGuard} from '@instinct-prj/frontend';

export function GuestLayout({children, style}: GuestLayoutProps) {
  return (
    <GuestGuard>
      <span className="page-container">
        <main>
          <section className="page-content" style={style}>
            <div className="login-page">
              <div className="row">
                <div className="col-12">
                  <img
                    className="header-logo"
                    src="/img/logo/regular.png"
                    style={{width: '100%'}}
                  />
                  <Card>
                    {children}
                    <br />
                    <br />
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </span>
      <Footer />
    </GuestGuard>
  );
}

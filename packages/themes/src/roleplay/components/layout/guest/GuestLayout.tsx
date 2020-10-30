import React from 'react';
import {GuestLayoutProps} from './';
import {NavBar} from '../../templates/navbar';
import {
  Footer,
  GuestGuard,
  Header,
  LoginModal,
  RegisterModal,
} from '@instinct-prj/frontend';

export function GuestLayout({
  children,
  section = 'home',
  style,
}: GuestLayoutProps) {
  return (
    <GuestGuard>
      <span className="page-container">
        <Header>
          <RegisterModal />
          <LoginModal />
        </Header>
        <NavBar />
        <main>
          <section className="page-container" data-page={section} style={style}>
            {children}
          </section>
        </main>
      </span>
      <Footer />
    </GuestGuard>
  );
}

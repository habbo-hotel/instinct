import React from 'react';
import './GuestLayout.scss';
import { GuestLayoutProps } from './';
import { Footer, GuestGuard, Header, LoginModal, NavBar, RegisterModal } from 'components';

export function GuestLayout({ children, section = 'home', style }: GuestLayoutProps) {
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

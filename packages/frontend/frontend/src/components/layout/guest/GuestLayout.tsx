import React from 'react';
import './GuestLayout.scss';
import {GuestLayoutProps} from './';
import {Footer} from '../../template/footer';
import {GuestGuard} from '../../guard/guest';
import {Header} from '../../template/header';
import {NavBar} from '../../template/navbar';
import {LoginModal} from '../../template/login-modal';
import {RegisterModal} from '../../template/register-modal';

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

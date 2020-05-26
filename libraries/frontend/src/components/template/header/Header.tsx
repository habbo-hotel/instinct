import './Header.scss';
import React from 'react';
import { HeaderProps } from './';

export function Header({ children }: HeaderProps) {
  return (
    <header id="header" className="header-container pixelated is-small is-logged">
      <div className="header-content">
        <div className="logo-container">
          <img alt="site logo" src="/img/logo/regular.png"/>
        </div>
        <div className="account-container">
          <div id="account-buttons" className="account-buttons">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

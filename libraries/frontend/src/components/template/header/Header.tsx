import React from 'react';
import { HeaderProps } from './';

export function Header({ children }: HeaderProps) {
  return (
    <header id="header" className="header-container pixelated is-small is-logged">
      <div className="header-content" style={{ width: '100%', maxWidth: 1055, margin: '0 auto' }}>
        <div className="account-container">
          <div id="account-buttons" className="account-buttons">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

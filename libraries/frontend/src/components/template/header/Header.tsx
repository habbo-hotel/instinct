import React from 'react';
import { HeaderProps } from './';

export function Header({ children }: HeaderProps) {
  return (
    <header id="header" className="header-container pixelated is-small is-logged">
      <div className="header-content row" style={{ width: '100%', maxWidth: 1055, margin: '0 auto', paddingTop: 0 }}>
        <div className="col-6 text-left">
          <img src="/img/logo/regular.png" style={{ marginLeft: -25 }} />
        </div>
        <div className="col-6 text-right">
          <div id="account-buttons" className="account-buttons" style={{ marginTop: 10 }}>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

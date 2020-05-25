import React from 'react';
import './ActionBar.scss';

export function ActionBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand">
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span className="nav-link" style={{ height: 27 }}>
              <img src="/img/icons/help.png"/>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" style={{ height: 31 }}>
              <img src="/img/icons/wanted.png"/>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}



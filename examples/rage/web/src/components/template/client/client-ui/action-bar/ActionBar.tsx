import './ActionBar.scss';
import React, { useContext } from 'react';
import { ThemeContext, ThemeContextInterface } from 'app/context';

export function ActionBar() {
  const themeContext = useContext(ThemeContext);

  function toggleWidget<K extends keyof ThemeContextInterface>(key: K): void {
    themeContext.setStore!({
      [key]: !themeContext[key],
    });
  }

  return (
    <nav className="navbar navbar-dark navbar-expand">
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => toggleWidget('showCallForHelpWidget')}>
            <span className="nav-link" style={{ height: 27 }}>
              <img src="/img/icons/help.png" style={{ marginTop: 2 }} />
            </span>
          </li>
          <li className="nav-item" onClick={() => toggleWidget('showWantedListWidget')}>
            <span className="nav-link" style={{ height: 31 }}>
              <img src="/img/icons/wanted.png" style={{ marginLeft: -15, marginTop: 1 }} />
            </span>
          </li>
          <li className="nav-item" onClick={() => toggleWidget('showBusinessWidget')}>
            <span className="nav-link" style={{ height: 31 }}>
              <img src="/img/icons/business.png" style={{ marginLeft: -25, marginTop: -2, height: 35 }} />
            </span>
          </li>
          <li className="nav-item" onClick={() => toggleWidget('showMapWidget')}>
            <span className="nav-link" style={{ height: 31 }}>
              <img src="/img/icons/map.svg" style={{ marginLeft: -25, marginTop: -8, height: 45 }} />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

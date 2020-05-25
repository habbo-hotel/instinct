import './ActionBar.scss';
import React, { useContext } from 'react';
import { ThemeContext } from 'app/context';

export function ActionBar() {
  const themeContext = useContext(ThemeContext);

  function toggleCallForHelpWidget(): void {
    themeContext.setStore!({
      showCallForHelpWidget: !themeContext.showCallForHelpWidget,
    })
  }

  function toggleWantedListWidget(): void {
    themeContext.setStore!({
      showWantedListWidget: !themeContext.showWantedListWidget,
    })
  }

  return (
    <nav className="navbar navbar-dark navbar-expand">
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={toggleCallForHelpWidget}>
            <span className="nav-link" style={{ height: 27 }}>
              <img src="/img/icons/help.png"/>
            </span>
          </li>
          <li className="nav-item" onClick={toggleWantedListWidget}>
            <span className="nav-link" style={{ height: 31 }}>
              <img src="/img/icons/wanted.png"/>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}



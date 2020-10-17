import './ClientActions.scss';
import {useLocation} from 'wouter';
import {Icon} from '../../../generic/icon';
import React, {useContext, useState} from 'react';
import {themeContext} from '../../../../context/theme';
import {healthContext} from '../../../../context/health';
import {StaffWidget} from '../../staff-widget/StaffWidget';

export function ClientActions() {
  const [location, setLocation] = useLocation();
  const {health} = useContext(healthContext);
  const {showClient, setStore} = useContext(themeContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleWebView(): void {
    setStore({showClient: !showClient});
    setLocation('/home');
  }

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  return (
    <div className="actions">
      <button onClick={toggleWebView}>Web</button>
      <button onClick={toggleFullScreen}>
        <Icon
          className="mr-0"
          family="fas"
          type={isExpanded ? 'compress' : 'expand'}
        />
      </button>
      <button style={{cursor: 'default'}}>
        <Icon family="fas" type="user" />
        <b>{health.usersOnline}</b>
      </button>
      <StaffWidget />
    </div>
  );
}

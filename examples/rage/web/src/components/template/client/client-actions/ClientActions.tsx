import './ClientActions.scss';
import { ThemeContext } from 'app/context';
import React, { useContext, useState } from 'react';
import { redirect, HealthContext, Icon } from 'instinct-frontend';

export function ClientActions() {
  const themeContext = useContext(ThemeContext);
  const healthContext = useContext(HealthContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleWebView(): void {
    themeContext.toggleClient!(!themeContext.showClient);
    redirect('home');
  }

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded ? document.exitFullscreen() : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  async function refreshClient(): Promise<void> {

  }

  return (
    <div className="actions">
      <button onClick={toggleWebView}>Web</button>
      <button onClick={toggleFullScreen}>
        <Icon className="mr-0" family="fas" type={isExpanded ? 'compress' : 'expand'} />
      </button>
      <button style={{ cursor: 'default' }}>
        <Icon family="fas" type="user" />
        <b>{healthContext.usersOnline}</b>
      </button>
      <button onChange={refreshClient}>
        <Icon className="mr-0" family="fas" type="redo"/>
      </button>
    </div>
  );
}

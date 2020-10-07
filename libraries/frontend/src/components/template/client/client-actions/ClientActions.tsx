import './ClientActions.scss';
import { redirect, Icon } from 'components';
import React, { useContext, useState } from 'react';
import { healthContext, themeContext } from 'context';

export function ClientActions() {
  const themeContext = useContext(themeContext);
  const healthContext = useContext(healthContext);
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
    </div>
  );
}

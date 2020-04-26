import './ClientActions.scss';
import { Icon, redirect } from 'components';
import { HealthContext } from 'app/context';
import React, { useContext, useState } from 'react';

export function ClientActions() {
  const healthContext = useContext(HealthContext);
  const [ isExpanded, setExpanded ] = useState<boolean>(false);

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  return (
    <div className="actions">
      <button onClick={() => redirect('home')}>Web</button>
      <button onClick={toggleFullScreen}>
        <Icon className="mr-0" family="fas" type={isExpanded ? 'compress' : 'expand'}/>
      </button>
      <button style={{ cursor: 'default' }}>
        <Icon family="fas" type="user"/>
        <b>{healthContext.onlineUsers}</b>
      </button>
    </div>
  )
}
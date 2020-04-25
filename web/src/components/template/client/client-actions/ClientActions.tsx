import './ClientActions.scss';
import React, { useState } from 'react';

export function ClientActions() {
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
      <button>Web</button>
      <button onClick={toggleFullScreen}>
        <i className={isExpanded ? 'fas fa-compress' : 'fas fa-expand'}/>
      </button>
      <button style={{ cursor: 'default' }}>
        <i className="fa fa-user mr-2"/>
        <b>0</b>
      </button>
    </div>
  )
}
import './LoadingScreen.scss';
import React, { useState } from 'react';
import { ClientEvent, clientService } from 'services';

export function LoadingScreen() {
  const [progress, setProgress] = useState<number>(0);

  clientService.eventListener.on(ClientEvent.LOADING_PROGRESS, setProgress);

  if (progress === 100) {
    return null;
  }

  return (
    <div id="loader-wrapper">
      <div className="loader">
        <div id="loader">
          <div className="loading_bar">
            <div className="percent" id="loader_bar" style={{ width: `${progress}%` }} />
            {progress}%
          </div>
        </div>
        <div className="loader-section section-top" />
        <div className="loader-section section-bottom" />
      </div>
    </div>
  );
}

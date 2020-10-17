import './LoadingScreen.scss';
import {sessionContext} from '@instinct/frontend';
import React, {useContext, useEffect, useState} from 'react';
import {ClientEvent, clientService} from '@instinct/frontend';

export function LoadingScreen() {
  const {setOnline} = useContext(sessionContext);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    clientService.eventListener.on(ClientEvent.LOADING_PROGRESS, setProgress);
    clientService.eventListener.on(ClientEvent.ENTERED_HOTEL, () =>
      setOnline(true)
    );
  }, []);

  if (progress === 100) {
    return null;
  }

  return (
    <div id="loader-wrapper">
      <div className="loader">
        <div id="loader">
          <div className="loading_bar">
            <div
              className="percent"
              id="loader_bar"
              style={{width: `${progress}%`}}
            />
            {progress}%
          </div>
        </div>
        <div className="loader-section section-top" />
        <div className="loader-section section-bottom" />
      </div>
    </div>
  );
}

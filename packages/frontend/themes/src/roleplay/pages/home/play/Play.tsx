// @ts-ignore - Dependency doesn't have a good @types
import Flash from 'swfobject';
import React, {useContext, useEffect} from 'react';
import {ClientWidgets} from '../../../widgets/ClientWidgets';
import {webSocketContext} from '../../../context/web-socket';
import {sessionContext, setURL, themeContext} from '@instinct-prj/frontend';
import {WebSocketError} from '../../../components/templates/error/WebSocketError';

setURL('play', <PlayPage />);

export function PlayPage() {
  const {online} = useContext(sessionContext);
  const {setStore} = useContext(themeContext);
  const {getConnectionStatus} = useContext(webSocketContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  useEffect(() => {
    setStore({showClient: true});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(getConnectionStatus());

  if (!getConnectionStatus() && flashEnabled && online) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'black',
          zIndex: 400,
        }}
      >
        <div className="mt-5">
          <WebSocketError />
        </div>
      </div>
    );
  }

  return <ClientWidgets />;
}

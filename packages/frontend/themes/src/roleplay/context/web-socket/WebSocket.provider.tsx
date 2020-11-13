import React, {useContext, useEffect, useState} from 'react';
import {webSocketContext} from './WebSocket';
import {WebSocketService, WebSocketSubscriber} from '../../services/web-socket';
import {
  configContext,
  ContextProvidersProps,
  sessionContext,
} from '@instinct-prj/frontend';
import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
  WebSocketOutgoingEvent,
  WebSocketOutgoingEvents,
} from '@instinct-prj/interface-rp';

export function WebSocketContextProvider({children}: ContextProvidersProps) {
  const {sso} = useContext(sessionContext);
  const {config} = useContext(configContext);
  const [connection, setConnection] = useState<WebSocketService>();

  useEffect(() => {
    if (sso) {
      setConnection(
        new WebSocketService(config.websocketIP, config.websocketPort, sso)
      );
    }
  }, [sso]);

  function onEvent<K extends WebSocketIncomingEvent>(
    event: K,
    callback: WebSocketSubscriber<WebSocketIncomingEvents[K]>
  ) {
    connection!.addSubscriber(event, callback);
  }

  function sendEvent<K extends WebSocketOutgoingEvent>(
    event: K,
    data: WebSocketOutgoingEvents[K]
  ) {
    if (!connection) {
      throw new Error('Web Socket connection has not been started');
    }
    connection.sendEvent(event, data);
  }

  return (
    <webSocketContext.Provider value={{onEvent, sendEvent}}>
      {children}
    </webSocketContext.Provider>
  );
}

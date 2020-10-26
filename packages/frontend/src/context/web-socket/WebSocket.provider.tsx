import React, {useContext} from 'react';
import {webSocketContext} from './WebSocket';
import {WebSocketSubscriber} from '@instinct/frontend';
import {configContext, ContextProvidersProps} from '../';
import {WebSocketService} from '../../services/web-socket/WebSocket';

export function WebSocketContextProvider({children}: ContextProvidersProps) {
  const {config} = useContext(configContext);
  let connection: WebSocketService;

  function startConnection(sso: string) {
    connection = new WebSocketService(config.websocketIP, config.websocketPort, sso);
  }

  function onEvent(event: string, callback: WebSocketSubscriber) {
    connection.addSubscriber(event, callback);
  }


  function sendEvent(event: string, data: object) {
    if (!connection) {
      throw new Error('Web Socket connection has not been started');
    }
  }

  return (
    <webSocketContext.Provider value={{startConnection, onEvent, sendEvent}}>
      {children}
    </webSocketContext.Provider>
  )

}
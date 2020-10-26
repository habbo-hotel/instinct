import {useContext, useEffect} from 'react';
import {sessionContext} from '@instinct/frontend';
import {webSocketContext} from '../../context/web-socket';
import {WebSocketSubscriber} from '../../services/web-socket';
import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
} from '@instinct/interface-rp';

export function useWebSocketEventListener<K extends WebSocketIncomingEvent>(
  incomingEvent: K,
  callback: WebSocketSubscriber<WebSocketIncomingEvents[K]>
) {
  const {online} = useContext(sessionContext);
  const {onEvent} = useContext(webSocketContext);

  useEffect(() => {
    function registerEventListener() {
      onEvent(incomingEvent, callback);
    }

    if (online) {
      registerEventListener();
    }
  }, [online]);

  return null;
}

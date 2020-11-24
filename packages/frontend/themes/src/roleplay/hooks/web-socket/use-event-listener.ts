import {useContext, useEffect} from 'react';
import {webSocketContext} from '../../context/web-socket';
import {WebSocketSubscriber} from '../../services/web-socket';
import {configContext, sessionContext} from '@instinct-prj/frontend';
import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
} from '@instinct-prj/interface-rp';

export function useWebSocketEventListener<K extends WebSocketIncomingEvent>(
  incomingEvent: K,
  callback: WebSocketSubscriber<WebSocketIncomingEvents[K]>
) {
  const {config} = useContext(configContext);
  const {online} = useContext(sessionContext);
  const {onEvent} = useContext(webSocketContext);

  useEffect(() => {
    function registerEventListener() {
      onEvent(incomingEvent, callback);
    }

    if (online && config.websocketEnabled) {
      registerEventListener();
    }
  }, [online, config.websocketEnabled]);

  return null;
}

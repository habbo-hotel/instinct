import {useContext, useEffect} from 'react';
import {webSocketContext} from '../../context/web-socket';

export function useWebSocketStartConnection(sso: string) {
  const {startConnection} = useContext(webSocketContext);

  useEffect(() => {
    if (sso) {
      startConnection(sso);
    }
  }, [sso]);

  return null;
}

import {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';

export function useRenewSessionSSO() {
  const {user, setUser, sso, setSSO} = useContext(sessionContext);
  useEffect(() => {
    if (sso) {
      return;
    }

    async function fetchSSO() {
      setUser({online: true});

      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, [user?.username, sso]);
}

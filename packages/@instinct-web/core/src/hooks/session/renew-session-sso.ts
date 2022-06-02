import {toast} from 'react-toastify';
import {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';

export function useRenewSessionSSO() {
  const {user, sso, setSSO} = useContext(sessionContext);
  useEffect(() => {
    if (sso) {
      return;
    }

    async function fetchSSO() {
      const currentUserStatus = await sessionService.getCurrentUser();

      if (currentUserStatus.online) {
        toast.error("You're already online!");
        return;
      }

      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, [user?.id]);
}

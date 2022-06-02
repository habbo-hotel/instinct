import {toast} from 'react-toastify';
import {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';

export function useRenewSessionSSO() {
  const {user, sso, setSSO} = useContext(sessionContext);
  useEffect(() => {
    if (sso) {
      console.log('SSO already generated.  Skipping creation.');
      return;
    }

    async function fetchSSO() {
      console.log('Fetching new SSO');
      const currentUserStatus = await sessionService.getCurrentUser();

      if (currentUserStatus.online) {
        toast.error("You're already online!");
        return;
      }

      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, [user?.username, sso]);
}

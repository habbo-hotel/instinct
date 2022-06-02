import {useContext, useEffect} from 'react';
import {themeContext} from '../../context/theme';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';
import {toast} from 'react-toastify';

export function useRenewSessionSSO() {
  const {user, setSSO} = useContext(sessionContext);
  const {showClient} = useContext(themeContext);
  useEffect(() => {
    if (!showClient) {
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
  }, [user]);
}

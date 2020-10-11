import { backendAPI } from 'api';
import { sessionContext } from 'context';
import { useContext, useEffect } from 'react';

export function useBanListener() {
  const { banned, setBanned } = useContext(sessionContext);

  useEffect(() => {
    backendAPI.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response.status === 403 && !banned) {
          setBanned(true);
        }

        throw error;
      }
    );
  }, []);
}

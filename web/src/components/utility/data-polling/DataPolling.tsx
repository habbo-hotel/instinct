import { User } from 'instinct-interfaces';
import { sessionService } from 'app/service';
import { useContext, useEffect } from 'react';
import { HealthContext, SessionContext } from 'app/context';

const FIVE_MINUTE_IN_MS: number = 300000000;

export function DataPolling() {
  const healthContext = useContext(HealthContext);
  const sessionContext = useContext(SessionContext);

  useEffect(() => {

    async function fetchHealth(): Promise<void> {
    }

    async function fetchSession(): Promise<void> {
      const user: User = await sessionService.getCurrentUser();
      sessionContext.setStore({
        ...sessionContext,
        user,
      });
    }

    setInterval(fetchHealth, FIVE_MINUTE_IN_MS);
    setInterval(fetchSession, FIVE_MINUTE_IN_MS);
  }, [sessionContext]);

  return null;
}
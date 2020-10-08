import { useContext, useEffect } from 'react';
import { sessionService } from '../../../services/session';
import { configContext, healthContext, sessionContext } from 'context';

const TWENTY_SECONDS_IN_MS = 20000;
const FIVE_MINUTE_IN_MS = 300000000;

export function DataPolling() {
  const configC = useContext(configContext);
  const healthC = useContext(healthContext);
  const sessionC = useContext(sessionContext);

  async function refreshSession(): Promise<void> {
    const user = await sessionService.getCurrentUser();
    sessionC.setUser(user);
  }

  useEffect(() => {
    configC.init!();
    healthC.init!();

    setInterval(configC.init!, TWENTY_SECONDS_IN_MS);
    setInterval(healthC.init!, FIVE_MINUTE_IN_MS);
    setInterval(refreshSession, FIVE_MINUTE_IN_MS);
  }, []);

  return null;
}

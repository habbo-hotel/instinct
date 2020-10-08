import { useContext, useEffect } from 'react';
import { configContext, healthContext, sessionContext } from 'context';

const TWENTY_SECONDS_IN_MS = 20000;
const FIVE_MINUTE_IN_MS = 300000000;

export function DataPolling() {
  const configC = useContext(configContext);
  const healthC = useContext(healthContext);
  const sessionC = useContext(sessionContext);

  useEffect(() => {
    configC.init!();
    healthC.init!();
    sessionC.init!();

    setInterval(configC.init!, TWENTY_SECONDS_IN_MS);
    setInterval(healthC.init!, FIVE_MINUTE_IN_MS);
    setInterval(sessionC.init!, FIVE_MINUTE_IN_MS);
  }, []);

  return null;
}

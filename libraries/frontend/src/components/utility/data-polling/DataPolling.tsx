import { useContext, useEffect } from 'react';
import { configService, sessionService } from 'services';
import { Config, Health, User } from 'instinct-interfaces';
import { configContext, healthContext, sessionContext } from 'context';

const TWENTY_SECONDS_IN_MS = 20000;
const FIVE_MINUTE_IN_MS = 300000000;

export function DataPolling() {
  const configContext = useContext(configContext);
  const healthContext = useContext(healthContext);
  const { forceStart } = useContext(sessionContext);

  useEffect(() => {
    async function fetchHealth(): Promise<void> {
      const health: Health = await configService.getHealth();
      healthContext.setStore!(health);
    }

    async function fetchSession(): Promise<void> {
      const user: User = await sessionService.getCurrentUser();
      forceStart!(user);
    }

    async function fetchConfig(): Promise<void> {
      const config: Config = await configService.getConfig();
      configContext.setStore!(config);
    }

    fetchHealth();
    fetchConfig();
    fetchSession();

    setInterval(fetchHealth, TWENTY_SECONDS_IN_MS);
    setInterval(fetchConfig(), FIVE_MINUTE_IN_MS);
    setInterval(fetchSession, FIVE_MINUTE_IN_MS);
  }, [sessionContext]);

  return null;
}

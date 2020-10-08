import { Client, DataPolling, Router } from 'components';
import { configService, sessionService } from 'services';
import React, { useContext, useEffect, useState } from 'react';
import { configContext, healthContext, sessionContext } from 'context';

export function Bootstrap() {
  const [ready, setReady] = useState(false);
  const { setConfig } = useContext(configContext);
  const { setHealth } = useContext(healthContext);
  const { setUser } = useContext(sessionContext);

  useEffect(() => {
    async function init() {
      const [user, config, health] = await Promise.all([
        sessionService.init(),
        configService.getConfig(),
        configService.getHealth(),
      ]);

      setUser(user);
      setConfig(config);
      setHealth(health);
      setReady(true);
    }

    init();
  }, [setUser]);

  if (!ready) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  return (
    <>
      <Router />
      <Client />
      <DataPolling />
    </>
  );
}

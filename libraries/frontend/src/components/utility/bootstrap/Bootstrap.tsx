import { useBanListener } from 'hooks';
import { SkeletonTheme } from 'react-loading-skeleton';
import { configService, sessionService } from 'services';
import React, { useContext, useEffect, useState } from 'react';
import { BannedGuard, Client, DataPolling, Router } from 'components';
import { configContext, healthContext, sessionContext } from 'context';

export function Bootstrap() {
  useBanListener();
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
  }, []);

  if (!ready) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  return (
    <SkeletonTheme color="#0f416d" highlightColor="#1a4d6e">
      <BannedGuard>
        <Router />
        <Client />
        <DataPolling />
      </BannedGuard>
    </SkeletonTheme>
  );
}

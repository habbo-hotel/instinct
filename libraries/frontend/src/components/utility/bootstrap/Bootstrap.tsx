import { configContext } from '../../../context/config';
import { healthContext } from '../../../context/health';
import { ContextProvidersProps } from '../../../context';
import { sessionContext } from '../../../context/session';
import React, { useContext, useEffect, useState } from 'react';

export function BootStrap({ children }: ContextProvidersProps) {
  const sessionC = useContext(sessionContext);
  const configC = useContext(configContext);
  const healthC = useContext(healthContext);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    async function bootstrap(): Promise<void> {
      await Promise.all([configC.init!(), sessionC.init!(), healthC.init!()]);

      setLocked(false);
    }

    bootstrap();
  }, []);

  return locked ? null : children;
}

import React, { useState } from 'react';
import { healthContext, HealthContext } from './';
import { configService } from '../../services/config';
import { Health, exampleHealth } from 'instinct-interfaces';
import { ContextProvidersProps } from '../ContextProviders.types';

export function HealthContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<Health>(exampleHealth);

  async function init(): Promise<void> {
    const health = await configService.getHealth();
    setState(health);
  }

  function setStore(changes: Partial<HealthContext>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <healthContext.Provider value={{ ...state, setStore, init }}>{children}</healthContext.Provider>;
}

import React, { useState } from 'react';
import { configContext, ConfigContext } from './';
import { configService } from '../../services/config';
import { Config, defaultConfig } from 'instinct-interfaces';
import { ContextProvidersProps } from '../ContextProviders.types';

export function ConfigContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<Config>(defaultConfig);

  async function init(): Promise<void> {
    console.log('Config Context - Init');
    const config = await configService.getConfig();
    setState(config);
  }

  function setStore(changes: Partial<ConfigContext>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <configContext.Provider value={{ ...state, setStore, init }}>{children}</configContext.Provider>;
}

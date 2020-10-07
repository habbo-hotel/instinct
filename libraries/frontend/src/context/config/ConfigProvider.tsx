import React, { useState } from 'react';
import { ContextProvidersProps } from '../ContextProviders.types';
import { configContext, ConfigContext, defaultConfigInterface } from './';

export function ConfigContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<ConfigContext>(defaultConfigInterface);

  function setStore(changes: Partial<ConfigContext>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <configContext.Provider value={{ ...state, setStore }}>{children}</configContext.Provider>;
}

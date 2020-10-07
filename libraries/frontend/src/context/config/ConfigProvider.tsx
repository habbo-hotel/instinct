import React, { useState } from 'react';
import { ConfigContext, ConfigProviderProps, ConfigTypes, defaultConfigInterface } from './';

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [state, setState] = useState<ConfigTypes>(defaultConfigInterface);

  function setStore(changes: Partial<ConfigTypes>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <ConfigContext.Provider value={{ ...state, setStore }}>{children}</ConfigContext.Provider>;
}

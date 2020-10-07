import React, { useState } from 'react';
import { ContextProvidersProps } from '../ContextProviders.types';
import { defaultHealthInterface, healthContext, HealthContext } from './';

export function HealthContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<HealthContext>(defaultHealthInterface);

  function setStore(changes: Partial<HealthContext>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <healthContext.Provider value={{ ...state, setStore }}>{children}</healthContext.Provider>;
}

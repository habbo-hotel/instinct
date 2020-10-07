import React, { useState } from 'react';
import { defaultHealthInterface, HealthContext, HealthTypes, HealthProviderProps } from './index';

export function HealthProvider({ children }: HealthProviderProps) {
  const [state, setState] = useState<HealthTypes>(defaultHealthInterface);

  function setStore(changes: Partial<HealthTypes>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <HealthContext.Provider value={{ ...state, setStore }}>{children}</HealthContext.Provider>;
}

import { sessionContext } from './';
import React, { useState } from 'react';
import { User } from 'instinct-interfaces';
import { ContextProvidersProps } from '../ContextProviders.types';

export function SessionContextProvider({ children }: ContextProvidersProps) {
  const [user, setUser] = useState<User>();

  return <sessionContext.Provider value={{ user, setUser }}>{children}</sessionContext.Provider>;
}

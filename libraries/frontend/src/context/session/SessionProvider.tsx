import { sessionContext } from './';
import React, { useState } from 'react';
import { User } from 'instinct-interfaces';
import { ContextProvidersProps } from '../ContextProviders.types';

export function SessionContextProvider({ children }: ContextProvidersProps) {
  const [user, setUser] = useState<User>();
  const [banned, setBanned] = useState(false);
  const [online, setOnline] = useState(false);

  return (
    <sessionContext.Provider value={{ user, setUser, online, setOnline, banned, setBanned }}>
      {children}
    </sessionContext.Provider>
  );
}

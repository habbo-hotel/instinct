import React, { useState } from 'react';
import { sessionService } from 'services';
import { User } from 'instinct-interfaces';
import { SessionContext, SessionTypes, SessionProviderProps, defaultSessionContext } from './';

export function SessionContextProvider({ children }: SessionProviderProps) {
  const [state, setState] = useState<SessionTypes>(defaultSessionContext);

  async function login(username: string, password: string): Promise<User> {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const user: User = await sessionService.attemptBearerToken(authToken);
    setState((_) => ({
      ..._,
      user,
      startedAt: new Date(),
    }));
    return user;
  }

  function logout(): void {
    sessionService.logout();
    setState(defaultSessionContext);
  }

  return <SessionContext.Provider value={{ ...state, login, logout }}>{children}</SessionContext.Provider>;
}

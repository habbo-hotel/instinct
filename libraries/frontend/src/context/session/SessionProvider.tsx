import React, { useState } from 'react';
import { sessionService } from 'services';
import { User } from 'instinct-interfaces';
import { sessionContext, SessionContext, SessionProviderProps, defaultSessionContext } from './';

export function SessionContextProvider({ children }: SessionProviderProps) {
  const [state, setState] = useState<SessionContext>(defaultSessionContext);

  async function login(username: string, password: string): Promise<User> {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const user: User = await sessionService.attemptBearerToken(authToken);
    forceStart(user);
    return user;
  }

  function logout(): void {
    sessionService.logout();
    setState(defaultSessionContext);
  }

  function forceStart(user: User): void {
    setState({
      user,
      startedAt: new Date(),
    });
  }

  return <sessionContext.Provider value={{ ...state, login, logout, forceStart }}>{children}</sessionContext.Provider>;
}

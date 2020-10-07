import React, { useState } from 'react';
import { sessionService } from 'services';
import { User } from 'instinct-interfaces';
import { ContextProvidersProps } from '../ContextProviders.types';
import { sessionContext, defaultSessionContext, UserSession } from './';

export function SessionContextProvider({ children }: ContextProvidersProps) {
  const [session, setSession] = useState<UserSession | undefined>(undefined);

  async function init(): Promise<void> {
    const session: User | undefined = await sessionService.init();

    if (session) {
      forceStart(session);
    } else {
      logout();
    }
  }

  init();

  async function login(username: string, password: string): Promise<User> {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const user: User = await sessionService.attemptBearerToken(authToken);
    forceStart(user);
    return user;
  }

  function logout(): void {
    sessionService.logout();
    setSession(defaultSessionContext);
  }

  function forceStart(user: User): void {
    setSession({
      user,
      startedAt: new Date(),
    });
  }

  return (
    <sessionContext.Provider value={{ ...session, login, logout, forceStart, init }}>
      {children}
    </sessionContext.Provider>
  );
}

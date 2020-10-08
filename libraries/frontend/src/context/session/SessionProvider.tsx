import { sessionContext } from './';
import React, { useState } from 'react';
import { sessionService } from 'services';
import { User } from 'instinct-interfaces';
import { redirect } from '../../components/utility/router';
import { ContextProvidersProps } from '../ContextProviders.types';

export function SessionContextProvider({ children }: ContextProvidersProps) {
  const [user, setUser] = useState<User>();

  async function init(): Promise<void> {
    const session: User | undefined = await sessionService.init();

    if (session) {
      console.log('Session Context - Starting Session');
      forceStart(session);
    } else {
      console.log('Session Context - Logging Out');
      sessionService.logout();
    }
  }

  async function login(username: string, password: string): Promise<void> {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const userData: User = await sessionService.attemptBearerToken(authToken);
    setUser(userData);
    redirect('home');
  }

  function logout(): void {
    sessionService.logout();
    setUser(undefined);
  }

  function forceStart(user: User): void {
    setUser(user);
  }

  return <sessionContext.Provider value={{ user, login, logout, init }}>{children}</sessionContext.Provider>;
}

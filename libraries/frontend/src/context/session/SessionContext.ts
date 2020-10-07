import { createContext } from 'react';
import { SessionContext } from './';
import { exampleUser, User } from 'instinct-interfaces';

export const sessionContext = createContext<SessionContext>({
  setStore: () => {},
  login: async (username: string, password: string) => exampleUser,
  logout: () => {},
  forceStart: (user: User) => {},
});

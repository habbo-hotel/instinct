import { createContext } from 'react';
import { SessionTypes } from './';
import { exampleUser, User } from 'instinct-interfaces';

export const SessionContext = createContext<SessionTypes>({
  setStore: () => {},
  login: async (username: string, password: string) => exampleUser,
  logout: () => {},
  forceStart: (user: User) => {},
});

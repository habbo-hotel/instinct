import { SessionTypes } from './';
import { createContext } from 'react';
import { exampleUser, User } from 'instinct-rp-interfaces';

export const SessionContext = createContext<SessionTypes>({
  setStore: () => {},
  login: async (username: string, password: string) => exampleUser,
  logout: () => {},
  forceStart: (user: User) => {},
});

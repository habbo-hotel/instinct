import { User } from 'instinct-interfaces';

export interface SessionContext {
  user?: User;
  setUser: (user?: User) => void;
}

export const defaultSessionContext: SessionContext = {
  user: undefined,
  setUser: (user?: User) => {},
};

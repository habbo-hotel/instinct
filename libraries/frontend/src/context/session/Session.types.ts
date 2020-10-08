import { User } from 'instinct-interfaces';

export interface SessionContext {
  user?: User;
  online: boolean;
  setUser: (user?: User) => void;
  setOnline: (isOnline: boolean) => void;
}

export const defaultSessionContext: SessionContext = {
  user: undefined,
  online: false,
  setUser: (user?: User) => {},
  setOnline: (isOnline: boolean) => {},
};

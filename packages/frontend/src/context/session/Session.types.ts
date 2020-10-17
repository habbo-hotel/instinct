import {User} from '@instinct/interface';

export interface SessionContext {
  user?: User;
  online: boolean;
  banned: boolean;
  setUser: (user?: User) => void;
  setOnline: (isOnline: boolean) => void;
  setBanned: (banned: boolean) => void;
}

export const defaultSessionContext: SessionContext = {
  user: undefined,
  online: false,
  banned: false,
  setUser: (user?: User) => {},
  setOnline: (isOnline: boolean) => {},
  setBanned: (banned: boolean) => {},
};

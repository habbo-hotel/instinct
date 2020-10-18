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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (user?: User) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOnline: (isOnline: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBanned: (banned: boolean) => {},
};

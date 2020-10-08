import { User } from 'instinct-interfaces';

export interface SessionContext {
  user?: User;
  init?(): Promise<void>;
  login?(username: string, password: string): Promise<void>;
  logout?(): void;
}

export const defaultSessionContext: SessionContext = {
  user: undefined,
  init: undefined,
  login: undefined,
  logout: undefined,
};

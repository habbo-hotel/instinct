import { User } from 'instinct-interfaces';

export interface UserSession {
  user?: User;
  startedAt?: Date;
}

export interface SessionContext extends UserSession {
  setStore?: (changes: Partial<SessionContext>) => void;
  login?(username: string, password: string): Promise<User>;
  logout?(): void;
  forceStart?(user: User): void;
}

export const defaultSessionContext: SessionContext = {
  user: undefined,
  startedAt: undefined,
  setStore: undefined,
  login: undefined,
  logout: undefined,
  forceStart: undefined,
};

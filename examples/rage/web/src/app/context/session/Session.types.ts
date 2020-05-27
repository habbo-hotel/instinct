import { User } from 'instinct-rp-interfaces';

export interface UserSession {
  user?: User;
  startedAt?: Date;
}

export interface SessionTypes extends UserSession {
  setStore: (changes: Partial<SessionTypes>) => void;
  login(username: string, password: string): Promise<User>;
  logout(): void;
  forceStart(user: User): void;
}

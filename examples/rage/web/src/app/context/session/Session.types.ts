import { UserSession as UserSessionRP } from 'instinct-rp-interfaces';

export interface UserSession {
  session?: UserSessionRP;
  startedAt?: Date;
}

export interface SessionTypes extends UserSession {
  setStore: (changes: Partial<SessionTypes>) => void;
  login(username: string, password: string): Promise<UserSessionRP>;
  logout(): void;
  forceStart(user: UserSessionRP): void;
  refresh(): Promise<void>;
}

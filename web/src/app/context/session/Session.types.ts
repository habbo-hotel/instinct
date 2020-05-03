import { UserSession } from 'app/interface';
import { User } from 'instinct-interfaces';

export interface SessionTypes extends UserSession {
  setStore: (changes: Partial<SessionTypes>) => void;
  login(username: string, password: string): Promise<User>;
  logout(): void;
  forceStart(user: User): void;
}

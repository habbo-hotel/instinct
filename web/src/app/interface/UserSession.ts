import { User } from 'instinct-interfaces';

export interface UserSession {
  user?: User;
  startedAt?: Date;
}

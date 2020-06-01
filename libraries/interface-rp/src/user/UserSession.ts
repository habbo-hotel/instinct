import {exampleUser, User} from './User';

export interface UserSession {
  id: number;
  authorized: boolean;
  user: User;
}

export const exampleUserSession: UserSession = {
  id: 1,
  authorized: false,
  user: exampleUser,
}
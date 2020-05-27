import { User, UserProfile } from 'instinct-rp-interfaces';

export interface UserService {
  create(username: string, password: string, email: string, recaptcha: string): Promise<User>;

  getByUsername(username: string): Promise<UserProfile>;

  getByID(userID: number): Promise<User>;

  getMostCredits(): Promise<User[]>;

  getMostPixels(): Promise<User[]>;

  getMostPoints(): Promise<User[]>;
}

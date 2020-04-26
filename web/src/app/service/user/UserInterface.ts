import { User, UserProfile } from 'fashionkilla-interfaces';

export interface UserInterface {
  create(username: string, password: string, email: string): Promise<User>;

  getByUsername(username: string): Promise<UserProfile>;

  getByID(userID: number): Promise<User>;

  getMostCredits(): Promise<User[]>;

  getMostPixels(): Promise<User[]>;

  getMostPoints(): Promise<User[]>;
}

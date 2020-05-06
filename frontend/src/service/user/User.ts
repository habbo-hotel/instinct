import { UserTypes } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from '../../BackendAPI';
import { User, UserProfile } from 'instinct-interfaces';

export class UserService implements UserTypes {
  async create(username: string, password: string, email: string): Promise<User> {
    const user: AxiosResponse<User> = await backendAPI.post('users', { username, password, email });
    return user.data;
  }

  async getByUsername(username: string): Promise<UserProfile> {
    const user: AxiosResponse<UserProfile> = await backendAPI.get(`users/profile/${username}`);
    return user.data;
  }

  async getByID(userID: number): Promise<User> {
    const user: AxiosResponse<User> = await backendAPI.get(`users/${userID}`);
    return user.data;
  }

  async getMostCredits() {
    const users: AxiosResponse<User[]> = await backendAPI.get('users/leaderboard/credits');
    return users.data;
  }

  async getMostPixels() {
    const users: AxiosResponse<User[]> = await backendAPI.get('users/leaderboard/pixels');
    return users.data;
  }

  async getMostPoints() {
    const users: AxiosResponse<User[]> = await backendAPI.get('users/leaderboard/points');
    return users.data;
  }
}

export const userService: UserTypes = new UserService();

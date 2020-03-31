import { UserInterface } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from '../../BackendAPI';
import { User } from 'fashionkilla-interfaces';

export class UserSession implements UserInterface {

  async create(username: string, password: string, email: string): Promise<User> {
    const user: AxiosResponse<User> = await backendAPI.post('users', { username, password, email });
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

export const userSession: UserInterface = new UserSession();

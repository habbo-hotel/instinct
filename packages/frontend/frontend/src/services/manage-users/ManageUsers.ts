import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {ManageUsersService} from './ManageUsers.types';
import {InternalUser, InternalUserDTO} from '@instinct-prj/interface';

export class ManageUsersServiceImplementation implements ManageUsersService {
  async getAll() {
    const users: AxiosResponse<InternalUser[]> = await backendAPI.get(
      'users/manage'
    );
    return users.data;
  }

  async create(internalUserDTO: InternalUserDTO) {
    const newUser: AxiosResponse<InternalUser> = await backendAPI.post(
      'users/manage',
      internalUserDTO
    );
    return newUser.data;
  }

  async update(userID: number, internalUserDTO: Partial<InternalUserDTO>) {
    const updatedUser: AxiosResponse<InternalUser> = await backendAPI.patch(
      `users/manage/${userID}`,
      internalUserDTO
    );
    return updatedUser.data;
  }

  async delete(userID: number) {
    await backendAPI.delete(`users/manage/${userID}`);
  }
}

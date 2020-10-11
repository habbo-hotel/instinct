import * as Random from 'randomstring';
import {UserEntity} from '../database';
import {Injectable} from '@nestjs/common';
import {UserRepository} from '../database/entity/user';

@Injectable()
export class UserService {
  readonly eagerRelations: Array<keyof UserEntity> = ['rank', 'joinedGroups', 'badges', 'rooms', 'friends', 'bans'];

  constructor(private readonly userRepo: UserRepository) {}

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(50) + '_' + userID;
    await this.userRepo.updateByID(userID, {authTicket});
    return authTicket;
  }
}

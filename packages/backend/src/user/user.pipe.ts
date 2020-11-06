import {UserEntity, UserRepository} from '../database/user';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userRepo: UserRepository) {}

  async transform(userID: number): Promise<UserEntity> {
    try {
      return await this.userRepo.getByID(userID);
    } catch {
      throw new NotFoundException('User does not exist');
    }
  }
}

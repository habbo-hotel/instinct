import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userRepo: UserRepository) {}

  async transform(userID: number): Promise<UserEntity> {
    try {
      return await this.userRepo.findOneByIDOrFail(userID);
    } catch {
      throw new NotFoundException('User does not exist');
    }
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserRepository } from '../database/rage/user/user';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {

  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {}

  async transform(userID: number): Promise<UserEntity> {
    try {
      return await this.userRepo.findOneByIDOrFail(userID);
    } catch {
      throw new NotFoundException('User does not exist');
    }
  }
}

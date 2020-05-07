import { UserService } from './user.service';
import { UserEntity } from '../database/entity';
import { PipeTransform, Injectable, ArgumentMetadata, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userService: UserService) {}

  async transform(userID: number, metadata: ArgumentMetadata): Promise<UserEntity> {
    try {
      return await this.userService.getByID(userID);
    } catch {
      throw new NotFoundException('User does not exist');
    }
  }
}

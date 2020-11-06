import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../base.repository';
import {UserForgotPasswordEntity} from './forgot-password.entity';

@Injectable()
export class UserForgotPasswordRepository extends BaseRepository<
  UserForgotPasswordEntity
> {
  constructor() {
    super(UserForgotPasswordEntity, []);
  }
}

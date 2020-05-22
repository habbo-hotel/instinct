import {Request} from 'express';
import {UserEntity} from '../database/rage/user/user/user.entity';

export interface RequestWithSession extends Request {
  user: UserEntity;
}

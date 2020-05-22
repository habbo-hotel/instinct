import {Request} from 'express';
import {UserEntity} from '../database/entity/user';

export interface RequestWithSession extends Request {
  user: UserEntity;
}

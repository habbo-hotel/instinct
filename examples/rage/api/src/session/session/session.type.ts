import {Request} from 'express';
import {UserEntity} from '../../database/rage/user/user/user.entity';
import {UserSessionEntity} from '../../database/rage/user/user-session/user-session.entity';

export interface BackendUserSession extends Omit<UserSessionEntity, 'user'> {
  user: UserEntity;
}

export interface RequestWithSession extends Request {
  user: BackendUserSession;
}

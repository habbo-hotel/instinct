import {userWire} from '../user/user.wire';
import {UserSession} from 'instinct-rp-interfaces';
import {UserSessionEntity} from './user-session.entity';

export function userSessionWire(userSessionEntity: UserSessionEntity): UserSession {
  return {
    id: userSessionEntity.id!,
    authorized: userSessionEntity.authorized === 1,
    user: userWire(userSessionEntity.user!),
  }
}
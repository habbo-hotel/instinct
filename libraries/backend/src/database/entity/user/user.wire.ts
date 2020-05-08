import * as Moment from 'moment';
import {rankWire} from '../rank';
import {UserEntity} from './user.entity';
import {User} from 'instinct-interfaces';

export function userWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    username: userEntity.username,
    motto: userEntity.motto!,
    credits: userEntity.credits,
    pixels: userEntity.pixels,
    points: userEntity.points,
    online: userEntity.online === 1,
    figure: userEntity.figure,
    joinDate: Moment.unix(userEntity.accountCreated).toISOString(),
    lastLoginDate: Moment.unix(userEntity.lastLogin).toISOString(),
    rank: userEntity.rank !== undefined ? rankWire(userEntity.rank!) : undefined,
  };
}

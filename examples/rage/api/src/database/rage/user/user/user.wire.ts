import * as Moment from 'moment';
import {rankWire} from '../../../entity/rank';
import {gangWire} from '../../../entity/gang';
import {UserEntity} from './user.entity';
import {User} from 'instinct-rp-interfaces';
import {businessJobWire} from '../../../entity/business';

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
    lastLoginDate: Moment.unix(userEntity.lastOnline).toISOString(),
    rank: userEntity.rank !== undefined ? rankWire(userEntity.rank!) : undefined,
    gang: userEntity.rpStats?.gang ? gangWire(userEntity.rpStats.gang) : undefined,
    job: userEntity.rpStats?.job ? businessJobWire(userEntity.rpStats.job!) : undefined,
  };
}

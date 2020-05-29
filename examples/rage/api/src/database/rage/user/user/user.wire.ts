import * as Moment from 'moment';
import {UserEntity} from './user.entity';
import {User} from 'instinct-rp-interfaces';
import {rankWire} from '../../rank/rank.wire';
import {gangWire} from '../../gang/gang/gang.wire';
import {businessPositionWire} from '../../business/business-position/business-position.wire';

export function userWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    username: userEntity.username,
    motto: userEntity.motto!,
    credits: userEntity.credits,
    pixels: userEntity.pixels,
    points: userEntity.points,
    online: userEntity.online === '1',
    figure: userEntity.figure,
    youtube: userEntity.youtube,
    joinDate: Moment.unix(userEntity.accountCreated).toISOString(),
    lastLoginDate: Moment.unix(userEntity.lastOnline).toISOString(),
    rank: userEntity.rank !== undefined ? rankWire(userEntity.rank!) : undefined,
    gang: userEntity.rpStats?.gang ? gangWire(userEntity.rpStats.gang) : undefined,
    job: userEntity.rpStats?.job ? businessPositionWire(userEntity.rpStats.job!) : undefined,
  };
}

import * as Moment from 'moment';
import {Business} from 'instinct-rp-interfaces';
import {BusinessEntity} from './business.entity';
import { businessJobWire, roomWire, userWire } from '../';

export function businessWire(businessEntity: BusinessEntity): Business {
  return {
    id: businessEntity.id!,
    name: businessEntity.name,
    desc: businessEntity.description,
    user: userWire(businessEntity.user!),
    badge: businessEntity.badge,
    room: roomWire(businessEntity.room!),
    createdAt: Moment.unix(businessEntity.dateCreated).toISOString(),
    members: businessEntity.members ? businessEntity.members.map(member => userWire(member.user!)) : undefined,
    jobs: businessEntity.jobs ? businessEntity.jobs.map(businessJob => businessJobWire(businessJob)) : undefined,
  };
}

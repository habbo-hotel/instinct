import * as Moment from 'moment';
import {roomWire} from '../../room';
import {userWire} from '../../user';
import {Business} from 'instinct-rp-interfaces';
import {BusinessEntity} from './business.entity';

export function businessWire(businessEntity: BusinessEntity): Business {
  return {
    id: businessEntity.id!,
    name: businessEntity.name,
    desc: businessEntity.description,
    user: userWire(businessEntity.owner!),
    badge: businessEntity.badge,
    room: roomWire(businessEntity.room!),
    createdAt: Moment.unix(businessEntity.dateCreated).toISOString(),
    members: businessEntity.employees ? businessEntity.employees.map(employee => userWire(employee.user!)) : undefined,
    jobs: businessEntity.jobs ? businessEntity.jobs.map(businessJob => businessJobWire(businessJob)) : undefined,
  };
}
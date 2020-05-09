import * as Moment from 'moment';
import {roomWire, userWire} from '../';
import {Business} from 'instinct-rp-interfaces';
import {BusinessEntity} from './business.entity';

export function businessWire(businessEntity: BusinessEntity): Business {
  return {
    id: businessEntity.id!,
    name: businessEntity.name,
    desc: businessEntity.description,
    user: userWire(businessEntity.user!),
    badge: businessEntity.badge,
    room: roomWire(businessEntity.room!),
    createdAt: Moment.unix(businessEntity.dateCreated).toISOString(),
  };
}

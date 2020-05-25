import * as Moment from 'moment';
import {Business} from 'instinct-rp-interfaces';
import {BusinessEntity} from './business.entity';
import {userWire} from '../../user/user/user.wire';
import {businessPositionWire} from '../business-position/business-position.wire';

export function businessWire(businessEntity: BusinessEntity): Business {
  return {
    id: businessEntity.id!,
    name: businessEntity.name,
    desc: businessEntity.description,
    badge: businessEntity.badge,
    roomID: businessEntity.roomID,
    owner: userWire(businessEntity.owner!),
    createdAt: Moment.unix(businessEntity.dateCreated).toISOString(),
    positions: businessEntity.positions ? businessEntity.positions.map(businessJob => businessPositionWire(businessJob)) : undefined,
    totalEmployees: businessEntity.employees!.length,
  };
}

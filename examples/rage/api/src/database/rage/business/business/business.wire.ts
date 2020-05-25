import * as Moment from 'moment';
import { BusinessType } from './business.types';
import { Business, BusinessType as BusinessTypeWire } from 'instinct-rp-interfaces';
import { BusinessEntity } from './business.entity';
import { userWire } from '../../user/user/user.wire';
import { businessPositionWire } from '../business-position/business-position.wire';

const businessTypeMap: Record<BusinessType, BusinessTypeWire> = {
  [BusinessType.State]: BusinessTypeWire.Government,
  [BusinessType.Private]: BusinessTypeWire.Private,
}

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
    type: businessTypeMap[businessEntity.type],
    bankBalance: businessEntity.bankBalance,
    totalEmployees: businessEntity.employees!.length,
  };
}

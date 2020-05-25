import {getRepository} from 'typeorm';
import {BusinessJobRank} from 'instinct-rp-interfaces';
import {BusinessPositionEntity} from './business-position.entity';
import {BusinessEntity} from '../business/business.entity';
import {businessFactory} from '../business/business.factory';

export async function businessPositionFactory(changes?: Partial<BusinessPositionEntity>): Promise<BusinessPositionEntity> {
  const business: BusinessEntity = changes?.business ?? (await businessFactory());

  return getRepository(BusinessPositionEntity).save({
    id: undefined,
    business,
    rankID: 1,
    name: 'Officer',
    maleFigure: '-',
    femaleFigure: '-',
    salary: 100,
    payTime: 10,
    workRooms: '*',
    vacantSpots: 0,
    canHire: 0,
    canFire: 0,
    canPromote: 1,
    canDemote: 1,
    canAlert: 1,
    canSendHome: 1,
    rank: BusinessJobRank.Employee,
    applications: [],
    ...changes,
  });
}

import {getRepository} from 'typeorm';
import {BusinessJobEntity} from './business-job.entity';
import { BusinessJobRank } from 'instinct-rp-interfaces';
import {businessFactory, BusinessEntity} from '../business';

export async function businessJobFactory(changes?: Partial<BusinessJobEntity>): Promise<BusinessJobEntity> {
  const business: BusinessEntity = changes?.business ?? await businessFactory();

  return getRepository(BusinessJobEntity).save({
    id: undefined,
    business,
    rankID: 1,
    name: 'Officer',
    description: 'We arrest bad guys',
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

import { userWire } from '../user';
import { businessWire } from './business.wire';
import { BusinessJob } from 'instinct-rp-interfaces';
import { BusinessJobEntity, BusinessJobEnum } from './business-job.entity';

export function businessJobWire(businessJobEntity: BusinessJobEntity): BusinessJob {
  return {
    id: businessJobEntity.id!,
    businessID: businessJobEntity.businessID,
    business: businessJobEntity.business ? businessWire(businessJobEntity.business) : undefined,
    name: businessJobEntity.name,
    desc: businessJobEntity.description,
    salary: businessJobEntity.salary,
    rank: businessJobEntity.rank,
    workEverywhere: businessJobEntity.workEverywhere === BusinessJobEnum.Yes,
    users: businessJobEntity.users ? businessJobEntity.users.map(businessMember => userWire(businessMember.user!)) : undefined,
    vacantSpots: businessJobEntity.vacantSpots,
    applicationRequired: businessJobEntity.applicationRequired === BusinessJobEnum.Yes,
    maleUniform: businessJobEntity.lookH,
    femaleUniform: businessJobEntity.lookF,
  };
}
import { businessWire } from './business.wire';
import { BusinessJob } from 'instinct-rp-interfaces';
import { BusinessApplyType } from './business.entity';
import { BusinessJobEntity } from './business-job.entity';

export function businessJobWire(businessJobEntity: BusinessJobEntity, alreadyApplied?: boolean): BusinessJob {
  return {
    id: businessJobEntity.rankID,
    businessID: businessJobEntity.businessID,
    business: businessJobEntity.business ? businessWire(businessJobEntity.business) : undefined,
    name: businessJobEntity.name,
    desc: businessJobEntity.description,
    salary: businessJobEntity.salary,
    rank: businessJobEntity.rank,
    workEverywhere: businessJobEntity.workRooms === '*',
    vacantSpots: businessJobEntity.vacantSpots,
    applicationRequired: businessJobEntity.business?.applyType === BusinessApplyType.Apply,
    maleUniform: businessJobEntity.maleFigure,
    femaleUniform: businessJobEntity.femaleFigure,
    alreadyApplied,
  };
}
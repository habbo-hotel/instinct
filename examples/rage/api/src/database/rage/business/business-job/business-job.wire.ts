import {BusinessJob} from 'instinct-rp-interfaces';
import {BusinessJobEntity} from './business-job.entity';
import {businessWire, BusinessApplyType} from '../business';

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

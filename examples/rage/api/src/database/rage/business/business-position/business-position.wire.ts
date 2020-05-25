import {businessWire} from '../business/business.wire';
import {BusinessPositionEntity} from './business-position.entity';
import {BusinessApplyType} from '../business/business.types';
import { BusinessJob, BusinessJobRank } from 'instinct-rp-interfaces';

export function businessPositionWire(businessJobEntity: BusinessPositionEntity, alreadyApplied?: boolean): BusinessJob {
  return {
    id: businessJobEntity.rankID,
    businessID: businessJobEntity.businessID,
    business: businessJobEntity.business ? businessWire(businessJobEntity.business) : undefined,
    name: businessJobEntity.name,
    desc: 'DEPRECATED',
    salary: businessJobEntity.salary,
    rank: BusinessJobRank.Employee,
    workEverywhere: businessJobEntity.workRooms === '*',
    vacantSpots: businessJobEntity.vacantSpots,
    applicationRequired: businessJobEntity.business?.applyType === BusinessApplyType.Apply,
    maleUniform: businessJobEntity.maleFigure,
    femaleUniform: businessJobEntity.femaleFigure,
    alreadyApplied,
  };
}

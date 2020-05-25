import {businessWire} from '../business/business.wire';
import {BusinessPosition} from 'instinct-rp-interfaces';
import {BusinessApplyType} from '../business/business.types';
import {BusinessPositionEntity} from './business-position.entity';

export function businessPositionWire(businessJobEntity: BusinessPositionEntity, alreadyApplied?: boolean): BusinessPosition {
  return {
    id: businessJobEntity.rankID,
    businessID: businessJobEntity.businessID,
    business: businessJobEntity.business ? businessWire(businessJobEntity.business) : undefined,
    name: businessJobEntity.name,
    salary: businessJobEntity.salary,
    workEverywhere: businessJobEntity.workRooms === '*',
    vacantSpots: businessJobEntity.vacantSpots,
    applicationRequired: businessJobEntity.business?.applyType === BusinessApplyType.Apply,
    maleUniform: businessJobEntity.maleFigure,
    femaleUniform: businessJobEntity.femaleFigure,
    alreadyApplied,
  };
}

import { userWire } from '../user';
import {BusinessJob} from 'instinct-rp-interfaces';
import {BusinessJobEntity, BusinessJobWorkEveryWhere} from './business-job.entity';

export function businessJobWire(businessJobEntity: BusinessJobEntity): BusinessJob {
  return {
    id: businessJobEntity.id!,
    businessID: businessJobEntity.businessID,
    name: businessJobEntity.name,
    salary: businessJobEntity.salary,
    rank: businessJobEntity.rank,
    workEverywhere: businessJobEntity.workEverywhere === BusinessJobWorkEveryWhere.Yes,
    users: businessJobEntity.users ? businessJobEntity.users.map(businessMember => userWire(businessMember.user!)) : undefined,
  }
}
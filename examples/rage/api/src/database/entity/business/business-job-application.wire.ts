import { userWire } from '../user';
import { businessJobWire } from './business-job.wire';
import { BusinessJobApplication } from 'instinct-rp-interfaces';
import { BusinessJobApplicationEntity } from './business-job-application.entity';

export function businessJobApplicationWire(businessJobApplicationEntity: BusinessJobApplicationEntity): BusinessJobApplication {
  return {
    id: businessJobApplicationEntity.id!,
    user: userWire(businessJobApplicationEntity.user!),
    job: businessJobWire(businessJobApplicationEntity.job!),
    content: businessJobApplicationEntity.content,
    createdAt: businessJobApplicationEntity.createdAt.toISOString(),
  }
}
import {userWire} from '../../user/user/user.wire';
import {BusinessJobApplication} from 'instinct-rp-interfaces';
import {businessJobWire} from '../business-job/business-job.wire';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

export function businessJobApplicationWire(businessJobApplicationEntity: BusinessJobApplicationEntity): BusinessJobApplication {
  return {
    id: businessJobApplicationEntity.id!,
    user: userWire(businessJobApplicationEntity.user!),
    job: businessJobWire(businessJobApplicationEntity.job!),
    content: businessJobApplicationEntity.content,
    createdAt: businessJobApplicationEntity.createdAt.toISOString(),
  };
}

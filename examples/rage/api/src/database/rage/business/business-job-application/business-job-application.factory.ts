import {getRepository} from 'typeorm';
import {UserEntity} from '../../user/user/user.entity';
import {userFactory} from '../../user/user/user.factory';
import {BusinessJobEntity } from '../business-job/business-job.entity';
import {businessJobFactory} from '../business-job/business-job.factory';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

export async function businessJobApplicationFactory(changes?: Partial<BusinessJobApplicationEntity>): Promise<BusinessJobApplicationEntity> {
  const job: BusinessJobEntity = changes?.job ?? (await businessJobFactory());
  const user: UserEntity = changes?.user ?? (await userFactory());

  return getRepository(BusinessJobApplicationEntity).save({
    id: undefined,
    job,
    user,
    content: 'Test job application',
    ...changes,
  });
}

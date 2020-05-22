import {getRepository} from 'typeorm';
import { UserEntity, userFactory } from '../../user/user';
import {businessJobFactory, BusinessJobEntity} from '../business-job';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

export async function businessJobApplicationFactory(changes?: Partial<BusinessJobApplicationEntity>): Promise<BusinessJobApplicationEntity> {
  const job: BusinessJobEntity = changes?.job ?? await businessJobFactory();
  const user: UserEntity = changes?.user ?? await userFactory();

  return getRepository(BusinessJobApplicationEntity).save({
    id: undefined,
    job,
    user,
    content: 'Test job application',
    ...changes,
  });
}

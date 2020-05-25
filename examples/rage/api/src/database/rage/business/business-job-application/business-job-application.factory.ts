import {getRepository} from 'typeorm';
import {UserEntity} from '../../user/user/user.entity';
import {userFactory} from '../../user/user/user.factory';
import {BusinessPositionEntity} from '../business-position/business-position.entity';
import {businessPositionFactory} from '../business-position/business-position.factory';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

export async function businessJobApplicationFactory(changes?: Partial<BusinessJobApplicationEntity>): Promise<BusinessJobApplicationEntity> {
  const job: BusinessPositionEntity = changes?.job ?? (await businessPositionFactory());
  const user: UserEntity = changes?.user ?? (await userFactory());

  return getRepository(BusinessJobApplicationEntity).save({
    id: undefined,
    job,
    user,
    content: 'Test job application',
    ...changes,
  });
}

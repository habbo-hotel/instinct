import {EntityRepository, Repository} from 'typeorm';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

@EntityRepository(BusinessJobApplicationEntity)
export class BusinessJobApplicationRepository extends Repository<BusinessJobApplicationEntity> {
  readonly eagerRelations: string[] = [];
}

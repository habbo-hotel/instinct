import { EntityRepository, Repository } from 'typeorm';
import { BusinessJobEntity } from './business-job.entity';

@EntityRepository(BusinessJobEntity)
export class BusinessJobRepository extends Repository<BusinessJobEntity> {

  readonly eagerRelations: string[] = [];

}
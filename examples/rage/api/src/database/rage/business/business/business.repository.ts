import {BusinessEntity} from './business.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(BusinessEntity)
export class BusinessRepository extends Repository<BusinessEntity> {
  readonly eagerRelations: string[] = [];
}

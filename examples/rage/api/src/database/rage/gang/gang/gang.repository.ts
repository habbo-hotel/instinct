import { GangEntity } from './gang.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(GangEntity)
export class GangRepository extends Repository<GangEntity> {

  readonly eagerRelations: string[] = [];

}
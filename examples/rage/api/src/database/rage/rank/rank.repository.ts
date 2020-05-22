import { RankEntity } from './rank.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RankEntity)
export class RankRepository extends Repository<RankEntity> {

  readonly eagerRelations: string[] = [];

}
import { GangRankEntity } from './gang-rank.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(GangRankEntity)
export class GangRankRepository extends Repository<GangRankEntity> {

  readonly eagerRelations: string[] = [];

}
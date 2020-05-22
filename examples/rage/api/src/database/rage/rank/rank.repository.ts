import {RankEntity} from './rank.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(RankEntity)
export class RankRepository extends Repository<RankEntity> {
  readonly eagerRelations: string[] = [];

  getAll(): Promise<RankEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    });
  }

  getAllStaff(): Promise<RankEntity[]> {
    return this.find({
      where: {},
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(rankID: number): Promise<RankEntity> {
    return this.findOneOrFail({
      where: {
        id: rankID,
      },
      relations: this.eagerRelations,
    });
  }
}
